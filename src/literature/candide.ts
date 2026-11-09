import type { LiteratureWork } from "./types";

const candide: LiteratureWork = {
    id: "candide",
    title: "Candide ou l'Optimisme",
    author: "Voltaire (François-Marie Arouet)",
    publicationDate: "1759", // publié anonymement à Genève, présenté comme traduit de l'allemand de « Monsieur le docteur Ralph »
    genre: "Conte philosophique",
    importantCharacters: [
    {
      name: "Candide",
      description:
        `Jeune homme naïf et sincère, 
        élevé au château du baron de Thunder-ten-tronckh, dont il est le neveu illégitime. Son nom renvoie à sa candeur. 
        Au début convaincu de la doctrine de l'Optimise de Pangloss, il découvre peu à peu, au fil de ses épreuves, 
        l'écart entre la doctrine de l'optimisme et la réalité du monde.`
    },
    {
      name: "Pangloss",
      description:
        `Précepteur de Candide et Cunégonde. Philosophe qui enseigne que 
        « tout est au mieux dans le meilleur des mondes possibles ». 
        Satire du philosophe Gottfried Leibniz. 
        Il maintient la doctrine de l'Optimisme malgré 
        tous les malheurs qu'il subit.
        Son nom signifie « tout langue ».`
    },
    {
      name: "Cunégonde",
      description:
        `Fille du baron, aimée de Candide. Elle traverse de nombreuses épreuves 
        (guerre, viol, esclavage) ; à la fin du conte, devenue laide,
        elle épouse Candide.`,
    },
    ]
}