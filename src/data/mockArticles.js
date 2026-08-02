// Localized mock articles for NEWS HUB
// Every text field is localized: { es, en, ca }
// pick(field, lang) resolves the right language with graceful fallback.

const m = (es, en, ca) => ({ es, en, ca });
const now = Date.now();
const minsAgo = (mins) => new Date(now - mins * 60000);
const hoursAgo = (h) => new Date(now - h * 3600000);

const img = (id) =>
  `https://images.unsplash.com/photo-${id}?w=1200&h=750&fit=crop&auto=format&q=60`;

export const mockArticles = [
  // ============================================================
  // LOCAL — Barcelona & Catalonia
  // ============================================================
  {
    id: "loc-1",
    category: "barcelona",
    region: "local",
    image: img("1567605021245-e2af0d14cf7d"),
    source: "La Vanguardia",
    author: "Redacción Barcelona",
    published: hoursAgo(2),
    readTime: 4,
    views: 48200,
    comments: 312,
    title: m(
      "Barcelona presenta su nuevo plan de movilidad urbana 2026-2028 con 150M€ de inversión",
      "Barcelona unveils its new 2026-2028 urban mobility plan with €150M investment",
      "Barcelona presenta el seu nou pla de mobilitat urbana 2026-2028 amb 150M€ d\u2019inversió",
    ),
    summary: m(
      "El Ayuntamiento amplía el metro, duplica los carriles bici y crea nuevas zonas de bajas emisiones en Eixample y Sant Martí.",
      "City Hall expands the metro, doubles bike lanes and creates new low-emission zones in Eixample and Sant Martí.",
      "L\u2019Ajuntament amplia el metro, duplica els carrils bici i crea noves zones de baixes emissions a l\u2019Eixample i Sant Martí.",
    ),
    content: m(
      "El plan contempla la ampliación de la L8, 90 km nuevos de carril bici y la peatonalización de 21 ejes verdes. La inversión de 150 millones de euros se ejecutará en tres fases, priorizando los barrios con peor calidad del aire. Los vecinos podrán participar en el diseño final a través de un proceso de consultas que arranca el próximo mes.",
      "The plan includes extending the L8 line, 90 km of new bike lanes and pedestrianising 21 green corridors. The €150 million investment will roll out in three phases, prioritising neighbourhoods with the worst air quality. Residents will be able to shape the final design through a public consultation starting next month.",
      "El pla contempla l\u2019ampliació de la L8, 90 km nous de carril bici i la pacificació de 21 eixos verds. La inversió de 150 milions d\u2019euros s\u2019executarà en tres fases, prioritzant els barris amb pitjor qualitat de l\u2019aire. Els veïns podran participar en el disseny final mitjançant consultes que comencen el mes vinent.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa local coincide en que es el plan más ambicioso en una década, aunque discrepa sobre los plazos: los medios municipales lo ven realista y la prensa económica duda de la financiación.",
        "Local press agrees this is the most ambitious plan in a decade, though outlets split on timing: municipal media call it realistic while business press questions the financing.",
        "La premsa local coincideix que és el pla més ambiciós en una dècada, tot i que discrepa sobre els terminis: els mitjans municipals el veuen realista i la premsa econòmica dubta del finançament.",
      ),
      perspectives: [
        {
          source: "La Vanguardia",
          tone: "positive",
          text: m(
            "Destaca el consenso vecinal y el retorno en salud pública.",
            "Highlights neighbourhood consensus and public-health returns.",
            "Destaca el consens veïnal i el retorn en salut pública.",
          ),
        },
        {
          source: "El Periódico",
          tone: "neutral",
          text: m(
            "Subraya que dos tercios del presupuesto dependen de fondos europeos.",
            "Notes two thirds of the budget depends on EU funds.",
            "Subratlla que dos terços del pressupost depenen de fons europeus.",
          ),
        },
        {
          source: "Expansión",
          tone: "critical",
          text: m(
            "Advierte del impacto en la logística de última milla y el comercio.",
            "Warns of the impact on last-mile logistics and retail.",
            "Adverteix de l\u2019impacte en la logística d\u2019última milla i el comerç.",
          ),
        },
      ],
      opinion: m(
        "Nuestra posición es clara: Barcelona no puede permitirse otro plan de movilidad que muera en los despachos. La evidencia de las superilles es contundente —menos ruido, menos NO2, más comercio de proximidad— y los costes de no actuar se pagan en salud. El Ayuntamiento debe blindar el calendario frente a los ciclos electorales, y la oposición haría bien en negociar mejoras en lugar de bloquear. Es la inversión con mejor relación coste-beneficio de la ciudad.",
        "Our position is clear: Barcelona cannot afford another mobility plan that dies in committee. The evidence from the superblocks is overwhelming — less noise, less NO2, stronger local commerce — and the cost of inaction is paid in public health. City Hall must shield the timeline from electoral cycles, and the opposition would do better negotiating improvements than blocking. This is the best cost-benefit investment the city can make.",
        "La nostra posició és clara: Barcelona no es pot permetre un altre pla de mobilitat que mori als despatxos. L\u2019evidència de les superilles és contundent —menys soroll, menys NO2, més comerç de proximitat— i el cost de no actuar es paga en salut. L\u2019Ajuntament ha de blindar el calendari davant dels cicles electorals, i l\u2019oposició faria bé de negociar millores en lloc de bloquejar. És la inversió amb millor relació cost-benefici de la ciutat.",
      ),
    },
  },
  {
    id: "loc-2",
    category: "sports",
    region: "local",
    image: img("1461649490374-7ca191804bde"),
    source: "Mundo Deportivo",
    author: "Redacció Esports",
    published: hoursAgo(3),
    readTime: 3,
    views: 89400,
    comments: 1247,
    title: m(
      "El Barça remonta y gana 3-1 al Athletic en un Camp Nou reabierto y lleno",
      "Barça come from behind to beat Athletic 3-1 at a reopened, packed Camp Nou",
      "El Barça remunta i guanya 3-1 l\u2019Athletic en un Camp Nou reobert i ple",
    ),
    summary: m(
      "Doblete de Lamine Yamal y gol de Pedri en la segunda parte. El equipo se coloca líder provisional de LaLiga.",
      "A Lamine Yamal brace and a Pedri goal in the second half. The team moves top of LaLiga provisionally.",
      "Doblet de Lamine Yamal i gol de Pedri a la segona part. L\u2019equip es col·loca líder provisional de LaLiga.",
    ),
    content: m(
      "Tras un primer tiempo gris y un gol en contra al descanso, el equipo reaccionó con velocidad por las bandas y presión alta. El ambiente del estadio renovado, con 92.000 espectadores, fue decisivo según los propios jugadores. La afición despidió al equipo coreando el nombre del canterano.",
      "After a flat first half and trailing at the break, the team reacted with pace on the wings and a high press. The renovated stadium\u2019s atmosphere, with 92,000 fans, proved decisive according to the players themselves. Supporters sent the team off chanting the academy graduate\u2019s name.",
      "Després d\u2019una primera part grisa i un gol en contra al descans, l\u2019equip va reaccionar amb velocitat per les bandes i pressió alta. L\u2019ambient de l\u2019estadi renovat, amb 92.000 espectadors, va ser decisiu segons els mateixos jugadors. L\u2019afició va acomiadar l\u2019equip corejant el nom del canterà.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "La prensa deportiva celebra la remontada pero señala el mismo problema: sin Yamal inspirado, el equipo carece de plan B. Los medios de Bilbao reclaman un penalti no señalado.",
        "Sports media celebrate the comeback but flag the same issue: without an inspired Yamal, the team lacks a plan B. Bilbao outlets protest an unawarded penalty.",
        "La premsa esportiva celebra la remuntada però assenyala el mateix problema: sense un Yamal inspirat, l\u2019equip no té pla B. Els mitjans de Bilbao reclamen un penal no xiulat.",
      ),
      perspectives: [
        {
          source: "Mundo Deportivo",
          tone: "positive",
          text: m(
            "“Yamal decide, el Camp Nou ruge”: enfatiza el factor estadio.",
            '"Yamal decides, Camp Nou roars": emphasises the stadium factor.',
            '"Yamal decideix, el Camp Nou rugeix": emfatitza el factor estadi.',
          ),
        },
        {
          source: "Sport",
          tone: "positive",
          text: m(
            "Elogia el cambio táctico del descanso y el fondo de armario.",
            "Praises the half-time tactical switch and squad depth.",
            "Elogia el canvi tàctic del descans i el fons d\u2019armari.",
          ),
        },
        {
          source: "El Correo",
          tone: "critical",
          text: m(
            "Considera que el 2-1 llega tras un penalti claro no revisado.",
            "Argues the 2-1 came after a clear unreviewed penalty.",
            "Considera que el 2-1 arriba després d\u2019un penal clar no revisat.",
          ),
        },
      ],
      opinion: m(
        "Seamos francos: el resultado maquilla más de lo que resuelve. Depender de un talento de 18 años para rescatar partidos es una estrategia frágil para aspirar a todo. La dirección deportiva debe reforzar la medular en invierno; celebrar la épica está bien, pero los títulos se ganan con estructura. Y sí, el penalti del Athletic debió revisarse: el VAR pierde credibilidad cuando calla en las jugadas grises.",
        "Let\u2019s be frank: the result papers over more than it fixes. Relying on an 18-year-old to rescue matches is a fragile strategy for a team with top ambitions. The sporting director must reinforce midfield in January; celebrating heroics is fine, but titles are won with structure. And yes, Athletic\u2019s penalty deserved a review — VAR loses credibility when it stays silent on the grey calls.",
        "Siguem francs: el resultat maquilla més del que resol. Dependre d\u2019un talent de 18 anys per rescatar partits és una estratègia fràgil per aspirar a tot. La direcció esportiva ha de reforçar el mig del camp a l\u2019hivern; celebrar l\u2019èpica està bé, però els títols es guanyen amb estructura. I sí, el penal de l\u2019Athletic s\u2019havia de revisar: el VAR perd credibilitat quan calla en les jugades grises.",
      ),
    },
  },
  {
    id: "loc-3",
    category: "barcelona",
    region: "local",
    image: img("1449824913935-59a10b8d2000"),
    source: "El Periódico",
    author: "Societat",
    published: hoursAgo(5),
    readTime: 5,
    views: 61300,
    comments: 892,
    title: m(
      "El precio del alquiler en Barcelona baja un 4,2% tras un año de tope de rentas",
      "Barcelona rents fall 4.2% after one year of the rental cap",
      "El preu del lloguer a Barcelona baixa un 4,2% després d\u2019un any de topall de rendes",
    ),
    summary: m(
      "Primer descenso interanual desde 2015. Los propietarios alertan de una caída del 18% en la oferta disponible.",
      "First year-on-year drop since 2015. Landlords warn available supply has fallen 18%.",
      "Primer descens interanual des de 2015. Els propietaris alerten d\u2019una caiguda del 18% en l\u2019oferta disponible.",
    ),
    content: m(
      "Los datos del Incasòl confirman que el precio medio se sitúa en 1.087 euros mensuales. El descenso es mayor en Ciutat Vella y Gràcia, las zonas más tensionadas. Las asociaciones de propietarios sostienen que parte del parque ha migrado al alquiler de temporada, un efecto que el Govern promete regular este trimestre.",
      "Incasòl data confirms the average rent now stands at €1,087 per month. The drop is steepest in Ciutat Vella and Gràcia, the most stressed areas. Landlord associations claim part of the housing stock has shifted to seasonal lets, an effect the Catalan government promises to regulate this quarter.",
      "Les dades de l\u2019Incasòl confirmen que el preu mitjà se situa en 1.087 euros mensuals. El descens és més gran a Ciutat Vella i Gràcia, les zones més tensionades. Les associacions de propietaris sostenen que part del parc ha migrat al lloguer de temporada, un efecte que el Govern promet regular aquest trimestre.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "Los medios discrepan frontalmente: la prensa progresista celebra la primera bajada real de precios, mientras la económica atribuye el descenso a la fuga de oferta hacia el alquiler temporal.",
        "Outlets clash head-on: progressive press celebrates the first real price drop, while business media attribute it to supply fleeing into seasonal rentals.",
        "Els mitjans discrepen frontalment: la premsa progressista celebra la primera baixada real de preus, mentre l\u2019econòmica atribueix el descens a la fugida d\u2019oferta cap al lloguer temporal.",
      ),
      perspectives: [
        {
          source: "eldiario.es",
          tone: "positive",
          text: m(
            "La regulación funciona: los precios bajan donde se aplica.",
            "Regulation works: prices fall where it applies.",
            "La regulació funciona: els preus baixen on s\u2019aplica.",
          ),
        },
        {
          source: "Expansión",
          tone: "critical",
          text: m(
            "La oferta se desploma y la escasez pagará la factura futura.",
            "Supply is collapsing and scarcity will foot the future bill.",
            "L\u2019oferta es desploma i l\u2019escassetat pagarà la factura futura.",
          ),
        },
        {
          source: "ARA",
          tone: "neutral",
          text: m(
            "El éxito real depende de cerrar el agujero del alquiler de temporada.",
            "Real success hinges on closing the seasonal-rental loophole.",
            "L\u2019èxit real depèn de tancar el forat del lloguer de temporada.",
          ),
        },
      ],
      opinion: m(
        "La bajada del 4,2% es una victoria parcial que no debe leerse con triunfalismo. El tope de rentas ha demostrado que el mercado no se hunde por regular, pero el trasvase al alquiler de temporada es un agujero del tamaño de un transatlántico: si no se cierra ya, la norma quedará en papel mojado. Regular sin construir tampoco basta; sin un parque público ambicioso, Barcelona seguirá expulsando a sus jóvenes. Exigimos ambas cosas: cerrar el fraude de la temporada y triplicar la vivienda protegida.",
        "The 4.2% drop is a partial win that should not be read triumphantly. The rent cap has proven markets don\u2019t collapse under regulation, but the shift to seasonal lets is a loophole the size of an ocean liner: close it now or the law becomes dead letter. Regulating without building isn\u2019t enough either; without an ambitious public housing stock, Barcelona will keep expelling its young. We demand both: shut down the seasonal-rental fraud and triple protected housing.",
        "La baixada del 4,2% és una victòria parcial que no s\u2019ha de llegir amb triomfalisme. El topall de rendes ha demostrat que el mercat no s\u2019enfonsa per regular, però el transvasament al lloguer de temporada és un forat de la mida d\u2019un transatlàntic: si no es tanca ja, la norma quedarà en paper mullat. Regular sense construir tampoc no basta; sense un parc públic ambiciós, Barcelona seguirà expulsant els seus joves. Exigim totes dues coses: tancar el frau de la temporada i triplicar l\u2019habitatge protegit.",
      ),
    },
  },
  {
    id: "loc-4",
    category: "barcelona",
    region: "local",
    image: img("1583422409516-2895a77efded"),
    source: "Betevé",
    author: "Cultura",
    published: hoursAgo(7),
    readTime: 3,
    views: 52800,
    comments: 486,
    title: m(
      "La Sagrada Família confirma 2026 para culminar la torre de Jesucristo",
      "Sagrada Família confirms 2026 completion for the Jesus Christ tower",
      "La Sagrada Família confirma el 2026 per culminar la torre de Jesucrist",
    ),
    summary: m(
      "La basílica alcanzará los 172,5 metros y se convertirá en el edificio más alto de Barcelona, 144 años después de su inicio.",
      "The basilica will reach 172.5 metres, becoming Barcelona\u2019s tallest building 144 years after construction began.",
      "La basílica arribarà als 172,5 metres i es convertirà en l\u2019edifici més alt de Barcelona, 144 anys després del seu inici.",
    ),
    content: m(
      "La Junta Constructora confirma que la cruz monumental se izará coincidiendo con el centenario de la muerte de Gaudí. Quedarán pendientes la fachada de la Gloria y la polémica escalinata, cuyo desarrollo afectaría a dos manzanas del Eixample. El templo recibió 4,7 millones de visitantes el año pasado.",
      "The Construction Board confirms the monumental cross will be raised to coincide with the centenary of Gaudí\u2019s death. Still pending are the Glory façade and the controversial grand staircase, whose construction would affect two Eixample blocks. The temple welcomed 4.7 million visitors last year.",
      "La Junta Constructora confirma que la creu monumental s\u2019hissarà coincidint amb el centenari de la mort de Gaudí. Quedaran pendents la façana de la Glòria i la polèmica escalinata, el desenvolupament de la qual afectaria dues illes de l\u2019Eixample. El temple va rebre 4,7 milions de visitants l\u2019any passat.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Consenso en el hito histórico y división total en la escalinata: los medios culturales piden completar la visión de Gaudí y los vecinales defienden las 3.000 familias afectadas.",
        "Consensus on the historic milestone, total division on the staircase: cultural outlets want Gaudí\u2019s vision completed while neighbourhood media defend the 3,000 affected families.",
        "Consens en la fita històrica i divisió total en l\u2019escalinata: els mitjans culturals demanen completar la visió de Gaudí i els veïnals defensen les 3.000 famílies afectades.",
      ),
      perspectives: [
        {
          source: "La Vanguardia",
          tone: "positive",
          text: m(
            "Un hito de ingeniería y fe que corona 144 años de obra.",
            "An engineering and faith milestone crowning 144 years of work.",
            "Una fita d\u2019enginyeria i fe que corona 144 anys d\u2019obra.",
          ),
        },
        {
          source: "Betevé",
          tone: "neutral",
          text: m(
            "Recoge la incertidumbre de los vecinos de la calle Mallorca.",
            "Captures the uncertainty of Mallorca street residents.",
            "Recull la incertesa dels veïns del carrer Mallorca.",
          ),
        },
        {
          source: "El País",
          tone: "critical",
          text: m(
            "La escalinata exige expropiar hogares: patrimonio contra vecindario.",
            "The staircase demands expropriating homes: heritage versus neighbourhood.",
            "L\u2019escalinata exigeix expropiar llars: patrimoni contra veïnat.",
          ),
        },
      ],
      opinion: m(
        "Culminar la torre es motivo de orgullo colectivo, pero seríamos hipócritas si ignoramos el elefante en la habitación: la escalinata de la Gloria, tal como está planteada, es urbanísticamente indefendible. Gaudí diseñó para la Barcelona de 1915, no para expulsar a 3.000 vecinos en 2026. La Junta debe explorar alternativas arquitectónicas serias. El genio se honra con creatividad, no con desahucios.",
        "Completing the tower is cause for collective pride, but we would be hypocrites to ignore the elephant in the room: the Glory staircase, as currently planned, is indefensible urban policy. Gaudí designed for the Barcelona of 1915, not to displace 3,000 residents in 2026. The Board must explore serious architectural alternatives. You honour genius with creativity, not evictions.",
        "Culminar la torre és motiu d\u2019orgull col·lectiu, però seríem hipòcrites si ignorem l\u2019elefant a l\u2019habitació: l\u2019escalinata de la Glòria, tal com està plantejada, és urbanísticament indefensable. Gaudí va dissenyar per a la Barcelona de 1915, no per expulsar 3.000 veïns el 2026. La Junta ha d\u2019explorar alternatives arquitectòniques serioses. El geni s\u2019honora amb creativitat, no amb desnonaments.",
      ),
    },
  },
  {
    id: "loc-5",
    category: "catalonia",
    region: "local",
    image: img("1460925895917-adf4e565016f"),
    source: "324.cat",
    author: "Política",
    published: hoursAgo(9),
    readTime: 3,
    views: 18900,
    comments: 134,
    title: m(
      "La Generalitat estrena portal digital único: 400 trámites sin cita previa",
      "Catalan government launches single digital portal: 400 procedures without appointment",
      "La Generalitat estrena portal digital únic: 400 tràmits sense cita prèvia",
    ),
    summary: m(
      "El nuevo portal unifica 14 webs departamentales e incorpora identificación con idCAT Móvil y asistente inteligente en tres idiomas.",
      "The new portal unifies 14 departmental websites and adds idCAT Mobile login plus a smart assistant in three languages.",
      "El nou portal unifica 14 webs departamentals i incorpora identificació amb idCAT Mòbil i assistent intel·ligent en tres idiomes.",
    ),
    content: m(
      "La plataforma permite completar desde la renovación del título de familia numerosa hasta ayudas al alquiler íntegramente en línea. El Govern estima un ahorro de 40 millones anuales en gestión administrativa. Las oficinas presenciales mantendrán atención prioritaria para mayores de 65 años y colectivos vulnerables.",
      "The platform lets citizens complete everything from large-family card renewals to rental aid applications entirely online. The government estimates €40 million in annual administrative savings. Physical offices will keep priority service for over-65s and vulnerable groups.",
      "La plataforma permet completar des de la renovació del títol de família nombrosa fins a ajuts al lloguer íntegrament en línia. El Govern estima un estalvi de 40 milions anuals en gestió administrativa. Les oficines presencials mantindran atenció prioritària per a majors de 65 anys i col·lectius vulnerables.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura mayormente favorable: se valora la unificación, pero varios medios recuerdan el historial de caídas de los sistemas informáticos de la Generalitat en picos de demanda.",
        "Mostly favourable coverage: unification is praised, but several outlets recall the Generalitat\u2019s history of IT outages under peak demand.",
        "Cobertura majoritàriament favorable: es valora la unificació, però diversos mitjans recorden l\u2019historial de caigudes dels sistemes informàtics de la Generalitat en pics de demanda.",
      ),
      perspectives: [
        {
          source: "324.cat",
          tone: "positive",
          text: m(
            "Fin al peregrinaje entre webs: un solo acceso para todo.",
            "End of the website pilgrimage: one login for everything.",
            "Fi al pelegrinatge entre webs: un sol accés per a tot.",
          ),
        },
        {
          source: "El Nacional",
          tone: "neutral",
          text: m(
            "La prueba de fuego llegará con las convocatorias masivas de ayudas.",
            "The acid test will come with mass aid application windows.",
            "La prova de foc arribarà amb les convocatòries massives d\u2019ajuts.",
          ),
        },
        {
          source: "CCOO Catalunya",
          tone: "critical",
          text: m(
            "Alerta de brecha digital para quien no domina el entorno móvil.",
            "Warns of a digital divide for those not fluent in mobile tools.",
            "Alerta de bretxa digital per a qui no domina l\u2019entorn mòbil.",
          ),
        },
      ],
      opinion: m(
        "Digitalizar la administración es de sentido común y llega tarde. Pero cuidado con la autocomplacencia: un portal bonito no arregla procesos absurdos. Si detrás del formulario digital sigue habiendo tres meses de espera para una resolución, solo habremos digitalizado la frustración. El Govern debe publicar métricas de tiempos de resolución en abierto. Transparencia o maquillaje: que los datos decidan.",
        "Digitalising government is common sense and arrives late. But beware complacency: a pretty portal doesn\u2019t fix absurd processes. If behind the digital form there are still three months of waiting for a resolution, we\u2019ve merely digitalised frustration. The government must publish resolution-time metrics openly. Transparency or window dressing: let the data decide.",
        "Digitalitzar l\u2019administració és de sentit comú i arriba tard. Però compte amb l\u2019autocomplaença: un portal bonic no arregla processos absurds. Si darrere del formulari digital continua havent-hi tres mesos d\u2019espera per a una resolució, només haurem digitalitzat la frustració. El Govern ha de publicar mètriques de temps de resolució en obert. Transparència o maquillatge: que les dades decideixin.",
      ),
    },
  },
  {
    id: "loc-6",
    category: "catalonia",
    region: "local",
    image: img("1488646953014-85cb44e25828"),
    source: "TV3",
    author: "Economia",
    published: hoursAgo(11),
    readTime: 4,
    views: 34500,
    comments: 421,
    title: m(
      "Cataluña supera los 12 millones de turistas y bate su récord histórico",
      "Catalonia tops 12 million tourists, smashing its all-time record",
      "Catalunya supera els 12 milions de turistes i bat el seu rècord històric",
    ),
    summary: m(
      "El gasto medio por visitante crece un 9%, pero los municipios costeros reclaman una tasa turística más alta para sostener servicios.",
      "Average spend per visitor rises 9%, but coastal towns demand a higher tourist tax to sustain services.",
      "La despesa mitjana per visitant creix un 9%, però els municipis costaners reclamen una taxa turística més alta per sostenir serveis.",
    ),
    content: m(
      "La temporada cierra con ocupaciones del 92% en la Costa Brava y récord de visitantes en el Pirineu. El sector celebra las cifras mientras crece el debate sobre la masificación: Sitges y Cadaqués estudian limitar los pisos turísticos. El gasto total supera los 14.000 millones de euros.",
      "The season closes with 92% occupancy on the Costa Brava and record visitors in the Pyrenees. The industry celebrates while the overcrowding debate grows: Sitges and Cadaqués are studying tourist-flat caps. Total spending exceeds €14 billion.",
      "La temporada tanca amb ocupacions del 92% a la Costa Brava i rècord de visitants al Pirineu. El sector celebra les xifres mentre creix el debat sobre la massificació: Sitges i Cadaqués estudien limitar els pisos turístics. La despesa total supera els 14.000 milions d\u2019euros.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "La prensa económica celebra el récord; la local y la ambiental preguntan a qué precio. Coinciden en que el modelo actual toca techo y hay que elegir entre volumen y valor.",
        "Business press celebrates the record; local and environmental outlets ask at what cost. All agree the current model has peaked and a choice between volume and value is due.",
        "La premsa econòmica celebra el rècord; la local i l\u2019ambiental pregunten a quin preu. Coincideixen que el model actual toca sostre i cal triar entre volum i valor.",
      ),
      perspectives: [
        {
          source: "Expansión",
          tone: "positive",
          text: m(
            "14.000M€ que sostienen 400.000 empleos: el motor funciona.",
            "€14bn sustaining 400,000 jobs: the engine works.",
            "14.000M€ que sostenen 400.000 llocs de feina: el motor funciona.",
          ),
        },
        {
          source: "ARA",
          tone: "critical",
          text: m(
            "Los residentes de la costa ya no pueden pagar sus alquileres.",
            "Coastal residents can no longer afford their rents.",
            "Els residents de la costa ja no poden pagar els seus lloguers.",
          ),
        },
        {
          source: "TV3",
          tone: "neutral",
          text: m(
            "Los alcaldes piden que la tasa revierta íntegra en los municipios.",
            "Mayors ask for the tax to fully revert to municipalities.",
            "Els alcaldes demanen que la taxa reverteixi íntegra als municipis.",
          ),
        },
      ],
      opinion: m(
        "Celebrar récords de volumen en 2026 es celebrar el problema. Cataluña no necesita más turistas: necesita mejores ingresos por turista y menos externalidades. La tasa turística actual es ridícula comparada con Ámsterdam o Venecia; duplicarla no espantará a nadie y financiará vivienda y limpieza. Quien agita el fantasma de la competitividad ignora que la Costa Brava se vende sola. El valiente aquí es quien pone límites, no quien bate récords.",
        "Celebrating volume records in 2026 is celebrating the problem. Catalonia doesn\u2019t need more tourists: it needs better revenue per tourist and fewer externalities. The current tourist tax is laughable next to Amsterdam or Venice; doubling it will scare no one and will fund housing and street cleaning. Those waving the competitiveness bogeyman ignore that the Costa Brava sells itself. The brave move here is setting limits, not breaking records.",
        "Celebrar rècords de volum el 2026 és celebrar el problema. Catalunya no necessita més turistes: necessita més ingressos per turista i menys externalitats. La taxa turística actual és ridícula comparada amb Amsterdam o Venècia; duplicar-la no espantarà ningú i finançarà habitatge i neteja. Qui agita el fantasma de la competitivitat ignora que la Costa Brava es ven sola. El valent aquí és qui posa límits, no qui bat rècords.",
      ),
    },
  },
  {
    id: "loc-7",
    category: "catalonia",
    region: "local",
    image: img("1439066615861-d1af74d74000"),
    source: "ARA",
    author: "Medi Ambient",
    published: hoursAgo(14),
    readTime: 4,
    views: 41200,
    comments: 538,
    title: m(
      "Los embalses catalanes alcanzan el 74%: adiós oficial a la emergencia por sequía",
      "Catalan reservoirs hit 74%: official end to the drought emergency",
      "Els embassaments catalans arriben al 74%: adeu oficial a l\u2019emergència per sequera",
    ),
    summary: m(
      "Tras el otoño más lluvioso en 15 años, el Govern levanta las restricciones pero mantiene la inversión en desalinizadoras.",
      "After the wettest autumn in 15 years, the government lifts restrictions but keeps investing in desalination.",
      "Després de la tardor més plujosa en 15 anys, el Govern aixeca les restriccions però manté la inversió en dessalinitzadores.",
    ),
    content: m(
      "Sau y Susqueda triplican sus reservas respecto a hace dos años. La ACA confirma que las desalinizadoras de Tordera II y Foix siguen adelante como seguro climático. Los regantes recuperan el 100% de sus dotaciones y los expertos piden no relajar la cultura del ahorro conquistada durante la crisis.",
      "Sau and Susqueda have tripled their reserves compared to two years ago. The Catalan Water Agency confirms the Tordera II and Foix desalination plants will proceed as climate insurance. Irrigators recover 100% of their allocations while experts urge keeping the water-saving culture won during the crisis.",
      "Sau i Susqueda tripliquen les seves reserves respecte fa dos anys. L\u2019ACA confirma que les dessalinitzadores de Tordera II i Foix segueixen endavant com a assegurança climàtica. Els regants recuperen el 100% de les dotacions i els experts demanen no relaxar la cultura de l\u2019estalvi conquerida durant la crisi.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Alivio generalizado con advertencia unánime: todos los medios subrayan que la próxima sequía es cuestión de tiempo y las infraestructuras deben terminarse igualmente.",
        "Widespread relief with a unanimous warning: every outlet stresses the next drought is a matter of time and the infrastructure must be finished regardless.",
        "Alleujament generalitzat amb advertència unànime: tots els mitjans subratllen que la propera sequera és qüestió de temps i les infraestructures s\u2019han d\u2019acabar igualment.",
      ),
      perspectives: [
        {
          source: "ARA",
          tone: "positive",
          text: m(
            "La gestión de la crisis deja lecciones y hábitos valiosos.",
            "Crisis management leaves valuable lessons and habits.",
            "La gestió de la crisi deixa lliçons i hàbits valuosos.",
          ),
        },
        {
          source: "La Vanguardia",
          tone: "neutral",
          text: m(
            "El consumo urbano sigue un 12% por debajo del nivel pre-crisis.",
            "Urban consumption remains 12% below pre-crisis levels.",
            "El consum urbà segueix un 12% per sota del nivell pre-crisi.",
          ),
        },
        {
          source: "Unió de Pagesos",
          tone: "critical",
          text: m(
            "El campo pagó la sequía primero y cobra la recuperación último.",
            "Farmers paid for the drought first and collect the recovery last.",
            "El camp va pagar la sequera primer i cobra la recuperació últim.",
          ),
        },
      ],
      opinion: m(
        "Que llueva no es un plan hídrico. Cataluña ha tenido suerte, no éxito: la emergencia se levantó porque el cielo cooperó, no porque el sistema esté preparado para el clima que viene. Detener ahora las desalinizadoras sería una negligencia histórica. Y una deuda pendiente clama al cielo: el precio del agua debe reflejar su escasez real, con tramos que protejan el consumo básico y penalicen el despilfarro. Quien no lo defienda hoy será responsable mañana.",
        "Rain is not a water plan. Catalonia got lucky, not successful: the emergency lifted because the sky cooperated, not because the system is ready for the climate ahead. Halting the desalination plants now would be historic negligence. And one pending debt cries out: water pricing must reflect real scarcity, with brackets protecting basic consumption and punishing waste. Whoever won\u2019t defend that today will be responsible tomorrow.",
        "Que plogui no és un pla hídric. Catalunya ha tingut sort, no èxit: l\u2019emergència es va aixecar perquè el cel va cooperar, no perquè el sistema estigui preparat per al clima que ve. Aturar ara les dessalinitzadores seria una negligència històrica. I un deute pendent clama al cel: el preu de l\u2019aigua ha de reflectir la seva escassetat real, amb trams que protegeixin el consum bàsic i penalitzin el malbaratament. Qui no ho defensi avui en serà responsable demà.",
      ),
    },
  },
  {
    id: "loc-8",
    category: "technology",
    region: "local",
    image: img("1518770660439-4636190af475"),
    source: "La Vanguardia",
    author: "Tecnologia",
    published: hoursAgo(16),
    readTime: 4,
    views: 27600,
    comments: 189,
    title: m(
      "El 22@ se consolida como hub europeo de IA: 8.000 nuevos empleos tecnológicos",
      "The 22@ district cements itself as a European AI hub: 8,000 new tech jobs",
      "El 22@ es consolida com a hub europeu d\u2019IA: 8.000 nous llocs de feina tecnològics",
    ),
    summary: m(
      "Tres multinacionales anuncian centros de investigación en Poblenou. Barcelona ya es la cuarta ciudad europea en captación de talento tech.",
      "Three multinationals announce research centres in Poblenou. Barcelona is now Europe\u2019s fourth city for tech talent attraction.",
      "Tres multinacionals anuncien centres de recerca al Poblenou. Barcelona ja és la quarta ciutat europea en captació de talent tech.",
    ),
    content: m(
      "Los nuevos centros se especializarán en visión por computador, modelos de lenguaje multilingües y robótica aplicada a logística. El Mobile World Capital estima que el distrito alcanzará los 130.000 trabajadores en 2028. Los sindicatos piden que el crecimiento venga acompañado de convenios que eviten la precarización del sector.",
      "The new centres will specialise in computer vision, multilingual language models and logistics robotics. Mobile World Capital estimates the district will reach 130,000 workers by 2028. Unions ask that growth comes with collective agreements preventing precarious conditions in the sector.",
      "Els nous centres s\u2019especialitzaran en visió per computador, models de llenguatge multilingües i robòtica aplicada a logística. El Mobile World Capital estima que el districte arribarà als 130.000 treballadors el 2028. Els sindicats demanen que el creixement vagi acompanyat de convenis que evitin la precarització del sector.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura entusiasta en lo económico con una nota común de cautela: el éxito del 22@ presiona la vivienda del Poblenou y el talento local no debería quedar fuera.",
        "Enthusiastic economic coverage with one shared caution: 22@\u2019s success pressures Poblenou housing and local talent must not be priced out.",
        "Cobertura entusiasta en l\u2019àmbit econòmic amb una nota comuna de cautela: l\u2019èxit del 22@ pressiona l\u2019habitatge del Poblenou i el talent local no hauria de quedar fora.",
      ),
      perspectives: [
        {
          source: "La Vanguardia",
          tone: "positive",
          text: m(
            "Barcelona compite ya con Ámsterdam y Berlín por el talento IA.",
            "Barcelona now rivals Amsterdam and Berlin for AI talent.",
            "Barcelona competeix ja amb Amsterdam i Berlín pel talent IA.",
          ),
        },
        {
          source: "TechCrunch",
          tone: "positive",
          text: m(
            "Salarios competitivos y calidad de vida: la fórmula funciona.",
            "Competitive salaries plus quality of life: the formula works.",
            "Salaris competitius i qualitat de vida: la fórmula funciona.",
          ),
        },
        {
          source: "El Periódico",
          tone: "critical",
          text: m(
            "Los vecinos del Poblenou ven subir alquileres al ritmo de las oficinas.",
            "Poblenou residents watch rents climb at office-space pace.",
            "Els veïns del Poblenou veuen pujar lloguers al ritme de les oficines.",
          ),
        },
      ],
      opinion: m(
        "Barcelona ha hecho algo muy difícil: convertirse en polo tecnológico sin vender su alma... todavía. El riesgo real no es crecer, es crecer como San Francisco: una economía brillante sobre una ciudad inhabitable. La receta es conocida y exige valentía: vivienda asequible vinculada a cada licencia de oficinas, formación tecnológica masiva en la escuela pública y contratos dignos. El talento global es bienvenido; la gentrificación exprés, no.",
        "Barcelona has pulled off something rare: becoming a tech hub without selling its soul... yet. The real risk isn\u2019t growing — it\u2019s growing like San Francisco: a brilliant economy atop an unlivable city. The recipe is known and takes courage: affordable housing tied to every office permit, massive tech education in public schools, and decent contracts. Global talent is welcome; express gentrification is not.",
        "Barcelona ha fet una cosa molt difícil: convertir-se en pol tecnològic sense vendre l\u2019ànima... encara. El risc real no és créixer, és créixer com San Francisco: una economia brillant sobre una ciutat inhabitable. La recepta és coneguda i exigeix valentia: habitatge assequible vinculat a cada llicència d\u2019oficines, formació tecnològica massiva a l\u2019escola pública i contractes dignes. El talent global és benvingut; la gentrificació exprés, no.",
      ),
    },
  },
  {
    id: "loc-9",
    category: "barcelona",
    region: "local",
    image: img("1544551763-46a013bb70d5"),
    source: "El Periódico",
    author: "Gran Barcelona",
    published: hoursAgo(20),
    readTime: 4,
    views: 38700,
    comments: 673,
    title: m(
      "Barcelona limitará los cruceros: máximo cinco escalas diarias desde abril",
      "Barcelona to cap cruise ships: maximum five daily calls from April",
      "Barcelona limitarà els creuers: màxim cinc escales diàries des de l\u2019abril",
    ),
    summary: m(
      "El acuerdo Puerto-Ayuntamiento reducirá un 20% los pasajeros en días punta y cerrará la terminal norte al turismo de excursión.",
      "The Port-City Hall deal will cut peak-day passengers by 20% and close the north terminal to excursion tourism.",
      "L\u2019acord Port-Ajuntament reduirà un 20% els passatgers en dies punta i tancarà la terminal nord al turisme d\u2019excursió.",
    ),
    content: m(
      "La medida responde a los picos de 40.000 cruceristas en un solo día registrados el pasado verano. Las navieras critican la decisión y amenazan con derivar escalas a Marsella y Génova. Los comerciantes de la Rambla, divididos: los restauradores temen perder ingresos y los vecinos celebran recuperar espacio público.",
      "The measure responds to last summer\u2019s peaks of 40,000 cruise passengers in a single day. Cruise lines criticise the decision and threaten to divert calls to Marseille and Genoa. Rambla merchants are split: restaurateurs fear losing revenue while residents celebrate reclaiming public space.",
      "La mesura respon als pics de 40.000 creueristes en un sol dia registrats l\u2019estiu passat. Les navilieres critiquen la decisió i amenacen de derivar escales a Marsella i Gènova. Els comerciants de la Rambla, dividits: els restauradors temen perdre ingressos i els veïns celebren recuperar espai públic.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa internacional lo lee como parte de la ola europea anti-masificación; la local debate el equilibrio entre empleo portuario e habitabilidad del centro.",
        "International press frames it within Europe\u2019s anti-overcrowding wave; local media debate the balance between port jobs and a livable city centre.",
        "La premsa internacional ho llegeix com a part de l\u2019onada europea anti-massificació; la local debat l\u2019equilibri entre ocupació portuària i habitabilitat del centre.",
      ),
      perspectives: [
        {
          source: "The Guardian",
          tone: "positive",
          text: m(
            "Barcelona lidera la respuesta europea al exceso de cruceros.",
            "Barcelona leads Europe\u2019s answer to cruise excess.",
            "Barcelona lidera la resposta europea a l\u2019excés de creuers.",
          ),
        },
        {
          source: "Expansión",
          tone: "critical",
          text: m(
            "El puerto arriesga 200M€ anuales y liderazgo mediterráneo.",
            "The port risks €200m a year and Mediterranean leadership.",
            "El port arrisca 200M€ anuals i lideratge mediterrani.",
          ),
        },
        {
          source: "Betevé",
          tone: "neutral",
          text: m(
            "Ciutat Vella respira; la restauración pide plan de transición.",
            "Ciutat Vella breathes; hospitality asks for a transition plan.",
            "Ciutat Vella respira; la restauració demana pla de transició.",
          ),
        },
      ],
      opinion: m(
        "Cinco escalas diarias siguen siendo muchas, pero la dirección es la correcta y hay que decirlo sin complejos: el crucerismo de excursión aporta lo mínimo y satura lo máximo. Ocho horas de visita, comida a bordo y una ciudad convertida en decorado. Las amenazas de las navieras son el mejor síntoma de que la medida funciona. Marsella puede quedarse ese modelo; Barcelona debe competir por el visitante que duerme, come y vuelve.",
        "Five daily calls is still a lot, but the direction is right and it must be said plainly: excursion cruise tourism contributes the least and saturates the most. Eight-hour visits, meals on board, and a city reduced to a stage set. The cruise lines\u2019 threats are the best evidence the measure works. Marseille can keep that model; Barcelona should compete for the visitor who sleeps, dines and returns.",
        "Cinc escales diàries continuen sent moltes, però la direcció és la correcta i cal dir-ho sense complexos: el creuerisme d\u2019excursió aporta el mínim i satura el màxim. Vuit hores de visita, menjar a bord i una ciutat convertida en decorat. Les amenaces de les navilieres són el millor símptoma que la mesura funciona. Marsella pot quedar-se aquest model; Barcelona ha de competir pel visitant que dorm, menja i torna.",
      ),
    },
  },
  {
    id: "loc-10",
    category: "lifestyle",
    region: "local",
    image: img("1414235077428-338989a2e8c0"),
    source: "Time Out BCN",
    author: "Gastronomia",
    published: hoursAgo(26),
    readTime: 3,
    views: 22100,
    comments: 156,
    title: m(
      "Cataluña suma 6 nuevas estrellas Michelin y consolida su liderazgo gastronómico",
      "Catalonia gains 6 new Michelin stars, cementing its culinary leadership",
      "Catalunya suma 6 noves estrelles Michelin i consolida el seu lideratge gastronòmic",
    ),
    summary: m(
      "Dos restaurantes de comarcas de interior logran su primera estrella. La región alcanza las 71 estrellas, líder del sur de Europa.",
      "Two inland-county restaurants earn their first star. The region reaches 71 stars, leading southern Europe.",
      "Dos restaurants de comarques d\u2019interior aconsegueixen la seva primera estrella. La regió arriba a les 71 estrelles, líder del sud d\u2019Europa.",
    ),
    content: m(
      "La gala reconoce especialmente la cocina de proximidad: cinco de los seis nuevos galardonados trabajan con producto de menos de 50 km. La guía destaca la nueva generación de chefs formados en las escuelas catalanas. El sector confía en que el reconocimiento desestacionalice el turismo hacia el interior.",
      "The gala especially rewards locavore cuisine: five of the six new laureates work with produce sourced within 50 km. The guide highlights the new generation of chefs trained in Catalan schools. The industry hopes the recognition will spread tourism inland and off-season.",
      "La gala reconeix especialment la cuina de proximitat: cinc dels sis nous guardonats treballen amb producte de menys de 50 km. La guia destaca la nova generació de xefs formats a les escoles catalanes. El sector confia que el reconeixement desestacionalitzi el turisme cap a l\u2019interior.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura unánimemente positiva. El matiz interesante: varios críticos celebran que el foco se desplace de Barcelona hacia las comarcas, repartiendo valor por el territorio.",
        "Unanimously positive coverage. The interesting nuance: several critics welcome the spotlight shifting from Barcelona to the counties, spreading value across the territory.",
        "Cobertura unànimement positiva. El matís interessant: diversos crítics celebren que el focus es desplaci de Barcelona cap a les comarques, repartint valor pel territori.",
      ),
      perspectives: [
        {
          source: "Time Out BCN",
          tone: "positive",
          text: m(
            "La despensa catalana vive su mejor momento creativo.",
            "The Catalan pantry is living its best creative moment.",
            "El rebost català viu el seu millor moment creatiu.",
          ),
        },
        {
          source: "El País Gastro",
          tone: "positive",
          text: m(
            "El relevo generacional está asegurado y habla catalán.",
            "The generational handover is secured and speaks Catalan.",
            "El relleu generacional està assegurat i parla català.",
          ),
        },
        {
          source: "ARA",
          tone: "neutral",
          text: m(
            "El reto: que la estrella no dispare precios fuera del alcance local.",
            "The challenge: stars mustn\u2019t push prices beyond local reach.",
            "El repte: que l\u2019estrella no dispari preus fora de l\u2019abast local.",
          ),
        },
      ],
      opinion: m(
        "Las 71 estrellas no son casualidad: son el fruto de tres décadas de escuelas de hostelería públicas, producto excepcional y una cultura que se toma la mesa en serio. La lección trasciende los fogones: cuando se invierte en formación y territorio, el retorno llega. Ahora bien, la alta cocina no puede ser el árbol que tape el bosque: el verdadero patrimonio es la fonda de menú digno. Protejamos ambas o perderemos las dos.",
        "Those 71 stars are no accident: they are the fruit of three decades of public hospitality schools, exceptional produce and a culture that takes the table seriously. The lesson transcends kitchens: invest in training and territory and returns follow. That said, haute cuisine must not be the tree hiding the forest: the true heritage is the honest set-menu tavern. Protect both or lose both.",
        "Les 71 estrelles no són casualitat: són el fruit de tres dècades d\u2019escoles d\u2019hostaleria públiques, producte excepcional i una cultura que es pren la taula seriosament. La lliçó transcendeix els fogons: quan s\u2019inverteix en formació i territori, el retorn arriba. Ara bé, l\u2019alta cuina no pot ser l\u2019arbre que tapi el bosc: el veritable patrimoni és la fonda de menú digne. Protegim totes dues o perdrem les dues.",
      ),
    },
  },

  // ============================================================
  // NATIONAL — Spain
  // ============================================================
  {
    id: "nat-1",
    category: "finance",
    region: "national",
    image: img("1454496522488-7a8e488e8606"),
    source: "El País",
    author: "Economía",
    published: hoursAgo(4),
    readTime: 5,
    views: 55200,
    comments: 634,
    title: m(
      "España crece un 0,7% trimestral y lidera la eurozona por sexto trimestre consecutivo",
      "Spain grows 0.7% for the quarter, leading the eurozone for a sixth straight quarter",
      "Espanya creix un 0,7% trimestral i lidera l\u2019eurozona per sisè trimestre consecutiu",
    ),
    summary: m(
      "El empleo marca récord con 22,1 millones de afiliados, pero la productividad por hora sigue estancada respecto a Alemania y Francia.",
      "Employment hits a record 22.1 million contributors, but productivity per hour remains stalled versus Germany and France.",
      "L\u2019ocupació marca rècord amb 22,1 milions d\u2019afiliats, però la productivitat per hora segueix estancada respecte d\u2019Alemanya i França.",
    ),
    content: m(
      "El consumo interno y el turismo sostienen el avance, con la inversión empresarial repuntando por fin un 2,1%. Los servicios tecnológicos ya aportan más al PIB que la construcción, un cambio estructural histórico. El Banco de España advierte del riesgo de complacencia: la deuda pública sigue por encima del 100% del PIB.",
      "Domestic consumption and tourism drive the advance, with business investment finally rebounding 2.1%. Tech services now contribute more to GDP than construction — a historic structural shift. The Bank of Spain warns against complacency: public debt remains above 100% of GDP.",
      "El consum intern i el turisme sostenen l\u2019avenç, amb la inversió empresarial repuntant per fi un 2,1%. Els serveis tecnològics ja aporten més al PIB que la construcció, un canvi estructural històric. El Banc d\u2019Espanya adverteix del risc de complaença: el deute públic segueix per sobre del 100% del PIB.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Los medios coinciden en el dato positivo pero divergen en la lectura: unos ven un modelo de éxito, otros un crecimiento a base de empleo barato que la productividad desmiente.",
        "Outlets agree on the positive number but split on the reading: some see a success model, others growth built on cheap labour that productivity figures betray.",
        "Els mitjans coincideixen en la dada positiva però divergeixen en la lectura: uns hi veuen un model d\u2019èxit, altres un creixement a base d\u2019ocupació barata que la productivitat desmenteix.",
      ),
      perspectives: [
        {
          source: "El País",
          tone: "positive",
          text: m(
            "España demuestra que crecer y crear empleo no son incompatibles.",
            "Spain proves growth and job creation aren\u2019t incompatible.",
            "Espanya demostra que créixer i crear ocupació no són incompatibles.",
          ),
        },
        {
          source: "Financial Times",
          tone: "positive",
          text: m(
            '"La estrella inesperada de Europa": inmigración y servicios explican el milagro.',
            '"Europe\u2019s unexpected star": immigration and services explain the miracle.',
            '"L\u2019estrella inesperada d\u2019Europa": immigració i serveis expliquen el miracle.',
          ),
        },
        {
          source: "Expansión",
          tone: "critical",
          text: m(
            "Sin productividad ni inversión en I+D, el liderazgo tiene fecha de caducidad.",
            "Without productivity and R&D investment, the leadership has an expiry date.",
            "Sense productivitat ni inversió en R+D, el lideratge té data de caducitat.",
          ),
        },
      ],
      opinion: m(
        "Seis trimestres liderando Europa merecen reconocimiento, pero conviene no confundir un buen ciclo con un buen modelo. España crece añadiendo trabajadores, no haciendo a cada trabajador más productivo, y esa es la diferencia entre correr y avanzar. La asignatura pendiente lleva décadas suspendida: I+D al 3% del PIB, formación continua real y empresas con tamaño para competir. El día que el turismo estornude, sabremos de qué estaba hecho este milagro.",
        "Six quarters leading Europe deserve credit, but let\u2019s not confuse a good cycle with a good model. Spain grows by adding workers, not by making each worker more productive — and that\u2019s the difference between running and advancing. The pending subject has been failed for decades: R&D at 3% of GDP, real lifelong training, and firms with scale to compete. The day tourism sneezes, we\u2019ll find out what this miracle was made of.",
        "Sis trimestres liderant Europa mereixen reconeixement, però convé no confondre un bon cicle amb un bon model. Espanya creix afegint treballadors, no fent cada treballador més productiu, i aquesta és la diferència entre córrer i avançar. L\u2019assignatura pendent porta dècades suspesa: R+D al 3% del PIB, formació contínua real i empreses amb mida per competir. El dia que el turisme esternudi, sabrem de què estava fet aquest miracle.",
      ),
    },
  },
  {
    id: "nat-2",
    category: "technology",
    region: "national",
    image: img("1552664730-d307ca884978"),
    source: "El Español",
    author: "Invertia",
    published: hoursAgo(6),
    readTime: 4,
    views: 31800,
    comments: 245,
    title: m(
      "Las startups españolas captan 2.400M€ y baten su récord de inversión anual",
      "Spanish startups raise €2.4bn, smashing their annual investment record",
      "Les startups espanyoles capten 2.400M€ i baten el seu rècord d\u2019inversió anual",
    ),
    summary: m(
      "La IA aplicada y la biotecnología concentran la mitad de las rondas. Madrid y Barcelona empatan por primera vez en capital captado.",
      "Applied AI and biotech account for half of all rounds. Madrid and Barcelona tie for the first time in capital raised.",
      "La IA aplicada i la biotecnologia concentren la meitat de les rondes. Madrid i Barcelona empaten per primer cop en capital captat.",
    ),
    content: m(
      "El ecosistema suma ya 18 unicornios y, más relevante, 60 empresas por encima de los 100 millones de valoración. Los fondos internacionales protagonizan las grandes rondas mientras el capital nacional domina las fases semilla. El sector reclama agilizar los visados para talento extracomunitario, el principal cuello de botella según los fundadores.",
      "The ecosystem now counts 18 unicorns and, more tellingly, 60 companies valued above €100 million. International funds lead the large rounds while domestic capital dominates seed stages. The sector demands faster visas for non-EU talent — founders\u2019 top bottleneck.",
      "L\u2019ecosistema suma ja 18 unicorns i, més rellevant, 60 empreses per sobre dels 100 milions de valoració. Els fons internacionals protagonitzen les grans rondes mentre el capital nacional domina les fases llavor. El sector reclama agilitzar els visats per a talent extracomunitari, el principal coll d\u2019ampolla segons els fundadors.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Optimismo generalizado con un debate de fondo: si el récord refleja madurez del ecosistema o simplemente la ola global de inversión en IA tocando la costa española.",
        "Broad optimism with an underlying debate: does the record reflect ecosystem maturity or simply the global AI investment wave reaching Spanish shores?",
        "Optimisme generalitzat amb un debat de fons: si el rècord reflecteix maduresa de l\u2019ecosistema o simplement l\u2019onada global d\u2019inversió en IA tocant la costa espanyola.",
      ),
      perspectives: [
        {
          source: "El Español",
          tone: "positive",
          text: m(
            "España deja de ser promesa: ya es la cuarta plaza europea.",
            "Spain is no longer a promise: it\u2019s Europe\u2019s fourth hub.",
            "Espanya deixa de ser promesa: ja és la quarta plaça europea.",
          ),
        },
        {
          source: "Sifted",
          tone: "neutral",
          text: m(
            "Crece el capital, pero las salidas (exits) siguen siendo escasas.",
            "Capital grows, but exits remain scarce.",
            "Creix el capital, però les sortides (exits) segueixen sent escasses.",
          ),
        },
        {
          source: "Cinco Días",
          tone: "critical",
          text: m(
            "Sin fondos de pensiones invirtiendo en venture, el techo llegará pronto.",
            "Without pension funds in venture, the ceiling will arrive soon.",
            "Sense fons de pensions invertint en venture, el sostre arribarà aviat.",
          ),
        },
      ],
      opinion: m(
        "El récord es real y celebrable, pero el ecosistema español sigue jugando con una mano atada: el capital institucional nacional —pensiones, aseguradoras— apenas toca el venture capital mientras en Francia o Suecia es su columna vertebral. Pedirle al talento que se quede mientras el ahorro del país se va a ladrillo y deuda es incoherente. La próxima reforma pinta sola: incentivos fiscales serios para que el ahorro institucional financie la economía del conocimiento. Lo demás es aplaudir con una mano.",
        "The record is real and worth celebrating, but the Spanish ecosystem still plays one-handed: national institutional capital — pensions, insurers — barely touches venture capital, while in France or Sweden it is the backbone. Asking talent to stay while the country\u2019s savings flow into bricks and bonds is incoherent. The next reform writes itself: serious tax incentives so institutional savings fund the knowledge economy. Anything else is one-handed applause.",
        "El rècord és real i celebrable, però l\u2019ecosistema espanyol segueix jugant amb una mà lligada: el capital institucional nacional —pensions, asseguradores— amb prou feines toca el venture capital mentre a França o Suècia n\u2019és la columna vertebral. Demanar al talent que es quedi mentre l\u2019estalvi del país se\u2019n va a totxo i deute és incoherent. La propera reforma s\u2019escriu sola: incentius fiscals seriosos perquè l\u2019estalvi institucional financiï l\u2019economia del coneixement. La resta és aplaudir amb una mà.",
      ),
    },
  },
  {
    id: "nat-3",
    category: "spain",
    region: "national",
    image: img("1560518883-ce09059eeffa"),
    source: "RTVE",
    author: "Nacional",
    published: hoursAgo(8),
    readTime: 6,
    views: 72600,
    comments: 1583,
    title: m(
      "El Congreso debate la nueva ley estatal de vivienda entre protestas en 40 ciudades",
      "Congress debates the new national housing law amid protests in 40 cities",
      "El Congrés debat la nova llei estatal d\u2019habitatge entre protestes a 40 ciutats",
    ),
    summary: m(
      'La norma propone limitar la compra especulativa y un parque público del 20% en 2040. El sector inmobiliario habla de "intervencionismo".',
      'The bill proposes curbing speculative purchases and a 20% public housing stock by 2040. The real estate sector calls it "interventionism".',
      'La norma proposa limitar la compra especulativa i un parc públic del 20% el 2040. El sector immobiliari parla d\u2019"intervencionisme".',
    ),
    content: m(
      "El texto incluye recargos fiscales a la tercera vivienda en zonas tensionadas, prohibición de compra a no residentes extracomunitarios sin vínculo y transferencias récord para vivienda pública. Las manifestaciones del fin de semana reunieron a más de 500.000 personas exigiendo medidas más duras. La votación se prevé ajustada y los socios territoriales piden competencias reforzadas.",
      "The text includes tax surcharges on third homes in stressed areas, a ban on purchases by non-resident non-EU buyers without ties, and record transfers for public housing. Weekend demonstrations gathered over 500,000 people demanding tougher measures. The vote is expected to be tight, with regional partners demanding reinforced powers.",
      "El text inclou recàrrecs fiscals a la tercera residència en zones tensionades, prohibició de compra a no residents extracomunitaris sense vincle i transferències rècord per a habitatge públic. Les manifestacions del cap de setmana van reunir més de 500.000 persones exigint mesures més dures. La votació es preveu ajustada i els socis territorials demanen competències reforçades.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "El tema más polarizado del momento: la prensa conservadora denuncia inseguridad jurídica, la progresista lo ve insuficiente y la internacional lo enmarca en la crisis europea de vivienda.",
        "The most polarised story of the moment: conservative press decries legal uncertainty, progressive outlets find it insufficient, and international media frame it within Europe\u2019s housing crisis.",
        "El tema més polaritzat del moment: la premsa conservadora denuncia inseguretat jurídica, la progressista ho veu insuficient i la internacional ho emmarca en la crisi europea d\u2019habitatge.",
      ),
      perspectives: [
        {
          source: "ABC",
          tone: "critical",
          text: m(
            "El intervencionismo ahuyentará la inversión que construye vivienda.",
            "Interventionism will scare off the investment that builds housing.",
            "L\u2019intervencionisme espantarà la inversió que construeix habitatge.",
          ),
        },
        {
          source: "eldiario.es",
          tone: "positive",
          text: m(
            "Primer reconocimiento legal de la vivienda como derecho efectivo.",
            "First legal recognition of housing as an effective right.",
            "Primer reconeixement legal de l\u2019habitatge com a dret efectiu.",
          ),
        },
        {
          source: "Le Monde",
          tone: "neutral",
          text: m(
            "España ensaya lo que media Europa debate: frenar al capital en la vivienda.",
            "Spain tests what half of Europe debates: reining in capital in housing.",
            "Espanya assaja el que mitja Europa debat: frenar el capital en l\u2019habitatge.",
          ),
        },
      ],
      opinion: m(
        "Digámoslo sin rodeos: España arrastra cuarenta años de política de vivienda fallida, gobierne quien gobierne, y esta ley —con sus imperfecciones— es el primer intento serio de corregir el rumbo. El parque público español es del 2,5% frente al 30% de Viena: esa es la anomalía, no los topes. Ahora bien, prometer el 20% para 2040 sin blindar la financiación en los presupuestos es firmar un cheque sin fondos. Menos titulares y más grúas: se juzgará por las viviendas entregadas, no por las aprobadas.",
        "Let\u2019s say it plainly: Spain drags forty years of failed housing policy, whoever governed, and this law — flaws included — is the first serious attempt to correct course. Spain\u2019s public stock is 2.5% versus Vienna\u2019s 30%: that is the anomaly, not the caps. That said, promising 20% by 2040 without ring-fencing budget financing is writing a bad cheque. Fewer headlines, more cranes: it will be judged by homes delivered, not bills passed.",
        "Diguem-ho sense embuts: Espanya arrossega quaranta anys de política d\u2019habitatge fallida, governi qui governi, i aquesta llei —amb les seves imperfeccions— és el primer intent seriós de corregir el rumb. El parc públic espanyol és del 2,5% davant del 30% de Viena: aquesta és l\u2019anomalia, no els topalls. Ara bé, prometre el 20% per al 2040 sense blindar el finançament als pressupostos és signar un xec sense fons. Menys titulars i més grues: es jutjarà pels habitatges lliurats, no pels aprovats.",
      ),
    },
  },
  {
    id: "nat-4",
    category: "science",
    region: "national",
    image: img("1466611653911-95081537e5b7"),
    source: "El Confidencial",
    author: "Energía",
    published: hoursAgo(10),
    readTime: 4,
    views: 44900,
    comments: 512,
    title: m(
      "España genera el 62% de su electricidad con renovables y marca un hito europeo",
      "Spain generates 62% of its electricity from renewables, setting a European milestone",
      "Espanya genera el 62% de la seva electricitat amb renovables i marca una fita europea",
    ),
    summary: m(
      "La fotovoltaica supera por primera vez a la eólica como primera fuente. El reto pendiente: almacenamiento y precios negativos al mediodía.",
      "Solar PV overtakes wind as the top source for the first time. The pending challenge: storage and negative midday prices.",
      "La fotovoltaica supera per primer cop l\u2019eòlica com a primera font. El repte pendent: emmagatzematge i preus negatius al migdia.",
    ),
    content: m(
      "Red Eléctrica confirma que la nueva potencia solar instalada creció un 28% en un año. Las horas con precios negativos se han triplicado, evidenciando la urgencia de baterías y bombeo hidráulico. La industria electrointensiva empieza a relocalizarse en España atraída por la energía barata, con tres gigafactorías anunciadas este año.",
      "The grid operator confirms newly installed solar capacity grew 28% in a year. Hours with negative prices have tripled, underlining the urgency of batteries and pumped hydro. Energy-intensive industry is starting to relocate to Spain drawn by cheap power, with three gigafactories announced this year.",
      "Red Eléctrica confirma que la nova potència solar instal·lada va créixer un 28% en un any. Les hores amb preus negatius s\u2019han triplicat, evidenciant la urgència de bateries i bombament hidràulic. La indústria electrointensiva comença a relocalitzar-se a Espanya atreta per l\u2019energia barata, amb tres gigafactories anunciades enguany.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Consenso técnico inusual: todos los medios celebran el hito y todos señalan el mismo talón de Aquiles, la falta de almacenamiento y de demanda industrial que aproveche los excedentes.",
        "Unusual technical consensus: every outlet celebrates the milestone and every outlet flags the same Achilles heel — lack of storage and of industrial demand to absorb the surplus.",
        "Consens tècnic inusual: tots els mitjans celebren la fita i tots assenyalen el mateix taló d\u2019Aquil·les, la manca d\u2019emmagatzematge i de demanda industrial que aprofiti els excedents.",
      ),
      perspectives: [
        {
          source: "El Confidencial",
          tone: "positive",
          text: m(
            "La energía barata es la nueva ventaja competitiva española.",
            "Cheap energy is Spain\u2019s new competitive advantage.",
            "L\u2019energia barata és el nou avantatge competitiu espanyol.",
          ),
        },
        {
          source: "Bloomberg",
          tone: "positive",
          text: m(
            '"El Texas solar de Europa": la inversión industrial sigue al kilovatio.',
            '"Europe\u2019s solar Texas": industrial investment follows the kilowatt.',
            '"El Texas solar d\u2019Europa": la inversió industrial segueix el quilowatt.',
          ),
        },
        {
          source: "El Periódico de la Energía",
          tone: "critical",
          text: m(
            "Verter energía por falta de baterías es tirar dinero público.",
            "Curtailing energy for lack of batteries is wasting public money.",
            "Abocar energia per manca de bateries és llençar diners públics.",
          ),
        },
      ],
      opinion: m(
        "España ha ganado la lotería geográfica de la era renovable y por fin está cobrando el premio. Pero atención: generar barato sin almacenar ni industrializar es exportar la ventaja a precio de saldo. Cada hora de sol vertida por falta de baterías es riqueza evaporada. La prioridad absoluta del país debería ser convertir electrones baratos en empleo industrial: gigafactorías, hidrógeno, centros de datos. La transición energética está ganada; la industrial, aún no ha empezado de verdad.",
        "Spain won the geographic lottery of the renewable era and is finally collecting the prize. But beware: generating cheap power without storing it or industrialising is exporting the advantage at clearance prices. Every sunny hour curtailed for lack of batteries is evaporated wealth. The country\u2019s absolute priority should be turning cheap electrons into industrial jobs: gigafactories, hydrogen, data centres. The energy transition is won; the industrial one hasn\u2019t truly begun.",
        "Espanya ha guanyat la loteria geogràfica de l\u2019era renovable i per fi està cobrant el premi. Però atenció: generar barat sense emmagatzemar ni industrialitzar és exportar l\u2019avantatge a preu de saldo. Cada hora de sol abocada per manca de bateries és riquesa evaporada. La prioritat absoluta del país hauria de ser convertir electrons barats en ocupació industrial: gigafactories, hidrogen, centres de dades. La transició energètica està guanyada; la industrial, encara no ha començat de debò.",
      ),
    },
  },
  {
    id: "nat-5",
    category: "sports",
    region: "national",
    image: img("1461896836934-ffe607ba8211"),
    source: "Marca",
    author: "Selección",
    published: hoursAgo(12),
    readTime: 3,
    views: 96300,
    comments: 1121,
    title: m(
      "España vence 2-1 a Portugal y jugará las semifinales del torneo continental",
      "Spain beat Portugal 2-1 and advance to the continental tournament semi-finals",
      "Espanya venç 2-1 Portugal i jugarà les semifinals del torneig continental",
    ),
    summary: m(
      "Gol decisivo en el minuto 88 tras una jugada colectiva de 21 pases. La Roja acumula 14 partidos invicta.",
      "Decisive goal in the 88th minute after a 21-pass team move. La Roja extend their unbeaten run to 14 matches.",
      "Gol decisiu al minut 88 després d\u2019una jugada col·lectiva de 21 passades. La Roja acumula 14 partits invicta.",
    ),
    content: m(
      "El combinado nacional dominó la posesión (68%) ante una Portugal replegada que golpeó primero a la contra. La reacción llegó con los cambios: los dos goles nacieron de las botas de los suplentes. La semifinal será el miércoles contra Francia, la única selección que ha vencido a España en dos años.",
      "The national side dominated possession (68%) against a deep-sitting Portugal who struck first on the counter. The response came from the bench: both goals were born from substitutes\u2019 boots. Wednesday\u2019s semi-final is against France — the only side to beat Spain in two years.",
      "El combinat nacional va dominar la possessió (68%) davant una Portugal replegada que va colpejar primer al contraatac. La reacció va arribar amb els canvis: els dos gols van néixer de les botes dels suplents. La semifinal serà dimecres contra França, l\u2019única selecció que ha vençut Espanya en dos anys.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa nacional destaca la profundidad de plantilla como la gran diferencia; la portuguesa lamenta el planteamiento conservador tras adelantarse.",
        "National press highlights squad depth as the big difference; Portuguese media lament the conservative approach after taking the lead.",
        "La premsa nacional destaca la profunditat de plantilla com la gran diferència; la portuguesa lamenta el plantejament conservador després d\u2019avançar-se.",
      ),
      perspectives: [
        {
          source: "Marca",
          tone: "positive",
          text: m(
            "El banquillo gana partidos: 9 goles de suplentes en el torneo.",
            "The bench wins games: 9 substitute goals this tournament.",
            "La banqueta guanya partits: 9 gols de suplents al torneig.",
          ),
        },
        {
          source: "A Bola",
          tone: "critical",
          text: m(
            "Portugal renunció a jugar y lo pagó: encerrarse 60 minutos es rifa.",
            "Portugal refused to play and paid: parking 60 minutes is a lottery.",
            "Portugal va renunciar a jugar i ho va pagar: tancar-se 60 minuts és rifa.",
          ),
        },
        {
          source: "L\u2019Équipe",
          tone: "neutral",
          text: m(
            "Francia-España: el duelo táctico que Europa esperaba.",
            "France-Spain: the tactical duel Europe was waiting for.",
            "França-Espanya: el duel tàctic que Europa esperava.",
          ),
        },
      ],
      opinion: m(
        "Esta selección ha logrado algo más valioso que ganar: tener un estilo tan definido que los rivales renuncian al suyo para contrarrestarlo. Cuando Portugal, con su talento, decide encerrarse una hora, el partido está medio ganado antes de empezar. Contra Francia no valdrá la posesión estéril: hará falta la verticalidad de los suplentes desde el minuto uno. Nuestra apuesta es clara y la firmamos: España es favorita, y no por romanticismo, sino por fondo de armario.",
        "This team has achieved something more valuable than winning: a style so defined that rivals abandon their own to counter it. When Portugal, with their talent, choose to bunker for an hour, the match is half-won before kickoff. Against France, sterile possession won\u2019t do: the substitutes\u2019 verticality is needed from minute one. Our call is clear and we sign it: Spain are favourites — not out of romanticism, but squad depth.",
        "Aquesta selecció ha aconseguit una cosa més valuosa que guanyar: tenir un estil tan definit que els rivals renuncien al seu per contrarestar-lo. Quan Portugal, amb el seu talent, decideix tancar-se una hora, el partit està mig guanyat abans de començar. Contra França no valdrà la possessió estèril: caldrà la verticalitat dels suplents des del minut u. La nostra aposta és clara i la signem: Espanya és favorita, i no per romanticisme, sinó per fons d\u2019armari.",
      ),
    },
  },
  {
    id: "nat-6",
    category: "finance",
    region: "national",
    image: img("1590283603385-17ffb3a7f29f"),
    source: "Cinco Días",
    author: "Mercados",
    published: hoursAgo(5),
    readTime: 3,
    views: 29400,
    comments: 203,
    title: m(
      "El IBEX 35 conquista los 13.500 puntos, su máximo desde 2007",
      "IBEX 35 conquers 13,500 points, its highest since 2007",
      "L\u2019IBEX 35 conquereix els 13.500 punts, el seu màxim des de 2007",
    ),
    summary: m(
      "Banca y energéticas lideran un año en que el selectivo español dobla el rendimiento del EuroStoxx. Los analistas debaten si queda recorrido.",
      "Banks and utilities lead a year in which the Spanish index doubles the EuroStoxx\u2019s return. Analysts debate whether there\u2019s room left to run.",
      "Banca i energètiques lideren un any en què el selectiu espanyol dobla el rendiment de l\u2019EuroStoxx. Els analistes debaten si queda recorregut.",
    ),
    content: m(
      "El índice acumula una revalorización del 19% en el año apoyado en beneficios bancarios récord y el tirón renovable. Los gestores internacionales sobreponderan España por primera vez en una década. La banca de inversión discrepa: unos ven el IBEX barato por PER, otros alertan de la concentración en pocos valores.",
      "The index is up 19% for the year on record banking profits and the renewables surge. International managers are overweight Spain for the first time in a decade. Investment banks disagree: some see the IBEX cheap on P/E, others warn about concentration in a handful of names.",
      "L\u2019índex acumula una revaloració del 19% l\u2019any recolzat en beneficis bancaris rècord i l\u2019empenta renovable. Els gestors internacionals sobreponderen Espanya per primer cop en una dècada. La banca d\u2019inversió discrepa: uns veuen l\u2019IBEX barat per PER, altres alerten de la concentració en pocs valors.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "La prensa financiera celebra el hito con moderación: el consenso ve fundamentales sólidos, pero recuerda que la mitad de la subida la explican cinco valores.",
        "Financial press celebrates the milestone with restraint: consensus sees solid fundamentals but notes five stocks explain half the rally.",
        "La premsa financera celebra la fita amb moderació: el consens veu fonamentals sòlids, però recorda que la meitat de la pujada l\u2019expliquen cinc valors.",
      ),
      perspectives: [
        {
          source: "Cinco Días",
          tone: "positive",
          text: m(
            "Beneficios récord y dividendos del 5%: el IBEX tiene argumentos.",
            "Record profits and 5% dividends: the IBEX has a case.",
            "Beneficis rècord i dividends del 5%: l\u2019IBEX té arguments.",
          ),
        },
        {
          source: "Bloomberg",
          tone: "neutral",
          text: m(
            "España, de patito feo a favorita de los gestores europeos.",
            "Spain: from ugly duckling to European managers\u2019 favourite.",
            "Espanya, d\u2019aneguet lleig a favorita dels gestors europeus.",
          ),
        },
        {
          source: "Expansión",
          tone: "critical",
          text: m(
            "Sin tecnológicas de peso, el selectivo sigue anclado al ciclo.",
            "Without heavyweight tech, the index remains chained to the cycle.",
            "Sense tecnològiques de pes, el selectiu segueix ancorat al cicle.",
          ),
        },
      ],
      opinion: m(
        "Los 13.500 saben a justicia poética para una bolsa ninguneada durante quince años, pero no nos engañemos con el espejo retrovisor. El IBEX sube por bancos cobrando tipos altos y utilities cobrando la transición: negocio de ayer y de hoy, no de mañana. La bolsa española necesita lo mismo que su economía: tecnología cotizada, salidas a bolsa de sus scale-ups y menos dependencia del ciclo del euríbor. Disfruten el rally, pero exijan la modernización del parqué.",
        "The 13,500 mark tastes like poetic justice for a market snubbed for fifteen years, but let\u2019s not be fooled by the rear-view mirror. The IBEX rises on banks harvesting high rates and utilities harvesting the transition: yesterday\u2019s and today\u2019s business, not tomorrow\u2019s. The Spanish market needs what its economy needs: listed tech, IPOs of its scale-ups and less dependence on the Euribor cycle. Enjoy the rally — but demand the modernisation of the exchange.",
        "Els 13.500 saben a justícia poètica per a una borsa menystinguda durant quinze anys, però no ens enganyem amb el mirall retrovisor. L\u2019IBEX puja per bancs cobrant tipus alts i utilities cobrant la transició: negoci d\u2019ahir i d\u2019avui, no de demà. La borsa espanyola necessita el mateix que la seva economia: tecnologia cotitzada, sortides a borsa de les seves scale-ups i menys dependència del cicle de l\u2019euríbor. Gaudeixin del ral·li, però exigeixin la modernització del parquet.",
      ),
    },
  },
  {
    id: "nat-7",
    category: "spain",
    region: "national",
    image: img("1474487548417-781cb71495f3"),
    source: "El Mundo",
    author: "Infraestructuras",
    published: hoursAgo(15),
    readTime: 4,
    views: 36200,
    comments: 447,
    title: m(
      "El AVE conecta por fin Madrid y Lisboa: 3 horas y 15 minutos entre capitales",
      "High-speed rail finally links Madrid and Lisbon: 3 hours 15 minutes between capitals",
      "L\u2019AVE connecta per fi Madrid i Lisboa: 3 hores i 15 minuts entre capitals",
    ),
    summary: m(
      "La línea ibérica arranca con 8 frecuencias diarias y billetes desde 39€. Aviación prevé perder el 60% del tráfico aéreo entre ambas ciudades.",
      "The Iberian line launches with 8 daily services and tickets from €39. Airlines expect to lose 60% of air traffic between the two cities.",
      "La línia ibèrica arrenca amb 8 freqüències diàries i bitllets des de 39€. L\u2019aviació preveu perdre el 60% del trànsit aeri entre ambdues ciutats.",
    ),
    content: m(
      "El proyecto, financiado en un 40% con fondos europeos, culmina dos décadas de negociaciones intermitentes. El tramo Badajoz-Évora ha sido el último en completarse. Los operadores estudian ya extender frecuencias a Oporto y conectar con la red francesa para un corredor Lisboa-París.",
      "The project, 40% funded by the EU, caps two decades of on-off negotiations. The Badajoz-Évora stretch was the last to be completed. Operators are already studying extending services to Porto and linking with the French network for a Lisbon-Paris corridor.",
      "El projecte, finançat en un 40% amb fons europeus, culmina dues dècades de negociacions intermitents. El tram Badajoz-Évora ha estat l\u2019últim a completar-se. Els operadors ja estudien estendre freqüències a Porto i connectar amb la xarxa francesa per a un corredor Lisboa-París.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Celebración ibérica compartida con la misma pregunta a ambos lados: por qué ha costado veinte años y qué corredores siguen olvidados (Extremadura interior, el Mediterráneo).",
        "Shared Iberian celebration with the same question on both sides: why did it take twenty years, and which corridors remain forgotten (inland Extremadura, the Mediterranean).",
        "Celebració ibèrica compartida amb la mateixa pregunta a banda i banda: per què ha costat vint anys i quins corredors segueixen oblidats (Extremadura interior, el Mediterrani).",
      ),
      perspectives: [
        {
          source: "El Mundo",
          tone: "positive",
          text: m(
            "La península funciona por fin como un solo mercado de 60 millones.",
            "The peninsula finally works as a single 60-million market.",
            "La península funciona per fi com un sol mercat de 60 milions.",
          ),
        },
        {
          source: "Público (PT)",
          tone: "positive",
          text: m(
            "Lisboa se acerca a Europa por tierra: hito histórico.",
            "Lisbon gets closer to Europe overland: a historic milestone.",
            "Lisboa s\u2019acosta a Europa per terra: fita històrica.",
          ),
        },
        {
          source: "Hoy Extremadura",
          tone: "critical",
          text: m(
            "El AVE pasa por Extremadura pero apenas para en ella.",
            "The AVE crosses Extremadura but barely stops there.",
            "L\u2019AVE passa per Extremadura però amb prou feines s\u2019hi atura.",
          ),
        },
      ],
      opinion: m(
        "Veinte años para 600 kilómetros: que la buena noticia no amnistíe la lentitud. Cada década de retraso ha sido PIB perdido para dos países que se dan la espalda por costumbre. La lección es doble: los fondos europeos funcionan cuando hay fecha y penalización, y los territorios de paso no pueden ser solo paisaje. Ahora, a por el corredor mediterráneo con la misma urgencia: es imperdonable que Valencia-Barcelona-frontera siga en vía única de facto para mercancías.",
        "Twenty years for 600 kilometres: the good news must not pardon the slowness. Every decade of delay was lost GDP for two countries that ignore each other out of habit. The lesson is twofold: EU funds work when there are deadlines and penalties, and pass-through territories cannot be mere scenery. Next, the Mediterranean corridor with the same urgency: it is unforgivable that Valencia-Barcelona-border remains de facto single-track for freight.",
        "Vint anys per a 600 quilòmetres: que la bona notícia no amnistiï la lentitud. Cada dècada de retard ha estat PIB perdut per a dos països que es donen l\u2019esquena per costum. La lliçó és doble: els fons europeus funcionen quan hi ha data i penalització, i els territoris de pas no poden ser només paisatge. Ara, cap al corredor mediterrani amb la mateixa urgència: és imperdonable que València-Barcelona-frontera segueixi en via única de facto per a mercaderies.",
      ),
    },
  },
  {
    id: "nat-8",
    category: "spain",
    region: "national",
    image: img("1554224155-6726b3ff858f"),
    source: "RTVE",
    author: "Laboral",
    published: hoursAgo(18),
    readTime: 5,
    views: 58700,
    comments: 976,
    title: m(
      "Gobierno y agentes sociales pactan subir el SMI a 1.250€ en 14 pagas",
      "Government and social partners agree to raise the minimum wage to €1,250 across 14 payments",
      "Govern i agents socials pacten apujar l\u2019SMI a 1.250€ en 14 pagues",
    ),
    summary: m(
      "La subida del 4,2% beneficia a 2,4 millones de trabajadores. La patronal de pymes advierte de tensiones en hostelería y campo.",
      "The 4.2% rise benefits 2.4 million workers. The SME employers\u2019 association warns of strain in hospitality and agriculture.",
      "La pujada del 4,2% beneficia 2,4 milions de treballadors. La patronal de pimes adverteix de tensions en hostaleria i camp.",
    ),
    content: m(
      "El acuerdo incluye por primera vez una cláusula de revisión ligada a la cesta básica. Los estudios del Banco de España sobre subidas anteriores no detectaron destrucción neta de empleo significativa. Economistas discrepan sobre el margen restante: el SMI alcanza ya el 60% del salario medio, el objetivo de la Carta Social Europea.",
      "The deal includes for the first time a review clause tied to the basic consumer basket. Bank of Spain studies of previous rises found no significant net job destruction. Economists disagree on the remaining headroom: the minimum wage now reaches 60% of the average salary, the European Social Charter target.",
      "L\u2019acord inclou per primer cop una clàusula de revisió lligada a la cistella bàsica. Els estudis del Banc d\u2019Espanya sobre pujades anteriors no van detectar destrucció neta d\u2019ocupació significativa. Els economistes discrepen sobre el marge restant: l\u2019SMI arriba ja al 60% del salari mitjà, l\u2019objectiu de la Carta Social Europea.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Debate económico clásico con datos nuevos: la izquierda mediática subraya que las profecías de paro no se cumplieron; la conservadora traslada el foco a pymes rurales y absentismo.",
        "A classic economic debate with fresh data: left-leaning media stress that unemployment prophecies never materialised; conservative outlets shift focus to rural SMEs and absenteeism.",
        "Debat econòmic clàssic amb dades noves: l\u2019esquerra mediàtica subratlla que les profecies d\u2019atur no es van complir; la conservadora trasllada el focus a pimes rurals i absentisme.",
      ),
      perspectives: [
        {
          source: "eldiario.es",
          tone: "positive",
          text: m(
            "Cinco subidas, cinco récords de empleo: el debate está zanjado.",
            "Five raises, five employment records: the debate is settled.",
            "Cinc pujades, cinc rècords d\u2019ocupació: el debat està tancat.",
          ),
        },
        {
          source: "ABC",
          tone: "critical",
          text: m(
            "El pequeño comercio rural no puede absorber otro 4% de costes.",
            "Rural small business cannot absorb another 4% in costs.",
            "El petit comerç rural no pot absorbir un altre 4% de costos.",
          ),
        },
        {
          source: "CincoDías",
          tone: "neutral",
          text: m(
            "La clave ya no es el SMI sino la productividad que lo sostenga.",
            "The key is no longer the wage floor but the productivity to sustain it.",
            "La clau ja no és l\u2019SMI sinó la productivitat que el sostingui.",
          ),
        },
      ],
      opinion: m(
        "Los hechos han hablado: cinco subidas consecutivas del SMI y el empleo en máximos históricos. Quienes pronosticaron el apocalipsis laboral deben cuenta de sus modelos, no de sus opiniones. Dicho esto, el listón del 60% marca un punto de inflexión real: a partir de aquí, cada euro extra debe venir de productividad, no de decreto. El siguiente contrato social pasa por formación, digitalización de pymes y absentismo abordado con honestidad. Subir sueldos era la parte fácil; ahora toca ganárselos como país.",
        "The facts have spoken: five consecutive minimum wage rises and employment at record highs. Those who forecast labour apocalypse owe us an audit of their models, not their opinions. That said, the 60% threshold marks a real inflection point: from here, every extra euro must come from productivity, not decree. The next social contract runs through training, SME digitalisation and absenteeism addressed honestly. Raising wages was the easy part; now the country must earn them.",
        "Els fets han parlat: cinc pujades consecutives de l\u2019SMI i l\u2019ocupació en màxims històrics. Els qui van pronosticar l\u2019apocalipsi laboral deuen comptes dels seus models, no de les seves opinions. Dit això, el llistó del 60% marca un punt d\u2019inflexió real: a partir d\u2019aquí, cada euro extra ha de venir de productivitat, no de decret. El següent contracte social passa per formació, digitalització de pimes i absentisme abordat amb honestedat. Apujar sous era la part fàcil; ara toca guanyar-se\u2019ls com a país.",
      ),
    },
  },
  {
    id: "nat-9",
    category: "lifestyle",
    region: "national",
    image: img("1489599849927-2ee91cede3ba"),
    source: "Fotogramas",
    author: "Cine",
    published: hoursAgo(22),
    readTime: 3,
    views: 25800,
    comments: 312,
    title: m(
      "El cine español arrasa en Venecia: León de Oro y premio del público",
      "Spanish cinema sweeps Venice: Golden Lion and audience award",
      "El cinema espanyol arrasa a Venècia: Lleó d\u2019Or i premi del públic",
    ),
    summary: m(
      "La película, rodada entre Galicia y Buenos Aires con presupuesto medio, confirma el gran momento internacional del audiovisual español.",
      "The film, shot between Galicia and Buenos Aires on a mid-range budget, confirms Spanish audiovisual\u2019s international golden moment.",
      "La pel·lícula, rodada entre Galícia i Buenos Aires amb pressupost mitjà, confirma el gran moment internacional de l\u2019audiovisual espanyol.",
    ),
    content: m(
      "Es el tercer gran premio europeo para una producción española en dos años. Las plataformas se disputan ya los derechos globales de distribución. La industria reivindica el modelo de coproducción iberoamericana y los incentivos fiscales que han multiplicado los rodajes internacionales en España.",
      "It is the third major European prize for a Spanish production in two years. Streaming platforms are already bidding for global distribution rights. The industry credits the Ibero-American co-production model and the tax incentives that have multiplied international shoots in Spain.",
      "És el tercer gran premi europeu per a una producció espanyola en dos anys. Les plataformes ja es disputen els drets globals de distribució. La indústria reivindica el model de coproducció iberoamericana i els incentius fiscals que han multiplicat els rodatges internacionals a Espanya.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Euforia cultural compartida con un matiz recurrente: el éxito de los premios convive con salas de cine en mínimos de asistencia y un debate sobre a dónde va el espectador.",
        "Shared cultural euphoria with a recurring nuance: awards success coexists with cinema attendance at record lows and a debate over where the audience went.",
        "Eufòria cultural compartida amb un matís recurrent: l\u2019èxit dels premis conviu amb sales de cinema en mínims d\u2019assistència i un debat sobre on va l\u2019espectador.",
      ),
      perspectives: [
        {
          source: "Fotogramas",
          tone: "positive",
          text: m(
            "Una generación de cineastas sin complejos conquista Europa.",
            "A generation of filmmakers without complexes conquers Europe.",
            "Una generació de cineastes sense complexos conquereix Europa.",
          ),
        },
        {
          source: "Variety",
          tone: "positive",
          text: m(
            "España es el nuevo epicentro del audiovisual en español.",
            "Spain is the new epicentre of Spanish-language content.",
            "Espanya és el nou epicentre de l\u2019audiovisual en espanyol.",
          ),
        },
        {
          source: "El Cultural",
          tone: "critical",
          text: m(
            "Premios fuera, salas vacías dentro: la paradoja sin resolver.",
            "Prizes abroad, empty theatres at home: the unresolved paradox.",
            "Premis fora, sales buides dins: la paradoxa sense resoldre.",
          ),
        },
      ],
      opinion: m(
        "El talento español nunca fue el problema; el ecosistema, sí. Este León de Oro demuestra que cuando hay financiación estable e incentivos inteligentes, los resultados llegan. Pero hay una incoherencia nacional que duele: celebramos los premios mientras dejamos morir las salas. Un país que solo consume su cine en plataformas acabará haciendo cine de plataforma. Butaca joven subvencionada, cuota de pantalla y cine en la escuela: defender la sala es defender la película.",
        "Spanish talent was never the problem; the ecosystem was. This Golden Lion proves that with stable financing and smart incentives, results follow. But there is a painful national incoherence: we celebrate prizes while letting theatres die. A country that only consumes its cinema on streaming will end up making streaming-shaped cinema. Subsidised young admissions, screen quotas and cinema in schools: defending the theatre is defending the film.",
        "El talent espanyol mai no va ser el problema; l\u2019ecosistema, sí. Aquest Lleó d\u2019Or demostra que quan hi ha finançament estable i incentius intel·ligents, els resultats arriben. Però hi ha una incoherència nacional que fa mal: celebrem els premis mentre deixem morir les sales. Un país que només consumeix el seu cinema en plataformes acabarà fent cinema de plataforma. Butaca jove subvencionada, quota de pantalla i cinema a l\u2019escola: defensar la sala és defensar la pel·lícula.",
      ),
    },
  },
  {
    id: "nat-10",
    category: "spain",
    region: "national",
    image: img("1522202176988-66273c2fd55f"),
    source: "20minutos",
    author: "Sociedad",
    published: hoursAgo(28),
    readTime: 4,
    views: 33100,
    comments: 389,
    title: m(
      "España supera los 100.000 visados de nómada digital y revisa el programa",
      "Spain passes 100,000 digital nomad visas and reviews the programme",
      "Espanya supera els 100.000 visats de nòmada digital i revisa el programa",
    ),
    summary: m(
      "El perfil medio: 34 años, ingresos de 4.200€ mensuales y estancia de 18 meses. Málaga, Valencia y Las Palmas concentran la mitad.",
      "The average profile: 34 years old, €4,200 monthly income, 18-month stays. Málaga, Valencia and Las Palmas host half of them.",
      "El perfil mitjà: 34 anys, ingressos de 4.200€ mensuals i estada de 18 mesos. Màlaga, València i Las Palmas en concentren la meitat.",
    ),
    content: m(
      "El Gobierno estudia ajustes tras las quejas vecinales en los barrios más afectados por la subida de alquileres. Se plantea exigir ingresos mínimos superiores y un recargo destinado a vivienda local. Los defensores del programa esgrimen los 3.000 millones anuales de gasto directo y la creación de empleo cualificado.",
      "The government is studying adjustments after residents\u2019 complaints in the neighbourhoods hit hardest by rent rises. Higher minimum income requirements and a surcharge earmarked for local housing are on the table. The programme\u2019s defenders point to €3 billion in direct annual spending and skilled job creation.",
      "El Govern estudia ajustos després de les queixes veïnals als barris més afectats per la pujada de lloguers. Es planteja exigir ingressos mínims superiors i un recàrrec destinat a habitatge local. Els defensors del programa esgrimeixen els 3.000 milions anuals de despesa directa i la creació d\u2019ocupació qualificada.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "La prensa internacional lo presenta como éxito de atracción de talento; la local documenta el reverso: cafés a 6€ y alquileres imposibles en los barrios nómadas.",
        "International press frames it as a talent-attraction success; local media document the flip side: €6 coffees and impossible rents in nomad neighbourhoods.",
        "La premsa internacional ho presenta com un èxit d\u2019atracció de talent; la local en documenta el revers: cafès a 6€ i lloguers impossibles als barris nòmades.",
      ),
      perspectives: [
        {
          source: "Forbes",
          tone: "positive",
          text: m(
            "España, primer destino mundial del trabajo remoto por tercer año.",
            "Spain: world\u2019s top remote-work destination for a third year.",
            "Espanya, primera destinació mundial del treball remot per tercer any.",
          ),
        },
        {
          source: "SUR Málaga",
          tone: "critical",
          text: m(
            "El Soho malagueño ya no habla español: vecinos expulsados.",
            "Málaga\u2019s Soho no longer speaks Spanish: residents pushed out.",
            "El Soho malagueny ja no parla espanyol: veïns expulsats.",
          ),
        },
        {
          source: "20minutos",
          tone: "neutral",
          text: m(
            "El reto: capturar el valor sin exportar el coste a los vecinos.",
            "The challenge: capture the value without exporting the cost to locals.",
            "El repte: capturar el valor sense exportar el cost als veïns.",
          ),
        },
      ],
      opinion: m(
        "Atraer talento global es un acierto estratégico; hacerlo sin proteger a los residentes es un autogol social. Un nómada que cobra en dólares y paga alquiler en Lavapiés compite con ventaja desleal contra el vecino que cobra en euros locales. La solución no es cerrar la puerta sino cobrar la entrada: recargo finalista para vivienda pública en los barrios receptores y límites de pisos turísticos reconvertidos. La hospitalidad no puede ser subvención inversa de los pobres locales a los ricos globales.",
        "Attracting global talent is strategically right; doing it without protecting residents is a social own goal. A nomad earning in dollars and renting in Lavapiés competes unfairly against the neighbour earning local euros. The solution isn\u2019t closing the door but charging admission: an earmarked surcharge for public housing in receiving neighbourhoods and limits on converted tourist flats. Hospitality cannot become a reverse subsidy from the local poor to the global rich.",
        "Atraure talent global és un encert estratègic; fer-ho sense protegir els residents és un gol en pròpia porta social. Un nòmada que cobra en dòlars i paga lloguer a Lavapiés competeix amb avantatge deslleial contra el veí que cobra en euros locals. La solució no és tancar la porta sinó cobrar l\u2019entrada: recàrrec finalista per a habitatge públic als barris receptors i límits als pisos turístics reconvertits. L\u2019hospitalitat no pot ser subvenció inversa dels pobres locals als rics globals.",
      ),
    },
  },

  // ============================================================
  // INTERNATIONAL
  // ============================================================
  {
    id: "int-1",
    category: "breaking",
    region: "international",
    featured: true,
    image: img("1611974789855-9e51245e8e5d"),
    source: "Reuters",
    author: "Markets Desk",
    published: minsAgo(35),
    readTime: 4,
    views: 88100,
    comments: 924,
    title: m(
      "El BCE baja los tipos al 1,75% y anuncia un nuevo marco de política monetaria",
      "ECB cuts rates to 1.75% and unveils a new monetary policy framework",
      "El BCE abaixa els tipus a l\u20191,75% i anuncia un nou marc de política monetària",
    ),
    summary: m(
      "Los mercados europeos reaccionan con subidas del 2% y el euro se deprecia. Lagarde condiciona nuevos recortes a la evolución salarial.",
      "European markets rally 2% and the euro weakens. Lagarde ties further cuts to wage developments.",
      "Els mercats europeus reaccionen amb pujades del 2% i l\u2019euro es deprecia. Lagarde condiciona nous retalls a l\u2019evolució salarial.",
    ),
    content: m(
      "La rebaja de 25 puntos básicos era la esperada, pero el nuevo marco sorprende: el BCE tolerará desviaciones temporales de la inflación para no ahogar la inversión verde y digital. La banca celebra el mensaje y las bolsas periféricas lideran las subidas. Los halcones del consejo emitieron dos votos en contra, señal de tensiones internas.",
      "The 25 basis-point cut was expected, but the new framework surprises: the ECB will tolerate temporary inflation deviations to avoid choking green and digital investment. Banks welcomed the message and peripheral markets led the gains. The council\u2019s hawks cast two dissenting votes, signalling internal tensions.",
      "La rebaixa de 25 punts bàsics era l\u2019esperada, però el nou marc sorprèn: el BCE tolerarà desviacions temporals de la inflació per no ofegar la inversió verda i digital. La banca celebra el missatge i les borses perifèriques lideren les pujades. Els falcons del consell van emetre dos vots en contra, senyal de tensions internes.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Lectura dividida por geografía: la prensa del sur de Europa celebra el alivio financiero; la alemana advierte del riesgo inflacionista de relajar el mandato.",
        "Reading splits by geography: southern European press celebrates the financial relief; German media warn of the inflation risk in loosening the mandate.",
        "Lectura dividida per geografia: la premsa del sud d\u2019Europa celebra l\u2019alleujament financer; l\u2019alemanya adverteix del risc inflacionista de relaxar el mandat.",
      ),
      perspectives: [
        {
          source: "Financial Times",
          tone: "neutral",
          text: m(
            "El giro dovish más importante desde Draghi: cambia la función de reacción.",
            "The most dovish pivot since Draghi: the reaction function changes.",
            "El gir dovish més important des de Draghi: canvia la funció de reacció.",
          ),
        },
        {
          source: "Handelsblatt",
          tone: "critical",
          text: m(
            'Tolerar inflación "temporal" es como estar "un poco" embarazado.',
            'Tolerating "temporary" inflation is like being "a little" pregnant.',
            'Tolerar inflació "temporal" és com estar "una mica" embarassada.',
          ),
        },
        {
          source: "El País",
          tone: "positive",
          text: m(
            "Hipotecas más baratas y aire para la inversión: Europa respira.",
            "Cheaper mortgages and room for investment: Europe breathes.",
            "Hipoteques més barates i aire per a la inversió: Europa respira.",
          ),
        },
      ],
      opinion: m(
        "El BCE acierta en el fondo y se juega la credibilidad en la forma. Europa necesita tipos que no estrangulen la mayor ola de inversión industrial en décadas, y el fanatismo del 2,0% exacto era un corsé del siglo pasado. Pero flexibilizar el objetivo sin un relato impecable es regalar munición a los halcones y a los especuladores contra el euro. Lagarde tiene una tarea: explicar que tolerancia no es rendición. Si el mensaje falla, la próxima crisis de deuda periférica se incubará en esta decisión.",
        "The ECB is right on substance and gambling its credibility on form. Europe needs rates that don\u2019t strangle the biggest industrial investment wave in decades, and the fetish of exactly 2.0% was last century\u2019s corset. But loosening the target without a flawless narrative hands ammunition to the hawks and to speculators against the euro. Lagarde has one job: explain that tolerance is not surrender. If the message fails, the next peripheral debt crisis will have been incubated in this decision.",
        "El BCE encerta en el fons i es juga la credibilitat en la forma. Europa necessita tipus que no escanyin la major onada d\u2019inversió industrial en dècades, i el fanatisme del 2,0% exacte era una cotilla del segle passat. Però flexibilitzar l\u2019objectiu sense un relat impecable és regalar munició als falcons i als especuladors contra l\u2019euro. Lagarde té una tasca: explicar que tolerància no és rendició. Si el missatge falla, la propera crisi de deute perifèric s\u2019haurà incubat en aquesta decisió.",
      ),
    },
  },
  {
    id: "int-2",
    category: "international",
    region: "international",
    image: img("1620712943543-bcc4688e7485"),
    source: "Reuters",
    author: "Tech Policy",
    published: hoursAgo(6),
    readTime: 6,
    views: 67400,
    comments: 1456,
    title: m(
      "40 países firman el primer tratado vinculante sobre inteligencia artificial",
      "40 countries sign the first binding treaty on artificial intelligence",
      "40 països signen el primer tractat vinculant sobre intel·ligència artificial",
    ),
    summary: m(
      "El acuerdo obliga a auditar los modelos de riesgo sistémico y crea una agencia internacional de supervisión. EEUU y China firman con reservas.",
      "The accord mandates audits of systemic-risk models and creates an international oversight agency. The US and China sign with reservations.",
      "L\u2019acord obliga a auditar els models de risc sistèmic i crea una agència internacional de supervisió. Els EUA i la Xina signen amb reserves.",
    ),
    content: m(
      'El tratado exige transparencia sobre datos de entrenamiento, marcas de agua obligatorias en contenido sintético y un registro global de modelos por encima de cierto umbral de cómputo. Las grandes tecnológicas critican los plazos: 18 meses para adaptarse. Las organizaciones civiles lo celebran como el "momento constitucional" de la IA, aunque lamentan la ausencia de prohibiciones a las armas autónomas.',
      'The treaty demands transparency on training data, mandatory watermarks on synthetic content and a global registry of models above a compute threshold. Big Tech criticises the timeline: 18 months to comply. Civil society hails it as AI\u2019s "constitutional moment", while lamenting the absence of bans on autonomous weapons.',
      'El tractat exigeix transparència sobre dades d\u2019entrenament, marques d\u2019aigua obligatòries en contingut sintètic i un registre global de models per sobre d\u2019un llindar de còmput. Les grans tecnològiques critiquen els terminis: 18 mesos per adaptar-se. Les organitzacions civils ho celebren com el "moment constitucional" de la IA, tot i lamentar l\u2019absència de prohibicions a les armes autònomes.',
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Hito diplomático con lecturas opuestas: la prensa europea reivindica su modelo regulador; la estadounidense teme por la innovación; la asiática analiza el tablero geopolítico del cómputo.",
        "A diplomatic milestone with opposing takes: European press vindicates its regulatory model; American media fear for innovation; Asian outlets analyse the geopolitics of compute.",
        "Fita diplomàtica amb lectures oposades: la premsa europea reivindica el seu model regulador; l\u2019estatunidenca tem per la innovació; l\u2019asiàtica analitza el tauler geopolític del còmput.",
      ),
      perspectives: [
        {
          source: "Le Monde",
          tone: "positive",
          text: m(
            "Europa exporta su modelo: regular primero ya no es quedarse atrás.",
            "Europe exports its model: regulating first no longer means falling behind.",
            "Europa exporta el seu model: regular primer ja no és quedar-se enrere.",
          ),
        },
        {
          source: "WSJ",
          tone: "critical",
          text: m(
            "Burocratizar la frontera tecnológica tiene un coste que pagará Occidente.",
            "Bureaucratising the tech frontier has a cost the West will pay.",
            "Burocratitzar la frontera tecnològica té un cost que pagarà Occident.",
          ),
        },
        {
          source: "Nikkei",
          tone: "neutral",
          text: m(
            "El registro de cómputo redibuja el mapa del poder tecnológico.",
            "The compute registry redraws the map of technological power.",
            "El registre de còmput redibuixa el mapa del poder tecnològic.",
          ),
        },
      ],
      opinion: m(
        'La humanidad acaba de hacer algo inusual: regular una tecnología antes de la catástrofe, no después. Ese mérito es enorme y conviene defenderlo frente al lobby del "no se puede parar el progreso" —el mismo argumento que retrasó décadas la acción sobre el tabaco o el clima. ¿Es imperfecto? Claro: sin armas autónomas dentro, el tratado nace cojo. Pero los marcos se amplían; los vacíos se pagan. La transparencia sobre datos y las auditorías no frenan la innovación: frenan la impunidad. Y distinguir ambas cosas es exactamente lo que define a una sociedad madura.',
        'Humanity just did something unusual: regulate a technology before the catastrophe, not after. That merit is enormous and worth defending against the "you can\u2019t stop progress" lobby — the same argument that delayed action on tobacco and climate for decades. Is it imperfect? Of course: without autonomous weapons inside, the treaty is born limping. But frameworks expand; vacuums are paid for. Transparency on data and audits don\u2019t brake innovation: they brake impunity. Telling those two apart is precisely what defines a mature society.',
        'La humanitat acaba de fer una cosa inusual: regular una tecnologia abans de la catàstrofe, no després. Aquest mèrit és enorme i convé defensar-lo davant del lobby del "no es pot aturar el progrés" —el mateix argument que va retardar dècades l\u2019acció sobre el tabac o el clima. És imperfecte? És clar: sense armes autònomes dins, el tractat neix coix. Però els marcs s\u2019amplien; els buits es paguen. La transparència sobre dades i les auditories no frenen la innovació: frenen la impunitat. I distingir totes dues coses és exactament el que defineix una societat madura.',
      ),
    },
  },
  {
    id: "int-3",
    category: "science",
    region: "international",
    image: img("1536431311519-398e48eea140"),
    source: "BBC",
    author: "Environment",
    published: hoursAgo(9),
    readTime: 5,
    views: 59800,
    comments: 1102,
    title: m(
      "La cumbre del clima cierra con un fondo de 300.000 millones para adaptación",
      "Climate summit closes with a $300 billion adaptation fund",
      "La cimera del clima tanca amb un fons de 300.000 milions per a adaptació",
    ),
    summary: m(
      "Acuerdo in extremis tras 48 horas de prórroga. Los países insulares lo tachan de insuficiente; los emergentes logran acceso preferente.",
      "A last-gasp deal after a 48-hour overtime. Island nations call it insufficient; emerging economies secure preferential access.",
      "Acord in extremis després de 48 hores de pròrroga. Els països insulars ho titllen d\u2019insuficient; els emergents aconsegueixen accés preferent.",
    ),
    content: m(
      "El fondo se nutrirá de aportaciones públicas y de un gravamen inédito al transporte marítimo. El texto final evita el calendario vinculante de abandono de combustibles fósiles que pedían 80 países. La ciencia lo resume con frialdad: los compromisos actuales sitúan el calentamiento en 2,4 grados a final de siglo.",
      "The fund will draw on public contributions and an unprecedented levy on maritime shipping. The final text avoids the binding fossil-fuel phase-out calendar demanded by 80 countries. Science sums it up coldly: current pledges put warming at 2.4 degrees by century\u2019s end.",
      "El fons es nodrirà d\u2019aportacions públiques i d\u2019un gravamen inèdit al transport marítim. El text final evita el calendari vinculant d\u2019abandonament de combustibles fòssils que demanaven 80 països. La ciència ho resumeix amb fredor: els compromisos actuals situen l\u2019escalfament en 2,4 graus a final de segle.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "Coincidencia inusual entre medios de todo el espectro: el fondo es un avance real y a la vez una cortina de humo sobre el fracaso en mitigación. La distancia entre ciencia y diplomacia se agranda.",
        "Unusual agreement across the media spectrum: the fund is real progress and simultaneously a smokescreen over the mitigation failure. The gap between science and diplomacy widens.",
        "Coincidència inusual entre mitjans de tot l\u2019espectre: el fons és un avenç real i alhora una cortina de fum sobre el fracàs en mitigació. La distància entre ciència i diplomàcia s\u2019engrandeix.",
      ),
      perspectives: [
        {
          source: "BBC",
          tone: "neutral",
          text: m(
            "Dinero nuevo, ambición vieja: la síntesis de la cumbre.",
            "New money, old ambition: the summit in one line.",
            "Diners nous, ambició vella: la síntesi de la cimera.",
          ),
        },
        {
          source: "The Guardian",
          tone: "critical",
          text: m(
            "2,4 grados es una sentencia para millones: llamarlo éxito es obsceno.",
            "2.4 degrees is a sentence for millions: calling it success is obscene.",
            "2,4 graus és una sentència per a milions: dir-ne èxit és obscè.",
          ),
        },
        {
          source: "Al Jazeera",
          tone: "positive",
          text: m(
            "El Sur global logra por fin voz y voto en la arquitectura financiera.",
            "The Global South finally wins voice and vote in the financial architecture.",
            "El Sud global aconsegueix per fi veu i vot en l\u2019arquitectura financera.",
          ),
        },
      ],
      opinion: m(
        "Nuestra opinión no admite tibieza: financiar la adaptación mientras se esquiva el calendario de salida de los fósiles es pagar el entierro negándose a llamar al médico. El fondo de 300.000 millones es necesario y llega tarde y corto —la factura real de la adaptación se estima en el triple—. Pero el escándalo de fondo es otro: 80 países pidieron fecha de caducidad para el petróleo y la minoría bloqueadora ganó otra vez. Mientras el veto de los petroestados siga operando por consenso, estas cumbres seguirán produciendo comunicados en lugar de futuro. Hay que reformar las reglas del juego: mayorías cualificadas y sanciones comerciales verdes. Lo demás es teatro con jet lag.",
        "Our view admits no lukewarmness: funding adaptation while dodging the fossil phase-out calendar is paying for the funeral while refusing to call the doctor. The $300 billion fund is necessary, late and short — the real adaptation bill is estimated at triple. But the underlying scandal is elsewhere: 80 countries demanded an expiry date for oil and the blocking minority won again. As long as petrostate vetoes operate through consensus, these summits will keep producing communiqués instead of futures. Reform the rules of the game: qualified majorities and green trade sanctions. Everything else is theatre with jet lag.",
        "La nostra opinió no admet tebiesa: finançar l\u2019adaptació mentre s\u2019esquiva el calendari de sortida dels fòssils és pagar l\u2019enterrament negant-se a trucar al metge. El fons de 300.000 milions és necessari i arriba tard i curt —la factura real de l\u2019adaptació s\u2019estima en el triple—. Però l\u2019escàndol de fons és un altre: 80 països van demanar data de caducitat per al petroli i la minoria bloquejadora va guanyar un altre cop. Mentre el veto dels petroestats segueixi operant per consens, aquestes cimeres seguiran produint comunicats en lloc de futur. Cal reformar les regles del joc: majories qualificades i sancions comercials verdes. La resta és teatre amb jet lag.",
      ),
    },
  },
  {
    id: "int-4",
    category: "technology",
    region: "international",
    image: img("1635070041078-e3477b96d082"),
    source: "The Verge",
    author: "Science Desk",
    published: hoursAgo(13),
    readTime: 6,
    views: 42300,
    comments: 387,
    title: m(
      "Un ordenador cuántico corrige errores en tiempo real y supera el umbral crítico",
      "A quantum computer corrects errors in real time, crossing the critical threshold",
      "Un ordinador quàntic corregeix errors en temps real i supera el llindar crític",
    ),
    summary: m(
      "El chip de 1.200 cúbits logra que añadir cúbits reduzca los errores en vez de aumentarlos: la puerta a la computación cuántica útil.",
      "The 1,200-qubit chip achieves error rates that fall as qubits are added instead of rising: the doorway to useful quantum computing.",
      "El xip de 1.200 cúbits aconsegueix que afegir cúbits redueixi els errors en lloc d\u2019augmentar-los: la porta a la computació quàntica útil.",
    ),
    content: m(
      "El hito, publicado en Nature, valida dos décadas de teoría de corrección de errores. Los primeros usos prácticos apuntan a simulación de materiales y química de baterías, no a romper la criptografía, que requeriría máquinas mil veces mayores. Los gobiernos aceleran igualmente la migración a cifrado post-cuántico.",
      "The milestone, published in Nature, validates two decades of error-correction theory. First practical uses point to materials simulation and battery chemistry — not breaking cryptography, which would require machines a thousand times larger. Governments are nonetheless accelerating migration to post-quantum encryption.",
      "La fita, publicada a Nature, valida dues dècades de teoria de correcció d\u2019errors. Els primers usos pràctics apunten a simulació de materials i química de bateries, no a trencar la criptografia, que requeriria màquines mil vegades més grans. Els governs acceleren igualment la migració a xifratge post-quàntic.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "La prensa científica pide contención frente a titulares grandilocuentes: es el avance más importante en años, pero la utilidad comercial sigue a 5-8 años vista.",
        "Science press urges restraint against grandiose headlines: this is the most important advance in years, but commercial utility remains 5-8 years out.",
        "La premsa científica demana contenció davant titulars grandiloqüents: és l\u2019avenç més important en anys, però la utilitat comercial segueix a 5-8 anys vista.",
      ),
      perspectives: [
        {
          source: "Nature",
          tone: "positive",
          text: m(
            "La corrección de errores escalable era EL problema. Ya no lo es.",
            "Scalable error correction was THE problem. It no longer is.",
            "La correcció d\u2019errors escalable era EL problema. Ja no ho és.",
          ),
        },
        {
          source: "The Verge",
          tone: "neutral",
          text: m(
            'Impresionante, pero el "quantum advantage" comercial sigue pendiente.',
            "Impressive, but commercial quantum advantage remains pending.",
            'Impressionant, però el "quantum advantage" comercial segueix pendent.',
          ),
        },
        {
          source: "Schneier Blog",
          tone: "critical",
          text: m(
            'La migración criptográfica va tarde: el "cosecha ahora, descifra después" ya ocurre.',
            'Crypto migration is behind: "harvest now, decrypt later" is already happening.',
            'La migració criptogràfica va tard: el "cull ara, desxifra després" ja passa.',
          ),
        },
      ],
      opinion: m(
        "Este es de los pocos hitos tecnológicos que merecen la palabra histórico, y precisamente por eso hay que hablar claro sobre los plazos: la computación cuántica útil sigue siendo una promesa de años, no de trimestres, y quien venda lo contrario busca su ronda de financiación, no la verdad. La urgencia real y desatendida es defensiva: los datos cifrados robados hoy se descifrarán mañana. Toda organización que custodie secretos de larga vida —salud, defensa, propiedad industrial— debería tener ya un plan post-cuántico con fecha. Esa es la noticia accionable; lo demás es ciencia magnífica madurando.",
        "This is one of the few tech milestones deserving the word historic, and precisely for that reason we must be honest about timelines: useful quantum computing remains a promise of years, not quarters, and whoever sells otherwise is chasing their funding round, not the truth. The real, neglected urgency is defensive: encrypted data stolen today will be decrypted tomorrow. Any organisation guarding long-lived secrets — health, defence, industrial property — should already have a dated post-quantum plan. That is the actionable news; the rest is magnificent science maturing.",
        "Aquesta és una de les poques fites tecnològiques que mereixen la paraula històric, i precisament per això cal parlar clar sobre els terminis: la computació quàntica útil segueix sent una promesa d\u2019anys, no de trimestres, i qui vengui el contrari busca la seva ronda de finançament, no la veritat. La urgència real i desatesa és defensiva: les dades xifrades robades avui es desxifraran demà. Toda organització que custodiï secrets de llarga vida —salut, defensa, propietat industrial— hauria de tenir ja un pla post-quàntic amb data. Aquesta és la notícia accionable; la resta és ciència magnífica madurant.",
      ),
    },
  },
  {
    id: "int-5",
    category: "finance",
    region: "international",
    image: img("1642104704074-ca5fffe32cc7"),
    source: "Bloomberg",
    author: "Crypto Desk",
    published: hoursAgo(4),
    readTime: 3,
    views: 51600,
    comments: 745,
    title: m(
      "Bitcoin supera los 95.000 dólares tras la entrada de fondos soberanos",
      "Bitcoin tops $95,000 after sovereign wealth funds pile in",
      "Bitcoin supera els 95.000 dòlars després de l\u2019entrada de fons sobirans",
    ),
    summary: m(
      "Dos fondos soberanos asiáticos confirman posiciones vía ETF. La volatilidad cae a mínimos históricos y los analistas debaten el nuevo régimen.",
      "Two Asian sovereign funds confirm positions via ETFs. Volatility drops to record lows as analysts debate the new regime.",
      "Dos fons sobirans asiàtics confirmen posicions via ETF. La volatilitat cau a mínims històrics i els analistes debaten el nou règim.",
    ),
    content: m(
      'La entrada institucional ha transformado la estructura del mercado: el 34% de la oferta líquida está ya en manos de ETFs, tesorerías corporativas y fondos estatales. Los defensores hablan de "oro digital" consolidado; los críticos, de un activo secuestrado por la misma banca que decía venir a destruir. La correlación con el Nasdaq cae a mínimos de cinco años.',
      'Institutional inflows have transformed the market\u2019s structure: 34% of liquid supply now sits with ETFs, corporate treasuries and state funds. Advocates speak of consolidated "digital gold"; critics of an asset captured by the very banks it claimed it would destroy. Correlation with the Nasdaq falls to five-year lows.',
      'L\u2019entrada institucional ha transformat l\u2019estructura del mercat: el 34% de l\u2019oferta líquida ja és en mans d\u2019ETFs, tresoreries corporatives i fons estatals. Els defensors parlen d\u2019"or digital" consolidat; els crítics, d\u2019un actiu segrestat per la mateixa banca que deia venir a destruir. La correlació amb el Nasdaq cau a mínims de cinc anys.',
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "La prensa financiera normaliza lo que la cripto-nativa lamenta: bitcoin ya se analiza como un activo macro más, con flujos institucionales mandando sobre el relato original.",
        "Financial press normalises what crypto-native media mourn: bitcoin is now analysed as just another macro asset, institutional flows overriding the original narrative.",
        "La premsa financera normalitza el que la cripto-nativa lamenta: bitcoin ja s\u2019analitza com un actiu macro més, amb fluxos institucionals manant sobre el relat original.",
      ),
      perspectives: [
        {
          source: "Bloomberg",
          tone: "positive",
          text: m(
            "La adopción soberana valida la tesis de reserva de valor.",
            "Sovereign adoption validates the store-of-value thesis.",
            "L\u2019adopció sobirana valida la tesi de reserva de valor.",
          ),
        },
        {
          source: "CoinDesk",
          tone: "neutral",
          text: m(
            "Menos volatilidad, menos retorno: bienvenidos a la madurez.",
            "Less volatility, less return: welcome to maturity.",
            "Menys volatilitat, menys retorn: benvinguts a la maduresa.",
          ),
        },
        {
          source: "FT Alphaville",
          tone: "critical",
          text: m(
            "El activo antisistema es ya el juguete favorito del sistema.",
            "The anti-system asset is now the system\u2019s favourite toy.",
            "L\u2019actiu antisistema ja és la joguina favorita del sistema.",
          ),
        },
      ],
      opinion: m(
        "Digamos lo que el precio no dice: bitcoin ha triunfado como activo y fracasado como revolución. Nació para desintermediar la banca y hoy su suerte depende de los flujos de BlackRock y de fondos estatales; la ironía es tan gruesa que apenas necesita comentario. Para el inversor, la lectura fría: la institucionalización reduce el riesgo de colapso pero también el potencial exponencial; es una posición macro más, dimensiónenla como tal y desconfíen de los evangelistas. Para la sociedad, la pregunta pendiente sigue intacta: el dinero programable lo acabarán definiendo los bancos centrales, no los cypherpunks.",
        "Let\u2019s say what the price doesn\u2019t: bitcoin has succeeded as an asset and failed as a revolution. Born to disintermediate banking, its fate now hinges on BlackRock flows and state funds; the irony is too thick to need commentary. For investors, the cold read: institutionalisation lowers collapse risk but also the exponential upside; it is one more macro position — size it accordingly and distrust the evangelists. For society, the pending question stands: programmable money will end up being defined by central banks, not cypherpunks.",
        "Diguem el que el preu no diu: bitcoin ha triomfat com a actiu i ha fracassat com a revolució. Va néixer per desintermediar la banca i avui la seva sort depèn dels fluxos de BlackRock i de fons estatals; la ironia és tan gruixuda que gairebé no necessita comentari. Per a l\u2019inversor, la lectura freda: la institucionalització redueix el risc de col·lapse però també el potencial exponencial; és una posició macro més, dimensioneu-la com a tal i desconfieu dels evangelistes. Per a la societat, la pregunta pendent segueix intacta: els diners programables els acabaran definint els bancs centrals, no els cypherpunks.",
      ),
    },
  },
  {
    id: "int-6",
    category: "science",
    region: "international",
    image: img("1576091160550-2173dba999ef"),
    source: "Nature",
    author: "Health",
    published: hoursAgo(17),
    readTime: 6,
    views: 47900,
    comments: 428,
    title: m(
      "Un fármaco frena el alzhéimer temprano en el 47% de los pacientes del ensayo",
      "Drug halts early Alzheimer\u2019s in 47% of trial patients",
      "Un fàrmac frena l\u2019alzhèimer primerenc en el 47% dels pacients de l\u2019assaig",
    ),
    summary: m(
      "El ensayo de fase 3 con 4.200 pacientes muestra la mayor eficacia registrada. El precio anunciado, 28.000€ anuales, abre el debate del acceso.",
      "The phase-3 trial with 4,200 patients shows the strongest efficacy on record. The announced price — €28,000 a year — opens the access debate.",
      "L\u2019assaig de fase 3 amb 4.200 pacients mostra la major eficàcia registrada. El preu anunciat, 28.000€ anuals, obre el debat de l\u2019accés.",
    ),
    content: m(
      "El tratamiento combina la eliminación de placas amiloides con un neuroprotector de nueva generación. Los efectos secundarios graves afectan al 8% de pacientes y exigen monitorización con resonancias periódicas. Los sistemas públicos de salud europeos negocian ya un precio conjunto, mientras las asociaciones de pacientes piden diagnóstico precoz masivo: el fármaco solo funciona en fases iniciales.",
      "The treatment combines amyloid plaque clearance with a new-generation neuroprotector. Serious side effects affect 8% of patients and require periodic MRI monitoring. European public health systems are already negotiating a joint price, while patient associations demand mass early screening: the drug only works in initial stages.",
      "El tractament combina l\u2019eliminació de plaques amiloides amb un neuroprotector de nova generació. Els efectes secundaris greus afecten el 8% dels pacients i exigeixen monitorització amb ressonàncies periòdiques. Els sistemes públics de salut europeus ja negocien un preu conjunt, mentre les associacions de pacients demanen diagnòstic precoç massiu: el fàrmac només funciona en fases inicials.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Esperanza con letra pequeña: los medios científicos celebran la eficacia inédita mientras los sanitarios advierten que sin diagnóstico precoz masivo el fármaco llegará tarde a la mayoría.",
        "Hope with fine print: science media celebrate unprecedented efficacy while health outlets warn that without mass early diagnosis the drug will arrive too late for most.",
        "Esperança amb lletra petita: els mitjans científics celebren l\u2019eficàcia inèdita mentre els sanitaris adverteixen que sense diagnòstic precoç massiu el fàrmac arribarà tard a la majoria.",
      ),
      perspectives: [
        {
          source: "Nature",
          tone: "positive",
          text: m(
            "El primer fármaco que modifica el curso de la enfermedad de forma robusta.",
            "The first drug to robustly modify the disease\u2019s course.",
            "El primer fàrmac que modifica el curs de la malaltia de forma robusta.",
          ),
        },
        {
          source: "STAT News",
          tone: "neutral",
          text: m(
            "La logística de resonancias será el cuello de botella real.",
            "MRI logistics will be the real bottleneck.",
            "La logística de ressonàncies serà el coll d\u2019ampolla real.",
          ),
        },
        {
          source: "The Lancet",
          tone: "critical",
          text: m(
            "A 28.000€/año, la innovación sin acceso es un privilegio, no un avance.",
            "At €28,000/year, innovation without access is privilege, not progress.",
            "A 28.000€/any, la innovació sense accés és un privilegi, no un avenç.",
          ),
        },
      ],
      opinion: m(
        "Es el avance médico más esperanzador de la década y a la vez un espejo incómodo para nuestros sistemas de salud. Un fármaco que solo funciona en fases tempranas es inútil en países donde el diagnóstico llega, de media, tres años tarde: sin una revolución paralela del cribado —biomarcadores en sangre, memoria en atención primaria— compraremos esperanza cara para unos pocos. Y sobre el precio, claridad: la investigación se financió en parte con dinero público, y los estados tienen el deber y la palanca de negociar en bloque. Celebrar la ciencia y pelear el acceso no son posturas opuestas; son la misma obligación moral.",
        "It is the most hopeful medical advance of the decade and, at once, an uncomfortable mirror for our health systems. A drug that only works early is useless in countries where diagnosis arrives, on average, three years late: without a parallel screening revolution — blood biomarkers, memory checks in primary care — we\u2019ll be buying expensive hope for the few. On price, clarity: the research was partly publicly funded, and states have both the duty and the leverage to negotiate as a bloc. Celebrating the science and fighting for access aren\u2019t opposing stances; they are the same moral obligation.",
        "És l\u2019avenç mèdic més esperançador de la dècada i alhora un mirall incòmode per als nostres sistemes de salut. Un fàrmac que només funciona en fases primerenques és inútil en països on el diagnòstic arriba, de mitjana, tres anys tard: sense una revolució paral·lela del cribratge —biomarcadors en sang, memòria a l\u2019atenció primària— comprarem esperança cara per a uns pocs. I sobre el preu, claredat: la recerca es va finançar en part amb diners públics, i els estats tenen el deure i la palanca de negociar en bloc. Celebrar la ciència i lluitar per l\u2019accés no són postures oposades; són la mateixa obligació moral.",
      ),
    },
  },
  {
    id: "int-7",
    category: "sports",
    region: "international",
    image: img("1522778119026-d647f0596c20"),
    source: "ESPN",
    author: "Football",
    published: hoursAgo(21),
    readTime: 4,
    views: 63500,
    comments: 834,
    title: m(
      "La final de la Champions se jugará en Estambul con dos aspirantes al primer título",
      "The Champions League final heads to Istanbul with two first-time hopefuls",
      "La final de la Champions es jugarà a Istanbul amb dos aspirants al primer títol",
    ),
    summary: m(
      "Por primera vez en 21 años, ninguno de los finalistas ha levantado antes el trofeo. Las semifinales dejaron 13 goles y dos remontadas épicas.",
      "For the first time in 21 years, neither finalist has lifted the trophy before. The semi-finals produced 13 goals and two epic comebacks.",
      "Per primera vegada en 21 anys, cap dels finalistes ha aixecat abans el trofeu. Les semifinals van deixar 13 gols i dues remuntades èpiques.",
    ),
    content: m(
      "El fútbol de clubes vive un cambio de ciclo: las plantillas construidas con scouting de datos y academias propias han superado a los proyectos de chequera. Los dos finalistas suman menos gasto neto en fichajes que el octavo clasificado de la Premier. La UEFA confirma récord de audiencia global en semifinales: 450 millones de espectadores.",
      "Club football is living a cycle change: squads built on data scouting and homegrown academies have overtaken chequebook projects. The two finalists\u2019 combined net transfer spend is lower than the Premier League\u2019s eighth-placed club. UEFA confirms record global semi-final audiences: 450 million viewers.",
      "El futbol de clubs viu un canvi de cicle: les plantilles construïdes amb scouting de dades i acadèmies pròpies han superat els projectes de talonari. Els dos finalistes sumen menys despesa neta en fitxatges que el vuitè classificat de la Premier. La UEFA confirma rècord d\u2019audiència global en semifinals: 450 milions d\u2019espectadors.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa deportiva europea coincide en la lectura romántica —gana la gestión, no el petrodólar— aunque los analistas recuerdan que la excepción no derogará la regla del dinero.",
        "European sports press shares the romantic reading — management beats petrodollars — though analysts note the exception won\u2019t repeal money\u2019s rule.",
        "La premsa esportiva europea coincideix en la lectura romàntica —guanya la gestió, no el petrodòlar— tot i que els analistes recorden que l\u2019excepció no derogarà la regla dels diners.",
      ),
      perspectives: [
        {
          source: "ESPN",
          tone: "positive",
          text: m(
            "La meritocracia del dato vence a la fuerza bruta financiera.",
            "Data meritocracy beats financial brute force.",
            "La meritocràcia de la dada venç la força bruta financera.",
          ),
        },
        {
          source: "L\u2019Équipe",
          tone: "positive",
          text: m(
            "Dos proyectos coherentes de cinco años: el fútbol premia la paciencia.",
            "Two coherent five-year projects: football rewards patience.",
            "Dos projectes coherents de cinc anys: el futbol premia la paciència.",
          ),
        },
        {
          source: "The Athletic",
          tone: "neutral",
          text: m(
            "Bonita excepción estadística; la correlación gasto-éxito sigue intacta.",
            "A lovely statistical exception; the spend-success correlation stands.",
            "Bonica excepció estadística; la correlació despesa-èxit segueix intacta.",
          ),
        },
      ],
      opinion: m(
        "Que nadie confunda una final hermosa con un sistema sano. Celebramos que dos clubes bien gestionados hayan llegado a lo más alto, pero son la excepción que confirma cuarenta años de correlación entre nómina y palmarés. Si el fútbol europeo quiere que esto sea tendencia y no anécdota, las reglas financieras deben morder de verdad: topes salariales reales y castigos deportivos, no multas simbólicas que los estados-club pagan con calderilla. El romanticismo se defiende con reglamento.",
        "Let no one mistake a beautiful final for a healthy system. We celebrate two well-run clubs reaching the summit, but they are the exception proving forty years of correlation between payroll and trophies. If European football wants this as a trend rather than an anecdote, financial rules must truly bite: real salary caps and sporting sanctions, not token fines that state-clubs pay with pocket change. Romance is defended through regulation.",
        "Que ningú confongui una final bonica amb un sistema sa. Celebrem que dos clubs ben gestionats hagin arribat al cim, però són l\u2019excepció que confirma quaranta anys de correlació entre nòmina i palmarès. Si el futbol europeu vol que això sigui tendència i no anècdota, les regles financeres han de mossegar de debò: topalls salarials reals i càstigs esportius, no multes simbòliques que els estats-club paguen amb xavalla. El romanticisme es defensa amb reglament.",
      ),
    },
  },
  {
    id: "int-8",
    category: "international",
    region: "international",
    image: img("1529107386315-e1a2ed48a620"),
    source: "Politico",
    author: "Brussels",
    published: hoursAgo(24),
    readTime: 5,
    views: 39700,
    comments: 1287,
    title: m(
      "La UE aprueba su pacto migratorio tras cinco años de bloqueo",
      "EU approves its migration pact after five years of deadlock",
      "La UE aprova el seu pacte migratori després de cinc anys de bloqueig",
    ),
    summary: m(
      "El acuerdo combina solidaridad obligatoria entre socios con procedimientos acelerados en frontera. Satisface a pocos: lo critican por razones opuestas.",
      "The deal pairs mandatory solidarity between members with fast-track border procedures. It satisfies few: criticised for opposite reasons.",
      "L\u2019acord combina solidaritat obligatòria entre socis amb procediments accelerats en frontera. Satisfà pocs: el critiquen per raons oposades.",
    ),
    content: m(
      "Los países podrán elegir entre reubicar solicitantes, aportar 20.000 euros por plaza rechazada o financiar control fronterizo. Las ONG denuncian los centros de tramitación exprés; los gobiernos del este consideran una imposición el mecanismo de cuotas flexibles. Bruselas defiende que el pacto imperfecto es mejor que el caos coordinado de la última década.",
      "Countries may choose between relocating applicants, paying €20,000 per rejected place, or funding border control. NGOs denounce the express processing centres; eastern governments call the flexible quota mechanism an imposition. Brussels argues an imperfect pact beats the coordinated chaos of the past decade.",
      "Els països podran triar entre reubicar sol·licitants, aportar 20.000 euros per plaça rebutjada o finançar control fronterer. Les ONG denuncien els centres de tramitació exprés; els governs de l\u2019est consideren una imposició el mecanisme de quotes flexibles. Brussel·les defensa que el pacte imperfecte és millor que el caos coordinat de l\u2019última dècada.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Pocas veces un acuerdo une a la prensa de derechas e izquierdas en el rechazo por motivos inversos: unos ven puertas abiertas encubiertas, otros una fortaleza Europa con cheque incluido.",
        "Rarely does a deal unite right and left press in rejection for inverse reasons: some see covert open doors, others a Fortress Europe with a cheque attached.",
        "Poques vegades un acord uneix la premsa de dretes i d\u2019esquerres en el rebuig per motius inversos: uns hi veuen portes obertes encobertes, altres una fortalesa Europa amb xec inclòs.",
      ),
      perspectives: [
        {
          source: "Politico",
          tone: "neutral",
          text: m(
            "El clásico compromiso de Bruselas: funcional, impopular, inevitable.",
            "Classic Brussels compromise: functional, unpopular, inevitable.",
            "El clàssic compromís de Brussel·les: funcional, impopular, inevitable.",
          ),
        },
        {
          source: "Die Welt",
          tone: "critical",
          text: m(
            "Las cuotas flexibles son un peaje disfrazado de solidaridad.",
            "Flexible quotas are a toll dressed as solidarity.",
            "Les quotes flexibles són un peatge disfressat de solidaritat.",
          ),
        },
        {
          source: "The Guardian",
          tone: "critical",
          text: m(
            "Externalizar fronteras y acelerar rechazos no es gestionar: es delegar el problema.",
            "Outsourcing borders and fast-tracking rejections isn\u2019t managing: it\u2019s delegating the problem.",
            "Externalitzar fronteres i accelerar rebuigs no és gestionar: és delegar el problema.",
          ),
        },
      ],
      opinion: m(
        "Que un pacto disguste a todos por razones opuestas no lo convierte en equilibrado: puede significar simplemente que elude las preguntas de fondo. Europa envejece, su economía pide brazos y talento, y sin embargo todo el debate gira sobre cómo repartir rechazos en lugar de cómo organizar llegadas legales. Esa es la disonancia que este pacto no resuelve. Lo defendible: por fin hay reglas comunes y previsibilidad. Lo indefendible: pagar 20.000 euros por no acoger convierte la solidaridad en mercancía. La próxima batalla es la que importa: vías legales amplias, reconocimiento rápido de cualificaciones y una política demográfica adulta. Lo demás es gestionar el síntoma con contabilidad creativa.",
        "A pact displeasing everyone for opposite reasons isn\u2019t necessarily balanced: it may simply dodge the fundamental questions. Europe is ageing, its economy begs for hands and talent, yet the whole debate is about distributing rejections rather than organising legal arrivals. That is the dissonance this pact leaves untouched. The defensible part: common rules and predictability at last. The indefensible: paying €20,000 not to host turns solidarity into a commodity. The next battle is the one that matters: broad legal pathways, fast recognition of qualifications, and an adult demographic policy. Everything else is managing the symptom with creative accounting.",
        "Que un pacte disgusti tothom per raons oposades no el converteix en equilibrat: pot significar simplement que eludeix les preguntes de fons. Europa envelleix, la seva economia demana braços i talent, i tanmateix tot el debat gira sobre com repartir rebuigs en lloc de com organitzar arribades legals. Aquesta és la dissonància que aquest pacte no resol. El defensable: per fi hi ha regles comunes i previsibilitat. L\u2019indefensable: pagar 20.000 euros per no acollir converteix la solidaritat en mercaderia. La propera batalla és la que importa: vies legals àmplies, reconeixement ràpid de qualificacions i una política demogràfica adulta. La resta és gestionar el símptoma amb comptabilitat creativa.",
      ),
    },
  },
  {
    id: "int-9",
    category: "science",
    region: "international",
    image: img("1446776811953-b23d57bd21aa"),
    source: "BBC",
    author: "Space",
    published: hoursAgo(30),
    readTime: 5,
    views: 45200,
    comments: 391,
    title: m(
      "Las muestras de Marte llegan a la Tierra: arranca el análisis del siglo",
      "Mars samples land on Earth: the analysis of the century begins",
      "Les mostres de Mart arriben a la Terra: comença l\u2019anàlisi del segle",
    ),
    summary: m(
      "La cápsula con 30 tubos de roca marciana aterriza en Utah tras un viaje de 7 años. Tres laboratorios buscarán biofirmas durante una década.",
      "The capsule carrying 30 tubes of Martian rock lands in Utah after a 7-year journey. Three laboratories will hunt for biosignatures over a decade.",
      "La càpsula amb 30 tubs de roca marciana aterra a Utah després d\u2019un viatge de 7 anys. Tres laboratoris buscaran biosignatures durant una dècada.",
    ),
    content: m(
      "Las muestras, seleccionadas del delta del cráter Jezero, contienen sedimentos de un antiguo lago con 3.500 millones de años. Los protocolos de contención superan a los de cualquier patógeno terrestre. La comunidad científica gestiona las expectativas: encontrar química prebiótica sería ya revolucionario; una biofirma inequívoca, el mayor descubrimiento de la historia.",
      "The samples, chosen from the Jezero crater delta, hold sediments from a 3.5-billion-year-old lakebed. Containment protocols exceed those for any terrestrial pathogen. The scientific community manages expectations: finding prebiotic chemistry would already be revolutionary; an unambiguous biosignature, the greatest discovery in history.",
      "Les mostres, seleccionades del delta del cràter Jezero, contenen sediments d\u2019un antic llac de 3.500 milions d\u2019anys. Els protocols de contenció superen els de qualsevol patogen terrestre. La comunitat científica gestiona les expectatives: trobar química prebiòtica ja seria revolucionari; una biosignatura inequívoca, el descobriment més gran de la història.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura global reverente con dos hilos: la hazaña de ingeniería multi-agencia y el debate filosófico anticipado sobre qué significaría (o no) encontrar vida.",
        "Reverent global coverage with two threads: the multi-agency engineering feat and the anticipated philosophical debate over what finding life would (or wouldn\u2019t) mean.",
        "Cobertura global reverent amb dos fils: la gesta d\u2019enginyeria multi-agència i el debat filosòfic anticipat sobre què significaria (o no) trobar-hi vida.",
      ),
      perspectives: [
        {
          source: "BBC",
          tone: "positive",
          text: m(
            "La misión robótica más compleja jamás completada, sin un solo fallo crítico.",
            "The most complex robotic mission ever completed, without one critical failure.",
            "La missió robòtica més complexa mai completada, sense cap fallada crítica.",
          ),
        },
        {
          source: "Scientific American",
          tone: "neutral",
          text: m(
            "La ausencia de vida también sería un resultado profundo: la rareza de la Tierra.",
            "Absence of life would also be a profound result: Earth\u2019s rarity.",
            "L\u2019absència de vida també seria un resultat profund: la raresa de la Terra.",
          ),
        },
        {
          source: "SpaceNews",
          tone: "critical",
          text: m(
            "11.000 millones y 20 años: la próxima vez, que lo haga la industria.",
            "$11 billion and 20 years: next time, let industry do it.",
            "11.000 milions i 20 anys: la propera vegada, que ho faci la indústria.",
          ),
        },
      ],
      opinion: m(
        'En una época de horizontes cortos y cinismo barato, esta misión es un recordatorio de lo que las instituciones humanas pueden lograr cuando piensan en décadas: tres agencias, veinte años, siete mil millones de kilómetros y ni un solo fallo crítico. Quienes reducen la exploración espacial a un lujo ignoran su dividendo real —tecnología, talento, y la disciplina de lo difícil—. Y una advertencia contra el hype: si dentro de dos años los laboratorios anuncian "resultados ambiguos", eso no será un fracaso sino ciencia funcionando. La paciencia que trajo estas rocas a casa es la misma que exigirá leerlas.',
        'In an age of short horizons and cheap cynicism, this mission reminds us what human institutions can achieve when they think in decades: three agencies, twenty years, seven billion kilometres and not one critical failure. Those who dismiss space exploration as a luxury ignore its real dividend — technology, talent, and the discipline of doing hard things. And a warning against hype: if in two years the labs announce "ambiguous results", that won\u2019t be failure but science working. The patience that brought these rocks home is the same patience reading them will demand.',
        'En una època d\u2019horitzons curts i cinisme barat, aquesta missió és un recordatori del que les institucions humanes poden aconseguir quan pensen en dècades: tres agències, vint anys, set mil milions de quilòmetres i ni una sola fallada crítica. Els qui redueixen l\u2019exploració espacial a un luxe ignoren el seu dividend real —tecnologia, talent, i la disciplina d\u2019allò difícil—. I una advertència contra el hype: si d\u2019aquí a dos anys els laboratoris anuncien "resultats ambigus", això no serà un fracàs sinó ciència funcionant. La paciència que va portar aquestes roques a casa és la mateixa que exigirà llegir-les.',
      ),
    },
  },
  {
    id: "int-10",
    category: "lifestyle",
    region: "international",
    image: img("1476514525535-07fb3b4ae5f1"),
    source: "CNN Travel",
    author: "Travel",
    published: hoursAgo(33),
    readTime: 4,
    views: 21900,
    comments: 143,
    title: m(
      'El "viaje lento" se impone: los turistas cambian vuelos por trenes nocturnos',
      '"Slow travel" takes over: tourists swap flights for night trains',
      'El "viatge lent" s\u2019imposa: els turistes canvien vols per trens nocturns',
    ),
    summary: m(
      "Las reservas de trenes nocturnos europeos crecen un 40% anual. Las nuevas rutas Barcelona-Zúrich y Madrid-París agotan plazas en horas.",
      "European night-train bookings grow 40% a year. New Barcelona-Zurich and Madrid-Paris routes sell out within hours.",
      "Les reserves de trens nocturns europeus creixen un 40% anual. Les noves rutes Barcelona-Zuric i Madrid-París esgoten places en hores.",
    ),
    content: m(
      "El fenómeno combina conciencia climática, teletrabajo flexible y una generación que valora el trayecto como parte del viaje. Los operadores históricos resucitan rutas cerradas hace 20 años y tres startups ferroviarias han captado 800 millones para nuevo material rodante. El cuello de botella: la capacidad de la red y los peajes ferroviarios transfronterizos.",
      "The phenomenon blends climate awareness, flexible remote work and a generation that values the journey as part of the trip. Legacy operators are reviving routes closed 20 years ago and three rail startups have raised €800 million for new rolling stock. The bottleneck: network capacity and cross-border track access charges.",
      "El fenomen combina consciència climàtica, teletreball flexible i una generació que valora el trajecte com a part del viatge. Els operadors històrics ressusciten rutes tancades fa 20 anys i tres startups ferroviàries han captat 800 milions per a nou material rodant. El coll d\u2019ampolla: la capacitat de la xarxa i els peatges ferroviaris transfronterers.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Tendencia celebrada casi sin fisuras; el matiz crítico llega de la prensa económica, que duda de la rentabilidad sin apoyo público al material rodante.",
        "A trend celebrated almost without dissent; the critical nuance comes from business press doubting profitability without public support for rolling stock.",
        "Tendència celebrada gairebé sense fissures; el matís crític arriba de la premsa econòmica, que dubta de la rendibilitat sense suport públic al material rodant.",
      ),
      perspectives: [
        {
          source: "CNN Travel",
          tone: "positive",
          text: m(
            "La cama sobre raíles es el nuevo símbolo de estatus del viajero consciente.",
            "A bed on rails is the conscious traveller\u2019s new status symbol.",
            "El llit sobre rails és el nou símbol d\u2019estatus del viatger conscient.",
          ),
        },
        {
          source: "Le Figaro",
          tone: "positive",
          text: m(
            "Europa redescubre la poesía ferroviaria que nunca debió perder.",
            "Europe rediscovers the railway poetry it never should have lost.",
            "Europa redescobreix la poesia ferroviària que mai no havia d\u2019haver perdut.",
          ),
        },
        {
          source: "Handelsblatt",
          tone: "critical",
          text: m(
            "Sin reformar los peajes de vía, la moda morirá de éxito y de costes.",
            "Without track-charge reform, the trend will die of success and costs.",
            "Sense reformar els peatges de via, la moda morirà d\u2019èxit i de costos.",
          ),
        },
      ],
      opinion: m(
        "El renacer del tren nocturno es la mejor noticia turística de la década y sería imperdonable dejarla morir por burocracia ferroviaria. La demanda está: se agotan plazas en horas. Lo que falta es voluntad política para tratar el tren transfronterizo como se trató la aviación low-cost en los 90: peajes armonizados, señalización única y compra pública de material rodante alquilado a operadores. Si Europa subvencionó el despegue del avión barato, subvencionar la alternativa que emite 30 veces menos no es intervencionismo: es coherencia climática elemental.",
        "The night train\u2019s rebirth is the decade\u2019s best travel news and letting it die of railway bureaucracy would be unforgivable. Demand is there: seats sell out in hours. What\u2019s missing is the political will to treat cross-border rail as low-cost aviation was treated in the 90s: harmonised track charges, unified signalling and public procurement of rolling stock leased to operators. If Europe subsidised cheap flight\u2019s take-off, subsidising the alternative that emits 30 times less isn\u2019t interventionism: it\u2019s elementary climate coherence.",
        "El renaixement del tren nocturn és la millor notícia turística de la dècada i seria imperdonable deixar-la morir per burocràcia ferroviària. La demanda hi és: s\u2019esgoten places en hores. El que falta és voluntat política per tractar el tren transfronterer com es va tractar l\u2019aviació low-cost als 90: peatges harmonitzats, senyalització única i compra pública de material rodant llogat a operadors. Si Europa va subvencionar l\u2019enlairament de l\u2019avió barat, subvencionar l\u2019alternativa que emet 30 vegades menys no és intervencionisme: és coherència climàtica elemental.",
      ),
    },
  },
];

// ============================================================
// Market data
// ============================================================
export const marketData = [
  {
    symbol: "IBEX",
    name: "IBEX 35",
    price: 13512.45,
    change: 0.65,
    image: "\ud83d\udcca",
  },
  {
    symbol: "SPX",
    name: "S&P 500",
    price: 6890.23,
    change: 0.42,
    image: "\ud83d\udcca",
  },
  {
    symbol: "NDAQ",
    name: "Nasdaq",
    price: 24810.5,
    change: 1.15,
    image: "\ud83d\udcca",
  },
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 95230.0,
    change: 2.34,
    image: "\u20bf",
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 4850.75,
    change: 1.89,
    image: "\u25c6",
  },
  {
    symbol: "EURUSD",
    name: "EUR/USD",
    price: 1.081,
    change: -0.31,
    image: "\ud83d\udcb1",
  },
];

// ============================================================
// AI Daily Briefing (home hero)
// ============================================================
export const dailyBriefing = {
  updated: minsAgo(20),
  headline: m(
    "El BCE marca el día, la vivienda calienta el Congreso y el Barça recupera el liderato",
    "The ECB sets the day\u2019s tone, housing heats up Congress, and Barça reclaim top spot",
    "El BCE marca el dia, l\u2019habitatge escalfa el Congrés i el Barça recupera el lideratge",
  ),
  regions: [
    {
      region: "local",
      articleId: "loc-3",
      text: m(
        "Barcelona confirma la primera bajada de alquileres en una década (-4,2%), mientras el puerto pacta limitar los cruceros a cinco escalas diarias.",
        "Barcelona confirms the first rent drop in a decade (-4.2%), while the port agrees to cap cruise calls at five per day.",
        "Barcelona confirma la primera baixada de lloguers en una dècada (-4,2%), mentre el port pacta limitar els creuers a cinc escales diàries.",
      ),
    },
    {
      region: "national",
      articleId: "nat-3",
      text: m(
        "La ley de vivienda llega al Congreso con 500.000 personas en las calles; España encadena seis trimestres liderando el crecimiento europeo.",
        "The housing law reaches Congress with 500,000 people on the streets; Spain strings six straight quarters leading European growth.",
        "La llei d\u2019habitatge arriba al Congrés amb 500.000 persones als carrers; Espanya encadena sis trimestres liderant el creixement europeu.",
      ),
    },
    {
      region: "international",
      articleId: "int-1",
      text: m(
        "El BCE baja tipos al 1,75% y relaja su marco; 40 países firman el primer tratado vinculante de IA con EEUU y China a bordo.",
        "The ECB cuts rates to 1.75% and loosens its framework; 40 countries sign the first binding AI treaty with the US and China aboard.",
        "El BCE abaixa tipus a l\u20191,75% i relaxa el seu marc; 40 països signen el primer tractat vinculant d\u2019IA amb els EUA i la Xina a bord.",
      ),
    },
  ],
  opinion: m(
    "Si algo conecta las portadas de hoy es la tensión entre capital y vivienda: Frankfurt abarata el dinero el mismo día que medio millón de personas exige que ese dinero no vuelva a inflar el ladrillo. Los tipos bajos sin política de vivienda ambiciosa son gasolina para el problema que las calles denuncian. La lección del día es incómoda pero clara: la política monetaria ya hizo su parte; ahora el balón está en los parlamentos.",
    "If anything connects today\u2019s front pages, it is the tension between capital and housing: Frankfurt makes money cheaper on the very day half a million people demand that money stop inflating bricks. Low rates without ambitious housing policy are fuel for the problem the streets denounce. Today\u2019s lesson is uncomfortable but clear: monetary policy has done its part; the ball is now in the parliaments.",
    "Si alguna cosa connecta les portades d\u2019avui és la tensió entre capital i habitatge: Frankfurt abarateix els diners el mateix dia que mig milió de persones exigeix que aquests diners no tornin a inflar el totxo. Els tipus baixos sense política d\u2019habitatge ambiciosa són gasolina per al problema que els carrers denuncien. La lliçó del dia és incòmoda però clara: la política monetària ja ha fet la seva part; ara la pilota és als parlaments.",
  ),
};
