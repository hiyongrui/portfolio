import axios from "axios";
import React, { useState } from "react";

function setQuotes() {
    axios.get("https://quotes.rest/qod").then(res => {
        // setQuote(res.data.contents.quotes[0].quote);
        // this.setState({quote:1})
        // const quotes, setQuotes = useState()
    })
}

const About = () => {
    return (
      <section className="bg-secondary px-5 py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto text-white">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
            About me
          </h2>
          <p>
            I am currently learning reactJS.
            I have learnt HTML, CSS, Javascript and Python and I am on a journey to learn reactJS.

          </p>
  
          <p className="py-2">
            <span className="font-bold">Email:</span> yongrui.tan.2022@scis.smu.edu.sg
          </p>

          {/* <p className="py-2"> */}
          {/* <button onClick={setQuotes()} */}
          {/* className='btn bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent'>Quote of the day:</button> */}
            {/* <span className="font-bold">Quote of the day:</span> */}
            {/* {{quote}} */}
          {/* </p> */}
        </div>
        
      </section>

      
    );
  };
  
  export default About;