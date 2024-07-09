import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { queryData } from "../../services/fetch-data";

export const fetchPrices = createAsyncThunk(
  "price/fetchPrices",
  async (_, thunkAPI) => {
    try {
      const { prices } = await queryData(
        "prices",
        "type price offers description color"
      );

      return prices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFaqs = createAsyncThunk(
  "price/fetchFaqs",
  async (_, thunkAPI) => {
    try {
      const { faqType } = await queryData("faqType", "question answer", {
        type: "price",
      });
      return faqType;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const priceSlice = createSlice({
  name: "price",
  initialState: {
    prices: [],
    faqs: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPrices.fulfilled, (state, { payload }) => {
      state.prices = payload;
    });
    builder.addCase(fetchPrices.rejected, (_, { payload }) =>
      console.error(payload)
    );
    builder.addCase(fetchFaqs.fulfilled, (state, { payload }) => {
      state.faqs = payload;
    });
    builder.addCase(fetchFaqs.rejected, (_, { payload }) => {
      console.error(payload);
    });
  },
});

export default priceSlice.reducer;
