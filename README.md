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
- Expected Result: All initial students display, and the three statistics match the data.
**Result: Pass**
- All studnets in our data list show up, and the numbers match the current data 

Test 2: Show details on one student card, then hide them
- Expected Result: The card displays the average and honour roll badge when applicable. Other cards remain closed. The second click closes the details.
**Result: Pass**
- The button shows that students average, and the honor role badge displays if the average is 80 or above. no other cards open. "show details" button then becomes "hide details" and closes the card when pressed again

Test 3: Remove a Grade 12 student
- Expected Result: The student disappears, and both Students and Graduating decrease by one.
**Result: Pass**
- The student is removed. both the total students and gradutating numbers goes down by 1. It doesnt remove them from the data file though

Test 4: Search for a last name using capital letters, then clear the search
- Expected Result: Only matching students appear. Clearing the search restores the full list.
**Result: Pass**
- All capital leters doesnt mess with the searching. Displayed the proper student, and returned the full lsit when the search bar was empty

Test 5: Search for zzz.
- Expected Result: The empty-list message appears, but the three statistics remain unchanged.
**Result: Pass**
- The no student error message shows, and none of the numebrs change

Test 6: Leave first name empty and attempt to add a student.
- Expected Result: No student is added.
**Result: Pass**
- No student gets added if we leave the first name empty

Test 7: Complete all four fields and add a student
- Expected Result: The student appears, statistics update, name inputs clear, grade resets to 9, and average resets to 70.
**Result: Pass**
- The Student is added, both the first and last name fields become empty again. grade resets to 9 and average restes to 70

Test 8: Click Clear all
- Expected Result: All students disappear, the empty-list message appears, and all three statistics become 0.
**Result: Pass**
- All Students get removed. all stats show as 0 as well.

Test 9: Test at mobile width using browser DevTools
- Expected Result: Student cards stack in one column with no horizontal scrolling.
**Result: Pass**
- The cards all stack together. no side scrolling is required at the smallest width. 

Test 10: Click each Navbar link
- Expected Result: The browser jumps to the corresponding page section.
**Result: Pass**
- All nav buttons scroll to the linked section. added a "scroll-smooth" component so its not so abrupt with the jump. 
