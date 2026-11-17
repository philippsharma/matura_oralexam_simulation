import {useState} from "react"

import Display from "./Display.tsx"
import Agent from "./Agent.tsx"

import type {Excerpt, LiteratureWork} from "../literature/types.ts"
import {lavare} from "../literature/lavare.ts"

import type { TokenFailureReason, TokenResult } from "../api/getToken.ts"

type ExamProps = {
  code: string;
  getToken: (code: string) => Promise<TokenResult>;
  setErrorReason: (reason: TokenFailureReason | null) => void;
}


function getExcerpt(work: LiteratureWork): Excerpt {
  const index = Math.floor(Math.random() * work.excerpts.length);
  return work.excerpts[index];
}


export default function Exam({code, getToken, setErrorReason}: ExamProps) {

  const [excerpt, setExcerpt] = useState<Excerpt | null>(null)
  const [currentWork] = useState<LiteratureWork>(lavare) //later choosable work, but now lavare

 

  function startExam(): void {
    setExcerpt(getExcerpt(currentWork))
  }

  return (
    <>
      <button onClick={startExam}>Start exam</button>
      {excerpt && (
        <>
          <Agent getToken={getToken} code={code} setErrorReason={setErrorReason} excerptText={excerpt.text}/>
          <Display excerptText={excerpt.text}/>
        </>
      )}
      
    </>
  )
}
