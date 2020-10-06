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
        url:
          "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_600/http%3A%2F%2Fres.cloudinary.com%2Fdwzmsvp7f%2Fimage%2Fupload%2Fv1571728578%2Fgc7ngod0xhdaunb7mufr.jpg",
      },
      {
        name: "Statue of Liberty",
        location: "New York, USA",
        url:
          "https://www.guinnessworldrecords.com/Images/Statue-of-Liberty_tcm25-531714.jpg",
      },
    ]);
    
    
    // setMonument([...monument])

    return (
      <div>
        {monument.map((el) => (
          <div className="card__container">
            <TinderCard key={el.name} preventSwipe={["up", "down"]}>
              <div
                style={{ backgroundImage: `url(${el.url})` }}
                className="card"
              >
                <div className="card__info hide">
                  <h5>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </h5>
                </div>
                <div className="card__title">
                  <div>
                    <h3> {el.name} </h3>
                    <h5> {el.location} </h5>
                  </div>
                  <div>
                    <IconButton>
                      <InfoOutlinedIcon className="title__icon" />
                    </IconButton>
                  </div>
                </div>
              </div>
            </TinderCard>
          </div>
        ))}
      </div>
    );




}


export default GameCard