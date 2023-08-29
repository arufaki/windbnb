import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Location({ stays, onClickList }) {
  const filterDuplicateStays = stays.filter((obj, index, self) => {
    return self.map((res) => res.city).indexOf(obj.city) === index;
  });

  return (
    <ul className="space-y-4 mt-9">
      {filterDuplicateStays.map((res, index) => (
        <li
          className="font-muli text-gray font-normal text-sm flex items-center"
          key={index}
          onClick={() => onClickList(res.city, res.country)}
        >
          <LocationOnIcon className="text-gray ml-4 mr-1" /> {res.city},
          {res.country}
        </li>
      ))}
    </ul>
  );
}
