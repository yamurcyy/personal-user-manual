// ============================================================
// KULLANIM KILAVUZU SAYFASI
// ============================================================

import { motion } from "framer-motion";
import { manualData } from "../data/manual";
import type { WarningItem } from "../types";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

export default function ManualPage() {
  const {
    productName,
    version,
    serialNumber,
    manufacturingDate,
    specs,
    installation,
    warranty,
    maintenance,
    troubleshooting,
    warnings,
    funFacts,
  } = manualData;

  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-8">

        {/* Başlık */}
        <motion.div custom={0} variants={fadeIn} initial="hidden" animate="show">
          <div className="border border-amber-400/20 rounded-2xl p-5 bg-amber-400/5">
            <p className="text-xs uppercase tracking-widest text-amber-400/60 mb-1">
              Kullanım Kılavuzu
            </p>
            <h1 className="text-xl font-light text-white leading-snug">
              {productName}
            </h1>
            <div className="flex gap-4 mt-3 text-xs text-white/30">
              <span>Sürüm: {version}</span>
              <span>SN: {serialNumber}</span>
              <span>Üretim: {manufacturingDate}</span>
            </div>
          </div>
        </motion.div>

        {/* Uyarı kutuları */}
        <motion.div custom={1} variants={fadeIn} initial="hidden" animate="show">
          <div className="space-y-2">
            {warnings.map((w, i) => (
              <WarningBox key={i} warning={w} />
            ))}
          </div>
        </motion.div>

        {/* Teknik Özellikler */}
        <motion.div custom={2} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Teknik Özellikler</SectionTitle>
          <div className="space-y-4">
            {specs.map((category, i) => (
              <div key={i} className="rounded-xl border border-white/10 overflow-hidden">
                <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    {category.category}
                  </p>
                </div>
                <table className="w-full">
                  <tbody>
                    {category.specs.map((spec, j) => (
                      <tr
                        key={j}
                        className={j % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"}
                      >
                        <td className="px-4 py-2 text-xs text-white/40 w-2/5">
                          {spec.label}
                        </td>
                        <td className="px-4 py-2 text-xs text-white/80 font-mono">
                          {spec.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Kurulum */}
        <motion.div custom={3} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Kurulum Talimatları</SectionTitle>
          <div className="space-y-3">
            {installation.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono text-white/40">
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="text-sm text-white/90 font-medium">{step.title}</p>
                    {step.duration && (
                      <span className="text-xs text-white/30 whitespace-nowrap">
                        {step.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {step.description}
                  </p>
                  {step.tip && (
                    <p className="text-xs text-amber-400/60 mt-2 flex items-start gap-1">
                      <span>💡</span>
                      <span>{step.tip}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Garanti */}
        <motion.div custom={4} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Garanti Kapsamı</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <p className="text-xs text-emerald-400/60 uppercase tracking-widest mb-2">
                ✓ Kapsam
              </p>
              <ul className="space-y-1">
                {warranty.coverage.map((item, i) => (
                  <li key={i} className="text-xs text-white/60 flex items-start gap-1.5">
                    <span className="text-emerald-400/50 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl border border-red-400/20 bg-red-400/5">
              <p className="text-xs text-red-400/60 uppercase tracking-widest mb-2">
                ✗ Kapsam Dışı
              </p>
              <ul className="space-y-1">
                {warranty.notCovered.map((item, i) => (
                  <li key={i} className="text-xs text-white/60 flex items-start gap-1.5">
                    <span className="text-red-400/50 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-white/30 mt-2 text-center">
            Süre: {warranty.duration} · Destek: {warranty.supportContact}
          </p>
        </motion.div>

        {/* Bakım */}
        <motion.div custom={5} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Bakım Önerileri</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {maintenance.map((m, i) => (
              <div key={i} className="p-3 rounded-xl border border-white/10 bg-white/5">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-2">
                  {m.frequency}
                </p>
                <ul className="space-y-1">
                  {m.tasks.map((task, j) => (
                    <li key={j} className="text-xs text-white/50 flex items-start gap-1">
                      <span className="opacity-40">·</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sorun Giderme */}
        <motion.div custom={6} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Sık Karşılaşılan Sorunlar</SectionTitle>
          <div className="space-y-3">
            {troubleshooting.map((item, i) => (
              <details
                key={i}
                className="group rounded-xl border border-white/10 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer hover:bg-white/5 transition-colors list-none">
                  <div className="flex items-center gap-2">
                    <SeverityDot severity={item.severity} />
                    <span className="text-sm text-white/80">{item.problem}</span>
                  </div>
                  <span className="text-white/20 text-xs group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 space-y-2 bg-white/[0.02]">
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                      Belirtiler
                    </p>
                    <ul className="space-y-0.5">
                      {item.symptoms.map((s, j) => (
                        <li key={j} className="text-xs text-white/50">· {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest mb-1">
                      Çözüm
                    </p>
                    <p className="text-xs text-white/60 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </motion.div>

        {/* Teknik Notlar */}
        <motion.div custom={7} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Teknik Notlar</SectionTitle>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 font-mono space-y-2">
            {funFacts.map((fact, i) => (
              <p key={i} className="text-xs text-white/40">
                <span className="text-white/20">// </span>
                {fact}
              </p>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

// ── Yardımcı bileşenler ──────────────────────────────────

const WARNING_STYLES = {
  warning: {
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
    title: "text-amber-400/80",
    text: "text-amber-400/50",
  },
  danger: {
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    title: "text-red-400/80",
    text: "text-red-400/50",
  },
  info: {
    border: "border-sky-400/30",
    bg: "bg-sky-400/5",
    title: "text-sky-400/80",
    text: "text-sky-400/50",
  },
  tip: {
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
    title: "text-emerald-400/80",
    text: "text-emerald-400/50",
  },
};

function WarningBox({ warning }: { warning: WarningItem }) {
  const style = WARNING_STYLES[warning.type];
  return (
    <div className={`flex gap-3 p-3 rounded-xl border ${style.border} ${style.bg}`}>
      <span className="text-lg flex-shrink-0">{warning.icon}</span>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-0.5 ${style.title}`}>
          {warning.title}
        </p>
        <p className={`text-xs leading-relaxed ${style.text}`}>
          {warning.description}
        </p>
      </div>
    </div>
  );
}

function SeverityDot({ severity }: { severity: "low" | "medium" | "high" }) {
  const colors = {
    low: "bg-emerald-400",
    medium: "bg-amber-400",
    high: "bg-red-400",
  };
  return (
    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${colors[severity]}`} />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-white/30 mb-3">
      {children}
    </h2>
  );
}
