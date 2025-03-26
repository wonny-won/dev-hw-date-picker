/** @format */
import React from 'react';
import { memo } from 'react';
const NextMonth = (props) => {
    return (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', height: props.size ?? '14px', viewBox: '0 -960 960 960', width: props.size ?? '14px', fill: '#5f6368' },
        React.createElement("path", { d: 'M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' })));
};
export default memo(NextMonth);
