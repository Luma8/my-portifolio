import { ReactNode } from 'react';

interface HudFrameProps {
  children: ReactNode;
  className?: string;
  cornerClassName?: string;
  size?: number;
}

const HudFrame = ({
  children,
  className = '',
  cornerClassName = 'border-primary/40',
  size = 16,
}: HudFrameProps) => {
  const arm = { width: size, height: size };

  return (
    <div className={`relative ${className}`}>
      {children}
      <span
        style={arm}
        className={`pointer-events-none absolute -top-1.5 -left-1.5 border-t-2 border-l-2 rounded-tl-sm transition-colors duration-300 ${cornerClassName}`}
      />
      <span
        style={arm}
        className={`pointer-events-none absolute -top-1.5 -right-1.5 border-t-2 border-r-2 rounded-tr-sm transition-colors duration-300 ${cornerClassName}`}
      />
      <span
        style={arm}
        className={`pointer-events-none absolute -bottom-1.5 -left-1.5 border-b-2 border-l-2 rounded-bl-sm transition-colors duration-300 ${cornerClassName}`}
      />
      <span
        style={arm}
        className={`pointer-events-none absolute -bottom-1.5 -right-1.5 border-b-2 border-r-2 rounded-br-sm transition-colors duration-300 ${cornerClassName}`}
      />
    </div>
  );
};

export default HudFrame;
