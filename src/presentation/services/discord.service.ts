import { Envs } from "../../config";

export class DiscordService {
  private readonly discordWebhookUrl = Envs.DISCORD_WEBHOOK;

  constructor() {}

  async notify(message: string) {
    const body = {
      content: message,
      embeds: [
        {
          image: {
            url: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa24yam16aHI1NmQ5bDJtbW5vbHRuNzY1ajF3ZDQ1ZHV5Ym80eGVoMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif",
          },
        },
      ],
    };

    const res = await fetch(this.discordWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.log("Error sending message to discord");
      return false;
    }

    return true;
  }
}
