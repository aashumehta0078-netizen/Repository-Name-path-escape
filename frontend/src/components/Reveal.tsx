import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const Reveal = ({ children, className = "", delay = 0 }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.9, delay: delay / 1000, ease: EASE }}
  >
    {children}
  </motion.div>
);
