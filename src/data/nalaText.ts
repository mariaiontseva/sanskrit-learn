export interface WordAnalysis {
  sanskrit: string;
  iast: string;
  grammar: string;
  meaning: string;
}

export interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  wordByWord?: WordAnalysis[];
}

export interface Sarga {
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
        sanskrit: "अथ नलोपाख्यानम्",
        transliteration: "atha nalopākhyānam",
        translation: "Now begins the story of Nala",
        wordByWord: [
          {
            sanskrit: "अथ",
            iast: "atha",
            grammar: "indeclinable",
            meaning: "now, then (auspicious beginning)"
          },
          {
            sanskrit: "नलोपाख्यानम्",
            iast: "nalopākhyānam",
            grammar: "neuter nominative singular",
            meaning: "the story of Nala (compound: nala + upākhyāna)"
          }
        ]
      },
      {
        number: 2,
        sanskrit: "अस्ति विदर्भेषु भीमो नाम राजा महौजसः |\nसर्वधर्मभृतां श्रेष्ठो नित्यं सत्यपराक्रमः ||",
        transliteration: "asti vidarbheṣu bhīmo nāma rājā mahaujasaḥ |\nsarvadharmabhṛtāṃ śreṣṭho nityaṃ satyaparākramaḥ ||",
        translation: "There was in Vidarbha a king named Bhīma of great might, foremost among all righteous men, ever devoted to truth and valor.",
        wordByWord: [
          {
            sanskrit: "अस्ति",
            iast: "asti",
            grammar: "verb present 3rd person singular",
            meaning: "is, exists"
          },
          {
            sanskrit: "विदर्भेषु",
            iast: "vidarbheṣu",
            grammar: "masculine locative plural",
            meaning: "in Vidarbha (country name)"
          },
          {
            sanskrit: "भीमो",
            iast: "bhīmo",
            grammar: "masculine nominative singular",
            meaning: "Bhīma (name meaning 'terrible, formidable')"
          },
          {
            sanskrit: "नाम",
            iast: "nāma",
            grammar: "indeclinable",
            meaning: "by name"
          },
          {
            sanskrit: "राजा",
            iast: "rājā",
            grammar: "masculine nominative singular",
            meaning: "king"
          },
          {
            sanskrit: "महौजसः",
            iast: "mahaujasaḥ",
            grammar: "masculine nominative singular",
            meaning: "of great might (compound: mahā + ojas)"
          },
          {
            sanskrit: "सर्वधर्मभृतां",
            iast: "sarvadharmabhṛtāṃ",
            grammar: "masculine genitive plural",
            meaning: "of all dharma-bearers (compound: sarva + dharma + bhṛt)"
          },
          {
            sanskrit: "श्रेष्ठो",
            iast: "śreṣṭho",
            grammar: "masculine nominative singular",
            meaning: "best, foremost"
          },
          {
            sanskrit: "नित्यं",
            iast: "nityaṃ",
            grammar: "indeclinable",
            meaning: "always, eternally"
          },
          {
            sanskrit: "सत्यपराक्रमः",
            iast: "satyaparākramaḥ",
            grammar: "masculine nominative singular",
            meaning: "whose valor is true (compound: satya + parākrama)"
          }
        ]
      },
      {
        number: 3,
        sanskrit: "तस्य दमयन्ती नाम कन्या बभूव सुन्दरी | तस्यां जज्ञे महाराज भीमस्य सुतसत्तमा ||",
        transliteration: "tasya damayantī nāma kanyā babhūva sundarī | tasyāṃ jajñe mahārāja bhīmasya sutasattamā ||",
        translation: "He had a beautiful daughter named Damayantī. In her, O great king, was born Bhīma's excellent daughter.",
        wordByWord: [
          {
            sanskrit: "तस्य",
            iast: "tasya",
            grammar: "masculine genitive singular",
            meaning: "his"
          },
          {
            sanskrit: "दमयन्ती",
            iast: "damayantī",
            grammar: "feminine nominative singular",
            meaning: "Damayantī (name meaning 'she who subdues')"
          },
          {
            sanskrit: "नाम",
            iast: "nāma",
            grammar: "indeclinable",
            meaning: "by name"
          },
          {
            sanskrit: "कन्या",
            iast: "kanyā",
            grammar: "feminine nominative singular",
            meaning: "daughter"
          },
          {
            sanskrit: "बभूव",
            iast: "babhūva",
            grammar: "verb perfect 3rd person singular",
            meaning: "became, was"
          },
          {
            sanskrit: "सुन्दरी",
            iast: "sundarī",
            grammar: "feminine nominative singular",
            meaning: "beautiful"
          },
          {
            sanskrit: "तस्यां",
            iast: "tasyāṃ",
            grammar: "feminine locative singular",
            meaning: "in her"
          },
          {
            sanskrit: "जज्ञे",
            iast: "jajñe",
            grammar: "verb perfect 3rd person singular",
            meaning: "was born"
          },
          {
            sanskrit: "महाराज",
            iast: "mahārāja",
            grammar: "masculine vocative singular",
            meaning: "O great king"
          },
          {
            sanskrit: "भीमस्य",
            iast: "bhīmasya",
            grammar: "masculine genitive singular",
            meaning: "of Bhīma"
          },
          {
            sanskrit: "सुतसत्तमा",
            iast: "sutasattamā",
            grammar: "feminine nominative singular",
            meaning: "best of daughters (compound: suta + sat + tama)"
          }
        ]
      },
      {
        number: 4,
        sanskrit: "सा तु नारी सहस्राक्षी श्रीर् इवापररूपिणी | नासीत् सदृशी तस्याः स्त्रियो लोके कथं चन ||",
        transliteration: "sā tu nārī sahasrākṣī śrīr ivāpararūpiṇī | nāsīt sadṛśī tasyāḥ striyo loke kathaṃ cana ||",
        translation: "She was a woman with a thousand eyes, like Śrī in another form. There was no woman like her in the world.",
        wordByWord: [
          {
            sanskrit: "सा",
            iast: "sā",
            grammar: "feminine nominative singular",
            meaning: "she"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but, and"
          },
          {
            sanskrit: "नारी",
            iast: "nārī",
            grammar: "feminine nominative singular",
            meaning: "woman"
          },
          {
            sanskrit: "सहस्राक्षी",
            iast: "sahasrākṣī",
            grammar: "feminine nominative singular",
            meaning: "thousand-eyed (compound: sahasra + akṣī)"
          },
          {
            sanskrit: "श्रीर्",
            iast: "śrīr",
            grammar: "feminine nominative singular",
            meaning: "Śrī (goddess of fortune)"
          },
          {
            sanskrit: "इव",
            iast: "iva",
            grammar: "indeclinable",
            meaning: "like"
          },
          {
            sanskrit: "अपररूपिणी",
            iast: "apararūpiṇī",
            grammar: "feminine nominative singular",
            meaning: "having another form (compound: apara + rūpiṇī)"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "आसीत्",
            iast: "āsīt",
            grammar: "verb imperfect 3rd person singular",
            meaning: "was"
          },
          {
            sanskrit: "सदृशी",
            iast: "sadṛśī",
            grammar: "feminine nominative singular",
            meaning: "similar, like"
          },
          {
            sanskrit: "तस्याः",
            iast: "tasyāḥ",
            grammar: "feminine genitive singular",
            meaning: "her"
          },
          {
            sanskrit: "स्त्रियो",
            iast: "striyo",
            grammar: "feminine nominative plural",
            meaning: "women"
          },
          {
            sanskrit: "लोके",
            iast: "loke",
            grammar: "masculine locative singular",
            meaning: "in the world"
          },
          {
            sanskrit: "कथं",
            iast: "kathaṃ",
            grammar: "indeclinable",
            meaning: "how"
          },
          {
            sanskrit: "चन",
            iast: "cana",
            grammar: "indeclinable",
            meaning: "even, at all"
          }
        ]
      },
      {
        number: 5,
        sanskrit: "अथ नैषधम् आख्यानं कथयिष्यामि ते शृणु | यथा स नलो राजासीद् यथा च वरिता वरा ||",
        transliteration: "atha naiṣadham ākhyānaṃ kathayiṣyāmi te śṛṇu | yathā sa nalo rājāsīd yathā ca varitā varā ||",
        translation: "Now I will tell you the story of the king of Niṣadha. Listen how King Nala was and how the bride was chosen.",
        wordByWord: [
          {
            sanskrit: "अथ",
            iast: "atha",
            grammar: "indeclinable",
            meaning: "now, then"
          },
          {
            sanskrit: "नैषधम्",
            iast: "naiṣadham",
            grammar: "neuter accusative singular",
            meaning: "of Niṣadha (relating to Nala)"
          },
          {
            sanskrit: "आख्यानं",
            iast: "ākhyānaṃ",
            grammar: "neuter accusative singular",
            meaning: "story, tale"
          },
          {
            sanskrit: "कथयिष्यामि",
            iast: "kathayiṣyāmi",
            grammar: "verb future 1st person singular",
            meaning: "I will tell"
          },
          {
            sanskrit: "ते",
            iast: "te",
            grammar: "pronoun dative singular",
            meaning: "to you"
          },
          {
            sanskrit: "शृणु",
            iast: "śṛṇu",
            grammar: "verb imperative 2nd person singular",
            meaning: "listen"
          },
          {
            sanskrit: "यथा",
            iast: "yathā",
            grammar: "indeclinable",
            meaning: "how"
          },
          {
            sanskrit: "स",
            iast: "sa",
            grammar: "masculine nominative singular",
            meaning: "he"
          },
          {
            sanskrit: "नलो",
            iast: "nalo",
            grammar: "masculine nominative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "राजा",
            iast: "rājā",
            grammar: "masculine nominative singular",
            meaning: "king"
          },
          {
            sanskrit: "आसीद्",
            iast: "āsīd",
            grammar: "verb imperfect 3rd person singular",
            meaning: "was"
          },
          {
            sanskrit: "यथा",
            iast: "yathā",
            grammar: "indeclinable",
            meaning: "how"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "वरिता",
            iast: "varitā",
            grammar: "feminine nominative singular",
            meaning: "chosen"
          },
          {
            sanskrit: "वरा",
            iast: "varā",
            grammar: "feminine nominative singular",
            meaning: "bride"
          }
        ]
      },
      {
        number: 6,
        sanskrit: "विदर्भेषु महाराजो भीमो नाम प्रतापवान् | तस्य पुत्री वरारोहा दमयन्तीति विश्रुता ||",
        transliteration: "vidarbheṣu mahārājo bhīmo nāma pratāpavān | tasya putrī varārohā damayantīti viśrutā ||",
        translation: "In Vidarbha there was a mighty king named Bhīma. His daughter, of beautiful form, was known as Damayantī.",
        wordByWord: [
          {
            sanskrit: "विदर्भेषु",
            iast: "vidarbheṣu",
            grammar: "masculine locative plural",
            meaning: "in Vidarbha (country name)"
          },
          {
            sanskrit: "महाराजो",
            iast: "mahārājo",
            grammar: "masculine nominative singular",
            meaning: "great king (compound: mahā + rāja)"
          },
          {
            sanskrit: "भीमो",
            iast: "bhīmo",
            grammar: "masculine nominative singular",
            meaning: "Bhīma (name meaning 'terrible')"
          },
          {
            sanskrit: "नाम",
            iast: "nāma",
            grammar: "indeclinable",
            meaning: "by name"
          },
          {
            sanskrit: "प्रतापवान्",
            iast: "pratāpavān",
            grammar: "masculine nominative singular",
            meaning: "mighty, powerful"
          },
          {
            sanskrit: "तस्य",
            iast: "tasya",
            grammar: "masculine genitive singular",
            meaning: "his"
          },
          {
            sanskrit: "पुत्री",
            iast: "putrī",
            grammar: "feminine nominative singular",
            meaning: "daughter"
          },
          {
            sanskrit: "वरारोहा",
            iast: "varārohā",
            grammar: "feminine nominative singular",
            meaning: "of beautiful form (compound: vara + āroha)"
          },
          {
            sanskrit: "दमयन्तीति",
            iast: "damayantīti",
            grammar: "feminine nominative singular + iti",
            meaning: "named Damayantī (Damayantī + iti)"
          },
          {
            sanskrit: "विश्रुता",
            iast: "viśrutā",
            grammar: "feminine nominative singular",
            meaning: "well-known, famous"
          }
        ]
      },
      {
        number: 7,
        sanskrit: "रूपेणासदृशी तस्या मनुष्येषु न विद्यते | देवकन्यासु वा राजन् सर्वलक्षणसंयुता ||",
        transliteration: "rūpeṇāsadṛśī tasyā manuṣyeṣu na vidyate | devakanyāsu vā rājan sarvalakṣaṇasaṃyutā ||",
        translation: "None among humans or divine maidens could match her beauty, O king. She was endowed with all auspicious marks.",
        wordByWord: [
          {
            sanskrit: "रूपेण",
            iast: "rūpeṇa",
            grammar: "neuter instrumental singular",
            meaning: "in beauty"
          },
          {
            sanskrit: "असदृशी",
            iast: "asadṛśī",
            grammar: "feminine nominative singular",
            meaning: "unequalled, incomparable"
          },
          {
            sanskrit: "तस्या",
            iast: "tasyā",
            grammar: "feminine genitive singular",
            meaning: "her"
          },
          {
            sanskrit: "मनुष्येषु",
            iast: "manuṣyeṣu",
            grammar: "masculine locative plural",
            meaning: "among humans"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "विद्यते",
            iast: "vidyate",
            grammar: "verb present passive 3rd person singular",
            meaning: "is found"
          },
          {
            sanskrit: "देवकन्यासु",
            iast: "devakanyāsu",
            grammar: "feminine locative plural",
            meaning: "among divine maidens (compound: deva + kanyā)"
          },
          {
            sanskrit: "वा",
            iast: "vā",
            grammar: "indeclinable",
            meaning: "or"
          },
          {
            sanskrit: "राजन्",
            iast: "rājan",
            grammar: "masculine vocative singular",
            meaning: "O king"
          },
          {
            sanskrit: "सर्वलक्षणसंयुता",
            iast: "sarvalakṣaṇasaṃyutā",
            grammar: "feminine nominative singular",
            meaning: "endowed with all auspicious marks (compound: sarva + lakṣaṇa + saṃyuta)"
          }
        ]
      },
      {
        number: 8,
        sanskrit: "तस्मै प्रसन्नो दमनः सभार्याय वरं ददौ । कन्यारत्नं कुमारांश् च त्रीन् उदारान् महायशाः ॥",
        transliteration: "tasmai prasanno damanaḥ sabhāryāya varaṃ dadau | kanyāratnaṃ kumārāṃś ca trīn udārān mahāyaśāḥ ||",
        translation: "Pleased with him and his wife, the glorious Damana granted them a boon: a jewel of a daughter and three noble sons.",
        wordByWord: [
          {
            sanskrit: "तस्मै",
            iast: "tasmai",
            grammar: "masculine dative singular",
            meaning: "to him"
          },
          {
            sanskrit: "प्रसन्नो",
            iast: "prasanno",
            grammar: "masculine nominative singular",
            meaning: "pleased"
          },
          {
            sanskrit: "दमनः",
            iast: "damanaḥ",
            grammar: "masculine nominative singular",
            meaning: "Damana (name)"
          },
          {
            sanskrit: "सभार्याय",
            iast: "sabhāryāya",
            grammar: "masculine dative singular",
            meaning: "together with his wife (compound: sa + bhāryā)"
          },
          {
            sanskrit: "वरं",
            iast: "varaṃ",
            grammar: "masculine accusative singular",
            meaning: "boon"
          },
          {
            sanskrit: "ददौ",
            iast: "dadau",
            grammar: "verb perfect 3rd person singular",
            meaning: "gave"
          },
          {
            sanskrit: "कन्यारत्नं",
            iast: "kanyāratnaṃ",
            grammar: "neuter accusative singular",
            meaning: "jewel of a daughter (compound: kanyā + ratna)"
          },
          {
            sanskrit: "कुमारांश्",
            iast: "kumārāṃś",
            grammar: "masculine accusative plural",
            meaning: "sons"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "त्रीन्",
            iast: "trīn",
            grammar: "masculine accusative plural",
            meaning: "three"
          },
          {
            sanskrit: "उदारान्",
            iast: "udārān",
            grammar: "masculine accusative plural",
            meaning: "noble"
          },
          {
            sanskrit: "महायशाः",
            iast: "mahāyaśāḥ",
            grammar: "masculine nominative singular",
            meaning: "of great glory (compound: mahā + yaśas)"
          }
        ]
      },
      {
        number: 9,
        sanskrit: "दमयन्तीं दमं दान्तं दमनं च सुवर्चसम् । उपपन्नान् गुणैः सर्वैर् भीमान् भीमपराक्रमान् ॥",
        transliteration: "damayantīṃ damaṃ dāntaṃ damanaṃ ca suvarcasam | upapannān guṇaiḥ sarvair bhīmān bhīmaparākramān ||",
        translation: "Damayantī, Dama, Dānta, and the radiant Damana, endowed with all virtues, mighty and of terrible prowess.",
        wordByWord: [
          {
            sanskrit: "दमयन्तीं",
            iast: "damayantīṃ",
            grammar: "feminine accusative singular",
            meaning: "Damayantī"
          },
          {
            sanskrit: "दमं",
            iast: "damaṃ",
            grammar: "masculine accusative singular",
            meaning: "Dama (name meaning 'self-control')"
          },
          {
            sanskrit: "दान्तं",
            iast: "dāntaṃ",
            grammar: "masculine accusative singular",
            meaning: "Dānta (name meaning 'controlled')"
          },
          {
            sanskrit: "दमनं",
            iast: "damanaṃ",
            grammar: "masculine accusative singular",
            meaning: "Damana (name meaning 'subduing')"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "सुवर्चसम्",
            iast: "suvarcasam",
            grammar: "masculine accusative singular",
            meaning: "radiant (compound: su + varcas)"
          },
          {
            sanskrit: "उपपन्नान्",
            iast: "upapannān",
            grammar: "masculine accusative plural",
            meaning: "endowed with"
          },
          {
            sanskrit: "गुणैः",
            iast: "guṇaiḥ",
            grammar: "masculine instrumental plural",
            meaning: "with virtues"
          },
          {
            sanskrit: "सर्वैर्",
            iast: "sarvair",
            grammar: "masculine instrumental plural",
            meaning: "with all"
          },
          {
            sanskrit: "भीमान्",
            iast: "bhīmān",
            grammar: "masculine accusative plural",
            meaning: "mighty, terrible"
          },
          {
            sanskrit: "भीमपराक्रमान्",
            iast: "bhīmaparākramān",
            grammar: "masculine accusative plural",
            meaning: "of terrible prowess (compound: bhīma + parākrama)"
          }
        ]
      },
      {
        number: 10,
        sanskrit: "दमयन्ती तु रूपेण तेजसा यशसा श्रिया। सौभाग्येन च लोकेषु यशः प्राप मुमध्यमा ॥",
        transliteration: "damayantī tu rūpeṇa tejasā yaśasā śriyā | saubhāgyena ca lokeṣu yaśaḥ prāpa mumadhyamā ||",
        translation: "But Damayantī, slender-waisted, attained fame in the worlds through her beauty, splendor, glory, prosperity, and good fortune.",
        wordByWord: [
          {
            sanskrit: "दमयन्ती",
            iast: "damayantī",
            grammar: "feminine nominative singular",
            meaning: "Damayantī"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but, and"
          },
          {
            sanskrit: "रूपेण",
            iast: "rūpeṇa",
            grammar: "neuter instrumental singular",
            meaning: "through beauty"
          },
          {
            sanskrit: "तेजसा",
            iast: "tejasā",
            grammar: "neuter instrumental singular",
            meaning: "through splendor"
          },
          {
            sanskrit: "यशसा",
            iast: "yaśasā",
            grammar: "neuter instrumental singular",
            meaning: "through glory"
          },
          {
            sanskrit: "श्रिया",
            iast: "śriyā",
            grammar: "feminine instrumental singular",
            meaning: "through prosperity"
          },
          {
            sanskrit: "सौभाग्येन",
            iast: "saubhāgyena",
            grammar: "neuter instrumental singular",
            meaning: "through good fortune"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "लोकेषु",
            iast: "lokeṣu",
            grammar: "masculine locative plural",
            meaning: "in the worlds"
          },
          {
            sanskrit: "यशः",
            iast: "yaśaḥ",
            grammar: "neuter accusative singular",
            meaning: "fame"
          },
          {
            sanskrit: "प्राप",
            iast: "prāpa",
            grammar: "verb perfect 3rd person singular",
            meaning: "attained"
          },
          {
            sanskrit: "मुमध्यमा",
            iast: "mumadhyamā",
            grammar: "feminine nominative singular",
            meaning: "slender-waisted (compound: mu + madhyama)"
          }
        ]
      },
      {
        number: 11,
        sanskrit: "अथ तां वयसि प्राप्ते दासीनां समलंकृतम् । शतं शतं सखीनां च पर्युपासच् छचीम् इव ॥",
        transliteration: "atha tāṃ vayasi prāpte dāsīnāṃ samalaṃkṛtam | śataṃ śataṃ sakhīnāṃ ca paryupāsac chacīm iva ||",
        translation: "Then, when she came of age, a hundred adorned maidservants and a hundred companions attended upon her like Śacī.",
        wordByWord: [
          {
            sanskrit: "अथ",
            iast: "atha",
            grammar: "indeclinable",
            meaning: "then"
          },
          {
            sanskrit: "तां",
            iast: "tāṃ",
            grammar: "feminine accusative singular",
            meaning: "her"
          },
          {
            sanskrit: "वयसि",
            iast: "vayasi",
            grammar: "neuter locative singular",
            meaning: "in age"
          },
          {
            sanskrit: "प्राप्ते",
            iast: "prāpte",
            grammar: "neuter locative singular",
            meaning: "having reached"
          },
          {
            sanskrit: "दासीनां",
            iast: "dāsīnāṃ",
            grammar: "feminine genitive plural",
            meaning: "of maidservants"
          },
          {
            sanskrit: "समलंकृतम्",
            iast: "samalaṃkṛtam",
            grammar: "neuter accusative singular",
            meaning: "adorned (compound: sam + alaṃkṛta)"
          },
          {
            sanskrit: "शतं",
            iast: "śataṃ",
            grammar: "neuter nominative singular",
            meaning: "hundred"
          },
          {
            sanskrit: "शतं",
            iast: "śataṃ",
            grammar: "neuter nominative singular",
            meaning: "hundred"
          },
          {
            sanskrit: "सखीनां",
            iast: "sakhīnāṃ",
            grammar: "feminine genitive plural",
            meaning: "of companions"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "पर्युपासच्",
            iast: "paryupāsac",
            grammar: "verb imperfect 3rd person singular",
            meaning: "attended upon"
          },
          {
            sanskrit: "छचीम्",
            iast: "chacīm",
            grammar: "feminine accusative singular",
            meaning: "Śacī (wife of Indra)"
          },
          {
            sanskrit: "इव",
            iast: "iva",
            grammar: "indeclinable",
            meaning: "like"
          }
        ]
      },
      {
        number: 12,
        sanskrit: "शक्रलोकाद् इवोद्भूता रूपेणाप्रतिमा भुवि । दमयन्ती तु रुचिरा देवमायेव सोभत ॥",
        transliteration: "śakralokād ivodbhūtā rūpeṇāpratimā bhuvi | damayantī tu rucirā devamāyeva sobhata ||",
        translation: "Like one born from Indra's realm, unmatched in beauty on earth, the radiant Damayantī shone like divine illusion.",
        wordByWord: [
          {
            sanskrit: "शक्रलोकाद्",
            iast: "śakralokād",
            grammar: "masculine ablative singular",
            meaning: "from Indra's realm (compound: śakra + loka)"
          },
          {
            sanskrit: "इव",
            iast: "iva",
            grammar: "indeclinable",
            meaning: "like"
          },
          {
            sanskrit: "उद्भूता",
            iast: "udbhūtā",
            grammar: "feminine nominative singular",
            meaning: "born, arisen"
          },
          {
            sanskrit: "रूपेण",
            iast: "rūpeṇa",
            grammar: "neuter instrumental singular",
            meaning: "in beauty"
          },
          {
            sanskrit: "अप्रतिमा",
            iast: "apratimā",
            grammar: "feminine nominative singular",
            meaning: "unmatched (compound: a + pratimā)"
          },
          {
            sanskrit: "भुवि",
            iast: "bhuvi",
            grammar: "feminine locative singular",
            meaning: "on earth"
          },
          {
            sanskrit: "दमयन्ती",
            iast: "damayantī",
            grammar: "feminine nominative singular",
            meaning: "Damayantī"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but, and"
          },
          {
            sanskrit: "रुचिरा",
            iast: "rucirā",
            grammar: "feminine nominative singular",
            meaning: "radiant, beautiful"
          },
          {
            sanskrit: "देवमाया",
            iast: "devamāyā",
            grammar: "feminine nominative singular",
            meaning: "divine illusion (compound: deva + māyā)"
          },
          {
            sanskrit: "इव",
            iast: "iva",
            grammar: "indeclinable",
            meaning: "like"
          },
          {
            sanskrit: "सोभत",
            iast: "sobhata",
            grammar: "verb imperfect 3rd person singular ātmanepada",
            meaning: "shone"
          }
        ]
      },
      {
        number: 13,
        sanskrit: "न देवेषु न यक्षेषु तादृक् रूपवती क्वचित् । मानुषेषु च नान्येषु दृष्टपूर्वा श्रुता अपि ॥",
        transliteration: "na deveṣu na yakṣeṣu tādṛk rūpavatī kvacit | mānuṣeṣu ca nānyeṣu dṛṣṭapūrvā śrutā api ||",
        translation: "Neither among gods nor among yakṣas was there ever such a beautiful one, nor among other humans had such beauty ever been seen or heard of.",
        wordByWord: [
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "देवेषु",
            iast: "deveṣu",
            grammar: "masculine locative plural",
            meaning: "among gods"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "यक्षेषु",
            iast: "yakṣeṣu",
            grammar: "masculine locative plural",
            meaning: "among yakṣas"
          },
          {
            sanskrit: "तादृक्",
            iast: "tādṛk",
            grammar: "indeclinable",
            meaning: "such"
          },
          {
            sanskrit: "रूपवती",
            iast: "rūpavatī",
            grammar: "feminine nominative singular",
            meaning: "beautiful one (compound: rūpa + vatī)"
          },
          {
            sanskrit: "क्वचित्",
            iast: "kvacit",
            grammar: "indeclinable",
            meaning: "ever, anywhere"
          },
          {
            sanskrit: "मानुषेषु",
            iast: "mānuṣeṣu",
            grammar: "masculine locative plural",
            meaning: "among humans"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "अन्येषु",
            iast: "anyeṣu",
            grammar: "masculine locative plural",
            meaning: "among others"
          },
          {
            sanskrit: "दृष्टपूर्वा",
            iast: "dṛṣṭapūrvā",
            grammar: "feminine nominative singular",
            meaning: "previously seen (compound: dṛṣṭa + pūrvā)"
          },
          {
            sanskrit: "श्रुता",
            iast: "śrutā",
            grammar: "feminine nominative singular",
            meaning: "heard"
          },
          {
            sanskrit: "अपि",
            iast: "api",
            grammar: "indeclinable",
            meaning: "even"
          }
        ]
      },
      {
        number: 14,
        sanskrit: "चित्तप्रमाथिनी बाला नलस्यापि महात्मनः । अन्तःपुरचरान् राज्ञः कर्षयामास सर्वशः ॥",
        transliteration: "cittapramāthinī bālā nalasyāpi mahātmanaḥ | antaḥpuracarān rājñaḥ karṣayāmāsa sarvaśaḥ ||",
        translation: "The young maiden, who could disturb the mind even of the noble Nala, completely captivated all the attendants of the king's inner chambers.",
        wordByWord: [
          {
            sanskrit: "चित्तप्रमाथिनी",
            iast: "cittapramāthinī",
            grammar: "feminine nominative singular",
            meaning: "disturbing the mind (compound: citta + pramāthinī)"
          },
          {
            sanskrit: "बाला",
            iast: "bālā",
            grammar: "feminine nominative singular",
            meaning: "young maiden"
          },
          {
            sanskrit: "नलस्य",
            iast: "nalasya",
            grammar: "masculine genitive singular",
            meaning: "of Nala"
          },
          {
            sanskrit: "अपि",
            iast: "api",
            grammar: "indeclinable",
            meaning: "even"
          },
          {
            sanskrit: "महात्मनः",
            iast: "mahātmanaḥ",
            grammar: "masculine genitive singular",
            meaning: "of the noble one (compound: mahā + ātman)"
          },
          {
            sanskrit: "अन्तःपुरचरान्",
            iast: "antaḥpuracarān",
            grammar: "masculine accusative plural",
            meaning: "attendants of the inner chambers (compound: antaḥpura + cara)"
          },
          {
            sanskrit: "राज्ञः",
            iast: "rājñaḥ",
            grammar: "masculine genitive singular",
            meaning: "of the king"
          },
          {
            sanskrit: "कर्षयामास",
            iast: "karṣayāmāsa",
            grammar: "verb perfect 3rd person singular",
            meaning: "captivated"
          },
          {
            sanskrit: "सर्वशः",
            iast: "sarvaśaḥ",
            grammar: "indeclinable",
            meaning: "completely"
          }
        ]
      },
      {
        number: 15,
        sanskrit: "तां तु नैषधम् उद्दिश्य प्रशंसन्ति स्म सर्वशः । नलश् च रूपसंपन्नो विष्णुर् देवगणैर् इव ॥",
        transliteration: "tāṃ tu naiṣadham uddiśya praśaṃsanti sma sarvaśaḥ | nalaś ca rūpasaṃpanno viṣṇur devagaṇair iva ||",
        translation: "And they all praised her, speaking of the Niṣadha king, and Nala, endowed with beauty, was like Viṣṇu among the hosts of gods.",
        wordByWord: [
          {
            sanskrit: "तां",
            iast: "tāṃ",
            grammar: "feminine accusative singular",
            meaning: "her"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but, and"
          },
          {
            sanskrit: "नैषधम्",
            iast: "naiṣadham",
            grammar: "masculine accusative singular",
            meaning: "the king of Niṣadha"
          },
          {
            sanskrit: "उद्दिश्य",
            iast: "uddiśya",
            grammar: "indeclinable",
            meaning: "with reference to, speaking of"
          },
          {
            sanskrit: "प्रशंसन्ति",
            iast: "praśaṃsanti",
            grammar: "verb present 3rd person plural",
            meaning: "praise"
          },
          {
            sanskrit: "स्म",
            iast: "sma",
            grammar: "indeclinable",
            meaning: "indeed (past tense marker)"
          },
          {
            sanskrit: "सर्वशः",
            iast: "sarvaśaḥ",
            grammar: "indeclinable",
            meaning: "all, completely"
          },
          {
            sanskrit: "नलः",
            iast: "nalaḥ",
            grammar: "masculine nominative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "रूपसंपन्नो",
            iast: "rūpasaṃpanno",
            grammar: "masculine nominative singular",
            meaning: "endowed with beauty (compound: rūpa + sampanna)"
          },
          {
            sanskrit: "विष्णुर्",
            iast: "viṣṇur",
            grammar: "masculine nominative singular",
            meaning: "Viṣṇu"
          },
          {
            sanskrit: "देवगणैर्",
            iast: "devagaṇair",
            grammar: "masculine instrumental plural",
            meaning: "among the hosts of gods (compound: deva + gaṇa)"
          },
          {
            sanskrit: "इव",
            iast: "iva",
            grammar: "indeclinable",
            meaning: "like"
          }
        ]
      },
      {
        number: 16,
        sanskrit: "तस्यास् तु रूपम् उद्दिश्य नलस्य च विशेषतः । मनः समभवत् तीव्रं परस्परवशानुगम् ॥",
        transliteration: "tasyās tu rūpam uddiśya nalasya ca viśeṣataḥ | manaḥ samabhavat tīvraṃ parasparavasānugam ||",
        translation: "And thinking of her beauty and especially of Nala's, their minds became intensely drawn to each other.",
        wordByWord: [
          {
            sanskrit: "तस्यास्",
            iast: "tasyās",
            grammar: "feminine genitive singular",
            meaning: "of her"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but, and"
          },
          {
            sanskrit: "रूपम्",
            iast: "rūpam",
            grammar: "neuter accusative singular",
            meaning: "beauty"
          },
          {
            sanskrit: "उद्दिश्य",
            iast: "uddiśya",
            grammar: "indeclinable",
            meaning: "thinking of, with reference to"
          },
          {
            sanskrit: "नलस्य",
            iast: "nalasya",
            grammar: "masculine genitive singular",
            meaning: "of Nala"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "विशेषतः",
            iast: "viśeṣataḥ",
            grammar: "indeclinable",
            meaning: "especially"
          },
          {
            sanskrit: "मनः",
            iast: "manaḥ",
            grammar: "neuter nominative singular",
            meaning: "mind"
          },
          {
            sanskrit: "समभवत्",
            iast: "samabhavat",
            grammar: "verb imperfect 3rd person singular",
            meaning: "became"
          },
          {
            sanskrit: "तीव्रं",
            iast: "tīvraṃ",
            grammar: "neuter nominative singular",
            meaning: "intense"
          },
          {
            sanskrit: "परस्परवशानुगम्",
            iast: "parasparavasānugam",
            grammar: "neuter nominative singular",
            meaning: "drawn to each other (compound: paraspara + vaśa + anuga)"
          }
        ]
      },
      {
        number: 17,
        sanskrit: "अदृष्टपूर्वा तं दृष्ट्वा नलं कमललोचना । न शेके तारितुं चित्तं विनिःश्वस्य मुहुर् मुहुः ॥",
        transliteration: "adṛṣṭapūrvā taṃ dṛṣṭvā nalaṃ kamalalocanā | na śeke tārituṃ cittaṃ viniḥśvasya muhur muhuḥ ||",
        translation: "The lotus-eyed one, having never seen him before, upon seeing Nala could not control her mind, sighing again and again.",
        wordByWord: [
          {
            sanskrit: "अदृष्टपूर्वा",
            iast: "adṛṣṭapūrvā",
            grammar: "feminine nominative singular",
            meaning: "having never seen before (compound: a + dṛṣṭa + pūrva)"
          },
          {
            sanskrit: "तं",
            iast: "taṃ",
            grammar: "masculine accusative singular",
            meaning: "him"
          },
          {
            sanskrit: "दृष्ट्वा",
            iast: "dṛṣṭvā",
            grammar: "indeclinable",
            meaning: "having seen"
          },
          {
            sanskrit: "नलं",
            iast: "nalaṃ",
            grammar: "masculine accusative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "कमललोचना",
            iast: "kamalalocanā",
            grammar: "feminine nominative singular",
            meaning: "lotus-eyed one (compound: kamala + locanā)"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "शेके",
            iast: "śeke",
            grammar: "verb perfect 3rd person singular ātmanepada",
            meaning: "was able"
          },
          {
            sanskrit: "तारितुं",
            iast: "tārituṃ",
            grammar: "infinitive",
            meaning: "to control"
          },
          {
            sanskrit: "चित्तं",
            iast: "cittaṃ",
            grammar: "neuter accusative singular",
            meaning: "mind"
          },
          {
            sanskrit: "विनिःश्वस्य",
            iast: "viniḥśvasya",
            grammar: "indeclinable",
            meaning: "sighing"
          },
          {
            sanskrit: "मुहुर्",
            iast: "muhur",
            grammar: "indeclinable",
            meaning: "repeatedly"
          },
          {
            sanskrit: "मुहुः",
            iast: "muhuḥ",
            grammar: "indeclinable",
            meaning: "again"
          }
        ]
      },
      {
        number: 18,
        sanskrit: "प्रच्छन्नकामा तु सती वैदर्भी परितप्यती । स्वगृहान्तरम् आसाद्य शयने समुपाविशत् ॥",
        transliteration: "pracchanakāmā tu satī vaidarbhī paritapyatī | svagṛhāntaram āsādya śayane samupāviśat ||",
        translation: "But the virtuous daughter of Vidarbha, with concealed love, burning with passion, having reached her inner chamber, lay down on her bed.",
        wordByWord: [
          {
            sanskrit: "प्रच्छन्नकामा",
            iast: "pracchanakāmā",
            grammar: "feminine nominative singular",
            meaning: "with concealed love (compound: pracchana + kāma)"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but"
          },
          {
            sanskrit: "सती",
            iast: "satī",
            grammar: "feminine nominative singular",
            meaning: "virtuous"
          },
          {
            sanskrit: "वैदर्भी",
            iast: "vaidarbhī",
            grammar: "feminine nominative singular",
            meaning: "daughter of Vidarbha"
          },
          {
            sanskrit: "परितप्यती",
            iast: "paritapyatī",
            grammar: "feminine nominative singular present participle",
            meaning: "burning with passion"
          },
          {
            sanskrit: "स्वगृहान्तरम्",
            iast: "svagṛhāntaram",
            grammar: "neuter accusative singular",
            meaning: "inner chamber (compound: sva + gṛha + antara)"
          },
          {
            sanskrit: "आसाद्य",
            iast: "āsādya",
            grammar: "indeclinable",
            meaning: "having reached"
          },
          {
            sanskrit: "शयने",
            iast: "śayane",
            grammar: "neuter locative singular",
            meaning: "on the bed"
          },
          {
            sanskrit: "समुपाविशत्",
            iast: "samupāviśat",
            grammar: "verb imperfect 3rd person singular",
            meaning: "lay down"
          }
        ]
      },
      {
        number: 19,
        sanskrit: "तत्र स्म दुःखशोकार्ता नलं प्रति मनोगता । विलपन्ती बहुविधं तपनीयेव कन्यका ॥",
        transliteration: "tatra sma duḥkhaśokārtā nalaṃ prati manogatā | vilapantī bahuvidhāṃ tapanīyeva kanyakā ||",
        translation: "There, afflicted with pain and sorrow, her mind fixed on Nala, the maiden lamented in many ways, like one tormented.",
        wordByWord: [
          {
            sanskrit: "तत्र",
            iast: "tatra",
            grammar: "indeclinable",
            meaning: "there"
          },
          {
            sanskrit: "स्म",
            iast: "sma",
            grammar: "indeclinable",
            meaning: "indeed (past tense marker)"
          },
          {
            sanskrit: "दुःखशोकार्ता",
            iast: "duḥkhaśokārtā",
            grammar: "feminine nominative singular",
            meaning: "afflicted with pain and sorrow (compound: duḥkha + śoka + ārta)"
          },
          {
            sanskrit: "नलं",
            iast: "nalaṃ",
            grammar: "masculine accusative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "प्रति",
            iast: "prati",
            grammar: "indeclinable",
            meaning: "towards"
          },
          {
            sanskrit: "मनोगता",
            iast: "manogatā",
            grammar: "feminine nominative singular",
            meaning: "with mind fixed on (compound: manas + gata)"
          },
          {
            sanskrit: "विलपन्ती",
            iast: "vilapantī",
            grammar: "feminine nominative singular present participle",
            meaning: "lamenting"
          },
          {
            sanskrit: "बहुविधं",
            iast: "bahuvidhāṃ",
            grammar: "indeclinable",
            meaning: "in many ways"
          },
          {
            sanskrit: "तपनीयेव",
            iast: "tapanīyeva",
            grammar: "feminine nominative singular",
            meaning: "like one tormented (compound: tapanīya + iva)"
          },
          {
            sanskrit: "कन्यका",
            iast: "kanyakā",
            grammar: "feminine nominative singular",
            meaning: "maiden"
          }
        ]
      },
      {
        number: 20,
        sanskrit: "उन्मत्तरूपा सा बाला विवर्णवदना तदा । क्षणेन समपद्यत नलचिन्तापरायणा ॥",
        transliteration: "unmattarūpā sā bālā vivarṇavadanā tadā | kṣaṇena samapadyata nalacintāparāyaṇā ||",
        translation: "That young girl became like one mad, her face pale, in a moment she became completely absorbed in thoughts of Nala.",
        wordByWord: [
          {
            sanskrit: "उन्मत्तरूपा",
            iast: "unmattarūpā",
            grammar: "feminine nominative singular",
            meaning: "like one mad (compound: unmatta + rūpa)"
          },
          {
            sanskrit: "सा",
            iast: "sā",
            grammar: "feminine nominative singular",
            meaning: "that"
          },
          {
            sanskrit: "बाला",
            iast: "bālā",
            grammar: "feminine nominative singular",
            meaning: "young girl"
          },
          {
            sanskrit: "विवर्णवदना",
            iast: "vivarṇavadanā",
            grammar: "feminine nominative singular",
            meaning: "with pale face (compound: vivarṇa + vadana)"
          },
          {
            sanskrit: "तदा",
            iast: "tadā",
            grammar: "indeclinable",
            meaning: "then"
          },
          {
            sanskrit: "क्षणेन",
            iast: "kṣaṇena",
            grammar: "masculine instrumental singular",
            meaning: "in a moment"
          },
          {
            sanskrit: "समपद्यत",
            iast: "samapadyata",
            grammar: "verb imperfect 3rd person singular ātmanepada",
            meaning: "became"
          },
          {
            sanskrit: "नलचिन्तापरायणा",
            iast: "nalacintāparāyaṇā",
            grammar: "feminine nominative singular",
            meaning: "absorbed in thoughts of Nala (compound: nala + cintā + parāyaṇa)"
          }
        ]
      },
      {
        number: 21,
        sanskrit: "उच्छ्वासबहुला निःश्वासभृशदुःखसमन्विता । स्वास्थ्यं नाधिगमत् किंचिन् मदनेन समाकुला ॥",
        transliteration: "ucchvāsabahulā niḥśvāsabhṛśaduḥkhasamanvitā | svāsthyaṃ nādhigamat kiṃcin madanena samākulā ||",
        translation: "Full of sighs, accompanied by deep breaths and intense sorrow, she found no peace, overwhelmed by love.",
        wordByWord: [
          {
            sanskrit: "उच्छ्वासबहुला",
            iast: "ucchvāsabahulā",
            grammar: "feminine nominative singular",
            meaning: "full of sighs (compound: ucchvāsa + bahula)"
          },
          {
            sanskrit: "निःश्वासभृशदुःखसमन्विता",
            iast: "niḥśvāsabhṛśaduḥkhasamanvitā",
            grammar: "feminine nominative singular",
            meaning: "accompanied by deep breaths and intense sorrow (compound: niḥśvāsa + bhṛśa + duḥkha + samanvita)"
          },
          {
            sanskrit: "स्वास्थ्यं",
            iast: "svāsthyaṃ",
            grammar: "neuter accusative singular",
            meaning: "peace, well-being"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "अधिगमत्",
            iast: "adhigamat",
            grammar: "verb imperfect 3rd person singular",
            meaning: "found, obtained"
          },
          {
            sanskrit: "किंचिन्",
            iast: "kiṃcin",
            grammar: "neuter accusative singular",
            meaning: "any"
          },
          {
            sanskrit: "मदनेन",
            iast: "madanena",
            grammar: "masculine instrumental singular",
            meaning: "by love (Madana)"
          },
          {
            sanskrit: "समाकुला",
            iast: "samākulā",
            grammar: "feminine nominative singular",
            meaning: "overwhelmed"
          }
        ]
      },
      {
        number: 22,
        sanskrit: "उत्थानशयनस्थानगमनाशनभाषणैः । चिन्तयन्ती नलं राज्ञी नोपलेभे तदा सुखम् ॥",
        transliteration: "utthānaśayanasthānagamanāśanabhāṣaṇaiḥ | cintayantī nalaṃ rājñī nopalebhe tadā sukham ||",
        translation: "Whether rising, lying down, standing, walking, eating, or speaking, thinking of King Nala, the queen found no happiness then.",
        wordByWord: [
          {
            sanskrit: "उत्थानशयनस्थानगमनाशनभाषणैः",
            iast: "utthānaśayanasthānagamanāśanabhāṣaṇaiḥ",
            grammar: "neuter instrumental plural",
            meaning: "in rising, lying down, standing, walking, eating, and speaking (compound)"
          },
          {
            sanskrit: "चिन्तयन्ती",
            iast: "cintayantī",
            grammar: "feminine nominative singular present participle",
            meaning: "thinking of"
          },
          {
            sanskrit: "नलं",
            iast: "nalaṃ",
            grammar: "masculine accusative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "राज्ञी",
            iast: "rājñī",
            grammar: "feminine nominative singular",
            meaning: "queen"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "उपलेभे",
            iast: "upalebhe",
            grammar: "verb perfect 3rd person singular ātmanepada",
            meaning: "found"
          },
          {
            sanskrit: "तदा",
            iast: "tadā",
            grammar: "indeclinable",
            meaning: "then"
          },
          {
            sanskrit: "सुखम्",
            iast: "sukham",
            grammar: "neuter accusative singular",
            meaning: "happiness"
          }
        ]
      },
      {
        number: 23,
        sanskrit: "रात्रौ वा यदि वा ह्नाहे शयाना स्थितया पि वा । हा हेति रुदती बाला सखीजनसमावृता ॥",
        transliteration: "rātrau vā yadi vā hnāhe śayānā sthitayā pi vā | hā heti rudatī bālā sakhījansamāvṛtā ||",
        translation: "Whether at night or during the day, lying down or standing, the young girl, surrounded by her companions, wept, crying 'Alas! Alas!'",
        wordByWord: [
          {
            sanskrit: "रात्रौ",
            iast: "rātrau",
            grammar: "feminine locative singular",
            meaning: "at night"
          },
          {
            sanskrit: "वा",
            iast: "vā",
            grammar: "indeclinable",
            meaning: "or"
          },
          {
            sanskrit: "यदि",
            iast: "yadi",
            grammar: "indeclinable",
            meaning: "if"
          },
          {
            sanskrit: "वा",
            iast: "vā",
            grammar: "indeclinable",
            meaning: "or"
          },
          {
            sanskrit: "ह्नाहे",
            iast: "hnāhe",
            grammar: "masculine locative singular",
            meaning: "during the day"
          },
          {
            sanskrit: "शयाना",
            iast: "śayānā",
            grammar: "feminine nominative singular",
            meaning: "lying down"
          },
          {
            sanskrit: "स्थितया",
            iast: "sthitayā",
            grammar: "feminine instrumental singular",
            meaning: "standing"
          },
          {
            sanskrit: "अपि",
            iast: "api",
            grammar: "indeclinable",
            meaning: "even, also"
          },
          {
            sanskrit: "वा",
            iast: "vā",
            grammar: "indeclinable",
            meaning: "or"
          },
          {
            sanskrit: "हा",
            iast: "hā",
            grammar: "indeclinable",
            meaning: "alas"
          },
          {
            sanskrit: "हा",
            iast: "hā",
            grammar: "indeclinable",
            meaning: "alas"
          },
          {
            sanskrit: "इति",
            iast: "iti",
            grammar: "indeclinable",
            meaning: "thus"
          },
          {
            sanskrit: "रुदती",
            iast: "rudatī",
            grammar: "feminine nominative singular present participle",
            meaning: "weeping"
          },
          {
            sanskrit: "बाला",
            iast: "bālā",
            grammar: "feminine nominative singular",
            meaning: "young girl"
          },
          {
            sanskrit: "सखीजनसमावृता",
            iast: "sakhījansamāvṛtā",
            grammar: "feminine nominative singular",
            meaning: "surrounded by companions (compound: sakhī + jana + samāvṛta)"
          }
        ]
      },
      {
        number: 24,
        sanskrit: "सा तान् अद्भुतरूपान् वै दृष्ट्वा सखिगणावृता । हृष्टा यहीतुं खगमांस त्वरमाणोपचक्रमे ॥",
        transliteration: "sā tān adbhutarūpān vai dṛṣṭvā sakhigaṇāvṛtā | hṛṣṭā grahītuṃ khagamāṃs tvaramāṇopacakrame ||",
        translation: "Seeing those wonderfully formed ones, surrounded by her companions, she joyfully hastened to catch the birds.",
        wordByWord: [
          {
            sanskrit: "सा",
            iast: "sā",
            grammar: "feminine nominative singular",
            meaning: "she"
          },
          {
            sanskrit: "तान्",
            iast: "tān",
            grammar: "feminine accusative plural",
            meaning: "those"
          },
          {
            sanskrit: "अद्भुतरूपान्",
            iast: "adbhutarūpān",
            grammar: "masculine nominative singular",
            meaning: "wonderfully formed (compound: adbhuta + rūpa)"
          },
          {
            sanskrit: "वै",
            iast: "vai",
            grammar: "indeclinable",
            meaning: "how"
          },
          {
            sanskrit: "दृष्ट्वा",
            iast: "dṛṣṭvā",
            grammar: "feminine instrumental singular",
            meaning: "seeing"
          },
          {
            sanskrit: "सखिगणावृता",
            iast: "sakhigaṇāvṛtā",
            grammar: "feminine nominative singular",
            meaning: "surrounded by her companions (compound: sakhigaṇa + vṛta)"
          },
          {
            sanskrit: "हृष्टा",
            iast: "hṛṣṭā",
            grammar: "masculine nominative singular",
            meaning: "she"
          },
          {
            sanskrit: "यहीतुं",
            iast: "grahītuṃ",
            grammar: "neuter accusative singular",
            meaning: "those birds"
          },
          {
            sanskrit: "खगमांस",
            iast: "khagamāṃs",
            grammar: "masculine instrumental singular",
            meaning: "catching birds (compound: khaga + māṃs)"
          },
          {
            sanskrit: "त्वरमाणोपचक्रमे",
            iast: "tvaramāṇopacakrame",
            grammar: "masculine instrumental singular",
            meaning: "hastily, eagerly (compound: tvara + māṇa + opacakrame)"
          }
        ]
      },
      {
        number: 25,
        sanskrit: "अथ हंसा विससृपुः सर्वतः प्रमदावने । एकैकशस् तदा कन्यास् तान् हंसान समुपाद्रवन् ॥",
        transliteration: "atha haṃsā visasṛpuḥ sarvataḥ pramadāvane | ekaikaśas tadā kanyās tān haṃsān samupādravan ||",
        translation: "Then the swans scattered in all directions in the pleasure garden. Then the maidens ran after those swans one by one.",
        wordByWord: [
          {
            sanskrit: "अथ",
            iast: "atha",
            grammar: "indeclinable",
            meaning: "then"
          },
          {
            sanskrit: "हंसा",
            iast: "haṃsā",
            grammar: "masculine nominative singular",
            meaning: "swans"
          },
          {
            sanskrit: "विससृपुः",
            iast: "visasṛpuḥ",
            grammar: "masculine instrumental singular",
            meaning: "scattering"
          },
          {
            sanskrit: "सर्वतः",
            iast: "sarvataḥ",
            grammar: "indeclinable",
            meaning: "completely"
          },
          {
            sanskrit: "प्रमदावने",
            iast: "pramadāvane",
            grammar: "masculine instrumental plural",
            meaning: "pleasure garden (compound: prama + dā + avane)"
          },
          {
            sanskrit: "एकैकशस्",
            iast: "ekaikaśas",
            grammar: "masculine instrumental singular",
            meaning: "one by one"
          },
          {
            sanskrit: "तदा",
            iast: "tadā",
            grammar: "indeclinable",
            meaning: "then"
          },
          {
            sanskrit: "कन्यास्",
            iast: "kanyās",
            grammar: "feminine instrumental singular",
            meaning: "maidens"
          },
          {
            sanskrit: "तान्",
            iast: "tān",
            grammar: "feminine accusative plural",
            meaning: "those"
          },
          {
            sanskrit: "हंसान",
            iast: "haṃsān",
            grammar: "masculine nominative plural",
            meaning: "swans"
          },
          {
            sanskrit: "समुपाद्रवन्",
            iast: "samupādravan",
            grammar: "masculine instrumental singular",
            meaning: "running after"
          }
        ]
      },
      {
        number: 26,
        sanskrit: "दमयन्ती तु यं हंसं समुपाधावद अन्तिके । स मानुषीं गिरं कृत्वा दमयन्तीम् अथाब्रवीत् ॥",
        transliteration: "damayantī tu yaṃ haṃsaṃ samupādhāvad antike | sa mānuṣīṃ giraṃ kṛtvā damayantīm athābravīt ||",
        translation: "But the swan that Damayantī ran after nearby, making human speech, then spoke to Damayantī.",
        wordByWord: [
          {
            sanskrit: "दमयन्ती",
            iast: "damayantī",
            grammar: "feminine nominative singular",
            meaning: "Damayantī"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but, and"
          },
          {
            sanskrit: "यं",
            iast: "yaṃ",
            grammar: "masculine nominative singular",
            meaning: "she"
          },
          {
            sanskrit: "हंसं",
            iast: "haṃsaṃ",
            grammar: "masculine nominative singular",
            meaning: "swan"
          },
          {
            sanskrit: "समुपाधावद",
            iast: "samupādhāvad",
            grammar: "masculine instrumental singular",
            meaning: "making human speech"
          },
          {
            sanskrit: "अन्तिके",
            iast: "antike",
            grammar: "feminine accusative singular",
            meaning: "nearby"
          },
          {
            sanskrit: "स",
            iast: "sa",
            grammar: "masculine nominative singular",
            meaning: "he"
          },
          {
            sanskrit: "मानुषीं",
            iast: "mānuṣīṃ",
            grammar: "masculine locative plural",
            meaning: "among the maidens"
          },
          {
            sanskrit: "गिरं",
            iast: "giraṃ",
            grammar: "masculine nominative singular",
            meaning: "ran"
          },
          {
            sanskrit: "कृत्वा",
            iast: "kṛtvā",
            grammar: "masculine instrumental singular",
            meaning: "having run"
          },
          {
            sanskrit: "दमयन्तीम्",
            iast: "damayantīm",
            grammar: "feminine accusative singular",
            meaning: "Damayantī"
          },
          {
            sanskrit: "अथाब्रवीत्",
            iast: "athābravīt",
            grammar: "masculine instrumental singular",
            meaning: "making human speech"
          }
        ]
      },
      {
        number: 27,
        sanskrit: "दमयन्ति नलो नाम निषधेषु महीपतिः । अश्विनोः सदृशो रूपे न समास् तस्य मानुषाः ॥",
        transliteration: "damayanti nalo nāma niṣadheṣu mahīpatiḥ | aśvinoḥ sadṛśo rūpe na samās tasya mānuṣāḥ ||",
        translation: "Damayantī, there is a king named Nala in Niṣadha, equal to the Aśvins in beauty. No humans are equal to him.",
        wordByWord: [
          {
            sanskrit: "दमयन्ति",
            iast: "damayanti",
            grammar: "feminine accusative plural",
            meaning: "Damayantī"
          },
          {
            sanskrit: "नलो",
            iast: "nalo",
            grammar: "masculine nominative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "नाम",
            iast: "nāma",
            grammar: "indeclinable",
            meaning: "by name"
          },
          {
            sanskrit: "निषधेषु",
            iast: "niṣadheṣu",
            grammar: "masculine locative plural",
            meaning: "among the Nala"
          },
          {
            sanskrit: "महीपतिः",
            iast: "mahīpatiḥ",
            grammar: "masculine nominative singular",
            meaning: "great king (compound: mahā + ipati)"
          },
          {
            sanskrit: "अश्विनोः",
            iast: "aśvinoḥ",
            grammar: "masculine locative singular",
            meaning: "of the Aśvins"
          },
          {
            sanskrit: "सदृशो",
            iast: "sadṛśo",
            grammar: "masculine nominative plural",
            meaning: "equal to"
          },
          {
            sanskrit: "रूपे",
            iast: "rūpe",
            grammar: "neuter instrumental singular",
            meaning: "beauty"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "समास्",
            iast: "samās",
            grammar: "masculine instrumental singular",
            meaning: "with"
          },
          {
            sanskrit: "तस्य",
            iast: "tasya",
            grammar: "masculine genitive singular",
            meaning: "his"
          },
          {
            sanskrit: "मानुषाः",
            iast: "mānuṣāḥ",
            grammar: "masculine genitive plural",
            meaning: "of the maidens"
          }
        ]
      },
      {
        number: 28,
        sanskrit: "तस्य वै यदि भार्या त्वं भवेथा रववर्णिनि । सफलं ते भवेज् जन्म रूपं चेदं सुमध्यमे ॥",
        transliteration: "tasya vai yadi bhāryā tvaṃ bhavethā ravavarṇini | saphalaṃ te bhavej janma rūpaṃ cedaṃ sumadhyame ||",
        translation: "If you were to become his wife, O fair one, your birth and this beauty would bear fruit, O slender-waisted one.",
        wordByWord: [
          {
            sanskrit: "तस्य",
            iast: "tasya",
            grammar: "masculine genitive singular",
            meaning: "his"
          },
          {
            sanskrit: "वै",
            iast: "vai",
            grammar: "indeclinable",
            meaning: "indeed"
          },
          {
            sanskrit: "यदि",
            iast: "yadi",
            grammar: "indeclinable",
            meaning: "if"
          },
          {
            sanskrit: "भार्या",
            iast: "bhāryā",
            grammar: "feminine nominative singular",
            meaning: "wife"
          },
          {
            sanskrit: "त्वं",
            iast: "tvaṃ",
            grammar: "pronoun nominative singular",
            meaning: "you"
          },
          {
            sanskrit: "भवेथा",
            iast: "bhavethā",
            grammar: "verb optative 2nd person singular",
            meaning: "would become"
          },
          {
            sanskrit: "रववर्णिनि",
            iast: "ravavarṇini",
            grammar: "feminine vocative singular",
            meaning: "O fair one"
          },
          {
            sanskrit: "सफलं",
            iast: "saphalaṃ",
            grammar: "neuter nominative singular",
            meaning: "fruitful"
          },
          {
            sanskrit: "ते",
            iast: "te",
            grammar: "pronoun genitive singular",
            meaning: "your"
          },
          {
            sanskrit: "भवेज्",
            iast: "bhavej",
            grammar: "verb optative 3rd person singular",
            meaning: "would be"
          },
          {
            sanskrit: "जन्म",
            iast: "janma",
            grammar: "neuter nominative singular",
            meaning: "birth"
          },
          {
            sanskrit: "रूपं",
            iast: "rūpaṃ",
            grammar: "neuter nominative singular",
            meaning: "beauty"
          },
          {
            sanskrit: "चेदं",
            iast: "cedaṃ",
            grammar: "neuter nominative singular",
            meaning: "and this"
          },
          {
            sanskrit: "सुमध्यमे",
            iast: "sumadhyame",
            grammar: "feminine vocative singular",
            meaning: "O slender-waisted one"
          }
        ]
      },
      {
        number: 29,
        sanskrit: "वयं हि देवगन्धर्वमानुषोगराक्षसान् । दृष्टवन्तो न चास्माभिर् दृष्टपूर्वस् तथाविधः ॥",
        transliteration: "vayaṃ hi devagandharvamanauṣoragarākṣasān | dṛṣṭavanto na cāsmābhir dṛṣṭapūrvas tathāvidhaḥ ||",
        translation: "For we have seen gods, gandharvas, men, nāgas, and rākṣasas, but never have we seen one such as he.",
        wordByWord: [
          {
            sanskrit: "वयं",
            iast: "vayaṃ",
            grammar: "pronoun nominative plural",
            meaning: "we"
          },
          {
            sanskrit: "हि",
            iast: "hi",
            grammar: "indeclinable",
            meaning: "for, indeed"
          },
          {
            sanskrit: "देवगन्धर्वमानुषोगराक्षसान्",
            iast: "devagandharvamanauṣoragarākṣasān",
            grammar: "masculine accusative plural",
            meaning: "gods, gandharvas, men, nāgas, and rākṣasas (compound)"
          },
          {
            sanskrit: "दृष्टवन्तो",
            iast: "dṛṣṭavanto",
            grammar: "masculine nominative plural",
            meaning: "having seen"
          },
          {
            sanskrit: "न",
            iast: "na",
            grammar: "indeclinable",
            meaning: "not"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "अस्माभिर्",
            iast: "asmābhir",
            grammar: "pronoun instrumental plural",
            meaning: "by us"
          },
          {
            sanskrit: "दृष्टपूर्वस्",
            iast: "dṛṣṭapūrvas",
            grammar: "masculine nominative singular",
            meaning: "previously seen"
          },
          {
            sanskrit: "तथाविधः",
            iast: "tathāvidhaḥ",
            grammar: "masculine nominative singular",
            meaning: "such a one"
          }
        ]
      },
      {
        number: 30,
        sanskrit: "त्वं चापि रत्नं नारीणां नरेषु च नलो वरः । विशिष्टाया विशिष्टेन संगमो गुणवान् भवेत् ॥",
        transliteration: "tvaṃ cāpi ratnaṃ nārīṇāṃ nareṣu ca nalo varaḥ | viśiṣṭāyā viśiṣṭena saṃgamo guṇavān bhavet ||",
        translation: "And you are a jewel among women, and Nala is the best among men. The union of an excellent woman with an excellent man would be virtuous.",
        wordByWord: [
          {
            sanskrit: "त्वं",
            iast: "tvaṃ",
            grammar: "pronoun nominative singular",
            meaning: "you"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "अपि",
            iast: "api",
            grammar: "indeclinable",
            meaning: "also"
          },
          {
            sanskrit: "रत्नं",
            iast: "ratnaṃ",
            grammar: "neuter nominative singular",
            meaning: "jewel"
          },
          {
            sanskrit: "नारीणां",
            iast: "nārīṇāṃ",
            grammar: "feminine genitive plural",
            meaning: "of women"
          },
          {
            sanskrit: "नरेषु",
            iast: "nareṣu",
            grammar: "masculine locative plural",
            meaning: "among men"
          },
          {
            sanskrit: "च",
            iast: "ca",
            grammar: "indeclinable",
            meaning: "and"
          },
          {
            sanskrit: "नलो",
            iast: "nalo",
            grammar: "masculine nominative singular",
            meaning: "Nala"
          },
          {
            sanskrit: "वरः",
            iast: "varaḥ",
            grammar: "masculine nominative singular",
            meaning: "best"
          },
          {
            sanskrit: "विशिष्टाया",
            iast: "viśiṣṭāyā",
            grammar: "feminine genitive singular",
            meaning: "of an excellent woman"
          },
          {
            sanskrit: "विशिष्टेन",
            iast: "viśiṣṭena",
            grammar: "masculine instrumental singular",
            meaning: "with an excellent man"
          },
          {
            sanskrit: "संगमो",
            iast: "saṃgamo",
            grammar: "masculine nominative singular",
            meaning: "union"
          },
          {
            sanskrit: "गुणवान्",
            iast: "guṇavān",
            grammar: "masculine nominative singular",
            meaning: "virtuous"
          },
          {
            sanskrit: "भवेत्",
            iast: "bhavet",
            grammar: "verb optative 3rd person singular",
            meaning: "would be"
          }
        ]
      },
      {
        number: 31,
        sanskrit: "एवम् उक्ता तु हंसेन दमयन्ती विशां पते । अब्रवीत् तत्र तं हंसं त्वम् अप्य् एवं नले वद ॥",
        transliteration: "evam uktā tu haṃsena damayantī viśāṃ pate | abravīt tatra taṃ haṃsaṃ tvam apy evaṃ nale vada ||",
        translation: "Thus addressed by the swan, Damayantī, O lord of men, spoke to the swan there: 'You also speak thus to Nala.'",
        wordByWord: [
          {
            sanskrit: "एवम्",
            iast: "evam",
            grammar: "indeclinable",
            meaning: "thus"
          },
          {
            sanskrit: "उक्ता",
            iast: "uktā",
            grammar: "feminine nominative singular",
            meaning: "addressed"
          },
          {
            sanskrit: "तु",
            iast: "tu",
            grammar: "indeclinable",
            meaning: "but"
          },
          {
            sanskrit: "हंसेन",
            iast: "haṃsena",
            grammar: "masculine instrumental singular",
            meaning: "by the swan"
          },
          {
            sanskrit: "दमयन्ती",
            iast: "damayantī",
            grammar: "feminine nominative singular",
            meaning: "Damayantī"
          },
          {
            sanskrit: "विशां",
            iast: "viśāṃ",
            grammar: "feminine genitive plural",
            meaning: "of men"
          },
          {
            sanskrit: "पते",
            iast: "pate",
            grammar: "masculine vocative singular",
            meaning: "O lord"
          },
          {
            sanskrit: "अब्रवीत्",
            iast: "abravīt",
            grammar: "verb imperfect 3rd person singular",
            meaning: "spoke"
          },
          {
            sanskrit: "तत्र",
            iast: "tatra",
            grammar: "indeclinable",
            meaning: "there"
          },
          {
            sanskrit: "तं",
            iast: "taṃ",
            grammar: "masculine accusative singular",
            meaning: "that"
          },
          {
            sanskrit: "हंसं",
            iast: "haṃsaṃ",
            grammar: "masculine accusative singular",
            meaning: "swan"
          },
          {
            sanskrit: "त्वम्",
            iast: "tvam",
            grammar: "pronoun nominative singular",
            meaning: "you"
          },
          {
            sanskrit: "अपि",
            iast: "api",
            grammar: "indeclinable",
            meaning: "also"
          },
          {
            sanskrit: "एवं",
            iast: "evaṃ",
            grammar: "indeclinable",
            meaning: "thus"
          },
          {
            sanskrit: "नले",
            iast: "nale",
            grammar: "masculine locative singular",
            meaning: "to Nala"
          },
          {
            sanskrit: "वद",
            iast: "vada",
            grammar: "verb imperative 2nd person singular",
            meaning: "speak"
          }
        ]
      },
      {
        number: 32,
        sanskrit: "तथेत्य् उक्त्वाण्डजः कन्यां विदर्भस्य विशां पते । पुनर् आगम्य निषधान् नले सर्वं न्यवेदयत् ॥",
        transliteration: "tathety uktvāṇḍajaḥ kanyāṃ vidarbhasya viśāṃ pate | punar āgamya niṣadhān nale sarvaṃ nyavedayat ||",
        translation: "Having said 'So be it' to the daughter of Vidarbha, O lord of men, the winged one returned to Niṣadha and reported everything to Nala.",
        wordByWord: [
          {
            sanskrit: "तथेति",
            iast: "tatheti",
            grammar: "indeclinable",
            meaning: "so be it (tathā + iti)"
          },
          {
            sanskrit: "उक्त्वा",
            iast: "uktvā",
            grammar: "indeclinable",
            meaning: "having said"
          },
          {
            sanskrit: "अण्डजः",
            iast: "aṇḍajaḥ",
            grammar: "masculine nominative singular",
            meaning: "the winged one (lit. born from an egg)"
          },
          {
            sanskrit: "कन्यां",
            iast: "kanyāṃ",
            grammar: "feminine accusative singular",
            meaning: "to the daughter"
          },
          {
            sanskrit: "विदर्भस्य",
            iast: "vidarbhasya",
            grammar: "masculine genitive singular",
            meaning: "of Vidarbha"
          },
          {
            sanskrit: "विशां",
            iast: "viśāṃ",
            grammar: "feminine genitive plural",
            meaning: "of men"
          },
          {
            sanskrit: "पते",
            iast: "pate",
            grammar: "masculine vocative singular",
            meaning: "O lord"
          },
          {
            sanskrit: "पुनर्",
            iast: "punar",
            grammar: "indeclinable",
            meaning: "again"
          },
          {
            sanskrit: "आगम्य",
            iast: "āgamya",
            grammar: "indeclinable",
            meaning: "having returned"
          },
          {
            sanskrit: "निषधान्",
            iast: "niṣadhān",
            grammar: "masculine accusative plural",
            meaning: "to Niṣadha"
          },
          {
            sanskrit: "नले",
            iast: "nale",
            grammar: "masculine locative singular",
            meaning: "to Nala"
          },
          {
            sanskrit: "सर्वं",
            iast: "sarvaṃ",
            grammar: "neuter accusative singular",
            meaning: "everything"
          },
          {
            sanskrit: "न्यवेदयत्",
            iast: "nyavedayat",
            grammar: "verb imperfect 3rd person singular",
            meaning: "reported"
          }
        ]
      },
      {
        number: 33,
        sanskrit: "॥ इति नलोपाख्याने प्रथमः सर्गः ॥",
        transliteration: "|| iti nalopākhyāne prathamaḥ sargaḥ ||",
        translation: "Thus ends the first chapter of the story of Nala.",
        wordByWord: [
          {
            sanskrit: "इति",
            iast: "iti",
            grammar: "indeclinable",
            meaning: "thus"
          },
          {
            sanskrit: "नलोपाख्याने",
            iast: "nalopākhyāne",
            grammar: "neuter locative singular",
            meaning: "in the story of Nala"
          },
          {
            sanskrit: "प्रथमः",
            iast: "prathamaḥ",
            grammar: "masculine nominative singular",
            meaning: "first"
          },
          {
            sanskrit: "सर्गः",
            iast: "sargaḥ",
            grammar: "masculine nominative singular",
            meaning: "chapter"
          }
        ]
      }
    ]
  }
]; 