import React from "react";
import Layout from "../pages/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6">
          <img
            src="/images/contact.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <div class="text1">
          <h1 className="bg-black p-5 text-white text-center">CONTACT US</h1>
          </div>
          <p className="text-justify mt-4 ">
            Any query and info about product feel free to call anytime we 24x7 available.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@shoppingecart.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 6397105508
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
