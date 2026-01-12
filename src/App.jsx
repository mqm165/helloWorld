function App() {
  return (
    <div className="app">
      <div className="snowflakes">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="snowflake">❄</div>
        ))}
      </div>
      <h1 className="christmas-title">🎄 Merry Christmas! 🎄</h1>
      <p className="christmas-subtitle">Happy Holidays from Hello World!</p>
    </div>
  )
}

export default App
