import Head from "next/head";
import React, { Component } from "react";
import Header from "../src/components/Header";

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
    </>;
  }
}
