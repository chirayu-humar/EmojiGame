// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameActive} = props
  return (
    <div className="bgNavBar">
      <div className="child1">
        <img
          alt="emoji logo"
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className="child2">
        {isGameActive && <p>Score: {score}</p>}
        {isGameActive && <p>Top Score: {topScore}</p>}
      </div>
    </div>
  )
}

export default NavBar
