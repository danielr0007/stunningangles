import React from "react";
import { Link } from "gatsby";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

function thankyoupagetwo() {
  return (
    <>
      <Helmet>
        {/* HOTJAR........................... */}
        <script>
          {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3801883,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
        </script>

        {/* Google analytics........................ */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQLQGED39F"
        ></script>
        <script>
          {` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZQLQGED39F');`}
        </script>

        {/* <!-- Google tag CONVERSIONS (gtag.js)............................. --> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11418107590"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11418107590');`}
        </script>

        {/* <!-- Google tag (gtag.js) event --> */}
        <script>
          {` gtag('event', 'conversion_event_purchase_1',
          {
            // <event_parameters>
          }
          );`}
        </script>
      </Helmet>
      <div className="thankyou-body">
        <div className="message">
          <div>
            <FaCheckCircle className="icon m-auto" />
          </div>

          <h1>Thank You! Your purchase is complete.</h1>

          <p>
            To visit the booking page{" "}
            <a
              className=" text-indigo-800"
              href="https://portal.spiro.media/order/stunning/valentine-special-offer"
            >
              ***click here***
            </a>
            . Once there, select the package and fill in the required
            information. At the end you'll have a space to put in your coupon
            code. <br />
            <br />
            Your code is:{" "}
            <span className="text-xl text-pink-700">valentinesdeal</span> <br />
            <br />
            This will bring down the price to $0 and then proceed to finalize
            the booking. <br /> Book over the phone by calling ‪(407) 815-4882‬
          </p>
        </div>

        <Link to="/">Back to home page</Link>
      </div>
    </>
  );
}

export default thankyoupagetwo;
