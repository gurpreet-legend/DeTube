import React from 'react'

export const DeTube = React.createContext()

function DeTubeProvider(props) {

    return (
        <DeTube.Provider
        // value={{
        //     ...state, ...{

        //     }
        // }}
        >
            {props.children}
        </DeTube.Provider>
    )
}

export default DeTubeProvider