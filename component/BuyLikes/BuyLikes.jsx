import React, {useContext, useMemo, useState, useEffect} from "react";
import styles from "../../styles/BuyInstagramLikes.module.sass";
import {ButtonComponent} from "../ButtonComponent/ButtonComponent";
import ModalBuy from "../ModalBuy/ModalBuy";
import {MeContext} from "../../pages/_app";
import {v4 as uuidv4} from "uuid";

const BuyLikes = ({
    first,
    last,
    likes,
    price,
    banner,
    text,
    autoLike,
    onClick,
    bgArray,
    index,
    id,
    icon,
    service,
    isDisabled
}) => {
    const bg = {
        0: "/pricebg1.webp",
        1: "/pricebg2.webp",
        2: "/pricebg3.webp",
        3: "/pricebg4.webp",
        4: "/pricebg1.webp",
        5: "/pricebg2.webp",
        6: "/pricebg3.webp",
        7: "/pricebg4.webp",
        8: "/pricebg1.webp",
        9: "/pricebg1.webp",
    };
    const {allInfo, setModalData} = useContext(MeContext);
    const purchaseId = uuidv4();

    const clickHandler = () => {
        setModalData((prev) => ({
            ...prev,
            service: service,
            counts: likes,
            priceValue: price
        }))
        onClick();

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: "add_to_cart",
            ecommerce: {
                items: [{
                    item_name: `${likes} Instagram ${service}`, // Name or ID is required.
                    item_id: purchaseId, // Передаем код/ID товара
                    // price: Number(price), // Передаем актуальную цену товара (разделитель десятичных знаков точка «.»)
                    price: Number(price).toString(), // Передаем актуальную цену товара (разделитель десятичных знаков точка «.»)
                    item_brand: "tagiamtop", // Передаем бренд товара
                    item_category: `buy instagram ${service}`, // Передаем соответствующую категорию товаров https://take.ms/Gxpmh
                    item_variant: `${service}-${likes}`, // Передаем информацию про тариф https://take.ms/wKYoS
                    index: 1,
                    quantity: likes
                }]
            }
        });

    }

    return (
        <div
            className={styles.buyLikes_item_bg}
            style={{
                filter: isDisabled ? "blur(3px)" : ""
            }}
        >
            {!isDisabled
                && <img
                    className={styles.imgBg}
                    src={bg[index]}
                    style={{position: "absolute", zIndex: -3}}
                    alt=""
                />
            }

            <div className={styles.buyLikes_item}>
                <div style={{textAlign: "center", marginBottom: 20}}>
                    <p className={styles.buyLikes_likes}>
                        <img src={icon} alt=""/>
                        {likes}
                    </p>
                    <p className={styles.buyLikes_text}>{text}</p>
                </div>
                <div
                    className={styles.buyLikes_banner}
                    style={{background: `url(${banner})`}}
                >
                    {/*<p className={styles.buyLikes_item_price}*/}
                    {/*   style={{marginRight: "20px", textDecorationLine: "line-through", fontSize: "20px"}}>*/}
                    {/*    {allInfo?.sym_b}*/}
                    {/*    {(price * 1.15).toFixed(2)}*/}
                    {/*    {!allInfo?.sym_b ? allInfo?.sym_a : ""}*/}
                    {/*</p>*/}
                    <p className={styles.buyLikes_item_price}>
                        {allInfo?.sym_b}
                        {price}
                        {!allInfo?.sym_b ? allInfo?.sym_a : ""}
                    </p>
                </div>
                <div className={styles.buyLikes_item_description}>
          <span>
            <img src="/check-circle-1.png" width={18} height={18} alt=""/>
            <p>
              <b>REAL</b> likes from <b>REAL</b> people What's the difference?
            </p>
          </span>
                    <span>
            <img src="/check-circle-1.png" width={18} height={18} alt=""/>
            <p>
              Guaranteed <b>Instant Delivery</b>{" "}
            </p>
          </span>
                    <span>
            <img src="/check-circle-1.png" width={18} height={18} alt=""/>
            <p>
              Option to <b>split likes</b> on multiple pictures{" "}
            </p>
          </span>
                    <span>
            <img src="/check-circle-1.png" width={18} height={18} alt=""/>
            <p>
              Fast Delivery <b>(gradual or instant) </b>{" "}
            </p>
          </span>
                    <span>
            <img src="/check-circle-1.png" width={18} height={18} alt=""/>
            <p>
              <b>24/7</b> support{" "}
            </p>
          </span>
                </div>
                <ButtonComponent
                    id={`${id}${likes}`}
                    text="Buy Now"
                    type="fill"
                    style={{width: 200, margin: 10}}
                    onClick={clickHandler}
                    disabled={isDisabled}
                />
            </div>
        </div>
    );
};

export default BuyLikes;
