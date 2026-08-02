import React, { useState } from 'react';

// Image with graceful fallback: if the URL fails, render a category-coloured
// gradient with an emoji so the layout never shows a broken image.
const CATEGORY_EMOJI = {
  breaking: '\ud83d\udd34',
  barcelona: '\ud83c\udfd9\ufe0f',
  catalonia: '\ud83c\udfdb\ufe0f',
  spain: '\ud83c\uddea\ud83c\uddf8',
  international: '\ud83c\udf0d',
  finance: '\ud83d\udcc8',
  technology: '\ud83d\udcbb',
  sports: '\u26bd',
  science: '\ud83d\udd2c',
  lifestyle: '\u2728',
};

const CATEGORY_GRADIENT = {
  breaking: 'from-red-500 to-rose-700',
  barcelona: 'from-blue-500 to-indigo-700',
  catalonia: 'from-amber-400 to-orange-600',
  spain: 'from-purple-500 to-fuchsia-700',
  international: 'from-emerald-500 to-teal-700',
  finance: 'from-green-500 to-emerald-700',
  technology: 'from-sky-500 to-blue-700',
  sports: 'from-orange-500 to-red-600',
  science: 'from-violet-500 to-purple-700',
  lifestyle: 'from-pink-500 to-rose-600',
};

export default function SmartImage({ src, alt, category, className = '', eager = false }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br ${
          CATEGORY_GRADIENT[category] || 'from-gray-400 to-gray-600'
        } ${className}`}
      >
        <span className="text-5xl drop-shadow-lg select-none">
          {CATEGORY_EMOJI[category] || '\ud83d\udcf0'}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-gray-200 dark:bg-slate-700 ${className}`}>
      {!loaded && <div className="absolute inset-0 animate-skeleton" />}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
