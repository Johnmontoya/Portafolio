const Footer = () => {
    return (
        <footer className="w-full bottom-0 z-20 py-7 px-6 md:px-6 bg-gray-950 text-white/60 flex justify-between items-center text-sm">
            <div>
                John Montoya. — <span className="text-white/65">© 2026</span>
            </div>
            <div className="flex gap-3">
                <a href="#" className="hover:text-white transition-colors">Contact</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
            <div className="absolute -top-40 left-180 w-28 h-22 rounded-full bg-radial-[at_40%_40%] from-sky-200 via-blue-400 to-red-900 to-30% blur-3xl" />
        </footer>
    )
}

export default Footer