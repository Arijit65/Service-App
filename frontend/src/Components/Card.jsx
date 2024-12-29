
//DEFAULT IMAGE SIZED CARDS
// import React from 'react'


// const Card = ({ title, description, image }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
//       <img className="w-full" src={image} alt={title} />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{title}</div>
//         <p className="text-gray-700 text-base">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;


// BIG SIZED CARDS
// import React from 'react';

// const Card = ({ title, description, image }) => {
//   return (
//     <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-lg m-4">
//       <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
//         <img className="h-full w-full object-cover" src={image} alt={title} />
//       </div>
//       <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//         <div className="mb-8">
//           <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
//           <p className="text-gray-700 text-base">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

//SMALLER CARDS

import React from 'react';

const Card = ({ title, description, image }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer">
      <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
