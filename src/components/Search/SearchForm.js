import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const navigate = useNavigate();
  console.log("search");
  const [filters, setFilters] = useState({
    status: "",
    serial: "",
    type: "",
    landings: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submit");
    // console.log(filters);
    onSearch(filters);

    navigate("/data");
  };

  return (
    <div className="searchform-container">
      <form onSubmit={handleSubmit} className="search-form">
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
        >
          <option value="">Select Status</option>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>
        <input
          type="text"
          onChange={handleInputChange}
          name="type"
          value={filters.type}
          placeholder="Type"
        />
        <input
          type="number"
          onChange={handleInputChange}
          name="landings"
          value={filters.landings}
          placeholder="Landings"
        />
        <input
          type="text"
          onChange={handleInputChange}
          name="serial"
          value={filters.serial}
          placeholder="Serial"
        />

        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
