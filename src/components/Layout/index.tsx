import { NextPage } from "next";
import Navigation from "../Navigation/index";
import Footer from "../Footer/index";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Navigation />
        <main className="block--main">
          <div className="container mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
