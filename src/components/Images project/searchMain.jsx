import SearchHeader from "./SearchHeader";
import searchImages from "../services/images";
import { useState } from "react";
import ImageList from "./imageList";

function SearchMain() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    // /* eslint-disable no-debugger */
    // debugger;
    // /* eslint-enable no-debugger */
    console.log(term);
    const result = await searchImages(term);
    setImages(result);
  };
  return (
    <div>
      <SearchHeader search={handleSubmit} />
      <ImageList imagePlacholder={images} />
    </div>
  );
}

export default SearchMain;
