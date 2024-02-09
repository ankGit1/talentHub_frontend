import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "material_info",
  initialState: {
    user_id: "",
    user_name: "",
    user_image: "",
  },
  reducers: {
    userSave: (state, action) => {
      state.user_id = action.payload.id;
      state.user_name = action.payload.name;
      state.user_image = action.payload.img;
    },
  },
});

export const { userSave } = userSlice.actions;

export default userSlice.reducer;
