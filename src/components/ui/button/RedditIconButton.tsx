import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  label: string;
  twClassName?: string;
};

export const RedditIconButton = ({ Icon, label, twClassName }: Props) => {
  return (
    <div
      className={`flex flex-row ${twClassName} items-center border rounded-3xl px-2`}
    >
      <Icon size={20} />
      <div className={`flex w-full items-center justify-center`}>
        <button className={`font-noto font-medium text-[14px]`}>{label}</button>
      </div>
    </div>
  );
};
