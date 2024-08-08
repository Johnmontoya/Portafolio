import { motion } from "framer-motion";
import "./hero.scss";
import { useRive } from "@rive-app/react-canvas";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
/*const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as "mirror", // Aquí explicitamos el tipo
      duration: 20,
    },
  },
};*/

function Hero() {
  const { RiveComponent } = useRive({
    src: "https://res.cloudinary.com/dnx4de9yv/raw/upload/v1723075335/hero.riv",
    //src: "./svg/inicio.riv",
    stateMachines: "State Machine 1",
    animations: "Timeline 1",
    artboard: "Artboard",
    autoplay: true,
  });

  return (
    <>
      <div className="hero">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative items-center justify-center">
          <div className="w-full md:w-full h-svh flex items-center md:text-center lg:text-start">
          <motion.div
            className="w-full h-auto px-10 relative flex flex-col gap-4"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h3
              variants={textVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
            >
              ¡Hola! Soy <span className="text-sky-500">John Montoya</span>
            </motion.h3>

            <motion.p
              className="text-xl md:text-2xl lg:text-3xl"
              variants={textVariants}
            >
              <span className="text-sky-500">Desarrollador Web</span>{" "}
              entusiasta, comprometido con el aprendizaje continuo y apasionado
              por explorar nuevas tecnologías y tendencias en el campo de la{" "}
              <span className="text-sky-500">programación</span>.
            </motion.p>
            <motion.div variants={textVariants}>
              <motion.button
                className="text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                variants={textVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Descargar CV
              </motion.button>
            </motion.div>
            <motion.img
              className="mx-0 md:mx-auto lg:mx-0 h-12 w-14"
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
          </div>
          <div className="w-0 lg:w-full h-0 lg:h-svh relative">
          </div>
          <div className="h-1/2 w-full absolute bottom-0 md:-bottom-24 lg:-bottom-14">
            <RiveComponent
              style={{ cursor: "pointer" }}
              //onMouseEnter={() => rive && rive.play()}
              //onMouseLeave={() => rive && rive.pause()}
            />
         
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

/**
 * 
 * <>
      <div className="hero">
        <div className="wrapper flex items-center">
          <motion.div
            className="textContainer w-96 md:w-full lg:w-1/2 px-10"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h3
              variants={textVariants}
              className="text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold"
            >
              ¡Hola! Soy <span className="text-sky-500">John Montoya</span>
            </motion.h3>

            <motion.p className="text-xl md:text-xl xl:text-2xl 2xl:text-3xl" variants={textVariants}>
              <span className="text-sky-500">Desarrollador Web</span>{" "}
              entusiasta, comprometido con el aprendizaje continuo y apasionado
              por explorar nuevas tecnologías y tendencias en el campo de la{" "}
              <span className="text-sky-500">programación</span>.
            </motion.p>
            <motion.div variants={textVariants}>
              <motion.button
                className="text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                variants={textVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Descargar CV
              </motion.button>
            </motion.div>
            <motion.img
              className="mx-auto md:mx-0"
              variants={textVariants}
              animate="scrollButton"
              src="/scroll.png"
              alt=""
            />
          </motion.div>
          <div className="h-1/2 w-full absolute -bottom-36 md:-bottom-20 lg:-bottom-10 xl:bottom-0">
            <RiveComponent
              style={{ cursor: "pointer" }}
              //onMouseEnter={() => rive && rive.play()}
              //onMouseLeave={() => rive && rive.pause()}
            />
          </div>          
        </div>
        {/*
        <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Web
      </motion.div>
      
      <div className="bg-gradient-to-t from-[#080813fa] from-5% w-full h-40 absolute bottom-0"></div>
      </div>
    </>
 */
