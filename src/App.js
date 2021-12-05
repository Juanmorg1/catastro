import LoginModal from "./components/LoginModal"
import FooterContent from "./components/FooterContent";

function App() {
  return (
    <div className="container">
      <header className="index_head">
        <h1 className="title">Gestion Catastral - Gobernacion del Tolima</h1>
      </header>
      <LoginModal />
      <FooterContent />
    </div>
  );
}

export default App;
