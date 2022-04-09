import { createSlice } from '@reduxjs/toolkit';
import { getOnlineUsers } from 'services/onlineUsers.service';

const initialState = {
  value: 0,
  isLoading: false,
  error: '',
};

export const onlineUsersSlice = createSlice({
  name: 'onlineUsers',
  initialState,
  reducers: {},
  extraReducers: {
    [getOnlineUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getOnlineUsers.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.value = action.payload;
    },
    [getOnlineUsers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default onlineUsersSlice.reducer;
