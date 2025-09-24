import React from "react";
import ButtonWithTooltip from "./ButtonWithTooltip";

const APP: React.FC = () => {
  return (
    <div>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button.
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
      <div style={{ height: 50 }}></div>
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
      <ButtonWithTooltip
        tooltipContent={<div>This tooltip fits above the button</div>}
      >
        Hover over me (tooltip below)
      </ButtonWithTooltip>
    </div>
  );
};

export default APP;
