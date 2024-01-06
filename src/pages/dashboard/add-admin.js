import RootLayout from "@/components/Layouts/RootLayout";
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
        <div className="text-center">
          <h1 className="my-3 text-black text-4xl font-bold">Add Admin</h1>
        </div>
        <form onSubmit={handleCreateUser} className="space-y-4">
          {renderInput("Email", email, setEmail, "email")}
          {renderInput("Password", password, setPassword, "password")}
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

const renderInput = (label, value, onChange, type) => (
  <div className="form-control w-full" key={label}>
    <label className="label">
      <span className="label-text font-semibold">{label}</span>
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`input w-full input-bordered ${
        type === "email" ? "input-success" : "input-error"
      }`}
      required
    />
  </div>
);

export default Register;

Register.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
