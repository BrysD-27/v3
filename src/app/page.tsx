import Layout from "./components/layout";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Header from "./components/sections/header";
export default function Index() {
  return (
    <Layout>
      <Header/>
      <main>
        <About/>
        <Experience/>
      </main>
    </Layout>
);
}