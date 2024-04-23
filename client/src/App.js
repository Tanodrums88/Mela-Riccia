import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayot from './components/rootLayot';
import HomePage from './pages/Home';
import AllRecipes from './pages/AllRecipes';
import CategoryRecipes from './pages/categoryRecipes/categoryRecipes';
import SubCategoryRecipes from './pages/categoryRecipes/subCategoryRecipes';
import SingleRecipe from './pages/singleRecipes/singleRecipe';
import Admin from './admin/Admin';
import FormUsers from './pages/home_components/FormUsers';
import Login from './auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayot />,
    children: [
      { path: '/', index: true, element: <HomePage /> },
      { path: '/invia la ricetta', element: <FormUsers /> },
      { path: '/tutte le ricette', element: <AllRecipes /> },
      { path: '/:recipesCategoryID', element: <CategoryRecipes /> },
      { path: '/:recipesCategoryID/:recipesSubCategoryID', element: <SubCategoryRecipes /> },
      { path: '/:recipesCategoryID/:recipesSubCategoryID/:recipeNameID', element: <SingleRecipe /> },
      { path: '/Admin', element: <Admin /> },
      { path: '/Auth', element: <Login /> }
    ],
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
