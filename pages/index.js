import { useState, useEffect } from "react";

export default function Home() {
  const [site, setSite] = useState("https://sebenza.taxi");

  useEffect(() => {
    fetch("http://localhost:4007/")
      .then((res) => res.json())
      .then((output) => console.log(output));
  }, []);

  return (
    <div>
      <iframe src={site} frameBorder="0"></iframe>
    </div>
  );
}
