import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import {Layer} from "../component/Layer/Layer";
import styles from "/styles/BuyInstagramLikes.module.sass";
import styles1 from "/styles/Home.module.sass";
import {ButtonComponent} from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import {useRouter} from "next/router";
import ModalBuy from "../component/ModalBuy/ModalBuy";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import AmbientBlock from "../component/AmbientBlock/AmbientBlock";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import {NextSeo} from "next-seo";
import NextHead from "next/head";
import Image from "next/image";
import CommonError from "../component/CommonError/CommonError";

const BuyInstagramLikes = ({text}) => {
    const router = useRouter();
    const {price, allInfo, setUrl, modalData, setModalData} = useContext(MeContext);
    const axios = useAxios();
    const [readMore, setReadMore] = useState(3);
    const [type, setType] = useState({1: "fill", 2: "outline"});

    let [bgArray, setBgArray] = useState({
        0: "/pricebg1.webp",
        1: "/pricebg2.webp",
        2: "/pricebg3.webp",
        3: "/pricebg4.webp",
    });
    const [windowInnerWidth, setWindowInnerWidth] = useState("");
    const [buyType, setBuyType] = useState("");
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
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
    const [change, setChange] = useState(false);
    const [comment, setComment] = useState([]);

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

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (window) setWindowInnerWidth(window.innerWidth);
        getComment();
        window.addEventListener("resize", () =>
            setWindowInnerWidth(window.innerWidth)
        );
    }, []);
    let ref1 = useRef();
    let ref2 = useRef();

    return (
        <>
            {" "}
            <NextHead>
                <title>
                    Buy Instagram Likes - Social Media Services Store - TagIamTop</title>

                <meta
                    name="url"
                    property="og:url"
                    content="https://tagiamtop.com/buy-instagram-likes"
                />
                <meta
                    name="title"
                    property="og:title"
                    content="Buy Instagram Likes - Social Media Services Store - TagIamTop"
                />
                <meta
                    name="twitter:title"
                    content="Buy Instagram Likes - Social Media Services Store - TagIamTop"
                />
                <meta
                    name="description"
                    property="og:description"
                    content="Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business."
                />
                <meta
                    name="twitter:description"
                    content="Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business."
                />

                <link
                    rel="canonical"
                    href="https://tagiamtop.com/buy-instagram-likes"
                />
                {/*<script id="__NEXT_DATA__" type="application/json" />*/}
            </NextHead>
            <Layer firstPage={false}>
                <div className={styles.header_banner}>
                    <p className={styles.header_title}>
                        Buy Instagram likes and auto-likes{" "}
                        <Image
                            src="/like.svg"
                            alt="Instagram like"
                            width={54}
                            height={41}
                        />
                    </p>
                    <p className={styles.header_text}>
                        The best site to buy Instagram likes. See our deals below!
                    </p>

                    <img
                        className={styles.header_arrow}
                        src="/arrow-detail.svg"
                        alt="header_arrow"
                        onClick={() => window.scrollTo(0, 450)}
                    />
                </div>
                {open && (
                    <ModalBuy
                        setOpen={setOpen}
                        open={open}
                        count={counts}
                        amount={priceValue}
                        times={"one time"}
                        service={buyType}
                        tarifs={price?.Likes?.plans}
                        setService={setBuyType}
                        setCounts={setCounts}
                        setAmount={setPriceValue}
                    />
                )}

                <div className={styles.header_background}>
                    <PageTitle title={"Buy Instagram likes and auto-likes"}/>

                    <p className={styles.buyLikes_title}>Our rates</p>
                    {price["Likes"]?.info?.length > 0 &&
                        <CommonError error={price["Likes"]?.info[0]} />
                    }

                    <div className={styles.buyLikes_item_container} ref={ref1}>
                        <Carousel
                            wrapAround={true}
                            scrollMode="remainder"
                            slidesToShow={
                                windowInnerWidth < 690
                                    ? 1
                                    : windowInnerWidth < 1000
                                    ? 2
                                    : windowInnerWidth < 1300
                                        ? 3
                                        : 4
                            }
                        >
                            {price?.Likes?.plans.map((item, index) => (
                                <BuyLikes
                                    key={item?.count}
                                    likes={item?.count}
                                    price={item?.price}
                                    bgArray={bgArray}
                                    isDisabled={item.types.t1.disabled === "1" && item.types.t2.disabled === "1"}
                                    index={index}
                                    banner="/buylikesbanner2.png"
                                    text="Instagram Likes"
                                    id={"LIKES"}
                                    icon="/like0.svg"
                                    onClick={() => {
                                        setPriceValue((prev) => item?.price * 0.8);
                                        setCounts((prev) => item?.count);
                                        setBuyType((prev) => "Likes");
                                        setUrl("buy-instagram-likes");
                                        setModalData((prev) => ({
                                            ...prev,
                                            service: "Likes",
                                            counts: item?.count,
                                            priceValue: item?.price
                                        }))
                                        router.push({
                                            pathname: `/step1`,
                                            query: {
                                                service: "Likes",
                                                counts: item?.count,
                                                priceValue: item?.price,
                                            },
                                        });
                                    }}
                                />
                            ))}
                        </Carousel>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="600">
                        <InfoBlock
                            text={
                                <p>
                                    <p className={styles1.info_text} style={{float: "left"}}>
                                        <img
                                            src="/buylikesinfo1.webp"
                                            alt="buy Instagram likes by crypto"
                                            style={{
                                                float: "left",
                                                marginRight: 80,
                                                marginBottom: 30,
                                            }}
                                        />
                                        <p className={styles1.info_title}>{text[0].title}</p>
                                        <p>{text[0].content}{" "}</p>
                                        <p>{text[0].content1}{" "}</p>
                                        <br/>
                                        <p>{text[0].content2}{" "}</p>
                                        <p>{text[0].content3}{" "}</p>
                                        <p>{text[0].content4}{" "}</p>
                                    </p>
                                </p>
                            }
                            fade={true}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="600">
                        <InfoBlock
                            text={
                                <p>
                                    <p className={styles1.info_text}>
                                        <img
                                            src="/buylikesinfo2.webp"
                                            alt="cheap Instagram likes"
                                            style={{
                                                float: "right",
                                                marginLeft: 80,
                                                marginBottom: 30,
                                            }}
                                        />
                                        <p className={styles1.info_title}>{text[1].title}</p>
                                        <p>{text[1].content}</p>
                                        <p>{text[1].content2}</p>
                                    </p>
                                </p>
                            }
                            reverse={true}
                        />
                    </div>
                </div>
                <p className={styles.buyLikes_title}>Buy Auto-Likes</p>
                <div className={styles.autoLike_buttons}>
                    <ButtonComponent
                        text="Instant"
                        style={style[type["2"]]}
                        type={type["2"]}
                        onClick={() => {
                            setChange(!change);
                            setType({1: "outline", 2: "fill"});
                            ref1?.current?.scrollIntoView();
                        }}
                    />
                    <ButtonComponent
                        text="Gradual"
                        style={style[type["1"]]}
                        type={type["1"]}
                        onClick={() => {
                            setChange(!change);
                            setType({1: "fill", 2: "outline"});
                            ref2?.current?.scrollIntoView();
                        }}
                    />
                </div>
                <div className={styles.autoLike_banner}>
                    <img
                        src="/buylikespurchasebanner.webp"
                        alt="buy Instagram auto likes"
                    />
                    <p>
                        Want to make a purchase?
                        <br/> click here!
                    </p>
                </div>

                <div style={{background: "url('/bacgraund-works.jpg')"}}>
                    <div className={"container"}>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-offset="1400"
                        >
                            <InfoBlock
                                text={
                                    <p>
                                        <p
                                            className={styles1.info_title}
                                            style={{textAlign: "right"}}
                                        >
                                            {text[2].title}
                                        </p>
                                        <p className={styles1.info_text}>
                                            <img
                                                src="/buylikesinfo3.webp"
                                                alt="real Instagram likes"
                                                style={{
                                                    float: "left",
                                                    marginRight: 100,
                                                    marginBottom: 30,
                                                }}
                                            />
                                            <p>{text[2].content}{" "}</p>
                                            <p>{text[2].content2}{" "}</p>
                                            <p>{text[2].content3}{" "}</p>
                                        </p>
                                    </p>
                                }
                                reverse={false}
                            />
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-offset="1600"
                        >
                            <InfoBlock
                                text={
                                    <p>
                                        <p className={styles1.info_title}>{text[3].title}</p>
                                        <p className={styles1.info_text}>
                                            <img
                                                src="/buylikesinfo4.webp"
                                                alt="instant Instagram likes"
                                                style={{
                                                    float: "right",
                                                    marginLeft: 100,
                                                    marginBottom: 30,
                                                }}
                                            />
                                            {text[3].content}
                                        </p>
                                        <p className={styles1.info_title} style={{marginTop: 30}}>
                                            {text[3].title2}
                                        </p>
                                        <p className={styles1.info_text}>
                                            <p style={{marginBottom: 10}}>{text[3].content2}</p>
                                            <p>{text[3].content3}</p>
                                            <p>{text[3].content4}</p>
                                        </p>
                                    </p>
                                }
                                reverse={true}
                            />
                        </div>
                    </div>
                </div>

                {change ? (
                    <>
                        <p className={styles.buyLikes_title}>Instant</p>
                        <div className={styles.buyLikes_item_container} ref={ref2}>
                            <Carousel
                                wrapAround={true}
                                scrollMode="remainder"
                                slidesToShow={
                                    windowInnerWidth < 690
                                        ? 1
                                        : windowInnerWidth < 1000
                                        ? 2
                                        : windowInnerWidth < 1300
                                            ? 3
                                            : 4
                                }
                            >
                                {price?.Likes?.plans.map((item, index) => (
                                    <BuyLikes
                                        key={item?.count}
                                        likes={item?.count}
                                        price={item?.price}
                                        bgArray={bgArray}
                                        isDisabled={item.types.t1.disabled === "1" && item.types.t2.disabled === "1"}
                                        index={index}
                                        banner="/buylikesbanner2.png"
                                        text="Instagram Auto-Likes"
                                        id={"AUTOLIKES"}
                                        onClick={() => {
                                            setPriceValue((prev) => item?.price);
                                            setCounts((prev) => item?.count);
                                            setBuyType((prev) => "Likes");
                                            setUrl("buy-instagram-likes");
                                            setModalData((prev) => ({
                                                ...prev,
                                                service: "Likes",
                                                counts: item?.count,
                                                priceValue: item?.price
                                            }));
                                            router.push({
                                                pathname: `/step1`,
                                                query: {
                                                    service: "Likes",
                                                    counts: item?.count,
                                                    priceValue: item?.price
                                                },
                                            });
                                        }}
                                    />
                                ))}
                            </Carousel>
                        </div>
                    </>
                ) : (
                    <div>
                        <p className={styles.buyLikes_title}>Gradual</p>
                        <div className={styles.buyLikes_item_container}>
                            <Carousel
                                wrapAround={true}
                                scrollMode="remainder"
                                slidesToShow={
                                    windowInnerWidth < 690
                                        ? 1
                                        : windowInnerWidth < 1000
                                        ? 2
                                        : windowInnerWidth < 1300
                                            ? 3
                                            : 4
                                }
                            >
                                {price["Auto-Likes"]?.plans.map((item, index) => (
                                    <BuyLikes
                                        key={item?.count}
                                        likes={item?.count}
                                        price={item?.price}
                                        bgArray={bgArray}
                                        isDisabled={item.types.t1.disabled === "1" && item.types.t2.disabled === "1"}
                                        index={index}
                                        banner="/buylikesbanner2.png"
                                        text="Instagram Auto-Likes"
                                        onClick={() => {
                                            setPriceValue((prev) => item?.price);
                                            setCounts((prev) => item?.count);
                                            setBuyType((prev) => "Likes");
                                            setUrl("buy-instagram-likes");
                                            setModalData((prev) => ({
                                                ...prev,
                                                service: "Likes",
                                                counts: item?.count,
                                                priceValue: item?.price
                                            }))
                                            router.push({
                                                pathname: `/step1`,
                                                query: {
                                                    service: "Likes",
                                                    counts: item?.count,
                                                    priceValue: item?.price,
                                                },
                                            });
                                        }}
                                    />
                                ))}
                            </Carousel>
                        </div>
                    </div>
                )}
                <div className={styles1.review_comment_container}>
                    <div className={styles1.review_comment}>
                        <p className={styles.buyLikes_title}>Comments about likes</p>

                        <p className={styles1.info_text}>
                            Every review is an indicator of customer satisfaction. We are tracking your feedback
                        </p>

                        <div
                            className={styles1.review_comment_row}
                            style={{justifyContent: comment?.length > 0 ? "space-between" : "center"}}
                        >
                            {comment?.length > 0
                                && <div className={styles1.comments_container}>
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
                                            onClick={() => comment && setReadMore(comment.length)}
                                        >
                                            Read More Reviews
                                        </a>
                                    </p>
                                </div>
                            }
                            <Review service={"Likes"}/>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="500"
                        data-aos-offset="1600"
                    >
                        <InfoBlock
                            text={
                                <div>
                                    <h2>{text[4].title}</h2>
                                    <p className={styles1.info_text}>
                                        {text[4].content}
                                    </p>
                                    <p className={styles1.info_text}>{text[4].content2}</p>
                                    <h3 style={{marginTop: 30}}>
                                        {text[4].title2}
                                    </h3>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>{text[4].li1}</li>
                                        <p className={styles1.info_text}>{text[4].content4}</p>
                                        <li>{text[4].li2}</li>
                                        <p className={styles1.info_text}>{text[4].content5}</p>
                                    </ul>
                                    <div>
                                        <h2>{text[4].title3}</h2>
                                        <p className={styles1.info_text}>{text[4].content6}</p>
                                        <p className={styles1.info_text}>{text[4].content7}</p>
                                        <p className={styles1.info_text}>{text[4].content8}</p>
                                        <p className={styles1.info_text}>{text[4].content9}
                                            <span style={{fontWeight: 'bolder'}}>{text[4].content9Plus}</span>
                                            {text[4].content9PlusOne}
                                        </p>
                                    </div>
                                    <div>
                                        <h2>{text[4].title4}</h2>
                                        <p className={styles1.info_text}>{text[4].content10}</p>
                                    </div>

                                    <div className={styles1.info_text}>
                                        <h3 style={{marginBottom: 10, fontSize: "32px"}}
                                        >{text[4].title5}</h3>
                                        <p>{text[4].content11}</p>
                                        <p>{text[4].content12}<span
                                            style={{fontWeight: 'bold'}}>{text[4].content13}</span>{text[4].content14}
                                        </p>
                                        <p>{text[4].content15}</p>
                                        <p>{text[4].content16}</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >{text[4].title6}</h2>
                                        <p>{text[4].content17}</p>
                                        <p>{text[4].content18}</p>
                                        <p>{text[4].content19}</p>
                                        <p>{text[4].content20}</p>
                                        <p>{text[4].content21}<span
                                            style={{fontWeight: 'bold'}}>{text[4].content22}</span>{text[4].content23}
                                        </p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h3 style={{marginBottom: 10}}
                                        >{text[4].title7}</h3>
                                        <ul style={{listStyleType: 'numeric'}}>
                                            <li>{text[4].li3}</li>
                                            <li>{text[4].li4}</li>
                                            <li>{text[4].li5}</li>
                                        </ul>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <p>{text[4].content24}</p>
                                        <p>{text[4].content25}</p>
                                        <p>{text[4].content26}</p>
                                        <p>{text[4].content27}</p>
                                        <p>{text[4].content28}</p>
                                        <p>{text[4].content29}</p>
                                        <p>{text[4].content30}</p>
                                        <p>{text[4].content31}</p>
                                        <p>{text[4].content32}</p>
                                        <p>{text[4].content33}</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                            className={styles1.info_title}>{text[4].title8}</h2>
                                        <p>{text[4].content34}</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                            className={styles1.info_title}>{text[4].title9}</h2>
                                        <ul style={{listStyleType: "lower-latin"}}>
                                            <li>{text[4].li6}</li>
                                            <li>{text[4].li7}</li>
                                            <li>{text[4].li8}</li>
                                            <li>{text[4].li9}</li>
                                            <li>{text[4].li10}</li>
                                        </ul>
                                        <p>{text[4].content35}</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                            className={styles1.info_title}>Do not spread fake news using your
                                            account</h2>
                                        <p>Many people used the Instagram as a forum for debates on controversial
                                            issues. Both sides may include misleading information or fake ones just to
                                            defend his stand or position.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                            className={styles1.info_title}>If you are promoting a brand, understand the
                                            advertising rules of Instagram. </h2>
                                        <ul style={{listStyleType: "lower-latin"}}>
                                            <li>discrimination based on race, religion, sexual orientation, ethnivity,
                                                and color
                                            </li>
                                            <li>health information must not be requested</li>
                                            <li>ask about criminal record or history, financial record</li>
                                        </ul>
                                        <p>There are changes in Instagram rules from time to time. Keep updated to
                                            prevent problems with the platform</p>
                                        <p>Below are frequently asked questions regarding buying IG likes. If you cannot
                                            find an answer to your query here, you may seek help from our expert
                                            customer representatives.
                                        </p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >What are the benefits of paying for Instagram
                                            likes? </h2>
                                        <p>The process of increasing likes shows interest in our product, which means it
                                            is a good way of attracting potential clients. If you are trying to enhance
                                            your online presence and make your brand known, Instagram is top social
                                            media platform to use. These like appear for people to notice you and your
                                            brand, getting many likes is one way of making them interested. Many of them
                                            would wonder why many Instagram users like your posts. They might check them
                                            to see why they are popular and like them, too. You get real likes from real
                                            people.</p>
                                        <p>When you buy IG likes from <span
                                            style={{fontWeight: "bold"}}>TagIamTop</span>, we guarantee the quality
                                            of it.
                                        </p>
                                        <p>You can see people actively sharing, saving, viewing, and commenting on the
                                            Instagram posts that they liked.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Do you have a basis in finding likes for
                                            me?</h2>
                                        <p>When you order Instagram likes, we use completed IG profiles which also have
                                            different activities. It is important that they are interested in your posts
                                            and willing like, save, share, and comment on your content.</p>
                                        <p>We carefully choose the likes we buy for you. We choose people If it comes
                                            from an account that is not aligned with yours. There is a big chance that
                                            these people will actively participate in whatever actions are required of
                                            them.
                                        </p>
                                        <p>All likes are targeted based on hashtags and content. Buying likes from
                                            people whose interests are contrary to yours can be a waste of time and
                                            resources. Besides, their likes might not be counted by the platform.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >How do you ensure that the likes I get are
                                            safe?</h2>
                                        <p>Everything is done to safeguard TagIamTop’s Instagram likes. We use the
                                            safest payment methods for your orders, including crypto currency. We do not
                                            require customers to give their personal details during the transaction.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Is it easy to buy likes?</h2>
                                        <p>To buy Instagram likes is as easy as pie. Here are the steps:</p>
                                        <ul style={{listStyleType: "numeric"}}>
                                            <li>Choose a package from the ones listed on the webite.</li>
                                            <li>Decide what type of likes you want. You can select High-quality or
                                                Premium. Premium costs more than High-quality but the price is worth it.
                                            </li>
                                            <li> State the manner of feeding the like to your account to be dripped
                                                within three days or in bulk
                                            </li>
                                            <li>Check payment method, pay and check out your cart. The process is
                                                fast.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Can you give me a reason for using your
                                            service?</h2>
                                        <p>There are several reasons for you to use our service when buying Instagram
                                            likes.</p>
                                        <ul style={{listStyleType: "numeric"}}>
                                            <li>We make sure that the accounts align with your interests. This will make
                                                likes and engagements look natural because you are talking about related
                                                topics. Others will not wonder why you like each other’s posts.
                                            </li>
                                            <p>We also advertise your account to other users for them to give your posts
                                                a heart, which means they like them.</p>
                                            <li>We give you choices in terms of package to buy, number and type of
                                                likes, and payment options. Your account will receive the likes that you
                                                paid for instantly. No one would guess that the increase in traffic is
                                                the result of the likes that you purchased.
                                            </li>
                                            <li> Our packages are affordable. You can easily boost your account’s online
                                                presence without spending much and get good results. If you use crypto
                                                currency, you save on fees and other charges.
                                            </li>
                                            <li>We guarantee utmost privacy. You do not have to give your password and
                                                other personal information.
                                            </li>
                                            <li>Our services includes round-the-clock customer support. Our team is
                                                ready to answer your questions or assist you all the time.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Why is engagement important?</h2>
                                        <p>Engagement refers to the activities in one’s Instagram account such as
                                            viewing a post, liking it, commenting, and sharing. If you are promoting a
                                            brand with likes, you could have an engagement rate of 50%, which is already
                                            high.</p>
                                        <p>Most of the accounts in Instagram started as personal account. As their
                                            number of followers grow, companies hire them to promote their products and
                                            they are paid for it. They become social media influencers.</p>
                                        <p>Influencers may be:</p>
                                        <ul>
                                            <li>Nano less than 10,000 followers Micro 10,000 to 100,000 followers
                                            </li>
                                            <li>Macro 100,000 to 11 million followers
                                            </li>
                                            <li> Mega more than 1 million fllowers.
                                            </li>
                                        </ul>
                                        <p>Many companies prefer to promote their brands, products, and services using
                                            Influencers on rather than traditional advertisers.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >What is the right time to start an Instagram
                                            account?</h2>
                                        <p>People who aspire to become a successful businessman or endorser ask if it is
                                            never too late to start an Instagram account. Your success in Instagram does
                                            not depend on how long you have created one. It depends on what you have
                                            done to build the presence of your account. Is it too late to start? No. if
                                            you find time is too short for you to work on your Instagram account, you
                                            are wrong. You can <span
                                                style={{fontWeight: "bold"}}>buy Instagram likes</span> and grow your
                                            brand
                                            within a short
                                            time. You can start now and feed your account with likes that appears
                                            natural and organic without waiting and taking much effort.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >What topics should I focus on to get ore
                                            likes from my audience?</h2>
                                        <p>Health and beauty, wellness, diet programs, and fashion may be appealing to
                                            all types of Instagram users. You can also select a niche and grow your
                                            specific audience. You can talk about dresses for plus size women, exercises
                                            to keep one look young, slimming diets for obese women, natural skin
                                            lighteners, and shoes for kids. You do not need to write long articles.
                                            That’s how simple yet effective Instagram is. Grab the attention of your
                                            followers by posting the following: </p>
                                        <p style={{fontWeight: "bold"}}>Photos</p>
                                        <p>Use high-quality, clear and appealing photos to highlightt your brand or
                                            business. An image of a lovely clear-skinned girl will the best content for
                                            a food supplement, beauty product, or exercise regimen. </p>
                                        <p style={{fontWeight: "bold"}}>Videos</p>
                                        <p>You can post tutorial videos, your Instagram story, a day-in-my-life video,
                                            animated graphics, selfie videos, various images with a theme.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Should I pay for social media
                                            promotions?</h2>
                                        <p>Growing a social media account organically can be a long process. Time is of
                                            utmost importance to gain traction. <span
                                                style={{fontWeight: "bold"}}>Buying Instagram likes</span> or
                                            paying for
                                            advertisements is a the best shortcut to social media prominence.</p>
                                        <p>You can buy Instagram likes on our website and get noticed within a few days
                                            of getting automated likes from us.</p>
                                        <p>You can also promote your profile and be recognized in Instagram using the
                                            following techniques: Expand the reach of your post by promoting it.
                                            Advertise stories in the story section of your Instagram page. Create posts
                                            targeting specific groups or locations.</p>
                                        <p>Social media advertising can do wonders for you but, always think your return
                                            of investment. You might be carried away by the prospect of harnessing your
                                            online presence, yet, losing in the long run.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Where can I buy Instagram likes that an bring
                                            me revenue?</h2>
                                        <p>If you want to spend less and earn more, order Instagram likes from our
                                            website. The likes you get from us are real and the come from real people.
                                            This is why you can get a high engagement rate.
                                            We have experienced staff that is experts in driving traffic to your website
                                            in a natural way. If you buy a thousand likes from us, the engagements in
                                            your Instagram account will be proportional to your number of followers. We
                                            create excitement to awaken everyone’s interest.
                                        </p>
                                        <p>When Instagram users ask what makes your account popular, they will check is
                                            out and join the conversation until your post becomes naturally viral.</p>
                                    </div>
                                    <div className={styles1.info_text}>
                                        <h2 style={{marginBottom: 10}}
                                        >Are there things that I must refrain from
                                            doing in Instagram?</h2>
                                        <p>Avoid using low-quality content. Your audience will find your social media
                                            account less worthy to visit. Do not disregard leads. Always consider people
                                            interacting with you a potential customer. Avoid too many or too few posts.
                                            The ideal number of post id one perday, seven per week.
                                        </p>
                                        <h2>What should I do to influence others through Instagram?</h2>
                                        <p>You have heard about people becoming influencers through their Instagram
                                            account. Here are some tips on how to become one. </p>
                                        <p>Focus on what you do well and where you are interested.</p>
                                        <p>Choose topics where you feel comfortable. It must be something in which you
                                            are passionate. </p>
                                        <p>Make sure it suits your personality. </p>
                                        <p>Your followers want someone who is an expert in his chosen field. </p>
                                        <p>Use high-quality images, videos, or graphics.</p>
                                        <p>Images that are awesome, stunning, clear, and colorful usually stand out.
                                            Avoid dull and blurred images. Your followers would not like or share
                                            them. </p>
                                        <p>Be consistent with your posts.</p>
                                        <p>Always posting clear, stunning, and relevant photos will earn your account a
                                            good reputation. Your audience will be excited to view your posts because
                                            they know that they will like them. Watch out for trending hashtags.</p>
                                        <p>Keep your content fresh and updated. Your followers do not like stale
                                            content. </p>
                                        <p>Use popular <span style={{fontWeight: "bold"}}>hashtags.</span></p>
                                        <p>It will make finding you on the internet easy. Observe right timing.</p>
                                        <p>To get the best exposure, post your content at the right time. Some studies
                                            show that the best day of positing is between Tuesday and Friday and from 9
                                            in the morning 6 in the evening.</p>
                                        <p>During this time, Instagram users are most active. You can <span
                                            style={{fontWeight: "bold"}}>get
                                            likes,</span> shares,
                                            comments and other ways of engagement. Utilize geo-tagging</p>
                                        <p>Let your audience know the location or event in your posts. When you tag
                                            someone, this information will appear. When a search is made on the place or
                                            activity, they will appear in the search results. Pay attention to your
                                            audience.</p>
                                        <p>Engaging with your audience is vital for your online success. Let them know
                                            that their comments are important. Make them feel that you value them and
                                            that they are important to you.</p>
                                        <p>Enhance your online presence by buying likes. Visit our website for several
                                            packages with affordable prices and high-quality likes. We offer real likes
                                            made by authentic people.</p>
                                        <p>Our website strictly observes Instagram regulations. We keep updated with the
                                            changes so that we always remain compliant. We want your brand and business
                                            to gain prominence online.
                                            Grow your account the organic way. Order IG likes now.
                                        </p>
                                    </div>
                                </div>
                            }
                            reverse={true}
                        />
                    </div>
                </div>
            </Layer>
        </>
    );
};

export async function getStaticProps({params}) {
    return {
        props: {
            meta: {
                description:
                    "Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business.",
            },
            text: [
                {
                    title: "Buy Instagram Likes From The World’s #1 Site",
                    content:
                        "If you are promoting brands or services for Social Media user aged below 40, then, Instagram is the best place to find clients for you. " +
                        "You do not have to spend much on growing your account." +
                        " You can buy Instgram likes to become more visible among other members and users of the Social Network.",
                    content2: "What Is Instagram?",
                    content3: "Instagram is a online platform that uses visuals rather than text for content. One can post photos of breathtaking people, places, objects, and sceneries, awesome videos and an eye-catching or a unique selfy. One cannot easily find words to describe them.",
                    content4: "Pictures speak a thousand words and this is what Instagram does. It communicates to its audience not with words but with pictures and videos. The appeal lies in the awesomeness and wholesomeness of the content.",
                },
                {
                    title: "How to Gain Popularity in Instagram",
                    content:
                        "One way to become popular in Instagram is to earn likes from your " +
                        "followers or people who are strangers for you and who is registered on this platform. " +
                        "You should strive to get more likes, it will help other users to find you and your brand on the Internet." +
                        " You can use hashtags or trending words or phrases with the number sign" +
                        " before them. Hashtags show trending topics in yur Instagram." +
                        " People who like similar topics may check your content and like it. " +
                        "The likes can grow as other Instagram users whose interests align with yours" +
                        " will view and like your post.",
                    content2: "The social network algorithms calls thee likes organic and they can enhance your online visibility." +
                        " But, the process is tedious." +
                        " You must spend time posting interesting hashtags and attention-grabbing images" +
                        " to get the amount of likes you need so that a big audience can see you and your brand online"
                },
                {
                    title: "What Is An Instagram Like?",
                    content:
                        " BFor IG entrepreneurs, likes represent your capital. Without them," +
                        " your business cannot grow much. When you put a heart near an image or a comment," +
                        " it indicates a like. Because others need likes," +
                        " they will like your post, too and expect you to return the favor by liking their posts as well...",
                    content2: "There is a way to make your brand standout and become in demand. You can buy Instagram likes and get a career " +
                        "development like a successful social media marketer or influencer.",
                    content3: "But, this process of improving your visibility online or your brand can take a long time." +
                        " Getting 10 likes a day may not be enough. So, why not try another way, which could be more effective? " +
                        "You can find one of these ways using the keyword \"buy Instagram likes",
                },
                {
                    title: "Why Should You Buy Automatic Instagram Likes.",
                    title2: "Viewers can like, share, save, or comment on the photos.",
                    content:
                        "Instagram has become the leading hub for internet users from all over the world who aspire to" +
                        " grow their business. This platform is much younger than other media platforms." +
                        " Yet, it has captured billions of users worldwide." +
                        " The app uses visuals such as images and videos to share with other users.",
                    content2:
                        "Instead of using texts, Instagram uses hashtag to show what story the image tells. " +
                        "Hashtags gives the audience an idea what the posts, photos, videos are all about." +
                        " They make it easy to find brands, products, or services on line.",
                    content3:
                        "A brand that is recognized in Instagram means it can reach billions of " +
                        "users and target clients. " +
                        "If you are endorsing a brand or trying to influence others having" +
                        " an active Instagram profile can be your ticket to a successful career" +
                        " as a businessman or as an influencer.",
                    content4: "But, not all with Instagram accounts become winners overnight. It takes a lot of" +
                        " time and effort to build an online presence that can attract lots of" +
                        " potential customers. You will need hundreds to thousands of likes everyday" +
                        " to get noticed. This is quite difficult to attain unless you buy IG likes.",
                },
                {
                    title: "Why is Buying Likes",
                    title2: "Here are some tips on how to buy Instagram likes the safest way.",
                    title3: "Get Instagram Likes with TagIamTop",
                    title4: "Here are the top reasons to buy IG likes from us: Instant delivery",
                    title5: "Premium Quality Likes",
                    title6: "How to Pay for IG Likes",
                    title7: "How do you pay using bit coins? Here are the steps",
                    title8: "Do not use hashtags that Instagram does not allow.",
                    title9: "Avoid doing the following: ",
                    content: 'You have been growing your Instagram account for years. ' +
                        'Every time you check your likes, the count remains the same or increases a little.' +
                        ' You are still too far from the votes needed to launch and sell a product or become an' +
                        ' influencer or endorser',
                    content2: 'The future for you is bleak. You still have a long way to go to reach your aim.' +
                        ' Is there anything you can do to shorten the journey? ' +
                        'When it comes to online visibility, there is a short cut for you. Why not buy IG likes?',
                    content3: "Nowadays, you can see your IG account grow in just a few days." +
                        " You can order likes from trusted websites to boost your online engagement and presence." +
                        " You might have some second thoughts. " +
                        "But why not give it a try? When done properly, the likes that you buy can look organic.",
                    li1: "Choose the best and right website.",
                    li2: 'Choose sellers of Instagram likes who know how to boost your IG account.' +
                        ' These websites usually recommends dripping the likes for several days.' +
                        ' Using them in bulk in a single day might make your account suspicious.',
                    content4: "Many websites sell likes but only a few sell real likes from real people." +
                        " Think about quality, not just quantity." +
                        " Feeding your IG account with fake likes can do more harm than good.\n" +
                        "Always read reviews of a website before buying likes from it." +
                        " Many websites buy real likes from freelance platforms.\n",
                    content5: 'If you have an average daily likes of 5 and you get more than a hundred the next day,' +
                        ' it may look suspicious and others would think you are using fake likes. ' +
                        'A gradual increase in likes will look more natural and believable.',
                    content6: "Are you looking for Instagram likes with high quality and instant delivery?" +
                        " Check our website and choose among the packages we offer. " +
                        "We guarantee the following: Real likes Instant delivery ",
                    content7: "Affordable price Choice between premium and high-quality likes Guaranteed safe",
                    content8: "Our aim is to see our customers’ brands stand out among " +
                        "others through active engagement in their Instagram accounts." +
                        " When IG profile has a lot of likes, the more users will be" +
                        " talking about him and his brand. " +
                        "Other people’s curiosity will lead them to see what’s the hype is all about.",
                    content9: "A like on your Instagram post may have a ripple effect." +
                        " Every time someone likes your post, you get a notification." +
                        " You can also share, comment, save, or like photos and images others shared.\n" +
                        "All likes will appear organic as they come from different Instagram users.",
                    content9Plus: " Buying 10 likes ",
                    content9PlusOne: "can bring more likes, triple or quadruple of the original number of likes.",
                    content10: 'The moment you place your order and pay for it, you will get them instantly.' +
                        ' You will see an increase in the activity in your account such as more people talking ' +
                        'about you or following for you.' +
                        ' Although we sell real likes from real people, we gradually drip' +
                        ' likes to your account to make it appear natural.' +
                        ' Rest assured that full delivery is achieved three days after ' +
                        'your order. In a matter of a few days, your brand or profile' +
                        ' will be the talk of internet users, especially on Instagram.',
                    content11: "We only sell the best." +
                        " We only sell the best. The likes that you will get from us are of the highest quality." +
                        " They come from real people giving you real likes." +
                        " They actively engage you and in return, you can give them a like, " +
                        "too. Both of you will benefit from the exchange of likes." +
                        " Excellent customer support Are you feeling in doubt or confused?" +
                        " Chat with one of our customer service representatives and get " +
                        "instant clarifications or answers. Buying made easy Purchasing Instagram likes is" +
                        " easy. Each package specified the price and qualities you can buy." +
                        " Options also include types of likes, which can be High-Quality or Premium." +
                        " Premium costs more but it recommended for those who are starting to" +
                        " build their online presence. Once the order is placed, it is delivered instantly." +
                        " Yet, they likes are fed into your account gradually to make the likes appear organic. ",
                    content12: "Buying ",
                    content13: "TagIamTop Instagram",
                    content14: " likes is quick, safe, and easy." +
                        " We guarantee high-quality and real likes from real people." +
                        " With a few clicks, you can watch the number of likes in your IG" +
                        " account increase each day",
                    content15: "Your part is to post engaging and attractive photos that will be interesting " +
                        "to other users of the platform. " +
                        "Keep the audience engaged by making short comments, liking, sharing, or saving their posts as well.",
                    content16: "When you order Instagram likes, you do not have to enter your password or give it " +
                        "to us to make sure that security breach will never happen.",
                    content17: "Buying likes from Instagram is a chance to show others your" +
                        " online presence the exposure you need to reach millions of IG users." +
                        " Getting required number of instagram signals with a few simple clicks is hard to achieve.",
                    content18: "Our website partners with other social media platforms to give you" +
                        " the boost that you need. You can see new activity on your Instagram account. " +
                        "You can check all your likes increase gradually until you have the likes you paid for.",
                    content19: "Additional engagement is noticeable as many people make comments," +
                        " view, share and like your posts." +
                        " These are real people that we have reached out for you." +
                        " Indeed, paying for social media likes is the best decision " +
                        "that you have made in your career as an online businessman or influencer.",
                    content20: "Our website use several payment methods for you purchases." +
                        " We accept the following: " +
                        "PayPal debit or credit card Western Union money transfer IG crypto payments",
                    content21: "Everyone who purchases items online is familiar with PayPal, debit or credit card," +
                        " Western Union, and money transfer. Some buy ",
                    content22: " Instagram likes crypto. ",
                    content23: "These are likes that one acquires using crypto currency or bit coins.",
                    li3: " Make a bit coin account.",
                    li4: " Buy bit coins from the bit coin base.",
                    li5: " Pay IG likes by depositing your bit coin to our website.",
                    content24: "There are several advantages when you use bitcoin to pay for Instagram likes.",
                    content25: " -     You do not have to pay fees.",
                    content26: " You do not have to pay for banking or other fees.\n" +
                        "When you pay for Instagram likes using Bitcoins, the transaction does not involve banking charges." +
                        " There is no penalty for going below the maintaining balance.\n",
                    content27: '-Payment charges are low even with international transactions.',
                    content28: 'Transaction involving crypto currency does not involve governments' +
                        ' and institutions. This means the fees for buying or selling in ' +
                        'the international market is lower than using other modes of payment. ',
                    content29: "-Extremely fast transfer.",
                    content30: "The transfer of Bitcoins is fast." +
                        " You do not have to wait for the transfer " +
                        "to be cleared by a bank or to have bank authorization",
                    content31: "-Mobile and secure.",
                    content32: "With crypto currency, you can pay or receive payments anywhere" +
                        " as long as you have internet access." +
                        " This eliminates the necessity of visiting a bank or" +
                        " a store when buying something.\n" +
                        "You do not have to provide personal information for any transaction," +
                        " reducing the chance of someone stealing it." +
                        " Only people who know the keys to your bit coin" +
                        " wallet can access your money.\n" +
                        "Working with us is always safe. We observe Instagram guidelines" +
                        " and make sure that we stay updated with the many changes." +
                        " We make your IG popularity to grow without relying on automated strategies.\n",
                    content33: "Our website works hand-in-hand with other social media platforms to" +
                        " promote your IG. This will give you a more expansive reach on the" +
                        " internet. We keep a low-key profile to make sure that not one of" +
                        " the accounts we handle will have to face sanctions such as getting banned. " +
                        "We assure you that comply with the latest rules of Instagram such as:",
                    content34: 'Instagram has a list of words or phrases that must not be used as' +
                        ' hashtags. Words associated with illegal drugs, pornography, sexual activities,' +
                        ' and many others. Accounts with posts bearing these hashtags are not shown to the audience.' +
                        ' To be sure yourare not violating the hashtag rule, check the list of banned words or phrases.',
                    li6: "making the same comments on several posts",
                    li7: "exceeding more than 60 comments in one hour",
                    li8: "using copyrighted images",
                    li9: "liking more than 300 posts\n",
                    li10: "using poor quality images",
                    content35: 'These actions make your Instagram account appear like a bot is doing the tasks.',
                },
            ],
        },
    };
}

export default BuyInstagramLikes;
