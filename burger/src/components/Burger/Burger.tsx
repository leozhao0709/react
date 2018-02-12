import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import * as styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerIngredientType } from './BurgerIngredient/BurgerIngredientType';

interface BurgerProps {
  children?: ReactNode;
  ingredients: {};
}

const Burger: StatelessComponent<BurgerProps> = (props: BurgerProps) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey]).fill(0)].map((_, index) => {
        return <BurgerIngredient type={igKey} key={igKey + index} />;
      });
    });

  return (
    <div className={styles.burger} >
      <BurgerIngredient type={BurgerIngredientType.BreadTop} />
      {transformedIngredients}
      <BurgerIngredient type={BurgerIngredientType.BreadBottom} />
    </div>
  );
};

Burger.defaultProps = {
};

export default Burger;
