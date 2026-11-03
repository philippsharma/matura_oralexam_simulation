import {
  ConversationProvider,
  useConversationControls,
  useConversationStatus
} from "@elevenlabs/react"

import './App.css'

const excerpt: string = `

En équilibre sur le fil que Louise venait de tendre, les mains serrées sur le balancier, j'ai regardé devant moi, l'oeil fixé sur la fin de son récit.
Louise venait enfin de prononcer le nom de Simon. Il faisait la première apparition officielle, après s'être glissé dans tous ces images, 
lutteurs anonymes, garçons brutaux, tyrans de cour de récréation. Le frère que je m'étais inventé, celui qui avait rompu ma solitude, ce grand frêre fantôme 
avait donc existé. Louise l'avait connu, aimé. Avant d'être le mien, Joseph avait été son grand-père, Georges, Esther, Marcel, Elise, sa famille proche. Avant de 
devenir ma mère, Tania avait été sa tante. Comment l'appelait il, quels gestes avait-elle pour lui?
`

function App() {

  return (
    <>
      <ConversationProvider
       onError={(error) => console.error("Conversation error:", error)}
      >
        <Agent/>
      </ConversationProvider>
    </>
  )
}



function Agent(){
  const {startSession, endSession} = useConversationControls()
  const {status} = useConversationStatus()

  async function start() {
    const res = await fetch("/api/token")
    const {token} = await res.json()
    startSession({conversationToken: token,
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

export default App
