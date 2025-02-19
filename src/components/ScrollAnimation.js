import { motion } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 1.4,
        ease: [0.22, 1, 0.36, 1], // Custom bezier curve for smooth animation
        staggerChildren: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;