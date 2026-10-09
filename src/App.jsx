import React, { useState } from "react";

function App() {

  // Task 1 - Employee Salary
  const [employeeName] = useState("Arun");
  const [salary, setSalary] = useState(25000);

  const increaseSalary = () => {
    setSalary(salary + 5000);
  };


  // Task 2 - Course List
  const [courses, setCourses] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  const addReact = () => {
    setCourses([...courses, "React"]);
  };

  const updateCSS = () => {
    setCourses(courses.map((course) =>course === "CSS" ? "Advanced CSS" : course));
  };


  // Task 3 - Product Details
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 45000,
    stock: 10
  });

  const updatePrice = () => {
    setProduct({...product,price: 50000});
  };

  const addBrand = () => {
    setProduct({...product,brand: "Dell"});
  };


  // Task 4 - Employee List
  const [employees, setEmployees] = useState([
    { id: 1, name: "Arun", salary: 25000 },
    { id: 2, name: "Priya", salary: 30000 },
    { id: 3, name: "Kumar", salary: 28000 }
  ]);

  const addEmployee = () => {
   setEmployees([...employees,{
        id: 4,
        name: "Anu",
        salary: 32000
      }
    ]);
  };

  const updateEmployeeSalary = () => {
  setEmployees(
    (prevEmployees) =>
      prevEmployees.map((employee) => employee.id === 2 ? { ...employee, salary: 35000 }: employee));
};

  // Task 5 - Password
  const [password] = useState("react123");
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


return (
<div >

    


  {/* TASK 1 */}
  <div className="bg-purple-800 text-center text-white h-30">

  <h2 >Task 1 </h2>
  <p > {employeeName} </p>
  <p > {salary}</p>
  <button onClick={increaseSalary} className="bg-black rounded-2xl w-30 text-white"> Increase Salary </button>

  </div>


 {/* TASK 2 */}
 <div className="bg-pink-700 text-center text-white h-40" >

<h2 >Task 2</h2>

<div >{courses.map((course, index) => (
<p key={index}>{course}</p>
))}
</div>

<div >
<button onClick={addReact} className="bg-black rounded-2xl w-30 text-white">Add React</button>
<button onClick={updateCSS} className="bg-black rounded-2xl w-30 text-white"> Update CSS</button>
</div>
</div>


{/* TASK 3 */}
<div className="bg-blue-700 text-center text-white h-40 " >

<h2 >Task 3</h2>

<div >

<p>Name:{" "}{product.name}</p>
<p>Price:{" "}{product.price}</p>
<p>Stock:{" "}
{product.stock}
</p>
<p>Brand:{" "}{product.brand || "Not Added"}</p>
</div>

<div>
<button onClick={updatePrice} className="bg-black rounded-2xl w-30 text-white">Update Price</button>
<button onClick={addBrand} className="bg-black rounded-2xl w-30 text-white">Add Brand</button>
</div>
</div>


{/* TASK 4 */}
<div className="bg-amber-900 text-center text-white h-100"  >

<h2 >Task 4</h2>

<div>{employees.map((employee) => (

<div key={employee.id}>
<p>ID:{" "}{employee.id}</p>
<p>Name:{" "}{employee.name}</p>
<p>Salary:{" "}{employee.salary}</p>
</div>
))}
</div>
<div >
<button onClick={addEmployee} className="bg-black rounded-2xl w-30 text-white">Add Employee</button>

<button onClick={updateEmployeeSalary} className="bg-black rounded-2xl w-30 text-white">Update Salary</button>
</div>
</div>


{/* TASK 5 */}
<div className="bg-orange-400 text-center text-white h-30"  >

<h2 >Task 5
</h2>
<div >
<p >{showPassword ? password : "********"}</p>
</div>

<button onClick={togglePassword} className="bg-black rounded-2xl w-30 text-white">{showPassword ? "Hide Password" : "Show Password"}</button>
</div>
</div>
);
}

export default App;