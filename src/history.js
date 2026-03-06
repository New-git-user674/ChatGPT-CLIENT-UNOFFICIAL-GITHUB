export default class Memory {
  constructor() {
    this.messages = [];
  }

  add(role, content) {
    this.messages.push({
      role,
      content
    });
  }

  getHistory() {
    return this.messages;
  }

  clear() {
    this.messages = [];
  }
}
