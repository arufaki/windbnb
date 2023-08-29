import { useEffect, useState } from "react";
import { staysApi } from "./service";
import Card from "./components/Fragments/Card";
import Form from "./components/Fragments/Form";

function App() {
  const [stays, setStays] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [cityMatch, setCityMatch] = useState("");
  const [guestMatch, setGuestMatch] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await staysApi();
        setStays(res);
        setIsloading(false);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    fetchApi();
  }, []);

  const handleFilter = (newFilter) => {
    setFilteredData(newFilter);
  };

  const handleCity = (newCity) => {
    setCityMatch(newCity);
  };

  const handleGuest = (newGuest) => {
    setGuestMatch(newGuest);
  };

  const filterRendered = filteredData.map((stay, index) => (
    <Card key={index} stay={stay} />
  ));

  const allStays = stays.map((stay, index) => <Card key={index} stay={stay} />);

  return (
    <>
      <Form
        filterApp={handleFilter}
        cityApp={handleCity}
        guestApp={handleGuest}
        stays={stays}
      />
      <div className="flex flex-row justify-between items-center  mb-6">
        <h1 className="font-montserrat text-dark-grey text-lg font-bold">
          Stays in Finland
        </h1>
        <p className="text-gray font-montserrat text-sm font-medium">
          {filterRendered.length > 0
            ? filterRendered.length
            : allStays.length > 12
            ? "12+"
            : allStays.length}{" "}
          stays
        </p>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <main className="aku-parent gap-8">
          {cityMatch.length > 1 || guestMatch > 0 ? (
            filterRendered.length === 0 ? (
              <h1>Data not found...</h1>
            ) : (
              filterRendered
            )
          ) : (
            allStays
          )}
        </main>
      )}
    </>
  );
}

export default App;
