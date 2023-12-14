import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import Trending from './pages/Trending';
import { FaqWithImage } from './pages/faq/FaqWithImage';
import { FeaturesCards } from './pages/about/FeaturesCards';
import Lokalet from './pages/Lokalet';
import LandingPage from './pages/LandingPage';

import Home from './pages/Home';
import CompanyPage from './pages/CompanyPage';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsAndContitions } from './pages/legal/TermsAndConditions';
import CompanyPageApi from './pages/CompanyPageApi';
import BrregCompany from './components/carousel/BrregCompany';
import Users from './components/dashboard/updateDB/users/Users';
import { Create } from './pages/account/Create';
import { Login } from './pages/account/Login';
import Dashboard from './components/dashboard/Dashboard';
import Layout from './components/Layout';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';
import Unauthorized from './pages/errorPages/Unauthorized';
import Error404 from './pages/errorPages/error404';
import UpdateCompany from './components/dashboard/updateDB/company/UpdateCompany';
import { Logout } from './pages/account/Logout';
import UsersEditable from './components/dashboard/updateDB/users/UsersEditable';
import GunChat from './components/gun/GunChat';

const ROLES = {
  "ADMIN": 5673,
  "EDITOR": 1903,
  "USER": 2007,
};


function App() {
  const [colorScheme, setColorScheme] = useState("dark")
  const toggleColorScheme = value =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >

        <Routes>
          <Route exact path="/" element={<Layout />} >

            {/* public routes */}
            <Route exact path="/" element={ <LandingPage /> } />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<Create />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/logout" element={<Logout />} />
            <Route exact path="/faq" element={<FaqWithImage />} />
            <Route exact path="/about" element={<FeaturesCards />} />
            <Route exact path="/privacy_policy" element={<PrivacyPolicy />} />
            <Route exact path="/terms_conditions" element={<TermsAndContitions />} />
            <Route exact path="/unauthorized" element={<Unauthorized />} />
            <Route exact path="/trending" element={<Trending />} />
            <Route exact path="/local" element={<Lokalet />} />
            <Route exact path="/chat" element={<GunChat/> } />


            {/* protected routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
              <Route exact path="/lokale_ditt" element={<Trending />} />
              <Route exact path="/din_by" element={<Trending />} />
              <Route exact path="/nabobyen" element={<Trending />} />
              
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.EDITOR]} />}>
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
            <Route exact path="/user-edit" element={<UsersEditable/>} />
            </Route>


            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.EDITOR]} />}>
            <Route exact path="/update_company" element={<UpdateCompany />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.EDITOR, ROLES.USER]} />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/company" element={<CompanyPage />} />
              <Route exact path="/brreg" element={<CompanyPageApi />} />
              <Route exact path="/companies" element={<BrregCompany />} />
              <Route exact path="/users" element={<Users />} />
           
            </Route>


            {/* catch alls */}
            <Route exact path="*" element={<Error404 />} />

          </Route>
        </Routes>
      </MantineProvider>
    </ColorSchemeProvider>

  );
}

export default App;
