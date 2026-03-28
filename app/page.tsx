'use client'; // Necesario para usar el buscador en tiempo real

import React, { useState } from 'react';
import SearchBar from "../components/SearchBar";
import Module, { type Lesson } from "../components/Module";
import VideoModal from "../components/VideoModal";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const modulo_a1 = [
    { title: "1. Bibliaqa Diospa Simin kasqanmanta hinaspa Trinidadmanta / La Biblia es palabra de Dios y la Trinidad", youtubeId: "RtzqdZMBxVE", startTime: 60 },
    { title: "2. Jesuspa Dios kasqanmanta hinaspa rurayninkunamanta / La deidad de Jesús y la misión de Jesús", youtubeId: "_UCjeqdLLEA", startTime: 60 },
    { title: "3. Salvacionmanta, hanaq pachamanta, infiernomanta hinaspa Jesuspa kutimunanmanta / Salvación por la gracia mediante la fe, el Cielo y el Infierno", youtubeId: "vrI3_XxqRKI", startTime: 60 },
    { title: "4. Chuya Espiritupa Dios kasqanmantawan rurayninkunamanta / La persona y obra del Espíritu Santo", youtubeId: "JO01BHtERsQ", startTime: 60 },
    { title: "5. Diospa hanpikuyninmanta / La sanidad divina", youtubeId: "mjKD6ciA8xQ", startTime: 60 },
    { title: "6. Iglesia rurananpaq kamachikuykunamanta / Las ordenanzas de la Iglesia", youtubeId: "VEr1Y_b9Ouw", startTime: 60 }
  ];

  const modulo_a2 = [
    { title: "7. Chuya Espíritumanta / El Espíritu Santo", youtubeId: "ds3QD1k8o78", startTime: 60 },
    { title: "8. Chuya Espiritupa Donninkunamanta / Los dones del Espíritu Santo", youtubeId: "tar6hxLbDAU", startTime: 60 },
    { title: "9. Simiwan rimanapaq kaq donkunamanta / Los dones vocales del Espíritu Santo", youtubeId: "dhX84oQKbxo", startTime: 60 },
    { title: "10. Revelacionkuna chaskinapaq donkunamanta / Los dones de revelación", youtubeId: "ss-E9NpgXUo", startTime: 60 },
    { title: "11. Atiyninwan rimanapaq kaq donkunamanta / Los dones de poder del Espíritu Santo", youtubeId: "bO6Mxv7uQWA", startTime: 60 },
    { title: "12. Unquqkunata sanoyachinapaq kaq donkunamanta / Los dones de sanidad", youtubeId: "-vX3eOQqhY0", startTime: 60 },
    { title: "13. Hatun kamachikuymantawan hunquqkuna sanoyachinamanta / La gran comisión y la sanidad", youtubeId: "1pWOrEUrQdc", startTime: 60 },
    { title: "14. Diospa Atiyninwan unquqkunata sanoyachinamanta / El poder de Dios para dar sanidad", youtubeId: "W03EY3520gg", startTime: 60 },
    { title: "15. Atiywan rimaspa unquqkunata sanoyachinamanta / Hablar palabras de sanidad", youtubeId: "yYVdPCjzeC8", startTime: 60 },
    { title: "16. Makita churanamanta / Impartición por la imposición de manos", youtubeId: "N_0pR9lPucU", startTime: 60 }
  ];

  const modulo_a3 = [
    { title: "17. Musuq Testamentomanta / Introducción al Nuevo Testamento", youtubeId: "q2JIBD1d5cg", startTime: 60 },
    { title: "18. Mateo, Marcos, Lucas: Jesusmanta imam willakusqankumanta / Mateo, Marcos, Lucas: tres retratos de Jesucristo", youtubeId: "eAbeo0rDdBo", startTime: 60 },
    { title: "19. Juan: Jesucristomanta imam willakusqanmanta / Juan: El cuarto retrato de Jesucristo", youtubeId: "z_DPWWu-auQ", startTime: 60 },
    { title: "20. Hechos: Evangelio willakusqankupa wiñarisqanmanta / Hechos: La expansión del Evangelio", youtubeId: "4OdWIRt4sbc", startTime: 60 },
    { title: "21. Romanos: Evangelioqa Diospa kuyakuynin kasqanmanta / Romanos: Carta de Pablo acerca del Evangelio de la gracia", youtubeId: "No-Dp3xVfnU", startTime: 60 },
    { title: "22. 1, 2 Corintios; Gálatas: Evangelioman hina kawsanamanta / Primera y Segunda de Corintios, Gálatas: Cartas de Pablo de la vida del Evangelio de la gracia", youtubeId: "5T-fJAtrO1w", startTime: 60 },
    { title: "23. Efesios, Filipenses, Colosenses hinaspa Filemón: Pablo carcelpi kachkaspan iglesiakunaman cartakuna apachisqanmanta / Ef., Filipenses, Colosenses y Filemón: Cartas de Pablo desde la prisión", youtubeId: "xI0wDy40yIw", startTime: 60 },
    { title: "24. 1, 2 Tesalonisenses; 1, 2 Timoteo; Tito: Pastorkunaman Pablopa Cartankuna apachisqanmanta / Primera y Segunda de Timoteo y Tito: Las cartas de Pablo a los líderes", youtubeId: "PSzP3MbHr4k", startTime: 60 },
    { title: "25. Hebreos; Santiago; 1, 2 Pedro; 1, 2, 3 Juan, Judas: Iñiqkunaman qillqasqa cartakunamanta / De Hebreos a Judas: Las cartas generales de los creyentes", youtubeId: "pv_95xW2bUw", startTime: 60 },
    { title: "26. Apocalipsis: Tukuy imapa tukupayninmanta / El Apocalipsis: La consumación de todas las cosas", youtubeId: "4WFd2aciI98", startTime: 60 }
  ];

  const modulo_a4 = [
    { title: "27. Imanasqa hinaspa imaynatam Diosta yupaychanamanta / La prioridad, el propósito, y representación de la adoración", youtubeId: "MjUAKZ2aL8c", startTime: 60 },
    { title: "28. Diospa reinonpi música imapaqmi kasqanmanta / El papel de la música en el reino de Dios", youtubeId: "HYui81Uxzpw", startTime: 60 },
    { title: "29. Musuq takikunamanta / La importancia del cántico nuevo", youtubeId: "SgPH1HVKe-Y", startTime: 60 },
    { title: "30. Yupaychaqkunapa rurayninkunamanta / Nuestra responsabilidad como adoradores", youtubeId: "YvMfRxBQ4BQ", startTime: 60 },
    { title: "31. Diosta yupaychaqkuna kananchikmanta / Cómo hacerse adorador", youtubeId: "6hYQUHcqlpc", startTime: 60 }
  ];

  const modulo_b1 = [
    { title: "32. Imapaqmi mañakuy kasqanmanta / Su triple potencial", youtubeId: "tBIgw7WNKpE", startTime: 60 },
    { title: "33. ¿Imataq mañakuy utaq oración? / ¿Qué es la oración?", youtubeId: "dF0eGZozU2s", startTime: 60 },
    { title: "34. Imaynatam mañakunanchikmanta Punta kaq yachachikuy / La práctica de la oración, 1ra parte", youtubeId: "EEIIxv47ycw", startTime: 60 },
    { title: "35. Imayntam mañakunanchikmanta Iskay kaq yachachikuy / La práctica de la oración, 2da parte", youtubeId: "FuVQuAWHwtE", startTime: 60 },
    { title: "36. Imapaqmi mañakunanchikmanta / El propósito de la oración", youtubeId: "EhgUdMzHPgk", startTime: 60 }
  ];

  const modulo_b2 = [
    { title: "37. Iglesiapi yanapakunanchikmanta / El viaje de un siervo", youtubeId: "mbFLPfWrFu0", startTime: 60 },
    { title: "38. Diosqa churinkunata sirvikunankupaq qayasqanmanta / Dios usa estrellas y velas", youtubeId: "TYN7RH3LHNQ", startTime: 60 },
    { title: "39. Iglesia allin organizasqa kaptinqa aswan allin yanapakuyqa kasqanmanta Punta kaq yachachikuy / No temáis al liderazgo, a la organización o a la estructura, 1ra parte", youtubeId: "75rpI9Dlssg", startTime: 60 },
    { title: "40. Iglesia allin organizasqa kaptinqa aswan allin yanapakuyqa kasqanmanta Iskay kaq yachachikuy / No temáis al liderazgo, a la organización o a la estructura, 2da parte", youtubeId: "yYVdPCjzeC8", startTime: 60 },
    { title: "41. Yanapakuqkunapa iglesiapi llamkayninmanta / Llegando a ser un siervo de fuego", youtubeId: "t057r009Qig", startTime: 60 }
  ];

  const modulo_b3 = [
    { title: "42. Ñawpaq Testamentomanta / Abordando el Antiguo Testamento", youtubeId: "ahImdzm_vDQ", startTime: 60 },
    { title: "43. Bibliapi librokuna imayna patachasqam kasqanmanta hinaspa Dios tukuy imata unanchasqanmanta / El orden de los libros y la creación", youtubeId: "uhEQrdz5gt4", startTime: 60 },
    { title: "44. Runaqa Diosman richakuq kasqanmantawan huchaman wichisqanmanta / La imagen de Dios y la caída", youtubeId: "pGvJn1nqJSA", startTime: 60 },
    { title: "45. Abrahanmanta, Babelmanta hinaspa Dios runawan contrato rurasqanmanta / Babel y Abraham, conceptos de pacto", youtubeId: "ccsIfbAwZaY", startTime: 60 },
    { title: "46. Abrahanmanta, Israelmanta, Josemanta hinaspa Moisesmanta / Abraham, Israel, José, Moisés", youtubeId: "6b5IrE0YyP4", startTime: 60 },
    { title: "47. Diosta karpanpi yupaychasqankumanta / La adoración en el Tabernáculo", youtubeId: "Nchkjy_BWyA", startTime: 60 },
    { title: "48. Josuemantawan Juezkunamanta / Josué y Jueces", youtubeId: "IuvY4YhTAfw", startTime: 60 },
    { title: "49. Reykuna hatarisqanmanta, Davidmanta hinaspa Salmos libropi Hebreo takikunamanta / Los Reyes, David, Salmos y la poesía hebrea", youtubeId: "LFOsdeAkfV4", startTime: 60 },
    { title: "50. Yachaykunamanta, israel nación rakinakusqanmanta hinaspa huklaw nacionkunaman apasqa kasqankumanta / La literatura sapiencial, la división y el exilio", youtubeId: "R7gkPZDZz7g", startTime: 60 },
    { title: "51. Babiloniaman apasqa kasqankumanta, chaymanta Dios kutichimusqanmanta hinaspa profetakunamanta / La cautividad en Babilonia, el regreso del exilio y los profetas", youtubeId: "PErmxEue9xE", startTime: 60 }
  ];

  const modulo_b4 = [
    { title: "52. Rantinchikpi Dios imatam rurasqanmanta I / El cambio (Intercambio) divino, 1ra parte", youtubeId: "1YcU3dblPkw", startTime: 60 },
    { title: "53. Rantinchikpi Dios imatam rurasqanmanta II / El cambio (Intercambio) divino, 2da parte", youtubeId: "RQqZpdfmGmE", startTime: 60 },
    { title: "54. Cristopi vencesqanchikmanta / El triunfo de alabanza", youtubeId: "ezrbqDzog4Y", startTime: 60 },
    { title: "55. ¿Imataq angelkunata llamkachin / ¿Qué hace obrar a los ángeles?", youtubeId: "1zJKkXM2BX0", startTime: 60 },
    { title: "56. Imaynatam iñiyninchikta llamkachinamanta / Cómo hacer que su fe obre", youtubeId: "iIf-RpSOx6w", startTime: 60 }
  ];

  const modulo_b5 = [
    { title: "57. Diosqa unquqkunata sanoyachiy munasqanmanta / La voluntad de Dios y la sanidad", youtubeId: "CRXITQZFwy8", startTime: 60 },
    { title: "58. Jesús salvawaspanchik hampiykuwasqanchikmanta / Sanidad en la expiación", youtubeId: "i4-b8QYzTBs", startTime: 60 },
    { title: "59. Diosqa kuyakuywan salvawasqanchikmanta / Salvación plena", youtubeId: "rMQr6i-Z3TA", startTime: 60 },
    { title: "60. Moisés broncemanta culebrata kaspipi sayachisqanmanta / Moisés, la serpiente y la sanidad", youtubeId: "WANRA580wqk", startTime: 60 },
    { title: "61. Diosqa llakipayakuywan salvawaspanchik hampiykuwasqanchikmanta / La misericordia de sanar", youtubeId: "nsatY7GflUE", startTime: 60 }
  ];

  const modulo_c1 = [
    { title: "62. Kay yachachikuykuna imapaqmi kasqanmanta / Introducción al Curso Internacional", youtubeId: "9PDPjR3q_i4", startTime: 60 }
  ];

  const modulo_c2 = [
    { title: "63. Imaynatam iglesiapi Escuela Biblicata hatarichinamanta / El modelo para el entrenamiento ministerial", youtubeId: "KAqwUBgk68Q", startTime: 60 },
    { title: "64. ¿Imapaq hinaspa imanasqataq escuela biblicata hatarichisun? / La meta y el objetivo del ministerio de enseñanza", youtubeId: "vaIvbqnytHA", startTime: 60 },
    { title: "65. Sumaqta Tanteaykuspa Escuela Biblicata hatarichinamanta / Planifique su instituto", youtubeId: "oNuIYNxVQ7k", startTime: 60 }
  ];

  const modulo_c3 = [
    { title: "66. ¿Imapaqtaq iglesiapi necesitanchik taksa grupokuna hatarichiyta? / Propósitos de los grupos celulares", youtubeId: "9ZU7C0UQvTg", startTime: 60 },
    { title: "67. Taksa grupokunawan chinkasqa runakunata haypanamanta / Evangelizando a los perdidos a través de los grupos celulares", youtubeId: "g1GDO1JlrUA", startTime: 60 },
    { title: "68. Lederkunata iglesiapi hatarichinamanta / Desarrollando líderes", youtubeId: "lA60g17ZxwI", startTime: 60 },
    { title: "69. Imaynatam taksa grupokunawan iglesiata mirachinamanta / Los principios de la multiplicación", youtubeId: "fvWkD7tqSlM", startTime: 60 },
    { title: "70. Imayna runakunatam iglesiapi lider kanankupaq akllanamanta / Líderes grandes en la Iglesia", youtubeId: "qoA_UQGq-pE", startTime: 60 }
  ];

  const modulo_c4 = [
    { title: "71. Jesuspa hatun kamachikuy qusqanmanta / La gran comisión", youtubeId: "IgqjwEO6m4s", startTime: 60 },
    { title: "72. Chuya Espiritupa atiyninwan evangeliota willakunanchikmanta / Cómo puede usted ponerse a disposición del Espíritu Santo", youtubeId: "V05AcOd7O94", startTime: 60 },
    { title: "73. Diospa siminta apaqkunaqa allin kawsakuq kanankumanta / La integridad necesaria para llevar la unción del Espíritu Santo", youtubeId: "qVKxS_1kWos", startTime: 60 },
    { title: "74. Hatun kamachikuyta rurananchikmanta / La magnitud de la gran comisión", youtubeId: "IYGAxKvJD24", startTime: 60 },
    { title: "75. Chuya Espiritupa atiyninmanta / El fuego del Espíritu Santo", youtubeId: "nqPxHTEVVbc", startTime: 60 }
  ];

  const modulo_c5 = [
    { title: "76. Limpio sunquwan Diosta sirvikunanchikmanta / La integridad del corazón", youtubeId: "9oeolT5c-9s", startTime: 60 },
    { title: "77. Pampachakuq Sunquyuq kananchikmanta / Un espíritu que perdona", youtubeId: "iLOYQXYAGWM", startTime: 60 }
  ];

  const modulo_c6 = [
    { title: "78. Ñuqanchikpaq Diospa munasqanta chaskispa rurananchikmanta / Abracemos la visión", youtubeId: "yGnejHMY1rY", startTime: 60 },
    { title: "79. Imayna sunquyuqmi Diospa kamachikuynin chaskiq runa kananmanta / Las cualidades de la visión", youtubeId: "rAg-sfr8jqc", startTime: 60 },
    { title: "80. ¿Imataq visión, imaynatataq rurayta atisun? / Enfocando la visión", youtubeId: "ZE6cQzvTmY8", startTime: 60 },
    { title: "81. Kay pachapaq imatam Dios munasqanmanta / La visión de Dios para las naciones", youtubeId: "dkub_bu8aN4", startTime: 60 },
    { title: "82. ¿Maypitaq qullqita tarisun Diospa imam munasqanta rurananchikpaq? / El financiamiento de la visión", youtubeId: "QdEbVazQn-g", startTime: 60 }
  ];

  const modulo_c7 = [
    { title: "83. Imaynatam musuq iglesiata hatarichinamanta / Una descripción del plantamiento de Iglesias", youtubeId: "MKcyNUT8DWI", startTime: 60 },
    { title: "84. Iglesia liderkunata ministeriokunata hatarichiq kanankumanta / La Iglesia local como centro de entrenamiento de ministerios", youtubeId: "LUSLkSK0e-M", startTime: 60 },
    { title: "85. Musuq iñiqkunata don chaskisqankuman hina llamkachinamanta / Ministros vocacionales en la Iglesia local", youtubeId: "l4Rd8PN-iRk", startTime: 60 },
    { title: "86. Musuq Iglesiata hatarichinapaq grupokunata formanamanta / Identificando equipos para plantar Iglesias", youtubeId: "fuioBqytaPA", startTime: 60 },
    { title: "87. Iglesia hatarichimunanpaq grupo formasqanchikta kachanamanta / Preparando y enviando a los equipos que planten Iglesias", youtubeId: "jt6St25Avf4", startTime: 60 }
  ];

  const modulo_c8 = [
    { title: "88. Iñiqkunata Dios imaynatam guiasqanmanta / Las diversas maneras que Dios guía a su pueblo", youtubeId: "ZdENEW_A9T4", startTime: 60 },
    { title: "89. Espiritunchiktakama Dios guiawasqanchikmanta / Cómo nos guía Dios mediante nuestro espíritu", youtubeId: "OIrHqbsGybw", startTime: 60 },
    { title: "90. Sasachakuy tiempokunapi Diospa yanapakuyninta chaskinamanta / Cómo recibir dirección en tiempos difíciles", youtubeId: "v4lOBisEXBk", startTime: 60 },
    { title: "91. Rurayninchikmanta akllasqa kaqkunata ñawpaqman churanamanta / Las prioridades de la vida", youtubeId: "2PzDI23xZX8", startTime: 60 },
    { title: "92. Diosta maskaspa ima pantachikuykunatam tarinanchikmanta / Trampas y peligros al buscar la guianza de Dios", youtubeId: "wCJRCstHtO8", startTime: 60 }
  ];

  const modulo_d1 = [
    { title: "93. Israel kasta runakuna desiertopi ñakarisqanmanta / Mentalidades; visión y responsabilidad", youtubeId: "GypmLobBAb8", startTime: 60 },
    { title: "94. Pruebasqa kaspa imatam rurananchikmanta / Responsabilidad y pruebas", youtubeId: "9LvvWwqee94", startTime: 60 },
    { title: "95. Tukuy imamanta quejakuspa imamantapas hukman tumpaymanta / Quejándose e impaciencia", youtubeId: "MNeGjHZapA4", startTime: 60 },
    { title: "96. Pacienciakuyqa mana yachaspa yanqa ñakariymanta / Impaciencia y la mentalidad de víctima", youtubeId: "ftDkQnmE8G4", startTime: 60 },
    { title: "97. Kikinchikta llakipayakuspa mana huchayuqpaq hapikuymanta / La mentalidad de víctima y lástima propia", youtubeId: "3Miy9GfRN2A", startTime: 60 },
    { title: "98. Diospa churinña kasqanchik rayku kuyapayakunanchikmanta / La autoestima", youtubeId: "af0HAQMg2jg", startTime: 60 },
    { title: "99. Hukpa kaqta envidiakuspa runapa kaqta munapayaspa runaman tupachikuymanta / Los celos, la testarudez y la rebeldía", youtubeId: "LfAHcY0M06o", startTime: 60 }
  ];

  const modulo_d2 = [
    { title: "100. Imayna sunquyuqtaq huk lider kanan / El corazón de un líder", youtubeId: "m2MdE0zO7t8", startTime: 60 },
    { title: "101. Runaqa sunqunpa munasqanman hinam kawsanqa / Su corazón determina el curso de la vida", youtubeId: "5De9AWfg2Kg", startTime: 60 },
    { title: "102. Ruraqa kawsanqa utaq ruwanqapas sunqunpa kamachisqanman hinam / Su corazón determina su éxito en la vida", youtubeId: "gWAq3xyKLdE", startTime: 60 },
    { title: "103. Pitaq kanki ¿Liderchu icha qatikuqllachu / ¿Líderes o seguidores?", youtubeId: "8uo47QJJRrM", startTime: 60 },
    { title: "104. Imapitaq liderkuna pantan / Trampas a los visionarios", youtubeId: "qLT7FrkyXCA", startTime: 60 }
  ];

  const modulo_d3 = [
    { title: "105. Huk lider allin llamkaq kananmanta / Eficacia", youtubeId: "LBaxlgVrvfk", startTime: 60 }
  ];

  const modulo_d4 = [
    { title: "106. Kuyanakunamanta / Introducción", youtubeId: "nMQiVbG3p80", startTime: 60 },
    { title: "107. Runapa paqariyninmanta hinaspa maymanmi rinanmanta / Orígenes y destinos", youtubeId: "uNVzsvpANzc", startTime: 60 },
    { title: "108. Imatataq supay ruwachkan runakunata rakinananpaq / Las estrategias del enemigo", youtubeId: "FJVeaT6P040", startTime: 60 },
    { title: "109. Huklla kawsakuy atinamanta / Viviendo una vida en reconciliación", youtubeId: "l4Opo_L9EY4", startTime: 60 }
  ];

  const modulo_d5 = [
    { title: "110. Imatam infierno sumaqta pakasqanmanta / El secreto mejor guardado del infierno", youtubeId: "J8jX_SKczyY", startTime: 60 },
    { title: "111. Diospi mana iñiq runakunamanta utaq ateokunamanta / El ateísmo", youtubeId: "0Z_6AC67QZY", startTime: 60 },
    { title: "112. Evangeliota chiqap willakuqkunamanta / Evangelismo militante", youtubeId: "NBfA2ajueUo", startTime: 60 },
    { title: "113. Chiqap iñikuywan hawa sunqulla iñikuymanta / La conversión verdadera y falsa", youtubeId: "i8IimQhq6G8", startTime: 60 },
    { title: "114. Imaynatataq Diospaq tukuy sunquwan llamkayta atichwan / Cómo conseguir el ardor hacia Dios", youtubeId: "1DHbfajb4Ck", startTime: 60 }
  ];

  const modulo_d6 = [
    { title: "115. Bibliam nin supaywan guerrapi kasqanchikta / El fundamento bíblico de la guerra", youtubeId: "Fh0TOfZM4Ys", startTime: 60 },
    { title: "116. Yachananchikmi mana allin espiritukunawan peleayta / La comprensión de la guerra espiritual", youtubeId: "dSl-AuQAFjs", startTime: 60 },
    { title: "117. Guerrata peleanapaq Diosta atyninmanta hinaspa infiernopa punkunmanta / Oración de guerra y las puertas del Infierno", youtubeId: "NkF2OzVa8gw", startTime: 60 },
    { title: "118. Infiernopa punkun tuñichinamanta / Derribar las puertas del Infierno", youtubeId: "b9LrOPIl8x0", startTime: 60 },
    { title: "119. Diospa atiyninwanmi peleananchikqa / Usar la autoridad en la sociedad", youtubeId: "9J1eWAbOX5E", startTime: 60 }
  ];

  const modulo_d7 = [
    { title: "120. Wichichiwananchikpaq supaypa trampa churamusqanmanta / La carnada de Satanás", youtubeId: "--wW4XxaSIw", startTime: 60 },
    { title: "121. Diospa atiyninwan pachallikunanchikmanta / Cubierto", youtubeId: "p6j3GIDOvos", startTime: 60 }
  ];

  const modulo_d8 = [
    { title: "122. Diospa Siminta Yachaspa sunqupi sapinchanamanta / Memorización bíblica (PARTE 1)", youtubeId: "C8ZqXCsR2H0", startTime: 60 },
    { title: "123. Diospa Siminta Yachaspa sunqupi sapinchanamanta / Memorización bíblica (PARTE 2)", youtubeId: "WDpbUjjdxR8", startTime: 60 },
    { title: "124. Ñakasqa kaykunata pakinanchikmanta utaq vencenanchikmanta / Quebrantando las maldiciones generacionales", youtubeId: "5DJLoCY_WG0", startTime: 60 }
  ];

  const modulo_e1 = [
    { title: "125. Jesúsmi yachachiqninchikqa / Jesús, nuestro modelo", youtubeId: "M8IFgtazxuk", startTime: 60 },
    { title: "126. Jesúsmi ruranapaq kallpanchaqninchik / Jesús, nuestra inspiración", youtubeId: "9goY9Hc9tNA", startTime: 60 },
    { title: "127. Imanisuntaq kasukusunchu manachu / Nuestra respuesta", youtubeId: "KrkBUU_-0pQ", startTime: 60 },
    { title: "128. Ruranapaq kachasqam kanchik / Escogidos para servicio", youtubeId: "CyQb8QEZaj8", startTime: 60 },
    { title: "129. Imataq willakuyninchikta valechin / Nuestra credibilidad", youtubeId: "QflTMzXifII", startTime: 60 },
    { title: "130. Pitaq kanchik Diospi / Nuestra legalidad", youtubeId: "gvLcglR4N9I", startTime: 60 },
    { title: "131. Dios qanwan kaptinga maynatataq rurawaq / La experiencia", youtubeId: "h3QgojwLryQ", startTime: 60 }
  ];

  const modulo_e2 = [
    { title: "132. Diospa munasqanman hina kawsanamanta / La forma de vida máxima", youtubeId: "rNUOgzr0MEM", startTime: 60 },
    { title: "133. Quyta qallarinamanta / Cómo empezar una forma de vida de dar", youtubeId: "odZAqWUEm1k", startTime: 60 },
    { title: "134. Quy imapaqmi siqvikusqamanta / Los beneficios de vivir dando a Dios", youtubeId: "5OUlapX7BCs", startTime: 60 },
    { title: "135. Manaña atinanchikama qunamanta / Vivir y dar más de lo posible", youtubeId: "w4rdSvkZUaA", startTime: 60 },
    { title: "136. ¿Atinmanchu Dios Atinqa punim / ¿Puede Dios? Dios puede", youtubeId: "BU1waB2KRD0", startTime: 60 }
  ];

  const modulo_e3 = [
    { title: "137. Bibliaman hina ¿Pitaq huk anciano / ¿Qué es un anciano en el sentido bíblico?", youtubeId: "H5axVRMfOyA", startTime: 60 },
    { title: "138. Ancianokunapa rurayninmanta / La función de los Ancianos", youtubeId: "CEE6qkrR_bo", startTime: 60 },
    { title: "139. Ancianokunapa kawsayninmanta / El carácter de los Ancianos", youtubeId: "y4oqJljzWyc", startTime: 60 },
    { title: "140. Iglesiapi pichqan ministeriokunamanta. 1 / El ministerio de cinco pasos. PARTE 1", youtubeId: "8aSeVw_koA4", startTime: 60 },
    { title: "141. Iglesiapi pichqan ministeriokunamanta. 2 / El ministerio de cinco pasos. PARTE 2", youtubeId: "TU9dlFRBxHc", startTime: 60 }
  ];

  const modulo_e4 = [
    { title: "142. Imanintaq Biblia warmakunawan llamkanamanta / Qué dice la Biblia acerca del ministerio de niños", youtubeId: "NHedjNQCL1I", startTime: 60 },
    { title: "143. Samaykachikuq kanamanta / Las leyes de hospitalidad", youtubeId: "cyCZhRj-lQc", startTime: 60 },
    { title: "144. Tukupay tiempokunapi cosechumanta / La cosecha de los últimos días", youtubeId: "qtGElVrkyBw", startTime: 60 },
    { title: "145. Jesusmanta warmakunaman yachachinamanta / Predicándoles a los niños", youtubeId: "6vHVpvQOimg", startTime: 60 },
    { title: "146. Pastor jovenkunawan llamkananmanta / Ministerio de jóvenes dirigido por un Pastor", youtubeId: "vsZy0UGoR_Q", startTime: 60 },
    { title: "147. Warmakuna uyarinanpaq hina yachachinamanta / Cómo mantener la atención de un niño", youtubeId: "bZQKjfYeLsw", startTime: 60 },
    { title: "148. Sumaq yachachikuq kanamanta / Cómo ser un excelente narrador", youtubeId: "Zv8MZGlzonk", startTime: 60 }
  ];

  const modulo_e5 = [
    { title: "149. Titerekunawan wawakunaman yachachinamanta / Usando títeres en el ministerio de niños", youtubeId: "cb3ayOnlgGA", startTime: 60 },
    { title: "150. Imaynatataq sasachakuykunata allichachwan / Cómo ser una persona que resuelve problemas", youtubeId: "TrTaS-aNq88", startTime: 60 },
    { title: "151. Iglesia mirachinapaq warmakunawan llamkay qallarinamanta / Organizando el ministerio de niños para el crecimiento", youtubeId: "717rGKNaV9w", startTime: 60 },
    { title: "152. Imaynatam hukpa yanapakuyninta tarichwan / Cómo obtener la ayuda de otros", youtubeId: "y1LEKVZ5T5s", startTime: 60 }
  ];

  const modulo_e6 = [
    { title: "153. Jovenkunawan imaynam llamkanamanta / Establecer una visión para el ministerio de jóvenes", youtubeId: "-cO_BS6-KFE", startTime: 60 },
    { title: "154. Liderkunata llamkachinamanta / Guiando a líderes a ejecución máxima", youtubeId: "DUNU5QK-MBk", startTime: 60 },
    { title: "155. Jovenkunapa sunqunman chayanamanta / Comunicándose efectivamente con la juventud", youtubeId: "LIlah7jGEjc", startTime: 60 },
    { title: "156. Jovenkunawan llamkanapaq tanteanaman / Planeando efectivamente un ministerio de jóvenes", youtubeId: "sOFj-ErglTA", startTime: 60 }
  ];

  const allModulesData = [
    { number: "01", title: "IMAKUNAPIM IÑIYNINCHIK SAPINCHASQA KASQANMANTA / LOS FUNDAMENTOS DE LA FE", lessons: modulo_a1 },
    { number: "02", title: "DIOSPA ATIYNINPI KAWSASPA UNQUQKUNATA SANOYACHINAMANTA / LA VIDA SOBRENATURAL Y LA SANIDAD", lessons: modulo_a2 },
    { number: "03", title: "MUSUQ TESTAMENTOMANTA / ESTUDIO PANORÁMICO DEL NUEVO TESTAMENTO", lessons: modulo_a3 },
    { number: "04", title: "DIOSTA IMAYNATAM YUPAYCHANAMANTA / ALABANZA Y ADORACIÓN", lessons: modulo_a4 },
    { number: "05", title: "MAÑAKUYPA ATIYNINMANTA / EL PODER DE LA ORACIÓN", lessons: modulo_b1 },
    { number: "06", title: "IGLESIAPI YANAPAKUNAMANTA / EL MINISTERIO DE AYUDAS", lessons: modulo_b2 },
    { number: "07", title: "ÑAWPAQ TESTAMENTOMANTA / ESTUDIO PANORÁMICO DEL ANTIGUO TESTAMENTO", lessons: modulo_b3 },
    { number: "08", title: "EVANGELIOPA SUNQUNMANTA / LA ESENCIA DEL EVANGELIO", lessons: modulo_b4 },
    { number: "09", title: "JESUS HAMPIWAQNINCHIK KASQANMANTA / JESÚS SANA HOY", lessons: modulo_b5 },
    { number: "10", title: "KAY YACHACHIKUYKUNA IMAPAQMI KASQANMANTA / MOVILIZAR PARA MULTIPLICAR", lessons: modulo_c1 },
    { number: "11", title: "IMAYNATAM IGLESIAPI ESCUELA BIBLICATA HATARICHINAMANTA / CÓMO DESARROLLAR UNA ESCUELA BÍBLICA EN SU IGLESIA", lessons: modulo_c2 },
    { number: "12", title: "IGLESIATA MIRACHINAPAQ TAKSA GRUPOKUNAWAN LLAMKANAMANTA / LOS GRUPOS CELULARES", lessons: modulo_c3 },
    { number: "13", title: "EVANGELIOTA ATIYWAN WILLAKUNAMANTA / EL EVANGELISMO CON PODER", lessons: modulo_c4 },
    { number: "14", title: "LIMPIO SUNQUWAN ALLIN KAWSAKUYPI PURINANCHIKMANTA / LA INTEGRIDAD Y LIDERAZGO", lessons: modulo_c5 },
    { number: "15", title: "DIOSPA OBRANPI LLAMKANANCHIKMANTA / LOS LÍDERES Y SU VISIÓN", lessons: modulo_c6 },
    { number: "16", title: "GRUPOKUNATA FORMASPA MUSUQ IGLESIAKUNATA HATARICHINAMANTA / CÓMO PLANTAR IGLESIAS USANDO EQUIPOS", lessons: modulo_c7 },
    { number: "17", title: "KAWSAYNINCHIKPI CHUYA ESPIRITUPA GUIASQAN KANANCHIKMANTA / CÓMO SER GUIADOS POR EL ESPÍRITU SANTO", lessons: modulo_c8 },
    { number: "18", title: "DIOSPA PROMESANKUNAN HAYPANATA IMAKUNAM HARKAWASQANCHIKMANTA / MENTALIDAD DE DESIERTO", lessons: modulo_d1 },
    { number: "19", title: "LIDERAZGOMANTA / CÓMO DESARROLLAR LÍDERES", lessons: modulo_d2 },
    { number: "20", title: "TAKSA GRUPOKUNAPI ALLIN LIDER KANAMANTA / CÓMO SER LÍDER DE UN GRUPO CELULAR", lessons: modulo_d3 },
    { number: "21", title: "HUKLLA KAWSAKUNAMANTA / LA RECONCILIACIÓN", lessons: modulo_d4 },
    { number: "22", title: "EVANGELIOTA SAPA RUNAMAN WILLAKUNAMANTA / EL EVANGELISMO PERSONAL", lessons: modulo_d5 },
    { number: "23", title: "SUPAYTA VENCENAMANTA / LA GUERRA ESPIRITUAL", lessons: modulo_d6 },
    { number: "24", title: "PAMPACHANAKUNANCHIKMANTA / LA AUTORIDAD Y EL PERDÓN", lessons: modulo_d7 },
    { number: "25", title: "DIOS VENCECHIWASQANCHIKMANTA / VICTORIA ESPIRITUAL", lessons: modulo_d8 },
    { number: "26", title: "CRISTOWAN HUKLLAÑA KASQANCHIKMANTA / LA CONEXIÓN CON CRISTO", lessons: modulo_e1 },
    { number: "27", title: "KAPUQNINCHIKWAN DIOSTA SIRVIKUNAMANTA / VIVIENDO PARA DAR", lessons: modulo_e2 },
    { number: "28", title: "IMAPAQMI DIOS MINISTERIOKUNATA IGLESIAPI HATARICHISQANMANTA / LA ANCIANIDAD BÍBLICA", lessons: modulo_e3 },
    { number: "29", title: "WARMAKUNAWAN IMAYNATAM LLAMKANAMANTA / ALCANCEMOS UNA NUEVA GENERACIÓN", lessons: modulo_e4 },
    { number: "30", title: "WARMAKUNATA DIOSPAQ IMAYNAM QISPICHINAMANTA / CÓMO ADMINISTRAR LA IGLESIA PARA EL MAÑANA", lessons: modulo_e5 },
    { number: "31", title: "JOVENKUNAWAN LLAMKANAMANTA / LA MINISTRACIÓN DE JÓVENES", lessons: modulo_e6 }
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
    if (matchesAllWords(mod.title)) {
      return mod;
    }

    // Filtramos JORNADAS
    const filteredLessons = mod.lessons.filter(lesson => 
      matchesAllWords(lesson.title)
    );

    return { ...mod, lessons: filteredLessons };
    
  }).filter(mod => mod.lessons.length > 0);

  return (
    <div className="w-full px-6 py-12 md:py-20 flex flex-col items-center min-h-[60vh]">
      
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
            title={mod.title} 
            lessons={mod.lessons} 
            isExpanded={searchTerm.length > 0} // Si hay texto en el buscador, se abre solo
            onSelectLesson={(lesson) => setSelectedLesson(lesson)}
          />
        ))}
      </div>

      <VideoModal 
        isOpen={selectedLesson !== null} 
        onClose={() => setSelectedLesson(null)} 
        title={selectedLesson?.title || ""}
        youtubeId={selectedLesson?.youtubeId}
        startTime={selectedLesson?.startTime} 
      />
    </div>
  );
}