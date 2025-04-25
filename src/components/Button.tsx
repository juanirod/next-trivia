import React from 'react'


interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

export const Button = ({
    children,
    onClick,
    disabled = false,
    className = ''
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
        >
            {children}
        </button>
    )
}
