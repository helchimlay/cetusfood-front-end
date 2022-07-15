import React from 'react';
import './OrderPanel.css';
import RestGridPnl from './RestGridPnl/RestGridPnl';
import { getRestaurants } from '../../services/RestaurationsList';
import Stepper from './Stepper';
import MealInputPnl from './MealInputPnl/MealInputPnl';
import FinalizationPnl from './FinalizationPnl/FinalizationPnl';
import { Helmet } from 'react-helmet-async';
import { GlobalCtx } from '../../App';
import { NavLink } from 'react-router-dom';

export const OrderPnlCtx = React.createContext();

const OrderPanel = () => {
    const { user } = React.useContext(GlobalCtx);
    const [restList, setRestList] = React.useState([]);
    const [step, setStep] = React.useState(0);
    const [steps, setSteps] = React.useState(['Wybierz restaurację', 'Wybierz produkt', 'Finalizacja']);
    const [formData, setFormData] = React.useState({ products: [] });

    React.useEffect(() => {
        user.loggedIn && getRestaurants(user.accessToken).then(res => setRestList(res.data));
    }, [user]);

    return (
        <div className='OrderPanel'>
            <Helmet>
                <title>CetusFood | Zamówienia</title>
            </Helmet>
            <OrderPnlCtx.Provider value={{
                restList: restList, setRestList: setRestList,
                step: step, setStep: setStep,
                steps: steps, setSteps: setSteps,
                formData: formData, setFormData: setFormData
            }}>
                {formData.restId && (
                    <img className='bg-logo' src={restList.filter(v => v.id === formData.restId)[0].logoUrl} />
                )}
                {user.loggedIn ? (<>
                    <Stepper />
                    <div className='content'>
                        {step === 0 && <RestGridPnl />}
                        {step === 1 && <MealInputPnl />}
                        {step === 2 && <FinalizationPnl />}
                    </div>
                </>) : (<>
                    <div className="error">
                        <h3>Musisz być zalogowany aby złożyć zamówienie.</h3>
                        <NavLink to='/log-in'>Zaloguj się tutaj</NavLink>
                    </div>
                </>)}

            </OrderPnlCtx.Provider>
        </div>
    )
}

export default OrderPanel;