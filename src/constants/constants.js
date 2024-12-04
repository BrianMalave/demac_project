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
  frutillarLogo
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
    description: "Ejecución paso superior águila sur, paso superior casino, montaje de cajones prefabricados y obras de arte.",
    clients: [
      { logo: ferrovialLogo, alt: "ferrovial partner Demac" },
    ],
  },
  {
    title: "Obras de Infraestructura y Superestructura Puente Bicentenario Oriente",
    year: "2016 - 2027",
    description: "Desmontaje de Puente Mecano provisorio sobre Río Bíobio luego del terremoto 27F, trabajos incluyeron desarme, traslado a regimiento Chacabuco y acopio en el mismo lugar.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: arrigoniLogo, alt: "arrigoni partner Demac" }
    ],
  },
  {
    title: "Construcción Puente Ferroviario",
    year: "2017",
    description: "Construcción de infraestructura de Ramal 6 Norte, Tramos Faltantes, Paso Superior San Pedro y Lazo 1 Sur, realizando labores de construcción de columnas, vigas de amarre, cabezales y estribos de puente.",
    clients: [
      { logo: sacyrLogo, alt: "sacyr partner Demac" },
    ],
  },
  {
    title: "Construcción Puentes y Fosos, Ruta Nahuelbuta",
    year: "2017",
    description: "Construcción de infraestructura de Ramal 6Norte, Tramos Faltantes, Paso Superior San Pedro y Lazo 1 Sur, realizando labores de construcción de columnas, vigas de amarre, cabezales y estribos de puente.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
    ],
  },
];

export const maritimas = [
  {
    title: "Reparación Molo 500 Norte Base Naval Talcahuano",
    year: "Próximamente",
    description: "Reparación y habilitación de nuevas redes de servicios, incluyendo agua potable, alcantarillado, red contra incendios y electricidad, en el sector Molo 500 Norte. Además, se realizó la pavimentación en adocreto de las vías, garantizando una infraestructura duradera y funcional para la zona.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: comsaLogo, alt: "comsa partner Demac" },
      { logo: dragadosLogo, alt: "dragados partner Demac" },
    ],
  },
  {
    title: "Construcción Molo Sur Base Naval Talcahuano",
    year: "Próximamente",
    description: "Reparación de frentes de atraque mediante intervención en grietas y reconstrucción parcial de consolas de apoyo en vigas transversales. Incluye el montaje e instalación de nuevas defensas y bitas, asegurando la estabilidad estructural y la operatividad del área portuaria.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: comsaLogo, alt: "comsa partner Demac" },
      { logo: dragadosLogo, alt: "dragados partner Demac" },
    ],
  },
  {
    title: "Reparaciones Filtraciones Dique Seco N°2 Asmar Thno",
    year: "Próximamente",
    description: "Construcción de infraestructura de Ramal 6 Norte, Tramos Faltantes, Paso Superior San Pedro y Lazo 1 Sur, realizando labores de construcción de columnas, vigas de amarre, cabezales y estribos de puente.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac" },
      { logo: comsaLogo, alt: "comsa partner Demac" },
      { logo: dragadosLogo, alt: "dragados partner Demac"},
    ],
  },
  {
    title: "Rehabilitación redes AP y RCI Asmar Thno",
    year: "Próximamente",
    description: "Suministro, fabricación, instalación, pruebas y puesta en marcha de los sistemas de nuevas redes contra incendio y agua potable en la calle 34 de ASMAR. Además, se realizó la reparación y pintura de las oficinas del consorcio Dragados, Comsa y Besalco, junto con las oficinas de la inspección técnica de obras, asegurando la calidad y funcionalidad de las instalaciones.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac"},
      { logo: comsaLogo, alt: "comsa partner Demac"},
      { logo: dragadosLogo, alt: "dragados partner Demac"},
    ],
  },
];

export const aeroportuarias = [
  {
    title: "Ampliación pistas de aterrizaje Aeródromo, Obras de saeamiento, Construcción de Edificios y Salas de Bomba Carriel Sur",
    year: "Próximamente",
    description: "Incluye excavaciones masivas, rellenos estructurales y hormigonado de nuevas pistas de aterrizaje. También se ejecutó la construcción de cajones dobles y obras de arte para las pistas, junto con la preparación e instalación de enfierradura para edificios de la DGAC, cajones, estanques y salas de bombas, asegurando la funcionalidad y seguridad de la infraestructura aeroportuaria.",
    clients: [
      { logo: icafalLogo, alt: "icafal partner Demac" }
    ],
  }
];

export const industriales = [
  {
    title: "Montaje de equipos industriales Frutillar",
    year: "2006",
    description: "Montaje de equipos REDA.",
    clients: [
      { logo: frutillarLogo, alt: "frutillar partner Demac" }
    ],
  },
  {
    title: "Hidroeléctrica San Andrés",
    year: "2012",
    description: "Montaje y soldadura tubería de acero.",
    clients: [
      { logo: icafalLogo, alt: "icafal partner Demac" }
    ],
  },
  {
    title: "Ampliación Planta Lechera",
    year: "2006 - 2008",
    description: "Montaje y soldadura tubería de acero pipe rack de servicio y proceso, montaje de caldera chips.",
    clients: [
      { logo: frutillarLogo, alt: "frutillar partner Demac" }
    ],
  },
  {
    title: "Desarme, traslado y acopio de Puente Mecano",
    year: "2016 - 2017",
    description: "Desmontaje de Puente Mecano provisorio sobre Río Bíobio luego del terremoto 27F , trabajos incluyeron desarme, traslado a regimiento Chacabuco y acopio en el mismo lugar.",
    clients: [
      { logo: frutillarLogo, alt: "frutillar partner Demac" }
    ],
  },
  {
    title: "Proyecto MAPA",
    year: "2022",
    description: "Movimiento de tierras y montaje de estructuras.",
    clients: [
      { logo: besalcoLogo, alt: "besalco partner Demac"},
      { logo: comsaLogo, alt: "comsa partner Demac"}
    ],
  }
];