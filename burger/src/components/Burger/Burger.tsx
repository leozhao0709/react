import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import * as styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerIngredientType } from './BurgerIngredient/BurgerIngredientType';

interface BurgerProps {
  children?: ReactNode;
  ingredients: {
    [ingredientsType: string]: {
      amount: number;
      unitPrice: number;
    }
  };
}

const Burger: StatelessComponent<BurgerProps> = (props: BurgerProps) => {
  let transformedIngredients: JSX.Element[] | JSX.Element = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey].amount).fill(0)].map((_, index) => {
        return <BurgerIngredient type={igKey} key={igKey + index} />;
      });
    })
    .reduce((prev, el) => {
      return [...prev, ...el];
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
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
