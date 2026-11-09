import {
  useConversationControls,
  useConversationStatus
} from "@elevenlabs/react"

import type {TokenResult, TokenFailureReason} from "../api/getToken"
import {excerpt} from "../texts.ts"

type AgentProps = {
  getToken: (code: string) => Promise<TokenResult>,
  setErrorReason: (reason: TokenFailureReason | null) => void, // not exact React usestate typing, but enough for agent.tsx
  code: string
}

export default function Agent({getToken, setErrorReason, code}: AgentProps) {

  const {startSession, endSession} = useConversationControls()
  const {status} = useConversationStatus()

  async function start() {
    const tokenRes = await getToken(code)
    
    if (tokenRes.ok) {
      setErrorReason(null)
      startSession({conversationToken: tokenRes.token,
      dynamicVariables: {excerpt: excerpt}})
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