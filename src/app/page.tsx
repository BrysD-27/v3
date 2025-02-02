import Layout from "./components/layout";
import About from "./components/sections/about";
import Header from "./components/sections/header";
export default function Index() {
  return (
    <Layout>
      <Header/>
      <About/>
    </Layout>
);
}