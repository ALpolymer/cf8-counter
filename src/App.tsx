import Layout from "./components/layout/Layout.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
import UserCard from "./components/UserCard.tsx";
function App() {

  return (
      <>
          <Layout>
             <UserCard id={1} name={"Alex"} age={20} email={"esa@gmail.com"} city={"New York"} />
          </Layout>
      </>
  )
}

export default App
