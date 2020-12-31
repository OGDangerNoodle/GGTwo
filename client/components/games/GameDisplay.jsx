// import stuff
import React, { useState, useEffect } from 'react';
import { Redirect, Link} from 'react-router-dom';
import Game from './Game.jsx'
import Reviews from './Reviews.jsx';
import '../../public/styles.css'

const GameDisplay = () => {
  
  // useState hook
  const [games, setGames] = useState([])

  // useEffect
  useEffect(() => {
    fetch('/games')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGames(data);
      })
      .catch((err) => console.log(err)); 
      // empty array below represents componentDidUpdate, 
      // empty array stops the use of useEffect
  }, [])
  

  const renderGames = () => {
    return games.map(game => {
      // spreading game array to have access to all properties therein
      return <Game key={`game-id-${game._id}`} {...game} />
    })
  }


  // const handleClick = () => {
  //   return <Redirect to="/reviews" />
  // }
  
  return (
    <div id='gameDisplay'>
      <Link to="/reviews">See Reviews</Link>
      {renderGames()}
    </div>
  );
};

export default GameDisplay;