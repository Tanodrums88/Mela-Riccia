import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './context/user.context';
import RootLayot from './components/rootLayot';
import HomePage from './pages/Home';
import AllRecipes from './pages/AllRecipes';
import CategoryRecipes from './pages/categoryRecipes/categoryRecipes';
import SubCategoryRecipes from './pages/categoryRecipes/subCategoryRecipes';
import SingleRecipe from './pages/singleRecipes/singleRecipe';
import Admin from './admin/AdminHandler';
import FormUsers from './pages/home_components/FormUsers';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route exact path='/' element={<RootLayot />}>
            <Route exact path='/' index={true} element={<HomePage />} />
            <Route exact path='/invia la ricetta' element={<FormUsers />} />
            <Route exact path='/tutte le ricette' element={<AllRecipes />} />
            <Route exact path='/:recipesCategoryID' element={<CategoryRecipes />} />
            <Route exact path='/:recipesCategoryID/:recipesSubCategoryID' element={<SubCategoryRecipes />} />
            <Route exact path='/:recipesCategoryID/:recipesSubCategoryID/:recipeNameID' element={<SingleRecipe />} />
            <Route exact path='/Auth' element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path='/Admin' element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
