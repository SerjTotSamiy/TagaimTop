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

const BuyInstagramLikes = ({text}) => {
    const router = useRouter();
    const {price, allInfo, setUrl} = useContext(MeContext);
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
            console.log('hello, we r here, yep!')
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

                    <p className={styles.buyLikes_title}>Buy Likes</p>
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
                                        index={index}
                                        banner="/buylikesbanner2.png"
                                        text="Instagram Auto-Likes"
                                        id={"AUTOLIKES"}
                                        onClick={() => {
                                            setPriceValue((prev) => item?.price);
                                            setCounts((prev) => item?.count);
                                            setBuyType((prev) => "Likes");
                                            setUrl("buy-instagram-likes");
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
                                        index={index}
                                        banner="/buylikesbanner2.png"
                                        text="Instagram Auto-Likes"
                                        onClick={() => {
                                            setPriceValue((prev) => item?.price);
                                            setCounts((prev) => item?.count);
                                            setBuyType((prev) => "Likes");
                                            setUrl("buy-instagram-likes");
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
                            Here at Buzzoid, we pride ourselves on exceptional service and
                            affordable prices. Don’t just take our word for it – check out
                            what customers say about our Instagram likes below
                        </p>

                        <div className={styles1.review_comment_row}>
                            <Review service={"Likes"}/>
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
                                        onClick={() => comment && setReadMore(comment.length)}
                                    >
                                        Read More Reviews
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"container"}>
                    <div
                        /*   data-aos="fade-up"
                           data-aos-duration="500"
                           data-aos-offset="1600"*/
                    >
                        <InfoBlock
                            text={
                                <div>
                                    <h2 className={styles1.info_title}>{text[4].title}</h2>
                                    <p className={styles1.info_text}>
                                        {text[4].content}
                                    </p>
                                    <p className={styles1.info_text}>{text[4].content2}</p>
                                    <h3 className={styles1.info_title} style={{marginTop: 30, fontSize: '34px'}}>
                                        {text[4].title2}
                                    </h3>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>{text[4].li1}</li>
                                        <p className={styles1.info_text}>{text[4].content4}</p>
                                        <li>{text[4].li2}</li>
                                        <p className={styles1.info_text}>{text[4].content5}</p>
                                    </ul>
                                    <div>
                                        <h2 className={styles1.info_title}>{text[4].title3}</h2>
                                        <p className={styles1.info_text}>{text[4].content6}</p>
                                        <p className={styles1.info_text}>{text[4].content7}</p>
                                        <p className={styles1.info_text}>{text[4].content8}</p>
                                        <p className={styles1.info_text}>{text[4].content9}</p>
                                    </div>
                                    <div>
                                        <h2 className={styles1.info_title}>{text[4].title4}</h2>
                                        <p className={styles1.info_text}>{text[4].content10}</p>
                                    </div>

                                    <div className={styles1.info_text}>
                                        <p style={{marginBottom: 10}}>{text[3].content2}</p>
                                        <p>{text[3].content4}</p>
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
                        "All likes will appear organic as they come from different Instagram users." +
                        " Buying 10 likes can bring more likes, triple or quadruple of the original number of likes.",
                    content10: 'The moment you place your order and pay for it, you will get them instantly.' +
                        ' You will see an increase in the activity in your account such as more people talking ' +
                        'about you or following for you.' +
                        ' Although we sell real likes from real people, we gradually drip' +
                        ' likes to your account to make it appear natural.' +
                        ' Rest assured that full delivery is achieved three days after ' +
                        'your order. In a matter of a few days, your brand or profile' +
                        ' will be the talk of internet users, especially on Instagram.',
                },
            ],
        },
    };
}

export default BuyInstagramLikes;
