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

type ExamStage = "idle" | "preparation" | "exam" | "finished"

export default function Exam({code, setErrorReason}: ExamProps) {

  const [stage, setStage] = useState<ExamStage>("idle")
  const [excerpt, setExcerpt] = useState<Excerpt | null>(null)
  const [currentWork] = useState<LiteratureWork>(() => normalizeWork(lavare)) //later choosable work, but now lavare

 

  function startPreparation(): void {
    setExcerpt(getRandomExcerpt(currentWork))
    setStage("preparation")
  }

  return (
    <>
      {stage === "idle" && <button onClick={startPreparation}>Start preparation</button>}
      {excerpt && (
        <>
          {stage === "preparation" && <button onClick={() => setStage("exam")}>Start exam</button>}
          {stage === "exam" && (
            <Agent code={code} setErrorReason={setErrorReason} examContext={buildExamContext(currentWork, excerpt)}/>
          )}
          {(stage === "preparation" || stage === "exam") && <Display excerptText={excerpt.text}/>}
        </>
      )}
      {stage === "finished" && <p>Exam finished</p>}
    </>
  )
}
