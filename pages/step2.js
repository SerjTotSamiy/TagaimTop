import React, { useContext, useEffect, useState } from "react";
import { Layer } from "../component/Layer/Layer";
import { useRouter } from "next/router";
import useAxios from "../hooks/useAxios";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import { Modal } from "@mui/material";
import { MeContext } from "./_app";
import { ModalSceleton } from "./../component/Modal/ModalSceleton";

const Step2 = () => {
  const router = useRouter();
  const { query } = useRouter();
  const axios = useAxios();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    price,
    allInfo,
    userInfo,
    setUserInfo,
    result,
    setResult,
    type,
    setType,
    url,
    setUrl,
    modalData
  } = useContext(MeContext);
  const [isSkeleton, setIsSkeleton] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsSkeleton(false);
    }, 1200);
    return () => clearTimeout(delay);
  }, []);
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
        {!userInfo ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.modalBuy_container}>
            {isSkeleton && <ModalSceleton />}
            <p
              className={styles.backButton}
              style={{ filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}` }}
              onClick={() => router.push({
                pathname: `/step1`,
                query: {
                  service: modalData.service,
                  counts: modalData.counts,
                  priceValue: modalData.priceValue,
                },
              })}
            >
              {" "}
              {"< Back"}{" "}
            </p>
            <img
              className={styles.close}
              style={{ filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}` }}
              src="/closegrey.svg"
              onClick={() => {
                modalData.reset();
                router.push(url);
              }}
              alt=""
            />
            {query.autoLike ? (
              <p
                className={styles.modalBuy_title}
                style={{ filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}` }}
              >
                Instagram {query.priceValue} autolikes per post
              </p>
            ) : (
              <p
                className={styles.modalBuy_title}
                style={{ filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}` }}
              >
                Check account
              </p>
            )}
            <span
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                justifyContent: "center",
                filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}`,
              }}
            >
              <img className={styles.line} src="/modalline.svg" alt="" />
              <p
                className={styles.modalBuy_stage}
                style={{ backgroundColor: "#F0F0F0", color: "black" }}
              >
                1
              </p>
              <p
                className={styles.modalBuy_stage}
                style={{ backgroundColor: "#E64652" }}
              >
                2
              </p>
              <p
                className={styles.modalBuy_stage}
                style={{ backgroundColor: "#F0F0F0", color: "black" }}
              >
                3
              </p>
            </span>

            <div
              className={styles.postList}
              style={{ filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}` }}
            >
              <div className={styles.account_item}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    router.push({
                      pathname: "/step3",
                      query: {
                        autoLike: false,
                        counts: modalData.counts,
                        priceValue: modalData.priceValue,
                        userEmail: modalData.userEmail,
                        userInfo: userInfo,
                        service: modalData.service,
                        userName: modalData.userName,
                      },
                    })
                  }
                >
                  <div className={styles.account_img}>
                    <img style={{ "boxShadow": "0 0 10px 1px #8c66fa" }} src={userInfo?.avatar} alt="" />
                  </div>
                  <span className={styles.account_title}>{modalData.userName}</span>
                </div>
                <div style={{"padding": "30px"}}>Click on avatar to continue</div>
              </div>
            </div>

            <a
              style={{ filter: `${isSkeleton ? "blur(8px)" : "blur(0px)"}` }}
              onClick={() =>
                router.push({
                  pathname: `/step1`,
                  query: {
                    service: "Likes",
                  },
                })
              }
            >
              Change account
            </a>
          </div>
        )}
      </Modal>
    </Layer>
  );
};

export default Step2;
