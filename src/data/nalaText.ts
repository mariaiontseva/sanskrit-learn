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
      {
        number: 6,
        sanskrit: "sa prajārthaṃ paraṃ yatnam akarot susamāhitaḥ | atithīn pūjayām āsa tapas tepe mahāvratam ||",
        translation: "He made the greatest effort for offspring, with full concentration. He honored guests and performed great austerities with vows.",
      },
      {
        number: 7,
        sanskrit: "tasya bhāryā samutpannā damayantī sumadhyamā | yā śriyā rūpasampannā lakṣmīr iva varāṅganā ||",
        translation: "To him was born a wife, Damayantī with a slender waist, who was endowed with beauty and fortune, like Lakṣmī herself, the excellent woman.",
      },
      {
        number: 8,
        sanskrit: "tasyāś ca rūpasampattir divyamālyānulepanā | śrīr ivāyatalocanā devakanyeva śobhate ||",
        translation: "And her beauty, adorned with divine garlands and unguents, shone like Śrī herself, like a divine maiden, with long eyes.",
      },
      {
        number: 9,
        sanskrit: "na tathā vidarbhapurī pūrvam āsīn manoramā | yathā tayā naraśreṣṭha kanyayā sālaṃkṛtā ||",
        translation: "Never before was the city of Vidarbha so delightful as when it was adorned by that maiden, O best of men.",
      },
      {
        number: 10,
        sanskrit: "nalaś ca naraśārdūlo rūpeṇāpratimo bhuvi | kandarpa iva rūpeṇa mūrtimān abhavat svayam ||",
        translation: "And Nala, tiger among men, unmatched in beauty on earth, was like Kandarpa himself incarnate in beauty.",
      }
    ]
  },
  {
    number: 2,
    title: "The Gods' Journey",
    verses: [
      {
        number: 31,
        sanskrit: "tatra śakramukhā devāḥ samājagmur mahaujasaḥ | mahendrasya sabhāṃ divyāṃ viśvakarmakṛtāṃ śubhām ||",
        translation: "There the mighty gods, led by Śakra (Indra), came to the divine assembly hall of Mahendra (Indra), beautifully made by Viśvakarman.",
      },
      {
        number: 32,
        sanskrit: "tatra devarṣayaḥ sarve gandharvāpsarasas tathā | upāsāṃ cakrire devān sukhāsīnān yathāsukham ||",
        translation: "There all the divine sages, gandharvas, and apsaras attended upon the gods who were seated comfortably at ease.",
      },
      {
        number: 33,
        sanskrit: "tatra rājā nalo nāma vīrasenasuto balī | upatasthe sabhāṃ divyāṃ tejasā sūryavarcasaḥ ||",
        translation: "There King Nala by name, son of Vīrasena, mighty, approached the divine assembly, radiant with the splendor of the sun.",
      },
      {
        number: 34,
        sanskrit: "taṃ dṛṣṭvā devatāḥ sarvāḥ sametya ca parasparam | ūcur vismayam āpannāḥ kiṃ ayaṃ mānuṣo 'tra hi ||",
        translation: "Seeing him, all the deities, coming together with one another, spoke in amazement: 'What is this human doing here?'",
      },
      {
        number: 35,
        sanskrit: "tato 'bravīn mahārāja nalaṃ śakraḥ śacīpatiḥ | bhavān asmākaṃ dūto vai gaccha damayantīm iti ||",
        translation: "Then Śakra, lord of Śacī, O great king, spoke to Nala: 'Be our messenger indeed, go to Damayantī.'",
      }
    ]
  },
  {
    number: 3,
    title: "Nala's Mission",
    verses: [
      {
        number: 36,
        sanskrit: "tataḥ praṇamya devendraṃ nalo vākyam uvāca ha | kariṣyāmi tathety uktvā kathaṃ jñāsyāmi tām aham ||",
        translation: "Then, bowing to the lord of gods, Nala spoke these words: 'I will do so,' he said, 'but how shall I recognize her?'",
      },
      {
        number: 37,
        sanskrit: "tato 'bravīn mahendro 'pi śṛṇu tāvad yathā tathā | vidarbhanagare ramye bhīmasya sadane śubhe ||",
        translation: "Then Mahendra (Indra) also spoke: 'Listen now how it is. In the delightful city of Vidarbha, in Bhīma's beautiful palace...'",
      },
      {
        number: 38,
        sanskrit: "damayantī tu tatraiva nivasaty amaraprabhā | tāṃ dṛṣṭvā tvaṃ na śaṅkethāḥ sā hi tvāṃ varayiṣyati ||",
        translation: "Damayantī indeed dwells there, radiant as an immortal. Having seen her, you should have no doubt, for she will choose you.",
      },
      {
        number: 39,
        sanskrit: "tataḥ sa gatvā vidarbhān damayantīm uvāca ha | śṛṇu vaidarbhi vakṣyāmi devānāṃ vacanāni te ||",
        translation: "Then, having gone to Vidarbha, he spoke to Damayantī: 'Listen, O princess of Vidarbha, I will tell you the words of the gods.'",
      },
      {
        number: 40,
        sanskrit: "devadūto 'ham āyāto nalo nāma mahīpatiḥ | devās tvāṃ varayiṣyanti teṣām ekaṃ vṛṇīṣva ha ||",
        translation: "I have come as a messenger of the gods, I am King Nala by name. The gods desire you; choose one of them.",
      }
    ]
  },
  {
    number: 4,
    title: "Damayantī's Response",
    verses: [
      {
        number: 41,
        sanskrit: "śrutvā tu vacanaṃ tasya damayantī śucismitā | pratyuvāca tato nalaṃ sarvadevān namāmy aham ||",
        translation: "Having heard his words, Damayantī with a pure smile then replied to Nala: 'I bow to all the gods.'",
      },
      {
        number: 42,
        sanskrit: "yathā tvaṃ me vṛto rājan manasā tad bravīmi te | tvayi me nihitā buddhir eṣa me niścayo dhruvam ||",
        translation: "As I have chosen you in my mind, O king, I tell you this. My mind is set on you; this is my firm resolve.",
      },
      {
        number: 43,
        sanskrit: "svayaṃvare hi yat tatra mayā vaktavyam uttamam | tat te vakṣyāmi rājendra satyam etad bravīmi te ||",
        translation: "What I must say there at the svayaṃvara, that I will tell you, O lord of kings. This I tell you truly.",
      },
      {
        number: 44,
        sanskrit: "evaṃ tu vadata sarvāṃ rātriṃ naiṣadham antike | damayantī tato bhūyo vākyam etad uvāca ha ||",
        translation: "Thus speaking through the whole night near the Naiṣadha (Nala), Damayantī then spoke these words again.",
      },
      {
        number: 45,
        sanskrit: "yadi māṃ tvaṃ mahārāja bhāryārtham abhikāṅkṣase | pratijānīhi me satyaṃ yathā vakṣyāmi te tathā ||",
        translation: "If you, O great king, desire me as your wife, promise me truly that you will do as I say.",
      }
    ]
  },
  {
    number: 5,
    title: "The Golden Swans",
    verses: [
      {
        number: 14,
        sanskrit: "athopavane damayantī sakhīmadhye vihaṃgamān | dadarśa kanakābhāsān haṃsān lomaharṣaṇān ||",
        translation: "Then in a garden, Damayantī among her friends saw birds, golden-colored swans that caused her hair to stand on end.",
      },
      {
        number: 15,
        sanskrit: "sā tu taṃ ruciraṃ haṃsaṃ sahasā 'bhyapatad balāt | parihāsavihārārthaṃ sakhīnāṃ paśyatāṃ tadā ||",
        translation: "She suddenly rushed forcefully towards that beautiful swan, for sport and play, while her friends watched.",
      },
      {
        number: 16,
        sanskrit: "haṃsas tu damayantīṃ tāṃ mānuṣīṃ vācam uccarann | abravīd vaidarbhi śruṇu vidarbheṣu mahīpate ||",
        translation: "But the swan, uttering human speech, said to Damayantī: 'Listen, O princess of Vidarbha, O ruler of Vidarbha.'",
      },
      {
        number: 17,
        sanskrit: "niṣadheṣu nalo nāma vīrasenasuto nṛpaḥ | aśvinor iva rūpeṇa samo vā nāsti vā samaḥ ||",
        translation: "In Niṣadha there is a king named Nala, son of Vīrasena. In beauty he is like the Aśvins; there is none equal to him, or perhaps there is.",
      },
      {
        number: 18,
        sanskrit: "tasya te sadṛśī bhāryā tvaṃ ca tasya sadṛśī prabho | samāgamaś ca yuvayor uttamaḥ syād araṃdhati ||",
        translation: "You would be a suitable wife for him, and he would be suitable for you, O noble one. A union between you two would be most excellent, O Arundhati-like one.",
      }
    ]
  },
  {
    number: 5,
    title: "The Message of Love",
    verses: [
      {
        number: 19,
        sanskrit: "evaṃ gate tu vaidarbhī nalaṃ prati vihaṃgamāt | tataḥ prabhṛti na svasthā nalaṃ prati babhūva sā ||",
        translation: "After this happened, the princess of Vidarbha, having heard about Nala from the bird, from that time on was not at peace regarding Nala.",
      },
      {
        number: 20,
        sanskrit: "tato 'ntargatayā śvāsān muhur muhurudīrayat | babhūva vimanāś cāpi vivṛṇā pāṇḍumaṇḍalā ||",
        translation: "Then, with internalized breaths, she sighed again and again, and became depressed, pale, and wan.",
      },
      {
        number: 21,
        sanskrit: "na śayyāsanabhogena na snānena na bhūṣaṇaiḥ | na bhojyena na pānena ratim vindati karhicit ||",
        translation: "Neither in bed, seat, or pleasure, nor in bathing, ornaments, food, or drink did she find delight at any time.",
      },
      {
        number: 22,
        sanskrit: "rātriṃ divaṃ na svapiti bhūmau virauti gauravam | hā heti rudatī bālā unmatteva varānanā ||",
        translation: "Night and day she did not sleep, on the ground she cried out in distress, 'Alas, alas!' the maiden wept, like one mad, though fair-faced.",
      },
      {
        number: 23,
        sanskrit: "tāṃ tathā vimanāṃ dṛṣṭvā sakhījanasutāṃ tadā | nyavedayata bhīmāya damayantīṃ sakhījanaḥ ||",
        translation: "Seeing her thus depressed, the companions then reported to Bhīma about Damayantī, daughter of companions.",
      },
      {
        number: 24,
        sanskrit: "tac chrutvā nṛpatir bhīmo damayantīṃ prati prabhuḥ | cintayām āsa tat kāryaṃ sumahad dhitam ātmanaḥ ||",
        translation: "Hearing this, King Bhīma, the lord, concerning Damayantī, pondered this great matter for his own good.",
      },
      {
        number: 25,
        sanskrit: "sa samīkṣya mahīpālaḥ svāṃ sutāṃ prāptayauvanām | apaśyat kāryam āyattaṃ svayaṃvaravidhau sthitam ||",
        translation: "The king, observing his daughter who had reached youth, saw that the matter depended on arranging a svayaṃvara (self-choice ceremony).",
      },
      {
        number: 26,
        sanskrit: "sa sannipātayām āsa mahīpālān viśāṃ pate | svayaṃvara iti śrutvā sarve bhūmipateḥ sutām ||",
        translation: "He gathered the kings, O lord of people, and hearing of the svayaṃvara, all came for the king's daughter.",
      },
      {
        number: 27,
        sanskrit: "āgacchan pṛthivīpālāḥ pṛthivyāṃ yāvato nṛpāḥ | nānādeśasamutpannā nānāveṣadharās tathā ||",
        translation: "The rulers of the earth came, as many kings as there were on earth, born in various lands and wearing various costumes.",
      },
      {
        number: 28,
        sanskrit: "tataḥ śrutvā nṛpāḥ sarve damayantīsvayaṃvaram | abhijagmur mahīpālā gajāśvarathavāhinaḥ ||",
        translation: "Then hearing of Damayantī's svayaṃvara, all the kings came, the rulers of earth, with elephants, horses, and chariots.",
      },
      {
        number: 29,
        sanskrit: "teṣāṃ vai pūjanaṃ cakre yathārhaṃ vidhinā nṛpaḥ | nyavasanta sukhaṃ tatra rājāno bhīmapalitāḥ ||",
        translation: "The king honored them according to their worth by custom. The kings, protected by Bhīma, dwelt there happily.",
      },
      {
        number: 30,
        sanskrit: "etasminn eva kāle tu surarṣinaradānavāḥ | āsīnāḥ parvatasyāgre meror merugirau tadā ||",
        translation: "At this very time, the gods, sages, men, and demons were seated on the peak of Mount Meru, the golden mountain.",
      }
    ]
  }
]; 