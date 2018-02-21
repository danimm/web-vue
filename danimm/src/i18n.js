import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  es: {
    name: 'Daniel Muñoz Martín',
    occupation: 'Desarrollador Frontend',
    language: 'Idiomas: ',
    home: 'Inicio',
    about: 'Acerca de mi',
    portfolio: 'Portafolio',
    skills: 'Habilidades',
    footer: {
      title: '¡Gracias por tu visita!',
      msg1: 'El propósito de esta web es tener todos mis proyectos personales y conocimientos en un sólo lugar.',
      msg2: 'Si tienes alguna pregunte escribeme a: ',
      created: 'Creada por '
    },
    aboutComp: {
      msg1: 'Soy un apasionado de la tecnología. Soy técnico superior en administración de sistemas informáticos, pero en los últimos años estoy redirigiendo mi carrera al desarrollo Web.',
      msg2: 'Me encanta aprender nuevas tecnologías del desarrollo web moderno y crear proyectos personales para poner mis conocimientos en práctica.',
      msg3: 'Puedes encontrar todos mis proyectos personales en ',
      portfolio: 'portafolio personal'
    },
    skillsComp: {
      title: 'Habilidades Frontend',
      msg: 'Estos son mis conocimientos en las principales tecnologías del desarrollo web moderno.',
      techs: {
        dev: 'Desarrollo',
        devtools: 'Herramientas de desarrollo',
        design: 'Diseño',
        js: 'Javascript'
      }
    },
    descriptionComp: {
      item1: {
        title: 'Desarrollo Frontend',
        msg: 'Especializado en el desarrollo Frontend, con los nuevos estándares web y siempre buscando nuevos frameworks para añadir a mi Stack de desarrollo.'
      },
      item2: {
        title: 'Diseño adaptable',
        msg: 'Siempre buscando la mejor experiencia de usuario usando diseños adaptables, con frameworks como Bootstrap, Materialize-css (usado en esta web), Foundation... No importa el dispositivo o la resolución, siempre tendrás una buena experiencia de usuario.'
      },
      item3: {
        title: '100% Autodidácta',
        msg: '¡En el mundo del desarrollo web, tienes que aprender constantemente! Por eso estudio a diario para estar actualizado con los nuevos frameworks y librerías. Uno de mis lugares favoritos para estudiar es en Platzi. Es una plataforma de educación online con más de 500.000 estudiantes. Puedes ver mi cuenta ',
        profile: 'aquí'
      }
    },
    portfolioComp: {
      title: 'Portafolio personal',
      msg1: 'En esta sección encontrarás una lista de mis proyectos personales, creados para poner en práctica los conocimientos en las nuevas tecnologías que estoy aprendiendo.',
      msg2: 'Añadiré periódicamente en esta sección los proyectos personales que estoy desarrolando.',
      goProject: '¡Ir al proyecto!',
      goDescription: 'Ver descripción',
      projects: [
        {
          id: 1,
          title: 'Vue Music',
          description: 'Proyecto final del curso de Vuejs en Platzi.com, en el cuál usamos la API de Spotify para crear un reproductor de música online.'
        },
        {
          id: 2,
          title: 'API Last.fm',
          description: 'Este es un proyecto simple para mostrar una pequeña lista de artistas usando la API de last fm.'
        },
        {
          id: 3,
          title: 'Manipulando el DOM',
          description: 'Este es un proyecto usando el Local Storage para crear una lista de Tareas.'
        },
        {
          id: 4,
          title: 'Juego de memoria',
          description: 'Este proyecto es un juego de memorizar letras usando sólo Javascript. Sólo para vista de escritorio.'
        },
        {
          id: 5,
          title: 'Web Bootstrap',
          description: 'Un proyecto simple usando solo el sistema de columnas de bootstrap y las clases más importantes.'
        }
      ]
    }
  },
  en: {
    name: 'Daniel Muñoz Martín',
    occupation: 'Desarrollador Frontend',
    language: 'Languages: ',
    home: 'Home',
    about: 'About me',
    portfolio: 'Portfolio',
    skills: 'Skills',
    footer: {
      title: 'Thank you for your visit!',
      msg1: 'The purpose of this website is to have all my personal projects and knowledge in one place.',
      msg2: 'If you have any questions write me to: ',
      created: 'Created by '
    },
    aboutComp: {
      msg1: 'I am passionate about technology. I am a technician in Systems Administration, but the last years I am directing my career to the Web development.',
      msg2: 'I love learning the new technologies of modern web development and creating personal projects to put my knowledge into practice.',
      msg3: 'You can find all my personal projects in ',
      portfolio: 'personal Portfolio'
    },
    skillsComp: {
      title: 'Frontend Skills',
      msg: 'These are my knowledge in the main technologies of modern web development.',
      techs: {
        dev: 'Development',
        devtools: 'DevTools',
        design: 'Design',
        js: 'Javascript'
      }
    },
    descriptionComp: {
      item1: {
        title: 'front end development',
        msg: "I'm specializing in Frontend Web Development, with the current Web standards and always looking for new front-end frameworks to add to my development stack."
      },
      item2: {
        title: 'Responsive Design',
        msg: "Always looking for the best user experience using responsive designs, with frameworks like Bootstrap, Materialize-css (used in this website), Foundation... It doesn't matter the device or the resolution, you will always have a good user experience."
      },
      item3: {
        title: '100% Self-taught',
        msg: "In the world of web development, you have to learn constantly! That's why I study daily to be always updated with the new frameworks and libraries. One of my favorite places to study is in Platzi. It is an online education platform with more than 500,000 students. You can check my profile ",
        profile: 'here'
      }
    },
    portfolioComp: {
      title: 'Personal Portfolio',
      msg1: 'In this section you will find a list of my personal projects, used to put into practice the new technologies that I am learning.',
      msg2: 'I add periodically in this section the personal projects that I am developing.',
      goProject: '¡Go to the project!',
      goDescription: 'Description here',
      projects: [
        {
          id: 1,
          title: 'Vue Music',
          description: 'Final project of the Vue.js course in Platzi.com, in which we use the Spotify API to make an online music player.'
        },
        {
          id: 2,
          title: 'API Last.fm',
          description: 'In this simple project to show a small list of artists using the last fm API.'
        },
        {
          id: 3,
          title: 'Manipulate DOM',
          description: 'This is a project using the local storage to create a list of tasks.'
        },
        {
          id: 4,
          title: 'Memory game',
          description: 'This project is a game to memorize letters using only Javascript. Only for desktop.'
        },
        {
          id: 5,
          title: 'Web Bootstrap',
          description: 'A simple project only using the system of bootstrap columns and the most important classes.'
        }
      ]
    }
  },
  de: {

  }
}

const i18n = new VueI18n({
  messages,
  locale: 'en'
})

export default i18n
