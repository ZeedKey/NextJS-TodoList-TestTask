import App from "next/app";
import GlobalStyle from "../styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
