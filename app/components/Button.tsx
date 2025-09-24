import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
export default function Button({children}:{children:React.ReactNode}) {
  return <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">{children}</button>;
}
