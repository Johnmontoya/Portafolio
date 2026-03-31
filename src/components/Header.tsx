import { useEffect, useState } from "react";
import { useI18n } from "react-simple-i18n";
import usaFlag from '../../public/eeuu.svg'
import colombiaFlag from '../../public/colombia.svg'
import logo from '../../public/logo.svg'
import NavMobile from "./NavMobile";

const Header = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useI18n()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Also close mobile menu if scrolling down significantly
    useEffect(() => {
        const handleScrollClose = () => {
            if (isMenuOpen && window.scrollY > window.innerHeight / 2) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('scroll', handleScrollClose);
        return () => window.removeEventListener('scroll', handleScrollClose);
    }, [isMenuOpen]);

    const menu = [
        { title: 'Home', href: '#home' },
        { title: 'Projects', href: '#projects' },
    ];
    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4 md:px-10 transition-all duration-300 pointer-events-none backdrop-blur-xs`}>
                <div className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl border-b transition-all duration-300 z-50 relative ${isScrolled || isMenuOpen ? 'border-neon-green/50 bg-noir-base/80 backdrop-blur-xl py-3 px-6 shadow-[0_4px_30px_rgba(204,255,0,0.1)]' : 'border-white/20 py-4 px-2'}`}>

                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold tracking-wider font-display uppercase">
                        {menu.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="relative overflow-hidden group hover:text-neon-green transition-colors duration-300"
                            >
                                <span className="relative z-10">{t(item.title)}</span>
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-neon-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </a>
                        ))}

                        <button
                            onClick={() => setOpen(true)}
                            className="border-brutalist border-brutalist-hover px-5 py-2 font-display uppercase text-xs tracking-widest bg-black hover:bg-neon-green hover:text-black transition-all"
                        >
                            {t('Contact')}
                        </button>

                        <div className="flex items-center justify-between gap-3 border-l border-white/20 pl-6 ml-2 h-10">
                            <button onClick={() => i18n.setLang('enUS')} className="cursor-pointer hover:scale-110 transition-transform grayscale hover:grayscale-0"><img src={usaFlag} alt="English" className="w-5 h-5 object-cover" /></button>
                            <button onClick={() => i18n.setLang('esPE')} className="cursor-pointer hover:scale-110 transition-transform grayscale hover:grayscale-0"><img src={colombiaFlag} alt="Español" className="w-5 h-5 object-cover" /></button>
                        </div>
                    </nav>

                    {/* Mobile Hamburger */}
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
            </header>

            {/* Mobile Nav Overlay */}
            <NavMobile isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setOpen={setOpen} />
        </>
    )
}

export default Header