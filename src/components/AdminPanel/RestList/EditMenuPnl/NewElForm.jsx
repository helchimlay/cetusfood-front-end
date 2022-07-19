import React from 'react';

const NewElForm = () => {
    const [formActive, setFormActive] = React.useState(false);
    const [formData, setFormData] = React.useState({});

    const handleChange = e => {
        setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
        setFormActive(false);
    }

    return (<>
        {formActive ? (
            <form className='NewElForm form' onSubmit={handleSubmit}>
                <Input type='text' placeholder='Nazwa' name='name' onChange={handleChange} />
                <Input type="number" placeholder='Cena, zł' min={0} name='price' onChange={handleChange} />
                <Input type="text" placeholder='Url do obrazka' name='imageUrl' onChange={handleChange} />
                <div className="buttons">
                    <button type='button' onClick={() => setFormActive(false)}>Anuluj</button>
                    <button type='submit'>Dodaj element do menu</button>
                </div>
            </form>
        ) : (
            <button className='NewElForm' onClick={() => setFormActive(true)}>
                <i class='bx bx-plus'></i>
                dodaj nowy produkt
            </button>
        )}
    </>)
}

const Input = ({ type, placeholder, min, name, onChange }) => {
    const inputRef = React.useRef();
    const [value, setValue] = React.useState('');
    
    return (
        <div>
            {value !== '' && <span>{placeholder}</span>}
            <input name={name} maxLength={50} min={type === 'number' ? min : null} ref={inputRef} type={type} placeholder={placeholder} onChange={e => {setValue(e.target.value); onChange(e)}} />
        </div>
    )
}

export default NewElForm;