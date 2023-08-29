import { styleComponent } from "../../../utils/style";

export default function HeaderSearch({ onClose }) {
  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-dark-grey font-bold text-xs font-muli py-5">
        Edit your search
      </h1>
      <div className="cursor-pointer relative" onClick={onClose}>
        <span className={styleComponent({ search: "close" })}></span>
      </div>
    </div>
  );
}
