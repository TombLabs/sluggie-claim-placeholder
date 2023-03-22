import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <>
      <div className="main">
        <Head>
          <title>GIB BUCKET - SLUGGIES</title>
          <meta name="title" content="GIB BUCKET - SLUGGIES" />
          <meta
            name="description"
            content="Claim your mfin' Slug Bucket, clown."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://claim.sluggies.art" />
          <meta property="og:title" content="GIB BUCKET - SLUGGIES" />
          <meta
            property="og:description"
            content="Claim your mfin' Slug Bucket, clown"
          />
          <meta
            property="og:image"
            content="https://claim.sluggies.art/card_image.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://claim.sluggies.art" />
          <meta
            property="twitter:title"
            content="Claim your mfin' Slug Bucket, clown"
          />
          <meta
            property="twitter:description"
            content="Claim your mfin' Slug Bucket, clown"
          />
          <meta
            property="twitter:image"
            content="https://claim.sluggies.art/card_image.png"
          />
          {/* <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}
          <link
            rel="icon"
            type="image/png"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="android-touch-icon"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
        </Head>
        <img src="/homepage.png" className="homepage" />
        <div className="cover"> </div>
        <img src="/dumpster.png" className="dumpster" />
        <img src="/not_yet.png" className="not_yet" />
      </div>
    </>
  );
};

export default Home;
