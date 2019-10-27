import React from 'react';
import { IPersonService } from './person/personService.interface';

export const APP_CONTEXT: React.Context<AppContext> = React.createContext(null);

export interface AppContext {
    personService: IPersonService;
}
