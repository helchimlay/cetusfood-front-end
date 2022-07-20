import React from 'react';
import './MenuGridPnl.scss';
import { OrderPnlCtx } from '../OrderPanel';
import { getProducts } from '../../../services/RestaurationsList';
import { GlobalCtx } from '../../../App';

const MenuGridPnl = () => {
    const Ctx = React.useContext(OrderPnlCtx);
    const [products, setProducts] = React.useState([]);
    const { user } = React.useContext(GlobalCtx);

    React.useEffect(() => {
        getProducts(Ctx.formData.restId, user.accessToken).then(res => setProducts(res.data));
    }, [])

    console.log(products);

    return (
        <div className='MenuGridPnl'>
            {Ctx.formData.restId ? (<>
                {/* <MenuEl data={{
                    name: 'hamburger1',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 1,
                    price: 4.49
                }} />
                <MenuEl data={{
                    name: 'hamburger2',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 2,
                    price: 5.39
                }} />
                <MenuEl data={{
                    name: 'hamburger3',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 3,
                    price: 2.79
                }} />
                <MenuEl data={{
                    name: 'hamburger4',
                    imgUrl: 'https://thumbs.dreamstime.com/b/%C5%9Bmieszny-burger-z-oczami-na-bia%C5%82ym-tle-zabawne-produkty-serii-p%C5%82aski-wektor-ilustracja-185521911.jpg',
                    id: 4,
                    price: 8.19
                }} /> */}
                {products?.map((el, i) => <MenuEl data={el} key={i} />)}
            </>) : <h4>Nie wyrano restauracji</h4>}
        </div>
    )
}

const MenuEl = ({ data }) => {
    const Ctx = React.useContext(OrderPnlCtx);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if(Ctx.formData.products.filter(v => v.id===data.id)[0]?.count){
            setCount(Ctx.formData.products.filter(v => v.id===data.id)[0]?.count);
        }
    }, [])

    const deleteItem = () => {
        setCount(count > 0 ? count - 1 : count);
        if (count > 0) {
            let exists = Ctx.formData.products.filter(v => v.id === data.id)[0] !== undefined && Ctx.formData.products.filter(v => v.id === data.id)[0] !== null;
            if (exists) {
                let pr = Ctx.formData.products.filter(v => v.id !== data.id);
                let old = Ctx.formData.products.filter(v => v.id === data.id)[0];
                console.log(old)
                if (old.count > 1) {
                    Ctx.setFormData(prev => ({ ...prev, products: [...pr, { id: old.id, count: old.count - 1, name: data.name, price: data.price }] }));
                } else {
                    Ctx.setFormData(prev => ({ ...prev, products: [...pr] }));
                }
            }
        }
    }
    const addItem = () => {
        setCount(count < 99 ? count + 1 : count);
        let exists = Ctx.formData.products.filter(v => v.id === data.id)[0] !== undefined && Ctx.formData.products.filter(v => v.id === data.id)[0] !== null;
        if (!exists) {
            Ctx.setFormData(prev => ({ ...prev, products: [...prev.products, { id: data.id, count: count + 1, name: data.name, price: data.price }] }));
        } else {
            let pr = Ctx.formData.products.filter(v => v.id !== data.id);
            Ctx.setFormData(prev => ({ ...prev, products: [...pr, { id: data.id, count: count + 1, name: data.name, price: data.price }] }))
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
            <div className="price">{data.price}zł</div>
        </div>
    )
}

export default MenuGridPnl;