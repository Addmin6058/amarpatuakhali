import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Smooth progress counter from 0 to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Increment faster towards the end
        const step = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + step);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(onFinish, 400); // Allow fade-out animation to complete
      }, 400);
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onFinish]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(onFinish, 200);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 transition-opacity duration-500 cursor-pointer select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Ambient background glow matching the splash graphic */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-35 scale-110 pointer-events-none"
        style={{ backgroundImage: `url('/assets/aistudio/IMG_20261026_100326_271_bc7a080b.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-emerald-950/40 to-slate-950/90 pointer-events-none" />

      {/* Main Container - Phone aspect ratio framed elegantly on large screens, edge-to-edge on mobile */}
      <div className="relative w-full max-w-md h-[100dvh] flex flex-col justify-between items-center shadow-2xl overflow-hidden bg-black/40">
        {/* Full Image */}
        <img
          src="/assets/aistudio/IMG_20261026_100326_271_bc7a080b.png"
          alt="Amar Patuakhali Splash"
          className="w-full h-full object-cover object-center select-none pointer-events-none"
        />

        {/* Live Loading Overlay at Bottom */}
        <div className="absolute bottom-6 left-0 right-0 px-8 flex flex-col items-center pointer-events-auto">
          {/* Progress bar */}
          <div className="w-full max-w-[220px] bg-emerald-950/60 backdrop-blur-md h-2 rounded-full overflow-hidden border border-emerald-400/30 p-[1px] shadow-lg mb-3">
            <div
              className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-300 rounded-full transition-all duration-200 ease-out shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between w-full max-w-[220px] text-[11px] font-semibold text-emerald-100 drop-shadow-md">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" />
              <span>ডিজিটাল সেবা প্রস্তুত...</span>
            </span>
            <span className="font-mono text-cyan-200">{progress}%</span>
          </div>

          {/* Direct Entry / Skip button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
            className="mt-4 px-4 py-1.5 rounded-full bg-black/35 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white/90 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
          >
            <span>সরাসরি প্রবেশ করুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
