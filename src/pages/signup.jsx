import { FaGoogle, FaFacebook } from 'react-icons/fa';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import auth, { signInWithFacebook, signInWithGoogle } from '../firebaseConfig'
import { useState } from 'react';
import { useRouter } from 'next/router';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent form submission
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/signin"); // Redirect after sign-up
        } catch (err) {
            setError(err.message);
        }
    };
    const handleGoogleAuth = async () => {
        try {
            await signInWithGoogle();
            router.push("/gallery");
        } catch (err) {
            console.log(err.message)
        }

    }

    const handleFacebookAuth = async () => {
        try {
            await signInWithFacebook();
            router.push("/gallery");
        } catch (err) {
            console.log(err.message)
        }

    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-zimo-theme">Sign Up</h2>
                <form className="space-y-4" onSubmit={handleSignUp}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-zimo-theme-light"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:ring focus:ring-zimo-theme-light"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        onClick={handleSignUp}
                        type="submit"
                        className=" bg-black w-full px-4 py-2 font-semibold text-white rounded-md bg-zimo-theme hover:bg-zimo-theme-dark"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center justify-between space-x-4">
                    <hr className="w-full border-gray-300" />
                    <span className="text-sm font-medium text-gray-400">OR</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={handleGoogleAuth}
                        className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600">
                        <FaGoogle className="mr-2" /> Sign up with Google
                    </button>
                    <button
                    onClick={handleFacebookAuth}
                     className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        <FaFacebook className="mr-2" /> Sign up with Facebook
                    </button>
                    
                </div>
                <p className="text-sm text-center text-gray-500">
            Already have an account?{' '}
            <a
                href="/signup"
                className="font-medium text-zimo-theme hover:underline"
            >
                Sign In
            </a>
        </p>
            </div>
        </div>
    );
};

export default SignUp;
