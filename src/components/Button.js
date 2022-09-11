const Button = (props) => {
    return (
        <div className="btn">
            <button
                value="7"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >7</button>
            <button value="8"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >8</button>
            <button value="9"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >9</button>
            <button value="/"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >/</button>
            <button value="4"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >4</button>
            <button value="5"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >5</button>
            <button value="6"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >6</button>
            <button value="x"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >x</button>
            <button value="1"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >1</button>
            <button value="2"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >2</button>
            <button value="3"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >3</button>
            <button value="+"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >+</button>
            <button value="del"
                onClick={() => { props.handleClickDeleteButton() }}
            >DELETE</button>
            <button value="0"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >0</button>
            <button value="="
                onClick={() => { props.handleClickEqualButton() }}
            >=</button>
            <button value="-"
                onClick={(event) => { props.handleClickNumberAndOperatorButton(event) }}
            >-</button>
        </div>
    )
}

export default Button;