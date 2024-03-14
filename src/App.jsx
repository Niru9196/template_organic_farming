import './index.css'
import Card from './Component/Card'
import RecyclingIcon from '@mui/icons-material/Recycling';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import WorkIcon from '@mui/icons-material/Work';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import Footer from './Component/Footer';
import Description from './Component/Description';
import Header from './Component/Header';
import Feature from './Component/Feature'
import Navabar from './Component/Navabar';
import {BrowserRouter , Routes , Route,Navigate} from 'react-router-dom';
import Home from './Page/Home';
import Product from './Page/Product';

function App() {

  return (
    <>
     <BrowserRouter>
     <Navabar />
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element ={<Product />} />
          <Route path='/feature' element ={<Feature />} />
          <Route path = '/services' element = {<Card />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
