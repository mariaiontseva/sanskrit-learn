interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
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
        sanskrit: "अथ नलोपाख्यानम्",
        transliteration: "atha nalopākhyānam",
        translation: "Now begins the story of Nala",
      },
      {
        number: 2,
        sanskrit: "अस्ति विदर्भेषु भीमो नाम राजा महौजसः | सर्वधर्मभृतां श्रेष्ठो नित्यं सत्यपराक्रमः ||",
        transliteration: "asti vidarbheṣu bhīmo nāma rājā mahaujasaḥ | sarvadharmabhṛtāṃ śreṣṭho nityaṃ satyaparākramaḥ ||",
        translation: "There was in Vidarbha a king named Bhīma of great might, foremost among all righteous men, ever devoted to truth and valor.",
      },
      {
        number: 3,
        sanskrit: "तस्य दमयन्ती नाम कन्या बभूव सुन्दरी | तस्यां जज्ञे महाराज भीमस्य सुतसत्तमा ||",
        transliteration: "tasya damayantī nāma kanyā babhūva sundarī | tasyāṃ jajñe mahārāja bhīmasya sutasattamā ||",
        translation: "He had a beautiful daughter named Damayantī. In her, O great king, was born Bhīma's excellent daughter.",
      },
      {
        number: 4,
        sanskrit: "सा तु नारी सहस्राक्षी श्रीर् इवापररूपिणी | नासीत् सदृशी तस्याः स्त्रियो लोके कथं चन ||",
        transliteration: "sā tu nārī sahasrākṣī śrīr ivāpararūpiṇī | nāsīt sadṛśī tasyāḥ striyo loke kathaṃ cana ||",
        translation: "She was a woman with a thousand eyes, like Śrī in another form. There was no woman like her in the world.",
      },
      {
        number: 5,
        sanskrit: "अथ नैषधम् आख्यानं कथयिष्यामि ते शृणु | यथा स नलो राजासीद् यथा च वरिता वरा ||",
        transliteration: "atha naiṣadham ākhyānaṃ kathayiṣyāmi te śṛṇu | yathā sa nalo rājāsīd yathā ca varitā varā ||",
        translation: "Now I will tell you the story of the king of Niṣadha. Listen how King Nala was and how the bride was chosen.",
      },
      {
        number: 6,
        sanskrit: "विदर्भेषु महाराजो भीमो नाम प्रतापवान् | तस्य पुत्री वरारोहा दमयन्तीति विश्रुता ||",
        transliteration: "vidarbheṣu mahārājo bhīmo nāma pratāpavān | tasya putrī varārohā damayantīti viśrutā ||",
        translation: "In Vidarbha there was a mighty king named Bhīma. His daughter, of beautiful form, was known as Damayantī.",
      },
      {
        number: 7,
        sanskrit: "रूपेणासदृशी तस्या मनुष्येषु न विद्यते | देवकन्यासु वा राजन् सर्वलक्षणसंयुता ||",
        transliteration: "rūpeṇāsadṛśī tasyā manuṣyeṣu na vidyate | devakanyāsu vā rājan sarvalakṣaṇasaṃyutā ||",
        translation: "None among humans or divine maidens could match her beauty, O king. She was endowed with all auspicious marks.",
      },
      {
        number: 8,
        sanskrit: "तस्मै प्रसन्नो दमनः सभार्याय वरं ददौ । कन्यारत्नं कुमारांश् च त्रीन् उदारान् महायशाः ॥",
        transliteration: "tasmai prasanno damanaḥ sabhāryāya varaṃ dadau | kanyāratnaṃ kumārāṃś ca trīn udārān mahāyaśāḥ ||",
        translation: "Pleased with him and his wife, the glorious Damana granted them a boon: a jewel of a daughter and three noble sons.",
      },
      {
        number: 9,
        sanskrit: "दमयन्तीं दमं दान्तं दमनं च सुवर्चसम् । उपपन्नान् गुणैः सर्वैर् भीमान् भीमपराक्रमान् ॥",
        transliteration: "damayantīṃ damaṃ dāntaṃ damanaṃ ca suvarcasam | upapannān guṇaiḥ sarvair bhīmān bhīmaparākramān ||",
        translation: "Damayantī, Dama, Dānta, and the radiant Damana, endowed with all virtues, mighty and of terrible prowess.",
      },
      {
        number: 10,
        sanskrit: "दमयन्ती तु रूपेण तेजसा यशसा श्रिया। सौभाग्येन च लोकेषु यशः प्राप मुमध्यमा ॥",
        transliteration: "damayantī tu rūpeṇa tejasā yaśasā śriyā | saubhāgyena ca lokeṣu yaśaḥ prāpa mumadhyamā ||",
        translation: "But Damayantī, slender-waisted, attained fame in the worlds through her beauty, splendor, glory, prosperity, and good fortune.",
      },
      {
        number: 11,
        sanskrit: "अथ तां वयसि प्राप्ते दासीनां समलंकृतम् । शतं शतं सखीनां च पर्युपासच् छचीम् इव ॥",
        transliteration: "atha tāṃ vayasi prāpte dāsīnāṃ samalaṃkṛtam | śataṃ śataṃ sakhīnāṃ ca paryupāsac chacīm iva ||",
        translation: "Then, when she came of age, a hundred adorned maidservants and a hundred companions attended upon her like Śacī.",
      },
      {
        number: 12,
        sanskrit: "तत्र स्म राजते भैमी सर्वाभरणभूषिता । सखीमध्ये ऽनवद्याङ्की विद्युत सौदामनी यथा ॥",
        transliteration: "tatra sma rājate bhaimī sarvābharaṇabhūṣitā | sakhīmadhye 'navadyāṅkī vidyut saudāmanī yathā ||",
        translation: "There shone Bhīma's daughter, adorned with all ornaments, faultless-limbed among her companions like lightning from a cloud.",
      },
      {
        number: 13,
        sanskrit: "अतीव रूपसंपन्ना श्रीर् इवायतलोचना । न देवेषु न यशोषु ताहग रूपवती के चित् ॥",
        transliteration: "atīva rūpasaṃpannā śrīr ivāyatalocanā | na deveṣu na yakṣeṣu tādṛg rūpavatī kvacit ||",
        translation: "Exceedingly beautiful, with long eyes like Śrī, nowhere among gods or yakṣas was there such a beautiful one.",
      },
      {
        number: 14,
        sanskrit: "मानुषेष्व् अपि चान्येषु दृष्टपूर्वीय वा श्रुता । चित्तप्रमाथिनी बाला देवानाम् अपि सुन्दरी ॥",
        transliteration: "manuṣeṣv api cānyeṣu dṛṣṭapūrvā na vā śrutā | cittapramāthinī bālā devānām api sundarī ||",
        translation: "Nor among other humans had such a one been seen or heard of before. The maiden, beautiful even to the gods, disturbed their minds.",
      },
      {
        number: 15,
        sanskrit: "नलश् च नरशार्दूलो लोकेष्व् अप्रतिमो भुवि । कन्दर्प इव रूपेण मूर्तिमान् अभवत् स्वयम् ॥",
        transliteration: "nalaś ca naraśārdūlo lokeṣv apratimo bhuvi | kandarpa iva rūpeṇa mūrtimān abhavat svayam ||",
        translation: "And Nala, tiger among men, unequalled in the worlds on earth, was like Kandarpa (God of Love) himself embodied in beauty.",
      },
      {
        number: 16,
        sanskrit: "तस्याः समीपे तु नलं प्रशशंसुः कुतूहलात् । नैषधस्य समीपे तु दमयन्तीं पुनः पुनः ॥",
        transliteration: "tasyāḥ samīpe tu nalaṃ praśaśaṃsuḥ kutūhalāt | naiṣadhasya samīpe tu damayantīṃ punaḥ punaḥ ||",
        translation: "In her presence they praised Nala out of curiosity, and in Naiṣadha's presence they praised Damayantī again and again.",
      },
      {
        number: 17,
        sanskrit: "तयोर् अदृष्टकामो ऽभूच कृण्वतोः सततं गुणान् । अन्योन्यं प्रति कौन्तेय स व्यवर्धत हृच्छयः ॥",
        transliteration: "tayor adṛṣṭakāmo 'bhūc kṛṇvatoḥ satataṃ guṇān | anyonyaṃ prati kaunteya sa vyavardhata hṛcchayaḥ ||",
        translation: "Though unseen, love arose between them, O son of Kuntī, as they constantly heard of each other's virtues, and that love grew in their hearts.",
      },
      {
        number: 18,
        sanskrit: "अशक्नुवन् नलः कामं तदा धारयितुं हृदा । अन्तःपुरसमीपस्थे वन आस्ते हो गतः ॥",
        transliteration: "aśaknuvan nalaḥ kāmaṃ tadā dhārayituṃ hṛdā | antaḥpurasamīpasthe vana āste raho gataḥ ||",
        translation: "Unable then to contain his love in his heart, Nala went alone to a garden near the inner apartments.",
      },
      {
        number: 19,
        sanskrit: "स ददर्श ततो हंसाञ् जातरूपपरिष्कृतान् । वने विचरतां तेषाम् एकं जयाह पक्षिणम् ॥",
        transliteration: "sa dadarśa tato haṃsāñ jātarūpapariṣkṛtān | vane vicaratāṃ teṣām ekaṃ jagrāha pakṣiṇam ||",
        translation: "There he saw swans adorned with gold. As they wandered in the garden, he caught one of the birds.",
      },
      {
        number: 20,
        sanskrit: "ततो ऽन्तरिक्षगो वाचं व्याजहार नलं तदा । हन्तव्यो ऽस्मि न ते राजन् करिष्यामि तव प्रियम् ॥",
        transliteration: "tato 'ntarikṣago vācaṃ vyājahāra nalaṃ tadā | hantavyo 'smi na te rājan kariṣyāmi tava priyam ||",
        translation: "Then the sky-going bird spoke to Nala: 'Do not kill me, O king. I will do what pleases you.'",
      },
      {
        number: 21,
        sanskrit: "दमयन्तीसकाशे त्वां कथयिष्यामि नैषध । यथा चद् अन्यं पुरुषं न सा मंस्यति कर्हि चित् ॥",
        transliteration: "damayantīsakāśe tvāṃ kathayiṣyāmi naiṣadha | yathā cad anyaṃ puruṣaṃ na sā maṃsyati karhi cit ||",
        translation: "I will speak of you to Damayantī, O Naiṣadha, so that she will never think of any other man.",
      },
      {
        number: 22,
        sanskrit: "एवम् उक्तम् ततो हंसम् उत्ससर्ज महीपतिः । ते तु हंसाः समुत्पत्य विभीन् अगमं ततः ॥",
        transliteration: "evam uktam tato haṃsam utsasarja mahīpatiḥ | te tu haṃsāḥ samutpatya vidarbhān agamaṃs tataḥ ||",
        translation: "Thus addressed, the king then released the swan. The swans, taking flight, then went to Vidarbha.",
      },
      {
        number: 23,
        sanskrit: "विदर्भनगरीं गत्वा दमयन्यास् तदान्तिके । निपेतुस ते गरुत्मन्तः सा ददर्श च तान् गणान् ॥",
        transliteration: "vidarbhanagarīṃ gatvā damayantyās tadāntike | nipetus te garutmantaḥ sā dadarśa ca tān gaṇān ||",
        translation: "Having gone to the city of Vidarbha, near Damayantī, those winged ones alighted, and she saw that flock.",
      },
      {
        number: 24,
        sanskrit: "सा तान् अद्भुतरूपान् वै दृष्ट्वा सखिगणावृता । हृष्टा यहीतुं खगमांस त्वरमाणोपचक्रमे ॥",
        transliteration: "sā tān adbhutarūpān vai dṛṣṭvā sakhigaṇāvṛtā | hṛṣṭā grahītuṃ khagamāṃs tvaramāṇopacakrame ||",
        translation: "Seeing those wonderfully formed ones, surrounded by her companions, she joyfully hastened to catch the birds.",
      },
      {
        number: 25,
        sanskrit: "अथ हंसा विससृपुः सर्वतः प्रमदावने । एकैकशस् तदा कन्यास् तान् हंसान समुपाद्रवन् ॥",
        transliteration: "atha haṃsā visasṛpuḥ sarvataḥ pramadāvane | ekaikaśas tadā kanyās tān haṃsān samupādravan ||",
        translation: "Then the swans scattered in all directions in the pleasure garden. Then the maidens ran after those swans one by one.",
      },
      {
        number: 26,
        sanskrit: "दमयन्ती तु यं हंसं समुपाधावद अन्तिके । स मानुषीं गिरं कृत्वा दमयन्तीम् अथाब्रवीत् ॥",
        transliteration: "damayantī tu yaṃ haṃsaṃ samupādhāvad antike | sa mānuṣīṃ giraṃ kṛtvā damayantīm athābravīt ||",
        translation: "But the swan that Damayantī ran after nearby, making human speech, then spoke to Damayantī.",
      },
      {
        number: 27,
        sanskrit: "दमयन्ति नलो नाम निषधेषु महीपतिः । अश्विनोः सदृशो रूपे न समास् तस्य मानुषाः ॥",
        transliteration: "damayanti nalo nāma niṣadheṣu mahīpatiḥ | aśvinoḥ sadṛśo rūpe na samās tasya mānuṣāḥ ||",
        translation: "Damayantī, there is a king named Nala in Niṣadha, equal to the Aśvins in beauty. No humans are equal to him.",
      },
      {
        number: 28,
        sanskrit: "तस्य वै यदि भायी त्वं भवेथा वरवर्णिनि । सफलं ते भवेज जन्म रूपं चेदं सुमध्यमे ॥",
        transliteration: "tasya vai yadi bhāryā tvaṃ bhavethā ravavarṇini | saphalaṃ te bhavej janma rūpaṃ cedaṃ sumadhyame ||",
        translation: "If you were to become his wife, O fair one, your birth and this beauty would bear fruit, O slender-waisted one.",
      },
      {
        number: 29,
        sanskrit: "वयं हि देवगन्धर्वमानुषोगराक्षसान् । दृष्टवन्तो न चास्माभिर् दृष्टपूर्वस् तथाविधः ॥",
        transliteration: "vayaṃ hi devagandharvamanauṣoragarākṣasān | dṛṣṭavanto na cāsmābhir dṛṣṭapūrvas tathāvidhaḥ ||",
        translation: "For we have seen gods, gandharvas, men, nāgas, and rākṣasas, but never have we seen one such as he.",
      },
      {
        number: 30,
        sanskrit: "त्वं चापि रत्नं नारीणां नरेषु च नलो वरः । विशिष्टाया विशिष्टेन संगमो गुणवान् भवेत् ॥",
        transliteration: "tvaṃ cāpi ratnaṃ nārīṇāṃ nareṣu ca nalo varaḥ | viśiṣṭāyā viśiṣṭena saṃgamo guṇavān bhavet ||",
        translation: "And you are a jewel among women, and Nala is the best among men. The union of an excellent woman with an excellent man would be virtuous.",
      },
      {
        number: 31,
        sanskrit: "एवम् उक्ता तु हंसेन दमयन्ती विशां पते | अब्रवीत् तत्र तं हंसं त्वम् अप्य् एवं नले वद ||",
        transliteration: "evam uktā tu haṃsena damayantī viśāṃ pate | abravīt tatra taṃ haṃsaṃ tvam apy evaṃ nale vada ||",
        translation: "Thus addressed by the swan, Damayantī, O lord of men, spoke to the swan there: 'You also speak thus to Nala.'",
      },
      {
        number: 32,
        sanskrit: "तथेत्य् उक्त्वाण्डजः कन्यां विदर्भस्य विशां पते | पुनर् आगम्य निषधान् नले सर्वं न्यवेदयत् ||",
        transliteration: "tathety uktvāṇḍajaḥ kanyāṃ vidarbhasya viśāṃ pate | punar āgamya niṣadhān nale sarvaṃ nyavedayat ||",
        translation: "Having said 'So be it' to the daughter of Vidarbha, O lord of men, the winged one returned to Niṣadha and reported everything to Nala.",
      },
      {
        number: 33,
        sanskrit: "॥ इति नलोपाख्याने प्रथमः सर्गः ॥",
        transliteration: "|| iti nalopākhyāne prathamaḥ sargaḥ ||",
        translation: "Thus ends the first chapter of the story of Nala.",
      }
    ]
  },
  {
    number: 2,
    title: "The Gods' Journey",
    verses: [
      {
        number: 1,
        sanskrit: "तत्र शक्रमुखा देवा समाजग्मुर् महौजसः | माहेन्द्रस्य सभां दिव्यां विश्वकर्मकृतां शुभाम् ||",
        transliteration: "tatra śakramukhā devā samājagmur mahaujasaḥ | māhendrasya sabhāṃ divyāṃ viśvakarmakṛtāṃ śubhām ||",
        translation: "There the mighty gods, led by Śakra (Indra), came to the divine assembly hall of Mahendra (Indra), beautifully made by Viśvakarman.",
      },
      {
        number: 2,
        sanskrit: "तत्र देवर्षयः सर्वे गन्धर्वाप्सरसस् तथा | उपासां चक्रिरे देवान् सुखासीनान् यथासुखम् ||",
        transliteration: "tatra devarṣayaḥ sarve gandharvāpsarasas tathā | upāsāṃ cakrire devān sukhāsīnān yathāsukham ||",
        translation: "There all the divine sages, gandharvas, and apsaras attended upon the gods who were seated comfortably at ease.",
      },
      {
        number: 3,
        sanskrit: "तत्र राजा नलो नाम वीरसेनसुतो बली | उपतस्थे सभां दिव्यां तेजसा सूर्यवर्चसः ||",
        transliteration: "tatra rājā nalo nāma vīrasenasuto balī | upatasthe sabhāṃ divyāṃ tejasā sūryavarcasaḥ ||",
        translation: "There King Nala by name, son of Vīrasena, mighty, approached the divine assembly, radiant with the splendor of the sun.",
      },
      {
        number: 4,
        sanskrit: "तं दृष्ट्वा देवताः सर्वा समेत्य च परस्परम् | ऊचुर् विस्मयमापन्ना किम् अयं मानुषो ऽत्र हि ||",
        transliteration: "taṃ dṛṣṭvā devatāḥ sarvā sametya ca parasparam | ūcur vismayam āpannā kim ayaṃ mānuṣo 'tra hi ||",
        translation: "Seeing him, all the deities, coming together with one another, spoke in amazement: 'What is this human doing here?'",
      },
      {
        number: 5,
        sanskrit: "ततो ऽब्रवीन् महाराज नलं शक्रः शचीपतिः | भवान् अस्माकं दूतो वै गच्छ दमयन्तीम् इति ||",
        transliteration: "tato 'bravīn mahārāja nalaṃ śakraḥ śacīpatiḥ | bhavān asmākaṃ dūto vai gaccha damayantīm iti ||",
        translation: "Then Śakra, lord of Śacī, O great king, spoke to Nala: 'Be our messenger indeed, go to Damayantī.'",
      }
    ]
  },
  {
    number: 3,
    title: "Nala's Mission",
    verses: [
      {
        number: 1,
        sanskrit: "ततः प्रणम्य देवेन्द्रं नलो वाक्यम् उवाच ह | करिष्यामि तथेत्य् उक्त्वा कथं ज्ञास्यामि तां अहम् ||",
        transliteration: "tataḥ praṇamya devendraṃ nalo vākyam uvāca ha | kariṣyāmi tathety uktvā kathaṃ jñāsyāmi tāṃ aham ||",
        translation: "Then, bowing to the lord of gods, Nala spoke these words: 'I will do so,' he said, 'but how shall I recognize her?'",
      },
      {
        number: 2,
        sanskrit: "ततो ऽब्रवीन् माहेन्द्रो ऽपि शृणु तावद् यथा तथा | विदर्भनगरे रम्ये भीमस्य सदने शुभे ||",
        transliteration: "tato 'bravīn māhendro 'pi śṛṇu tāvad yathā tathā | vidarbhanagare ramye bhīmasya sadane śubhe ||",
        translation: "Then Mahendra (Indra) also spoke: 'Listen now how it is. In the delightful city of Vidarbha, in Bhīma's beautiful palace...'",
      },
      {
        number: 3,
        sanskrit: "दमयन्ती तु तत्रैव निवसत्य् अमरप्रभा | तां दृष्ट्वा त्वं न शङ्केथाः सा हि त्वां वरयिष्यति ||",
        transliteration: "damayantī tu tatraiva nivasaty amaraprabhā | tāṃ dṛṣṭvā tvaṃ na śaṅkethāḥ sā hi tvāṃ varayiṣyati ||",
        translation: "Damayantī indeed dwells there, radiant as an immortal. Having seen her, you should have no doubt, for she will choose you.",
      },
      {
        number: 4,
        sanskrit: "ततः स गत्वा विदर्भान् दमयन्तीम् उवाच ह | शृणु वैदर्भि वक्ष्यामि देवानां वचनानि ते ||",
        transliteration: "tataḥ sa gatvā vidarbhān damayantīm uvāca ha | śṛṇu vaidarbhi vakṣyāmi devānāṃ vacanāni te ||",
        translation: "Then, having gone to Vidarbha, he spoke to Damayantī: 'Listen, O princess of Vidarbha, I will tell you the words of the gods.'",
      },
      {
        number: 5,
        sanskrit: "देवदूतो ऽहम् आयातो नलो नाम महीपतिः | देवास् त्वां वरयिष्यन्ति तेषाम् एकं वृणीष्व ह ||",
        transliteration: "devadūto 'ham āyāto nalo nāma mahīpatiḥ | devās tvāṃ varayiṣyanti teṣām ekaṃ vṛṇīṣva ha ||",
        translation: "I have come as a messenger of the gods, I am King Nala by name. The gods desire you; choose one of them.",
      }
    ]
  },
  {
    number: 4,
    title: "Damayantī's Response",
    verses: [
      {
        number: 1,
        sanskrit: "श्रुत्वा तु वचनं तस्य दमयन्ती शुचिस्मिता | प्रत्युवाच ततो नलं सर्वदेवान् नमाम्य् अहम् ||",
        transliteration: "śrutvā tu vacanaṃ tasya damayantī śucismitā | pratyuvāca tato nalaṃ sarvadevān namāmy aham ||",
        translation: "Having heard his words, Damayantī with a pure smile then replied to Nala: 'I bow to all the gods.'",
      },
      {
        number: 2,
        sanskrit: "यथा त्वं मे वृतो राजन् मनसा तद् ब्रवीमि ते | त्वयि मे निहिता बुद्धिर् एष मे निश्चयो ध्रुवम् ||",
        transliteration: "yathā tvaṃ me vṛto rājan manasā tad bravīmi te | tvayi me nihitā buddhir eṣa me niścayo dhruvam ||",
        translation: "As I have chosen you in my mind, O king, I tell you this. My mind is set on you; this is my firm resolve.",
      },
      {
        number: 3,
        sanskrit: "स्वयंवरे हि यत् तत्र मया वक्तव्यम् उत्तमम् | तत् ते वक्ष्यामि राजेन्द्र सत्यम् एतद् ब्रवीमि ते ||",
        transliteration: "svayaṃvare hi yat tatra mayā vaktavyam uttamam | tat te vakṣyāmi rājendra satyam etad bravīmi te ||",
        translation: "What I must say there at the svayaṃvara, that I will tell you, O lord of kings. This I tell you truly.",
      },
      {
        number: 4,
        sanskrit: "एवं तु वदतस् सर्वां रात्रिं नैषधम् अन्तिके | दमयन्ती ततो भूयो वाक्यम् एतद् उवाच ह ||",
        transliteration: "evaṃ tu vadata sarvāṃ rātriṃ naiṣadham antike | damayantī tato bhūyo vākyam etad uvāca ha ||",
        translation: "Thus speaking through the whole night near the Naiṣadha (Nala), Damayantī then spoke these words again.",
      },
      {
        number: 5,
        sanskrit: "यदि मां त्वं महाराज भार्यार्थम् अभिकाङ्क्षसे | प्रतिजानीहि मे सत्यं यथा वक्ष्यामि ते तथा ||",
        transliteration: "yadi māṃ tvaṃ mahārāja bhāryārtham abhikāṅkṣase | pratijānīhi me satyaṃ yathā vakṣyāmi te tathā ||",
        translation: "If you, O great king, desire me as your wife, promise me truly that you will do as I say.",
      }
    ]
  }
]; 