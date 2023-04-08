import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie, { LottieOptions } from "lottie-react";
import background from "../assets/menu-background.png";
import dancer from "../assets/game-dancer.json";
import start from "../assets/start-button.png";
import loader from "../assets/loader2.json";

type TextStyle = {
  position: "absolute";
  top: string;
  left: string;
  transform: string;
  textAlign: "center";
  fontSize: string;
  color: string;
  textShadow: string;
  fontFamily: string;
  fontWeight: string;
};

type ButtonStyle = {
  position: "absolute";
  top: string;
  right: string;
  width: string;
  height: string;
  background: string;
  border: string;
  borderRadius: string;
  backgroundSize: string;
};

const Game: React.FC = () => {
  const options1: LottieOptions = {
    animationData: dancer as any
  };
  const options2: LottieOptions = {
    animationData: loader as any
  };

  const dancerStyle = {
    transform: "scale(0.6)"
  };

  const textStyle: TextStyle = {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    fontSize: "2.5vw",
    color: "#cdba50",
    textShadow: "0px 2px 4px rgb(220, 209, 209)",
    fontFamily: "sans-serif",
    fontWeight: "bold"
  };

  const startButtonStyle: ButtonStyle = {
    position: "absolute",
    top: "50%",
    right: "15%",
    width: "200px",
    height: "80px",
    background: `url(${start}) no-repeat center center`,
    backgroundSize: "200px 180px",
    border: "none",
    borderRadius: "30px"
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStart = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/game");
    }, 3500);
  };

  return (
    <div
      className="h-screen flex items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {loading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Lottie {...options2} />
        </div>
      ) : (
        <>
          <div className="w-40 md:w-1/2 lg:w-3/4 mx-auto" style={dancerStyle}>
            <Lottie {...options1} />
          </div>
          <div style={textStyle}>
            Get ready to flex your chromatic muscles and show off your
            color-picking prowess!
          </div>
          <button
            className="w-10 h-6"
            style={startButtonStyle}
            onClick={handleStart}
          />
        </>
      )}
    </div>
  );
};

export default Game;
