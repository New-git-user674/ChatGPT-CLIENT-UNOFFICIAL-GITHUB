import ChatClient from "./chatClient.js";

const chat = new ChatClient();

async function main() {

  const reply = await chat.sendMessage(
    "What time is it?"
  );

  console.log("\nReply:", reply);

  console.log("\nStreaming example:\n");

  await chat.streamMessage(
    "Explain artificial intelligence in 2 sentences."
  );
}

main();
