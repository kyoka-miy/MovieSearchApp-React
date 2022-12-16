import { DebounceInput } from "react-debounce-input";

const SearchBox = (props) => {
  const handleOnChange = (e) => {
    props.setSearchValue(e.target.value);
  };
  return (
    <div className="search">
      <DebounceInput
        type="search"
        className="search-input"
        value={props.searchValue}
        onChange={handleOnChange}
        placeholder="Search for movie"
        debounceTimeout={600}
      ></DebounceInput>
    </div>
  );
};

export default SearchBox;
