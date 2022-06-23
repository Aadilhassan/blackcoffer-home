import NavTop from './components/Nav'
import Slidshow from './components/Slidshow';
import Aboutcard from './components/Aboutcard';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import './components/slidshow.css'
function App() {
  return (
    <div id="wra">
<NavTop />
<Slidshow />
<Aboutcard />
<Experience />
<Testimonials />
<Partners />
    </div>
  );
}

export default App;
