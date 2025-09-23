
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReadersSection from './components/ReadersSection';
import NarratorsSection from './components/NarratorsSection';

type Section = 'readers' | 'narrators';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>('readers');

    const primaryColor = "#2c5f2d";
    const secondaryColor = "#97bc62";

    const getButtonClass = (section: Section) => {
        return activeSection === section
            ? `bg-[${secondaryColor}] scale-105`
            : `bg-[${primaryColor}] hover:bg-[${secondaryColor}]`;
    };

    return (
        <div className="container max-w-6xl mx-auto p-5 min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-grow">
                <div className="flex justify-center items-center gap-5 md:gap-10 my-8 flex-wrap">
                    <button 
                        className={`text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-y-1 ${getButtonClass('readers')}`}
                        onClick={() => setActiveSection('readers')}>
                        القراء العشرة
                    </button>
                    <button 
                        className={`text-white px-8 py-3 text-lg font-bold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:-translate-y-1 ${getButtonClass('narrators')}`}
                        onClick={() => setActiveSection('narrators')}>
                        الرواة
                    </button>
                </div>

                <ReadersSection isActive={activeSection === 'readers'} />
                <NarratorsSection isActive={activeSection === 'narrators'} />
            </main>
            
            <Footer />
        </div>
    );
};

export default App;
