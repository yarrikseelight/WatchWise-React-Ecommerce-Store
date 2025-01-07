import React, { useState, useEffect } from 'react';
import img from "../assets/headerimg.jpg";
import { PageHeader, FiltersSection} from "../components/index.js";
import { useFetchContentmodel } from '../hooks/useFetchContentmodel.jsx';
import { Link } from 'react-router-dom';
import { FaList } from "react-icons/fa6";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { useExtractMetaData } from '../hooks/useExtractMetaData'
import { useLocation } from 'react-router-dom';

const Products = () => {
  const [gridView, setGridView] = useState(true);
  const [filters, setFilters] = useState({});
  const [metaData, setMetadata] = useState({ brands: [], colors: [], categories: []});
  const [metadataFetched, setMetadataFetched] = useState(false);
  const {data, isError, isLoading } = useFetchContentmodel('variant', filters);
  const location = useLocation();

  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Shop' }
  ];

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

//Fetching the metadata to render filter options
  useEffect(() => {
    const fetchMetaData = async () => {
      if (data && !metadataFetched) { // Ensure metadata is extracted only once
        const extractedMetaData = await useExtractMetaData(data); // Extract from data
        setMetadata(extractedMetaData);
        setMetadataFetched(true); // Mark metadata as fetched
      }
    };
    fetchMetaData();
  }, [data, metadataFetched]); 

  
 //useEffect for automatically filtering category if entering from home page
  useEffect(() => {
    if (metadataFetched) {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category');
        if (category) {
          setFilters((prevFilters) => ({
            ...prevFilters,
            category: category
          }));
        }
      }
  }, [location, metadataFetched]);
  



  
  if (isLoading) {
    return (
      <main className='flex flex-col items-center justify-center h-screen'>
        <span className="loading loading-spinner loading-lg"></span>
      </main>
    );
  }

  if (isError) {
    return (
      <main className='flex flex-col items-center justify-center'>
        <h4 className='py-10 text-2xl'>Error loading products...</h4>
      </main>
    );
  }

  return (
    <>
      <PageHeader title="Store" breadcrumbs={breadcrumbs} img={img}></PageHeader>
      <FiltersSection data={data} gridView={gridView} setGridView={setGridView} setFilters={setFilters} filters={filters} metaData={metaData}></FiltersSection>
      <main>
        <section>
            <div className='flex items-center  justify-center gap-20 pt-5 '>
                {data.length == 0 ? <p className='text-red-600'> No results</p> : <p> Showing 1-{data.length} out of {data.length} items</p>}
                <div className='hidden md:block'>
                    <button className='text-xl px-2'><FaList onClick={()=>setGridView(false)}/></button>
                    <button className='text-xl px-2'><BsFillGrid3X3GapFill onClick={()=>setGridView(true)} /></button>
                </div>   
            </div>
          </section>
         
        <section className='flex justify-center'>

{/* gridview */}
          {gridView ? (
            <div className='pt-8 w-screen xl:max-w-[80%] 2xl:max-w-[80%] 3xl:max-w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 place-items-center'>
              {data.map((item) => {
                const { images, product, ref, brand, price, originalPrice } = item.fields;
                const id = item.sys.id;

                return (
                  <div key={id} className="w-72 shadow-md duration-500 my-5 relative hover:opacity-60">
                    <Link to={`/products/${id}`}>
                      <img src={images[0].fields.file.url} alt="Product" className="h-80 w-72 object-cover" />
                      <div className="px-4 py-3 w-72">
                        <span className="mr-3 uppercase text-xs">{brand}</span>
                        <p className="text-lg font-bold truncate block capitalize">{product.fields.name}</p>
                        <p className="text-md truncate block capitalize">{ref}</p>
                        <div className="flex items-center">
                          <p className="text-lg font-semibold cursor-auto my-3">{price}€</p>
                          <del>
                            <p className="text-sm text-gray-600 cursor-auto ml-2">{originalPrice}</p>
                          </del>
                        </div>
                      </div>
                    </Link>
                  </div>
                );})}
              </div>
          ) 
          :
          (
//list view
            <div className='pt-10 w-screen xl:max-w-[80%] 2xl:max-w-[80%] 3xl:max-w-[70%] flex flex-col gap-5'>
              {data.map((item) => {
                const { images, product, ref, brand, price, originalPrice } = item.fields;
                const id = item.sys.id;

                return (
                <div key={id}>
                <Link to={`/products/${id}`}>
                  <div className="flex items-center shadow-md box-shadow my-3 p-4">
                    <img src={images[0].fields.file.url} alt="Product" className="h-40 w-40 object-cover" />
                    <div className="ml-4">
                      <span className="mr-3 uppercase text-xs">{brand}</span>
                      <p className="text-lg font-bold truncate block capitalize">{product.fields.name}</p>
                      <p className="text-md truncate block capitalize">{ref}</p>
                      <div className="flex items-center">
                        <p className="text-lg font-semibold cursor-auto my-3">{price}€</p>
                        <del>
                          <p className="text-sm text-gray-600 cursor-auto ml-2">{originalPrice}</p>
                        </del>
                      </div>
                    </div>
                  </div>
                </Link>
                </div>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default Products;
