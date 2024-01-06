import Link from "next/link";

const ExtraHeader = () => {
  return (
    <div className="w-full max-h-16 p-5 bg-gray-700">
      <h1 className="text-center text-xs font-bold text-white">
        ওয়েবসাইটের উন্নয়নের জন্য আপনিও{" "}
        <Link href="/about">
          <span className="text-blue-400 text-xs font-bold ml-2">
            অংশগ্রহন করুন
          </span>
        </Link>
      </h1>
    </div>
  );
};

export default ExtraHeader;
