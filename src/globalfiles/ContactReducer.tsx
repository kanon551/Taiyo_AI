import {createSlice} from '@reduxjs/toolkit';
import { userContactInitialData } from './GlobalInterface';

const userContactSlice = createSlice({
    name: "UserContact",
    initialState: userContactInitialData,
    reducers: {

    },
});
