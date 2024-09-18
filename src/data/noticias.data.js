export const categoriasNoticias = [
  {
    id: 1,
    nombre: "Politica",
    descripcion: "Noticias sobre gobiernos, elecciones y asuntos políticos.",
    color: "#FF0000",
    Url: "/noticias/politica",
    noticias: [
      {
        titulo: "Elecciones presidenciales en Estados Unidos",
        fecha: "2024-11-05",
        periodista: "John Smith",
        descripcion: "Resultados preliminares de las elecciones presidenciales en EE.UU.",
        foto: "https://picsum.photos/800/300",
        cuerpo: "Las elecciones presidenciales de Estados Unidos han concluido con una participación récord. Los primeros resultados muestran una contienda reñida entre los principales candidatos. Se espera que el conteo final tome varios días debido al alto número de votos por correo.",
        prioridad: "altaPrioridad"
      },
      {
        titulo: "Nueva ley de cambio climático en la Unión Europea",
        fecha: "2024-09-15",
        periodista: "Emma Johnson",
        descripcion: "La UE aprueba una ambiciosa ley para combatir el cambio climático",
        foto: "https://picsum.photos/800/300",
        cuerpo: "El Parlamento Europeo ha aprobado una nueva ley que establece objetivos más estrictos para la reducción de emisiones de gases de efecto invernadero. La legislación busca alcanzar la neutralidad de carbono para 2050 y establece metas intermedias para 2030 y 2040.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Cumbre de líderes del G20 en India",
        fecha: "2024-10-01",
        periodista: "Rahul Patel",
        descripcion: "Líderes mundiales se reúnen en Nueva Delhi para discutir desafíos globales",
        foto: "https://picsum.photos/800/300",
        cuerpo: "La cumbre del G20 en Nueva Delhi ha comenzado con discusiones centradas en la recuperación económica post-pandemia, la seguridad alimentaria y la crisis climática. Los líderes buscan alcanzar acuerdos sobre acciones concretas para abordar estos desafíos globales.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Reforma constitucional en Chile",
        fecha: "2024-08-20",
        periodista: "María González",
        descripcion: "Chile aprueba una nueva constitución tras años de debate",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Después de un largo proceso de debate y votación, Chile ha aprobado una nueva constitución que reemplaza a la que estaba vigente desde la dictadura de Pinochet. La nueva carta magna incluye cambios significativos en áreas como derechos sociales y protección del medio ambiente.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Tensiones diplomáticas entre China y Taiwán",
        fecha: "2024-07-12",
        periodista: "Li Wei",
        descripcion: "Aumentan las tensiones entre China y Taiwán tras declaraciones controvertidas",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Las relaciones entre China y Taiwán se han deteriorado después de que el presidente taiwanés hiciera declaraciones sobre la independencia de la isla. China ha respondido con ejercicios militares en el estrecho de Taiwán, aumentando la preocupación internacional sobre un posible conflicto.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Acuerdo de paz en Oriente Medio",
        fecha: "2024-11-30",
        periodista: "Ahmed Al-Mansour",
        descripcion: "Histórico acuerdo de paz firmado entre Israel y Palestina",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Tras décadas de conflicto, Israel y Palestina han firmado un acuerdo de paz histórico mediado por la ONU. El acuerdo incluye compromisos para el establecimiento de fronteras, el estatus de Jerusalén y el retorno de refugiados. La comunidad internacional ha acogido el acuerdo con optimismo cauto.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Reforma del sistema de salud en Canadá",
        fecha: "2024-06-18",
        periodista: "Sophie Tremblay",
        descripcion: "Canadá anuncia una reforma integral de su sistema de salud pública",
        foto: "https://picsum.photos/600/300",
        cuerpo: "El gobierno canadiense ha presentado una reforma integral del sistema de salud pública que busca reducir los tiempos de espera, mejorar la atención en áreas rurales y ampliar la cobertura de servicios de salud mental. La reforma incluye una inversión significativa en infraestructura y personal médico.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Elecciones parlamentarias en Reino Unido",
        fecha: "2024-05-02",
        periodista: "Oliver Brown",
        descripcion: "Resultados sorpresivos en las elecciones generales del Reino Unido",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Las elecciones parlamentarias en el Reino Unido han concluido con resultados inesperados. El partido de oposición ha obtenido una mayoría ajustada, lo que podría llevar a cambios significativos en las políticas del país, incluyendo su relación con la Unión Europea y sus políticas económicas.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Nueva política migratoria en México",
        fecha: "2024-09-05",
        periodista: "Luisa Hernández",
        descripcion: "México implementa una nueva política migratoria centrada en derechos humanos",
        foto: "https://picsum.photos/600/300",
        cuerpo: "El gobierno mexicano ha anunciado una nueva política migratoria que busca equilibrar el control fronterizo con la protección de los derechos humanos de los migrantes. La política incluye programas de integración para refugiados y un enfoque más humanitario en el trato a los migrantes en tránsito.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Reforma educativa en Japón",
        fecha: "2024-04-10",
        periodista: "Yuki Tanaka",
        descripcion: "Japón anuncia una reforma educativa para fomentar la creatividad y el pensamiento crítico",
        foto: "https://picsum.photos/600/300",
        cuerpo: "El Ministerio de Educación de Japón ha presentado una reforma educativa que busca alejarse del enfoque tradicional basado en la memorización. La nueva política educativa enfatiza el desarrollo de habilidades como el pensamiento crítico, la creatividad y la resolución de problemas, con el objetivo de preparar mejor a los estudiantes para los desafíos del siglo XXI.",
        prioridad: "bajaPrioridad"
      }
    ]
  },
  {
    id: 2,
    nombre: "Economia",
    descripcion: "Noticias sobre finanzas, negocios y tendencias económicas.",
    color: "#00FF00",
    Url: "/noticias/economia",
    noticias: [
      {
        titulo: "Récord histórico en el mercado de valores",
        fecha: "2024-10-15",
        periodista: "Sarah Johnson",
        descripcion: "El índice S&P 500 alcanza un nuevo máximo histórico",
        foto: "https://picsum.photos/600/300",
        cuerpo: "El índice S&P 500 ha alcanzado un nuevo récord histórico, superando los 5,000 puntos por primera vez. Este hito refleja la confianza de los inversores en la recuperación económica global y el optimismo sobre el futuro de las empresas tecnológicas. Analistas advierten sobre la posibilidad de una burbuja especulativa.",
        prioridad: "altaPrioridad"
      },
      {
        titulo: "Crisis energética en Europa",
        fecha: "2024-12-01",
        periodista: "Hans Mueller",
        descripcion: "Europa enfrenta una crisis energética debido a la escasez de gas natural",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Los países europeos están experimentando una grave crisis energética debido a la escasez de gas natural. Los precios de la energía han aumentado drásticamente, afectando a hogares y empresas. Los gobiernos están implementando medidas de emergencia y buscando fuentes alternativas de energía para mitigar la crisis.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Lanzamiento de nueva criptomoneda respaldada por bancos centrales",
        fecha: "2024-09-20",
        periodista: "Alex Chen",
        descripcion: "Varios bancos centrales se unen para lanzar una criptomoneda global",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un consorcio de bancos centrales ha anunciado el lanzamiento de una nueva criptomoneda global respaldada por reservas gubernamentales. Esta iniciativa busca proporcionar una alternativa estable a las criptomonedas privadas y mejorar la eficiencia de las transacciones internacionales. El anuncio ha generado debate sobre el futuro del dinero digital.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Fusión histórica en la industria tecnológica",
        fecha: "2024-08-05",
        periodista: "Emily Watson",
        descripcion: "Dos gigantes tecnológicos anuncian su fusión en un acuerdo multimillonario",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Dos de las mayores empresas tecnológicas del mundo han anunciado su fusión en un acuerdo valorado en más de 200 mil millones de dólares. La fusión promete crear un nuevo gigante en áreas como inteligencia artificial, computación en la nube y realidad virtual. Reguladores de varios países han expresado preocupaciones sobre posibles implicaciones anticompetitivas.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Nuevo acuerdo comercial entre Estados Unidos y China",
        fecha: "2024-11-10",
        periodista: "Robert Lee",
        descripcion: "EE.UU. y China firman un acuerdo comercial que reduce las tensiones económicas",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Estados Unidos y China han firmado un nuevo acuerdo comercial que busca reducir las tensiones económicas entre las dos potencias. El acuerdo incluye compromisos para reducir aranceles, aumentar las importaciones agrícolas y proteger la propiedad intelectual. Economistas ven el acuerdo como un paso positivo para la economía global.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Auge de la economía circular",
        fecha: "2024-07-22",
        periodista: "Lisa Green",
        descripcion: "Empresas globales adoptan modelos de economía circular para reducir residuos",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un número creciente de empresas multinacionales está adoptando modelos de economía circular para reducir residuos y mejorar la sostenibilidad. Estas iniciativas incluyen programas de reciclaje avanzados, diseño de productos para la reutilización y nuevos modelos de negocio basados en el alquiler y la reparación. La tendencia está impulsando la innovación y creando nuevas oportunidades de empleo.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Revolución en la industria automotriz",
        fecha: "2024-06-30",
        periodista: "Carlos Rodríguez",
        descripcion: "La industria automotriz se transforma con la producción masiva de vehículos eléctricos",
        foto: "https://picsum.photos/600/300",
        cuerpo: "La industria automotriz está experimentando una transformación radical con la producción masiva de vehículos eléctricos. Grandes fabricantes han anunciado planes para eliminar gradualmente la producción de vehículos de combustión interna en la próxima década. Esta transición está impulsando inversiones en infraestructura de carga y tecnologías de baterías.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Nuevo sistema de pago global",
        fecha: "2024-05-15",
        periodista: "Maria Silva",
        descripcion: "Se lanza un nuevo sistema de pago global que promete transacciones instantáneas",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un consorcio de instituciones financieras ha lanzado un nuevo sistema de pago global que permite transacciones instantáneas entre diferentes monedas. El sistema utiliza tecnología blockchain para garantizar la seguridad y reducir los costos de las transferencias internacionales. Expertos predicen que podría revolucionar el comercio internacional y las remesas.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Auge del turismo espacial",
        fecha: "2024-09-01",
        periodista: "John Spacey",
        descripcion: "El turismo espacial despega con los primeros vuelos comerciales al espacio",
        foto: "https://picsum.photos/600/300",
        cuerpo: "La industria del turismo espacial está despegando con los primeros vuelos comerciales regulares al espacio. Varias empresas privadas están ofreciendo experiencias de vuelos suborbitales y estancias en estaciones espaciales. Aunque los precios siguen siendo prohibitivos para la mayoría, se espera que la competencia y los avances tecnológicos hagan que el turismo espacial sea más accesible en el futuro.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Crisis en la cadena de suministro global",
        fecha: "2024-11-20",
        periodista: "Sophie Wang",
        descripcion: "Disrupciones en la cadena de suministro global causan escasez de productos",
        foto: "https://picsum.photos/600/300",
        cuerpo: "La cadena de suministro global está experimentando disrupciones significativas debido a una combinación de factores, incluyendo conflictos geopolíticos, desastres naturales y escasez de mano de obra. Estas disrupciones están causando escasez de productos en diversos sectores, desde electrónica hasta alimentos. Las empresas están buscando formas de diversificar sus cadenas de suministro y aumentar la resiliencia.",
        prioridad: "bajaPrioridad"
      }
    ]
  },
  {
    id: 3,
    nombre: "Tecnologia",
    descripcion: "Noticias sobre avances tecnológicos, gadgets y tendencias digitales.",
    color: "#0000FF",
    Url: "/noticias/tecnologia",
    noticias: [
      {
        titulo: "Avance revolucionario en computación cuántica",
        fecha: "2024-11-15",
        periodista: "Quantum Qiu",
        descripcion: "Científicos logran la supremacía cuántica en un nuevo hito tecnológico",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un equipo internacional de científicos ha anunciado un avance revolucionario en computación cuántica, logrando la llamada 'supremacía cuántica'. El nuevo procesador cuántico ha resuelto en minutos un problema que tomaría miles de años a las supercomputadoras más potentes. Este avance promete transformar campos como la criptografía, la simulación molecular y la inteligencia artificial.",
        prioridad: "altaPrioridad"
      },
      {
        titulo: "Lanzamiento del primer smartphone plegable y enrollable",
        fecha: "2024-09-20",
        periodista: "Tina Tech",
        descripcion: "Una empresa tecnológica lanza el primer smartphone que se pliega y se enrolla",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Una reconocida empresa de tecnología ha lanzado el primer smartphone del mundo que no solo se pliega, sino que también se enrolla. El dispositivo utiliza una pantalla OLED flexible que puede expandirse hasta el tamaño de una tablet. Los expertos afirman que este avance podría revolucionar la forma en que interactuamos con nuestros dispositivos móviles.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Inteligencia artificial supera a humanos en diagnóstico médico",
        fecha: "2024-10-05",
        periodista: "AI Anderson",
        descripcion: "Un sistema de IA demuestra mayor precisión que médicos humanos en diagnósticos",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un sistema de inteligencia artificial desarrollado por investigadores ha demostrado una precisión superior a la de médicos humanos en el diagnóstico de varias enfermedades. El sistema, entrenado con millones de registros médicos, pudo detectar condiciones sutiles que a menudo pasan desapercibidas en las evaluaciones iniciales. Este avance promete mejorar la detección temprana de enfermedades y reducir los errores de diagnóstico.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Éxito en la primera prueba de un ascensor espacial",
        fecha: "2024-12-01",
        periodista: "Stella Spacey",
        descripcion: "Científicos logran probar con éxito un prototipo de ascensor espacial",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un equipo internacional de científicos e ingenieros ha realizado con éxito la primera prueba de un prototipo de ascensor espacial. El experimento, realizado en órbita baja, demostró la viabilidad de utilizar cables de nanotubos de carbono para transportar cargas entre la Tierra y el espacio. Esta tecnología podría revolucionar el acceso al espacio, reduciendo drásticamente el costo de poner objetos en órbita.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Nuevo avance en la tecnología de baterías",
        fecha: "2024-08-10",
        periodista: "Ellie Energy",
        descripcion: "Investigadores desarrollan una batería que se carga en segundos y dura semanas",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Científicos han desarrollado una nueva tecnología de baterías que promete revolucionar la electrónica y el transporte. La nueva batería, basada en materiales nanoestructurados, puede cargarse completamente en cuestión de segundos y mantener la carga durante semanas. Este avance podría eliminar la ansiedad por la autonomía en vehículos eléctricos y permitir dispositivos móviles de larga duración.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Lanzamiento de la primera red 6G",
        fecha: "2024-11-30",
        periodista: "Gina Gigabit",
        descripcion: "Una empresa de telecomunicaciones lanza la primera red 6G del mundo",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Una importante empresa de telecomunicaciones ha anunciado el lanzamiento de la primera red 6G del mundo en una ciudad piloto. La tecnología 6G promete velocidades de datos hasta 100 veces más rápidas que el 5G, latencia ultrabaja y la capacidad de soportar billones de dispositivos conectados. Se espera que esta tecnología impulse avances en realidad aumentada, vehículos autónomos y ciudades inteligentes.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Breakthrough en la interfaz cerebro-computadora",
        fecha: "2024-07-15",
        periodista: "Neuro Nancy",
        descripcion: "Nueva interfaz permite control directo de dispositivos con el pensamiento",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Investigadores han logrado un avance significativo en la tecnología de interfaz cerebro-computadora. El nuevo dispositivo, del tamaño de un grano de arroz, puede implantarse de manera mínimamente invasiva y permite a los usuarios controlar dispositivos electrónicos directamente con sus pensamientos. Este avance promete mejorar significativamente la calidad de vida de personas con discapacidades motoras.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Realidad virtual alcanza nuevo nivel de inmersión",
        fecha: "2024-10-20",
        periodista: "Victor Virtual",
        descripcion: "Nueva tecnología de RV ofrece experiencias indistinguibles de la realidad",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Una startup de tecnología ha presentado un nuevo sistema de realidad virtual que ofrece experiencias casi indistinguibles de la realidad. El sistema combina visuales de ultra alta resolución, audio espacial avanzado y retroalimentación háptica de cuerpo completo. Los primeros usuarios describen la experiencia como 'completamente inmersiva' y 'asombrosamente realista'.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Avance en la tecnología de impresión 3D",
        fecha: "2024-09-05",
        periodista: "Printer Pete",
        descripcion: "Nueva impresora 3D puede crear objetos a nivel molecular",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Científicos han desarrollado una nueva impresora 3D capaz de crear objetos a nivel molecular. Esta tecnología, conocida como 'impresión atómica', permite la fabricación de materiales con propiedades únicas y estructuras imposibles de crear con métodos tradicionales. Se espera que esta innovación tenga aplicaciones revolucionarias en campos como la medicina, la electrónica y la ciencia de materiales.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Lanzamiento del primer satélite de limpieza espacial",
        fecha: "2024-12-10",
        periodista: "Cosmo Cleaner",
        descripcion: "Misión para limpiar la basura espacial en órbita terrestre",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Una agencia espacial ha lanzado con éxito el primer satélite diseñado específicamente para limpiar la basura espacial en órbita terrestre. El satélite utiliza una combinación de redes, arpones y velas de arrastre para capturar y eliminar escombros espaciales. Esta misión marca el inicio de los esfuerzos activos para abordar el creciente problema de la basura espacial y asegurar un futuro sostenible para las actividades espaciales.",
        prioridad: "bajaPrioridad"
      }
    ]
  },
  {
    id: 4,
    nombre: "Ciencia",
    descripcion: "Noticias sobre descubrimientos científicos y avances en investigación.",
    color: "#800080",
    Url: "/noticias/ciencia",
    noticias: [
      {
        titulo: "Descubrimiento de vida microbiana en Marte",
        fecha: "2024-07-20",
        periodista: "Astro Alice",
        descripcion: "Rover marciano encuentra evidencia de vida microbiana pasada",
        foto: "https://picsum.photos/600/300",
        cuerpo: "En un descubrimiento histórico, el rover de exploración marciana ha encontrado evidencia concluyente de vida microbiana pasada en Marte. Los científicos han identificado microfósiles y biomarcadores en rocas sedimentarias antiguas, lo que sugiere que Marte alguna vez albergó vida. Este hallazgo revoluciona nuestra comprensión de la vida en el universo y plantea nuevas preguntas sobre la posibilidad de vida en otros planetas.",
        prioridad: "altaPrioridad"
      },
      {
        titulo: "Avance en la fusión nuclear",
        fecha: "2024-11-05",
        periodista: "Fusion Phil",
        descripcion: "Científicos logran la fusión nuclear con ganancia neta de energía",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un equipo internacional de científicos ha logrado un hito histórico en la investigación de fusión nuclear, alcanzando por primera vez una ganancia neta de energía en una reacción de fusión controlada. Este avance representa un paso crucial hacia la realización de la fusión nuclear como una fuente de energía limpia e ilimitada, con el potencial de revolucionar la producción de energía global y abordar el cambio climático.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Nuevo órgano descubierto en el cuerpo humano",
        fecha: "2024-09-15",
        periodista: "Ana Anatomy",
        descripcion: "Investigadores identifican un nuevo órgano en el sistema inmunológico",
        foto: "https://picsum.photos/600/300",
        cuerpo: "En un sorprendente descubrimiento, científicos han identificado un nuevo órgano en el cuerpo humano, localizado en el sistema inmunológico. Este órgano, al que han llamado 'intersticio inmunológico', parece desempeñar un papel crucial en la coordinación de las respuestas inmunitarias. El hallazgo podría llevar a nuevos enfoques para el tratamiento de enfermedades autoinmunes y el desarrollo de inmunoterapias más efectivas.",
        prioridad: "mediaPrioridad"
      },
      {
        titulo: "Éxito en la clonación de especies extintas",
        fecha: "2024-10-10",
        periodista: "Clone Claire",
        descripcion: "Científicos logran clonar con éxito una especie extinta de rinoceronte",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un equipo de genetistas y biólogos de la conservación ha logrado clonar con éxito una especie extinta de rinoceronte blanco del norte. Utilizando técnicas avanzadas de clonación y células madre, los científicos han creado embriones viables que se implantarán en madres sustitutas. Este logro marca un hito importante en los esfuerzos para revertir la extinción y restaurar la biodiversidad perdida.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Descubrimiento de un nuevo estado de la materia",
        fecha: "2024-08-25",
        periodista: "Matter Max",
        descripcion: "Físicos descubren un nuevo estado de la materia con propiedades únicas",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Físicos de una prestigiosa universidad han descubierto un nuevo estado de la materia con propiedades únicas y sorprendentes. Este nuevo estado, al que han llamado 'supercristal cuántico', exhibe simultáneamente propiedades de sólidos y superfluidos. Los investigadores creen que este descubrimiento podría tener aplicaciones revolucionarias en campos como la computación cuántica y la superconductividad.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Avance en la comprensión del cerebro humano",
        fecha: "2024-12-05",
        periodista: "Neuro Nate",
        descripcion: "Nuevo mapa del cerebro revela conexiones neuronales nunca antes vistas",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Neurocientíficos han creado el mapa más detallado hasta la fecha del cerebro humano, revelando conexiones neuronales nunca antes vistas. Utilizando técnicas avanzadas de imagen y análisis de big data, los investigadores han identificado nuevas regiones y vías de comunicación en el cerebro. Este avance promete mejorar nuestra comprensión de la cognición, la memoria y las enfermedades neurológicas.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Descubrimiento de un nuevo planeta potencialmente habitable",
        fecha: "2024-07-30",
        periodista: "Stella Star",
        descripcion: "Astrónomos descubren un exoplaneta con condiciones similares a la Tierra",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Astrónomos han descubierto un nuevo exoplaneta que podría ser el candidato más prometedor hasta ahora para albergar vida extraterrestre. El planeta, ubicado a 40 años luz de la Tierra, orbita en la zona habitable de su estrella y muestra señales de tener una atmósfera y agua líquida en su superficie. Los científicos están planeando observaciones adicionales para buscar señales de vida.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Avance en la cura del Alzheimer",
        fecha: "2024-11-20",
        periodista: "Memory Maria",
        descripcion: "Nuevo tratamiento muestra resultados prometedores en la reversión del Alzheimer",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Investigadores médicos han anunciado resultados prometedores de un nuevo tratamiento para el Alzheimer. El tratamiento, que combina terapia génica y nanopartículas dirigidas, ha demostrado revertir los síntomas de la enfermedad en modelos animales y en ensayos clínicos tempranos en humanos. Este avance podría representar un punto de inflexión en la lucha contra esta devastadora enfermedad neurodegenerativa.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Creación del primer embrión sintético completo",
        fecha: "2024-09-01",
        periodista: "Embryo Emma",
        descripcion: "Científicos crean el primer embrión sintético completo sin óvulos ni esperma",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un equipo de biólogos ha logrado crear el primer embrión sintético completo sin utilizar óvulos ni espermatozoides. Este embrión, desarrollado a partir de células madre, muestra todas las estructuras tempranas necesarias para el desarrollo de un organismo completo. Este avance podría revolucionar la investigación sobre el desarrollo embrionario y abrir nuevas vías para el tratamiento de la infertilidad.",
        prioridad: "bajaPrioridad"
      },
      {
        titulo: "Descubrimiento de un nuevo elemento químico",
        fecha: "2024-10-30",
        periodista: "Chem Charlie",
        descripcion: "Científicos sintetizan y confirman un nuevo elemento superpesado",
        foto: "https://picsum.photos/600/300",
        cuerpo: "Un equipo internacional de químicos nucleares ha anunciado la síntesis y confirmación de un nuevo elemento químico superpesado. El elemento, con número atómico 119, es el más pesado y el primero de la octava fila de la tabla periódica. Este descubrimiento no solo expande nuestro conocimiento de la química fundamental, sino que también podría tener implicaciones en la comprensión de la formación de elementos en el universo.",
        prioridad: "bajaPrioridad"
      }
    ]
  }
]