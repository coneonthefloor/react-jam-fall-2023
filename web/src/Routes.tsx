// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import MenuScreenLayout from './layouts/MenuScreenLayout/MenuScreenLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MenuScreenLayout}>
        <Route path="/" page={StartPage} name="start" />
        <Route path="/high-score" page={HighScorePage} name="highScore" />
        <Route path="/space-ship-selection" page={SpaceShipSelectionPage} name="spaceShipSelection" />
      </Set>
      <Route path="/game" page={GamePage} name="game" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
