"use client"
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";


export default function Home() {
  // State to store list of employees
  const [employees, setEmployees] = useState([]);
  // State to store search query
  const [searchQuery, setSearchQuery] = useState("");

  // Get employee data once components are rendered
  useEffect(() => {
    // Function to fetch and set employee data
    const getEmployeeData = async () => {
      // Get employee data from JSON file
      const response = await fetch("/employees.json");
      const data = await response.json();
      const employees = data.employees;
      // Set employees state 
      setEmployees(employees);
    };
    // Call getEmployeeData
    getEmployeeData();
  }, []);

  // Filter emplyees based on the entered search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.includes(searchQuery)
  );

  return (
    <div className="flex flex-col min-h-screen">
    <Header setSearchQuery={setSearchQuery} />
    <main className="flex flex-col items-center flex-grow">
      <div className="grid">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} employee={employee} />
        ))}
      </div>
    </main>
    <Footer />
    </div>
  );
}
