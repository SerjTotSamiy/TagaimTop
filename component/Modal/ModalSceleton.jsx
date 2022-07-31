import React from "react";
import Image from "next/image";
import styles from "./Modal.module.sass";
import { Typewriter } from "react-typewriting-effect";

export const ModalSceleton = ({isLoading = false}) => {
  const spinner = "/spinner.svg";

  return (
    <div className={styles.modalSceleton}>
      <div className={styles.modalSceletonContainer}>
        {
          !isLoading
            ? <>
                <Image
                    src="/logo-animate/logo.png"
                    alt="logo-animate"
                    width={40}
                    height={40}
                />
                <span>
                  <Typewriter
                      string="tagiamtop"
                      delay={80}
                      stopBlinkinOnComplete
                      cursor=""
                  />
                </span>
              </>
            : <span style={{
                fontSize: "24px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}>
                <h1 style={{textAlign: "center"}}>Loading</h1>
                <img style={{textAlign: "center"}} src={spinner} alt="spinner"/>
              </span>
        }
      </div>
    </div>
  );
};
