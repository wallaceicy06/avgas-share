import React from 'react';
import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from '@mui/material';
import NavigationBar from './components/NavigationBar/NavigationBar';
import ContentPage from './ContentPage';
import ContentManager from './components/ContentManager/ContentManager';

function App() {
  const [contentPage, setContentPage] = React.useState<ContentPage>('Airplanes')

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar setContentPage={(page: ContentPage) => setContentPage(page)} />
      <ContentManager contentPage={contentPage}></ContentManager>
    </React.Fragment>
  );
}

export default App;
