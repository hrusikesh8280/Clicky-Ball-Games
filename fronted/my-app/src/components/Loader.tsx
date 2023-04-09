import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie,{LottieOptions} from "lottie-react"
import ball2 from "../assets/ball2-loader.json"
import background from "../assets/menu-background.png"
import logo from "../assets/logo.png"
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/register");
  }, 5000);

  const options: LottieOptions = {
    animationData: ball2 as any,
  };

  return (
    <div
      className="h-screen flex items-center"
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* add any loader content here */}
      <div className="w-250px md:w-400px lg:w-255px mx-auto">
        <img src={logo}  alt="logo" className="mx-auto" height="200" width="400" />
        <div className="w-full text-center">
          <Lottie {...options} style={{height: "250px", width: "200px", margin: "auto"}} />
        </div>
      </div>
    </div>
  );
};
export default Loader