import { RedditButton } from "../ui/button/RedditButton";
import { SidebarLink } from "./SidebarLink";
import { BiJoystick, BiCameraMovie } from "react-icons/bi";
import { MdOutlineSportsVolleyball, MdOutlineMoreHoriz } from "react-icons/md";
import { BsGraphUpArrow, BsCurrencyBitcoin } from "react-icons/bs";
import { IoStarOutline } from "react-icons/io5";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

export const Sidebar = () => {
  return (
    <div className="bg-redditBeluga fixed w-[270px] h-[calc(100vh-48px)] flex flex-col justify-between font-noto pt-2">
      <div>
        <div className="flex flex-col w-full">
          <span className="py-2 text-[10px] px-7 text-redditActionIcon">
            FEEDS
          </span>
          <SidebarLink label="Gaming" Icon={HiOutlineArrowTrendingUp} />
        </div>
        <div className="flex flex-col w-full">
          <span className="py-2 text-[10px] px-6 text-redditActionIcon">
            TOPICS
          </span>
          <SidebarLink label="Gaming" Icon={BiJoystick} />
          <SidebarLink label="Sports" Icon={MdOutlineSportsVolleyball} />
          <SidebarLink label="Business, Economics" Icon={BsGraphUpArrow} />
          <SidebarLink label="Crypto" Icon={BsCurrencyBitcoin} />
          <SidebarLink label="Television" Icon={BiCameraMovie} />
          <SidebarLink label="Celebrity" Icon={IoStarOutline} />
          <SidebarLink label="More Topics" Icon={MdOutlineMoreHoriz} />
        </div>
      </div>
      <div className="flex flex-col pb-10 px-6">
        <div className="border-b-2 mb-4" />
        <div className="pt-1 pb-5 pr-6 text-[14px] leading-[18px]">
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </div>
        <RedditButton
          twClassName="text-redditBeluga bg-redditOrangeRed w-full h-10"
          label={"Join Reddit"}
        />
      </div>
    </div>
  );
};
