import React from 'react';
import Star from "./Star";

type propsTypeRaiting = {
    value: number
}

const Raiting = (props: propsTypeRaiting) => {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
};

export default Raiting;