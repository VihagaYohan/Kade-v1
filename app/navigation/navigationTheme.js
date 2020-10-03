import { DefaultTheme } from "@react-navigation/native";

import defaultStyle from "../config/style";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyle.colors.primaryColor,
    background: defaultStyle.colors.whiteColor,
  },
};
