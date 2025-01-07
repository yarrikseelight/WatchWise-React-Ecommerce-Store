import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, breadcrumbs, img }) => {
  return (
    <header>
      <div className='max-w-screen flex flex-col items-center justify-center h-[30vh]' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center' }}>
        <div className='bg-[#ffffffab] flex flex-col items-center justify-center px-10 rounded-md'>
          <h2 className='text-4xl font-bold p-2 rounded'>{title}</h2>
          <div className="breadcrumbs text-sm">
            <ul className='text-md font-medium'>
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index}>
                  {breadcrumb.url ? <Link to={breadcrumb.url}>{breadcrumb.label}</Link> : breadcrumb.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
