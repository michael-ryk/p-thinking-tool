import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import demoKnowledgeItems from '../Assets/DemoItemsList';
import KnowledgeItemModel from '../models/KnowledgeItemModel';

// Type Model for Initial state
interface InitialKnowledgeStateModel {
  knowledgeItems: KnowledgeItemModel[],
  selectedItemId: number,
  selectedItemTagArray : string[],
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
    }
  }
});

export const { addItem, selectItem } = knowledgeItemSlice.actions;

export default knowledgeItemSlice.reducer;