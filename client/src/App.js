import {Route, Routes} from 'react-router-dom';
import { Login, Signup } from './components';
import RecordList from './components/RecordList';
import Record from './components/Record';
import AHome from './components/AHome';
import Ankuran from './components/Ankuran';
import Samaritans from './components/Samaritans';
import Geekonix from './components/Geekonix';
import Navbar from './components/ANavbar';
import Footer from './components/Footer';
// import Itdept from './components/Itdept';
import Changepassword from './components/Changepassword';
import Dept1 from './components/dept1/Dept1';
import Nondept from './components/nondept/Nondept';
import Itdept from './components/itdept/Itdept';


function App() {
  return (
    <div>
      <Navbar />
        <div style={{ marginTop: "4rem" }}>
      <Routes>
        <Route exact path='/' element={<AHome/>}/>

        {/* <Route exact path="/itdept" element={<Itdept />} /> */}
        <Route exact path="/ankuran" element={<Ankuran />} />
        <Route exact path="/samaritans" element={<Samaritans />} />
        <Route exact path="/geekonix" element={<Geekonix />} />
        <Route exact path="/itdept" element={<Itdept />} />
        <Route exact path="/departmental" element={<Dept1 />} />
        <Route exact path="/nondepartmental" element={<Nondept />} />

        {/* authentication required */}
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/events' element={<RecordList/>}/>
        <Route exact path='/events/update/:id' element={<Record/>} />
        <Route exact path='/events/create' element={<Record/>} />
        <Route exact path='/changepassword' element={<Changepassword/>} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
