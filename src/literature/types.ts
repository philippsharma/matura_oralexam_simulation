// Structure follows the RFSM for second languages, normal level
// (Richtlinien für die schweizerische Maturitätsprüfung, 2.4.2.2 exam phases, 2.4.3.2 grading criteria).
export type LiteratureWork = {
    id: string,
    title: string,
    author: string,
    publicationDate: string,
    genre: string,

    // "Kenntnis des geprüften literarischen Werks" (2.4.3.2), in the order the RFSM lists it
    plotSummary: string,              
    importantCharacters: Character[], // Charaktere (Figurenpsychologie)
    themesAndMotifs: string[],        // Themen und Motive
    historicalBackground: string,     // geschichtlicher Hintergrund, incl. links to the author and their time (2.4.4.1)
    stylisticAspects: string,         // Stilmittel

    // phase 3: "Zusammenhang zwischen Ausschnitt und ganzem Text und der literarischen Strömung"
    // name concrete, recognisable features of the movement, so they can be matched against an excerpt
    literaryMovement: string,

    // phase 4: "Fragen zu inhaltlichen und historischen Aspekten des Texts", i.e. about the whole work
    questions: Question[],

    excerpts: Excerpt[]
}

export type Excerpt = {
    id: string,
    text: string,
    // phase 3: link between the excerpt and the whole work
    connectionToLiteratureWork: {
        location: string,
        plotPointBefore: string,
        plotPointAfter: string,
        significance: string // why this passage matters for the work as a whole
    }
}

export type Question = {
    question: string,
    answerShouldInclude: string[] // for grading only, never shown to the examiner agent
}

export type Character = {
    name: string,
    description: string // role and psychology (Figurenpsychologie)
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
    stylisticAspects: string,
    plotSummary: string,
    importantCharacters: string, // formatted list
    themesAndMotifs: string, // formatted list
    excerpt: string,
    excerptLocation: string,
    plotPointBefore: string,
    plotPointAfter: string,
    excerptSignificance: string,
    questions: string // formatted list of the work-level questions
}
