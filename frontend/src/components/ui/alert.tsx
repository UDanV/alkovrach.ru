import React, { useEffect, useState } from "react";

interface AlertProps {
  type: "success" | "error";
  message: string;
  duration?: number;
}

const Alert: React.FC<AlertProps> = ({ type, message, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const borderColor = type === "success" ? "border-green-400" : "border-red-400";

  return (
    <div
      className={`
        fixed bottom-4 right-4 border ${borderColor} ${bgColor} ${textColor} px-4 py-3 rounded shadow-lg
        transition-opacity duration-500 ease-in-out
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
      role="alert"
    >
      {message}
    </div>
  );
};

export default Alert;