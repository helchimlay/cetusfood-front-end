import React from 'react';
import './OrderPanel.css';
import RestGridPnl from './RestGridPnl/RestGridPnl';
import { getRestaurants } from '../services/RestaurationsList';
import Stepper from './Stepper';
import MealInputPnl from './MealInputPnl/MealInputPnl';
import FinalizationPnl from './FinalizationPnl/FinalizationPnl';

export const OrderPnlCtx = React.createContext();

const OrderPanel = () => {
  const [restList, setRestList] = React.useState([]);
  const [step, setStep] = React.useState(0);
  const [steps, setSteps] = React.useState(['Wybierz restaurację', 'Wybierz produkt', 'Finalizacja']);
  const [formData, setFormData] = React.useState({ products: [] });

  React.useEffect(() => {
    getRestaurants().then(res => setRestList(res.data));
  }, [])

  const handleSubmit = e => {
    e.preventDefault();
  }

  console.log(formData);

  return (
    <div className='OrderPanel'>
      <OrderPnlCtx.Provider value={{
        restList: restList, setRestList: setRestList,
        step: step, setStep: setStep,
        steps: steps, setSteps: setSteps,
        formData: formData, setFormData: setFormData
      }}>
        <Stepper />
        <form onSubmit={handleSubmit}>
          {step===0 && <RestGridPnl />}
          {step===1 && <MealInputPnl />}
          {step===2 && <FinalizationPnl />}
        </form>
      </OrderPnlCtx.Provider>
    </div>
  )
}

export default OrderPanel;