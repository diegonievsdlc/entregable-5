import { configureStore } from "@reduxjs/toolkit";
import name from "./slices/name.slice";
import item from "./slices/item.slice";
import theme from "./slices/theme.slice";

export default configureStore({
  reducer: {
    name,
    item,
    theme,
  },
});
