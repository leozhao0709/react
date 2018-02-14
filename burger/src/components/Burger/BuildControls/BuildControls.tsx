import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './BuildControls.css';
import { BurgerIngredientType } from '../BurgerIngredient/BurgerIngredientType';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: BurgerIngredientType.Salad },
  { label: 'Bacon', type: BurgerIngredientType.Bacon },
  { label: 'Cheese', type: BurgerIngredientType.Cheese },
  { label: 'Meat', type: BurgerIngredientType.Meat }
];

interface BuildControlsProps {
  ingredientAdded: (type: BurgerIngredientType) => void;
  ingredientRemoved: (type: BurgerIngredientType) => void;
  disabled: {};
  price: number;
  purchasable: boolean;
  ordered: () => void;
}

const BuildControls: StatelessComponent<BuildControlsProps> = (props: BuildControlsProps) => {
  return (
    <div className={styles.buildControls} >
      <p>Current Price: <strong>{props.price}</strong> </p>
      {controls.map((ctrl) => {
        return <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => { props.ingredientAdded(ctrl.type); }}
          removed={() => { props.ingredientRemoved(ctrl.type); }}
          disable={props.disabled[ctrl.type]}
        />;
      })}
      <button className={styles.orderButton} disabled={!props.purchasable} onClick={props.ordered} >ORDER NOW</button>
    </div>
  );
};

BuildControls.defaultProps = {
};

export default BuildControls;
