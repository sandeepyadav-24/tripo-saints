import React from "react";
import SeatingChart from "./SeatingChair";
import SearchBar from "./SearchBar";

const employees = [
  {
    id: 1,
    name: "Krish Verma",
    position: "Android Developer",
    team: "Android ",
    project: " App Redesign",
  },
  {
    id: 2,
    name: "Moh Faizan ",
    position: "Full Stack Web Developer",
    team: "Web Developer",
    project: "API Development",
  },
  {
    id: 3,
    name: "Shubhang Mishra",
    position: "",
    team: "Backend",
    project: "API Development",
  },
  {
    id: 4,
    name: "Jane Smith",
    position: "Designer",
    team: "UI/UX",
    project: "App Redesign",
  },
  {
    id: 5,
    name: "John Doe",
    position: "Developer",
    team: "Backend",
    project: "API Development",
  },
  {
    id: 6,
    name: "Jane Smith",
    position: "Designer",
    team: "UI/UX",
    project: "App Redesign",
  },
  {
    id: 7,
    name: "John Doe",
    position: "Developer",
    team: "Backend",
    project: "API Development",
  },
  {
    id: 8,
    name: "Jane Smith",
    position: "Designer",
    team: "UI/UX",
    project: "App Redesign",
  },
  {
    id: 9,
    name: "John Doe",
    position: "Developer",
    team: "Backend",
    project: "API Development",
  },
  {
    id: 10,
    name: "Jane Smith",
    position: "Designer",
    team: "UI/UX",
    project: "App Redesign",
  },
  {
    id: 11,
    name: "John Doe",
    position: "Developer",
    team: "Backend",
    project: "API Development",
  },
  {
    id: 12,
    name: "Jane Smith",
    position: "Designer",
    team: "UI/UX",
    project: "App Redesign",
  },
  // Add more employee data here
];

function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Spot - Employee Tracking</h1>
      <SearchBar onSearch={handleSearch} />
      <SeatingChart employees={filteredEmployees} />
    </div>
  );
}

export default Home;
