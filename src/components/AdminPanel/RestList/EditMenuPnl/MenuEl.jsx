import React from 'react';
import { deleteProduct, editProduct } from '../../../../services/RestaurationsList';
import { GlobalCtx } from '../../../../App';

const MenuEl = ({ data, counter, setCounter, restId }) => {
    const [formActive, setFormActive] = React.useState(false);
    const [formData, setFormData] = React.useState({});
    const { user } = React.useContext(GlobalCtx);

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    console.log(data)
    const handleSubmit = e => {
        e.preventDefault();
        let fd = {}
        formData.name ? (fd.name = formData.name) : (fd.name = data.name);
        formData.price ? (fd.price = parseFloat(formData.price)) : (fd.price = parseFloat(data.price));
        formData.imageUrl ? (fd.logoUrl = formData.imageUrl) : (fd.logoUrl = data.logoUrl);
        editProduct(
            {
                ...fd,
                restaurantID: parseFloat(restId)
            },
            data.id,
            user.accessToken
        )
        setFormActive(false);
        setTimeout(() => setCounter(counter + 1), 100);
    }
    const handleDelete = () => {
        deleteProduct(data.id, user.accessToken);
        setTimeout(() => setCounter(counter + 1), 100);
    }

    return (
        <div className='MenuEl'>
            {formActive ? (
                <form onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Nazwa' name='name' onChange={handleChange} defaultval={data.name} />
                    <Input type="number" placeholder='Cena, zł' min={0} name='price' onChange={handleChange} defaultval={data.price} />
                    <Input type="text" placeholder='Url do obrazka' name='imageUrl' onChange={handleChange} defaultval={data.logoUrl} />
                    <div className="buttons">
                        <button type='button' onClick={() => setFormActive(false)}>Anuluj</button>
                        <button type='submit'>Zatwierdź edycję</button>
                    </div>
                </form>
            ) : (<>
                <div className="price">{data.price}zł</div>
                <div className="image" style={{ backgroundImage: `url(${data.logoUrl})` }}>
                    <button className='blue' onClick={() => setFormActive(true)}><i class='bx bxs-edit-alt' ></i></button>
                    <button className='red' onClick={handleDelete}><i class='bx bx-trash' ></i></button>
                </div>
                <div className="name">{data.name}</div>
            </>)}
        </div>
    )
}

const Input = ({ type, placeholder, min, name, onChange, defaultval }) => {
    const inputRef = React.useRef();
    const [value, setValue] = React.useState('');

    return (
        <div>
            {value !== '' && <span>{placeholder}</span>}
            <input step={type === 'number'?"0.01":null} defaultValue={defaultval} name={name} maxLength={50} min={type === 'number' ? min : null} ref={inputRef} type={type} placeholder={placeholder} onChange={e => { setValue(e.target.value); onChange(e) }} />
        </div>
    )
}

export default MenuEl;