import React, { useEffect } from "react";

import Search from "../components/Search";

const SearchPage = () => {
  const keyword = localStorage.getItem("searchKeyword");
  const [key, setKey] = React.useState(keyword);

  useEffect(() => {
    setKey(keyword);
  }, [keyword]);
  return (
    <>
      <Search keyword={keyword}/>
    </>
  );
};
export default SearchPage;