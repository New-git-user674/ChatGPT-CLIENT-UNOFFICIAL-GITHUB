const conversations = {}

export function addMessage(sessionId,message){

  if(!conversations[sessionId])
    conversations[sessionId] = []

  conversations[sessionId].push(message)

}

export function getConversation(sessionId){

  return conversations[sessionId] || []

}
