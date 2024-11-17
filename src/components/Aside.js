import React from 'react';

const Aside = () => {
  return (
    <aside className="bg-gray-100 p-4 w-1/4">
      <nav>
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-500">
              Menu Item 1
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500">
              Menu Item 2
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="text-blue-500">
              Menu Item 3
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
