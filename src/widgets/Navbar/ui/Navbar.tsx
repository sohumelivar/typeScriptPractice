/* eslint-disable i18next/no-literal-string */
import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

export interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal( prev => !prev);
    }, [])

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button 
                theme={ThemeButton.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}  >
                    Lorem ipsum, dolor sit amet 
                    consectetur adipisicing elit. Minima, 
                    quis? Pariatur optio eos asperiores itaque beatae
                    ? Sapiente, obcaecati, suscipit corrupti eum commodi cum
                    que eaque, deserunt eveniet beatae in quisquam quaerat.
            </Modal>
        </div>
    )
}












