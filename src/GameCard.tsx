import React, { useState } from 'react'

import TinderCard from 'react-tinder-card';

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import IconButton from "@material-ui/core/IconButton";

import './GameCard.css'


const GameCard = () => {

    const [monument, setMonument] = useState([
      {
        name: "Taj Mahal",
        location: "Agra, India",
        info:
          "The Taj Mahal was designated as a UNESCO World Heritage Site in 1983 for being 'the jewel of Muslim art' in India and one of the universally admired masterpieces of the world's heritage. It is regarded by many as the best example of Mughal architecture and a symbol of India's rich history. The Taj Mahal attracts 7–8 million visitors a year and in 2007, it was declared a winner of the New 7 Wonders of the World (2000–2007) initiative.",
        url:
          "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_600/http%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1571728578%2Fgc7ngod0xhdaunb7mufr.jpg",
      },
      {
        name: "Statue of Liberty",
        location: "New York, USA",
        info:
          "According to the National Park Service, the idea of a monument presented by the French people to the United States was first proposed by Édouard René de Laboulaye, president of the French Anti-Slavery Society and a prominent and important political thinker of his time. The project is traced to a mid-1865 conversation between Laboulaye, a staunch abolitionist, and Frédéric Bartholdi, a sculptor. In after-dinner conversation at his home near Versailles, Laboulaye, an ardent supporter of the Union",

        url:
          "https://www.guinnessworldrecords.com/Images/Statue-of-Liberty_tcm25-531714.jpg",
      },
    ]);

    var [score, setScore] = useState(0);
    
    // setMonument([...monument])

    const swiped = (dir) => {
      if(dir === 'right')
        setScore(++score);
        setTimeout(() => {setShow(false);}, 40)
        console.log(score);
    };
    

    const [show, setShow] = useState(false);

    return (
      <div>
        {monument.map((el) => (
          <div className="card__container">
            <TinderCard
              onSwipe={(dir) => swiped(dir)}
              key={el.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${el.url})` }}
                className="card"
              >
                {show ? (
                  <div id="info" className="card__info">
                    <h5>{el.info}</h5>
                  </div>
                ) : null}
                <div className="card__title">
                  <div>
                    <h3> {el.name} </h3>
                    <h5> {el.location} </h5>
                  </div>
                  <div>
                      <button className="button" onPointerDown={(e) => { e.preventDefault(); setShow(!show); }}>
                        <InfoOutlinedIcon className="title__icon" />
                      </button>
                  </div>
                </div>
              </div>
            </TinderCard>
          </div>
        ))}

        <div className="empty__space">
          <img
            alt="All done!"
            width="250px"
            src="https://magoz.blog/wp-content/uploads/2018/02/magoz-wetransfer-animation-transfer-completed.gif"
          ></img>
          <p>ALL DONE! Nothing more to ask you.</p>
        </div>

        <div className="score__board">
          <p>
            {" "}
            Score: <span className="points">{score}</span>{" "}
          </p>
        </div>
      </div>
    );




}


export default GameCard