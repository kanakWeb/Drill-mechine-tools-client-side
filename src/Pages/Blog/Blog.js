import React from "react";

const Blog = () => {
  return (
    <div className="mx-16 md:mx-48">
      <div className="shadow-lg ">
        <div className="flex items-center mt-10 p-5">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://cpd.degroote.mcmaster.ca/files/2019/08/bf-img10-285x380.jpg"
            alt=""
          />
          <div>
            <h1>Ruman jhon.</h1>
            <h1>Posted On 20th September,2021</h1>
          </div>
        </div>
        <div>
          <h1 className="sp-style text-blue-700 text-center text-2xl px-5">
            {" "}
            What are the different ways to manage a state in a React
            application??
          </h1>
          <p className="sp-style p-3 md:p-10 text-md md:text-xl">
            The four major forms of state you need to keep track of in
            your React projects are: Local state, Global state, Server
            state, and URL state. A component's local state refers to
            the data it keeps. Managing local state in React is often
            accomplished via the usage of the useState hook.
            Additionally, for both local and global states, useReducer
            is an option that may be implemented in any way. Under the
            hood, it is quite similar to useState, except that it
            takes a reducer instead of a starting state. You'd need
            local state for things like showing or hiding a modal
            component and keeping track of input data for forms that
            have been disabled. Data that is shared across different
            components is referred to as global state. When data has
            to be accessed and updated across many parts of our
            program, we need to use global state. Authenticated user
            state is a frequent example of a global state. In order to
            get or update data from an external server, you must
            handle a variety of states, including loading and error
            state.
          </p>
        </div>
      </div>

      <div className="shadow-lg ">
        <div className="flex items-center mt-10 p-5">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://upload.wikimedia.org/wikipedia/en/b/b0/Suit_and_tie_-_business_attire.jpg"
            alt=""
          />
          <div>
            <h1>Barmin.</h1>
            <h1>Posted On 5th June,2020</h1>
          </div>
        </div>
        <div>
          <h1 className="sp-style font-bold text-center text-2xl text-blue-700">
            How does prototypical inheritance work?
          </h1>
          <p className="sp-style p-3 md:p-10 text-md md:text-xl">
            There is an unnoticed [[Prototype]] property in every
            object in addition to its methods and attributes.
            JavaScript's Prototypal Inheritance capability may be used
            to provide extra methods and properties to objects.
            Inheritance is a process through which an object may take
            on the traits and behaviors of another object. The
            [[Prototype]] of an object may typically be obtained and
            modified using the Object.getPrototypeOf and
            Object.setPrototypeOf methods. The proto method is now
            often used in modern languages to set it.
          </p>
        </div>
      </div>
      <div className="shadow-lg ">
        <div className="flex items-center mt-10 p-5">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://images.hugoboss.com/is/image/boss/hbeu50464138_543_350"
            alt=""
          />
          <div>
            <h1>Saili Ronmi</h1>
            <h1>Posted On 7th April,2021</h1>
          </div>
        </div>
        <div>
          <h1 className="sp-style font-bold text-center text-xl md:2xl text-blue-700 px-5">
            Why you do not set the state directly in React. For
            example, if you have const [products, setProducts] =
            useState([]). Why you do not set products = [...] instead,
            you use the setProducts
          </h1>

          <p className="sp-style p-3 md:p-10 text-md md:text-xl">
            Using setState allows you to move a state from one
            component to another without having to change the
            original. SetState is required for integrating an item
            into the current state (). Components that are stateful or
            stateless cannot be known by their parents and children,
            and they should not be concerned about whether or not they
            are defined as functions or classes. Any React component
            may have a state attached to it. A user action or a system
            event may cause the state of a component to change. If the
            component's state changes, React re-renders it. Before
            changing the state's value, it is important to create an
            initial state setup. To make changes to the object's
            current state, we use the setState() method. You may be
            sure that the component's current state has been
            maintained by requesting a re-render. If a synchronous
            call is performed to change an object's state, it may not
            be updated on the console at the right time.
          </p>
        </div>
      </div>
      <div className="shadow-lg ">
        <div className="flex items-center mt-10 p-5">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://cdn.cliqueinc.com/posts/248441/semi-formal-attire-for-women-248441-1517519019001-image.700x0c.jpg"
            alt=""
          />
          <div>
            <h1>July mon.</h1>
            <h1>Posted On 10th March,2021</h1>
          </div>
        </div>
        <div>
          <h1 className="sp-style font-bold text-center text-2xl text-blue-700 px-5">
            How will you improve the performance of a React
            Application??
          </h1>
          <p className="sp-style p-3 md:p-10 text-md md:text-xl">
            A React application may be made more efficient in a
            variety of ways. As an example, wherever possible, keep
            state of components local. Memorying React components to
            avoid unwanted re-renders is also a good strategy. In
            addition, dynamic imports in React allow for
            code-splitting (). React's virtualization of windows or
            lists. In React, photos may be loaded in a 'lazy' manner.
            Making Use of Structural Consistency. As many chunk files
            as you'd want
          </p>
        </div>
      </div>
      <div className="shadow-lg ">
        <div className="flex items-center mt-10 p-5">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2wCobKWax_TlhaZGEWSnLRvwlSTpPlvuWw&usqp=CAU"
            alt=""
          />
          <div>
            <h1>Alan jon</h1>
            <h1>Posted On 10th may,2021</h1>
          </div>
        </div>
        <div>
          <h1 className="sp-style font-bold text-center text-xl md:2xl text-blue-700 px-5">
            You have an array of products. Each product has a name,
            price, description, etc. How will you implement a search
            to find products by name?
          </h1>
          <p className="sp-style p-3 md:p-10 text-md md:text-xl">
            In order to discover a product by its name in an array, we
            will use array.find(). To get a truthy value, the
            callbackFn function is called once for each index in the
            array. If so, find returns the element's value instantly.
            Unless this is the case, find returns an error. For every
            index in the array, callbackFn is called, not only those
            that have been given values. If you use the callbackFn
            function offered by find, you may change the array that it
            is called on. Before the initial callbackFn activation,
            the items found by find are pre-set. Using Javascript's
            arr.find() function, you may obtain the value of the first
            member in an array that meets your criteria. If any of the
            array's items meet the criterion, the first one to meet it
            will print. Empty array items are not supported by this
            method, and it does not alter the original one..
          </p>
        </div>
      </div>
      <div className="shadow-lg ">
        <div className="flex items-center mt-10 p-5">
          <img
            className="w-10 h-10 rounded-full mr-3"
            src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/11530474/2020/3/2/20f7e2ea-7097-4f60-8af0-89928de666641583151745381-DENNISON-Men-Blue-Comfort-Regular-Fit-Solid-Formal-Shirt-346-1.jpg"
            alt=""
          />
          <div>
            <h1> Rock man.</h1>
            <h1>Posted On 11th September,2021</h1>
          </div>
        </div>
        <div>
          <h1 className="sp-style font-bold text-center text-2xl text-blue-700">
            What is a unit test? Why should write unit tests??
          </h1>
          <p className="sp-style p-5 md:p-10 text-md md:text-xl">
            Using JavaScript Unit Testing, a web page or web
            application module may be tested using JavaScript code.
            After that, it's included into the HTML as an inline event
            handler and tested in the browser to ensure that all of
            the needed features are available. These unit tests are
            then grouped together in a test suite for easy access.
            Unit testing in JavaScript is made easier by a variety of
            frameworks. The Unit.js library, for example, is a
            Javascript assertion library that runs on Node.js and the
            browser. For React and React Native web apps, Jest is a
            JavaScript-based open-source testing framework. With the
            Jest framework, this complexity may be greatly minimized.
            If you're using Mocha, Jasmine, Karma or protractor (a
            testing framework for Angular projects), you'll be able to
            use it with any of these frameworks. Node.js and
            browser-based test framework Mocha. Serial test execution
            in this framework simplifies asynchronous testing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
