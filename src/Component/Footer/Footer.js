import React from 'react';

function Footer(props) {
    return (
        <div className='container-fluid'>
             <h2> Deference between props and state  </h2> 
             <p> props: Props are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.</p> 
             <p> state: The state represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.  </p> 
             <h2>  how useState works </h2> 
             <p> useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value </p>
        </div>
    );
}

export default Footer;