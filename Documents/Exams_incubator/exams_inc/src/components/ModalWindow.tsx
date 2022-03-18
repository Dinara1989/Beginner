import React from 'react';
type PropsType={
    name:string
}

export const ModalWindow:React.FC<PropsType> = ({name,children}) => {
     return (
        <div>
            <h1>{name}</h1>
            {children}
            <button>Yes</button>
            <button>No</button>
        </div>
    );
};

