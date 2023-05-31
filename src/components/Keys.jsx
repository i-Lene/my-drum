export default function Keys(props) {
    return (
        <div
            className={`drum-key ${props.letter}`}
            onClick={props.click}
            onKeyDown={props.keyDown}
            tabIndex={0}
        >
            {props.letter}
        </div>
    )
}