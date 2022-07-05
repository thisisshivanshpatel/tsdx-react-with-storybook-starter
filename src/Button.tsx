import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /**displays text into the Button */
  children: ReactNode;
  /**which variant you would like to use */
  variant: 'primary' | 'secondary';
}

/**A Powerful customizable Button */
export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'royalblue' : 'black',
        color: 'white',
        borderRadius: '100px',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
