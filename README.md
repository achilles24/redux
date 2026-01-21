# redux
function* generator(i) {
  yield i;
}
const gen = generator(10);
console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); { value: undefined, done: true }

----------------------- EVENT LOOP --------------------------------------------------

1. JavaScript is single-threaded and executes one task at a time.
2. The JavaScript Event Loop handles multiple tasks concurrently.
To keep the track of all the contexts, including global and functional, the JavaScript engine uses a call stack.
It uses the LIFO principle (Last-In-First-Out). When the engine first starts executing the script, it creates a global context and pushes it on the stack. Whenever a function is invoked, similarly, the JS engine creates a function stack context for the function and pushes it to the top of the call stack and starts executing it.
When execution of the current function is complete, then the JavaScript engine will automatically remove the context from the call stack and it goes back to its parent.
6. When a function is called, it blocks the Event Loop until it finishes.
3. The Call Stack keeps track of currently executing function calls.
4. The Event Queue stores events waiting to be processed.
5. The Event Loop checks the Event Queue for new events continuously.
7. Functions like `setTimeout()` do not block the Event Loop.
8. The Event Loop prioritizes events based on their type.
9. Debouncing and throttling prevent overwhelming the Event Loop.
10. The Event Loop enables asynchronous programming for handling multiple tasks.

-------------------------- INTRODUCTION --------------------------------------------------

1. Hello, I'm Prakash Kumar. I was born & brought up from Madarai. Currently I'm residing in Bangalore. I have been working in frontend for more than 7 and a half year. Currently, I served as a Lead Software Engineer at Virtusa,
2. I specialize in foundational web technologies such as HTML, CSS, and JavaScript, alongside css preprocessor tools like SASS, Bootstrap, and JavaScript libraries including React, Redux, and React Router.
3.  

4. where I contributed to 'Project Infinity,' an GenAI ChatGPT initiative. 
5. In this role, my focus was on developing React applications integrated with Redux and React Router. 
6. I collaborated closely with the .NET team, utilizing Swagger UI to access API endpoints. 
7. Additionally, I implemented authentication and authorization for the routes, based on RBAC principles.

As a team lead, mentored team through technical guidance by reviewing the code for better code quality, helping them out fixing UI issues on Browserstack  for developing mobile friendly app & doing profiling for improving application performance & discussing current trends.
I'm active particpant in all scrum ceremonies, collaborate with UX designers to get design, doing shake & bake demo at every task completion, showing product demo at the end of sprint to clients.

8. I was specialized in handling Markdown responses from the GPT model, rendering markdown content on the UI effectively using React Markdown.
9. I learned React query & implement those in our existing application.

10. Prior to this, I worked on the BT Consumer project, handled both BT Sports and TV pages. 
11. Here, I developed many templates and reusable components using HTML, SASS, jQuery, and Vue.js on AEM pages. 
12. Worked closely with AEM developers, and I ensured seamless integration of these templates.
13. I was mainly focused on improving and optimizing page performance using web performance metrics such as FCP and LCP & by lazy loading.
14. I strictly followed the web accessibility guidelines while developing applications.

That's it about myself. I look forward to discussing how my background align with the opportunities here

-------------------------- FLEXBOX --------------------------------------------------

The flexible box layout module  is a one-dimensional layout model for distributing space between items and includes numerous alignment capabilities.
When we describe flexbox as being one-dimensional we are describing the fact that flexbox deals with layout in one dimension at a time — either as a row or as a column. This can be contrasted with the two-dimensional model of CSS Grid Layout, which controls columns and rows together.

When working with flexbox you need to think in terms of two axes — the main axis and the cross axis. The main axis is defined by the flex-direction property, and the cross axis runs perpendicular to it.

flex-direction: row
justify - horizontally
align-items - vertically

-------------------------- React Performance Improvement Tips --------------------------------------------------

Using Immutable Data Structures
Function/Stateless Components and React.PureComponent
Memoize React Components
Use React.Fragments to Avoid Additional HTML Element Wrappers
Avoiding Props in the Initial States
Dependency optimization
Multiple Chunk Files 
Using Production Mode Flag in Webpack

Avoid Inline Function Definition in the Render Function.
Throttling and Debouncing Event Action in JavaScript
Avoid using Index as Key for map

Spreading props on DOM elements
Use Reselect in Redux to Avoid Frequent Re-render
Avoid Async Initialization in componentWillMount()

CSS Animations Instead of JS Animations
Using a CDN
Using Web Workers for CPU Extensive Tasks
Virtualize Long Lists
Analyzing and Optimizing Your Webpack Bundle Bloat
Consider Server-side Rendering
Enable Gzip Compression on Web Server

One approach I found particularly effective in hypothetical scenarios is optimizing image loading by implementing lazy loading techniques. By dynamically loading images only when they are needed, we can significantly reduce initial page load times and improve overall performance. This not only enhances user experience but also contributes to faster page rendering and better site performance metrics."

in a project I worked on, we considered implementing lazy loading using libraries like React Lazy and Suspense, which allowed us to prioritize content loading based on user interactions or viewport visibility. This approach reduces the initial payload of the application and optimizes resource utilization, leading to faster load times and smoother user interactions. I also explored using performance monitoring tools like Lighthouse and Chrome DevTools to analyze and fine-tune our optimizations based on real-time metrics.

-------------------------- 𝐔𝐧𝐝𝐞𝐫𝐬𝐭𝐚𝐧𝐝𝐢𝐧𝐠 𝐭𝐡𝐞 𝐒𝐎𝐋𝐈𝐃 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞𝐬 -------------------------- 

The SOLID principles are a set of five design principles used in object-oriented programming (OOP) to create more maintainable, understandable, and flexible software. Here's a breakdown of each principle:

𝟏. 𝐒𝐢𝐧𝐠𝐥𝐞 𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐛𝐢𝐥𝐢𝐭𝐲 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐒𝐑𝐏): A class should have one, and only one, reason to change. This means each class should have a clear and focused purpose, avoiding the need to handle multiple unrelated functionalities.

𝟐. 𝐎𝐩𝐞𝐧-𝐂𝐥𝐨𝐬𝐞𝐝 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐎𝐂𝐏): Software entities (classes, modules, functions) should be open for extension but closed for modification. This means you should be able to extend the functionality of your code without modifying existing code. This is often achieved through inheritance and interfaces.

𝟑. 𝐋𝐢𝐬𝐤𝐨𝐯 𝐒𝐮𝐛𝐬𝐭𝐢𝐭𝐮𝐭𝐢𝐨𝐧 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐋𝐒𝐏): Objects of a superclass should be replaceable with objects of its subclasses without altering the program's correctness. Essentially, subclasses should be a true extension of their parent class and behave as expected when used in place of the parent.

𝟒. 𝐈𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞 𝐒𝐞𝐠𝐫𝐞𝐠𝐚𝐭𝐢𝐨𝐧 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐈𝐒𝐏): Clients shouldn't be forced to depend on methods they don't use. Large interfaces with many methods can be cumbersome. This principle suggests breaking down large interfaces into smaller, more specific ones that clients can choose to implement depending on their needs.

𝟓. 𝐃𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐜𝐲 𝐈𝐧𝐯𝐞𝐫𝐬𝐢𝐨𝐧 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐃𝐈𝐏): High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions. This principle promotes loose coupling between different parts of your code. By depending on abstractions (interfaces), you can easily swap out implementations without affecting the overall functionality.

-------------------------------------------------------------------------------------------------------- 

let arr = [[1,2],3,[4], [[1,2]]];

Array.prototype.flat = function (depth = 1) {
    let result = [];
    function flat(param, currentDepth) {
        for (let i = 0; i< param.length; i++) {
            if (Array.isArray(param[i]) && (currentDepth < depth)) {
                flat(param[i], currentDepth + 1);
            } else {
                result.push(param[i]);
            }
        }
    }
    flat(this, 0);
    return result;
}


let values = arr.flat();
console.log(values);

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    // staleTime: 10000,
    // refetchOnMount: "always",
    // refetchInterval: 2000,
    // select: (data) => {
    //   return data?.map((each) => {
    //     return { id: each.id, title: each.title };
    //   });
    // },
    enabled: false,
  });

const { mutate, error, reset } = useMutation({
    mutationFn: addPost,
    onMutate: (variables) => {
      // A mutation is about to happen!
      // Optionally return a context containing data to use when for example rolling back
      return { id: 1 };
    },
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${context.id}`);
    },
    onSuccess: (data, variables, context) => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });

mutate({ id: 34, title, tags }); // on button click trigger mutate

----------------------- Event Delegation -----------------------------

Event Delegation: One of the key advantages of event bubbling is event delegation. Instead of attaching event listeners to every individual child element, you can attach a single event listener to a parent (or ancestor) element that will catch events bubbling up from its children. This is especially useful when dealing with dynamically added elements or a large number of similar elements.

----------------------- webpack -----------------------------

Yes, create-react-app does use webpack under the hood by default. When you create a new React application using create-react-app, webpack is configured for you behind the scenes. webpack is responsible for bundling your JavaScript files, CSS files, images, and other assets into bundles that can be efficiently loaded by the browser. The configuration provided by create-react-app abstracts away much of the webpack configuration complexity, allowing you to focus on building your React application without worrying about configuring webpack manually.

When you use create-react-app to create a React application, it sets up webpack with a default configuration that includes several loaders and optimizations for production builds:

Loaders: create-react-app configures webpack with various loaders to handle different types of files:

       JavaScript: Transpiles modern JavaScript (ES6+) to a version supported by all browsers using Babel.
       CSS: Handles CSS files, including autoprefixing and minification.
       Images and fonts: Processes image and font files, optimizing them for production.

Minification: For production builds, create-react-app automatically enables minification of your JavaScript and CSS files. This reduces the file size by removing unnecessary whitespace, comments, and renaming variables to shorter names where safe.

Code splitting: webpack, configured by create-react-app, supports code splitting. This means it can split your code into smaller bundles which are loaded on demand, improving initial load times and reducing the overall size of the initial bundle.

Environment variables: create-react-app allows you to define environment-specific variables which can be used in your application code. This is useful for configuring different behavior between development and production builds.

Optimizations: Apart from minification, webpack includes other optimizations such as tree shaking, which eliminates unused code from your bundles. This helps in reducing the size of your final bundle further.

Source maps: For easier debugging, create-react-app generates source maps for production builds. These maps allow you to map the minified and bundled code back to its original source code.

Overall, create-react-app aims to provide a production-ready webpack configuration out of the box, optimizing your application for performance and ensuring that you can focus on writing React code rather than spending time configuring webpack.

npx json-server data.json

npm create vite@latest my-project -- --template react

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;
module.exports = {
  mode: 'development',
  entry: {
    vendor: ['semantic-ui-react'],
    app: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    })
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
  }
};


const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  entry: {
    vendor: ['semantic-ui-react'],
    app: './src/index.js'
  },
  output: {
    // We want to create the JavaScript bundles under a 
    // 'static' directory
    filename: 'static/[name].[hash].js',
    // Absolute path to the desired output directory. In our 
    //case a directory named 'dist'
    // '__dirname' is a Node variable that gives us the absolute
    // path to our current directory. Then with 'path.resolve' we 
    // join directories
    // Webpack 4 assumes your output path will be './dist' so you 
    // can just leave this
    // entry out.
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // Change to production source maps
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
          use: [
            {
              // We configure 'MiniCssExtractPlugin'              
              loader: MiniCssExtractPlugin.loader,
            }, 
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // Allows to configure how many loaders 
                // before css-loader should be applied
                // to @import(ed) resources
                importLoaders: 1,
                localsConvention: 'camelCase',
                // Create source maps for CSS files
                sourceMap: true
              }
            },
            {
              // PostCSS will run before css-loader and will 
              // minify and autoprefix our CSS rules.
              loader: 'postcss-loader',
            }
          ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    
    // Create the stylesheet under 'styles' directory
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css'
    })
  ]
};

In the context of front-end development with frameworks like React.js, the Virtual DOM plays a crucial role in efficiently updating the UI in response to changes in application state. Here’s a step-by-step overview of how this process typically works:

1. **Initial Render**: When you first render a React component, React creates a virtual representation of the DOM in memory, known as the Virtual DOM. This Virtual DOM is a lightweight copy of the real DOM.

2. **State Changes**: When the state of a React component changes (e.g., due to user interaction, data fetching, etc.), React needs to update the UI to reflect these changes.

3. **Reconciliation**: React determines what changes need to be applied to the Virtual DOM to bring it up to date with the updated state. This process is called reconciliation.

4. **Diffing**: React performs a process known as "diffing" where it compares the updated Virtual DOM with a snapshot of the previous Virtual DOM (from before the state change). By comparing these two versions, React can efficiently determine what specific changes need to be applied to the real DOM.

5. **Efficient Updates**: Once React has identified the differences (or "diffs"), it computes the minimal set of changes needed to update the real DOM. This minimizes the number of updates to the actual browser DOM, which can be costly in terms of performance.

6. **Updating the DOM**: Finally, React applies these changes to the real DOM, updating only the necessary parts of the UI that have changed due to the state update. This process is optimized to be as efficient as possible, leveraging techniques like batched updates and using efficient algorithms for diffing.

### Example Scenario:
- Let's say you have a React component that displays a counter. Initially, the counter is set to 0.
- When the user clicks a button, the counter state is updated to 1.
- React will:
  - Update the Virtual DOM to reflect the new state (counter = 1).
  - Perform a diffing algorithm to compare the new Virtual DOM with the previous one (where counter = 0).
  - Determine that the text displaying the counter needs to be updated from 0 to 1.
  - Apply this specific change to the real DOM, updating only the text content of the counter element.

This entire process happens behind the scenes in React, abstracting away the complexities of directly manipulating the DOM and providing a more efficient way to manage UI updates based on application state changes.


import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Reset error state for the next render
    setHasError(false);
  }, [children]); // Reset on children change

  const handleError = (error, info) => {
    console.error('Error caught by ErrorBoundary:', error, info);
    // You can log the error to an error reporting service

    setHasError(true);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
}

export default ErrorBoundary;


var, let setTimeout for loop

The difference in behavior between the two code snippets lies in how JavaScript handles variable scoping and closures, particularly with `let` and `var` declarations within the context of `setTimeout()`.

### Code Snippet 1: Using `let` in the loop variable (`let i = 0`)

```javascript
var array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i]);
  }, 1000);
}
```

In this snippet:
- `let i = 0;` declares `i` within the scope of the `for` loop.
- The `setTimeout()` function is asynchronous and executes after a delay of 1000 milliseconds (1 second).
- Each iteration of the loop creates a new lexical scope for `i`, ensuring that the value of `i` captured by each closure corresponds to the current iteration's value.

**Explanation:**
- When the `setTimeout()` callback executes after 1 second, it references the `i` variable from its lexical scope. Due to the `let` declaration, each callback function captures the specific value of `i` at the time `setTimeout()` was called (i.e., the value of `i` in each iteration of the loop).
- Therefore, you will see the numbers `1`, `2`, `3`, `4`, and `5` printed to the console, each after a delay of 1 second, corresponding to the elements in the `array`.

### Code Snippet 2: Using `var` in the loop variable (`var i = 0`)

```javascript
var array = [1, 2, 3, 4, 5];
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i]);
  }, 1000);
}
```

In this snippet:
- `var i = 0;` declares `i` in the global or function scope (depending on where the loop is located, it might be global in this context).
- Due to the behavior of `var`, there is only one variable `i` that is hoisted to the top of its scope (global or function), and its value is updated in each iteration of the loop.

**Explanation:**
- Because `var` does not have block-level scope, but rather function-level or global scope, the `i` variable is shared across all iterations of the loop and across all `setTimeout()` callbacks.
- By the time each `setTimeout()` callback executes (after 1 second), the loop has already finished executing, and the value of `i` is `5` (the value that caused the loop condition `i < array.length` to become false).
- Therefore, each `setTimeout()` callback references the same `i`, which is `5` at the time of execution. Consequently, you will see `undefined` printed to the console five times after a delay of 1 second each.

### Conclusion:

- In the first snippet (`let i = 0`), `i` is scoped to each iteration of the loop due to `let`, resulting in each `setTimeout()` callback accessing a unique `i` value.
- In the second snippet (`var i = 0`), `i` is shared across all iterations and `setTimeout()` callbacks due to `var`, resulting in all `setTimeout()` callbacks printing the final value of `i` (which is `5` after the loop completes).

Using `let` ensures that each iteration's `i` value is captured correctly by the `setTimeout()` callback, which is why the first snippet prints `1`, `2`, `3`, `4`, `5` after 1 second intervals.
