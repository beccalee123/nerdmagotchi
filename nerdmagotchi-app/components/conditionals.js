import React from 'react';

const render = (condition = false, children = null) => {
    return !!condition ? children : null;
  };
  
//   export const If = props =>
//     React.Children.map(props.children, child =>
//       React.cloneElement(child, { condition: props.condition })
//     );
  

    export const When = props => render(props.condition, props.children);
    export const Unless = props => render(!props.condition, props.children);
  