export type Language = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
    },

    hero: {
      role: 'Software Engineer',
      headline: 'Building reliable software. Exploring what’s next.',
      areas: ['Software Engineering', 'Cloud', 'AI'],
      scroll: 'Scroll to explore',
    },
    whoIAm: {
        label: 'Who I am',
        title: "I'm Iván.",
        paragraphs: [
            'I’m a software engineer who enjoys understanding how things work, building things from scratch, and figuring out what’s worth learning next.',
            'My career has taken me through software development, cloud and increasingly into AI. Along the way, I’ve found that what I enjoy most isn’t just writing code — it’s understanding a problem, figuring out how to solve it, and turning the idea into something real.',
            'I like being challenged, learning from people around me and taking on things I don’t know yet. That’s probably what has shaped me the most so far: I’m always looking for what’s next.',
        ],
        areas: ['Software Engineering', 'Cloud', 'AI'],
        next: 'How I think',
        },
        howIApprouchThings: {
          label: 'How I approach things',
          title: 'Understand. Build. Improve.',
          intro:
            'I don’t need to know everything before I start. I need to understand what matters, figure out what I don’t know, and move things forward.',

          principles: [
            {
              title: 'Understand first',
              description:
                'I like to understand the problem, the context and what actually needs to be solved before jumping into a solution.',
            },
            {
              title: 'Learn by doing',
              description:
                'When I don’t know something, I explore it by building, testing and experimenting. I learn fastest when I can turn theory into something real.',
            },
            {
              title: 'Take ownership',
              description:
                'Once I understand what needs to be done, I like taking responsibility for moving it forward and seeing it through.',
            },
            {
              title: 'Keep improving',
              description:
                'I look for feedback, question my decisions and try to leave things better than I found them.',
            },
          ],

          inPracticeLabel: 'In practice',

          inPractice: [
            {
              title: 'When I don’t know',
              description:
                'I investigate first, ask when needed, test my assumptions and turn what I learn into something useful.',
            },
            {
              title: 'When something breaks',
              description:
                'I focus on understanding what happened before jumping into a fix, then look for the underlying cause.',
            },
            {
              title: 'When I work with others',
              description:
                'I value clear communication, asking questions early and keeping people aligned rather than working in isolation.',
            },
          ],

          next: 'Explore my experience',
        },
        experience: {
          label: 'Experience',
          title: 'What I’ve done.',

          everHealth: {
            period: 'Jan 2025 — Present',
            role: 'Full Stack / DevOps Software Engineer',
            highlight:
              'From legacy systems to scalable, production-ready software.',
            description:
              'Working across application architecture, cloud infrastructure and production systems, with a strong focus on modernization, reliability and solving complex technical problems.',
            areas: ['Full Stack', 'Cloud', 'DevOps'],
          },

          avanade: {
            period: 'Jan 2023 — Jan 2025',
            role: 'Full Stack Software Engineer Jr',
            highlight:
              'Building enterprise software in complex, large-scale environments.',
            description:
              'Working on aerospace and supply-chain software, combining full-stack development with cloud migration, automation and legacy system modernization.',
            areas: ['Full Stack', 'Azure', 'Automation'],
          },

          next: 'My learning continues',
        },
  },

  es: {
    nav: {
      work: 'Trabajo',
      about: 'Sobre mí',
      contact: 'Contacto',
    },

    hero: {
      role: 'Ingeniero de Software',
      headline: 'Construyendo software fiable. Explorando lo que viene.',
      areas: ['Ingeniería de Software', 'Cloud', 'IA'],
      scroll: 'Desplázate para explorar',
    },
    whoIAm: {
        label: 'Quién soy',
        title: 'Soy Iván.',
        paragraphs: [
            'Soy ingeniero de software y disfruto entendiendo cómo funcionan las cosas, construyendo desde cero y descubriendo qué merece la pena aprender después.',
            'Mi trayectoria me ha llevado por el desarrollo de software, cloud y, cada vez más, por la inteligencia artificial. Con el tiempo he descubierto que lo que más disfruto no es simplemente escribir código, sino entender un problema, encontrar la forma de resolverlo y convertir una idea en algo real.',
            'Me gusta enfrentarme a nuevos retos, aprender de las personas que me rodean y meterme en cosas que todavía no sé hacer. Probablemente eso sea lo que más ha definido mi camino hasta ahora: siempre estoy buscando qué viene después.',
        ],
        areas: ['Ingeniería de Software', 'Cloud', 'IA'],
        next: 'Cómo pienso',
        },
        howIApprouchThings: {
          label: 'Cómo afronto las cosas',
          title: 'Entender. Construir. Mejorar.',
          intro:
            'No necesito saberlo todo antes de empezar. Necesito entender qué importa, descubrir lo que no sé y hacer que las cosas avancen.',

          principles: [
            {
              title: 'Entender primero',
              description:
                'Me gusta entender el problema, el contexto y qué hay que resolver realmente antes de lanzarme a buscar una solución.',
            },
            {
              title: 'Aprender haciendo',
              description:
                'Cuando no conozco algo, lo exploro construyendo, probando y experimentando. Aprendo más rápido cuando puedo convertir la teoría en algo real.',
            },
            {
              title: 'Hacerme responsable',
              description:
                'Una vez entiendo qué hay que hacer, me gusta asumir la responsabilidad de llevarlo adelante y verlo hasta el final.',
            },
            {
              title: 'Seguir mejorando',
              description:
                'Busco feedback, cuestiono mis decisiones e intento dejar las cosas mejor de como las encontré.',
            },
          ],

          inPracticeLabel: 'En la práctica',

          inPractice: [
            {
              title: 'Cuando no sé algo',
              description:
                'Investigo primero, pregunto cuando hace falta, pongo a prueba mis suposiciones y convierto lo aprendido en algo útil.',
            },
            {
              title: 'Cuando algo falla',
              description:
                'Intento entender qué ha ocurrido antes de lanzarme a solucionarlo y busco la causa del problema, no solo el síntoma.',
            },
            {
              title: 'Cuando trabajo con otros',
              description:
                'Valoro la comunicación clara, hacer preguntas pronto y mantener al equipo alineado en lugar de trabajar de forma aislada.',
            },
          ],

          next: 'Conoce mi experiencia',
        },
        experience: {
          label: 'Experiencia',
          title: 'Lo que he hecho.',

          everHealth: {
            period: 'Ene 2025 — Actualidad',
            role: 'Full Stack / DevOps Software Engineer',
            highlight:
              'De sistemas legacy a software escalable y preparado para producción.',
            description:
              'Trabajo entre arquitectura de aplicaciones, infraestructura cloud y sistemas en producción, con especial foco en modernización, fiabilidad y resolución de problemas técnicos complejos.',
            areas: ['Full Stack', 'Cloud', 'DevOps'],
          },

          avanade: {
            period: 'Ene 2023 — Ene 2025',
            role: 'Full Stack Software Engineer Jr',
            highlight:
              'Construyendo software empresarial en entornos complejos y de gran escala.',
            description:
              'Trabajé en software para los sectores aeroespacial y supply chain, combinando desarrollo full-stack, migración cloud, automatización y modernización de sistemas legacy.',
            areas: ['Full Stack', 'Azure', 'Automatización'],
          },

          next: 'Mi aprendizaje continúa',
        },
  },
} as const