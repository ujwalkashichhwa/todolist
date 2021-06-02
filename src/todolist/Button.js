import React from 'react'

function Button(props){
    const {onSelect, children}= props
    return(
        <React.Fragment>
            <button onClick={onSelect}>
                {children}
            </button>
        </React.Fragment>
    )
}

export default React.memo(Button)