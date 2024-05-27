import React, { useState } from "react";

const SeatingChart = ({ employees }) => {
  const [hoveredChair, setHoveredChair] = useState(null);

  const renderTooltip = (employee) => (
    <div className="absolute bg-white p-2 rounded shadow-lg text-sm w-20 ">
      <div>
        <strong>{employee.name}</strong>
      </div>
      <div>{employee.position}</div>
      <div>Team: {employee.team}</div>
      <div>Current Project: {employee.project}</div>
    </div>
  );

  const oneSpace = [
    { id: 1, employeeId: 1 },
    { id: 2, employeeId: 2 },
    { id: 3, employeeId: 3 },
    { id: 4, employeeId: 4 },
    { id: 5, employeeId: 5 },
    { id: 6, employeeId: 6 },
    { id: 7, employeeId: 7 },
    { id: 8, employeeId: 8 },
    { id: 9, employeeId: 9 },
    { id: 10, employeeId: 10 },
    { id: 11, employeeId: 11 },
    { id: 12, employeeId: 12 },
  ];

  return (
    <div className="flex flex-row flex-wrap">
      {oneSpace.map((space) => {
        const employee = employees.find((emp) => emp.id === space.employeeId);
        return (
          <div key={space.id} className="relative m-5">
            <div className="flex flex-row justify-between">
              <div
                className="relative"
                onMouseEnter={() => setHoveredChair(space.id)}
                onMouseLeave={() => setHoveredChair(null)}
              >
                <img alt="Chair" src="/chair.png" className="h-20 w-20" />
                {hoveredChair === space.id &&
                  employee &&
                  renderTooltip(employee)}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setHoveredChair(space.id)}
                onMouseLeave={() => setHoveredChair(null)}
              >
                <img alt="Chair" src="/chair.png" className="h-20 w-20" />
                {hoveredChair === space.id &&
                  employee &&
                  renderTooltip(employee)}
              </div>
            </div>
            <img alt="Table" src="/table.png" className="h-40 w-60" />
            <div className="flex flex-row justify-between">
              <div
                className="relative"
                onMouseEnter={() => setHoveredChair(space.id)}
                onMouseLeave={() => setHoveredChair(null)}
              >
                <img
                  alt="Chair"
                  src="/chair.png"
                  className="h-20 w-20 rotate-180"
                />
                {hoveredChair === space.id &&
                  employee &&
                  renderTooltip(employee)}
              </div>
              <div
                className="relative"
                onMouseEnter={() => setHoveredChair(space.id)}
                onMouseLeave={() => setHoveredChair(null)}
              >
                <img
                  alt="Chair"
                  src="/chair.png"
                  className="h-20 w-20 rotate-180"
                />
                {hoveredChair === space.id &&
                  employee &&
                  renderTooltip(employee)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeatingChart;
