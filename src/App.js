import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import DataGrid from "./components/DataGrid/DataGrid";
import DetailInformation from "./components/DetailInformation/DetailInformation";
import SearchForm from "./components/Search/SearchForm";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import dataConfigSlice, {
  getCapsuleData,
} from "./redux/slices/dataConfigSlice";

function App() {
  // const [data, setData] = useState("");
  const [filterData, setFilterData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCapsuleData());
  }, []);
  useEffect(() => {
    setFilterData([]);
  }, []);
  const spaceData = useSelector(
    (state) => state?.dataConfigReducer?.spaceCapsuleData?.data
  );
  console.log(spaceData);
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(`https://api.spacexdata.com/v3/capsules`);
  //     console.log(response);
  //     const dataResponse = await response.json();
  //     console.log(dataResponse);
  //     setData(dataResponse);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const filteredData = (searchParams) => {
    // console.log(searchParams);
    setFilterData([]);
    const { type, serial, status, landings } = searchParams;
    console.log(landings);
    if (type && serial && status && landings) {
      const filterdata = spaceData.filter(
        (item) =>
          item.capsule_serial === serial &&
          item.status === status &&
          item.landings == landings &&
          item.type === type
      );
      setFilterData(filterdata);
    } else if (serial && status && landings) {
      const filterdata = spaceData.filter(
        (item) =>
          item.capsule_serial === serial &&
          item.status === status &&
          item.landings == landings
      );
      setFilterData(filterdata);
    } else if (type && serial && status) {
      const filterdata = spaceData.filter(
        (item) =>
          item.capsule_serial === serial &&
          item.status === status &&
          item.type === type
      );
      setFilterData(filterdata);
    } else if (type && serial && landings) {
      const filterdata = spaceData.filter(
        (item) =>
          item.capsule_serial === serial &&
          item.landings == landings &&
          item.type === type
      );
      setFilterData(filterdata);
    } else if (type && status && landings) {
      const filterdata = spaceData.filter(
        (item) =>
          item.status === status &&
          item.landings == landings &&
          item.type === type
      );
      setFilterData(filterdata);
    } else if (serial && status && landings) {
      const filterdata = spaceData.filter(
        (item) =>
          item.capsule_serial === serial &&
          item.landings == landings &&
          item.status === status
      );
      setFilterData(filterdata);
    } else if (serial && status) {
      const filterdata = spaceData.filter(
        (item) => item.status === status && item.capsule_serial === serial
      );
      setFilterData(filterdata);
    } else if (serial && landings) {
      const filterdata = spaceData.filter(
        (item) => item.landings == landings && item.capsule_serial === serial
      );

      setFilterData(filterdata);
    } else if (serial && type) {
      const filterdata = spaceData.filter((item) => {
        return item.type === type && item.capsule_serial === serial;
      });
      setFilterData(filterdata);
    } else if (landings && status) {
      const filterdata = spaceData.filter(
        (item) => item.status === status && item.landings == landings
      );
      setFilterData(filterdata);
    } else if (landings && type) {
      const filterdata = spaceData.filter(
        (item) => item.type === type && item.landings == landings
      );
      setFilterData(filterdata);
    } else if (status && type) {
      const filterdata = spaceData.filter(
        (item) => item.status === status && item.type === type
      );
      setFilterData(filterdata);
    } else if (serial) {
      // console.log(serial);
      const filterdata = spaceData.filter(
        (item) => item.capsule_serial === serial
      );
      setFilterData(filterdata);
    } else if (type) {
      // console.log(type);
      const filterdata = spaceData.filter((item) => item.type === type);
      setFilterData(filterdata);
    } else if (status) {
      const filterdata = spaceData.filter((item) => item.status === status);
      setFilterData(filterdata);
    } else if (landings) {
      const filterdata = spaceData.filter((item) => item.landings == landings);
      // console.log(landings);
      setFilterData(filterdata);
    } else {
      console.log(filterData);
      // setFilterData(data);
    }
  };

  const handleSearch = (searchParams) => {
    filteredData(searchParams);
  };
  // console.log(filterData);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route
          path="/search"
          element={<SearchForm onSearch={handleSearch} />}
        />
        <Route
          path="/data"
          element={<DataGrid filteringData={filterData} itemsPerPage={10} />}
        />
        <Route
          path="/info/:capsule_id"
          element={<DetailInformation spaeData={spaceData} />}
        />
      </Routes>
    </div>
  );
}

export default App;
