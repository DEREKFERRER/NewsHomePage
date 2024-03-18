
import MediaQuery from "react-responsive";
import web3 from "./../../assets/images/image-web-3-desktop.jpg";
import web3Mobile from "./../../assets/images/image-web-3-mobile.jpg";
import "./Future.css";
const Future = () => {
  return (
    <div className="web">
      <div>
        <MediaQuery minDeviceWidth={1224}>
          <img className="logo" src={web3} />
        </MediaQuery>

        <MediaQuery orientation="portrait">
          <img className="logoMobile" src={web3Mobile} />
        </MediaQuery>
        <div className="future">
          <h1>The Bright Future of Web 3.0? </h1>
          <div className="text">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="button">Read more</div>
          </div>
        </div>
      </div>
      <div className="right_text">
        <h1 className="right_new">New</h1>
        <div className="right_box">
          <h3 style={{}}>Hydrogen VS Electric Cars</h3>
          <p style={{color: "hsl(233, 8%, 79%)"}}>
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        {/*  */}
        <hr
          style={{
            color: "hsl(36, 100%, 99%)",
            marginTop: "23px",
            marginBottom: "23px"
          }}
        />
        <div className="right_box" style={{}}>
          <h3>The Downsides of AI Artistry</h3>
          <p style={{color: "hsl(233, 8%, 79%)"}}>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <hr
          style={{
            color: "hsl(36, 100%, 99%)",
            marginTop: "23px",
            marginBottom: "23px"
          }}
        />
        <div className="right_box">
          <h3>Is VC Funding Drying Up?</h3>
          <p style={{color: "hsl(233, 8%, 79%)"}}>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Future;
