import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddBook from './containers/AddBook'
import SearchBook from './containers/SearchBook'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AddBook} />
        <Route path="/search" component={SearchBook} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
