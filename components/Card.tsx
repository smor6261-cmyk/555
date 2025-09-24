import React from 'react';

interface CardProps {
    title: string;
    subtitle?: string;
    onClick: () => void;
    color: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, onClick, color }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-white border-t-8 rounded-xl p-5 text-center cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:-translate-y-2"
            style={{ borderColor: color }}
        >
            <h3 className="text-xl font-bold mb-1" style={{ color }}>{title}</h3>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
    );
};

export default Card;