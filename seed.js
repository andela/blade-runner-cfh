const MongoCLient = require('mongodb').MongoClient;
const Logger = require('logplease');

const logger = Logger.create('seed');

require('dotenv').config();

MongoCLient.connect(process.env.MONGOHQ_URL, (err, db) => {
  if (err) return logger.info('Could not connect to the database.');
  logger.info('Connected to database drivers.');

  const questions = [
    {
      expansion: 'Base',
      id: 1,
      numAnswers: 1,
      official: true,
      text: "_?  There's an app for that.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 2,
      numAnswers: 1,
      official: true,
      text: "Why can't I sleep at night?",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 3,
      numAnswers: 1,
      official: true,
      text: "What's that smell?",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 4,
      numAnswers: 1,
      official: true,
      text: "I got 99 problems but _ ain't one.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 5,
      numAnswers: 1,
      official: true,
      text: "Maybe she's born with it.  Maybe it's _.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 6,
      numAnswers: 1,
      official: true,
      text: "What's the next Happy Meal® toy?",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 7,
      numAnswers: 1,
      official: true,
      text: 'Anthropologists have recently discovered a primitive tribe that worships _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 8,
      numAnswers: 1,
      official: true,
      text: "It's a pity that kids these days are all getting involved with _.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 9,
      numAnswers: 1,
      official: true,
      text: "During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of _.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 10,
      numAnswers: 1,
      official: true,
      text: 'Alternative medicine is now embracing the curative powers of _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'Base',
      id: 11,
      numAnswers: 2,
      official: true,
      text: 'And the Academy Award for _ goes to _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 12,
      numAnswers: 1,
      official: true,
      text: "What's that sound?",
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 13,
      numAnswers: 1,
      official: true,
      text: 'What ended my last relationship?',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 14,
      numAnswers: 1,
      official: true,
      text: "MTV's new reality show features eight washed-up celebrities living with _.",
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 15,
      numAnswers: 1,
      official: true,
      text: 'I drink to forget _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 16,
      numAnswers: 1,
      official: true,
      text: "I'm sorry professor, but I couldn't complete my homework because of _.",
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 17,
      numAnswers: 1,
      official: true,
      text: "What is Batman's guilty pleasure?",
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 18,
      numAnswers: 1,
      official: true,
      text: 'This is the way the world ends \u003cbr\u003e This is the way the world ends \u003cbr\u003e Not with a bang but with _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 19,
      numAnswers: 1,
      official: true,
      text: "What's a girl's best friend?",
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 20,
      numAnswers: 1,
      official: true,
      text: 'TSA guidelines now prohibit _ on airplanes.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'Base',
      id: 21,
      numAnswers: 1,
      official: true,
      text: "_.  That's how I want to die.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 22,
      numAnswers: 2,
      official: true,
      text: 'For my next trick, I will pull _ out of _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 23,
      numAnswers: 1,
      official: true,
      text: 'In the new Disney Channel Original Movie, Hannah Montana struggles with _ for the first time.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 24,
      numAnswers: 2,
      official: true,
      text: '_ is a slippery slope that leads to _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 25,
      numAnswers: 1,
      official: true,
      text: 'What does Dick Cheney prefer?',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 26,
      numAnswers: 1,
      official: true,
      text: "Dear Abby, I'm having some trouble with _ and would like your advice.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 27,
      numAnswers: 1,
      official: true,
      text: 'Instead of coal, Santa now gives the bad children _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 28,
      numAnswers: 1,
      official: true,
      text: "What's the most emo?",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 29,
      numAnswers: 1,
      official: true,
      text: 'In 1,000 years when paper money is but a distant memory, _ will be our currency.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 30,
      numAnswers: 2,
      official: true,
      text: "What's the next superhero/sidekick duo?",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'Base',
      id: 31,
      numAnswers: 2,
      official: true,
      text: "In M. Night Shyamalan's new movie, Bruce Willis discovers that _ had really been _ all along.",
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 32,
      numAnswers: 1,
      official: true,
      text: 'A romantic, candlelit dinner would be incomplete without _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 33,
      numAnswers: 1,
      official: true,
      text: "_.  Becha can't have just one!",
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 34,
      numAnswers: 1,
      official: true,
      text: 'White people like _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 35,
      numAnswers: 1,
      official: true,
      text: '_.  High five, bro.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 36,
      numAnswers: 1,
      official: true,
      text: 'Next from J.K. Rowling: Harry Potter and the Chamber of _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 37,
      numAnswers: 1,
      official: true,
      text: 'BILLY MAYS HERE FOR _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 38,
      numAnswers: 2,
      official: true,
      text: 'In a world ravaged by _, our only solace is _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 39,
      numAnswers: 1,
      official: true,
      text: 'War!  What is it good for?',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 40,
      numAnswers: 1,
      official: true,
      text: 'During sex, I like to think about _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'Base',
      id: 41,
      numAnswers: 1,
      official: true,
      text: 'What are my parents hiding from me?',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 42,
      numAnswers: 1,
      official: true,
      text: 'What will always get you laid?',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 43,
      numAnswers: 1,
      official: true,
      text: 'In L.A. County Jail, word is you can trade 200 cigarettes for _.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 44,
      numAnswers: 1,
      official: true,
      text: 'What did I bring back from Mexico?',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 45,
      numAnswers: 1,
      official: true,
      text: "What don't you want to find in your Chinese food?",
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 46,
      numAnswers: 1,
      official: true,
      text: 'What will I bring back in time to convince people that I am a powerful wizard?',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 47,
      numAnswers: 1,
      official: true,
      text: 'How am I maintaining my relationship status?',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 48,
      numAnswers: 1,
      official: true,
      text: "_.  It's a trap!",
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 49,
      numAnswers: 1,
      official: true,
      text: 'Coming to Broadway this season, _: The Musical.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 50,
      numAnswers: 1,
      official: true,
      text: 'While the United States raced the Soviet Union to the moon, the Mexican government funneled millions of pesos into research on _.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'Base',
      id: 51,
      numAnswers: 1,
      official: true,
      text: 'After the earthquake, Sean Penn brought _ to the people of Haiti.',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 52,
      numAnswers: 1,
      official: true,
      text: 'Next on ESPN2, the World Series of _.',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 53,
      numAnswers: 2,
      official: true,
      text: 'Step 1: _.  Step 2: _.  Step 3: Profit.',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 54,
      numAnswers: 2,
      official: true,
      text: "Rumor has it that Vladimir Putin's favorite dish is _ stuffed with _.",
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 55,
      numAnswers: 1,
      official: true,
      text: 'But before I kill you, Mr. Bond, I must show you _.',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 56,
      numAnswers: 1,
      official: true,
      text: 'What gives me uncontrollable gas?',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 57,
      numAnswers: 1,
      official: true,
      text: 'What do old people smell like?',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 58,
      numAnswers: 1,
      official: true,
      text: 'The class field trip was completely ruined by _.',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 59,
      numAnswers: 1,
      official: true,
      text: 'When Pharaoh remained unmoved, Moses called down a Plague of _.',
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 60,
      numAnswers: 1,
      official: true,
      text: "What's my secret power?",
      regionId: '59b91ad4605e234f4555a4de'
    },
    {
      expansion: 'Base',
      id: 61,
      numAnswers: 1,
      official: true,
      text: "What's there a ton of in heaven?",
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 62,
      numAnswers: 1,
      official: true,
      text: 'What would grandma find disturbing, yet oddly charming?',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 63,
      numAnswers: 2,
      official: true,
      text: 'I never truly understood _ until I encountered _.',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 64,
      numAnswers: 1,
      official: true,
      text: 'What did the U.S. airdrop to the children of Afghanistan?',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 65,
      numAnswers: 1,
      official: true,
      text: 'What helps Obama unwind?',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 66,
      numAnswers: 1,
      official: true,
      text: 'What did Vin Diesel eat for dinner?',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 67,
      numAnswers: 1,
      official: true,
      text: '_: good to the last drop.',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 68,
      numAnswers: 1,
      official: true,
      text: 'Why am I sticky?',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 69,
      numAnswers: 1,
      official: true,
      text: 'What gets better with age?',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 70,
      numAnswers: 1,
      official: true,
      text: '_: kid-tested, mother-approved.',
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 71,
      numAnswers: 1,
      official: true,
      text: "What's the crustiest?",
      regionId: '59b91ad4605e234f4555a4df'
    },
    {
      expansion: 'Base',
      id: 72,
      numAnswers: 1,
      official: true,
      text: "What's Teach for America using to inspire inner city students to succeed?",
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 73,
      numAnswers: 1,
      official: true,
      text: 'Studies show that lab rats navigate mazes 50% faster after being exposed to _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 74,
      numAnswers: 1,
      official: true,
      text: 'Life for American Indians was forever changed when the White Man introduced them to _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 76,
      numAnswers: 1,
      official: true,
      text: 'I do not know with what weapons World War III will be fought, but World War IV will be fought with _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 77,
      numAnswers: 1,
      official: true,
      text: 'Why do I hurt all over?',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 78,
      numAnswers: 1,
      official: true,
      text: 'What am I giving up for Lent?',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 79,
      numAnswers: 1,
      official: true,
      text: "In Michael Jackson's final moments, he thought about _.",
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 80,
      numAnswers: 1,
      official: true,
      text: 'In an attempt to reach a wider audience, the Smithsonian Museum of Natural History has opened an interactive exhibit on _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 81,
      numAnswers: 1,
      official: true,
      text: 'When I am President of the United States, I will create the Department of _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 82,
      numAnswers: 2,
      official: true,
      text: 'Lifetime® presents _, the story of _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 83,
      numAnswers: 1,
      official: true,
      text: 'When I am a billionaire, I shall erect a 50-foot statue to commemorate _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 84,
      numAnswers: 2,
      official: true,
      text: 'When I was tripping on acid, _ turned into _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 85,
      numAnswers: 2,
      official: true,
      text: "That's right, I killed _.  How, you ask?  _.",
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 86,
      numAnswers: 1,
      official: true,
      text: "What's my anti-drug?",
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 88,
      numAnswers: 1,
      official: true,
      text: 'What never fails to liven up the party?',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 89,
      numAnswers: 1,
      official: true,
      text: "What's the new fad diet?",
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'Base',
      id: 90,
      numAnswers: 1,
      official: true,
      text: 'Major League Baseball has banned _ for giving players an unfair advantage.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'CAHe1',
      id: 91,
      numAnswers: 1,
      official: true,
      text: 'My plan for world domination begins with _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'CAHe1',
      id: 92,
      numAnswers: 1,
      official: true,
      text: 'The CIA now interrogates enemy agents by repeatedly subjecting them to _.',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'CAHe1',
      id: 93,
      numAnswers: 2,
      official: true,
      text: 'Dear Sir or Madam, We regret to inform you that the Office of _ has denied your request for _',
      regionId: '59b91ad4605e234f4555a4e0'
    },
    {
      expansion: 'CAHe1',
      id: 94,
      numAnswers: 1,
      official: true,
      text: 'In Rome, there are whisperings that the Vatican has a secret room devoted to _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 95,
      numAnswers: 1,
      official: true,
      text: 'Science will never explain _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 96,
      numAnswers: 1,
      official: true,
      text: 'When all else fails, I can always masturbate to _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 97,
      numAnswers: 1,
      official: true,
      text: "I learned the hard way that you can't cheer up a grieving friend with _.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 98,
      numAnswers: 1,
      official: true,
      text: 'In its new tourism campaign, Detroit proudly proclaims that it has finally eliminated _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 99,
      numAnswers: 2,
      official: true,
      text: 'An international tribunal has found _ guilty of _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 100,
      numAnswers: 1,
      official: true,
      text: 'The socialist governments of Scandinavia have declared that access to _ is a basic human right.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 101,
      numAnswers: 1,
      official: true,
      text: 'In his new self-produced album, Kanye West raps over the sounds of _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 102,
      numAnswers: 1,
      official: true,
      text: "What's the gift that keeps on giving?",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 103,
      numAnswers: 1,
      official: true,
      text: 'Next season on Man vs. Wild, Bear Grylls must survive in the depths of the Amazon with only _ and his wits.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 104,
      numAnswers: 1,
      official: true,
      text: 'When I pooped, what came out of my butt?',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 105,
      numAnswers: 1,
      official: true,
      text: "In the distant future, historians will agree that _ marked the beginning of America's decline.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 106,
      numAnswers: 2,
      official: true,
      text: 'In a pinch, _ can be a suitable substitute for _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 107,
      numAnswers: 1,
      official: true,
      text: 'What has been making life difficult at the nudist colony?',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 108,
      numAnswers: 2,
      official: true,
      text: "Michael Bay's new three-hour action epic pits _ against _.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 109,
      numAnswers: 1,
      official: true,
      text: "And I would have gotten away with it, too, if it hadn't been for _.",
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe1',
      id: 110,
      numAnswers: 1,
      official: true,
      text: 'What brought the orgy to a grinding halt?',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe2',
      id: 111,
      numAnswers: 1,
      official: true,
      text: 'During his midlife crisis, my dad got really into _.',
      regionId: '59b90186ad7d37a9fb7d3630'
    },
    {
      expansion: 'CAHe2',
      id: 112,
      numAnswers: 2,
      official: true,
      text: '_ would be woefully incomplete without _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 113,
      numAnswers: 1,
      official: true,
      text: 'My new favorite porn star is Joey _ McGee.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 114,
      numAnswers: 1,
      official: true,
      text: 'Before I run for president, I must destroy all evidence of my involvement with _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 115,
      numAnswers: 1,
      official: true,
      text: 'This is your captain speaking. Fasten your seatbelts and prepare for _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 116,
      numAnswers: 1,
      official: true,
      text: 'In his newest and most difficult stunt, David Blaine must escape from _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 117,
      numAnswers: 1,
      official: true,
      text: 'The Five Stages of Grief: denial, anger, bargaining, _, and acceptance.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 118,
      numAnswers: 2,
      official: true,
      text: 'My mom freaked out when she looked at my browser history and found _.com/_.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 120,
      numAnswers: 1,
      official: true,
      text: "Members of New York's social elite are paying thousands of dollars just to experience _.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 122,
      numAnswers: 1,
      official: true,
      text: 'Little Miss Muffet Sat on a tuffet, Eating her curds and _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 123,
      numAnswers: 2,
      official: true,
      text: "If God didn't want us to enjoy _, he wouldn't have given us _.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 124,
      numAnswers: 1,
      official: true,
      text: "My country, 'tis of thee, sweet land of _.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 125,
      numAnswers: 1,
      official: true,
      text: 'After months of debate, the Occupy Wall Street General Assembly could only agree on More _!',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 126,
      numAnswers: 2,
      official: true,
      text: 'I spent my whole life working toward _, only to have it ruined by _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 127,
      numAnswers: 1,
      official: true,
      text: 'Next time on Dr. Phil: How to talk to your child about _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 128,
      numAnswers: 1,
      official: true,
      text: 'Only two things in life are certain: death and _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 129,
      numAnswers: 1,
      official: true,
      text: "Everyone down on the ground! We don't want to hurt anyone. We're just here for _.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 130,
      numAnswers: 1,
      official: true,
      text: 'The healing process began when I joined a support group for victims of _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 131,
      numAnswers: 1,
      official: true,
      text: 'The votes are in, and the new high school mascot is _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 132,
      numAnswers: 1,
      official: true,
      text: 'Charades was ruined for me forever when my mom had to act out _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 133,
      numAnswers: 2,
      official: true,
      text: 'Before _, all we had was _.',
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHe2',
      id: 135,
      numAnswers: 2,
      official: true,
      text: "You haven't truly lived until you've experienced _ and _ at the same time.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHxmas',
      id: 181,
      numAnswers: 1,
      official: true,
      text: "After blacking out during New year's Eve, I was awoken by _.",
      regionId: '59b8ffd328650f1362ca5940'
    },
    {
      expansion: 'CAHxmas',
      id: 182,
      numAnswers: 1,
      official: true,
      text: 'This holiday season, Tim Allen must overcome his fear of _ to save Christmas.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHxmas',
      id: 183,
      numAnswers: 1,
      official: true,
      text: 'Jesus is _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHxmas',
      id: 184,
      numAnswers: 1,
      official: true,
      text: 'Every Christmas, my uncle gets drunk and tells the story about _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHxmas',
      id: 185,
      numAnswers: 1,
      official: true,
      text: 'What keeps me warm during the cold, cold, winter?',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHxmas',
      id: 186,
      numAnswers: 1,
      official: true,
      text: 'On the third day of Christmas, my true love gave to me: three French hens, two turtle doves, and _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHxmas',
      id: 187,
      numAnswers: 1,
      official: true,
      text: 'Wake up, America. Christmas is under attack by secular liberals and their _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHe3',
      id: 236,
      numAnswers: 1,
      official: true,
      text: 'A successful job interview begins with a firm handshake and ends with _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHe3',
      id: 237,
      numAnswers: 1,
      official: true,
      text: "Lovin' you is easy 'cause you're _.",
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHe3',
      id: 238,
      numAnswers: 2,
      official: true,
      text: 'My life is ruled by a vicious cycle of _ and _.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHe3',
      id: 240,
      numAnswers: 1,
      official: true,
      text: '_. Awesome in theory, kind of a mess in practice.',
      regionId: '59b8ffde28650f1362ca5941'
    },
    {
      expansion: 'CAHe3',
      id: 239,
      numAnswers: 1,
      official: true,
      text: 'The blind date was going horribly until we discovered our shared interest in _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 241,
      numAnswers: 1,
      official: true,
      text: "I'm not like the rest of you. I'm too rich and busy for _.",
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 242,
      numAnswers: 1,
      official: true,
      text: 'In the seventh circle of Hell, sinners must endure _ for all eternity.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 243,
      numAnswers: 2,
      official: true,
      text: '_: Hours of fun. Easy to use. Perfect for _!',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 244,
      numAnswers: 1,
      official: true,
      text: 'What left this stain on my couch?',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 245,
      numAnswers: 1,
      official: true,
      text: 'Call the law offices of Goldstein \u0026 Goldstein, because no one should have to tolerate _ in the workplace.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 246,
      numAnswers: 2,
      official: true,
      text: 'When you get right down to it, _ is just _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 247,
      numAnswers: 1,
      official: true,
      text: 'Turns out that _-Man was neither the hero we needed nor wanted.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 248,
      numAnswers: 1,
      official: true,
      text: 'As part of his daily regimen, Anderson Cooper sets aside 15 minutes for _.',
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 249,
      numAnswers: 1,
      official: true,
      text: "Money can't buy me love, but it can buy me _.",
      regionId: '59b91ad4605e234f4555a4dc'
    },
    {
      expansion: 'CAHe3',
      id: 250,
      numAnswers: 2,
      official: true,
      text: 'With enough time and pressure, _ will turn into _.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 251,
      numAnswers: 1,
      official: true,
      text: 'And what did you bring for show and tell?',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 252,
      numAnswers: 1,
      official: true,
      text: 'During high school, I never really fit in until I found _ club.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 253,
      numAnswers: 1,
      official: true,
      text: "Hey, baby, come back to my place and I'll show you _.",
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 254,
      numAnswers: 2,
      official: true,
      text: "After months of practice with _, I think I'm finally ready for _.",
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 255,
      numAnswers: 1,
      official: true,
      text: 'To prepare for his upcoming role, Daniel Day-Lewis immersed himself in the world of _.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 256,
      numAnswers: 1,
      official: true,
      text: 'Finally! A service that delivers _ right to your door.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 257,
      numAnswers: 1,
      official: true,
      text: 'My gym teacher got fired for adding _ to the obstacle course.',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 258,
      numAnswers: 2,
      official: true,
      text: 'Having problems with _? Try _!',
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 259,
      numAnswers: 1,
      official: true,
      text: "As part of his contract, Prince won't perform without _ in his dressing room.",
      regionId: '59b91ad4605e234f4555a4dd'
    },
    {
      expansion: 'CAHe3',
      id: 260,
      numAnswers: 2,
      official: true,
      text: "Listen, son. If you want to get involved with _, I won't stop you. Just steer clear of _.",
      regionId: '59b91ad4605e234f4555a4dd'
    }
  ];


  const answers = [
    {
      expansion: 'Base',
      id: 2,
      official: true,
      text: "Michelle Obama's arms."
    },
    {
      expansion: 'Base',
      id: 5,
      official: true,
      text: 'Getting so angry that you pop a boner.'
    },
    {
      expansion: 'Base',
      id: 6,
      official: true,
      text: 'Tasteful sideboob.'
    },
    {
      expansion: 'Base',
      id: 8,
      official: true,
      text: 'Two midgets shitting into a bucket.'
    },
    {
      expansion: 'Base',
      id: 9,
      official: true,
      text: 'MechaHitler.'
    },
    {
      expansion: 'Base',
      id: 11,
      official: true,
      text: 'A disappointing birthday party.'
    },
    {
      expansion: 'Base',
      id: 12,
      official: true,
      text: 'Puppies!'
    },
    {
      expansion: 'Base',
      id: 14,
      official: true,
      text: "Guys who don't call."
    },
    {
      expansion: 'Base',
      id: 15,
      official: true,
      text: 'Racially-biased SAT questions.'
    },
    {
      expansion: 'Base',
      id: 18,
      official: true,
      text: 'Being on fire.'
    },
    {
      expansion: 'Base',
      id: 19,
      official: true,
      text: 'A lifetime of sadness.'
    },
    {
      expansion: 'Base',
      id: 23,
      official: true,
      text: 'Glenn Beck catching his scrotum on a curtain hook.'
    },
    {
      expansion: 'Base',
      id: 24,
      official: true,
      text: 'The Rapture.'
    },
    {
      expansion: 'Base',
      id: 26,
      official: true,
      text: 'Crippling debt.'
    },
    {
      expansion: 'Base',
      id: 27,
      official: true,
      text: 'Eugenics.'
    },
    {
      expansion: 'Base',
      id: 28,
      official: true,
      text: 'Exchanging pleasantries.'
    },
    {
      expansion: 'Base',
      id: 29,
      official: true,
      text: 'Dying of dysentery.'
    },
    {
      expansion: 'Base',
      id: 30,
      official: true,
      text: 'Roofies.'
    },
    {
      expansion: 'Base',
      id: 32,
      official: true,
      text: 'The forbidden fruit.'
    },
    {
      expansion: 'Base',
      id: 33,
      official: true,
      text: 'Republicans.'
    },
    {
      expansion: 'Base',
      id: 34,
      official: true,
      text: 'The Big Bang.'
    },
    {
      expansion: 'Base',
      id: 36,
      official: true,
      text: 'Amputees.'
    },
    {
      expansion: 'Base',
      id: 37,
      official: true,
      text: 'Men.'
    },
    {
      expansion: 'Base',
      id: 39,
      official: true,
      text: 'Kim Jong-il.'
    },
    {
      expansion: 'Base',
      id: 40,
      official: true,
      text: 'Concealing a boner'
    },
    {
      expansion: 'Base',
      id: 41,
      official: true,
      text: 'Agriculture.'
    },
    {
      expansion: 'Base',
      id: 42,
      official: true,
      text: 'Glenn Beck being harried by a swarm of buzzards.'
    },
    {
      expansion: 'Base',
      id: 43,
      official: true,
      text: 'Making a pouty face.'
    },
    {
      expansion: 'Base',
      id: 44,
      official: true,
      text: 'A salty surprise.'
    },
    {
      expansion: 'Base',
      id: 45,
      official: true,
      text: 'The Jews.'
    },
    {
      expansion: 'Base',
      id: 46,
      official: true,
      text: 'Charisma.'
    },
    {
      expansion: 'Base',
      id: 47,
      official: true,
      text: 'YOU MUST CONSTRUCT ADDITIONAL PYLONS.'
    },
    {
      expansion: 'Base',
      id: 50,
      official: true,
      text: 'A drive-by shooting.'
    },
    {
      expansion: 'Base',
      id: 51,
      official: true,
      text: 'Ronald Reagan.'
    },
    {
      expansion: 'Base',
      id: 52,
      official: true,
      text: "Morgan Freeman's voice."
    },
    {
      expansion: 'Base',
      id: 53,
      official: true,
      text: 'Breaking out into song and dance.'
    },
    {
      expansion: 'Base',
      id: 54,
      official: true,
      text: 'Jewish fraternities.'
    },
    {
      expansion: 'Base',
      id: 57,
      official: true,
      text: 'Hormone injections.'
    },
    {
      expansion: 'Base',
      id: 58,
      official: true,
      text: 'All-you-can-eat shrimp for $4.99.'
    },
    {
      expansion: 'Base',
      id: 59,
      official: true,
      text: 'Incest.'
    },
    {
      expansion: 'Base',
      id: 60,
      official: true,
      text: 'Scalping.'
    },
    {
      expansion: 'Base',
      id: 61,
      official: true,
      text: 'Soup that is too hot.'
    },
    {
      expansion: 'Base',
      id: 62,
      official: true,
      text: 'The Übermensch.'
    },
    {
      expansion: 'Base',
      id: 63,
      official: true,
      text: 'Nazis.'
    },
    {
      expansion: 'Base',
      id: 64,
      official: true,
      text: 'Tom Cruise.'
    },
    {
      expansion: 'Base',
      id: 65,
      official: true,
      text: 'Stifling a giggle at the mention of Hutus and Tutsis.'
    },
    {
      expansion: 'Base',
      id: 67,
      official: true,
      text: 'The Hustle.'
    },
    {
      expansion: 'Base',
      id: 68,
      official: true,
      text: 'A Super Soaker™ full of cat pee.'
    },
    {
      expansion: 'Base',
      id: 69,
      official: true,
      text: 'Figgy pudding.'
    },
    {
      expansion: 'Base',
      id: 70,
      official: true,
      text: 'Object permanence.'
    },
    {
      expansion: 'Base',
      id: 71,
      official: true,
      text: 'Consultants.'
    },
    {
      expansion: 'Base',
      id: 72,
      official: true,
      text: 'Intelligent design.'
    },
    {
      expansion: 'Base',
      id: 73,
      official: true,
      text: 'Nocturnal emissions.'
    },
    {
      expansion: 'Base',
      id: 74,
      official: true,
      text: 'Uppercuts.'
    },
    {
      expansion: 'Base',
      id: 75,
      official: true,
      text: 'Being marginalized.'
    },
    {
      expansion: 'Base',
      id: 76,
      official: true,
      text: 'The profoundly handicapped.'
    },
    {
      expansion: 'Base',
      id: 77,
      official: true,
      text: 'Obesity.'
    },
    {
      expansion: 'Base',
      id: 78,
      official: true,
      text: 'Chutzpah.'
    },
    {
      expansion: 'Base',
      id: 79,
      official: true,
      text: 'Unfathomable stupidity.'
    },
    {
      expansion: 'Base',
      id: 80,
      official: true,
      text: 'Repression.'
    },
    {
      expansion: 'Base',
      id: 81,
      official: true,
      text: 'Attitude.'
    },
    {
      expansion: 'Base',
      id: 82,
      official: true,
      text: 'Passable transvestites.'
    },
    {
      expansion: 'Base',
      id: 84,
      official: true,
      text: 'The American Dream'
    },
    {
      expansion: 'Base',
      id: 85,
      official: true,
      text: 'Child beauty pageants.'
    },
    {
      expansion: 'Base',
      id: 86,
      official: true,
      text: 'Puberty.'
    },
    {
      expansion: 'Base',
      id: 88,
      official: true,
      text: 'The folly of man.'
    },
    {
      expansion: 'Base',
      id: 89,
      official: true,
      text: 'Nickelback.'
    },
    {
      expansion: 'Base',
      id: 90,
      official: true,
      text: 'Swooping.'
    },
    {
      expansion: 'Base',
      id: 91,
      official: true,
      text: 'Goats eating cans.'
    },
    {
      expansion: 'Base',
      id: 92,
      official: true,
      text: 'The KKK.'
    },
    {
      expansion: 'Base',
      id: 93,
      official: true,
      text: 'Kamikaze pilots.'
    },
    {
      expansion: 'Base',
      id: 94,
      official: true,
      text: 'Horrifying laser hair removal accidents.'
    },
    {
      expansion: 'Base',
      id: 95,
      official: true,
      text: 'Adderall™.'
    },
    {
      expansion: 'Base',
      id: 96,
      official: true,
      text: 'A look-see.'
    },
    {
      expansion: 'Base',
      id: 97,
      official: true,
      text: 'Doing the right thing.'
    },
    {
      expansion: 'Base',
      id: 98,
      official: true,
      text: 'The taint; the grundle; the fleshy fun-bridge.'
    },
    {
      expansion: 'Base',
      id: 99,
      official: true,
      text: 'Lactation.'
    },
    {
      expansion: 'Base',
      id: 100,
      official: true,
      text: 'Pabst Blue Ribbon.'
    },
    {
      expansion: 'Base',
      id: 101,
      official: true,
      text: 'Powerful thighs.'
    },
    {
      expansion: 'Base',
      id: 102,
      official: true,
      text: 'Saxophone solos.'
    },
    {
      expansion: 'Base',
      id: 104,
      official: true,
      text: 'A middle-aged man on roller skates.'
    },
    {
      expansion: 'Base',
      id: 105,
      official: true,
      text: 'A foul mouth.'
    },
    {
      expansion: 'Base',
      id: 106,
      official: true,
      text: 'The thing that electrocutes your abs.'
    },
    {
      expansion: 'Base',
      id: 107,
      official: true,
      text: 'Heteronormativity.'
    },
    {
      expansion: 'Base',
      id: 108,
      official: true,
      text: 'Cuddling.'
    },
    {
      expansion: 'Base',
      id: 109,
      official: true,
      text: 'Coat hanger abortions.'
    },
    {
      expansion: 'Base',
      id: 110,
      official: true,
      text: 'A big hoopla about nothing.'
    },
    {
      expansion: 'Base',
      id: 111,
      official: true,
      text: 'Boogers.'
    },
    {
      expansion: 'Base',
      id: 112,
      official: true,
      text: 'A hot mess.'
    },
    {
      expansion: 'Base',
      id: 113,
      official: true,
      text: 'Raptor attacks.'
    },
    {
      expansion: 'Base',
      id: 115,
      official: true,
      text: 'Fear itself.'
    },
    {
      expansion: 'Base',
      id: 116,
      official: true,
      text: 'Bees?'
    },
    {
      expansion: 'Base',
      id: 117,
      official: true,
      text: 'Getting drunk on mouthwash.'
    },
    {
      expansion: 'Base',
      id: 118,
      official: true,
      text: 'Sniffing glue.'
    },
    {
      expansion: 'Base',
      id: 119,
      official: true,
      text: 'Oversized lollipops.'
    },
    {
      expansion: 'Base',
      id: 120,
      official: true,
      text: 'An icepick lobotomy.'
    },
    {
      expansion: 'Base',
      id: 121,
      official: true,
      text: 'Being rich.'
    },
    {
      expansion: 'Base',
      id: 123,
      official: true,
      text: 'Teaching a robot to love.'
    },
    {
      expansion: 'Base',
      id: 124,
      official: true,
      text: "Women's suffrage."
    },
    {
      expansion: 'Base',
      id: 125,
      official: true,
      text: 'Me time.'
    },
    {
      expansion: 'Base',
      id: 126,
      official: true,
      text: 'The heart of a child.'
    },
    {
      expansion: 'Base',
      id: 127,
      official: true,
      text: 'Smallpox blankets.'
    },
    {
      expansion: 'Base',
      id: 129,
      official: true,
      text: 'John Wilkes Booth.'
    },
    {
      expansion: 'Base',
      id: 130,
      official: true,
      text: 'The glass ceiling.'
    },
    {
      expansion: 'Base',
      id: 131,
      official: true,
      text: 'Sarah Palin.'
    },
    {
      expansion: 'Base',
      id: 133,
      official: true,
      text: 'Yeast.'
    },
    {
      expansion: 'Base',
      id: 135,
      official: true,
      text: 'Parting the Red Sea.'
    },
    {
      expansion: 'Base',
      id: 136,
      official: true,
      text: 'A Bop It™.'
    },
    {
      expansion: 'Base',
      id: 137,
      official: true,
      text: 'Michael Jackson.'
    },
    {
      expansion: 'Base',
      id: 138,
      official: true,
      text: 'Team-building exercises.'
    },
    {
      expansion: 'Base',
      id: 139,
      official: true,
      text: 'Harry Potter erotica.'
    },
    {
      expansion: 'Base',
      id: 140,
      official: true,
      text: 'Authentic Mexican cuisine.'
    },
    {
      expansion: 'Base',
      id: 143,
      official: true,
      text: 'Grandma.'
    },
    {
      expansion: 'Base',
      id: 144,
      official: true,
      text: 'Not giving a shit about the Third World.'
    },
    {
      expansion: 'Base',
      id: 145,
      official: true,
      text: 'Licking things to claim them as your own.'
    },
    {
      expansion: 'Base',
      id: 146,
      official: true,
      text: 'Genghis Khan.'
    },
    {
      expansion: 'Base',
      id: 147,
      official: true,
      text: 'The hardworking Mexican.'
    },
    {
      expansion: 'Base',
      id: 148,
      official: true,
      text: 'RoboCop.'
    },
    {
      expansion: 'Base',
      id: 149,
      official: true,
      text: 'My relationship status.'
    },
    {
      expansion: 'Base',
      id: 150,
      official: true,
      text: 'Scrubbing under the folds.'
    },
    {
      expansion: 'Base',
      id: 152,
      official: true,
      text: 'Horse meat.'
    },
    {
      expansion: 'Base',
      id: 153,
      official: true,
      text: 'Sunshine and rainbows.'
    },
    {
      expansion: 'Base',
      id: 155,
      official: true,
      text: 'Barack Obama.'
    },
    {
      expansion: 'Base',
      id: 156,
      official: true,
      text: 'Spontaneous human combustion.'
    },
    {
      expansion: 'Base',
      id: 157,
      official: true,
      text: 'Natural selection.'
    },
    {
      expansion: 'Base',
      id: 158,
      official: true,
      text: 'Mouth herpes.'
    },
    {
      expansion: 'Base',
      id: 159,
      official: true,
      text: 'Flash flooding.'
    },
    {
      expansion: 'Base',
      id: 160,
      official: true,
      text: 'Goblins.'
    },
    {
      expansion: 'Base',
      id: 161,
      official: true,
      text: 'A monkey smoking a cigar.'
    },
    {
      expansion: 'Base',
      id: 162,
      official: true,
      text: 'Spectacular abs.'
    },
    {
      expansion: 'Base',
      id: 163,
      official: true,
      text: 'A good sniff.'
    },
    {
      expansion: 'Base',
      id: 165,
      official: true,
      text: 'The Three-Fifths compromise.'
    },
    {
      expansion: 'Base',
      id: 166,
      official: true,
      text: 'Pedophiles.'
    },
    {
      expansion: 'Base',
      id: 168,
      official: true,
      text: 'Being fabulous.'
    },
    {
      expansion: 'Base',
      id: 169,
      official: true,
      text: 'Mathletes.'
    },
    {
      expansion: 'Base',
      id: 170,
      official: true,
      text: 'Wearing underwear inside-out to avoid doing laundry.'
    },
    {
      expansion: 'Base',
      id: 171,
      official: true,
      text: 'Nipple blades.'
    },
    {
      expansion: 'Base',
      id: 172,
      official: true,
      text: 'An M. Night Shyamalan plot twist.'
    },
    {
      expansion: 'Base',
      id: 173,
      official: true,
      text: 'A bag of magic beans.'
    },
    {
      expansion: 'Base',
      id: 174,
      official: true,
      text: 'Vigorous jazz hands.'
    },
    {
      expansion: 'Base',
      id: 176,
      official: true,
      text: 'Skeletor.'
    },
    {
      expansion: 'Base',
      id: 177,
      official: true,
      text: 'Vikings.'
    },
    {
      expansion: 'Base',
      id: 178,
      official: true,
      text: 'Leaving an awkward voicemail.'
    },
    {
      expansion: 'Base',
      id: 179,
      official: true,
      text: 'Teenage pregnancy.'
    },
    {
      expansion: 'Base',
      id: 180,
      official: true,
      text: 'Dead parents.'
    },
    {
      expansion: 'Base',
      id: 181,
      official: true,
      text: 'Hot cheese.'
    },
    {
      expansion: 'Base',
      id: 183,
      official: true,
      text: 'A mopey zoo lion.'
    },
    {
      expansion: 'Base',
      id: 184,
      official: true,
      text: 'Assless chaps.'
    },
    {
      expansion: 'Base',
      id: 185,
      official: true,
      text: 'Riding off into the sunset.'
    },
    {
      expansion: 'Base',
      id: 186,
      official: true,
      text: "Lance Armstrong's missing testicle."
    },
    {
      expansion: 'Base',
      id: 187,
      official: true,
      text: 'Sweet, sweet vengeance.'
    },
    {
      expansion: 'Base',
      id: 189,
      official: true,
      text: 'Keg stands.'
    },
    {
      expansion: 'Base',
      id: 190,
      official: true,
      text: 'Darth Vader.'
    },
    {
      expansion: 'Base',
      id: 192,
      official: true,
      text: 'Necrophilia.'
    },
    {
      expansion: 'Base',
      id: 193,
      official: true,
      text: 'A really cool hat.'
    },
    {
      expansion: 'Base',
      id: 195,
      official: true,
      text: 'An Oedipus complex.'
    },
    {
      expansion: 'Base',
      id: 196,
      official: true,
      text: 'The Tempur-Pedic® Swedish Sleep System™.'
    },
    {
      expansion: 'Base',
      id: 197,
      official: true,
      text: 'Preteens.'
    },
    {
      expansion: 'Base',
      id: 198,
      official: true,
      text: 'Dick fingers.'
    },
    {
      expansion: 'Base',
      id: 199,
      official: true,
      text: 'A cooler full of organs.'
    },
    {
      expansion: 'Base',
      id: 200,
      official: true,
      text: 'Shapeshifters.'
    },
    {
      expansion: 'Base',
      id: 201,
      official: true,
      text: 'The Care Bear Stare.'
    },
    {
      expansion: 'Base',
      id: 202,
      official: true,
      text: 'Erectile dysfunction.'
    },
    {
      expansion: 'Base',
      id: 203,
      official: true,
      text: 'Keanu Reeves.'
    },
    {
      expansion: 'Base',
      id: 204,
      official: true,
      text: 'The Virginia Tech Massacre.'
    },
    {
      expansion: 'Base',
      id: 205,
      official: true,
      text: 'The Underground Railroad.'
    },
    {
      expansion: 'Base',
      id: 206,
      official: true,
      text: 'The chronic.'
    },
    {
      expansion: 'Base',
      id: 207,
      official: true,
      text: 'Queefing.'
    },
    {
      expansion: 'Base',
      id: 208,
      official: true,
      text: 'Heartwarming orphans.'
    },
    {
      expansion: 'Base',
      id: 209,
      official: true,
      text: 'A thermonuclear detonation.'
    },
    {
      expansion: 'Base',
      id: 210,
      official: true,
      text: 'Cheating in the Special Olympics.'
    },
    {
      expansion: 'Base',
      id: 211,
      official: true,
      text: 'Tangled Slinkys.'
    },
    {
      expansion: 'Base',
      id: 212,
      official: true,
      text: 'A moment of silence.'
    },
    {
      expansion: 'Base',
      id: 213,
      official: true,
      text: 'Civilian casualties.'
    },
    {
      expansion: 'Base',
      id: 214,
      official: true,
      text: 'Catapults.'
    },
    {
      expansion: 'Base',
      id: 215,
      official: true,
      text: 'Sharing needles.'
    },
    {
      expansion: 'Base',
      id: 216,
      official: true,
      text: 'Ethnic cleansing.'
    },
    {
      expansion: 'Base',
      id: 217,
      official: true,
      text: 'Emotions.'
    },
    {
      expansion: 'Base',
      id: 218,
      official: true,
      text: 'Children on leashes.'
    },
    {
      expansion: 'Base',
      id: 219,
      official: true,
      text: 'Balls.'
    },
    {
      expansion: 'Base',
      id: 220,
      official: true,
      text: 'Homeless people.'
    },
    {
      expansion: 'Base',
      id: 221,
      official: true,
      text: 'Eating all of the cookies before the AIDS bake-sale.'
    },
    {
      expansion: 'Base',
      id: 222,
      official: true,
      text: 'Old-people smell.'
    },
    {
      expansion: 'Base',
      id: 224,
      official: true,
      text: 'The inevitable heat death of the universe.'
    },
    {
      expansion: 'Base',
      id: 225,
      official: true,
      text: 'The violation of our most basic human rights.'
    },
    {
      expansion: 'Base',
      id: 227,
      official: true,
      text: 'The placenta.'
    },
    {
      expansion: 'Base',
      id: 228,
      official: true,
      text: 'The Rev. Dr. Martin Luther King, Jr.'
    },
    {
      expansion: 'Base',
      id: 229,
      official: true,
      text: 'Leprosy.'
    },
    {
      expansion: 'Base',
      id: 231,
      official: true,
      text: 'Multiple stab wounds.'
    },
    {
      expansion: 'Base',
      id: 232,
      official: true,
      text: 'Flightless birds.'
    },
    {
      expansion: 'Base',
      id: 233,
      official: true,
      text: 'Grave robbing.'
    },
    {
      expansion: 'Base',
      id: 234,
      official: true,
      text: 'Home video of Oprah sobbing into a Lean Cuisine®.'
    },
    {
      expansion: 'Base',
      id: 235,
      official: true,
      text: 'Oompa-Loompas.'
    },
    {
      expansion: 'Base',
      id: 236,
      official: true,
      text: 'A murder most foul.'
    },
    {
      expansion: 'Base',
      id: 239,
      official: true,
      text: 'Bill Nye the Science Guy.'
    },
    {
      expansion: 'Base',
      id: 240,
      official: true,
      text: 'Peeing a little bit.'
    },
    {
      expansion: 'Base',
      id: 241,
      official: true,
      text: 'The miracle of childbirth.'
    },
    {
      expansion: 'Base',
      id: 242,
      official: true,
      text: 'Tweeting.'
    },
    {
      expansion: 'Base',
      id: 244,
      official: true,
      text: 'Britney Spears at 55.'
    },
    {
      expansion: 'Base',
      id: 245,
      official: true,
      text: 'New Age music.'
    },
    {
      expansion: 'Base',
      id: 246,
      official: true,
      text: 'The Make-A-Wish® Foundation.'
    },
    {
      expansion: 'Base',
      id: 247,
      official: true,
      text: 'Firing a rifle into the air while balls deep in a squealing hog.'
    },
    {
      expansion: 'Base',
      id: 248,
      official: true,
      text: 'Active listening.'
    },
    {
      expansion: 'Base',
      id: 249,
      official: true,
      text: 'Nicolas Cage.'
    },
    {
      expansion: 'Base',
      id: 251,
      official: true,
      text: 'Stranger danger.'
    },
    {
      expansion: 'Base',
      id: 252,
      official: true,
      text: 'Hope.'
    },
    {
      expansion: 'Base',
      id: 253,
      official: true,
      text: 'A gassy antelope.'
    },
    {
      expansion: 'Base',
      id: 254,
      official: true,
      text: 'BATMAN!!!'
    },
    {
      expansion: 'Base',
      id: 255,
      official: true,
      text: 'Chivalry.'
    },
    {
      expansion: 'Base',
      id: 256,
      official: true,
      text: 'Passing a kidney stone.'
    },
    {
      expansion: 'Base',
      id: 257,
      official: true,
      text: 'Black people.'
    },
    {
      expansion: 'Base',
      id: 258,
      official: true,
      text: 'Natalie Portman.'
    },
    {
      expansion: 'Base',
      id: 259,
      official: true,
      text: 'A mime having a stroke.'
    },
    {
      expansion: 'Base',
      id: 260,
      official: true,
      text: 'Classist undertones.'
    },
    {
      expansion: 'Base',
      id: 261,
      official: true,
      text: 'Sean Penn.'
    },
    {
      expansion: 'Base',
      id: 262,
      official: true,
      text: 'A mating display.'
    },
    {
      expansion: 'Base',
      id: 263,
      official: true,
      text: 'The Holy Bible.'
    },
    {
      expansion: 'Base',
      id: 264,
      official: true,
      text: 'Hot Pockets®.'
    },
    {
      expansion: 'Base',
      id: 266,
      official: true,
      text: 'Pulling out.'
    },
    {
      expansion: 'Base',
      id: 267,
      official: true,
      text: 'Serfdom.'
    },
    {
      expansion: 'Base',
      id: 272,
      official: true,
      text: 'Euphoria™ by Calvin Klein.'
    },
    {
      expansion: 'Base',
      id: 273,
      official: true,
      text: 'The World of Warcraft.'
    },
    {
      expansion: 'Base',
      id: 275,
      official: true,
      text: 'The Kool-Aid Man.'
    },
    {
      expansion: 'Base',
      id: 277,
      official: true,
      text: 'Self-loathing.'
    },
    {
      expansion: 'Base',
      id: 278,
      official: true,
      text: 'A falcon with a cap on its head.'
    },
    {
      expansion: 'Base',
      id: 279,
      official: true,
      text: 'Historically black colleges.'
    },
    {
      expansion: 'Base',
      id: 281,
      official: true,
      text: 'Global warming.'
    },
    {
      expansion: 'Base',
      id: 283,
      official: true,
      text: 'World peace.'
    },
    {
      expansion: 'Base',
      id: 286,
      official: true,
      text: 'A zesty breakfast burrito.'
    },
    {
      expansion: 'Base',
      id: 287,
      official: true,
      text: 'Switching to Geico®.'
    },
    {
      expansion: 'Base',
      id: 288,
      official: true,
      text: 'Aaron Burr.'
    },
    {
      expansion: 'Base',
      id: 290,
      official: true,
      text: 'Land mines.'
    },
    {
      expansion: 'Base',
      id: 291,
      official: true,
      text: 'Former President George W. Bush.'
    },
    {
      expansion: 'Base',
      id: 292,
      official: true,
      text: 'Geese.'
    },
    {
      expansion: 'Base',
      id: 293,
      official: true,
      text: 'Mutually-assured destruction.'
    },
    {
      expansion: 'Base',
      id: 294,
      official: true,
      text: 'College.'
    },
    {
      expansion: 'Base',
      id: 296,
      official: true,
      text: 'Bling.'
    },
    {
      expansion: 'Base',
      id: 298,
      official: true,
      text: 'A time travel paradox.'
    },
    {
      expansion: 'Base',
      id: 299,
      official: true,
      text: 'Seppuku.'
    },
    {
      expansion: 'Base',
      id: 300,
      official: true,
      text: 'Poor life choices.'
    },
    {
      expansion: 'Base',
      id: 302,
      official: true,
      text: 'Italians.'
    },
    {
      expansion: 'Base',
      id: 303,
      official: true,
      text: 'GoGurt®.'
    },
    {
      expansion: 'Base',
      id: 304,
      official: true,
      text: 'Finger painting.'
    },
    {
      expansion: 'Base',
      id: 305,
      official: true,
      text: 'Robert Downey, Jr.'
    },
    {
      expansion: 'Base',
      id: 307,
      official: true,
      text: 'Smegma.'
    },
    {
      expansion: 'Base',
      id: 309,
      official: true,
      text: 'The South.'
    },
    {
      expansion: 'Base',
      id: 310,
      official: true,
      text: 'Christopher Walken.'
    },
    {
      expansion: 'Base',
      id: 311,
      official: true,
      text: 'Gloryholes.'
    },
    {
      expansion: 'Base',
      id: 313,
      official: true,
      text: 'Public ridicule.'
    },
    {
      expansion: 'Base',
      id: 314,
      official: true,
      text: 'A tiny horse.'
    },
    {
      expansion: 'Base',
      id: 315,
      official: true,
      text: 'Arnold Schwarzenegger.'
    },
    {
      expansion: 'Base',
      id: 316,
      official: true,
      text: 'A stray pube.'
    },
    {
      expansion: 'Base',
      id: 318,
      official: true,
      text: 'Child abuse.'
    },
    {
      expansion: 'Base',
      id: 322,
      official: true,
      text: 'Re-gifting.'
    },
    {
      expansion: 'Base',
      id: 324,
      official: true,
      text: 'A sausage festival.'
    },
    {
      expansion: 'Base',
      id: 326,
      official: true,
      text: 'Drinking alone.'
    },
    {
      expansion: 'Base',
      id: 327,
      official: true,
      text: 'Too much hair gel.'
    },
    {
      expansion: 'Base',
      id: 328,
      official: true,
      text: 'Hulk Hogan.'
    },
    {
      expansion: 'Base',
      id: 329,
      official: true,
      text: 'Overcompensation.'
    },
    {
      expansion: 'Base',
      id: 330,
      official: true,
      text: 'Foreskin.'
    },
    {
      expansion: 'Base',
      id: 331,
      official: true,
      text: 'Free samples.'
    },
    {
      expansion: 'Base',
      id: 332,
      official: true,
      text: "Shaquille O'Neal's acting career."
    },
    {
      expansion: 'Base',
      id: 333,
      official: true,
      text: 'Five-Dollar Footlongs™.'
    },
    {
      expansion: 'Base',
      id: 334,
      official: true,
      text: 'Whipping it out.'
    },
    {
      expansion: 'Base',
      id: 338,
      official: true,
      text: 'Dental dams.'
    },
    {
      expansion: 'Base',
      id: 339,
      official: true,
      text: 'Being a dick to children.'
    },
    {
      expansion: 'Base',
      id: 340,
      official: true,
      text: 'Famine.'
    },
    {
      expansion: 'Base',
      id: 341,
      official: true,
      text: 'Chainsaws for hands.'
    },
    {
      expansion: 'Base',
      id: 342,
      official: true,
      text: 'A gypsy curse.'
    },
    {
      expansion: 'Base',
      id: 343,
      official: true,
      text: 'AXE Body Spray.'
    },
    {
      expansion: 'Base',
      id: 344,
      official: true,
      text: 'The Force.'
    },
    {
      expansion: 'Base',
      id: 345,
      official: true,
      text: 'Explosions.'
    },
    {
      expansion: 'Base',
      id: 346,
      official: true,
      text: 'Cybernetic enhancements.'
    },
    {
      expansion: 'Base',
      id: 347,
      official: true,
      text: 'Customer service representatives.'
    },
    {
      expansion: 'Base',
      id: 348,
      official: true,
      text: 'White privilege.'
    },
    {
      expansion: 'Base',
      id: 349,
      official: true,
      text: 'Gandhi.'
    },
    {
      expansion: 'Base',
      id: 350,
      official: true,
      text: 'Road head.'
    },
    {
      expansion: 'Base',
      id: 351,
      official: true,
      text: 'God.'
    },
    {
      expansion: 'Base',
      id: 352,
      official: true,
      text: 'Poorly-timed Holocaust jokes.'
    },
    {
      expansion: 'Base',
      id: 353,
      official: true,
      text: '8 oz. of sweet Mexican black-tar heroin.'
    },
    {
      expansion: 'Base',
      id: 354,
      official: true,
      text: 'Judge Judy.'
    },
    {
      expansion: 'Base',
      id: 355,
      official: true,
      text: 'The Little Engine That Could.'
    },
    {
      expansion: 'Base',
      id: 356,
      official: true,
      text: 'Altar boys.'
    },
    {
      expansion: 'Base',
      id: 357,
      official: true,
      text: 'Mr. Clean, right behind you.'
    },
    {
      expansion: 'Base',
      id: 359,
      official: true,
      text: 'Dwarf tossing.'
    },
    {
      expansion: 'Base',
      id: 360,
      official: true,
      text: 'Friction.'
    },
    {
      expansion: 'Base',
      id: 361,
      official: true,
      text: 'Lady Gaga.'
    },
    {
      expansion: 'Base',
      id: 362,
      official: true,
      text: 'Scientology.'
    },
    {
      expansion: 'Base',
      id: 363,
      official: true,
      text: 'Justin Bieber.'
    },
    {
      expansion: 'Base',
      id: 364,
      official: true,
      text: 'A death ray.'
    },
    {
      expansion: 'Base',
      id: 365,
      official: true,
      text: 'Vigilante justice.'
    },
    {
      expansion: 'Base',
      id: 366,
      official: true,
      text: 'The Pope.'
    },
    {
      expansion: 'Base',
      id: 367,
      official: true,
      text: 'A sea of troubles.'
    },
    {
      expansion: 'Base',
      id: 369,
      official: true,
      text: 'Poor people.'
    },
    {
      expansion: 'Base',
      id: 370,
      official: true,
      text: 'A fetus.'
    },
    {
      expansion: 'Base',
      id: 372,
      official: true,
      text: "Exactly what you'd expect."
    },
    {
      expansion: 'Base',
      id: 375,
      official: true,
      text: 'A balanced breakfast.'
    },
    {
      expansion: 'Base',
      id: 377,
      official: true,
      text: 'Lockjaw.'
    },
    {
      expansion: 'Base',
      id: 379,
      official: true,
      text: 'Take-backsies.'
    },
    {
      expansion: 'Base',
      id: 381,
      official: true,
      text: 'Opposable thumbs.'
    },
    {
      expansion: 'Base',
      id: 384,
      official: true,
      text: 'Inappropriate yodeling.'
    },
    {
      expansion: 'Base',
      id: 385,
      official: true,
      text: 'Golden showers.'
    },
    {
      expansion: 'Base',
      id: 387,
      official: true,
      text: 'Copping a feel.'
    },
    {
      expansion: 'Base',
      id: 388,
      official: true,
      text: 'Auschwitz.'
    },
    {
      expansion: 'Base',
      id: 389,
      official: true,
      text: 'Elderly Japanese men.'
    },
    {
      expansion: 'Base',
      id: 396,
      official: true,
      text: 'Hurricane Katrina.'
    },
    {
      expansion: 'Base',
      id: 398,
      official: true,
      text: 'Science.'
    },
    {
      expansion: 'Base',
      id: 400,
      official: true,
      text: 'Cards Against Humanity.'
    },
    {
      expansion: 'Base',
      id: 401,
      official: true,
      text: 'Fancy Feast®.'
    },
    {
      expansion: 'Base',
      id: 403,
      official: true,
      text: 'Lumberjack fantasies.'
    },
    {
      expansion: 'Base',
      id: 404,
      official: true,
      text: 'American Gladiators.'
    },
    {
      expansion: 'Base',
      id: 406,
      official: true,
      text: 'Sean Connery.'
    },
    {
      expansion: 'Base',
      id: 407,
      official: true,
      text: 'William Shatner.'
    },
    {
      expansion: 'Base',
      id: 408,
      official: true,
      text: "Domino's™ Oreo™ Dessert Pizza."
    },
    {
      expansion: 'Base',
      id: 410,
      official: true,
      text: 'Centaurs.'
    },
    {
      expansion: 'Base',
      id: 413,
      official: true,
      text: 'The milk man.'
    },
    {
      expansion: 'Base',
      id: 414,
      official: true,
      text: 'Waterboarding.'
    },
    {
      expansion: 'Base',
      id: 415,
      official: true,
      text: 'Wifely duties.'
    },
    {
      expansion: 'Base',
      id: 416,
      official: true,
      text: 'Loose lips.'
    },
    {
      expansion: 'Base',
      id: 417,
      official: true,
      text: 'The Blood of Christ.'
    },
    {
      expansion: 'Base',
      id: 418,
      official: true,
      text: 'Actually taking candy from a baby.'
    },
    {
      expansion: 'Base',
      id: 419,
      official: true,
      text: 'The token minority.'
    },
    {
      expansion: 'Base',
      id: 420,
      official: true,
      text: 'Jibber-jabber.'
    },
    {
      expansion: 'Base',
      id: 422,
      official: true,
      text: 'Bingeing and purging.'
    },
    {
      expansion: 'Base',
      id: 423,
      official: true,
      text: 'A clandestine butt scratch.'
    },
    {
      expansion: 'Base',
      id: 424,
      official: true,
      text: 'The Chinese gymnastics team.'
    },
    {
      expansion: 'Base',
      id: 426,
      official: true,
      text: 'The Hamburglar.'
    },
    {
      expansion: 'Base',
      id: 427,
      official: true,
      text: 'Police brutality.'
    },
    {
      expansion: 'Base',
      id: 428,
      official: true,
      text: 'Man meat.'
    },
    {
      expansion: 'Base',
      id: 429,
      official: true,
      text: 'Forgetting the Alamo.'
    },
    {
      expansion: 'Base',
      id: 431,
      official: true,
      text: 'Crystal meth.'
    },
    {
      expansion: 'Base',
      id: 434,
      official: true,
      text: 'Third base.'
    },
    {
      expansion: 'Base',
      id: 435,
      official: true,
      text: 'Soiling oneself.'
    },
    {
      expansion: 'Base',
      id: 436,
      official: true,
      text: 'Laying an egg.'
    },
    {
      expansion: 'Base',
      id: 437,
      official: true,
      text: 'Giving 110%.'
    },
    {
      expansion: 'Base',
      id: 438,
      official: true,
      text: 'Hot people.'
    },
    {
      expansion: 'Base',
      id: 439,
      official: true,
      text: 'Friendly fire.'
    },
    {
      expansion: 'Base',
      id: 440,
      official: true,
      text: 'Count Chocula.'
    },
    {
      expansion: 'Base',
      id: 441,
      official: true,
      text: 'Pac-Man uncontrollably guzzling cum.'
    },
    {
      expansion: 'Base',
      id: 442,
      official: true,
      text: 'Estrogen.'
    },
    {
      expansion: 'Base',
      id: 444,
      official: true,
      text: 'Kanye West.'
    },
    {
      expansion: 'Base',
      id: 445,
      official: true,
      text: 'A robust mongoloid.'
    },
    {
      expansion: 'Base',
      id: 446,
      official: true,
      text: 'The Donald Trump Seal of Approval™.'
    },
    {
      expansion: 'Base',
      id: 447,
      official: true,
      text: 'The true meaning of Christmas.'
    },
    {
      expansion: 'Base',
      id: 448,
      official: true,
      text: 'Her Royal Highness, Queen Elizabeth II.'
    },
    {
      expansion: 'Base',
      id: 449,
      official: true,
      text: 'An honest cop with nothing left to lose.'
    },
    {
      expansion: 'Base',
      id: 450,
      official: true,
      text: "Feeding Rosie O'Donnell."
    },
    {
      expansion: 'Base',
      id: 451,
      official: true,
      text: 'The Amish.'
    },
    {
      expansion: 'Base',
      id: 452,
      official: true,
      text: 'The terrorists.'
    },
    {
      expansion: 'Base',
      id: 454,
      official: true,
      text: 'Pooping back and forth. Forever.'
    },
    {
      expansion: 'Base',
      id: 455,
      official: true,
      text: 'Friends who eat all the snacks.'
    },
    {
      expansion: 'CAHe1',
      id: 460,
      official: true,
      text: 'A beached whale.'
    },
    {
      expansion: 'CAHe1',
      id: 461,
      official: true,
      text: 'A bloody pacifier.'
    },
    {
      expansion: 'CAHe1',
      id: 462,
      official: true,
      text: 'A crappy little hand.'
    },
    {
      expansion: 'CAHe1',
      id: 463,
      official: true,
      text: 'A low standard of living.'
    },
    {
      expansion: 'CAHe1',
      id: 464,
      official: true,
      text: 'A nuanced critique.'
    },
    {
      expansion: 'CAHe1',
      id: 465,
      official: true,
      text: 'Panty raids.'
    },
    {
      expansion: 'CAHe1',
      id: 466,
      official: true,
      text: 'A passionate Latino lover.'
    },
    {
      expansion: 'CAHe1',
      id: 467,
      official: true,
      text: 'A rival dojo.'
    },
    {
      expansion: 'CAHe1',
      id: 468,
      official: true,
      text: 'A web of lies.'
    },
    {
      expansion: 'CAHe1',
      id: 470,
      official: true,
      text: 'Clams.'
    },
    {
      expansion: 'CAHe1',
      id: 471,
      official: true,
      text: 'Apologizing.'
    },
    {
      expansion: 'CAHe1',
      id: 473,
      official: true,
      text: 'Neil Patrick Harris.'
    },
    {
      expansion: 'CAHe1',
      id: 475,
      official: true,
      text: 'Being a dinosaur.'
    },
    {
      expansion: 'CAHe1',
      id: 477,
      official: true,
      text: 'Bosnian chicken farmers.'
    },
    {
      expansion: 'CAHe1',
      id: 478,
      official: true,
      text: 'Nubile slave boys.'
    },
    {
      expansion: 'CAHe1',
      id: 479,
      official: true,
      text: 'Carnies.'
    },
    {
      expansion: 'CAHe1',
      id: 484,
      official: true,
      text: 'Dorito breath.'
    },
    {
      expansion: 'CAHe1',
      id: 485,
      official: true,
      text: 'Eating an albino.'
    },
    {
      expansion: 'CAHe1',
      id: 486,
      official: true,
      text: 'Enormous Scandinavian women.'
    },
    {
      expansion: 'CAHe1',
      id: 487,
      official: true,
      text: 'Fabricating statistics.'
    },
    {
      expansion: 'CAHe1',
      id: 488,
      official: true,
      text: 'Finding a skeleton.'
    },
    {
      expansion: 'CAHe1',
      id: 489,
      official: true,
      text: 'Gandalf.'
    },
    {
      expansion: 'CAHe1',
      id: 490,
      official: true,
      text: 'Genetically engineered super-soldiers.'
    },
    {
      expansion: 'CAHe1',
      id: 491,
      official: true,
      text: "George Clooney's musk."
    },
    {
      expansion: 'CAHe1',
      id: 496,
      official: true,
      text: 'Hipsters.'
    },
    {
      expansion: 'CAHe1',
      id: 497,
      official: true,
      text: 'Historical revisionism.'
    },
    {
      expansion: 'CAHe1',
      id: 498,
      official: true,
      text: 'Insatiable bloodlust.'
    },
    {
      expansion: 'CAHe1',
      id: 499,
      official: true,
      text: 'Jafar.'
    },
    {
      expansion: 'CAHe1',
      id: 500,
      official: true,
      text: 'Jean-Claude Van Damme.'
    },
    {
      expansion: 'CAHe1',
      id: 501,
      official: true,
      text: 'Just the tip.'
    },
    {
      expansion: 'CAHe1',
      id: 502,
      official: true,
      text: 'Mad hacky-sack skills.'
    },
    {
      expansion: 'CAHe1',
      id: 503,
      official: true,
      text: 'Leveling up.'
    },
    {
      expansion: 'CAHe1',
      id: 506,
      official: true,
      text: '24-hour media coverage.'
    },
    {
      expansion: 'CAHe1',
      id: 507,
      official: true,
      text: 'Medieval Times© Dinner \u0026 Tournament.'
    },
    {
      expansion: 'CAHe1',
      id: 509,
      official: true,
      text: 'My machete.'
    },
    {
      expansion: 'CAHe1',
      id: 510,
      official: true,
      text: 'One thousand Slim Jims.'
    },
    {
      expansion: 'CAHe1',
      id: 511,
      official: true,
      text: 'Ominous background music.'
    },
    {
      expansion: 'CAHe1',
      id: 512,
      official: true,
      text: 'Overpowering your father.'
    },
    {
      expansion: 'CAHe1',
      id: 513,
      official: true,
      text: 'Stockholm Syndrome.'
    },
    {
      expansion: 'CAHe1',
      id: 514,
      official: true,
      text: 'Quiche.'
    },
    {
      expansion: 'CAHe1',
      id: 515,
      official: true,
      text: 'Quivering jowls.'
    },
    {
      expansion: 'CAHe1',
      id: 518,
      official: true,
      text: 'Ryan Gosling riding in on a white horse.'
    },
    {
      expansion: 'CAHe1',
      id: 519,
      official: true,
      text: 'Santa Claus.'
    },
    {
      expansion: 'CAHe1',
      id: 520,
      official: true,
      text: 'Scrotum tickling.'
    },
    {
      expansion: 'CAHe1',
      id: 523,
      official: true,
      text: 'Saliva.'
    },
    {
      expansion: 'CAHe1',
      id: 524,
      official: true,
      text: 'Space muffins.'
    },
    {
      expansion: 'CAHe1',
      id: 525,
      official: true,
      text: 'Statistically validated stereotypes.'
    },
    {
      expansion: 'CAHe1',
      id: 527,
      official: true,
      text: 'The boners of the elderly.'
    },
    {
      expansion: 'CAHe1',
      id: 528,
      official: true,
      text: 'The economy.'
    },
    {
      expansion: 'CAHe1',
      id: 529,
      official: true,
      text: 'Syphilitic insanity.'
    },
    {
      expansion: 'CAHe1',
      id: 530,
      official: true,
      text: 'The Gulags.'
    },
    {
      expansion: 'CAHe1',
      id: 531,
      official: true,
      text: 'The harsh light of day.'
    },
    {
      expansion: 'CAHe1',
      id: 532,
      official: true,
      text: 'The hiccups.'
    },
    {
      expansion: 'CAHe1',
      id: 533,
      official: true,
      text: 'The shambling corpse of Larry King.'
    },
    {
      expansion: 'CAHe1',
      id: 534,
      official: true,
      text: 'The four arms of Vishnu.'
    },
    {
      expansion: 'CAHe1',
      id: 535,
      official: true,
      text: 'Being a busy adult with many important things to do.'
    },
    {
      expansion: 'CAHe1',
      id: 536,
      official: true,
      text: 'Tripping balls.'
    },
    {
      expansion: 'CAHe1',
      id: 537,
      official: true,
      text: 'Words, words, words.'
    },
    {
      expansion: 'CAHe2',
      id: 540,
      official: true,
      text: "The mere concept of Applebee's®."
    },
    {
      expansion: 'CAHe2',
      id: 542,
      official: true,
      text: 'Catastrophic urethral trauma.'
    },
    {
      expansion: 'CAHe2',
      id: 543,
      official: true,
      text: "Hillary Clinton's death stare."
    },
    {
      expansion: 'CAHe2',
      id: 544,
      official: true,
      text: 'Existing.'
    },
    {
      expansion: 'CAHe2',
      id: 546,
      official: true,
      text: 'Mooing.'
    },
    {
      expansion: 'CAHe2',
      id: 548,
      official: true,
      text: "Daddy's belt."
    },
    {
      expansion: 'CAHe2',
      id: 550,
      official: true,
      text: 'Weapons-grade plutonium.'
    },
    {
      expansion: 'CAHe2',
      id: 553,
      official: true,
      text: 'Rising from the grave.'
    },
    {
      expansion: 'CAHe2',
      id: 554,
      official: true,
      text: 'The mixing of the races.'
    },
    {
      expansion: 'CAHe2',
      id: 556,
      official: true,
      text: 'Scrotal frostbite.'
    },
    {
      expansion: 'CAHe2',
      id: 557,
      official: true,
      text: 'All of this blood.'
    },
    {
      expansion: 'CAHe2',
      id: 558,
      official: true,
      text: 'Loki, the trickster god.'
    },
    {
      expansion: 'CAHe2',
      id: 561,
      official: true,
      text: 'Tongue.'
    },
    {
      expansion: 'CAHe2',
      id: 562,
      official: true,
      text: 'Finding Waldo.'
    },
    {
      expansion: 'CAHe2',
      id: 563,
      official: true,
      text: 'Upgrading homeless people to mobile hotspots.'
    },
    {
      expansion: 'CAHe2',
      id: 564,
      official: true,
      text: 'Wearing an octopus for a hat.'
    },
    {
      expansion: 'CAHe2',
      id: 565,
      official: true,
      text: 'An unhinged ferris wheel rolling toward the sea.'
    },
    {
      expansion: 'CAHe2',
      id: 566,
      official: true,
      text: 'Living in a trashcan.'
    },
    {
      expansion: 'CAHe2',
      id: 567,
      official: true,
      text: 'The corporations.'
    },
    {
      expansion: 'CAHe2',
      id: 568,
      official: true,
      text: 'A magic hippie love cloud.'
    },
    {
      expansion: 'CAHe2',
      id: 570,
      official: true,
      text: "Survivor's guilt."
    },
    {
      expansion: 'CAHe2',
      id: 571,
      official: true,
      text: 'Me.'
    },
    {
      expansion: 'CAHe2',
      id: 572,
      official: true,
      text: 'Getting hilariously gang-banged by the Blue Man Group.'
    },
    {
      expansion: 'CAHe2',
      id: 573,
      official: true,
      text: 'Jeff Goldblum.'
    },
    {
      expansion: 'CAHe2',
      id: 574,
      official: true,
      text: 'Making a friend.'
    },
    {
      expansion: 'CAHe2',
      id: 575,
      official: true,
      text: "A soulful rendition of Ol' Man River."
    },
    {
      expansion: 'CAHe2',
      id: 577,
      official: true,
      text: 'A sweaty, panting leather daddy.'
    },
    {
      expansion: 'CAHe2',
      id: 578,
      official: true,
      text: 'Spring break!'
    },
    {
      expansion: 'CAHe2',
      id: 580,
      official: true,
      text: 'Dining with cardboard cutouts of the cast of Friends.'
    },
    {
      expansion: 'CAHe2',
      id: 582,
      official: true,
      text: "Beefin' over turf."
    },
    {
      expansion: 'CAHe2',
      id: 583,
      official: true,
      text: 'A squadron of moles wearing aviator goggles.'
    },
    {
      expansion: 'CAHe2',
      id: 584,
      official: true,
      text: 'Bullshit.'
    },
    {
      expansion: 'CAHe2',
      id: 585,
      official: true,
      text: 'The Google.'
    },
    {
      expansion: 'CAHe2',
      id: 587,
      official: true,
      text: 'The new Radiohead album.'
    },
    {
      expansion: 'CAHe2',
      id: 588,
      official: true,
      text: 'An army of skeletons.'
    },
    {
      expansion: 'CAHe2',
      id: 590,
      official: true,
      text: 'Mild autism.'
    },
    {
      expansion: 'CAHe2',
      id: 591,
      official: true,
      text: 'Nunchuck moves.'
    },
    {
      expansion: 'CAHe2',
      id: 593,
      official: true,
      text: 'An ether-soaked rag.'
    },
    {
      expansion: 'CAHe2',
      id: 594,
      official: true,
      text: 'A sweet spaceship.'
    },
    {
      expansion: 'CAHe2',
      id: 595,
      official: true,
      text: 'A 55-gallon drum of lube.'
    },
    {
      expansion: 'CAHe2',
      id: 596,
      official: true,
      text: 'Special musical guest, Cher.'
    },
    {
      expansion: 'CAHe2',
      id: 597,
      official: true,
      text: 'The human body.'
    },
    {
      expansion: 'CAHe2',
      id: 598,
      official: true,
      text: 'Boris the Soviet Love Hammer.'
    },
    {
      expansion: 'CAHe2',
      id: 599,
      official: true,
      text: 'The grey nutrient broth that sustains Mitt Romney.'
    },
    {
      expansion: 'CAHe2',
      id: 601,
      official: true,
      text: 'Power.'
    },
    {
      expansion: 'CAHe2',
      id: 602,
      official: true,
      text: 'Oncoming traffic.'
    },
    {
      expansion: 'CAHe2',
      id: 603,
      official: true,
      text: 'A dollop of sour cream.'
    },
    {
      expansion: 'CAHe2',
      id: 604,
      official: true,
      text: 'A slightly shittier parallel universe.'
    },
    {
      expansion: 'CAHe2',
      id: 608,
      official: true,
      text: 'The day the birds attacked.'
    },
    {
      expansion: 'CAHe2',
      id: 609,
      official: true,
      text: 'One Ring to rule them all.'
    },
    {
      expansion: 'CAHe2',
      id: 610,
      official: true,
      text: "Grandpa's ashes."
    },
    {
      expansion: 'CAHe2',
      id: 611,
      official: true,
      text: 'Basic human decency.'
    },
    {
      expansion: 'CAHe2',
      id: 612,
      official: true,
      text: 'A Burmese tiger pit.'
    },
    {
      expansion: 'CAHe2',
      id: 613,
      official: true,
      text: 'Death by Steven Seagal'
    },
    {
      expansion: 'CAHxmas',
      id: 786,
      official: true,
      text: "Santa's heavy sack."
    },
    {
      expansion: 'CAHxmas',
      id: 787,
      official: true,
      text: 'Clearing a bloody path through Walmart with a scimitar.'
    },
    {
      expansion: 'CAHxmas',
      id: 788,
      official: true,
      text: 'Another shitty year.'
    },
    {
      expansion: 'CAHxmas',
      id: 789,
      official: true,
      text: 'Whatever Kwanzaa is supposed to be about.'
    },
    {
      expansion: 'CAHxmas',
      id: 790,
      official: true,
      text: 'A Christmas stocking full of coleslaw.'
    },
    {
      expansion: 'CAHxmas',
      id: 791,
      official: true,
      text: 'Elf cum.'
    },
    {
      expansion: 'CAHxmas',
      id: 792,
      official: true,
      text: 'The tiny, calloused hands of the Chinese children that made this card.'
    },
    {
      expansion: 'CAHxmas',
      id: 794,
      official: true,
      text: 'Socks.'
    },
    {
      expansion: 'CAHxmas',
      id: 795,
      official: true,
      text: 'Pretending to be happy.'
    },
    {
      expansion: 'CAHxmas',
      id: 796,
      official: true,
      text: 'Krampus, the Austrian Christmas monster.'
    },
    {
      expansion: 'CAHxmas',
      id: 797,
      official: true,
      text: 'The Star Wars Holiday Special.'
    },
    {
      expansion: 'CAHxmas',
      id: 798,
      official: true,
      text: 'My hot cousin.'
    },
    {
      expansion: 'CAHxmas',
      id: 799,
      official: true,
      text: 'Mall Santa.'
    },
    {
      expansion: 'CAHxmas',
      id: 800,
      official: true,
      text: 'Several intertwining love stories featuring Hugh Grant.'
    },
    {
      expansion: 'CAHxmas',
      id: 801,
      official: true,
      text: 'A Hungry-Man™ Frozen Christmas Dinner for one.'
    },
    {
      expansion: 'CAHxmas',
      id: 802,
      official: true,
      text: 'Gift-wrapping a live hamster.'
    },
    {
      expansion: 'CAHxmas',
      id: 803,
      official: true,
      text: 'Space Jam on VHS.'
    },
    {
      expansion: 'CAHxmas',
      id: 804,
      official: true,
      text: 'Immaculate conception.'
    },
    {
      expansion: 'CAHxmas',
      id: 806,
      official: true,
      text: 'A visually arresting turtleneck.'
    },
    {
      expansion: 'CAHxmas',
      id: 807,
      official: true,
      text: 'A toxic family environment.'
    },
    {
      expansion: 'CAHe3',
      id: 943,
      official: true,
      text: 'Gay aliens.'
    },
    {
      expansion: 'CAHe3',
      id: 946,
      official: true,
      text: "The Quesadilla Explosion Salad™ from Chili's©."
    },
    {
      expansion: 'CAHe3',
      id: 947,
      official: true,
      text: 'Actually getting shot, for real.'
    },
    {
      expansion: 'CAHe3',
      id: 951,
      official: true,
      text: 'Nothing.'
    },
    {
      expansion: 'CAHe3',
      id: 954,
      official: true,
      text: 'The systematic destruction of an entire people and their way of life.'
    },
    {
      expansion: 'CAHe3',
      id: 955,
      official: true,
      text: 'Samuel L. Jackson.'
    },
    {
      expansion: 'CAHe3',
      id: 958,
      official: true,
      text: 'The entire Internet.'
    },
    {
      expansion: 'CAHe3',
      id: 966,
      official: true,
      text: 'Putting an entire peanut butter and jelly sandwich into the VCR.'
    },
    {
      expansion: 'CAHe3',
      id: 967,
      official: true,
      text: 'Spending lots of money.'
    },
    {
      expansion: 'CAHe3',
      id: 970,
      official: true,
      text: 'A greased-up Matthew McConaughey.'
    },
    {
      expansion: 'CAHe3',
      id: 971,
      official: true,
      text: 'An unstoppable wave of fire ants.'
    },
    {
      expansion: 'CAHe3',
      id: 972,
      official: true,
      text: 'Not contributing to society in any meaningful way.'
    },
    {
      expansion: 'CAHe3',
      id: 973,
      official: true,
      text: "An all-midget production of Shakespeare's \u003ci\u003eRichard III\u003c/i\u003e."
    },
    {
      expansion: 'CAHe3',
      id: 975,
      official: true,
      text: 'The moist, demanding chasm of his mouth.'
    },
    {
      expansion: 'CAHe3',
      id: 976,
      official: true,
      text: 'Filling every orifice with butterscotch pudding.'
    },
    {
      expansion: 'CAHe3',
      id: 977,
      official: true,
      text: 'Unlimited soup, salad, and breadsticks.'
    },
    {
      expansion: 'CAHe3',
      id: 978,
      official: true,
      text: 'Crying into the pages of Sylvia Plath.'
    },
    {
      expansion: 'CAHe3',
      id: 979,
      official: true,
      text: 'Velcro™.'
    },
    {
      expansion: 'CAHe3',
      id: 980,
      official: true,
      text: 'A PowerPoint presentation.'
    },
    {
      expansion: 'CAHe3',
      id: 981,
      official: true,
      text: 'A surprising amount of hair.'
    },
    {
      expansion: 'CAHe3',
      id: 982,
      official: true,
      text: "Eating Tom Selleck's mustache to gain his powers."
    },
    {
      expansion: 'CAHe3',
      id: 990,
      official: true,
      text: 'The Land of Chocolate.'
    },
    {
      expansion: 'CAHe3',
      id: 991,
      official: true,
      text: 'Slapping a racist old lady.'
    },
    {
      expansion: 'CAHe3',
      id: 992,
      official: true,
      text: 'A lamprey swimming up the toilet and latching onto your taint.'
    },
    {
      expansion: 'CAHe3',
      id: 993,
      official: true,
      text: 'Jumping out at people.'
    },
    {
      expansion: 'CAHe3',
      id: 994,
      official: true,
      text: 'A black male in his early 20s, last seen wearing a hoodie.'
    },
    {
      expansion: 'CAHe3',
      id: 998,
      official: true,
      text: 'The Harlem Globetrotters.'
    },
    {
      expansion: 'CAHe3',
      id: 1000,
      official: true,
      text: 'My manservant, Claude.'
    },
    {
      expansion: 'CAHe3',
      id: 1002,
      official: true,
      text: 'Letting everyone down.'
    },
    {
      expansion: 'CAHe3',
      id: 1003,
      official: true,
      text: 'A spontaneous conga line.'
    },
    {
      expansion: 'CAHe3',
      id: 1005,
      official: true,
      text: 'Disco fever.'
    },
    {
      expansion: 'CAHe3',
      id: 1009,
      official: true,
      text: "Girls that always be textin'."
    },
    {
      expansion: 'CAHe3',
      id: 1010,
      official: true,
      text: 'Blowing some dudes in an alley.'
    },
    {
      expansion: 'CAHe3',
      id: 1011,
      official: true,
      text: 'Drinking ten 5-hour ENERGYs® to get fifty continuous hours of energy.'
    }
  ];

  const myDB = db.db(process.env.DATABASE_NAME);
  myDB.collection('questions').insertMany(questions, (error, result) => {
    if (error) return logger.info('Unable to post to database');
    logger.info(JSON.stringify(result.ops));

    myDB.collection('answers').insertMany(answers, (answersError, answersResult) => {
      if (answersError) return logger.info('Unable to post to database');
      logger.info(JSON.stringify(answersResult.ops));
      process.exit(0);
    });
  });
});
