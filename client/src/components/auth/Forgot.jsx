import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Forgot() {
    const [email, setEmail] = useState('')

    function handleForgot(e) {
        e.preventDefault()
        console.log(email)

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>

                <form onSubmit={(e) => handleForgot(e)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-400"
                        type='submit'
                    >
                        Reset
                    </button>

                </form>

                <p className="my-4">
                    <Link to="/login" className="text-blue-500">Go back to Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Forgot;
