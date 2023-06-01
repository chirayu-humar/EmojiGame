// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {details, AddAnotherEmoji} = props
  const {id, emojiName, emojiUrl} = details

  const emojiClicked = () => {
    AddAnotherEmoji(id)
  }
  return (
    <li className="outerDiv">
      {/* <div className="inner">
        <button className="emojiBtn" onClick={emojiClicked} type="button">
          <img alt={emojiName} className="emoji" src={emojiUrl} />
        </button>
      </div> */}
      <button className="emojiBtn" onClick={emojiClicked} type="button">
        <img alt={emojiName} className="emoji" src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
