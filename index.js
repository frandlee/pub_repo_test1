// call slack/webhook to send a message
import { IncomingWebhook } from "@slack/webhook";
slackMsg = {}

const webhook = new IncomingWebhook(process.env.SLACK_WEBHOOK_URL);
slackMsg.send = async (msg) => {
  await webhook.send({
    text: msg,
  });
}

//test
