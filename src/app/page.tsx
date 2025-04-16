import Layout from "../components/layout";
import About from "../components/sections/about";
import Experience from "../components/sections/experience";
import Footer from "../components/sections/footer";
import Header from "../components/sections/header";
import Projects from "../components/sections/projects";
import Technologies from "../components/sections/technologies";

export default function Index() {
  return (
    <Layout>
      <Header/>
      <main>
        <About/>
        <Experience/>
        <Projects />
        <Technologies />
        <Footer />
      </main>
    </Layout>
);
}