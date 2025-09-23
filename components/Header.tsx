
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-[#2c5f2d] to-[#97bc62] text-white p-6 rounded-xl shadow-lg text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">القراء العشرة ورواتهم</h1>
            <p className="text-lg md:text-xl opacity-90 mt-2">من طريق الشاطبية والدرة</p>
        </header>
    );
};

export default Header;
