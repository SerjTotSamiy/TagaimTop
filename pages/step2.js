import React, {useContext, useEffect, useState} from 'react';
import {Layer} from "../component/Layer/Layer";
import {useRouter} from "next/router";
import useAxios from "../hooks/useAxios";
import styles from "../component/ModalBuy/ModalBuy.module.sass";
import { Modal} from "@mui/material";
import { MeContext } from "./_app";

const Step2 = () => {
    const router = useRouter();
    const {query} = useRouter();
    const axios = useAxios();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { price, allInfo, userInfo, setUserInfo, result, setResult, type, setType, url, setUrl } = useContext(MeContext);

    return (
        <Layer firstPage={false}>
        <Modal open={true}>
            {!userInfo?
            <p>Loading...</p>:
            <div className={styles.modalBuy_container}>
              <p className={styles.backButton} onClick={() => router.push('/step1')}> {"< Back"} </p>
                <img className={styles.close} src="/closegrey.svg" onClick={() =>
                    router.push(url)} />
                {
                    query.autoLike ? <p className={styles.modalBuy_title}>Instagram {query.priceValue} autolikes per post</p> :
                        <p className={styles.modalBuy_title}>Choose account</p>

                }
                <span style={{display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'center'}}>
                    <img className={styles.line} src="/modalline.svg"/>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#E64652'}}>
                    1
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                    2
                    </p>
                    <p className={styles.modalBuy_stage} style={{backgroundColor: '#F0F0F0', color: 'black'}}>
                    3
                    </p>

                </span>

                <div className={styles.postList}>
                    <div className={styles.account_item} onClick={()=>router.push( {
                        pathname:'/step3',
                        query:{autoLike:false,counts:query.counts,priceValue:query.priceValue,userEmail:query.userEmail, userInfo:userInfo,service:query.service,userName:query.userName}
                    })}>
                            <span style={{display: 'flex', alignItems: 'center'}}>
                                <div className={styles.account_check}/>
                                <img src={userInfo?.avatar}/>
                            </span>
                    </div>
                </div>



                <a >Add new one</a>

            </div>}
        </Modal>
        </Layer>
    );
};

export default Step2;
