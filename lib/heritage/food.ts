import { bi, ex, type Subcategory } from './types'

export const foodSubcategories: Subcategory[] = [
  {
    slug: 'sweets',
    name: bi('Sweets', 'ಸಿಹಿತಿಂಡಿಗಳು'),
    description: bi(
      'No celebration in Karnataka is complete without sweets. Many are made with ghee, jaggery, gram flour and coconut, and some began in royal kitchens. Each town is proud of its own speciality.',
      'ಕರ್ನಾಟಕದಲ್ಲಿ ಯಾವುದೇ ಸಂಭ್ರಮ ಸಿಹಿ ಇಲ್ಲದೆ ಪೂರ್ಣವಾಗುವುದಿಲ್ಲ. ತುಪ್ಪ, ಬೆಲ್ಲ, ಕಡಲೆಹಿಟ್ಟು ಮತ್ತು ತೆಂಗಿನಕಾಯಿಯಿಂದ ಮಾಡುವ ಇವುಗಳಲ್ಲಿ ಕೆಲವು ಅರಮನೆಯ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಹುಟ್ಟಿದವು.',
    ),
    examples: [
      ex('mysore-pak', 'Mysore Pak', 'ಮೈಸೂರು ಪಾಕ್', 'Mysuru', 'A rich sweet made from gram flour, sugar and generous amounts of ghee. It was first made by Kakasura Madappa, a cook in the Mysore Palace kitchen, for Krishnaraja Wodeyar IV. It comes in two forms — the soft, melt-in-the-mouth version and the traditional firm, porous one.'),
      ex('dharwad-peda', 'Dharwad Peda', 'ಧಾರವಾಡ ಪೇಡ', 'Dharwad', 'A brown, grainy milk sweet made by slowly cooking milk with sugar until it caramelises. It was popularised by the Thakur family, who moved to Dharwad in the 19th century. It has a GI tag and is a favourite gift from North Karnataka.'),
      ex('holige', 'Holige / Obbattu', 'ಹೋಳಿಗೆ / ಒಬ್ಬಟ್ಟು', 'Across Karnataka', 'A thin, sweet flatbread stuffed with a filling of chana dal and jaggery or coconut and jaggery. It is made for Ugadi, weddings and festivals, and served warm with ghee or milk. Every family has its own recipe.'),
      ex('karadantu', 'Karadantu', 'ಕರದಂಟು', 'Gokak, Belagavi', 'A dense, energy-rich sweet made from edible gum, dry fruits, jaggery and ghee. It is a speciality of Gokak and is traditionally given to new mothers for strength. It keeps for weeks, so it is popular for travel.'),
      ex('chiroti', 'Chiroti', 'ಚಿರೋಟಿ', 'Across Karnataka', 'A delicate, layered pastry fried until crisp and flaky, then sprinkled with powdered sugar. It is often served soaked in sweetened almond milk at weddings. Making chiroti is considered a test of a cook’s skill.'),
    ],
  },
  {
    slug: 'meals',
    name: bi('Meals / Main Dishes', 'ಊಟ / ಮುಖ್ಯ ಖಾದ್ಯಗಳು'),
    description: bi(
      'A traditional Karnataka meal is served on a banana leaf, with rice, saaru, palya, kosambari and more placed in a set order. The north is known for jowar rotti and spicy chutneys, while the south favours ragi and rice. These dishes are nutritious, seasonal and deeply tied to local farming.',
      'ಸಾಂಪ್ರದಾಯಿಕ ಕರ್ನಾಟಕ ಊಟವನ್ನು ಬಾಳೆ ಎಲೆಯ ಮೇಲೆ ನಿಗದಿತ ಕ್ರಮದಲ್ಲಿ ಬಡಿಸಲಾಗುತ್ತದೆ. ಉತ್ತರದಲ್ಲಿ ಜೋಳದ ರೊಟ್ಟಿ, ದಕ್ಷಿಣದಲ್ಲಿ ರಾಗಿ ಮತ್ತು ಅನ್ನ ಪ್ರಮುಖ.',
    ),
    examples: [
      ex('bisi-bele-bath', 'Bisi Bele Bath', 'ಬಿಸಿಬೇಳೆ ಬಾತ್', 'Mysuru & Bengaluru', 'Meaning “hot lentil rice”, this one-pot dish combines rice, toor dal, vegetables, tamarind and a special spice powder. It is served hot with ghee, boondi or potato chips. It is believed to have originated in the Mysore Palace kitchens.'),
      ex('ragi-mudde', 'Ragi Mudde', 'ರಾಗಿ ಮುದ್ದೆ', 'Southern Karnataka', 'Soft balls made from finger millet (ragi) flour cooked in water. It is the staple food of farmers in southern Karnataka, rich in calcium and fibre. It is swallowed in small pieces with soppu saaru (greens curry) or mutton curry.'),
      ex('jolada-rotti', 'Jolada Rotti', 'ಜೋಳದ ರೊಟ್ಟಿ', 'North Karnataka', 'A thin flatbread made from jowar (sorghum) flour, patted by hand and cooked on a clay pan. It is the heart of the North Karnataka “rotti oota”, served with ennegai (stuffed brinjal), chutney powders and curd. Crisp versions can be stored for weeks.'),
      ex('akki-rotti', 'Akki Rotti', 'ಅಕ್ಕಿ ರೊಟ್ಟಿ', 'Southern & Malnad Karnataka', 'A rice-flour flatbread mixed with onions, carrots, dill, coconut and green chillies. It is patted thin on a banana leaf or pan and cooked with a little oil. It is a popular breakfast served with chutney.'),
      ex('saaru', 'Saaru', 'ಸಾರು', 'Across Karnataka', 'A thin, tangy soup-like curry made with tamarind, tomato, lentils and a special saaru powder. It is poured over rice and is part of almost every Karnataka meal. It is also known for easing colds and aiding digestion.'),
      ex('kosambari', 'Kosambari', 'ಕೋಸಂಬರಿ', 'Across Karnataka', 'A fresh salad made with soaked moong dal, cucumber, carrot, coconut and lemon, tempered with mustard seeds. It is served at weddings and festivals, and offered to gods during Rama Navami. It is cooling, light and healthy.'),
    ],
  },
  {
    slug: 'breakfast',
    name: bi('Breakfast', 'ಉಪಾಹಾರ'),
    description: bi(
      'Karnataka is famous for its breakfasts, served in darshinis and homes with coconut chutney and sambar. Many of India’s best-loved dosas were born here. A good breakfast is usually followed by a strong cup of filter coffee.',
      'ದರ್ಶಿನಿಗಳು ಮತ್ತು ಮನೆಗಳಲ್ಲಿ ಚಟ್ನಿ ಮತ್ತು ಸಾಂಬಾರಿನೊಂದಿಗೆ ನೀಡುವ ಕರ್ನಾಟಕದ ಉಪಾಹಾರ ಪ್ರಸಿದ್ಧ. ಭಾರತದ ಹಲವು ಜನಪ್ರಿಯ ದೋಸೆಗಳು ಇಲ್ಲಿ ಹುಟ್ಟಿದವು.',
    ),
    examples: [
      ex('masala-dosa', 'Masala Dosa', 'ಮಸಾಲೆ ದೋಸೆ', 'Udupi & Bengaluru', 'A crisp, golden dosa made from fermented rice and urad dal batter, filled with a spiced potato-onion palya. It is traditionally linked with Udupi cooks and Bengaluru’s old restaurants. Mysore masala dosa adds a spicy red chutney inside.'),
      ex('set-dosa', 'Set Dosa', 'ಸೆಟ್ ದೋಸೆ', 'Bengaluru', 'Soft, thick and spongy dosas served in a “set” of two or three. The batter includes poha or rice flakes, which makes them fluffy. They are served with sagu (vegetable curry) and coconut chutney.'),
      ex('neer-dosa', 'Neer Dosa', 'ನೀರ್ ದೋಸೆ', 'Mangaluru & Udupi', '“Neer” means water in Tulu. This thin, lacy dosa is made from a watery rice batter without fermentation. It is soft and delicate, and is served with coconut chutney, chicken curry or jaggery-coconut.'),
      ex('ragi-dosa', 'Ragi Dosa', 'ರಾಗಿ ದೋಸೆ', 'Southern Karnataka', 'A healthy dosa made from finger millet flour, often mixed with rice flour and onions. It is thin and crisp with a nutty flavour. It is popular as a nutritious, diabetic-friendly breakfast.'),
      ex('idli-vada', 'Idli-Vada', 'ಇಡ್ಲಿ-ವಡೆ', 'Across Karnataka', 'Soft steamed rice cakes (idli) served with crispy fried lentil doughnuts (vada), sambar and chutney. It is one of the most common breakfasts in Karnataka. Thatte idli from Bidadi is a large, flat version.'),
      ex('uppittu', 'Uppittu', 'ಉಪ್ಪಿಟ್ಟು', 'Across Karnataka', 'A savoury dish made from roasted semolina (rava) cooked with vegetables, curry leaves, mustard seeds and green chillies. It is quick, filling and often served with kesari bath — a combination called “chow chow bath”.'),
      ex('maddur-breakfast', 'Maddur-style Breakfast', 'ಮದ್ದೂರು ಶೈಲಿಯ ಉಪಾಹಾರ', 'Maddur, Mandya', 'Travellers on the Bengaluru–Mysuru highway traditionally stop at Maddur for its breakfast spread — crisp Maddur vada, idli and hot coffee. Maddur Tiffanys, near the railway station, made this stop famous.', 'maddur-vada'),
    ],
  },
  {
    slug: 'snacks',
    name: bi('Snacks', 'ತಿಂಡಿಗಳು'),
    description: bi(
      'Karnataka’s snacks are crunchy, spicy and perfect with evening coffee or tea. Many are made at home during festivals, while others are famous street foods. Some towns are known across India for a single snack.',
      'ಕರ್ನಾಟಕದ ತಿಂಡಿಗಳು ಗರಿಗರಿ, ಖಾರ ಮತ್ತು ಸಂಜೆಯ ಕಾಫಿಗೆ ಸೂಕ್ತ. ಕೆಲವು ಹಬ್ಬಗಳಲ್ಲಿ ಮನೆಯಲ್ಲಿ ತಯಾರಾದರೆ, ಇನ್ನು ಕೆಲವು ಬೀದಿ ತಿಂಡಿಗಳು.',
    ),
    examples: [
      ex('maddur-vada', 'Maddur Vada', 'ಮದ್ದೂರು ವಡೆ', 'Maddur, Mandya', 'A crisp, flat fritter made from rice flour, semolina, maida, onions and curry leaves. It was invented at Maddur railway station and became famous among train passengers. Unlike other vadas, it has no hole and is crunchy all the way through.'),
      ex('kodubale', 'Kodubale', 'ಕೋಡುಬಳೆ', 'Southern Karnataka', 'Ring-shaped crunchy snacks made from rice flour, coconut, chilli and spices, then deep-fried. They are made at home in large batches for festivals like Gowri-Ganesha and Deepavali. The name comes from the ring-like (bale = bangle) shape.'),
      ex('nippattu', 'Nippattu', 'ನಿಪ್ಪಟ್ಟು', 'Across Karnataka', 'Thin, crisp crackers made from rice flour, peanuts, roasted gram and curry leaves. They are a common tea-time snack and last for weeks in an airtight jar. They are often crushed and topped with onion and chutney as “nippattu masala”.'),
      ex('churumuri', 'Churumuri', 'ಚುರುಮುರಿ', 'Mysuru & Bengaluru', 'A popular street snack of puffed rice tossed with onion, tomato, carrot, coriander, lime and spices. Vendors mix it fresh in a bowl and serve it in a paper cone. It is light, tangy and loved on evening walks.'),
      ex('mangalore-buns', 'Mangalore Buns', 'ಮಂಗಳೂರು ಬನ್ಸ್', 'Mangaluru & Udupi', 'Slightly sweet, fluffy puris made with ripe bananas, flour and a pinch of cumin. They are deep-fried until puffed and golden. They are served with coconut chutney and sambar for breakfast or tea time.'),
      ex('pakoda', 'Pakoda', 'ಪಕೋಡ', 'Across Karnataka', 'Crispy fritters made by dipping onions, chillies or vegetables into spiced gram-flour batter and frying them. They are the classic rainy-day snack in Karnataka. Menasinakai bajji (chilli fritters) from North Karnataka is a famous variant.'),
    ],
  },
]
