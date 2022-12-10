import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 grid gap-5 w-4/5 mx-auto bg-info rounded-xl py-20'>
            <h1 className='text-5xl text-center mb-10 text-primary'>Questions & Answer</h1>

            <div className="collapse collapse-arrow w-4/5 mx-auto rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-xl bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does context api works?
                </div>
                <div className="collapse-content bg-primary text-primary-content pt-4 ">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow w-4/5 mx-auto rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-xl bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    What is the purpose of react router?
                </div>
                <div className="collapse-content bg-primary text-primary-content pt-4 ">
                    <p>React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing. React Router also gives us access to browser history features while maintaining the correct view of the application. React Router uses a component-based approach to routing. It provides different routing components as needed by the application.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow w-4/5 mx-auto rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  text-xl bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    About useRef()
                </div>
                <div className="collapse-content bg-primary text-primary-content pt-4 ">
                    <ul >
                        <li>The useRef Hook lets us create mutable variables inside functional components. There are three main key points that you should keep in mind when using the useRef Hook.</li>
                        <li>A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.</li>
                        <li>Refs can be used for accessing DOM nodes or React elements, and for storing mutable variables (like with instance variables in class components).</li>
                        <li>Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.</li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Blog;