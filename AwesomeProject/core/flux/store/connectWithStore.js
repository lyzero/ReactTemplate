import * as React from "react";
import {
    connect,
    Provider,
} from "react-redux";
import {store} from "../../.."

export function connectWithStore(mapStateToProps, component) {
    const ConnectedWrappedComponent = connect(mapStateToProps)(component);

    return class ComponentWithStore extends React.Component {

        render() {
            return (
                <Provider store={store}>
                    <ConnectedWrappedComponent {...this.props} />
                </Provider>
            );
        }
    };
}
