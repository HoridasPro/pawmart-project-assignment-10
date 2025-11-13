// import React, { useContext } from "react";
// import AuthContext from "../AuthContext/AuthContex";
// import { toast } from "react-toastify";
// import { useLoaderData } from "react-router";
// // import Loading from "../Components/Loading";

// const UpdatedProduct = ({handleUpdatedProduct}) => {
//   console.log(handleUpdatedProduct);
//   const updateProduct = useLoaderData();
//   console.log(updateProduct);
 

  

//   const { user } = useContext(AuthContext);
//   const handleAddListing = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const category = form.category.value;
//     const price = form.price.value;
//     const location = form.location.value;
//     const description = form.description.value;
//     const photo = form.photoURL.value;
//     // const date = form.date.value;
//     const email = form.email.value;
//     const newUpdatedProduct = {
//       productName: name,
//       category: category,
//       price: price,
//       location: location,
//       description: description,
//       photo: photo,
//       date: date,
//       email: email,
//     };
//     handleUpdatedProduct()

//     fetch(`http://localhost:3000/addListing/${_id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newUpdatedProduct),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("after posting the data", data);
//         toast.success("Add data successfull");
//         e.target.reset();
//       });
//   };
//   return (
//     <div className="hero bg-base-200">
//       <div className="hero-content flex-col">
//         <div className="text-center lg:text-left">
//           <h1 className="text-3xl font-bold">Update Add Listing</h1>
//         </div>
//         <div className="card bg-base-100 shrink-0 shadow-2xl">
//           <div className="card-body">
//             <form onSubmit={handleAddListing}>
//               <fieldset className="fieldset grid gap-10 ">
//                 <div className="flex gap-5 items-center">
//                   <div>
//                     <label className="label">Product Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       className="input"
//                       placeholder="name"
//                       defaultValue={updateProduct?.productName}
//                       required
//                     />
//                   </div>

//                   <fieldset className="fieldset w-[50%]">
//                     <label className="label">Category</label>
//                     <select
//                       defaultValue="Pick a browser"
//                       name="category"
//                       className="select"
//                     >
//                       <option>Pets</option>
//                       <option>Food</option>
//                       <option>Accessories</option>
//                       <option>Care Products</option>
//                     </select>
//                   </fieldset>
//                 </div>

//                 <div className="flex justify-between">
//                   <div className="">
//                     <label className="label">Price</label>
//                     <input
//                       type="number"
//                       name="price"
//                       className="input"
//                       placeholder="0 if pet is selected"
//                       defaultValue={updateProduct?.price}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="label ml-3">Location</label>
//                     <input
//                       type="text"
//                       name="location"
//                       className="input ml-3"
//                       placeholder="location"
//                       defaultValue={updateProduct?.location}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="flex gap-5">
//                   <div className="w-[50%]">
//                     <label className="label">Description</label>
//                     <input
//                       type="text"
//                       name="description"
//                       className="input"
//                       placeholder="description"
//                       defaultValue={updateProduct?.description}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="label">Image</label>
//                     <input
//                       type="text"
//                       name="photoURL"
//                       className="input"
//                       placeholder="photoURL"
//                       defaultValue={updateProduct?.photo}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="flex justify-between">
//                   <div className="w-[50%]">
//                     <label className="label">Date</label>
//                     <input
//                       type="date"
//                       name="date"
//                       className="input"
//                       placeholder="date"
//                       defaultValue={updateProduct?.date}
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label className="label ml-3">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       className="input ml-3"
//                       placeholder="email"
//                       defaultValue={user?.email}
//                       readOnly
//                       required
//                     />
//                   </div>
//                 </div>

//                 <button className="btn btn-neutral mt-4">Update Listing</button>
//               </fieldset>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdatedProduct;
