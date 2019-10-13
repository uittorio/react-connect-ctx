import * as React from 'react';

interface ComponentProp {
    context: string
    name: string
    surname: string
}

export function ComponentMultipleProp(props: ComponentProp) {
    return <div>{props.context} {props.name} {props.surname}</div>
}
