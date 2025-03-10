import React from "react";
import { Link } from "gatsby";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

function thankyoupageone() {
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
      </Helmet>
      <div className="thankyou-body">
        <div className="message">
          <div>
            <FaCheckCircle className="icon" />
          </div>

          <h1>Thank You!</h1>

          <p>
            We will reach out to you shortly to go over the details of your
            shoot.
          </p>
        </div>

        <Link to="/">Back to home page</Link>
      </div>
    </>
  );
}

export default thankyoupageone;
