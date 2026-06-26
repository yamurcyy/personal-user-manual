// ============================================================
// ŞU AN SAYFASI
// ============================================================

import { motion } from "framer-motion";
import { nowData } from "../data/now";
import { useRelativeDate } from "../hooks";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

export default function NowPage() {
  const {
    lastUpdated,
    monthlyGoal,
    learning,
    reading,
    listening,
    currentProject,
    recentWins,
    mood,
  } = nowData;

  const updatedAgo = useRelativeDate(lastUpdated);

  return (
    <div className="h-full overflow-y-auto scrollbar-thin p-6 md:p-8">
      <div className="max-w-2xl mx-auto space-y-6">

        {/* Başlık */}
        <motion.div custom={0} variants={fadeIn} initial="hidden" animate="show">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/30 mb-1">
                Bölüm 3
              </p>
              <h1 className="text-2xl font-light text-white">Şu An</h1>
            </div>
            <div className="text-right">
              <p className="text-xs text-white/20">Son güncelleme</p>
              <p className="text-xs text-white/50">{updatedAgo}</p>
            </div>
          </div>
        </motion.div>

        {/* Ruh hali + Enerji */}
        <motion.div custom={1} variants={fadeIn} initial="hidden" animate="show">
          <div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5">
            <span className="text-3xl">{mood.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-white/80 text-sm font-medium">{mood.label}</p>
                <p className="text-white/30 text-xs">Enerji {mood.energy}/10</p>
              </div>
              <EnergyBar value={mood.energy} max={10} />
              <p className="text-white/40 text-xs mt-2 italic">{mood.note}</p>
            </div>
          </div>
        </motion.div>

        {/* Bu Ayki Hedef */}
        <motion.div custom={2} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Bu Ayın Hedefi · {monthlyGoal.month}</SectionTitle>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
            <p className="text-white/80 text-sm">{monthlyGoal.goal}</p>
            <div>
              <div className="flex justify-between text-xs text-white/30 mb-1">
                <span>İlerleme</span>
                <span>{monthlyGoal.progress}%</span>
              </div>
              <ProgressBar value={monthlyGoal.progress} color="mint" />
            </div>
            <div className="space-y-1.5">
              {monthlyGoal.subTasks.map((task, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center flex-shrink-0 ${
                      task.done
                        ? "border-emerald-400/60 bg-emerald-400/20"
                        : "border-white/20"
                    }`}
                  >
                    {task.done && (
                      <span className="text-emerald-400 text-[10px]">✓</span>
                    )}
                  </div>
                  <span
                    className={`text-xs ${
                      task.done ? "text-white/30 line-through" : "text-white/60"
                    }`}
                  >
                    {task.task}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Öğreniyorum */}
        <motion.div custom={3} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Öğreniyorum</SectionTitle>
          <div className="space-y-2">
            {learning.map((item, i) => (
              <div
                key={i}
                className="p-3 rounded-xl border border-white/10 bg-white/5"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span>{item.icon}</span>
                    <span className="text-sm text-white/80">{item.topic}</span>
                  </div>
                  <span className="text-xs text-white/30">{item.progress}%</span>
                </div>
                <ProgressBar value={item.progress} color="sky" />
                <p className="text-xs text-white/30 mt-1.5">{item.resource}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Okuma + Müzik — yan yana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Okuyorum */}
          <motion.div custom={4} variants={fadeIn} initial="hidden" animate="show">
            <SectionTitle>Okuyorum</SectionTitle>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 h-full space-y-3">
              <div className="flex gap-3">
                {/* Kitap kapağı */}
                <div
                  className="w-12 h-16 rounded flex-shrink-0 flex items-end justify-center overflow-hidden"
                  style={{ backgroundColor: reading.coverColor }}
                >
                  <div className="w-full h-1 bg-white/20" />
                </div>
                <div className="min-w-0">
                  <p className="text-white/80 text-sm font-medium leading-tight">
                    {reading.title}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{reading.author}</p>
                  <p className="text-white/30 text-xs mt-1">
                    Sayfa {reading.currentPage} / {reading.totalPages}
                  </p>
                </div>
              </div>
              <ProgressBar
                value={Math.round((reading.currentPage / reading.totalPages) * 100)}
                color="amber"
              />
              {reading.quote && (
                <p className="text-xs text-white/30 italic border-l border-white/10 pl-3 leading-relaxed">
                  "{reading.quote}"
                </p>
              )}
            </div>
          </motion.div>

          {/* Dinliyorum */}
          <motion.div custom={5} variants={fadeIn} initial="hidden" animate="show">
            <SectionTitle>Dinliyorum</SectionTitle>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 h-full">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  🎵
                </div>
                <div className="min-w-0">
                  <p className="text-white/80 text-sm font-medium">
                    {listening.title}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{listening.creator}</p>
                  <p className="text-white/30 text-xs mt-0.5">{listening.genre}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/40">
                  #{listening.moodTag}
                </span>
                <span className="text-xs text-white/20">{listening.type}</span>
              </div>
              {/* Animasyonlu ses dalgaları */}
              <div className="mt-3 flex items-end gap-0.5 h-6">
                {[4, 7, 5, 8, 3, 6, 4, 7, 5, 6, 3, 8].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-white/20"
                    style={{
                      height: `${h * 3}px`,
                      animation: `soundWave 1.2s ease-in-out ${i * 0.1}s infinite alternate`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Proje */}
        <motion.div custom={6} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Üzerinde Çalışıyorum</SectionTitle>
          <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-white/90 text-sm font-medium">
                  {currentProject.name}
                </p>
                <p className="text-white/40 text-xs mt-1 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full border border-white/20 text-white/40 whitespace-nowrap">
                {currentProject.phase}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {currentProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div>
              <div className="flex justify-between text-xs text-white/30 mb-1">
                <span>Sonraki: {currentProject.nextMilestone}</span>
                <span>{currentProject.progress}%</span>
              </div>
              <ProgressBar value={currentProject.progress} color="violet" />
            </div>
          </div>
        </motion.div>

        {/* Son Zaferler */}
        <motion.div custom={7} variants={fadeIn} initial="hidden" animate="show">
          <SectionTitle>Son Zaferler 🏆</SectionTitle>
          <div className="space-y-2">
            {recentWins.map((win, i) => (
              <div
                key={i}
                className="flex items-start gap-2 p-3 rounded-xl border border-white/10 bg-white/5"
              >
                <span className="text-emerald-400/60 mt-0.5">✓</span>
                <p className="text-xs text-white/60">{win}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes soundWave {
          from { transform: scaleY(0.3); opacity: 0.4; }
          to   { transform: scaleY(1);   opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

// ── Yardımcı bileşenler ──────────────────────────────────

const PROGRESS_COLORS = {
  mint:   "bg-emerald-400",
  sky:    "bg-sky-400",
  amber:  "bg-amber-400",
  violet: "bg-violet-400",
};

function ProgressBar({
  value,
  color,
}: {
  value: number;
  color: keyof typeof PROGRESS_COLORS;
}) {
  return (
    <div className="h-1 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${PROGRESS_COLORS[color]}`}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

function EnergyBar({ value, max }: { value: number; max: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full ${
            i < value ? "bg-emerald-400/70" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs uppercase tracking-widest text-white/30 mb-3">
      {children}
    </h2>
  );
}
