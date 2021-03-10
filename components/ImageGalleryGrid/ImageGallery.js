import React, { useState } from "react";
import { useEffect } from "react";
import { Image, View } from "react-native";

import styles from "./ImageGallery.style";

export default function ImageGallery({ images }) {
  const [renderedImages, setRenderedImages] = useState([]);

  useEffect(() => {
    if (images) {
      const newRenderedImages = images.map((image) => (
        <Image
          key={Math.random() * 1000}
          source={{ uri: image }}
          style={styles.image}
          resizeMode="stretch"
        />
      ));
      setRenderedImages(newRenderedImages);
    }
  }, [images]);
  return <View style={styles.container}>{renderedImages}</View>;
}
