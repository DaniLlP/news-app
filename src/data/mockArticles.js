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
  // LOCAL â€” Barcelona & Catalonia
  // ============================================================
  {
    id: "loc-1",
    category: "barcelona",
    region: "local",
    image: img("1567605021245-e2af0d14cf7d"),
    source: "La Vanguardia",
    sourceUrl: "https://www.lavanguardia.com",
    author: "RedacciÃ³n Barcelona",
    published: hoursAgo(2),
    readTime: 4,
    views: 48200,
    comments: 312,
    title: m(
      "Barcelona presenta su nuevo plan de movilidad urbana 2026-2028 con 150Mâ‚¬ de inversiÃ³n",
      "Barcelona unveils its new 2026-2028 urban mobility plan with â‚¬150M investment",
      "Barcelona presenta el seu nou pla de mobilitat urbana 2026-2028 amb 150Mâ‚¬ d\u2019inversiÃ³",
    ),
    summary: m(
      "El Ayuntamiento amplÃ­a el metro, duplica los carriles bici y crea nuevas zonas de bajas emisiones en Eixample y Sant MartÃ­.",
      "City Hall expands the metro, doubles bike lanes and creates new low-emission zones in Eixample and Sant MartÃ­.",
      "L\u2019Ajuntament amplia el metro, duplica els carrils bici i crea noves zones de baixes emissions a l\u2019Eixample i Sant MartÃ­.",
    ),
    content: m(
      "El plan contempla la ampliaciÃ³n de la L8, 90 km nuevos de carril bici y la peatonalizaciÃ³n de 21 ejes verdes. La inversiÃ³n de 150 millones de euros se ejecutarÃ¡ en tres fases, priorizando los barrios con peor calidad del aire. Los vecinos podrÃ¡n participar en el diseÃ±o final a travÃ©s de un proceso de consultas que arranca el prÃ³ximo mes.",
      "The plan includes extending the L8 line, 90 km of new bike lanes and pedestrianising 21 green corridors. The â‚¬150 million investment will roll out in three phases, prioritising neighbourhoods with the worst air quality. Residents will be able to shape the final design through a public consultation starting next month.",
      "El pla contempla l\u2019ampliaciÃ³ de la L8, 90 km nous de carril bici i la pacificaciÃ³ de 21 eixos verds. La inversiÃ³ de 150 milions d\u2019euros s\u2019executarÃ  en tres fases, prioritzant els barris amb pitjor qualitat de l\u2019aire. Els veÃ¯ns podran participar en el disseny final mitjanÃ§ant consultes que comencen el mes vinent.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa local coincide en que es el plan mÃ¡s ambicioso en una dÃ©cada, aunque discrepa sobre los plazos: los medios municipales lo ven realista y la prensa econÃ³mica duda de la financiaciÃ³n.",
        "Local press agrees this is the most ambitious plan in a decade, though outlets split on timing: municipal media call it realistic while business press questions the financing.",
        "La premsa local coincideix que Ã©s el pla mÃ©s ambiciÃ³s en una dÃ¨cada, tot i que discrepa sobre els terminis: els mitjans municipals el veuen realista i la premsa econÃ²mica dubta del finanÃ§ament.",
      ),
      perspectives: [
        {
          source: "La Vanguardia",
    sourceUrl: "https://www.lavanguardia.com",
          tone: "positive",
          text: m(
            "Destaca el consenso vecinal y el retorno en salud pÃºblica.",
            "Highlights neighbourhood consensus and public-health returns.",
            "Destaca el consens veÃ¯nal i el retorn en salut pÃºblica.",
          ),
        },
        {
          source: "El PeriÃ³dico",
          tone: "neutral",
          text: m(
            "Subraya que dos tercios del presupuesto dependen de fondos europeos.",
            "Notes two thirds of the budget depends on EU funds.",
            "Subratlla que dos terÃ§os del pressupost depenen de fons europeus.",
          ),
        },
        {
          source: "ExpansiÃ³n",
          tone: "critical",
          text: m(
            "Advierte del impacto en la logÃ­stica de Ãºltima milla y el comercio.",
            "Warns of the impact on last-mile logistics and retail.",
            "Adverteix de l\u2019impacte en la logÃ­stica d\u2019Ãºltima milla i el comerÃ§.",
          ),
        },
      ],
      opinion: m(
        "Nuestra posiciÃ³n es clara: Barcelona no puede permitirse otro plan de movilidad que muera en los despachos. La evidencia de las superilles es contundente â€”menos ruido, menos NO2, mÃ¡s comercio de proximidadâ€” y los costes de no actuar se pagan en salud. El Ayuntamiento debe blindar el calendario frente a los ciclos electorales, y la oposiciÃ³n harÃ­a bien en negociar mejoras en lugar de bloquear. Es la inversiÃ³n con mejor relaciÃ³n coste-beneficio de la ciudad.",
        "Our position is clear: Barcelona cannot afford another mobility plan that dies in committee. The evidence from the superblocks is overwhelming â€” less noise, less NO2, stronger local commerce â€” and the cost of inaction is paid in public health. City Hall must shield the timeline from electoral cycles, and the opposition would do better negotiating improvements than blocking. This is the best cost-benefit investment the city can make.",
        "La nostra posiciÃ³ Ã©s clara: Barcelona no es pot permetre un altre pla de mobilitat que mori als despatxos. L\u2019evidÃ¨ncia de les superilles Ã©s contundent â€”menys soroll, menys NO2, mÃ©s comerÃ§ de proximitatâ€” i el cost de no actuar es paga en salut. L\u2019Ajuntament ha de blindar el calendari davant dels cicles electorals, i l\u2019oposiciÃ³ faria bÃ© de negociar millores en lloc de bloquejar. Ã‰s la inversiÃ³ amb millor relaciÃ³ cost-benefici de la ciutat.",
      ),
    },
  },
  {
    id: 'loc-2',
    category: 'sports',
    region: 'local',
    image: img('1431324155629-1a6deb1dec8d'),
    source: 'Sport',
    sourceUrl: 'https://www.sport.es',
    author: 'Redacció Esports',
    published: hoursAgo(3),
    readTime: 5,
    views: 89400,
    comments: 1247,
    title: m(
      'El Barça cierra el fichaje de un centrocampista alemán por 70M€ y busca un lateral',
      'Barça close €70M deal for German midfielder and target a full-back',
      'El Barça tanca el fitxatge d\u2019un centrecampista alemany per 70M€ i busca un lateral'
    ),
    summary: m(
      'La dirección deportiva acelera el mercado de invierno: el club confirma el principio de acuerdo y negocia con un club italiano por el lateral derecho.',
      'The sporting department speeds up the winter window: the club confirms a pre-agreement and negotiates with an Italian club for the right-back.',
      'La direcció esportiva accelera el mercat d\u2019hivern: el club confirma el principi d\u2019acord i negocia amb un club italià pel lateral dret.'
    ),
    content: m(
      'El centrocampista, de 24 años, llega para cubrir la baja de De Jong, cuya lesión de tobillo se prolongará al menos hasta marzo. El acuerdo incluye 60 millones fijos más 10 en variables vinculados a títulos y partidos. El jugador firmará por cinco temporadas y se incorporará al grupo la próxima semana. Paralelamente, la directiva negocia con el Nápoles por un lateral derecho de 26 años, aunque la distancia económica sigue siendo amplia: el club italiano pide 45 millones y el Barça ofrece 30 más cesión de un canterano. El director deportivo viajará a Milán el miércoles para intentar cerrar la operación antes del cierre del mercado invernal.',
      'The 24-year-old midfielder arrives to cover De Jong\u2019s ankle injury, expected to keep him out until at least March. The deal includes €60 million guaranteed plus €10 million in add-ons tied to trophies and appearances. The player will sign for five seasons and join the squad next week. Simultaneously, the board is negotiating with Napoli for a 26-year-old right-back, although the economic gap remains wide: the Italian club demands €45 million while Barça offer €30 million plus a youth player on loan. The sporting director will travel to Milan on Wednesday to try to close the deal before the winter transfer deadline.',
      'El centrecampista, de 24 anys, arriba per cobrir la baixa de De Jong, la lesió de turmell del qual es perllongarà almenys fins al març. L\u2019acord inclou 60 milions fixos més 10 en variables vinculats a títols i partits. El jugador signarà per cinc temporades i s\u2019incorporarà al grup la setmana vinent. Paral·lelament, la directiva negocia amb el Nàpols per un lateral dret de 26 anys, tot i que la distància econòmica segueix sent àmplia: el club italià demana 45 milions i el Barça ofereix 30 més cessió d\u2019un canterà. El director esportiu viatjarà a Milà el dimecres per intentar tancar l\u2019operació abans del tancament del mercat hivernal.'
    ),
    insight: {
      stance: 'balanced',
      synthesis: m(
        'La prensa deportiva aplaude la velocidad del fichaje del centrocampista pero divide opiniones sobre si 70M€ es un precio inflado para un jugador con una sola temporada de élite.',
        'Sports media applaud the speed of the midfield signing but split on whether €70M is inflated for a player with just one elite season.',
        'La premsa esportiva aplaudeix la velocitat del fitxatge del centrecampista però divideix opinions sobre si 70M€ és un preu inflat per a un jugador amb una sola temporada d\u2019elit.'
      ),
      perspectives: [
        { source: 'Sport', tone: 'positive', text: m('Un fichaje de necesidad y calidad: el perfil perfecto para el doble pivote.', 'A signing of need and quality: the perfect profile for the double pivot.', 'Un fitxatge de necessitat i qualitat: el perfil perfecte per al doble pivot.') },
        { source: 'AS', tone: 'neutral', text: m('El precio es alto, pero el mercado invernal no deja alternativas baratas.', 'The price is steep, but the winter market leaves no cheap alternatives.', 'El preu és alt, però el mercat hivernal no deixa alternatives barates.') },
        { source: 'Kicker', tone: 'critical', text: m('El Bundesliga pierde un talento en alza por la presión del mercado español.', 'The Bundesliga loses a rising talent to Spanish market pressure.', 'La Bundesliga perd un talent en alça per la pressió del mercat espanyol.') },
      ],
      opinion: m(
        'Pagar 70 millones en enero por un jugador con una temporada de élite es una apuesta de alto riesgo, pero la alternativa era peor: completar la temporada con una medular rota. Lo que preocupa no es el fichaje sino el patrón: el Barça sigue comprando urgencias a precio de oro porque planifica tarde. Si De Jong llevaba meses señalando molestias, este refuerzo debió llegar en verano a mitad de precio. La dirección deportiva acierta en el qué, pero su historial en el cuándo sigue siendo preocupante.',
        'Paying €70 million in January for a one-elite-season player is a high-risk bet, but the alternative was worse: finishing the season with a broken midfield. The concern isn\u2019t the signing but the pattern: Barça keep buying emergencies at premium prices because they plan late. If De Jong had been flagging discomfort for months, this reinforcement should have arrived in summer at half the price. The sporting department gets the what right, but their track record on when remains worrying.',
        'Pagar 70 milions al gener per un jugador amb una temporada d\u2019elit és una aposta d\u2019alt risc, però l\u2019alternativa era pitjor: completar la temporada amb un mig del camp trencat. El que preocupa no és el fitxatge sinó el patró: el Barça segueix comprant urgències a preu d\u2019or perquè planifica tard. Si De Jong portava mesos assenyalant molèsties, aquest reforç havia d\u2019arribar a l\u2019estiu a meitat de preu. La direcció esportiva encerta en el què, però el seu historial en el quan segueix sent preocupant.'
      ),
    },
  },
  {
    id: "loc-3",
    category: "barcelona",
    region: "local",
    image: img("1449824913935-59a10b8d2000"),
    source: "El PeriÃ³dico",
    author: "Societat",
    published: hoursAgo(5),
    readTime: 5,
    views: 61300,
    comments: 892,
    title: m(
      "El precio del alquiler en Barcelona baja un 4,2% tras un aÃ±o de tope de rentas",
      "Barcelona rents fall 4.2% after one year of the rental cap",
      "El preu del lloguer a Barcelona baixa un 4,2% desprÃ©s d\u2019un any de topall de rendes",
    ),
    summary: m(
      "Primer descenso interanual desde 2015. Los propietarios alertan de una caÃ­da del 18% en la oferta disponible.",
      "First year-on-year drop since 2015. Landlords warn available supply has fallen 18%.",
      "Primer descens interanual des de 2015. Els propietaris alerten d\u2019una caiguda del 18% en l\u2019oferta disponible.",
    ),
    content: m(
      "Los datos del IncasÃ²l confirman que el precio medio se sitÃºa en 1.087 euros mensuales. El descenso es mayor en Ciutat Vella y GrÃ cia, las zonas mÃ¡s tensionadas. Las asociaciones de propietarios sostienen que parte del parque ha migrado al alquiler de temporada, un efecto que el Govern promete regular este trimestre.",
      "IncasÃ²l data confirms the average rent now stands at â‚¬1,087 per month. The drop is steepest in Ciutat Vella and GrÃ cia, the most stressed areas. Landlord associations claim part of the housing stock has shifted to seasonal lets, an effect the Catalan government promises to regulate this quarter.",
      "Les dades de l\u2019IncasÃ²l confirmen que el preu mitjÃ  se situa en 1.087 euros mensuals. El descens Ã©s mÃ©s gran a Ciutat Vella i GrÃ cia, les zones mÃ©s tensionades. Les associacions de propietaris sostenen que part del parc ha migrat al lloguer de temporada, un efecte que el Govern promet regular aquest trimestre.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "Los medios discrepan frontalmente: la prensa progresista celebra la primera bajada real de precios, mientras la econÃ³mica atribuye el descenso a la fuga de oferta hacia el alquiler temporal.",
        "Outlets clash head-on: progressive press celebrates the first real price drop, while business media attribute it to supply fleeing into seasonal rentals.",
        "Els mitjans discrepen frontalment: la premsa progressista celebra la primera baixada real de preus, mentre l\u2019econÃ²mica atribueix el descens a la fugida d\u2019oferta cap al lloguer temporal.",
      ),
      perspectives: [
        {
          source: "eldiario.es",
          tone: "positive",
          text: m(
            "La regulaciÃ³n funciona: los precios bajan donde se aplica.",
            "Regulation works: prices fall where it applies.",
            "La regulaciÃ³ funciona: els preus baixen on s\u2019aplica.",
          ),
        },
        {
          source: "ExpansiÃ³n",
          tone: "critical",
          text: m(
            "La oferta se desploma y la escasez pagarÃ¡ la factura futura.",
            "Supply is collapsing and scarcity will foot the future bill.",
            "L\u2019oferta es desploma i l\u2019escassetat pagarÃ  la factura futura.",
          ),
        },
        {
          source: "ARA",
    sourceUrl: "https://www.ara.cat",
          tone: "neutral",
          text: m(
            "El Ã©xito real depende de cerrar el agujero del alquiler de temporada.",
            "Real success hinges on closing the seasonal-rental loophole.",
            "L\u2019Ã¨xit real depÃ¨n de tancar el forat del lloguer de temporada.",
          ),
        },
      ],
      opinion: m(
        "La bajada del 4,2% es una victoria parcial que no debe leerse con triunfalismo. El tope de rentas ha demostrado que el mercado no se hunde por regular, pero el trasvase al alquiler de temporada es un agujero del tamaÃ±o de un transatlÃ¡ntico: si no se cierra ya, la norma quedarÃ¡ en papel mojado. Regular sin construir tampoco basta; sin un parque pÃºblico ambicioso, Barcelona seguirÃ¡ expulsando a sus jÃ³venes. Exigimos ambas cosas: cerrar el fraude de la temporada y triplicar la vivienda protegida.",
        "The 4.2% drop is a partial win that should not be read triumphantly. The rent cap has proven markets don\u2019t collapse under regulation, but the shift to seasonal lets is a loophole the size of an ocean liner: close it now or the law becomes dead letter. Regulating without building isn\u2019t enough either; without an ambitious public housing stock, Barcelona will keep expelling its young. We demand both: shut down the seasonal-rental fraud and triple protected housing.",
        "La baixada del 4,2% Ã©s una victÃ²ria parcial que no s\u2019ha de llegir amb triomfalisme. El topall de rendes ha demostrat que el mercat no s\u2019enfonsa per regular, perÃ² el transvasament al lloguer de temporada Ã©s un forat de la mida d\u2019un transatlÃ ntic: si no es tanca ja, la norma quedarÃ  en paper mullat. Regular sense construir tampoc no basta; sense un parc pÃºblic ambiciÃ³s, Barcelona seguirÃ  expulsant els seus joves. Exigim totes dues coses: tancar el frau de la temporada i triplicar l\u2019habitatge protegit.",
      ),
    },
  },
  {
    id: "loc-4",
    category: "barcelona",
    region: "local",
    image: img("1583422409516-2895a77efded"),
    source: "BetevÃ©",
    author: "Cultura",
    published: hoursAgo(7),
    readTime: 3,
    views: 52800,
    comments: 486,
    title: m(
      "La Sagrada FamÃ­lia confirma 2026 para culminar la torre de Jesucristo",
      "Sagrada FamÃ­lia confirms 2026 completion for the Jesus Christ tower",
      "La Sagrada FamÃ­lia confirma el 2026 per culminar la torre de Jesucrist",
    ),
    summary: m(
      "La basÃ­lica alcanzarÃ¡ los 172,5 metros y se convertirÃ¡ en el edificio mÃ¡s alto de Barcelona, 144 aÃ±os despuÃ©s de su inicio.",
      "The basilica will reach 172.5 metres, becoming Barcelona\u2019s tallest building 144 years after construction began.",
      "La basÃ­lica arribarÃ  als 172,5 metres i es convertirÃ  en l\u2019edifici mÃ©s alt de Barcelona, 144 anys desprÃ©s del seu inici.",
    ),
    content: m(
      "La Junta Constructora confirma que la cruz monumental se izarÃ¡ coincidiendo con el centenario de la muerte de GaudÃ­. QuedarÃ¡n pendientes la fachada de la Gloria y la polÃ©mica escalinata, cuyo desarrollo afectarÃ­a a dos manzanas del Eixample. El templo recibiÃ³ 4,7 millones de visitantes el aÃ±o pasado.",
      "The Construction Board confirms the monumental cross will be raised to coincide with the centenary of GaudÃ­\u2019s death. Still pending are the Glory faÃ§ade and the controversial grand staircase, whose construction would affect two Eixample blocks. The temple welcomed 4.7 million visitors last year.",
      "La Junta Constructora confirma que la creu monumental s\u2019hissarÃ  coincidint amb el centenari de la mort de GaudÃ­. Quedaran pendents la faÃ§ana de la GlÃ²ria i la polÃ¨mica escalinata, el desenvolupament de la qual afectaria dues illes de l\u2019Eixample. El temple va rebre 4,7 milions de visitants l\u2019any passat.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Consenso en el hito histÃ³rico y divisiÃ³n total en la escalinata: los medios culturales piden completar la visiÃ³n de GaudÃ­ y los vecinales defienden las 3.000 familias afectadas.",
        "Consensus on the historic milestone, total division on the staircase: cultural outlets want GaudÃ­\u2019s vision completed while neighbourhood media defend the 3,000 affected families.",
        "Consens en la fita histÃ²rica i divisiÃ³ total en l\u2019escalinata: els mitjans culturals demanen completar la visiÃ³ de GaudÃ­ i els veÃ¯nals defensen les 3.000 famÃ­lies afectades.",
      ),
      perspectives: [
        {
          source: "La Vanguardia",
    sourceUrl: "https://www.lavanguardia.com",
          tone: "positive",
          text: m(
            "Un hito de ingenierÃ­a y fe que corona 144 aÃ±os de obra.",
            "An engineering and faith milestone crowning 144 years of work.",
            "Una fita d\u2019enginyeria i fe que corona 144 anys d\u2019obra.",
          ),
        },
        {
          source: "BetevÃ©",
          tone: "neutral",
          text: m(
            "Recoge la incertidumbre de los vecinos de la calle Mallorca.",
            "Captures the uncertainty of Mallorca street residents.",
            "Recull la incertesa dels veÃ¯ns del carrer Mallorca.",
          ),
        },
        {
          source: "El PaÃ­s",
          tone: "critical",
          text: m(
            "La escalinata exige expropiar hogares: patrimonio contra vecindario.",
            "The staircase demands expropriating homes: heritage versus neighbourhood.",
            "L\u2019escalinata exigeix expropiar llars: patrimoni contra veÃ¯nat.",
          ),
        },
      ],
      opinion: m(
        "Culminar la torre es motivo de orgullo colectivo, pero serÃ­amos hipÃ³critas si ignoramos el elefante en la habitaciÃ³n: la escalinata de la Gloria, tal como estÃ¡ planteada, es urbanÃ­sticamente indefendible. GaudÃ­ diseÃ±Ã³ para la Barcelona de 1915, no para expulsar a 3.000 vecinos en 2026. La Junta debe explorar alternativas arquitectÃ³nicas serias. El genio se honra con creatividad, no con desahucios.",
        "Completing the tower is cause for collective pride, but we would be hypocrites to ignore the elephant in the room: the Glory staircase, as currently planned, is indefensible urban policy. GaudÃ­ designed for the Barcelona of 1915, not to displace 3,000 residents in 2026. The Board must explore serious architectural alternatives. You honour genius with creativity, not evictions.",
        "Culminar la torre Ã©s motiu d\u2019orgull colÂ·lectiu, perÃ² serÃ­em hipÃ²crites si ignorem l\u2019elefant a l\u2019habitaciÃ³: l\u2019escalinata de la GlÃ²ria, tal com estÃ  plantejada, Ã©s urbanÃ­sticament indefensable. GaudÃ­ va dissenyar per a la Barcelona de 1915, no per expulsar 3.000 veÃ¯ns el 2026. La Junta ha d\u2019explorar alternatives arquitectÃ²niques serioses. El geni s\u2019honora amb creativitat, no amb desnonaments.",
      ),
    },
  },
  {
    id: "loc-5",
    category: "catalonia",
    region: "local",
    image: img("1460925895917-adf4e565016f"),
    source: "324.cat",
    sourceUrl: "https://www.ccma.cat/324",
    author: "PolÃ­tica",
    published: hoursAgo(9),
    readTime: 3,
    views: 18900,
    comments: 134,
    title: m(
      "La Generalitat estrena portal digital Ãºnico: 400 trÃ¡mites sin cita previa",
      "Catalan government launches single digital portal: 400 procedures without appointment",
      "La Generalitat estrena portal digital Ãºnic: 400 trÃ mits sense cita prÃ¨via",
    ),
    summary: m(
      "El nuevo portal unifica 14 webs departamentales e incorpora identificaciÃ³n con idCAT MÃ³vil y asistente inteligente en tres idiomas.",
      "The new portal unifies 14 departmental websites and adds idCAT Mobile login plus a smart assistant in three languages.",
      "El nou portal unifica 14 webs departamentals i incorpora identificaciÃ³ amb idCAT MÃ²bil i assistent intelÂ·ligent en tres idiomes.",
    ),
    content: m(
      "La plataforma permite completar desde la renovaciÃ³n del tÃ­tulo de familia numerosa hasta ayudas al alquiler Ã­ntegramente en lÃ­nea. El Govern estima un ahorro de 40 millones anuales en gestiÃ³n administrativa. Las oficinas presenciales mantendrÃ¡n atenciÃ³n prioritaria para mayores de 65 aÃ±os y colectivos vulnerables.",
      "The platform lets citizens complete everything from large-family card renewals to rental aid applications entirely online. The government estimates â‚¬40 million in annual administrative savings. Physical offices will keep priority service for over-65s and vulnerable groups.",
      "La plataforma permet completar des de la renovaciÃ³ del tÃ­tol de famÃ­lia nombrosa fins a ajuts al lloguer Ã­ntegrament en lÃ­nia. El Govern estima un estalvi de 40 milions anuals en gestiÃ³ administrativa. Les oficines presencials mantindran atenciÃ³ prioritÃ ria per a majors de 65 anys i colÂ·lectius vulnerables.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura mayormente favorable: se valora la unificaciÃ³n, pero varios medios recuerdan el historial de caÃ­das de los sistemas informÃ¡ticos de la Generalitat en picos de demanda.",
        "Mostly favourable coverage: unification is praised, but several outlets recall the Generalitat\u2019s history of IT outages under peak demand.",
        "Cobertura majoritÃ riament favorable: es valora la unificaciÃ³, perÃ² diversos mitjans recorden l\u2019historial de caigudes dels sistemes informÃ tics de la Generalitat en pics de demanda.",
      ),
      perspectives: [
        {
          source: "324.cat",
    sourceUrl: "https://www.ccma.cat/324",
          tone: "positive",
          text: m(
            "Fin al peregrinaje entre webs: un solo acceso para todo.",
            "End of the website pilgrimage: one login for everything.",
            "Fi al pelegrinatge entre webs: un sol accÃ©s per a tot.",
          ),
        },
        {
          source: "El Nacional",
          tone: "neutral",
          text: m(
            "La prueba de fuego llegarÃ¡ con las convocatorias masivas de ayudas.",
            "The acid test will come with mass aid application windows.",
            "La prova de foc arribarÃ  amb les convocatÃ²ries massives d\u2019ajuts.",
          ),
        },
        {
          source: "CCOO Catalunya",
          tone: "critical",
          text: m(
            "Alerta de brecha digital para quien no domina el entorno mÃ³vil.",
            "Warns of a digital divide for those not fluent in mobile tools.",
            "Alerta de bretxa digital per a qui no domina l\u2019entorn mÃ²bil.",
          ),
        },
      ],
      opinion: m(
        "Digitalizar la administraciÃ³n es de sentido comÃºn y llega tarde. Pero cuidado con la autocomplacencia: un portal bonito no arregla procesos absurdos. Si detrÃ¡s del formulario digital sigue habiendo tres meses de espera para una resoluciÃ³n, solo habremos digitalizado la frustraciÃ³n. El Govern debe publicar mÃ©tricas de tiempos de resoluciÃ³n en abierto. Transparencia o maquillaje: que los datos decidan.",
        "Digitalising government is common sense and arrives late. But beware complacency: a pretty portal doesn\u2019t fix absurd processes. If behind the digital form there are still three months of waiting for a resolution, we\u2019ve merely digitalised frustration. The government must publish resolution-time metrics openly. Transparency or window dressing: let the data decide.",
        "Digitalitzar l\u2019administraciÃ³ Ã©s de sentit comÃº i arriba tard. PerÃ² compte amb l\u2019autocomplaenÃ§a: un portal bonic no arregla processos absurds. Si darrere del formulari digital continua havent-hi tres mesos d\u2019espera per a una resoluciÃ³, nomÃ©s haurem digitalitzat la frustraciÃ³. El Govern ha de publicar mÃ¨triques de temps de resoluciÃ³ en obert. TransparÃ¨ncia o maquillatge: que les dades decideixin.",
      ),
    },
  },
  {
    id: "loc-6",
    category: "catalonia",
    region: "local",
    image: img("1488646953014-85cb44e25828"),
    source: "TV3",
    sourceUrl: "https://www.ccma.cat/tv3",
    author: "Economia",
    published: hoursAgo(11),
    readTime: 4,
    views: 34500,
    comments: 421,
    title: m(
      "CataluÃ±a supera los 12 millones de turistas y bate su rÃ©cord histÃ³rico",
      "Catalonia tops 12 million tourists, smashing its all-time record",
      "Catalunya supera els 12 milions de turistes i bat el seu rÃ¨cord histÃ²ric",
    ),
    summary: m(
      "El gasto medio por visitante crece un 9%, pero los municipios costeros reclaman una tasa turÃ­stica mÃ¡s alta para sostener servicios.",
      "Average spend per visitor rises 9%, but coastal towns demand a higher tourist tax to sustain services.",
      "La despesa mitjana per visitant creix un 9%, perÃ² els municipis costaners reclamen una taxa turÃ­stica mÃ©s alta per sostenir serveis.",
    ),
    content: m(
      "La temporada cierra con ocupaciones del 92% en la Costa Brava y rÃ©cord de visitantes en el Pirineu. El sector celebra las cifras mientras crece el debate sobre la masificaciÃ³n: Sitges y CadaquÃ©s estudian limitar los pisos turÃ­sticos. El gasto total supera los 14.000 millones de euros.",
      "The season closes with 92% occupancy on the Costa Brava and record visitors in the Pyrenees. The industry celebrates while the overcrowding debate grows: Sitges and CadaquÃ©s are studying tourist-flat caps. Total spending exceeds â‚¬14 billion.",
      "La temporada tanca amb ocupacions del 92% a la Costa Brava i rÃ¨cord de visitants al Pirineu. El sector celebra les xifres mentre creix el debat sobre la massificaciÃ³: Sitges i CadaquÃ©s estudien limitar els pisos turÃ­stics. La despesa total supera els 14.000 milions d\u2019euros.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "La prensa econÃ³mica celebra el rÃ©cord; la local y la ambiental preguntan a quÃ© precio. Coinciden en que el modelo actual toca techo y hay que elegir entre volumen y valor.",
        "Business press celebrates the record; local and environmental outlets ask at what cost. All agree the current model has peaked and a choice between volume and value is due.",
        "La premsa econÃ²mica celebra el rÃ¨cord; la local i l\u2019ambiental pregunten a quin preu. Coincideixen que el model actual toca sostre i cal triar entre volum i valor.",
      ),
      perspectives: [
        {
          source: "ExpansiÃ³n",
          tone: "positive",
          text: m(
            "14.000Mâ‚¬ que sostienen 400.000 empleos: el motor funciona.",
            "â‚¬14bn sustaining 400,000 jobs: the engine works.",
            "14.000Mâ‚¬ que sostenen 400.000 llocs de feina: el motor funciona.",
          ),
        },
        {
          source: "ARA",
    sourceUrl: "https://www.ara.cat",
          tone: "critical",
          text: m(
            "Los residentes de la costa ya no pueden pagar sus alquileres.",
            "Coastal residents can no longer afford their rents.",
            "Els residents de la costa ja no poden pagar els seus lloguers.",
          ),
        },
        {
          source: "TV3",
    sourceUrl: "https://www.ccma.cat/tv3",
          tone: "neutral",
          text: m(
            "Los alcaldes piden que la tasa revierta Ã­ntegra en los municipios.",
            "Mayors ask for the tax to fully revert to municipalities.",
            "Els alcaldes demanen que la taxa reverteixi Ã­ntegra als municipis.",
          ),
        },
      ],
      opinion: m(
        "Celebrar rÃ©cords de volumen en 2026 es celebrar el problema. CataluÃ±a no necesita mÃ¡s turistas: necesita mejores ingresos por turista y menos externalidades. La tasa turÃ­stica actual es ridÃ­cula comparada con Ãmsterdam o Venecia; duplicarla no espantarÃ¡ a nadie y financiarÃ¡ vivienda y limpieza. Quien agita el fantasma de la competitividad ignora que la Costa Brava se vende sola. El valiente aquÃ­ es quien pone lÃ­mites, no quien bate rÃ©cords.",
        "Celebrating volume records in 2026 is celebrating the problem. Catalonia doesn\u2019t need more tourists: it needs better revenue per tourist and fewer externalities. The current tourist tax is laughable next to Amsterdam or Venice; doubling it will scare no one and will fund housing and street cleaning. Those waving the competitiveness bogeyman ignore that the Costa Brava sells itself. The brave move here is setting limits, not breaking records.",
        "Celebrar rÃ¨cords de volum el 2026 Ã©s celebrar el problema. Catalunya no necessita mÃ©s turistes: necessita mÃ©s ingressos per turista i menys externalitats. La taxa turÃ­stica actual Ã©s ridÃ­cula comparada amb Amsterdam o VenÃ¨cia; duplicar-la no espantarÃ  ningÃº i finanÃ§arÃ  habitatge i neteja. Qui agita el fantasma de la competitivitat ignora que la Costa Brava es ven sola. El valent aquÃ­ Ã©s qui posa lÃ­mits, no qui bat rÃ¨cords.",
      ),
    },
  },
  {
    id: "loc-7",
    category: "catalonia",
    region: "local",
    image: img("1439066615861-d1af74d74000"),
    source: "ARA",
    sourceUrl: "https://www.ara.cat",
    author: "Medi Ambient",
    published: hoursAgo(14),
    readTime: 4,
    views: 41200,
    comments: 538,
    title: m(
      "Los embalses catalanes alcanzan el 74%: adiÃ³s oficial a la emergencia por sequÃ­a",
      "Catalan reservoirs hit 74%: official end to the drought emergency",
      "Els embassaments catalans arriben al 74%: adeu oficial a l\u2019emergÃ¨ncia per sequera",
    ),
    summary: m(
      "Tras el otoÃ±o mÃ¡s lluvioso en 15 aÃ±os, el Govern levanta las restricciones pero mantiene la inversiÃ³n en desalinizadoras.",
      "After the wettest autumn in 15 years, the government lifts restrictions but keeps investing in desalination.",
      "DesprÃ©s de la tardor mÃ©s plujosa en 15 anys, el Govern aixeca les restriccions perÃ² mantÃ© la inversiÃ³ en dessalinitzadores.",
    ),
    content: m(
      "Sau y Susqueda triplican sus reservas respecto a hace dos aÃ±os. La ACA confirma que las desalinizadoras de Tordera II y Foix siguen adelante como seguro climÃ¡tico. Los regantes recuperan el 100% de sus dotaciones y los expertos piden no relajar la cultura del ahorro conquistada durante la crisis.",
      "Sau and Susqueda have tripled their reserves compared to two years ago. The Catalan Water Agency confirms the Tordera II and Foix desalination plants will proceed as climate insurance. Irrigators recover 100% of their allocations while experts urge keeping the water-saving culture won during the crisis.",
      "Sau i Susqueda tripliquen les seves reserves respecte fa dos anys. L\u2019ACA confirma que les dessalinitzadores de Tordera II i Foix segueixen endavant com a asseguranÃ§a climÃ tica. Els regants recuperen el 100% de les dotacions i els experts demanen no relaxar la cultura de l\u2019estalvi conquerida durant la crisi.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Alivio generalizado con advertencia unÃ¡nime: todos los medios subrayan que la prÃ³xima sequÃ­a es cuestiÃ³n de tiempo y las infraestructuras deben terminarse igualmente.",
        "Widespread relief with a unanimous warning: every outlet stresses the next drought is a matter of time and the infrastructure must be finished regardless.",
        "Alleujament generalitzat amb advertÃ¨ncia unÃ nime: tots els mitjans subratllen que la propera sequera Ã©s qÃ¼estiÃ³ de temps i les infraestructures s\u2019han d\u2019acabar igualment.",
      ),
      perspectives: [
        {
          source: "ARA",
    sourceUrl: "https://www.ara.cat",
          tone: "positive",
          text: m(
            "La gestiÃ³n de la crisis deja lecciones y hÃ¡bitos valiosos.",
            "Crisis management leaves valuable lessons and habits.",
            "La gestiÃ³ de la crisi deixa lliÃ§ons i hÃ bits valuosos.",
          ),
        },
        {
          source: "La Vanguardia",
    sourceUrl: "https://www.lavanguardia.com",
          tone: "neutral",
          text: m(
            "El consumo urbano sigue un 12% por debajo del nivel pre-crisis.",
            "Urban consumption remains 12% below pre-crisis levels.",
            "El consum urbÃ  segueix un 12% per sota del nivell pre-crisi.",
          ),
        },
        {
          source: "UniÃ³ de Pagesos",
          tone: "critical",
          text: m(
            "El campo pagÃ³ la sequÃ­a primero y cobra la recuperaciÃ³n Ãºltimo.",
            "Farmers paid for the drought first and collect the recovery last.",
            "El camp va pagar la sequera primer i cobra la recuperaciÃ³ Ãºltim.",
          ),
        },
      ],
      opinion: m(
        "Que llueva no es un plan hÃ­drico. CataluÃ±a ha tenido suerte, no Ã©xito: la emergencia se levantÃ³ porque el cielo cooperÃ³, no porque el sistema estÃ© preparado para el clima que viene. Detener ahora las desalinizadoras serÃ­a una negligencia histÃ³rica. Y una deuda pendiente clama al cielo: el precio del agua debe reflejar su escasez real, con tramos que protejan el consumo bÃ¡sico y penalicen el despilfarro. Quien no lo defienda hoy serÃ¡ responsable maÃ±ana.",
        "Rain is not a water plan. Catalonia got lucky, not successful: the emergency lifted because the sky cooperated, not because the system is ready for the climate ahead. Halting the desalination plants now would be historic negligence. And one pending debt cries out: water pricing must reflect real scarcity, with brackets protecting basic consumption and punishing waste. Whoever won\u2019t defend that today will be responsible tomorrow.",
        "Que plogui no Ã©s un pla hÃ­dric. Catalunya ha tingut sort, no Ã¨xit: l\u2019emergÃ¨ncia es va aixecar perquÃ¨ el cel va cooperar, no perquÃ¨ el sistema estigui preparat per al clima que ve. Aturar ara les dessalinitzadores seria una negligÃ¨ncia histÃ²rica. I un deute pendent clama al cel: el preu de l\u2019aigua ha de reflectir la seva escassetat real, amb trams que protegeixin el consum bÃ sic i penalitzin el malbaratament. Qui no ho defensi avui en serÃ  responsable demÃ .",
      ),
    },
  },
  {
    id: "loc-8",
    category: "technology",
    region: "local",
    image: img("1518770660439-4636190af475"),
    source: "La Vanguardia",
    sourceUrl: "https://www.lavanguardia.com",
    author: "Tecnologia",
    published: hoursAgo(16),
    readTime: 4,
    views: 27600,
    comments: 189,
    title: m(
      "El 22@ se consolida como hub europeo de IA: 8.000 nuevos empleos tecnolÃ³gicos",
      "The 22@ district cements itself as a European AI hub: 8,000 new tech jobs",
      "El 22@ es consolida com a hub europeu d\u2019IA: 8.000 nous llocs de feina tecnolÃ²gics",
    ),
    summary: m(
      "Tres multinacionales anuncian centros de investigaciÃ³n en Poblenou. Barcelona ya es la cuarta ciudad europea en captaciÃ³n de talento tech.",
      "Three multinationals announce research centres in Poblenou. Barcelona is now Europe\u2019s fourth city for tech talent attraction.",
      "Tres multinacionals anuncien centres de recerca al Poblenou. Barcelona ja Ã©s la quarta ciutat europea en captaciÃ³ de talent tech.",
    ),
    content: m(
      "Los nuevos centros se especializarÃ¡n en visiÃ³n por computador, modelos de lenguaje multilingÃ¼es y robÃ³tica aplicada a logÃ­stica. El Mobile World Capital estima que el distrito alcanzarÃ¡ los 130.000 trabajadores en 2028. Los sindicatos piden que el crecimiento venga acompaÃ±ado de convenios que eviten la precarizaciÃ³n del sector.",
      "The new centres will specialise in computer vision, multilingual language models and logistics robotics. Mobile World Capital estimates the district will reach 130,000 workers by 2028. Unions ask that growth comes with collective agreements preventing precarious conditions in the sector.",
      "Els nous centres s\u2019especialitzaran en visiÃ³ per computador, models de llenguatge multilingÃ¼es i robÃ²tica aplicada a logÃ­stica. El Mobile World Capital estima que el districte arribarÃ  als 130.000 treballadors el 2028. Els sindicats demanen que el creixement vagi acompanyat de convenis que evitin la precaritzaciÃ³ del sector.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura entusiasta en lo econÃ³mico con una nota comÃºn de cautela: el Ã©xito del 22@ presiona la vivienda del Poblenou y el talento local no deberÃ­a quedar fuera.",
        "Enthusiastic economic coverage with one shared caution: 22@\u2019s success pressures Poblenou housing and local talent must not be priced out.",
        "Cobertura entusiasta en l\u2019Ã mbit econÃ²mic amb una nota comuna de cautela: l\u2019Ã¨xit del 22@ pressiona l\u2019habitatge del Poblenou i el talent local no hauria de quedar fora.",
      ),
      perspectives: [
        {
          source: "La Vanguardia",
    sourceUrl: "https://www.lavanguardia.com",
          tone: "positive",
          text: m(
            "Barcelona compite ya con Ãmsterdam y BerlÃ­n por el talento IA.",
            "Barcelona now rivals Amsterdam and Berlin for AI talent.",
            "Barcelona competeix ja amb Amsterdam i BerlÃ­n pel talent IA.",
          ),
        },
        {
          source: "TechCrunch",
          tone: "positive",
          text: m(
            "Salarios competitivos y calidad de vida: la fÃ³rmula funciona.",
            "Competitive salaries plus quality of life: the formula works.",
            "Salaris competitius i qualitat de vida: la fÃ³rmula funciona.",
          ),
        },
        {
          source: "El PeriÃ³dico",
          tone: "critical",
          text: m(
            "Los vecinos del Poblenou ven subir alquileres al ritmo de las oficinas.",
            "Poblenou residents watch rents climb at office-space pace.",
            "Els veÃ¯ns del Poblenou veuen pujar lloguers al ritme de les oficines.",
          ),
        },
      ],
      opinion: m(
        "Barcelona ha hecho algo muy difÃ­cil: convertirse en polo tecnolÃ³gico sin vender su alma... todavÃ­a. El riesgo real no es crecer, es crecer como San Francisco: una economÃ­a brillante sobre una ciudad inhabitable. La receta es conocida y exige valentÃ­a: vivienda asequible vinculada a cada licencia de oficinas, formaciÃ³n tecnolÃ³gica masiva en la escuela pÃºblica y contratos dignos. El talento global es bienvenido; la gentrificaciÃ³n exprÃ©s, no.",
        "Barcelona has pulled off something rare: becoming a tech hub without selling its soul... yet. The real risk isn\u2019t growing â€” it\u2019s growing like San Francisco: a brilliant economy atop an unlivable city. The recipe is known and takes courage: affordable housing tied to every office permit, massive tech education in public schools, and decent contracts. Global talent is welcome; express gentrification is not.",
        "Barcelona ha fet una cosa molt difÃ­cil: convertir-se en pol tecnolÃ²gic sense vendre l\u2019Ã nima... encara. El risc real no Ã©s crÃ©ixer, Ã©s crÃ©ixer com San Francisco: una economia brillant sobre una ciutat inhabitable. La recepta Ã©s coneguda i exigeix valentia: habitatge assequible vinculat a cada llicÃ¨ncia d\u2019oficines, formaciÃ³ tecnolÃ²gica massiva a l\u2019escola pÃºblica i contractes dignes. El talent global Ã©s benvingut; la gentrificaciÃ³ exprÃ©s, no.",
      ),
    },
  },
  {
    id: "loc-9",
    category: "barcelona",
    region: "local",
    image: img("1544551763-46a013bb70d5"),
    source: "El PeriÃ³dico",
    author: "Gran Barcelona",
    published: hoursAgo(20),
    readTime: 4,
    views: 38700,
    comments: 673,
    title: m(
      "Barcelona limitarÃ¡ los cruceros: mÃ¡ximo cinco escalas diarias desde abril",
      "Barcelona to cap cruise ships: maximum five daily calls from April",
      "Barcelona limitarÃ  els creuers: mÃ xim cinc escales diÃ ries des de l\u2019abril",
    ),
    summary: m(
      "El acuerdo Puerto-Ayuntamiento reducirÃ¡ un 20% los pasajeros en dÃ­as punta y cerrarÃ¡ la terminal norte al turismo de excursiÃ³n.",
      "The Port-City Hall deal will cut peak-day passengers by 20% and close the north terminal to excursion tourism.",
      "L\u2019acord Port-Ajuntament reduirÃ  un 20% els passatgers en dies punta i tancarÃ  la terminal nord al turisme d\u2019excursiÃ³.",
    ),
    content: m(
      "La medida responde a los picos de 40.000 cruceristas en un solo dÃ­a registrados el pasado verano. Las navieras critican la decisiÃ³n y amenazan con derivar escalas a Marsella y GÃ©nova. Los comerciantes de la Rambla, divididos: los restauradores temen perder ingresos y los vecinos celebran recuperar espacio pÃºblico.",
      "The measure responds to last summer\u2019s peaks of 40,000 cruise passengers in a single day. Cruise lines criticise the decision and threaten to divert calls to Marseille and Genoa. Rambla merchants are split: restaurateurs fear losing revenue while residents celebrate reclaiming public space.",
      "La mesura respon als pics de 40.000 creueristes en un sol dia registrats l\u2019estiu passat. Les navilieres critiquen la decisiÃ³ i amenacen de derivar escales a Marsella i GÃ¨nova. Els comerciants de la Rambla, dividits: els restauradors temen perdre ingressos i els veÃ¯ns celebren recuperar espai pÃºblic.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa internacional lo lee como parte de la ola europea anti-masificaciÃ³n; la local debate el equilibrio entre empleo portuario e habitabilidad del centro.",
        "International press frames it within Europe\u2019s anti-overcrowding wave; local media debate the balance between port jobs and a livable city centre.",
        "La premsa internacional ho llegeix com a part de l\u2019onada europea anti-massificaciÃ³; la local debat l\u2019equilibri entre ocupaciÃ³ portuÃ ria i habitabilitat del centre.",
      ),
      perspectives: [
        {
          source: "The Guardian",
          tone: "positive",
          text: m(
            "Barcelona lidera la respuesta europea al exceso de cruceros.",
            "Barcelona leads Europe\u2019s answer to cruise excess.",
            "Barcelona lidera la resposta europea a l\u2019excÃ©s de creuers.",
          ),
        },
        {
          source: "ExpansiÃ³n",
          tone: "critical",
          text: m(
            "El puerto arriesga 200Mâ‚¬ anuales y liderazgo mediterrÃ¡neo.",
            "The port risks â‚¬200m a year and Mediterranean leadership.",
            "El port arrisca 200Mâ‚¬ anuals i lideratge mediterrani.",
          ),
        },
        {
          source: "BetevÃ©",
          tone: "neutral",
          text: m(
            "Ciutat Vella respira; la restauraciÃ³n pide plan de transiciÃ³n.",
            "Ciutat Vella breathes; hospitality asks for a transition plan.",
            "Ciutat Vella respira; la restauraciÃ³ demana pla de transiciÃ³.",
          ),
        },
      ],
      opinion: m(
        "Cinco escalas diarias siguen siendo muchas, pero la direcciÃ³n es la correcta y hay que decirlo sin complejos: el crucerismo de excursiÃ³n aporta lo mÃ­nimo y satura lo mÃ¡ximo. Ocho horas de visita, comida a bordo y una ciudad convertida en decorado. Las amenazas de las navieras son el mejor sÃ­ntoma de que la medida funciona. Marsella puede quedarse ese modelo; Barcelona debe competir por el visitante que duerme, come y vuelve.",
        "Five daily calls is still a lot, but the direction is right and it must be said plainly: excursion cruise tourism contributes the least and saturates the most. Eight-hour visits, meals on board, and a city reduced to a stage set. The cruise lines\u2019 threats are the best evidence the measure works. Marseille can keep that model; Barcelona should compete for the visitor who sleeps, dines and returns.",
        "Cinc escales diÃ ries continuen sent moltes, perÃ² la direcciÃ³ Ã©s la correcta i cal dir-ho sense complexos: el creuerisme d\u2019excursiÃ³ aporta el mÃ­nim i satura el mÃ xim. Vuit hores de visita, menjar a bord i una ciutat convertida en decorat. Les amenaces de les navilieres sÃ³n el millor sÃ­mptoma que la mesura funciona. Marsella pot quedar-se aquest model; Barcelona ha de competir pel visitant que dorm, menja i torna.",
      ),
    },
  },
  {
    id: "loc-10",
    category: "lifestyle",
    region: "local",
    image: img("1414235077428-338989a2e8c0"),
    source: "Time Out BCN",
    sourceUrl: "https://www.timeout.cat",
    author: "Gastronomia",
    published: hoursAgo(26),
    readTime: 3,
    views: 22100,
    comments: 156,
    title: m(
      "CataluÃ±a suma 6 nuevas estrellas Michelin y consolida su liderazgo gastronÃ³mico",
      "Catalonia gains 6 new Michelin stars, cementing its culinary leadership",
      "Catalunya suma 6 noves estrelles Michelin i consolida el seu lideratge gastronÃ²mic",
    ),
    summary: m(
      "Dos restaurantes de comarcas de interior logran su primera estrella. La regiÃ³n alcanza las 71 estrellas, lÃ­der del sur de Europa.",
      "Two inland-county restaurants earn their first star. The region reaches 71 stars, leading southern Europe.",
      "Dos restaurants de comarques d\u2019interior aconsegueixen la seva primera estrella. La regiÃ³ arriba a les 71 estrelles, lÃ­der del sud d\u2019Europa.",
    ),
    content: m(
      "La gala reconoce especialmente la cocina de proximidad: cinco de los seis nuevos galardonados trabajan con producto de menos de 50 km. La guÃ­a destaca la nueva generaciÃ³n de chefs formados en las escuelas catalanas. El sector confÃ­a en que el reconocimiento desestacionalice el turismo hacia el interior.",
      "The gala especially rewards locavore cuisine: five of the six new laureates work with produce sourced within 50 km. The guide highlights the new generation of chefs trained in Catalan schools. The industry hopes the recognition will spread tourism inland and off-season.",
      "La gala reconeix especialment la cuina de proximitat: cinc dels sis nous guardonats treballen amb producte de menys de 50 km. La guia destaca la nova generaciÃ³ de xefs formats a les escoles catalanes. El sector confia que el reconeixement desestacionalitzi el turisme cap a l\u2019interior.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura unÃ¡nimemente positiva. El matiz interesante: varios crÃ­ticos celebran que el foco se desplace de Barcelona hacia las comarcas, repartiendo valor por el territorio.",
        "Unanimously positive coverage. The interesting nuance: several critics welcome the spotlight shifting from Barcelona to the counties, spreading value across the territory.",
        "Cobertura unÃ nimement positiva. El matÃ­s interessant: diversos crÃ­tics celebren que el focus es desplaci de Barcelona cap a les comarques, repartint valor pel territori.",
      ),
      perspectives: [
        {
          source: "Time Out BCN",
    sourceUrl: "https://www.timeout.cat",
          tone: "positive",
          text: m(
            "La despensa catalana vive su mejor momento creativo.",
            "The Catalan pantry is living its best creative moment.",
            "El rebost catalÃ  viu el seu millor moment creatiu.",
          ),
        },
        {
          source: "El PaÃ­s Gastro",
          tone: "positive",
          text: m(
            "El relevo generacional estÃ¡ asegurado y habla catalÃ¡n.",
            "The generational handover is secured and speaks Catalan.",
            "El relleu generacional estÃ  assegurat i parla catalÃ .",
          ),
        },
        {
          source: "ARA",
    sourceUrl: "https://www.ara.cat",
          tone: "neutral",
          text: m(
            "El reto: que la estrella no dispare precios fuera del alcance local.",
            "The challenge: stars mustn\u2019t push prices beyond local reach.",
            "El repte: que l\u2019estrella no dispari preus fora de l\u2019abast local.",
          ),
        },
      ],
      opinion: m(
        "Las 71 estrellas no son casualidad: son el fruto de tres dÃ©cadas de escuelas de hostelerÃ­a pÃºblicas, producto excepcional y una cultura que se toma la mesa en serio. La lecciÃ³n trasciende los fogones: cuando se invierte en formaciÃ³n y territorio, el retorno llega. Ahora bien, la alta cocina no puede ser el Ã¡rbol que tape el bosque: el verdadero patrimonio es la fonda de menÃº digno. Protejamos ambas o perderemos las dos.",
        "Those 71 stars are no accident: they are the fruit of three decades of public hospitality schools, exceptional produce and a culture that takes the table seriously. The lesson transcends kitchens: invest in training and territory and returns follow. That said, haute cuisine must not be the tree hiding the forest: the true heritage is the honest set-menu tavern. Protect both or lose both.",
        "Les 71 estrelles no sÃ³n casualitat: sÃ³n el fruit de tres dÃ¨cades d\u2019escoles d\u2019hostaleria pÃºbliques, producte excepcional i una cultura que es pren la taula seriosament. La lliÃ§Ã³ transcendeix els fogons: quan s\u2019inverteix en formaciÃ³ i territori, el retorn arriba. Ara bÃ©, l\u2019alta cuina no pot ser l\u2019arbre que tapi el bosc: el veritable patrimoni Ã©s la fonda de menÃº digne. Protegim totes dues o perdrem les dues.",
      ),
    },
  },

  // ============================================================
  // NATIONAL â€” Spain
  // ============================================================
  {
    id: "nat-1",
    category: "finance",
    region: "national",
    image: img("1454496522488-7a8e488e8606"),
    source: "El PaÃ­s",
    author: "EconomÃ­a",
    published: hoursAgo(4),
    readTime: 5,
    views: 55200,
    comments: 634,
    title: m(
      "EspaÃ±a crece un 0,7% trimestral y lidera la eurozona por sexto trimestre consecutivo",
      "Spain grows 0.7% for the quarter, leading the eurozone for a sixth straight quarter",
      "Espanya creix un 0,7% trimestral i lidera l\u2019eurozona per sisÃ¨ trimestre consecutiu",
    ),
    summary: m(
      "El empleo marca rÃ©cord con 22,1 millones de afiliados, pero la productividad por hora sigue estancada respecto a Alemania y Francia.",
      "Employment hits a record 22.1 million contributors, but productivity per hour remains stalled versus Germany and France.",
      "L\u2019ocupaciÃ³ marca rÃ¨cord amb 22,1 milions d\u2019afiliats, perÃ² la productivitat per hora segueix estancada respecte d\u2019Alemanya i FranÃ§a.",
    ),
    content: m(
      "El consumo interno y el turismo sostienen el avance, con la inversiÃ³n empresarial repuntando por fin un 2,1%. Los servicios tecnolÃ³gicos ya aportan mÃ¡s al PIB que la construcciÃ³n, un cambio estructural histÃ³rico. El Banco de EspaÃ±a advierte del riesgo de complacencia: la deuda pÃºblica sigue por encima del 100% del PIB.",
      "Domestic consumption and tourism drive the advance, with business investment finally rebounding 2.1%. Tech services now contribute more to GDP than construction â€” a historic structural shift. The Bank of Spain warns against complacency: public debt remains above 100% of GDP.",
      "El consum intern i el turisme sostenen l\u2019avenÃ§, amb la inversiÃ³ empresarial repuntant per fi un 2,1%. Els serveis tecnolÃ²gics ja aporten mÃ©s al PIB que la construcciÃ³, un canvi estructural histÃ²ric. El Banc d\u2019Espanya adverteix del risc de complaenÃ§a: el deute pÃºblic segueix per sobre del 100% del PIB.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Los medios coinciden en el dato positivo pero divergen en la lectura: unos ven un modelo de Ã©xito, otros un crecimiento a base de empleo barato que la productividad desmiente.",
        "Outlets agree on the positive number but split on the reading: some see a success model, others growth built on cheap labour that productivity figures betray.",
        "Els mitjans coincideixen en la dada positiva perÃ² divergeixen en la lectura: uns hi veuen un model d\u2019Ã¨xit, altres un creixement a base d\u2019ocupaciÃ³ barata que la productivitat desmenteix.",
      ),
      perspectives: [
        {
          source: "El PaÃ­s",
          tone: "positive",
          text: m(
            "EspaÃ±a demuestra que crecer y crear empleo no son incompatibles.",
            "Spain proves growth and job creation aren\u2019t incompatible.",
            "Espanya demostra que crÃ©ixer i crear ocupaciÃ³ no sÃ³n incompatibles.",
          ),
        },
        {
          source: "Financial Times",
          tone: "positive",
          text: m(
            '"La estrella inesperada de Europa": inmigraciÃ³n y servicios explican el milagro.',
            '"Europe\u2019s unexpected star": immigration and services explain the miracle.',
            '"L\u2019estrella inesperada d\u2019Europa": immigraciÃ³ i serveis expliquen el miracle.',
          ),
        },
        {
          source: "ExpansiÃ³n",
          tone: "critical",
          text: m(
            "Sin productividad ni inversiÃ³n en I+D, el liderazgo tiene fecha de caducidad.",
            "Without productivity and R&D investment, the leadership has an expiry date.",
            "Sense productivitat ni inversiÃ³ en R+D, el lideratge tÃ© data de caducitat.",
          ),
        },
      ],
      opinion: m(
        "Seis trimestres liderando Europa merecen reconocimiento, pero conviene no confundir un buen ciclo con un buen modelo. EspaÃ±a crece aÃ±adiendo trabajadores, no haciendo a cada trabajador mÃ¡s productivo, y esa es la diferencia entre correr y avanzar. La asignatura pendiente lleva dÃ©cadas suspendida: I+D al 3% del PIB, formaciÃ³n continua real y empresas con tamaÃ±o para competir. El dÃ­a que el turismo estornude, sabremos de quÃ© estaba hecho este milagro.",
        "Six quarters leading Europe deserve credit, but let\u2019s not confuse a good cycle with a good model. Spain grows by adding workers, not by making each worker more productive â€” and that\u2019s the difference between running and advancing. The pending subject has been failed for decades: R&D at 3% of GDP, real lifelong training, and firms with scale to compete. The day tourism sneezes, we\u2019ll find out what this miracle was made of.",
        "Sis trimestres liderant Europa mereixen reconeixement, perÃ² convÃ© no confondre un bon cicle amb un bon model. Espanya creix afegint treballadors, no fent cada treballador mÃ©s productiu, i aquesta Ã©s la diferÃ¨ncia entre cÃ³rrer i avanÃ§ar. L\u2019assignatura pendent porta dÃ¨cades suspesa: R+D al 3% del PIB, formaciÃ³ contÃ­nua real i empreses amb mida per competir. El dia que el turisme esternudi, sabrem de quÃ¨ estava fet aquest miracle.",
      ),
    },
  },
  {
    id: "nat-2",
    category: "technology",
    region: "national",
    image: img("1552664730-d307ca884978"),
    source: "El EspaÃ±ol",
    author: "Invertia",
    published: hoursAgo(6),
    readTime: 4,
    views: 31800,
    comments: 245,
    title: m(
      "Las startups espaÃ±olas captan 2.400Mâ‚¬ y baten su rÃ©cord de inversiÃ³n anual",
      "Spanish startups raise â‚¬2.4bn, smashing their annual investment record",
      "Les startups espanyoles capten 2.400Mâ‚¬ i baten el seu rÃ¨cord d\u2019inversiÃ³ anual",
    ),
    summary: m(
      "La IA aplicada y la biotecnologÃ­a concentran la mitad de las rondas. Madrid y Barcelona empatan por primera vez en capital captado.",
      "Applied AI and biotech account for half of all rounds. Madrid and Barcelona tie for the first time in capital raised.",
      "La IA aplicada i la biotecnologia concentren la meitat de les rondes. Madrid i Barcelona empaten per primer cop en capital captat.",
    ),
    content: m(
      "El ecosistema suma ya 18 unicornios y, mÃ¡s relevante, 60 empresas por encima de los 100 millones de valoraciÃ³n. Los fondos internacionales protagonizan las grandes rondas mientras el capital nacional domina las fases semilla. El sector reclama agilizar los visados para talento extracomunitario, el principal cuello de botella segÃºn los fundadores.",
      "The ecosystem now counts 18 unicorns and, more tellingly, 60 companies valued above â‚¬100 million. International funds lead the large rounds while domestic capital dominates seed stages. The sector demands faster visas for non-EU talent â€” founders\u2019 top bottleneck.",
      "L\u2019ecosistema suma ja 18 unicorns i, mÃ©s rellevant, 60 empreses per sobre dels 100 milions de valoraciÃ³. Els fons internacionals protagonitzen les grans rondes mentre el capital nacional domina les fases llavor. El sector reclama agilitzar els visats per a talent extracomunitari, el principal coll d\u2019ampolla segons els fundadors.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Optimismo generalizado con un debate de fondo: si el rÃ©cord refleja madurez del ecosistema o simplemente la ola global de inversiÃ³n en IA tocando la costa espaÃ±ola.",
        "Broad optimism with an underlying debate: does the record reflect ecosystem maturity or simply the global AI investment wave reaching Spanish shores?",
        "Optimisme generalitzat amb un debat de fons: si el rÃ¨cord reflecteix maduresa de l\u2019ecosistema o simplement l\u2019onada global d\u2019inversiÃ³ en IA tocant la costa espanyola.",
      ),
      perspectives: [
        {
          source: "El EspaÃ±ol",
          tone: "positive",
          text: m(
            "EspaÃ±a deja de ser promesa: ya es la cuarta plaza europea.",
            "Spain is no longer a promise: it\u2019s Europe\u2019s fourth hub.",
            "Espanya deixa de ser promesa: ja Ã©s la quarta plaÃ§a europea.",
          ),
        },
        {
          source: "Sifted",
          tone: "neutral",
          text: m(
            "Crece el capital, pero las salidas (exits) siguen siendo escasas.",
            "Capital grows, but exits remain scarce.",
            "Creix el capital, perÃ² les sortides (exits) segueixen sent escasses.",
          ),
        },
        {
          source: "Cinco DÃ­as",
          tone: "critical",
          text: m(
            "Sin fondos de pensiones invirtiendo en venture, el techo llegarÃ¡ pronto.",
            "Without pension funds in venture, the ceiling will arrive soon.",
            "Sense fons de pensions invertint en venture, el sostre arribarÃ  aviat.",
          ),
        },
      ],
      opinion: m(
        "El rÃ©cord es real y celebrable, pero el ecosistema espaÃ±ol sigue jugando con una mano atada: el capital institucional nacional â€”pensiones, aseguradorasâ€” apenas toca el venture capital mientras en Francia o Suecia es su columna vertebral. Pedirle al talento que se quede mientras el ahorro del paÃ­s se va a ladrillo y deuda es incoherente. La prÃ³xima reforma pinta sola: incentivos fiscales serios para que el ahorro institucional financie la economÃ­a del conocimiento. Lo demÃ¡s es aplaudir con una mano.",
        "The record is real and worth celebrating, but the Spanish ecosystem still plays one-handed: national institutional capital â€” pensions, insurers â€” barely touches venture capital, while in France or Sweden it is the backbone. Asking talent to stay while the country\u2019s savings flow into bricks and bonds is incoherent. The next reform writes itself: serious tax incentives so institutional savings fund the knowledge economy. Anything else is one-handed applause.",
        "El rÃ¨cord Ã©s real i celebrable, perÃ² l\u2019ecosistema espanyol segueix jugant amb una mÃ  lligada: el capital institucional nacional â€”pensions, asseguradoresâ€” amb prou feines toca el venture capital mentre a FranÃ§a o SuÃ¨cia n\u2019Ã©s la columna vertebral. Demanar al talent que es quedi mentre l\u2019estalvi del paÃ­s se\u2019n va a totxo i deute Ã©s incoherent. La propera reforma s\u2019escriu sola: incentius fiscals seriosos perquÃ¨ l\u2019estalvi institucional financiÃ¯ l\u2019economia del coneixement. La resta Ã©s aplaudir amb una mÃ .",
      ),
    },
  },
  {
    id: "nat-3",
    category: "spain",
    region: "national",
    image: img("1560518883-ce09059eeffa"),
    source: "RTVE",
    sourceUrl: "https://www.rtve.es",
    author: "Nacional",
    published: hoursAgo(8),
    readTime: 6,
    views: 72600,
    comments: 1583,
    title: m(
      "El Congreso debate la nueva ley estatal de vivienda entre protestas en 40 ciudades",
      "Congress debates the new national housing law amid protests in 40 cities",
      "El CongrÃ©s debat la nova llei estatal d\u2019habitatge entre protestes a 40 ciutats",
    ),
    summary: m(
      'La norma propone limitar la compra especulativa y un parque pÃºblico del 20% en 2040. El sector inmobiliario habla de "intervencionismo".',
      'The bill proposes curbing speculative purchases and a 20% public housing stock by 2040. The real estate sector calls it "interventionism".',
      'La norma proposa limitar la compra especulativa i un parc pÃºblic del 20% el 2040. El sector immobiliari parla d\u2019"intervencionisme".',
    ),
    content: m(
      "El texto incluye recargos fiscales a la tercera vivienda en zonas tensionadas, prohibiciÃ³n de compra a no residentes extracomunitarios sin vÃ­nculo y transferencias rÃ©cord para vivienda pÃºblica. Las manifestaciones del fin de semana reunieron a mÃ¡s de 500.000 personas exigiendo medidas mÃ¡s duras. La votaciÃ³n se prevÃ© ajustada y los socios territoriales piden competencias reforzadas.",
      "The text includes tax surcharges on third homes in stressed areas, a ban on purchases by non-resident non-EU buyers without ties, and record transfers for public housing. Weekend demonstrations gathered over 500,000 people demanding tougher measures. The vote is expected to be tight, with regional partners demanding reinforced powers.",
      "El text inclou recÃ rrecs fiscals a la tercera residÃ¨ncia en zones tensionades, prohibiciÃ³ de compra a no residents extracomunitaris sense vincle i transferÃ¨ncies rÃ¨cord per a habitatge pÃºblic. Les manifestacions del cap de setmana van reunir mÃ©s de 500.000 persones exigint mesures mÃ©s dures. La votaciÃ³ es preveu ajustada i els socis territorials demanen competÃ¨ncies reforÃ§ades.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "El tema mÃ¡s polarizado del momento: la prensa conservadora denuncia inseguridad jurÃ­dica, la progresista lo ve insuficiente y la internacional lo enmarca en la crisis europea de vivienda.",
        "The most polarised story of the moment: conservative press decries legal uncertainty, progressive outlets find it insufficient, and international media frame it within Europe\u2019s housing crisis.",
        "El tema mÃ©s polaritzat del moment: la premsa conservadora denuncia inseguretat jurÃ­dica, la progressista ho veu insuficient i la internacional ho emmarca en la crisi europea d\u2019habitatge.",
      ),
      perspectives: [
        {
          source: "ABC",
          tone: "critical",
          text: m(
            "El intervencionismo ahuyentarÃ¡ la inversiÃ³n que construye vivienda.",
            "Interventionism will scare off the investment that builds housing.",
            "L\u2019intervencionisme espantarÃ  la inversiÃ³ que construeix habitatge.",
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
            "EspaÃ±a ensaya lo que media Europa debate: frenar al capital en la vivienda.",
            "Spain tests what half of Europe debates: reining in capital in housing.",
            "Espanya assaja el que mitja Europa debat: frenar el capital en l\u2019habitatge.",
          ),
        },
      ],
      opinion: m(
        "DigÃ¡moslo sin rodeos: EspaÃ±a arrastra cuarenta aÃ±os de polÃ­tica de vivienda fallida, gobierne quien gobierne, y esta ley â€”con sus imperfeccionesâ€” es el primer intento serio de corregir el rumbo. El parque pÃºblico espaÃ±ol es del 2,5% frente al 30% de Viena: esa es la anomalÃ­a, no los topes. Ahora bien, prometer el 20% para 2040 sin blindar la financiaciÃ³n en los presupuestos es firmar un cheque sin fondos. Menos titulares y mÃ¡s grÃºas: se juzgarÃ¡ por las viviendas entregadas, no por las aprobadas.",
        "Let\u2019s say it plainly: Spain drags forty years of failed housing policy, whoever governed, and this law â€” flaws included â€” is the first serious attempt to correct course. Spain\u2019s public stock is 2.5% versus Vienna\u2019s 30%: that is the anomaly, not the caps. That said, promising 20% by 2040 without ring-fencing budget financing is writing a bad cheque. Fewer headlines, more cranes: it will be judged by homes delivered, not bills passed.",
        "Diguem-ho sense embuts: Espanya arrossega quaranta anys de polÃ­tica d\u2019habitatge fallida, governi qui governi, i aquesta llei â€”amb les seves imperfeccionsâ€” Ã©s el primer intent seriÃ³s de corregir el rumb. El parc pÃºblic espanyol Ã©s del 2,5% davant del 30% de Viena: aquesta Ã©s l\u2019anomalia, no els topalls. Ara bÃ©, prometre el 20% per al 2040 sense blindar el finanÃ§ament als pressupostos Ã©s signar un xec sense fons. Menys titulars i mÃ©s grues: es jutjarÃ  pels habitatges lliurats, no pels aprovats.",
      ),
    },
  },
  {
    id: "nat-4",
    category: "science",
    region: "national",
    image: img("1466611653911-95081537e5b7"),
    source: "El Confidencial",
    sourceUrl: "https://www.elconfidencial.com",
    author: "EnergÃ­a",
    published: hoursAgo(10),
    readTime: 4,
    views: 44900,
    comments: 512,
    title: m(
      "EspaÃ±a genera el 62% de su electricidad con renovables y marca un hito europeo",
      "Spain generates 62% of its electricity from renewables, setting a European milestone",
      "Espanya genera el 62% de la seva electricitat amb renovables i marca una fita europea",
    ),
    summary: m(
      "La fotovoltaica supera por primera vez a la eÃ³lica como primera fuente. El reto pendiente: almacenamiento y precios negativos al mediodÃ­a.",
      "Solar PV overtakes wind as the top source for the first time. The pending challenge: storage and negative midday prices.",
      "La fotovoltaica supera per primer cop l\u2019eÃ²lica com a primera font. El repte pendent: emmagatzematge i preus negatius al migdia.",
    ),
    content: m(
      "Red ElÃ©ctrica confirma que la nueva potencia solar instalada creciÃ³ un 28% en un aÃ±o. Las horas con precios negativos se han triplicado, evidenciando la urgencia de baterÃ­as y bombeo hidrÃ¡ulico. La industria electrointensiva empieza a relocalizarse en EspaÃ±a atraÃ­da por la energÃ­a barata, con tres gigafactorÃ­as anunciadas este aÃ±o.",
      "The grid operator confirms newly installed solar capacity grew 28% in a year. Hours with negative prices have tripled, underlining the urgency of batteries and pumped hydro. Energy-intensive industry is starting to relocate to Spain drawn by cheap power, with three gigafactories announced this year.",
      "Red ElÃ©ctrica confirma que la nova potÃ¨ncia solar instalÂ·lada va crÃ©ixer un 28% en un any. Les hores amb preus negatius s\u2019han triplicat, evidenciant la urgÃ¨ncia de bateries i bombament hidrÃ ulic. La indÃºstria electrointensiva comenÃ§a a relocalitzar-se a Espanya atreta per l\u2019energia barata, amb tres gigafactories anunciades enguany.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Consenso tÃ©cnico inusual: todos los medios celebran el hito y todos seÃ±alan el mismo talÃ³n de Aquiles, la falta de almacenamiento y de demanda industrial que aproveche los excedentes.",
        "Unusual technical consensus: every outlet celebrates the milestone and every outlet flags the same Achilles heel â€” lack of storage and of industrial demand to absorb the surplus.",
        "Consens tÃ¨cnic inusual: tots els mitjans celebren la fita i tots assenyalen el mateix talÃ³ d\u2019AquilÂ·les, la manca d\u2019emmagatzematge i de demanda industrial que aprofiti els excedents.",
      ),
      perspectives: [
        {
          source: "El Confidencial",
    sourceUrl: "https://www.elconfidencial.com",
          tone: "positive",
          text: m(
            "La energÃ­a barata es la nueva ventaja competitiva espaÃ±ola.",
            "Cheap energy is Spain\u2019s new competitive advantage.",
            "L\u2019energia barata Ã©s el nou avantatge competitiu espanyol.",
          ),
        },
        {
          source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
          tone: "positive",
          text: m(
            '"El Texas solar de Europa": la inversiÃ³n industrial sigue al kilovatio.',
            '"Europe\u2019s solar Texas": industrial investment follows the kilowatt.',
            '"El Texas solar d\u2019Europa": la inversiÃ³ industrial segueix el quilowatt.',
          ),
        },
        {
          source: "El PeriÃ³dico de la EnergÃ­a",
          tone: "critical",
          text: m(
            "Verter energÃ­a por falta de baterÃ­as es tirar dinero pÃºblico.",
            "Curtailing energy for lack of batteries is wasting public money.",
            "Abocar energia per manca de bateries Ã©s llenÃ§ar diners pÃºblics.",
          ),
        },
      ],
      opinion: m(
        "EspaÃ±a ha ganado la loterÃ­a geogrÃ¡fica de la era renovable y por fin estÃ¡ cobrando el premio. Pero atenciÃ³n: generar barato sin almacenar ni industrializar es exportar la ventaja a precio de saldo. Cada hora de sol vertida por falta de baterÃ­as es riqueza evaporada. La prioridad absoluta del paÃ­s deberÃ­a ser convertir electrones baratos en empleo industrial: gigafactorÃ­as, hidrÃ³geno, centros de datos. La transiciÃ³n energÃ©tica estÃ¡ ganada; la industrial, aÃºn no ha empezado de verdad.",
        "Spain won the geographic lottery of the renewable era and is finally collecting the prize. But beware: generating cheap power without storing it or industrialising is exporting the advantage at clearance prices. Every sunny hour curtailed for lack of batteries is evaporated wealth. The country\u2019s absolute priority should be turning cheap electrons into industrial jobs: gigafactories, hydrogen, data centres. The energy transition is won; the industrial one hasn\u2019t truly begun.",
        "Espanya ha guanyat la loteria geogrÃ fica de l\u2019era renovable i per fi estÃ  cobrant el premi. PerÃ² atenciÃ³: generar barat sense emmagatzemar ni industrialitzar Ã©s exportar l\u2019avantatge a preu de saldo. Cada hora de sol abocada per manca de bateries Ã©s riquesa evaporada. La prioritat absoluta del paÃ­s hauria de ser convertir electrons barats en ocupaciÃ³ industrial: gigafactories, hidrogen, centres de dades. La transiciÃ³ energÃ¨tica estÃ  guanyada; la industrial, encara no ha comenÃ§at de debÃ².",
      ),
    },
  },
  {
    id: 'nat-5',
    category: 'sports',
    region: 'national',
    image: img('1461896836934-ffe607ba8211'),
    source: 'Marca',
    sourceUrl: 'https://www.marca.com',
    author: 'LaLiga',
    published: hoursAgo(12),
    readTime: 4,
    views: 96300,
    comments: 1121,
    title: m(
      'LaLiga se aprieta: solo 3 puntos separan a los cuatro primeros a mitad de temporada',
      'LaLiga tightens: just 3 points separate the top four at the halfway mark',
      'LaLiga s\u2019estreny: només 3 punts separen els quatre primers a mitja temporada'
    ),
    summary: m(
      'La jornada 19 deja la clasificación más igualada en una década. Los analistas señalan la profundidad de plantilla como factor decisivo en la segunda vuelta.',
      'Matchday 19 leaves the tightest table in a decade. Analysts point to squad depth as the decisive factor in the second half of the season.',
      'La jornada 19 deixa la classificació més igualada en una dècada. Els analistes assenyalen la profunditat de plantilla com a factor decisiu a la segona volta.'
    ),
    content: m(
      'Tras 19 jornadas, el líder acumula 44 puntos, seguido de cerca por tres rivales con 43, 42 y 41. Es la primera vez desde 2014 que la brecha es tan reducida a estas alturas de la competición. Los expertos atribuyen la igualdad a tres factores: la mejora de los presupuestos intermedios gracias a la venta centralizada de derechos, el impacto del VAR en los pequeños y la fatiga acumulada de los grandes por las competiciones europeas. La segunda vuelta promete un desenlace apasionante: los cuatro aspirantes afrontan calendarios exigentes con derbis cruzados en las jornadas 22 y 27. El mercado de invierno puede ser decisivo: al menos dos de los cuatro grandes buscan refuerzos para la medular, debilitada por lesiones.',
      'After 19 matchdays the leader sits on 44 points, closely followed by three rivals on 43, 42 and 41. It is the first time since 2014 the gap has been this slim at this stage. Experts attribute the equality to three factors: improved mid-table budgets from centralised TV rights sales, VAR\u2019s impact on smaller clubs, and accumulated fatigue at the big clubs from European competition. The second half of the season promises a thrilling finish: all four contenders face demanding schedules with cross-derbies on matchdays 22 and 27. The winter transfer window could prove decisive: at least two of the big four are hunting midfield reinforcements weakened by injuries.',
      'Després de 19 jornades, el líder acumula 44 punts, seguit de prop per tres rivals amb 43, 42 i 41. És la primera vegada des de 2014 que la bretxa és tan reduïda a aquestes alçades de la competició. Els experts atribueixen la igualtat a tres factors: la millora dels pressupostos intermedis gràcies a la venda centralitzada de drets, l\u2019impacte del VAR en els petits i la fatiga acumulada dels grans per les competicions europees. La segona volta promet un desenllaç apassionant: els quatre aspirants afronten calendaris exigents amb derbis creuats a les jornades 22 i 27. El mercat d\u2019hivern pot ser decisiu: almenys dos dels quatre grans busquen reforços per al mig del camp, debilitat per lesions.'
    ),
    insight: {
      stance: 'supportive',
      synthesis: m(
        'La prensa deportiva celebra la igualdad como prueba de salud competitiva. El debate de fondo: es mérito de los de abajo o demérito de los de arriba.',
        'Sports press celebrates the equality as proof of competitive health. The underlying debate: is it credit to the challengers or discredit to the top clubs?',
        'La premsa esportiva celebra la igualtat com a prova de salut competitiva. El debat de fons: és mèrit dels de baix o demèrit dels de dalt.'
      ),
      perspectives: [
        { source: 'Marca', tone: 'positive', text: m('La mejor Liga del mundo lo demuestra con igualdad, no solo con nombres.', 'The world\u2019s best league proves it through equality, not just names.', 'La millor Lliga del món ho demostra amb igualtat, no només amb noms.') },
        { source: 'The Athletic', tone: 'neutral', text: m('La fatiga europea nivela: los grandes juegan el doble de partidos.', 'European fatigue levels the field: the big clubs play double the games.', 'La fatiga europea anivella: els grans juguen el doble de partits.') },
        { source: 'AS', tone: 'critical', text: m('No es que suban los de abajo; es que los de arriba bajan rendimiento.', 'It\u2019s not that the bottom rises; the top is simply underperforming.', 'No és que pugin els de baix; és que els de dalt baixen rendiment.') },
      ],
      opinion: m(
        'Una Liga igualada no es un accidente: es el fruto de una distribución de derechos televisivos más equitativa y de un VAR que reduce el margen de error arbitral en los estadios modestos. Celebremos el resultado pero no nos engañemos sobre la causa: los grandes no están mejor; están más cansados. El verdadero test de salud competitiva no es que cuatro clubes aspiren al título en enero, sino que más de seis lo hagan en abril. El fútbol español necesita que el quinto y el sexto también sueñen; ahí es donde está el verdadero crecimiento.',
        'A tight league is no accident: it is the fruit of fairer TV rights distribution and a VAR that shrinks refereeing margins in modest stadiums. Let\u2019s celebrate the result but not fool ourselves about the cause: the big clubs aren\u2019t better — they\u2019re more tired. The real competitive-health test isn\u2019t four clubs chasing the title in January, but more than six still dreaming in April. Spanish football needs the fifth and sixth to dream too; that\u2019s where real growth lies.',
        'Una Lliga igualada no és un accident: és el fruit d\u2019una distribució de drets televisius més equitativa i d\u2019un VAR que redueix el marge d\u2019error arbitral als estadis modestos. Celebrem el resultat però no ens enganyem sobre la causa: els grans no estan millor; estan més cansats. El veritable test de salut competitiva no és que quatre clubs aspirin al títol al gener, sinó que més de sis ho facin a l\u2019abril. El futbol espanyol necessita que el cinquè i el sisè també somïin; allà és on hi ha el veritable creixement.'
      ),
    },
  },
  {
    id: "nat-6",
    category: "finance",
    region: "national",
    image: img("1590283603385-17ffb3a7f29f"),
    source: "Cinco DÃ­as",
    author: "Mercados",
    published: hoursAgo(5),
    readTime: 3,
    views: 29400,
    comments: 203,
    title: m(
      "El IBEX 35 conquista los 13.500 puntos, su mÃ¡ximo desde 2007",
      "IBEX 35 conquers 13,500 points, its highest since 2007",
      "L\u2019IBEX 35 conquereix els 13.500 punts, el seu mÃ xim des de 2007",
    ),
    summary: m(
      "Banca y energÃ©ticas lideran un aÃ±o en que el selectivo espaÃ±ol dobla el rendimiento del EuroStoxx. Los analistas debaten si queda recorrido.",
      "Banks and utilities lead a year in which the Spanish index doubles the EuroStoxx\u2019s return. Analysts debate whether there\u2019s room left to run.",
      "Banca i energÃ¨tiques lideren un any en quÃ¨ el selectiu espanyol dobla el rendiment de l\u2019EuroStoxx. Els analistes debaten si queda recorregut.",
    ),
    content: m(
      "El Ã­ndice acumula una revalorizaciÃ³n del 19% en el aÃ±o apoyado en beneficios bancarios rÃ©cord y el tirÃ³n renovable. Los gestores internacionales sobreponderan EspaÃ±a por primera vez en una dÃ©cada. La banca de inversiÃ³n discrepa: unos ven el IBEX barato por PER, otros alertan de la concentraciÃ³n en pocos valores.",
      "The index is up 19% for the year on record banking profits and the renewables surge. International managers are overweight Spain for the first time in a decade. Investment banks disagree: some see the IBEX cheap on P/E, others warn about concentration in a handful of names.",
      "L\u2019Ã­ndex acumula una revaloraciÃ³ del 19% l\u2019any recolzat en beneficis bancaris rÃ¨cord i l\u2019empenta renovable. Els gestors internacionals sobreponderen Espanya per primer cop en una dÃ¨cada. La banca d\u2019inversiÃ³ discrepa: uns veuen l\u2019IBEX barat per PER, altres alerten de la concentraciÃ³ en pocs valors.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "La prensa financiera celebra el hito con moderaciÃ³n: el consenso ve fundamentales sÃ³lidos, pero recuerda que la mitad de la subida la explican cinco valores.",
        "Financial press celebrates the milestone with restraint: consensus sees solid fundamentals but notes five stocks explain half the rally.",
        "La premsa financera celebra la fita amb moderaciÃ³: el consens veu fonamentals sÃ²lids, perÃ² recorda que la meitat de la pujada l\u2019expliquen cinc valors.",
      ),
      perspectives: [
        {
          source: "Cinco DÃ­as",
          tone: "positive",
          text: m(
            "Beneficios rÃ©cord y dividendos del 5%: el IBEX tiene argumentos.",
            "Record profits and 5% dividends: the IBEX has a case.",
            "Beneficis rÃ¨cord i dividends del 5%: l\u2019IBEX tÃ© arguments.",
          ),
        },
        {
          source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
          tone: "neutral",
          text: m(
            "EspaÃ±a, de patito feo a favorita de los gestores europeos.",
            "Spain: from ugly duckling to European managers\u2019 favourite.",
            "Espanya, d\u2019aneguet lleig a favorita dels gestors europeus.",
          ),
        },
        {
          source: "ExpansiÃ³n",
          tone: "critical",
          text: m(
            "Sin tecnolÃ³gicas de peso, el selectivo sigue anclado al ciclo.",
            "Without heavyweight tech, the index remains chained to the cycle.",
            "Sense tecnolÃ²giques de pes, el selectiu segueix ancorat al cicle.",
          ),
        },
      ],
      opinion: m(
        "Los 13.500 saben a justicia poÃ©tica para una bolsa ninguneada durante quince aÃ±os, pero no nos engaÃ±emos con el espejo retrovisor. El IBEX sube por bancos cobrando tipos altos y utilities cobrando la transiciÃ³n: negocio de ayer y de hoy, no de maÃ±ana. La bolsa espaÃ±ola necesita lo mismo que su economÃ­a: tecnologÃ­a cotizada, salidas a bolsa de sus scale-ups y menos dependencia del ciclo del eurÃ­bor. Disfruten el rally, pero exijan la modernizaciÃ³n del parquÃ©.",
        "The 13,500 mark tastes like poetic justice for a market snubbed for fifteen years, but let\u2019s not be fooled by the rear-view mirror. The IBEX rises on banks harvesting high rates and utilities harvesting the transition: yesterday\u2019s and today\u2019s business, not tomorrow\u2019s. The Spanish market needs what its economy needs: listed tech, IPOs of its scale-ups and less dependence on the Euribor cycle. Enjoy the rally â€” but demand the modernisation of the exchange.",
        "Els 13.500 saben a justÃ­cia poÃ¨tica per a una borsa menystinguda durant quinze anys, perÃ² no ens enganyem amb el mirall retrovisor. L\u2019IBEX puja per bancs cobrant tipus alts i utilities cobrant la transiciÃ³: negoci d\u2019ahir i d\u2019avui, no de demÃ . La borsa espanyola necessita el mateix que la seva economia: tecnologia cotitzada, sortides a borsa de les seves scale-ups i menys dependÃ¨ncia del cicle de l\u2019eurÃ­bor. Gaudeixin del ralÂ·li, perÃ² exigeixin la modernitzaciÃ³ del parquet.",
      ),
    },
  },
  {
    id: "nat-7",
    category: "spain",
    region: "national",
    image: img("1474487548417-781cb71495f3"),
    source: "El Mundo",
    sourceUrl: "https://www.elmundo.es",
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
      "La lÃ­nea ibÃ©rica arranca con 8 frecuencias diarias y billetes desde 39â‚¬. AviaciÃ³n prevÃ© perder el 60% del trÃ¡fico aÃ©reo entre ambas ciudades.",
      "The Iberian line launches with 8 daily services and tickets from â‚¬39. Airlines expect to lose 60% of air traffic between the two cities.",
      "La lÃ­nia ibÃ¨rica arrenca amb 8 freqÃ¼Ã¨ncies diÃ ries i bitllets des de 39â‚¬. L\u2019aviaciÃ³ preveu perdre el 60% del trÃ nsit aeri entre ambdues ciutats.",
    ),
    content: m(
      "El proyecto, financiado en un 40% con fondos europeos, culmina dos dÃ©cadas de negociaciones intermitentes. El tramo Badajoz-Ã‰vora ha sido el Ãºltimo en completarse. Los operadores estudian ya extender frecuencias a Oporto y conectar con la red francesa para un corredor Lisboa-ParÃ­s.",
      "The project, 40% funded by the EU, caps two decades of on-off negotiations. The Badajoz-Ã‰vora stretch was the last to be completed. Operators are already studying extending services to Porto and linking with the French network for a Lisbon-Paris corridor.",
      "El projecte, finanÃ§at en un 40% amb fons europeus, culmina dues dÃ¨cades de negociacions intermitents. El tram Badajoz-Ã‰vora ha estat l\u2019Ãºltim a completar-se. Els operadors ja estudien estendre freqÃ¼Ã¨ncies a Porto i connectar amb la xarxa francesa per a un corredor Lisboa-ParÃ­s.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "CelebraciÃ³n ibÃ©rica compartida con la misma pregunta a ambos lados: por quÃ© ha costado veinte aÃ±os y quÃ© corredores siguen olvidados (Extremadura interior, el MediterrÃ¡neo).",
        "Shared Iberian celebration with the same question on both sides: why did it take twenty years, and which corridors remain forgotten (inland Extremadura, the Mediterranean).",
        "CelebraciÃ³ ibÃ¨rica compartida amb la mateixa pregunta a banda i banda: per quÃ¨ ha costat vint anys i quins corredors segueixen oblidats (Extremadura interior, el Mediterrani).",
      ),
      perspectives: [
        {
          source: "El Mundo",
    sourceUrl: "https://www.elmundo.es",
          tone: "positive",
          text: m(
            "La penÃ­nsula funciona por fin como un solo mercado de 60 millones.",
            "The peninsula finally works as a single 60-million market.",
            "La penÃ­nsula funciona per fi com un sol mercat de 60 milions.",
          ),
        },
        {
          source: "PÃºblico (PT)",
          tone: "positive",
          text: m(
            "Lisboa se acerca a Europa por tierra: hito histÃ³rico.",
            "Lisbon gets closer to Europe overland: a historic milestone.",
            "Lisboa s\u2019acosta a Europa per terra: fita histÃ²rica.",
          ),
        },
        {
          source: "Hoy Extremadura",
          tone: "critical",
          text: m(
            "El AVE pasa por Extremadura pero apenas para en ella.",
            "The AVE crosses Extremadura but barely stops there.",
            "L\u2019AVE passa per Extremadura perÃ² amb prou feines s\u2019hi atura.",
          ),
        },
      ],
      opinion: m(
        "Veinte aÃ±os para 600 kilÃ³metros: que la buena noticia no amnistÃ­e la lentitud. Cada dÃ©cada de retraso ha sido PIB perdido para dos paÃ­ses que se dan la espalda por costumbre. La lecciÃ³n es doble: los fondos europeos funcionan cuando hay fecha y penalizaciÃ³n, y los territorios de paso no pueden ser solo paisaje. Ahora, a por el corredor mediterrÃ¡neo con la misma urgencia: es imperdonable que Valencia-Barcelona-frontera siga en vÃ­a Ãºnica de facto para mercancÃ­as.",
        "Twenty years for 600 kilometres: the good news must not pardon the slowness. Every decade of delay was lost GDP for two countries that ignore each other out of habit. The lesson is twofold: EU funds work when there are deadlines and penalties, and pass-through territories cannot be mere scenery. Next, the Mediterranean corridor with the same urgency: it is unforgivable that Valencia-Barcelona-border remains de facto single-track for freight.",
        "Vint anys per a 600 quilÃ²metres: que la bona notÃ­cia no amnistiÃ¯ la lentitud. Cada dÃ¨cada de retard ha estat PIB perdut per a dos paÃ¯sos que es donen l\u2019esquena per costum. La lliÃ§Ã³ Ã©s doble: els fons europeus funcionen quan hi ha data i penalitzaciÃ³, i els territoris de pas no poden ser nomÃ©s paisatge. Ara, cap al corredor mediterrani amb la mateixa urgÃ¨ncia: Ã©s imperdonable que ValÃ¨ncia-Barcelona-frontera segueixi en via Ãºnica de facto per a mercaderies.",
      ),
    },
  },
  {
    id: "nat-8",
    category: "spain",
    region: "national",
    image: img("1554224155-6726b3ff858f"),
    source: "RTVE",
    sourceUrl: "https://www.rtve.es",
    author: "Laboral",
    published: hoursAgo(18),
    readTime: 5,
    views: 58700,
    comments: 976,
    title: m(
      "Gobierno y agentes sociales pactan subir el SMI a 1.250â‚¬ en 14 pagas",
      "Government and social partners agree to raise the minimum wage to â‚¬1,250 across 14 payments",
      "Govern i agents socials pacten apujar l\u2019SMI a 1.250â‚¬ en 14 pagues",
    ),
    summary: m(
      "La subida del 4,2% beneficia a 2,4 millones de trabajadores. La patronal de pymes advierte de tensiones en hostelerÃ­a y campo.",
      "The 4.2% rise benefits 2.4 million workers. The SME employers\u2019 association warns of strain in hospitality and agriculture.",
      "La pujada del 4,2% beneficia 2,4 milions de treballadors. La patronal de pimes adverteix de tensions en hostaleria i camp.",
    ),
    content: m(
      "El acuerdo incluye por primera vez una clÃ¡usula de revisiÃ³n ligada a la cesta bÃ¡sica. Los estudios del Banco de EspaÃ±a sobre subidas anteriores no detectaron destrucciÃ³n neta de empleo significativa. Economistas discrepan sobre el margen restante: el SMI alcanza ya el 60% del salario medio, el objetivo de la Carta Social Europea.",
      "The deal includes for the first time a review clause tied to the basic consumer basket. Bank of Spain studies of previous rises found no significant net job destruction. Economists disagree on the remaining headroom: the minimum wage now reaches 60% of the average salary, the European Social Charter target.",
      "L\u2019acord inclou per primer cop una clÃ usula de revisiÃ³ lligada a la cistella bÃ sica. Els estudis del Banc d\u2019Espanya sobre pujades anteriors no van detectar destrucciÃ³ neta d\u2019ocupaciÃ³ significativa. Els economistes discrepen sobre el marge restant: l\u2019SMI arriba ja al 60% del salari mitjÃ , l\u2019objectiu de la Carta Social Europea.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Debate econÃ³mico clÃ¡sico con datos nuevos: la izquierda mediÃ¡tica subraya que las profecÃ­as de paro no se cumplieron; la conservadora traslada el foco a pymes rurales y absentismo.",
        "A classic economic debate with fresh data: left-leaning media stress that unemployment prophecies never materialised; conservative outlets shift focus to rural SMEs and absenteeism.",
        "Debat econÃ²mic clÃ ssic amb dades noves: l\u2019esquerra mediÃ tica subratlla que les profecies d\u2019atur no es van complir; la conservadora trasllada el focus a pimes rurals i absentisme.",
      ),
      perspectives: [
        {
          source: "eldiario.es",
          tone: "positive",
          text: m(
            "Cinco subidas, cinco rÃ©cords de empleo: el debate estÃ¡ zanjado.",
            "Five raises, five employment records: the debate is settled.",
            "Cinc pujades, cinc rÃ¨cords d\u2019ocupaciÃ³: el debat estÃ  tancat.",
          ),
        },
        {
          source: "ABC",
          tone: "critical",
          text: m(
            "El pequeÃ±o comercio rural no puede absorber otro 4% de costes.",
            "Rural small business cannot absorb another 4% in costs.",
            "El petit comerÃ§ rural no pot absorbir un altre 4% de costos.",
          ),
        },
        {
          source: "CincoDÃ­as",
          tone: "neutral",
          text: m(
            "La clave ya no es el SMI sino la productividad que lo sostenga.",
            "The key is no longer the wage floor but the productivity to sustain it.",
            "La clau ja no Ã©s l\u2019SMI sinÃ³ la productivitat que el sostingui.",
          ),
        },
      ],
      opinion: m(
        "Los hechos han hablado: cinco subidas consecutivas del SMI y el empleo en mÃ¡ximos histÃ³ricos. Quienes pronosticaron el apocalipsis laboral deben cuenta de sus modelos, no de sus opiniones. Dicho esto, el listÃ³n del 60% marca un punto de inflexiÃ³n real: a partir de aquÃ­, cada euro extra debe venir de productividad, no de decreto. El siguiente contrato social pasa por formaciÃ³n, digitalizaciÃ³n de pymes y absentismo abordado con honestidad. Subir sueldos era la parte fÃ¡cil; ahora toca ganÃ¡rselos como paÃ­s.",
        "The facts have spoken: five consecutive minimum wage rises and employment at record highs. Those who forecast labour apocalypse owe us an audit of their models, not their opinions. That said, the 60% threshold marks a real inflection point: from here, every extra euro must come from productivity, not decree. The next social contract runs through training, SME digitalisation and absenteeism addressed honestly. Raising wages was the easy part; now the country must earn them.",
        "Els fets han parlat: cinc pujades consecutives de l\u2019SMI i l\u2019ocupaciÃ³ en mÃ xims histÃ²rics. Els qui van pronosticar l\u2019apocalipsi laboral deuen comptes dels seus models, no de les seves opinions. Dit aixÃ², el llistÃ³ del 60% marca un punt d\u2019inflexiÃ³ real: a partir d\u2019aquÃ­, cada euro extra ha de venir de productivitat, no de decret. El segÃ¼ent contracte social passa per formaciÃ³, digitalitzaciÃ³ de pimes i absentisme abordat amb honestedat. Apujar sous era la part fÃ cil; ara toca guanyar-se\u2019ls com a paÃ­s.",
      ),
    },
  },
  {
    id: "nat-9",
    category: "lifestyle",
    region: "national",
    image: img("1489599849927-2ee91cede3ba"),
    source: "Fotogramas",
    sourceUrl: "https://www.fotogramas.es",
    author: "Cine",
    published: hoursAgo(22),
    readTime: 3,
    views: 25800,
    comments: 312,
    title: m(
      "El cine espaÃ±ol arrasa en Venecia: LeÃ³n de Oro y premio del pÃºblico",
      "Spanish cinema sweeps Venice: Golden Lion and audience award",
      "El cinema espanyol arrasa a VenÃ¨cia: LleÃ³ d\u2019Or i premi del pÃºblic",
    ),
    summary: m(
      "La pelÃ­cula, rodada entre Galicia y Buenos Aires con presupuesto medio, confirma el gran momento internacional del audiovisual espaÃ±ol.",
      "The film, shot between Galicia and Buenos Aires on a mid-range budget, confirms Spanish audiovisual\u2019s international golden moment.",
      "La pelÂ·lÃ­cula, rodada entre GalÃ­cia i Buenos Aires amb pressupost mitjÃ , confirma el gran moment internacional de l\u2019audiovisual espanyol.",
    ),
    content: m(
      "Es el tercer gran premio europeo para una producciÃ³n espaÃ±ola en dos aÃ±os. Las plataformas se disputan ya los derechos globales de distribuciÃ³n. La industria reivindica el modelo de coproducciÃ³n iberoamericana y los incentivos fiscales que han multiplicado los rodajes internacionales en EspaÃ±a.",
      "It is the third major European prize for a Spanish production in two years. Streaming platforms are already bidding for global distribution rights. The industry credits the Ibero-American co-production model and the tax incentives that have multiplied international shoots in Spain.",
      "Ã‰s el tercer gran premi europeu per a una producciÃ³ espanyola en dos anys. Les plataformes ja es disputen els drets globals de distribuciÃ³. La indÃºstria reivindica el model de coproducciÃ³ iberoamericana i els incentius fiscals que han multiplicat els rodatges internacionals a Espanya.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Euforia cultural compartida con un matiz recurrente: el Ã©xito de los premios convive con salas de cine en mÃ­nimos de asistencia y un debate sobre a dÃ³nde va el espectador.",
        "Shared cultural euphoria with a recurring nuance: awards success coexists with cinema attendance at record lows and a debate over where the audience went.",
        "EufÃ²ria cultural compartida amb un matÃ­s recurrent: l\u2019Ã¨xit dels premis conviu amb sales de cinema en mÃ­nims d\u2019assistÃ¨ncia i un debat sobre on va l\u2019espectador.",
      ),
      perspectives: [
        {
          source: "Fotogramas",
    sourceUrl: "https://www.fotogramas.es",
          tone: "positive",
          text: m(
            "Una generaciÃ³n de cineastas sin complejos conquista Europa.",
            "A generation of filmmakers without complexes conquers Europe.",
            "Una generaciÃ³ de cineastes sense complexos conquereix Europa.",
          ),
        },
        {
          source: "Variety",
          tone: "positive",
          text: m(
            "EspaÃ±a es el nuevo epicentro del audiovisual en espaÃ±ol.",
            "Spain is the new epicentre of Spanish-language content.",
            "Espanya Ã©s el nou epicentre de l\u2019audiovisual en espanyol.",
          ),
        },
        {
          source: "El Cultural",
          tone: "critical",
          text: m(
            "Premios fuera, salas vacÃ­as dentro: la paradoja sin resolver.",
            "Prizes abroad, empty theatres at home: the unresolved paradox.",
            "Premis fora, sales buides dins: la paradoxa sense resoldre.",
          ),
        },
      ],
      opinion: m(
        "El talento espaÃ±ol nunca fue el problema; el ecosistema, sÃ­. Este LeÃ³n de Oro demuestra que cuando hay financiaciÃ³n estable e incentivos inteligentes, los resultados llegan. Pero hay una incoherencia nacional que duele: celebramos los premios mientras dejamos morir las salas. Un paÃ­s que solo consume su cine en plataformas acabarÃ¡ haciendo cine de plataforma. Butaca joven subvencionada, cuota de pantalla y cine en la escuela: defender la sala es defender la pelÃ­cula.",
        "Spanish talent was never the problem; the ecosystem was. This Golden Lion proves that with stable financing and smart incentives, results follow. But there is a painful national incoherence: we celebrate prizes while letting theatres die. A country that only consumes its cinema on streaming will end up making streaming-shaped cinema. Subsidised young admissions, screen quotas and cinema in schools: defending the theatre is defending the film.",
        "El talent espanyol mai no va ser el problema; l\u2019ecosistema, sÃ­. Aquest LleÃ³ d\u2019Or demostra que quan hi ha finanÃ§ament estable i incentius intelÂ·ligents, els resultats arriben. PerÃ² hi ha una incoherÃ¨ncia nacional que fa mal: celebrem els premis mentre deixem morir les sales. Un paÃ­s que nomÃ©s consumeix el seu cinema en plataformes acabarÃ  fent cinema de plataforma. Butaca jove subvencionada, quota de pantalla i cinema a l\u2019escola: defensar la sala Ã©s defensar la pelÂ·lÃ­cula.",
      ),
    },
  },
  {
    id: "nat-10",
    category: "spain",
    region: "national",
    image: img("1522202176988-66273c2fd55f"),
    source: "20minutos",
    sourceUrl: "https://www.20minutos.es",
    author: "Sociedad",
    published: hoursAgo(28),
    readTime: 4,
    views: 33100,
    comments: 389,
    title: m(
      "EspaÃ±a supera los 100.000 visados de nÃ³mada digital y revisa el programa",
      "Spain passes 100,000 digital nomad visas and reviews the programme",
      "Espanya supera els 100.000 visats de nÃ²mada digital i revisa el programa",
    ),
    summary: m(
      "El perfil medio: 34 aÃ±os, ingresos de 4.200â‚¬ mensuales y estancia de 18 meses. MÃ¡laga, Valencia y Las Palmas concentran la mitad.",
      "The average profile: 34 years old, â‚¬4,200 monthly income, 18-month stays. MÃ¡laga, Valencia and Las Palmas host half of them.",
      "El perfil mitjÃ : 34 anys, ingressos de 4.200â‚¬ mensuals i estada de 18 mesos. MÃ laga, ValÃ¨ncia i Las Palmas en concentren la meitat.",
    ),
    content: m(
      "El Gobierno estudia ajustes tras las quejas vecinales en los barrios mÃ¡s afectados por la subida de alquileres. Se plantea exigir ingresos mÃ­nimos superiores y un recargo destinado a vivienda local. Los defensores del programa esgrimen los 3.000 millones anuales de gasto directo y la creaciÃ³n de empleo cualificado.",
      "The government is studying adjustments after residents\u2019 complaints in the neighbourhoods hit hardest by rent rises. Higher minimum income requirements and a surcharge earmarked for local housing are on the table. The programme\u2019s defenders point to â‚¬3 billion in direct annual spending and skilled job creation.",
      "El Govern estudia ajustos desprÃ©s de les queixes veÃ¯nals als barris mÃ©s afectats per la pujada de lloguers. Es planteja exigir ingressos mÃ­nims superiors i un recÃ rrec destinat a habitatge local. Els defensors del programa esgrimeixen els 3.000 milions anuals de despesa directa i la creaciÃ³ d\u2019ocupaciÃ³ qualificada.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "La prensa internacional lo presenta como Ã©xito de atracciÃ³n de talento; la local documenta el reverso: cafÃ©s a 6â‚¬ y alquileres imposibles en los barrios nÃ³madas.",
        "International press frames it as a talent-attraction success; local media document the flip side: â‚¬6 coffees and impossible rents in nomad neighbourhoods.",
        "La premsa internacional ho presenta com un Ã¨xit d\u2019atracciÃ³ de talent; la local en documenta el revers: cafÃ¨s a 6â‚¬ i lloguers impossibles als barris nÃ²mades.",
      ),
      perspectives: [
        {
          source: "Forbes",
          tone: "positive",
          text: m(
            "EspaÃ±a, primer destino mundial del trabajo remoto por tercer aÃ±o.",
            "Spain: world\u2019s top remote-work destination for a third year.",
            "Espanya, primera destinaciÃ³ mundial del treball remot per tercer any.",
          ),
        },
        {
          source: "SUR MÃ¡laga",
          tone: "critical",
          text: m(
            "El Soho malagueÃ±o ya no habla espaÃ±ol: vecinos expulsados.",
            "MÃ¡laga\u2019s Soho no longer speaks Spanish: residents pushed out.",
            "El Soho malagueny ja no parla espanyol: veÃ¯ns expulsats.",
          ),
        },
        {
          source: "20minutos",
    sourceUrl: "https://www.20minutos.es",
          tone: "neutral",
          text: m(
            "El reto: capturar el valor sin exportar el coste a los vecinos.",
            "The challenge: capture the value without exporting the cost to locals.",
            "El repte: capturar el valor sense exportar el cost als veÃ¯ns.",
          ),
        },
      ],
      opinion: m(
        "Atraer talento global es un acierto estratÃ©gico; hacerlo sin proteger a los residentes es un autogol social. Un nÃ³mada que cobra en dÃ³lares y paga alquiler en LavapiÃ©s compite con ventaja desleal contra el vecino que cobra en euros locales. La soluciÃ³n no es cerrar la puerta sino cobrar la entrada: recargo finalista para vivienda pÃºblica en los barrios receptores y lÃ­mites de pisos turÃ­sticos reconvertidos. La hospitalidad no puede ser subvenciÃ³n inversa de los pobres locales a los ricos globales.",
        "Attracting global talent is strategically right; doing it without protecting residents is a social own goal. A nomad earning in dollars and renting in LavapiÃ©s competes unfairly against the neighbour earning local euros. The solution isn\u2019t closing the door but charging admission: an earmarked surcharge for public housing in receiving neighbourhoods and limits on converted tourist flats. Hospitality cannot become a reverse subsidy from the local poor to the global rich.",
        "Atraure talent global Ã©s un encert estratÃ¨gic; fer-ho sense protegir els residents Ã©s un gol en prÃ²pia porta social. Un nÃ²mada que cobra en dÃ²lars i paga lloguer a LavapiÃ©s competeix amb avantatge deslleial contra el veÃ­ que cobra en euros locals. La soluciÃ³ no Ã©s tancar la porta sinÃ³ cobrar l\u2019entrada: recÃ rrec finalista per a habitatge pÃºblic als barris receptors i lÃ­mits als pisos turÃ­stics reconvertits. L\u2019hospitalitat no pot ser subvenciÃ³ inversa dels pobres locals als rics globals.",
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
    sourceUrl: "https://www.reuters.com",
    author: "Markets Desk",
    published: minsAgo(35),
    readTime: 4,
    views: 88100,
    comments: 924,
    title: m(
      "El BCE baja los tipos al 1,75% y anuncia un nuevo marco de polÃ­tica monetaria",
      "ECB cuts rates to 1.75% and unveils a new monetary policy framework",
      "El BCE abaixa els tipus a l\u20191,75% i anuncia un nou marc de polÃ­tica monetÃ ria",
    ),
    summary: m(
      "Los mercados europeos reaccionan con subidas del 2% y el euro se deprecia. Lagarde condiciona nuevos recortes a la evoluciÃ³n salarial.",
      "European markets rally 2% and the euro weakens. Lagarde ties further cuts to wage developments.",
      "Els mercats europeus reaccionen amb pujades del 2% i l\u2019euro es deprecia. Lagarde condiciona nous retalls a l\u2019evoluciÃ³ salarial.",
    ),
    content: m(
      "La rebaja de 25 puntos bÃ¡sicos era la esperada, pero el nuevo marco sorprende: el BCE tolerarÃ¡ desviaciones temporales de la inflaciÃ³n para no ahogar la inversiÃ³n verde y digital. La banca celebra el mensaje y las bolsas perifÃ©ricas lideran las subidas. Los halcones del consejo emitieron dos votos en contra, seÃ±al de tensiones internas.",
      "The 25 basis-point cut was expected, but the new framework surprises: the ECB will tolerate temporary inflation deviations to avoid choking green and digital investment. Banks welcomed the message and peripheral markets led the gains. The council\u2019s hawks cast two dissenting votes, signalling internal tensions.",
      "La rebaixa de 25 punts bÃ sics era l\u2019esperada, perÃ² el nou marc sorprÃ¨n: el BCE tolerarÃ  desviacions temporals de la inflaciÃ³ per no ofegar la inversiÃ³ verda i digital. La banca celebra el missatge i les borses perifÃ¨riques lideren les pujades. Els falcons del consell van emetre dos vots en contra, senyal de tensions internes.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Lectura dividida por geografÃ­a: la prensa del sur de Europa celebra el alivio financiero; la alemana advierte del riesgo inflacionista de relajar el mandato.",
        "Reading splits by geography: southern European press celebrates the financial relief; German media warn of the inflation risk in loosening the mandate.",
        "Lectura dividida per geografia: la premsa del sud d\u2019Europa celebra l\u2019alleujament financer; l\u2019alemanya adverteix del risc inflacionista de relaxar el mandat.",
      ),
      perspectives: [
        {
          source: "Financial Times",
          tone: "neutral",
          text: m(
            "El giro dovish mÃ¡s importante desde Draghi: cambia la funciÃ³n de reacciÃ³n.",
            "The most dovish pivot since Draghi: the reaction function changes.",
            "El gir dovish mÃ©s important des de Draghi: canvia la funciÃ³ de reacciÃ³.",
          ),
        },
        {
          source: "Handelsblatt",
          tone: "critical",
          text: m(
            'Tolerar inflaciÃ³n "temporal" es como estar "un poco" embarazado.',
            'Tolerating "temporary" inflation is like being "a little" pregnant.',
            'Tolerar inflaciÃ³ "temporal" Ã©s com estar "una mica" embarassada.',
          ),
        },
        {
          source: "El PaÃ­s",
          tone: "positive",
          text: m(
            "Hipotecas mÃ¡s baratas y aire para la inversiÃ³n: Europa respira.",
            "Cheaper mortgages and room for investment: Europe breathes.",
            "Hipoteques mÃ©s barates i aire per a la inversiÃ³: Europa respira.",
          ),
        },
      ],
      opinion: m(
        "El BCE acierta en el fondo y se juega la credibilidad en la forma. Europa necesita tipos que no estrangulen la mayor ola de inversiÃ³n industrial en dÃ©cadas, y el fanatismo del 2,0% exacto era un corsÃ© del siglo pasado. Pero flexibilizar el objetivo sin un relato impecable es regalar municiÃ³n a los halcones y a los especuladores contra el euro. Lagarde tiene una tarea: explicar que tolerancia no es rendiciÃ³n. Si el mensaje falla, la prÃ³xima crisis de deuda perifÃ©rica se incubarÃ¡ en esta decisiÃ³n.",
        "The ECB is right on substance and gambling its credibility on form. Europe needs rates that don\u2019t strangle the biggest industrial investment wave in decades, and the fetish of exactly 2.0% was last century\u2019s corset. But loosening the target without a flawless narrative hands ammunition to the hawks and to speculators against the euro. Lagarde has one job: explain that tolerance is not surrender. If the message fails, the next peripheral debt crisis will have been incubated in this decision.",
        "El BCE encerta en el fons i es juga la credibilitat en la forma. Europa necessita tipus que no escanyin la major onada d\u2019inversiÃ³ industrial en dÃ¨cades, i el fanatisme del 2,0% exacte era una cotilla del segle passat. PerÃ² flexibilitzar l\u2019objectiu sense un relat impecable Ã©s regalar municiÃ³ als falcons i als especuladors contra l\u2019euro. Lagarde tÃ© una tasca: explicar que tolerÃ ncia no Ã©s rendiciÃ³. Si el missatge falla, la propera crisi de deute perifÃ¨ric s\u2019haurÃ  incubat en aquesta decisiÃ³.",
      ),
    },
  },
  {
    id: "int-2",
    category: "international",
    region: "international",
    image: img("1620712943543-bcc4688e7485"),
    source: "Reuters",
    sourceUrl: "https://www.reuters.com",
    author: "Tech Policy",
    published: hoursAgo(6),
    readTime: 6,
    views: 67400,
    comments: 1456,
    title: m(
      "40 paÃ­ses firman el primer tratado vinculante sobre inteligencia artificial",
      "40 countries sign the first binding treaty on artificial intelligence",
      "40 paÃ¯sos signen el primer tractat vinculant sobre intelÂ·ligÃ¨ncia artificial",
    ),
    summary: m(
      "El acuerdo obliga a auditar los modelos de riesgo sistÃ©mico y crea una agencia internacional de supervisiÃ³n. EEUU y China firman con reservas.",
      "The accord mandates audits of systemic-risk models and creates an international oversight agency. The US and China sign with reservations.",
      "L\u2019acord obliga a auditar els models de risc sistÃ¨mic i crea una agÃ¨ncia internacional de supervisiÃ³. Els EUA i la Xina signen amb reserves.",
    ),
    content: m(
      'El tratado exige transparencia sobre datos de entrenamiento, marcas de agua obligatorias en contenido sintÃ©tico y un registro global de modelos por encima de cierto umbral de cÃ³mputo. Las grandes tecnolÃ³gicas critican los plazos: 18 meses para adaptarse. Las organizaciones civiles lo celebran como el "momento constitucional" de la IA, aunque lamentan la ausencia de prohibiciones a las armas autÃ³nomas.',
      'The treaty demands transparency on training data, mandatory watermarks on synthetic content and a global registry of models above a compute threshold. Big Tech criticises the timeline: 18 months to comply. Civil society hails it as AI\u2019s "constitutional moment", while lamenting the absence of bans on autonomous weapons.',
      'El tractat exigeix transparÃ¨ncia sobre dades d\u2019entrenament, marques d\u2019aigua obligatÃ²ries en contingut sintÃ¨tic i un registre global de models per sobre d\u2019un llindar de cÃ²mput. Les grans tecnolÃ²giques critiquen els terminis: 18 mesos per adaptar-se. Les organitzacions civils ho celebren com el "moment constitucional" de la IA, tot i lamentar l\u2019absÃ¨ncia de prohibicions a les armes autÃ²nomes.',
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Hito diplomÃ¡tico con lecturas opuestas: la prensa europea reivindica su modelo regulador; la estadounidense teme por la innovaciÃ³n; la asiÃ¡tica analiza el tablero geopolÃ­tico del cÃ³mputo.",
        "A diplomatic milestone with opposing takes: European press vindicates its regulatory model; American media fear for innovation; Asian outlets analyse the geopolitics of compute.",
        "Fita diplomÃ tica amb lectures oposades: la premsa europea reivindica el seu model regulador; l\u2019estatunidenca tem per la innovaciÃ³; l\u2019asiÃ tica analitza el tauler geopolÃ­tic del cÃ²mput.",
      ),
      perspectives: [
        {
          source: "Le Monde",
          tone: "positive",
          text: m(
            "Europa exporta su modelo: regular primero ya no es quedarse atrÃ¡s.",
            "Europe exports its model: regulating first no longer means falling behind.",
            "Europa exporta el seu model: regular primer ja no Ã©s quedar-se enrere.",
          ),
        },
        {
          source: "WSJ",
          tone: "critical",
          text: m(
            "Burocratizar la frontera tecnolÃ³gica tiene un coste que pagarÃ¡ Occidente.",
            "Bureaucratising the tech frontier has a cost the West will pay.",
            "Burocratitzar la frontera tecnolÃ²gica tÃ© un cost que pagarÃ  Occident.",
          ),
        },
        {
          source: "Nikkei",
          tone: "neutral",
          text: m(
            "El registro de cÃ³mputo redibuja el mapa del poder tecnolÃ³gico.",
            "The compute registry redraws the map of technological power.",
            "El registre de cÃ²mput redibuixa el mapa del poder tecnolÃ²gic.",
          ),
        },
      ],
      opinion: m(
        'La humanidad acaba de hacer algo inusual: regular una tecnologÃ­a antes de la catÃ¡strofe, no despuÃ©s. Ese mÃ©rito es enorme y conviene defenderlo frente al lobby del "no se puede parar el progreso" â€”el mismo argumento que retrasÃ³ dÃ©cadas la acciÃ³n sobre el tabaco o el clima. Â¿Es imperfecto? Claro: sin armas autÃ³nomas dentro, el tratado nace cojo. Pero los marcos se amplÃ­an; los vacÃ­os se pagan. La transparencia sobre datos y las auditorÃ­as no frenan la innovaciÃ³n: frenan la impunidad. Y distinguir ambas cosas es exactamente lo que define a una sociedad madura.',
        'Humanity just did something unusual: regulate a technology before the catastrophe, not after. That merit is enormous and worth defending against the "you can\u2019t stop progress" lobby â€” the same argument that delayed action on tobacco and climate for decades. Is it imperfect? Of course: without autonomous weapons inside, the treaty is born limping. But frameworks expand; vacuums are paid for. Transparency on data and audits don\u2019t brake innovation: they brake impunity. Telling those two apart is precisely what defines a mature society.',
        'La humanitat acaba de fer una cosa inusual: regular una tecnologia abans de la catÃ strofe, no desprÃ©s. Aquest mÃ¨rit Ã©s enorme i convÃ© defensar-lo davant del lobby del "no es pot aturar el progrÃ©s" â€”el mateix argument que va retardar dÃ¨cades l\u2019acciÃ³ sobre el tabac o el clima. Ã‰s imperfecte? Ã‰s clar: sense armes autÃ²nomes dins, el tractat neix coix. PerÃ² els marcs s\u2019amplien; els buits es paguen. La transparÃ¨ncia sobre dades i les auditories no frenen la innovaciÃ³: frenen la impunitat. I distingir totes dues coses Ã©s exactament el que defineix una societat madura.',
      ),
    },
  },
  {
    id: "int-3",
    category: "science",
    region: "international",
    image: img("1536431311519-398e48eea140"),
    source: "BBC",
    sourceUrl: "https://www.bbc.com/news",
    author: "Environment",
    published: hoursAgo(9),
    readTime: 5,
    views: 59800,
    comments: 1102,
    title: m(
      "La cumbre del clima cierra con un fondo de 300.000 millones para adaptaciÃ³n",
      "Climate summit closes with a $300 billion adaptation fund",
      "La cimera del clima tanca amb un fons de 300.000 milions per a adaptaciÃ³",
    ),
    summary: m(
      "Acuerdo in extremis tras 48 horas de prÃ³rroga. Los paÃ­ses insulares lo tachan de insuficiente; los emergentes logran acceso preferente.",
      "A last-gasp deal after a 48-hour overtime. Island nations call it insufficient; emerging economies secure preferential access.",
      "Acord in extremis desprÃ©s de 48 hores de prÃ²rroga. Els paÃ¯sos insulars ho titllen d\u2019insuficient; els emergents aconsegueixen accÃ©s preferent.",
    ),
    content: m(
      "El fondo se nutrirÃ¡ de aportaciones pÃºblicas y de un gravamen inÃ©dito al transporte marÃ­timo. El texto final evita el calendario vinculante de abandono de combustibles fÃ³siles que pedÃ­an 80 paÃ­ses. La ciencia lo resume con frialdad: los compromisos actuales sitÃºan el calentamiento en 2,4 grados a final de siglo.",
      "The fund will draw on public contributions and an unprecedented levy on maritime shipping. The final text avoids the binding fossil-fuel phase-out calendar demanded by 80 countries. Science sums it up coldly: current pledges put warming at 2.4 degrees by century\u2019s end.",
      "El fons es nodrirÃ  d\u2019aportacions pÃºbliques i d\u2019un gravamen inÃ¨dit al transport marÃ­tim. El text final evita el calendari vinculant d\u2019abandonament de combustibles fÃ²ssils que demanaven 80 paÃ¯sos. La ciÃ¨ncia ho resumeix amb fredor: els compromisos actuals situen l\u2019escalfament en 2,4 graus a final de segle.",
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "Coincidencia inusual entre medios de todo el espectro: el fondo es un avance real y a la vez una cortina de humo sobre el fracaso en mitigaciÃ³n. La distancia entre ciencia y diplomacia se agranda.",
        "Unusual agreement across the media spectrum: the fund is real progress and simultaneously a smokescreen over the mitigation failure. The gap between science and diplomacy widens.",
        "CoincidÃ¨ncia inusual entre mitjans de tot l\u2019espectre: el fons Ã©s un avenÃ§ real i alhora una cortina de fum sobre el fracÃ s en mitigaciÃ³. La distÃ ncia entre ciÃ¨ncia i diplomÃ cia s\u2019engrandeix.",
      ),
      perspectives: [
        {
          source: "BBC",
    sourceUrl: "https://www.bbc.com/news",
          tone: "neutral",
          text: m(
            "Dinero nuevo, ambiciÃ³n vieja: la sÃ­ntesis de la cumbre.",
            "New money, old ambition: the summit in one line.",
            "Diners nous, ambiciÃ³ vella: la sÃ­ntesi de la cimera.",
          ),
        },
        {
          source: "The Guardian",
          tone: "critical",
          text: m(
            "2,4 grados es una sentencia para millones: llamarlo Ã©xito es obsceno.",
            "2.4 degrees is a sentence for millions: calling it success is obscene.",
            "2,4 graus Ã©s una sentÃ¨ncia per a milions: dir-ne Ã¨xit Ã©s obscÃ¨.",
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
        "Nuestra opiniÃ³n no admite tibieza: financiar la adaptaciÃ³n mientras se esquiva el calendario de salida de los fÃ³siles es pagar el entierro negÃ¡ndose a llamar al mÃ©dico. El fondo de 300.000 millones es necesario y llega tarde y corto â€”la factura real de la adaptaciÃ³n se estima en el tripleâ€”. Pero el escÃ¡ndalo de fondo es otro: 80 paÃ­ses pidieron fecha de caducidad para el petrÃ³leo y la minorÃ­a bloqueadora ganÃ³ otra vez. Mientras el veto de los petroestados siga operando por consenso, estas cumbres seguirÃ¡n produciendo comunicados en lugar de futuro. Hay que reformar las reglas del juego: mayorÃ­as cualificadas y sanciones comerciales verdes. Lo demÃ¡s es teatro con jet lag.",
        "Our view admits no lukewarmness: funding adaptation while dodging the fossil phase-out calendar is paying for the funeral while refusing to call the doctor. The $300 billion fund is necessary, late and short â€” the real adaptation bill is estimated at triple. But the underlying scandal is elsewhere: 80 countries demanded an expiry date for oil and the blocking minority won again. As long as petrostate vetoes operate through consensus, these summits will keep producing communiquÃ©s instead of futures. Reform the rules of the game: qualified majorities and green trade sanctions. Everything else is theatre with jet lag.",
        "La nostra opiniÃ³ no admet tebiesa: finanÃ§ar l\u2019adaptaciÃ³ mentre s\u2019esquiva el calendari de sortida dels fÃ²ssils Ã©s pagar l\u2019enterrament negant-se a trucar al metge. El fons de 300.000 milions Ã©s necessari i arriba tard i curt â€”la factura real de l\u2019adaptaciÃ³ s\u2019estima en el tripleâ€”. PerÃ² l\u2019escÃ ndol de fons Ã©s un altre: 80 paÃ¯sos van demanar data de caducitat per al petroli i la minoria bloquejadora va guanyar un altre cop. Mentre el veto dels petroestats segueixi operant per consens, aquestes cimeres seguiran produint comunicats en lloc de futur. Cal reformar les regles del joc: majories qualificades i sancions comercials verdes. La resta Ã©s teatre amb jet lag.",
      ),
    },
  },
  {
    id: "int-4",
    category: "technology",
    region: "international",
    image: img("1635070041078-e3477b96d082"),
    source: "The Verge",
    sourceUrl: "https://www.theverge.com",
    author: "Science Desk",
    published: hoursAgo(13),
    readTime: 6,
    views: 42300,
    comments: 387,
    title: m(
      "Un ordenador cuÃ¡ntico corrige errores en tiempo real y supera el umbral crÃ­tico",
      "A quantum computer corrects errors in real time, crossing the critical threshold",
      "Un ordinador quÃ ntic corregeix errors en temps real i supera el llindar crÃ­tic",
    ),
    summary: m(
      "El chip de 1.200 cÃºbits logra que aÃ±adir cÃºbits reduzca los errores en vez de aumentarlos: la puerta a la computaciÃ³n cuÃ¡ntica Ãºtil.",
      "The 1,200-qubit chip achieves error rates that fall as qubits are added instead of rising: the doorway to useful quantum computing.",
      "El xip de 1.200 cÃºbits aconsegueix que afegir cÃºbits redueixi els errors en lloc d\u2019augmentar-los: la porta a la computaciÃ³ quÃ ntica Ãºtil.",
    ),
    content: m(
      "El hito, publicado en Nature, valida dos dÃ©cadas de teorÃ­a de correcciÃ³n de errores. Los primeros usos prÃ¡cticos apuntan a simulaciÃ³n de materiales y quÃ­mica de baterÃ­as, no a romper la criptografÃ­a, que requerirÃ­a mÃ¡quinas mil veces mayores. Los gobiernos aceleran igualmente la migraciÃ³n a cifrado post-cuÃ¡ntico.",
      "The milestone, published in Nature, validates two decades of error-correction theory. First practical uses point to materials simulation and battery chemistry â€” not breaking cryptography, which would require machines a thousand times larger. Governments are nonetheless accelerating migration to post-quantum encryption.",
      "La fita, publicada a Nature, valida dues dÃ¨cades de teoria de correcciÃ³ d\u2019errors. Els primers usos prÃ ctics apunten a simulaciÃ³ de materials i quÃ­mica de bateries, no a trencar la criptografia, que requeriria mÃ quines mil vegades mÃ©s grans. Els governs acceleren igualment la migraciÃ³ a xifratge post-quÃ ntic.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "La prensa cientÃ­fica pide contenciÃ³n frente a titulares grandilocuentes: es el avance mÃ¡s importante en aÃ±os, pero la utilidad comercial sigue a 5-8 aÃ±os vista.",
        "Science press urges restraint against grandiose headlines: this is the most important advance in years, but commercial utility remains 5-8 years out.",
        "La premsa cientÃ­fica demana contenciÃ³ davant titulars grandiloqÃ¼ents: Ã©s l\u2019avenÃ§ mÃ©s important en anys, perÃ² la utilitat comercial segueix a 5-8 anys vista.",
      ),
      perspectives: [
        {
          source: "Nature",
    sourceUrl: "https://www.nature.com",
          tone: "positive",
          text: m(
            "La correcciÃ³n de errores escalable era EL problema. Ya no lo es.",
            "Scalable error correction was THE problem. It no longer is.",
            "La correcciÃ³ d\u2019errors escalable era EL problema. Ja no ho Ã©s.",
          ),
        },
        {
          source: "The Verge",
    sourceUrl: "https://www.theverge.com",
          tone: "neutral",
          text: m(
            'Impresionante, pero el "quantum advantage" comercial sigue pendiente.',
            "Impressive, but commercial quantum advantage remains pending.",
            'Impressionant, perÃ² el "quantum advantage" comercial segueix pendent.',
          ),
        },
        {
          source: "Schneier Blog",
          tone: "critical",
          text: m(
            'La migraciÃ³n criptogrÃ¡fica va tarde: el "cosecha ahora, descifra despuÃ©s" ya ocurre.',
            'Crypto migration is behind: "harvest now, decrypt later" is already happening.',
            'La migraciÃ³ criptogrÃ fica va tard: el "cull ara, desxifra desprÃ©s" ja passa.',
          ),
        },
      ],
      opinion: m(
        "Este es de los pocos hitos tecnolÃ³gicos que merecen la palabra histÃ³rico, y precisamente por eso hay que hablar claro sobre los plazos: la computaciÃ³n cuÃ¡ntica Ãºtil sigue siendo una promesa de aÃ±os, no de trimestres, y quien venda lo contrario busca su ronda de financiaciÃ³n, no la verdad. La urgencia real y desatendida es defensiva: los datos cifrados robados hoy se descifrarÃ¡n maÃ±ana. Toda organizaciÃ³n que custodie secretos de larga vida â€”salud, defensa, propiedad industrialâ€” deberÃ­a tener ya un plan post-cuÃ¡ntico con fecha. Esa es la noticia accionable; lo demÃ¡s es ciencia magnÃ­fica madurando.",
        "This is one of the few tech milestones deserving the word historic, and precisely for that reason we must be honest about timelines: useful quantum computing remains a promise of years, not quarters, and whoever sells otherwise is chasing their funding round, not the truth. The real, neglected urgency is defensive: encrypted data stolen today will be decrypted tomorrow. Any organisation guarding long-lived secrets â€” health, defence, industrial property â€” should already have a dated post-quantum plan. That is the actionable news; the rest is magnificent science maturing.",
        "Aquesta Ã©s una de les poques fites tecnolÃ²giques que mereixen la paraula histÃ²ric, i precisament per aixÃ² cal parlar clar sobre els terminis: la computaciÃ³ quÃ ntica Ãºtil segueix sent una promesa d\u2019anys, no de trimestres, i qui vengui el contrari busca la seva ronda de finanÃ§ament, no la veritat. La urgÃ¨ncia real i desatesa Ã©s defensiva: les dades xifrades robades avui es desxifraran demÃ . Toda organitzaciÃ³ que custodiÃ¯ secrets de llarga vida â€”salut, defensa, propietat industrialâ€” hauria de tenir ja un pla post-quÃ ntic amb data. Aquesta Ã©s la notÃ­cia accionable; la resta Ã©s ciÃ¨ncia magnÃ­fica madurant.",
      ),
    },
  },
  {
    id: "int-5",
    category: "finance",
    region: "international",
    image: img("1642104704074-ca5fffe32cc7"),
    source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
    author: "Crypto Desk",
    published: hoursAgo(4),
    readTime: 3,
    views: 51600,
    comments: 745,
    title: m(
      "Bitcoin supera los 95.000 dÃ³lares tras la entrada de fondos soberanos",
      "Bitcoin tops $95,000 after sovereign wealth funds pile in",
      "Bitcoin supera els 95.000 dÃ²lars desprÃ©s de l\u2019entrada de fons sobirans",
    ),
    summary: m(
      "Dos fondos soberanos asiÃ¡ticos confirman posiciones vÃ­a ETF. La volatilidad cae a mÃ­nimos histÃ³ricos y los analistas debaten el nuevo rÃ©gimen.",
      "Two Asian sovereign funds confirm positions via ETFs. Volatility drops to record lows as analysts debate the new regime.",
      "Dos fons sobirans asiÃ tics confirmen posicions via ETF. La volatilitat cau a mÃ­nims histÃ²rics i els analistes debaten el nou rÃ¨gim.",
    ),
    content: m(
      'La entrada institucional ha transformado la estructura del mercado: el 34% de la oferta lÃ­quida estÃ¡ ya en manos de ETFs, tesorerÃ­as corporativas y fondos estatales. Los defensores hablan de "oro digital" consolidado; los crÃ­ticos, de un activo secuestrado por la misma banca que decÃ­a venir a destruir. La correlaciÃ³n con el Nasdaq cae a mÃ­nimos de cinco aÃ±os.',
      'Institutional inflows have transformed the market\u2019s structure: 34% of liquid supply now sits with ETFs, corporate treasuries and state funds. Advocates speak of consolidated "digital gold"; critics of an asset captured by the very banks it claimed it would destroy. Correlation with the Nasdaq falls to five-year lows.',
      'L\u2019entrada institucional ha transformat l\u2019estructura del mercat: el 34% de l\u2019oferta lÃ­quida ja Ã©s en mans d\u2019ETFs, tresoreries corporatives i fons estatals. Els defensors parlen d\u2019"or digital" consolidat; els crÃ­tics, d\u2019un actiu segrestat per la mateixa banca que deia venir a destruir. La correlaciÃ³ amb el Nasdaq cau a mÃ­nims de cinc anys.',
    ),
    insight: {
      stance: "critical",
      synthesis: m(
        "La prensa financiera normaliza lo que la cripto-nativa lamenta: bitcoin ya se analiza como un activo macro mÃ¡s, con flujos institucionales mandando sobre el relato original.",
        "Financial press normalises what crypto-native media mourn: bitcoin is now analysed as just another macro asset, institutional flows overriding the original narrative.",
        "La premsa financera normalitza el que la cripto-nativa lamenta: bitcoin ja s\u2019analitza com un actiu macro mÃ©s, amb fluxos institucionals manant sobre el relat original.",
      ),
      perspectives: [
        {
          source: "Bloomberg",
    sourceUrl: "https://www.bloomberg.com",
          tone: "positive",
          text: m(
            "La adopciÃ³n soberana valida la tesis de reserva de valor.",
            "Sovereign adoption validates the store-of-value thesis.",
            "L\u2019adopciÃ³ sobirana valida la tesi de reserva de valor.",
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
            "L\u2019actiu antisistema ja Ã©s la joguina favorita del sistema.",
          ),
        },
      ],
      opinion: m(
        "Digamos lo que el precio no dice: bitcoin ha triunfado como activo y fracasado como revoluciÃ³n. NaciÃ³ para desintermediar la banca y hoy su suerte depende de los flujos de BlackRock y de fondos estatales; la ironÃ­a es tan gruesa que apenas necesita comentario. Para el inversor, la lectura frÃ­a: la institucionalizaciÃ³n reduce el riesgo de colapso pero tambiÃ©n el potencial exponencial; es una posiciÃ³n macro mÃ¡s, dimensiÃ³nenla como tal y desconfÃ­en de los evangelistas. Para la sociedad, la pregunta pendiente sigue intacta: el dinero programable lo acabarÃ¡n definiendo los bancos centrales, no los cypherpunks.",
        "Let\u2019s say what the price doesn\u2019t: bitcoin has succeeded as an asset and failed as a revolution. Born to disintermediate banking, its fate now hinges on BlackRock flows and state funds; the irony is too thick to need commentary. For investors, the cold read: institutionalisation lowers collapse risk but also the exponential upside; it is one more macro position â€” size it accordingly and distrust the evangelists. For society, the pending question stands: programmable money will end up being defined by central banks, not cypherpunks.",
        "Diguem el que el preu no diu: bitcoin ha triomfat com a actiu i ha fracassat com a revoluciÃ³. Va nÃ©ixer per desintermediar la banca i avui la seva sort depÃ¨n dels fluxos de BlackRock i de fons estatals; la ironia Ã©s tan gruixuda que gairebÃ© no necessita comentari. Per a l\u2019inversor, la lectura freda: la institucionalitzaciÃ³ redueix el risc de colÂ·lapse perÃ² tambÃ© el potencial exponencial; Ã©s una posiciÃ³ macro mÃ©s, dimensioneu-la com a tal i desconfieu dels evangelistes. Per a la societat, la pregunta pendent segueix intacta: els diners programables els acabaran definint els bancs centrals, no els cypherpunks.",
      ),
    },
  },
  {
    id: "int-6",
    category: "science",
    region: "international",
    image: img("1576091160550-2173dba999ef"),
    source: "Nature",
    sourceUrl: "https://www.nature.com",
    author: "Health",
    published: hoursAgo(17),
    readTime: 6,
    views: 47900,
    comments: 428,
    title: m(
      "Un fÃ¡rmaco frena el alzhÃ©imer temprano en el 47% de los pacientes del ensayo",
      "Drug halts early Alzheimer\u2019s in 47% of trial patients",
      "Un fÃ rmac frena l\u2019alzhÃ¨imer primerenc en el 47% dels pacients de l\u2019assaig",
    ),
    summary: m(
      "El ensayo de fase 3 con 4.200 pacientes muestra la mayor eficacia registrada. El precio anunciado, 28.000â‚¬ anuales, abre el debate del acceso.",
      "The phase-3 trial with 4,200 patients shows the strongest efficacy on record. The announced price â€” â‚¬28,000 a year â€” opens the access debate.",
      "L\u2019assaig de fase 3 amb 4.200 pacients mostra la major eficÃ cia registrada. El preu anunciat, 28.000â‚¬ anuals, obre el debat de l\u2019accÃ©s.",
    ),
    content: m(
      "El tratamiento combina la eliminaciÃ³n de placas amiloides con un neuroprotector de nueva generaciÃ³n. Los efectos secundarios graves afectan al 8% de pacientes y exigen monitorizaciÃ³n con resonancias periÃ³dicas. Los sistemas pÃºblicos de salud europeos negocian ya un precio conjunto, mientras las asociaciones de pacientes piden diagnÃ³stico precoz masivo: el fÃ¡rmaco solo funciona en fases iniciales.",
      "The treatment combines amyloid plaque clearance with a new-generation neuroprotector. Serious side effects affect 8% of patients and require periodic MRI monitoring. European public health systems are already negotiating a joint price, while patient associations demand mass early screening: the drug only works in initial stages.",
      "El tractament combina l\u2019eliminaciÃ³ de plaques amiloides amb un neuroprotector de nova generaciÃ³. Els efectes secundaris greus afecten el 8% dels pacients i exigeixen monitoritzaciÃ³ amb ressonÃ ncies periÃ²diques. Els sistemes pÃºblics de salut europeus ja negocien un preu conjunt, mentre les associacions de pacients demanen diagnÃ²stic precoÃ§ massiu: el fÃ rmac nomÃ©s funciona en fases inicials.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Esperanza con letra pequeÃ±a: los medios cientÃ­ficos celebran la eficacia inÃ©dita mientras los sanitarios advierten que sin diagnÃ³stico precoz masivo el fÃ¡rmaco llegarÃ¡ tarde a la mayorÃ­a.",
        "Hope with fine print: science media celebrate unprecedented efficacy while health outlets warn that without mass early diagnosis the drug will arrive too late for most.",
        "EsperanÃ§a amb lletra petita: els mitjans cientÃ­fics celebren l\u2019eficÃ cia inÃ¨dita mentre els sanitaris adverteixen que sense diagnÃ²stic precoÃ§ massiu el fÃ rmac arribarÃ  tard a la majoria.",
      ),
      perspectives: [
        {
          source: "Nature",
    sourceUrl: "https://www.nature.com",
          tone: "positive",
          text: m(
            "El primer fÃ¡rmaco que modifica el curso de la enfermedad de forma robusta.",
            "The first drug to robustly modify the disease\u2019s course.",
            "El primer fÃ rmac que modifica el curs de la malaltia de forma robusta.",
          ),
        },
        {
          source: "STAT News",
          tone: "neutral",
          text: m(
            "La logÃ­stica de resonancias serÃ¡ el cuello de botella real.",
            "MRI logistics will be the real bottleneck.",
            "La logÃ­stica de ressonÃ ncies serÃ  el coll d\u2019ampolla real.",
          ),
        },
        {
          source: "The Lancet",
          tone: "critical",
          text: m(
            "A 28.000â‚¬/aÃ±o, la innovaciÃ³n sin acceso es un privilegio, no un avance.",
            "At â‚¬28,000/year, innovation without access is privilege, not progress.",
            "A 28.000â‚¬/any, la innovaciÃ³ sense accÃ©s Ã©s un privilegi, no un avenÃ§.",
          ),
        },
      ],
      opinion: m(
        "Es el avance mÃ©dico mÃ¡s esperanzador de la dÃ©cada y a la vez un espejo incÃ³modo para nuestros sistemas de salud. Un fÃ¡rmaco que solo funciona en fases tempranas es inÃºtil en paÃ­ses donde el diagnÃ³stico llega, de media, tres aÃ±os tarde: sin una revoluciÃ³n paralela del cribado â€”biomarcadores en sangre, memoria en atenciÃ³n primariaâ€” compraremos esperanza cara para unos pocos. Y sobre el precio, claridad: la investigaciÃ³n se financiÃ³ en parte con dinero pÃºblico, y los estados tienen el deber y la palanca de negociar en bloque. Celebrar la ciencia y pelear el acceso no son posturas opuestas; son la misma obligaciÃ³n moral.",
        "It is the most hopeful medical advance of the decade and, at once, an uncomfortable mirror for our health systems. A drug that only works early is useless in countries where diagnosis arrives, on average, three years late: without a parallel screening revolution â€” blood biomarkers, memory checks in primary care â€” we\u2019ll be buying expensive hope for the few. On price, clarity: the research was partly publicly funded, and states have both the duty and the leverage to negotiate as a bloc. Celebrating the science and fighting for access aren\u2019t opposing stances; they are the same moral obligation.",
        "Ã‰s l\u2019avenÃ§ mÃ¨dic mÃ©s esperanÃ§ador de la dÃ¨cada i alhora un mirall incÃ²mode per als nostres sistemes de salut. Un fÃ rmac que nomÃ©s funciona en fases primerenques Ã©s inÃºtil en paÃ¯sos on el diagnÃ²stic arriba, de mitjana, tres anys tard: sense una revoluciÃ³ paralÂ·lela del cribratge â€”biomarcadors en sang, memÃ²ria a l\u2019atenciÃ³ primÃ riaâ€” comprarem esperanÃ§a cara per a uns pocs. I sobre el preu, claredat: la recerca es va finanÃ§ar en part amb diners pÃºblics, i els estats tenen el deure i la palanca de negociar en bloc. Celebrar la ciÃ¨ncia i lluitar per l\u2019accÃ©s no sÃ³n postures oposades; sÃ³n la mateixa obligaciÃ³ moral.",
      ),
    },
  },
  {
    id: "int-7",
    category: "sports",
    region: "international",
    image: img("1522778119026-d647f0596c20"),
    source: "ESPN",
    sourceUrl: "https://www.espn.com",
    author: "Football",
    published: hoursAgo(21),
    readTime: 4,
    views: 63500,
    comments: 834,
    title: m(
      "La final de la Champions se jugarÃ¡ en Estambul con dos aspirantes al primer tÃ­tulo",
      "The Champions League final heads to Istanbul with two first-time hopefuls",
      "La final de la Champions es jugarÃ  a Istanbul amb dos aspirants al primer tÃ­tol",
    ),
    summary: m(
      "Por primera vez en 21 aÃ±os, ninguno de los finalistas ha levantado antes el trofeo. Las semifinales dejaron 13 goles y dos remontadas Ã©picas.",
      "For the first time in 21 years, neither finalist has lifted the trophy before. The semi-finals produced 13 goals and two epic comebacks.",
      "Per primera vegada en 21 anys, cap dels finalistes ha aixecat abans el trofeu. Les semifinals van deixar 13 gols i dues remuntades Ã¨piques.",
    ),
    content: m(
      "El fÃºtbol de clubes vive un cambio de ciclo: las plantillas construidas con scouting de datos y academias propias han superado a los proyectos de chequera. Los dos finalistas suman menos gasto neto en fichajes que el octavo clasificado de la Premier. La UEFA confirma rÃ©cord de audiencia global en semifinales: 450 millones de espectadores.",
      "Club football is living a cycle change: squads built on data scouting and homegrown academies have overtaken chequebook projects. The two finalists\u2019 combined net transfer spend is lower than the Premier League\u2019s eighth-placed club. UEFA confirms record global semi-final audiences: 450 million viewers.",
      "El futbol de clubs viu un canvi de cicle: les plantilles construÃ¯des amb scouting de dades i acadÃ¨mies prÃ²pies han superat els projectes de talonari. Els dos finalistes sumen menys despesa neta en fitxatges que el vuitÃ¨ classificat de la Premier. La UEFA confirma rÃ¨cord d\u2019audiÃ¨ncia global en semifinals: 450 milions d\u2019espectadors.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "La prensa deportiva europea coincide en la lectura romÃ¡ntica â€”gana la gestiÃ³n, no el petrodÃ³larâ€” aunque los analistas recuerdan que la excepciÃ³n no derogarÃ¡ la regla del dinero.",
        "European sports press shares the romantic reading â€” management beats petrodollars â€” though analysts note the exception won\u2019t repeal money\u2019s rule.",
        "La premsa esportiva europea coincideix en la lectura romÃ ntica â€”guanya la gestiÃ³, no el petrodÃ²larâ€” tot i que els analistes recorden que l\u2019excepciÃ³ no derogarÃ  la regla dels diners.",
      ),
      perspectives: [
        {
          source: "ESPN",
    sourceUrl: "https://www.espn.com",
          tone: "positive",
          text: m(
            "La meritocracia del dato vence a la fuerza bruta financiera.",
            "Data meritocracy beats financial brute force.",
            "La meritocrÃ cia de la dada venÃ§ la forÃ§a bruta financera.",
          ),
        },
        {
          source: "L\u2019Ã‰quipe",
          tone: "positive",
          text: m(
            "Dos proyectos coherentes de cinco aÃ±os: el fÃºtbol premia la paciencia.",
            "Two coherent five-year projects: football rewards patience.",
            "Dos projectes coherents de cinc anys: el futbol premia la paciÃ¨ncia.",
          ),
        },
        {
          source: "The Athletic",
          tone: "neutral",
          text: m(
            "Bonita excepciÃ³n estadÃ­stica; la correlaciÃ³n gasto-Ã©xito sigue intacta.",
            "A lovely statistical exception; the spend-success correlation stands.",
            "Bonica excepciÃ³ estadÃ­stica; la correlaciÃ³ despesa-Ã¨xit segueix intacta.",
          ),
        },
      ],
      opinion: m(
        "Que nadie confunda una final hermosa con un sistema sano. Celebramos que dos clubes bien gestionados hayan llegado a lo mÃ¡s alto, pero son la excepciÃ³n que confirma cuarenta aÃ±os de correlaciÃ³n entre nÃ³mina y palmarÃ©s. Si el fÃºtbol europeo quiere que esto sea tendencia y no anÃ©cdota, las reglas financieras deben morder de verdad: topes salariales reales y castigos deportivos, no multas simbÃ³licas que los estados-club pagan con calderilla. El romanticismo se defiende con reglamento.",
        "Let no one mistake a beautiful final for a healthy system. We celebrate two well-run clubs reaching the summit, but they are the exception proving forty years of correlation between payroll and trophies. If European football wants this as a trend rather than an anecdote, financial rules must truly bite: real salary caps and sporting sanctions, not token fines that state-clubs pay with pocket change. Romance is defended through regulation.",
        "Que ningÃº confongui una final bonica amb un sistema sa. Celebrem que dos clubs ben gestionats hagin arribat al cim, perÃ² sÃ³n l\u2019excepciÃ³ que confirma quaranta anys de correlaciÃ³ entre nÃ²mina i palmarÃ¨s. Si el futbol europeu vol que aixÃ² sigui tendÃ¨ncia i no anÃ¨cdota, les regles financeres han de mossegar de debÃ²: topalls salarials reals i cÃ stigs esportius, no multes simbÃ²liques que els estats-club paguen amb xavalla. El romanticisme es defensa amb reglament.",
      ),
    },
  },
  {
    id: "int-8",
    category: "international",
    region: "international",
    image: img("1529107386315-e1a2ed48a620"),
    source: "Politico",
    sourceUrl: "https://www.politico.eu",
    author: "Brussels",
    published: hoursAgo(24),
    readTime: 5,
    views: 39700,
    comments: 1287,
    title: m(
      "La UE aprueba su pacto migratorio tras cinco aÃ±os de bloqueo",
      "EU approves its migration pact after five years of deadlock",
      "La UE aprova el seu pacte migratori desprÃ©s de cinc anys de bloqueig",
    ),
    summary: m(
      "El acuerdo combina solidaridad obligatoria entre socios con procedimientos acelerados en frontera. Satisface a pocos: lo critican por razones opuestas.",
      "The deal pairs mandatory solidarity between members with fast-track border procedures. It satisfies few: criticised for opposite reasons.",
      "L\u2019acord combina solidaritat obligatÃ²ria entre socis amb procediments accelerats en frontera. SatisfÃ  pocs: el critiquen per raons oposades.",
    ),
    content: m(
      "Los paÃ­ses podrÃ¡n elegir entre reubicar solicitantes, aportar 20.000 euros por plaza rechazada o financiar control fronterizo. Las ONG denuncian los centros de tramitaciÃ³n exprÃ©s; los gobiernos del este consideran una imposiciÃ³n el mecanismo de cuotas flexibles. Bruselas defiende que el pacto imperfecto es mejor que el caos coordinado de la Ãºltima dÃ©cada.",
      "Countries may choose between relocating applicants, paying â‚¬20,000 per rejected place, or funding border control. NGOs denounce the express processing centres; eastern governments call the flexible quota mechanism an imposition. Brussels argues an imperfect pact beats the coordinated chaos of the past decade.",
      "Els paÃ¯sos podran triar entre reubicar solÂ·licitants, aportar 20.000 euros per plaÃ§a rebutjada o finanÃ§ar control fronterer. Les ONG denuncien els centres de tramitaciÃ³ exprÃ©s; els governs de l\u2019est consideren una imposiciÃ³ el mecanisme de quotes flexibles. BrusselÂ·les defensa que el pacte imperfecte Ã©s millor que el caos coordinat de l\u2019Ãºltima dÃ¨cada.",
    ),
    insight: {
      stance: "balanced",
      synthesis: m(
        "Pocas veces un acuerdo une a la prensa de derechas e izquierdas en el rechazo por motivos inversos: unos ven puertas abiertas encubiertas, otros una fortaleza Europa con cheque incluido.",
        "Rarely does a deal unite right and left press in rejection for inverse reasons: some see covert open doors, others a Fortress Europe with a cheque attached.",
        "Poques vegades un acord uneix la premsa de dretes i d\u2019esquerres en el rebuig per motius inversos: uns hi veuen portes obertes encobertes, altres una fortalesa Europa amb xec inclÃ²s.",
      ),
      perspectives: [
        {
          source: "Politico",
    sourceUrl: "https://www.politico.eu",
          tone: "neutral",
          text: m(
            "El clÃ¡sico compromiso de Bruselas: funcional, impopular, inevitable.",
            "Classic Brussels compromise: functional, unpopular, inevitable.",
            "El clÃ ssic compromÃ­s de BrusselÂ·les: funcional, impopular, inevitable.",
          ),
        },
        {
          source: "Die Welt",
          tone: "critical",
          text: m(
            "Las cuotas flexibles son un peaje disfrazado de solidaridad.",
            "Flexible quotas are a toll dressed as solidarity.",
            "Les quotes flexibles sÃ³n un peatge disfressat de solidaritat.",
          ),
        },
        {
          source: "The Guardian",
          tone: "critical",
          text: m(
            "Externalizar fronteras y acelerar rechazos no es gestionar: es delegar el problema.",
            "Outsourcing borders and fast-tracking rejections isn\u2019t managing: it\u2019s delegating the problem.",
            "Externalitzar fronteres i accelerar rebuigs no Ã©s gestionar: Ã©s delegar el problema.",
          ),
        },
      ],
      opinion: m(
        "Que un pacto disguste a todos por razones opuestas no lo convierte en equilibrado: puede significar simplemente que elude las preguntas de fondo. Europa envejece, su economÃ­a pide brazos y talento, y sin embargo todo el debate gira sobre cÃ³mo repartir rechazos en lugar de cÃ³mo organizar llegadas legales. Esa es la disonancia que este pacto no resuelve. Lo defendible: por fin hay reglas comunes y previsibilidad. Lo indefendible: pagar 20.000 euros por no acoger convierte la solidaridad en mercancÃ­a. La prÃ³xima batalla es la que importa: vÃ­as legales amplias, reconocimiento rÃ¡pido de cualificaciones y una polÃ­tica demogrÃ¡fica adulta. Lo demÃ¡s es gestionar el sÃ­ntoma con contabilidad creativa.",
        "A pact displeasing everyone for opposite reasons isn\u2019t necessarily balanced: it may simply dodge the fundamental questions. Europe is ageing, its economy begs for hands and talent, yet the whole debate is about distributing rejections rather than organising legal arrivals. That is the dissonance this pact leaves untouched. The defensible part: common rules and predictability at last. The indefensible: paying â‚¬20,000 not to host turns solidarity into a commodity. The next battle is the one that matters: broad legal pathways, fast recognition of qualifications, and an adult demographic policy. Everything else is managing the symptom with creative accounting.",
        "Que un pacte disgusti tothom per raons oposades no el converteix en equilibrat: pot significar simplement que eludeix les preguntes de fons. Europa envelleix, la seva economia demana braÃ§os i talent, i tanmateix tot el debat gira sobre com repartir rebuigs en lloc de com organitzar arribades legals. Aquesta Ã©s la dissonÃ ncia que aquest pacte no resol. El defensable: per fi hi ha regles comunes i previsibilitat. L\u2019indefensable: pagar 20.000 euros per no acollir converteix la solidaritat en mercaderia. La propera batalla Ã©s la que importa: vies legals Ã mplies, reconeixement rÃ pid de qualificacions i una polÃ­tica demogrÃ fica adulta. La resta Ã©s gestionar el sÃ­mptoma amb comptabilitat creativa.",
      ),
    },
  },
  {
    id: "int-9",
    category: "science",
    region: "international",
    image: img("1446776811953-b23d57bd21aa"),
    source: "BBC",
    sourceUrl: "https://www.bbc.com/news",
    author: "Space",
    published: hoursAgo(30),
    readTime: 5,
    views: 45200,
    comments: 391,
    title: m(
      "Las muestras de Marte llegan a la Tierra: arranca el anÃ¡lisis del siglo",
      "Mars samples land on Earth: the analysis of the century begins",
      "Les mostres de Mart arriben a la Terra: comenÃ§a l\u2019anÃ lisi del segle",
    ),
    summary: m(
      "La cÃ¡psula con 30 tubos de roca marciana aterriza en Utah tras un viaje de 7 aÃ±os. Tres laboratorios buscarÃ¡n biofirmas durante una dÃ©cada.",
      "The capsule carrying 30 tubes of Martian rock lands in Utah after a 7-year journey. Three laboratories will hunt for biosignatures over a decade.",
      "La cÃ psula amb 30 tubs de roca marciana aterra a Utah desprÃ©s d\u2019un viatge de 7 anys. Tres laboratoris buscaran biosignatures durant una dÃ¨cada.",
    ),
    content: m(
      "Las muestras, seleccionadas del delta del crÃ¡ter Jezero, contienen sedimentos de un antiguo lago con 3.500 millones de aÃ±os. Los protocolos de contenciÃ³n superan a los de cualquier patÃ³geno terrestre. La comunidad cientÃ­fica gestiona las expectativas: encontrar quÃ­mica prebiÃ³tica serÃ­a ya revolucionario; una biofirma inequÃ­voca, el mayor descubrimiento de la historia.",
      "The samples, chosen from the Jezero crater delta, hold sediments from a 3.5-billion-year-old lakebed. Containment protocols exceed those for any terrestrial pathogen. The scientific community manages expectations: finding prebiotic chemistry would already be revolutionary; an unambiguous biosignature, the greatest discovery in history.",
      "Les mostres, seleccionades del delta del crÃ ter Jezero, contenen sediments d\u2019un antic llac de 3.500 milions d\u2019anys. Els protocols de contenciÃ³ superen els de qualsevol patogen terrestre. La comunitat cientÃ­fica gestiona les expectatives: trobar quÃ­mica prebiÃ²tica ja seria revolucionari; una biosignatura inequÃ­voca, el descobriment mÃ©s gran de la histÃ²ria.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Cobertura global reverente con dos hilos: la hazaÃ±a de ingenierÃ­a multi-agencia y el debate filosÃ³fico anticipado sobre quÃ© significarÃ­a (o no) encontrar vida.",
        "Reverent global coverage with two threads: the multi-agency engineering feat and the anticipated philosophical debate over what finding life would (or wouldn\u2019t) mean.",
        "Cobertura global reverent amb dos fils: la gesta d\u2019enginyeria multi-agÃ¨ncia i el debat filosÃ²fic anticipat sobre quÃ¨ significaria (o no) trobar-hi vida.",
      ),
      perspectives: [
        {
          source: "BBC",
    sourceUrl: "https://www.bbc.com/news",
          tone: "positive",
          text: m(
            "La misiÃ³n robÃ³tica mÃ¡s compleja jamÃ¡s completada, sin un solo fallo crÃ­tico.",
            "The most complex robotic mission ever completed, without one critical failure.",
            "La missiÃ³ robÃ²tica mÃ©s complexa mai completada, sense cap fallada crÃ­tica.",
          ),
        },
        {
          source: "Scientific American",
          tone: "neutral",
          text: m(
            "La ausencia de vida tambiÃ©n serÃ­a un resultado profundo: la rareza de la Tierra.",
            "Absence of life would also be a profound result: Earth\u2019s rarity.",
            "L\u2019absÃ¨ncia de vida tambÃ© seria un resultat profund: la raresa de la Terra.",
          ),
        },
        {
          source: "SpaceNews",
          tone: "critical",
          text: m(
            "11.000 millones y 20 aÃ±os: la prÃ³xima vez, que lo haga la industria.",
            "$11 billion and 20 years: next time, let industry do it.",
            "11.000 milions i 20 anys: la propera vegada, que ho faci la indÃºstria.",
          ),
        },
      ],
      opinion: m(
        'En una Ã©poca de horizontes cortos y cinismo barato, esta misiÃ³n es un recordatorio de lo que las instituciones humanas pueden lograr cuando piensan en dÃ©cadas: tres agencias, veinte aÃ±os, siete mil millones de kilÃ³metros y ni un solo fallo crÃ­tico. Quienes reducen la exploraciÃ³n espacial a un lujo ignoran su dividendo real â€”tecnologÃ­a, talento, y la disciplina de lo difÃ­cilâ€”. Y una advertencia contra el hype: si dentro de dos aÃ±os los laboratorios anuncian "resultados ambiguos", eso no serÃ¡ un fracaso sino ciencia funcionando. La paciencia que trajo estas rocas a casa es la misma que exigirÃ¡ leerlas.',
        'In an age of short horizons and cheap cynicism, this mission reminds us what human institutions can achieve when they think in decades: three agencies, twenty years, seven billion kilometres and not one critical failure. Those who dismiss space exploration as a luxury ignore its real dividend â€” technology, talent, and the discipline of doing hard things. And a warning against hype: if in two years the labs announce "ambiguous results", that won\u2019t be failure but science working. The patience that brought these rocks home is the same patience reading them will demand.',
        'En una Ã¨poca d\u2019horitzons curts i cinisme barat, aquesta missiÃ³ Ã©s un recordatori del que les institucions humanes poden aconseguir quan pensen en dÃ¨cades: tres agÃ¨ncies, vint anys, set mil milions de quilÃ²metres i ni una sola fallada crÃ­tica. Els qui redueixen l\u2019exploraciÃ³ espacial a un luxe ignoren el seu dividend real â€”tecnologia, talent, i la disciplina d\u2019allÃ² difÃ­cilâ€”. I una advertÃ¨ncia contra el hype: si d\u2019aquÃ­ a dos anys els laboratoris anuncien "resultats ambigus", aixÃ² no serÃ  un fracÃ s sinÃ³ ciÃ¨ncia funcionant. La paciÃ¨ncia que va portar aquestes roques a casa Ã©s la mateixa que exigirÃ  llegir-les.',
      ),
    },
  },
  {
    id: "int-10",
    category: "lifestyle",
    region: "international",
    image: img("1476514525535-07fb3b4ae5f1"),
    source: "CNN Travel",
    sourceUrl: "https://edition.cnn.com/travel",
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
      "Las reservas de trenes nocturnos europeos crecen un 40% anual. Las nuevas rutas Barcelona-ZÃºrich y Madrid-ParÃ­s agotan plazas en horas.",
      "European night-train bookings grow 40% a year. New Barcelona-Zurich and Madrid-Paris routes sell out within hours.",
      "Les reserves de trens nocturns europeus creixen un 40% anual. Les noves rutes Barcelona-Zuric i Madrid-ParÃ­s esgoten places en hores.",
    ),
    content: m(
      "El fenÃ³meno combina conciencia climÃ¡tica, teletrabajo flexible y una generaciÃ³n que valora el trayecto como parte del viaje. Los operadores histÃ³ricos resucitan rutas cerradas hace 20 aÃ±os y tres startups ferroviarias han captado 800 millones para nuevo material rodante. El cuello de botella: la capacidad de la red y los peajes ferroviarios transfronterizos.",
      "The phenomenon blends climate awareness, flexible remote work and a generation that values the journey as part of the trip. Legacy operators are reviving routes closed 20 years ago and three rail startups have raised â‚¬800 million for new rolling stock. The bottleneck: network capacity and cross-border track access charges.",
      "El fenomen combina consciÃ¨ncia climÃ tica, teletreball flexible i una generaciÃ³ que valora el trajecte com a part del viatge. Els operadors histÃ²rics ressusciten rutes tancades fa 20 anys i tres startups ferroviÃ ries han captat 800 milions per a nou material rodant. El coll d\u2019ampolla: la capacitat de la xarxa i els peatges ferroviaris transfronterers.",
    ),
    insight: {
      stance: "supportive",
      synthesis: m(
        "Tendencia celebrada casi sin fisuras; el matiz crÃ­tico llega de la prensa econÃ³mica, que duda de la rentabilidad sin apoyo pÃºblico al material rodante.",
        "A trend celebrated almost without dissent; the critical nuance comes from business press doubting profitability without public support for rolling stock.",
        "TendÃ¨ncia celebrada gairebÃ© sense fissures; el matÃ­s crÃ­tic arriba de la premsa econÃ²mica, que dubta de la rendibilitat sense suport pÃºblic al material rodant.",
      ),
      perspectives: [
        {
          source: "CNN Travel",
    sourceUrl: "https://edition.cnn.com/travel",
          tone: "positive",
          text: m(
            "La cama sobre raÃ­les es el nuevo sÃ­mbolo de estatus del viajero consciente.",
            "A bed on rails is the conscious traveller\u2019s new status symbol.",
            "El llit sobre rails Ã©s el nou sÃ­mbol d\u2019estatus del viatger conscient.",
          ),
        },
        {
          source: "Le Figaro",
          tone: "positive",
          text: m(
            "Europa redescubre la poesÃ­a ferroviaria que nunca debiÃ³ perder.",
            "Europe rediscovers the railway poetry it never should have lost.",
            "Europa redescobreix la poesia ferroviÃ ria que mai no havia d\u2019haver perdut.",
          ),
        },
        {
          source: "Handelsblatt",
          tone: "critical",
          text: m(
            "Sin reformar los peajes de vÃ­a, la moda morirÃ¡ de Ã©xito y de costes.",
            "Without track-charge reform, the trend will die of success and costs.",
            "Sense reformar els peatges de via, la moda morirÃ  d\u2019Ã¨xit i de costos.",
          ),
        },
      ],
      opinion: m(
        "El renacer del tren nocturno es la mejor noticia turÃ­stica de la dÃ©cada y serÃ­a imperdonable dejarla morir por burocracia ferroviaria. La demanda estÃ¡: se agotan plazas en horas. Lo que falta es voluntad polÃ­tica para tratar el tren transfronterizo como se tratÃ³ la aviaciÃ³n low-cost en los 90: peajes armonizados, seÃ±alizaciÃ³n Ãºnica y compra pÃºblica de material rodante alquilado a operadores. Si Europa subvencionÃ³ el despegue del aviÃ³n barato, subvencionar la alternativa que emite 30 veces menos no es intervencionismo: es coherencia climÃ¡tica elemental.",
        "The night train\u2019s rebirth is the decade\u2019s best travel news and letting it die of railway bureaucracy would be unforgivable. Demand is there: seats sell out in hours. What\u2019s missing is the political will to treat cross-border rail as low-cost aviation was treated in the 90s: harmonised track charges, unified signalling and public procurement of rolling stock leased to operators. If Europe subsidised cheap flight\u2019s take-off, subsidising the alternative that emits 30 times less isn\u2019t interventionism: it\u2019s elementary climate coherence.",
        "El renaixement del tren nocturn Ã©s la millor notÃ­cia turÃ­stica de la dÃ¨cada i seria imperdonable deixar-la morir per burocrÃ cia ferroviÃ ria. La demanda hi Ã©s: s\u2019esgoten places en hores. El que falta Ã©s voluntat polÃ­tica per tractar el tren transfronterer com es va tractar l\u2019aviaciÃ³ low-cost als 90: peatges harmonitzats, senyalitzaciÃ³ Ãºnica i compra pÃºblica de material rodant llogat a operadors. Si Europa va subvencionar l\u2019enlairament de l\u2019aviÃ³ barat, subvencionar l\u2019alternativa que emet 30 vegades menys no Ã©s intervencionisme: Ã©s coherÃ¨ncia climÃ tica elemental.",
      ),
    },
  },
];

// ============================================================
// Market data
// ============================================================
export const marketData = [
  { symbol: 'IBEX', name: 'IBEX 35', price: 13512.45, change: 0.65, image: '📊', source: 'Yahoo Finance', url: 'https://finance.yahoo.com/quote/%5EIBEX/' },
  { symbol: 'STOXX', name: 'Euro Stoxx 50', price: 5248.30, change: 0.38, image: '📊', source: 'Yahoo Finance', url: 'https://finance.yahoo.com/quote/%5ESTOXX50E/' },
  { symbol: 'DAX', name: 'DAX 40', price: 21845.70, change: 0.21, image: '📊', source: 'Yahoo Finance', url: 'https://finance.yahoo.com/quote/%5EGDAXI/' },
  { symbol: 'CAC', name: 'CAC 40', price: 8012.55, change: -0.14, image: '📊', source: 'Yahoo Finance', url: 'https://finance.yahoo.com/quote/%5EFCHI/' },
  { symbol: 'SPX', name: 'S&P 500', price: 6890.23, change: 0.42, image: '📊', source: "Barron's", url: 'https://www.barrons.com/market-data/indexes/spx' },
  { symbol: 'NDAQ', name: 'Nasdaq 100', price: 24810.5, change: 1.15, image: '📊', source: "Barron's", url: 'https://www.barrons.com/market-data/indexes/ndx' },
  { symbol: 'DJI', name: 'Dow Jones', price: 44520.10, change: 0.18, image: '📊', source: "Barron's", url: 'https://www.barrons.com/market-data/indexes/djia' },
  { symbol: 'BTC', name: 'Bitcoin', price: 95230.0, change: 2.34, image: '₿', source: 'CoinMarketCap', url: 'https://coinmarketcap.com/currencies/bitcoin/' },
  { symbol: 'ETH', name: 'Ethereum', price: 4850.75, change: 1.89, image: '◆', source: 'CoinMarketCap', url: 'https://coinmarketcap.com/currencies/ethereum/' },
  { symbol: 'SOL', name: 'Solana', price: 248.40, change: 3.12, image: '◈', source: 'CoinMarketCap', url: 'https://coinmarketcap.com/currencies/solana/' },
  { symbol: 'EURUSD', name: 'EUR/USD', price: 1.081, change: -0.31, image: '💱', source: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/input?i=EUR%2FUSD' },
  { symbol: 'GBPUSD', name: 'GBP/USD', price: 1.264, change: 0.08, image: '💱', source: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/input?i=GBP%2FUSD' },
  { symbol: 'GOLD', name: 'Gold (oz)', price: 2845.60, change: 0.72, image: '🥇', source: 'Reuters', url: 'https://www.reuters.com/markets/commodities/gold' },
  { symbol: 'OIL', name: 'Brent Crude', price: 78.45, change: -1.24, image: '🛢️', source: 'Reuters', url: 'https://www.reuters.com/business/energy/' },
];

// ============================================================
// AI Daily Briefing (home hero)
// ============================================================
export const dailyBriefing = {
  updated: minsAgo(20),
  headline: m(
    "El BCE marca el dÃ­a, la vivienda calienta el Congreso y el BarÃ§a recupera el liderato",
    "The ECB sets the day\u2019s tone, housing heats up Congress, and BarÃ§a reclaim top spot",
    "El BCE marca el dia, l\u2019habitatge escalfa el CongrÃ©s i el BarÃ§a recupera el lideratge",
  ),
  regions: [
    {
      region: "local",
      articleId: "loc-3",
      text: m(
        "Barcelona confirma la primera bajada de alquileres en una dÃ©cada (-4,2%), mientras el puerto pacta limitar los cruceros a cinco escalas diarias.",
        "Barcelona confirms the first rent drop in a decade (-4.2%), while the port agrees to cap cruise calls at five per day.",
        "Barcelona confirma la primera baixada de lloguers en una dÃ¨cada (-4,2%), mentre el port pacta limitar els creuers a cinc escales diÃ ries.",
      ),
    },
    {
      region: "national",
      articleId: "nat-3",
      text: m(
        "La ley de vivienda llega al Congreso con 500.000 personas en las calles; EspaÃ±a encadena seis trimestres liderando el crecimiento europeo.",
        "The housing law reaches Congress with 500,000 people on the streets; Spain strings six straight quarters leading European growth.",
        "La llei d\u2019habitatge arriba al CongrÃ©s amb 500.000 persones als carrers; Espanya encadena sis trimestres liderant el creixement europeu.",
      ),
    },
    {
      region: "international",
      articleId: "int-1",
      text: m(
        "El BCE baja tipos al 1,75% y relaja su marco; 40 paÃ­ses firman el primer tratado vinculante de IA con EEUU y China a bordo.",
        "The ECB cuts rates to 1.75% and loosens its framework; 40 countries sign the first binding AI treaty with the US and China aboard.",
        "El BCE abaixa tipus a l\u20191,75% i relaxa el seu marc; 40 paÃ¯sos signen el primer tractat vinculant d\u2019IA amb els EUA i la Xina a bord.",
      ),
    },
  ],
  opinion: m(
    "Si algo conecta las portadas de hoy es la tensiÃ³n entre capital y vivienda: Frankfurt abarata el dinero el mismo dÃ­a que medio millÃ³n de personas exige que ese dinero no vuelva a inflar el ladrillo. Los tipos bajos sin polÃ­tica de vivienda ambiciosa son gasolina para el problema que las calles denuncian. La lecciÃ³n del dÃ­a es incÃ³moda pero clara: la polÃ­tica monetaria ya hizo su parte; ahora el balÃ³n estÃ¡ en los parlamentos.",
    "If anything connects today\u2019s front pages, it is the tension between capital and housing: Frankfurt makes money cheaper on the very day half a million people demand that money stop inflating bricks. Low rates without ambitious housing policy are fuel for the problem the streets denounce. Today\u2019s lesson is uncomfortable but clear: monetary policy has done its part; the ball is now in the parliaments.",
    "Si alguna cosa connecta les portades d\u2019avui Ã©s la tensiÃ³ entre capital i habitatge: Frankfurt abarateix els diners el mateix dia que mig miliÃ³ de persones exigeix que aquests diners no tornin a inflar el totxo. Els tipus baixos sense polÃ­tica d\u2019habitatge ambiciosa sÃ³n gasolina per al problema que els carrers denuncien. La lliÃ§Ã³ del dia Ã©s incÃ²moda perÃ² clara: la polÃ­tica monetÃ ria ja ha fet la seva part; ara la pilota Ã©s als parlaments.",
  ),
};

// When the data was last refreshed (rendered in UI as "last updated")
export const lastUpdated = new Date();
