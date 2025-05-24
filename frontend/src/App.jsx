import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Aboutus from './components/about-us';
import Features from './components/features';
import Contact from './components/contact';
import Footer from './components/footer';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {

  const Layout = ({ children }) => {
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  };

  const HomeLayout = () => {
    return (
      <>
        <Hero />
        <Aboutus />
        <Features />
        <Contact />
      </>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout><HomeLayout /></Layout>} />
          <Route path='/sign-in' element={<Layout><SignIn /></Layout>} />
          <Route path='/sign-up' element={<Layout><SignUp /></Layout>} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
