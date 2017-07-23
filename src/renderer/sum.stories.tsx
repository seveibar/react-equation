import * as React from 'react'
import { storiesOf } from '@kadira/storybook'

import '../stories.scss'
import '../style.scss'

import Equation from '../equation'
import EquationWrapper from '../equation-wrapper.stories'

storiesOf('Special - sum', module)
    .addDecorator((story) => (
        <EquationWrapper>{story()}</EquationWrapper>
    ))
    .add('Simple', () => (
        <Equation evaluate>sum(n,1,5,n)</Equation>
    ))
    .add('Long arguments', () => (
        <Equation evaluate>sum(n,log(2^2^2/2,2),5^2,2 n^2+5 n)</Equation>
    ))
    .add('Tall above', () => (
        <Equation evaluate>sum(n,1,10,1/2/3/4/5)</Equation>
    ))
    .add('Tall below', () => (
        <Equation evaluate>sum(n,1,10,1/(2/(3/(4/5))))</Equation>
    ))