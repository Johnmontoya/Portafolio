import { useI18n } from "react-simple-i18n";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GiWorld } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "./Projects";

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const { t, i18n } = useI18n();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (project) {
            document.body.style.overflow = "hidden";
            requestAnimationFrame(() => setIsVisible(true));
        } else {
            setIsVisible(false);
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [project]);

    if (!project) return null;

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const modal = (
        <div
            className={`fixed inset-0 flex items-center justify-center p-4 md:p-8 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            style={{ zIndex: 9999 }}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" onClick={handleClose} />

            {/* Modal */}
            <div
                className={`relative w-full max-w-4xl bg-black border border-white/20 shadow-[6px_6px_0px_rgba(255,255,255,0.12)] flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? "scale-100 translate-y-0 opacity-100" : "scale-[1.03] translate-y-5 opacity-0"
                    }`}
                style={{ maxHeight: "90vh" }}
            >
                {/* Image header */}
                <div className="relative h-48 md:h-72 w-full overflow-hidden border-b border-white/15 shrink-0">
                    <div className="absolute inset-0 bg-neon-green/15 mix-blend-color z-10" />
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover filter contrast-125 saturate-0" />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent z-10" />

                    <button
                        onClick={handleClose}
                        aria-label="Cerrar"
                        className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center bg-black/70 border border-white/20 text-white hover:bg-neon-green hover:border-neon-green hover:text-black transition-all backdrop-blur-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    <div className="absolute bottom-5 left-5 md:left-8 z-20">
                        <span className="px-2 py-1 text-[9px] bg-neon-green text-black uppercase font-display font-bold tracking-widest">
                            {project.category}
                        </span>
                        <h2 className="text-2xl md:text-4xl font-display font-bold mt-3 uppercase tracking-wide text-white leading-tight">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Scrollable body */}
                <div className="flex-1 overflow-y-auto p-5 md:p-8 bg-black">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <p className="text-gray-300 font-light leading-relaxed text-base md:text-lg mb-8">
                                {project.text}
                            </p>

                            {((project.admin?.cuenta && project.admin?.contraseña) || (project.user?.cuenta && project.user?.contraseña)) && (
                                <div className="border border-white/10 p-5 mb-6 bg-noir-base relative">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-neon-green to-neon-violet" />
                                    <p className="text-[11px] text-gray-500 font-mono mb-5 uppercase tracking-widest border-l-2 border-neon-green pl-3">
                                        {i18n.getLang() === "esPE"
                                            ? "AVISO: Servers gratuitos pueden tardar 50s en activar."
                                            : "WARNING: Free servers may take 50s to wake up."}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.admin?.cuenta && project.admin?.contraseña && (
                                            <div className="border border-white/5 p-4 bg-black/40">
                                                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neon-green mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-neon-green animate-pulse" />[ADMIN_CREDENTIALS]
                                                </h4>
                                                <div className="space-y-2 font-mono text-xs">
                                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                                        <span className="text-gray-500">USER:</span>
                                                        <span className="text-white">{project.admin.cuenta}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">PASS:</span>
                                                        <span className="text-white">{project.admin.contraseña}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {project.user?.cuenta && project.user?.contraseña && (
                                            <div className="border border-white/5 p-4 bg-black/40">
                                                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neon-violet mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-neon-violet animate-pulse" />[USER_CREDENTIALS]
                                                </h4>
                                                <div className="space-y-2 font-mono text-xs">
                                                    <div className="flex justify-between border-b border-white/5 pb-2">
                                                        <span className="text-gray-500">USER:</span>
                                                        <span className="text-white">{project.user.cuenta}</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-500">PASS:</span>
                                                        <span className="text-white">{project.user.contraseña}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="w-full md:w-52 shrink-0 flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    className="border border-white/20 bg-white/5 hover:bg-neon-green hover:border-neon-green hover:text-black transition-all p-4 text-center font-display font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2">
                                    <GiWorld size={15} />{t("visitSite")}
                                </a>
                                <a href={project.link_github} target="_blank" rel="noopener noreferrer"
                                    className="border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all p-4 text-center font-display font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2">
                                    <FaGithub size={15} />{t("github")}
                                </a>
                            </div>

                            {project.tecnologies && project.tecnologies.length > 0 && (
                                <div>
                                    <h3 className="text-[10px] font-display font-bold text-gray-500 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
                                        Tech_Stack //
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tecnologies.map((tech, index) => (
                                            <div key={index} className="group flex items-center justify-center w-10 h-10 border border-white/10 hover:border-neon-green bg-white/5 transition-all">
                                                {tech.icon ? (
                                                    <div className="w-5 h-5 object-contain filter grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all">
                                                        <img src={tech.icon} alt={tech.name} />
                                                    </div>
                                                ) : (
                                                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-neon-green">{tech.name.substring(0, 3)}</span>
                                                )}
                                                <span className="absolute px-2 py-1 bg-neon-green text-black text-[9px] font-mono uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Renderiza directamente en document.body, fuera de cualquier contenedor padre
    return createPortal(modal, document.body);
};

export default ProjectModal;