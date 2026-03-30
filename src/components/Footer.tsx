const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full relative z-20 border-t border-white/10 bg-black overflow-hidden">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neon-green to-transparent" />

            {/* Main footer content */}
            <div className="max-w-7xl mx-auto px-6 xl:px-0 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                {/* Left: Brand */}
                <div>
                    <div className="font-display font-extrabold text-xl uppercase tracking-wider text-white mb-1">
                        John Montoya
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600">
                        Full-Stack Developer <span className="text-neon-green">// {year}</span>
                    </p>
                </div>

                {/* Center: Social links */}
                <div className="flex items-center gap-6">
                    {[
                        { label: "GitHub_", href: "#" },
                        { label: "LinkedIn_", href: "#" },
                        { label: "Contact_", href: "#" },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="font-mono text-[11px] uppercase tracking-widest text-gray-500 hover:text-neon-green transition-colors duration-300 relative group overflow-y-hidden"
                        >
                            {label}
                            <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-neon-green transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Right: Status */}
                <div className="flex items-center gap-2 border border-white/10 px-4 py-2 bg-neon-green/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-neon-green">
                        Open to work
                    </span>
                </div>
            </div>

            {/* Bottom micro-text */}
            <div className="border-t border-white/5 py-4 px-6 xl:px-0">
                <p className="max-w-7xl mx-auto font-mono text-[9px] uppercase tracking-[0.25em] text-white/15 text-center md:text-left">
                    Designed & Built with care by John Montoya — Bogotá, Colombia
                </p>
            </div>
        </footer>
    );
};

export default Footer;