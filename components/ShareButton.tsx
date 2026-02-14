import React from 'react';

const ShareButton: React.FC = () => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Samsem Chifa',
                    text: 'samsem chifa rest carta digital:',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for desktop or unsupported browsers
            try {
                await navigator.clipboard.writeText(`samsem chifa rest carta digital: ${window.location.href}`);
                // Optional: You could add a toast notification here
                alert('Enlace copiado al portapapeles');
            } catch (err) {
                console.error('Failed to copy: ', err);
            }
        }
    };

    return (
        <button
            onClick={handleShare}
            className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 bg-green-600 text-white p-3 rounded-l-xl shadow-2xl hover:bg-green-700 transition-all duration-300 group border-l-2 border-t-2 border-b-2 border-white/20"
            aria-label="Compartir"
            title="Compartir nuestra carta"
        >
            <div className="flex flex-col items-center gap-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span className="hidden md:block text-xs font-bold uppercase tracking-wider" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                    Compartir
                </span>
            </div>
        </button>
    );
};

export default ShareButton;
