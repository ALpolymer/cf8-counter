import Layout from "./components/layout/Layout.tsx";
// import Counter from "./components/Counter.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import UserCard from "./components/UserCard.tsx";
// import UserDetails from "./components/ui/ConditionalRenderingComponents/UserDetails.tsx";
// import UsersWrapper from "./components/ConditionalRenderingComponents/UsersWrapper.tsx";
// import UserDetails from "./components/ui/ConditionalRenderingComponents/UserDetails.tsx";
// import ListWrapper from "./components/KeyAsAntiPattern/ListWrapper.tsx";
// import CustomButton from "./components/EventHandling/CustomButton.tsx";
// import Newsletter from "./components/EventHandling/Newsletter.tsx";
// import Contact from "./components/EventHandling/Contact.tsx";
import Menu from "./components/EventHandling/Menu.tsx";
function App() {

  return (
      <>
          <Layout>
            <Menu />
          </Layout>
      </>
  )
}

export default App
