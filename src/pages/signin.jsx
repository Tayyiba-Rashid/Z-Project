import { FaGoogle, FaFacebook } from 'react-icons/fa';
import auth, { signInWithFacebook, signInWithGoogle } from '@/firebaseConfig';
import {  signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useRouter } from 'next/router';



const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            router.push("/gallery")
        } catch (err) {
            console.log(err.message)
        }
    }

    const handleGoogleAuth = async () => {
        try{
            await signInWithGoogle();
            router.push("/gallery");
        }catch(err){
            console.log(err.message)
        }

    }

    const handleFacebookAuth = async () => {
        try {
            await signInWithFacebook();
            router.push("/signin");
        } catch (err) {
            console.log(err.message)
        }

    }



    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-zimo-theme">Sign In</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700"
                        >
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
                        type="button"
                        onClick={handleSignIn}
                        className="bg-black w-full px-4 py-2 font-semibold text-white rounded-md bg-zimo-theme hover:bg-zimo-theme-dark"
                    >
                        Sign In
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
                        <FaGoogle className="mr-2" /> Sign in with Google
                    </button>
                    <button 
                    onClick={handleFacebookAuth}
                    className="flex items-center justify-center w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">
                        <FaFacebook className="mr-2" /> Sign in with Facebook
                    </button>
                    
                </div>
                <p className="text-sm text-center text-gray-500">
            Don't have an account?{' '}
            <a
                href="/signup"
                className="font-medium text-zimo-theme hover:underline"
            >
                Sign Up
            </a>
        </p>
                
            </div>
        </div>
    );
};

export default SignIn;
