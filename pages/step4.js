import React, {useContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import {Layer} from "../component/Layer/Layer";
import {Modal} from "@mui/material";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import Link from "next/link";
import {MeContext} from "./_app";
import {ModalSceleton} from "./../component/Modal/ModalSceleton";

const Step4 = () => {
    const {allInfo, setResult, result, url, setUrl, modalData} = useContext(MeContext);
    const router = useRouter();
    const {query} = useRouter();
    const axios = useAxios();
    const [userInfo, setUserInfo] = useState({});
    const [isSkeleton, setIsSkeleton] = useState(true);
    const purchaseId = uuidv4();

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsSkeleton(false);
        }, 1200);

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: "begin_checkout",
            ecommerce: {
                items: [{
                    item_name: `${query.counts} Instagram ${query.service}`, // Name or ID is required.
                    item_id: purchaseId, // Передаем код/ID товара
                    price: query.priceValue, // Передаем актуальную цену товара (разделитель десятичных знаков точка «.»)
                    item_brand: "tagiamtop", // Передаем бренд товара
                    item_category: `buy instagram ${query.service.toLowerCase()}`, // Передаем соответствующую категорию товаров https://take.ms/Gxpmh
                    item_variant: `${query.service}-${query.counts}`, // Передаем информацию про тариф https://take.ms/wKYoS
                    quantity: query.counts // Передеам количество купленного товара
                }]
            }
        });

        return () => clearTimeout(delay);
    }, []);

    function paymentChoose(paymentService) {
        dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        dataLayer.push({
            event: 'add_payment_info',
            ecommerce: {
                payment_type: paymentService, // Передаем сервис оплаты
                value: query.priceValue, // Передаем сумму
                currency: allInfo?.cur, // Передаем валюту
                items: [
                    {
                        item_name: `${query.counts} Instagram ${query.service}`,       // Name or ID is required.
                        item_id: purchaseId,
                        price: Number(query.priceValue).toString(),
                        item_brand: "tagiamtop", // Передаем бренд товара
                        item_category: `buy instagram ${query.service.toLowerCase()}`, // Передаем соответствующую категорию товаров https://take.ms/Gxpmh
                        item_variant: `${query.service}-${query.counts}`, // Передаем информацию про тариф https://take.ms/wKYoS
                        index: 1,
                        quantity: query.counts
                    }]
            }
        });

    }

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
                    modalData.reset();
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
                        onClick={() => router.push({
                            pathname: `/step3`,
                            query: {
                                service: modalData.service,
                                counts: modalData.counts,
                                priceValue: modalData.priceValue,
                                userName: modalData.userName,
                                userEmail: modalData.userEmail,
                                autoLike: modalData.autoLike
                            },
                        })}
                    >
                        {" "}
                        {"< Back"}{" "}
                    </p>
                    <img
                        className={styles.close}
                        style={{filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`}}
                        src="/closegrey.svg"
                        onClick={() => {
                            modalData.reset();
                            router.push(url);
                        }}
                        alt=""
                    />

                    <p
                        className={styles.modalBuy_title}
                        style={{filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`}}
                    >
                        {allInfo?.sym_b}
                        {result?.data?.price.toFixed(2)}
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
                            {result?.data?.methods?.map((item) => {
                                if (item?.url_to_pay) {
                                    return (<div
                                        key={item?.url_to_pay}
                                        className={styles.payment_block}
                                        onClick={() => {
                                            if (item?.url_to_pay) {
                                                window.open(item?.url_to_pay, "_blank");
                                                paymentChoose(item.name);
                                            }
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
                    <p>{item?.title}</p>
                    <p>
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
                                    </div>)
                                }
                            })}
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
