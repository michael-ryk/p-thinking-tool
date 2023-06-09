import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import demoKnowledgeItems from '../Assets/DemoItemsList';
import KnowledgeItemModel from '../models/KnowledgeItemModel';

// Type Model for Initial state
interface InitialKnowledgeStateModel {
  knowledgeItems: KnowledgeItemModel[],
  selectedItemId: number,
  selectedItemTagArray: string[],
}

const initialKnowledgeState: InitialKnowledgeStateModel = {
  knowledgeItems: demoKnowledgeItems,
  selectedItemId: 0,
  selectedItemTagArray: [],
};

const knowledgeItemSlice = createSlice({
  name: 'knowledgeItem',
  initialState: initialKnowledgeState,
  reducers: {
    addItem(state, action: PayloadAction<KnowledgeItemModel>) {
      state.knowledgeItems = [...state.knowledgeItems, action.payload]
    },
    selectItem(state, action: PayloadAction<KnowledgeItemModel>) {
      state.selectedItemId = action.payload.id;
      state.selectedItemTagArray = [...new Set(action.payload.tags)]
    },
    clearSelectedItem(state) {
      state.selectedItemId = 0;
    },
    removeItem(state, action: PayloadAction<number>) {
      const deleteId = action.payload;
      state.knowledgeItems = state.knowledgeItems.filter(item => item.id !== deleteId)
    },
  }
});

export const { addItem, selectItem, clearSelectedItem, removeItem } = knowledgeItemSlice.actions;

export default knowledgeItemSlice.reducer;