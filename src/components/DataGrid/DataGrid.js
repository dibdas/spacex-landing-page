import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./DataGrid.css";
function DataGrid({ filteringData, itemsPerPage }) {
  const spaceData = useSelector(
    (state) => state.dataConfigReducer.spaceCapsuleData.data
  );
  const [data, newData] = useState([]);
  useEffect(() => {
    if (filteringData.length > 0) {
      newData(filteringData);
    } else {
      newData(spaceData);
    }
  }, [filteringData, spaceData]);
  // console.log(spaceData);
  // console.log(filteringData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="datagrid-container">
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Original_Launch</th>
              <th>Details</th>
              <th>Landings</th>
              <th>Type</th>
              <th>Serial</th>
              <th>Status</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, id) => (
              <tr key={id}>
                <td>{item.capsule_id}</td>
                <td>{new Date(item.original_launch).toLocaleDateString()}</td>
                <td>{item.details}</td>
                <td>{item.landings}</td>
                <td>{item.type}</td>
                <td>{item.capsule_serial}</td>
                <td>{item.status}</td>
                <td>{item.reuse_count}</td>
                <td>
                  <Link to={`/info/${id}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No spaceData available.</p>
      )}

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DataGrid;
