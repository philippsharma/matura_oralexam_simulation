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
        `Vieil homme riche à qui Harpagon veut donner Élise. 
        Il se révèle être Dom Thomas d'Alburcy, 
        noble napolitain qui croyait avoir perdu sa famille dans un naufrage ; 
        il retrouve ses enfants Valère et Mariane.`,
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
        `Cuisinier et cocher d'Harpagon. Personnage comique qui change de rôle selon la fonction qu'on lui demande ; par vengeance, il accuse Valère du vol de la cassette.`,
    },
  ],
 
  plotSummary:
    `À Paris, Harpagon, riche bourgeois d'une avarice extrême, a enterré une cassette contenant dix mille écus,
     dans son jardin, parce qu'il a très peur qu'on les lui vole. Sa fille Élise aime Valère, un fils de noble napolitain
     qui s'est fait engager comme intendant chez lui ; son fils Cléante aime Mariane, une jeune femme pauvre. Harpagon
     annonce qu'il veut lui-même épouser Mariane, marier Cléante à une riche veuve et donner Élise au vieil Anselme, 
     qui accepte de la prendre « sans dot ». 
     Cléante, qui cherche à emprunter de l'argent à des conditions usuraires, découvre que le prêteur 
     n'est autre que son père, donc une dispute violente s'ensuit. Harpagon invite Mariane à dîner 
     avec l'intention de signer le contrat de marriage. A la suite des demands d'Harpagon de limiter
     les dépenses, le cuisiner proteste, ce qui est suivi par une vive dispute où Maître Jacques finit a 
     recevoir des coups de bâton. Lors de la visite de Mariane, Cléante, devant son père, 
     lui offre la bague en diamant d'Harpagon. Harpagon découvre par une ruse, qui consistait à prétendre d'avoir 
     changer ses plans et renoncé au mariage, l'amour de son fils pour Mariane. Ensuite, le père et le fils se disputent violemment.
     La Flèche, le valet de Cléante, vole alors la cassette ; Harpagon, désespéré, fait venir un commissaire. Maître Jacques accuse Valère, 
     et un quiproquo s'installe : Valère avoue son amour pour Élise, tandis qu'Harpagon croit qu'il parle du vol. 
     Anselme arrive et se découvre être le père de Valère et de Mariane, qu'il croyait morts dans un naufrage. 
     Cléante obtient de son père le mariage avec Mariane en échange de la cassette ; 
     Anselme paie tous les frais des deux mariages, et Harpagon retrouve avec bonheur sa « chère cassette ».`,
 
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
            "Dans le monologue, la gradation est utilisée plusieurs fois. Quelle est sa définition et quel effet provoque-t-elle?",
          answerShouldInclude: [
            "La gradation consiste en une énumération de mots selon une progression d'intensité croissante (gradation ascendante) ou décroissante (gradation descendante).",
            "La gradation peut créer un effet d'amplification par la répétition de la même idée avec une variation de force, dirigeant vers l'idée finale.",
            "Dans le cas d'une gradation ascendante, elle peut être utilisée pour l'hyperbole.",
          ],
        },
        {
          question:
            "Trouvez quelques exemples de la gradation dans le monologue.",
          answerShouldInclude: [
            "Au voleur ! au voleur ! à l'assassin ! au meurtrier !",
            "Je suis perdu, je suis assassiné ! On m'a coupé la gorge, on m'a dérobé mon argent !",
            "C'en est fait, je n'en puis plus, je me meurs, je suis mort, je suis enterré !",
          ],
        },
        {
          question:
            "En quoi ce monologue est-il comique ? En quoi est il à la même fois aussi inquiétant ? Appuyez-vous sur des exemples précis du texte.",
          answerShouldInclude: [
            "Comique de l'exagération : Harpagon parle du vol comme d'un meurtre (« je suis assassiné », « on m'a coupé la gorge ») et se déclare mort et enterré.",
            "Comique de gestes : il se prend lui-même par le bras en croyant tenir le voleur (« Rends-moi mon argent, coquin… Ah ! c'est moi ! »).",
            "Il parle à son argent comme à une personne aimée (« mon pauvre argent ! mon cher ami ! », « Sans toi, il m'est impossible de vivre ») : c'est comique par la disproportion, mais aussi inquiétant, car l'argent a pris chez lui la place des sentiments humains.",
            "Il perd la raison et ne sait plus qui il est : « j'ignore où je suis, qui je suis, et ce que je fais ».",
            "Sa paranoïa devient violente : il soupçonne tout le monde, veut faire torturer toute sa maison, y compris ses enfants et lui-même, et « faire pendre tout le monde ».",
            "Le rire a une dimension morale : il montre que l'avarice déshumanise et peut mener à la folie.",
          ],
        },
        {
          question:
            "Aux lignes 23 à 28 de la scène 7, Harpagon emploie les pronoms « on », « vous » et « ils » : à qui renvoient-ils ? Et comment expliquer les rires ?",
          answerShouldInclude: [
            "Les trois pronoms renvoient au public : Harpagon s'adresse directement aux spectateurs, ce qui brise le « quatrième mur ».",
            "Le public rit à cause de la surprise d'être adressé directement.",
            "Le public rit parce qu'Harpagon est ridicule : son désespoir exagéré et sa paranoïa le poussent à soupçonner tout le monde, jusqu'aux spectateurs eux-mêmes.",
            "Harpagon interprète ces rires comme une preuve de complicité dans le vol, ce qui renforce encore l'effet comique.",
          ],
        },
      ],
    },

    {
      id: "lavare-a3s4",
      text: `
                Mariane Ah ! que je suis, Frosine, dans un étrange état, et, s’il faut dire ce que je sens, que j’appréhende cette vue !

                Frosine
                Mais pourquoi, et quelle est votre inquiétude ?

                Mariane
                Hélas ! me le demandez-vous ? Et ne vous figurez-vous point les alarmes d’une personne toute prête à voir le supplice où l’on veut l’attacher ?

                Frosine
                Je vois bien que, pour mourir agréablement, Harpagon n’est pas le supplice que vous voudriez embrasser ;
                 et je connais, à votre mine, que le jeune blondin dont vous m’avez parlé vous revient un peu dans l’esprit.

                Mariane
                Oui. C’est une chose, Frosine, dont je ne veux pas me défendre ; et les visites respectueuses qu’il a rendues chez nous ont fait, je vous l’avoue, quelque effet dans mon âme.

                Frosine
                Mais avez-vous su quel il est ?

                Mariane
                Non, je ne sais point quel il est. Mais je sais qu’il est fait d’un air à se faire aimer ; que, si l’on pouvait mettre les choses à mon choix, je le prendrois plutôt qu’un autre ; 
                et qu’il ne contribue pas peu à me faire trouver un tourment effroyable dans l’époux qu’on veut me donner.

                Frosine.
                Mon Dieu ! tous ces blondins sont agréables, et débitent fort bien leur fait ; mais la plupart sont gueux comme des rats ; 
                il vaut mieux, pour vous, de prendre un vieux mari qui vous donne beaucoup de bien. Je vous avoue que les sens ne trouvent pas si bien 
                leur compte du côté que je dis, et qu’il y a quelques petits dégoûts à essuyer avec un tel époux ; mais cela n’est pas pour durer ; et sa mort, croyez-moi, 
                vous mettra bientôt en état d’en prendre un plus aimable, qui réparera toutes choses.

                Mariane
                Mon Dieu ! Frosine, c’est une étrange affaire, lorsque, pour être heureuse, il faut souhaiter ou attendre le trépas de quelqu’un ; 
                et la mort ne suit pas tous les projets que nous faisons.

                Frosine
                Vous moquez-vous ? Vous ne l’épousez qu’aux conditions de vous laisser veuve bientôt ; et ce doit être là un des articles du contrat. 
                Il seroit bien impertinent de ne pas mourir dans trois mois ! Le voici en propre personne.

                Mariane
                Ah ! Frosine, quelle figure !

`,
      placeInLiteratureWork: {
        location: "Acte III, scène 4 (Ed. Larousse)",
        plotPointBefore:
          "Harpagon et ses domestiques préparent le dîner. ",
        plotPointAfter:
          "Mariane a sa première rencontre avec Harpagon.",
      },
      questions: [
        {
          question:
            "Qui est le 'jeune blondin' dont parle Mariane, et que sait le spectateur que Mariane ignore?",
          answerShouldInclude: [
            "Il s'agit de Cléante, mais Mariane ne sait pas qui il est : « je ne sais point quel il est ».",
            "Le spectateur sait que c'est le fils d'Harpagon : c'est une ironie dramatique.",
          ],
        },
        {
          question:
            
           "Quels arguments Frosine avance-t-elle pour convaincre Mariane d'épouser Harpagon ? Que révèlent-ils de son caractère ?",
          answerShouldInclude: [
            "Les jeunes gens séduisants sont souvent pauvres (« gueux comme des rats »), alors qu'un vieux mari apporte la richesse.",
            "Harpagon mourra bientôt et Mariane, devenue veuve, pourra épouser un homme plus aimable.",
            "Frosine propose une idée de mariage très matérialiste avec un raisonnement cynique. ",
          ],
        },
        {
          question:
            "Expliquez les contrastes entre les propos de Mariane et de Frosine.",
          answerShouldInclude: [
            "Pour Mariane, le mariage devrait reposer sur l'inclination ; pour Frosine, c'est une affaire d'argent.",
            "Mariane exprime son malaise face à l'idée de devoir attendre la mort de quelqu'un pour être heureuse, tandis que Frosine ne semble pas avoir un problème avec cette idée.",
            "Mariane a encore une vue de mariage très innocente et pure, tandis que Frosine semble être plus 'froide', mais peut-être plus réaliste.",
          ],
        },
      ],
    },

    {
      id: "lavare-a1s5",
      text: `
                Harpagon
                Ici, Valère. Nous t’avons élu pour nous dire qui a raison de ma fille ou de moi.

                Valère
                C’est vous, monsieur, sans contredit.

                Harpagon
                Sais-tu bien de quoi nous parlons ?

                Valère
                Non. Mais vous ne sauriez avoir tort, et vous êtes toute raison.

                Harpagon
                Je veux ce soir lui donner pour époux un homme aussi riche que sage, et la coquine me dit au nez qu’elle se moque de le prendre. Que dis-tu de cela ?

                Valère
                Ce que j’en dis ?

                Harpagon
                Oui.

                Valère
                Eh ! eh !

                Harpagon
                Quoi !

                Valère
                Je dis que, dans le fond, je suis de votre sentiment, et vous ne pouvez pas que vous n’ayez raison ; mais aussi n’a-t-elle pas tort tout à fait, et…

                Harpagon
                Comment ! Le seigneur Anselme est un parti considérable, c’est un gentilhomme qui est noble, doux, posé, sage et fort accommodé,
                et auquel il ne reste aucun enfant de son premier mariage. Sauroit-elle mieux rencontrer ?

                Valère
                Cela est vrai ; Mais elle pourroit vous dire que c’est un peu précipiter les choses, et qu’il faudrait au moins quelque temps
                pour voir si son inclination pourra s’accommoder avec...

                Harpagon
                C’est une occasion qu’il faut prendre vite aux cheveux. Je trouve ici un avantage qu’ailleurs je ne trouverais pas, et il s’engage à la prendre sans dot...

                Valère
                Sans dot ?

                Harpagon
                Oui.

                Valère
                Ah ! je ne dis plus rien. Voyez-vous, voilà une raison tout à fait convaincante ; il se faut rendre à cela.

                Harpagon
                C’est pour moi une épargne considérable.

                Valère
                Assurément ; cela ne reçoit point de contradiction. Il est vrai que votre fille vous peut représenter que le mariage est une plus grande affaire
                qu’on ne peut croire ; qu’il y va d’être heureux ou malheureux toute sa vie, et qu’un engagement qui doit durer jusqu’à la mort
                ne se doit jamais faire qu’avec de grandes précautions.

                Harpagon
                Sans dot !

                Valère
                Vous avez raison. Voilà qui décide tout ; cela s’entend. Il y a des gens qui pourraient vous dire qu’en de telles occasions
                l’inclination d’une fille est une chose sans doute où l’on doit avoir de l’égard, et que cette grande inégalité d’âge, d’humeur et de sentiments,
                rend un mariage sujet à des accidents fâcheux.

                Harpagon
                Sans dot !

                Valère
                Ah ! il n’y a pas de réplique à cela, on le sait bien ! Qui diantre peut aller là-contre ? Ce n’est pas qu’il n’y ait quantité de pères
                qui aimeroient mieux ménager la satisfaction de leurs filles, que l’argent qu’ils pourraient donner ; qui ne les voudraient point sacrifier à l’intérêt,
                et chercheraient, plus que toute autre chose, à mettre dans un mariage cette douce conformité qui, sans cesse, y maintient l’honneur, la tranquillité et la joie, et que…

                Harpagon
                Sans dot !

                Valère
                Il est vrai. Cela ferme la bouche à tout. Sans dot ! Le moyen de résister à une raison comme celle-là !

                Harpagon, à part, regardant du côté le jardin.
                Ouais ! Il me semble que j’entends un chien qui aboie. N’est-ce point qu’on en voudrait à mon argent ? (À Valère.) Ne bougez ; je reviens tout à l’heure.

`,
      placeInLiteratureWork: {
        location: "Acte I, scène 5 (Ed. Larousse)",
        plotPointBefore:
          "Harpagon vient d'annoncer à Élise qu'elle épousera le soir même le seigneur Anselme. Élise refuse, et tous deux acceptent de prendre Valère pour juge.",
        plotPointAfter:
          "Harpagon sort pour vérifier que son argent est en sûreté. Valère explique à Élise qu'il flatte son père pour mieux le manœuvrer et lui conseille de feindre une maladie pour retarder le mariage.",
      },
      questions: [
        {
          question:
            "Pourquoi Valère donne-t-il raison à Harpagon avant même de savoir de quoi il s'agit ? Dans quelle situation se trouve-t-il ?",
          answerShouldInclude: [
            "Valère aime Élise en secret et s'est fait engager comme intendant d'Harpagon pour rester près d'elle.",
            "Sa stratégie est la flatterie : il approuve tout ce que dit Harpagon pour gagner sa confiance (« vous ne sauriez avoir tort, et vous êtes toute raison »).",
            "Il est pris dans un dilemme : il doit défendre Élise, donc son propre amour, sans contredire son maître.",
          ],
        }, 
        {
          question:
            "Harpagon répète plusieurs fois « sans dot ». De quel type de comique s'agit-il, et que révèle cette répétition sur le personnage ?",
          answerShouldInclude: [
            "C'est un comique de mots, fondé sur la répétition mécanique de la même réplique.",
            "Harpagon n'écoute aucun argument : « sans dot » est pour lui une raison qui répond à tout.",
            "L'argent compte plus pour lui que le bonheur de sa fille : c'est aussi un comique de caractère, qui montre son avarice.",
          ],
        },
        {
          question:
            "Comment Valère essaie-t-il malgré tout de défendre Élise ? Quels arguments avance-t-il contre ce mariage ?",
          answerShouldInclude: [
            "Il commence chaque réplique par approuver Harpagon, puis il ajoute une objection.",
            "Il ne présente jamais les objections comme les siennes : « elle pourrait vous dire », « il y a des gens qui pourraient vous dire », « quantité de pères ».",
            "Ses arguments : le mariage est trop précipité, il faut tenir compte de l'inclination de la fille, le bonheur de toute une vie est en jeu, et la différence d'âge est trop grande.",
          ],
        },
        {
          question:
            "Relevez quelques répliques de Valère où l'ironie apparaît. Que pense-t-il en réalité ? Harpagon est-il dupe ?",
          answerShouldInclude: [
            "« voilà une raison tout à fait convaincante ; il se faut rendre à cela »",
            "« Assurément ; cela ne reçoit point de contradiction »",
            "« Voilà qui décide tout ; cela s’entend »",
            "« Ah ! il n’y a pas de réplique à cela, on le sait bien ! »",
            "« Il est vrai. Cela ferme la bouche à tout. Sans dot ! Le moyen de résister à une raison comme celle-là ! »",
            "« Qui diantre peut aller là-contre ? »",
            "En réalité, Valère trouve que « sans dot » n'est pas une raison valable : il est opposé à ce mariage, parce qu'il aime Élise et pense qu'un mariage doit tenir compte de l'inclination.",
            "Harpagon est dupe : il n'entend que l'approbation et ne remarque pas l'ironie, car il est aveuglé par son avarice.",
          ],
        },
        {
          question:
            "Que montre la dernière réplique d'Harpagon, quand il croit entendre un chien aboyer ?",
          answerShouldInclude: [
            "Harpagon pense tout de suite que quelqu'un veut voler son argent : il est méfiant jusqu'à la paranoïa.",
            "Il interrompt une discussion sur le mariage de sa fille pour aller surveiller son trésor : l'argent passe avant sa famille.",
            "Cette inquiétude annonce le vol de la cassette à l'acte IV.",
          ],
        },
      ],
    },
  ],
};
 