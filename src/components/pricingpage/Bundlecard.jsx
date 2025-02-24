// import React from "react";
// import { FaCheckCircle } from "react-icons/fa";
// import { IoMdCloseCircle } from "react-icons/io";

// function Bundlecard(props) {
//   console.log(props.data);
//   return (
//     <div className="px-8 py-4 sm:w-auto sm:min-w-0 min-w-[400px] min-h-[400px] bg-sky-950 text-white flex flex-col items-center rounded-xl">
//       <h4 className="text-3xl mb-2 formal-font">{props.data.name}</h4>
//       <p className="text-xl text-yellow-500 mb-5 informal-font">
//         Starting at just ${props.data.price}
//       </p>
//       <a
//         className="bg-white text-xl text-center font-extralight text-sky-950 py-2 w-full rounded-full"
//         href="https://stunningangles.com"
//       >
//         Book Now
//       </a>

//       <ul className="sm:mt-5 mt-10 informal-font">
//         {props.data.services.map((service, i) => {
//           return (
//             <li key={i} className="flex items-center gap-2 mb-2">
//               {props.data.check[i] ? (
//                 <FaCheckCircle className=" text-green-600" />
//               ) : (
//                 <IoMdCloseCircle className=" text-zinc-400" />
//               )}
//               {service}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Bundlecard;
