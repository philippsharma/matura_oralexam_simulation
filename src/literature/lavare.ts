import type { LiteratureWork } from "./types";
 
// Draft — to be verified against the text (Wikisource) and reliable sources before use.
// Points worth double-checking are act and scene numbers and who says what.
 
export const lavare: LiteratureWork = {
  id: "lavare",
  title: "L'Avare",
  author: "Molière (Jean-Baptiste Poquelin)",
  publicationDate: "1668", // première représentation en septembre 1668 au théâtre du Palais-Royal ; texte publié en 1669
  genre: "Comédie en cinq actes, en prose",
 
  importantCharacters: [
    {
      name: "Harpagon",
      description:
        `Père de Cléante et d'Élise, bourgeois riche et extrêmement avare. Il aime l'argent plus que tout, 
        même plus que ses enfants. Son obsession de l'argent le rende méfiant
        envers tout le monde. Il amasse son argent en prêtant à des conditions abusives, tout en économisant
        chaque centime, par exemple en refusant de remplacer les vêtements usés de ses domestiques.
        Il possède un trésor qu'il cache dans une cassette et ils craint qu'on la lui vole. 
        Amoureux de Mariane.`,
    },
    {
      name: "Cléante",
      description:
        `Fils d'Harpagon, jeune garçon dépensier, amoureux de Mariane, tout comme son père. 
        Privé d'argent par son père, il est réduit à emprunter à usure. L'avarice de son père
        et le conflit d'amour contribuent à la rivalité entre Cléante et son père.`,
    },
    {
      name: "Élise",
      description:
        `Fille d'Harpagon, délicate et obéissante, amoureuse de Valère. 
        Son père veut la marier au vieil Anselme 
        parce qu'il accepte de la prendre « sans dot ».`,
    },
    {
      name: "Valère",
      description:
        `Amoureux d'Élise. Pour rester près d'elle, il s'est fait engager 
        comme intendant chez Harpagon et le flatte constamment. 
        Il se révèle à la fin être le fils d'Anselme.`,
    },
    {
      name: "Mariane",
      description:
        `Jeune femme pauvre qui vit avec sa mère, aimée à la fois de Cléante et d'Harpagon. 
        Elle se révèle à la fin être la sœur de Valère et la fille d'Anselme.`,
    },
    {
      name: "Anselme",
      description:
        "Vieil homme riche à qui Harpagon veut donner Élise. Il se révèle être Dom Thomas d'Alburcy, noble napolitain qui croyait avoir perdu sa famille dans un naufrage ; il retrouve ses enfants Valère et Mariane.",
    },
    {
      name: "La Flèche",
      description:
        "Valet de Cléante, insolent et rusé. Maltraité et soupçonné par Harpagon, il finit par lui voler sa cassette.",
    },
    {
      name: "Frosine",
      description:
        "Femme d'intrigue qui arrange les mariages. Elle flatte Harpagon dans l'espoir d'obtenir de l'argent, sans succès.",
    },
    {
      name: "Maître Jacques",
      description:
        "Cuisinier et cocher d'Harpagon. Personnage comique qui change de rôle selon la fonction qu'on lui demande ; par vengeance, il accuse Valère du vol de la cassette.",
    },
  ],
 
  plotSummary:
    "À Paris, Harpagon, riche bourgeois d'une avarice extrême, a enterré une cassette contenant dix mille écus dans son jardin. Sa fille Élise aime Valère, qui s'est fait engager comme intendant chez lui ; son fils Cléante aime Mariane, une jeune femme pauvre. Harpagon annonce qu'il veut lui-même épouser Mariane, marier Cléante à une riche veuve et donner Élise au vieil Anselme, qui accepte de la prendre « sans dot ». Cléante, qui cherche à emprunter de l'argent à des conditions usuraires, découvre que le prêteur n'est autre que son père. Lors de la visite de Mariane, Cléante, devant son père, lui offre la bague en diamant d'Harpagon. Harpagon découvre par une ruse l'amour de son fils pour Mariane, et le père et le fils se disputent violemment. La Flèche, le valet de Cléante, vole alors la cassette ; Harpagon, désespéré, fait venir un commissaire. Maître Jacques accuse Valère, et un quiproquo s'installe : Valère avoue son amour pour Élise, tandis qu'Harpagon croit qu'il parle du vol. Anselme arrive et se découvre être le père de Valère et de Mariane, qu'il croyait morts dans un naufrage. Cléante obtient de son père le mariage avec Mariane en échange de la cassette ; Anselme paie tous les frais des deux mariages, et Harpagon retrouve avec bonheur sa « chère cassette ».",
 
  literaryMovement:
    "Le classicisme (XVIIe siècle, règne de Louis XIV). Le théâtre classique suit des règles : unité d'action, de temps (une journée) et de lieu (ici, la maison d'Harpagon à Paris), ainsi que la vraisemblance et la bienséance. Il vise à « plaire et instruire » : la comédie doit corriger les mœurs par le rire. Molière en est le maître ; avec L'Avare, il écrit une comédie de caractère et de mœurs, qui s'inspire de la comédie latine (La Marmite de Plaute).",
 
  historicalBackground:
    "La pièce est créée en 1668, sous le règne de Louis XIV, par la troupe de Molière au théâtre du Palais-Royal. Molière vient de traverser la longue querelle du Tartuffe, interdit sous la pression des milieux dévots. Dans la société de l'époque, l'autorité paternelle sur le mariage des enfants est très forte, et les mariages sont souvent arrangés pour des raisons d'argent : la dot joue un rôle central. Le prêt à intérêt (l'usure) est condamné par l'Église mais largement pratiqué. Le choix d'une comédie en cinq actes écrite en prose, et non en vers, était inhabituel et fut critiqué.",
 
  stylisticAspects:
    "Molière combine plusieurs formes de comique : comique de caractère (l'avarice poussée jusqu'à l'absurde), comique de mots (répétitions comme « sans dot »), comique de situation (quiproquos, notamment entre Valère et Harpagon à l'acte V), comique de gestes hérité de la farce (fouilles, coups de bâton). L'ironie dramatique et les apartés créent une complicité avec le public. Le célèbre monologue d'Harpagon après le vol de sa cassette joue sur l'exagération, les phrases courtes, les exclamations et les adresses au public. La prose donne un rythme vif et naturel aux dialogues.",
 
  themesAndMotifs: [
    "L'avarice comme passion qui déshumanise : l'argent prend chez Harpagon la place des sentiments, jusqu'à devenir l'objet de son amour.",
    "Le conflit des générations : le père devient le rival de son fils et sacrifie le bonheur de ses enfants à son intérêt.",
    "L'autorité paternelle et le mariage arrangé, décidé pour des raisons d'argent plutôt que d'amour.",
    "L'argent dans la société : la dot, l'usure, le rapport entre richesse et pouvoir dans la famille.",
    "Le mensonge et le masque : Valère flatte Harpagon, les personnages se dissimulent et se trompent mutuellement.",
    "La solitude et la paranoïa de l'avare, qui soupçonne tout le monde, y compris ses propres enfants.",
    "La comédie comme critique morale : faire rire du vice pour le dénoncer.",
  ],
 
  excerpts: [
    {
      id: "lavare-a4s7",
      // TODO: paste Acte IV, scène 7 (Harpagon's monologue) from Wikisource.
      text: "",
      placeInLiteratureWork: {
        location: "Acte IV, scène 7 (monologue d'Harpagon)",
        plotPointBefore:
          "La Flèche, le valet de Cléante, a déterré et volé la cassette contenant les dix mille écus qu'Harpagon avait cachée dans son jardin.",
        plotPointAfter:
          "À l'acte V, Harpagon fait venir un commissaire pour mener l'enquête ; Maître Jacques accuse faussement Valère, ce qui entraîne un quiproquo.",
      },
      questions: [
        {
          question:
            "Comment Molière exprime-t-il l'affolement d'Harpagon dans ce monologue ?",
          answerShouldInclude: [
            "Les phrases courtes, les exclamations et les questions qui créent un rythme haletant.",
            "Les répétitions et la gradation (par exemple dans les cris « au voleur »).",
            "La confusion d'Harpagon, qui va jusqu'à se saisir lui-même comme s'il était le voleur.",
          ],
        },
        {
          question:
            "Quel rapport Harpagon entretient-il avec son argent dans cette scène ?",
          answerShouldInclude: [
            "La personnification de l'argent, auquel il s'adresse comme à un ami ou à un être aimé.",
            "Le vocabulaire de la mort : la perte de l'argent est vécue comme sa propre mort.",
            "L'argent qui remplace les relations humaines : une passion qui le déshumanise.",
          ],
        },
        {
          question:
            "En quoi ce monologue est-il à la fois comique et inquiétant ?",
          answerShouldInclude: [
            "Le comique de l'exagération, des gestes et de la situation.",
            "La folie et la paranoïa d'Harpagon, qui soupçonne tout le monde.",
            "La dimension morale : le rire dénonce les dangers de l'avarice.",
          ],
        },
        {
          question:
            "Quel rôle le public joue-t-il dans cette scène ?",
          answerShouldInclude: [
            "Harpagon s'adresse directement aux spectateurs, ce qui brise le « quatrième mur ».",
            "Il va jusqu'à soupçonner le public d'avoir volé sa cassette.",
            "L'effet comique et la complicité créés avec la salle.",
          ],
        },
      ],
    },
  ],
};
 