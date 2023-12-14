import Head from "next/head";
import React, { Component } from "react";
import Header from "../src/components/Header";
import { Container } from "reactstrap";
import CartTableRow from "../src/components/CartTable";
import CartTable from "../src/components/CartTable";
import CartTotal from "../src/components/CartTotal";

export default class cart extends Component {
  render() {
    return <>

      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras"></meta>
        <link rel="icon" href="/favicon.ico"></link>
        </Head>
        <Header/>
    
    <h1>Carrinho</h1>

    <main>
        <Container className="mb-5">
          <h1 className="my-5">
            Carrinho
          </h1>

          <CartTable />
          <CartTotal/>
        </Container>
      </main>

    </>;
  }
}
