import React, {useState} from 'react';
import './App.css';
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import AppTitle from "./AppTitle";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {ControlledRating, RatingValueType} from "./components/Rating/ControlledRating";
import {ControlledAccordion} from "./components/Accordion/ControlledAccordion";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

  return (
    <div className="App">
        <AppTitle title={"Learning React"}/>
        <ControlledAccordion
            title={"Dinara"}
            collapsed={accordionCollapsed}
        />

        <OnOff />
        <OnOff />
        <OnOff />

        <UncontrolledRating />
        <ControlledRating
            value={ratingValue}
            onClick={setRatingValue}
        />

        <UncontrolledAccordion title={"Numbers"} />
        <UncontrolledAccordion title={"Words"} />

    </div>
  );
}

export default App;
