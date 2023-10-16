import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeUpdate = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo, price } =
    coffee || {};
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.chef.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };

    fetch(` http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("coffee update successfully");
        }
      });
  };

  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/MMMFQF3/add-Coffee-BG.png)`,
      }}
    >
      <div className="max-w-[1440px] mx-auto">
        <Link to="/">
          <button className="text-3xl font-medium text-[#374151] mb-4 flex items-center gap-2 ml-2">
            {" "}
            <BsArrowLeft></BsArrowLeft> Back to home
          </button>
        </Link>

        <div className="bg-[#F4F3F0] py-10">
          <div className="w-1/2 mx-auto text-center">
            <h1 className="text-3xl font-bold text-[#374151] my-4">
              Update Existing Coffee Details
            </h1>
            <p>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <div className="w-3/4 mx-auto my-5">
            <form onSubmit={handleUpdate}>
              <div className="flex items-center justify-between gap-10 my-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="text-xl font-medium">Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="name"
                      defaultValue={name}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="text-xl font-medium">Chef</span>
                  </label>
                  <label className="input-group">
                    <input
                      defaultValue={chef}
                      type="text"
                      name="chef"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between gap-10 my-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="text-xl font-medium">Supplier</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="supplier"
                      defaultValue={supplier}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="font-medium">Taste</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="taste"
                      defaultValue={taste}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between gap-10 my-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="text-xl font-medium">Category</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="category"
                      defaultValue={category}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="font-medium">Details</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="details"
                      defaultValue={details}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between gap-10 my-2">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="text-xl font-medium">Photo</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="photo"
                      defaultValue={photo}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="text-xl font-medium">Price</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="price"
                      defaultValue={price}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
              </div>

              <input
                className=" btn btn-block btn-neutral  mt-8"
                type="submit"
                value="update"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeUpdate;
