### Smart Vehicle-Employee Assignment System

This project is a JavaScript-based system designed to solve a critical logistical challenge for transportation companies: correctly assigning vehicles to qualified personnel.

### The Challenge

A transportation company manages a mixed fleet of cars and airplanes, along with a staff of drivers and pilots. The core challenge was to build a system that enforces a critical business rule: airplanes must only be assigned to pilots, and cars must only be assigned to drivers.

My task was to create a backend system that could manage these entities and prevent invalid assignments, ensuring operational safety and efficiency.

### My Solution & Technical Implementation

I designed and built this system from the ground up using Object-Oriented Programming (OOP) in JavaScript. This approach allowed me to create a clear, scalable, and maintainable codebase that models the real-world relationships between employees and vehicles.

Here is a breakdown of the architecture I implemented:

#### Foundational Classes: I first established the base classes:

Vehicle: A parent class with common properties like id, name, and manufacturer.

Employee: A parent class with common properties like id, name, and dateOfBirth.

#### Specialized Classes (Inheritance): I used inheritance (extends) to create specialized classes from the base ones:

Car: Inherits from Vehicle and adds a specific carType property (e.g., 'gas' or 'electric').

Airplane: Inherits from Vehicle and adds an airplaneType property.

Driver: Inherits from Employee and adds a licenseID.

Pilot: Inherits from Employee and adds a licenseID.

#### Core Business Logic (The assignVehicle function): I developed a central function that acts as the "brain" of the operation. This function:

Accepts an employeeId and a vehicleId.

Performs type-checking (using instanceof) to validate compatibility.

Rejects invalid pairings (like a Pilot and a Car) with a clear error message.

Approves valid pairings (like a Pilot and an Airplane).

#### Data Management & Reporting:

##### Reservation Class: I created a Reservation class to act as a record, linking a valid employeeId and vehicleId with a reservationID and date.

Data Storage: All successful Reservation objects are stored in a central reservations array.

Reporting: I used the .map() array method to transform the reservations array into a human-readable list, demonstrating a practical way to format and display data.

Modular Architecture (ES6 Modules):

To keep the project clean and scalable, I split each class into its own file (e.g., callfunction.js, assignVehicleId).

I used export from within each class file and import in my main script to manage dependencies effectively.

### Key Takeaways: What I Learned

This project was a fantastic opportunity to apply theoretical knowledge to a practical, real-world problem. My key learnings include:

#### Deepened OOP Mastery: I moved beyond just knowing about OOP to implementing it. I gained hands-on experience with inheritance, class composition, and polymorphism (using instanceof to make my assignVehicle function react differently based on object type).

#### Modern JavaScript & Array Methods: I reinforced my skills with modern array methods. Using .find() to query my "database" (arrays) and .map() to format data for reporting proved to be far more efficient and readable than traditional loops.

##### Modular Code Design: I learned the critical importance of a modular codebase. Using ES6 import/export made my code dramatically easier to read, debug, and maintain.

##### Robust Function Design: I gained experience in writing functions that handle complex business logic, including validation, type-checking, and state management.
 
#### Created By:
Younsse Amazzal