import { motion } from "framer-motion";
import { useRef } from "react";
import { useRive } from "@rive-app/react-canvas";
import "./services.scss";

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
const sliderVariants = {
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
};

function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { rive, RiveComponent } = useRive({
    src: "/svg/servicios.riv",
    stateMachines: "State Machine 1",
    artboard: "Artboard",
    autoplay: true,
  });

  return (
    <div className="w-full h-screen services relative flex bg-gradient-to-b from-[#080813fa] from-2% via-[#fffcd7] via-30% to-[#a3f5e5] to-90%">
      <div className="bg-gradient-to-b from-[#080813fa] from-2% w-full h-52 absolute top-0"></div>
      <div className="w-full h-auto absolute bottom-0 z-50">
        <img src="./carretera.png" className="w-full"/>
      </div>
      <div className="wrapper flex flex-row-reverse items-center z-40">
        <div className="h-1/2 w-full absolute -bottom-46 md:-bottom-5 lg:bottom-10 xl:bottom-16">
          <RiveComponent
            style={{ cursor: "pointer" }}
            //onMouseEnter={() => rive && rive.play()}
            //onMouseLeave={() => rive && rive.pause()}
          />
        </div>
        <motion.div
          className="textContainer w-96 md:w-full lg:w-1/2 px-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h3
            variants={textVariants}
            className="text-3xl md:text-5xl font-bold"
          >
            ¡Hola! Soy <span className="text-sky-500">John Montoya</span>
          </motion.h3>

          <motion.p className="text-2xl md:text-4xl" variants={textVariants}>
            <span className="text-sky-500">Desarrollador Web</span> entusiasta,
            comprometido con el aprendizaje continuo y apasionado por explorar
            nuevas tecnologías y tendencias en el campo de la{" "}
            <span className="text-sky-500">programación</span>.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;

/**
 * 
 * <div className="w-2/3 h-auto mx-auto pt-20 md:pt-0">
        <motion.div className="textContainer h-auto" variants={variants}>
          <p>
            I focus on helping your brand grow
            <br /> and move forward
          </p>
          <hr />
        </motion.div>
        <motion.div
          className="titleContainer flex flex-col items-center mt-10 h-48"
          variants={variants}
        >
          <div className="title">
            <h2 className="text-6xl font-thin">
              <motion.b whileHover={{ color: "orange" }}>Servicios</motion.b>
            </h2>
          </div>
        </motion.div>
      </div>
 * <motion.div
      className="services w-full h-full mt-20 flex flex-col justify-between"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="mountains"></motion.div>
      <motion.div className="textContainer h-full" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div
        className="titleContainer flex flex-col items-center mt-10 h-48"
        variants={variants}
      >
        <div className="title">
          <h2 className="text-6xl font-thin">
            <motion.b whileHover={{ color: "orange" }}>Servicios</motion.b>
          </h2>
        </div>
      </motion.div>
 */
