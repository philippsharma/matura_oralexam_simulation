export type LiteratureWork = {
    id: string,
    title: string,
    author: string,
    publicationDate: string,
    genre: string,
    importantCharacters: Character[],
    plotSummary: string,
    literaryMovement: string,
    historicalBackground: string,
    stylisticAspects: string,
    themesAndMotifs: string[],
    excerpts: Excerpt[]
}

export type Excerpt = {
    id: string,
    text: string,
    placeInLiteratureWork: {
        location: string,
        plotPointBefore: string,
        plotPointAfter: string
    },
    questions: Question[]
}

export type Question = {
    question: string,
    answerShouldInclude: string[]
}

export type Character = {
    name: string, 
    description: string
}

// Everything the examiner agent gets to know about the exam.
// Only flat strings, so that it can be passed to the agent directly (e.g. as ElevenLabs dynamic variables).
export type ExamContext = {
    title: string,
    author: string,
    genre: string,
    publicationDate: string,
    literaryMovement: string,
    historicalBackground: string,
    stylisticAspects: string, // formatted list
    plotSummary: string,
    importantCharacters: string, // formatted list
    themesAndMotifs: string, // formatted list
    excerpt: string,
    excerptLocation: string,
    plotPointBefore: string,
    plotPointAfter: string,
    questions: string // formatted list
}
