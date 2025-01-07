import { useQuery } from '@tanstack/react-query';
import { contentfulClient } from "../API/contentfulClient.js";

export const useFetchItem = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await contentfulClient.getEntry(id, {
        include: 10,
      });
      return response
    },
    staleTime: 1000 * 60 * 5, 
    cacheTime: 1000 * 60 * 15,
    keepPreviousData: true, 
  })
};
