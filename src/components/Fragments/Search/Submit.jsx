import SearchIcon from "@mui/icons-material/Search";
import { styleComponent } from "../../../utils/style";
import Button from "../../Elements/Buttons/Button";

export default function SubmitButton({ searchClick }) {
  return (
    <Button
      className={
        searchClick ? styleComponent({ buttons: "submit" }).trim() : "ml-2"
      }
      disabled={searchClick ? null : "disabled"}
    >
      <SearchIcon
        className={searchClick ? "text-light-grey" : "text-crimson"}
        fontSize={searchClick ? "medium" : "large"}
      />
      {searchClick ? "Search" : null}
    </Button>
  );
}
