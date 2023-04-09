import { useEffect, useRef, useState } from "react";
import "../styles/balls.css";
import { motion } from "framer-motion";
import Lifelines from "./lifelines";
import useSound from "use-sound";
import { Textanim } from "./checks/wrong";
import { Correctans } from "./checks/correct";
import { useNavigate } from "react-router-dom";
 const BallsPage = () => {
  const [playDeleteSfx] = useSound("delete.mp3");
  const [playCorrectSfx] = useSound("correct.mp3");
  const [playWrongSfx] = useSound("wrong.mp3");

  // for navigations
  const navigate = useNavigate()
  // states
  const [score, setScore] = useState<number>(0);
  const [update, setUpdate] = useState<boolean | null>(null);
  // const [userId, setuserId] = useState(null);
  const [click, setClick] = useState<boolean>(false);
  const [globalIndex, setIndex] = useState<number | null>(null);

  // for deleting the lifelines

  const [lifelines, setLifelines] = useState<number[]>([1, 2, 3, 4, 5]);

  // for using refs

  const first_ref = useRef<HTMLDivElement>(null!);
  const second_ref = useRef<HTMLDivElement>(null!);
  const third_ref = useRef<HTMLDivElement>(null!);
  const fourth_ref = useRef<HTMLDivElement>(null!);

  // for current state
  // let globalIndex;
  // const currentState = useRef(null);
  //

  // functions
   const startGame = () => {
    // for timeout, colotIndex, and randomColor generators
    const timeout = (Math.floor(Math.random() * 4) + 1) * 1000;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const colorIndex = Math.floor(Math.random() * 4);
    setIndex(colorIndex);
    //
    // console.log("inside", colorIndex);
    setClick(true);
    let id = setTimeout(() => {
      if (colorIndex === 0) {
        first_ref.current.style.backgroundColor = `#${randomColor}`;
      } else if (colorIndex === 1) {
        second_ref.current.style.backgroundColor = `#${randomColor}`;
      } else if (colorIndex === 2) {
        third_ref.current.style.backgroundColor = `#${randomColor}`;
      } else {
        fourth_ref.current.style.backgroundColor = `#${randomColor}`;
      }

      // calling another setTimeout to change it back to intial postion
      let id2 = setTimeout(() => {
        if (colorIndex === 0) {
          first_ref.current.style.backgroundColor = `white`;
        } else if (colorIndex === 1) {
          second_ref.current.style.backgroundColor = `white`;
        } else if (colorIndex === 2) {
          third_ref.current.style.backgroundColor = `white`;
        } else {
          fourth_ref.current.style.backgroundColor = `white`;
        }
        clearTimeout(id2);
        handleClick()
        setClick(false)
      }, timeout);
      // setuserId(null);
      clearTimeout(id);
      setIndex(null);
      setUpdate(null);
    }, timeout);
  }
  // checkInput function

  const checkInput = (index:number|null, userId:number) => {
    console.log(index, userId);
    // console.log("outside", index);
    // ctry with color
    if (index === userId) {
      setScore((score) => score + 1);
      setUpdate(true);
      playCorrectSfx();
    } else {
      setUpdate(false);
      playWrongSfx();
    }
  };

  // handleCheck function
  // console.log("nextout", userId);
  const handleCheck = (e:any):void => {
    // console.log("next", userId)
    // setClick(true);
    if (click) {
      checkInput(globalIndex, Number(e.target.id));
    }
  };

  // console.log(lifelines)

  const handleClick = () => {
    const newLifelines = [...lifelines];
    newLifelines.pop();
    setLifelines(newLifelines);
    playDeleteSfx();
  };
  // html

  useEffect(()=>{
  if(lifelines.length<1){
    navigate("/result")
  }
  },[lifelines])
  return (
    <div className="balls_body">
      <h1 className="heading">Start & Pick a Ball</h1>
      <div className="life_line">
        <h2>LIFES:{lifelines.length}</h2>
        <Lifelines lifelines={lifelines} />
      </div>
      <div className="four_balls">
        <motion.div
          className="ball"
          id={"0"}
          ref={first_ref}
          onClick={handleCheck}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.2, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          id={"1"}
          ref={second_ref}
          onClick={handleCheck}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          id={"2"}
          ref={third_ref}
          onClick={handleCheck}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.7, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          id={"3"}
          ref={fourth_ref}
          onClick={handleCheck}
          animate={{
            y: [0, -20, 0]
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0, 0.8, 1],
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <motion.div
        className="user_score"
        animate={update ? { scale: [1, 1.5, 1] } : ""}
        transition={{ duration: 0.5 }}
      >
        <div>SCORE: {score}</div>
      </motion.div>
      <div className="user_buttons">
        <motion.button
          onClick={()=>{startGame()}}
          disabled={click ? true : false}
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          START
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          RESET
        </motion.button>
      </div>

      {update ? <div className="user-check"><Correctans /></div> : update === false ? <div className="user-check"><Textanim /></div> : ""}
    </div>
  );
};

export default BallsPage