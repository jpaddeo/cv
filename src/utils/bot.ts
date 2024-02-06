import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

const MODEL_NAME = 'gemini-pro';
const API_KEY = 'YOUR_API_KEY';

import * as jsonResume from '@cv';

console.log(JSON.stringify(jsonResume));

const PROMPT = `
`;
async function run() {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const parts = [
    {
      text: 'You are a multi-language senior researcher that can answer any question about the Juan Pablo\'s resume. You can answer in English (en) or in Spanish (es) it\'ll dependof the input language received. Please answer as if you were Juan Pablo I mean as itself do it.\n\nBetween three blacklist quotes you will have all resume information in json format and english language.\n\n```\n{\n  "basics": {\n    "name": "Juan Pablo Addeo",\n    "label": "Ingeniero en Sistemas de Información",\n    "image": "https://avatars.githubusercontent.com/u/3083587?v=4",\n    "email": "juanpablo.addeo@gmail.com",\n    "phone": "(54) 9 11-3163-8755",\n    "url": "https://jpaddeo.github.io/index_es.html",\n    "summary": "Soy Argentino, nacido en la Ciudad Autónoma de Buenos Aires. Ingeniero en Sistemas de la Información recibido en la Facultad Regional de Buenos Aires pertenciente a la Universidad Tecnológica Nacional. Me apasiona la tecnología y el desarrollo de software. Lo hago desde que comencé a incursionar en mi carrera profesional. Trabajé en distintos proyectos con distintas tecnologías y en distintas compañías. Freelancer. Emprendedor.",\n    "location": {\n      "address": "Avenida de Los Lagos S/N",\n      "postalCode": "1625",\n      "city": "Belén de Escobar",\n      "countryCode": "AR",\n      "region": "Buenos Aires"\n    },\n    "profiles": [\n      {\n        "network": "LinkedIn",\n        "username": "juanpabloaddeo",\n        "url": "https://www.linkedin.com/in/juanpabloaddeo/"\n      },\n      {\n        "network": "X",\n        "username": "jpaddeo",\n        "url": "https://x.com/jpaddeo"\n      },\n      {\n        "network": "GitHub",\n        "username": "jpaddeo",\n        "url": "https://github.com/jpaddeo"\n      },\n      {\n        "network": "Mail",\n        "username": "juanpablo.addeo@gmail.com",\n        "url": "mailto:juanpablo.addeo@gmail.com"\n      },\n      {\n        "network": "Phone",\n        "username": "+5491131638755",\n        "url": "tel:+5491131638755"\n      }\n    ]\n  },\n  "work": [\n    {\n      "name": "Ministerio Público Fiscal de la C.A.B.A.",\n      "position": "Ingeniero en Sistemas de Información",\n      "url": "https://www.mpfciudad.gob.ar",\n      "startDate": "2018",\n      "summary": "Actualmente me desempeño como el Titular del Dpto. de Investigación y Desarrollo Informático (DIyDI) y tengo como tareas principales administrar los proyectos y los recursos del Dpto., de diseñar arquitecturas de software para nuevos proyectos, sistemas legacy e integraciones con otros organismos. Como otras tareas tengo las de administrar servidores correspondientes al Dpto., realizar y coordinar las implementaciones productivas (ortiendándolas principalmente a hacerlas con CI/CD).",\n      "highlights": [\n        "Administración de recursos y proyectos",\n        "Arquitectura de software",\n        "Desarrollo de software (Fullstack)",\n        "Integraciones (microservicios / APIs)",\n        "Implementaciones y administración de servidores",\n        "CI/CD",\n        "Capacitación y coaching"\n      ]\n    },\n    {\n      "name": "Freelance",\n      "position": "Ingeniero en Sistemas de Información y Desarrollador de Software FullStack",\n      "url": "https://jpaddeo.work",\n      "startDate": "2008",\n      "summary": "Realizo tareas de consultoría informática, arquitectura de sofware, desarrollo de software fullstack. Adicionalmente tareas de DevOps e implementaciones.",\n      "highlights": [\n        "Consultoría TI",\n        "Diseño y desarrollo de software fullstack",\n        "Diseño y desarrollo móvil",\n        "Adminsitración de servidores",\n        "Integraciones",\n        "Sitios web"\n      ]\n    },\n    {\n      "name": "Ministerio Público Fiscal de la C.A.B.A.",\n      "position": "Líder Técnico",\n      "url": "https://www.mpfciudad.gob.ar",\n      "startDate": "2016",\n      "endDate": "2018",\n      "summary": "Tuve como principal tarea el armado y la gestión del equipo de desarrollo, testing y diseño del Área de Gestión de Aplicaciones Informáticas perteneciente al Ministerio Público Fiscal de la C.A.B.A.",\n      "highlights": [\n        "Administración de proyectos",\n        "Análisis técnico",\n        "Arquitectura de software",\n        "Desarrollo de software",\n        "Capacitación y coaching de recursos IT"\n      ]\n    },\n    {\n      "name": "Ministerio Público Fiscal de la C.A.B.A.",\n      "position": "Analista Técnico y Desarrollador de Software",\n      "url": "https://www.mpfciudad.gob.ar",\n      "startDate": "2012",\n      "endDate": "2016",\n      "summary": "Tareas de análisis técnico, desarrollo de software (proyectos nuevos + sistemas legacy) dentro del Dpto. de TI y Comunicaciones perteneciente al Minsiterio Público Fiscal de la C.A.B.A.",\n      "highlights": [\n        "Análisis técnico y desarrollo de software",\n        "Diseño de BD"\n      ]\n    },\n    {\n      "name": "Baufest",\n      "position": "Desarrollador .NET y Sharepoint",\n      "url": "https://baufest.com",\n      "website": "https://baufest.com",\n      "startDate": "2010-05-01",\n      "endDate": "2012-07-31",\n      "summary": "Desarrollador .NET y Sharepoint en distintos clientes y proyectos",\n      "highlights": [\n        "Configuración, Implementación y Desarrollo de plataforma MOSS 2007",\n        "Desarrollo de formularios en Infopath 2007 y 2010",\n        "Desarrollo de workflows en Nintex 2007 y 2010",\n        "Desarrollo de integraciones .NET para distintas plataformas (ClearQuest, ActiveDirectory, CA USD, Sharepoint)"\n      ]\n    },\n    {\n      "name": "Baufest",\n      "position": "IT Specialist",\n      "url": "https://baufest.com",\n      "website": "https://baufest.com",\n      "startDate": "2009-09-01",\n      "endDate": "2010-04-30",\n      "summary": "Principalmente desarrollo y configurción de plataforma IBM Rational ClearQuest",\n      "highlights": [\n        "Configuración, Implementación y Desarrollo de plataforma IBM Rational ClearQuest",\n        "Desarrollo de VBScript y SQL"\n      ]\n    },\n    {\n      "name": "IBM",\n      "position": "Desarrollador de Aplicaciones",\n      "url": "https://ibm.com",\n      "website": "https://ibm.com",\n      "startDate": "2008-08-01",\n      "endDate": "2009-09-30",\n      "summary": "Plataforma IBM Lotus Domino para LATAM",\n      "highlights": [\n        "Configuración, Implementación y Desarrollo de plataforma IBM Lotus Domino",\n        "Soporte a usuarios locales",\n        "HR Access LATAM Account"\n      ]\n    },\n    {\n      "name": "NSX S.A.",\n      "position": "Junior IT Specialist",\n      "url": "http://www.e-nsx.com",\n      "website": "http://www.e-nsx.com",\n      "startDate": "2007-06-01",\n      "endDate": "2008-07-31",\n      "summary": "Plataforma IBM Lotus Domino",\n      "highlights": [\n        "Configuración, Implementación y Desarrollo de plataforma IBM Lotus Domino",\n        "Soporte a usuarios locales"\n      ]\n    }\n  ],\n  "education": [\n    {\n      "institution": "Facultad Regional Buenos Aires, Universidad Tecnológica Nacional (UTN)",\n      "url": "https://www.frba.utn.edu.ar",\n      "website": "https://www.frba.utn.edu.ar",\n      "area": "Universitario",\n      "studyType": "Ingeniero en Sistemas de la Información",\n      "startDate": "2006-01-01",\n      "endDate": "2018-08-01",\n      "courses": [\n        "SL-210 JAVA Programming",\n        "SL-275 JAVA Programming",\n        "Professional Webmaster"\n      ]\n    }\n  ],\n  "volunteer": [\n    {\n      "organization": "Me Regalas Una Hora",\n      "position": "Consultor Externo",\n      "url": "https://meregalasunahora.org/",\n      "startDate": "2020-07-01",\n      "endDate": "2020-09-30",\n      "summary": "Se realizó la migración del servicio de hosting y del servidor. Coordiné la implementación de nuevo sitio institucional (desarrollo y diseño) con implementación de CMS para gestión de contenido.",\n      "highlights": [\n        "Migración de servicio hosting y servidor",\n        "Coordinación e implementación de diseños / mockups y renders",\n        "Desarrollo backend (CMS) y frontend del sitio web nuevo",\n        "Integraciones con Google Calendar y Leaflet GIS"\n      ]\n    }\n  ],\n  "awards": [],\n  "certificates": [\n    {\n      "name": "JavaScript escencial",\n      "date": "2021",\n      "issuer": "Linkedin Learning",\n      "url": "https://www.linkedin.com/learning"\n    },\n    {\n      "name": "JavaScript escencial",\n      "date": "2021",\n      "issuer": "Udemy",\n      "url": "https://udemy.com"\n    },\n    {\n      "name": "JavaScript escencial",\n      "date": "2021",\n      "issuer": "Udemy",\n      "url": "https://udemy.com"\n    },\n    {\n      "institution": "Udemy",\n      "url": "https://udemy.com",\n      "website": "https://udemy.com",\n      "area": "Freelance",\n      "studyType": "Cursos",\n      "startDate": "2018-01-01",\n      "endDate": "2021-03-01",\n      "courses": [\n        "Desarrollo web con Laravel 5.6, VueJS y MariaDB Mysql",\n        "GitLab CI: Pipelines, CI/CD and DevOps",\n        "Laravel API RESTful + Frontend VueJS"\n      ]\n    },\n    {\n      "institution": "Educacion IT",\n      "url": "https://www.educacionit.com/",\n      "website": "https://www.educacionit.com/",\n      "area": "Freelance",\n      "studyType": "Cursos",\n      "startDate": "2018-02-01",\n      "endDate": "2018-03-01",\n      "courses": ["PHP MVC Laravel"]\n    },\n    {\n      "institution": "Datalytics",\n      "url": "https://www.datalytics.com/",\n      "website": "https://www.datalytics.com/",\n      "area": "Freelance",\n      "studyType": "Cursos",\n      "startDate": "2015-09-01",\n      "endDate": "2015-11-01",\n      "courses": [\n        "Instalación y Administración de Plataforma Pentaho",\n        "Integración de datos con Pentaho Data Integration",\n        "Dashboard con Ctools y Dashboard Editor",\n        "Pentaho Reports Designer y Metadata"\n      ]\n    },\n    {\n      "institution": "CodeSchool",\n      "url": "https://www.pluralsight.com/codeschool",\n      "website": "https://www.pluralsight.com/codeschool",\n      "area": "Freelance",\n      "studyType": "Cursos",\n      "startDate": "2015-03-01",\n      "endDate": "2015-04-01",\n      "courses": ["Shaping Up with AngularJS"]\n    },\n    {\n      "institution": "ProcessMaker",\n      "url": "https://www.processmaker.com/",\n      "website": "https://www.processmaker.com/",\n      "area": "Freelance",\n      "studyType": "Cursos",\n      "startDate": "2013-12-01",\n      "endDate": "2014-02-01",\n      "courses": [\n        "Processmaker Developer Course",\n        "Processmaker Advanced Architect Training"\n      ]\n    }\n  ],\n  "publications": [],\n  "skills": [\n    {\n      "name": "Desarrollador Fullstack",\n      "level": "Senior",\n      "keywords": [\n        "HTML",\n        "CSS",\n        "PHP",\n        "JavaScript",\n        "ReactJS",\n        "React Native",\n        "VueJS",\n        "NodeJS",\n        "AngularJS",\n        "Materialize",\n        "Bootstrap",\n        "Python",\n        "Ionic",\n        "Java",\n        "Shell script",\n        ".NET Core",\n        "MySql",\n        "MongoDB"\n      ]\n    },\n    {\n      "name": "Arquitecto",\n      "level": "Semi Senior",\n      "keywords": [\n        "Elasticsearch",\n        "Kibana",\n        "Logstash",\n        "Filebeat",\n        "Microservicios / APIs",\n        "API REST",\n        "Gateways",\n        "Firebase",\n        "Keycloack",\n        "Server admin",\n        "Docker",\n        "Portainer",\n        "CI/CD"\n      ]\n    }\n  ],\n  "languages": [\n    {\n      "language": "Español",\n      "fluency": "nativo"\n    },\n    {\n      "language": "Inglés",\n      "fluency": "intermedio"\n    }\n  ],\n  "interests": [],\n  "references": [],\n  "projects": [\n    {\n      "name": "Declaraciones Juradas MPFCIUDAD",\n      "description": "Sistema de presentación de Declaraciones Juradas Patrimoniales para magistrados del Ministerio Público Fiscal de la C.A.B.A.",\n      "highlights": ["Backend (Lumen)", "Frontend (ReactJS)", "DB (MongoDB)"],\n      "keywords": ["reactjs", "lumen", "mongodb", "microservices"],\n      "startDate": "2021-05-30",\n      "endDate": "2021-07-01",\n      "url": "https://ddjj.mpfciudad.gob.ar",\n      "website": "https://ddjj.mpfciudad.gob.ar",\n      "roles": ["Lider de proyecto", "Arquitecto", "Desarrollador Fullstack"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Firmador archivos MPFCIUDAD",\n      "description": "Firmador de archivos PDF para magistrados del Ministerio Público Fiscal de la C.A.B.A.",\n      "highlights": ["Backend (Lumen)", "Frontend (VueJS)", "DB (MySql)"],\n      "keywords": ["vuejs", "lumen", "mysql", "microservices"],\n      "startDate": "2021-02-01",\n      "endDate": "2021-03-31",\n      "url": "https://firmador.mpfciudad.gob.ar",\n      "website": "https://firmador.mpfciudad.gob.ar",\n      "roles": ["Lider de proyecto", "Arquitecto", "Desarrollador Fullstack"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "¿Me Regalás Una Hora?",\n      "description": "Renovación Imagen Institucional",\n      "highlights": [\n        "Desarrollo de CMS Laravel",\n        "Desarrollo de frontend (maquetado, blade views + AngularJS)",\n        "Integración Leaflet GIS",\n        "Integración Google Calendar"\n      ],\n      "keywords": ["cms", "laravel", "seo"],\n      "startDate": "2020-07-01",\n      "endDate": "2020-09-30",\n      "url": "https://meregalasunahora.org",\n      "website": "https://meregalasunahora.org",\n      "roles": [\n        "Lider de proyecto",\n        "Arquitecto",\n        "Desarrollador",\n        "Analista funcional"\n      ],\n      "entity": "MRUH",\n      "type": "application"\n    },\n    {\n      "name": "Campus Virtual Ministerio Público de la C.A.B.A.",\n      "description": "Sistema de gestión de cursos / capacitaciones (E-learning) para el Ministerio Público Fiscal de la C.A.B.A.",\n      "highlights": [\n        "Desarrollo de CMS Laravel",\n        "Desarrollo de frontend (maquetado, blade views)",\n        "Integración Youtube Videos"\n      ],\n      "keywords": ["cms", "laravel", "seo"],\n      "startDate": "2020-01-01",\n      "endDate": "2020-02-28",\n      "url": "https://capacitacion.mpfciudad.gob.ar",\n      "website": "https://capacitacion.mpfciudad.gob.ar",\n      "roles": ["Lider de proyecto", "Arquitecto"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Aplicación Web Denuncias MPF",\n      "description": "Permite a cualquier ciudadano poder denunciar delitos tipificados y otros de forma anónima o identificada. Consulta y seguimiento de denuncias realizadas. Consulta de información útil y de autoridades (comisarías, centros de denuncias: UODs, fiscalías).",\n      "highlights": [\n        "Progressive Web Application desarrollada con Ionic + angularJS",\n        "Servicios REST para integración con Sistema de Expedientes Judiciales (KIWI)"\n      ],\n      "keywords": ["pwa", "rest", "angularJS", "ionic", "denuncias"],\n      "startDate": "2020-02-01",\n      "endDate": "2020-03-31",\n      "url": "https://denuncias.fiscalias.gob.ar/",\n      "website": "https://denuncias.fiscalias.gob.ar/",\n      "roles": ["Líder de proyecto", "Arquitecto"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Sitio institucional Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Nuevo sitio institucional del MPFCABA",\n      "highlights": [\n        "Desarrollo de Content Management System (CMS)",\n        "Diseño y desarrollo de Sitio Web"\n      ],\n      "keywords": ["laravel", "blade", "usig", "elasticsearch", "html5"],\n      "startDate": "2020-02-01",\n      "endDate": "2020-03-31",\n      "url": "https://mpfciudad.gob.ar",\n      "website": "https://mpfciudad.gob.ar",\n      "roles": ["Líder de proyecto", "Arquitecto"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Aplicación iOS de Denuncias para el Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Aplicación de celulares para dispositivos Apple que le permite al ciudadano denunciar delitos y contravenciones ante el MPFCABA",\n      "highlights": ["Desarrollo de aplicación móvil"],\n      "keywords": ["ionic", "ios", "microservices", "googlemaps", "html5"],\n      "startDate": "2018-11-01",\n      "endDate": "2019-01-31",\n      "url": "https://apps.apple.com/ar/app/denuncias-mpf/id1446289355",\n      "website": "https://apps.apple.com/ar/app/denuncias-mpf/id1446289355",\n      "roles": ["Líder de proyecto", "Arquitecto"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Implementación de Interfaz entre el Sistema Informático KIWI y servicios de RENAPER",\n      "description": "Desarrollo e implementación de interfaz de comunicación entre Sistema Informático KIWI y servicios de RENAPER (Registro Nacional de las Personas) para la obtención de información nominal de los actores partícipes en un expediente digital.",\n      "highlights": [\n        "Desarrollo de interfaces",\n        "Proxies + gateways",\n        "Microservicios",\n        "Integraciones"\n      ],\n      "keywords": ["php", "proxies", "gateways", "microservices", "renaper"],\n      "startDate": "2018-10-01",\n      "endDate": "2018-11-30",\n      "roles": ["Líder de proyecto", "Arquitecto", "Desarrollador"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Aplicación Android de Denuncias para el Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Aplicación de celulares para dispositivos Apple que le permite al ciudadano denunciar delitos y contravenciones ante el MPFCABA",\n      "highlights": ["Desarrollo de aplicación móvil"],\n      "keywords": ["ionic", "android", "microservices", "googlemaps", "html5"],\n      "startDate": "2018-09-01",\n      "endDate": "2018-10-31",\n      "url": "https://play.google.com/store/apps/details?id=ar.gob.mpf.denunciasmob",\n      "website": "https://play.google.com/store/apps/details?id=ar.gob.mpf.denunciasmob",\n      "roles": ["Líder de proyecto", "Arquitecto"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Implementación de Interfaz entre el Sistema Informático KIWI y servicios de RNR",\n      "description": "Desarrollo e implementación de interfaz de comunicación entre Sistema Informático KIWI y servicios de RNR (Registro Nacional de Reincidencia) para la obtención de antecedentes de los actores partícipes en un expediente digital.",\n      "highlights": [\n        "Desarrollo de interfaces",\n        "Proxies + gateways",\n        "Microservicios",\n        "Integraciones"\n      ],\n      "keywords": [\n        "php",\n        "proxies",\n        "gateways",\n        "microservices",\n        "reincidencias"\n      ],\n      "startDate": "2018-09-01",\n      "endDate": "2018-10-31",\n      "roles": ["Líder de proyecto", "Arquitecto", "Desarrollador"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Implementación de API REST del Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Para facilitar el acceso a información interna proporcionada por los sistemas y aplicaciones del Ministerio Público Fiscal de la C.A.B.A., se ha desarrollado concentrador de servicios REST para su consumo. Estos servicios se alinean a los estándares especificados por la Dirección Nacional de Servicios Digitales del Ministerio de Modernización.",\n      "highlights": [\n        "Desarrollo de APIs",\n        "Proxies + gateways",\n        "Microservicios",\n        "Integraciones"\n      ],\n      "keywords": [\n        "laravel",\n        "api",\n        "php",\n        "proxies",\n        "gateways",\n        "microservices"\n      ],\n      "startDate": "2018-08-01",\n      "endDate": "2018-09-30",\n      "roles": ["Líder de proyecto", "Arquitecto", "Desarrollador"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Desarrollo e Implementación de Red de Datos Vinculados del Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Herramienta que permite desplegar relaciones / conexiones en forma de grafos entre los distintos nodos de información contenidos en una o varias fuentes de datos.",\n      "highlights": [\n        "Red de Datos",\n        "Vinculaciones",\n        "ETL",\n        "Datamining",\n        "Integraciones"\n      ],\n      "keywords": ["neo4j", "angularJS", "popoto", "mysql"],\n      "startDate": "2017-09-01",\n      "endDate": "2017-11-30",\n      "url": "https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20381-17.pdf",\n      "website": "https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20381-17.pdf",\n      "roles": ["Líder de proyecto", "Arquitecto"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Desarrollo e Implementación de Módulo de Gestión para Dto. de Servicios Móviles (Área de Material Rodante) del Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Desarrollo e implementación de módulo para los agentes del Dto. de Servicios Móviles en el cuál pueden gestionar vehículos, choferes, infracciones, mantenimientos e inspecciones. Adicionalmente se desarrolló la integración con el Módulo de Inventario y Servicio Técnico.",\n      "highlights": [\n        "Material Rodante",\n        "Automotor",\n        "Tarjetas de Registro",\n        "Integraciones"\n      ],\n      "keywords": ["php", "mysql"],\n      "startDate": "2016-09-01",\n      "endDate": "2016-10-31",\n      "url": "https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20117-16.pdf",\n      "website": "https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20117-16.pdf",\n      "roles": ["Arquitecto", "Desarrollador"],\n      "entity": "MPFCABA",\n      "type": "application"\n    },\n    {\n      "name": "Firma Electrónica en Sistemas de Gestión Judicial y Administrativa del Ministerio Público Fiscal de la C.A.B.A.",\n      "description": "Implementación de firma electrónica en Sistemas de Gestión Judicial y Administrativa. Desarrollo de componentes de firma y validación de huella digital mediante lectores.",\n      "highlights": [\n        "Firma Electrónica",\n        "Huella Digital",\n        "Microservicios",\n        "Integraciones"\n      ],\n      "keywords": ["digitalsign", "java", "certificates", "microservices"],\n      "startDate": "2013-11-01",\n      "endDate": "2014-01-31",\n      "url": "https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20481-13.pdf",\n      "website": "https://mpfciudad.gob.ar/storage/archivos/Resoluci%C3%B3n%20FG%20N%C2%BA%20481-13.pdf",\n      "roles": ["Arquitecto", "Desarrollador"],\n      "entity": "MPFCABA",\n      "type": "application"\n    }\n  ],\n  "meta": {\n    "canonical": "https://raw.githubusercontent.com/jpaddeo/jpaddeo.github.io/master/resume-en.json",\n    "version": "v1.0.0",\n    "lastModified": "2021-11-10T09:45:00"\n  }\n}\n```\n\nQuestion: Did you get bachelor degree?\n\n',
    },
  ];

  const result = await model.generateContent({
    contents: [{ role: 'user', parts }],
    generationConfig,
    safetySettings,
  });

  const response = result.response;
  console.log(response.text());
}

run();