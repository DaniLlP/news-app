// Complete UI translations for NEWS HUB (es / en / ca)
// pick(field, lang) resolves localized article fields {es,en,ca} with fallback.

const translations = {
  es: {
    appTagline: "España • Cataluña • Barcelona • Internacional",
    nav: {
      home: "Inicio",
      top10: "Top 10",
      briefing: "Resumen IA",
      breaking: "Última hora",
      barcelona: "Barcelona",
      catalonia: "Cataluña",
      spain: "España",
      international: "Internacional",
      finance: "Finanzas",
      technology: "Tecnología",
      sports: "Deportes",
      science: "Ciencia",
      lifestyle: "Estilo de vida",
    },
    breaking: { title: "ÚLTIMA HORA", live: "DIRECTO" },
    home: {
      featured: "Noticia destacada",
      trending: "Tendencias",
      mostRead: "Más leído",
      latest: "Últimas noticias",
    },
    top10: {
      title: "Top 10 del momento",
      subtitle: "Las noticias más leídas y comentadas ahora mismo",
      local: "Local",
      national: "España",
      international: "Internacional",
      byPopular: "Populares",
      byComments: "Comentadas",
      views: "lecturas",
      comments: "comentarios",
    },
    briefing: {
      title: "Resumen IA del día",
      subtitle: "Síntesis inteligente de lo que dicen las noticias",
      whatTheySay: "Qué dicen los medios",
      ourTake: "Nuestra opinión",
      updated: "Actualizado",
      readAnalysis: "Leer análisis",
      openStory: "Abrir noticia",
    },
    article: {
      author: "Autor",
      published: "Publicado",
      share: "Compartir",
      readMore: "Fuente original",
      source: "Fuente",
      related: "Artículos relacionados",
      minutes: "min de lectura",
      summary: "Resumen",
      views: "lecturas",
      comments: "comentarios",
      readTime: "Lectura",
      aiAnalysis: "Análisis IA",
      whatOutletsSay: "Qué dice cada medio",
      ourOpinion: "Nuestra opinión",
      aiDisclaimer:
        "Análisis generado por IA a partir de la cobertura de múltiples medios.",
      linkCopied: "Enlace copiado al portapapeles",
    },
    stance: {
      supportive: "A favor",
      critical: "Crítica",
      balanced: "Equilibrada",
    },
    tone: { positive: "Favorable", critical: "Crítico", neutral: "Neutral" },
    region: {
      local: "Local",
      national: "España",
      international: "Internacional",
    },
    finance: {
      title: "Finanzas",
      markets: "Mercados",
      disclaimer:
        "Datos de demostración. En producción se conectaría a APIs de mercado en tiempo real (retraso de 15-30 min).",
      news: "Noticias de finanzas",
    },
    search: {
      placeholder: "Buscar noticias...",
      noResults: "No se encontraron resultados",
      results: "resultados",
    },
    footer: {
      tagline:
        "Agregador de noticias premium para España, Cataluña, Barcelona y el mundo.",
      sections: "Secciones",
      regions: "Regiones",
      about: "Acerca de",
      rights: "Hecho con ❤️ para los amantes de las noticias.",
    },
    common: {
      loading: "Cargando...",
      close: "Cerrar",
      back: "Volver",
      seeAll: "Ver todo",
    },
  },

  en: {
    appTagline: "Spain • Catalonia • Barcelona • International",
    nav: {
      home: "Home",
      top10: "Top 10",
      briefing: "AI Briefing",
      breaking: "Breaking",
      barcelona: "Barcelona",
      catalonia: "Catalonia",
      spain: "Spain",
      international: "International",
      finance: "Finance",
      technology: "Technology",
      sports: "Sports",
      science: "Science",
      lifestyle: "Lifestyle",
    },
    breaking: { title: "BREAKING NEWS", live: "LIVE" },
    home: {
      featured: "Featured Story",
      trending: "Trending Now",
      mostRead: "Most Read",
      latest: "Latest News",
    },
    top10: {
      title: "Top 10 right now",
      subtitle: "The most read and most discussed stories at the moment",
      local: "Local",
      national: "Spain",
      international: "International",
      byPopular: "Popular",
      byComments: "Commented",
      views: "views",
      comments: "comments",
    },
    briefing: {
      title: "AI Daily Briefing",
      subtitle: "Smart synthesis of what the news is saying",
      whatTheySay: "What the outlets say",
      ourTake: "Our take",
      updated: "Updated",
      readAnalysis: "Read analysis",
      openStory: "Open story",
    },
    article: {
      author: "Author",
      published: "Published",
      share: "Share",
      readMore: "Original source",
      source: "Source",
      related: "Related articles",
      minutes: "min read",
      summary: "Summary",
      views: "views",
      comments: "comments",
      readTime: "Read time",
      aiAnalysis: "AI Analysis",
      whatOutletsSay: "What each outlet says",
      ourOpinion: "Our opinion",
      aiDisclaimer:
        "AI-generated analysis based on coverage across multiple outlets.",
      linkCopied: "Link copied to clipboard",
    },
    stance: {
      supportive: "Supportive",
      critical: "Critical",
      balanced: "Balanced",
    },
    tone: { positive: "Favourable", critical: "Critical", neutral: "Neutral" },
    region: {
      local: "Local",
      national: "Spain",
      international: "International",
    },
    finance: {
      title: "Finance",
      markets: "Markets",
      disclaimer:
        "Demo data. Production would connect to real-time market APIs (15-30 min delay).",
      news: "Finance News",
    },
    search: {
      placeholder: "Search news...",
      noResults: "No results found",
      results: "results",
    },
    footer: {
      tagline:
        "Premium news aggregation for Spain, Catalonia, Barcelona and the world.",
      sections: "Sections",
      regions: "Regions",
      about: "About",
      rights: "Made with ❤️ for news enthusiasts.",
    },
    common: {
      loading: "Loading...",
      close: "Close",
      back: "Back",
      seeAll: "See all",
    },
  },

  ca: {
    appTagline: "Espanya • Catalunya • Barcelona • Internacional",
    nav: {
      home: "Inici",
      top10: "Top 10",
      briefing: "Resum IA",
      breaking: "Última hora",
      barcelona: "Barcelona",
      catalonia: "Catalunya",
      spain: "Espanya",
      international: "Internacional",
      finance: "Finances",
      technology: "Tecnologia",
      sports: "Esports",
      science: "Ciència",
      lifestyle: "Estil de vida",
    },
    breaking: { title: "ÚLTIMA HORA", live: "DIRECTE" },
    home: {
      featured: "Notícia destacada",
      trending: "Tendències",
      mostRead: "Més llegit",
      latest: "Últimes notícies",
    },
    top10: {
      title: "Top 10 del moment",
      subtitle: "Les notícies més llegides i comentades ara mateix",
      local: "Local",
      national: "Espanya",
      international: "Internacional",
      byPopular: "Populars",
      byComments: "Comentades",
      views: "lectures",
      comments: "comentaris",
    },
    briefing: {
      title: "Resum IA del dia",
      subtitle: "Síntesi intel·ligent del que diuen les notícies",
      whatTheySay: "Què diuen els mitjans",
      ourTake: "La nostra opinió",
      updated: "Actualitzat",
      readAnalysis: "Llegir anàlisi",
      openStory: "Obrir notícia",
    },
    article: {
      author: "Autor",
      published: "Publicat",
      share: "Compartir",
      readMore: "Font original",
      source: "Font",
      related: "Articles relacionats",
      minutes: "min de lectura",
      summary: "Resum",
      views: "lectures",
      comments: "comentaris",
      readTime: "Lectura",
      aiAnalysis: "Anàlisi IA",
      whatOutletsSay: "Què diu cada mitjà",
      ourOpinion: "La nostra opinió",
      aiDisclaimer:
        "Anàlisi generada per IA a partir de la cobertura de múltiples mitjans.",
      linkCopied: "Enllaç copiat al porta-retalls",
    },
    stance: {
      supportive: "A favor",
      critical: "Crítica",
      balanced: "Equilibrada",
    },
    tone: { positive: "Favorable", critical: "Crític", neutral: "Neutral" },
    region: {
      local: "Local",
      national: "Espanya",
      international: "Internacional",
    },
    finance: {
      title: "Finances",
      markets: "Mercats",
      disclaimer:
        "Dades de demostració. En producció es connectaria a APIs de mercat en temps real (retard de 15-30 min).",
      news: "Notícies de finances",
    },
    search: {
      placeholder: "Cercar notícies...",
      noResults: "No s\u2019han trobat resultats",
      results: "resultats",
    },
    footer: {
      tagline:
        "Agregador de notícies premium per a Espanya, Catalunya, Barcelona i el món.",
      sections: "Seccions",
      regions: "Regions",
      about: "Sobre",
      rights: "Fet amb ❤️ per als amants de les notícies.",
    },
    common: {
      loading: "Carregant...",
      close: "Tancar",
      back: "Tornar",
      seeAll: "Veure-ho tot",
    },
  },
};

export const useTranslation = (lang) => translations[lang] || translations.en;

// Resolve a localized article field: { es, en, ca } -> string
export const pick = (field, lang) => {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.en ?? field.es ?? Object.values(field)[0] ?? "";
};

// Compact number formatting: 48200 -> 48.2K
export const formatCount = (n) => {
  if (n == null) return "";
  if (n >= 1000000) return (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return String(n);
};

export default translations;
