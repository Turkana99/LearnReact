  import axios from "axios";
  const searchImgaes = async (term) => {
    const response =  await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID GiCoSe0l_Om9TzL5bJEJQVO_XS2-DSpvwnO8A9_lv5A",
      },
      params: {
        query: term,
      },
    });
    // /* eslint-disable no-debugger */
    // debugger;
    // /* eslint-enable no-debugger */
    return response.data.results;
  };

  export default searchImgaes;