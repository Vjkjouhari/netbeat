import { useEffect, useState } from "react";

export const LandingLayout = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/v1/acd", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  console.log(response);
  return (
    <div className="fixed bg-gray-500 w-full h-screen">
      <h1>Welcome to sdfsdfsdf</h1>
    </div>
  );
};
