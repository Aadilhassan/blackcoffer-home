import NavTop from './components/Nav'
import Slidshow from './components/Slidshow';
import Aboutcard from './components/Aboutcard';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import GetCall from './components/GetCall';
import Team from './components/Team';
import UseCases from './components/UseCases';
import './components/slidshow.css'
import Footer from './components/Footer'
function App() {
  return (
    <div id="wra">
<NavTop />
<Slidshow />
<Aboutcard />
<Experience />
<Testimonials />
<Partners />
<GetCall />
<Team />
<UseCases />
<Footer />
    </div>
  );
}

export default App;
