import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState(0);

    const phases = [
        "Initializing...",
        "Loading assets...",
        "Almost ready...",
        "Let's go.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((p) => {
                const next = p + 3;
                setPhase(Math.floor((next / 100) * phases.length));
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 700);
                    return 100;
                }
                return next;
            });
        }, 35);

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-noir-base text-white overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-neon-green/40" />
            <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-neon-green/40" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-neon-green/40" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-neon-green/40" />

            {/* Logo */}
            <img
                src={logo}
                alt="Logo"
                className="w-16 h-16 mb-6"
                style={{ filter: "drop-shadow(0 0 16px rgba(87,165,255,0.5))" }}
            />

            {/* Name */}
            <p className="font-display text-xs uppercase tracking-[0.4em] text-neon-green mb-1">
                John Montoya
            </p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-gray-600 mb-12">
                Full-Stack Developer
            </p>

            {/* Progress bar container */}
            <div className="w-48 relative">
                <div className="w-full h-[2px] bg-white/8">
                    <div
                        className="h-full bg-neon-green transition-all duration-75 ease-linear relative"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_rgba(87,165,255,0.9)]" />
                    </div>
                </div>

                <div className="flex justify-between items-center mt-3">
                    <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
                        {phases[Math.min(phase, phases.length - 1)]}
                    </span>
                    <span className="font-mono text-[10px] text-neon-green">
                        {progress}%
                    </span>
                </div>
            </div>
        </div>
    );
}