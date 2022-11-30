import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './user'

export default configureStore({
  reducer: {
    users: usersReducer,
  }
})