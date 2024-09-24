import React from 'react';

export interface HeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export function Hero({ title, subtitle, children, className }: HeroProps): JSX.Element {
  return (
    <div className={`hero ${className || ''}`}>
      <h1 className="hero-title">{title}</h1>
      {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
      {children && <div className="hero-content">{children}</div>}
    </div>
  );
}

Hero.displayName = 'Hero';