// ============================================================
// KAPAK SAYFASI — 3D sahne hazır olunca genişletilecek
// ============================================================

import { motion } from "framer-motion";

export default function CoverPage() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-4"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-white/30">
          Hoş geldin
        </p>
        <h1 className="text-4xl font-light text-white leading-tight">
          Adın Soyadın
        </h1>
        <p className="text-white/40 text-sm max-w-xs mx-auto leading-relaxed">
          Bir insan rehberi. Sayfalara göz atmak için yukarıdaki balonları kullan.
        </p>
        <div className="pt-4 flex items-center justify-center gap-2 text-white/20 text-xs">
          <span>←</span>
          <span>klavye okları ile de gezebilirsin</span>
          <span>→</span>
        </div>
      </motion.div>
    </div>
  );
}
