## Three principles
1. The state of your whole application is stored in an object tree within a single store
2. The only way to change the state is to emit an action, an object describing what happened
3. To specify how the state tree is transformed by actions, you write pure reducers

<img src="/redux-demo/sources/Principles-overview.PNG" alt="drawing" height="380" width="400" />

## Reducers
- Specify how the app's state changes in response to actions sent to the store
- Function that accepts state anf action as arguements, and returns the next state of the application
- (previousState, action) => newState

## Redux Store
One store for the entire application
### Responsibilities
- Holds application state
- Allows access to state via getState()
- Allows state to be updated via dispatch(action)
- Registers listeners via subscribe(listener)
- Handles unregistering of listeners via the function returned by subscribe(listener)

## Middleware
- Is the suggested way to extend Redux with custom functionality
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
- Use middleware for logging, crash reporting, performing asynchronous tasks etc.