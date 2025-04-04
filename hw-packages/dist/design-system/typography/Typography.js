/** @format */
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled from '@emotion/styled';
import { typo } from './typo';
var Typography = function (_a) {
    var children = _a.children, typo = _a.typo, color = _a.color, props = __rest(_a, ["children", "typo", "color"]);
    return (React.createElement(ContentWrapper, __assign({ "$color": color, "$typo": typo }, props), children));
};
/**
 * 타이포그래피 스타일
 */
var ContentWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: inline-block;\n\tcolor: ", ";\n\tfont: ", ";\n\tletter-spacing: 0;\n\twhite-space: pre-line;\n\ttext-align: center;\n"], ["\n\tdisplay: inline-block;\n\tcolor: ", ";\n\tfont: ", ";\n\tletter-spacing: 0;\n\twhite-space: pre-line;\n\ttext-align: center;\n"])), function (_a) {
    var $color = _a.$color;
    return (!!$color && $color) || 'inherit';
}, function (_a) {
    var $typo = _a.$typo;
    return (!!$typo && typo["".concat($typo)]) || 'inherit';
});
export default Typography;
var templateObject_1;
