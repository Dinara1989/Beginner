import React from 'react';

type propsTypeStar = {
    selected: boolean
}

const Star = (props: propsTypeStar) => {
    if (props.selected === true) {
        return <span><b>STAR - </b></span>
    } else {
        return <span>STAR - </span>
    }
};

export default Star;