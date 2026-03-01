import { useI18n } from "react-simple-i18n";
import { useEffect, useState } from "react";
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
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={handleClose}
            />

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-2xl bg-[#0a0a0c] border border-white/10 rounded-2xl overflow-hidden shadow-[0_32px_120px_rgba(0,0,0,0.8)] transition-all duration-300 ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}
            >
                {/* Header/Image */}
                <div className="relative h-44 md:h-56 w-full overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/20 to-transparent" />

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 size-10 flex items-center justify-center rounded-full bg-black/40 border border-white/10 text-white hover:bg-white/10 transition-colors z-30"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <div className="absolute bottom-6 left-8 z-10">
                        <span className="px-3 py-1 rounded-md text-[10px] uppercase font-black tracking-widest bg-white/10 border border-white/10 backdrop-blur-md text-white/80">
                            {project.category}
                        </span>
                        <h2 className="text-3xl font-bold mt-3 text-white font-['Fraunces',serif]">
                            {project.title}
                        </h2>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-8 pb-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {/* Technologies Section */}
                    {project.tecnologies && project.tecnologies.length > 0 && (
                        <div className="mb-8">
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-4">
                                {i18n.getLang() === 'esPE' ? 'Tecnologías Utilizadas' : 'Technologies Used'}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {project.tecnologies.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="group relative flex items-center justify-center size-11 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-white/20"
                                        title={tech.name}
                                    >
                                        {tech.icon ? (
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="size-6 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                                            />
                                        ) : (
                                            <span className="text-[10px] font-bold text-white/50">{tech.name.substring(0, 3)}</span>
                                        )}
                                        {/* Tooltip hint for touch devices or simple hover */}
                                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-white text-black text-[10px] font-black uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 whitespace-nowrap pointer-events-none shadow-xl">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <p className="text-white/70 leading-relaxed text-lg mb-8">
                        {project.text}
                    </p>

                    {/* Note and Credentials */}
                    <div className="bg-white/3 border border-white/5 rounded-2xl p-6 mb-8 relative overflow-hidden group/card shadow-inner">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                            </svg>
                        </div>

                        <p className="text-[13px] text-white/40 italic mb-6 leading-relaxed border-l-2 border-white/10 pl-4">
                            {i18n.getLang() === 'esPE'
                                ? "Nota: Algunos servicios pueden demorar hasta 50 segundos en cargar debido a la suspensión por inactividad de los servidores gratuitos (Render/Vercel)."
                                : "Note: Some services may take up to 50 seconds to load due to inactivity suspension on free server tiers (Render/Vercel)."}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            <div className="space-y-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                                <div className="flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-blue-400 animate-pulse" />
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-blue-400">
                                        {i18n.getLang() === 'esPE' ? 'Cuenta Administrador' : 'Admin Account'}
                                    </h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center bg-black/20 p-2 rounded-lg border border-white/5">
                                        <span className="text-[10px] text-white/30 font-bold uppercase">User</span>
                                        <span className="text-xs text-white font-mono font-bold">Admin</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/20 p-2 rounded-lg border border-white/5">
                                        <span className="text-[10px] text-white/30 font-bold uppercase">Pass</span>
                                        <span className="text-xs text-white font-mono font-bold">Admin1234</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                                <div className="flex items-center gap-2">
                                    <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                        {i18n.getLang() === 'esPE' ? 'Cuenta Usuario' : 'User Account'}
                                    </h4>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center bg-black/20 p-2 rounded-lg border border-white/5">
                                        <span className="text-[10px] text-white/30 font-bold uppercase">User</span>
                                        <span className="text-xs text-white font-mono font-bold">User</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-black/20 p-2 rounded-lg border border-white/5">
                                        <span className="text-[10px] text-white/30 font-bold uppercase">Pass</span>
                                        <span className="text-xs text-white font-mono font-bold">User1234</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:flex-1 bg-white text-black font-bold py-4 rounded-xl text-center hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/5 uppercase text-xs tracking-widest"
                        >
                            {t('visitSite')}
                        </a>
                        <button
                            onClick={handleClose}
                            className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/10 font-bold text-white hover:bg-white/5 transition-all text-xs uppercase tracking-widest"
                        >
                            {t('close')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
