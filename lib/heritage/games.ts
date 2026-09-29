import { bi, ex, type Subcategory } from './types'

export const gamesCategory = {
  slug: 'games',
  image: '/images/topics/toys.png',
  title: bi('Traditional Games', 'ಸಾಂಪ್ರದಾಯಿಕ ಆಟಗಳು'),
  tagline: bi('Played on floors and fields', 'ನೆಲ ಮತ್ತು ಮೈದಾನದ ಆಟಗಳು'),
  intro: bi(
    'Long before video games, children and adults in Karnataka played strategy games drawn on floors and fast outdoor games in village squares. These games sharpen the mind, build teamwork and are still played at festivals today.',
    'ವಿಡಿಯೋ ಆಟಗಳಿಗೂ ಮೊದಲು ಕರ್ನಾಟಕದ ಮಕ್ಕಳು ಮತ್ತು ಹಿರಿಯರು ನೆಲದ ಮೇಲೆ ಬಿಡಿಸಿದ ತಂತ್ರದ ಆಟಗಳು ಮತ್ತು ಊರ ಮೈದಾನದಲ್ಲಿ ವೇಗದ ಆಟಗಳನ್ನು ಆಡುತ್ತಿದ್ದರು.',
  ),
}

export const gameSubcategories: Subcategory[] = [
  {
    slug: 'board-games',
    name: bi('Board Games', 'ಮನೆಯೊಳಗಿನ ಆಟಗಳು'),
    description: bi(
      'Karnataka’s board games are played on patterns drawn with chalk on the floor, carved into temple stones or painted on cloth. They use shells, seeds, tamarind seeds or small stones as pieces. These games teach counting, strategy and patience, and were played by kings and villagers alike.',
      'ಕರ್ನಾಟಕದ ಮನೆಯಾಟಗಳನ್ನು ನೆಲದ ಮೇಲೆ ಸೀಮೆಸುಣ್ಣದಲ್ಲಿ ಬಿಡಿಸಿದ ಅಥವಾ ದೇವಾಲಯದ ಕಲ್ಲುಗಳಲ್ಲಿ ಕೆತ್ತಿದ ಮನೆಗಳಲ್ಲಿ ಕವಡೆ, ಹುಣಸೆಬೀಜ ಅಥವಾ ಕಲ್ಲುಗಳಿಂದ ಆಡಲಾಗುತ್ತದೆ. ಇವು ಎಣಿಕೆ, ತಂತ್ರ ಮತ್ತು ತಾಳ್ಮೆಯನ್ನು ಕಲಿಸುತ್ತವೆ.',
    ),
    examples: [
      ex('aadu-huli', 'Aadu Huli Aata', 'ಆಡು ಹುಲಿ ಆಟ', 'Across Karnataka', 'The “goats and tigers” game, played on a triangular board. One player controls three tigers and the other controls fifteen goats. The tigers try to capture goats by jumping over them, while the goats try to trap the tigers so they cannot move.'),
      ex('chowka-bara', 'Chowka Bara', 'ಚೌಕಾ ಬಾರ', 'Across Karnataka', 'A race game played on a 5×5 or 7×7 grid, using cowrie shells as dice. Each player moves four pieces around the board towards the centre square. Pieces can capture opponents, and landing on safe squares (marked with a cross) protects them.'),
      ex('ali-guli-mane', 'Ali Guli Mane', 'ಅಳಗುಳಿ ಮನೆ', 'Across Karnataka', 'A mancala-style game played on a wooden board with 14 pits, using tamarind seeds or cowrie shells. Players sow seeds around the pits and capture them by strategy. It was traditionally played by girls and women and helps with counting skills.'),
      ex('pagade', 'Pagade', 'ಪಗಡೆ', 'Across Karnataka', 'A cross-shaped board game similar to Pachisi, played with long dice (pagade dice) and coloured pieces. It is famous from the Mahabharata, where the Pandavas lost their kingdom in a game of dice. It is played in homes during festivals.'),
      ex('navakankari', 'Navakankari', 'ನವಕಂಕರಿ', 'Across Karnataka', 'A strategy game for two players, each with nine pieces, played on a board of three nested squares. Players try to form a line of three pieces (a “mill”) to remove an opponent’s piece. Its boards are found carved into ancient temple floors in Hampi.'),
    ],
  },
  {
    slug: 'outdoor-games',
    name: bi('Outdoor Games', 'ಹೊರಾಂಗಣ ಆಟಗಳು'),
    description: bi(
      'Outdoor games were the main entertainment of Karnataka’s streets and village grounds. They need little or no equipment — just a ball, a stick, some stones and friends. They build speed, strength and teamwork, and some, like Kabaddi, are now international sports.',
      'ಹೊರಾಂಗಣ ಆಟಗಳು ಕರ್ನಾಟಕದ ಬೀದಿಗಳು ಮತ್ತು ಊರ ಮೈದಾನಗಳ ಮುಖ್ಯ ಮನರಂಜನೆಯಾಗಿದ್ದವು. ಇವುಗಳಿಗೆ ಚೆಂಡು, ಕೋಲು, ಕಲ್ಲುಗಳು ಮತ್ತು ಗೆಳೆಯರು ಸಾಕು. ಕಬಡ್ಡಿಯಂತಹ ಕೆಲವು ಇಂದು ಅಂತರರಾಷ್ಟ್ರೀಯ ಕ್ರೀಡೆಗಳಾಗಿವೆ.',
    ),
    examples: [
      ex('lagori', 'Lagori', 'ಲಗೋರಿ', 'Across Karnataka', 'Two teams play with a ball and a stack of seven flat stones. One team knocks down the stack with the ball and then tries to rebuild it, while the other team tries to hit them with the ball. It is fast, noisy and full of teamwork.'),
      ex('kabaddi', 'Kabaddi', 'ಕಬಡ್ಡಿ', 'Across Karnataka', 'A contact team sport in which a raider enters the opponents’ half, tags as many players as possible and returns — all in one breath while chanting “kabaddi”. The defenders try to stop him. Karnataka’s team, Bengaluru Bulls, won the Pro Kabaddi League in 2018.'),
      ex('gilli-danda', 'Gilli Danda', 'ಚಿನ್ನಿ ದಾಂಡು', 'Across Karnataka', 'Played with a long stick (danda) and a small wooden peg pointed at both ends (gilli). The player strikes one end of the gilli to flip it into the air, then hits it as far as possible. It is often called the ancestor of cricket.'),
      ex('koli-ata', 'Koli Ata', 'ಕೋಳಿ ಆಟ', 'Villages of Karnataka', 'A playful chasing game (“the hen game”) in which one child acts as the mother hen protecting a line of “chicks” holding each other’s waists. Another child plays the fox or hawk and tries to catch the last chick. It teaches coordination and quick thinking.'),
    ],
  },
]
