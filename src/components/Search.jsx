import { Divider, Input } from "antd";
import { useState } from "react";

const Search = ({ searchFood }) => {
  // Receive value from search bar
  // Loop over the existing food names and return the matched ones
  // Display the matched ones by set new state to the original displaying array

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        value={searchQuery}
        onChange={(event) => {
          console.log("event.target.value: ", event.target.value);
          setSearchQuery(event.target.value);
          searchFood(event.target.value);
        }}
      />
    </>
  );
};

export default Search;
