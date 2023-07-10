import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";

import { Breadcrumb } from "components/common/Breadcrumb";
import { Router } from "routes/Router";

const App = () => {
  return (
    <div className="screen">
      <Header />
      <div className="container">
        <Breadcrumb />
        <main style={{ minHeight: "90vh" }} className="ui">
          <Router />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
