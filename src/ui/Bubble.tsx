import { motion } from "framer-motion";

interface BubbleProps {
  title: string;
  x: number;
  y: number;
  delay?: number;
  color?: string;
  onClick?: () => void;
}

export default function Bubble({
  title,
  x,
  y,
  delay = 0,
  color,
  onClick,
}: BubbleProps) {
  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.6,
        type: "spring",
      }}
      whileHover={{
        scale: 1.1,
        y: -6,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%,-50%)",
        width: 90,
        height: 90,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,.25)",
        background:
          color ??
          "linear-gradient(180deg,rgba(255,255,255,.35),rgba(255,255,255,.12))",
        backdropFilter: "blur(18px)",
        color: "white",
        fontWeight: 700,
        cursor: "pointer",
        boxShadow:
          "0 10px 40px rgba(0,0,0,.35), inset 0 0 15px rgba(255,255,255,.25)",
      }}
    >
      {title}
    </motion.button>
  );
}
