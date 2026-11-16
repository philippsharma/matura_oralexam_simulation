import type { LiteratureWork } from "./types";

// Draft — to be verified against reliable sources before use.
// Excerpt texts come from French Wikisource (recueil « Boule de suif », texte de la nouvelle).

export const bouleDeSuif: LiteratureWork = {
  id: "bouledesuif",
  title: "Boule de suif",
  author: "Guy de Maupassant",
  publicationDate: "1880", // parue en avril 1880 dans le recueil collectif « Les Soirées de Médan »
  genre: "Nouvelle réaliste",

  importantCharacters: [
    {
      name: "Boule de suif (Élisabeth Rousset)",
      description:
        `Prostituée de Rouen, surnommée « Boule de suif » à cause de sa rondeur. Elle est généreuse, franche et patriote :
        elle a dû quitter Rouen parce qu'elle a attaqué un soldat prussien logé chez elle.
        Elle partage ses provisions avec les autres voyageurs, puis elle se sacrifie pour eux en cédant à l'officier prussien.
        Elle est pourtant méprisée et rejetée par ceux qu'elle a aidés.`,
    },
    {
      name: "M. et Mme Loiseau",
      description:
        `Marchands de vin en gros, représentants de la petite bourgeoisie commerçante.
        Lui est rusé, vulgaire et farceur, connu pour vendre du mauvais vin ; elle est dure, avare et autoritaire.
        Loiseau est le premier à accepter la nourriture de Boule de suif, et sa femme est la plus méchante envers elle à la fin.`,
    },
    {
      name: "M. et Mme Carré-Lamadon",
      description:
        `Riche propriétaire de filatures de coton, officier de la Légion d'honneur et membre du Conseil général : il représente la grande bourgeoisie industrielle.
        Sa femme, beaucoup plus jeune que lui, est jolie et coquette.`,
    },
    {
      name: "Le comte et la comtesse Hubert de Bréville",
      description:
        `Membres d'une des plus anciennes familles nobles de Normandie. Le comte est poli et diplomate :
        c'est lui qui, d'un ton paternel, finit par persuader Boule de suif de céder.
        La comtesse a de grandes manières, mais elle participe au complot comme les autres.`,
    },
    {
      name: "Cornudet",
      description:
        `Républicain surnommé « le démoc », buveur de bière, détesté par les gens respectables.
        Il est le seul à dire aux autres qu'ils ont commis « une infamie », mais il ne fait rien pour défendre Boule de suif
        et ne partage pas non plus sa nourriture avec elle à la fin. Il se contente de siffler la Marseillaise.`,
    },
    {
      name: "Les deux religieuses",
      description:
        `Deux bonnes sœurs qui prient pendant tout le voyage. La plus âgée aide sans le vouloir le complot :
        elle affirme qu'une action n'est pas coupable si l'intention est bonne.
        À la fin, elles mangent et prient sans s'occuper de Boule de suif.`,
    },
    {
      name: "L'officier prussien",
      description:
        `Jeune officier qui occupe l'auberge de Tôtes. Froid et arrogant, il refuse de laisser repartir la diligence
        tant que Boule de suif n'a pas accepté de coucher avec lui.`,
    },
    {
      name: "M. et Mme Follenvie",
      description:
        "Les aubergistes de Tôtes. M. Follenvie transmet chaque jour la demande de l'officier prussien ; sa femme dit ouvertement ce qu'elle pense de la guerre et des soldats.",
    },
  ],

  plotSummary:
    `Pendant l'hiver de la guerre franco-prussienne (1870-1871), l'armée prussienne occupe Rouen. Dix personnes quittent la ville
    dans une diligence pour gagner Dieppe, puis Le Havre : trois couples de la bonne société (les Loiseau, les Carré-Lamadon,
    le comte et la comtesse de Bréville), deux religieuses, le républicain Cornudet et une prostituée surnommée Boule de suif.
    Les « honnêtes gens » la méprisent. Mais la neige ralentit la voiture, tout le monde a faim, et Boule de suif est la seule
    à avoir emporté des provisions : elle les partage généreusement avec tous.
    Le soir, les voyageurs s'arrêtent à l'auberge de Tôtes, occupée par les Prussiens. Le lendemain, l'officier prussien interdit
    à la diligence de repartir : il exige d'abord que Boule de suif couche avec lui. Elle refuse par patriotisme.
    Les autres voyageurs sont d'abord indignés, mais après quelques jours d'attente ils s'impatientent et organisent un complot
    pour la convaincre : ils citent des exemples de femmes qui se sont sacrifiées (Judith, Lucrèce, Cléopâtre),
    la vieille religieuse explique qu'une bonne intention excuse l'action, et le comte lui parle d'un ton paternel.
    Boule de suif finit par céder. Ce soir-là, les voyageurs fêtent joyeusement leur succès ; seul Cornudet leur dit qu'ils viennent
    de faire « une infamie ». Le lendemain, la diligence repart. Tous évitent Boule de suif et la traitent avec mépris.
    Quand ils ont faim, chacun mange ses provisions sans rien lui offrir, alors qu'elle n'a rien pu emporter.
    Elle pleure en silence pendant que Cornudet siffle la Marseillaise.`,

  literaryMovement:
    "Le réalisme et le naturalisme (seconde moitié du XIXe siècle). Les écrivains réalistes veulent représenter la société telle qu'elle est, sans l'idéaliser, en s'appuyant sur l'observation et sur des détails précis. Le naturalisme, dont Émile Zola est le chef de file, prolonge le réalisme en étudiant l'influence du milieu social sur les individus. Maupassant, disciple de Gustave Flaubert, publie « Boule de suif » dans « Les Soirées de Médan », un recueil de nouvelles sur la guerre de 1870 écrit par Zola et cinq jeunes écrivains de son groupe. Maupassant est surtout un maître de la nouvelle : un récit court, peu de personnages, une action resserrée et une fin frappante.",

  historicalBackground:
    "La nouvelle se passe pendant la guerre franco-prussienne de 1870-1871. Après la défaite de Sedan (septembre 1870), le Second Empire de Napoléon III tombe et la Troisième République est proclamée le 4 septembre 1870. L'armée prussienne envahit le nord de la France et occupe la Normandie, dont Rouen. Maupassant, né en Normandie en 1850, a lui-même participé à cette guerre comme soldat, et il a gardé un souvenir amer de la défaite. Publiée dix ans plus tard, la nouvelle va contre l'image héroïque de la guerre : elle montre des Français égoïstes et lâches. La société de l'époque est très hiérarchisée (noblesse, grande et petite bourgeoisie, clergé, peuple) et divisée politiquement entre bonapartistes, monarchistes et républicains. « Boule de suif » a rendu Maupassant célèbre du jour au lendemain ; Flaubert l'a qualifiée de chef-d'œuvre.",

  stylisticAspects:
    "Le récit est mené par un narrateur extérieur, qui semble neutre mais qui juge ses personnages par l'ironie (par exemple dans l'oxymore « ces gredins honnêtes »). Les descriptions sont réalistes et précises : chaque voyageur est présenté par son métier, sa fortune et ses opinions, comme un représentant de sa classe sociale. La diligence et l'auberge sont des lieux clos qui réunissent toute la société en miniature (un « microcosme »). Le champ lexical de la nourriture est très important : Boule de suif elle-même est décrite comme quelque chose d'appétissant, et les voyageurs « dévorent » d'abord ses provisions, puis la sacrifient. La structure est symétrique : la nouvelle commence et finit par un voyage en diligence et par un repas, mais la situation est inversée. La fin est une chute pessimiste, sans morale explicite : le lecteur doit juger lui-même.",

  themesAndMotifs: [
    "L'hypocrisie sociale : les personnages « respectables » parlent de morale, de religion et d'honneur, mais ils agissent par intérêt.",
    "L'égoïsme et l'ingratitude : les voyageurs profitent de la générosité de Boule de suif, puis ils la rejettent.",
    "La critique des classes sociales : noblesse, bourgeoisie et clergé s'unissent contre une femme du peuple.",
    "Le patriotisme : la prostituée est la seule à résister vraiment à l'ennemi, alors que les autres pensent surtout à leurs affaires.",
    "La guerre et l'occupation, montrées sans héroïsme : la défaite, la peur et la lâcheté.",
    "La nourriture comme motif : la faim révèle les caractères, et Boule de suif est elle-même « consommée » par les autres.",
    "Le sacrifice et la victime : Boule de suif est sacrifiée au confort du groupe.",
    "L'apparence et la réalité : la femme méprisée se révèle la plus digne, les « honnêtes gens » se révèlent des « gredins ».",
  ],

  excerpts: [
    {
      id: "bouledesuif-portrait",
      text: `
La femme, une de celles appelées galantes, était célèbre par son embonpoint précoce qui lui avait valu le surnom de Boule de Suif. Petite, ronde de partout, grasse à lard, avec des doigts bouffis, étranglés aux phalanges, pareils à des chapelets de courtes saucisses ; avec une peau luisante et tendue, une gorge énorme qui saillait sous sa robe, elle restait cependant appétissante et courue, tant sa fraîcheur faisait plaisir à voir. Sa figure était une pomme rouge, un bouton de pivoine prêt à fleurir ; et là-dedans s’ouvraient, en haut, deux yeux noirs magnifiques, ombragés de grands cils épais qui mettaient une ombre dedans ; en bas, une bouche charmante, étroite, humide pour le baiser, meublée de quenottes luisantes et microscopiques.

Elle était de plus, disait-on, pleine de qualités inappréciables.

Aussitôt qu’elle fut reconnue, des chuchotements coururent parmi les femmes honnêtes, et les mots de « prostituée », de « honte publique » furent chuchotés si haut qu’elle leva la tête. Alors elle promena sur ses voisins un regard tellement provocant et hardi qu’un grand silence aussitôt régna, et tout le monde baissa les yeux à l’exception de Loiseau, qui la guettait d’un air émoustillé.

Mais bientôt la conversation reprit entre les trois dames, que la présence de cette fille avait rendues subitement amies, presque intimes. Elles devaient faire, leur semblait-il, comme un faisceau de leurs dignités d’épouses en face de cette vendue sans vergogne ; car l’amour légal le prend toujours de haut avec son libre confrère.
`,
      placeInLiteratureWork: {
        location: "Début de la nouvelle : dans la diligence, portrait de Boule de suif",
        plotPointBefore:
          "La diligence vient de quitter Rouen au petit matin, dans la neige. Le narrateur a présenté les autres voyageurs : les trois couples, les deux religieuses et Cornudet.",
        plotPointAfter:
          "La voiture avance très lentement à cause de la neige. Les voyageurs commencent à avoir faim, et personne n'a pensé à emporter des provisions, sauf Boule de suif.",
      },
      questions: [
        {
          question:
            "Par quels procédés le narrateur fait-il le portrait de Boule de suif ? Quelle image donne-t-il d'elle ?",
          answerShouldInclude: [
            "Le portrait utilise le champ lexical de la nourriture : « grasse à lard », des doigts « pareils à des chapelets de courtes saucisses », une figure qui est « une pomme rouge », une femme « appétissante ».",
            "Le narrateur emploie des comparaisons et des métaphores (« un bouton de pivoine prêt à fleurir ») ; son surnom lui-même désigne une matière grasse.",
            "Le portrait est ambivalent : elle est très grosse, mais « cependant appétissante et courue », avec une « fraîcheur » qui fait « plaisir à voir », des yeux « magnifiques » et une bouche « charmante ».",
            "Elle est présentée comme quelque chose qu'on a envie de consommer : cela annonce la suite, où les voyageurs profitent de ses provisions, puis d'elle-même.",
          ],
        },
        {
          question:
            "Comment les autres voyageurs réagissent-ils quand ils reconnaissent Boule de suif ? Que révèle cette réaction ?",
          answerShouldInclude: [
            "Les « femmes honnêtes » chuchotent des insultes (« prostituée », « honte publique ») assez fort pour qu'elle les entende.",
            "Boule de suif répond par « un regard tellement provocant et hardi » que tout le monde baisse les yeux : elle a plus de courage qu'eux.",
            "Le mépris rapproche les trois dames, devenues « subitement amies, presque intimes » : elles forment un groupe contre elle (« un faisceau de leurs dignités d'épouses »).",
            "Loiseau, lui, la regarde « d'un air émoustillé » : le mépris affiché cache du désir, ce qui montre l'hypocrisie des voyageurs.",
          ],
        },
        {
          question:
            "Expliquez la phrase « l'amour légal le prend toujours de haut avec son libre confrère ». Quel est le point de vue du narrateur ?",
          answerShouldInclude: [
            "« L'amour légal » désigne le mariage, « son libre confrère » la prostitution : les épouses regardent la prostituée de haut.",
            "Le mot « confrère » met ironiquement le mariage et la prostitution sur le même plan, comme deux métiers comparables.",
            "Le présent et l'adverbe « toujours » donnent à la phrase la forme d'une vérité générale.",
            "Le narrateur se moque de la bonne conscience des dames : c'est une critique de la morale bourgeoise.",
          ],
        },
      ],
    },

    {
      id: "bouledesuif-premier-repas",
      text: `
Enfin, à trois heures, comme on se trouvait au milieu d’une plaine interminable, sans un seul village en vue, Boule de Suif se baissant vivement, retira de sous la banquette un large panier couvert d’une serviette blanche.

Elle en sortit d’abord une petite assiette de faïence, une fine timbale en argent, puis une vaste terrine dans laquelle deux poulets entiers, tout découpés, avaient confi sous leur gelée ; et l’on apercevait encore dans le panier d’autres bonnes choses enveloppées, des pâtés, des fruits, des friandises, les provisions préparées pour un voyage de trois jours, afin de ne point toucher à la cuisine des auberges. Quatre goulots de bouteilles passaient entre les paquets de nourriture. Elle prit une aile de poulet et, délicatement, se mit à la manger avec un de ces petits pains qu’on appelle « Régence » en Normandie.

Tous les regards étaient tendus vers elle. Puis l’odeur se répandit, élargissant les narines, faisant venir aux bouches une salive abondante avec une contraction douloureuse de la mâchoire sous les oreilles. Le mépris des dames pour cette fille devenait féroce, comme une envie de la tuer ou de la jeter en bas de la voiture, dans la neige, elle, sa timbale, son panier et ses provisions.

Mais Loiseau dévorait des yeux la terrine de poulet. Il dit : « À la bonne heure, madame a eu plus de précaution que nous. Il y a des personnes qui savent toujours penser à tout. » Elle leva la tête vers lui : « Si vous en désirez, monsieur ? C’est dur de jeûner depuis le matin. » Il salua : « Ma foi, franchement, je ne refuse pas, je n’en peux plus. À la guerre comme à la guerre, n’est-ce pas, madame ? » Et, jetant un regard circulaire, il ajouta : «  Dans des moments comme celui-ci, on est bien aise de trouver des gens qui vous obligent. » — Il avait un journal qu’il étendit pour ne point tacher son pantalon, et sur la pointe d’un couteau toujours logé dans sa poche, il enleva une cuisse toute vernie de gelée, la dépeça des dents, puis la mâcha avec une satisfaction si évidente qu’il y eut dans la voiture un grand soupir de détresse.

Mais Boule de Suif, d’une voix humble et douce, proposa aux bonnes sœurs de partager sa collation. Elles acceptèrent toutes les deux instantanément, et, sans lever les yeux, se mirent à manger très vite après avoir balbutié des remerciements. Cornudet ne refusa pas non plus les offres de sa voisine, et l’on forma avec les religieuses une sorte de table en développant des journaux sur les genoux.

Les bouches s’ouvraient et se fermaient sans cesse, avalaient, mastiquaient, engloutissaient férocement. Loiseau, dans son coin, travaillait dur, et, à voix basse, il engageait sa femme à l’imiter. Elle résista longtemps, puis, après une crispation qui lui parcourut les entrailles, elle céda. Alors son mari, arrondissant sa phrase, demanda à leur « charmante compagne » si elle lui permettait d’offrir un petit morceau à Mme Loiseau. Elle dit : « Mais oui, certainement, monsieur, » avec un sourire aimable, et tendit la terrine.

Un embarras se produisit lorsqu’on eut débouché la première bouteille de bordeaux : il n’y avait qu’une timbale. On se la passa après l’avoir essuyée. Cornudet seul, par galanterie sans doute, posa ses lèvres à la place humide encore des lèvres de sa voisine.
`,
      placeInLiteratureWork: {
        location: "Première partie : le repas dans la diligence",
        plotPointBefore:
          "La diligence est partie depuis le matin et avance très lentement dans la neige. Il n'y a aucune auberge sur la route et les voyageurs souffrent de la faim. Ils ont jusqu'ici ignoré ou méprisé Boule de suif.",
        plotPointAfter:
          "Les Carré-Lamadon et les Bréville finissent eux aussi par accepter la nourriture. Tout le panier est vidé, et les voyageurs se mettent à parler aimablement avec Boule de suif. Le soir, la diligence arrive à l'auberge de Tôtes.",
      },
      questions: [
        {
          question:
            "Comment l'attitude des voyageurs envers Boule de suif change-t-elle au cours de ce passage ? Pourquoi ?",
          answerShouldInclude: [
            "Au début, ils la méprisent et l'envient : le mépris des dames devient « féroce, comme une envie de la tuer ou de la jeter en bas de la voiture ».",
            "Puis la faim est plus forte que le mépris : Loiseau accepte le premier, les religieuses acceptent « instantanément », Cornudet aussi, et Mme Loiseau finit par céder après avoir résisté.",
            "Leur langage devient poli et flatteur : Loiseau l'appelle « madame » et « charmante compagne ».",
            "Ce changement n'est pas sincère : il s'explique seulement par l'intérêt, ce qui montre leur hypocrisie.",
          ],
        },
        {
          question:
            "Que nous apprend ce passage sur le caractère de Boule de suif ?",
          answerShouldInclude: [
            "Elle est prévoyante : elle seule a préparé des provisions « pour un voyage de trois jours ».",
            "Elle est généreuse : elle propose elle-même de partager (« Si vous en désirez, monsieur ? C'est dur de jeûner depuis le matin »), même avec ceux qui l'ont insultée.",
            "Elle est modeste et aimable : elle parle « d'une voix humble et douce » et répond « avec un sourire aimable ».",
            "Elle a des manières délicates (une « fine timbale en argent », elle mange « délicatement »), ce qui contraste avec la gloutonnerie des autres.",
          ],
        },
        {
          question:
            "Analysez la manière dont le narrateur décrit les voyageurs en train de manger. Quel est l'effet produit ?",
          answerShouldInclude: [
            "Les verbes sont nombreux et de plus en plus forts : les bouches « avalaient, mastiquaient, engloutissaient férocement » (énumération, gradation).",
            "Les voyageurs sont décrits comme des animaux : Loiseau « dévorait des yeux » la terrine et « dépeça des dents » la cuisse de poulet.",
            "Le narrateur insiste sur le corps et les réactions physiques : les narines, la « salive abondante », la « contraction douloureuse de la mâchoire ».",
            "L'effet est satirique : les gens « bien élevés » perdent leurs bonnes manières dès qu'ils ont faim.",
          ],
        },
        {
          question:
            "Quel rôle ce passage joue-t-il dans l'ensemble de la nouvelle ?",
          answerShouldInclude: [
            "Il montre pour la première fois que les voyageurs profitent de Boule de suif quand ils ont besoin d'elle.",
            "Il annonce la suite : après ses provisions, c'est elle-même qu'ils vont « sacrifier » à leur intérêt.",
            "Il prépare la scène finale, qui lui répond de façon symétrique : dans le second repas, tout le monde mange et personne ne partage avec elle.",
          ],
        },
      ],
    },

    {
      id: "bouledesuif-fin",
      text: `
Au bout de trois heures de route, Loiseau ramassa ses cartes : « Il fait faim », dit-il.

Alors sa femme atteignit un paquet ficelé d’où elle fit sortir un morceau de veau froid. Elle le découpa proprement par tranches minces et fermes, et tous deux se mirent à manger.

— Si nous en faisions autant, dit la comtesse. On y consentit et elle déballa les provisions préparées pour les deux ménages. C’était, dans un de ces vases allongés dont le couvercle porte un lièvre en faïence, pour indiquer qu’un lièvre en pâté gît au-dessous, une charcuterie succulente, où de blanches rivières de lard traversaient la chair brune du gibier, mêlée à d’autres viandes hachées fin. Un beau carré de gruyère, apporté dans un journal, gardait imprimé : « faits divers » sur sa pâte onctueuse.

Les deux bonnes sœurs développèrent un rond de saucisson qui sentait l’ail ; et Cornudet, plongeant les deux mains en même temps dans les vastes poches de son paletot sac, tira de l’une quatre œufs durs et de l’autre le croûton d’un pain. Il détacha la coque, la jeta sous ses pieds dans la paille et se mit à mordre à même les œufs, faisant tomber sur sa vaste barbe des parcelles de jaune clair qui semblaient, là dedans, des étoiles.

Boule de Suif, dans la hâte et l’effarement de son lever, n’avait pu songer à rien ; et elle regardait, exaspérée, suffoquant de rage, tous ces gens qui mangeaient placidement. Une colère tumultueuse la crispa d’abord, et elle ouvrit la bouche pour leur crier leur fait avec un flot d’injures qui lui montait aux lèvres ; mais elle ne pouvait pas parler tant l’exaspération l’étranglait.

Personne ne la regardait, ne songeait à elle. Elle se sentait noyée dans le mépris de ces gredins honnêtes qui l’avaient sacrifiée d’abord, rejetée ensuite, comme une chose malpropre et inutile. Alors elle songea à son grand panier tout plein de bonnes choses qu’ils avaient goulûment dévorées, à ses deux poulets luisants de gelée, à ses pâtés, à ses poires, à ses quatre bouteilles de Bordeaux ; et sa fureur tombant soudain, comme une corde trop tendue qui casse, elle se sentit prête à pleurer. Elle fit des efforts terribles, se raidit, avala ses sanglots comme les enfants, mais les pleurs montaient, luisaient au bord de ses paupières, et bientôt deux grosses larmes, se détachant des yeux, roulèrent lentement sur ses joues. D’autres les suivirent plus rapides, coulant comme des gouttes d’eau qui filtrent d’une roche, et tombant régulièrement sur la courbe rebondie de sa poitrine. Elle restait droite, le regard fixe, la face rigide et pâle, espérant qu’on ne la verrait pas.

Mais la comtesse s’en aperçut et prévint son mari d’un signe. Il haussa les épaules comme pour dire : « Que voulez-vous, ce n’est pas ma faute. » Mme Loiseau eut un rire muet de triomphe et murmura : « Elle pleure sa honte. »

Les deux bonnes sœurs s’étaient remises à prier, après avoir roulé dans un papier le reste de leur saucisson.

Alors Cornudet, qui digérait ses œufs, étendit ses longues jambes sous la banquette d’en face, se renversa, croisa ses bras, sourit comme un homme qui vient de trouver une bonne farce, et se mit à siffloter la Marseillaise.

Toutes les figures se rembrunirent. Le chant populaire, assurément, ne plaisait point à ses voisins. Ils devinrent nerveux, agacés, et avaient l’air prêts à hurler comme des chiens qui entendent un orgue de barbarie. Il s’en aperçut, ne s’arrêta plus. Parfois même il fredonnait les paroles :

Amour sacré de la patrie,

Conduis, soutiens, nos bras vengeurs,

Liberté, liberté chérie,

Combats avec tes défenseurs !

On fuyait plus vite, la neige étant plus dure ; et jusqu’à Dieppe, pendant les longues heures mornes du voyage, à travers les cahots du chemin, par la nuit tombante, puis dans l’obscurité profonde de la voiture, il continua, avec une obstination féroce, son sifflement vengeur et monotone, contraignant les esprits las et exaspérés à suivre le chant d’un bout à l’autre, à se rappeler chaque parole qu’ils appliquaient sur chaque mesure.

Et Boule de Suif pleurait toujours ; et parfois un sanglot, qu’elle n’avait pu retenir, passait, entre deux couplets, dans les ténèbres.
`,
      placeInLiteratureWork: {
        location: "Fin de la nouvelle : le second repas dans la diligence",
        plotPointBefore:
          "Poussée par les autres voyageurs, Boule de suif a fini par céder à l'officier prussien. Le lendemain matin, la diligence peut repartir ; tous l'évitent et font comme s'ils ne la connaissaient pas.",
        plotPointAfter:
          "C'est la fin de la nouvelle : elle se termine sur les pleurs de Boule de suif, sans commentaire du narrateur.",
      },
      questions: [
        {
          question:
            "Comparez ce repas avec le premier repas dans la diligence. Quelles sont les différences, et quel est l'effet de cette construction ?",
          answerShouldInclude: [
            "La situation est inversée : cette fois, tous les autres ont des provisions, et Boule de suif n'a rien, parce qu'elle n'a pu « songer à rien » « dans la hâte et l'effarement de son lever ».",
            "Dans le premier repas, elle avait tout partagé ; ici, personne ne lui offre rien : « Personne ne la regardait, ne songeait à elle. »",
            "Elle se souvient elle-même de son panier : « ses deux poulets luisants de gelée », « ses pâtés », « ses quatre bouteilles de Bordeaux » qu'ils avaient « goulûment dévorées ».",
            "La construction symétrique (ou circulaire) de la nouvelle fait ressortir l'ingratitude et l'égoïsme des voyageurs.",
          ],
        },
        {
          question:
            "Expliquez l'expression « ces gredins honnêtes ». Que révèle-t-elle ?",
          answerShouldInclude: [
            "C'est un oxymore : les deux mots ont des sens opposés.",
            "Les voyageurs sont « honnêtes » pour la société (mariés, riches, respectés), mais ce sont des « gredins » par leur conduite.",
            "Ils l'ont « sacrifiée d'abord, rejetée ensuite, comme une chose malpropre et inutile » : ils l'ont utilisée comme un objet.",
            "L'expression traduit la pensée de Boule de suif, mais aussi le jugement du narrateur : elle résume la critique de l'hypocrisie sociale.",
          ],
        },
        {
          question:
            "Comment les sentiments de Boule de suif évoluent-ils dans ce passage, et comment les autres réagissent-ils à ses larmes ?",
          answerShouldInclude: [
            "Elle ressent d'abord de la colère (« suffoquant de rage », « un flot d'injures qui lui montait aux lèvres »), mais elle ne peut pas parler.",
            "Sa colère se change en tristesse : sa fureur tombe « comme une corde trop tendue qui casse » et elle se met à pleurer.",
            "Elle essaie de garder sa dignité : elle « avala ses sanglots comme les enfants » et reste « droite », « espérant qu'on ne la verrait pas ».",
            "Les autres n'ont aucune pitié : le comte hausse les épaules (« ce n'est pas ma faute »), Mme Loiseau dit avec un « rire muet de triomphe » : « Elle pleure sa honte », et les religieuses se remettent à prier.",
          ],
        },
        {
          question:
            "Quel sens peut-on donner à la Marseillaise que Cornudet siffle à la fin ?",
          answerShouldInclude: [
            "C'est une provocation et une vengeance contre les autres voyageurs, qui sont conservateurs et détestent ce chant républicain (« son sifflement vengeur »).",
            "Les paroles sont ironiques dans cette situation : « Amour sacré de la patrie » et « Liberté » rappellent que seule Boule de suif s'est montrée patriote, et qu'on l'a forcée à céder à l'ennemi.",
            "Cornudet reste pourtant ambigu : il n'a pas défendu Boule de suif, et lui non plus ne partage pas sa nourriture avec elle.",
            "La nouvelle se termine sur ses sanglots « dans les ténèbres » : c'est une fin pessimiste, sans consolation ni morale explicite.",
          ],
        },
      ],
    },
  ],
};
