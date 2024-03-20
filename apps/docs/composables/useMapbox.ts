export const useMapbox = () => {
  const config = useRuntimeConfig();
  const getSuggestions = async function (
    searchQuery: string,
    limit: number = 4,
    country: string = "tn"
  ) {
    return useFetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json`,
      {
        query: {
          country,
          limit,
          access_token: config.public.MAP_BOX_TOKEN,
        },
      }
    );
  };

  return {
    getSuggestions,
  };
};
