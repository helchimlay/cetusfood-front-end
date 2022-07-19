import React from 'react';

const MenuEl = ({ data }) => {
    const [formActive, setFormActive] = React.useState(false);
    const [formData, setFormData] = React.useState({});

    const handleChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        setFormActive(false);
    }
    const handleDelete = () => {
        // usuwanie elementu
    }

    return (
        <div className='MenuEl'>
            {formActive ? (
                <form onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Nazwa' name='name' onChange={handleChange} defaultval={data.name} />
                    <Input type="number" placeholder='Cena, zł' min={0} name='price' onChange={handleChange} defaultval={data.price} />
                    <Input type="text" placeholder='Url do obrazka' name='imageUrl' onChange={handleChange} defaultval={data.imageUrl} />
                    <div className="buttons">
                        <button type='button' onClick={() => setFormActive(false)}>Anuluj</button>
                        <button type='submit'>Zatwierdź edycję</button>
                    </div>
                </form>
            ) : (<>
                <div className="price">{data.price}zł</div>
                <div className="image" style={{ backgroundImage: `url(${data.imageUrl})` }}>
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
            <input defaultValue={defaultval} name={name} maxLength={50} min={type === 'number' ? min : null} ref={inputRef} type={type} placeholder={placeholder} onChange={e => { setValue(e.target.value); onChange(e) }} />
        </div>
    )
}

export default MenuEl;