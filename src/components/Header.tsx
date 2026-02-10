import { useEffect, useState } from "react";
import { useI18n } from "react-simple-i18n";
import usaFlag from '../../public/eeuu.svg'
import colombiaFlag from '../../public/colombia.svg'
import logo from '../../public/logo.svg'

const Header = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { t, i18n } = useI18n()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menu = [
        { title: 'Home', href: '#home' },
        { title: 'Projects', href: '#projects' },
    ];
    return (
        <header className={`w-full fixed bg-transparent left-0 right-0 top-0 h-[70px] z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300 ${isScrolled ? 'bg-slate-900/50 backdrop-blur-md' : ''}`}>
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10" />
            </div>

            <nav className="flex items-center gap-4.5 text-sm text-white/65">
                {menu.map((item) => (
                    <a
                        key={item.title}
                        href={item.href}
                        className="px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                    >
                        {t(item.title)}
                    </a>
                ))}

                <button
                    onClick={() => setOpen(true)}
                    className="px-2.5 py-2 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
                >
                    {t('Contact')}
                </button>

                <div className="flex items-center justify-between gap-2">
                    <button onClick={() => i18n.setLang('enUS')} className="cursor-pointer"><img src={usaFlag} alt="English" className="w-5 h-5" /></button>
                    <button onClick={() => i18n.setLang('esPE')} className="cursor-pointer"><img src={colombiaFlag} alt="Español" className="w-5 h-5" /></button>
                </div>
            </nav>

        </header>
    )
}

export default Header