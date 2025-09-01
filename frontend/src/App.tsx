import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "@/components/layout/Layout"
import Main from "@/pages/Main/Main"

function App() {

  return (
    <BrowserRouter basename="/frontend">
      <Layout>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App