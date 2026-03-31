import { useI18n } from "react-simple-i18n";
import usaFlag from '../../public/eeuu.svg'
import colombiaFlag from '../../public/colombia.svg'
import { createPortal } from "react-dom";

const NavMobile = ({ isMenuOpen, setIsMenuOpen, setOpen }: {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
    setOpen: (open: boolean) => void;
}) => {
    const { t, i18n } = useI18n();
    const menu = [
        { title: 'Home', href: '#home' },
        { title: 'Projects', href: '#projects' },
    ];

    const modal = (
        <div
            className={`fixed inset-0 bg-black backdrop-blur-2xl flex flex-col transition-all duration-500 ease-in-out ${isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
                }`}
            style={{ zIndex: 9998 }}
        >
            <div className="absolute w-10 h-10 top-10 right-8">
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 z-50! text-neon-green cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-current transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-[2px] bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
                </button>
            </div>
            {/* Ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-neon-green/8 rounded-full blur-[100px] pointer-events-none" />

            {/* Corner decorations */}
            <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-neon-green/40" />
            <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-neon-green/40" />

            <div className="flex flex-col items-center justify-center flex-1 px-10">
                <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
                    {menu.map((item, index) => (
                        <a
                            key={item.title}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-3xl font-display font-bold uppercase tracking-[0.2em] w-full text-center py-5 border-b border-white/10 hover:text-neon-green transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                }`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            {t(item.title)}
                        </a>
                    ))}

                    <button
                        onClick={() => { setIsMenuOpen(false); setOpen(true); }}
                        className={`w-full mt-8 border-2 border-neon-green text-neon-green font-display font-bold uppercase tracking-widest py-5 transition-all duration-500 shadow-[4px_4px_0px_rgba(87,165,255,0.3)] active:translate-y-1 active:shadow-none ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                        style={{ transitionDelay: `${menu.length * 80}ms` }}
                    >
                        {t('Contact')}
                    </button>

                    <div
                        className={`flex gap-8 mt-10 transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                            }`}
                        style={{ transitionDelay: `${(menu.length + 1) * 80}ms` }}
                    >
                        <button
                            onClick={() => { i18n.setLang('enUS'); setIsMenuOpen(false); }}
                            className="group p-4 border border-white/10 bg-noir-lighter hover:border-neon-green transition-all"
                        >
                            <img src={usaFlag} alt="English" className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                        </button>
                        <button
                            onClick={() => { i18n.setLang('esPE'); setIsMenuOpen(false); }}
                            className="group p-4 border border-white/10 bg-noir-lighter hover:border-neon-green transition-all"
                        >
                            <img src={colombiaFlag} alt="Español" className="w-10 h-10 object-cover grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100" />
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );

    return createPortal(modal, document.body);
};

export default NavMobile;