import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={`border shadow-md rounded-lg p-4 bg-white ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };

// Now exporting CardContent separately
export const CardContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="p-4">{children}</div>;
};
