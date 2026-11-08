import {
  useConversationControls,
  useConversationStatus
} from "@elevenlabs/react"

import type {TokenResult} from "../api/getToken"

type AgentProps = {
  getToken: (code: string) => Promise<TokenResult>,
  setError: 
  code: string
}

export default function Agent({getToken, code}: AgentProps) {

  const {startSession, endSession} = useConversationControls()
  const {status} = useConversationStatus()

  async function start() {
    const tokenRes = await getToken(code)
    if (tokenRes.ok) {

      startSession({conversationToken: tokenRes.token,
      dynamicVariables: {excerpt: excerpt}})
    } else {

    }
    

    } catch (e){
      return
    }
    
    
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