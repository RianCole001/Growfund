import "./AboutCompany.css";
import image1 from "../assets/images/image5.jpg"
const AboutCompany = () => {
  return (
    <section className="about-company py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          {/* Left Column: Text */}
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4">About GrowFund</h2>

            <p className="lead">
              GrowFund is a U.S.-based digital investment company focused on
              making high-growth asset classes accessible through secure
              technology.
            </p>

            <p>
              Our role is to manage investor capital across diversified markets,
              including cryptocurrency assets, structured growth plans, and real
              estate share ownership.
            </p>

            <div className="company-highlight mt-4 p-4 rounded shadow-sm">
              We combine risk management, market analytics, and transparent
              investment cycles to help investors grow capital responsibly.
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 text-center">
            <img
              src={image1} // ✅ Correct usage
              alt="GrowFund Team"
              className="img-fluid rounded about-img shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
