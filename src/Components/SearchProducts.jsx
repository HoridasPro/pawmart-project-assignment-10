// import React, { useEffect, useState } from "react";
 
// import AllCart from "../AllCart/AllCart";
// import loadingImg from "../../assets/logo.png";
// import { IoSearch } from "react-icons/io5";
// import ErrorPage from "../ErrorPage/ErrorPage";
// const  SearchProducts = () => {
//   const [apps] = useHooks();
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [searchApp, setSearchApp] = useState([]);
//   const [searchloading, setsearchLoading] = useState(false);
//   const termLowToCase = search.trim().toLowerCase();
//   useEffect(() => {
//     setsearchLoading(true);
//     const timer = setTimeout(() => {
//       if (termLowToCase) {
//         const filter = apps.filter((app) =>
//           app.title.toLowerCase().includes(termLowToCase)
//         );
//         setSearchApp(filter);
//       } else {
//         setSearchApp(apps);
//       }
//       setsearchLoading(false);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, [termLowToCase, apps]);
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//     return () => clearTimeout(timer);
//   }, []);
//   return (
//     <>
//       <div className="text-center mt-5 mb-7 max-w-6xl mx-auto md:px-0 px-3">
//         <h1 className="text-[45px] font-bold text-[#001931] leading-[55px]">
//           Our All Applications
//         </h1>
//         <p className="text-[18px] font-normal text-[#627382]">
//           Explore All Apps on the Market developed by us. We code for Millions
//         </p>



//         <div className="flex md:justify-between flex-col md:flex-row mt-5 ">
//           <h3 className="text-[#001931] text-[22px] font-semibold">
//             {searchApp.length} Apps Found
//           </h3>
//           <div className="relative">
//             <IoSearch className="absolute md:left-[12px] left-[100px]  md:translate-y-9/10 translate-y-12/9 text-gray-500" />

//             <input
//               onChange={(e) => setSearch(e.target.value)}
//               className=" mt-2 md:mt-0  pl-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9F62F2]"
//               type="text"
//               placeholder="Search"
//             />
//           </div>
//         </div>



        
//       </div>
//       <div className="max-w-6xl mx-auto my-10">
//         {loading ? (
//           <div className="flex justify-center items-center h-[150px]">
//             <img
//               src={loadingImg}
//               alt="loading"
//               className="w-24 h-24 animate-spin"
//             />
//             <h2 className="text-2xl font-semibold text-gray-600">
//               Loading apps...
//             </h2>
//           </div>
//         ) : (
//           <>
//             {!searchloading ? (
//               searchApp.length>0?<div className="grid md:grid-cols-4 grid-cols-1 gap-5">
//                 {searchApp.map((allCart) => (
//                   <AllCart key={allCart.id} allCart={allCart}></AllCart>
//                 ))}
//               </div>:<ErrorPage></ErrorPage>
//             ) : (
//               <div className="flex justify-center items-center h-[300px]">
//                 <img
//                   src={loadingImg}
//                   alt="loading"
//                   className="w-24 h-24 animate-spin"
//                 />
//                 <h2 className="text-2xl font-semibold text-gray-600">
//                   Loading apps...
//                 </h2>
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   );
// };

// export default  SearchProducts;
