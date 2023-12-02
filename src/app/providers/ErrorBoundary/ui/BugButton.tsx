import {classNames} from 'shared/lib/classNames/classNames';
import cls from './BugButton.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
   className?: string;
};

export const BugButton = ({className}: BugButtonProps) => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error])

    return (
      <Button
        onClick={onThrow}
        className={classNames(cls.BugButton, {}, [className])}
        >
        {t('Вызвать ошибку')}
      </Button>
    )
};

