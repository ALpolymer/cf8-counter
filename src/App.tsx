import Layout from "./components/layout/Layout.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import UserCard from "./components/UserCard.tsx";
// import UserDetails from "./components/ui/ConditionalRenderingComponents/UserDetails.tsx";
// import UsersWrapper from "./components/ConditionalRenderingComponents/UsersWrapper.tsx";
// import UserDetails from "./components/ui/ConditionalRenderingComponents/UserDetails.tsx";
import ListWrapper from "./components/KeyAsAntiPattern/ListWrapper.tsx";
function App() {

  return (
      <>
          <Layout>
               <ListWrapper/>
          </Layout>
      </>
  )
}

export default App
