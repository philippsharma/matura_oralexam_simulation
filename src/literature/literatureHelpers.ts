import type {Excerpt, ExamContext, LiteratureWork} from "./types.ts"

// collapses line breaks and indentation from multi-line template literals into single spaces
const clean = (s: string) => s.replace(/\s+/g, " ").trim()

// returns a copy of the work with all texts cleaned, except excerpt.text, whose line breaks are part of the text
// feels kinda long-winded, maybe change later on
export function normalizeWork(work: LiteratureWork): LiteratureWork {
  return {
    id: work.id,
    title: clean(work.title),
    author: clean(work.author),
    publicationDate: clean(work.publicationDate),
    genre: clean(work.genre),
    importantCharacters: work.importantCharacters.map(c => ({
      name: clean(c.name),
      description: clean(c.description)
    })),
    plotSummary: clean(work.plotSummary),
    literaryMovement: clean(work.literaryMovement),
    historicalBackground: clean(work.historicalBackground),
    stylisticAspects: clean(work.stylisticAspects),
    themesAndMotifs: work.themesAndMotifs.map(clean),
    questions: work.questions.map(q => ({
      question: clean(q.question),
      answerShouldInclude: q.answerShouldInclude.map(clean)
    })),
    excerpts: work.excerpts.map(e => ({
      id: e.id,
      text: e.text,
      connectionToLiteratureWork: {
        location: clean(e.connectionToLiteratureWork.location),
        plotPointBefore: clean(e.connectionToLiteratureWork.plotPointBefore),
        plotPointAfter: clean(e.connectionToLiteratureWork.plotPointAfter),
        significance: clean(e.connectionToLiteratureWork.significance)
      },
      questions: e.questions.map(q => ({
        question: clean(q.question),
        answerShouldInclude: q.answerShouldInclude.map(clean)
      }))
    }))
  }
}

export function getRandomExcerpt(work: LiteratureWork): Excerpt {
  const index = Math.floor(Math.random() * work.excerpts.length)
  return work.excerpts[index]
}

// expects a normalized work (see normalizeWork)
// answerShouldInclude is left out on purpose: it is meant for grading, not for the examiner
export function buildExamContext(work: LiteratureWork, excerpt: Excerpt): ExamContext {
  return {
    title: work.title,
    author: work.author,
    genre: work.genre,
    publicationDate: work.publicationDate,
    literaryMovement: work.literaryMovement,
    historicalBackground: work.historicalBackground,
    stylisticAspects: work.stylisticAspects,
    plotSummary: work.plotSummary,
    importantCharacters: work.importantCharacters
      .map(c => `- ${c.name} : ${c.description}`)
      .join("\n"),
    themesAndMotifs: work.themesAndMotifs
      .map(t => `- ${t}`)
      .join("\n"),
    excerpt: excerpt.text,
    excerptLocation: excerpt.connectionToLiteratureWork.location,
    plotPointBefore: excerpt.connectionToLiteratureWork.plotPointBefore,
    plotPointAfter: excerpt.connectionToLiteratureWork.plotPointAfter,
    excerptSignificance: excerpt.connectionToLiteratureWork.significance,
    excerptQuestions: excerpt.questions
      .map(q => `- ${q.question}`)
      .join("\n"),
    questions: work.questions
      .map(q => `- ${q.question}`)
      .join("\n")
  }
}
