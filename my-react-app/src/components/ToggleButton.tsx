import React, { useState } from "react";

interface ToggleButtonProps {
  initialText: string;
  toggledText: string;
  onToggle: () => void;
}

const ToggleButton = ({
  initialText,
  toggledText,
  onToggle,
}: ToggleButtonProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
    onToggle();
  };

  return (
    <button onClick={handleClick}>
      {isToggled ? toggledText : initialText}
    </button>
  );
};

export default ToggleButton;
