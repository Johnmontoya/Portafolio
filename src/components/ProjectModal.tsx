import { useI18n } from "react-simple-i18n";
import { useEffect, useState } from "react";
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
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            setIsVisible(false);
            document.body.style.overflow = 'auto';
        }
    }, [project]);

    if (!project) return null;

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for animation
    };

    return (
        <div
            className={`fixed inset-0 z-50! pt-28 pb-10 flex items-center justify-center p-4 md:p-10 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Backdrop with extreme grain */}
            <div
                className="absolute inset-0 bg-noir-base/80 backdrop-blur-xl bg-noise"
                onClick={handleClose}
            />

            {/* Modal Content - Brutalist taking up more space */}
            <div
                className={`relative w-full max-w-4xl bg-black border border-white/20 shadow-[8px_8px_0px_white] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-105 translate-y-10 opacity-0'}`}
            >
                {/* Header/Image */}
                <div className="relative h-64 md:h-80 w-full overflow-hidden border-b border-white/20">
                    <div className="absolute inset-0 bg-neon-green/20 mix-blend-color z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter contrast-125 saturate-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                    {/* Close Button - Sharp corners */}
                    <button
                        onClick={handleClose}
                        className="absolute top-10 right-4 size-10 flex items-center justify-center bg-black border border-white/20 text-white hover:border-neon-green hover:bg-neon-green hover:text-black transition-colors z-30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="absolute bottom-6 left-6 md:left-10 z-20">
                        <span className="px-3 py-1 text-[10px] bg-neon-green text-black uppercase font-display font-bold tracking-widest border border-neon-green">
                            {project.category}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 uppercase tracking-wider text-white">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-10 max-h-[60vh] overflow-y-auto custom-scrollbar bg-black relative">
                    <div className="absolute inset-0 bg-noise pointer-events-none opacity-20" />

                    <div className="relative z-10 flex flex-col md:flex-row gap-10">

                        {/* Main Description */}
                        <div className="flex-1">
                            <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
                                {project.text}
                            </p>

                            {/* Credentials Terminal-Style */}
                            {((project.admin?.cuenta && project.admin?.contraseña) || (project.user?.cuenta && project.user?.contraseña)) && (
                                <div className="border border-white/10 p-5 mb-8 bg-[#050505] relative group">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green to-neon-violet" />

                                    <p className="text-[11px] text-gray-500 font-mono mb-6 uppercase tracking-widest border-l-2 border-neon-green pl-3">
                                        {i18n.getLang() === 'esPE'
                                            ? "AVISO: Servers gratuitos pueden tardar 50s en activar."
                                            : "WARNING: Free servers may take 50s to wake up."}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.admin?.cuenta && project.admin?.contraseña && (
                                            <div className="border border-white/5 p-4 bg-black/40 line-clamp-2">
                                                <h4 className="text-[10px] font-mono font-bold uppercase tracking-widest text-neon-green mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-neon-green animate-pulse" />
                                                    [ADMIN_CREDENTIALS]
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
                                                    <span className="w-1.5 h-1.5 bg-neon-violet animate-pulse" />
                                                    [USER_CREDENTIALS]
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

                        {/* Sidebar: Tech & Actions */}
                        <div className="w-full md:w-64 shrink-0 flex flex-col gap-8">

                            {/* Actions */}
                            <div className="flex flex-col gap-3">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/20 bg-white/5 hover:bg-neon-green hover:border-neon-green hover:text-black transition-all p-4 text-center font-display font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2"
                                >
                                    <GiWorld size={16} />
                                    {t('visitSite')}
                                </a>
                                <a
                                    href={project.link_github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/20 bg-white/5 hover:bg-white hover:text-black transition-all p-4 text-center font-display font-bold uppercase text-[10px] tracking-widest flex items-center justify-center gap-2"
                                >
                                    <FaGithub size={16} />
                                    {t('github')}
                                </a>
                            </div>

                            {/* Technologies Section */}
                            {project.tecnologies && project.tecnologies.length > 0 && (
                                <div>
                                    <h3 className="text-[10px] font-display font-bold text-gray-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">
                                        {i18n.getLang() === 'esPE' ? 'Tech_Stack' : 'Tech_Stack'} //
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tecnologies.map((tech, index) => (
                                            <div
                                                key={index}
                                                className="group relative flex items-center justify-center w-10 h-10 border border-white/10 transition-all hover:border-neon-green bg-white/5"
                                            >
                                                {tech.icon ? (
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="w-5 h-5 object-contain filter grayscale invert group-hover:grayscale-0 group-hover:invert-0 transition-all"
                                                    />
                                                ) : (
                                                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-neon-green">{tech.name.substring(0, 3)}</span>
                                                )}
                                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-neon-green text-black text-[9px] font-mono uppercase opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-50">
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
};

export default ProjectModal;
