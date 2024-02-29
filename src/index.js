import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import { RecipesProvider } from './contexts/RecipesProvider';
import { FavoriteProvider } from './contexts/FavoriteProvider';
import { YourRecipeProvider } from './contexts/YourRecipeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <FavoriteProvider>
        
      <RecipesProvider>

        <YourRecipeProvider>
          
          <App />
          
        </YourRecipeProvider>
      
      </RecipesProvider>
    
    </FavoriteProvider>
    
  </React.StrictMode>
);
