import {
  besalcoLogo,
  icafalLogo,
  ferrovialLogo,
  comsaLogo,
  asmarLogo,
  arrigoniLogo,
  belfiLogo,
  sacyrLogo,
  dragadosLogo,
  frutillarLogo,
  aeropuerto1,
  angostura1,
  dique3,
  mapa1,
  molo3,
  Puenteb5,
  molo2
} from '../assets/assets'

export const navLinks = [
  {
    id: "nosotros",
    title: "Nosotros",
  },
  {
    id: "servicios",
    title: "Servicios",
  },
  {
    id: "partners",
    title: "Partners",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

export const disclosureInfo = [
  {
    title: "Servicio integral de Ingeniería básica y de detalle",
    content: `
      Nuestra experiencia en el sector de la construcción nos permite garantizar la viabilidad técnica, económica y operativa de cada proyecto, abarcando:
      - Estudios de factibilidad y viabilidad técnica y económica.
      - Diseño conceptual y detallado de proyectos.
      - Elaboración de planos, especificaciones técnicas y documentación técnica completa.
      - Análisis y optimización de costos.
      - Asesoría en la selección de materiales y equipos.
      - Gestión de permisos y licencias.
      - Supervisión de obra.
    `,
  },
  {
    title: "Habilitación de redes de servicio y piping",
    content: `
      Somos expertos en esta área, desde la instalación de redes de agua potable, alcantarillado, gas y electricidad hasta el montaje de sistemas de piping para diferentes aplicaciones, incluyendo soluciones de riego y drenaje.
    `,
  },
  {
    title: "Reparación y construcción de estructuras de hormigón armado",
    content: `
      Nos encargamos de la reparación de estructuras dañadas por fisuras, corrosión o sismos, así como del refuerzo de estructuras existentes para aumentar su capacidad de carga.
      También construimos nuevas estructuras de hormigón armado, como cimientos, muros, vigas y losas, utilizando técnicas de vanguardia para garantizar la más alta calidad y durabilidad de las mismas.
    `,
  },
  {
    title: "Desarme y montaje de estructuras metálicas",
    content: `
      Contamos con la experiencia y el equipamiento necesarios para manejar estructuras de diferentes tamaños y complejidades, utilizando herramientas y técnicas especializadas que garantizan la seguridad y precisión del trabajo.
    `,
  }
];

export const solutions = [
  "Solución Integral",
  "Solución Personalizada",
  "Solución de Ingeniería",
  "Solución de Habilitación"
];

export const viales = [
  {
    title: "Terceras pistas tramo II y nueva plaza de peaje Angostura",
    year: "2014",
    description: "Ejecución paso superior Águila Sur, paso superior casino, montaje de cajones prefabricados y obras de arte.",
    clients: [
      { logo: ferrovialLogo, alt: "ferrovial partner Demac" },
    ],
    project: angostura1
  },
  {
    title: "Obras de Infraestructura y Superestructura Puente Bicentenario Oriente",
    year: "2016 - 2017",
    description: "Construcción de infraestructura de Ramal 1 Sur, Lazo 3 Norte, Ramal 6 Norte, Paso Superior San Pedro y Lazo 1 Sur realizando labores de construcción de columnas, vigas de amarre, cabezales y estribos, incluyendo rellenos estructurales, Tramos Faltantes; Recrecido lateral y recrecido completo de vigas de amarre existentes en puente oriente (31 cepas), realizando labores de demolición, movimiento de tierra , agotamiento de napas, colocación de pernos de anclaje, obras civiles.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: arrigoniLogo, alt: "arrigoni partner Demac" }
    ],
    project: Puenteb5
  },
  {
    title: "Construcción Puente Ferroviario",
    year: "2022 - 2023",
    description: "Montaje y habilitación de instalación de faenas e instalación de cortinas anti-turbidez y arriendo de botes.",
    clients: [
      { logo: sacyrLogo, alt: "sacyr partner Demac" },
    ],
    // project: ""
  },
  {
    title: "Construcción Puentes y Fosos, Ruta Nahuelbuta",
    year: "2017",
    description: "Se llevó a cabo la construcción de puentes con estructuras de alta resistencia, diseñados para soportar el tráfico pesado. Además, se implementaron sistemas de drenaje, incluidos fosos, para optimizar la evacuación de aguas pluviales.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: belfiLogo, alt: "belfi partner Demac" },
    ],
    // project: ""
  },
  // {
  //   title: "Acceso a Planta de Inacesa",
  //   year: "2007",
  //   description: "Se realizó Obra Vial.",
  //   clients: [
  //     { logo: "", 
  //       alt: "CEMENTOS BIO BIO S.A." },
  //   ],
  //   // project: ""
  // },
  // {
  //   title: "Atravieso Los Lingues, Panamericana Sur",
  //   year: "2007",
  //   description: "Se realizó Obra Civil.",
  //   clients: [
  //     { logo: "", 
  //       alt: "AUTOPISTADEL MAIPO S.A." },
  //   ],
  //   // project: ""
  // },
  // {
  //   title: "Autopista Santiago, Talca y By-pass Rancagua",
  //   year: "2004 - 2005",
  //   description: "Saneamiento, Obras Civiles, Colectores de Agua lluvia.",
  //   clients: [
  //     { logo: ferrovialLogo, 
  //       alt: "FERROVIAL & AGROMAN CHILE S.A." },
  //   ],
  //   // project: ""
  // },
];

export const maritimas = [
  {
    title: "Reparación Molo 500 Norte Base Naval Talcahuano",
    description: "Reparación y habilitación de nuevas redes de servicios, incluyendo agua potable, alcantarillado, red contra incendios y electricidad, en el sector Molo 500 Norte. Además, se realizó la pavimentación en adocreto de las vías, garantizando una infraestructura duradera y funcional para la zona.",
    year: "2014 - 2015",
    clients: [
      { logo: dragadosLogo, alt: "dragados partner Demac" },
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: comsaLogo, alt: "comsa partner Demac" },
    ],
    project: molo3
  },
  {
    title: "Construcción Molo Sur Base Naval Talcahuano",
    description: "Reparación de frentes de atraque mediante intervención en grietas y reconstrucción parcial de consolas de apoyo en vigas transversales. Incluye el montaje e instalación de nuevas defensas y bitas, asegurando la estabilidad estructural y la operatividad del área portuaria.",
    year: "2014 - 2015",
    clients: [
      { logo: dragadosLogo, alt: "dragados partner Demac" },
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: comsaLogo, alt: "comsa partner Demac" },
    ],
    project: molo2
  },
  {
    title: "Reparaciones Filtraciones Dique Seco N°2 Asmar Thno",
    year: "2015 - 2016",
    description: "Hidrolavado de muros interiores y demoliciones menores. Preparación y sellado de fisuras, inyección de fisuras y reparación de grietas.",
    clients: [
      { logo: dragadosLogo, alt: "dragados partner Demac" },
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: comsaLogo, alt: "comsa partner Demac" },
    ],
    project: dique3
  },
  // {
  //   title: "Rehabilitación redes AP y RCI Asmar Thno",
  //   description: "Suministro, fabricación, instalación, pruebas y puesta en marcha de los sistemas de nuevas redes contra incendio y agua potable en la calle 34 de ASMAR. Además, se realizó la reparación y pintura de las oficinas del consorcio Dragados, Comsa y Besalco, junto con las oficinas de la inspección técnica de obras, asegurando la calidad y funcionalidad de las instalaciones.",
  //   clients: [
  //     { logo: dragadosLogo, alt: "dragados partner Demac" },
  //     { logo: besalcoLogo, alt: "besalco partner Demac" },
  //     { logo: comsaLogo, alt: "comsa partner Demac" },
  //   ],
  //   // project: ""
  // },
];

export const aeroportuarias = [
  {
    title: "Ampliación pistas de aterrizaje Aeropuerto, Obras de saneamiento, Construcción de Edificios y Salas de Bomba Carriel Sur",
    year: "2018 - 2019",
    description: "Incluye excavaciones masivas, rellenos estructurales y hormigonado de nuevas pistas de aterrizaje. También se ejecutó la construcción de cajones dobles y obras de arte para las pistas, junto con la preparación e instalación de enfierradura para edificios de la DGAC, cajones, estanques y salas de bombas, asegurando la funcionalidad y seguridad de la infraestructura aeroportuaria.",
    clients: [
      { logo: icafalLogo, alt: "icafal partner Demac" }
    ],
    project: aeropuerto1
  }
];

export const industriales = [
  {
    title: "Montaje de equipos industriales Frutillar",
    year: "2006",
    description: "Montaje de equipos REDA",
    clients: [
      { logo: frutillarLogo, alt: "frutillar partner Demac, LÁCTEOS FRUTILLAR S.A." }
    ],
    // project: ""
  },
  {
    title: "Ampliación Planta Lechera",
    year: "2006 - 2008",
    description: "Montaje y soldadura tubería de acero pipe rack de servicio y proceso, montaje de caldera chips.",
    clients: [
      { logo: frutillarLogo, alt: "frutillar partner Demac, LÁCTEOS FRUTILLAR S.A." }
    ],
    // project: ""
  },
  {
    title: "Desarme, traslado y acopio de Puente Mecano",
    year: "2016 - 2017",
    description: "Desmontaje de Puente Mecano provisorio sobre Río Bíobio luego del terremoto 27F , trabajos incluyeron desarme, traslado a regimiento Chacabuco y acopio en el mismo lugar.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: arrigoniLogo, alt: "arrigoni partner Demac" }
    ],
    // project: ""
  },
  {
    title: "Hidroeléctrica San Andrés",
    year: "2012",
    description: "Montaje y soldadura tubería de acero.",
    clients: [
      { logo: icafalLogo, alt: "icafal partner Demac" }
    ],
    // project: ""
  },
  {
    title: "Proyecto MAPA",
    year: "2022",
    description: "Movimiento de tierras y montaje de estructuras.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" }
    ],
    project: mapa1
  },
  // {
  //   title: "Planta de Tratamiento de Aguas Servidas",
  //   year: "2006",
  //   description: "Se realizaron Obras Civiles, Montajes y Piping.",
  //   clients: [
  //     { logo: "", 
  //       alt: "ESSBIO S.A" }
  //   ],
  //   // project: ""
  // }
];

export const civiles = [
  {
    title: "Ampliación de planta de tratamiento de Aguas Servidas, Paine",
    year: "2012 - 2013",
    description: "Movimiento de Tierra y Civiles.",
    clients: [
      { 
        logo: "", 
        alt: "EMPRESA DE INGENIERÍA DE MEDIO AMBIENTE BAPA S.A. (AGUAS ANDINAS)" 
      },
    ],
    // project: ""
  },
  {
    title: "Construcción de Viviendas Valparaiso, San Felipe, Llay-Llay, Catemu",
    year: "2009 - 2012",
    description: "Arquitectura, urbanización, Sanitarias.",
    clients: [
      { 
        logo: "", 
        alt: "CONSTRUCTORA CORSA S.A. (SERVIU V REGIÓN)" },
    ],
    // project: ""
  },
  {
    title: "Construcción de Jardín Infantil y Sala Cuna, Los Andes",
    year: "2010",
    description: "Se realizo la arquitectura del proyecto.",
    clients: [
      { 
        logo: "", 
        alt: "JUNTA NACIONAL DE JARDÍN INFANTIL MUNICIPALIDAD DE LOS ANDES" },
    ],
    // project: ""
  },
  {
    title: "Construcción de Estanques Hormigón para Agua Potable, Machalí",
    year: "2007",
    description: "Se realizó Obra Civil.",
    clients: [
      { 
        logo: "", 
        alt: "EMPRESA DE SERVICIOS SANITARIOS DEL BIO-BIO S.A." 
      },
    ],
    // project: ""
  },
  {
    title: "Modificación techumbre Edificio de Poder, Asmar Thno.",
    year: "2016 - 2017",
    description: "Cambio de pendiente de estructura de techumbre y cubierta de edificio de abastecimiento eléctrico de planta industrial Asmar, Talcahuano.",
    clients: [
      { 
        logo: "", 
        alt: "INGENIERIA CORSA SPA." },
    ],
    // project: ""
  },
  {
    title: "Redes de Agua Potable y Red de incendio en calle 34. Reparación oficinas de inspección técnica, Asmar Thno.",
    year: "2016",
    description: "Suministro, fabricación, instalación, pruebas y puesta en marcha de los sistemas de las nuevas redes contra incendio y agua potable de la calle 34 en Asmar y reparación y pintura de las oficina DCB e ITO (ex jardín infantil).",
    clients: [
      { 
        logo: "", 
        alt: "INGENIERIA CORSA SPA." },
    ],
    // project: ""
  },
];