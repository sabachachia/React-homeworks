import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchuni } from "../api/fetchuni";
import { RingLoader } from "react-spinners";
import ErrorMessage from "../components/ErrorMessage";

export default function Details() {
  const [uniDetails, setuniDetails] = useState({});
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const { domain } = useParams();
  console.log(domain);

  useEffect(() => {
    setisLoading(true);
    fetchuni(domain)
      .then((data) => setuniDetails(...data))
      .catch((error) => seterror(error.message))
      .finally(() => setisLoading(false));
  }, [domain]);

  if (error) return <ErrorMessage />;
    return <div>
        {isLoading && <RingLoader />}
        <h3 className="title">{uniDetails.name}</h3>
        <p className="text">Country: {uniDetails.country}</p>
        <p className="text">Code: {uniDetails.alpha_two_code}</p>
        <p className="text">Domain: {uniDetails.domains}</p>
        <a href={uniDetails.web_pages} className="link" target="_blank">Visit Website</a>
  </div>;
}