import React from "react";
import back_img from "../assets/menu-background.png";
import {Link } from "react-router-dom"
const Leaderboard = () => {
  return (
    <div
      className="h-screen flex items-center"
      style={{
        backgroundImage: `url(${back_img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div class="w-2/3">
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
          <div style={{ marginLeft: "100px" }}>
            <Link to="/menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                class="w-12 h-12  mt-10 stroke-cyan-600 hover:stroke-cyan-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Link>
          </div>
          Leaderboard
        </div>
      </div>
      <div
        class="rounded-lg "
        style={{
          width: "45%",
          margin: "auto",
          padding: "10px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <table class="rounded-lg overflow-y-auto h-32 table-auto  shadow-3xl font-[Pappins] border-cyan-200 w-3/4 content-center">
          <thead class="text-white">
            <tr>
              <th class="py-3 bg-cyan-800">NAME</th>
              <th class="py-3 bg-cyan-800">SCORES</th>
            </tr>
          </thead>
          <tbody class="text-cyan-900 text-center">
            <tr class="hover:bg-cyan-100 bg-cyan-200 cursor-pointer duration-300">
              <td class="py-3 px-6">biky</td>
              <td class="py-3 px-6">6</td>
            </tr>
            <tr class="hover:bg-cyan-100 bg-cyan-300 cursor-pointer duration-300">
              <td class="py-3 px-6">jhon</td>
              <td class="py-3 px-6">5</td>
            </tr>
            <tr class="hover:bg-cyan-100 bg-cyan-400 cursor-pointer duration-300">
              <td class="py-3 px-6">Ronnu</td>
              <td class="py-3 px-6">3</td>
            </tr>
            <tr class="hover:bg-cyan-100 bg-cyan-500 cursor-pointer duration-300">
              <td class="py-3 px-6">adam</td>
              <td class="py-3 px-6">0</td>
            </tr>
            <tr class="hover:bg-cyan-100 bg-cyan-500 cursor-pointer duration-300">
              <td class="py-3 px-6">adam</td>
              <td class="py-3 px-6">0</td>
            </tr>
            <tr class="hover:bg-cyan-100 bg-cyan-500 cursor-pointer duration-300">
              <td class="py-3 px-6">adam</td>
              <td class="py-3 px-6">0</td>
            </tr>
            <tr class="hover:bg-cyan-100 bg-cyan-500 cursor-pointer duration-300">
              <td class="py-3 px-6">adam</td>
              <td class="py-3 px-6">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
