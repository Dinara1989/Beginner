import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

export const ControlledAccordion = () => {
    return (
        <div>
            let [collapsed, setCollapsed] = useState(false);

            return (
            <div>
                <AccordionTitle title={props.title}
                                onClick={() => { setCollapsed(!collapsed) }} />
                {!collapsed && <AccordionBody/>}
            </div>
            );
        </div>
    );
};


