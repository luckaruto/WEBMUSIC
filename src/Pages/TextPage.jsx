import React from "react";

import usePlayNow from "../Redux/services/PlayNowData";
import useTopCharts from "../Redux/services/dataset";
import LogInModal from "../components/Login";
import Login from "../components/ModelLogin";

function TopChartsComponent() {
  // const { dataMusic, isFetching, error } = usePlayNow();

  // if (isFetching || dataMusic == null) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return <Login></Login>;
}

export default TopChartsComponent;
