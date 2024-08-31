import React, { FC } from 'react';
import './ContentManager.css';
import ContentPage from '../../ContentPage';
import { exhaustiveCheck } from 'ts-exhaustive-check';

interface ContentManagerProps {
  contentPage: ContentPage;
}

const ContentManager: FC<ContentManagerProps> = (props) => {
  const page: ContentPage = props.contentPage;
  switch (page) {
    case 'Airplanes':
      return <div>Airplanes Page</div>;
    case 'Settings':
      return <div>Settings Page</div>;
    default:
      exhaustiveCheck(page);
  }
};

export default ContentManager;
