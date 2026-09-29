import { bi, ex, type Subcategory } from './types'

export const danceSubcategories: Subcategory[] = [
  {
    slug: 'classical',
    name: bi('Classical / Semi-classical', 'ಶಾಸ್ತ್ರೀಯ / ಅರೆ-ಶಾಸ್ತ್ರೀಯ'),
    description: bi(
      'Karnataka has shaped India’s classical dance through royal patronage, especially at the Mysuru court. Dancers follow the grammar of the Natya Shastra, telling stories through precise footwork, hand gestures (mudras) and facial expression (abhinaya). Local styles developed a gentle grace and a strong focus on devotional storytelling.',
      'ಮೈಸೂರು ಆಸ್ಥಾನದ ಆಶ್ರಯದ ಮೂಲಕ ಕರ್ನಾಟಕವು ಭಾರತದ ಶಾಸ್ತ್ರೀಯ ನೃತ್ಯವನ್ನು ರೂಪಿಸಿದೆ. ನಾಟ್ಯಶಾಸ್ತ್ರದ ನಿಯಮಗಳಂತೆ ಹೆಜ್ಜೆ, ಮುದ್ರೆ ಮತ್ತು ಅಭಿನಯದ ಮೂಲಕ ಕಥೆ ಹೇಳಲಾಗುತ್ತದೆ.',
    ),
    examples: [
      ex('mysore-bharatanatyam', 'Mysore Style Bharatanatyam', 'ಮೈಸೂರು ಶೈಲಿಯ ಭರತನಾಟ್ಯ', 'Mysuru', 'A distinct school of Bharatanatyam that grew in the Mysuru palace under the Wodeyar kings. Court dancers such as Jatti Thayamma refined it, placing special emphasis on abhinaya — subtle, expressive storytelling — and on Kannada and Sanskrit compositions. The style is known for its elegance and restraint.'),
      ex('karnataka-kathak', 'Karnataka-influenced Kathak', 'ಕರ್ನಾಟಕದ ಕಥಕ್ ಪರಂಪರೆ', 'Bengaluru & Dharwad', 'Kathak, a North Indian classical dance, found a strong home in Karnataka through Bengaluru’s dance schools and the Hindustani music culture of Dharwad. Dancers here blend fast spins and rhythmic footwork with Kannada poetry and themes from Karnataka’s saints. Performances often feature live Hindustani music.'),
    ],
  },
  {
    slug: 'folk',
    name: bi('Folk Dance', 'ಜಾನಪದ ನೃತ್ಯ'),
    description: bi(
      'Folk dances are the heartbeat of Karnataka’s villages. They are performed at harvests, fairs and temple festivals, often by entire communities, to the sound of drums, cymbals and folk songs. Each region and community has its own dance, costume and rhythm.',
      'ಜಾನಪದ ನೃತ್ಯಗಳು ಕರ್ನಾಟಕದ ಹಳ್ಳಿಗಳ ಹೃದಯಬಡಿತ. ಸುಗ್ಗಿ, ಜಾತ್ರೆ ಮತ್ತು ದೇವಾಲಯದ ಹಬ್ಬಗಳಲ್ಲಿ ಡೋಲು, ತಾಳ ಮತ್ತು ಜಾನಪದ ಹಾಡುಗಳೊಂದಿಗೆ ಇವುಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.',
    ),
    examples: [
      ex('yakshagana', 'Yakshagana', 'ಯಕ್ಷಗಾನ', 'Coastal Karnataka & Malnad', 'An all-night theatre of dance, music and dialogue that tells stories from the Ramayana, Mahabharata and Puranas. Performers wear towering crowns, bright make-up and heavy costumes, while a singer (bhagavata) leads the story with chande and maddale drums. It is Karnataka’s most famous traditional art form.'),
      ex('dollu-kunitha', 'Dollu Kunitha', 'ಡೊಳ್ಳು ಕುಣಿತ', 'Shivamogga & Chitradurga', 'A powerful drum dance performed by men of the Kuruba community in honour of Beeralingeshwara. Dancers tie huge drums (dollu) around their waists and beat them while leaping, spinning and forming patterns. The thundering sound can be heard across entire villages.'),
      ex('kamsale', 'Kamsale', 'ಕಂಸಾಳೆ', 'Mysuru & Chamarajanagar', 'A devotional dance performed by devotees of Male Mahadeshwara. Dancers strike a pair of bronze cymbals (kamsale) in complex rhythms while moving in circles and performing acrobatic steps. The songs tell the life and miracles of the saint.'),
      ex('veeragase', 'Veeragase', 'ವೀರಗಾಸೆ', 'Mysuru, Mandya & Hassan', 'A vigorous warrior dance based on the legend of Veerabhadra, who was created by Lord Shiva. Dancers wear white costumes, a headgear, and hold a sword and shield while moving to loud drums. It is performed mainly during the Hindu months of Shravana and Kartika.'),
      ex('pooja-kunitha', 'Pooja Kunitha', 'ಪೂಜಾ ಕುಣಿತ', 'Bengaluru & Mandya', 'A ritual dance in which the dancer balances a tall, decorated wooden frame carrying the image of a goddess on the head. The frame can reach several feet high and is covered with flowers and colourful cloth. Dancers move to the beat of drums without touching the frame.'),
    ],
  },
  {
    slug: 'ritual',
    name: bi('Ritual / Traditional Dance', 'ಆಚರಣಾತ್ಮಕ ನೃತ್ಯ'),
    description: bi(
      'Some of Karnataka’s dances are not performances but sacred rituals. They honour local spirits (daivas), goddesses and guardian deities, and are believed to bring protection and prosperity to the community. Performers often enter a trance-like state and are treated as the voice of the deity.',
      'ಕರ್ನಾಟಕದ ಕೆಲವು ನೃತ್ಯಗಳು ಪವಿತ್ರ ಆಚರಣೆಗಳು. ಇವು ದೈವಗಳು ಮತ್ತು ಗ್ರಾಮದೇವತೆಗಳನ್ನು ಗೌರವಿಸುತ್ತವೆ ಹಾಗೂ ಸಮುದಾಯಕ್ಕೆ ರಕ್ಷಣೆ ಮತ್ತು ಸಮೃದ್ಧಿ ತರುತ್ತವೆ ಎಂದು ನಂಬಲಾಗಿದೆ.',
    ),
    examples: [
      ex('bhootha-aradhane', 'Bhootha Aradhane', 'ಭೂತಾರಾಧನೆ', 'Tulu Nadu (Dakshina Kannada & Udupi)', 'The worship of local spirit deities (daivas) such as Panjurli and Guliga in coastal Karnataka. At night, a performer in elaborate make-up, palm-leaf ornaments and a glowing headdress dances to drums and becomes the voice of the daiva, settling disputes and blessing villagers. It is also known as Bhoota Kola.'),
      ex('karaga-dance', 'Karaga Dance', 'ಕರಗ ನೃತ್ಯ', 'Bengaluru', 'A sacred dance of the Thigala community in honour of goddess Draupadi. The Karaga bearer, dressed as a woman, balances a tall flower pyramid on his head and dances through the streets all night without touching it. Thousands follow the procession, accompanied by sword-bearing Veerakumaras.'),
      ex('somana-kunitha', 'Somana Kunita', 'ಸೋಮನ ಕುಣಿತ', 'Southern Karnataka', 'A mask dance performed to honour village goddesses (grama devatas). Dancers wear large, colourful wooden masks (Soma) representing guardian spirits and dance to drums during village festivals. It is believed to protect the village from disease and misfortune.'),
    ],
  },
]
