import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter"

const counter = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    status: '非同期ボタンをクリックしよう！'
  },
  reducers: {
    add(state, { type, payload }) {
      state.count = state.count + payload;
    },
    minus(state, { type, payload }) {
      state.count = state.count - payload;
    }
  },
  // reducerの中でも条件分岐が発生するようなものは下記のように記述する
  extraReducers: (builder) => {
    // 非同期処理の状態によって画面に表示される文言を定義している
    // 状態はロード中（pending）,成功して終了（fulfilled）,失敗して終了（rejected）で表す
    builder.addCase(addAsyncWithStatus.pending, (state) => {
      state.status = '読み込み中...'
    })
    // ここでの引数payloadはaddAsyncWithStatusがreturnで返した値がpayloadに格納されているので、それを用いてカウントアップする
    .addCase(addAsyncWithStatus.fulfilled, (state, {payload}) => {
      state.status = '読み込み完了！'
      state.count = state.count + payload
    })
    .addCase(addAsyncWithStatus.rejected, (state) => {
      state.status = '読み込みが失敗しました。'
    })
    
  }
});

const { add, minus } = counter.actions;

// toolkitで非同期処理を行う場合は下記のように記述する
// 下記を上の方でextraReducersに渡すことで状態の監視ができる
const addAsyncWithStatus = createAsyncThunk(
  'asyncCount', // ここはtypeで一意に設定する必要がある
  async (payload) => {
    const response = await asyncCount(payload);
    return response.data;
  }
)

const addAsync = (payload) => {
  return async (dispatch, getState) => {
    const state = getState();
    console.log(state);
    const response = await asyncCount(payload);
    dispatch(add(response.data));
  }
}


export { add, minus, addAsync, addAsyncWithStatus }
export default counter.reducer