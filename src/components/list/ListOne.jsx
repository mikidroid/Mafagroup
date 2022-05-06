import React from "react";
import { Link } from "react-router-dom";

const listContent = [
  "Diversity",
  "Innovation",
  "Ethics",
  "Responsibility",
  "Integrity",
  "Professionalism",
  "Creativity",
  "Accountability",
  "Commitment"
];

const ListOne = () => {
  return (
    <ul
      className="ptf-services-list ptf-services-list--style-5"
      style={{ "--ptf-font-family": "var(--ptf-primary-font)" }}
    >
      {listContent.map((val, i) => (
        <li className="text-white" key={i}>
          <Link to="/service-details">{val}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListOne;
