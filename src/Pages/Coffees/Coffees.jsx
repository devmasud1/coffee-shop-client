import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AiOutlineEye } from 'react-icons/ai';
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md';


const Coffees = ({ coffee, updateCoffee, setUpdateCoffee }) => {
  const handleDeleteCoffee = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remainingCoffee = updateCoffee.filter(
                (item) => item._id !== id
              );
              setUpdateCoffee(remainingCoffee);
            }
          });
      }
    });
  };

  const { _id, name, chef, photo, price } = coffee || {};

  return (
    <>
      {updateCoffee ? (
        <div className="card card-side bg-base-100 shadow-xl ">
          <figure>
            <img src={photo} alt="Movie" className="w-[300px]" />
          </figure>
          <div className="w-full flex justify-between  gap-8 mx-5 py-3">
            <div className="space-y-2 text-lg">
              <h2>
                <strong>Name:</strong> {name}
              </h2>
              <p>
                <strong>Chef:</strong> {chef}
              </p>
              <p>
                <strong>Price:</strong> {price}
              </p>
            </div>
            <div className="card-actions">
              <div className="btn-group btn-group-vertical justify-end space-y-4">
                <Link to={`/coffeeDetails/${_id}`}>
                  <button className="btn">
                   
                    <AiOutlineEye className="text-2xl"></AiOutlineEye>
                    </button>
                </Link>

                <Link to={`/updateCoffee/${_id}`}>
                  <button className="btn">
                
                    <MdOutlineModeEdit className="text-2xl"></MdOutlineModeEdit>
                    </button>
                </Link>

                <button className="btn" onClick={() => handleDeleteCoffee(_id)}>
                 
                  <MdDeleteOutline className="text-2xl"></MdDeleteOutline>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-[70vh] flex justify-center items-center">
          <p className="text-5xl font-bold">No coffee available now !</p>
        </div>
      )}
    </>
  );
};

export default Coffees;
