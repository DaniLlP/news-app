import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { newsService } from "../services/newsService";
import { useTranslation } from "../translations/i18n";

export default function FinanceSection({ currentLang }) {
  const t = useTranslation(currentLang);
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await newsService.getMarketData();
      setMarketData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-20 bg-gray-200 dark:bg-slate-700 rounded-lg"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {marketData.map((item) => (
          <div
            key={item.symbol}
            className="bg-white dark:bg-slate-800 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{item.image}</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.symbol}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.name}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-bold text-gray-900 dark:text-white">
                  {typeof item.price === "number"
                    ? item.price.toFixed(2)
                    : item.price}
                </div>
                <div
                  className={`flex items-center justify-end gap-1 font-semibold ${
                    item.change >= 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {item.change >= 0 ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}
                  <span>
                    {item.change > 0 ? "+" : ""}
                    {item.change}%
                  </span>
                </div>
              </div>
            </div>

            {/* Mini chart placeholder */}
            <div className="mt-3 h-8 bg-gray-100 dark:bg-slate-700 rounded flex items-end gap-0.5 px-1">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-full rounded-t-sm ${
                    item.change >= 0
                      ? "bg-gradient-to-t from-green-500 to-green-400"
                      : "bg-gradient-to-t from-red-500 to-red-400"
                  }`}
                  style={{
                    height: `${20 + Math.random() * 60}%`,
                    opacity: 0.7,
                  }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Finance data disclaimer */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          {"\u2139\ufe0f"} {t.finance.disclaimer}
        </p>
      </div>
    </div>
  );
}
