import { Divider, Input } from "antd";
import { useState } from "react";

const Search = ({ searchFood }) => {
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
