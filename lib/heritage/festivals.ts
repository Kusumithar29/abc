import { bi, ex, type Subcategory } from './types'

export const festivalSubcategories: Subcategory[] = [
  {
    slug: 'festivals',
    name: bi('Festivals', 'ಹಬ್ಬಗಳು'),
    description: bi(
      'Karnataka celebrates festivals throughout the year, marking harvests, new beginnings, gods and royal history. Homes are decorated with rangoli and mango leaves, special food is cooked, and whole towns gather for processions and fairs. Some festivals are statewide, while others belong to a single city or community.',
      'ಕರ್ನಾಟಕದಲ್ಲಿ ವರ್ಷವಿಡೀ ಹಬ್ಬಗಳು ನಡೆಯುತ್ತವೆ — ಸುಗ್ಗಿ, ಹೊಸ ವರ್ಷ, ದೇವರು ಮತ್ತು ರಾಜಪರಂಪರೆಯ ಸಂಭ್ರಮ. ಮನೆಗಳನ್ನು ರಂಗೋಲಿ ಮತ್ತು ತೋರಣಗಳಿಂದ ಅಲಂಕರಿಸಿ ವಿಶೇಷ ಅಡುಗೆ ಮಾಡಲಾಗುತ್ತದೆ.',
    ),
    examples: [
      ex('mysuru-dasara', 'Mysuru Dasara', 'ಮೈಸೂರು ದಸರಾ', 'Mysuru', 'Karnataka’s state festival (Nada Habba), celebrated for ten days to mark the victory of goddess Chamundeshwari over the demon Mahishasura. The palace is lit up, and cultural programmes fill the city. It has been celebrated royally since the Vijayanagara era over 400 years ago.'),
      ex('hampi-utsav', 'Hampi Utsav', 'ಹಂಪಿ ಉತ್ಸವ', 'Hampi', 'A cultural festival held among the ruins of Hampi to recreate the glory of the Vijayanagara Empire. It features classical and folk dance, music, puppet shows, fireworks and light shows on the ancient monuments. Artists from across India perform against the stunning boulder landscape.'),
      ex('ugadi', 'Ugadi', 'ಯುಗಾದಿ', 'Across Karnataka', 'The Kannada New Year, celebrated in March or April. Families decorate doors with mango leaves, wear new clothes, and eat bevu-bella — a mix of neem and jaggery that reminds everyone that life has both bitter and sweet moments. Holige/obbattu is the festival sweet.'),
      ex('karaga', 'Bengaluru Karaga', 'ಬೆಂಗಳೂರು ಕರಗ', 'Bengaluru', 'One of Bengaluru’s oldest festivals, celebrated by the Thigala community at the Dharmaraya Swamy temple. On the full-moon night, the Karaga bearer carries the sacred flower pyramid through the old city. The procession famously stops at a Sufi dargah, symbolising harmony.'),
      ex('vairamudi', 'Vairamudi Festival', 'ವೈರಮುಡಿ ಉತ್ಸವ', 'Melukote, Mandya', 'A grand festival at the Cheluvanarayana Swamy temple in Melukote. The deity is adorned with the Vairamudi — a diamond-studded crown — and taken out in a night procession. Lakhs of devotees gather to see the crown, which is displayed only once a year.'),
      ex('ganesh-chaturthi', 'Ganesh Chaturthi', 'ಗಣೇಶ ಚತುರ್ಥಿ', 'Across Karnataka', 'A festival celebrating the birth of Lord Ganesha. In Karnataka it begins with Gowri Habba, honouring his mother Gowri. Clay idols are worshipped at home and in public pandals, then immersed in water with music and dancing.'),
      ex('makar-sankranti', 'Makar Sankranti', 'ಮಕರ ಸಂಕ್ರಾಂತಿ', 'Across Karnataka', 'The harvest festival held in mid-January, when the sun enters Capricorn. People exchange “ellu-bella” — a mix of sesame, jaggery, coconut and peanuts — saying “ellu bella thindu olle maathaadi” (eat sesame and jaggery, and speak kindly). Cattle are decorated and made to jump over fire in villages.'),
    ],
  },
  {
    slug: 'culture-rituals',
    name: bi('Culture / Rituals', 'ಸಂಸ್ಕೃತಿ / ಆಚರಣೆಗಳು'),
    description: bi(
      'Rituals and cultural traditions connect Karnataka’s people to their land, gods and ancestors. Many are centuries old and are organised by the whole community. They combine faith, sport, art and celebration in ways unique to each region.',
      'ಆಚರಣೆಗಳು ಮತ್ತು ಸಾಂಸ್ಕೃತಿಕ ಪರಂಪರೆಗಳು ಕರ್ನಾಟಕದ ಜನರನ್ನು ಅವರ ನೆಲ, ದೇವರು ಮತ್ತು ಪೂರ್ವಜರೊಂದಿಗೆ ಬೆಸೆಯುತ್ತವೆ. ಇವು ನಂಬಿಕೆ, ಕ್ರೀಡೆ, ಕಲೆ ಮತ್ತು ಸಂಭ್ರಮವನ್ನು ಒಟ್ಟುಗೂಡಿಸುತ್ತವೆ.',
    ),
    examples: [
      ex('bhoota-kola', 'Bhoota Kola', 'ಭೂತ ಕೋಲ', 'Tulu Nadu', 'A night-long ritual of spirit worship in coastal Karnataka, where a performer embodies a daiva and speaks to the community. It is believed to protect the village, cattle and crops. The ritual was brought to worldwide attention by the Kannada film “Kantara”.', 'bhootha-aradhane'),
      ex('karaga-ritual', 'Karaga Ritual', 'ಕರಗ ಆಚರಣೆ', 'Bengaluru & Kolar', 'The Karaga is a sacred pot representing the goddess, prepared with secret rituals over several days. The bearer fasts and follows strict rules before carrying it. Veerakumaras, holding swords, guard the Karaga through the streets.', 'karaga-dance'),
      ex('kambala', 'Kambala', 'ಕಂಬಳ', 'Dakshina Kannada & Udupi', 'A traditional buffalo race held in slushy paddy fields between November and March. Pairs of buffaloes, tied to a plough, race down a water-filled track guided by a runner. Originally a thanksgiving to the gods for a good harvest, it now draws huge crowds.'),
      ex('vairamudi-procession', 'Vairamudi Procession', 'ವೈರಮುಡಿ ಉತ್ಸವ ಮೆರವಣಿಗೆ', 'Melukote, Mandya', 'During the procession, the diamond crown is brought from the Mandya treasury under guard and placed on the deity only after dark. Devotees believe the priest must not look at the crown directly, so he is blindfolded while placing it.', 'vairamudi'),
      ex('dasara-procession', 'Dasara Procession (Jamboo Savari)', 'ಜಂಬೂ ಸವಾರಿ', 'Mysuru', 'The grand finale of Mysuru Dasara on Vijayadashami. A decorated elephant carries the golden howdah (750 kg) with the idol of Chamundeshwari from the palace to Bannimantap. Folk troupes, tableaux, bands and horses join the procession.'),
      ex('yakshagana-tradition', 'Yakshagana Tradition', 'ಯಕ್ಷಗಾನ ಪರಂಪರೆ', 'Coastal Karnataka', 'Yakshagana troupes (melas) are attached to temples and tour villages for months, performing as a form of service to the deity. Before each show, the troupe offers prayers, and the performance itself is seen as an act of devotion. Some melas are over 200 years old.', 'yakshagana'),
    ],
  },
]
