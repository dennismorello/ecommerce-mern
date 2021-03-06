import Head from "next/head";

// Components
import Layout from "@components/Layout";

export default function Cart() {
  return (
    <Layout>
      <Head>
        <title>Apple Store – Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="my-5">
        <h1>Cart</h1>
      </div>
    </Layout>
  );
}
