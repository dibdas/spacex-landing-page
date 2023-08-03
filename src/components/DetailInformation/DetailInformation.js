import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./DeatailInformation.css";

function DetailInformation() {
  const params = useParams();
  console.log(params);
  const spaceData = useSelector(
    (state) => state.dataConfigReducer.spaceCapsuleData.data
  );
  const newData = spaceData[params.capsule_id];
  console.log(newData);
  return (
    <div className="detail-container">
      <h2>Details for Capsule: {newData.capsule_serial}</h2>
      <div className="detail-grid">
        <div>
          <p>
            <strong>Capsule ID:</strong> {newData.capsule_id}
          </p>
          <p>
            <strong>Status:</strong> {newData.status}
          </p>
          <p>
            <strong>Original Launch:</strong>{" "}
            {new Date(newData.original_launch).toLocaleDateString()}
          </p>
        </div>
        <div>
          <p>
            <strong>Type:</strong> {newData.type}
          </p>
          <p>
            <strong>Landings:</strong> {newData.landings}
          </p>
          <p>
            <strong>Reuse Count:</strong> {newData.reuse_count}
          </p>
        </div>
      </div>
      <h3>Missions:</h3>
      <ul>
        {newData?.missions?.map((mission, index) => (
          <li key={index}>
            <strong>Mission Name:</strong> {mission.name} |{" "}
            <strong>Flight:</strong> {mission.flight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailInformation;
