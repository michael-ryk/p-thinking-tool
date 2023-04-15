import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import demoKnowledgeItems from '../Assets/DemoItemsList';
import KnowledgeItemModel from '../models/KnowledgeItemModel';

const initialKnowledgeState = {
  knowledgeItems: demoKnowledgeItems,
  selectedItemId: 0,
};

const knowledgeItemSlice = createSlice({
  name: 'knowledgeItem',
  initialState: initialKnowledgeState,
  reducers: {
    addItem(state, action: PayloadAction<KnowledgeItemModel>) {
      state.knowledgeItems = [...state.knowledgeItems, action.payload]
    },
    selectItem(state, action: PayloadAction<number>) {
      state.selectedItemId = action.payload;
    }
  }
});

export const { addItem, selectItem } = knowledgeItemSlice.actions;

export default knowledgeItemSlice.reducer;