import React, { Component } from 'react';

const Box = props => {
    const { color, height, width} = props

    return (
        <div style={{
            borderRadius: 100,
            backgroundColor: color,
            width: width,
            height: height,
            marginLeft: 20,
            marginBottom: 20,
        }}>

        </div>
    )
}
export default Box;