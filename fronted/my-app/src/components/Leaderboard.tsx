import React from "react";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import back_img from "../assets/menu-background.png";
import {Link } from "react-router-dom"
import logo from "../assets/logo.png";
const url = "https://yellow-frog-kit.cyclic.app/";




// interface ApiResponse {
//   data: {
//     _id: string;
//     username: string;
//     score: number;
//   }[];
// }

interface Post {
  _id: string;
  username: string;
  score: number;
}

// const Leaderboard: React.FC = () => {
//   let c=1
//   const [posts, setPosts] = React.useState<Post[]>([]);

//   React.useEffect(() => {
//     axios.get<ApiResponse>(url).then((res) => {
//       const mappedPosts = res.data.data.map((post) => ({
//         _id: post._id,
//         username: post.username,
//         score: post.score,
//       }));
//       setPosts(mappedPosts);
//     });
//   }, []);


const Leaderboard= () => {
  let c = 1;
  const [posts, setPosts] = React.useState([]);

   async function getData() {
     let res = await axios.get(`https://yellow-frog-kit.cyclic.app`);
     let userData: Post[] = res.data.data;
     console.log(userData);
     setPosts(userData)
   }
  React.useEffect(() => {
  getData()

  }, []);

  return (
    <div
      className="h-screen flex items-center"
      style={{
        backgroundImage: `url(${back_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      <div className=" absolute left-10 top-0 flex">
        <div>
          <img className="w-44" src={logo} alt="logo" />
        </div>
        <div className="mt-7" style={{ marginLeft: "20px" }}>
          <Link to="/menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-12 h-12  mt-10 stroke-cyan-600 hover:stroke-cyan-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="rounded-lg w-1/2 m-auto mt-10 absolute inset-x-0 top-6">
        <div
          style={{
            margin: "auto",
            textAlign: "center",
            fontSize: "2.5vw",
            color: "#f5e07bbb",
            textShadow: "2px 2px 2px rgb(165, 164, 163)",
            fontFamily: "sans-serif",
            fontWeight: "bold",
          }}
        >
          Leaderboard
        </div>

        <div
          className="rounded-lg rounded  w-full"
          style={{
            margin: "auto",
            padding: "10px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <table className="  shadow-lg shadow-cyan-500/100 rounded-lg overflow-y-auto h-32 table-auto  shadow-3xl font-[Pappins] border-cyan-200 w-3/4 content-center">
            <thead className="text-white">
              <tr>
                <th className="py-3 bg-cyan-800">SL. NO.</th>
                <th className="py-3 bg-cyan-800">NAME</th>
                <th className="py-3 bg-cyan-800">SCORES</th>
              </tr>
            </thead>
            <tbody className=" rounded-lg text-cyan-900 text-center">
              {posts &&
                posts.map((item) => (
                  <tr
                    className="hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300"
                    key={item.username}
                  >
                    <td className="font-bold m-auto border-2 border-neutral-700 font-mono py-3 px-6">
                      {c++}
                    </td>
                    <td className="font-bold border-2 border-neutral-700 font-mono py-3 px-6">
                      {item.username}
                    </td>
                    <td className=" font-bold border-2 border-neutral-700  font-mono py-3 px-6">
                      {item.score}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
