import { useState, useEffect, useCallback } from 'react';

import Script from 'next/script';

import css from '../styles/theme.util.module.css';

const maybeTheme = () => {
  const themeLocalStorage = localStorage.getItem('theme');
  const themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  return themeLocalStorage ?? themeSystem;
};

const THEMES = ['dark', 'light', 'unicorn', 'mustard'];

export default function SetTheme() {
  const [theme, setTheme] = useState();

  const toggleTheme = useCallback(() => {
    const index = THEMES.indexOf(theme);
    if (index < 0 || index >= THEMES.length - 1) {
      setTheme(THEMES[0]);
    } else {
      setTheme(THEMES[index + 1]);
    }
  }, [theme]);

  useEffect(() => {
    document.querySelector(':root').dataset.theme = theme ?? maybeTheme();
    localStorage.setItem('theme', theme ?? maybeTheme());
    setTheme(theme ?? maybeTheme());

    const useSetTheme = (e) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    const watchSysTheme = window.matchMedia('(prefers-color-scheme: dark)');

    watchSysTheme.addEventListener('change', useSetTheme);

    return () => {
      watchSysTheme.removeEventListener('change', useSetTheme);
    };
  }, [theme]);

  return (
    <>
      <Script id="theme.util.jsx" strategy="beforeInteractive">
        {`
          let themeLocalStorage = localStorage.getItem('theme');
          let themeSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem;
        `}
      </Script>
      <button key="themeToggle" onClick={toggleTheme} data-theme={theme} className={css.toggle}>
        {theme}
      </button>
    </>
  );
}
