import { FunctionComponent, ReactEventHandler } from "react";

interface MoreMenuProps {
    open: boolean;
    onClose?: ReactEventHandler<HTMLDialogElement>;
}

const menu = [
  "Block",
  "Restrict",
  "Report",
  "Embed",
  "About this account",
  "Cancel",
];

const MoreMenu: FunctionComponent<MoreMenuProps> = ({ open, onClose }) => {
  return (
    <dialog
      className="backdrop:bg-gray-50 z-10 dark:open:bg-black dark:text-white rounded-lg top-1/2 p-0"
      open={open}
      onClose={onClose}
    >
      <form method="dialog">
        <ul className="text-center">
          {menu.map((item) => (
            <li className="py-4 px-24 border-b last:border-none" key={item}>
              <button>{item}</button>
            </li>
          ))}
        </ul>
      </form>
    </dialog>
  );
};

export default MoreMenu;
