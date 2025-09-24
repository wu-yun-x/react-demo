import React, {
  useState,
  useRef,
  ReactNode,
  ButtonHTMLAttributes,
} from "react";
import Tooltip from "./Tooltip";

// 定义 ButtonWithTooltip 的 props 类型
interface ButtonWithTooltipProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  tooltipContent: ReactNode;
  children?: ReactNode;
}

// 定义 targetRect 的类型接口
export interface TargetRect {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

const ButtonWithTooltip: React.FC<ButtonWithTooltipProps> = ({
  tooltipContent,
  children,
  ...rest
}) => {
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        {...rest}
        ref={buttonRef}
        onPointerEnter={() => {
          if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setTargetRect({
              left: rect.left,
              right: rect.right,
              top: rect.top,
              bottom: rect.bottom,
            });
          }
        }}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
      >
        {children}
      </button>
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
};

export default ButtonWithTooltip;
