import React, { useRef, useLayoutEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer";
import { TargetRect } from "./ButtonWithTooltip";

interface TooltipProps {
  children: ReactNode;
  targetRect: TargetRect;
}

const Tooltip: React.FC<TooltipProps> = ({ children, targetRect }) => {
  // 明确指定 ref 类型为 React.RefObject<HTMLDivElement>
  const ref = useRef<HTMLDivElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setTooltipHeight(height);
      console.log("Measured tooltip height: " + height);
    }
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;

  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 0) {
      // 它不适合上方，因此把它放在下面。
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body
  );
};

export default Tooltip;
