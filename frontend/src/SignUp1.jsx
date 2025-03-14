import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from 'axios';
const SignUp1 = () => {
    const [userType, setUserType] = useState("User");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
      e.preventDefault();
      axios
        .post('http://localhost:3000/SignUp1', {
          name,
          email,
          password,
          birthday,
          gender
        })
        .then((result) => {
          console.log(result);
          navigate('/LogIn');
        })
        .catch((err) => console.log(err));
    };

    return (
        <div className="flex flex-col items-center bg-black text-white gap-15 min-h-[calc(100vh-4rem)]">
            <div className="flex flex-col gap-8">
                <h1 className="text-4xl">
                    Welcome to PHYS<span className="text-yellow-500">Q</span>
                </h1>

                <div className="flex justify-center">
                    <button
                        className={`min-w-25 py-2 text-xl font-semibold rounded-lg ${
                        userType === "User"
                        ? "bg-yellow-500 text-black"
                        : "text-white font-thin"
                        }`}
                        onClick={() => setUserType("User")}
                        >
                        User
                    </button>
                        <button
                        className={`min-w-25 py-2 text-xl font-semibold rounded-lg ${
                        userType === "Trainer"
                        ? "bg-yellow-500 text-black"
                        : "text-white font-thin"
                        }`}
                        onClick={() => setUserType("Trainer")}
                        >
                        Trainer
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4"> 
            <div className="flex flex-row gap-5">
                    <input
                        type="text"
                        placeholder="USERNAME"
                        className="w-sm pb-2 mr-3 ml-3 bg-black border-b border-gray-500 focus:outline-none"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="PASSWORD"
                        className="w-sm pb-2 mr-3 ml-3 bg-black border-b border-gray-500 focus:outline-none"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
            </div>

            <div className="flex flex-row gap-5">
                <input
                    type="email"
                    placeholder="EMAIL"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-3xs pb-2 mr-3 ml-3 bg-black border-b border-gray-500"
                />
                
                <div className="flex flex-row mr-3 ml-3 bg-black gap-3">
                    <p className="text-gray-400">BIRTHDAY:</p>
                    <input 
                        type="date" 
                        name="birthday"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="pb-2 border-b border-gray-500"/>
                </div>
                
                <div className="flex flex-row mr-3 ml-3 bg-black gap-3">
                    <p className="text-gray-400">GENDER:</p>
                    <select
                        className="pb-2 border-b border-gray-500"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        >

                        <option value="" disabled className="bg-black text-gray-500"></option>
                        <option value="male" className="bg-black text-gray-500">Male</option>
                        <option value="female" className="bg-black text-gray-500">Female</option>
                    </select>
                </div>

            </div>

            <div className="flex flex-col items-center gap-3">
                <button type="submit" className="w-30 bg-yellow-500 text-black px-5 py-2 rounded-lg font-bold text-xl text-center" to="/SignUp2">
                    Sign-up
                </button>
                <p className="text-md">
                    Already have an account?{" "}
                    <Link 
                    className="text-yellow-500 cursor-pointer font-semibold hover:text-orange"
                    to="/LogIn"
                    >LOG-IN</Link>
                </p>
            </div>

            </form>
        </div>
    );
};

export default SignUp1;
