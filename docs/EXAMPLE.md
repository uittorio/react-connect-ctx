## Example  

### Step by step
#### - Define your context [Code](example/context.ts) 
```ts
export const APP_CONTEXT: React.Context<AppContext> = React.createContext(null);

export interface AppContext {
  personService: IPersonService;
}
```
#### - Define context value [Code](example/person/personService.ts) 
```ts

export interface IPersonService {
  getName(personId: string): Promise<string>;
}

export function personService(): IPersonService {
  return {
    getName(id: string): Promise<string> {
      return Promise.resolve("A name") // fake implementation
    }
  }
}
```
#### - Export dependencies [Code](example/dependencies.ts)

```ts
export const appDependencies: AppContext = {
  personService: personService()
}
```

#### - Add context to your app [Code](example/app.tsx)
```ts
function App() {
    return <APP_CONTEXT.Provider value={appDependencies}>
        <PersonWrapperComponent/>
    </APP_CONTEXT.Provider>
}
```
#### - Create the component you want to connect [Code](example/person/person.tsx)
```ts

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
```

#### - Connect the component [Code](example/person/person.hoc.tsx)
```ts
function mapContextToProps(context: AppContext) {
  return {
    personService: context.personService
  }
}

export const PersonComponentHOC = connectContext(APP_CONTEXT)(PersonComponent, mapContextToProps);
```
#### - Use it [Code](example/person/personWrapper.tsx)
```ts
function PersonWrapperComponent() {
  return <PersonComponentHOC id='123'/>
}

```
