import React,{useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function Reset() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const { token } = useParams();

    function handleResetPass(e){
        e.preventDefault()
        if (password === confirmPassword) {
            setPasswordsMatch(true);
            // Passwords match, proceed with sign-up logic
            console.log(password,confirmPassword,token)
        } else {
            setPasswordsMatch(false);
            // Passwords don't match, show an error
            console.log('Passwords do not match');
        }
    }
 
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

                <form onSubmit={handleResetPass}>
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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

                <p className="my-4">
                <Link to="/login" className="text-blue-500">Go back to Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Reset;
