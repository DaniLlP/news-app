import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  ExternalLink,
  BarChart3,
  Newspaper,
  Globe,
} from "lucide-react";
import { newsService } from "../services/newsService";
import { useTranslation } from "../translations/i18n";

// Finance reports/news from major outlets
const financeReports = [
  {
    id: "fr-1",
    title: {
      es: "Perspectivas semanales: Los bancos centrales marcan el ritmo",
      en: "Weekly Outlook: Central banks set the pace",
      ca: "Perspectives setmanals: Els bancs centrals marquen el ritme",
    },
    source: "Barron's",
    url: "https://www.barrons.com/market-data",
    category: "outlook",
    published: new Date(Date.now() - 2 * 3600000),
  },
  {
    id: "fr-2",
    title: {
      es: "¿Está el mercado europeo infravalorado? Análisis cuantitativo",
      en: "Is the European market undervalued? A quantitative analysis",
      ca: "Està el mercat europeu infravalorat? Anàlisi quantitativa",
    },
    source: "Wolfram Alpha Research",
    url: "https://www.wolframalpha.com/input?i=european+stock+market+valuation",
    category: "analysis",
    published: new Date(Date.now() - 5 * 3600000),
  },
  {
    id: "fr-3",
    title: {
      es: "Bitcoin institucional: el nuevo régimen de baja volatilidad",
      en: "Institutional Bitcoin: the new low-volatility regime",
      ca: "Bitcoin institucional: el nou règim de baixa volatilitat",
    },
    source: "Bloomberg Markets",
    url: "https://www.bloomberg.com/crypto",
    category: "crypto",
    published: new Date(Date.now() - 8 * 3600000),
  },
  {
    id: "fr-4",
    title: {
      es: "El petróleo cae por temores de demanda asiática y dólar fuerte",
      en: "Oil falls on Asian demand fears and strong dollar",
      ca: "El petroli cau per temors de demanda asiàtica i dòlar fort",
    },
    source: "Reuters Commodities",
    url: "https://www.reuters.com/business/energy/",
    category: "commodities",
    published: new Date(Date.now() - 4 * 3600000),
  },
  {
    id: "fr-5",
    title: {
      es: "Las renovables españolas atraen 2.000M€ en bonos verdes esta semana",
      en: "Spanish renewables attract €2bn in green bonds this week",
      ca: "Les renovables espanyoles atrauen 2.000M€ en bons verds aquesta setmana",
    },
    source: "Cinco Días",
    url: "https://cincodias.elpais.com/mercados-financieros/",
    category: "bonds",
    published: new Date(Date.now() - 6 * 3600000),
  },
  {
    id: "fr-6",
    title: {
      es: "Análisis técnico: niveles clave del IBEX 35 para la próxima semana",
      en: "Technical analysis: key IBEX 35 levels for next week",
      ca: "Anàlisi tècnica: nivells clau de l'IBEX 35 per a la setmana vinent",
    },
    source: "Yahoo Finance",
    url: "https://finance.yahoo.com/quote/%5EIBEX/",
    category: "technical",
    published: new Date(Date.now() - 10 * 3600000),
  },
];

const CATEGORY_COLORS = {
  outlook: "from-blue-500 to-indigo-600",
  analysis: "from-purple-500 to-violet-600",
  crypto: "from-amber-500 to-orange-600",
  commodities: "from-emerald-500 to-green-600",
  bonds: "from-teal-500 to-cyan-600",
  technical: "from-sky-500 to-blue-600",
};

export default function FinanceSection({ currentLang }) {
  const t = useTranslation(currentLang);
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("markets");

  const pick = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[currentLang] || field.en || field.es || "";
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await newsService.getMarketData();
      setMarketData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const tabs = [
    { id: "markets", label: t.finance.markets, icon: BarChart3 },
    {
      id: "reports",
      label:
        currentLang === "es"
          ? "Informes"
          : currentLang === "ca"
            ? "Informes"
            : "Reports",
      icon: Newspaper,
    },
  ];

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-24 bg-gray-200 dark:bg-slate-700 rounded-xl"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Tab switcher */}
      <div className="flex gap-1.5 bg-gray-100 dark:bg-slate-800 p-1 rounded-xl">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-all ${
              activeTab === id
                ? "bg-white dark:bg-slate-700 text-gray-900 dark:text-white shadow-sm"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      {/* MARKETS TAB */}
      {activeTab === "markets" && (
        <div className="space-y-3">
          {/* Market summary cards — grouped */}
          {[
            {
              label:
                currentLang === "es"
                  ? "Europa"
                  : currentLang === "ca"
                    ? "Europa"
                    : "Europe",
              items: marketData.filter((i) =>
                ["IBEX", "STOXX", "DAX", "CAC"].includes(i.symbol),
              ),
            },
            {
              label:
                currentLang === "es"
                  ? "EEUU"
                  : currentLang === "ca"
                    ? "EUA"
                    : "US",
              items: marketData.filter((i) =>
                ["SPX", "NDAQ", "DJI"].includes(i.symbol),
              ),
            },
            {
              label: "Crypto",
              items: marketData.filter((i) =>
                ["BTC", "ETH", "SOL"].includes(i.symbol),
              ),
            },
            {
              label:
                currentLang === "es"
                  ? "Divisas y materias primas"
                  : currentLang === "ca"
                    ? "Divises i matèries primeres"
                    : "FX & Commodities",
              items: marketData.filter((i) =>
                ["EURUSD", "GBPUSD", "GOLD", "OIL"].includes(i.symbol),
              ),
            },
          ].map((group) => (
            <div key={group.label}>
              <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-1">
                {group.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {group.items.map((item) => (
                  <a
                    key={item.symbol}
                    href={item.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white dark:bg-slate-800 rounded-xl p-3 hover:shadow-lg active:scale-[0.98] transition-all border border-gray-100 dark:border-slate-700 overflow-hidden"
                  >
                    {/* Background gradient hint */}
                    <div
                      className={`absolute inset-0 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity bg-gradient-to-br ${
                        item.change >= 0
                          ? "from-green-400 to-emerald-600"
                          : "from-red-400 to-rose-600"
                      }`}
                    />

                    <div className="relative">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                          {item.symbol}
                        </span>
                        <span className="text-lg">{item.image}</span>
                      </div>

                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-0.5 truncate">
                        {typeof item.price === "number"
                          ? item.price >= 1000
                            ? item.price.toLocaleString(undefined, {
                                maximumFractionDigits: 0,
                              })
                            : item.price.toFixed(item.price < 10 ? 4 : 2)
                          : item.price}
                      </p>

                      <div className="flex items-center gap-1">
                        <span
                          className={`inline-flex items-center gap-0.5 text-xs font-bold px-1.5 py-0.5 rounded-md ${
                            item.change >= 0
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                              : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                          }`}
                        >
                          {item.change >= 0 ? (
                            <TrendingUp size={11} />
                          ) : (
                            <TrendingDown size={11} />
                          )}
                          {item.change > 0 ? "+" : ""}
                          {item.change}%
                        </span>
                      </div>

                      {/* Mini sparkline */}
                      <div className="mt-2 flex items-end gap-px h-6">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t-sm ${
                              item.change >= 0
                                ? "bg-green-400/60 dark:bg-green-500/40"
                                : "bg-red-400/60 dark:bg-red-500/40"
                            }`}
                            style={{
                              height: `${25 + Math.sin(i * 0.8 + (item.price % 3)) * 30 + Math.random() * 25}%`,
                            }}
                          />
                        ))}
                      </div>

                      {/* Source label */}
                      <p className="mt-1.5 text-[9px] text-gray-400 dark:text-gray-500 truncate">
                        via {item.source}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-3">
            <p className="text-xs text-blue-800 dark:text-blue-200">
              ℹ️ {t.finance.disclaimer}
            </p>
          </div>
        </div>
      )}

      {/* REPORTS TAB */}
      {activeTab === "reports" && (
        <div className="space-y-2.5">
          {financeReports.map((report) => (
            <a
              key={report.id}
              href={report.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-3.5 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 hover:shadow-md active:scale-[0.99] transition-all"
            >
              {/* Color accent */}
              <div
                className={`w-1 self-stretch rounded-full bg-gradient-to-b ${
                  CATEGORY_COLORS[report.category] ||
                  "from-gray-400 to-gray-600"
                } flex-shrink-0`}
              />

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
                  {pick(report.title)}
                </h3>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <span className="font-medium">{report.source}</span>
                  <span>•</span>
                  <span>
                    {Math.round((Date.now() - report.published) / 3600000)}h
                  </span>
                </div>
              </div>

              <ExternalLink
                size={16}
                className="text-gray-400 group-hover:text-blue-500 transition-colors mt-1 flex-shrink-0"
              />
            </a>
          ))}

          {/* External sources */}
          <div className="pt-3 border-t border-gray-200 dark:border-slate-700">
            <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Globe size={13} />
              {currentLang === "es"
                ? "Fuentes"
                : currentLang === "ca"
                  ? "Fonts"
                  : "Sources"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { name: "Yahoo Finance", url: "https://finance.yahoo.com" },
                { name: "Barron's", url: "https://www.barrons.com" },
                { name: "Bloomberg", url: "https://www.bloomberg.com/markets" },
                { name: "Wolfram Alpha", url: "https://www.wolframalpha.com" },
                { name: "Reuters", url: "https://www.reuters.com/markets/" },
                { name: "Cinco Días", url: "https://cincodias.elpais.com" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-gray-100 dark:bg-slate-700 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {s.name}
                  <ExternalLink size={10} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
