import Layout from "./components/layout/Layout.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import UserCard from "./components/UserCard.tsx";
// import UserDetails from "./components/ui/ConditionalRenderingComponents/UserDetails.tsx";
import UsersWrapper from "./components/ui/ConditionalRenderingComponents/UsersWrapper.tsx";
// import UserDetails from "./components/ui/ConditionalRenderingComponents/UserDetails.tsx";
function App() {

  return (
      <>
          <Layout>
               <UsersWrapper/>
          </Layout>
      </>
  )
}

export default App
