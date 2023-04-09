import React, { useState } from 'react';
import logo from '../assets/logo.png';
import background from '../assets/register-background.png';
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      localStorage.setItem("username",JSON.stringify(username))
      setShowMessage(true);
      setTimeout(() => {
        navigate('/menu');
      }, 2000);
    };
  
    return (
        <div className="flex flex-col justify-center items-center bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${background})` }}>
          <div className="w-1/2 lg:w-1/4">
            <img className="mx-auto h-48 w-auto" src={logo} alt="Logo" />
            <div className="bg-white bg-opacity-5 rounded-md shadow-md py-8 px-4 sm:px-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-white">Enter a unique Name</label>
                  <div className="mt-1">
                  <input id="username" name="username" type="text" autoComplete="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" style={{ backgroundColor: 'transparent', color: 'red' }} />
                  </div>
                </div>
      
                <div>
                  <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.929 7.757l4.242-4.242a1 1 0 011.415 0l4.243 4.242a1 1 0 010 1.414l-4.243 4.243a1 1 0 01-1.414 0l-4.242-4.243a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          {showMessage && (
            <div className="fixed top-0 right-0 m-10  p-6 bg-violet-500 rounded-md shadow-md">
              <p className="text-lg  text-white">Hi {username}! Welcome to the Clicky Ball.</p>
            </div>
          )}
        </div>
      );
          }

export default Register;