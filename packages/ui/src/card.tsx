import React from 'react';

export interface CardProps {
    title?: string;
    subtitle?: string;
    image?: string;
    children?: React.ReactNode;
    className?: string;
}

export function Card({ title, subtitle, image, children, className }: CardProps): JSX.Element {
    return (
        <div className={`card ${className}`}>
            {image && <img src={image} alt={title} className="card-image" />}
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                {subtitle && <p className="card-subtitle">{subtitle}</p>}
                {children && <div className="card-body">{children}</div>}
            </div>
        </div>
    );
}

Card.displayName = "Card";