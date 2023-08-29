import { styleComponent } from "../../../utils/style";
import Button from "../../Elements/Buttons/Button";

export default function GuestCounter({ onCount, child, adult }) {
  return (
    <div className="ml-4">
      <div className="mt-9">
        <h4 className={styleComponent({ counter: "number" })}>Adults</h4>
        <p className="text-soft-grey font-muli text-sm font-normal">
          Ages 13 or above
        </p>
        <div className="flex flex-row space-x-5 mt-3">
          <div className="p-1 rounded border border-gunmetal flex items-center">
            <span
              className={styleComponent({ counter: "minus" })}
              onClick={() => onCount("adult", "-")}
            ></span>
          </div>
          <p className={styleComponent({ counter: "number" })}>{adult}</p>
          <div className="p-1 rounded border border-gunmetal relative flex items-center">
            <span
              className={styleComponent({ counter: "plus" })}
              onClick={() => onCount("adult", "+")}
            ></span>
          </div>
        </div>
      </div>
      <div className="mt-9">
        <h4 className={styleComponent({ counter: "number" })}>Children</h4>
        <p className="text-soft-grey font-muli text-sm font-normal">
          Ages 2-12
        </p>
        <div className="flex flex-row space-x-5 mt-3">
          <div className="p-1 rounded border border-gunmetal flex items-center">
            <span
              className={styleComponent({ counter: "minus" })}
              onClick={() => onCount("child", "-")}
            ></span>
          </div>
          <p className={styleComponent({ counter: "number" })}>{child}</p>
          <div className="p-1 rounded border border-gunmetal relative flex items-center">
            <span
              className={styleComponent({ counter: "plus" })}
              onClick={() => onCount("child", "+")}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}
