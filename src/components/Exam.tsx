import {useState} from "react"

import Display from "./Display.tsx"
import Agent from "./Agent.tsx"

import type {Excerpt, LiteratureWork} from "../literature/types.ts"
import {lavare} from "../literature/lavare.ts"
import {normalizeWork, getRandomExcerpt, buildExamContext} from "../literature/literatureHelpers.ts"

import type { TokenFailureReason} from "../api/getToken.ts"

type ExamProps = {
  code: string;
  setErrorReason: (reason: TokenFailureReason | null) => void;
}


export default function Exam({code, setErrorReason}: ExamProps) {

  const [excerpt, setExcerpt] = useState<Excerpt | null>(null)
  const [currentWork] = useState<LiteratureWork>(() => normalizeWork(lavare)) //later choosable work, but now lavare

 

  function startExam(): void {
    setExcerpt(getRandomExcerpt(currentWork))
  }

  return (
    <>
      <button onClick={startExam}>Start exam</button>
      {excerpt && (
        <>
          <Agent code={code} setErrorReason={setErrorReason} examContext={buildExamContext(currentWork, excerpt)}/>
          <Display excerptText={excerpt.text}/>
        </>
      )}
      
    </>
  )
}
