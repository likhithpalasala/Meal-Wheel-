# Namste React

#  What is Emmet?
-  Instead of writing out the full HTML structure for a webpage manually, you can use Emmet abbreviations like html:5 to generate the basic HTML5 structure.

# Difference between a Library and Framework?
- A library is a collection of pre-written code or functions that you can use in your program. It provides specific functionality that you can call from your own code.
- A framework is a more comprehensive set of tools, rules, and conventions that provides a structure for building applications. 

# What is CDN? Why do we use it?
- A CDN, or Content Delivery Network, is a distributed network of servers strategically positioned around the globe to efficiently deliver web content to users. 

#  Why is React known as React?
- It is known as "React" because of its core concept of reactive, or declarative, user interfaces. 

#  What is crossorigin in script tag?
- The crossorigin attribute is used to control how the browser handles requests for cross-origin scripts. 

# What is diference between React and ReactDOM?
- The React package is the core library for building user interfaces in React. It provides the fundamental functionality for creating and managing components, handling component state and props, and rendering components to the virtual DOM. 
- The ReactDOM package is responsible for rendering React components to the actual DOM.

#  What is difference between react.development.js and react.production.js files via CDN?
-  file is intended for development environments.
-  file is intended for production environments.

# async and defer attributes in JS?
- https://www.youtube.com/watch?v=IrHmpdORLu8


# Parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File Watching Algorithm
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostics
- Error handling
- HTTPS 
- Tree Shaking - remove unused code 
- Diff Dev and Prod bundles



// React.createElement => ReactElement-JS-Object => HTMLElement(render)
//JSX - HTML or XML-like syntax => (Transpiles the JSX before it reaches the JS engine - PARCEL - By  Babel)
// JSX => React.createElement => ReactElement-JS-Object => HTMLElement(render)

# Namaste Food
/**
 * Header
 * - Logo
 * - Nav items

 * Body
 - Search
 - RestaurantContainer
   - RestCard
    - Image
    - Name of Rest, Star Rating, Cuisine, delivery time

 * Footer
   -Copyright
   -Links
   -Address
   -Contact
 */



 Two types of Export/Import

 - Default Export/Import
 export deafult <name of the var>;
 import <name of the var> from "path";


 - Named Export/Import
 export const <name of the var> 
 import{comp} from path;



 # Redux ToolKit
  - Install @reduxjs/toolkit and react-redux
  -Build our own store
  -Connect our store to our app
  -Slice(cartSlice)
  -Dispatch(action)
  -Selector

# Setting up Testing in our app
  - Install React Testing Library
  - Installed Jest
  - Installed babel dependencies
  - Configure babel
  - Configure parcel config file to disable default babel transpilation
  - Jest configuration npx jest --init
  - Intsall jsdom library
  - Install  @babel/preset-react - to make JSX work in test cases
  - Include  @babel/preset-react inside my babel config
  - Install npm i -D @testing-library/jest-dom


