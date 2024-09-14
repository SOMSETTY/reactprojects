import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(currentId) {
    setSelected(currentId);
  }

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => handleSingleSelection(dataItem.id)} 
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>{selected === dataItem.id ? "-" : "+"}</span>
              </div>
              {selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}
