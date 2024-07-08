import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { queryData } from "../../services/fetch-data";

export const fetchFeatures = createAsyncThunk(
  "home/fetchFeatures",
  async (_, thunkAPI) => {
    try {
      const { features } = await queryData(
        "features",
        "_id feature description icon"
      );

      return features;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFaqs = createAsyncThunk(
  "home/fetchFaqs",
  async (_, thunkAPI) => {
    try {
      const { faqType } = await queryData(
        "faqType",
        "_id question answer type",
        { type: "common" }
      );

      return faqType;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    features: [],
    faqs: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFeatures.fulfilled, (state, { payload }) => {
      state.features = payload;
    });
    builder.addCase(fetchFeatures.rejected, (_, { payload }) => {
      console.error(payload);
    });
    builder.addCase(fetchFaqs.fulfilled, (state, { payload }) => {
      state.faqs = payload;
    });
    builder.addCase(fetchFaqs.rejected, (_, { payload }) => {
      console.error(payload);
    });
  },
});

export default homeSlice.reducer;
