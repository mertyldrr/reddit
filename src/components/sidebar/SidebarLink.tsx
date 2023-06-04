import { IconType } from "react-icons";
import { MdOutlineExpandMore } from "react-icons/md";

type Props = {
  Icon: IconType;
  label: string;
};

export const SidebarLink = ({ Icon, label }: Props) => {
  return (
    <button className="w-full flex flex-row justify-between items-center py-2 hover:bg-gray-200">
      <div className="w-full flex flex-row justify-between px-4">
        <div className="flex flex-row space-x-3">
          <Icon size={22} />
          <span className="text-[14px]">{label}</span>
        </div>
        <MdOutlineExpandMore size={22} />
      </div>
    </button>
  );
};
