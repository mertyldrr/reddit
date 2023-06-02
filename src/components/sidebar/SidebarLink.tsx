import { IconType } from "react-icons";
import { MdOutlineExpandMore } from "react-icons/md";

type Props = {
  Icon: IconType;
  label: string;
};

export const SidebarLink = ({ Icon, label }: Props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center py-2 bg-white">
      <div className="flex flex-row space-x-3">
        <Icon size={22} />
        <button className="text-[14px]">{label}</button>
      </div>
      <MdOutlineExpandMore size={22} />
    </div>
  );
};
