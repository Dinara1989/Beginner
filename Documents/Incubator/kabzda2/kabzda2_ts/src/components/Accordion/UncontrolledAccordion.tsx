import React, {useState} from 'react';
import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";
type PropsType = {
    title: string
    // onClick: () => void
}

const UncontrolledAccordion = (props: PropsType) => {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.title}
                            onClick={() => { setCollapsed(!collapsed) }} />
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

export default UncontrolledAccordion;