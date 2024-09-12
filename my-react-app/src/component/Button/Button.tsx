import React from "react";
import "./index.css";

export interface ButtonProps {
  label: string;
  style?: React.CSSProperties;
  variant?: "primary" | "secondary" | "warning";
}

const Button = ({ label, style, variant = "primary" }: ButtonProps) => {
  return (
    <button className={`button ${variant}`} style={style}>
      {label}
    </button>
  );
};

export default Button;
