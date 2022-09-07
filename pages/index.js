import { useState, useEffect } from "react";

export default function Home() {
  const [site, setSite] = useState("https://sebenza.taxi");

  useEffect(() => {}, []);

  return (
    <div>
      <iframe src={site} frameBorder="0"></iframe>
    </div>
  );
}
