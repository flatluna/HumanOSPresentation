import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Compass, Layers3, Sparkles, Target, RefreshCw, Route, BarChart3, Network, Mic, Trophy, CheckCircle2 } from 'lucide-react';

const slides = {
  24: {
    eyebrow: 'TEC 360 · CAPÍTULO 1',
    title: 'El aprendedor al centro',
    lead: 'Human OS convierte la personalización en una experiencia viva: cada persona aprende según su momento de vida, sus metas y la evidencia de lo que realmente domina.',
    icon: Brain,
    cards: [
      ['1.1 Momentos de vida', 'El perfil y los objetivos del aprendedor orientan la ruta, en lugar de imponer un recorrido único.', Target],
      ['1.2 Diseño de aprendizaje', 'Cursos construidos en Engrams, con hipótesis, enseñanza, recall, producción y evaluación.', Layers3],
      ['1.3 Data del aprendedor', 'El grafo de conocimiento y los factuals conectan progreso, evidencia y decisiones en tiempo real.', Network],
      ['1.4 Personalización', 'Rutas, ejercicios, exámenes y repaso espaciado se adaptan a lo que la persona necesita recuperar y practicar.', Sparkles],
      ['1.5 Ecosistema digital', 'Una experiencia end-to-end reúne contenido, tutoría de voz, video, práctica y seguimiento.', Mic],
    ],
    footer: 'Con Human OS, “aprendedor al centro” deja de ser un principio abstracto y se vuelve una arquitectura medible de acompañamiento.'
  },
  25: {
    eyebrow: 'TEC 360 · CAPÍTULO 2',
    title: 'Un journey que continúa toda la vida',
    lead: 'Human OS acompaña al aprendedor desde el descubrimiento hasta la siguiente oportunidad, manteniendo la relación con Tec activa y relevante.',
    icon: Route,
    cards: [
      ['Descubrimiento → Exploración', 'La IA ayuda a traducir intereses y contexto en opciones de aprendizaje claras y pertinentes.', Compass],
      ['Definición → Vivencia', 'El diagnóstico inicial crea una ruta; el tutor acompaña la aplicación y resuelve dudas entre experiencias.', Brain],
      ['Reconocimiento', 'El dominio demostrado se convierte en logros, credenciales y evidencia visible del avance.', Trophy],
      ['Oportunidades de impacto', 'El perfil de capacidades conecta lo aprendido con nuevos retos, proyectos y oportunidades.', Target],
      ['Continuidad', 'El recall, las recomendaciones y las metas siguientes invitan a volver al ecosistema sin empezar de cero.', RefreshCw],
    ],
    footer: 'La relación no termina al concluir un curso: cada experiencia alimenta la siguiente etapa del journey del aprendedor.'
  },
  26: {
    eyebrow: 'TEC 360 · CAPÍTULO 3',
    title: 'Los cinco pilares, llevados a la práctica',
    lead: 'Human OS puede funcionar como la capa de inteligencia y acompañamiento que hace consistente la experiencia Tec 360 en cada producto, servicio e interacción.',
    icon: BarChart3,
    cards: [
      ['Trayectoria a la Medida', 'Rutas adaptativas basadas en metas, capacidades y evidencia de dominio.', Route],
      ['Ecosistema Multiformato', 'Texto, voz, video, práctica y comunidad en una experiencia flexible.', Layers3],
      ['Experiencia que Transforma', 'Retos, producción y simulaciones convierten conocimiento en acción observable.', CheckCircle2],
      ['IA que Potencia', 'Un tutor fundamentado acompaña, recomienda y retroalimenta sin sustituir a las personas.', Sparkles],
      ['Impacto que Trasciende', 'Recall, hábitos, insignias y métricas conectan aprendizaje con resultados sostenibles.', BarChart3],
    ],
    footer: 'La propuesta: Tec 360 define la experiencia que transforma; Human OS aporta la memoria, la inteligencia y los bucles de práctica que la hacen escalar.'
  }
};

export function SlideTec360Connections({ slide, currentIndex = 0, totalSlides = 26 }) {
  const content = slides[slide?.id] || slides[24];
  const HeaderIcon = content.icon;

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white p-4 sm:p-7 lg:p-10">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(125,211,252,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,.18) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45 }} className="relative z-10 h-full max-w-7xl mx-auto flex flex-col gap-4 sm:gap-5">
        <header className="flex items-start justify-between border-b border-sky-300/20 pb-3">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20"><HeaderIcon className="w-5 h-5 sm:w-6 sm:h-6" /></div>
            <div>
              <p className="text-[10px] sm:text-xs font-mono tracking-[.18em] text-orange-300">{content.eyebrow}</p>
              <h1 className="mt-1 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{content.title}</h1>
            </div>
          </div>
          <span className="hidden sm:block text-xs font-mono text-sky-200/70">SLIDE {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}</span>
        </header>

        <p className="max-w-5xl text-sm sm:text-lg lg:text-xl leading-relaxed text-sky-100/85">{content.lead}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 flex-1 min-h-0">
          {content.cards.map(([title, text, Icon]) => (
            <motion.article key={title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }} className="rounded-xl border border-sky-200/20 border-t-2 border-t-orange-400 bg-white/[.08] p-3 sm:p-4 flex flex-col gap-3">
              <Icon className="w-5 h-5 text-sky-300" />
              <h2 className="text-sm sm:text-base font-bold leading-tight text-white">{title}</h2>
              <p className="text-xs sm:text-sm leading-relaxed text-sky-100/75">{text}</p>
            </motion.article>
          ))}
        </div>

        <div className="rounded-xl border border-sky-300/25 bg-sky-400/10 px-4 py-3 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-orange-300 mt-0.5 flex-shrink-0" />
          <p className="text-sm sm:text-base font-semibold leading-relaxed text-white">{content.footer}</p>
        </div>
      </motion.div>
    </div>
  );
}
