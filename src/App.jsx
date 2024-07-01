import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./pages/Add"
import View from "./pages/View"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./pages/Header"
import Footer from "./pages/Footer"

function App() {

  return (
    <>
      <Header/>
      <Add/>
      <View/>
      <Footer/>
    </>
  )
}

export default App
