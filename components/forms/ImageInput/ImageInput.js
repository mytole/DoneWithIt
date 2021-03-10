import React, { useState, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import * as ImagePicker from "expo-image-picker";

import styles from "./ImageInput.style";
import colors from "../../../config/colors";
import ImageGallery from "../../ImageGalleryGrid/ImageGallery";

export default function ImageInput({ onPress }) {
  /* const { setFieldTouched, handleChange, errors, touched } = useFormikContext(); */
  const [imageArray, setImageArray] = useState([]);
  const [zoobi, setZoobi] = useState(1);

  const handleOnPress = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);

      if (!result.cancelled) {
        const pluss = zoobi + 1;
        setZoobi(pluss);
        console.log("not canclled");
        const imageUri = result.uri;
        console.log("imageUri = ", imageUri);
        const newImageArray = [...imageArray];
        newImageArray.push(imageUri);
        console.log("newImageArray after push= ", newImageArray);
        setImageArray(newImageArray);
      }
    } catch (error) {}

    //shows the images to the left of the icon - should be array
  };

  return (
    <>
      <ImageGallery images={imageArray} />
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.container}>
          <MaterialCommunityIcons name="camera" size={50} color={colors.gray} />
        </View>
      </TouchableOpacity>
    </>
  );
}
