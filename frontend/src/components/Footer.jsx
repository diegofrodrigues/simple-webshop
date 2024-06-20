import React from "react";

function Footer() {
  return(
    <footer className="sticky bg-white rounded-lg shadow dark:bg-gray-800 mx-4">
        <div className="w-full mx-auto p-4 md:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a className="hover:underline">Simple Webshop™</a>. By Diego.</span>
        </div>
    </footer>
  );
}

export default Footer