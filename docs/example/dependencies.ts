import { personService } from './person/personService';
import { AppContext } from './context';

export const appDependencies: AppContext = {
    personService: personService()
};
