/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from "react";
import styles from "./ModalBuy.module.sass";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import { Icon } from "../Icon/Icon";
import { MeContext } from "../../pages/_app";
import { DotLoader } from "react-spinners";
const AddAccount = ({
  setOpen,
  amount,
  autoLike,
  setPageActive,
  userInfo,
  setActivePost,
  activePost,
  count,
  service,
  sendOrder,
  type,
  setType,
  setLoading,
  isLoading,
  errorMessage,
}) => {
  const { allInfo } = useContext(MeContext);
  const [choose, setChoose] = useState({
    impressions: false,
    reach: false,
    saves: false,
  });

  const [stageOpen, setStageOpen] = useState(true);

  const [style, setStyle] = useState({
    outline: {
      color: "#3D2977",
      borderColor: "#3D2977",
      borderRadius: 10,
      width: 200,
      height: 75,
    },
    fill: {
      backgroundColor: "#3D2977",
      borderRadius: 10,
      shadowColor: "#3D2977",
      width: 200,
      height: 75,
    },
  });
  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };
  return (
    <div
      className={styles.modalBuy_container}
      style={{
        height: "calc(100% - 30px)",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxHeight: "calc(100%-10px)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 30,
          width: "100%",
        }}
      >
        <img
          className={styles.close}
          src="/closegrey.svg"
          onClick={() => setOpen(false)}
          alt=""
        />
        {autoLike ? (
          <p className={styles.modalBuy_title}>
            Instagram {amount} autolikes per post
          </p>
        ) : (
          <p className={styles.modalBuy_title}>Choose post</p>
        )}
        {!autoLike && (
          <span
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img className={styles.line} src="/modalline.svg" alt="" />
            <p
              className={styles.modalBuy_stage}
              style={{ backgroundColor: "#E64652" }}
            >
              1
            </p>
            <p
              className={styles.modalBuy_stage}
              style={{ backgroundColor: "#E64652", color: "white" }}
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
        )}
        {!autoLike && (
          <div className={styles.addAccount_block}>
            {userInfo?.posts?.map((post, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.post} ${
                    activePost.includes(post) ? styles.postChosen : ""
                  }`}
                  style={{
                    background: `url(${post.img})`,
                    width: 100,
                    height: 100,
                    backgroundSize: "cover",
                    borderRadius: 5,
                  }}
                  onClick={() =>
                    activePost.includes(post)
                      ? deleteActivePost(post)
                      : activePost.length <= 9
                      ? setActivePost((prev) => [...prev, post])
                      : null
                  }
                >
                  {activePost.includes(post) && (
                    <div
                      style={{
                        background: "rgba(105, 114, 100, 0.3)",
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        borderRadius: 5,
                        opacity: 10,
                      }}
                    >
                      <img src="/check.svg" className={styles.postCheck} alt="" />
                      <p className={styles.postChosenHeart}>
                        {service === "Likes" ? (
                          <img src="/heart.svg" alt="" />
                        ) : service === "Followers" ? (
                          <img src="/repost.svg" width={30} height={30} alt="" />
                        ) : service === "Views" ? (
                          <img src="/view.svg" width={30} height={30} alt="" />
                        ) : (
                          service === "Comments" && (
                            <img
                              src="/modalComment.svg"
                              width={30}
                              height={30}
                              alt=""
                            />
                          )
                        )}
                        {Math.round(count / activePost.length)}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        <span style={{ display: "flex", gap: 10 }}>
          <img src="/ellipsered.svg" alt="" />
          <img src="/ellipsered.svg" alt="" />
          <img src="/ellipsered.svg" alt="" />
        </span>
        <div className={styles.addAccount_buttons}>
          <ButtonComponent
            text={userInfo?.plan?.types?.t1?.name}
            style={
              style[
                userInfo?.plan?.types?.t1.name === type.name
                  ? "fill"
                  : "outline"
              ]
            }
            type={
              userInfo?.plan?.types?.t1.name === type.name ? "fill" : "outline"
            }
            onClick={() => {
              setType(userInfo?.plan?.types?.t1);
            }}
          />
          <ButtonComponent
            text={userInfo?.plan?.types?.t2?.name}
            disabled={userInfo?.plan?.types?.t2?.name === "Custom"}
            style={
              style[
                userInfo?.plan?.types?.t2.name === type.name
                  ? "fill"
                  : "outline"
              ]
            }
            type={
              userInfo?.plan?.types?.t2.name === type.name ? "fill" : "outline"
            }
            onClick={() => {
              setType(userInfo?.plan?.types?.t2);
            }}
          />
        </div>
        <div className={styles.account_item_block}>
          <div
            className={styles.account_item}
            onClick={() =>
              setChoose({ ...choose, impressions: !choose["impressions"] })
            }
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.account_check}>
                {choose["impressions"] && (
                  <Icon type="check" width="24px" height="24px" color="green" />
                )}
              </div>
              <p>+ 500 Impressoins</p>
            </span>
            <p style={{ color: "red" }}>+ $5.4</p>
            <Icon type="info" width="22px" height="22px" />
          </div>
          <div
            className={styles.account_item}
            onClick={() => setChoose({ ...choose, reach: !choose["reach"] })}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.account_check}>
                {choose["reach"] && (
                  <Icon type="check" width="24px" height="24px" color="green" />
                )}
              </div>
              <p>+ 500 Reach</p>
            </span>
            <p style={{ color: "red" }}>+ $5.4</p>
            <Icon type="info" width="22px" height="22px" />
          </div>
          <div
            className={styles.account_item}
            onClick={() => setChoose({ ...choose, saves: !choose["saves"] })}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.account_check}>
                {choose["saves"] && (
                  <Icon type="check" width="24px" height="24px" color="green" />
                )}
              </div>
              <p>+ 100 Saves</p>
            </span>
            <p style={{ color: "red" }}>+ $5.4</p>
            <Icon type="info" width="22px" height="22px" />
          </div>
        </div>
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
        <div style={{ display: "flex", gap: 20 }}>
          {isLoading ? (
            <DotLoader color="white" />
          ) : (
            <ButtonComponent
              id="PAY"
              text={`Choose payment method for ${allInfo?.sym_b}${type.price} ${
                !allInfo?.sym_b ? allInfo?.sym_a : ""
              }`}
              type="fill"
              onClick={() => sendOrder()}
            />
          )}{" "}
          <img src="/basket.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
