import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Pawtinhas</title>
      </Head>

      <main>
        <div className="container-fluid">
        <h1 className="pw-color__text__green">Funciona o H1!</h1>
        <h2 className="pw-color__text__green-light">Funciona o H2!</h2>
        <h3 className="pw-color__text__green-lighter">Funciona o H3!</h3>
        <h4 className="pw-color__text__positive">Funciona o H4!</h4>
        <h5 className="pw-color__text__warning">Funciona o H5!</h5>
        <h6 className="pw-color__text__green-dark">Funciona o H6!</h6>
        <p className="pw-color__text__black">Funciona o Texto!</p>
        </div>
      </main>
    </>
  );
}
