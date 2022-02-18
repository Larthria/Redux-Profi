import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import { postAPI } from './services/PostService';
import PostContainer from './components/PostContainer';

function App() {
  //const dispatch = useAppDispatch();
  //const {users,isLoading,error} = useAppSelector(state => state.userReducer)
//
  //useEffect(() => {
  //  dispatch(fetchUsers());
  //},[])
  return (
    <div className="App">
      {/*isLoading && <h1>Идёт загрузка...</h1>*/}
      {/*error && <h1>{error}</h1>*/}
      {/*!isLoading && !error && JSON.stringify(users,null,2)*/}
      <PostContainer />
      
    </div>
  );
}

export default App;
