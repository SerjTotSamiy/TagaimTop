import React, {useContext, useState, useEffect} from "react";
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import {Layer} from "../component/Layer/Layer";
import {Modal} from "@mui/material";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import Link from "next/link";
import {MeContext} from "./_app";
import {ModalSceleton} from "./../component/Modal/ModalSceleton";

const Step4 = () => {
    const {allInfo, setResult, result, url, setUrl} = useContext(MeContext);
    const router = useRouter();
    const {query} = useRouter();
    const axios = useAxios();
    const [userInfo, setUserInfo] = useState({});
    const [isSkeleton, setIsSkeleton] = useState(true);
    console.log(result)

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsSkeleton(false);
        }, 1200);
        return () => clearTimeout(delay);
    }, []);

    const payType = {
        Coinbase: "/bitcoin.svg",
        CGBilling: "/visa.svg",
        CCBill: "/mastercard.svg",
        Trustly: "/bitpay.svg",
        PayPal: "/paypal.svg",
    };

    return (
        <Layer firstPage={false}>
            <Modal
                open={true}
                onClose={() => {
                    // setOpen(false)
                    router.push({
                        pathname: url,
                    });
                }}
            >
                <div className={styles.modalBuy_container}>
                    {isSkeleton && <ModalSceleton/>}
                    <p
                        className={styles.backButton}
                        style={{filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`}}
                        onClick={() => router.push("/step3")}
                    >
                        {" "}
                        {"< Back"}{" "}
                    </p>
                    <img
                        className={styles.close}
                        style={{filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`}}
                        src="/closegrey.svg"
                        onClick={() => router.push(url)}
                        alt=""
                    />

                    <p
                        className={styles.modalBuy_title}
                        style={{filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`}}
                    >
                        {allInfo?.sym_b}
                        {query.priceValue}
                        {!allInfo?.sym_b ? allInfo?.sym_a : ""}
                    </p>

                    <span
                        style={{
                            display: "flex",
                            gap: 20,
                            alignItems: "center",
                            justifyContent: "center",
                            filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`,
                        }}
                    >
            <img className={styles.line} src="/modalline.svg" alt=""/>
            <p
                className={styles.modalBuy_stage}
                style={{backgroundColor: "#E64652"}}
            >
              1
            </p>
            <p
                className={styles.modalBuy_stage}
                style={{backgroundColor: "#E64652", color: "white"}}
            >
              2
            </p>
            <p
                className={styles.modalBuy_stage}
                style={{backgroundColor: "#E64652", color: "white"}}
            >
              3
            </p>
          </span>
                    <p style={{fontWeight: "bold"}}>Payment method</p>

                    {result.data === undefined ? (
                        <p>Loading...</p>
                    ) : (
                        <div
                            className={styles.stage3_container}
                            style={{filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`}}
                        >
                            {result?.data?.methods?.map((item) => (
                                <div
                                    key={item?.url_to_pay}
                                    className={styles.payment_block}
                                    onClick={() => {

                                        if (item?.url_to_pay) window.open(item?.url_to_pay, "blonk");
                                    }}
                                >
                                    <img
                                        src={item?.logo}
                                        width={55}
                                        height={55}
                                        style={{
                                            border: "1px solid grey",
                                            padding: "5px",
                                            borderRadius: "50%",
                                        }}
                                        alt=""
                                    />
                                    <span>
                    <p>{item?.name}</p>
                    <p
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                      <p
                          style={{color: item?.url_to_pay ? "#00831D" : "#666"}}
                      >
                          {/*{allInfo?.sym_b}*/}
                          {item?.price_local === null ? item?.price_usd : item?.price_local}
                          {!allInfo?.sym_b && item?.price_local ? allInfo?.sym_a : (allInfo?.sym_b || " $")}

                      </p>
                        {item?.tax !== 0 && (
                            <p style={{color: "#C4C4C4"}}>+ {item?.tax}% Vat</p>
                        )}
                    </p>
                  </span>
                                    <p
                                        key={item.discount}
                                        className={
                                            item?.discount < -0
                                                ? styles.account_green
                                                : styles.account_check
                                        }
                                    >
                                        {item?.discount}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    <p
                        style={{
                            color: "#A4A4A4",
                            filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`,
                        }}
                    >
                        By purchasing you agree with{" "}
                        <Link href="/pages/terms">
                            <a style={{textDecoration: "underline"}}> rules</a>
                        </Link>
                    </p>
                </div>
            </Modal>
        </Layer>
    );
};

export default Step4;
