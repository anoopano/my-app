import React from 'react'

function Progressbar({ bgcolor, completed }) {
    const containerStyles = {
        marginTop: 8,
        width: '100%',
        height: 6,
        borderRadius: 3,
        backgroundColor: "lightgray" 
    }
    const fillerStyles = {
        height: 6,
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 3,
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
            </div>
        </div>
    )
}

export default Progressbar
