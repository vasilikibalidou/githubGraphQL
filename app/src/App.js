import React from "react";
import "./App.css";
import TabsView from "./components/TabsView";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <TabsView />
    </div>
  );
}

export default App;
