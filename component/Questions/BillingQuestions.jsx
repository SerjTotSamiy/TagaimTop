import React, {useEffect, useState} from 'react';
import styles from '/styles/Home.module.sass'
import {Accordion, AccordionActions, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import { Icon } from "../Icon/Icon";
import {billingQuestions, frequentQuestions} from "../../questions/Questions";
const BillingQuestions = ({ title,bg}) => {
    const [activePost,setActivePost]=useState([])
    const deleteActivePost=(index)=>{
        const newPost=activePost.filter(post=>post!==index)
        setActivePost(newPost)
    }

    return (
        <div className={styles.question_container}>
            {title&&
                <> <p className={styles.question_data_title}> Frequently Asked Questions</p>
                    <p className={styles.question_data_text}>
                        Have a different question about how Likes.io works or the pricing plans available? Get in
                        touch with one of our specialists.
                    </p></>
            }
            <div className={styles.question_div_data}>
                {billingQuestions.map((item, index) => {
                    return (
                        <Accordion key={index} style={{borderRadius:10,marginBottom:10,maxWidth:"990px",width:"100%"}}  >
                            <AccordionSummary
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className={styles.question_div}
                                expandIcon={activePost.includes(item.index)
                                    ?<Icon type="remove" width="24px" height="24px" />
                                    :<Icon type="add" width="24px" height="24px" />
                                }
                                onClick={()=>{
                                    activePost.includes(item.index)?
                                        deleteActivePost(item.index):
                                        setActivePost(prev=>([...prev,item.index]))
                                }}
                            >
                                <Typography>
                                            <span style={{display:'flex',alignItems:'center'}}>
                                             <p className={styles.question_p_index} >
                                                 {index + 1}
                                             </p>
                                                 <p>{item.question}</p></span>

                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails  >
                                <p className={styles.question_p_answer}>{item.answer}</p>
                            </AccordionDetails>
                        </Accordion>

                    )
                })}

            </div>
        </div>

    );
};


export default BillingQuestions;
