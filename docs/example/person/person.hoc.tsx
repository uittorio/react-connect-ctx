import { connectContext } from '../../../connectContext';
import { PersonComponent } from './person';
import { APP_CONTEXT, AppContext } from '../context';
function mapContextToProps(context: AppContext) {
    return {
        personService: context.personService
    }
}

export const PersonHOC = connectContext(APP_CONTEXT)(PersonComponent, mapContextToProps);
