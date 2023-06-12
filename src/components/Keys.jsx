export default function Keys(props) {
    return (
        <div
            className={`drum-key ${props.letter} ${props.clickedLetter == props.letter ? 'click' : ''}`}
            onClick={props.click}
            onKeyDown={props.keyDown}
            tabIndex={0}>
            {props.letter}
        </div>
    )

} 