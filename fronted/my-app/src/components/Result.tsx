import React from 'react'
import Lottie,{LottieOptions} from "lottie-react"
import background from"../assets/register-background.png"
import star5 from "../assets/5-star.json"
import star4 from "../assets/4-star-new.json"
import star3 from "../assets/3-star.json"
import star1 from "../assets/1-star.json"
import styled,{keyframes} from "styled-components"
import repeat from "../assets/repeat-button.png"
import home from "../assets/home.png"
import { useNavigate } from 'react-router-dom'
import leaderboard from "../assets/competition.png"

type ButtonStyle = {
    position: "absolute";
    top?: string;
    right: string;
    bottom?: string;
    width: string;
    height: string;
    background: string;
    border: string;
    borderRadius: string;
    backgroundSize: string;
  };



interface ResultProps {}

const Result: React.FC<ResultProps> = () => {

    const navigate = useNavigate();

    let score = 7;


    const repeatButtonStyle: ButtonStyle = {
        position: "absolute",
        bottom: "20px",
        right: "10%",
        width: "70px",
        height: "80px",
        background: `url(${repeat}) no-repeat center center`,
        backgroundSize: "60px 60px",
        border: "none",
        borderRadius: "30px"
      };
      const homeButtonStyle: ButtonStyle = {
        position: "absolute",
        bottom: "20px",
        right: "75%",
        width: "70px",
        height: "80px",
        background: `url(${home}) no-repeat center center`,
        backgroundSize: "60px 60px",
        border: "none",
        borderRadius: "30px"
      };
      const leaderBoardButtonStyle: ButtonStyle = {
        position: "absolute",
        bottom: "20px",
        right: "42%",
        width: "70px",
        height: "80px",
        background: `url(${leaderboard}) no-repeat center center`,
        backgroundSize: "79px 78px",
        border: "none",
        borderRadius: "30px"
      };

      const handleRepeat=()=>{
        navigate("/game")
        
      }
      const handleHome=()=>{
        navigate("/menu")
      }
      const handleLeaderBoard=()=>{
        navigate("/leaderboard")
      }


    let animation;
    let ratingText;
    if (score >= 6) {
        animation = <Lottie animationData={star5} loop autoplay style={{ height: "350px", width: "400px", margin: "auto" }} />;
        ratingText = "Great!";
    } else if (score >= 4) {
        animation = <Lottie animationData={star4} loop autoplay style={{ height: "450px", width: "500px", margin: "auto" }} />;
        ratingText = "Awesome!";
    } else if (score >= 2) {
        animation = <Lottie animationData={star3} loop autoplay style={{ height: "450px", width: "500px", margin: "auto" }} />;
        ratingText = "Good!";
    } else {
        animation = <Lottie animationData={star1} loop autoplay style={{ height: "450px", width: "500px", margin: "auto" }} />;
        ratingText = "Needs Improvement";
    }

    const slideIn = keyframes`
        0% {
            opacity: 0;
            transform: translateY(-50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    const TextWrapper = styled.div`
        font-size: 2rem;
        font-weight: bold;
        color: #add9ee;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        animation: ${slideIn} 1.5s ease-in-out;
    `;

  
    return (
        <div
        className="h-screen flex items-center"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="w-350px md:w-400px lg:w-355px mx-auto relative">
          <div className="w-full text-center">
            <TextWrapper>Your score is {score}</TextWrapper>
            <TextWrapper>{ratingText}</TextWrapper>
            {animation}
          </div>
          <button
            className="w-10 h-6"
            style={repeatButtonStyle}
            onClick={handleRepeat}
          />
                    <button
            className="w-10 h-6"
            style={leaderBoardButtonStyle}
            onClick={handleLeaderBoard}
          />
          <button
            className="w-10 h-6"
            style={homeButtonStyle}
            onClick={handleHome}
          />

        </div>
      </div>
    )
}
export default Result;


