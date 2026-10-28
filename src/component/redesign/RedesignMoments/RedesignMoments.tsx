"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./RedesignMoments.module.css";

const reels = [
  {
    number: "01",
    href: "https://www.instagram.com/reel/DeG6WawMapV/",
    image: "/images/redesign/reel-01.jpg",
  },
  {
    number: "02",
    href: "https://www.instagram.com/reel/DeRC5avMudZ/",
    image: "/images/redesign/reel-02.jpg",
  },
];

type Reel = (typeof reels)[number];

function ReelPreview({ reel, active, onOpen, onClose }: {
  reel: Reel;
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const previewButton = useRef<HTMLButtonElement>(null);

  return (
    <article className={styles.reel} aria-label={`Selected wedding reel ${reel.number}`}>
      <div className={styles.frame}>
        <Image
          src={reel.image}
          alt={`A moment from Your Wedding Lens wedding reel ${reel.number}.`}
          fill
          sizes="(max-width: 800px) 90vw, 470px"
          className={styles.poster}
        />
        <button ref={previewButton} type="button" className={styles.previewButton} hidden={active} onClick={onOpen} aria-label={`Preview wedding reel ${reel.number}`}>
          <span className={styles.playIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="m9 5 11 7-11 7Z" fill="currentColor" /></svg>
          </span>
          <span className={styles.previewLabel}>Preview reel <span aria-hidden="true">↗</span></span>
        </button>
        {active && (
          <>
            <iframe
              className={styles.player}
              src={`${reel.href}embed/?cr=1&v=14`}
              title={`Your Wedding Lens — wedding reel ${reel.number}`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <button type="button" className={styles.closeButton} aria-label={`Close preview of reel ${reel.number}`} onClick={() => {
              onClose();
              requestAnimationFrame(() => previewButton.current?.focus());
            }}>
              <span aria-hidden="true">×</span>
            </button>
          </>
        )}
      </div>
      <div className={styles.caption}>
        <p className={styles.reelLabel}>SELECTED REEL {reel.number}</p>
        <a href={reel.href} target="_blank" rel="noopener noreferrer" className={styles.watchLink}>
          Watch on Instagram <span aria-hidden="true">↗</span>
          <span className="sr-only"> — reel {reel.number}</span>
        </a>
      </div>
    </article>
  );
}

export default function RedesignMoments() {
  const [activeReel, setActiveReel] = useState<string | null>(null);

  return (
    <section id="moments" className={styles.section} aria-labelledby="moments-heading">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>A FEW MOMENTS, KEPT</p>
            <h2 id="moments-heading" className={styles.heading}>
              A little of<br />
              <em>the feeling.</em>
            </h2>
          </div>
          <p className={styles.introduction}>
            The familiar faces, the little glances, the energy in the room.
            A glimpse of the stories we get to keep.
          </p>
        </header>

        <div className={styles.gallery}>
          {reels.map(reel => (
            <ReelPreview key={reel.href} reel={reel} active={activeReel === reel.number} onOpen={() => setActiveReel(reel.number)} onClose={() => setActiveReel(null)} />
          ))}
        </div>

        <a
          className={styles.profileLink}
          href="https://www.instagram.com/yourweddinglens/"
          target="_blank"
          rel="noopener noreferrer"
        >
          More moments at @yourweddinglens <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
