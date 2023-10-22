import classNames from "classnames";
import React from "react";

import Icon, { IconName } from "./Icon";

type ButtonProps = {
    type?: 'default' | 'outlined' | 'primary' | 'text' | 'link';
    color?: 'white' | 'accent';
    size?: 'small' | 'medium' | 'big';
    className?: string;
    onClick?: () => void;
    htmlType?: 'submit' | 'button' | 'reset';
    disabled?: boolean;
    children?: React.ReactNode;
    prefixIcon?: {
        iconName: IconName;
    };
}

const Button: React.FC<ButtonProps> = ({
    children,
    type = 'default',
    color = 'accent',
    size = 'medium',
    htmlType = 'button',
    onClick,
    disabled,
    prefixIcon,
    className,
}: React.PropsWithChildren<ButtonProps>) => {

    const cnames = classNames(
        'rounded px-7',
        {
            'bg-accent': color === 'accent',
            'border': type === 'default',
            'border-white text-white': type === 'outlined' && color === 'white',
            'border-accent text-white': type === 'outlined' && color === 'accent',
            'text-accent': type === 'text' || type === 'link',
            'hover:underline': type === 'link',
            'opacity-50': disabled,
            'text-xs': size === 'small',
            'text-sm': size === 'medium',
            'text-base': size === 'big',
        },
        className
    );

    return (
        <button
            onClick={onClick}
            type={htmlType}
            className={classNames(
                'hover:opacity-90 active:opacity-80 print:hidden text-white font-bold',
                cnames
            )}
            disabled={disabled}
        >
            {prefixIcon?.iconName && (
                <span className="mr-2">
                    <Icon iconName={prefixIcon.iconName} />
                </span>
            )}
            {children}
        </button>
    );
}

export default Button;
