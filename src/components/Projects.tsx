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
    tecnologies?: Technology[];
}

const Projects = () => {
    const { t } = useI18n()
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div id="projects" className="mt-16 mb-8">
            <div className="absolute size-18 left-10 rounded-full bg-radial-[at_50%_75%] from-blue-200 via-purple-400 to-pink-900 to-90% blur-3xl" />
            <div className="inline-block px-3 py-1.5 mb-9 rounded-lg bg-white/3 text-xs text-white/65">
                {t('featuredProjects')}
            </div>

            <h3 className="font-['Fraunces',serif] font-bold text-3xl mb-3">{t('projects')}</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-5">
                {projectsData.map((project: any, i: number) => (
                    <div
                        key={i}
                        className="cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className="group relative h-68 rounded-xl overflow-hidden border border-white/6 bg-cover bg-center shadow-[0_6px_26px_rgba(2,2,10,0.6)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_80px_rgba(123,75,255,0.12)] hover:border-white/12"
                            style={{
                                backgroundImage: `url('${project.image}')`,
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold bg-gradient-to-r from-[#4b84ff] to-[#4fffa7] text-white">
                                {project.category}
                            </div>
                            <div className="absolute bottom-3 left-3 z-10 bg-black/50 px-2.5 py-1 rounded-md">
                                <div className="font-bold text-white">
                                    {project.title}
                                </div>
                                <div className="text-white/70 text-xs mt-1">
                                    {project.text.length > 80 ? project.text.substring(0, 80) + '...' : project.text}
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
    )
}

export default Projects