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
import Admin from './admin/Admin';
import FormUsers from './pages/home_components/FormUsers';
import Login from './auth/Login';
import PrivateRoute from './auth/PrivateRoute';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayot />,
//     children: [
//       { path: '/', index: true, element: <HomePage /> },
//       { path: '/invia la ricetta', element: <FormUsers /> },
//       { path: '/tutte le ricette', element: <AllRecipes /> },
//       { path: '/:recipesCategoryID', element: <CategoryRecipes /> },
//       { path: '/:recipesCategoryID/:recipesSubCategoryID', element: <SubCategoryRecipes /> },
//       { path: '/:recipesCategoryID/:recipesSubCategoryID/:recipeNameID', element: <SingleRecipe /> },

//     ],
//   },
//   <UserProvider>
//         { path: '/Admin', element: <Admin /> },
//       { path: '/Auth', element: <Login /> }
//       </UserProvider>
// ]);

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
    // <RouterProvider router={router} />
  );
}

export default App;
