/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, allClickedEmojies: [], isGameActive: true}

  AddAnotherEmoji = id => {
    const {allClickedEmojies} = this.state
    console.log(allClickedEmojies)
    if (allClickedEmojies.includes(id)) {
      console.log('it is already clicked')
      this.setState(prevState => ({
        allClickedEmojies: prevState.allClickedEmojies,
        score: prevState.score,
        topScore: prevState.topScore,
        isGameActive: false,
      }))
    } else if (allClickedEmojies.length === 11) {
      this.setState(prevState => ({
        allClickedEmojies: [...prevState.allClickedEmojies, id],
        score: prevState.score + 1,
        topScore: prevState.topScore,
        isGameActive: false,
      }))
    } else {
      this.setState(prevState => ({
        allClickedEmojies: [...prevState.allClickedEmojies, id],
        score: prevState.score + 1,
        topScore: prevState.topScore,
        isGameActive: prevState.isGameActive,
      }))
    }
  }

  onPlayAgain = () => {
    console.log('play again clicked')
    const {topScore, score} = this.state
    const scoreIsGreater = score > topScore
    const newTopScore = scoreIsGreater ? score : topScore
    this.setState(prevState => ({
      allClickedEmojies: [],
      score: 0,
      topScore: newTopScore,
      isGameActive: true,
    }))
  }

  render() {
    const {score, topScore, isGameActive, allClickedEmojies} = this.state
    console.log(isGameActive)
    const isWon = allClickedEmojies.length === 12
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const NewList = shuffledEmojisList()
    return (
      <>
        <NavBar isGameActive={isGameActive} score={score} topScore={topScore} />
        <div className="bg-container">
          {isGameActive && (
            <ul className="innerDiv">
              {NewList.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  AddAnotherEmoji={this.AddAnotherEmoji}
                  details={eachItem}
                />
              ))}
            </ul>
          )}
          {!isGameActive && (
            <WinOrLoseCard
              onPlayAgain={this.onPlayAgain}
              isWon={isWon}
              length={allClickedEmojies.length}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
