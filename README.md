
# SPOT - Employee Seating Chart Application

The Spot - Employee Seating Chart Application is designed to visualize the seating arrangement of employees within an organization. It allows users to search for employees and view their seating positions in a structured layout. The application provides a user-friendly interface to display employee details and their current seating assignment using React.js.




## Features

**Employee Search:**
- Users can search for employees by name using the search bar.
- The search functionality filters the displayed employees in real-time.
<img width="1411" alt="Screenshot 2024-05-28 at 7 19 44 AM" src="https://github.com/sandeepyadav-24/tripo-saints/assets/103882286/6c647710-74fb-4b9f-a62f-5124735e0cdf">

**Seating Chart Visualization:**
- Displays a seating chart with tables and chairs.
- Chairs are color-coded to indicate whether they are occupied or unoccupied.
- Hovering over a chair displays a tooltip with detailed information about the employee occupying the chair.
<img width="1419" alt="Screenshot 2024-05-28 at 7 16 59 AM" src="https://github.com/sandeepyadav-24/tripo-saints/assets/103882286/a9fbfedc-0627-422f-acdd-d7fcec75e24e">

**Interactive Tooltips:**
- On hover, tooltips show the employee's name, position, team, and current project.
<img width="1411" alt="Screenshot 2024-05-28 at 7 19 11 AM" src="https://github.com/sandeepyadav-24/tripo-saints/assets/103882286/c2026643-5c88-48b1-b270-ac73e2083182">







## Tech Stack

**React.js:** For building the user interface.

**Tailwind CSS:** For styling the components.

**JavaScript:** For implementing logic and interactivity.

 

 

 
## Installation

Clone the Repository:

```bash
  git clone https://github.com/sandeepyadav-24/tripo-saints.git
```
Install Dependencies:
```bash
 npm install
```

Run the Application:
```bash
 npm start
```

This will start the application on http://localhost:5173.



    
## How the project was created


Setup:
- Initialized a new React project using vite@latest.
- Installed necessary dependencies including Tailwind CSS for styling.

Components:

- Created a SeatingChart component to display tables and chairs.
- Created a SearchBar component to handle employee search functionality.
- Integrated state management using React's useState to manage search term and hovered chair.


Styling:

- Applied Tailwind CSS classes for consistent and responsive styling.
- Used conditional styling to differentiate between occupied and unoccupied chairs.


Logic Implementation:

- Filtered employees based on the search term.
- Mapped employees to their respective chairs using chairId.
- Displayed tooltips with employee information on hover.


## Future Enhancements

- Add support for dynamically adding and removing employees.
- Implement drag-and-drop functionality for reassigning seats.
- Enhance the search functionality to include filtering by position, team, or project.
- Improve the overall UI/UX with more interactive elements and animations.
