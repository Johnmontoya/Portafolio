import { useEffect, useRef } from "react";
import { useI18n } from "react-simple-i18n";

const Hero = () => {
    const revealRefs = useRef<(HTMLElement | null)[]>([]);
    const { t } = useI18n()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
        );

        revealRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const addToRevealRefs = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };
    return (
        <>
            <div className="flex flex-col relative size-28 left-80 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% blur-3xl" />
            <div className="inline-block px-3 py-1.5 rounded-lg bg-white/3 text-xs text-white/65">
                {t('fullFeaturedWebServices')}
            </div>

            <h1
                ref={addToRevealRefs}
                className="reveal text-5xl md:text-6xl font-extrabold leading-tight tracking-[-0.6px] text-white mb-4.5 opacity-0 translate-y-4.5 transition-all duration-700 ease-out"
                style={{ transitionDelay: '0.1s' }}
            >
                {t('hiIm')} <span className="bg-gradient-to-r from-[#4b84ff] via-[#7be5ff] to-[#4fffa7] bg-clip-text text-transparent">John Montoya.</span>
                <br />
                <span className="text-3xl italic font-medium">
                    {t('juniorFullStackDeveloper')}
                </span>
            </h1>

            <p
                ref={addToRevealRefs}
                className="reveal text-white/65 max-w-2xl mb-5 text-lg leading-relaxed opacity-0 translate-y-4.5 transition-all duration-700 ease-out"
                style={{ transitionDelay: '0.2s' }}
            >
                {t('aboutMe')}
            </p>

            <div
                ref={addToRevealRefs}
                className="reveal h-20 flex items-center gap-4 opacity-0 translate-y-4.5 transition-all duration-700 ease-out"
                style={{ transitionDelay: '0.3s' }}
            >
                <a
                    href="#projects"
                    className="inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-[rgba(123,75,255,0.12)] to-[rgba(47,224,198,0.06)] border border-white/6 text-white font-semibold shadow-[0_10px_30px_rgba(13,8,30,0.6)] hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(27,8,60,0.6)] transition-all duration-300"
                >
                    {t('seeProjects')}
                </a>

                <span className="dots py-2 inline-flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2fe0c6] to-[#4b84ff] animate-bounce [animation-delay:0s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2fe0c6] to-[#4b84ff] animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#2fe0c6] to-[#4b84ff] animate-bounce [animation-delay:0.3s]" />
                </span>
            </div>

            {/* What I can build */}
            <h2
                ref={addToRevealRefs}
                className="reveal h-18 text-4xl md:text-5xl font-semibold mt-16 mb-5 text-white opacity-0 translate-y-4.5 transition-all duration-700 ease-out"
                style={{ transitionDelay: '0.4s' }}
            >
                What I can build.
            </h2>

            <div className="grid md:grid-cols-3 gap-7 mt-7">
                <div className="flex gap-3.5 items-start">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-white/3 to-white/2 flex items-center justify-center shrink-0">
                        <div className="w-8 h-8 rounded bg-[#0f1724] flex items-center justify-center">
                            <div className="w-6 h-0.5 bg-white/80 rounded-full" style={{ backgroundColor: '#6ef0d1' }} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-white">{t("webApps")}</div>
                        <div className="text-white/55 text-sm mt-1.5 leading-relaxed">{t('webAppsText')}</div>
                    </div>
                </div>
                <div className="flex gap-3.5 items-start">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-white/3 to-white/2 flex items-center justify-center shrink-0">
                        <div className="w-8 h-8 rounded bg-[#0f1724] flex items-center justify-center">
                            <div className="w-6 h-0.5 bg-white/80 rounded-full" style={{ backgroundColor: '#8b6bff' }} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-white">{t("restAPIs")}</div>
                        <div className="text-white/55 text-sm mt-1.5 leading-relaxed">{t('restAPIsText')}</div>
                    </div>
                </div>
                <div className="flex gap-3.5 items-start">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-b from-white/3 to-white/2 flex items-center justify-center shrink-0">
                        <div className="w-8 h-8 rounded bg-[#0f1724] flex items-center justify-center">
                            <div className="w-6 h-0.5 bg-white/80 rounded-full" style={{ backgroundColor: '#ff8dc8' }} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-white">{t("frontEnd")}</div>
                        <div className="text-white/55 text-sm mt-1.5 leading-relaxed">{t('frontEndText')}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero