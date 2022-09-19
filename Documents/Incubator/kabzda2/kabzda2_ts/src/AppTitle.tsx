import React from 'react';
type propsTypeAppTitle = {
    title: string
}

const AppTitle = (props: propsTypeAppTitle) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default AppTitle;