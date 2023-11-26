import Link from "next/link";

const ExtraHedear = () => {
  return (
    <div className="w-full max-h-16 p-2 bg-black ">
      <h1 className="text-center text-xs font-bold text-white">
        ওয়েবসাইটের উন্নয়নের জন্য আপনিও{" "}
        <Link className="text-blue-400 text-xs font-bold ml-2" href="/about">
          অংশগ্রহন করুন
        </Link>
      </h1>
    </div>
  );
};

export default ExtraHedear;
