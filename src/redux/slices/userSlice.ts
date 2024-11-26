import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  email: string;
  contact: string;
  fullName: string;
  employeeImage: string;
  positionId: number;
  outletId: number;
  isVerified: boolean;
  Position: {
    position: string;
  };
  Outlet: {
    outletName: string;
  };
}

const initialState: UserState = {
  id: 0,
  email: "",
  contact: "",
  fullName: "",
  employeeImage: "",
  positionId: 0,
  outletId: 0,
  isVerified: false,
  Position: {
    position: "",
  },
  Outlet: {
    outletName: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.contact = action.payload.contact;
      state.fullName = action.payload.fullName;
      state.employeeImage = action.payload.employeeImage;
      state.positionId = action.payload.positionId;
      state.outletId = action.payload.outletId;
      state.isVerified = action.payload.isVerified;
      state.Position = { position: action.payload.Position.position };
      state.Outlet = { outletName: action.payload.Outlet.outletName };
    },
    
    logoutAction: (state) => {
      state.id = 0;
      state.email = "";
      state.contact = "";
      state.fullName = "";
      state.employeeImage = "";
      state.positionId = 0;
      state.outletId = 0;
      state.isVerified = false;
      state.Position = {
        position: "",
      };
      state.Outlet = {
        outletName: "",
      };

    },
  },
});

export const { loginAction, logoutAction } = userSlice.actions;

export default userSlice.reducer;