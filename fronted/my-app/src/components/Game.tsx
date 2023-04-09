import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie, { LottieOptions } from "lottie-react";
// import background from "../assets/menu-background.png";
import dancer from "../assets/game-dancer.json";
import start from "../assets/start-button.png";
import loader from "../assets/loader2.json";
import help from "../assets/help.png";
import background from "../assets/register-background.png"
import logo from "../assets/logo.png"


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
type ButtonHelpStyle = {
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

type ModalStyle = {
  position: "fixed";
  top: string;
  left: string;
  width: string;
  height: string;
  backgroundColor: string;
  borderRadius: string;
  padding: string;
   textAlign: "center";
  fontSize: string;
  color: string;
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
    color: "#f5e07bbb",
    textShadow: "2px 2px 2px rgb(165, 164, 163)",
    fontFamily: "sans-serif",
    fontWeight: "bold",
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
  const helpButtonStyle: ButtonHelpStyle = {
    position: "absolute",
    top: "30%",
    right: "15%",
    width: "120px",
    height: "130px",
    background: `url(${help}) no-repeat center center`,
    backgroundSize: "100px 100px",
    border: "none",
    borderRadius: "30px"
  };

  const modalStyle: ModalStyle = {
    position: "fixed",
    top: "20%",
    left: "24%",
    width: "auto",
    height: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#cacaca"
  };

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleStart = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/game");
    }, 5000);
  };

  const handleHelp=()=>{
    setShowModal(true);
  }

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
           <button
          className="w-10 h-6"
          style={helpButtonStyle}
          onClick={handleHelp}
        />
 {showModal && (
          <div style={modalStyle}>
            <div style={{ padding: "20px" }}>
              <h2 style={{ marginBottom: "20px", color:"violet" }}>Game Rules</h2>
              <p style={{ lineHeight: "1.5" }}>
                - Select the color that matches the word shown in the middle.
                <br />
                - You have 10 seconds to choose the correct color.
                <br />
                - You get 1 point for each correct answer.
                <br />
                - The game ends after 10 rounds.
              </p>
              <button style={{ marginTop: "20px",color:"red" }} onClick={() => setShowModal(false)}>Close</button>
            </div>
          </div>
        )}
        </>
      )}
    </div>
  );
};

export default Game;
