"use client";
import React from 'react';

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export default function TextArea({ value, onChange, placeholder }: Props) {
  return (
    <div>
      <div className="bg-gray-800 text-gray-400 p-4 rounded-t">{placeholder || 'Paste your text here...'}</div>
      <textarea
        className="w-full h-64 p-4 bg-gray-900 text-white resize-none rounded-b focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
