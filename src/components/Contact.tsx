import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useI18n } from "react-simple-i18n";

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
    const { t } = useI18n();
    const [isVisible, setIsVisible] = useState(false);

    // Form states
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        if (open) {
            document.body.style.overflow = "hidden";
            requestAnimationFrame(() => setIsVisible(true));
            window.addEventListener("keydown", handleEsc);
        } else {
            setIsVisible(false);
            document.body.style.overflow = "";
            setStatus("idle"); // Reset status when closed
            setFormData({ name: "", email: "", subject: "", message: "" });
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            // Reemplaza 'tu_correo@ejemplo.com' por tu correo real
            const response = await fetch("https://formsubmit.co/ajax/johnmontoya777@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    Nombre: formData.name,
                    Email: formData.email,
                    Asunto: formData.subject || "Sin asunto",
                    Mensaje: formData.message,
                    _subject: `Nuevo mensaje de portafolio: ${formData.subject || "Contacto"}`,
                })
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
                // Optional: Close modal automatically after some time
                // setTimeout(() => handleClose(), 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus("error");
        }
    };

    const modal = (
        <div
            className={`fixed inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            style={{ zIndex: 9999 }}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer"
                onClick={handleClose}
            />

            {/* Modal */}
            <div
                className={`flex flex-col relative z-10 w-full max-h-[90vh] overflow-y-auto max-w-lg bg-black border-2 border-neon-green shadow-[8px_8px_0px_rgba(87,165,255,0.4)] p-8 md:p-10 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-[1.03] translate-y-5 opacity-0"
                    }`}
            >
                {/* Close */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white hover:text-black hover:bg-neon-green border border-white/20 hover:border-neon-green p-2 transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
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
                <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="NAME_"
                        className="w-full p-4 bg-noir-lighter text-white placeholder-gray-600 uppercase tracking-widest border border-white/20 focus:outline-none focus:border-neon-green focus:bg-white/5 transition-colors disabled:opacity-50"
                        disabled={status === "loading" || status === "success"}
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="EMAIL_"
                        className="w-full p-4 bg-noir-lighter text-white placeholder-gray-600 uppercase tracking-widest border border-white/20 focus:outline-none focus:border-neon-green focus:bg-white/5 transition-colors disabled:opacity-50"
                        disabled={status === "loading" || status === "success"}
                    />
                    <div className="relative">
                        <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full p-4 bg-noir-lighter text-white uppercase tracking-widest border border-white/20 focus:outline-none focus:border-neon-green transition-colors appearance-none disabled:opacity-50"
                            disabled={status === "loading" || status === "success"}
                        >
                            <option value="">SUBJECT_</option>
                            <option value="WEB APPLICATION">WEB APPLICATION</option>
                            <option value="BACKEND / API">BACKEND / API</option>
                            <option value="FREELANCE PROJECT">FREELANCE PROJECT</option>
                            <option value="JOB OPPORTUNITY">JOB OPPORTUNITY</option>
                            <option value="OTHER">OTHER</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neon-green">▼</div>
                    </div>
                    <textarea
                        rows={4}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="MESSAGE_"
                        className="w-full p-4 bg-noir-lighter text-white placeholder-gray-600 uppercase tracking-widest border border-white/20 resize-none focus:outline-none focus:border-neon-green focus:bg-white/5 transition-colors disabled:opacity-50"
                        disabled={status === "loading" || status === "success"}
                    />

                    {status === "success" && (
                        <div className="p-4 bg-neon-green/10 border border-neon-green text-neon-green text-center">
                            Mensaje enviado exitosamente. ¡Te contactaré pronto!
                        </div>
                    )}

                    {status === "error" && (
                        <div className="p-4 bg-red-500/10 border border-red-500 text-red-500 text-center">
                            Error al enviar el mensaje. Por favor, intenta nuevamente.
                        </div>
                    )}

                    {status !== "success" && (
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-4 uppercase font-display font-bold tracking-[0.2em] bg-neon-green text-black border border-neon-green hover:bg-neon-green/80 transition-all active:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "[ TRANSMITTING... ]" : "[ TRANSMIT ]"}
                        </button>
                    )}
                </form>
            </div>
        </div>
    );

    return createPortal(modal, document.body);
}