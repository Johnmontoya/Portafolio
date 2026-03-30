import { useEffect } from "react";
import { useI18n } from "react-simple-i18n";

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
    const { t } = useI18n();

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (open) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay with noise */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl bg-noise cursor-pointer"
                onClick={onClose}
            />

            {/* Modal - Brutalist */}
            <div
                className="
          relative
          z-10
          w-full max-w-lg
          bg-black
          border-2 border-neon-green
          shadow-[8px_8px_0px_rgba(0,217,255,0.5)]
          p-8 md:p-10
          animate-[stagger-reveal_0.4s_ease-out_forwards]
        "
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="
            absolute top-4 right-4
            text-white hover:text-black hover:bg-neon-green
            border border-white/20 hover:border-neon-green
            p-2 transition-colors
          "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-10 font-display">
                    <div className="flex items-center gap-3 mb-2 text-neon-green text-[10px] uppercase font-bold tracking-widest">
                        <span className="w-2 h-2 bg-neon-green animate-pulse" />
                        [COMMUNICATION_LINK]
                    </div>
                    <h2 className="h-14 text-4xl font-bold text-white uppercase tracking-wider">
                        {t('Contact')}
                    </h2>
                    <p className="text-gray-400 text-sm font-sans mt-2">
                        Let&apos;s build something striking.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-6 font-mono text-sm">
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="NAME_"
                            className="
                w-full p-4 bg-noir-lighter text-white
                placeholder-gray-600 uppercase tracking-widest
                border border-white/20
                focus:outline-none focus:border-neon-green focus:bg-white/5 transition-colors
              "
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="EMAIL_"
                            className="
                w-full p-4 bg-noir-lighter text-white
                placeholder-gray-600 uppercase tracking-widest
                border border-white/20
                focus:outline-none focus:border-neon-green focus:bg-white/5 transition-colors
              "
                        />
                    </div>

                    {/* Subject */}
                    <div className="relative">
                        <select
                            className="
                w-full p-4 bg-noir-lighter text-white
                uppercase tracking-widest
                border border-white/20
                focus:outline-none focus:border-neon-green transition-colors appearance-none
              "
                        >
                            <option value="">SUBJECT_</option>
                            <option>WEB APPLICATION</option>
                            <option>BACKEND / API</option>
                            <option>FREELANCE PROJECT</option>
                            <option>JOB OPPORTUNITY</option>
                            <option>OTHER</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neon-green">
                            ▼
                        </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <textarea
                            rows={4}
                            placeholder="MESSAGE_"
                            className="
                w-full p-4 bg-noir-lighter text-white
                placeholder-gray-600 uppercase tracking-widest
                border border-white/20
                resize-none custom-scrollbar
                focus:outline-none focus:border-neon-green focus:bg-white/5 transition-colors
              "
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="
              w-full py-4 uppercase font-display font-bold tracking-[0.2em]
              bg-neon-green text-black
              border border-neon-green
              hover:bg-neon-green/80 hover:text-black transition-all
              active:translate-y-1 active:shadow-none
            "
                    >
                        {"[ TRANSMIT ]"}
                    </button>
                </form>
            </div>
        </div>
    );
}
