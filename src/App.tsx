import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import ContactModal from './components/Contact'
import LoadingScreen from './components/Loader'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <LoadingScreen onFinish={() => setLoading(false)} />
      )}

      {!loading && (
        <div id="home" className="w-full min-h-screen flex flex-col overflow-x-hidden bg-gray-950 text-[#e9eef8] font-['Inter',system-ui,sans-serif]">

          <Header setOpen={setOpen} />

          {/* Hero + Contenido principal */}
          <main className="z-10 flex justify-between items-center pt-0 pb-16 px-6 relative">
            <div className="w-full h-full mr-10">
              <Hero />
              <Projects />
            </div>
            <div className='xl:flex hidden z-50 w-1/2 h-min-screen mx-auto'
            >
              <Spline scene="https://prod.spline.design/MDLTxGAKJo40M-k6/scene.splinecode" className='w-full h-96' onLoad={() => setLoading(false)} />
            </div>
          </main>

          {/* Decorative right side (mobile hidden) */}
          <div className="z-0 hidden lg:flex absolute right-0 top-0 w-1/2 h-[1700px] mask-l-from-70% mask-l-to-100% pointer-events-none">
            <div className="absolute top-112 left-0 w-44 h-32 rounded-full bg-radial-[at_40%_40%] from-sky-200 via-blue-400 to-red-900 to-30% blur-3xl" />
            <div className="absolute top-212 left-100 w-44 h-32 rounded-full bg-radial-[at_40%_40%] from-sky-200 via-blue-400 to-red-900 to-30% blur-3xl" />
          </div>

          <ContactModal open={open} onClose={() => setOpen(false)} />
          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
