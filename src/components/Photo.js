import React from 'react';

export default function photo(props) {
    console.log('props Photo: ', props)
    return(
        <div>
            <img src={props.src} width={props.imageWidth}/>

        </div>
    );
}