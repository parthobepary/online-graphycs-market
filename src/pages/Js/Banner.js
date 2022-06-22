import cover from "../../assets/cover.jpeg";
import '../Css/banner.css';

const Banner = () => {
  return (
    <div id="home" className="banner-height">
      <div
        class="hero min-h-screen banner-height"
        style={{ backgroundImage: `url(${cover})`}}
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
            <button class="btn btn-primary">Go to facebook page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
