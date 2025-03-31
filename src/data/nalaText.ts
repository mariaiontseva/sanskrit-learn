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
        sanskrit: "आसीद् राजा नलो नाम वीरसेनसुतो बली | उपपन्नो गुणैर् इष्टै रूपवान् अश्वकोविदः ||",
        transliteration: "āsīd rājā nalo nāma vīrasenasuto balī | upapanno guṇair iṣṭair rūpavān aśvakovidaḥ ||",
        translation: "There was a king named Nala, son of Vīrasena, mighty, endowed with desired virtues, handsome, and skilled with horses.",
      },
      {
        number: 2,
        sanskrit: "अतिष्ठन् मनुजेन्द्राणां मूर्ध्नि देवपतिर् यथा | उपर्य् उपरि सर्वेषाम् आदित्य इव तेजसा ||",
        transliteration: "atiṣṭhan manujendrāṇāṃ mūrdhni devapatir yathā | uparyupari sarveṣāṃ āditya iva tejasā ||",
        translation: "He stood above all kings like the lord of gods, above all others like the sun in splendor.",
      },
      {
        number: 3,
        sanskrit: "ब्रह्मण्यो वेदविच् छूरो निषधेषु महीपतिः | अक्षप्रियः सत्यवादी महान् अक्षौहिणीपतिः ||",
        transliteration: "brahmaṇyo vedavic chūro niṣadheṣu mahīpatiḥ | akṣapriyaḥ satyavādī mahān akṣauhiṇīpatiḥ ||",
        translation: "Devoted to Brahmins, versed in the Vedas, heroic, ruler of the Niṣadhas, fond of dice, truthful, great commander of armies.",
      },
      {
        number: 4,
        sanskrit: "ईप्सितो नरनारीणाम् उदारः संयतेन्द्रियः | रक्षिता धन्विनां श्रेष्ठः साक्षाद् इव मनुः स्वयम् ||",
        transliteration: "īpsito naranārīṇām udāraḥ saṃyatendriyaḥ | rakṣitā dhanvināṃ śreṣṭho sākṣād iva manuḥ svayam ||",
        translation: "Desired by men and women, generous, self-controlled, protector, best of archers, like Manu himself.",
      },
      {
        number: 5,
        sanskrit: "तथैवासीद् विदर्भेषु भीमो भीमपराक्रमः | शूरः सर्वगुणैर् युक्तः प्रजाकामः स चाप्रजः ||",
        transliteration: "tathaivāsīd vidarbheṣu bhīmo bhīmaparākramaḥ | śūraḥ sarvaguṇair yuktaḥ prajākāmaḥ sa cāprajaḥ ||",
        translation: "Likewise in Vidarbha was Bhīma of mighty valor, brave, endowed with all virtues, desiring offspring but childless.",
      },
      {
        number: 6,
        sanskrit: "स प्रजार्थे परं यत्नम् अकरोत् सुसमाहितः | तम् अभ्यगच्छद् ब्रह्मर्षिर् दमनो नाम भारत ||",
        transliteration: "sa prajārthe paraṃ yatnam akarot susamāhitaḥ | tam abhyagacchad brahmarṣir damano nāma bhārata ||",
        translation: "He made the greatest effort for offspring, with full concentration. To him came the Brahmarṣi named Damana, O Bhārata.",
      },
      {
        number: 7,
        sanskrit: "तं स भीमः प्रजाकामम् तोषयामास धर्मवित् | महिष्या सह राजेन्द्र सत्कारेण सुवर्चसम् ||",
        transliteration: "taṃ sa bhīmaḥ prajākāmam toṣayāmāsa dharmavit | mahiṣyā saha rājendra satkāreṇa suvarcasam ||",
        translation: "Bhīma, knowing dharma, pleased him with his queen, O lord of kings, with proper hospitality.",
      },
      {
        number: 8,
        sanskrit: "तस्मै प्रसन्नो दमनः सभार्याय वरं ददौ | कन्यारत्नं कुमारांश् च त्रीन् उदारान् महायशाः ||",
        transliteration: "tasmai prasanno damanaḥ sabhāryāya varaṃ dadau | kanyāratnaṃ kumārāṃś ca trīn udārān mahāyaśāḥ ||",
        translation: "Pleased with him, Damana gave to him and his wife a boon - a jewel of a daughter and three noble sons of great fame.",
      },
      {
        number: 9,
        sanskrit: "दमयन्तीं दमं दान्तं दमनं च सुवर्चसम् | उपपन्नान् गुणैः सर्वैर् भीमान् भीमपराक्रमान् ||",
        transliteration: "damayantīṃ damaṃ dāntaṃ damanaṃ ca suvarcasam | upapannān guṇaiḥ sarvair bhīmān bhīmaparākramān ||",
        translation: "Damayantī, Dama, Dānta, and Damana, all endowed with all virtues, mighty and of mighty valor.",
      },
      {
        number: 10,
        sanskrit: "दमयन्ती तु रूपेण तेजसा यशसा श्रिया | सौभाग्येन च लोकेषु यशः प्राप मुमध्यमा ||",
        transliteration: "damayantī tu rūpeṇa tejasā yaśasā śriyā | saubhāgyena ca lokeṣu yaśaḥ prāpa sumadhyamā ||",
        translation: "Damayantī, with her slender waist, attained fame in the worlds through her beauty, splendor, glory, and good fortune.",
      },
      {
        number: 11,
        sanskrit: "अथ तां वयसि प्राप्ते दासीनां समलंकृतम् | शतं शतं सखीनां च पर्युपासच् छचीम् इव ||",
        transliteration: "atha tāṃ vayasi prāpte dāsīnāṃ samalaṃkṛtam | śataṃ śataṃ sakhīnāṃ ca paryupāsac chacīm iva ||",
        translation: "Then, when she reached youth, attended by hundreds of maidservants and hundreds of friends, like Śacī herself.",
      },
      {
        number: 12,
        sanskrit: "तत्र स्म राजते भैमी सर्वाभरणभूषिता | सखीमध्ये ऽनवद्याङ्की विद्युत सौदामनी यथा ||",
        transliteration: "tatra sma rājate bhaimī sarvābharaṇabhūṣitā | sakhīmadhye 'navadyāṅkī vidyut saudāmanī yathā ||",
        translation: "There shone the daughter of Bhīma, adorned with all ornaments, flawless among her friends, like lightning in the clouds.",
      },
      {
        number: 13,
        sanskrit: "अतीव रूपसंपन्ना श्रीर् इवायतलोचना | न देवेषु न यशोषु ताहग रूपवती के चित् ||",
        transliteration: "atīva rūpasaṃpannā śrīr ivāyatalocanā | na deveṣu na yakṣeṣu tādṛśī rūpavatī kā cit ||",
        translation: "Endowed with great beauty, with long eyes like Śrī herself, no one among gods or Yakṣas was as beautiful as she.",
      },
      {
        number: 14,
        sanskrit: "मानुषेष्व् अपि चान्येषु दृष्टपूर्वीय वा श्रुता | चित्तप्रमाथिनी बाला देवानाम् अपि सुन्दरी ||",
        transliteration: "mānuṣeṣv api cānyeṣu dṛṣṭapūrvī vā śrutā | cittapramāthinī bālā devānām api sundarī ||",
        translation: "Among other humans too, never seen or heard of before, the young girl who bewildered the mind was beautiful even to the gods.",
      },
      {
        number: 15,
        sanskrit: "नलश् च नरशार्दूलो लोकेष्व् अप्रतिमो भुवि | कन्दर्प इव रूपेण मूर्तिमान् अभवत् स्वयम् ||",
        transliteration: "nalaś ca naraśārdūlo lokeṣv apratimo bhuvi | kandarpa iva rūpeṇa mūrtimān abhavat svayam ||",
        translation: "And Nala, tiger among men, unmatched in the worlds on earth, was like Kandarpa himself incarnate in beauty.",
      },
      {
        number: 16,
        sanskrit: "तस्याः समीपे तु नलं प्रशशंसुः कुतूहलात् | नैषधस्य समीपे तु दमयन्तीं पुनः पुनः ||",
        transliteration: "tasyāḥ samīpe tu nalaṃ praśaśaṃsuḥ kutūhalāt | naiṣadhasya samīpe tu damayantīṃ punaḥ punaḥ ||",
        translation: "Out of curiosity, they praised Nala in Damayantī's presence, and Damayantī repeatedly in Nala's presence.",
      },
      {
        number: 17,
        sanskrit: "तयोर् अदृष्टकामो ऽभूच कृण्वतोः सततं गुणान् | अन्योन्यं प्रति कौन्तेय स व्यवर्धत हृच्छयः ||",
        transliteration: "tayor adṛṣṭakāmo 'bhūc kṛṇvatoḥ satataṃ guṇān | anyonyaṃ prati kaunteya sa vyavardhata hṛcchayaḥ ||",
        translation: "Their love grew without seeing each other, O Kaunteya, as they constantly praised each other's virtues.",
      },
      {
        number: 18,
        sanskrit: "अशक्नुवन् नलः कामं तदा धारयितुं हृदा | अन्तःपुरसमीपस्थे वन आस्ते हो गतः ||",
        transliteration: "aśaknuvan nalaḥ kāmaṃ tadā dhārayituṃ hṛdā | antaḥpurasamīpastho vane āste ho gataḥ ||",
        translation: "Unable to contain his love in his heart, Nala went to the forest near the women's quarters.",
      },
      {
        number: 19,
        sanskrit: "स ददर्श ततो हंसाञ् जातरूपपरिष्कृतान् | वने विचरतां तेषाम् एकं जयाह पक्षिणम् ||",
        transliteration: "sa dadarśa tato haṃsāñ jātarūpapariṣkṛtān | vane vicaratāṃ teṣām ekaṃ jayāha pakṣiṇam ||",
        translation: "There he saw golden swans wandering in the forest, and caught one of those birds.",
      },
      {
        number: 20,
        sanskrit: "ततो ऽन्तरिक्षगो वाचं व्याजहार नलं तदा | हन्तव्यो ऽस्मि न ते राजन् करिष्यामि तव प्रियम् ||",
        transliteration: "tato 'ntarikṣago vācaṃ vyājahāra nalaṃ tadā | hantavyo 'smi na te rājan kariṣyāmi tava priyam ||",
        translation: "Then the sky-going bird spoke to Nala: 'O king, do not kill me, I will do you a favor.",
      },
      {
        number: 21,
        sanskrit: "दमयन्तीसकाशे त्वां कथयिष्यामि नैषध | यथा चद् अन्यं पुरुषं न सा मंस्यति कर्हि चित् ||",
        transliteration: "damayantīsakāśe tvāṃ kathayiṣyāmi naiṣadha | yathā cad anyaṃ puruṣaṃ na sā maṃsyati karhi cit ||",
        translation: "I will speak of you to Damayantī, O Naiṣadha, so that she will never think of any other man.",
      },
      {
        number: 22,
        sanskrit: "एवम् उक्तम् ततो हंसम् उत्ससर्ज महीपतिः | ते तु हंसाः समुत्पत्य विभीन् अगमं ततः ||",
        transliteration: "evam uktam tato haṃsam utsasarja mahīpatiḥ | te tu haṃsāḥ samutpatya vibhīn agamaṃ tataḥ ||",
        translation: "Having said this, the king released the swan. Then those swans, taking flight, went to Vidarbha.",
      },
      {
        number: 23,
        sanskrit: "विदर्भनगरीं गत्वा दमयन्यास् तदान्तिके | निपेतुस ते गरुत्मन्तः सा ददर्श च तान् गणान् ||",
        transliteration: "vidarbhanagarīṃ gatvā damayantyās tadāntike | nipetus te garutmantaḥ sā dadarśa ca tān gaṇān ||",
        translation: "Going to the city of Vidarbha, near Damayantī, those winged ones alighted. She saw those flocks.",
      },
      {
        number: 24,
        sanskrit: "सा तान् अद्भुतरूपान् वै दृष्ट्वा सखिगणावृता | हृष्टा यहीतुं खगमांस त्वरमाणोपचक्रमे ||",
        transliteration: "sā tān adbhutarūpān vai dṛṣṭvā sakhigaṇāvṛtā | hṛṣṭā yahītuṃ khagamāṃs tvaramāṇopacakrame ||",
        translation: "Seeing those wondrous forms, surrounded by her friends, she joyfully began to catch those birds.",
      },
      {
        number: 25,
        sanskrit: "अथ हंसा विससृपुः सर्वतः प्रमदावने | एकैकशस् तदा कन्यास् तान् हंसान समुपाद्रवन् ||",
        transliteration: "atha haṃsā visasṛpuḥ sarvataḥ pramadāvane | ekaikaśas tadā kanyās tān haṃsān samupādravan ||",
        translation: "Then the swans scattered in all directions in the pleasure-grove. Then the girls ran after those swans one by one.",
      },
      {
        number: 26,
        sanskrit: "दमयन्ती तु यं हंसं समुपाधावद अन्तिके | स मानुषीं गिरं कृत्वा दमयन्तीम् अथाब्रवीत् ||",
        transliteration: "damayantī tu yaṃ haṃsaṃ samupādhāvad antike | sa mānuṣīṃ giraṃ kṛtvā damayantīm athābravīt ||",
        translation: "The swan that Damayantī chased nearby, taking human speech, then said to Damayantī.",
      },
      {
        number: 27,
        sanskrit: "दमयन्ति नलो नाम निषधेषु महीपतिः | अश्विनोः सदृशो रूपे न समास् तस्य मानुषाः ||",
        transliteration: "damayanti nalo nāma niṣadheṣu mahīpatiḥ | aśvinoḥ sadṛśo rūpe na samās tasya mānuṣāḥ ||",
        translation: "O Damayantī, there is a king named Nala in the Niṣadhas, like the Aśvins in beauty, no humans are equal to him.",
      },
      {
        number: 28,
        sanskrit: "तस्य वै यदि भायी त्वं भवेथा वरवर्णिनि | सफलं ते भवेज जन्म रूपं चेदं सुमध्यमे ||",
        transliteration: "tasya vai yadi bhāryā tvaṃ bhavethā varavarṇini | saphalam te bhavej janma rūpaṃ cedam sumadhyame ||",
        translation: "If you become his wife, O fair-complexioned one, your birth would be fruitful, O slender-waisted one.",
      },
      {
        number: 29,
        sanskrit: "वयं हि देवगन्धर्वमानुषोगराक्षसान् | दृष्टवन्तो न चास्माभिर् दृष्टपूर्वस् तथाविधः ||",
        transliteration: "vayaṃ hi devagandharvamānuṣoragarakṣasān | dṛṣṭavanto na cāsmābhir dṛṣṭapūrvas tathāvidhaḥ ||",
        translation: "We have seen gods, Gandharvas, humans, and Rākṣasas, but never before have we seen one like him.",
      },
      {
        number: 30,
        sanskrit: "त्वं चापि रत्नं नारीणां नरेषु च नलो वरः | विशिष्टाया विशिष्टेन संगमो गुणवान् भवेत् ||",
        transliteration: "tvaṃ cāpi ratnaṃ nārīṇāṃ nareṣu ca nalo varaḥ | viśiṣṭāyā viśiṣṭena saṃgamo guṇavān bhavet ||",
        translation: "You are a jewel among women, and Nala is the best among men. The union of the distinguished with the distinguished would be virtuous.",
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