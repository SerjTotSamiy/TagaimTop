import React, {useState} from "react";
import styles from "../styles/BuyInstagramLikes.module.sass";
import homeStyles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import BlogItem from "../component/BlogItem";
import PaginationButton from "../component/PaginationButton";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import {useRouter} from "next/router";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Head from "next/head";

const Blog = () => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const [nextPages, setNextPages] = useState([1, 2, 3]);
    const pages = [];
    for (let i = 1; i < 13; i++) {
        pages.push(i);
    }
    const increaseNextPages = () => {
        if (nextPages[2] !== pages[pages.length - 1]) {
            const massive = nextPages.map((num) => num + 1);
            setNextPages(massive);
            setCurrentPage(nextPages[1]);
        }
    };
    const incrementNextPages = () => {
        if (nextPages[0] !== 1) {
            const massive = nextPages.map((num) => num - 1);
            setNextPages(massive);
            setCurrentPage(nextPages[1]);
        }
    };
    return (
        <Layer firstPage={false}>
            <Head>
                <title>Blog - Tag I am Top</title>

                <meta name="url" property="og:url" content="https://likes.io/blog"/>
                <meta name="title" property="og:title" content="Blog - Tag I am Top"/>
                <meta name="twitter:title" content="Blog - Tag I am Top"/>
                <meta
                    name="description"
                    property="og:description"
                    content="Social Media Marketing Blog. Read our tips and stories"
                />
                <meta
                    name="twitter:description"
                    content="Social Media Marketing Blog. Read our tips and stories"
                />

                <link rel="canonical" href="https://likes.io/blog"/>
            </Head>

            <div className={styles.header_banner}>
                <p className={styles.header_title}>
                    Blog <img src="/buyfollowerfull.svg" width={50} height={40}/>
                </p>
                <p className={styles.header_text}>
                    You can get the last information and news about online marketing or Social networking service
                </p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>

            <PageTitle title={"Blog"}/>

            <BlogItem
                img="/blogphoto1.png"
                text="Get Followers Instagram 2022: Comlete Guide"
                onClick={() =>
                    router.push(`${router.pathname}/get-followers-instagram-guide`)
                }
            />
            <BlogItem
                img="/blogphoto2.png"
                text="Use Your Instagram Stories To Get More Followers - 7 Ways To Improve Your Stories"
                onClick={() =>
                    router.push(
                        `${router.pathname}/use-your-instagram-stories-to-get-more-followers`
                    )
                }
            />
            <BlogItem
                img="/blogphoto1.png"
                text="Get Followers Instagram 2022: Comlete Guide"
                onClick={() =>
                    router.push(`${router.pathname}/get-followers-instagram-guide`)
                }
            />
            <BlogItem
                img="/blogphoto2.png"
                text="How to Make a Collage on Instagram Story by iPhone 2022:"
                onClick={() =>
                    router.push(
                        `${router.pathname}/how-to-make-collage-instagram-by-iphone`
                    )
                }
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: 60,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <ButtonComponent
                    text={<img src="/paginationarrowleft.svg"/>}
                    type="outline"
                    style={{
                        display: "flex",
                        borderRadius: "5px",
                        width: "40px",
                        height: "40px",
                        padding: 0,
                        color: "black",
                        border: "1px solid #8C66FA",
                        marginRight: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={() =>
                        currentPage !== nextPages[0]
                            ? setCurrentPage(currentPage - 1)
                            : incrementNextPages()
                    }
                />
                {nextPages.map((num, index) => {
                    return (
                        <ButtonComponent
                            key={index}
                            text={num}
                            type="fill"
                            style={{
                                display: "flex",
                                borderRadius: "5px",
                                width: "40px",
                                height: "40px",
                                padding: 0,
                                backgroundColor: currentPage === num ? "#E64652" : "white",
                                color: currentPage === num ? "white" : "black",
                                marginRight: "10px",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onClick={() => setCurrentPage(num)}
                        />
                    );
                })}
                <ButtonComponent
                    text="..."
                    type="fill"
                    style={{
                        display: "flex",
                        borderRadius: "5px",
                        width: "40px",
                        height: "40px",
                        padding: 0,
                        backgroundColor: "white",
                        color: "black",
                        marginRight: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={increaseNextPages}
                />
                {!nextPages.includes(pages[pages.length - 1]) && (
                    <ButtonComponent
                        text={pages[pages.length - 1]}
                        type="fill"
                        style={{
                            display: "flex",
                            borderRadius: "5px",
                            width: "40px",
                            height: "40px",
                            padding: 0,
                            backgroundColor:
                                currentPage === pages[pages.length - 1] ? "#E64652" : "white",
                            color:
                                currentPage === pages[pages.length - 1] ? "white" : "black",
                            marginRight: "10px",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={() => setCurrentPage(pages[pages.length - 1])}
                    />
                )}
                <ButtonComponent
                    text={<img src="/paginationarrowright.svg"/>}
                    type="fill"
                    style={{
                        display: "flex",
                        borderRadius: "5px",
                        width: "40px",
                        height: "40px",
                        padding: 0,
                        backgroundColor: "#8C66FA",
                        marginRight: "10px",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                    onClick={() =>
                        currentPage !== nextPages[2]
                            ? setCurrentPage(currentPage + 1)
                            : increaseNextPages()
                    }
                />
            </div>
        </Layer>
    );
};

export default Blog;
