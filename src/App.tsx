import { useState } from 'react'
import {
  ConversationProvider, 
  useConversationControls,
  useConversationStatus
} from "@elevenlabs/react"

import './App.css'

function App() {

  return (
    <>
      <ConversationProvider>
        <Agent/>
      </ConversationProvider>
    </>
  )
}

function Agent(){
  const {startSession, endSession} = useConversationControls()
  const {status} = useConversationStatus()
  if (status === "connected"){
    return <button onClick={endSession}>End</button>
  }
  else {
    return <button onClick={()=>startSession({agentId: "agent_3401m621cenrf8fvmvmy2adkfhzv"})}>
      Start
    </button>
  }
} 

export default App
