import { bi, ex, type Subcategory } from './types'

const mysorePalace = ex('mysore-palace', 'Mysore Palace', 'ಮೈಸೂರು ಅರಮನೆ', 'Mysuru', 'The official residence of the Wodeyar royal family, rebuilt in 1912 in the Indo-Saracenic style after an earlier palace burned down. Its domes, arches and stained-glass ceilings attract millions of visitors each year. On Sunday evenings and during Dasara, nearly 100,000 bulbs light up the palace.')

export const monumentSubcategories: Subcategory[] = [
  {
    slug: 'temples',
    name: bi('Temples', 'ದೇವಾಲಯಗಳು'),
    description: bi(
      'Karnataka’s temples are masterpieces of Indian architecture, built by the Chalukyas, Hoysalas and Vijayanagara kings. They show every major style — Dravida, Nagara and the unique Vesara blend. Beyond worship, they were centres of music, dance, learning and community life.',
      'ಚಾಲುಕ್ಯರು, ಹೊಯ್ಸಳರು ಮತ್ತು ವಿಜಯನಗರದ ಅರಸರು ಕಟ್ಟಿಸಿದ ಕರ್ನಾಟಕದ ದೇವಾಲಯಗಳು ಭಾರತೀಯ ವಾಸ್ತುಶಿಲ್ಪದ ಅದ್ಭುತಗಳು. ಇವು ಪೂಜೆಯ ಜೊತೆಗೆ ಸಂಗೀತ, ನೃತ್ಯ ಮತ್ತು ಕಲಿಕೆಯ ಕೇಂದ್ರಗಳಾಗಿದ್ದವು.',
    ),
    examples: [
      ex('virupaksha-temple', 'Virupaksha Temple', 'ವಿರೂಪಾಕ್ಷ ದೇವಾಲಯ', 'Hampi, Vijayanagara', 'One of the oldest working temples in India, dedicated to Lord Shiva as Virupaksha. Its 50-metre gopuram towers over Hampi’s bazaar street, and worship has continued here since the 7th century. A pinhole in one chamber projects an inverted image of the tower onto the wall.'),
      ex('vittala-temple', 'Vittala Temple', 'ವಿಠ್ಠಲ ದೇವಾಲಯ', 'Hampi, Vijayanagara', 'The finest example of Vijayanagara architecture, built in the 15th–16th centuries. It is famous for its stone chariot — now on the ₹50 note — and its musical pillars, which ring with different notes when tapped. The halls are covered with carvings of dancers, musicians and mythical beasts.'),
      ex('chennakeshava-temple', 'Chennakeshava Temple', 'ಚೆನ್ನಕೇಶವ ದೇವಾಲಯ', 'Belur, Hassan', 'Built in 1117 CE by Hoysala king Vishnuvardhana to celebrate a victory, the temple took 103 years to complete. Its soapstone walls hold hundreds of sculptures, including the famous madanikas — graceful celestial dancers. It is part of a UNESCO World Heritage Site.'),
      ex('hoysaleswara-temple', 'Hoysaleswara Temple', 'ಹೊಯ್ಸಳೇಶ್ವರ ದೇವಾಲಯ', 'Halebidu, Hassan', 'A 12th-century twin temple dedicated to Shiva in the old Hoysala capital of Dorasamudra. Its outer walls feature over 240 sculptures and continuous friezes of elephants, lions, horses and scenes from the epics. The detail is so fine that the carvings look like they were made in wood or ivory.'),
      ex('durga-temple-aihole', 'Durga Temple, Aihole', 'ದುರ್ಗಾ ದೇವಾಲಯ, ಐಹೊಳೆ', 'Aihole, Bagalkot', 'A 7th–8th century Chalukyan temple with an unusual apsidal (horseshoe) shape, surrounded by a pillared corridor. Aihole is called the “cradle of Indian temple architecture” because builders experimented here with many early styles. The name comes from “durg” (fort), not the goddess.'),
    ],
  },
  {
    slug: 'heritage-sites',
    name: bi('Monuments / Heritage Sites', 'ಸ್ಮಾರಕಗಳು / ಪರಂಪರೆಯ ತಾಣಗಳು'),
    description: bi(
      'Karnataka is home to several UNESCO World Heritage Sites and hundreds of protected monuments. These places preserve the ruins of great empires, cave temples, mausoleums and palaces. Walking through them is like walking through the history of South India.',
      'ಕರ್ನಾಟಕದಲ್ಲಿ ಹಲವು ಯುನೆಸ್ಕೋ ವಿಶ್ವ ಪರಂಪರೆಯ ತಾಣಗಳು ಮತ್ತು ನೂರಾರು ಸಂರಕ್ಷಿತ ಸ್ಮಾರಕಗಳಿವೆ. ಇವು ಮಹಾ ಸಾಮ್ರಾಜ್ಯಗಳ ಅವಶೇಷಗಳು, ಗುಹಾ ದೇವಾಲಯಗಳು ಮತ್ತು ಅರಮನೆಗಳನ್ನು ಉಳಿಸಿವೆ.',
    ),
    examples: [
      ex('hampi', 'Hampi', 'ಹಂಪಿ', 'Vijayanagara district', 'The ruined capital of the Vijayanagara Empire, once one of the richest cities in the world in the 15th century. Its boulder-strewn landscape holds over 1,600 monuments — temples, markets, royal enclosures and aqueducts. It is a UNESCO World Heritage Site.'),
      ex('pattadakal', 'Pattadakal', 'ಪಟ್ಟದಕಲ್ಲು', 'Bagalkot', 'A group of 7th–8th century Chalukyan temples where kings were crowned. It is special because northern (Nagara) and southern (Dravida) temple styles stand side by side. The Virupaksha temple here inspired later temples across South India. It is a UNESCO World Heritage Site.'),
      ex('badami-caves', 'Badami Cave Temples', 'ಬಾದಾಮಿ ಗುಹಾ ದೇವಾಲಯಗಳು', 'Badami, Bagalkot', 'Four cave temples carved into red sandstone cliffs by the early Chalukyas in the 6th century. They are dedicated to Shiva, Vishnu and the Jain Tirthankaras, and include an 18-armed dancing Nataraja. The caves overlook the calm Agastya lake.'),
      ex('gol-gumbaz', 'Gol Gumbaz', 'ಗೋಳ ಗುಮ್ಮಟ', 'Vijayapura', 'The mausoleum of Sultan Mohammed Adil Shah, completed in 1656. Its dome is one of the largest in the world without internal pillars. The famous “whispering gallery” carries even a soft whisper across the entire dome and echoes it several times.'),
      mysorePalace,
    ],
  },
  {
    slug: 'forts-palaces',
    name: bi('Forts / Palaces', 'ಕೋಟೆಗಳು / ಅರಮನೆಗಳು'),
    description: bi(
      'Karnataka’s forts and palaces tell the story of warrior chieftains, sultans and maharajas. Hilltop forts guarded trade routes and kingdoms, while palaces showcase royal taste in architecture and art. Many still host festivals, museums and cultural events.',
      'ಕರ್ನಾಟಕದ ಕೋಟೆಗಳು ಮತ್ತು ಅರಮನೆಗಳು ವೀರ ಪಾಳೆಗಾರರು, ಸುಲ್ತಾನರು ಮತ್ತು ಮಹಾರಾಜರ ಕಥೆ ಹೇಳುತ್ತವೆ. ಅನೇಕವು ಇಂದಿಗೂ ಹಬ್ಬಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ನೆಲೆಯಾಗಿವೆ.',
    ),
    examples: [
      ex('bangalore-palace', 'Bangalore Palace', 'ಬೆಂಗಳೂರು ಅರಮನೆ', 'Bengaluru', 'Built in 1878 by the Wodeyars and inspired by England’s Windsor Castle. It features Tudor-style towers, fortified arches, wood carvings and a large collection of royal portraits. Today its grounds host concerts, exhibitions and cultural events.'),
      ex('chitradurga-fort', 'Chitradurga Fort', 'ಚಿತ್ರದುರ್ಗದ ಕೋಟೆ', 'Chitradurga', 'A massive stone fort spread over hills of giant boulders, built mostly by the Nayakas of Chitradurga. It has seven circles of walls, secret passages and water tanks. It is linked to the legend of Onake Obavva, a brave woman who defended the fort with a pestle (onake).'),
      ex('bidar-fort', 'Bidar Fort', 'ಬೀದರ್ ಕೋಟೆ', 'Bidar', 'Rebuilt in 1428 by the Bahmani Sultan Ahmad Shah, the fort has a triple moat, huge gateways and elegant Persian-style palaces. Inside is the Rangin Mahal, decorated with mother-of-pearl inlay and colourful tiles. The soil used for Bidriware comes from here.'),
      mysorePalace,
    ],
  },
]
