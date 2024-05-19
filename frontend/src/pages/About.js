import React from "react";
import Layout from "../pages/Layout";
const Contact = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus ">
        <div className="col-md-6">
          <div class="text3">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
          </div>
        </div>
        <div className="col-md-4">
          <div class="text1">
          <h1 className="bg-black p-5 text-white text-center">ABOUT US</h1>
          </div>
          <p className="text-justify mt-4 ">
          Our Mission Is Deliver You The Best Within Time!
          <div class="who">
                  <p>Launched in Uttarakhand city Haldwani within 1 month.
                     Shopping E-Cart is small scale project of ordering product online
                     We not only connect people to product in every context but work 
                     closely with small scale shops to enable a sustainable ecosystem.</p>
                    <div class="bul">
                      <h1> Language Used in Making project-:</h1>
                        <ul>
	                       <li>Front-End-: HTML, CSS, JAVASCRIPT, REACT.</li>
	                       <li>Back-End-: MONGODB, EXEPRESS, NODE.</li>
                       </ul>
                    </div>
                    <div class="call">
                         <h1>OUR MOTO IS:</h1>
                         <ul>	
	                        <li>ALWAYS BE ON TIME</li>
	                        <li>DELIVER GOOD QUALITY PRODUCT AT YOUR DOOR</li>
	                        <li>PACKING OF PRODUCT IS EXCELLENT</li>
	                        <li>GIVING YOU THE BEST PRODUCT</li>
                         </ul>
                         </div>
              </div>

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
