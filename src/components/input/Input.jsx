import "./input.css"

function Input(props) {
    
    const handleChange = (e) => {
        props.change(e.target.value);
    }

    return (
        <input value={props.value} onChange={handleChange} className='inp' placeholder='Поиск' />
    )
}

export default Input