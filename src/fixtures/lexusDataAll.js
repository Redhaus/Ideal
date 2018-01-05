const unitOneLexis = [
    {   // Open curly braces: NOTE Everything goes between open and closing bracket at bottom. This is called an Object.

        word: 'Apollo', // this is called key value pair for is ( key: "value in quotes"  )(requires comma after value if item after it)

        pos: 'n.', // same key value pair. Note comma because more items follow it.

        variation: ['Apollonian (adj.)'], // value in this case is an array format is in braces ["value", "value", "value"] all values in quotes separated by commas. Note last value doesn't need comma after it

        etymology: "Olympian deity, god of music, poetry, medicine, etc., later identified with Helios, the sun god; the name is a Latin form of Greek Apollon, said to be perhaps related to an obsolete Greek verb meaning “to drive away” (evil, etc.).", // key value pair this time value is longer with more its own quotes at times so best to place entire value in new double quotes. 

        quote: "“It is by those two art sponsoring deities, Apollo and Dionysus, that we are made to recognize the tremendous split, as regards both origins and objectives, between the plastic, Apollinian arts and the nonvisual art of music inspired by Dionysus.” ", // same as above

        author: 'Friedrich Nietzsche', //key value pair 
        book: 'The Birth of Tragedy', //key value pair

        application: [ //this is just like variation above but it is an array with sentences. 
            'know that Apollo will function as the primary archetype of masculinity from which other symbolic and archetypal functions will be derived.',
            'explore what possibille significations arise from Apollo and enumerate them.',
            'understand how Apollonian archetypes compare to those of Dionysus.'   //note last item in array doesn't need comma
        ], // NOTE comma comes after closing bracket of array
        questions: [ // Same as above
            'Are there any archetypes that are universal?',
            'What might the presence or absence of universal archetypes suggest about the human condition?',
            'What objects in your classroom or home are Apollonian in nature?'
        ],
        // icons: ['event', 'person', 'common']    // IF you add icons data it would look like this where it becomes another array
    },  // Closing curly braces

    {
        word: 'abstract',
        pos: 'adj.',
        variation: ['abstract (v.)', 'abstraction (n.)'],

        etymology: "Meaning “withdrawn or separated from material objects or practical matters” is from mid-1500s. That of “difficult to understand, abstruse” is from ~ 1400. 1914 in reference to modern art while abstract expressionism is from the 1940s-1950s specifically in reference to the work of Jackson Pollock, though the term itself had been used in the 1920s of Wassily Kandinsky as well as certain Impressionistic painters such as Claude Monet.",

        quote: "The physician weigheth the nature of a man’s body, and the nature of things helpful or hurtful unto it. And the metaphysic, though it be in the second and abstract notions, and therefore be counted supernatural, yet doth he indeed build upon the depth of nature.",

        author: 'Sir Philip Sydney',
        book: 'An Apology for Poetry',

        application: [
            'know that abstract is the opposite of concrete.',
            'considered the term “abstract” in relation to figurative and literal.',
            'explore whether these terms apply to other disciplines as well. ',
            'consider the significance of abstract art for art itself and Modernism.'
        ],

        questions: [
            'How is it that abstract concepts in mathematics lead to concrete results?',
            'Is something similar happening in literature?',
            'Since language itself has an intrinsic dependence on metaphor, is it possible to escape abstraction?'
        ]
    },
  
    {
        word: 'alliteration',
        pos: 'n.',
        variation: ['alliterate (v.)', 'alliterative (adj.)', 'alliteratively (adv.)'],

        etymology: "1650s, “a beginning with the same letter,” from Modern Latin alliterationem, noun of action from alliterare “to begin with the same letter,” from Latin ad- “to”  + littera “letter, script.” Formed on model of obliteration, etc.",

        quote: "[A]ttempts to explain alliteration, bordering  on parody, required a rebuff and an attempt  to produce concrete evidence showing that sounds in verse exist apart from any connection with imagery, that they have an independent oral function.",

        author: 'Boris Eichenbaum',
        book: 'An Apology for Poetry',

        application: [
            'recognize alliteration in both poetry and prose.',
            'consider the effect of alliteration on a text.',
            'consider whether alliteration is impactful or memorable.',
            'note the use of alliteration in media and popular culture.'
        ],

        questions: [
            'What are the two types of alliteration?',
            'How might alliteration impact mood, rhythm, or characterization?',
            'The repetition of ‘hard’ or ‘soft’ sounds might have what effect on a text?',
            'How might alliteration be effectively used in advertising?'
        ]
    },
  
    {
        word: 'allusion',
        pos: 'n.',
        variation: ['allude (v.)'],

        etymology: "1540s, from Latin allusionem (nominative allusio) “a playing with, a reference to,” noun of action from past participle stem of alludere. An allusion is never an outright or explicit mention of the person or thing the speaker seems to have in mind.",

        quote: "The frequency and depth of literary allusion in the poetry of Eliot and others has driven so many in pursuit of full meanings [...] that it has become a kind of commonplace to suppose that we do not know what a poet means. unless we have traced him in his reading—a supposition redolent with intentional implications.",

        author: 'W. K. Wimsatt and Monroe C. Beardsley',
        book: 'The Intentional Fallacy',

        application: [
            'be introduced to the various categories of common allusions: cultural, literary, historical, biblical, and mythological.'
        ],

        questions: [
            'What is the potential effect of allusions on a text?',
            'Is it possible for an allusion to fail to impact an audience?',
            'What should a writer consider when utilizing allusion?'
        ]
    },
    {
        word: 'antagonist',
        pos: 'n.',
        variation: ['antagonize (v.)', 'antagonistic (adj.)', 'antagonism (n.)'],

        etymology: "1590s, from French antagoniste (16c.) or directly from Late Latin antagonista, from Greek antagonistes “competitor, opponent, rival,” agent noun from antagonizesthai “to struggle against, oppose, be a rival,” from anti- “against” (see anti-) + agonizesthai “to contend for a prize,” from agon “contest”. Originally in battle or sport, extended 1620s to any sphere of human activity.",

        quote: "[A] novel starts in us all sorts of antagonistic and opposed emotions. Life conflicts with something that is not life. Hence the difficulty of coming to any agreement about novels, and the immense sway that our private prejudices have upon us.",

        author: 'Virginia Woolf',
        book: 'A Room of One’s Own',

        application: [
            'know that antagonist is the opposite of protagonist. ',
            'give evidence as to why or why not a particular character is an antagonist.',
            'consider how setting can be antagonistic. ',
            'explore how the relationship between the antagonist and the protagonist creates conflict or tension.'
        ],

        questions: [
            'Does a narrative require both a protagonist and an antagonist? ',
            'If your life were a novel, who would be the antagonist?',
            'How can we identify the antagonist?',
            'What are some archetypes of antagonists?',
            'How can aspects of a text that are not characters be antagonistic?'
        ]
    },

    {
        word: 'archetype',
        pos: 'n.',
        variation: ['archetypal (adj.)'],

        etymology: "“original pattern from which copies are made, ” 1540s or c. 1600, from Latin archetypum, from Greek arkhetypon “pattern, model, figure on a seal, ” neuter of adjective arkhetypos “first - moulded, ” from arkhe- “first” + typos “model, type, blow, mark of a blow.” Jungian psychology sense of “pervasive idea or image from the collective unconscious” is from 1919. Carl Jung defined archetypal images as “forms or images of a collective nature which occur practically all over the earth as constituents of myths and at the same time as autochthonous individual products of unconscious origin” (“Psychology and Religion” 1937).",

        quote: "[I]he intention is to make us feel the lovable beauty of the archetype and of the Divine Idea; for to admire a representation is to admire the original upon which it was made.",

        author: 'Plotinus',
        book: 'On the Intellectual Beauty',

        application: [
            'know that archetypes are a foundational concept and should be given the utmost attention. ',
            'know the various types of archetypes, particularly Apollonian and Dionysian. ',
            'explore situational and character archetypes. ',
            'emphasize exploration of symbolic archetypes. ',
            'understand the theory that all symbols are built on archetypes. ',
            'explore how symbols fall into two basic categories based upon Apollonian and Dionysian archetypes. ',
            'be introduced to Friedrich Nietzsche, his Birth of Tragedy, and the theory of eternal recurrence. '
        ],

        questions: [
            'What are archetypes? ',
            'Why are archetypes important for the study of literature? ',
            'What are the most basic archetypes? ',
            'How can we use archetypes to create a narrative, create characters, or create meaning? ',
            'How do writers use archetypes?'
        ]
    },


    {

        word: 'asyndeton',
        pos: 'n.',

        etymology: "“omission of conjunctions, ” 1580s, from Latin, from Greek asyndeton, neuter of asyndetos “unconnected, ” from a-, privative prefix, + syndetos, from syndein “to bind together, ” from syn- “together” + dein “to bind, ” related to desmos “band, ” from de- “to bind.”",

        quote: "[I]n the speech against Meidias, examples will be found of asyndeton, interwoven with instances of anaphora and diatyposis.‘For the smiter can do many things (some of which the sufferer cannot  even describe to another) by attitude, by look, by voice.’",

        author: 'Pseudo - Longinus',
        book: 'On the Sublime',

        application: [
            'know that asyndeton is the opposite of polysyndeton. ',
            'recognize the use of this device in both poetry and prose. ',
            'consider the effect of asyndeton in speeches.',
            'be aware that asyndeton is a technique to employ when enumerating a list to suggest its continuation without ending the list with “etc.”'
        ],

        questions: [
            'How does asyndeton effect the pacing of a speech? ',
            'When an asyndeton is encountered as a list of items, does it suggest a symbolic relationship between those items?'

        ]
    },



    {
        word: 'audience',
        pos: 'n.',

        etymology: "late 1400s, “the action of hearing, ” from Old French audience, from Latin audentia “a hearing, listening, ” from audientum (nominative audiens), present participle of audire “to hear, ” from compound au- dh - “to perceive physically, grasp, ” from root au- “to perceive” (cognates: Greek aisthanesthai “to feel;” Sanskrit avih, Avestan avish “openly, evidently;” Old Church Slavonic javiti “to reveal”). Meaning “formal hearing or reception” is from late 1400s; that of “persons within hearing range, assembly of listeners” is from early 1500s (French audience retains only the older senses).Sense transferred 1855 to “readers of a book.” Audience - participation adj.first recorded 1940.",

        quote: "“[T]ransfer your easy tone, your simple expression, your everyday bearing, to the stage, and, I assure you, you will be paltry and weak.You may cry to your heart’s content, and the audience will only laugh.It will be the tragedy outside a booth at a fair.”",

        author: "Denis Diderot",
        book: "The Paradox of Acting",

        application: [
            'identify the audience of a text.',
            'consider the audience when producing an argument.',
            'consider the relationship between audience, context, and message.',
            'adapt one message for two different audiences. '
        ],

        questions: [
            'What are some methods for identifying the audience of a text?',
            'Why is it important to consider one’s audience when writing?',
            'How can we adapt a message for a particular audience?',
            'What is an ideal audience?'
        ]
    },

    {
        word: 'caesura',
        pos: 'n.',

        etymology: "1550s, from Latin caesura, “metrical pause, ” literally “a cutting, ” from past participle stem of caedere “to cut down, ” any pause in the middle of a line of poetry.",

        quote: "“The historical dimension of literature, its eventful continuity that is lost in traditionalism as in positivism, can meanwhile be recovered only if the literary historian finds points of intersection and brings works to light that articulate the processlike character of ‘literary evolution’ in its moments formative of history as well as its caesurae between periods.”",

        author: "Hans Robert Jauss",
        book: "Literary History as a Challenge to Literary Theory",

        application: [
            'recognize the use of this device in poetry. ',
            'explore the effect of this devise in pacing or in placing emphasis on specific words or images. ',
            'understand how to use the term as a synonym for a “break” in time or thought.'
        ],

        questions: [
            'How does caesura effect the pacing of a poem? ',
            'Is the caesura suggesting an emphasis upon the words or images surrounding it?'
        ]

    },

    {
        word: 'conceit',
        pos: 'n.',

        etymology: "late 14c., “something formed in the mind, thought, notion, ” from conceiven based on analogy of deceit and receipt.Sense evolved from “something formed in the mind, ” to “fanciful or witty notion” (1510s), to “vanity” (c. 1600) through shortening of self- conceit(1580s).For literature, refers to a motif or trope common in texts.",

        quote: "“The seventeenth century gave us the conceit or intellectualized image of “metaphysical” poetry, typically Baroque in its ability to express an exuberant sense of design combined with a witty and paradoxical sense of the stress and tension underlying the design.”",

        author: "Northrup Frye",
        book: "Anatomy of Criticism",

        application: [
            'understand literary conceits within particular types of literature or particular historical moments. ',
            'explore how have pre-conceived notions can both help and hinder their exploration of literature as well as their own lives.'
        ],

        questions: [
            'What conceits about literature guide your reading? ',
            'What conceits are necessary to understand literature? ',
            'What conceits about how “life” works guide your actions? ',
            'Are conceits helpful, dangerous, or both?'
        ]
    },



    {
        word: 'concrete',
        pos: 'adj.',
        variation: ['concrete (n.)', 'concretize (tr.v.)'],

        etymology: "late 1400s, “actual, solid, ” from Latin concretus “condensed, hardened, thick, hard, stiff, curdled, congealed, clotted, ” figuratively “thick; dim, ” literally “grown together; ” “to grow together, ” from com- “together” + crescere “to grow.” Sense of “building material made from cement, etc.” is first recorded 1834.",

        quote: "“The second requirement, which is deducible from the first, is the demand that the content of art should be nothing essentially abstract.This does not mean, however, that it should be merely concrete in the sense that the sensuous object is such in its contrast to all that is spiritual and the content of thought, regarding these as the essentially simple and abstract.”",

        author: "Georg Wilhelm Friedrich Hegel",
        book: "The Philosophy of Fine Art",

        application: ['know that concrete is the opposite of abstract. ',
            'consider the term “concrete” in relation to figurative and literal. ',
            'explore whether these terms apply to other disciplines as well. ',
            'know that giving concrete examples for abstract ideas is an especially effective means of communication.'
        ],

        questions: [

            'What are some methods that  a writer can use to concretize an abstract idea? ',
            'What might be a problem with writing that is purely concrete or purely abstract?'
        ]

    },

    {
        word: 'connotation',
        pos: 'n.',
        variation: ['connote (v.)', 'connotative (adj.)'],

        etymology: "1530s, from Medieval Latin connotationem), “signify in addition to the main meaning, ” a term in logic, literally “to mark along with,” from Latin com- “together” + notare “to mark.”",

        quote: "“Another equivocation in our talk about meaninglessness was introduced by John Stuart Mill, and again rests on a new, [] concept of meaning.He locates the essence of the meaning of names in their connotation, and therefore treats non- connotative names as meaningless.”",

        author: "Edmund Husserl",
        book: "Expression and Meaning",

        application: [
            'know that connotation is the opposite of denotation. ',
            'understand that the connotations of words change over time. ',
            'explore the significance of connotations in order to better understand the potential “meanings” of a text.'
        ],

        questions: [
            'Are there words that do not have connotations? ',
            'Is connotation necessary to create meaning? ',
            'How can we know the connotations of words? ',
            'Why does the connotation of words change over time? ',
            'To what extent does my own personal experience add connotations to words?'
        ]

    },
    {
        word: 'constructive',
        pos: 'adj.',
        variation: ['construct (v.)', 'construct (n.)'],

        etymology: "early 1500s, “derived by interpretation, ” from Middle French constructif or from Medieval Latin constructivus, from Latin construct-, past participle stem of construere “to heap up.” Meaning “pertaining to construction” is from 1817; “having the quality of constructing” is from 1841. Constructive criticism is attested by 1841.",

        quote: "“Imagism is motivated by a distaste for the systematic abstractedness of thought.It presupposes acquaintance with science; that famous activity which is ‘constructive’ with respect to the tools of our economic role in this world, and destructive with respect to nature.”",

        author: "John Crowe Ransom",
        book: "Poetry: A Note in Ontology",

        application: [
            'consider “constructive,” as an adjective to describe the means by which student-to-student and teacher-to-student criticism should beconducted.',
            'understand how to comment upon the work of others in a “constructive” way. ',
            'consider the verb form (of construct) as useful in how we “construct” an argument or “construct” ourselves. ',
            'consider the noun form (of construct) as the idea of self being a construct of external forces ',
            'consider how our perspectives of the world do not exist in-and-of-themselves, but are “constructed.”',
        ],


        questions: [
            'How do we give constructive criticism to our peers? To our superiors? ',
            'To what extent is identity constructed? Is it possible to “deconstruct” one’s identity and then “re-construct” it? ',
            'To what extent is reality itself a construct?'
        ]
    },

    {
        word: 'context',
        pos: 'n.',
        variation: ['contextualize (tr.v.)', 'contextual (adj.)', 'contextualization (n.)'],

        etymology: "early 15c., from Latin contextus “a joining together, ”  “to weave together, ” from com- “together” + texere “to weave, to make.”",

        quote: "“Suppose I say to you, for example, ‘Sir, you are standing on my foot.’ Now in most contexts when I make a statement of that sort I am making not only an Assertive, but I am also indirectly requesting and perhaps even ordering you to get off my foot.”",

        author: "John R.Searle",
        book: "Expression and Meaning: Studies in the Theory of Speech Acts",

        application: [
            'be aware of how context impacts any message. ',
            'explore how the historical period influences a text or how a specific occasion effects the delivery of a message in a speech. ',
            'consider how context influences the meaning of an utterance.'
        ],

        questions: [
            'How does knowing the historical context surrounding the production of a work of literature enhance our understanding of the text?',
            'How might context effect the delivery of a message? How does context change the possible interpretation of an utterance? ',
            'How many different interpretations are there of the following statements: “It’s hot in here”; “Flying airplanes can be dangerous”; “Shut the door, please”?'
        ]

    },


    {
        word: 'cyclic',
        pos: 'adj.',
        variation: ['cyclical (adj.)', 'cycle (n.)','cycle (v.)'],

        etymology: "1794, from French cyclique (1600s), from Latin cyclicus, from Greek kyklikos “moving in a circle, ” from kyklos.Referring to history, the sense of historical repetition.",

        quote: "“Every crucial periodicity of experience: dawn, sunset, the phases of the moon, seed - time and harvest, the equinoxes and the solstices, birth, initiation, marriage, and death, get rituals attached to them.The pull of ritual is toward pure cyclical narrative, which, if there could be such a thing, would be automatic and unconscious repetition.”",

        author: "Northrup Frye",
        book: "Anatomy of Criticism",

        application: [
            'understand aspects of life that are cyclical in nature. ',
            'explore how cycles influence society and cult ure. ',
            'consider whether history moves in cycles. ',
            'consider how natural cycles (i.e. the rising and setting of the sun) influence perspective.'
        ],

        questions: [
            'Does history move in cycles?',
            'What aspects of your daily life are cyclical? ',
            'Are habits a type of cyclical action? ',
            'Is there a relationship between rituals and ccles? ',
            'How are habits formed?',
            'Is it possible for something to have neither beginnng nor ending?'
        ]
    },


    {
        word: 'denotation',
        pos: 'n.',
        variation: ['denote (v.)', 'denotative (adj.)'],

        etymology: "1530s, “indication,” from Late Latin denotationem. Commonly understood as the dictionary definition of a word.",

        quote: "“The terms of scien ce are abstract symbols which d not change under the pressure of the context. They are pure (or aspire to be pure) denotations; they are defined in advance. They are not to be warped into new meanings. But where is the dictionary which contains the terms of a poem? It is a truism that the poet is continually forced to remake language.”",

        author: "Cleanth Brooks",
        book: "The Heresy of Paraphrase",

        application: [
            'know that denotation is the opposite of connotation.',
            'understand howdenotation does not fully provide the meaning of a word.'
        ],

        questions: [
            "Where can we find the denotative meaning of a word?",
            "What is absent from denotative meaning?",
            "How might context affect meaning?",
            "Which takes precedence in meaning: denotation, connotation, or convention?"
        ]
    },


    {
        word: "deus ex-machina",
        pos: "n.",

        etymology: '1690s, from Modern Latin translation of Greek, literally “the god from the machine,” the device by which “gods” were suspended over the stage in Greek theater. The feminine is dea ex machina.',

        quote: "“The bridge should not be “parachuted down” from above; it should not be imposed by a deus ex machina upon the social scene; on the contrary it should come from the muscles and the brains of the citizens.”",

        author: 'Frantz Fanon',
        book: 'The Wretched of the Earth',

        application: [
            'know of the use of this device in Greek theatre and the state of this device today.',
            'consider the device in the abstract, i.e. escapism, daydreaming, popular culture.'
        ],

        questions: [
            'What is the role of the deux ex machina in Greek theatre? ',
            'Which playwrights utilized the device? ',
            'How is the device used today? ',
            'How does the device apply to everyday life?'
        ]

    },

    {
        word: 'dialectic',
        pos: 'n.',
        variation: ['dialectical (adj.)'],

        etymology: "1580s, earlier dialatik (late 1400s), from Old French dialectique (1200s), from Latin dialectica, from Greek dialektike (techne) “(art of) philosophical discussion or discourse,” fem. of dialektikos “of conversation, discourse,” from dialektos “discourse, conversation.” Originally synonymous with logic; in modern philosophy refined by Kant, then by Hegel, who made it mean “process of resolving or merging contradictions in character.” ",

        quote: "“The notion of the free expression of opinion, indeed, that of intellectual freedom itself in bourgeois society, upon which cultural criticism is founded, has its own dialectic. For while the mind extricated itself from a theological feudal tutelage, it has fallen increasingly under the anonymous sway of the status quo.”",

        author: 'Theodor W. Adorno',
        quote: 'Cultural Criticism and Society',

        application: [
            'understand what a dialectic view of history is.',
            'examine the relationship between opposing forces.',
            'understand the terms thesis, antithesis, and synthesis.',
            'give examples of dialectic forces in our everyday lives.',
            'local dialectical elements in a text.'
        ],

        questions: [
            'What is a dialectic view of history?',
            'How can we synthesize oppositional forces?',
            'What comment does the dialectic make upon progress?',
            'Are our identities dialectical?'
        ]
    },


    {

        word: 'Dionysus',
        pos: 'n.',
        variation: ['Dionysian (adj.)'],

        etymology: "of or pertaining to Dionysos (Latin Dionysus), Greek god of wine and revelry, identified with Roman Bacchus. Refers to archetypes of femininity.",

        quote: "“[L]ike Bacchic maidens who draw milk and honey from the rivers when they are under the influence of Dionysus but not when they are in their right mind.  And the soul of the lyric poet does the same, as they themselves say.”",

        author: 'Plato',
        book: 'Ion',

        application: [
            'know that Dionysus will function as the primary archetype of masculinity from which other symbolic and archetypal functions will be derived. ',
            'explore what possibille significations arise from Dionysus and enumerate them. ',
            'understand how Dionysian archetypes compare to those of Apollo. '
        ],

        questions: [
            'Are there any archetypes that are universal? ',
            'What might the presence or absence of universal archetypes suggest about the human condition? ',
            'What objects in your classroom or home are Dionysian in nature?'
        ]

    },


    // NEXT OBJECT GOES HERE








] // this must be the last thing on the page






// RAW Data that needs to be formatted

dualism
n.

dualistic
adj.

Etymology 

from Latin dualis, from duo ‘two.’ 1755 as a term in philosophy, from French dualisme (1754); also used in theological senses.

“The theory of expression inevitably presupposes a certain dualism between the inner and outer elements and the explicit primacy of the former, since each act of objectification (expression) goes from inside out.”

Valentin N. Volosinov
Verbal Interaction

Application 

• know that dualism is a foundational concept should be given the utmost attention.
• identity dualistic elements in a text. 
• consider how knowledge itself is built upon dualism. 
• consider the binary opposition present in language: hot/cold, day/night, plant/animal. 
• consider exploring whether there exists an entity that cannot be bifurcated. 
• be introduced to the mathematician René Descartes, his Meditations, and his method of deductive reasoning.

Key Questions 

1. What is dualism? 
2. How does an individual have a “dual” nature? 
Is the mind separate from the body? What is the relationship between the mind and the body? 
3. Who is René Descartes? 
4. What is the relationship between dualism and creation myths? 
5. What is deduction? 
6. What is cogito ergo sum?
7. What is skepticism?




end stop
n. 

end stop
v.

end-stopped
adj.

Definition 

ending a line of poetry with a punctuation mark or a pause in speaking to signal the end of a syntagmatic unit.

“From the expansive verse paragraphs of the opening three books, we find now that the epic narrator’s sentences have shortened, his figurative language has been trimmed, his pentameter lines more frequently end-stopped.”

Rachel Falconer
“Heterochronic Representations of the Fall: Bakhtin, Milton, DeLillo”

Application 

• know that end stop is the opposite of enjambment. 
• distinguish between an end stop and an enjambment in poetry. 
• explore the impact that end stop has on pacing 
• explore the emphasis that end stop may give to the words or images that precede it.

Key Questions 

1. Might the end stop add emphasis the word or image preceding it? 
2. How does the end stop effect the pacing of the poem?

enjambment
n.

enjambed
adj.

enjamb
v.

Etymology 

1837, from French enjambement or from enjamb (~ 1600), from French enjamber “to stride over,” from en- + jambe “leg.” When a line of verse does not have an end stop.

“The centrifugality of the enjambments transforms what would in prose be an immediately graspable scene – ‘So much depends upon a red wheelbarrow glazed with rain water beside the white chickens’ – into a spectacular chronotopic display.”

Joy Ladin
“ ‘ It Was Not Death’ : The Poetic Career of the Chronotype”

Application 

• know that enjambment is the opposite of end stop. 
• distinguish between an end stop and an enjambment in poetry. 
• explore the impact that enjambment has on pacing and the connection between the words and images on the enjambed lines.

Key Questions 

1. What is the relationship between enjambed lines in the poem? 
2. How does the enjambment effect the pacing of the poem?

epilogue
n.


Etymology 

early 1500s, from Middle French epilogue (1300s), from Latin epilogus, from Greek epilogos “a conclusion, conclusion of a speech, inference,” from epi “upon, in addition” + logos “a speaking.” Earliest English sense was theatrical.

“Now to come to the end of this definition, I think it would be well to recapitulate in a brief epilogue what has been said before about the final cause of poetry.”

Giacopo Mazzoni
On the Defense of the Comedy of Dante


Application 

• know that epilogue is the opposite of prologue. 
• understand the purpose of an epilogue (or conclusion) in their writing. 
• consider how a writer utilizes an epilogue to summarize key points as well as synthesize and conclude the argument. 

Key Questions 

1. What is the purpose of an epilogue? 
2. What componets make for a successful epilogue? 
3. How does an epilogue aid the reader? 
4. How does an epilogue bring an argument to a close?

epithet
n.

epithetic
adj.

epithetical
adj.


Etymology 

“descriptive name for a person or thing,” 1570s, from Middle French épithète or directly from Latin epitheton (source also of Spanish epíteto, Portuguese epitheto, Italian epiteto), from Greek epitheton “an epithet; something added,” noun use of adjective (neuter of epithetos) “attributed, added, assumed,” from epitithenai “to add on,” from epi “in addition” + tithenai “to put.” 

“[F]or having put an end to the feral wandering of these few giants, so that they became the princes of the gentes, he received the epithet Stator, stayer or establisher.”

Giambattista Vico
The New Science

Application 

• be aware of the history of titles and the impact of titles upon our understanding.
• work to earn titles in the classroom, i.e. the Earl of Tardiness or the Duke of Notes.

Key Questions 

1. What types of titles were present in Greek society?
2. Is there any relationship between Greek gods having titles and our own titles? 
3. Why is there a history of epithets? 
4. What is the function of titles?  
5. What do epithets suggest about their particular societies? 
6. Are titles a good thing or a bad thing? 
7. What is your title?

etiology
n.

etiologic
adj.

etiological
adj.



Etymology 

also aetiology, “science of causes or causation,” 1550s, from Late Latin aetiologia, from Greek aitiologia “statement of cause,” from aitia “cause, responsibility” from root ai “to give, allot;” + -logia “a speaking.” 

“These three—history, etiology, analogy—are
grouped under the literal sense. For it is called history, as Augustine expounds, whenever anything is simply related: it is called etiology when its cause is assigned, [and] it is called analogy whenever the truth of one text of Scripture is shown not to contradict the truth of another.”
St. Thomas Aquinas
Summa Theologica

Application 

•explore the relationship between cause and effect. 
• attempt to explore first causes
• attempt to discern a cause from its effect. 

Key Questions 

1. Does every effect have a cause and vice versa? 
2. Is it possible that the effect is the cause? 
3. What is the relationship between causality and determinsim?
4. Is it possible to misidentify a cause? 
5. What is the difference between causation and correlation? 
6. Is it possible that etiology itself leads to an infinite regression?

figurative
adj.

figuratively
adj.

figure
n.



Etymology 

late 1400s, “emblematical,” from Old French figuratif “metaphorical,” from Late Latin figurativus “figurative” (of speech), from figurat-, past participle stem of Latin figurare “to form, shape,” from figura “a shape, form, figure.” Of speech, language, etc., “allegorical, metaphoric, involving figures of speech,” from late 14c.

“My opponents will add that their writings are not fiction but rather figures, to use the correct term, and their authors are figurative writers. O silly subterfuge! As if I were likely to believe that two things to all appearances exactly alike should gain the power of different effects by mere change or difference of name.”

Giovanni Boccaccio
Genealogy of the Gentile Gods

Application 

• know that figurative is the opposite of literal.
• consider the term “figurative” in relation to  abstract and concrete. 
• explore whether these terms apply to other disciplines as well. 

Key Questions 

1. What is the purpose of figurative language?
2. Does figurative language help or hinder communication?
3. How do other disciplines make us of “figures”?

hero
n.

heroine
n.

heroic
adj.


Etymology

late 14c., “man of superhuman strength or physical courage,” from Old French heroe (14c., Modern French héros), from Latin heros (plural heroes) “hero, demi-god, illustrious man,” from Greek heros (plural heroes) “demi-god,” a variant singular of which was heroe. This is of uncertain origin; perhaps originally “defender, protector,” and from root ser- “to watch over, protect.” Meaning “man who exhibits great bravery” in any course of action is from 1660s in English. Sense of “chief male character in a play, story, etc.” first recorded 1690s. Hero-worship is from 1713 in reference to ancient cults and mysteries; of living men by 1830s. At least from the time of Hesiod (8c. B.C.E.) “man born from a god and a mortal,” especially one who had done service to mankind; with the exception of Heracles limited to local deities and patrons of cities. 

As a rough general formula, ‘a length which allows of the hero passing by a series of probable or necessary stages from misfortune to happiness, or from happiness to misfortune’, may suffice as a limit for the magnitude of the story.”

Aristotle
Poetics

Application 

• identify the hero in a text and provide evidence as to why a particular character is a “hero.” 
• explore different ideas of “heroes” from everyday heroes to superheroes. 
• consider how the idea of a hero has changed over time.

Key Questions 

1. What are the qualities of a hero?
2. Can anyone be a hero?  
3. How has the idea of hero changed over time? 
4. Who’s your hero?

hubris
n.

hubristic
adj.


Etymology 

also hybris, 1884, a back-formation from hubristic or else from Greek hybris “wanton violence, insolence, outrage,” originally “presumption toward the gods;” the first element probably ud- “up, out”  but the meaning of the second is debated.

“One could of course understand Creon’s efforts as the marks of hubris and pride, but ‘hubris’ here indicates an attempt to reach too widely and to equate the polis with the whole, rather than an attempt to attempt reach too ‘high.’”

Anthony J. Cascardi
“Tragedy and Philosophy”

Application 

• know that hubris is a type of “hamartia” or tragic flaw. 
• identify hubris in a character and explain how it leads to their downfall. 
• explore why hubris is a tragic flaw.

Key Questions 

1. What is hubris?
2. Is hubris simply pride? 
3. Can bravery be hubristic? 
4. Why is hubris a tragic flaw?

imagery
n. pl.

image
n. sing.

imagine
v.

imagistic
adj.



Etymology

mid-14c., “ce of sculpture, carved figures,” from Old French imagerie “figure” (13c.), from image “likeness, figure, drawing, portrait.” Rhetorical meaning “ornate description, exhibition of images to the mind” (in poetry, etc.) is from 1580s.

“What [], can oratorical imagery effect? Well, it is able in many ways to infuse vehemence and passion into spoken words, while more particularly when it is combined with the argumentative passages it not only persuades the hearer but actually makes him its slave.”

Pseudo-Longinus
On the Sublime

Application 

• recongize the use of imagery in poetry and prose. 
• explore the possible significance of an image for the meaning of a text. 
• utilize imagery in our own writing. 
• consider why imagery can be effective in communicating a message.

Key Questions 

1. Why do writers use imagery? 
2. How do we utilize imagery in our everyday lives? 
3. Is it possible to conceive of an image that is completely fictional? 
4. Aside form textual images, what other types of images are there? 
5. Can imagery be persuasive?

in medias res

Etymology 

From Horace, Latin, literally “in the midst of things,” from medias, accusative fem. plural of medius “middle” + accusative plural of res “a thing,” from  re- “to bestow, endow.” 

“The unnamed protagonist opens the book ‘at random’—indeed just as we always hear details,
episodes, or encounters of a person’s experience in medias res, and never in any complete way from a pure beginning.”

Garry L. Hagberg
Literature and the Constitution of Personhood

Application 

• know that the convention of an epic is to begin a story in medias res. 
• consider how a narrative that is not an epic may begin in medias res to give an epic aura. 
• consider how we all have entered life “in medias res.”

Key Questions 

1. What is the effect of beginning a narrative in the middle of the action? 
2. Is beginning a story in the middle of the action an effective technique? Why or why not? 
3. What is suggested about your experience of life being entered upon in medias res?

investigation
n.

investigate
v.

investigatory
adj.


Etymology 

early 15c., from Old French investigacion (14c.), from Latin investigationem “a searching into, a searching for,” noun of action “to trace out, search after,” figuratively “search into, investigate,” from in- “in, into” + vestigare “to track, trace,” from vestigium “a footprint, a track.”

“I am convinced that the method of teaching which approaches most nearly to the method of investigation is incomparably the best; since, not content with serving up a few barren and lifeless truths, it leads to the stock on which they grew.”

Edmund Burke
A Philosophical Inquiry Into the Origin of Our Ideas of the Sublime and Beautiful

Application 

• understand what is meant by “investigating” a text. 
• understand that we search for “evidence” not for “clues.” 


Key Questions 

1. What does it mean to investigate a text? 
2. Is the investigation of a crime analogous to the investigation of a text? How so? 
3. When conducting an investigation should one have an idea of where the investigation might lead?
4. If we are investigating a text, what is its crime?

juxtaposition
n.

juxtapose
v.

juxtaposed
adj.


Etymology 

1660s, from French juxtaposition (17c.), from Latin iuxta “beside, very near, close to, near at hand” + French position. Latin iuxta is a contraction of iugista adv., superlative of adjective iugos “closely connected,” from iungere “to join.”

“Such a kind of juxtaposition may likewise have this use, that whilst the artist is amusing himself in the contemplation of other arts, he may habitually transfer the principles of those arts to’ that which he professes; which ought to be always present to his mind, and to which everything is to be referred.”

Sir Joshua Reynolds
Discourses on Art

Application 

• be aware of the usefulness of juxtaposition within a text and within analysis of a text. 
• view juxtaposition as a way of “comparing and contrasting.” 
• consider the relationship between juxtaposed objects as either oppositional or complementary.


Key Questions 

1. What is the relationship between two juxtaposed objects? 
2. How might we utilize juxtaposition in our everyday lives? 
3. How is it useful to compare two dissimilar objects? 
4. How is it useful to contrast two similar objects?

leitmotif
n.

Etymology 

1876, “a musical figure to which some definite meaning is attached,” from German Leitmotiv, literally “lead motive,” from leiten “to lead” + Motivs “motive.” Associated with Wagnerian musical drama.

“Men, for whom we are told women were made, have too much occud the thoughts of women; and this association has so entangled love with all their motives of action; and, to harp a little on an old string, having been solely employed either to prepare themselves to excite love, or actually putting their lessons in practice, they cannot live without love.”

Mary Wollstonecraft
A Vindication of the Rights of Woman

Application 

• explore the difference between a leitmotif and a motif.
• consider the use leitmotifs in popular culture, fine art, literature, or music. 

Key Questions 

1. Are leitmotifs and motifs the same thing? 
2. What is the difference between them? 
3. How can we use the concept of leitmotif to complicate a motif? 
4. What is the function of a leitmotif? 
5. What does it mean that we can identify patterns in literature and in science? 
6. Do patterns exist or do we create them?

liminal
adj.

liminary
n.

liminality
n.

Etymology 

1884, from Latin limen “threshold” + -al.

“If ‘the Dixie Pike,’ as Jean Toomer put the matter in Cane, ‘has grown from a goat path in Africa,’ then the black vernacular tradition stands as its signpost, at that liminal crossroads of culture contact and ensuing difference at which Africa
meets Afro-America.”

Henry Louis Gates, Jr. 
The Signifying Monkey

Application 

• understand the importance of the opening of a text for that which follows. 
• consider how the opening of a text is a threshold which readers pass through. 
• consider how the liminal may also be seen as the space between a text and a reader. 
• consider how we are in a liminal space.

Key Questions 

1. What in the beginning of the text suggests what is to come? 
2. Does the opening of the text suggest an analytical frame?  
3. Do we ever arrive at our destinations or merely traverse liminalities?
4. Is “consciousness” the liminal space between the unconscious and reality?
5. How are you at a threshold?

line
n.


Etymology 

1560s, “any short piece of writing” (especially poetry), from “line” in the sense “row of verse,” attested since late Old English (answering to Latin versus, Greek stikhos). Hence “a few words in writing, a short letter” (1640s); meaning “words of an actor’s part” is from 1882. From 1670s as “outlines, plans” (of a building, ship, etc.); hence, figuratively, “plan, model” of anything (1757). Lines of communication originally were transverse trenches in siegeworks, from “line” in a military sense “trench, rampart,” a collective singular from 1690s given a new currency in World War I. 

“The number of scenes in each act has never been prescribed by rule, but since the whole act must have a certain number of lines which make its length proportionate to that of the others, one may include in it more or fewer scenes depending
on whether they are long or short to fill up the time which the whole act is to consume.”

Pierre Corneille
Of the Three Unities of Action, Time, and Place

Application 

• know that in poetry there are lines (not sentences) and stanzas (not paragraphs). 
• know that a line can contain a caesura, and either be enjambed or be end-stopped. • know how to cite a line of poetry in their writing. 
• know how to properly quote two lines of poetry across a line break. 
• examine the symmetry or asymmetry of a poem based upon line length and the number of lines in each stanza. 
• be aware that we also speak of lines in drama.

Key Questions 

1. What is a line of poetry? 
2. How do we cite line numbers? 
3. Why should we pay attention to whether a line is enjambed or end-stopped? 
4. What effect can an equal or unequal line length (or stanza length) convey?

line break
n.

Definition 

referring to the space between stanzas in a poem.

Application 

• know the two ways that a line of poetry can break: enjambment and end-stop. 
• experience a concrete poem where the shape enhances the significance of the text.


Key Questions 

1. How does the line break effect the structure of 	the poem? 
2. How might the line break work to emphasize, deemphasize, or connect various aspects of the poem? 
3. What is the visual effect of the poem? 
4. How can line breaks be used to create concrete effects?

linear
adj.

linearity
n.

linearly
adv.

Etymology 

1640s, from French linéaire, from Latin linearis “belonging to a line,” from linea “string, line.”

“Sometimes the linear nature of the signifier is not ob,vious. When I accent a syllable, for instance, it seems that I am concentrating more than one significant element on the same point. But this is an illusion; the syllable and its accent constitute only one phonational act. There is no duality within the act but only different oppositions to what precedes and what follows.”

Ferdinand de Saussure 
Course in General Linguistics

Application 

• understand the concept of linear time.
• consider non-linear views of time
.
Key Questions

1. What does it mean that time is linear?
2. How might memory or foresight complicate the linearity of time? 
3. What are some non-linear views of time?
4. How do we see writers making use of linear and non-linear time in argumentation or narrative?

literal
adj.

literally
adv.


Etymology 

late 14c., “taking words in their natural meaning” (originally in reference to Scripture and opposed to mystical or allegorical), from Old French literal and directly from Late Latin literalis/litteralis “of or belonging to letters or writing,” from Latin litera/littera “letter, alphabetic sign; literature, books.” Meaning “of or pertaining to alphabetic letters” is from late 15c. Sense of “verbally exact” is attested from 1590s, as is application to the primary sense of a word or passage. Literal-minded from 1791.

“To understand literally these metaphors or ideas expressed in poetical language, seems to be equally absurd as to conclude, that because painters sometimes represent poets writing from the dictates of a little winged boy or genius, that this same genius did really inform him in a whisper
what he was to write; and that he is himself but a mere machine, unconscious of the operations of his own mind.”

Sir Joshua Reynolds
Discourses on Art

Application 

• know that literal is the opposite of figurative.
• consider the term “literal” in relation to concrete and abstract.


Key Questions

1. What is the difference between the literal and the figurative meaning of a text?
2. What is the significance of interpreting an utterance literally or figuratively, i.e. “I nearly died.”
3. Is there any danger in confusing the figurative and the literal?
4. Given the nature of language, is it possible to “literally” say anything?

metaphor
n.

metaphorical
adj.

Etymology 

late 15c., from Middle French metaphore (Old French metafore, 13c.), and directly from Latin metaphora, from Greek metaphora “a transfer,” especially of the sense of one word to a different word, literally “a carrying over,” from metapherein “transfer, carry over; change, alter; to use a word in a strange sense,” from meta- “over, across” + pherein “to carry, bear.” Essentially, a metaphor states “this is that.” In this sense, all language is metaphor in that the word “this” is the thing “that.” 

“I want to attract the attention of a young child
who is eating bread and butter and getting the butter on her fingers. I call, “Hey, butterfingers!” This is a figure of speech, a clearly prosaic trope. Now a different example. The child is playing with my glasses and drops them. I call, “Hey butterfingers! This figure of speech is a poetic trope. (In the first example, “butterfingers” is metonymic; in the second, metaphoric-but this is not what I want to stress.)”

Victor Shklovsky
Art as Technique

Application 

• know that metaphor is the opposite of simile.
• gauge the impact of a metaphor versus a simile.
• employ metaphor in our own writing.
• identify the use of metaphor.
• explain the potential significance of a metaphor in a  text.
• identify people by metaphor rather than name.
• consider how all language is metaphorical, i.e. the signifier is the signified or the word is the thing.

Key Questions

1. What is the difference between a metaphor and a simile?
2. What does it mean to say that all language is metaphor?
3. Why is metaphor an effective technique in communication?
4. How can metaphor be used in other disciplines such as mathematics or physics?

mood
n.

Etymology 

“emotional condition, frame of mind,” Old English mod “heart, frame of mind, spirit; courage, arrogance, pride; power, violence,” from Proto-Germanic motha- (cognates: Old Saxon mod “mind, courage,” Old Frisian mod “intellect, mind, intention,” Old Norse moðr “wrath, anger,” Middle Dutch moet, Dutch moed, Old High German muot, German Mut “courage,” Gothic moþs “courage, anger”), of unknown origin. A much more vigorous word in Anglo-Saxon than currently, and used widely in compounds such as modcræftig “intelligent,” modful “proud.” To be in the mood “willing (to do something)” is from 1580s. First record of mood swings is from 1942.

“It can be either felt or thought; the two things are similar but different; and it requires practice to do both at once. [...] But it may mean something more important, involving a distinction between ‘sensation’ and ‘feeling’; that what the poet has conveyed is no assembly of grammatical meanings, capable of analysis, but a ‘mood,’ an ‘atmosphere,’ a ‘personality,’ an attitude to life, an undifferentiated mode of being.”

William Empson
Seven Types of Ambiguity

Application 
• understand the relationship between mood and tone. 
•identify the mood of a text and provide evidence to support the identification. 


Key Questions
1. How can a writer create a mood?
2. What is the relationship between mood and tone?
3. Is there a place for a comedic or light-hearted mood in serious writing?
4. How might sentence length, adjectives, adverbs, and punctuation marks contribute to mood?

motif
n.

Etymology 

“theme, predominant feature,” 1848, from French motif “dominant idea, theme.”

“The discovery of various techniques of plot construction (step-by-step structure, parallelism, framing, the weaving of motifs, etc.) clarified the difference between the elements used in the construction of a work and the elements comprising its material (its story, the choice of motifs, the characters, the themes, etc.)”

Boris Eichenbaum
The Theory of the “Formal Method”

Application 

• explore the difference between a leitmotif and a motif. 
• consider the use of motifs in popular culture, fine art, literature, or music. 

Key Questions

1.  Are leitmotifs and motifs the same thing? What is the difference between them? 
2. How can we use the concept of motif to simplify a leitmotif? 
3. What is the function of a motif? 
4. What does it mean that we can identify patterns in literature? In science? 
5. Do patterns exist or do we create them?

myth
n.

mythological
adj.

mythic
adj.


Etymology 

1830, from French Mythe (1818) and directly from Modern Latin mythus, from Greek mythos “speech, thought, story, myth, anything delivered by word of mouth,” of unknown origin. General sense of “untrue story, rumor” is from 1840.

“What is a myth, today? I shall give at the outset a first, very simple answer, which is perfectly consistent with etymology: myth is a type of speech.”

Roland Barthes
Mythologies

Application 

• know the difference between myth and mythology.
• understand how myth can apply to various entities: self, nation, technology, etc.
• understand how myth can apply to commonplace objects: tables, chairs, telephones, etc.
• explore the idea of myth as “a type of speech.”

Key Questions
1. Is myth related to ideology?
2. How does a more open understanding of myth aid in interpreting culture?
3. What myths pervade your culture?
4. Is myth related to hearsay?
5. What is “demythologization”?

non-linear
adj.

non-linearly
adv.

non-linearity
n.

Etymology 

also nonlinear, 1844, from non- + linear.

“Life strives to maintain itself, and does so not by ‘picturing’ an outside world, but through an ongoing, interactive and non-linear system of responses and adjustments.”

Claire Colebrook
“Time and Autopoesis: The Organism Has No Future”

Application 

• know that non-linear is the opposite of linear.
• understand various non-linear views of time.
• explore the use of non-linear narrative frameworks.
• consider the efficacy of utlizing non-linear narratives.
• consider how thought and memory function non-linearaly.

Key Questions

1. Why might a writer present a non-linear narrative?
2. When do we encounter non-linearity in our lives?
3. Is it possible for time to go backwards?
4. How does a rhizomatic view of events undermine linearity?
5. How might the concept of a “non-linear system” in mathematics apply to the study of narrative?

nostalgia
n.

nostalgic
adj.


Etymology 

1770, “severe homesickness considered as a disease,” Modern Latin, coined 1668 as a rendering of German heimweh “homesickness” (home + woe). From Greek algos “pain, grief, distress” + nostos “homecoming,” from neomai “to reach some place, escape, return, get home,” from nes- “to return safely home” (cognate with Old Norse nest “food for a journey,” Sanskrit nasate “approaches, joins,” German genesen “to recover,” Gothic ganisan “to heal,” Old English genesen “to recover”). French nostalgie is in French army medical manuals by 1754. By 1830s the word was used of any intense homesickness: that of sailors, convicts, African slaves. Transferred sense (the main modern one) of “wistful yearning for the past” first recorded 1920, perhaps from such use of nostalgie in French literature. The longing for a distant place also necessarily involves a separation in time.

“Behind these concepts and among those who (properly or improperly) employ them, there is a kind of nostalgia; behind the concept of ideology, the nostalgia for a quasi-transparent form of knowledge, free from all error and illusion, and behind the concept of repression, the longing for a form of power innocent of all coercion, discipline and normalisation.”

Michel Foucault
Truth and Power

Application 

• consider the relationship between nostalgia and history.
• explore the relationship between time, space, and nostalgia
• communicate an experience of nostalgia.
• consider how nostalgia for a particular time and space reveals identity

Key Questions

1. What is nostalgia?
2. Are our memories of previous times and spaces reliable?
3. Why do we experience nostalgia?
4. Can we experience nostalgia for a time or space that we have never experienced?

omen
n.

ominous
adj.

Etymology 

1580s, from Latin omen “foreboding,” from Old Latin osmen, of unknown origin; perhaps connected with the root of audire “to hear” or from o- “to believe, hold as true” (cognates: Greek oiomai “I suppose, think, believe”).

“If we look at comedy, we find that a situation is presented which gradually becomes more ominous and threatening and foreboding of disaster to the characters with which we are sympathetic. Then there’s a kind of gimmick or sudden shift in the plot, and eventually it moves towards a happy ending where everybody gets married, and the hero and heroine’s real life is assumed to begin after the play is over.”
Northrup Frye
Symbolism in the Bible

Application 

• consider the relationship between omens and symbols.
• distinguish between good and bad omens.
• consider the relationship between omens and intuition.
• consider the relationship between omens and reason.
• explore omens in a different cultures.

Key Questions

1. Is it reasonable to believe in omens?
2. What might be the logical explanation for the cultural existence of omens?
3. How can a writer create an ominous mood?
4. Is it possible that omens are unconscious signifiers?

oral 
tradition
n.

Definition 

Oral tradition and oral lore is cultural material and tradition transmitted orally from one generation to another. The messages or testimony are verbally transmitted in speech or song and may take the form, for example, of folktales, sayings, ballads, songs, or chants. In this way, it is possible for a society to transmit oral history, oral literature, oral law and other knowledges across generations without a writing system.

“Hurston’s very rhetorical strategy, her invention of what I have chosen to call the speakerly text, seems designed to mediate between, for fiction
[...] a profoundly lyrical, densely metaphorical, quasi-musical, privileged black oral tradition on the one hand, and a received but not yet fully appropriated standard English literary tradition on the other hand.”

Henry Louis Gates, Jr.
The Signifying Monkey

Application 

• understand the difference between an oral tradition and a written history.
• know that language is both written and spoken.
• consider the antagonism between oral tradition and written history.
• know that a people without a written history may have an oral history.
• consider how language itself is an oral tradition.
• engage in an exploration of someone’s oral history from your community.

Key Questions
1. Is a written history superior to an oral history?
2. What are the limitations of an oral history?
3. How much of your personal history is orally transmitted?
4. In what sense is the static nature of a written history dangerous?
5. Which regions or cultures around the world have an oral tradition?

personify
tr. v.

personification
n.

personified
adj.

Etymology 

1727 “to attribute personal form to things or abstractions” (especially as an artistic or literary technique), from person + -fy or from French personnifier (17c.), from personne. Meaning “to represent, embody” attested from 1806.

“The reader will find that personifications of abstract ideas rarely occur in these volumes, and are utterly rejected, as an ordinary device to elevate the style, and raise it above prose. My purpose was to imitate, and, as far as possible, to adopt the very language of men; and assuredly such personifications do not make any natural or regular part of that language.”


William Wordsworth
Preface to the 2nd Edition of Lyrical Ballads

Application 

• know that personification is the opposite of zoomorphication.
• know that personification is a synonym for anthropomorphication.
• consider personification in relation to prosopopeias, apostrophe, and zoomorphism.
• explore the use of personification in a text and discuss its potential significance.
• consider the relationship between personification and extended metaphor
• utilize personification in writing.

Key Questions

1. Is it easier to understand people or things?
2. How is a thing like a person?
3. How is a person like a thing?
4. Why do writeres use personification?
5. How can we effectively use personification?

plot
n.

plot
v.

Etymology 

Old English plot “small piece of ground,” of unknown origin. Sense of “ground plan,” and thus “map, chart” is 1550s; that of “a secret, plan, scheme” is 1580s, probably by accidental similarity to complot, from Old French complot “combined plan,” of unknown origin, perhaps a back-formation from compeloter “to roll into a ball,” from pelote “ball.” Meaning “set of events in a story” is from 1640s. Plot-line n. attested from 1957.

“The sensuous externality of form is consequently accepted and represented, as in the symbolic type, as unessential and transient; furthermore the subjective finite spirit and volition is treated in a similar way; a treatment which even includes the
idiosyncrasies or caprice of individuals, character, action, or the particular features of incident and plot.”

Georg Wilhelm Friedrich Hegel
The Philosophy of Fine Art

Application 

• consider the term plot in relation to fabula, syuzhet, and the three unities..
• evaluate a plot diagram.
• create a plot diagram.
• describe a plot within a plot.
• distinguish between a plot and a story.

Key Questions

1. Are there only a finite number of plots?
2. Do our stories have a structure?
3. How do our stories mark out a space?
4. Do our lives have a plot? 
5. Can a story have more than one plot?

point of view
n.

Etymology 

“position from which a thing is viewed,” 1727, translating French point de vue, a loan-translation of Latin punctum visus. Figurative use is from 1760. The Latin phrase was translated into German as Gesichtspunkt.

“The second relation is that of Theory, in which the existing forms and qualities of objects, discovered by observation or experiment, suggest a given arrangement of many under one point of view: and this not merely or principally in order to facilitate the remembrance, recollection, or communication of the same; but for the purposes of understanding, and in most instances of controlling, them.”
Samuel Taylor Coleridge
Essays on the Principles of Method

Application 

• know that point of view is a synonym for perspective.
• consider point of view in relation to Weltanschauung.
• consider how a text has a point of view.
• consider the point of view of a character.
• experiment with different points of view in writing.
• be aware of first-person, second-person, and third-person points of view.

Key Questions

1. How do shifts in point of view effect a text?
2. What is the effect of shifting points of view?
3. Do different perspectives create different stories?
4. Does a second-person point of view have more immediacy than a first- or third-person?
5. When is a first-person perspective best to use?

polysyndeton
n.


Etymology 

the use of several conjunctions in close succession, especially where some could otherwise be omitted (as in “she tried and failed and tried again”). The word polysyndeton comes from the Greek “poly-,” meaning “many,” and “syndeton,” meaning “bound together with.”

“An example of the problems encountered is that both the omission of connectives (here called dialusis; in modern terminology asyndeton) and the repetition of connectives (sunapheia; polysyndeton) can create impressiveness.”

George A. Kennedy
“The Evolution of a Theory of Artistic Prose: Demetrius, On Style”

Application 

• know that polysyndeton is the opposite of asyndeton. 
• recognize the use of this device in both poetry and prose. 
• consider the effect of polysyndeton in speeches. 
• be aware that polysyndeton is a technique to employ when wishing to place emphasis on items in a list.
• employ polysyndeton in our own writing.


Key Questions: 

1. How does polysyndeton effect the pacing of a speech?
2. Is the polysyndeton emphasizing the items it contains?

prologue
n.


Etymology 

early 14c., from Old French prologue (12c.) and directly from Latin prologus, from Greek prologos “preface to a play, speaker of a prologue,” literally “a speech beforehand,” from pro- “before” + logos “discourse, speech,” from legein “to speak.”

“[I]n the first part, which corresponds to the prologue of tragedy, the poet proposes, narrates, declares the present state of things, and supplies information about the past, as Homer does in his poems...”

Torquato Tasso
Discourses on the Heroic Poem

Application 

• know that prologue is the opposite of epilogue.
• know that a prologue introduces the topic and defines key terms to be used the argument.
• examine the relationship between a prologue and its thesis.


Key Questions

1. How do writers prologue their arguments? 
2. What elements should a prologue contain?
3. What is the relationship between the prologue and the thesis?
4. How might the prologue set up a thematic framework for a literary text? 
5. How might a prologue be used to create a mood?

protagonist
n.

Etymology 

1670s, “principal character in a story, drama, etc.,” from Greek protagonistes “actor who plays the chief or first part,” from protos “first” + agonistes “actor, competitor,” from agon “contest.” Meaning “leading person in any cause or contest” is from 1889. Mistaken sense of “advocate, supporter” (1935) is from misreading of Greek protos as Latin pro- “for.”

“In some stories the protagonist and antagonist are bonded by some essential moral principle, and we can call this relation metaphorical [...] In other stories, however, the protagonist and antagonist circle in different moral orbits, a disjunction we might call metonymic.”

William M. Burke
“Protagonists and Antagonists in the Fiction of Flannery O’Connor”

Application

• know that a protagonist is the opposite of antagonist. 
• identify a protagonist in a text.
• consider whether a minor character may be a protagonist.
• provide evidence for a character being a protagonist.
• consider whether a text has one or more protagonists.
• consider a text whose protagonist is an anti-hero.
• consider whether an object or a setting is the protagonist.

Key Questions

1. How do we know who the protagonist of a story is?
2. Is a protagonist the same as a hero?
3. What distinguishes a protagonist from an antagonist?

quest
n.

Etymology 

c. 1300, “an inquest;” early 14c., “a search for something” (especially of judicial inquiries or hounds seeking game), from Old French queste “search, quest, chase, hunt, pursuit; inquest, inquiry” (12c., Modern French quête), properly “the act of seeking,” and directly from Medieval Latin questa “search, inquiry,” alteration of Latin quaesitus (fem. quaesita) “sought-out, select,” past participle of quaerere “seek, gain, ask.” Romance sense of “adventure undertaken by a knight” (especially the search for the Grail) is attested from late 14c. Johnson’s dictionary has questmonger “Starter of lawsuits or prosecutions.”

“The distant goals of the quest, the Holy Grail or the City of God, modulate into symbols of convergence, the emblems of prince, nation, and national faith.”

Northrup Frye
Anatomy of Criticism

Application 

• consider the quest as a narrative framework.
• explore the relationship between a quest and a hero.
• consider how the mundane could be transformed into a quest.
• be introduced to the relationship between a quest and the genre of Romance.
• consider the relationship between a quest and monomyth.
• consider the relationship between a quest and a “question.”

Key Questions

1. Can anyone go on a quest or just a hero?
2. Why do heroes go on quests?
3. What are some qualities of a quest as a narrative technique?
4. In what sense are you on a “quest”?

repetition
n.

repetitive
adj.

repeat
v.

Etymology 

early 15c., “act of saying over again,” from Old French repetition and directly from Latin repetitionem (nominative repetitio) “a repeating,” noun of action from past participle stem of repetere “do or say again.” Of actions, attested from 1590s; specifically in physical fitness from 1958.

“[T]he question has often been raised why myths,
and more generally oral literature, are so much addicted to duplication, triplication, or quadruplication of the same sequence. If our hypotheses are accepted, the answer is obvious: The function of repetition is to render the structure of the myth apparent.”

Claude Lévi-Strauss 
The Structural Study of Myth

Application 

• consider the significance of repetition in a text.
• know the utility of repetition in argumentation.
• consider the relationship between repetition and frequency.
• consider to what extent any text is a repetition of a previous text.
• explore the relationship between repetition and mutation in evolutionary biology. 

Key Questions

1. Why is it useful to repeat key words in argumentation?
2. Since memory creates prejudice, is it possible to repeat?
3. Does history repeat itself?
4. What is the relationship between repetition and ritual? Repetition and ideology?

revolution
n.

revolving
adj.

revolve
v.


Etymology 

late 14c., originally of celestial bodies, from Old French revolucion “course, revolution (of celestial bodies)” (13c.), or directly from Late Latin revolutionem (nominative revolutio) “a revolving,” noun of action from past participle stem of Latin revolvere “turn, roll back.” General sense of “instance of great change in affairs” is recorded from mid-15c. Political meaning “overthrow of an established political system” first recorded c. 1600, derived from French. For history, refers to the beginning of a new age, i.e. the American or French Revolutions.

“[L]iterature (it would be better, from now on, to say writing), by refusing to assign to the text (and to the world-as-text) a ‘secret,’ i.e., an ultimate
meaning, liberates an activity we may call countertheological, properly revolutionary, for to refuse to halt meaning is finally to refuse God and his hypostases, reason, science, the law.”

Roland Barthes 
“The Death of the Author”

Application 

• know revolutionary as a historical framework.
• know that revolutionary is the opposite of reactionary.
• consider to what extent a text “revolts” against the expectations of genre or narrative structure.
•considering how revolution creates a cycle.
• research a specific revolution and report on its outcomes.
• consider the relationship between revolution and identity.
• consider the relationship between a revolution in history and a paradigm shift in the sciences.

Key Questions

1. Is history a series of revolutions?
2. What role does literature play in the history of revolutions?
3. Can literature be revolutionary?
4. How might a text “revolt” against its expectations?
5. What is the relationship between revolution and progress?

rhapsody
n.

rhapsodical
adj.

rhapsodize
v.

Etymology 

1540s, “epic poem,” from Middle French rhapsodie, from Latin rhapsodia, from Greek rhapsoidia “verse composition, recitation of epic poetry; a book, a lay, a canto,” from rhapsodos “reciter of epic poems,” literally “one who stitches or strings songs together,” from rhaptein “to stitch, sew, weave” + oide “song.” Meaning “exalted enthusiastic feeling or expression” is from 1630s. Meaning “sprightly musical composition” is first recorded 1850s.

“[W]hen poetry was recited, it employed the assistance of song; this combination - formed melodic discourse, or ‘ode’; and from ‘ode’ they began to use the terms rhapsody, tragedy, and comedy. Therefore, since “tell” was first used in reference to poetic ‘style’ and since among the ancients this poetic style was accompanied by song, the term ‘sing’ was to them equivalent to the term ‘tell’.”

Strabo
Geography

Application 

• understand the relationship between a rhapsody and an epic.
• consider what aspects within a rhapsody “weave” the narrative together.
• consider whether a musical composition can have a narrative.
• perform a dramatic recitation.

Key Questions
1. What makes a text into a rhapsody?
2. Is there any relationship between composition in music and composition in writing?
3. What commonalities do poetry and song have?
4. How does a song “tell” a story?

rhyme
n.

rhyming
adj.

rhyme
v.

Etymology 

“agreement in terminal sounds,” 1560s, partially restored spelling, from Middle English ryme, rime (c. 1200) “measure, meter, rhythm,” later “rhymed verse” (mid-13c.), from Old French rime (fem.), related to Old Provençal rim (masc.), earlier ritme, from Latin rithmus, from Greek rhythmos “measured motion, time, proportion.” In Medieval Latin, rithmus was used for accentual, as opposed to quantitative, verse, and accentual verse usually was rhymed, hence the sense shift. Persistence of older form is due to popular association with Old English rim “number,” from  root re(i) “to reason, count.” Phrase rhyme or reason “good sense” (chiefly used in the negative) is from late 15c. Rhyme scheme is attested from 1931. Rhyme royal (1841) is a stanza of seven 10-syllable lines rhymed a-b-a-b-b-c-c.

“Now, that verse far exceedeth prose in the knitting up of the memory, the reason is manifest—the words (besides their delight, which hath a great affinity to memory) being so set as one word cannot be lost but the whole work fails; which accuseth itself, calleth the remembrance back to itself, and so most strongly confirmeth it. Besides, one word so, as it were, begetting another, as, be it in rhyme or measured verse, by the former a man shall have a near guess to the follower.
Sir Philip Sydney
An Apology for Poetry

Application 

• know the varieties of rhyme: full rhyme, slant rhyme, end rhyme, internal rhyme.
• determine the rhyme scheme of a poem.
• be aware of rhyme scheme and poetic forms, i.e. the sonnet, the villanelle, the sestina.
• produce a poem with a rhyme scheme.
• consider whether rhyme aids memory.
• consider how rhyme affects the rhthym of the poem

Key Questions

1. Why do we mark the rhyme scheme of a poem?
2. How is rhyme used in popular music?
3. Besides words, can other things rhyme?
4. What is unintentional rhyme?
5. Do poems have to rhyme?
6. Why might a poet decide to employ rhyme?
7. Which is more subtle end rhyme or internal rhyme? Full rhyme or slant rhyme?

rhythm
n.

rhythmic(al)
adj.

rhythmically
adv.


Etymology 

1550s, “rhymed verse, metrical movement,” from Latin rhythmus “movement in time,” from Greek rhythmos “measured flow or movement, rhythm; proportion, symmetry; arrangement, order; form, shape, wise, manner; soul, disposition,” related to rhein “to flow,” from  root sreu- “to flow.” Rhythm method of birth control attested from 1936. Rhythm and blues, U.S. music style, is from 1949.

“And the worst of it all is that, just as petty lays draw their hearer away from the point and compel his attention to themselves, so also overrhythmical style does not communicate the feeling of the words but simply the feeling of the rhythm.”

Pseudo-Longinus 
On the Sublime

Application 

• consider the ways in which a writer might create rhythm.
• consider whether rhythm is intuitively or rationally experienced.
• consider why a writer might break up a rhythm.
• perform a dramatic reading of a speech or poem and project its rhthym. 
• consider the relationship between rhythm and rhyme.
• consider the relationship between rhythm and alliteration.


Key Questions

1. How can such techniques as alliteration and rhyme create a rhythm?
2. Does consonance break up a rhythm?
3. How can body language be used to emphasize a rhythm?
4. Does everything have rhthym?

setting
n.

set
v.

Etymology 

late 14c., “fact or action of setting, putting, placing, planting,” verbal noun from set v.. 

“In addition to using taste and care in arranging words, you will express yourself most effectively if you give novelty to a familiar word by means of a skilful setting.”
Quintus Horatius Flaccus 
Art of Poetry

Application 

• consider the effect of setting on action.
• utilize spatial organization to describe a setting, i.e. describe a room from left to right.
• consider how a setting may contribute to a theme.
• analyze a setting and state its potential significance.
• produce a descriptive passage which incorporates the five senses (hearing, taste, sight, touch, smell).

Key Questions

1. How can the setting contribute to a plot or theme?
2. Often a setting is only suggested. How might a reader construct a setting from sparce details?
3. How does historical context or occasion provide a “setting” for a text?
4. Does a narrative require a setting?

simile
n.

Etymology 

late 14c., from Latin simile “a like thing; a comparison, likeness, parallel,” neuter of similis “like.” 

“Only by forgetting that primitive world of metaphors, only by the congelation and coagulation of an original mass of similes and percepts pouring forth as a fiery liquid out of the primal faculty of human fancy, only by the invincible faith, that this sun, this window, this table is a truth in itself: in short only by the fact that man forgets himself as subject, and what is more’as an artistically creating subject, only by all this does he live with some repose, safety, and consequence.”

Friedrich Nietzsche 
“Truth and Falsity in an Ultramoral Sense”

Application 

• know that simile is the opposite of metaphor.
• know that a simile uses “like” or “as” in its construction.
• employ simile in our own writing.
• consider the relative impact of a simile compared to a metaphor.
• identify the use of similie.
• explain the potential significance of a simile in a  text.
• utilize simile to describe a person or a thing.
• consider the relationship between simile and analogy.

Key Questions

1. What is the difference between a simile and a metaphor?
2. Why is simile an effective technique in communication?
3. How might comparing two unlike things be useful?

slant rhyme
n.


Definition 

Half rhyme or slant rhyme is a type of rhyme formed by words with similar but not identical sounds.

Application 

• identify the use of slant or half rhyme in poetry.
• consider how slant rhyme is more subtle than full rhyme.
• consider the use of slant rhyme in popular music.
• consider how slant rhyme aids rhthym.

Key Questions

1. Is there a full rhyme for all words in English?
2. What are some examples of words that share slant rhyme?
3. Why might a writer want to use slant rhyme?

speaker
n.


Etymology 

c. 1300, “one who speaks,” agent noun from speak v.. Similar formation in Old Frisian spreker, Old High German sprahhari, German Sprecher.  For literature, refers to the narrator in a poem, the speaker.

“To the possible difference here belong also the colouring and shading which poetic eloquence seeks to give to the sense. Such colouring and shading are not objective, and must be evoked by each hearer or reader according to the hints of the poet or the speaker. Without some affinity in human ideas art would certainly be impossible; but it can never be exactly determined how far the intentions of the poet are realized.”

Gottlob Frege 
“On Sense and Meaning”

Application 

• know the relationship between speaker and narrator.
• know the relationship between speaker and persona.
• know that poems have a speaker, not a narrator.
• understand that the speaker is not necessarily the poet.
• consider why a writer might employ a speaker.
• provide textual evidence to support a description of a speaker’s perspective.

Key Questions

1. Why might an poet employ a speaker or a persona?
2. How can we effectively employ a persona in our own writing?
3. Does a poem having a speaker imply that poetry is meant to be “spoken” or read aloud?
4. Does a poem having a speaker imply a more personal connection between the poem and the reader?

stanza
n.

stanzaic
adj.

Etymology 

“group of rhymed verse lines,” 1580s, from Italian stanza “verse of a poem,” originally “standing, stopping place,” from Vulgar Latin stantia “a stanza of verse,” so called from the stop at the end of it, from Latin stantem (nominative stans), present participle of stare “to stand,” from  root stā- “to stand, set down, make or be firm.” 

“Spenser concentrates the reader’s attention on to the movement of his stanza: by the use of archaic words and constructions, so that one is at a safe distance from the exercise of an immediate judgment,’ by the steady untroubled low of similar lines, by making no rapid change of sense or feeling, by sustained alliteration, parallel adjectives, and full statement of the accessories of a thought, and by the dreamy repetition of the great stanza perpetually pausing at its close.”
William Empson 
Seven Types of Ambiguity

Application 

• know that poetry is structured in stanzas, not paragraphs.
• know that stanzas are separated by line breaks.
• consider how the stanzaic structure of a poem may add to the potential significance.
• know the relationship between stanza length and poetic forms.

Key Questions

1. How might stanzaic organization aid in conveying meaning?
2. Is a stanza in poetry similar to a paragraph in prose?
3. How does stanza length relate to rhythm?

stock 
character
n.


Definition

A stock character is a stereotypical person whom audiences readily recognize from frequent recurrences in a particular literary tradition. Stock characters are archetypal characters distinguished by their flatness. As a result, they tend to be easy targets for parody and to be criticized as clichés. The presence of a particular array of stock characters is a key component of many genres.

“When we speak of typical characters, we are not trying to reduce lifelike characters to stock types, though we certainly are suggesting that the sentimental notion of an antithesis between the lifelike character and the stock type is a vulgar error. All lifelike characters, whether in drama or fiction, owe their consistency to the appropriateness of the stock type which belongs to their dramatic function. That stock type is not the character but it is as necessary to the character as a skeleton is to the actor who plays it.”

Northrup Frye
Anatomy of Criticism

Application 

• know a variety of stock characters.
• understand how well-developed characters are built from stock characters.
• consider the use of stock characters in comedy or tragedy.
• consider the relationship between stock characters and archetypes.
• identify stock characters in popular movies.

Key Questions

1. What are some common stock characters?
2. Can we see the qualities of a stock character in a more developed character?
3. Does the existence of stock characters suggest anything about our own identities?
4. What is a possible function of a stock character?

symbol
n.

symbolic
adj.

symbolize
v.

Etymology 

early 1500s., “creed, summary, religious belief,” from Late Latin symbolum “creed, token, mark,” from Greek symbolon “token, watchword, sign by which one infers; ticket, a permit, license”, literally “that which is thrown or cast together,” from assimilated form of syn- “together” + bole “a throwing, a casting, the stroke of a missile, bolt, beam,” from bol-, nominative stem of ballein “to throw.” 

“[H]ow can a part be played in the same way by two different actors when, even with the clearest, the most precise, the most forceful of writers, words are no more, and never can be more, than
symbols, indicating a thought, a feeling, or an idea; symbols which need action, gesture, intonation, expression, and a whole context of circumstance, to give them their full significance?”

Denis Diderot 
The Paradox of Acting


Application 

• know that symbols help to create meaning in a text.
• know the relationship between symbols and the abstract.
• understand how symbols function to transform the concrete into the abstract.
• understand the relationship between symbols and archetypes.
• understand the relationship between symbols and metaphor.
• be aware of commonly known symbols.
• consider the idea that all language is symbolic.
• consider the relationship between symbols in mathematics and those in literature.
• provide evidence for the potential meaning of a symbol.

Key Questions

1. Can one symbol have more than one meaning?
2. Are all words symbols?
3. What are some common symbols in Western literature?

text
n.

textual
adj.

Etymology 

late 14c., “wording of anything written,” from Old French texte, Old North French tixte “text, book; Gospels” (12c.), from Medieval Latin textus “the Scriptures, text, treatise,” in Late Latin “written account, content, characters used in a document,” from Latin textus “style or texture of a work,” literally “thing woven,” from past participle stem of texere “to weave, to join, fit together, braid, interweave, construct, fabricate, build,” from root teks- “to weave, to fabricate, to make; make wicker or wattle framework.”
	
“A classical text must never be entirely comprehensible. But those who are cultivated and who cultivate themselves must always want to learn more from it.”

Friedrich Schlegel 
Critical Fragments

Application 

• know that a text refers to anything that can be interpreted.
• consider whether everything is a text.
• consider whether all literature is just one text.

Key Questions

1. How does text as a “thing woven” change your understanding of the term?
2. Are you a text?
3. What does it say about texts that they can be interpreted?
4. How are all texts interrelated?

theme 
n.

thematic
adj.

Etymology 

early 1400s, “subject or topic on which a person writes or speaks,” from Old French tesme (1300s, with silent -s), Modern French thème and directly from Latin thema “a subject, thesis,” from Greek thema “a proposition, subject, deposit,” literally “something set down,” from root of tithenai “put down, place,” from  