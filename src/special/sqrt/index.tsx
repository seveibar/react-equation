import React from 'react'
import { EquationNodeFunction } from 'equation-parser'

import { RenderingPart } from '../../RenderingPart'

import { renderInternal } from '../../render'

import RootSymbol from './root-symbol'

const padding = 0.1

const styles = {
    wrapper: {
        position: 'relative',
        display: 'inline-block',
        marginTop: '0.1em',
    },

    symbol: {
        verticalAlign: 'top',
    },

    line: {
        position: 'absolute',
        width: 'calc(100% - 0.7em)',
        borderTop: '0.08em solid currentColor',
        top: 0,
        left: '0.8em',
    },
} as const

export default function sqrt({args: [expression]}: EquationNodeFunction): RenderingPart {
    const content = renderInternal(expression || { type: 'operand-placeholder' })

    return {
        type: 'span',
        props: { style: { ...styles.wrapper, height: `${content.height + padding}em` } },
        aboveMiddle: content.aboveMiddle + padding,
        belowMiddle: content.belowMiddle,
        children: <>
            <RootSymbol style={styles.symbol} height={content.height + padding} />
            <div style={styles.line}/>
            {content.elements}
        </>,
    }
}
