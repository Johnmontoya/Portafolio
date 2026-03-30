import { useI18n } from "react-simple-i18n";
import projectsData from "../assets/projects";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export interface Technology {
    name: string;
    icon?: string;
}

export interface Project {
    title: string;
    category: string;
    text: string;
    image: string;
    link: string;
    link_github: string;
    tecnologies?: Technology[];
    admin?: {
        cuenta: string;
        contraseña: string;
    };
    user?: {
        cuenta: string;
        contraseña: string;
    };
    selling?: boolean;
    selling_note?: string;
}

const Projects = () => {
    const { t } = useI18n();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="projects" className="mt-32 mb-16 relative">
            {/* Ambient light */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-neon-violet/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Section header */}
            <div className="mb-14 flex items-end justify-between">
                <div className="border-l-4 border-neon-green pl-4">
                    <div className="inline-block mb-2 text-[10px] font-display tracking-[0.25em] uppercase text-neon-green font-bold">
                        {t("featuredProjects")}
                    </div>
                    <h3 className="h-14 font-display font-extrabold text-4xl md:text-5xl uppercase tracking-tight text-white">
                        {t("projects")}
                    </h3>
                </div>

                {/* Project count */}
                <div className="hidden md:flex items-center gap-2 font-mono text-xs text-gray-600 uppercase tracking-widest">
                    <span className="text-neon-green font-bold text-xl">{projectsData.length}</span>
                    <span>projects</span>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {projectsData.map((project: Project, i: number) => (
                    <div
                        key={i}
                        className="cursor-pointer group reveal show"
                        onClick={() => setSelectedProject(project)}
                        style={{ transitionDelay: `${i * 60}ms` }}
                    >
                        <div className="relative h-[360px] border border-white/15 bg-noir-lighter overflow-hidden transition-all duration-500 hover:border-neon-green/70 hover:shadow-[0_0_40px_rgba(87,165,255,0.12)] flex flex-col justify-end">

                            {/* Background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700 group-hover:scale-[1.04]"
                                style={{ backgroundImage: `url('${project.image}')` }}
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 linear-gradient-to-t from-noir-base via-noir-base/70 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />

                            {/* Hover neon border top */}
                            <div className="absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-neon-green transition-all duration-500 z-20" />

                            {/* Content */}
                            <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                                {/* Top badges */}
                                <div className="flex justify-between items-start mb-auto">
                                    <div className="px-3 py-1 text-[9px] font-display font-bold uppercase tracking-[0.2em] bg-black/80 border border-white/15 text-white/70 group-hover:border-neon-green/60 group-hover:text-neon-green transition-all duration-300 backdrop-blur-sm">
                                        {project.category}
                                    </div>
                                    {project.selling && (
                                        <div className="px-3 py-1 text-[9px] font-display font-bold uppercase tracking-widest bg-neon-violet/90 text-white backdrop-blur-sm">
                                            {project.selling_note}
                                        </div>
                                    )}
                                </div>

                                {/* Project info */}
                                <div>
                                    {/* Arrow indicator */}
                                    <div className="mb-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                                        <span className="text-neon-green text-xs font-mono uppercase tracking-widest">View project</span>
                                        <span className="text-neon-green text-sm">→</span>
                                    </div>

                                    <h4 className="font-display font-bold text-2xl uppercase tracking-wide text-white group-hover:text-neon-green transition-colors duration-300 mb-2 leading-tight">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                                        {project.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default Projects;