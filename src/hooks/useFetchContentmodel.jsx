import { useQuery } from '@tanstack/react-query';
import { contentfulClient } from "../API/contentfulClient.js";


export const useFetchContentmodel = ( content_model, filters={} ) => {
    return useQuery({
        queryKey: ["contentModel", content_model, filters], 
        queryFn: async () => {
            // Build the query object based on provided filters
            const query = {
                content_type: content_model,
                include: 2, 
            };
            if (filters.brand) {
                query["fields.brand"] = filters.brand 
            }

        const response = await contentfulClient.getEntries(query);
        const data = response.items;
        
        //filter rest of the parameters client side
        if (filters.color && filters.category) {
            return data.filter(item =>
              item.fields.color?.fields?.name === filters.color &&
              item.fields.product?.fields?.category[0]?.fields?.categoryName === filters.category
            );
          }
          if (filters.color) {
            return data.filter(item => item.fields.color?.fields?.name === filters.color);
          }
          if (filters.category) {
            return data.filter(item =>
              item.fields.product?.fields?.category[0]?.fields?.categoryName === filters.category
            );
          }
        return data;
        },
        staleTime: 1000 * 60 * 5, 
        cacheTime: 1000 * 60 * 10, 
        keepPreviousData: true,
    });
};
