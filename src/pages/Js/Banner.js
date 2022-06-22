import cover from "../../assets/cover.jpeg";
import "../Css/banner.css";

const Banner = () => {
  return (
    <div id="home" className="mb-10">
      <div
        class="hero min-h-screen banner-height"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div class="hero-overlay bg-opacity-40"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-2xl font-bold">Hello there</h1>
            <p class="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="https://www.facebook.com/Creativeserver24/" target='blank' class="btn btn-primary">Go to facebook page</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
