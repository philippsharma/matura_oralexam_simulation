# matura_oralexam_simulation
This tool provides the possibility of simulating the Matura Oral Exam in French. 

Tool description: 

A simulator of the matura oral examination in French for people with German as first language. Exam sequence and evaluation are in accordance with the guidelines for the Swiss Matura Exam with German as first language (Richtlinien für die schweizerische Maturitätsprüfung - Erstsprache Deutsch, RFSM). It follows the exam sequence as defined for the "standard" level. The exam centers around a randomly chosen excerpt from a chosen literature work. The student gets preparation time to look at the excerpt, and then is asked questions about it. ElevenLabs voice agent takes on the role of the examiner. At the end of the exam, a performance evaluation is provided which is based on the Swiss Matura exam guidelines.  

Features: Must have

- Live Call interaction with agent, with automatic turn taking -> working microphone connection, audio processing and audio output is needed -> WORKS ✓
- Excerpt is randomly chosen and displayed -> Excerpts need to be stored
- Evaluation based on RFSM -> transcript needs to be processed by AI agent. This enables evaluation on many aspects but not fluency, which would need a different approach.
- context file for accurate questions about the work
- Built in timer and prompting phase transitions

Features: Maybe

more likely:
- Self insert Excerpt and literature work context -> very good idea, probably I'll implement. Else not realistic that I supply all the context files for different literature works.
- Assuring consistency through descriptions for different grade levels -> good idea, will probably be part of grading rubric
- "hold to think" button 
- Include advanced level sequence ("erweitertes Niveau" )

less likely:
- More elaborate grading criteria which goes beyond RFSM, maybe based no CEFR -> probably not. Better to inform grading through work with actual teachers. 
- Fluency evaluation: would need evaluation of voice, not only transcript (approaches: sending audio to different model, timing-based calculations) -> probably not, out of scope
- Showing language errors during interaction -> in a later stage, not really that useful
- Highlighting and notes on excerpt in preparation phase -> the excerpt is actually not really the focus in the exam, it's more about connection to the work, high-level ideas etc. So maybe leave out. 


Features: cut

- Accounts -> although would be useful if inserting own context is possible...
- Progress tracking
- Optional Questions about other works or other topics chosen by the examiner (not implemented from 2.4.2.2)
- Multiple languages
- Pronunciation evaluation

ElevenLabs agent: 

The agent works through a audio input -> transcription -> processing -> reponse as text -> text read out pipeline. Thus the students input is always transcribed into text before the agent sees it. Certain aspects such as intonation, pronunciation etc. cannot be processed by the agent. 

Exam flow:

(RFSM reference: section 2.4.2.2)

- preparation (15 minutes in total): 
Student is shown excerpt and gets to prepare.
- Phases 1-4 (15 minutes in total)
Phase 1: student is asked to read aloud a few lines from the excerpt 
Phase 2: student is asked to summarize the core ideas
Phase 3: student is asked to elaborate on connection between the excerpt and the text as a whole, and additionally the literary current 
Phase 4: student answers questions about content-related and historical aspects of the text

Evaluation rubric:

(RFSM reference: section 2.4.3.2)

- Language skills:
Fluency and correct pronunciation (optional, not part of mvp); accuracy in regard to word formation and sentence structure; sophistication and appropriateness of vocabulary; complexity of the linguistic structures used

- Knowledge of chosen literature work:
Plot, Characters, Themes and Motives, historical background, stylistic features

- Ability to understand the impulses and questions from the examiner and to react to unexpected prompts

Output: Each of the three criterions graded 1-6, half steps. A short explanation text for each outcome, using excerpts from the trannscript as evicence. Summary grade 1-6, rounded to nearest 0.5. >= 4 -> pass. Weighting (not based on RFSM): Language skills: 40%; Knowledge of chosen literature work: 40%; Ability to understand impulses and questions: 20%;

Privacy: Hume stores audio when data retention is on 

Notes:

- Author background: 
In context files, there is no separate field for more in-depth information about the author. The RFSM mentions the author only in the Programm ("Fähigkeit, Beziehungen zum Autor/zur Autorin und seiner/ihrer Zeit herzustellen", 2.4.4.1), not in theoral exam phases (2.4.2.2) or the oral grading criteria (2.4.3.2). Links to the author are therefore covered within `historicalBackground` and, where useful, in individual questions.
