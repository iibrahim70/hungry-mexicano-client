import { useRef } from 'react';
import Pdf from "react-to-pdf";

export default function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="react_document.pdf">
        {({ toPdf }) => (
          <div className='justify-center flex gap-5 items-center mt-10'>
            <h2 className='text-2xl font-semibold text-red-500 uppercase'>Click here to download the article</h2>
            <button onClick={toPdf} className="btn btn-success">
              Generate PDF
            </button>
          </div>
          
        )}
      </Pdf>
      <div ref={ref}>
        <div className="lg:w-4/5 mx-auto py-10">
          <div className='py-2'>
            <h2 className='capitalize text-xl font-bold'>Tell us the differences between uncontrolled and controlled components.</h2>
            <p className='text-justify'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
          </div>
          <div className='py-2'>
            <h2 className='capitalize text-xl font-bold'>How to validate React props using PropTypes?</h2>
            <p className='text-justify'>
              PropTypes.any : The prop can be of any data type. <br />
              PropTypes.bool : The prop should be a Boolean. <br />
              PropTypes.number : The prop should be a number. <br />
              PropTypes.string : The prop should be a string. <br />
              PropTypes.func : The prop should be a function. <br />
              PropTypes.array : The prop should be an array.</p>
          </div>
          <div className='py-2'>
            <h2 className='capitalize text-xl font-bold'>Tell us the difference between nodejs and express js.</h2>
            <p className='text-justify'>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
          </div>
          <div className='py-2'>
            <h2 className='capitalize text-xl font-bold'>What is a custom hook, and why will you create a custom hook?</h2>
            <p className='text-justify'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
          </div>
        </div>
      </div>
    </div>
  );
}




