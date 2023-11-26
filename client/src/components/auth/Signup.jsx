import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function SignUp() {
    const [formData, setFormData] = useState({
        idNumber: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'customer'
    });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSignUp = (e) => {
        e.preventDefault()
        if (formData.password === formData.confirmPassword) {
            setPasswordsMatch(true);
            // Passwords match, proceed with sign-up logic
            console.log(formData);
        } else {
            setPasswordsMatch(false);
            // Passwords don't match, show an error
            console.log('Passwords do not match');
        }
    };

    return (
        <>
            <div className={`bg-slate-500 min-h-screen flex flex-col md:flex-row `}>
                <div className="hidden md:flex items-center justify-center  md:flex-1 ">
                    {/* <Comming /> */}d
                </div>
                <div className="flex flex-col my-auto md:flex-1">
                    <div className="flex items-center justify-center bg-gray-00">
                        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

                            <form onSubmit={handleSignUp}>


                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name='name'
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="idNumber" className="block text-gray-700">ID Number</label>
                                    <input
                                        type="text"
                                        id="idNumber"
                                        name="idNumber"
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                                        placeholder="ID Number"
                                        value={formData.idNumber}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-gray-700">Password</label>
                                    <div className="relative">

                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            className={`w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300 ${!passwordsMatch ? 'border-red-500' : '' // Add a red border if passwords don't match
                                                }`}
                                            placeholder="Password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                        />
                                        <span
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <AiFillEyeInvisible className="text-gray-500 text-3xl" />
                                            ) : (
                                                <AiFillEye className="text-gray-500 text-3xl" />
                                            )}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            className={`w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300 ${!passwordsMatch ? 'border-red-500' : '' // Add a red border if passwords don't match
                                                }`}
                                            placeholder="Confirm Password"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                        />
                                        <span
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <AiFillEyeInvisible className="text-gray-500 text-3xl" />
                                            ) : (
                                                <AiFillEye className="text-gray-500 text-3xl" />
                                            )}
                                        </span>

                                    </div>
                                    {!passwordsMatch && (
                                        <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                                    )}
                                </div>

                                <button
                                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-400"
                                    type='submit'
                                >
                                    Sign Up
                                </button>

                            </form>

                            <div className="mt-4 text-center">
                                <p>
                                    Have an account?{' '}
                                    <Link to="/login" className="text-blue-500">
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default SignUp;
