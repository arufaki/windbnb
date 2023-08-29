import { useEffect, useState } from "react";
import Navbar from "./Search/Navbar";
import Image from "../Elements/Logo/Image";

export default function Form({ filterApp, cityApp, guestApp, stays }) {
  const [filter, setFilter] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [searchGuest, setSearchGuest] = useState(0);
  const [adult, setAdult] = useState(0);
  const [child, setChild] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    filterApp(filter);
    cityApp(searchCity);
    guestApp(searchGuest);
  }, [filter, filterApp, searchCity, cityApp, searchGuest, guestApp]);

  const handleSuggest = (city, country) => {
    setSearchCity(city);
    setInputValue(`${city}, ${country}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity || searchGuest !== "") {
      const filtered = () => {
        const filterStays = stays.filter((stay) => {
          const filterCity =
            searchCity.trim() == "" ||
            Object.values(stay.city)
              .join("")
              .toLowerCase()
              .includes(searchCity.toLowerCase());

          const filterGuest =
            searchGuest == "" || stay.maxGuests == parseInt(searchGuest);

          return filterCity && filterGuest;
        });
        setFilter(filterStays);
      };
      filtered();
    } else {
      null;
    }
  };

  const handleCount = (type, operator) => {
    if (type === "adult") {
      if (operator === "+") {
        setAdult(adult + 1);
      } else if (operator === "-") {
        setAdult(Math.max(0, adult - 1));
      }
    } else if (type === "child") {
      if (operator === "+") {
        setChild(child + 1);
      } else if (operator === "-") {
        setChild(Math.max(0, child - 1));
      }
    }
    if (operator === "+") {
      setSearchGuest(searchGuest + 1);
    } else if (operator === "-") {
      setSearchGuest(Math.max(0, searchGuest - 1));
    }
  };

  return (
    <header className="sm:flex sm:flex-row sm:items-center sm:justify-between">
      <Image
        src="..\src\assets\img\logo.png"
        alt="logo"
        className="mt-5 sm:mt-0"
        onClick={() => window.location.reload()}
      />
      <form
        // onClick={handleShowSearch}
        onSubmit={handleSubmit}
      >
        <Navbar
          stays={stays}
          onChangeGuest={(e) => setSearchGuest(e.target.value)}
          onChangeLocation={(e) => {
            if (!e.target.value.includes(",")) {
              setSearchCity(e.target.value);
            }
          }}
          onClickList={handleSuggest}
          valueLocation={inputValue}
          valueGuest={searchGuest}
          onCount={handleCount}
          child={child}
          adult={adult}
        />
      </form>
    </header>
  );
}
