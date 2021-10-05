In this section we went over three main things
1.JSX limitiation 
  a. JSX is not allowed to have adjacent jsx elements. You cant return more than one "root" jsx element. Workarounds include 
    1. Wrap it in a div or element. 
    2. Use a wrapper or React.Fragment 
2. React Portals. 
  React portals allow us to render child components into DOM node outside of the parent compnent. These are usually used for modal, loaders, ets
 3. React Refs.
 React refs provide a way to access DOM nodes or React elements. This helps us with inputs and accessing data. We dont usually want to manipulate the data using refs. 
