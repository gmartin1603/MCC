import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  const styles = {
    main:`w-screen h-screen bg-clearBlack`,
  }
  return (
    <div className={styles.main}>
      <Header/>
      <div className={styles.body}>
      <Contact/>
      {/* <Content/> */}
      </div>
    </div>
  );
}

export default App;
