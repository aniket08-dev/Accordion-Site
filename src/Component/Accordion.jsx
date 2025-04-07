import React, { useEffect, useState } from "react";
import faq from "../Api/faq.json";
import FAQ from "./UI/FAQ";
function Accordion() {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);

  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id)=>{
    setActiveId((prev)=>(prev === id ? "false" : id))
  }

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((currElem) => {
          return (
            <FAQ
              key={currElem.id}
              data={currElem}
              isActive={activeId === currElem.id}
              onToggle={() => handleButton(currElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Accordion;
