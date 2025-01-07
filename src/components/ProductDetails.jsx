import React from 'react';

const ProductDetails = ({data}) => {
    const {description, info} = data.fields.product.fields


  return (<>
    <section className='flex flex-col md:flex-row my-8 md:px-20 lg:my-28 xl:my-30'>
      <div className='lg:w-[50%] px-10 lg:px-28 pt-20 lg:pt-10'>
        <h3 className='font-bold text-xl tracking-wider'>Description</h3>
        <a id="description-anchor"></a>
        <p className='py-8'>{description}</p>
      </div>

      <div className="lg:w-[50%]  pt-20 lg:pt-0">
          <div className="join join-vertical w-full py-8 px-20">
            {Object.entries(info).map(([section, attributes], index) => (
              <div key={index} className="collapse collapse-arrow join-item border-b">
                <input type="radio" name="accordion"/>
                <div className="collapse-title text-xl font-bold uppercase">{section}</div>
                <div className="collapse-content flex">
                <div className="text-left">
                    {Object.entries(attributes).map(([key, value], subIndex) => (
                      <p key={subIndex} className="mb-2">
                        <span className="mr-2 font-bold">{key}:</span>
                        <span>{value}</span>
                      </p>
                    ))}
                </div>
              </div>
              </div>
            ))}
          </div>
      </div>

    </section>
    </>
  );
}

export default ProductDetails;
