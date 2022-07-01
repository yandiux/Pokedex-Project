import { configureStore } from '@reduxjs/toolkit'
import nameUser from './slices/nameUser.slice'
import 'antd/dist/antd.css';

export default configureStore({
  reducer: {
    nameUser
  }
})