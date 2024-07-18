# Dealabs Rennes Autocatcher

This project is designed to catch mascots _rennes_ cards on the Dealabs website. It uses a Discord webhook to send notifications when a new card is claimed. From what I saw it will catch ~1 _renne_ per 1 hour/45 minutes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Bun v1.0.7 or later. You can download it from [Bun's official website](https://bun.sh).

## Installation

To set up the project environment, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/louis-genestier/dealabs-mascot-autocatcher.git
```

2. Navigate to the project directory:

```bash
cd dealabs-mascot-autocatcher
```

3. Install dependencies using Bun:

```bash
bun install
```

## Configuration

Before running the application, you need to set up the necessary environment variables. Create a `.env` file in the root directory of the project and add the following variables:

```env
DISCORD_WEBHOOK_URL=your_discord_webhook_url
DEBUG=false
SLEEPING_TIME=5000
COOKIE_HEADER=your_cookie_header
```

- `DISCORD_WEBHOOK_URL`: The webhook URL to send notifications to a Discord channel.
- `DEBUG`: Set to `true` for detailed logs or `false` for minimal logging.
- `SLEEPING_TIME`: The time to wait between each request in milliseconds (I usually set it to 5000).
- `COOKIE_HEADER`: The cookie header to use for the request. You can find it in the developer tools of your browser.

## Running the Application

To launch the application, run the following command:

```bash
bun run start
```

The script will be up and running, catching mascots and sending notifications to the Discord channel.

Bonne chasse ! 🦌
