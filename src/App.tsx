import { Footer } from "components/common/Footer";
import { Header } from "components/common/Header";

import { Breadcrumb } from "components/common/Breadcrumb";
import { Router } from "routes/Router";
import { Head } from "components/common/Head";

const App = () => {
  return (
    <>
      <Head />
      <body className="screen">
        <Header />
        <div className="container">
          <Breadcrumb />
          <main style={{ minHeight: "90vh" }} className="ui">
            <Router />
          </main>
          <Footer />
        </div>
      </body>
    </>
  );
};

export default App;
