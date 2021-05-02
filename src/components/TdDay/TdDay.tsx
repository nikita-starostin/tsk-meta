import React from 'react';
import {CURRENT_MONTH_JS_INDEX, CURRENT_MONTH_NAME_RP} from '../../app.config';
import {ITdDayProps} from './TdDay.models';

export default function TdDay({day, dance, month}: ITdDayProps): React.ReactElement {
    const date = new Date();
    return <td style={date.getDate() === day
    && ((date.getMonth() === CURRENT_MONTH_JS_INDEX && !month) // current month and current day
        || (date.getMonth() > CURRENT_MONTH_JS_INDEX && !!month)) // next month and current day
        ? {
            outline: '3px orange solid'
        } : undefined}>
        {day}&nbsp;{month || CURRENT_MONTH_NAME_RP}<br/>
        {dance && `20.00-22.00 ${dance}`}
    </td>
}
