'use client'; // Necesario para usar el buscador en tiempo real

import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import Module, { type Lesson } from "../components/Module";
import VideoModal from "../components/VideoModal";
import Carousel from "../components/Carousel";
import BookBanner from "../components/BookBanner";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const modulo_a1 = [
    { titleQuechua: "1. Bibliaqa Diospa Simin kasqanmanta hinaspa Trinidadmanta", titleSpanish: "La Biblia es palabra de Dios y la Trinidad", youtubeId: "RtzqdZMBxVE", startTime: 60 },
    { titleQuechua: "2. Jesuspa Dios kasqanmanta hinaspa rurayninkunamanta", titleSpanish: "La deidad de Jesús y la misión de Jesús", youtubeId: "_UCjeqdLLEA", startTime: 60 },
    { titleQuechua: "3. Salvacionmanta, hanaq pachamanta, infiernomanta hinaspa Jesuspa kutimunanmanta", titleSpanish: "Salvación por la gracia mediante la fe, el Cielo y el Infierno", youtubeId: "vrI3_XxqRKI", startTime: 60 },
    { titleQuechua: "4. Chuya Espiritupa Dios kasqanmantawan rurayninkunamanta", titleSpanish: "La persona y obra del Espíritu Santo", youtubeId: "JO01BHtERsQ", startTime: 60 },
    { titleQuechua: "5. Diospa hanpikuyninmanta", titleSpanish: "La sanidad divina", youtubeId: "mjKD6ciA8xQ", startTime: 60 },
    { titleQuechua: "6. Iglesia rurananpaq kamachikuykunamanta", titleSpanish: "Las ordenanzas de la Iglesia", youtubeId: "VEr1Y_b9Ouw", startTime: 60 }
  ];

  const modulo_a2 = [
    { titleQuechua: "7. Chuya Espíritumanta", titleSpanish: "El Espíritu Santo", youtubeId: "ds3QD1k8o78", startTime: 60 },
    { titleQuechua: "8. Chuya Espiritupa Donninkunamanta", titleSpanish: "Los dones del Espíritu Santo", youtubeId: "tar6hxLbDAU", startTime: 60 },
    { titleQuechua: "9. Simiwan rimanapaq kaq donkunamanta", titleSpanish: "Los dones vocales del Espíritu Santo", youtubeId: "dhX84oQKbxo", startTime: 60 },
    { titleQuechua: "10. Revelacionkuna chaskinapaq donkunamanta", titleSpanish: "Los dones de revelación", youtubeId: "ss-E9NpgXUo", startTime: 60 },
    { titleQuechua: "11. Atiyninwan rimanapaq kaq donkunamanta", titleSpanish: "Los dones de poder del Espíritu Santo", youtubeId: "bO6Mxv7uQWA", startTime: 60 },
    { titleQuechua: "12. Unquqkunata sanoyachinapaq kaq donkunamanta", titleSpanish: "Los dones de sanidad", youtubeId: "-vX3eOQqhY0", startTime: 60 },
    { titleQuechua: "13. Hatun kamachikuymantawan hunquqkuna sanoyachinamanta", titleSpanish: "La gran comisión y la sanidad", youtubeId: "1pWOrEUrQdc", startTime: 60 },
    { titleQuechua: "14. Diospa Atiyninwan unquqkunata sanoyachinamanta", titleSpanish: "El poder de Dios para dar sanidad", youtubeId: "W03EY3520gg", startTime: 60 },
    { titleQuechua: "15. Atiywan rimaspa unquqkunata sanoyachinamanta", titleSpanish: "Hablar palabras de sanidad", youtubeId: "yYVdPCjzeC8", startTime: 60 },
    { titleQuechua: "16. Makita churanamanta", titleSpanish: "Impartición por la imposición de manos", youtubeId: "N_0pR9lPucU", startTime: 60 }
  ];

  const modulo_a3 = [
    { titleQuechua: "17. Musuq Testamentomanta", titleSpanish: "Introducción al Nuevo Testamento", youtubeId: "q2JIBD1d5cg", startTime: 60 },
    { titleQuechua: "18. Mateo, Marcos, Lucas: Jesusmanta imam willakusqankumanta", titleSpanish: "Mateo, Marcos, Lucas: tres retratos de Jesucristo", youtubeId: "eAbeo0rDdBo", startTime: 60 },
    { titleQuechua: "19. Juan: Jesucristomanta imam willakusqanmanta", titleSpanish: "Juan: El cuarto retrato de Jesucristo", youtubeId: "z_DPWWu-auQ", startTime: 60 },
    { titleQuechua: "20. Hechos: Evangelio willakusqankupa wiñarisqanmanta", titleSpanish: "Hechos: La expansión del Evangelio", youtubeId: "4OdWIRt4sbc", startTime: 60 },
    { titleQuechua: "21. Romanos: Evangelioqa Diospa kuyakuynin kasqanmanta", titleSpanish: "Romanos: Carta de Pablo acerca del Evangelio de la gracia", youtubeId: "No-Dp3xVfnU", startTime: 60 },
    { titleQuechua: "22. 1, 2 Corintios; Gálatas: Evangelioman hina kawsanamanta", titleSpanish: "Primera y Segunda de Corintios, Gálatas: Cartas de Pablo de la vida del Evangelio de la gracia", youtubeId: "5T-fJAtrO1w", startTime: 60 },
    { titleQuechua: "23. Efesios, Filipenses, Colosenses hinaspa Filemón: Pablo carcelpi kachkaspan iglesiakunaman cartakuna apachisqanmanta", titleSpanish: "Ef., Filipenses, Colosenses y Filemón: Cartas de Pablo desde la prisión", youtubeId: "xI0wDy40yIw", startTime: 60 },
    { titleQuechua: "24. 1, 2 Tesalonisenses; 1, 2 Timoteo; Tito: Pastorkunaman Pablopa Cartankuna apachisqanmanta", titleSpanish: "Primera y Segunda de Timoteo y Tito: Las cartas de Pablo a los líderes", youtubeId: "PSzP3MbHr4k", startTime: 60 },
    { titleQuechua: "25. Hebreos; Santiago; 1, 2 Pedro; 1, 2, 3 Juan, Judas: Iñiqkunaman qillqasqa cartakunamanta", titleSpanish: "De Hebreos a Judas: Las cartas generales de los creyentes", youtubeId: "pv_95xW2bUw", startTime: 60 },
    { titleQuechua: "26. Apocalipsis: Tukuy imapa tukupayninmanta", titleSpanish: "El Apocalipsis: La consumación de todas las cosas", youtubeId: "4WFd2aciI98", startTime: 60 }
  ];

  const modulo_a4 = [
    { titleQuechua: "27. Imanasqa hinaspa imaynatam Diosta yupaychanamanta", titleSpanish: "La prioridad, el propósito, y representación de la adoración", youtubeId: "MjUAKZ2aL8c", startTime: 60 },
    { titleQuechua: "28. Diospa reinonpi música imapaqmi kasqanmanta", titleSpanish: "El papel de la música en el reino de Dios", youtubeId: "HYui81Uxzpw", startTime: 60 },
    { titleQuechua: "29. Musuq takikunamanta", titleSpanish: "La importancia del cántico nuevo", youtubeId: "SgPH1HVKe-Y", startTime: 60 },
    { titleQuechua: "30. Yupaychaqkunapa rurayninkunamanta", titleSpanish: "Nuestra responsabilidad como adoradores", youtubeId: "YvMfRxBQ4BQ", startTime: 60 },
    { titleQuechua: "31. Diosta yupaychaqkuna kananchikmanta", titleSpanish: "Cómo hacerse adorador", youtubeId: "6hYQUHcqlpc", startTime: 60 }
  ];

  const modulo_b1 = [
    { titleQuechua: "32. Imapaqmi mañakuy kasqanmanta", titleSpanish: "Su triple potencial", youtubeId: "tBIgw7WNKpE", startTime: 60 },
    { titleQuechua: "33. ¿Imataq mañakuy utaq oración?", titleSpanish: "¿Qué es la oración?", youtubeId: "dF0eGZozU2s", startTime: 60 },
    { titleQuechua: "34. Imaynatam mañakunanchikmanta Punta kaq yachachikuy", titleSpanish: "La práctica de la oración, 1ra parte", youtubeId: "EEIIxv47ycw", startTime: 60 },
    { titleQuechua: "35. Imayntam mañakunanchikmanta Iskay kaq yachachikuy", titleSpanish: "La práctica de la oración, 2da parte", youtubeId: "FuVQuAWHwtE", startTime: 60 },
    { titleQuechua: "36. Imapaqmi mañakunanchikmanta", titleSpanish: "El propósito de la oración", youtubeId: "EhgUdMzHPgk", startTime: 60 }
  ];

  const modulo_b2 = [
    { titleQuechua: "37. Iglesiapi yanapakunanchikmanta", titleSpanish: "El viaje de un siervo", youtubeId: "mbFLPfWrFu0", startTime: 60 },
    { titleQuechua: "38. Diosqa churinkunata sirvikunankupaq qayasqanmanta", titleSpanish: "Dios usa estrellas y velas", youtubeId: "TYN7RH3LHNQ", startTime: 60 },
    { titleQuechua: "39. Iglesia allin organizasqa kaptinqa aswan allin yanapakuyqa kasqanmanta Punta kaq yachachikuy", titleSpanish: "No temáis al liderazgo, a la organización o a la estructura, 1ra parte", youtubeId: "75rpI9Dlssg", startTime: 60 },
    { titleQuechua: "40. Iglesia allin organizasqa kaptinqa aswan allin yanapakuyqa kasqanmanta Iskay kaq yachachikuy", titleSpanish: "No temáis al liderazgo, a la organización o a la estructura, 2da parte", youtubeId: "yYVdPCjzeC8", startTime: 60 },
    { titleQuechua: "41. Yanapakuqkunapa iglesiapi llamkayninmanta", titleSpanish: "Llegando a ser un siervo de fuego", youtubeId: "t057r009Qig", startTime: 60 }
  ];

  const modulo_b3 = [
    { titleQuechua: "42. Ñawpaq Testamentomanta", titleSpanish: "Abordando el Antiguo Testamento", youtubeId: "ahImdzm_vDQ", startTime: 60 },
    { titleQuechua: "43. Bibliapi librokuna imayna patachasqam kasqanmanta hinaspa Dios tukuy imata unanchasqanmanta", titleSpanish: "El orden de los libros y la creación", youtubeId: "uhEQrdz5gt4", startTime: 60 },
    { titleQuechua: "44. Runaqa Diosman richakuq kasqanmantawan huchaman wichisqanmanta", titleSpanish: "La imagen de Dios y la caída", youtubeId: "pGvJn1nqJSA", startTime: 60 },
    { titleQuechua: "45. Abrahanmanta, Babelmanta hinaspa Dios runawan contrato rurasqanmanta", titleSpanish: "Babel y Abraham, conceptos de pacto", youtubeId: "ccsIfbAwZaY", startTime: 60 },
    { titleQuechua: "46. Abrahanmanta, Israelmanta, Josemanta hinaspa Moisesmanta", titleSpanish: "Abraham, Israel, José, Moisés", youtubeId: "6b5IrE0YyP4", startTime: 60 },
    { titleQuechua: "47. Diosta karpanpi yupaychasqankumanta", titleSpanish: "La adoración en el Tabernáculo", youtubeId: "Nchkjy_BWyA", startTime: 60 },
    { titleQuechua: "48. Josuemantawan Juezkunamanta", titleSpanish: "Josué y Jueces", youtubeId: "IuvY4YhTAfw", startTime: 60 },
    { titleQuechua: "49. Reykuna hatarisqanmanta, Davidmanta hinaspa Salmos libropi Hebreo takikunamanta", titleSpanish: "Los Reyes, David, Salmos y la poesía hebrea", youtubeId: "LFOsdeAkfV4", startTime: 60 },
    { titleQuechua: "50. Yachaykunamanta, israel nación rakinakusqanmanta hinaspa huklaw nacionkunaman apasqa kasqankumanta", titleSpanish: "La literatura sapiencial, la división y el exilio", youtubeId: "R7gkPZDZz7g", startTime: 60 },
    { titleQuechua: "51. Babiloniaman apasqa kasqankumanta, chaymanta Dios kutichimusqanmanta hinaspa profetakunamanta", titleSpanish: "La cautividad en Babilonia, el regreso del exilio y los profetas", youtubeId: "PErmxEue9xE", startTime: 60 }
  ];

  const modulo_b4 = [
    { titleQuechua: "52. Rantinchikpi Dios imatam rurasqanmanta I", titleSpanish: "El cambio (Intercambio) divino, 1ra parte", youtubeId: "1YcU3dblPkw", startTime: 60 },
    { titleQuechua: "53. Rantinchikpi Dios imatam rurasqanmanta II", titleSpanish: "El cambio (Intercambio) divino, 2da parte", youtubeId: "RQqZpdfmGmE", startTime: 60 },
    { titleQuechua: "54. Cristopi vencesqanchikmanta", titleSpanish: "El triunfo de alabanza", youtubeId: "ezrbqDzog4Y", startTime: 60 },
    { titleQuechua: "55. ¿Imataq angelkunata llamkachin", titleSpanish: "¿Qué hace obrar a los ángeles?", youtubeId: "1zJKkXM2BX0", startTime: 60 },
    { titleQuechua: "56. Imaynatam iñiyninchikta llamkachinamanta", titleSpanish: "Cómo hacer que su fe obre", youtubeId: "iIf-RpSOx6w", startTime: 60 }
  ];

  const modulo_b5 = [
    { titleQuechua: "57. Diosqa unquqkunata sanoyachiy munasqanmanta", titleSpanish: "La voluntad de Dios y la sanidad", youtubeId: "CRXITQZFwy8", startTime: 60 },
    { titleQuechua: "58. Jesús salvawaspanchik hampiykuwasqanchikmanta", titleSpanish: "Sanidad en la expiación", youtubeId: "i4-b8QYzTBs", startTime: 60 },
    { titleQuechua: "59. Diosqa kuyakuywan salvawasqanchikmanta", titleSpanish: "Salvación plena", youtubeId: "rMQr6i-Z3TA", startTime: 60 },
    { titleQuechua: "60. Moisés broncemanta culebrata kaspipi sayachisqanmanta", titleSpanish: "Moisés, la serpiente y la sanidad", youtubeId: "WANRA580wqk", startTime: 60 },
    { titleQuechua: "61. Diosqa llakipayakuywan salvawaspanchik hampiykuwasqanchikmanta", titleSpanish: "La misericordia de sanar", youtubeId: "nsatY7GflUE", startTime: 60 }
  ];

  const modulo_c1 = [
    { titleQuechua: "62. Kay yachachikuykuna imapaqmi kasqanmanta", titleSpanish: "Introducción al Curso Internacional", youtubeId: "9PDPjR3q_i4", startTime: 60 }
  ];

  const modulo_c2 = [
    { titleQuechua: "63. Imaynatam iglesiapi Escuela Biblicata hatarichinamanta", titleSpanish: "El modelo para el entrenamiento ministerial", youtubeId: "KAqwUBgk68Q", startTime: 60 },
    { titleQuechua: "64. ¿Imapaq hinaspa imanasqataq escuela biblicata hatarichisun?", titleSpanish: "La meta y el objetivo del ministerio de enseñanza", youtubeId: "vaIvbqnytHA", startTime: 60 },
    { titleQuechua: "65. Sumaqta Tanteaykuspa Escuela Biblicata hatarichinamanta", titleSpanish: "Planifique su instituto", youtubeId: "oNuIYNxVQ7k", startTime: 60 }
  ];

  const modulo_c3 = [
    { titleQuechua: "66. ¿Imapaqtaq iglesiapi necesitanchik taksa grupokuna hatarichiyta?", titleSpanish: "Propósitos de los grupos celulares", youtubeId: "9ZU7C0UQvTg", startTime: 60 },
    { titleQuechua: "67. Taksa grupokunawan chinkasqa runakunata haypanamanta", titleSpanish: "Evangelizando a los perdidos a través de los grupos celulares", youtubeId: "g1GDO1JlrUA", startTime: 60 },
    { titleQuechua: "68. Lederkunata iglesiapi hatarichinamanta", titleSpanish: "Desarrollando líderes", youtubeId: "lA60g17ZxwI", startTime: 60 },
    { titleQuechua: "69. Imaynatam taksa grupokunawan iglesiata mirachinamanta", titleSpanish: "Los principios de la multiplicación", youtubeId: "fvWkD7tqSlM", startTime: 60 },
    { titleQuechua: "70. Imayna runakunatam iglesiapi lider kanankupaq akllanamanta", titleSpanish: "Líderes grandes en la Iglesia", youtubeId: "qoA_UQGq-pE", startTime: 60 }
  ];

  const modulo_c4 = [
    { titleQuechua: "71. Jesuspa hatun kamachikuy qusqanmanta", titleSpanish: "La gran comisión", youtubeId: "IgqjwEO6m4s", startTime: 60 },
    { titleQuechua: "72. Chuya Espiritupa atiyninwan evangeliota willakunanchikmanta", titleSpanish: "Cómo puede usted ponerse a disposición del Espíritu Santo", youtubeId: "V05AcOd7O94", startTime: 60 },
    { titleQuechua: "73. Diospa siminta apaqkunaqa allin kawsakuq kanankumanta", titleSpanish: "La integridad necesaria para llevar la unción del Espíritu Santo", youtubeId: "qVKxS_1kWos", startTime: 60 },
    { titleQuechua: "74. Hatun kamachikuyta rurananchikmanta", titleSpanish: "La magnitud de la gran comisión", youtubeId: "IYGAxKvJD24", startTime: 60 },
    { titleQuechua: "75. Chuya Espiritupa atiyninmanta", titleSpanish: "El fuego del Espíritu Santo", youtubeId: "nqPxHTEVVbc", startTime: 60 }
  ];

  const modulo_c5 = [
    { titleQuechua: "76. Limpio sunquwan Diosta sirvikunanchikmanta", titleSpanish: "La integridad del corazón", youtubeId: "9oeolT5c-9s", startTime: 60 },
    { titleQuechua: "77. Pampachakuq Sunquyuq kananchikmanta", titleSpanish: "Un espíritu que perdona", youtubeId: "iLOYQXYAGWM", startTime: 60 }
  ];

  const modulo_c6 = [
    { titleQuechua: "78. Ñuqanchikpaq Diospa munasqanta chaskispa rurananchikmanta", titleSpanish: "Abracemos la visión", youtubeId: "yGnejHMY1rY", startTime: 60 },
    { titleQuechua: "79. Imayna sunquyuqmi Diospa kamachikuynin chaskiq runa kananmanta", titleSpanish: "Las cualidades de la visión", youtubeId: "rAg-sfr8jqc", startTime: 60 },
    { titleQuechua: "80. ¿Imataq visión, imaynatataq rurayta atisun?", titleSpanish: "Enfocando la visión", youtubeId: "ZE6cQzvTmY8", startTime: 60 },
    { titleQuechua: "81. Kay pachapaq imatam Dios munasqanmanta", titleSpanish: "La visión de Dios para las naciones", youtubeId: "dkub_bu8aN4", startTime: 60 },
    { titleQuechua: "82. ¿Maypitaq qullqita tarisun Diospa imam munasqanta rurananchikpaq?", titleSpanish: "El financiamiento de la visión", youtubeId: "QdEbVazQn-g", startTime: 60 }
  ];

  const modulo_c7 = [
    { titleQuechua: "83. Imaynatam musuq iglesiata hatarichinamanta", titleSpanish: "Una descripción del plantamiento de Iglesias", youtubeId: "MKcyNUT8DWI", startTime: 60 },
    { titleQuechua: "84. Iglesia liderkunata ministeriokunata hatarichiq kanankumanta", titleSpanish: "La Iglesia local como centro de entrenamiento de ministerios", youtubeId: "LUSLkSK0e-M", startTime: 60 },
    { titleQuechua: "85. Musuq iñiqkunata don chaskisqankuman hina llamkachinamanta", titleSpanish: "Ministros vocacionales en la Iglesia local", youtubeId: "l4Rd8PN-iRk", startTime: 60 },
    { titleQuechua: "86. Musuq Iglesiata hatarichinapaq grupokunata formanamanta", titleSpanish: "Identificando equipos para plantar Iglesias", youtubeId: "fuioBqytaPA", startTime: 60 },
    { titleQuechua: "87. Iglesia hatarichimunanpaq grupo formasqanchikta kachanamanta", titleSpanish: "Preparando y enviando a los equipos que planten Iglesias", youtubeId: "jt6St25Avf4", startTime: 60 }
  ];

  const modulo_c8 = [
    { titleQuechua: "88. Iñiqkunata Dios imaynatam guiasqanmanta", titleSpanish: "Las diversas maneras que Dios guía a su pueblo", youtubeId: "ZdENEW_A9T4", startTime: 60 },
    { titleQuechua: "89. Espiritunchiktakama Dios guiawasqanchikmanta", titleSpanish: "Cómo nos guía Dios mediante nuestro espíritu", youtubeId: "OIrHqbsGybw", startTime: 60 },
    { titleQuechua: "90. Sasachakuy tiempokunapi Diospa yanapakuyninta chaskinamanta", titleSpanish: "Cómo recibir dirección en tiempos difíciles", youtubeId: "v4lOBisEXBk", startTime: 60 },
    { titleQuechua: "91. Rurayninchikmanta akllasqa kaqkunata ñawpaqman churanamanta", titleSpanish: "Las prioridades de la vida", youtubeId: "2PzDI23xZX8", startTime: 60 },
    { titleQuechua: "92. Diosta maskaspa ima pantachikuykunatam tarinanchikmanta", titleSpanish: "Trampas y peligros al buscar la guianza de Dios", youtubeId: "wCJRCstHtO8", startTime: 60 }
  ];

  const modulo_d1 = [
    { titleQuechua: "93. Israel kasta runakuna desiertopi ñakarisqanmanta", titleSpanish: "Mentalidades; visión y responsabilidad", youtubeId: "GypmLobBAb8", startTime: 60 },
    { titleQuechua: "94. Pruebasqa kaspa imatam rurananchikmanta", titleSpanish: "Responsabilidad y pruebas", youtubeId: "9LvvWwqee94", startTime: 60 },
    { titleQuechua: "95. Tukuy imamanta quejakuspa imamantapas hukman tumpaymanta", titleSpanish: "Quejándose e impaciencia", youtubeId: "MNeGjHZapA4", startTime: 60 },
    { titleQuechua: "96. Pacienciakuyqa mana yachaspa yanqa ñakariymanta", titleSpanish: "Impaciencia y la mentalidad de víctima", youtubeId: "ftDkQnmE8G4", startTime: 60 },
    { titleQuechua: "97. Kikinchikta llakipayakuspa mana huchayuqpaq hapikuymanta", titleSpanish: "La mentalidad de víctima y lástima propia", youtubeId: "3Miy9GfRN2A", startTime: 60 },
    { titleQuechua: "98. Diospa churinña kasqanchik rayku kuyapayakunanchikmanta", titleSpanish: "La autoestima", youtubeId: "af0HAQMg2jg", startTime: 60 },
    { titleQuechua: "99. Hukpa kaqta envidiakuspa runapa kaqta munapayaspa runaman tupachikuymanta", titleSpanish: "Los celos, la testarudez y la rebeldía", youtubeId: "LfAHcY0M06o", startTime: 60 }
  ];

  const modulo_d2 = [
    { titleQuechua: "100. Imayna sunquyuqtaq huk lider kanan", titleSpanish: "El corazón de un líder", youtubeId: "m2MdE0zO7t8", startTime: 60 },
    { titleQuechua: "101. Runaqa sunqunpa munasqanman hinam kawsanqa", titleSpanish: "Su corazón determina el curso de la vida", youtubeId: "5De9AWfg2Kg", startTime: 60 },
    { titleQuechua: "102. Ruraqa kawsanqa utaq ruwanqapas sunqunpa kamachisqanman hinam", titleSpanish: "Su corazón determina su éxito en la vida", youtubeId: "gWAq3xyKLdE", startTime: 60 },
    { titleQuechua: "103. Pitaq kanki ¿Liderchu icha qatikuqllachu", titleSpanish: "¿Líderes o seguidores?", youtubeId: "8uo47QJJRrM", startTime: 60 },
    { titleQuechua: "104. Imapitaq liderkuna pantan", titleSpanish: "Trampas a los visionarios", youtubeId: "qLT7FrkyXCA", startTime: 60 }
  ];

  const modulo_d3 = [
    { titleQuechua: "105. Huk lider allin llamkaq kananmanta", titleSpanish: "Eficacia", youtubeId: "LBaxlgVrvfk", startTime: 60 }
  ];

  const modulo_d4 = [
    { titleQuechua: "106. Kuyanakunamanta", titleSpanish: "Introducción", youtubeId: "nMQiVbG3p80", startTime: 60 },
    { titleQuechua: "107. Runapa paqariyninmanta hinaspa maymanmi rinanmanta", titleSpanish: "Orígenes y destinos", youtubeId: "uNVzsvpANzc", startTime: 60 },
    { titleQuechua: "108. Imatataq supay ruwachkan runakunata rakinananpaq", titleSpanish: "Las estrategias del enemigo", youtubeId: "FJVeaT6P040", startTime: 60 },
    { titleQuechua: "109. Huklla kawsakuy atinamanta", titleSpanish: "Viviendo una vida en reconciliación", youtubeId: "l4Opo_L9EY4", startTime: 60 }
  ];

  const modulo_d5 = [
    { titleQuechua: "110. Imatam infierno sumaqta pakasqanmanta", titleSpanish: "El secreto mejor guardado del infierno", youtubeId: "J8jX_SKczyY", startTime: 60 },
    { titleQuechua: "111. Diospi mana iñiq runakunamanta utaq ateokunamanta", titleSpanish: "El ateísmo", youtubeId: "0Z_6AC67QZY", startTime: 60 },
    { titleQuechua: "112. Evangeliota chiqap willakuqkunamanta", titleSpanish: "Evangelismo militante", youtubeId: "NBfA2ajueUo", startTime: 60 },
    { titleQuechua: "113. Chiqap iñikuywan hawa sunqulla iñikuymanta", titleSpanish: "La conversión verdadera y falsa", youtubeId: "i8IimQhq6G8", startTime: 60 },
    { titleQuechua: "114. Imaynatataq Diospaq tukuy sunquwan llamkayta atichwan", titleSpanish: "Cómo conseguir el ardor hacia Dios", youtubeId: "1DHbfajb4Ck", startTime: 60 }
  ];

  const modulo_d6 = [
    { titleQuechua: "115. Bibliam nin supaywan guerrapi kasqanchikta", titleSpanish: "El fundamento bíblico de la guerra", youtubeId: "Fh0TOfZM4Ys", startTime: 60 },
    { titleQuechua: "116. Yachananchikmi mana allin espiritukunawan peleayta", titleSpanish: "La comprensión de la guerra espiritual", youtubeId: "dSl-AuQAFjs", startTime: 60 },
    { titleQuechua: "117. Guerrata peleanapaq Diosta atyninmanta hinaspa infiernopa punkunmanta", titleSpanish: "Oración de guerra y las puertas del Infierno", youtubeId: "NkF2OzVa8gw", startTime: 60 },
    { titleQuechua: "118. Infiernopa punkun tuñichinamanta", titleSpanish: "Derribar las puertas del Infierno", youtubeId: "b9LrOPIl8x0", startTime: 60 },
    { titleQuechua: "119. Diospa atiyninwanmi peleananchikqa", titleSpanish: "Usar la autoridad en la sociedad", youtubeId: "9J1eWAbOX5E", startTime: 60 }
  ];

  const modulo_d7 = [
    { titleQuechua: "120. Wichichiwananchikpaq supaypa trampa churamusqanmanta", titleSpanish: "La carnada de Satanás", youtubeId: "--wW4XxaSIw", startTime: 60 },
    { titleQuechua: "121. Diospa atiyninwan pachallikunanchikmanta", titleSpanish: "Cubierto", youtubeId: "p6j3GIDOvos", startTime: 60 }
  ];

  const modulo_d8 = [
    { titleQuechua: "122. Diospa Siminta Yachaspa sunqupi sapinchanamanta", titleSpanish: "Memorización bíblica (PARTE 1)", youtubeId: "C8ZqXCsR2H0", startTime: 60 },
    { titleQuechua: "123. Diospa Siminta Yachaspa sunqupi sapinchanamanta", titleSpanish: "Memorización bíblica (PARTE 2)", youtubeId: "WDpbUjjdxR8", startTime: 60 },
    { titleQuechua: "124. Ñakasqa kaykunata pakinanchikmanta utaq vencenanchikmanta", titleSpanish: "Quebrantando las maldiciones generacionales", youtubeId: "5DJLoCY_WG0", startTime: 60 }
  ];

  const modulo_e1 = [
    { titleQuechua: "125. Jesúsmi yachachiqninchikqa", titleSpanish: "Jesús, nuestro modelo", youtubeId: "M8IFgtazxuk", startTime: 60 },
    { titleQuechua: "126. Jesúsmi ruranapaq kallpanchaqninchik", titleSpanish: "Jesús, nuestra inspiración", youtubeId: "9goY9Hc9tNA", startTime: 60 },
    { titleQuechua: "127. Imanisuntaq kasukusunchu manachu", titleSpanish: "Nuestra respuesta", youtubeId: "KrkBUU_-0pQ", startTime: 60 },
    { titleQuechua: "128. Ruranapaq kachasqam kanchik", titleSpanish: "Escogidos para servicio", youtubeId: "CyQb8QEZaj8", startTime: 60 },
    { titleQuechua: "129. Imataq willakuyninchikta valechin", titleSpanish: "Nuestra credibilidad", youtubeId: "QflTMzXifII", startTime: 60 },
    { titleQuechua: "130. Pitaq kanchik Diospi", titleSpanish: "Nuestra legalidad", youtubeId: "gvLcglR4N9I", startTime: 60 },
    { titleQuechua: "131. Dios qanwan kaptinga maynatataq rurawaq", titleSpanish: "La experiencia", youtubeId: "h3QgojwLryQ", startTime: 60 }
  ];

  const modulo_e2 = [
    { titleQuechua: "132. Diospa munasqanman hina kawsanamanta", titleSpanish: "La forma de vida máxima", youtubeId: "rNUOgzr0MEM", startTime: 60 },
    { titleQuechua: "133. Quyta qallarinamanta", titleSpanish: "Cómo empezar una forma de vida de dar", youtubeId: "odZAqWUEm1k", startTime: 60 },
    { titleQuechua: "134. Quy imapaqmi siqvikusqamanta", titleSpanish: "Los beneficios de vivir dando a Dios", youtubeId: "5OUlapX7BCs", startTime: 60 },
    { titleQuechua: "135. Manaña atinanchikama qunamanta", titleSpanish: "Vivir y dar más de lo posible", youtubeId: "w4rdSvkZUaA", startTime: 60 },
    { titleQuechua: "136. ¿Atinmanchu Dios Atinqa punim", titleSpanish: "¿Puede Dios? Dios puede", youtubeId: "BU1waB2KRD0", startTime: 60 }
  ];

  const modulo_e3 = [
    { titleQuechua: "137. Bibliaman hina ¿Pitaq huk anciano", titleSpanish: "¿Qué es un anciano en el sentido bíblico?", youtubeId: "H5axVRMfOyA", startTime: 60 },
    { titleQuechua: "138. Ancianokunapa rurayninmanta", titleSpanish: "La función de los Ancianos", youtubeId: "CEE6qkrR_bo", startTime: 60 },
    { titleQuechua: "139. Ancianokunapa kawsayninmanta", titleSpanish: "El carácter de los Ancianos", youtubeId: "y4oqJljzWyc", startTime: 60 },
    { titleQuechua: "140. Iglesiapi pichqan ministeriokunamanta. 1", titleSpanish: "El ministerio de cinco pasos. PARTE 1", youtubeId: "8aSeVw_koA4", startTime: 60 },
    { titleQuechua: "141. Iglesiapi pichqan ministeriokunamanta. 2", titleSpanish: "El ministerio de cinco pasos. PARTE 2", youtubeId: "TU9dlFRBxHc", startTime: 60 }
  ];

  const modulo_e4 = [
    { titleQuechua: "142. Imanintaq Biblia warmakunawan llamkanamanta", titleSpanish: "Qué dice la Biblia acerca del ministerio de niños", youtubeId: "NHedjNQCL1I", startTime: 60 },
    { titleQuechua: "143. Samaykachikuq kanamanta", titleSpanish: "Las leyes de hospitalidad", youtubeId: "cyCZhRj-lQc", startTime: 60 },
    { titleQuechua: "144. Tukupay tiempokunapi cosechumanta", titleSpanish: "La cosecha de los últimos días", youtubeId: "qtGElVrkyBw", startTime: 60 },
    { titleQuechua: "145. Jesusmanta warmakunaman yachachinamanta", titleSpanish: "Predicándoles a los niños", youtubeId: "6vHVpvQOimg", startTime: 60 },
    { titleQuechua: "146. Pastor jovenkunawan llamkananmanta", titleSpanish: "Ministerio de jóvenes dirigido por un Pastor", youtubeId: "vsZy0UGoR_Q", startTime: 60 },
    { titleQuechua: "147. Warmakuna uyarinanpaq hina yachachinamanta", titleSpanish: "Cómo mantener la atención de un niño", youtubeId: "bZQKjfYeLsw", startTime: 60 },
    { titleQuechua: "148. Sumaq yachachikuq kanamanta", titleSpanish: "Cómo ser un excelente narrador", youtubeId: "Zv8MZGlzonk", startTime: 60 }
  ];

  const modulo_e5 = [
    { titleQuechua: "149. Titerekunawan wawakunaman yachachinamanta", titleSpanish: "Usando títeres en el ministerio de niños", youtubeId: "cb3ayOnlgGA", startTime: 60 },
    { titleQuechua: "150. Imaynatataq sasachakuykunata allichachwan", titleSpanish: "Cómo ser una persona que resuelve problemas", youtubeId: "TrTaS-aNq88", startTime: 60 },
    { titleQuechua: "151. Iglesia mirachinapaq warmakunawan llamkay qallarinamanta", titleSpanish: "Organizando el ministerio de niños para el crecimiento", youtubeId: "717rGKNaV9w", startTime: 60 },
    { titleQuechua: "152. Imaynatam hukpa yanapakuyninta tarichwan", titleSpanish: "Cómo obtener la ayuda de otros", youtubeId: "y1LEKVZ5T5s", startTime: 60 }
  ];

  const modulo_e6 = [
    { titleQuechua: "153. Jovenkunawan imaynam llamkanamanta", titleSpanish: "Establecer una visión para el ministerio de jóvenes", youtubeId: "-cO_BS6-KFE", startTime: 60 },
    { titleQuechua: "154. Liderkunata llamkachinamanta", titleSpanish: "Guiando a líderes a ejecución máxima", youtubeId: "DUNU5QK-MBk", startTime: 60 },
    { titleQuechua: "155. Jovenkunapa sunqunman chayanamanta", titleSpanish: "Comunicándose efectivamente con la juventud", youtubeId: "LIlah7jGEjc", startTime: 60 },
    { titleQuechua: "156. Jovenkunawan llamkanapaq tanteanaman", titleSpanish: "Planeando efectivamente un ministerio de jóvenes", youtubeId: "sOFj-ErglTA", startTime: 60 }
  ];

  const allModulesData = [
    { number: "01", titleQuechua: "IMAKUNAPIM IÑIYNINCHIK SAPINCHASQA KASQANMANTA", titleSpanish: "LOS FUNDAMENTOS DE LA FE", lessons: modulo_a1 },
    { number: "02", titleQuechua: "DIOSPA ATIYNINPI KAWSASPA UNQUQKUNATA SANOYACHINAMANTA", titleSpanish: "LA VIDA SOBRENATURAL Y LA SANIDAD", lessons: modulo_a2 },
    { number: "03", titleQuechua: "MUSUQ TESTAMENTOMANTA", titleSpanish: "ESTUDIO PANORÁMICO DEL NUEVO TESTAMENTO", lessons: modulo_a3 },
    { number: "04", titleQuechua: "DIOSTA IMAYNATAM YUPAYCHANAMANTA", titleSpanish: "ALABANZA Y ADORACIÓN", lessons: modulo_a4 },
    { number: "05", titleQuechua: "MAÑAKUYPA ATIYNINMANTA", titleSpanish: "EL PODER DE LA ORACIÓN", lessons: modulo_b1 },
    { number: "06", titleQuechua: "IGLESIAPI YANAPAKUNAMANTA", titleSpanish: "EL MINISTERIO DE AYUDAS", lessons: modulo_b2 },
    { number: "07", titleQuechua: "ÑAWPAQ TESTAMENTOMANTA", titleSpanish: "ESTUDIO PANORÁMICO DEL ANTIGUO TESTAMENTO", lessons: modulo_b3 },
    { number: "08", titleQuechua: "EVANGELIOPA SUNQUNMANTA", titleSpanish: "LA ESENCIA DEL EVANGELIO", lessons: modulo_b4 },
    { number: "09", titleQuechua: "JESUS HAMPIWAQNINCHIK KASQANMANTA", titleSpanish: "JESÚS SANA HOY", lessons: modulo_b5 },
    { number: "10", titleQuechua: "KAY YACHACHIKUYKUNA IMAPAQMI KASQANMANTA", titleSpanish: "MOVILIZAR PARA MULTIPLICAR", lessons: modulo_c1 },
    { number: "11", titleQuechua: "IMAYNATAM IGLESIAPI ESCUELA BIBLICATA HATARICHINAMANTA", titleSpanish: "CÓMO DESARROLLAR UNA ESCUELA BÍBLICA EN SU IGLESIA", lessons: modulo_c2 },
    { number: "12", titleQuechua: "IGLESIATA MIRACHINAPAQ TAKSA GRUPOKUNAWAN LLAMKANAMANTA", titleSpanish: "LOS GRUPOS CELULARES", lessons: modulo_c3 },
    { number: "13", titleQuechua: "EVANGELIOTA ATIYWAN WILLAKUNAMANTA", titleSpanish: "EL EVANGELISMO CON PODER", lessons: modulo_c4 },
    { number: "14", titleQuechua: "LIMPIO SUNQUWAN ALLIN KAWSAKUYPI PURINANCHIKMANTA", titleSpanish: "LA INTEGRIDAD Y LIDERAZGO", lessons: modulo_c5 },
    { number: "15", titleQuechua: "DIOSPA OBRANPI LLAMKANANCHIKMANTA", titleSpanish: "LOS LÍDERES Y SU VISIÓN", lessons: modulo_c6 },
    { number: "16", titleQuechua: "GRUPOKUNATA FORMASPA MUSUQ IGLESIAKUNATA HATARICHINAMANTA", titleSpanish: "CÓMO PLANTAR IGLESIAS USANDO EQUIPOS", lessons: modulo_c7 },
    { number: "17", titleQuechua: "KAWSAYNINCHIKPI CHUYA ESPIRITUPA GUIASQAN KANANCHIKMANTA", titleSpanish: "CÓMO SER GUIADOS POR EL ESPÍRITU SANTO", lessons: modulo_c8 },
    { number: "18", titleQuechua: "DIOSPA PROMESANKUNAN HAYPANATA IMAKUNAM HARKAWASQANCHIKMANTA", titleSpanish: "MENTALIDAD DE DESIERTO", lessons: modulo_d1 },
    { number: "19", titleQuechua: "LIDERAZGOMANTA", titleSpanish: "CÓMO DESARROLLAR LÍDERES", lessons: modulo_d2 },
    { number: "20", titleQuechua: "TAKSA GRUPOKUNAPI ALLIN LIDER KANAMANTA", titleSpanish: "CÓMO SER LÍDER DE UN GRUPO CELULAR", lessons: modulo_d3 },
    { number: "21", titleQuechua: "HUKLLA KAWSAKUNAMANTA", titleSpanish: "LA RECONCILIACIÓN", lessons: modulo_d4 },
    { number: "22", titleQuechua: "EVANGELIOTA SAPA RUNAMAN WILLAKUNAMANTA", titleSpanish: "EL EVANGELISMO PERSONAL", lessons: modulo_d5 },
    { number: "23", titleQuechua: "SUPAYTA VENCENAMANTA", titleSpanish: "LA GUERRA ESPIRITUAL", lessons: modulo_d6 },
    { number: "24", titleQuechua: "PAMPACHANAKUNANCHIKMANTA", titleSpanish: "LA AUTORIDAD Y EL PERDÓN", lessons: modulo_d7 },
    { number: "25", titleQuechua: "DIOS VENCECHIWASQANCHIKMANTA", titleSpanish: "VICTORIA ESPIRITUAL", lessons: modulo_d8 },
    { number: "26", titleQuechua: "CRISTOWAN HUKLLAÑA KASQANCHIKMANTA", titleSpanish: "LA CONEXIÓN CON CRISTO", lessons: modulo_e1 },
    { number: "27", titleQuechua: "KAPUQNINCHIKWAN DIOSTA SIRVIKUNAMANTA", titleSpanish: "VIVIENDO PARA DAR", lessons: modulo_e2 },
    { number: "28", titleQuechua: "IMAPAQMI DIOS MINISTERIOKUNATA IGLESIAPI HATARICHISQANMANTA", titleSpanish: "LA ANCIANIDAD BÍBLICA", lessons: modulo_e3 },
    { number: "29", titleQuechua: "WARMAKUNAWAN IMAYNATAM LLAMKANAMANTA", titleSpanish: "ALCANCEMOS UNA NUEVA GENERACIÓN", lessons: modulo_e4 },
    { number: "30", titleQuechua: "WARMAKUNATA DIOSPAQ IMAYNAM QISPICHINAMANTA", titleSpanish: "CÓMO ADMINISTRAR LA IGLESIA PARA EL MAÑANA", lessons: modulo_e5 },
    { number: "31", titleQuechua: "JOVENKUNAWAN LLAMKANAMANTA", titleSpanish: "LA MINISTRACIÓN DE JÓVENES", lessons: modulo_e6 }
  ];

  // ==========================================
  // LÓGICA DEL BUSCADOR
  // ==========================================
  const filteredModules = allModulesData.map(mod => {
    if (!searchTerm.trim()) return mod;

    // Quita tildes y convierte a minúsculas
    const normalizeText = (text: string) => {
      return text
        .normalize("NFD") // Separa la letra de la tilde
        .replace(/[\u0300-\u036f]/g, "") // Borra todas las tildes sueltas
        .toLowerCase();
    };

    // Normalizamos la búsqueda del usuario y la separamos en palabras
    const searchWords = normalizeText(searchTerm).split(' ').filter(word => word.trim() !== '');

    // Normaliza el texto antes de comparar
    const matchesAllWords = (text: string) => {
      const normalizedText = normalizeText(text);
      return searchWords.every(word => normalizedText.includes(word));
    };

    // Filtramos MÓDULOS
    if (matchesAllWords(mod.titleQuechua) || matchesAllWords(mod.titleSpanish)) {
      return mod;
    }

    // Filtramos JORNADAS
    const filteredLessons = mod.lessons.filter(lesson => 
      matchesAllWords(lesson.titleQuechua) || matchesAllWords(lesson.titleSpanish)
    );

    return { ...mod, lessons: filteredLessons };
    
  }).filter(mod => mod.lessons.length > 0);

  return (
    <div className="w-full flex flex-col items-center min-h-[60vh] pb-12">
      {/* Hero Carousel */}
      <Carousel />

      <BookBanner />

      {/* Main Content Area */}
      <div className="w-full max-w-5xl px-6 pt-12 flex flex-col items-center">
      
      {/* El buscador (le pasamos el estado) */}
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      {/* Mensaje por si no hay resultados */}
      {filteredModules.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-2xl font-bold text-dios-brown mb-2">No se encontraron resultados</p>
          <p className="text-gray-500">Prueba buscando con otras palabras como &quot;Jesús&quot;, &quot;Sanidad&quot; o &quot;Espíritu&quot;.</p>
        </div>
      )}

      {/* Los Módulos Generados Automáticamente */}
      <div className="w-full flex flex-col gap-4">

        {filteredModules.map(mod => (
          <Module 
            key={mod.number}
            number={mod.number} 
            titleQuechua={mod.titleQuechua}
            titleSpanish={mod.titleSpanish} 
            lessons={mod.lessons} 
            isExpanded={searchTerm.length > 0} // Si hay texto en el buscador, se abre solo
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
          />
        ))}
      </div>

      </div>

      <VideoModal 
        isOpen={selectedLesson !== null} 
        onClose={() => setSelectedLesson(null)} 
        title={selectedLesson?.titleQuechua || ""}
        titleSpanish={selectedLesson?.titleSpanish}
        youtubeId={selectedLesson?.youtubeId}
        startTime={selectedLesson?.startTime} 
      />
    </div>
  );
}