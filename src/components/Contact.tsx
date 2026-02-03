import { useEffect } from "react";

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (open) window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="
          relative
          z-10
          w-full max-w-md
          mx-4
          rounded-2xl
          bg-white/5 backdrop-blur-xl
          border border-white/10
          p-6
          shadow-2xl
        "
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="
            absolute top-4 right-4
            text-gray-400 hover:text-white
            text-xl
          "
                >
                    ✕
                </button>

                {/* Header */}
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-white">
                        Contact Me
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Let&apos;s build something amazing together.
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Name */}
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
                            👤
                        </span>
                        <input
                            type="text"
                            placeholder="Name"
                            className="
                w-full pl-10 pr-4 py-3 rounded-xl
                bg-black/40 text-white
                placeholder-gray-400
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
                            ✉️
                        </span>
                        <input
                            type="email"
                            placeholder="Email"
                            className="
                w-full pl-10 pr-4 py-3 rounded-xl
                bg-black/40 text-white
                placeholder-gray-400
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
                        />
                    </div>

                    {/* Subject */}
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400">
                            🧠
                        </span>
                        <select
                            className="
                w-full pl-10 pr-4 py-3 rounded-xl
                bg-black/40 text-white
                border border-white/10
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
                        >
                            <option value="">Select a subject</option>
                            <option>Web Application</option>
                            <option>Backend / API</option>
                            <option>Freelance Project</option>
                            <option>Job Opportunity</option>
                            <option>Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="relative">
                        <span className="absolute left-3 top-4 text-cyan-400">
                            💬
                        </span>
                        <textarea
                            rows={4}
                            placeholder="Message"
                            className="
                w-full pl-10 pr-4 py-3 rounded-xl
                bg-black/40 text-white
                placeholder-gray-400
                border border-white/10
                resize-none
                focus:outline-none focus:ring-2 focus:ring-cyan-500
              "
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="
              w-full py-3 rounded-xl
              bg-gradient-to-r from-cyan-500 to-blue-600
              text-white font-semibold
              hover:opacity-90 transition
              shadow-lg shadow-cyan-500/30
            "
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
