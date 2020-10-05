import React, { FC } from 'react';
import styles from './styles.module.scss';

type ItemProps = {
    addItem?: (name: string) => void;
    name: string;
};

const Item: FC<ItemProps> = ({ addItem, name }): JSX.Element => {
    
    const handleClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        addItem && addItem(name)
    }

    return (
        <li onClick={handleClick} className={styles.item}>Name: {name}</li>
    );
}

export default Item;
