## Three principles
1. The state of your whole application is stored in an object tree within a single store
2. The only way to change the state is to emit an action, an object describing what happened
3. To specify how the state tree is transformed by actions, you write pure reducers

<img src="/redux-demo/sources/Principles-overview.PNG" alt="drawing" height="380" width="400" />

## Reducers
- Specify how the app's state changes in response to actions sent to the store
- Function that accepts state anf action as arguements, and returns the next state of the application
- (previousState, action) => newState