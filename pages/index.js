import ReactGA from "react-ga4";
import styles from "../styles/Home.module.sass";
import {Layer} from "../component/Layer/Layer";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import React, {useEffect, useState} from "react";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import ReactStars from "react-stars";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import {useRouter} from "next/router";
import Head from "next/head";
import FrequentQuestions from "../component/Questions/FrequentQuestions";
import {Typewriter} from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import styles1 from "../styles/Home.module.sass";
import useAxios from "../hooks/useAxios";

export default function Home() {
    const [windowInnerWidth, setWindowInnerWidth] = useState(false);
    const router = useRouter();
    const [readMore, setReadMore] = useState(3);
    const [comment, setComment] = useState([]);
    const axios = useAxios();
    const date = new Date();
    ReactGA.initialize("G-RDBNGEZT97");
    ReactGA.send({ hitType: "pageview", page: router.pathname });
    ReactGA.send({ hitType: "payment_failed", page: router.pathname });
    ReactGA.send({ hitType: "paymentfailed", page: router.pathname });
    const getComment = async () => {
        try {
            const data = new FormData();
            data.append("system", "Instagram");
            data.append("service", "Likes");
            const res = await axios.post("/review_list.php", data);
            if (res.status === 200) {
                setComment((prev) => res.data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        getComment();
    }, []);

    return (
        <>
            <Head>
                <title>Buy Instagram Likes, Followers, Views in {date.getFullYear()} - Tag I am Top</title>

                <meta name="url" property="og:url" content="https://tagiamtop.com"/>
                <meta
                    name="title"
                    property="og:title"
                    content="Buy Instagram Likes, Followers, Views in 2022 - Tag I am Top"
                />
                <meta
                    name="twitter:title"
                    content="Buy Instagram Likes, Followers, Views in 2022 - Tag I am Top"
                />
                <meta
                    name="description"
                    property="og:description"
                    content="We have launched this project to increase the popularity of your Instagram account with cheap prices, and amazing customer support. We are proud of it"
                />
                <meta
                    name="twitter:description"
                    content="We have launched this project to increase the popularity of your Instagram account with cheap prices, and amazing customer support. We are proud of it"
                />

                <link rel="canonical" href="https://tagiamtop.com"/>
            </Head>

            <div className={styles.background}>
                <div style={{margin: "0 auto", overflowX: "hidden"}}>
                    <div className={styles.container}>
                        {windowInnerWidth > 760 ? (
                            <img
                                src="/phone.png"
                                alt="buy Instagram likes"
                                className={styles.phone}
                            />
                        ) : (
                            <img
                                src="/phone-mobile.webp"
                                alt="buy Instagram likes"
                                className={styles.phone}
                            />
                        )}
                    </div>

                    <Layer firstPage={true}>
                        <div style={{maxWidth: 1400, width: "100%", margin: "0 auto"}}>
                            <div className={`container`}>
                                <div className={`${styles.content}`}>
                                    <h1>
                                        <Typewriter
                                            string="Use Instagram to the fullest with Followers, Likes, Views and Comments"
                                            delay={80}
                                            stopBlinkinOnComplete
                                            cursor=""
                                        />
                                    </h1>
                                    <h2>
                                        Get organic growth on Instagram with our service
                                    </h2>
                                    <div>
                                        <ButtonComponent
                                            text={"Buy Likes"}
                                            type={"mainFill"}
                                            onClick={() => router.push("/buy-instagram-likes")}
                                        />
                                        <ButtonComponent
                                            text={"Buy followers"}
                                            type={"mainFill"}
                                            onClick={() => router.push("/buy-instagram-followers")}
                                        />
                                    </div>
                                    <img
                                        src="/arrow-detail.svg"
                                        alt=""
                                        onClick={() =>
                                            window.scrollTo(0, window.screen.availHeight)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.container_work}>
                            <div style={{maxWidth: 1400, width: "100%", margin: "0 auto"}}>
                                <div className={`container ${styles.work}`}>
                                    <div className={styles.work_box}>
                                        <div className={styles.work_title}>
                                            <p>How It Works?</p>
                                            <span>
                        Make Instagram users pay attention to your account using our services: IG Likes, Followers, Comments
                      </span>
                                        </div>

                                        <div className={styles.work_info}>
                                            <div className={styles.info_box}>
                                                <img src="/comp.svg" alt=""/>
                                                <p>Clean-cut</p>
                                                <span>
                          Faster way to get organic signals on Instagram for personal or business accounts
alt для картинки: Clean-cut with TagIamTop

                        </span>
                                            </div>

                                            <div className={styles.info_box}>
                                                <img src="/char.svg" alt=""/>
                                                <p>Prosperous</p>
                                                <span>
                          Getting statistics with large coverage and attracting the target audience
alt для картинки: Prosperous with TagIamTop
                        </span>
                                            </div>

                                            <div className={styles.info_box}>
                                                <img src="/security.svg" alt=""/>
                                                <p>Security</p>
                                                <span>
                          Anonymity and security without giving us passwords and personal information
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="fade-right"
                            data-aos-duration="200"
                            data-aos-offset="600"
                        >
                            <InfoBlock
                                reverse={false}
                                text={
                                    <div>
                                        <p className={styles.info_title}>
                                            Instagram Likes and Auto-likes
                                        </p>
                                        <p className={styles.info_text}>
                                            Social media now rules the world. Instagram, one of the youngest Social
                                            Media Platforms, leads the pack. Getting the attention of billions of users
                                            worldwide, influencers and online businessmen draw their strength from it.
                                            If you decided to be highly visible on the Internet, buy Instagram algorithm
                                            points such as followers, likes, views, and comments. Why is it important?
                                            Relying on organic traffic to grow your online visibility can take years and
                                            herculean efforts.
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <>
                                        <ButtonComponent
                                            text="Buy Likes"
                                            type={"fill"}
                                            onClick={() => router.push("/buy-instagram-likes")}
                                        />
                                        <ButtonComponent
                                            text="Autolikes"
                                            type={"outline"}
                                            onClick={() => router.push("/buy-instagram-likes")}
                                        />
                                    </>
                                }
                                img="/instagramlikesandauto-likes.webp"
                                alt={"get Instagram likes"}
                                fade={true}
                            />
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="200"
                            data-aos-offset="300"
                        >
                            <InfoBlock
                                reverse={true}
                                text={
                                    <div>
                                        <p className={styles.info_title}>Why not buy followers and comments from
                                            us? </p>
                                        <p className={styles.info_text}>
                                            All our services are guaranteed real and organic. Your IG profile will have
                                            high engagement with real people talking and sharing views, and ideas about
                                            your products and services. With Instagram target, you can find the relevant
                                            audience. The hashtags they are using to reveal their interests, needs,
                                            wants, and even demographics. Nothing is wasted on people that have no
                                            reason to be converted into potential clients. The important way to set our
                                            company apart from the competition is your account is sacrosanct to us.
                                            Third parties will never have access to your personal details. With us, you
                                            will always be protected.{" "}
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <ButtonComponent
                                        text="Buy Followers"
                                        type={"fill"}
                                        onClick={() => router.push("/buy-instagram-followers")}
                                    />
                                }
                                img="/instagramfollowers.webp"
                                alt={"get new Instagram followers"}
                            />
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="200"
                            data-aos-offset="450"
                        >
                            <InfoBlock
                                reverse={false}
                                text={
                                    <div>
                                        <p className={styles.info_title}>How can many comments and views help enhance
                                            your online presence? </p>
                                        <p className={styles.info_text}>
                                            Getting many Instagram signals for your posts shows that your content is
                                            attractive and relevant and new users have to visit your page. The more
                                            comments for posts or views for videos you have, the stronger your online
                                            presence becomes.{" "}
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <ButtonComponent
                                        text="Buy Comments"
                                        type={"fill"}
                                        onClick={() => router.push("/buy-instagram-comments")}
                                    />
                                }
                                img="instagramcomments.webp"
                                alt={"get Instagram comments"}
                            />
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-duration="300"
                            data-aos-offset="400"
                        >
                            <InfoBlock
                                reverse={true}
                                text={
                                    <div>
                                        <p className={styles.info_title}>Is having many views beneficial?</p>
                                        <p className={styles.info_text}>
                                            A lot of products and services are promoted on Social Media to find new
                                            clients. Having many views means selling to a target potential customers. It
                                            has been proven an effective marketing strategy. Many followers can help you
                                            earn an income. Some companies would like to work with you to promote their
                                            causes, products, and services to many views. You can earn a steady income
                                            from these activities. Lastly, you become someone people will look up to.
                                            Instagrammers with millions of followers advertise various goods and
                                            services without a problem. People emulate tham ways, buy what they buy, and
                                            use what thay use.{" "}
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <ButtonComponent
                                        text="Buy Views"
                                        type={"fill"}
                                        onClick={() => router.push("/buy-instagram-views")}
                                    />
                                }
                                img="instagramview.webp"
                                alt={"get Instagram views"}
                            />
                        </div>

                        <div
                            style={{
                                background: "url(/bacgraund-works.jpg) no-repeat",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className={styles.questions}>
                                <p
                                    className={styles.questions_title}
                                    style={{marginTop: 100}}
                                >
                                    FAQ
                                </p>
                                <span className={styles.questions_text}>
                  If you have visited our site to find the answer to some of queries regarding the process of buying Instagram signals ex. likes or followers, feel free to ask our expert support team.
                </span>

                                <FrequentQuestions/>
                            </div>
                        </div>

                        <div className={styles.getStartedBanner}>
                            <img src="/buy_banner.webp"
                                 alt="Buy Instagram Followers, Likes, Views, Comments with Tagiamtop"/>
                            <div>
                                <p className={styles.banner_title}>Get Started</p>
                                <p className={styles.banner_text}>
                                    Start right now by choosing activities on Instagram without a password. We have
                                    trial version
                                </p>
                                <ButtonComponent
                                    text="Buy Started"
                                    type="fill"
                                    onClick={() => router.push("/buy-basket-now")}
                                />
                            </div>
                        </div>
                        <div className={styles.review_comment_container}>
                            <div className={styles.review_comment}>
                <span className={styles.review_comment_title_container}>
                  <p className={styles.review_comment_title}>
                    Rated by 10 reviews{" "}
                  </p>
                  <ReactStars
                      value={5}
                      count={5}
                      size={
                          windowInnerWidth < 445
                              ? 20
                              : windowInnerWidth < 620
                              ? 30
                              : 50
                      }
                      color2={"#ffd700"}
                  />
                </span>
                                <p className={styles.info_text}>
                                    Every review is an indicator of customer satisfaction. We are tracking your feedback
                                </p>

                                <div className={styles.review_comment_row}>
                                    <div className={styles1.comments_container}>
                                        {comment?.map(
                                            (item, index) =>
                                                index < readMore && (
                                                    <Comment
                                                        key={item.name}
                                                        bg="#E4E0FE"
                                                        border="2px dashed #D8BFD8"
                                                        name={item.name}
                                                        star={item.star}
                                                        text={item.text}
                                                    />
                                                )
                                        )}

                                        <p style={{marginTop: 20}}>
                                            <a
                                                style={{color: "#8C66FA", cursor: "pointer"}}
                                                onClick={() => setReadMore(comment.length)}
                                            >
                                                Read More Reviews
                                            </a>
                                        </p>
                                    </div>
                                    <Review service="Likes"/>
                                </div>
                            </div>
                        </div>
                    </Layer>
                </div>
            </div>
        </>
    );
}
