import React, { useState } from "react";
import SeatingChart from "./SeatingChair";
import SearchBar from "./SearchBar";
import employees from "../Database/employee";

// Different teams For Filter Section
const teams = ["Android", "Web Developer", "Backend", "UI/UX"];
// Different Position for Position Section
const positions = ["Developer", "Designer"];

function Home() {
  // useState for Serach Term
  const [searchTerm, setSearchTerm] = useState("");
  // useState for FIlter Criteria term
  const [filterCriteria, setFilterCriteria] = useState({
    team: [],
    position: [],
  });
  // useStaet for Show Filter Pop up
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  // Handle Search Function
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle Filter Chaneg function
  const handleFilterChange = (type, value) => {
    setFilterCriteria((prev) => {
      const newCriteria = { ...prev };
      if (newCriteria[type].includes(value)) {
        newCriteria[type] = newCriteria[type].filter((item) => item !== value);
      } else {
        newCriteria[type].push(value);
      }
      return newCriteria;
    });
  };
  // Filter employee Function
  const filteredEmployees = employees.filter((employee) => {
    const nameMatch = employee.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const teamMatch =
      filterCriteria.team.length === 0 ||
      filterCriteria.team.includes(employee.team.trim());
    const positionMatch =
      filterCriteria.position.length === 0 ||
      filterCriteria.position.includes(employee.position.trim());

    return nameMatch && teamMatch && positionMatch;
  });

  return (
    <div className=" px-5 md:px-40 md:h-screen bg-[#F2F2F2]">
      <div className="pt-20 pb-10">
        <span className="py-12 px-8 bg-[#B3B3B3] rounded-full text-white text-2xl font-semibold">
          Spot
        </span>
      </div>
      {/** Search and Filter Section  */}
      <div className="flex justify-end">
        <SearchBar onSearch={handleSearch} />
        <div className="relative my-2 ml-3">
          <button
            onClick={() => setShowFilterPopup(!showFilterPopup)}
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Filter
          </button>
          {showFilterPopup && (
            <div className="absolute right-0 bg-white border rounded shadow-lg p-4 mt-2 w-64 z-10">
              <div className="mb-4">
                <label className="font-semibold">Filter by Team</label>
                {teams.map((team) => (
                  <div key={team}>
                    <input
                      type="checkbox"
                      value={team}
                      onChange={() => handleFilterChange("team", team)}
                      checked={filterCriteria.team.includes(team)}
                    />
                    <label className="ml-2">{team}</label>
                  </div>
                ))}
              </div>
              <div>
                <label className="font-semibold">Filter by Position</label>
                {positions.map((position) => (
                  <div key={position}>
                    <input
                      type="checkbox"
                      value={position}
                      onChange={() => handleFilterChange("position", position)}
                      checked={filterCriteria.position.includes(position)}
                    />
                    <label className="ml-2">{position}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/** Seating Chart Div  */}
      <SeatingChart employees={filteredEmployees} />
    </div>
  );
}

export default Home;
