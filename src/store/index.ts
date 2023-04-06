import { configureStore } from "@reduxjs/toolkit"
import AppReducer from './slices/app.slice'

const store = configureStore({
    reducer: {
        app: AppReducer
    }
})
// create types for state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store