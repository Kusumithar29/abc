import { bi, ex, type Subcategory } from './types'

export const musicSubcategories: Subcategory[] = [
  {
    slug: 'instruments',
    name: bi('Musical Instruments', 'ಸಂಗೀತ ವಾದ್ಯಗಳು'),
    description: bi(
      'Karnataka’s instruments range from thunderous festival drums to the gentle strings of the veena. Many are made by hand from jackfruit wood, animal skin, brass and bamboo. Each has a role — some lead temple processions, some accompany Yakshagana, and some belong to the classical concert stage.',
      'ಹಬ್ಬದ ಡೊಳ್ಳುಗಳಿಂದ ವೀಣೆಯ ಮೃದು ತಂತಿಗಳವರೆಗೆ ಕರ್ನಾಟಕದ ವಾದ್ಯಗಳು ವೈವಿಧ್ಯಮಯ. ಹಲಸಿನ ಮರ, ಚರ್ಮ, ಹಿತ್ತಾಳೆ ಮತ್ತು ಬಿದಿರಿನಿಂದ ಕೈಯಿಂದ ತಯಾರಿಸಲಾಗುತ್ತದೆ.',
    ),
    examples: [
      ex('dollu', 'Dollu', 'ಡೊಳ್ಳು', 'Shivamogga & Chitradurga', 'A large barrel drum hung from the shoulder and beaten on both sides with sticks. It is the heart of Dollu Kunitha, and a group of dollu players can create a sound like thunder. Traditionally it is made from wood and goat or buffalo skin.'),
      ex('chande', 'Chande', 'ಚಂಡೆ', 'Coastal Karnataka', 'A tall cylindrical drum played with two thin sticks, famous as the loud, sharp voice of Yakshagana. It announces the entry of characters and raises the drama during battle scenes. The chande is also played at temple festivals along the coast.'),
      ex('maddale', 'Maddale', 'ಮದ್ದಳೆ', 'Coastal Karnataka', 'A two-sided barrel drum played with the hands, used in Yakshagana alongside the chande. Its deep, rounded tones follow the rhythm of the singer and dancers. Skilled maddale players are respected as essential members of every Yakshagana troupe.'),
      ex('veena', 'Veena', 'ವೀಣೆ', 'Mysuru', 'A stringed instrument with a large wooden body, two resonators and seven strings, closely linked to goddess Saraswati. The Mysuru court produced legendary veena players such as Veena Seshanna. Its sound is soft, sweet and deeply meditative.'),
      ex('nadaswara', 'Nadaswara', 'ನಾದಸ್ವರ', 'Across Karnataka', 'A long wooden double-reed wind instrument with a flared bell. It is considered highly auspicious and is played at weddings and temple rituals, usually with the tavil drum. Its powerful sound can be heard over long distances.'),
      ex('tamate', 'Tamate', 'ತಮಟೆ', 'Rural Karnataka', 'A flat, round frame drum made of a wooden or metal ring covered with skin, and played with two sticks. It is warmed over a fire before playing to tighten the skin. It accompanies folk dances, village festivals and processions.'),
      ex('kombu', 'Kombu', 'ಕೊಂಬು', 'Coastal & Malnad regions', 'A long, curved horn made of brass or copper, shaped like an animal’s horn. It produces a loud, piercing call and is played during temple festivals, Bhootha Kola and royal processions to announce important moments.'),
      ex('nagaswara', 'Nagaswara', 'ನಾಗಸ್ವರ', 'Temple towns of Karnataka', 'Another name for the nadaswara, often used when it is played in temple processions. It is traditionally made from aacha wood and has a long history in South Indian temple music. Master players can perform for hours during festival celebrations.', 'nadaswara'),
    ],
  },
  {
    slug: 'music-forms',
    name: bi('Music Forms / Traditions', 'ಸಂಗೀತ ಪ್ರಕಾರಗಳು / ಪರಂಪರೆ'),
    description: bi(
      'Karnataka is one of the few places where both Indian classical traditions — Carnatic and Hindustani — flourish. Alongside them grew devotional, theatrical and poetic music in Kannada. These traditions shaped Kannada literature, film songs and everyday cultural life.',
      'ಕರ್ನಾಟಕ ಮತ್ತು ಹಿಂದೂಸ್ತಾನಿ ಎರಡೂ ಶಾಸ್ತ್ರೀಯ ಪರಂಪರೆಗಳು ಬೆಳೆದ ಅಪರೂಪದ ನಾಡು ಕರ್ನಾಟಕ. ಇವುಗಳ ಜೊತೆಗೆ ಕನ್ನಡದ ಭಕ್ತಿ, ರಂಗ ಮತ್ತು ಕಾವ್ಯ ಸಂಗೀತವೂ ಬೆಳೆಯಿತು.',
    ),
    examples: [
      ex('carnatic-music', 'Carnatic Music', 'ಕರ್ನಾಟಕ ಸಂಗೀತ', 'Across South India', 'The classical music of South India, named after the Karnataka region. Purandara Dasa, known as the father of Carnatic music, created the basic lessons still used to teach students today. Concerts feature voice, veena, violin and mridangam, built around ragas and talas.'),
      ex('yakshagana-music', 'Yakshagana Music', 'ಯಕ್ಷಗಾನ ಸಂಗೀತ', 'Coastal Karnataka', 'The music that drives Yakshagana theatre, led by the bhagavata (lead singer) who also narrates the story. It uses its own set of ragas and talas, with chande, maddale and cymbals. The singing is powerful and high-pitched so it can carry through open-air, all-night shows.', 'yakshagana'),
      ex('bhavageethe', 'Bhavageethe', 'ಭಾವಗೀತೆ', 'Across Karnataka', 'Literally “songs of emotion”, Bhavageethe sets modern Kannada poetry to music. Poems by Kuvempu, D. R. Bendre and K. S. Narasimhaswamy are sung with light classical tunes. Singers like P. Kalinga Rao and Mysore Ananthaswamy made the form hugely popular.'),
      ex('vachana-singing', 'Vachana Singing', 'ವಚನ ಗಾಯನ', 'Across Karnataka', 'The singing of vachanas — short, powerful poems written by 12th-century saints like Basavanna, Akka Mahadevi and Allama Prabhu. The vachanas speak of equality, devotion and honest work. Today they are sung in both Carnatic and Hindustani styles.'),
      ex('janapada-music', 'Janapada / Folk Music', 'ಜಾನಪದ ಸಂಗೀತ', 'Villages of Karnataka', 'The music of ordinary people — sung while sowing, harvesting, grinding grain, at weddings and festivals. The songs are passed down orally and tell of village life, love, gods and heroes. Artists like Kadri Gopalnath and many folk singers brought them to wider audiences.'),
    ],
  },
  {
    slug: 'folk-music',
    name: bi('Folk Music', 'ಜನಪದ ಸಂಗೀತ'),
    description: bi(
      'Karnataka’s folk music lives in fields, temples and village squares. It is simple, rhythmic and full of energy, often performed together with dance and ritual. These songs keep local history, beliefs and dialects alive across generations.',
      'ಕರ್ನಾಟಕದ ಜನಪದ ಸಂಗೀತ ಹೊಲಗಳು, ದೇವಾಲಯಗಳು ಮತ್ತು ಊರ ಚೌಕಗಳಲ್ಲಿ ಜೀವಂತವಾಗಿದೆ. ಈ ಹಾಡುಗಳು ಸ್ಥಳೀಯ ಇತಿಹಾಸ, ನಂಬಿಕೆ ಮತ್ತು ಉಪಭಾಷೆಗಳನ್ನು ಉಳಿಸಿವೆ.',
    ),
    examples: [
      ex('lavani', 'Lavani-influenced Traditions', 'ಲಾವಣಿ ಪರಂಪರೆ', 'North Karnataka', 'In North Karnataka, Lavani songs are ballads that praise heroes, tell stories and comment on society. They are sung with a fast rhythm on the dappu or halage drum. Famous Lavanis celebrate freedom fighters like Sangolli Rayanna and Kittur Chennamma.'),
      ex('janapada-songs', 'Janapada Songs', 'ಜಾನಪದ ಗೀತೆಗಳು', 'Villages of Karnataka', 'Everyday songs such as sobane (wedding songs), lullabies, grinding songs and harvest songs. They are usually sung by women and carry wisdom, humour and emotion. Many of these songs are now recorded to preserve them.', 'janapada-music'),
      ex('bhootha-music', 'Bhootha Aradhane Music', 'ಭೂತಾರಾಧನೆಯ ಸಂಗೀತ', 'Tulu Nadu', 'Ritual music played during Bhoota Kola, using drums, the kombu horn and cymbals. Singers chant paddanas — long oral epics in Tulu that tell the story of each daiva. The music builds steadily until the performer enters a trance.', 'bhootha-aradhane'),
      ex('dollu-rhythms', 'Dollu Kunitha Rhythms', 'ಡೊಳ್ಳು ಕುಣಿತದ ಲಯ', 'Shivamogga & Chitradurga', 'The rhythms of Dollu Kunitha are led by a lead drummer and a singer who sings praises of Beeralingeshwara. Drummers change speed and pattern together, creating a wall of sound. The beats are also played at weddings and political and cultural gatherings.', 'dollu-kunitha'),
    ],
  },
]
