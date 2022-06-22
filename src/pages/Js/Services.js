import img3 from '../../assets/Digital-Marketing.jpg';
import img2 from '../../assets/graphycs.png';
import img1 from '../../assets/webdesign.png';

const Services = () => {
  return (
    <div id="service" className="grid grid-cols-1 md:grid-cols-3">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img1}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title">Web design</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img2}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title">Graphycs design</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src={img3}
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body text-left">
          <h2 class="card-title">Digital marketing</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
