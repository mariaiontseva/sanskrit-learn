interface Verse {
  number: number;
  sanskrit: string;
  translation?: string;
  notes?: string;
}

interface Sarga {
  number: number;
  title: string;
  verses: Verse[];
}

export const nalaText: Sarga[] = [
  {
    number: 1,
    title: "Introduction of Nala and Damayantī",
    verses: [
      {
        number: 1,
        sanskrit: "āsīd rājā nalo nāma vīrasenasuto balī | upapanno guṇair iṣṭaiḥ rūpavān aśvakovidaḥ ||",
        translation: "There was a king named Nala, son of Vīrasena, mighty, endowed with desired virtues, handsome, and skilled with horses.",
      },
      {
        number: 2,
        sanskrit: "atiṣṭhan manujendrāṇāṃ mūrdhni devapatir yathā | uparyupari sarvēṣāṃ āditya iva tejasā ||",
        translation: "He stood above all kings like the lord of gods, above all others like the sun in splendor.",
      },
      {
        number: 3,
        sanskrit: "brahmaṇyo vedavic chūro niṣadheṣu mahīpatiḥ | akṣapriyaḥ satyavādī mahān akṣauhiṇīpatiḥ ||",
        translation: "Devoted to Brahmins, versed in the Vedas, heroic, ruler of the Niṣadhas, fond of dice, truthful, great commander of armies.",
      },
      {
        number: 4,
        sanskrit: "īpsito naranārīṇāṃ udāraḥ saṃyatendriyaḥ | rakṣitā dhanvināṃ śreṣṭho yathā sākṣān manus tathā ||",
        translation: "Desired by men and women, generous, self-controlled, protector, best of archers, like Manu himself.",
      },
      {
        number: 5,
        sanskrit: "tathā vidarbheṣu bhīmo nāma rājā mahāyaśāḥ | prajākāmas tv aprajavān dharmātmā saṃbabhūva ha ||",
        translation: "Likewise in Vidarbha was a king named Bhīma, of great fame, desiring offspring but childless, virtuous indeed.",
      },
      // Add remaining verses for Sarga 1...
    ]
  },
  {
    number: 2,
    title: "The Swayamvara Announcement",
    verses: [
      // Add verses for Sarga 2...
    ]
  },
  {
    number: 3,
    title: "The Journey to the Swayamvara",
    verses: [
      // Add verses for Sarga 3...
    ]
  },
  {
    number: 4,
    title: "The Gods' Intervention",
    verses: [
      // Add verses for Sarga 4...
    ]
  }
]; 