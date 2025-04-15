import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import { useState } from 'react'
import HomePage from "./pages/HomePage"
import MainLayout from "./layout/MainLayout"
import ForMarketers from "./pages/ForMarketers"
import NotFoundPage from "./pages/NotFoundPage"
import ForLearners from "./pages/ForLearners"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={ <HomePage /> }/>
        <Route path="/courses" element={ <ForMarketers />} />
        <Route path="*" element={ <NotFoundPage /> } />
      </Route>      
    )
  )

  return (
    <>      
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
