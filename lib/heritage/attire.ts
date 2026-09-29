import { bi, ex, type Subcategory } from './types'

export const attireSubcategories: Subcategory[] = [
  {
    slug: 'textiles',
    name: bi('Dress Materials / Textiles', 'ಉಡುಪು ಸಾಮಗ್ರಿಗಳು / ಜವಳಿ'),
    description: bi(
      'Karnataka produces most of India’s mulberry silk and has a proud handloom tradition. Weavers in towns like Ilkal, Molakalmuru and Navalgund create fabrics with unique patterns and techniques. Several of these textiles hold GI tags.',
      'ಭಾರತದ ಹೆಚ್ಚಿನ ಹಿಪ್ಪುನೇರಳೆ ರೇಷ್ಮೆ ಕರ್ನಾಟಕದಲ್ಲಿ ಉತ್ಪಾದನೆಯಾಗುತ್ತದೆ. ಇಳಕಲ್, ಮೊಳಕಾಲ್ಮೂರು ಮತ್ತು ನವಲಗುಂದದ ನೇಕಾರರು ವಿಶಿಷ್ಟ ವಿನ್ಯಾಸದ ಬಟ್ಟೆಗಳನ್ನು ನೇಯುತ್ತಾರೆ.',
    ),
    examples: [
      ex('mysore-silk', 'Mysore Silk', 'ಮೈಸೂರು ರೇಷ್ಮೆ', 'Mysuru', 'Pure silk sarees woven with 100% gold zari (0.65% gold and silver). The Mysore silk factory was set up by Krishnaraja Wodeyar IV in 1912. The sarees are soft, light and have a rich sheen, and carry a GI tag.'),
      ex('ilkal-saree', 'Ilkal Saree', 'ಇಳಕಲ್ ಸೀರೆ', 'Ilkal, Bagalkot', 'Handwoven cotton-silk sarees with a distinctive red pallu (seragu) and a “kondi” border. The body and pallu are joined using the special “tope teni” technique. Women in North Karnataka traditionally wear it with Kasuti embroidery.'),
      ex('molakalmuru-saree', 'Molakalmuru Saree', 'ಮೊಳಕಾಲ್ಮೂರು ಸೀರೆ', 'Molakalmuru, Chitradurga', 'Heavy silk sarees known for their bright contrasting borders and motifs of parrots, elephants, temples and fruits. They are woven on pit looms using the “kondi” technique. They are popular as wedding sarees and hold a GI tag.'),
      ex('kasuti-textile', 'Kasuti Embroidery', 'ಕಸೂತಿ', 'Dharwad', 'Kasuti is stitched onto sarees, blouses and dress materials, adding temple and nature motifs by hand. There are four stitches — gavanti, murgi, negi and menthe — each creating a different pattern. A single saree may take months to complete.', 'kasuti'),
      ex('navalgund-durrie', 'Navalgund Durrie', 'ನವಲಗುಂದ ಜಮಖಾನ', 'Navalgund, Dharwad', 'Handwoven cotton rugs with bold geometric patterns, birds and animals in bright colours. The craft was brought by weavers from Bijapur during the Adil Shahi period. Women weavers still make them on vertical looms at home, and they have a GI tag.'),
    ],
  },
  {
    slug: 'regional-costumes',
    name: bi('Regional Costumes', 'ಪ್ರಾದೇಶಿಕ ಉಡುಗೆಗಳು'),
    description: bi(
      'Every region of Karnataka has its own way of dressing, shaped by climate, community and history. From the Kodava warrior coat to the North Karnataka dhoti and turban, costumes reflect identity and pride. They are worn especially at weddings, festivals and cultural events.',
      'ಕರ್ನಾಟಕದ ಪ್ರತಿಯೊಂದು ಪ್ರದೇಶಕ್ಕೂ ತನ್ನದೇ ಉಡುಗೆಯ ಶೈಲಿಯಿದೆ. ಕೊಡವರ ಕುಪ್ಯದಿಂದ ಉತ್ತರ ಕರ್ನಾಟಕದ ಧೋತಿ ಮತ್ತು ಪೇಟದವರೆಗೆ ಉಡುಗೆಗಳು ಗುರುತು ಮತ್ತು ಹೆಮ್ಮೆಯ ಸಂಕೇತ.',
    ),
    examples: [
      ex('kodava-kupya', 'Kodava Kupya', 'ಕೊಡವ ಕುಪ್ಯ', 'Kodagu', 'A long, dark, knee-length coat worn by Kodava men, tied at the waist with a red and gold sash (chele). A small dagger (peechekathi) is tucked into the sash, and a turban (mande thuni) completes the look. It reflects the warrior heritage of Kodagu.'),
      ex('kodava-sari', 'Kodava Sari', 'ಕೊಡವ ಸೀರೆ', 'Kodagu', 'A unique way of draping the saree, with pleats tucked at the back and the pallu brought over the right shoulder and pinned. It is worn with a full-sleeved blouse and a headscarf. Legend says it was designed so women could move freely in the hilly terrain.'),
      ex('north-karnataka-attire', 'North Karnataka Traditional Attire', 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಉಡುಗೆ', 'Belagavi, Dharwad & Vijayapura', 'Men wear a white dhoti, a long shirt and a colourful turban (pataga), while women wear the Ilkal saree with a khana blouse. The khana fabric from Guledgudda is woven with fine patterns. The look is simple, practical and full of pride.'),
      ex('mysore-attire', 'Mysore Traditional Attire', 'ಮೈಸೂರು ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆ', 'Mysuru', 'Men wear a silk dhoti, a long buttoned coat and the Mysore peta, inspired by the royal court. Women wear Mysore silk sarees with gold jewellery. This attire is worn at weddings, Dasara and formal ceremonies.'),
      ex('coastal-attire', 'Coastal Karnataka Attire', 'ಕರಾವಳಿ ಉಡುಗೆ', 'Udupi & Dakshina Kannada', 'Men traditionally wear a mundu (white dhoti) with a shawl, and women wear cotton sarees in light colours suited to the humid climate. Jasmine flowers (Mallige) from Udupi are worn in the hair. Temple visits call for simple, clean white clothing.'),
    ],
  },
  {
    slug: 'accessories',
    name: bi('Traditional Accessories', 'ಸಾಂಪ್ರದಾಯಿಕ ಆಭರಣಗಳು'),
    description: bi(
      'Accessories complete Karnataka’s traditional attire and often carry deep meaning. Turbans show honour, while jewellery marks marriage, status and devotion. Many designs are inspired by temples, nature and royal heritage.',
      'ಆಭರಣಗಳು ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಗೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸುತ್ತವೆ. ಪೇಟ ಗೌರವದ ಸಂಕೇತವಾದರೆ, ಆಭರಣಗಳು ಮದುವೆ, ಸ್ಥಾನ ಮತ್ತು ಭಕ್ತಿಯನ್ನು ಸೂಚಿಸುತ್ತವೆ.',
    ),
    examples: [
      ex('mysore-peta', 'Mysore Peta', 'ಮೈಸೂರು ಪೇಟ', 'Mysuru', 'A royal silk turban with gold zari borders, once worn by the Wodeyar kings and court officials. Today it is presented to honour guests, scholars and achievers. Sir M. Visvesvaraya made it famous as part of his everyday dress.'),
      ex('kodava-jewellery', 'Kodava Jewellery', 'ಕೊಡವ ಆಭರಣಗಳು', 'Kodagu', 'Distinct gold jewellery worn by Kodava women, including the Kokkethathi — a crescent-shaped pendant with a cobra-hood and Lakshmi motif — and the Jomale, a necklace of tiny gold beads. Pieces are handed down as family heirlooms.'),
      ex('karnataka-jewellery', 'Traditional Karnataka Jewellery', 'ಕರ್ನಾಟಕದ ಸಾಂಪ್ರದಾಯಿಕ ಆಭರಣಗಳು', 'Across Karnataka', 'Classic pieces include the Kasina Sara (coin necklace), Gundla Sara (bead necklace), Vanki (armlet), Jhumki (earrings) and Odiyana (waist belt). Married women wear the Mangalasutra and toe rings. Gold is seen as auspicious and as family security.'),
      ex('temple-jewellery', 'Temple Jewellery', 'ದೇವಾಲಯದ ಆಭರಣಗಳು', 'Across South India', 'Heavy gold jewellery designed with motifs of gods, goddesses, peacocks and lotuses, originally made to adorn temple deities. Bharatanatyam dancers wear it for performances. Designs often feature red and green stones set in gold.'),
    ],
  },
]
