import Button from "../../components/Button.tsx";
import Checkbox from "../../components/Checkbox.tsx";
import Label from "../../components/Label.tsx";
import Radio from "../../components/Radio.tsx";

export default function index() {
  return (
    <div class={"mb-20"}>
      <div class={"text-4xl text-center mb-10 mt-10"}>Add Product</div>
      <div class={"flex justify-center"}>
        <div class="form-control w-full max-w-xs">
          <form
            class={"form-control"}
            method={"post"}
            encType="multipart/form-data"
          >
            <Label name={"Product Name"} />
            <input
              type="text"
              placeholder="Enter your username"
              class="input input-bordered w-[450px] max-w-screen-lg"
              name="product"
              id="product"
            />
            <Label name={"Product Description"} />
            <textarea
              placeholder="Enter your email address"
              className="input input-bordered w-[450px] max-w-screen-lg h-44"
              name="description"
              id="description"
            />
            <Label name={"Select Unit"} />
            <select className="input input-bordered w-[450px] max-w-screen-lg">
              <option>Unit 1</option>
              <option>Unit 2</option>
              <option>Unit 3</option>
              <option>Unit 4</option>
              <option>Unit 5</option>
            </select>
            <Label name={"Select Role"} />
            <div className="flex gap-12">
              <Checkbox name={"For Users"} />
              <Checkbox name={"Private Users"} />
            </div>
            <div className="flex gap-12">
              <Checkbox name={"VIP Users"} />
              <Checkbox name={"Select Later"} />
            </div>
            <Label name={"Select Platform"} />
            <div className="flex items-center gap-6">
              <Label name={"E-commerce"} />
              <Radio checked={true} />
              <Label name={"Normal"} />
              <Radio checked={false} />
            </div>
            <Label name={"Select Picture"} />
            <input
              type="file"
              className="file-input file-input-bordered w-[450px] max-w-screen-lg mb-4"
              name="image"
              accept="image/*"
            />
            <Button name={"Add"} />
          </form>
        </div>
      </div>
    </div>
  );
}
