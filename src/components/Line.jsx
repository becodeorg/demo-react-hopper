const Line = (props) => {
    return (
        <ul className="Line" onClick={() => navigator.clipboard.writeText(props.emoji.symbol)}>
            <li>
                <p>{props.emoji.symbol}</p>
                <p>{props.emoji.title}</p>
            </li>
        </ul>
    )
}

export default Line