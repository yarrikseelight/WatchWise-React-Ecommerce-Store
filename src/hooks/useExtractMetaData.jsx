export const useExtractMetaData = (items) => {
    const colors = new Set();
    const brands = new Set();
    const categories = new Set();
    
    items.forEach((item) => {
        const productFields = item.fields;
        
        if (productFields.color) {
            colors.add(productFields.color.fields.name);  
        }
        
        if (productFields.brand) {
            brands.add(productFields.brand); 
        }

        if (productFields.product.fields.category[0].fields.categoryName) {
            categories.add(productFields.product.fields.category[0].fields.categoryName)
        }


    });

    return {
        colors: Array.from(colors),
        brands: Array.from(brands),
        categories: Array.from(categories),
    };
};


