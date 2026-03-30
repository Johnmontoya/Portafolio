import { useEffect, useRef } from "react";
import { useI18n } from "react-simple-i18n";

const Hero = () => {
    const revealRefs = useRef<(HTMLElement | null)[]>([]);
    const { t } = useI18n();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        target.style.animationPlayState = "running";
                        target.style.opacity = "1";
                    }
                });
            },
            { threshold: 0.1 }
        );

        revealRefs.current.forEach((el) => {
            if (el) {
                el.style.opacity = "0";
                el.style.animationPlayState = "paused";
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    const addToRevealRefs = (el: HTMLElement | null) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <div className="relative pt-12">
            {/* Ambient glow top-right */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-40 right-60 w-48 h-48 bg-neon-violet/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Status badge */}
            <div
                ref={addToRevealRefs}
                className="inline-flex items-center gap-3 px-4 py-2 mb-10 border border-neon-green/30 bg-neon-green/5 backdrop-blur-sm animate-stagger-reveal"
                style={{ animationDelay: "0s" }}
            >
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
                </span>
                <span className="font-display text-xs uppercase tracking-[0.25em] text-neon-green">
                    {t("fullFeaturedWebServices")}
                </span>
            </div>

            {/* Main headline */}
            <h1
                ref={addToRevealRefs}
                className="h-52 font-display text-4xl md:text-[6rem] font-extrabold leading-[0.88] tracking-tighter mb-6 max-w-5xl uppercase animate-stagger-reveal"
                style={{ animationDelay: "0.1s" }}
            >
                {t("hiIm")}{" "}
                <span className="text-neon-green relative inline-block overflow-hidden">
                    John
                </span>{" "}
                <br />
                <span className="text-neon-green">Montoya.</span>
            </h1>

            {/* Subtitle — removed "junior", reframed as strength */}
            <div
                ref={addToRevealRefs}
                className="flex items-center gap-4 mb-8 animate-stagger-reveal"
                style={{ animationDelay: "0.18s" }}
            >
                <div className="w-8 h-[2px] bg-neon-green/60" />
                <p className="font-display text-lg md:text-2xl uppercase tracking-[0.15em] text-white/70 font-medium">
                    {t("juniorFullStackDeveloper")}
                </p>
            </div>

            {/* Description — punchy, confident copy */}
            <p
                ref={addToRevealRefs}
                className="max-w-xl text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 animate-stagger-reveal border-l-2 border-white/10 pl-5"
                style={{ animationDelay: "0.26s" }}
            >
                {t("aboutMe")}
            </p>

            {/* CTAs */}
            <div
                ref={addToRevealRefs}
                className="flex flex-wrap items-center gap-5 mb-6 animate-stagger-reveal"
                style={{ animationDelay: "0.34s" }}
            >
                <a
                    href="#projects"
                    className="group relative border border-neon-green/60 px-8 py-4 font-display font-bold uppercase tracking-widest text-sm bg-neon-green/5 hover:bg-neon-green hover:text-black transition-all duration-300 flex items-center gap-3 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        {t("seeProjects")}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                </a>

                {/* Scroll indicator */}
                <div className="hidden md:flex items-center gap-3 text-xs font-mono text-gray-600 uppercase tracking-widest">
                    <div className="w-6 h-10 border border-white/20 rounded-full flex items-start justify-center pt-2">
                        <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
                    </div>
                    <span>scroll</span>
                </div>
            </div>

            {/* Stats row */}
            <div
                ref={addToRevealRefs}
                className="flex items-center gap-8 mb-32 mt-12 animate-stagger-reveal"
                style={{ animationDelay: "0.42s" }}
            >
                {[
                    { num: "3+", label: "Projects shipped" },
                    { num: "2+", label: "Years learning" },
                    { num: "∞", label: "Lines of code" },
                ].map(({ num, label }) => (
                    <div key={label} className="flex flex-col">
                        <span className="h-8 font-display text-2xl font-extrabold text-neon-green leading-none">{num}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-mono">{label}</span>
                    </div>
                ))}
            </div>

            {/* Section divider */}
            <div className="flex items-center gap-4 mb-10">
                <h2
                    ref={addToRevealRefs}
                    className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wider border-l-4 border-neon-violet pl-4 animate-stagger-reveal"
                    style={{ animationDelay: "0.5s" }}
                >
                    What I can build
                </h2>
                <div className="flex-1 h-px linear-gradient-to-r from-white/10 to-transparent" />
            </div>

            {/* Services cards */}
            <div className="grid md:grid-cols-3 gap-5 relative z-10">
                {[
                    {
                        color: "bg-neon-green",
                        shadow: "shadow-[0_0_14px_rgba(87,165,255,0.5)]",
                        borderHover: "hover:border-neon-green/60",
                        accentText: "text-neon-green",
                        title: t("webApps"),
                        text: t("webAppsText"),
                        index: "01",
                    },
                    {
                        color: "bg-neon-violet",
                        shadow: "shadow-[0_0_14px_rgba(142,45,226,0.5)]",
                        borderHover: "hover:border-neon-violet/60",
                        accentText: "text-neon-violet",
                        title: t("restAPIs"),
                        text: t("restAPIsText"),
                        index: "02",
                    },
                    {
                        color: "bg-white",
                        shadow: "shadow-[0_0_14px_rgba(255,255,255,0.3)]",
                        borderHover: "hover:border-white/40",
                        accentText: "text-white",
                        title: t("frontEnd"),
                        text: t("frontEndText"),
                        index: "03",
                    },
                ].map((card, i) => (
                    <div
                        key={i}
                        ref={addToRevealRefs}
                        className={`group relative border border-white/10 bg-white/2 p-7 ${card.borderHover} transition-all duration-500 backdrop-blur-md overflow-hidden animate-stagger-reveal`}
                        style={{ animationDelay: `${0.55 + i * 0.08}s` }}
                    >
                        {/* Number watermark */}
                        <span className="h-14 absolute top-4 right-5 font-display text-5xl font-extrabold text-white/4 select-none leading-none">
                            {card.index}
                        </span>

                        <div className={`w-10 h-10 mb-6 border border-white/15 flex items-center justify-center bg-black`}>
                            <div className={`w-3.5 h-3.5 ${card.color} ${card.shadow}`} />
                        </div>

                        <div className={`font-display font-bold uppercase tracking-wider text-lg mb-3 ${card.accentText}`}>
                            {card.title}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{card.text}</p>

                        {/* Bottom accent line on hover */}
                        <div className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] ${card.color} transition-all duration-500`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;