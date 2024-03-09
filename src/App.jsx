import './App.css'
import Counter from './Counter'
import Player from './Player'
import Users from './Users'
import Friends from './Friends'
function App() {
  //normal function for even handler
  function handleClick(){
    alert('button clicked')
  }
  //arrow function for even handler
  const handleClick2=() =>{
    alert('button 2 Clicked')
  }
  const addToFive = (num) => {
     alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>

      <Users></Users>

      <Player></Player>

      <Counter></Counter>

      {/*<button onclick='handleClick()'>Click Me</button>normal html hole eibabe koretam */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>alert('button 3')}>third</button>
      {/* vejailla // ekta arrow function er bitore rakhlam naile save korar sathe sathe call hoia jaito*/} 
      <button onClick={()=>addToFive(3)}>Four</button>
    </>
  )
}

export default App
