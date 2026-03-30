import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import { useState } from 'react'
import ContactModal from './components/Contact'
import LoadingScreen from './components/Loader'
import './App.css'

function App() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(`${import.meta.env.BASE_URL}/black.mp4`)

  return (
    <>
      <div className="bg-noise" />
      {loading && (
        <LoadingScreen onFinish={() => setLoading(false)} />
      )}

      {!loading && (
        <div id="home" className="w-full min-h-screen relative overflow-x-hidden text-gray-100 font-sans selection:bg-neon-green selection:text-black">

          <Header setOpen={setOpen} />

          {/* Spline Background Container
          <div className="w-full h-full absolute right-0! inset-0 z-0 pointer-events-none opacity-40">
            <div className="absolute inset-0 linear-gradient-to-t from-noir-base via-transparent to-noir-base z-10" />
            <div className="absolute inset-0 linear-gradient-to-r from-noir-base via-transparent to-transparent z-10 w-1/2" />
            <div className="w-full h-full xl:ml-32">
              <Spline scene="https://prod.spline.design/MDLTxGAKJo40M-k6/scene.splinecode" onLoad={() => setLoading(false)} />
            </div>
          </div>*/}

          <div className="fixed top-0 right-0 z-0 w-full md:w-2/4 h-2/4 pointer-events-none overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-1000 mask-b-from-80% mask-b-to-100%"
            >
              <source src={`${import.meta.env.BASE_URL}/black1.mp4`} type="video/mp4" />
            </video>
          </div>


          {/* Main Content */}
          <main className="bg-black/40 md:bg-black/10 backdrop-blur-sm md:backdrop-blur-none relative z-10 max-w-7xl mx-auto pt-32 pb-16 px-6 xl:px-0">
            <Hero />
            <Projects />
          </main>

          <ContactModal open={open} onClose={() => setOpen(false)} />
          <Footer />
        </div>
      )}
    </>
  )
}

export default App
