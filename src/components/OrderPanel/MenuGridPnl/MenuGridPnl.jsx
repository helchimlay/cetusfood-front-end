import React from 'react';
import './MenuGridPnl.scss';
import { OrderPnlCtx } from '../OrderPanel';

const MenuGridPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    return (
        <div className='MenuGridPnl'>
            {Ctx.formData.restId ? (<>
                <MenuEl data={{
                    name: 'hamburger',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 1
                }} />
                <MenuEl data={{
                    name: 'hamburger',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 2
                }} />
                <MenuEl data={{
                    name: 'hamburger',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 3
                }} />
                <MenuEl data={{
                    name: 'hamburger',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 4
                }} />
            </>) : <h4>Nie wyrano restauracji</h4>}
        </div>
    )
}

const MenuEl = ({ data }) => {
    const Ctx = React.useContext(OrderPnlCtx);
    const [count, setCount] = React.useState(0);

    const deleteItem = () => {
        setCount(count > 0 ? count - 1 : count);
        if(count > 0){
            let exists = Ctx.formData.products.filter(v => v.id === data.id)[0] !== undefined && Ctx.formData.products.filter(v => v.id === data.id)[0] !== null;
            if (exists) {
                let pr = Ctx.formData.products.filter(v => v.id!==data.id);
                let old = Ctx.formData.products.filter(v => v.id==data.id)[0];
                console.log(old)
                if(old.count > 1){
                    Ctx.setFormData(prev => ({...prev, products: [...pr, {id: old.id, count: old.count-1}]}));
                }else{
                    Ctx.setFormData(prev => ({...prev, products: [...pr]}));
                }
            }
        }
    }
    const addItem = () => {
        setCount(count < 99 ? count + 1 : count);
        let exists = Ctx.formData.products.filter(v => v.id === data.id)[0] !== undefined && Ctx.formData.products.filter(v => v.id === data.id)[0] !== null;
        if (!exists) {
            Ctx.setFormData(prev => ({ ...prev, products: [...prev.products, { id: data.id, count: count+1 }] }));
        }else{
            let pr = Ctx.formData.products.filter(v => v.id!==data.id);
            Ctx.setFormData(prev => ({...prev, products: [...pr, {id: data.id, count: count+1}]}))
        }
    }

    return (
        <div className={`MenuEl ${count > 0 ? 'active' : null}`}>
            <div style={{ gridArea: 'name' }} className='product-name'><span>{data.name}</span></div>
            <div className='product-logo' style={{ backgroundImage: `url(${data.imgUrl})`, gridArea: 'logo' }}></div>
            <div style={{ gridArea: 'controls' }} className="controls">
                <button onClick={deleteItem}><i className='bx bx-minus'></i></button>
                <p>{count}</p>
                <button onClick={addItem}><i className='bx bx-plus'></i></button>
            </div>
        </div>
    )
}

export default MenuGridPnl;