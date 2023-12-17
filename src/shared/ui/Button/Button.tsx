/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   className?: string;
   children: React.ReactNode;
   theme?: ThemeButton;
   square?: boolean;
   size?: SizeButton;
};

export const Button: FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
      [cls.square]: square,
    }

    return (
      <button
        className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
        {...otherProps}
      >
        {children}
      </button>
    )
};

