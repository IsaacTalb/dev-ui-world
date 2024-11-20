import React from 'react';


const Aside = () => {
  return (
    <aside className="bg-gray-100 p-4 w-1/4">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500">
              Side Bar
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500">
              Navigation
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500">
              Footer
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
