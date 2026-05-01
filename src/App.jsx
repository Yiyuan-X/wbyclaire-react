import { useState } from "react";
import About from "./About";
import Work from "./Work";
import Australiana from "./Australiana";
import TractorRide from "./TractorRide";
import CuddlyBear from "./CuddlyBear";
import WhimsicalWonderland from "./WhimsicalWonderland";
import MiniMarket from "./MiniMarket";
import Others from "./Others";

export default function App() {
  const [page, setPage] = useState("about");

  return (
    <>
      {page === "about" && <About setPage={setPage} />}
      {page === "work" && <Work setPage={setPage} />}
      {page === "australiana" && <Australiana setPage={setPage} />}
      {page === "tractor" && <TractorRide setPage={setPage} />}
      {page === "bear" && <CuddlyBear setPage={setPage} />}
      {page === "wonderland" && <WhimsicalWonderland setPage={setPage} />}
      {page === "market" && <MiniMarket setPage={setPage} />}
      {page === "others" && <Others setPage={setPage} />}
    </>
  );
}
