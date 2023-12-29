import React from "react";
import { Link } from "gatsby";
import { FaCheckCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

function thankyoupageone() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.png" />
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

        {/* FACEBOOK DOMAIN VERIFICATION............... */}
        <meta
          name="facebook-domain-verification"
          content="ooxiek6thr6g7w1glt0z1r9hj1i4bo"
        />
      </Helmet>
      <div className="thankyou-body">
        <div className="message">
          <div>
            <FaCheckCircle className="icon" />
          </div>

          <h1>Thank You!</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime
            consequatur, quae maiores amet, suscipit ullam sit doloribus
            adipisci praesentium ducimus non. Natus, mollitia alias?
          </p>
        </div>

        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
}

export default thankyoupageone;
