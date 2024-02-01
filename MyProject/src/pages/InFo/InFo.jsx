// import React from 'react'
import action from "../../assets/action.png"
import drama from "../../assets/drama.png";
import fantasy from "../../assets/fantasy.png";
import fiction from "../../assets/fiction.png";
import horror from "../../assets/horror.png";
import music from "../../assets/music.png";
import romance from "../../assets/romance.png";
import thriller from "../../assets/thriller.png";
import western from "../../assets/western.png";
import MovieBox from '../../Component/MovieBox';
import Chip from "../../Component/Chip";
import ShowCase from "../ShowCase/ShowCase";
import { useState } from "react";
// import Chip from "../../components/Chip";
import { useNavigate } from "react-router-dom";

// import { useState } from "react";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px", height: "120px" }} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px", height: "120px" }} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px", height: "120px" }} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px", height: "120px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px", height: "120px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px", height: "120px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px", height: "120px" }} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px", height: "120px" }} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px", height: "120px" }} src={western} />,
  },
];
function InFo() {
  const[selectedMovies,setSelectedMovies]=useState([])
  console.log(selectedMovies);
  const nevigate=useNavigate();
  return ( 
    <div style={{background:"black",display:"flex", }}>
      <h1>InFo</h1>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
      {genres.map((genre) => (
        <MovieBox key={genre.id} data={genre} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies}/>
      ))}
      </div>
      <div style=
         {{display:"grid",
         gridTemplateColumns:"1fr 1fr 1fr",gap:"12px"}}>
          {selectedMovies.map((movie)=>(
            <Chip key={movie} data={movie} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
          ))}
      </div>
      {selectedMovies.length<3? <p style={{color:"red"}}>Minimum 3 categories are requiored</p>:<></>}
      <button 
      style={{
        background:"green",
         padding:"12px", borderRadius:"12px",
          marginTop:"12px"
          }}
          onClick={()=>{
            window.localStorage.setItem("selectedmovies",JSON.stringify(selectedMovies))
            nevigate('/showcase')
          }}
          disabled={selectedMovies.length<3}
          >
            Next
            </button>
    </div>
  )
}

export default InFo