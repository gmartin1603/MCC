import Contact from "./components/Contact";
import Content from "./components/Content";
import Header from "./components/Header";
import './App.css'

function App() {
  const styles = {
    main:`flex flex-col w-screen h-screen bg-clearBlack overflow-hidden`,
    body:`max-h-[80vh] flex grow`,
  }
  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.body}>
      <Contact/>
      <Content/>
      </div>
    </div>
  );
}

export default App;
