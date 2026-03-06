import ChatGPTClient from "./client.js";

async function run() {
  const chat = new ChatGPTClient();

  const reply = await chat.sendMessage(
    "Explain recursion like I'm five."
  );

  console.log("ChatGPT:", reply);
}

run();
