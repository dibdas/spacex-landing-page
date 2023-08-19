import { configureStore } from "@reduxjs/toolkit";
import dataConfigReducer from "./slices/dataConfigSlice";

export default configureStore({
  reducer: {
    dataConfigReducer,
  },
});

// export default store;
