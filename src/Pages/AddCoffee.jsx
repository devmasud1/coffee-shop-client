import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
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

    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };
  return (
    <div
      className="bg-cover bg-center h-full py-10"
      style={{
        backgroundImage: `url(https://i.ibb.co/MMMFQF3/add-Coffee-BG.png)`,
      }}
    >
      <div className="bg-[#F4F3F0] max-w-[1440px] mx-auto py-10">
        <div className="w-1/2 mx-auto text-center">
          <h1 className="text-3xl font-bold text-[#374151] my-4">
            Add New Coffee
          </h1>
          <p className="text-[#374151]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <div className="w-3/4 mx-auto my-5">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-10 my-2">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="text-xl font-medium">Name</span>
                </label>
                <label className="input-group">
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="font-medium">Chef</span>
                </label>
                <label className="input-group">
                  <input
                    required
                    type="text"
                    name="chef"
                    placeholder="Enter Coffee chef"
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
                    required
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee Supplier"
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
                    required
                    type="text"
                    name="taste"
                    placeholder="Enter Coffee Taste"
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
                    required
                    type="text"
                    name="category"
                    placeholder="Enter coffee Category"
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
                    required
                    type="text"
                    name="details"
                    placeholder="Enter Coffee Details"
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
                    required
                    type="text"
                    name="photo"
                    placeholder="Enter Photo URL"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="font-medium">Price</span>
                </label>
                <label className="input-group">
                  <input
                    required
                    type="text"
                    name="price"
                    placeholder="Enter Coffee Price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <input
              className=" btn btn-block btn-neutral  mt-8"
              type="submit"
              value="Add Coffee"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
