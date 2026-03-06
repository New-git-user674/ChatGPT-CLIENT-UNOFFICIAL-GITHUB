export const tools = [
  {
    type: "function",
    function: {
      name: "get_time",
      description: "Get the current server time",
      parameters: {
        type: "object",
        properties: {}
      }
    }
  }
];

export async function runTool(name, args) {
  if (name === "get_time") {
    return {
      time: new Date().toISOString()
    };
  }

  throw new Error("Unknown tool");
}
