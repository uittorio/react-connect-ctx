import { connectContext } from '../src';
import * as React from 'react';
import { render } from "react-dom";
import { act } from 'react-dom/test-utils';
import { ComponentOneProp } from './component/componentOneProp';
import { ComponentMultipleProp } from './component/componentMultipleProp';

interface ContextObject {
    name: string;
    surname: string;
}

describe('ConnectContext', () => {
    let contextLiteral: React.Context<string>,
        container: HTMLDivElement,
        contextObject: React.Context<ContextObject>;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
        contextLiteral = React.createContext<string>("Hello");
        contextObject = React.createContext<ContextObject>({
            name: "John",
            surname: "Wick"
        });
    });

    describe('when there is only one prop', () => {
        it('should connect the context and display the data ', () => {
            const ComponentWithContext = connectContext(contextLiteral)(ComponentOneProp, (context: string) => {
                return { context }
            });

            act(() => {
                render(<ComponentWithContext/>, container);
            });

            expect(container.textContent).toBe("Hello");
        });
    });

    describe('when there are multiple props', () => {
        it('should connect the context and display the data ', () => {
            const ComponentWithContext = connectContext(contextLiteral)(ComponentMultipleProp, (context: string) => {
                return { context }
            });

            act(() => {
                render(<ComponentWithContext name='Vittorio' surname='Guerriero'/>, container);
            });

            expect(container.textContent).toBe("Hello Vittorio Guerriero");
        });
    });

    describe('when multiple props are assigned from the context', () => {
        it('should connect the context and display the data ', () => {
            const ComponentWithContext = connectContext(contextObject)(ComponentMultipleProp, (context: ContextObject) => {
                return {
                    name: context.name,
                    surname: context.surname
                }
            });

            act(() => {
                render(<ComponentWithContext context={'Hello'}/>, container);
            });

            expect(container.textContent).toBe("Hello John Wick");
        });
    });
});
