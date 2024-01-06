import { loginUser } from "@/redux/features/userSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error("Error logging in user:", error.message);
    }
    setEmail("");
    setPassword("");
  };

  if (user?.email) {
    router.push("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#F1F5F9] text-gray-900">
        <div className="text-center">
          <h1 className="my-3 text-black text-4xl font-bold">Log in</h1>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full input-bordered input-success"
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="from_name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full input-bordered input-error"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-outline btn-secondary lg:mt-8 mt-5 px-9"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
