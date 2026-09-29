import { bi, ex, type Subcategory } from './types'

export const painting: Subcategory = {
  slug: 'painting',
  name: bi('Painting', 'ಚಿತ್ರಕಲೆ'),
  description: bi(
    'Karnataka’s painting traditions run from the gilded court canvases of the Wodeyar kings to earthy wall art painted by village women. Artists grind natural pigments from stones, leaves and soot, and many styles use real gold foil. Each style reflects a different community, region and way of seeing the world.',
    'ಒಡೆಯರ ಆಸ್ಥಾನದ ಚಿನ್ನದ ಚಿತ್ರಗಳಿಂದ ಹಳ್ಳಿಯ ಮಹಿಳೆಯರು ಬಿಡಿಸುವ ಗೋಡೆ ಚಿತ್ರಗಳವರೆಗೆ ಕರ್ನಾಟಕದ ಚಿತ್ರಕಲೆ ವಿಸ್ತರಿಸಿದೆ. ಕಲ್ಲು, ಎಲೆ ಮತ್ತು ಮಸಿಯಿಂದ ನೈಸರ್ಗಿಕ ಬಣ್ಣಗಳನ್ನು ತಯಾರಿಸಲಾಗುತ್ತದೆ. ಪ್ರತಿಯೊಂದು ಶೈಲಿಯೂ ಒಂದು ಸಮುದಾಯ ಮತ್ತು ಪ್ರದೇಶದ ಕಥೆ ಹೇಳುತ್ತದೆ.',
  ),
  examples: [
    ex('mysore-painting', 'Mysore Painting', 'ಮೈಸೂರು ಚಿತ್ರಕಲೆ', 'Mysuru', 'A classical South Indian style that flourished under Krishnaraja Wodeyar III in the 19th century. Artists apply a raised gesso paste, lay down real gold leaf, and paint deities and royal scenes with fine brushes in soft, muted colours. The finished works glow gently rather than dazzle, and are prized as heirlooms.'),
    ex('chittara', 'Chittara Art', 'ಚಿತ್ತಾರ ಕಲೆ', 'Shivamogga (Malnad)', 'A geometric wall and floor art practised by women of the Deewaru community in the Malnad region. Using rice paste, red earth, yellow seeds and black soot, they paint intricate patterns for weddings, harvests and festivals. Each motif, from rice sheaves to wedding palanquins, carries a specific meaning.'),
    ex('ganjifa', 'Ganjifa Cards', 'ಗಂಜೀಫಾ', 'Mysuru', 'Circular, hand-painted playing cards that became a royal pastime in the Mysuru court. Krishnaraja Wodeyar III designed elaborate decks with up to 360 cards based on the Dashavatara and Hindu epics. Today a handful of artists keep the craft alive, painting miniature scenes on cards just a few centimetres wide.'),
    ex('hase-chitra', 'Hase Chitra', 'ಹಸೆ ಚಿತ್ರ', 'Shivamogga & Uttara Kannada', 'A ritual wall painting drawn around the seat (hase) where a bride and groom sit during wedding ceremonies. The patterns are made with natural colours and are believed to bless the couple with prosperity. It is closely related to Chittara and is still painted in homes across the Malnad region.'),
  ],
}

export const craft: Subcategory = {
  slug: 'craft',
  name: bi('Craft / Handicraft', 'ಕರಕುಶಲ ಕಲೆ'),
  description: bi(
    'Karnataka’s artisans have turned metal, wood, thread and stone into objects of beauty for centuries. Many of these crafts carry a Geographical Indication (GI) tag, which protects their origin and technique. They are still made by hand in family workshops, with skills passed down through generations.',
    'ಕರ್ನಾಟಕದ ಕುಶಲಕರ್ಮಿಗಳು ಶತಮಾನಗಳಿಂದ ಲೋಹ, ಮರ, ದಾರ ಮತ್ತು ಕಲ್ಲನ್ನು ಸುಂದರ ವಸ್ತುಗಳನ್ನಾಗಿಸಿದ್ದಾರೆ. ಇವುಗಳಲ್ಲಿ ಹಲವು ಕಲೆಗಳು ಭೌಗೋಳಿಕ ಗುರುತು (GI) ಪಡೆದಿವೆ. ಇಂದಿಗೂ ಇವುಗಳನ್ನು ಕುಟುಂಬದ ಕಾರ್ಯಾಗಾರಗಳಲ್ಲಿ ಕೈಯಿಂದ ತಯಾರಿಸಲಾಗುತ್ತದೆ.',
  ),
  examples: [
    ex('kasuti', 'Kasuti Embroidery', 'ಕಸೂತಿ', 'Dharwad & North Karnataka', 'A fine hand embroidery traditionally stitched on Ilkal sarees and blouse pieces. Artisans count the threads of the fabric to create temple towers, chariots, elephants and lotus motifs, and the work looks identical on both sides. It holds a GI tag and was once a skill every young woman in North Karnataka learned.'),
    ex('bidriware', 'Bidriware', 'ಬಿದರಿ ಕಲೆ', 'Bidar', 'A 14th-century metal craft from the Bahmani era. Craftsmen cast vessels in a zinc-copper alloy, engrave delicate designs and hammer pure silver wire into the grooves. The piece is then blackened with a special soil found only in the Bidar fort, making the silver shine brightly against the dark surface.'),
    ex('sandalwood-carving', 'Sandalwood Carving', 'ಗಂಧದ ಕೆತ್ತನೆ', 'Mysuru, Sagara & Soraba', 'Karnataka is known as the “land of sandalwood”, and the Gudigar community has carved this fragrant wood for generations. They create deities, caskets, animals and panels with astonishing detail. The wood keeps its scent for decades, so carvings are treasured as both art and keepsakes.'),
    ex('rosewood-inlay', 'Rosewood Inlay', 'ಮೈಸೂರು ಮರದ ಕೆತ್ತನೆ', 'Mysuru', 'Mysuru artisans cut tiny pieces of lighter wood and fit them into dark rosewood to create pictures of gods, royal processions and floral borders. The craft grew under the patronage of the Wodeyars and Tipu Sultan. Tables, trays, jewellery boxes and wall panels made this way are still sold across the city.'),
    ex('kinhal-craft', 'Kinhal (Kinnal) Craft', 'ಕಿನ್ನಾಳ ಕಲೆ', 'Kinnal, Koppal', 'Light wooden figures and toys made in the village of Kinnal, once used to decorate the temples and chariots of the Vijayanagara empire. Artisans build them from soft wood, coat them with a paste of tamarind seeds and cloth, and paint them in bright natural colours. The craft has a GI tag.'),
  ],
}

export const traditionalToys: Subcategory = {
  slug: 'traditional-toys',
  name: bi('Traditional Toys', 'ಸಾಂಪ್ರದಾಯಿಕ ಆಟಿಕೆಗಳು'),
  description: bi(
    'Karnataka has a long toy-making heritage, from lacquered wooden spinning tops to painted dolls displayed during Dasara. Most toys are made from soft local woods and coloured with safe vegetable dyes. They are loved by children and collected by adults around the world.',
    'ಮೆರುಗಿನ ಮರದ ಬುಗುರಿಯಿಂದ ದಸರಾದಲ್ಲಿ ಜೋಡಿಸುವ ಬಣ್ಣದ ಬೊಂಬೆಗಳವರೆಗೆ ಕರ್ನಾಟಕಕ್ಕೆ ದೀರ್ಘ ಆಟಿಕೆ ಪರಂಪರೆಯಿದೆ. ಹೆಚ್ಚಿನ ಆಟಿಕೆಗಳನ್ನು ಸ್ಥಳೀಯ ಮೃದು ಮರದಿಂದ ಮಾಡಿ ಸಸ್ಯಜನ್ಯ ಬಣ್ಣಗಳನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.',
  ),
  examples: [
    ex('channapatna-toys', 'Channapatna Toys', 'ಚನ್ನಪಟ್ಟಣದ ಬೊಂಬೆಗಳು', 'Channapatna, Ramanagara', 'Channapatna is called “Gombegala Ooru” — the town of toys. Artisans turn soft ivory wood (aale mara) on a lathe and polish it with lac mixed with natural dyes, giving the toys their glossy, bright finish. The craft is said to have been encouraged by Tipu Sultan, who invited Persian artisans to train local craftsmen.'),
    ex('kinhal-toys', 'Kinhal Toys', 'ಕಿನ್ನಾಳ ಬೊಂಬೆಗಳು', 'Kinnal, Koppal', 'Colourful wooden toys and figurines of gods, birds and animals made by the Chitragar families of Kinnal. They are lightweight, hand-assembled and finished with a shiny gold-toned varnish. Many are still made for village fairs and festival processions.', 'kinhal-craft'),
    ex('wooden-dolls', 'Wooden Dolls (Pattada Gombe)', 'ಪಟ್ಟದ ಬೊಂಬೆ', 'Mysuru region', 'During Dasara, families set up a “Bombe Habba” — tiers of dolls showing gods, weddings and village life. The most important pair is the Pattada Gombe, a king and queen carved in wood and passed down through generations. The display is a way of telling stories and preserving family memories.'),
    ex('lacquer-toys', 'Lacquer Toys', 'ಮೆರುಗಿನ ಆಟಿಕೆಗಳು', 'Channapatna & Kinnal', 'Lacquerware toys are coated with lac, a natural resin, mixed with colours made from turmeric, indigo and kumkum. Spinning tops, rattles, stacking rings and tiny kitchen sets are finished on the lathe until they shine. Because they use no harmful paint, they are safe for small children.'),
  ],
}

export const artSubcategories = [painting, craft, traditionalToys]
