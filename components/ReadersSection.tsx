import React, { useState, useRef, useEffect } from 'react';
import { readersData } from '../constants/data';
import { Reader } from '../types';
import Card from './Card';

interface ReadersSectionProps {
    isActive: boolean;
}

type ReaderInfoType = 'intro' | 'teachers' | 'narrators';

const ReadersSection: React.FC<ReadersSectionProps> = ({ isActive }) => {
    const [selectedReader, setSelectedReader] = useState<Reader | null>(null);
    const [activeInfo, setActiveInfo] = useState<ReaderInfoType>('intro');
    const detailsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isActive) {
            setSelectedReader(null);
        }
    }, [isActive]);

    const handleReaderSelect = (reader: Reader) => {
        if (selectedReader && selectedReader.id === reader.id) {
            setSelectedReader(null);
        } else {
            setSelectedReader(reader);
            setActiveInfo('intro');
            setTimeout(() => {
                detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    const renderInfoContent = () => {
        if (!selectedReader) return null;
        
        let content;
        switch(activeInfo) {
            case 'intro':
                content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedReader.color }}>التعريف بالقارئ: {selectedReader.name}</h3>
                    <p className="text-gray-700">{selectedReader.intro}</p>
                </>;
                break;
            case 'teachers':
                 content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedReader.color }}>أهم شيوخ {selectedReader.name}</h3>
                    <p className="text-gray-700">{selectedReader.teachers}</p>
                </>;
                break;
            case 'narrators':
                content = <>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: selectedReader.color }}>رواة {selectedReader.name}</h3>
                    <ul className="list-disc list-inside space-y-2">
                        {selectedReader.narrators.map((narrator, index) => (
                            <li key={index} className="text-gray-700">{narrator}</li>
                        ))}
                    </ul>
                </>;
                break;
            default:
                content = null;
        }
        return (
            <div 
                className="relative bg-gray-50 p-6 rounded-lg mt-5 min-h-[150px] border-t-8 overflow-hidden"
                style={{ borderColor: selectedReader.color }}
            >
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none">
                    <span className="text-5xl md:text-7xl font-black text-gray-200 -rotate-12 opacity-60">
                        القراء العشرة ورواتهم
                    </span>
                </div>
                <div className="relative z-10">
                    {content}
                </div>
            </div>
        );
    };
    
    const getButtonStyle = (infoType: ReaderInfoType, color: string) => {
        const baseClasses = "px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md";
        if (activeInfo === infoType) {
            return {
                base: `${baseClasses} text-white`,
                style: { backgroundColor: color }
            };
        }
        return {
            base: `${baseClasses} bg-white`,
            style: { color: color, border: `2px solid ${color}` }
        };
    };

    if (!isActive) return null;

    return (
        <section className="bg-white rounded-xl p-6 shadow-md mb-8 transition-opacity duration-500 ease-in-out animate-fadeIn">
            <h2 className="text-3xl font-bold text-center text-slate-800">القراء العشرة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                {readersData.map(reader => (
                    <Card 
                        key={reader.id} 
                        title={reader.name} 
                        color={reader.color}
                        onClick={() => handleReaderSelect(reader)} 
                    />
                ))}
            </div>

            {selectedReader && (
                <div ref={detailsRef} className="mt-10 transition-all duration-500 ease-in-out">
                    <div className="flex justify-center gap-4 my-5 flex-wrap">
                        <button 
                            className={getButtonStyle('intro', selectedReader.color).base}
                            style={getButtonStyle('intro', selectedReader.color).style}
                            onClick={() => setActiveInfo('intro')}>
                                التعريف بالقارئ
                        </button>
                        <button 
                             className={getButtonStyle('teachers', selectedReader.color).base}
                             style={getButtonStyle('teachers', selectedReader.color).style}
                            onClick={() => setActiveInfo('teachers')}>
                                أهم شيوخه
                        </button>
                        <button 
                             className={getButtonStyle('narrators', selectedReader.color).base}
                             style={getButtonStyle('narrators', selectedReader.color).style}
                            onClick={() => setActiveInfo('narrators')}>
                                رواته
                        </button>
                    </div>
                    {renderInfoContent()}
                </div>
            )}
        </section>
    );
};

export default ReadersSection;