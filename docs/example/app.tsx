import React from 'react';
import { PersonWrapperComponent } from './person/personWrapper';
import { appDependencies } from './dependencies';
import { APP_CONTEXT } from './context';

export function App() {
    return <APP_CONTEXT.Provider value={appDependencies}>
        <PersonWrapperComponent/>
    </APP_CONTEXT.Provider>
}
