import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-analytics.js";

const i18n = createI18n({
  locale: 'es',
  availableLocales: ['es', 'en'],
  messages: {
    es: {
      // Navbar
      pageNameNosotros: "Nosotros",
      pageNameProductos: "Productos",
      pageNameProyectos: "Proyectos",
      pageNameContacto: "Contacto",
      // Main Page
      mainHeroTitle: "Laboratorio de tecnología creativa",
      mainHeroSubTitle: "Creemos que una idea no tiene que ser demasiado loca para ser real.",
      mainHeroCTA: "¡Experimentemos!",
      mainIntroTitle: "Quienes somos",
      mainIntroText: "Somos un equipo de diseñadores, desarrolladores y pensadores estratégicos especializados en nuevas tecnologías. Combinando la tecnología y la creatividad para crear experiencias digitales verdaderamente inmersivas y causar un impacto en el mundo.",
      //Development
      mainDevelopmentTitle: "Desarrollo",
      mainDevelopmentText: "Construimos software especializado que se caracteriza por su adaptabilidad a cualquier dispositivo y  requerimiento de trabajo. Centrando el desarrollo hacia la simplicidad y una rica experiencia de usuario.",
      mainDevelopmentItem1: "IoT (Internet de las Cosas).",
      mainDevelopmentItem2: "Administración de bases de datos.",
      mainDevelopmentItem3: "IA (Inteligencia Artificial).",
      mainDevelopmentItem4: "Big Data.",
      mainDevelopmentItem5: "Desarrollo Web (landing page, page, e-commerce y dashboard).",
      mainDevelopmentItem6: "Desarrollo de app Android e iOs.",
      //Graphic Design
      mainGraphicDesTitle: "Diseño gráfico",
      mainGraphicDesText: "Conceptualmente construimos experiencia digitales en base a interfaces y objetivos frente a distintos espacios; visualmente, planificamos la articulación de elementos.",
      mainGraphicDesignItem1: "RV (Realidad Virtual).",
      mainGraphicDesignItem2: "RA (Realidad Aumentada).",
      mainGraphicDesignItem3: "Diseño UX & UI.",
      mainGraphicDesignItem4: "Edición y post-producción audiovisual.",
      mainGraphicDesignItem5: "Diseño de marcas.",
      mainGraphicDesignItem6: "Ilustración.",
      // Products
      productsTitle: "Nuestros productos",
      productsLabText: "Laboratorio de tecnología creativa especializada en acelerar el crecimiento digital y tecnológico de distintas industrias.",
      productsMapsText: "Proveedor de herramientas de geolocalización para desarrolladores adaptadas a múltiples sectores.",
      productsUmapText: "Dispositivo diseñado in-house, ideado especialmente para el tracking de todo tipo de vehículos.",
      // Tags
      projectsTagSoftAndAppDev: "Desarrollo software & app",
      projectsTagSoftAndWebDev: "Desarrollo software & web",
      projectsTagSoftDev: "Desarrollo de software",
      projectsTagWebDev: "Desarrollo web",
      projectsTagGraphDes: "Diseño gráfico",
      projectsTagGraphDesAndWebDev: "Diseño gráfico & Desarrollo web",
      projectsTagGraphDesSoftAndWebDev: "Diseño gráfico, Desarrollo software & web",
      // Names & Description
      projectsGrapeCounterName: "Grape Counter",
      projectsGrapeCounterText: "Grape Counter es un sistema basado en inteligencia artificial, desarrollado para maximizar el proceso de raleo durante la selección de prospectos a mejores racimos desde que son bayas, obteniendo un análisis preciso del tipo de baya y sus proyecciones con respecto a producción, proveyendo altos resultados de desempeño en los campos y cuarteles de viñedos.",
      projectsSowingAnalysisName: "Análisis de siembra y cultivo",
      projectsSowingAnalysisText: "Se crea un geovalla (KML) de los linderos de la finca a estudiar a partir del cual se programa un plan de vuelo para un drone equipado con distintos tipos de cámara, para realizar un análisis exhaustivo con el fin de determinar mediante una inteligencia artificial las propiedades del terreno y las regiones con desviación en siembra que afectarán la producción y el cultivo a fin de corregirdichas fallas.",
      projectsZooAquariumName: "ZooAquarium",
      projectsZooAquariumText: "Página web informativa y registro QR en el recinto para identificación e información de cada animal.",
      projectsExpoValenciaName: "ExpoValencia",
      projectsExpoValenciaText: "Página web informativa del evento y filtro de Meta con ruleta de las zonas/atracciones a visitar.",
      projectsADFrutaName: "ADFruta",
      projectsADFrutaText: "Sistema de planificacion de recursos empresariales (ERP) especializado en gestionar los procesos de cosecha, almacenamiento, distribución y venta de de uvas a gran escala.",
      projectsDaphAlgoName: "The Daphne Algorithm",
      projectsDaphAlgoText: "Es una inteligencia artificial (IA) que genera imagenes dado un texto de entrada, audio o imagen y usa de inspiración de la artista Daphne Anastassiou.",
      projectsSugarCaneName: "Análisis de siembra y cultivo de caña de azúcar",
      projectsSugarCaneText: "Con las imágenes generadas por drone, se realizó una implementación específica mediante inteligencia artificial que recibe todos los espectros de las imágenes generadas por las cámaras del drone para análisis de siembra y cultivo de caña de azúcar, analizando una reconstrucción del espacio, con el fin de revelar defectos en la uniformidad de la siembra imperceptibles al ojo humano, y detalles de humedad que permiten al agricultor, corregir las regiones con desviación.",
      projectsBeeMapingName: "BeeMaping",
      projectsBeeMapingText: "Es una app para monitorizar el Ácaro Varroa Destructor a partir del análisis del papel adherente dispuesto debajo de las colmenas con el objeto de calcular el porcentaje de infección mediante de la utilización de inteligencia artificial. Además de proporcionar un registro con fecha, ubicación, datos de diagnóstico junto a muchas otras estadísticas de interés para el apicultor.",
      projectsNeuralKnowsName: "Neural-Knows",
      projectsNeuralKnowsText: "Aplicacion Android, iOS, weareble y web para monitorear el estado animico y psicologico de los usuarios, incluye un chatbot, panel administrativo y contenido psicoterapeutico, elaborado con Flutter y Firebase.",
      projectsSportlyName: "Sportly",
      projectsSportlyText: "Aplicacion Android y iOS dirigida a que los usuarios esten en contacto con sus canchas y espacios deportivos preferidos, equipos y compañeros.",
      projectsElTesoroName: "El tesoro olvidado",
      projectsElTesoroText: "Edición y maquetación del libro titulado 'El tesoro olvidado'.",
      projectsCheckcitoName: "Checkcito",
      projectsCheckcitoText: "Aplicación web que incluye e-commerce, autentificación y dashboard administrativo, que se abre paso a convertirse en un CMS.",
      projectsGuanacoName: "Guanaco",
      projectsGuanacoText: "Dashboard administrativo y e-commerce con pasarela de pago.",
      projectsFruitsnackName: "Fruitsnack",
      projectsFruitsnackText: "Dashboard administrativo y e-commerce con pasarela de pago.",
      projectsCIAName: "CIA Consulting Group",
      projectsCIAText: "Landing page con distintas secciones y un blog integrado.",
      projectsScaleManName: "ScaleMan",
      projectsScaleManText: "Portal de informes en línea de BSA con sede en Noruega para los cuales se desarrollo una plataforma de generacion de informes petroquimicos de yacimientos y pozos petroleros de todo el mundo.",
      projectsIXIMName: "IXIM Software FAO Mexico",
      projectsIXIMText: "Es un software desarrollado en dos etapas distintas, la primera basada en el computo en la nube de los datos generados por las estaciones meteorológicas en México, datos usados para crear transformaciones y modelos predictivos para su posterior análisis y visualización. Mediante la segunda etapa del desarrollo el cual consiste en el software desktop IXIM, el cual permite a los científicos visualizar y aplicar distintos algoritmos para la predicción del multirriesgo de siembra a lo largo y ancho del país de México.",
      // Contact
      contactTitle: "¿Quieres conocer más?",
      contactSubTitle: "Contáctanos",
      contactText: "Puedes llenar el siguiente formulario o contactarnos a través de:",
      contactText2: "¡Sé parte de la experiencia Priver!",
      contactOptService: "Servicio",
      contactOptMarketing: "Marketing Digital",
      contactAppDev: "Desarrollo de app",
      contactWebDev: "Desarrollo web",
      contactGraphicDes: "Diseño gráfico",
      contactSocialMedia: "Redes sociales",
      contactInvestment: "Invierte en Priver",
      contactPlaceholderName: "Nombre",
      contactPlaceholderEmail: "Correo electrónico",
      contactPlaceholderPhone: "Número de teléfono",
      contactPlaceholderCompany: "Organización",
      contactPlaceholderDescription: "Descripción del proyecto",
      contactSendButton: "Envíar",
      contactThankYouMsg: "Gracias. Estaremos en contacto contigo muy pronto.",
      // Copyright
      copyrigth: "Todos los derechos reservados.",
      // 404
      notFoundTitle: "Error 404, no encontrado",
      notFoundText: "La página que estás buscando no existe, por favor regresa e intenta de nuevo.",
    },
    en: {
      // Navbar
      pageNameNosotros: "Home",
      pageNameProductos: "Products",
      pageNameProyectos: "Projects",
      pageNameContacto: "Contact",
      // Main Page
      mainHeroTitle: "Creative technology laboratory",
      mainHeroSubTitle: "We believe that an idea doesn't have to be too crazy to be real.",
      mainHeroCTA: "Let's experiment!",
      mainIntroTitle: "About us",
      mainIntroText: "We are a team of designers, developers and strategic thinkers specialized in new technologies. Combining technology and creativity to create truly immersive digital experiences and make an impact on the world.",
      // Development
      mainDevelopmentTitle: "Development",
      mainDevelopmentText: "We are dedicated to the research, discovery and improvement of technologies and digital applied in diverse fields.",
      mainDevelopmentItem1: "IoT (Internet of Things).",
      mainDevelopmentItem2: "ADatabase management.",
      mainDevelopmentItem3: "AI (Artificial Intelligence).",
      mainDevelopmentItem4: "Big Data.",
      mainDevelopmentItem5: "Web development (landing page, page, e-commerce and dashboard).",
      mainDevelopmentItem6: "Android and iOs app development.",
      // Graphic Design
      mainGraphicDesTitle: "Graphic Design",
      mainGraphicDesText: "We design and execute alternative visual solutions to innovate with our clients with original approaches clients with original approaches. We have at your disposal multiple design services, which go hand in hand with your hand in hand with the needs of your company.",
      mainGraphicDesignItem1: "VR (Virtual Reality).",
      mainGraphicDesignItem2: "AR (Augmented Reality).",
      mainGraphicDesignItem3: "UX & UI Design.",
      mainGraphicDesignItem4: "Audiovisual editing and post-production.",
      mainGraphicDesignItem5: "Brand design.",
      mainGraphicDesignItem6: "Illustration.",
      // Products
      productsTitle: "Our products",
      productsLabText: "Creative technology lab specialized in accelerating the digital and technological growth of different industries.",
      productsMapsText: "Provider of geolocation tools for developers adapted to multiple sectors.",
      productsUmapText: "In-house designed device, specially designed for tracking all types of vehicles.",
      // Projects
      // Tags
      projectsTagSoftAndAppDev: "Software & app development",
      projectsTagSoftAndWebDev: "Software & web development",
      projectsTagSoftDev: "Software development",
      projectsTagWebDev: "Web development",
      projectsTagGraphDes: "Graphic design",
      projectsTagGraphDesAndWebDev: "Graphic Design & Web Development",
      projectsTagGraphDesSoftAndWebDev: "Graphic Design, Software & Web Development",
      // Names & Description
      projectsGrapeCounterName: "Grape Counter",
      projectsGrapeCounterText: "Grape Counter is a system based on artificial intelligence, developed to maximize the thinning process during the selection of prospects to better clusters since they are berries, obtaining an accurate analysis of the type of berry and its projections with respect to production, providing high performance results in the fields and vineyards.",
      projectsSowingAnalysisName: "Sowing and crop analysis",
      projectsSowingAnalysisText: "SA geo-fence (KML) of the boundaries of the farm to be studied is created, from which a flight plan is programmed for a drone equipped with different types of cameras, to perform an exhaustive analysis in order to determine through artificial intelligence the properties of the terrain and the regions with deviation in planting that will affect production and cultivation in order to correct such faults. Irrigation and spraying with drone With the same boundaries, flight plan and results of the previous analysis, highly efficient irrigation and spraying plans orchestrated with drones are programmed.",
      projectsZooAquariumName: "ZooAquarium",
      projectsZooAquariumText: "Informative web page and QR register in the enclosure for identification and information of each animal.",
      projectsExpoValenciaName: "ExpoValencia",
      projectsExpoValenciaText: "Informative web page of the event and Meta filter with roulette of the zones/attractions to visit.",
      projectsADFrutaName: "ADFruta",
      projectsADFrutaText: "Enterprise Resource Planning (ERP) system specialized in managing the processes of harvesting, storage, distribution and sale of grapes on a large scale.",
      projectsDaphAlgoName: "The Daphne Algorithm",
      projectsDaphAlgoText: "It is an artificial intelligence (AI) that generates images given an input text, audio or image and uses the inspiration of the artist Daphne Anastassiou.",
      projectsSugarCaneName: "Analysis of sugar cane sowing and cultivation",
      projectsSugarCaneText: "With the images generated by the drone, a specific implementation was made through artificial intelligence that receives all the spectra of the images generated by the drone cameras for the analysis of planting and cultivation of sugar cane, analyzing a reconstruction of space, in order to reveal defects in the uniformity of planting imperceptible to the human eye, and moisture details that allow the farmer to correct the regions with deviation.",
      projectsBeeMapingName: "BeeMaping",
      projectsBeeMapingText: "It is an app to monitor the Varroa Destructor Mite from the analysis of the adherent paper placed under the hives in order to calculate the percentage of infection through the use of artificial intelligence. In addition to providing a record with date, location, diagnostic data along with many other statistics of interest to the beekeeper.",
      projectsNeuralKnowsName: "Neural-Knows",
      projectsNeuralKnowsText: "Android, iOS, weareble and web application to monitor the mood and psychological state of users, includes a chatbot, administrative panel and psychotherapeutic content, developed with Flutter and Firebase.",
      projectsSportlyName: "Sportly",
      projectsSportlyText: "Android and iOS application aimed at keeping users in touch with their favorite sports fields and venues, teams and teammates.",
      projectsElTesoroName: "El tesoro olvidado",
      projectsElTesoroText: "Edition and layout of the book 'El tesoro olvidado' (The forgotten treasure).",
      projectsCheckcitoName: "Checkcito",
      projectsCheckcitoText: "Web application including e-commerce, authentication and administrative dashboard, which makes its way to become a CMS.",
      projectsGuanacoName: "Guanaco",
      projectsGuanacoText: "Administrative dashboard and e-commerce with payment gateway.",
      projectsFruitsnackName: "Fruitsnack",
      projectsFruitsnackText: "Administrative dashboard and e-commerce with payment gateway.",
      projectsCIAName: "CIA Consulting Group",
      projectsCIAText: "Landing page with different sections and an integrated blog.",
      projectsScaleManName: "ScaleMan",
      projectsScaleManText: "Online reporting portal of Norway-based BSA for which a petrochemical reporting platform was developed to generate petrochemical reports from oilfields and wells around the world.",
      projectsIXIMName: "IXIM Software FAO Mexico",
      projectsIXIMText: "It is a software developed in two distinct stages, the first based on cloud computing of data generated by weather stations in Mexico, data used to create transformations and predictive models for further analysis and visualization. Through the second stage of development which consists of the IXIM desktop software, which allows scientists to visualize and apply different algorithms for the prediction of multi-risk planting throughout the country of Mexico.",
      // Contact
      contactTitle: "Want to learn more?",
      contactSubTitle: "Contact us",
      contactText: "You can fill out the following form or contact us through:",
      contactText2: "Be part of the Priver experience!",
      contactOptService: "Services",
      contactOptMarketing: "Digital Marketing",
      contactAppDev: "App Development",
      contactWebDev: "Web Development",
      contactGraphicDes: "Graphic Design",
      contactSocialMedia: "Social Media",
      contactInvestment: "Invest in Priver",
      contactPlaceholderName: "Name",
      contactPlaceholderEmail: "E-mail",
      contactPlaceholderPhone: "Phone number",
      contactPlaceholderCompany: "Company",
      contactPlaceholderDescription: "Project description",
      contactSendButton: "Send",
      contactThankYouMsg: "Thank you. We will be in touch with you very soon.",
      // Copyright
      copyrigth: "All rights reserved.",
      // 404
      notFoundTitle: "Error 404, not found",
      notFoundText: "The page that you are looking for doesn't exist, please go back and try again.",
    }
  }
})

const availibleLocales = i18n.global.availableLocales;
const usersLanguage = (window.navigator.language).slice(0,2)

if (availibleLocales.includes(usersLanguage)) {
  i18n.global.locale = usersLanguage
} else {
  console.log('default en')
  i18n.global.locale = 'en'
}


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4qzK787H5XuTfQ6OKgEYysuMoJCTIWqw",
  authDomain: "priverapp.firebaseapp.com",
  projectId: "priverapp",
  storageBucket: "priverapp.appspot.com",
  messagingSenderId: "248423044881",
  appId: "1:248423044881:web:782ca7a4df4be71d901eb0",
  measurementId: "G-XM198WZ20L"
};

// Initialize Firebase
const fbapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fbapp);

const app = createApp(App).use(i18n)

app.use(router)

app.mount('#app')

const matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (!matched) {
  document.querySelector('link[rel="icon"]').href = "/src/assets/imgs/icon/priver-light.png";
}
