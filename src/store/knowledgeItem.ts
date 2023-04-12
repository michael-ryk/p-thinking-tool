import { createSlice } from '@reduxjs/toolkit';

const initialKnowledgeState = {
  knowledgeItems: "some items here"
};

const knowledgeItemSlice = createSlice({
  name: 'knowledgeItem',
  initialState: initialKnowledgeState,
  reducers: {
    addItem(state) {
      state.knowledgeItems = "some new text"
    }
  }
});

export default knowledgeItemSlice.reducer;