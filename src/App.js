import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/achievement/achievement"
import Pricing from "./components/history/Pricing"

import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import { useEffect } from "react"


function App() {
  useEffect(() => {
    document.title = "Mahamaya Girls' College, Kandy";
  }, []);
  return (
    <>
    
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/achievement' component={Team} />
          <Route exact path='/history' component={Pricing} />
         
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
