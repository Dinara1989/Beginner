import React from 'react';

type titlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: titlePropsType) => {
    return (
        <div>
            <h3 onClick={ () => { props.onClick()}}>{props.title}</h3>
        </div>
    );
};

export default AccordionTitle;