import img3 from "../../assets/Digital-Marketing.jpg";
import img2 from "../../assets/graphycs.png";
import img1 from "../../assets/webdesign.png";

const Services = () => {
  return (
    <div id="service" className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure class="px-10 pt-10">
          <img src={img1} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body mx-auto">
          <h2 class="card-title">Web design</h2>
          <div class="card-actions mx-auto">
            <button class="btn btn-primary px-10">Enroll now </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure class="px-10 pt-10">
          <img src={img2} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body text-center mx-auto">
          <h2 class="card-title">Graphycs design</h2>
          <div class="card-actions mx-auto">
            <button class="btn btn-primary px-10">Enroll now </button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure class="px-10 pt-10">
          <img src={img3} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body text-center mx-auto">
          <h2 class="card-title">Digital marketing</h2>
          <div class="card-actions mx-auto">
            <button class="btn btn-primary px-10">Enroll now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
