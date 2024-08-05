import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import './parallax.scss';

function Parallax(){
    const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return(
        <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #0c0c1d, #0c0c1d)"
      }}
    >
      <motion.h1 style={{ y: yText }}>
        What We Do
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url("/ship-1.png")`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
    )
}

export default Parallax;