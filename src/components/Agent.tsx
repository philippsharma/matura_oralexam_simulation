import {
  useConversationControls,
  useConversationStatus
} from "@elevenlabs/react"

import type {TokenFailureReason} from "../api/getToken"
import getToken from "../api/getToken"
import type {ExamContext} from "../literature/types.ts"


type AgentProps = {
  setErrorReason: (reason: TokenFailureReason | null) => void, // not exact React usestate typing, but enough for agent.tsx
  code: string, 
  examContext: ExamContext
}

export default function Agent({setErrorReason, code, examContext}: AgentProps) {

  const {startSession, endSession} = useConversationControls()
  const {status} = useConversationStatus()

  async function start() {
    const tokenRes = await getToken(code)
    
    if (tokenRes.ok) {
      setErrorReason(null)
      startSession({conversationToken: tokenRes.token,
      dynamicVariables: examContext})
    } else {
      setErrorReason(tokenRes.reason)
    }
    
  
  }
  
  if (status === "connected"){
    return <button onClick={endSession}>End</button>
  }
  else {
    return <button onClick={start}>
      Start
    </button>
  }
} 