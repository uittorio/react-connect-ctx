import React from 'react';
// @ts-ignore
import { connectContext } from 'react-connect-ctx';

export const APP_CONTEXT: React.Context<AppContext> = React.createContext(null);

interface AppContext {
  personService: IPersonService;
}

interface IPersonService {
    getName(personId: string): Promise<string>;
}

function personService(): IPersonService {
  return {
    getName(_id: string): Promise<string> {
      return Promise.resolve("A name") // fake implementation
    }
  }
}

export const appDependencies: AppContext = {
  personService: personService()
};

// @ts-ignore
function App() {
    return <APP_CONTEXT.Provider value={appDependencies}>
        <PersonWrapperComponent/>
    </APP_CONTEXT.Provider>
}


interface PersonComponentProps {
  personService: IPersonService;
  id: string;
}

function PersonComponent(props: PersonComponentProps) {
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

function mapContextToProps(context: AppContext) {
  return {
    personService: context.personService
  }
}

export const PersonComponentHOC = connectContext(APP_CONTEXT)(PersonComponent, mapContextToProps);

function PersonWrapperComponent() {
  return <PersonComponentHOC id='123'/>
}

