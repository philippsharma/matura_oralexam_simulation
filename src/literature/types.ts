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