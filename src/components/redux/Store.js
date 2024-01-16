import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './ContactSlice';  
import { filtersReducer } from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,  
    filters: filtersReducer,
  },
});
