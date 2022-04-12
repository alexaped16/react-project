import { React, useState } from "react";



function App() {

    const [data, setData] = useState("");
    const [searchWord, setSearchWord] = useState("");

    function getNames() {
        Kekambas.get(
            'https://kekambas-bs.herokuapp.com/kekambas'
        ).then((response) => {
            setData(response.data[0]);
          });
        
    }

    return (
        <div className= "App">
            <h1> Kekambas Crew <h1>
            <div className="searchBox">

            <input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
            setSearchWord(e.target.value);
          }}

        />
        <button
          onClick={() => {
            getNames();
          }}
        >
          <FaSearch size="20px" />
        </button>
        </div>
        {data && (
        <div className="showResults">
          <h2>
            {data.word}{" "}

    )

    <p>{data.first_name[0].definitions[0].definition}</p>
}

export default App;