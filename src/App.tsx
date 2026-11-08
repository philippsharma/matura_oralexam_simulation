
import './App.css'

import {ConversationProvider} from "@elevenlabs/react"
import {useState} from "react"

import Agent from "./components/Agent.tsx"
import CodeForm from "./components/CodeForm.tsx"
import getToken from "./api/getToken.ts"
import { germanErrorMsg } from './texts.ts'

import type {TokenResult, ErrorReason} from "./api/getToken.ts"


const excerpt: string = `

En équilibre sur le fil que Louise venait de tendre, les mains serrées sur le balancier, j'ai regardé devant moi, l'oeil fixé sur la fin de son récit.
Louise venait enfin de prononcer le nom de Simon. Il faisait la première apparition officielle, après s'être glissé dans tous ces images, 
lutteurs anonymes, garçons brutaux, tyrans de cour de récréation. Le frère que je m'étais inventé, celui qui avait rompu ma solitude, ce grand frêre fantôme 
avait donc existé. Louise l'avait connu, aimé. Avant d'être le mien, Joseph avait été son grand-père, Georges, Esther, Marcel, Elise, sa famille proche. Avant de 
devenir ma mère, Tania avait été sa tante. Comment l'appelait il, quels gestes avait-elle pour lui?
`



function App() {

  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  async function saveCode(formData: FormData): Promise<void> {
    const code = formData.get("code");
    if (typeof code != "string") return; // seems like a weird handle idk maybe change
    
    const tokenRes: TokenResult = await getToken(code)
    if (tokenRes.ok) {
      setCode(code);
      setError(""); //maybe call changeErrorMsg instead still up to change
    }
    else setError(tokenRes.reason);
  }

  function changeErrorMsg(errorReason: ErrorReason ){
    const displayedErrorMsg = germanErrorMsg[errorReason]
    setError(displayedErrorMsg)
  }


  return (
    <>
      <ConversationProvider
       onError={(error) => console.error("Conversation error:", error)}
      >
        {code ? <Agent getToken={getToken} code={code}/> : <CodeForm onAction={saveCode}/>}
        {error ? <ErrorText error={error}/> : null}
        
      </ConversationProvider>
    </>
  )
}

function ErrorText({error}: {error: string}) {
  return <p>{error}</p>
}



export default App
