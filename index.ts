import { WebhookClient } from "discord.js";
import { config } from "./config";
import pino from "pino";
import { claimMascot, getNewMascot } from "./dealabs.requests";

const webhookClient = new WebhookClient({
  url: config.DISCORD_WEBHOOK_URL,
});
const logger = pino();

while (true) {
  logger.info("Fetching API");
  try {
    const response = await getNewMascot();

    if (response.status !== "success") {
      if (response.data.content) {
        logger.info("New card available");

        config.DEBUG && logger.debug(response);

        const mascotCardId =
          response.data.content.match(/mascotcards-(\w+)/)?.[1];

        config.DEBUG && logger.debug(`Match mascotcard match: ${mascotCardId}`);

        if (mascotCardId) {
          const claimData = await claimMascot(mascotCardId);
          config.DEBUG && logger.debug("Claim mascot:", claimData);

          if (claimData.status === "error") {
            logger.error(`Failed claiming card ${mascotCardId}`, claimData);
          } else {
            logger.info(`Claimed card ${mascotCardId}`);

            await webhookClient.send({
              content: `New mascot card available: ${mascotCardId}`,
            });
          }
        }
      }
    } else {
      logger.info("No new card available");
    }
  } catch (e) {
    logger.error(e);
  }
  await new Promise((resolve) => setTimeout(resolve, config.SLEEPING_TIME));
}
