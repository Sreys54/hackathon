'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TicTacToeReto3() {
  type Cell = "X" | "O" | null;
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));

  const moves = board.filter(Boolean).length;
  const turn: Exclude<Cell, null> = moves % 2 === 0 ? "X" : "O";

  const handleCellClick = (idx: number) => {
    setBoard((prev) => {
      if (prev[idx] !== null) return prev;
      const next = [...prev];
      const prevMoves = prev.filter(Boolean).length;
      next[idx] = prevMoves % 2 === 0 ? "X" : "O";
      return next;
    });
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
  };

  const CellView = ({ value, onClick }: { value: Cell; onClick: () => void }) => (
    <button
      onClick={onClick}
      disabled={value !== null}
      className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/70 shadow hover:bg-white/90 transition disabled:cursor-not-allowed disabled:opacity-90"
    >
      <AnimatePresence mode="wait" initial={false}>
        {value && (
          <motion.span
            key={value}
            initial={{ scale: 0.4, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`text-5xl font-bold ${
              value === "X" ? "text-sky-700" : "text-emerald-700"
            }`}
          >
            {value}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="mb-4 flex items-center justify-between">
          <button
            onClick={reset}
            className="rounded-xl bg-slate-900 px-4 py-2 text-white shadow hover:bg-slate-800 active:scale-[0.98] border-2 border-white/10"
          >
            Reiniciar
          </button>
        </div>
        <div className="relative mx-auto w-[312px] h-[312px]">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3">
            {board.map((cell, i) => (
              <CellView key={i} value={cell} onClick={() => handleCellClick(i)} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/3 top-0 h-full w-px" />
            <div className="absolute left-2/3 top-0 h-full w-px" />
            <div className="absolute top-1/3 left-0 w-full h-px" />
            <div className="absolute top-2/3 left-0 w-full h-px" />
          </div>
        </div>
      </div>
    </div>
  );
}
