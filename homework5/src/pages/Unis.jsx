import React from "react";
import { useState, useEffect } from "react";
import { fetchunis } from "../api/fetchunis";
import { RingLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import Card from "../components/Card";

export default function Unis() {
  const { country } = useParams();
  const [data, setdata] = useState([]);
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    fetchunis(country)
      .then((data) => setdata(data))
      .catch((error) => seterror(error.message))
      .finally(() => setisLoading(false));
  }, [country]);

  if (error) return <ErrorMessage />;

  return (
    <div className="unisContainer">
      <h1>Unis</h1>
      {isLoading && <RingLoader />}
      {data.map((uni) => (
        <Card key={uni.domains[0]} uni={uni} />
      ))}
    </div>
  );
}