import { RedditButton } from "../button/RedditButton";

export const Sidebar = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <span>Feed</span>
        <button>Popular</button>
      </div>
      <div className="flex flex-col">
        <span>Topics</span>
        <button>Popular</button>
        <button>Popular</button>

        <button>Popular</button>

        <button>Popular</button>

        <button>Popular</button>

        <button>Popular</button>

        <button>Popular</button>
      </div>
      <div className="px-2">
        <span>
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </span>
        <RedditButton
          twClassName="text-redditBeluga bg-redditOrangeRed w-full"
          label={"Join Reddit"}
        />
      </div>
    </div>
  );
};
