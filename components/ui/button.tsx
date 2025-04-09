import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// Ensure Button is exported
export { Button };
