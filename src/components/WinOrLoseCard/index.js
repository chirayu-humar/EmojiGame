// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {isWon, onPlayAgain, length} = props
  return (
    <div className="innerDiv2">
      <div className="first">
        <h1>{isWon ? 'You Won' : 'You Lose'}</h1>
        <p>{isWon ? 'Best Score' : 'Score'}</p>
        <p>{length}/12</p>
        <div>
          <button onClick={onPlayAgain} type="button">
            Play Again
          </button>
        </div>
      </div>
      <div className="second">
        <div className="imgContainer">
          {!isWon && (
            <img
              alt="win or lose"
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            />
          )}
          {isWon && (
            <img
              alt="win or lose"
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default WinOrLoseCard
