import { useForm } from "react-hook-form";
import img from "../../assets/creative server 24, graphics design,web design, digital marketing.jpg";

const AboutUs = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg">
          <img src={img} alt="" />
        </div>
        <div className="flex items-center">
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Type your name"
              class="input input-bordered input-primary w-full max-w-xs"
              {...register("lastName")}
            />
            <br />
            <input
              placeholder="Type your massage"
              class="input input-bordered input-primary w-full max-w-xs my-4 h-56"
              type="text"
              {...register("age")}
            />
            <br />
            <input className="btn btn-primary px-10" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
