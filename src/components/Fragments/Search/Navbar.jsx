import { useState } from "react";
import { styleComponent } from "../../../utils/style";
import Input from "../../Elements/Inputs/Input";
import SubmitButton from "./Submit";
import HeaderSearch from "./HeaderSearch";
import Location from "./Location";
import GuestCounter from "./Guest";

export default function Navbar({
  stays,
  onChangeLocation,
  onChangeGuest,
  onClickList,
  valueLocation,
  valueGuest,
  onCount,
  adult,
  child,
}) {
  const [searchClick, setSearchClick] = useState(false);
  const [activeLocation, setActiveLocation] = useState(false);
  const [activeGuest, setActiveGuest] = useState(false);

  const handleSearchClick = () => {
    setSearchClick(true);
  };

  const handleClickLocation = () => {
    setActiveLocation(true);
    setActiveGuest(false);
  };

  const handleClickGuest = () => {
    setActiveGuest(true);
    setActiveLocation(false);
  };

  return (
    <div
      className={
        searchClick
          ? "fixed top-0 left-0 bg-white w-full h-5/6 duration-500 ease-in-out px-6"
          : null
      }
    >
      {searchClick ? (
        <HeaderSearch
          onClose={() => {
            setSearchClick(false);
            setActiveLocation(false);
            setActiveGuest(false);
          }}
        />
      ) : null}
      <div
        className={
          searchClick
            ? `sm:max-w-full${styleComponent({ input: "inputClick" })}`
            : `my-10${styleComponent({ input: "inputClick" })}`
        }
      >
        <div
          className={
            searchClick
              ? `relative flex-col sm:flex-row sm:w-full ${styleComponent({
                  navbar: "parent",
                }).trim()}`
              : `mx-4 ${styleComponent({ navbar: "parent" }).trim()}`
          }
          onClick={handleSearchClick}
        >
          <div
            className={
              searchClick
                ? `px-4 pt-3 sm:w-full sm:flex-[1_0_50%] ${
                    activeLocation
                      ? "border border-dark-grey rounded-2xl"
                      : null
                  }`
                : null
            }
            onClick={handleClickLocation}
          >
            {searchClick ? (
              <label
                htmlFor="location"
                className={styleComponent({ label: "base" })}
              >
                LOCATION
              </label>
            ) : null}
            <Input
              id="location"
              className={`py-5 w-full ${
                searchClick ? null : "border-r border-light-grey"
              }`}
              placeholder="Add Location"
              onChange={onChangeLocation}
              value={valueLocation}
              readOnly
            />
          </div>

          {searchClick ? (
            <span className="w-full h-[1px] bg-light-grey block"></span>
          ) : null}

          <div
            className={
              searchClick
                ? `px-4 pt-3 sm:w-full sm:flex-[1_0_50%] ${
                    activeGuest ? "border border-dark-grey rounded-2xl" : ""
                  }`
                : null
            }
            onClick={handleClickGuest}
          >
            {searchClick ? (
              <label
                htmlFor="guest"
                className={`${styleComponent({ label: "base" })}`}
              >
                GUESTS
              </label>
            ) : null}
            <Input
              id="guest"
              placeholder="Add guests"
              className={` py-5 w-full ${
                searchClick ? null : "pl-4 border-r border-light-grey"
              }`}
              onChange={onChangeGuest}
              value={activeGuest ? `${valueGuest} guests` : null}
              readOnly
            />
          </div>
          {searchClick ? null : <SubmitButton searchClick={searchClick} />}
        </div>
      </div>
      {activeLocation ? (
        <Location stays={stays} onClickList={onClickList} />
      ) : null}
      {activeGuest ? (
        <GuestCounter onCount={onCount} adult={adult} child={child} />
      ) : null}
      {searchClick ? <SubmitButton searchClick={searchClick} /> : null}
    </div>
  );
}
