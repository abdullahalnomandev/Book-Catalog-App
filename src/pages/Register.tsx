// SignIn.tsx
import Layout from "@/layouts";
import { useSignUpUserMutation } from "@/redux/features/users/userApi";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [signUpUser, { data, error, isLoading, isSuccess, isError }] =
    useSignUpUserMutation(undefined);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUserInfo = {
      data: {
        name,
        email,
        username,
        password
      }
    };
    signUpUser(newUserInfo)
  };

  if (isSuccess) {
    const userInfo = {
      name: data?.data?.name,
      email: data?.data?.email,
      username: data?.data?.username
    };

    const userData = JSON.stringify(userInfo);
    sessionStorage.setItem("user", userData);
  }
    const navigate = useNavigate();

  useEffect(() => {
    if (error && "data" in error) {
      const data = error.data as { message: string } | undefined;
      toast.error(data?.message || "An error occurred");
    }

    if (isSuccess) {
      toast.success("Successfully logged in");
      navigate('/');
    }
  }, [isError, isSuccess]);
  return (
    <Layout>
      <div className="flex items-center justify-center md:h-screen bg-gray-100 ">
        <Toaster position="top-center" reverseOrder={true} />
        <div
          className="bg-white p-8 rounded-lg shadow-md
       md:w-1/3 w-full mx-4 my-4 md:my-0"
        >
          {isLoading && (
            <h1 className="text-xl font-bold text-center  text-blue-600 animate-pulse">
              Loading...
            </h1>
          )}

          <h1 className="text-2xl font-semibold mb-6">Sign Up </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Username
              </label>
              <input
                type="uername"
                id="username"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-500 text-white font-medium py-2 rounded-lg hover:bg-slate-600 focus:outline-none"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
