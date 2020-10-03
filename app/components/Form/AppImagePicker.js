import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import ImageInput from "../ImageInput";
import ErrorMessage from "../ErrorMessage";

export default function AppImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <React.Fragment>
      <ImageInput
        imageUri={values[name]}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
