import React, { useState, useEffect } from "react";
import './../styles/App.css';

const indiancities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Surat",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Varanasi",
  "Srinagar",
  // Add more cities as needed
];

const App = () => {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);

  useEffect(() => {
   search && setCities(
      indiancities.filter((city) =>
        city.toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  }, [search]);

  const updateSearch = (city) => {
    setSearch(city);
    setClick(true);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search cities of India:</h1>
      <form>
        <input
          type="text"
          placeholder="Search.."
          onChange={(e) => {
            setSearch(e.target.value);
            setClick(false);
          }}
          value={search}
        />
      </form>
      {!click && (
        <ul>
          {cities &&
            cities.map((city, index) => (
              <li onClick={() => updateSearch(city)} key={index}>
                {city}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default App;
