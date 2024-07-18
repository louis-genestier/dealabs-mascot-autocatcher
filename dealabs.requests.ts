import { config } from "./config";

export const getNewMascot = async () => {
  const response = await fetch(`${config.DEALABS_API_ENDPOINT}/see`, {
    headers: {
      cookie: config.COOKIE_HEADER,
    },
  });

  return (await response.json()) as {
    data: {
      content?: string;
    };
    status: string;
  };
};

export const claimMascot = async (mascotCardId: string) => {
  const response = await fetch("https://www.dealabs.com/mascotcards/claim", {
    method: "POST",
    headers: {
      cookie: config.COOKIE_HEADER,
    },
    body: new URLSearchParams({
      key: `mascotcards-${mascotCardId}`,
    }),
  });

  return (await response.json()) as { status: string };
};
