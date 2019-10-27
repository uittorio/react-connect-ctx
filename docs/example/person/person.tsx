import React from 'react';
import { IPersonService } from './personService.interface';

export interface PersonComponentProps {
    personService: IPersonService;
    id: string;
}

export function PersonComponent(props: PersonComponentProps) {
    const [name, setName] = React.useState("");

    const getName = async() => {
        const newName = await props.personService.getName(props.id);
        setName(newName);
    };

    return <>
        <button onClick={getName}>Load details</button>
        <p>{name}</p>
    </>
}
