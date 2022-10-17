import React, {useState} from 'react';


export type RatingValueType = 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function ControlledRating(props: RatingPropsType) {

    // let [value, setValue] = useState(0)
    return (
        <div>
            <Star1 selected={ props.value > 0} onClick={props.onClick}  value={1}/>
            <Star1 selected={ props.value > 1} onClick={props.onClick}  value={2}/>
            <Star1 selected={ props.value > 2} onClick={props.onClick}  value={3}/>
            <Star1 selected={ props.value > 3} onClick={props.onClick}  value={4}/>
            <Star1 selected={ props.value > 4} onClick={props.onClick}  value={5}/>
        </div>
    );
};

type star1PropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}
const Star1 = (props: star1PropsType) => {
    return <span onClick={ () => {props.onClick(props.value) }}>
        { props.selected ? <b>- STAR</b> : "- star"}
    </span>
};
