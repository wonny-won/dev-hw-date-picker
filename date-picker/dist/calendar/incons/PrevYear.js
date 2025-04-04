/** @format */
import React from 'react';
import { memo } from 'react';
const PrevYear = (props) => {
    return (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', height: props.size ?? '15px', viewBox: '0 -960 960 960', width: props.size ?? '15px', fill: '#5f6368' },
        React.createElement("path", { d: 'M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z' })));
};
export default memo(PrevYear);
