import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { RedditButton } from "../ui/button/RedditButton";
import { RedditIconButton } from "../ui/button/RedditIconButton";

export const SignupModal = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 w-[400px] h-[640px] m-auto bg-redditBeluga">
      <button className=" text-redditSeal font-bold py-2 px-4 rounded absolute top-4 right-4">
        X
      </button>
      <div className="bg-white max-w-[280px] rounded-lg">
        <div className="font-plexSans text-lg font-semibold mt-6 text-[20px]">
          Sign Up
        </div>
        <div className="font-noto text-[12px] mt-2">
          By continuing, you are setting up a Reddit account and agree to our
          User Agreement and Privacy Policy.
        </div>
        <div className="flex flex-row items-center mt-4">
          <div className="flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-[13px] h-[13px] mr-[7px]"
            />
            <span className="font-noto text-[12px] whitespace-nowrap">
              I agree to get emails about cool stuff on Reddit
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-3 mt-8 mb-4">
          <RedditIconButton
            label="Continue with Google"
            Icon={FcGoogle}
            twClassName="w-full h-10 rounded-3xl my-1"
          />
          <RedditIconButton
            twClassName="w-full h-10 rounded-3xl my-1"
            label="Continue with Apple"
            Icon={AiFillApple}
          />
        </div>
        <div className="flex justify-center items-center space-x-4 py-7">
          <span className="border-t w-2/5"></span>
          <span className="font-plexSans text-redditActionIcon">OR</span>
          <span className="border-t w-2/5"></span>
        </div>

        <div className="font-noto text-[12px]">
          Forgot your username or password?
        </div>
        <RedditButton
          twClassName="text-redditBeluga bg-redditOrangeRed w-full h-10 rounded-3xl mt-4"
          label="Continue"
        />
        <div className="font-noto text-[12px] mt-4">
          Already a redditor? Log In
        </div>
      </div>
    </div>
  );
};
