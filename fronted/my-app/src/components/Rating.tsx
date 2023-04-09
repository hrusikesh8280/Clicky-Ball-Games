import React from 'react'
import Lottie,{LottieOptions} from "lottie-react"
import background from"../assets/register-background.png"
import star5 from "../assets/5-star.json"
import star4 from "../assets/4-star-new.json"
import star3 from "../assets/3-star.json"
import star1 from "../assets/1-star.json"
import styled,{keyframes} from "styled-components"

interface ResultProps {}

const Rating: React.FC<ResultProps> = () => {
    let score = 7;

    let animation;
    if (score >= 6) {
      animation = <Lottie animationData={star5} loop autoplay style={{ height: "350px", width: "400px", margin: "auto" }} />;
    } else if (score >= 4) {
      animation = <Lottie animationData={star4} loop autoplay style={{ height: "550px", width: "500px", margin: "auto" }} />;
    } else if (score >= 2) {
      animation = <Lottie animationData={star3} loop autoplay style={{ height: "450px", width: "500px", margin: "auto" }} />;
    } else {
      animation = <Lottie animationData={star1} loop autoplay style={{ height: "450px", width: "500px", margin: "auto" }} />;
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
        color: #fff;
        text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
        animation: ${slideIn} 1s ease-in-out;
    `;

  
    return (
      <div
        className="h-screen flex items-center"
        style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* add any result content here */}
        <div className="w-350px md:w-400px lg:w-355px mx-auto">
          <div className="w-full text-center">
          <TextWrapper>Your score is {score}</TextWrapper>
            {animation}
          </div>
        </div>
      </div>
    )
}
export default Rating;

