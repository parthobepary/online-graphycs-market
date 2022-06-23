import cover from "../../assets/cover.jpeg";
import "../Css/banner.css";

const Banner = () => {
  return (
    <div data-aos="fade-right" id="home" className="mb-10 bg-black">
      <div
        class="hero min-h-screen banner-height"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold text-red-700">Creative server 24</h1>
            <hr />
            <p class="mb-5 text-2xl font-bold">
              We are top class organizer . We provide best design. we are the best company of Bangladesh since 2021. 
            </p>
            <a href="https://www.facebook.com/Creativeserver24/" target='blank' class="btn btn-primary">Go to facebook page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
