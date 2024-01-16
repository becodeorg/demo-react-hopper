import emojis from '../../emojis.json'
import Line from './Line.jsx'

const Search = (props) => {
    return (
        <div className="Search">
            <input type="text" placeholder="🔎 search..." onChange={props.handleChange} />
            {emojis.map((emoji, index) => {
                // si search est inclus dans keywords alors on affiche
                if (emoji.keywords.indexOf(props.search) != -1) {
                    return (
                        <Line emoji={emoji} key={index + emoji.symbol} />
                    )
                }
            })}
        </div>
    )
}

export default Search