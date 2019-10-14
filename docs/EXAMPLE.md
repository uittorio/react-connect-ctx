## Example

[Code](docs/example.tsx) 

### Step by step
#### - Define your context
```ts
export const APP_CONTEXT: React.Context<AppContext> = React.createContext(null);
```
#### - Define context value
```ts

interface IPersonService {
  getName(personId: string): Promise<string>;
}

interface AppContext {
  personService: IPersonService;
}

function personService(): IPersonService {
  return {
    getName(id: string): Promise<string> {
      return Promise.resolve("A name") // fake implementation
    }
  }
}

export const appDependencies: AppContext = {
  personService: personService()
}

```
#### - Add context to your app
```ts
function App() {
    return <APP_CONTEXT.Provider value={appDependencies}>
        <PersonWrapperComponent/>
    </APP_CONTEXT.Provider>
}
```
#### - Create the component you want to connect
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

#### - Connect the component
```ts
function mapContextToProps(context: AppContext) {
  return {
    personService: context.personService
  }
}

export const PersonComponentHOC = connectContext(APP_CONTEXT)(PersonComponent, mapContextToProps);
```
#### - Use it
```ts
function PersonWrapperComponent() {
  return <PersonComponentHOC id='123'/>
}

```
