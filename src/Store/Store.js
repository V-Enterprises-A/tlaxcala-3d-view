import { configureStore } from '@reduxjs/toolkit'
import { churchSlice } from "./slices/churchs";
import { pokemonSlice } from './slices/pokemon';


export const store = configureStore({
  reducer: {
    DataChurch: churchSlice.reducer,
    pokemons:pokemonSlice.reducer,
  },
})

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch