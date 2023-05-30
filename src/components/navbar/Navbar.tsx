import redditLogo from "../../assets/reddit-logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { RedditButton } from "../button/RedditButton";
import { HiOutlineUser } from "react-icons/hi";

export const Navbar = () => {
  console.log(redditLogo);
  return (
    <div className="flex flex-row w-full px-4 h-12">
      <div className="flex flex-row w-full justify-between">
        <img src={redditLogo} alt="" className="h-full py-2" />
        <div className="w-5/12 flex flex-row justify-between items-center">
          <div className="flex flex-row flex-1 justify-center items-center bg-redditDolphin h-5/6 rounded-3xl">
            <IoSearchOutline size={22} className="ml-3 mt-[2px]" />
            <input
              className="w-full bg-redditDolphin placeholder:text-xs placeholder: pl-2 outline-none rounded-3xl font-sans"
              type="text"
              placeholder="Type here to search"
            />
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-x-4 mr-8">
          <RedditButton
            twClassName="text-redditSquidInk bg-redditDolphin py-[3px]"
            label="Get App"
          />
          <RedditButton
            twClassName="text-redditBeluga bg-redditOrangeRed w-[120px] py-[3px]"
            label="Log In"
          />
          <div className="h-2/3 border-gray-400 border px-2 flex justify-center items-center rounded-md">
            <HiOutlineUser color="gray" size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};
