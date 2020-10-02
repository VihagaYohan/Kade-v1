import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "../ErrorMessage";

export default function AppFormPicker({
  items,
  name,
  placehoder,
  width,
  PickerItemComponent,
  numberOfColumns,
}) {
  const { errors, setFieldTouched, touched, values } = useFormikContext();
  return (
    <React.Fragment>
      <AppPicker
        items={items}
        onSelecteditem={(item) => setFieldTouched(name, item)}
        placeholder={placehoder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
