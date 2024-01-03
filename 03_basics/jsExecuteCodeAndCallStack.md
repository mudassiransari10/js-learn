# Context are of types : 
### 1. Global Execution Context
### 2. Function Execution Context
### 3. Eval Execution Context
#### 1. Global Execution Context
    The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, 
    & window object in browser environment)

###### JavaScript code is run in two phases : 
###### -   Phase 1: Memory phase
    During this phase, JS engine scans the code and assigns the initial values for the variables, 
    functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

###### -   Phase 2: Execution phase
    After the creation phase completed, the execution phase begins where Code is executed 
    For every time the code is execute, a context is created, which consist of : 
            New Variable Environment + Execution Thread
        It returns the variable to the parent context, i.e. global execution context, and then it is delete to free up the memory