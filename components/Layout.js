import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  // === DARK MODE HANDLING ===
  useEffect(() => {
    const setAppTheme = () => {
      const darkMode = localStorage.getItem('theme') === 'dark';
      const lightMode = localStorage.getItem('theme') === 'light';

      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else if (lightMode) {
        document.documentElement.classList.remove('dark');
      }
    };

    const handleSystemThemeChange = () => {
      const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkQuery.onchange = (e) => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      };
    };

    setAppTheme();
    handleSystemThemeChange();
  }, []);

  // === LAYOUT STRUCTURE ===
  return (
    <div className="relative pb-24 overflow-visible">
      {/* Header, Footer, Gradient, and Content free width */}
      {children}
    </div>
  );
}
