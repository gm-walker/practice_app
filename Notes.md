# ReactJS Notes

## What is ReactJS?
{...}

---
## Components
- A **component** represents part of the user interface (UI).
- Reusable
- Can contain components
- Components are written in JavaScript
- Component code lies within the component (ex. functionality within App component is stored in the App.js file)
```js
function componentName(){}
  // or
const componentName() => <h1></h1>
```
### Component Types
There are two (2) types of components:
- *Stateless Functional Component(s)*
  - Simple JavaScript functions
  - Receive properties (props)
  - Returns HTML (describes UI)
  - Absence of 'this' keyword
  - Solution w/out using state
  - Stateless/Dumb/Presentational
- *Stateful Class Component(s)*
  - Class extending Component class
  - Render method returning HTML
  - More feature rich
  - Maintain their own private data - state
  - Complex UI logic
  - Stateful/Smart/Container
```js
export class componentName
{
    render()
    {
        return (<h1></h1>)
    }
}
```
---
## JavaScript XML (*JSX*)
- Extension to the JavaScript language syntax
- Write XML-like code for elements & components
- JSX tages have a tag name, attributes, and children
- Not necessary for React applications
- Makes React code simpler/elegant
```js 
export const componentName() =>
{
    return React.createElement
    ('element', {'attributes'}, 'element')
}
```