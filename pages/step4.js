/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, {useContext, useState} from 'react';
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import {Layer} from "../component/Layer/Layer";
import { Modal} from "@mui/material";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import Link from "next/link";
import {MeContext} from "./_app";
const Step4 = () => {
    const {allInfo,setResult,result,url, setUrl} = useContext(MeContext)
    const router = useRouter()
    const {query} = useRouter()
    const axios = useAxios()
    const [userInfo, setUserInfo] = useState({});
    const[payType,setPayType]=useState({
        'Coinbase':'/bitcoin.svg',
        'Visa':'/visa.svg',
        'Mastercard':'/mastercard.svg',
        'BitPay':'/bitpay.svg'

    })
    return (
        <Layer firstPage={false}>
            <Modal open={true} >
                <div className={styles.modalBuy_container}>
                    <p className={styles.backButton} onClick={() => router.push('/step3')}> {"< Back"} </p>
                    <img className={styles.close} src="/closegrey.svg" onClick={() =>
                        router.push(url)} />

                            <p className={styles.modalBuy_title}>{allInfo?.sym_b}{query.priceValue}{!allInfo?.sym_b ? allInfo?.sym_a : ''}</p>



                    <span style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <img className={styles.line} src="/modalline.svg"/>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652'}}>
                    1
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652', color: 'white'}}>
                    2
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652', color: 'white'}}>
                    3
                    </p>
                </span>
                    <p style={{fontWeight:'bold'}}>Payment method</p>

                    {result.data===undefined?
                        <p>Loading...</p>:
                    <div className={styles.stage3_container}>
                        {result?.data?.methods?.map((item) => <div key={item?.url_to_pay} className={styles.payment_block} onClick={() => router.push(item?.url_to_pay)}>
                            <img src={payType[item?.name]} width={65} height={65} />
                            <span>
                        <p>{item?.name}</p>
                        <p style={{display:'flex',justifyContent:'space-between'}}>
                            <p style={{color:"#00831D"}}>+ {allInfo?.sym_b}{item?.price_local}{!allInfo?.sym_b ? allInfo?.sym_a : ''}</p>
                            {item?.tax !== 0 && <p style={{color:"#C4C4C4"}}>+ {item?.tax}% Vat</p>}
                        </p>
                    </span>
                            <p className={styles.account_check} style={{backgroundColor:"#00831D1A",color:"#00831D"}}>
                                {item?.discount}%
                            </p>
                        </div>)}
                    </div>}
                    {/* <div style={{display:'flex',gap:20}} >
                <ButtonComponent text="Choose payment method for $5" type='fill' onClick={()=>{
                    sendOrder()
                }}/>
                <img src="/basket.svg"  />
            </div>*/}
                    <p style={{color:'#A4A4A4'}}>By pershing you agree with <Link href="/pages/terms"><a style={{textDecoration:"underline"}} > rules</a></Link></p>


                </div>
            </Modal>
        </Layer>
    );
};

export default Step4;
