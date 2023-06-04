type Props = {
  twClassName?: string;
  label: string;
};

export const RedditButton = ({ twClassName, label }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`${twClassName} rounded-3xl font-noto font-semibold text-[14px]`}
      >
        {label}
      </button>
    </div>
  );
};
