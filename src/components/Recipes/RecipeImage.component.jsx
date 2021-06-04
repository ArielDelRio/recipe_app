import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const RecipeImage = ({ image, title }) => {
  const [imageLoaded, setimageLoaded] = useState(false);

  return (
    <div>
      {imageLoaded ? null : <Skeleton height={220} />}
      <div className="recipes__box_image_container">
        <img
          style={imageLoaded ? {} : { display: "none" }}
          width="100%"
          height="220px"
          effect="blur"
          src={image}
          alt={title}
          onLoad={() => setimageLoaded(true)}
        />
      </div>
    </div>
  );
};

export default RecipeImage;
