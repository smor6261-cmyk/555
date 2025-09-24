import React, { useState, useRef, useEffect } from 'react';
import { narratorsData } from '../constants/data';
import { Narrator } from '../types';
import Card from './Card';

interface NarratorsSectionProps {
    isActive: boolean;
}

type NarratorInfoType = 'intro' | 'path' | 'origins' | 'uniqueness';

const NarratorsSection: React.FC<NarratorsSectionProps> = ({ isActive }) => {
    const [selectedNarrator, setSelectedNarrator] = useState<Narrator | null>(null);
    const [activeInfo, setActiveInfo] = useState<NarratorInfoType>('intro');
    const detailsRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
        if (!isActive) {
            setSelectedNarrator(null);
        }
    }, [isActive]);

    const handleNarratorSelect = (narrator: Narrator) => {
        if (selectedNarrator && selectedNarrator.id === narrator.id) {
            setSelectedNarrator(null);
        } else {
            setSelectedNarrator(narrator);
            setActiveInfo('intro');
            setTimeout(() => {
                detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const renderInfoContent = () => {
        if (!selectedNarrator) return null;

        let content;
        switch(activeInfo) {
            case 'intro':
                content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedNarrator.color }}>التعريف بالراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{selectedNarrator.intro}</p>
                </>;
                break;
            case 'path':
                content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedNarrator.color }}>طريق الراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{selectedNarrator.path}</p>
                </>;
                break;
            case 'origins':
                content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedNarrator.color }}>أصول القراءات للراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{selectedNarrator.origins}</p>
                </>;
                break;
            case 'uniqueness':
                content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedNarrator.color }}>انفرادات الراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{selectedNarrator.uniqueness}</p>
                </>;
                break;
            default:
                content = null;
        }
        return (
            <div 
                className="bg-gray-50 p-6 rounded-lg mt-5 min-h-[150px] border-t-8"
                style={{ borderColor: selectedNarrator.color }}
            >
                {content}
            </div>
        );
    };
    
    if (!isActive) return null;

    return (
        <section className="bg-white rounded-xl p-6 shadow-md mb-8 transition-opacity duration-500 ease-in-out animate-fadeIn">
            <h2 className="text-3xl font-bold text-center text-slate-800">الرواة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                {narratorsData.map(narrator => (
                    <Card 
                        key={narrator.id} 
                        title={narrator.name} 
                        subtitle={`راوي ${narrator.reader}`}
                        color={narrator.color}
                        onClick={() => handleNarratorSelect(narrator)} />
                ))}
            </div>

            {selectedNarrator && (
                <div ref={detailsRef} className="mt-10 transition-all duration-500 ease-in-out">
                    <div className="flex justify-center gap-3 md:gap-4 my-5 flex-wrap">
                        <button 
                            className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base transform hover:-translate-y-0.5 shadow-md`}
                            style={{ backgroundColor: activeInfo === 'intro' ? selectedNarrator.color : selectedNarrator.readerColor }}
                            onClick={() => setActiveInfo('intro')}>
                                التعريف بالراوي
                        </button>
                        <button 
                            className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base transform hover:-translate-y-0.5 shadow-md`}
                            style={{ backgroundColor: activeInfo === 'path' ? selectedNarrator.color : selectedNarrator.readerColor }}
                            onClick={() => setActiveInfo('path')}>
                                طريق الراوي
                        </button>
                        <button 
                            className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base transform hover:-translate-y-0.5 shadow-md`}
                            style={{ backgroundColor: activeInfo === 'origins' ? selectedNarrator.color : selectedNarrator.readerColor }}
                            onClick={() => setActiveInfo('origins')}>
                                أصول القراءات
                        </button>
                        <button 
                            className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base transform hover:-translate-y-0.5 shadow-md`}
                            style={{ backgroundColor: activeInfo === 'uniqueness' ? selectedNarrator.color : selectedNarrator.readerColor }}
                            onClick={() => setActiveInfo('uniqueness')}>
                                انفرادات الراوي
                        </button>
                    </div>
                    {renderInfoContent()}
                </div>
            )}
        </section>
    );
};

export default NarratorsSection;