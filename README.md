## Getting Started

To run the Student Portal locally, clone the repository:

```bash
git clone https://github.com/aqarda/cprg306-student-portal-g8.git
```

Navigate into the project directory:

```bash
cd cprg306-student-portal-g8
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

New Generation High School — Student Portal

Project Overview

This project is a student management portal created for New Generation High School, Our Second Group Assignment
The application allows school administrators to view student information, search for students by name, add and remove students, and view school statistics.
The project is built as a single-page application using Next.js, React, TypeScript, and Tailwind CSS.

Group Members and Responsibilities:
Member A Tasks: Patrick Bouley
Responsibilities: Navbar, Footer, StatsPanel, app/layout.tsx, overall styling

Member B Tasks: John Leandro Loyao
Responsibilities: Student interface, student data, StudentList, StudentCard

Member C Tasks: Fernando Lopez-Areal Serrano
Responsibilities: StudentPortal, SearchBox, AddStudent, student state and functionality

LINKS:
GitHub Repository:
https://github.com/aqarda/cprg306-student-portal-g8

Deployed Website:
[Add Vercel URL after deployment]

Features

- Responsive navigation bar with links to each section
- School overview with live student statistics
- Student list displaying individual student cards
- Expandable student details and honour roll indicator
- Case-insensitive student search
- Add and remove students
- Clear the entire student list
- Responsive layouts for desktop and mobile devices

Testing Checklist

Test 1: Open the application.
Expected Result: All initial students display, and the three statistics match the data.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 2: Show details on one student card, then hide them
Expected Result: The card displays the average and honour roll badge when applicable. Other cards remain closed. The second click closes the details.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 3: Remove a Grade 12 student
Expected Result: The student disappears, and both Students and Graduating decrease by one.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 4: Search for a last name using capital letters, then clear the search
Expected Result: Only matching students appear. Clearing the search restores the full list.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 5: Search for zzz.
Expected Result: The empty-list message appears, but the three statistics remain unchanged.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 6: Leave first name empty and attempt to add a student.
Expected Result: No student is added.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 7: Complete all four fields and add a student
Expected Result: The student appears, statistics update, name inputs clear, grade resets to 9, and average resets to 70.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 8: Click Clear all
Expected Result: All students disappear, the empty-list message appears, and all three statistics become 0.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 9: Test at mobile width using browser DevTools
Expected Result: Student cards stack in one column with no horizontal scrolling.
Not Tested Yet (write what happens when we do it, or what the final outcome is)

Test 10: Click each Navbar link
Expected Result: The browser jumps to the corresponding page section.
Not Tested Yet (write what happens when we do it, or what the final outcome is)
