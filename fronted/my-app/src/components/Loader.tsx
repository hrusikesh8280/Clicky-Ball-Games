import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie,{LottieOptions} from "lottie-react"
import ball2 from "../assets/ball2-loader.json"
import background from "../assets/menu-background.png"
interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/menu");
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
        <Lottie {...options} />
      </div>
    </div>
  );
};
export default Loader