import { Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// import NavigationBar from './Components/Navigate/NavigationBar';
//  import FooterBar from './Components/Navigate/FooterBar';
import FooterBar from './NavigationBar'
import Home from './Home';
// import Home from './Components/Home/Home';
import ReadAll from './Crud/ReadAll';
import ReadOne from './Crud/ReadOne';
import Create from './Crud/Create';
import Update from './Crud/Update';
// import Update from './Crud/Update';
// import Page404 from './Components/404/Page404';
function App() {
return (
<>
<NavigationBar />
<Routes>
{/* Home */}
<Route path="/" element={<Home />} />
{/* CRUD */}
<Route path="/readAll" element={<ReadAll />} />
<Route path="/readOne/:id" element={<ReadOne />} />
<Route path="/create" element={<Create />} />
<Route path="/update" element={<Update />} />
{/* <Route path="/update/:id" element={<Update />} /> */}
{/* 404 */}
{/* <Route path="*" element={<Page404 />} /> */}
</Routes>
<FooterBar />
</>
);
}
export default App;