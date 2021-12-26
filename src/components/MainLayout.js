import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
