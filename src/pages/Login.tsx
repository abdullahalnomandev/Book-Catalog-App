// SignIn.tsx
import Layout from "@/layouts";
import { useLoginUserMutation } from "@/redux/features/users/userApi";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser, { data, error, isLoading, isSuccess, isError }] =
    useLoginUserMutation(undefined);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // if (isError) {
  //   toast.error(error?.data?.message);
  // }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can implement the logic for signing in with the provided email and password
    // For simplicity, we'll just log the credentials for now
    console.log("Email:", email);
    console.log("Password:", password);
    const options = {
      data: {
        email: email,
        password: password
      }
    };
    loginUser(options);

      console.log("data", data?.data);

  };

  if(isSuccess){
    const userInfo = {
      name: data?.data?.name,
      email: data?.data?.email,
      username: data?.data?.username
    }

    const userData = JSON.stringify(userInfo);
    sessionStorage.setItem("user", userData);
  }

    const navigate = useNavigate();

  useEffect(() => {

    if ( error && "data" in error) {
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
        <div
          className="bg-white p-8 rounded-lg shadow-md
       md:w-1/3 w-full mx-4 my-4 md:my-0"
        >
          {isLoading && (
            <h1 className="text-xl font-bold text-center  text-blue-600 animate-pulse">
              Loading...
            </h1>
          )}

          <h1 className="text-2xl font-semibold mb-6">Sign In</h1>
          <Toaster position="top-center" reverseOrder={true} />

          <form onSubmit={handleSubmit}>
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
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
