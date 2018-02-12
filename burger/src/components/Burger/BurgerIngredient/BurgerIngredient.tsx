import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import { BurgerIngredientType } from './BurgerIngredientType';
import * as styles from './BurgerIngredient.css';

interface BurgerIngredientProps {
  children?: ReactNode;
  type: string;
}

const BurgerIngredient: StatelessComponent<BurgerIngredientProps> = (props: BurgerIngredientProps) => {
  switch (props.type) {
    case BurgerIngredientType.BreadBottom:
      return (
        <div className={styles.breadBottom} />
      );
    case BurgerIngredientType.BreadTop:
      return (
        <div className={styles.breadTop} >
          <div className={styles.seeds1} />
          <div className={styles.seeds2} />
        </div>
      );
    case BurgerIngredientType.Meat:
      return (
        <div className={styles.meat} />
      );
    case BurgerIngredientType.Cheese:
      return (
        <div className={styles.cheese} />
      );
    case BurgerIngredientType.Salad:
      return (
        <div className={styles.salad} />
      );
    case BurgerIngredientType.Bacon:
      return (
        <div className={styles.bacon} />
      );
    default:
      return null;
  }
};

BurgerIngredient.defaultProps = {
};

export default BurgerIngredient;
