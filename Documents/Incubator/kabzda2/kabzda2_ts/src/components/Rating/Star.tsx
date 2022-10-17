import React from 'react';
import {RatingValueType} from "./ControlledRating";

type propsTypeStar = {
    selected: boolean
    setValue: () => void
}

const Star = (props: propsTypeStar) => {
    return <span onClick={ () => {props.setValue()} }>
        { props.selected ? <b>- STAR</b> : "- star"}
    </span>
};

export default Star;