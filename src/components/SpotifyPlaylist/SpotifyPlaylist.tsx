import { useState } from 'react';

import { Icon } from '@/components/primitives';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const PLAYLIST_URL =
  'https://open.spotify.com/playlist/5Ev4ja9s4ikQMDkDZSm11B?si=9ab89f94c4944b6f&pt=411bcb23e781bda236e21ee9500d399e';

export const SpotifyPlaylist = () => {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal();
  const { ref: cardRef, visible: cardVisible } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(PLAYLIST_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-navy-light px-4 py-20 text-center">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <Icon name="music" size={64} className="mx-auto mb-4 text-gold" />
        <h2 className="mb-4 font-display text-4xl italic text-white sm:text-5xl">
          Playlist de la Boda
        </h2>
        <p className="mx-auto mb-8 max-w-md text-text-muted">
          ¡La pista de baile empieza acá!<br/>
          Sumá tus canciones favoritas y construyamos juntos una playlist perfecta para que nadie se quiera sentar.
        </p>
      </div>

      <div
        ref={cardRef}
        className={`reveal delay-2 ${cardVisible ? 'visible' : ''}`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-navy-dark"
            >
              <Icon name="spotify" size={20} />
              Abrir Playlist
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-navy-dark"
            >
              {copied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
              {copied ? '¡Copiado!' : 'Copiar enlace'}
            </button>
          </div>
          <p className="text-xs text-text-muted">
            Para agregar canciones, copiá el enlace y pegalo en tu navegador.
          </p>
        </div>
      </div>
    </section>
  );
};
