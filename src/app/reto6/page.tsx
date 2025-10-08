"use client";
import React, { useMemo, useState } from "react";
import TextArea from './TextArea';
import CounterCard from './CounterCard';

export default function Reto6() {
  const [text, setText] = useState("");

  const characters = text.length;

  const words = useMemo(() => {
    if (!text) return 0;
    const trimmed = text.trim();
    if (!trimmed) return 0;
    return trimmed.split(/\s+/).length;
  }, [text]);

  const paragraphs = useMemo(() => {
    if (!text) return 0;
    const lines = text.split(/\r?\n/);
    let count = 0;
    let inParagraph = false;
    for (const line of lines) {
      if (line.trim() === "") {
        inParagraph = false;
      } else {
        if (!inParagraph) {
          count += 1;
          inParagraph = true;
        }
      }
    }
    return count;
  }, [text]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Contador de texto</h1>

      <div className="w-[800px]">
        <TextArea value={text} onChange={setText} placeholder="Escribe o pega tu texto..." />

        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <CounterCard label="Characters" value={characters} />
          <CounterCard label="Words" value={words} />
          <CounterCard label="Paragraphs" value={paragraphs} />
        </div>
      </div>
    </main>
  );
}
