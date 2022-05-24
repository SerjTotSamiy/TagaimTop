import "../styles/globals.sass";
import React, { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import AOS from "aos";
import Head from "next/head";
import MetaTagsDefault from "../shared/MetaTags";
export const MeContext = createContext();

function MyApp({ Component, pageProps }) {
  const axios = useAxios();
  const [allInfo, setAllInfo] = useState({});
  const [price, setPrice] = useState({});
  const [result, setResult] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [type, setType] = useState({});
  const [url, setUrl] = useState("");
  const getAllInfo = async () => {
    try {
      const res = await axios.post("/user_info.php");
      if (res.status === 200) {
        setAllInfo((prev) => res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getPrice = async () => {
    try {
      const res = await axios.post("/get_plans.php");
      if (res.status === 200) {
        setPrice((prev) => res?.data?.data?.Instagram);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllInfo();
    getPrice();
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <MetaTagsDefault />
      </Head>
      <MeContext.Provider
        value={{
          allInfo,
          getAllInfo,
          price,
          result,
          setResult,
          userInfo,
          setUserInfo,
          type,
          setType,
          url,
          setUrl,
        }}
      >
        {price?.Comments ? <Component {...pageProps} /> : <div></div>}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="shortcut icon" href="/icon.ico" />
      </MeContext.Provider>
    </>
  );
}

export default MyApp;
