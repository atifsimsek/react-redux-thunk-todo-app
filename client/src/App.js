import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ContentFooter from "./components/ContentFooter";
function App() {
  return (
    <>
      <section className="todoapp">
        <Header />
        <Content />
        <ContentFooter />
      </section>
      <Footer />
    </>
  );
}

export default App;
