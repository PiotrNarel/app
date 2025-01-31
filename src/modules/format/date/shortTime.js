import React from 'react'
import t from '~t'
import { parseDate } from './parse'
import dateFnsFormat from 'date-fns/format'

let _format
function getFormat() {
    if (!_format)
        _format = new Intl.DateTimeFormat(
            t.currentLang,
            {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }
        ).format

    return _format
}

export const shortDateTime = (original) => {
    let d
    try{ d = parseDate(original) } catch(e){}
    
    try{
        return getFormat()(d)
    }catch(e){}

    try{
        return dateFnsFormat(d, 'P p')
    }catch(e){}

    return ''
}

export const ShortDateTime = React.memo(
    function({ date }) {
        return shortDateTime(date)
    }
)