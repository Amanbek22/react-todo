import css from "./button.module.css"

function Button(props) {
    
    return (
        <button onClick={props.click} className={css["search-btn"]}>
            Поиск +
        </button>
    )
}

export default Button;