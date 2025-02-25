import { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoLockClosedOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

export function Signup() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords did not match");
      return;
    }
    setError("");
    console.log("Form Submitted", { password, confirmPassword });
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          SIGN UP
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="w-full flex justify-center mt-6">
        <div className="w-full sm:w-96 flex flex-col items-center space-y-5">
          {/* Email Input */}
          <div className="w-full relative">
            <CiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="email"
              placeholder="EMAIL ADDRESS"
              required
              className="text-xs text-left w-full pl-10 border rounded-md focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Password Input */}
          <div className="w-full relative">
            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="password"
              placeholder="PASSWORD"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-xs text-left w-full pl-10 border rounded-md focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="w-full relative">
            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              type="password"
              placeholder="CONFIRM PASSWORD"
              required
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-xs text-left w-full pl-10 border rounded-md focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>
          {error && <p className="text-red-500 text-xs">{error}</p>}

          {/* Button REGISTER */}
          <button
            type="submit"
            className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-md transition duration-300 hover:bg-gray-700 focus:ring-2 focus:ring-sky-400"
          >
            REGISTER
          </button>
        </div>
      </form>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-gray-900 hover:text-sky-400 underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
