
import React from 'react';

interface CardProps {
    title: string;
    subtitle?: string;
    onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, subtitle, onClick }) => {
    return (
        <div 
            onClick={onClick}
            className="bg-[#f0f7da] border border-gray-200 rounded-xl p-5 text-center cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-xl hover:-translate-y-2"
        >
            <h3 className="text-xl font-bold text-[#2c5f2d] mb-1">{title}</h3>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
    );
};

export default Card;
