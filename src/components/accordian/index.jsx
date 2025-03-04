import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getcurrentId) {
        setSelected(getcurrentId === selected ? null : getcurrentId);
    }

    function handleMultiSelection(getcurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentID = cpyMultiple.indexOf(getcurrentId);
        console.log(findIndexOfCurrentID);
        if (findIndexOfCurrentID === -1) cpyMultiple.push(getcurrentId);
        else cpyMultiple.splice(findIndexOfCurrentID, 1);
        setMultiple(cpyMultiple);
    }
    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
            </button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item" key={dataItem.id}>
                            <div
                                onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>{(enableMultiSelection ? multiple.includes(dataItem.id) : selected === dataItem.id) ? '-' : '+'}</span>
                            </div>
                            {
                                enableMultiSelection ?
                                    multiple.indexOf(dataItem.id) !== -1 && (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                                    :
                                    selected === dataItem.id && (
                                        <div className="content">{dataItem.answer}</div>
                                    )
                            }
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}
