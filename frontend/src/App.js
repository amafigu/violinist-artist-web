import "./App.css"

function App() {
  return (
    <div className='App'>
      <img
        alt='artist'
        src={`${process.env.PUBLIC_URL}/assets/violinist.png`}
      ></img>
    </div>
  )
}

export default App
