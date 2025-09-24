import React from "react";

interface TooltipContainerProps {
  children: React.ReactNode;
  x: number;
  y: number;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const TooltipContainer: React.FC<TooltipContainerProps> = ({
  children,
  x,
  y,
  contentRef,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        pointerEvents: "none",
        left: 0,
        right: 0,
        transform: `translate3d(${x}px, ${y}px, 0)`,
      }}
    >
      <div ref={contentRef} className="tooltip">
        {children}
      </div>
    </div>
  );
};

export default TooltipContainer;
