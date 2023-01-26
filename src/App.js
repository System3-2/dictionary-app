import React, { useState, useEffect } from "react";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [isDark, setIsDark] = useState(false);

  return <div className="app">
    <Search />
  </div>
}

export default App;
