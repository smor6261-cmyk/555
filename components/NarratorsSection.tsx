
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
        setSelectedNarrator(narrator);
        setActiveInfo('intro');
        setTimeout(() => {
            detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const renderInfoContent = () => {
        if (!selectedNarrator) return null;

        let content;
        switch(activeInfo) {
            case 'intro':
                content = <>
                    <h3 className="text-2xl font-bold text-[#2c5f2d] mb-3">التعريف بالراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700">{selectedNarrator.intro}</p>
                </>;
                break;
            case 'path':
                content = <>
                    <h3 className="text-2xl font-bold text-[#2c5f2d] mb-3">طريق الراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700">{selectedNarrator.path}</p>
                </>;
                break;
            case 'origins':
                content = <>
                    <h3 className="text-2xl font-bold text-[#2c5f2d] mb-3">أصول القراءات للراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700">{selectedNarrator.origins}</p>
                </>;
                break;
            case 'uniqueness':
                content = <>
                    <h3 className="text-2xl font-bold text-[#2c5f2d] mb-3">انفرادات الراوي: {selectedNarrator.name}</h3>
                    <p className="text-gray-700">{selectedNarrator.uniqueness}</p>
                </>;
                break;
            default:
                content = null;
        }
        return <div className="bg-gray-50 p-6 rounded-lg mt-5 min-h-[150px]">{content}</div>;
    };
    
    const getSubButtonClass = (infoType: NarratorInfoType) => {
        return activeInfo === infoType
            ? 'bg-[#2c5f2d]'
            : 'bg-[#97bc62] hover:bg-[#2c5f2d]';
    };

    if (!isActive) return null;

    return (
        <section className="bg-white rounded-xl p-6 shadow-md mb-8 transition-opacity duration-500 ease-in-out animate-fadeIn">
            <h2 className="text-3xl font-bold text-center text-[#2c5f2d]">الرواة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                {narratorsData.map(narrator => (
                    <Card 
                        key={narrator.id} 
                        title={narrator.name} 
                        subtitle={`راوي ${narrator.reader}`}
                        onClick={() => handleNarratorSelect(narrator)} />
                ))}
            </div>

            {selectedNarrator && (
                <div ref={detailsRef} className="mt-10 transition-all duration-500 ease-in-out">
                    <div className="flex justify-center gap-3 md:gap-4 my-5 flex-wrap">
                        <button className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base ${getSubButtonClass('intro')}`} onClick={() => setActiveInfo('intro')}>التعريف بالراوي</button>
                        <button className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base ${getSubButtonClass('path')}`} onClick={() => setActiveInfo('path')}>طريق الراوي</button>
                        <button className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base ${getSubButtonClass('origins')}`} onClick={() => setActiveInfo('origins')}>أصول القراءات</button>
                        <button className={`text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm md:text-base ${getSubButtonClass('uniqueness')}`} onClick={() => setActiveInfo('uniqueness')}>انفرادات الراوي</button>
                    </div>
                    {renderInfoContent()}
                </div>
            )}
        </section>
    );
};

export default NarratorsSection;
