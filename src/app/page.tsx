"use client";
import { fetchData } from "../../lib/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData("/8080").then(setData);
  }, []);
  return <div>{JSON.stringify(data)}</div>;
}
