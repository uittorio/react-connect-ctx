# react-connect-ctx

[![npm version](https://badge.fury.io/js/react-connect-ctx.svg)](https://badge.fury.io/js/react-connect-ctx)
[![Downloads](https://img.shields.io/npm/dt/react-connect-ctx.svg)](https://www.npmjs.com/package/react-connect-ctx)

Connect React Context to your component easily and with type safety

## Why
- You dont want your Component to know about React.Context
- You want to unit test your component without providing a context

## Installation
```
npm i react-connect-ctx
```

## Usage
```ts
import { connectContext } from 'react-connect-ctx';

export default connectContext(APP_CONTEXT)(
    PersonComponent,
    (context: AppContext): Partial<ComponentAProps> => {
        return {
           api: context.api
        }
});

```
##[Click for full Example](docs/EXAMPLE.md)
