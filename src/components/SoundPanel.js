import React from "react";
import Player from "./Player";
import "./SoundPanel.css";

import rain from "../resources/audiores/rain.mp3";
import wind from "../resources/audiores/wind-1.mp3";
import campfire from "../resources/audiores/campfire-1.mp3";
import coffeeshop from "../resources/audiores/coffeeshop.mp3"
import train from "../resources/audiores/train.mp3"
import birds from "../resources/audiores/birds.mp3"

function SoundPanel() {
  return (
    <div>
      <div className="App">
        <div className="player-container">
          <div>
           <img src="https://user-images.githubusercontent.com/46933160/135704908-d27d6cf1-97ea-4b0e-bf37-1de27bbb84b6.png" />
          </div>
          
          <div className="player">
            <div className="sound-title">
              <p>Rain</p>
            </div>
            <div className="play-btn">
              <Player media={rain} />
            </div>
          </div>
        </div>

        <div className="player-container">
          <div><img src="https://user-images.githubusercontent.com/46933160/135706123-0d6166ab-0675-49bf-97ae-92f62ae84f76.png" />
          </div>
          <div className="player">
            <div className="sound-title">
              <p>Wind</p>
            </div>
            <div className="play-btn">
              <Player media={wind} />
            </div>
          </div>
        </div>

        <div className="player-container">
          <div><img src="https://user-images.githubusercontent.com/46933160/135706200-e11df6ef-c217-48f8-a770-ad0a15ea9402.png" />
          </div>
          <div className="player">
            <div className="sound-title">
              <p>Camp Fire</p>
            </div>
            <div className="play-btn">
              <Player media={campfire} />
            </div>
          </div>
        </div>
      </div>

      <div className="App">
        <div className="player-container">
          <div><img src="https://user-images.githubusercontent.com/46933160/135711383-9193848a-39c7-49e5-833e-066356bfba55.png" />
          </div>
          <div className="player">
            <div className="sound-title">
              <p>Coffee Shop</p>
            </div>
            <div className="play-btn">
              <Player media={coffeeshop} />
            </div>
          </div>
        </div>

        <div className="player-container">
          <div><img src="https://user-images.githubusercontent.com/46933160/135711685-1e2e942c-bfed-4180-8606-52ecb3e995ca.png" />
          </div>
          <div className="player">
            <div className="sound-title">
              <p>Train</p>
            </div>
            <div className="play-btn">
              <Player media={train} />
            </div>
          </div>
        </div>

        <div className="player-container">
          <div><img src="https://user-images.githubusercontent.com/46933160/135711778-449b44ed-c8c4-45c2-b761-dd1ee8c39841.png" />
          </div>
          <div className="player">
            <div className="sound-title">
              <p>Chirping</p>
            </div>
            <div className="play-btn">
              <Player media={birds} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoundPanel;
