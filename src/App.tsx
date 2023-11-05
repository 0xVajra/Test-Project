import React, { FC, useEffect } from 'react';
import AppRouter from "./components/AppRouter"
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import 'antd/dist/reset.css';
import { useAction } from './hooks/useAction';
import { IUser } from './models/IUser';

const App: FC = () => {
  const {setUser, setIsAuth} = useAction()
  useEffect(() => {
     if(localStorage.getItem('auth')) {
         setUser({username: localStorage.getItem('username' || '')} as IUser)
         setIsAuth(true)
     }
  }, [])
  return (
    <Layout>
      <Navbar/>
      <Layout.Content>
      <AppRouter/>
      </Layout.Content>
    </Layout>
  );
}

export default App;
