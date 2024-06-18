import React from "react";


function Loading() {
  
  return(
  <>
    <div className="flex p-4 items-center justify-center content-center dark:bg-gray-900">
        <div className="p-4 text-md font-medium leading-none text-center text-red-800 bg-red-200 rounded-full animate-pulse dark:bg-red-900 dark:text-red-200">Carregando...</div>
    </div>
  </>
  );

}

export default Loading;