import classes from '../style.scss'

import { RenderingPart, EquationTreeFunction } from '../types'

import render from './render'

export default function abs({args: [expression]}: EquationTreeFunction): RenderingPart {
    const content = render(expression)

    return {
        type: 'span',
        props: { className: classes.functionAbs },
        aboveMiddle: content.aboveMiddle,
        belowMiddle: content.belowMiddle,
        children: content.elements,
    }
}