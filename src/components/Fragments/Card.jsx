import Image from "../Elements/Logo/Image";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function Card({ stay }) {
  return (
    <div>
      <Image
        src={stay.photo}
        alt="place image"
        className="rounded-3xl aspect-[6/4] object-cover"
        loading="lazy"
      />
      <div className="flex flex-row justify-between mt-3">
        <div className="flex flex-row items-center space-x-2">
          {stay.superHost ? (
            <h3 className="font-montserrat text-gray font-bold text-[10px] border border-gray px-2 py-[6px] rounded-xl">
              SUPER HOST
            </h3>
          ) : null}
          <p className="font-montserrat text-gunmetal text-xs font-medium">
            {stay.type}
            {stay.beds ? <span>. {stay.beds} beds</span> : null}
          </p>
        </div>
        <div className="flex flex-row items-center">
          <StarRoundedIcon className="text-crimson/70" fontSize="medium" />
          <p className="font-montserrat text-gray text-xs font-medium">
            {stay.rating}
          </p>
        </div>
      </div>
      <h1 className="text-dark-grey font-montserrat text-sm font-semibold mt-3">
        {stay.title}
      </h1>
    </div>
  );
}
