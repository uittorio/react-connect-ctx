import * as React from 'react';

interface ComponentProp {
    context: string
}

export function ComponentOneProp(props: ComponentProp) {
    return <div>{props.context}</div>
}
