import React from 'react';

type Props = {
  label: string;
  value: number | string;
};

export default function CounterCard({ label, value }: Props) {
  return (
    <div className="p-4 bg-gray-900 text-white rounded">
      <div className="text-sm text-gray-300">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
