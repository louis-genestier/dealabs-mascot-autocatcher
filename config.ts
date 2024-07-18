import * as v from "valibot";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const EnvSchema = v.object({
  DISCORD_WEBHOOK_URL: v.pipe(v.string(), v.url()),
  SLEEPING_TIME: v.number(),
  COOKIE_HEADER: v.string(),
  DEBUG: v.optional(v.boolean(), false),
});

const parsedEnv = v.safeParse(EnvSchema, {
  DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
  SLEEPING_TIME: Number(process.env.SLEEPING_TIME),
  COOKIE_HEADER: process.env.COOKIE_HEADER,
  DEBUG: Boolean(process.env.DEBUG),
});

if (!parsedEnv.success) {
  throw new Error(
    `Invalid environment variables: ${parsedEnv.issues.map((i) => i.message).join(", ")}`
  );
}

export const config = {
  ...parsedEnv.output,
  DEALABS_API_ENDPOINT: "https://www.dealabs.com/mascotcards",
};
