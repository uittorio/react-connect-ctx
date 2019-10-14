import { FC, ReactElement, useContext } from 'react';
import * as React from 'react';

export function connectContext<TContext>(context: React.Context<TContext>):
    <TProps extends TContextProps, TContextProps>
    (Cmp: FC<TProps>, mapContextToProps: (context: TContext) => TContextProps) => FC<Omit<TProps, keyof TContextProps>> {
    return function
        <TProps extends TContextProps, TContextProps>
        (Cmp: FC<TProps>, mapContextToProps: (context: TContext) => TContextProps): FC<Omit<TProps, keyof TContextProps>> {

        return function(props: Omit<TProps, keyof TContextProps>): ReactElement {
            const contextToAssign: TContext = useContext(context);

            const dependencies: TContextProps = mapContextToProps(contextToAssign);

            const propsWithFields: TProps = {
                ...props,
                ...dependencies
            } as TProps;

            return <Cmp {...propsWithFields}/>;
        };
    }
}
