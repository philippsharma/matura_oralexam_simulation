import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus
} from "@elevenlabs/react"


export default function Agent({getToken}: {getToken: ()=>Promise<string | null>}){
  const {startSession, endSession} = useConversationControls()
  const {status} = useConversationStatus()

  async function start() {
    try {
      const token = await getToken()
      if (!token || !(typeof token == "string")) throw new Error
    } catch {
      return
    }
    
    
    
    startSession({conversationToken: await getToken(),
    dynamicVariables: {excerpt: excerpt}
  })}
  

  if (status === "connected"){
    return <button onClick={endSession}>End</button>
  }
  else {
    return <button onClick={start}>
      Start
    </button>
  }
} 