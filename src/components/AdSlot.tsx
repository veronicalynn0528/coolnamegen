interface AdSlotProps {
  size: '728x90' | '300x250' | '320x50';
  className?: string;
}

const sizeMap: Record<string, { width: number; height: number }> = {
  '728x90': { width: 728, height: 90 },
  '300x250': { width: 300, height: 250 },
  '320x50': { width: 320, height: 50 },
};

export default function AdSlot({ size, className = '' }: AdSlotProps) {
  const { width, height } = sizeMap[size];

  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-outline-variant rounded-lg bg-surface-low text-on-surface-variant ${className}`}
      style={{ width: '100%', maxWidth: `${width}px`, height: `${height}px` }}
    >
      <div className="text-center">
        <span className="material-symbols-outlined text-2xl mb-1 block">
          ad_unit
        </span>
        <span className="text-xs font-medium">
          Ad {size}
        </span>
      </div>
    </div>
  );
}
