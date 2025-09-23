
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center py-6 mt-12 border-t border-gray-300 text-gray-600">
            <p className="mb-4">جميع الحقوق محفوظة للاستاذة سميرة ظافر الشعوبي 1447هـ 2025م مؤسسة قطر الندى</p>
            <a href="https://wa.me/967775331038" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-block bg-[#25D366] text-white py-2 px-6 rounded-full font-bold shadow-md hover:bg-green-600 transition-colors duration-300">
                تواصل معنا عبر واتساب
            </a>
        </footer>
    );
};

export default Footer;
