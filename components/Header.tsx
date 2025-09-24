import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-6 rounded-xl shadow-lg text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">القراء العشرة ورواتهم</h1>
            <p className="text-lg md:text-xl opacity-90 mt-2">من طريق الشاطبية والدرة</p>
        </header>
    );
};

export default Header;