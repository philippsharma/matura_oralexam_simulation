
import './App.css'

import {ConversationProvider} from "@elevenlabs/react"
import {useState} from "react"

import Agent from "./components/Agent.tsx"
import ErrorText from './components/ErrorText.tsx'
import CodeForm from "./components/CodeForm.tsx"
import getToken from "./api/getToken.ts"


import type {TokenResult, TokenFailureReason} from "./api/getToken.ts"

function App() {

  const [code, setCode] = useState("");
  const [errorReason, setErrorReason] = useState<TokenFailureReason | null>(null); //maybe change later on to a more general type capturing different errors, not only token errors

  async function saveCode(formData: FormData): Promise<void> {
    const code = formData.get("code");
    if (typeof code != "string") return; // seems like a weird handle idk maybe change
    
    const tokenRes: TokenResult = await getToken(code)
    if (tokenRes.ok) {
      setCode(code);
      setErrorReason(null); //maybe call changeErrorMsg instead still up to change
    }
    else setErrorReason(tokenRes.reason);
  }

  return (
    <>
      <ConversationProvider
       onError={(error) => console.error("Conversation error:", error)}
      >
        {code ? <Agent getToken={getToken} code={code} setErrorReason={setErrorReason}/> 
        : <CodeForm onAction={saveCode}/>}
        {errorReason ? <ErrorText errorReason={errorReason}/> : null}
        
      </ConversationProvider>
    </>
  )
}


export default App
