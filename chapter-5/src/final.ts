class MessageQueue {
  private constructor(private message: string[]) {} //ここでfinalをシミュレート
  static create(messages: string[]) {
    return new MessageQueue(messages)
  }
}

// class BadQueue extends MessageQueue {}

// new MessageQueue([])

MessageQueue.create([])
