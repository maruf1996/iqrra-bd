import { createUser } from "@/redux/features/userSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createUser({ email, password }));
      console.log("User created successfully!");
      router.push("/");
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#F1F5F9] text-gray-900">
        <div className=" text-center">
          <h1 className="my-3 text-black text-4xl font-bold">Add Admin</h1>
        </div>
        <form onSubmit={handleCreateUser} className="">
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

export default Register;
