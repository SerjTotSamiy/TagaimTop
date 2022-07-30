import React, {useContext, useEffect, useState} from "react";
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import styles1 from "../styles/Home.module.sass";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import {Layer} from "../component/Layer/Layer";
import {useRouter} from "next/router";
import TextComponent from "../component/TextComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
import ModalBuy from "../component/ModalBuy/ModalBuy";

const BuyInstagramComments = ({text}) => {
    const router = useRouter();
    const {price, setUrl} = useContext(MeContext);
    const axios = useAxios();

    const [windowInnerWidth, setWindowInnerWidth] = useState("");

    const [comment, setComment] = useState([]);
    const [open, setOpen] = useState(false);
    const [counts, setCounts] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [readMore, setReadMore] = useState(3);
    const getComment = async () => {
        try {
            const data = new FormData();
            data.append("system", "Instagram");
            data.append("service", "Comments");
            const res = await axios.post("/review_list.php", data);
            if (res.status === 200) {
                setComment((prev) => res.data.data);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (window) setWindowInnerWidth(window?.innerWidth);
        getComment();
        window.addEventListener("resize", () =>
            setWindowInnerWidth(window.innerWidth)
        );
    }, []);
    const [buyType, setBuyType] = useState("");
    return (
        <Layer firstPage={false}>
            <Head>
                <title>Buy Instagram Comments - Social Media Services Store</title>

                <meta
                    name="url"
                    property="og:url"
                    content="https://tagiamtop.com/buy-instagram-comments"
                />
                <meta
                    name="title"
                    property="og:title"
                    content="Buy Instagram Comments - Social Media Services Store"
                />
                <meta
                    name="twitter:title"
                    content="Buy Instagram Comments - Social Media Services Store"
                />
                <meta
                    name="description"
                    property="og:description"
                    content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."
                />
                <meta
                    name="twitter:description"
                    content="Buy Instagram Comments from TagIamTop at $3.20 now. Instant delivery and customer support. More comments can help you to develop your online business."
                />

                <link
                    rel="canonical"
                    href="https://tagiamtop.com/buy-instagram-comments"
                />
            </Head>
            {open && (
                <ModalBuy
                    setOpen={setOpen}
                    open={open}
                    count={counts}
                    amount={priceValue}
                    times={"one time"}
                    service={buyType}
                    tarifs={price?.Comments?.plans}
                    setService={setBuyType}
                    setCounts={setCounts}
                    setAmount={setPriceValue}
                />
            )}
            <div className={styles.header_banner}>
                <p className={styles.header_title}>
                    Comments <img src="/comment1.svg"/>
                </p>
                <p className={styles.header_text}>
                    Random or Custom packages to buy Instagram comments. Let's start collaborating with us
                </p>

                <img className={styles.header_arrow} src="/Arrow-detail.svg" alt=""/>
            </div>

            <div className={styles.container}>
                <PageTitle title={"Comments"}/>

                <div>
                    <p className={styles.buyLikes_title}>Our rates</p>
                    <div className={styles.buyLikes_item_container}>
                        <Carousel
                            wrapAround={true}
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
                            {price?.Comments?.plans.map((item, index) => (
                                <BuyLikes
                                    key={index}
                                    likes={item.count}
                                    price={item.price}
                                    banner="/buylikesbanner.png"
                                    index={index}
                                    onClick={() => {
                                        setPriceValue((prev) => item?.price);
                                        setCounts((prev) => item?.count);
                                        setUrl("buy-instagram-comments");
                                        router.push({
                                            pathname: `/step1`,
                                            query: {
                                                service: "Comments",
                                                counts: item?.count,
                                                priceValue: item?.price,
                                            },
                                        });
                                        setBuyType("Comments");
                                    }}
                                    text="Instagram Comments"
                                    id={"COMM"}
                                    icon="/comment0.svg"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
                <div>
                    <p className={styles1.review_comment_title}>
                        Comments about Comments
                    </p>
                    <p className={styles1.info_text} style={{textAlign: "center"}}>
                        {" "}
                        Every review is an indicator of customer satisfaction. We are tracking your feedback
                    </p>

                    <div className={`container ${styles1.review_comment_row}`}>
                        <div className={styles1.comments_container}>
                            {comment?.map(
                                (item, index) =>
                                    index < readMore && (
                                        <Comment
                                            key={item.name}
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
                        <Review service={"Comments"}/>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="400">
                    <InfoBlock
                        text={
                            <p style={{marginBottom: 30, padding: 20}}>
                                <img
                                    src="/commentsinfo1.png"
                                    alt="buy Instagram comments"
                                    style={{float: "left", marginRight: 80, marginBottom: 30}}
                                />
                                <p className={styles1.info_title}>{text[0].title}</p>
                                <p className={styles1.info_text}>
                                    {/*{text[0].content}*/}
                                    People seeking Instagram popularity buy IG comments. Comments weigh more than
                                    likes or views because they require effort. You do not just tap the video or
                                    photo buy you have to say something, which requires you to think. Comments must
                                    be relevant to the content you are talking about.
                                    Buying IG comments is important if your account still has very few of them. An
                                    account with many likes and comments will bring you the kind of online presence
                                    that will qualify you as an influencer or endorser. You get paid for every
                                    product or business that you promote in your Instagram.
                                </p>
                                <p className={styles1.info_title}>{text[0].title2}</p>
                                <p className={styles1.info_text}>
                                    <p>{text[0].content2}</p>
                                </p>
                            </p>
                        }
                        reverse={false}
                        fade={true}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="500">
                    <InfoBlock
                        text={
                            <p style={{marginBottom: 30, padding: 20}}>
                                <p className={styles1.info_text}>
                                    <img
                                        src="/commentsinfo2.png"
                                        alt="buy real Instagram comments"
                                        style={{float: "right", marginLeft: 80, marginBottom: 30}}
                                    />
                                    <p className={styles1.info_title}>Why Buy Instagram Comments from Us</p>
                                    <p>Some Instagram users are hesitant to buy Instagram comments because Instagram
                                        might not like it. Yet, with several websites selling IG comments now, buying
                                        high quality ones will push your account up and bring you lots of benefits. </p>
                                    <p>Building your name on the internet is a long and difficult process. If you have a
                                        shorter way to achieve your goal and have social proof, why not buy high-quality
                                        ones from a website like ours? We will never put your reputation at stake. You
                                        will get comments of the highest quality from us.
                                        How? Our website makes sure that you get real comments from real people. They
                                        have a high engagement so they are sure to make you get noticed. Here are some
                                        features of the comments that you can receive from us:
                                    </p>
                                </p>
                                <p className={styles1.info_title} style={{marginTop: 30}}>
                                    {text[1].title2}
                                </p>
                                <p className={styles1.info_text}>{text[1].content2}</p>
                            </p>
                        }
                        reverse={true}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="500">
                    <TextComponent
                        title={<p className={styles1.info_title}>{text[2].title}</p>}
                        text={
                            <div
                                className={styles1.info_text}
                                style={{lineHeight: 3, marginBottom: 20}}
                            >
                                <p>
                                    We get rid of comments from bots before we sell our packages. Instagram hates bots
                                    and
                                    so do we. The comments we sell come from real people and have high engagement. They
                                    can
                                    be useful in gaining more likes and followers because these comments talk sense.
                                    They
                                    are relevant to content being commented.
                                </p>

                                {/*     {text[2].content}*/}
                                <p>We use SSL or Secure Sockets Layer for your orders and payment. No one can assess
                                    these data aside from you. We always keep our clients’ personal information and we
                                    do not reveal the names of our buyers.</p>
                                <p>The sales process takes a very short time and there is no possibility of others
                                    knowing about it. This is how we get more return customers. They know that they are
                                    always safe with us.</p>
                                <p>The comments you buy from us come from accounts that has the best reputation. All
                                    comments are of premium quality. You will recognize one because they gain a blue
                                    tick from Instagram. Because of their high quality, they usually attract other users
                                    to engage. </p>
                                <p>When people start talking about your content, others will notice you, contribute to
                                    the conversation, and make you more popular online. </p>
                                <p>We offer several options to our customers. You can choose between premium or
                                    high-quality comments. <span
                                        style={{fontWeight: 'bold'}}>Premium comments</span> cost more but we guarantee
                                    that they bring
                                    better results. But, if you are on a budget, you may prefer our high quality
                                    comments, which cost less.</p>
                                <p>You can buy the number of comments that you want, from 10 to 500 comments. You can
                                    decide to have all comments at once appear on your Instagram or in a gradual
                                    manner. </p>
                                <p>There are packages that will suit your budget.</p>
                                <h2>Frequently Asked Questions</h2>
                                <p>If there are questions that we have not covered, you can ask out specialist and get
                                    answers fast.</p>
                                <h3>1. Are the comments relevant to the content?</h3>
                                <p>We only choose comments that are related to the photo or video that is supposed to be
                                    commented on. They tackle trending issues. These comments can draw many onlookers
                                    who will eventually join the conversation and encourage engagement. </p>
                                <h3>2. How fast and simple is it to but Instagram comments?</h3>
                                <p>There is nothing complicated on the process of buying Instagram comments. You can
                                    visit our website, choose the package you want, and place an order. It is
                                    hassle-free and the comments you paid for are delivered instantly.</p>
                                <h3>3. Must the comments relate to the post or video?</h3>
                                <p>All comments must be related to the videos commented on. No matter how many comments
                                    were made if they are off the video or image at hand, they will be useless.
                                    Instagram has its rules and it always sticks to it.</p>
                                <p>Gibberish comments, rude remarks, statements that are out of topic will not
                                    contribute to your standing in social media.</p>
                                <h3>4. Is there no issue in buying Instagram comments from your website?</h3>
                                <p>Safety and security are our topmost concerns and buying Instagram comments from us
                                    should not be an issue. We do not divulge your details and our SSL prevents any
                                    third party from bothering our clients.</p>
                                <h3>5. Do you have a good support team?</h3>
                                <p>Our expert support team is always ready to help you any time of day or night. This
                                    means that you can buy comments wherever you are anytime. If you are ordering
                                    Instagram comments for the first time, feel free to seek help from our support team.
                                    They are always ready and capable to help you.</p>
                                <h3>6. Do you have a refund policy?</h3>
                                <p>Yes. Clients who do not receive their orders will immediately get a refund. We do not
                                    want you to lose your investment. This is alo one reason why our clients trust us
                                    and always place a repeat order.</p>
                                <h3>7. How will I know that my order is on the way?</h3>
                                <p>As soon as you have placed your order, you will be informed if the order has been
                                    completed. You can then start to monitor your Instagram account so that you will see
                                    if there is an increase in the comments in your account. We want you to get the
                                    comments that you ordered at the soonest time possible.</p>
                                <h3>8. Is it possible to buy comments for several posts?</h3>
                                <p>Yes, it is possible as long as you specify this in your order. You also have to buy a
                                    plan with a big number of comments if you want to buy from us. Providing comments
                                    for multiple posts can make the engagement go up in a short time. People will turn
                                    their eyes on your account as they wonder how you achieved such popularity.</p>
                                <h3>9. Is buying comments also a way to get more followers?</h3>
                                <p>Usually, the comments that you buy can bring you more followers if you keep your
                                    posts current and interesting. So, it is up to you to exert more efforts and use
                                    creativity to make people interested in your Instagram posts. When you buy random
                                    comments, there are real people behind each. If you can capture their interest, they
                                    can turn into organic followers.</p>
                                <h3>10. Will Instagram ban me for buying comments?</h3>
                                <p>You only have to worry if you are using bots because Instagram is against it. But if
                                    you buy comments from us, we assure you that those comments come from real people.
                                    All the comments that buy from us relate to the post so you do not have to worry
                                    about getting banned.</p>
                                <h2>How to Make People Give Comments</h2>
                                <p>While getting like is quite easy, seeing comments on one’s page can be a challenge.
                                    Likes can be indicated by a double click. A comment has to be well-thought of and
                                    relevant. </p>
                                <p>So, how can you encourage followers and visitors to make comments? Here are some
                                    tips:</p>
                                <h3>1. Post something that is appealing to the emotion.</h3>
                                <p>People tend to react fast to an emotional post. Aside from the emojis, you can get
                                    written comments as well. Short rejoinders will serve you well. They are like tennis
                                    balls flying over the net back and forth</p>
                                <h3>2. Rely to comments.</h3>
                                <p>Do not be lazy. Spend time replying to comments no matter how short. It shows that
                                    you care about your followers’ or visitors’ comments, which makes them feel
                                    valued.</p>
                                <h3>3. Post at the right time.</h3>
                                <p>When you post something when everyone is asleep or busy, you cannot expect comments.
                                    Choose a time when people are awake and alert. You can expect them to make comments
                                    and reply to yours.</p>
                                <h3>4. Never overlook a comment.</h3>
                                <p>When a person makes comments, it means he expects a reply. Always pay back the favor.
                                    Replying to comments is one way of sustaining engagement. That person will be happy
                                    to interact on your page. </p>
                                <p>You will be amazed as the number of comments increase. Others who are on your page
                                    may add their own pitches or reactions, resulting in a continuous exchanges.</p>
                                <h3>5. Request your audience to give you a like or make a comment.</h3>
                                <p>Followers tend to listen to what you say. At the end of a video post, ask them to
                                    give you a like or to say something. Most of them will do as requested. Never miss a
                                    chance to highlight your call for action.</p>
                                <h3>6. Feature a Q & A with giveaways to participants who give the correct answer.</h3>
                                <p>People love to compete and win. A contest once a month will help in getting comments,
                                    replies, and reactions. Your audience will love the excitement and fun. Doing this
                                    once in a while will keep them from getting bored. They will have something to look
                                    forward to each month.</p>
                                <h3>7. Ask them for suggestions on how to improve your content.</h3>
                                <p> People want to be heard. Asking someone for suggestion will always elicit positive
                                    result. How about asking your audience how you can improve your content? This could
                                    lead to a lively discussion.
                                    You might receive myriad of suggestions that other might agree or disagree with.
                                    Each side will be defending his stand, either by using an emoji or a short written
                                    comment. All of these will be good for your online popularity and the brands or
                                    businesses that you are promoting.
                                </p>
                                <h3>8. Recognize best comment.</h3>
                                <p>Making comments in an Instagram post requires effort. Why not reward it by pinning
                                    the comment? Other users will see the pinned comment and will be curious as to why
                                    it is the best. They will find time to read it or comment on it. Pinning best
                                    comments will also inspire your followers and other Instagram users. They will
                                    aspire for the same recognition by giving their best and wittiest rejoinder.</p>
                                <p>Either way, you get yourself a valuable source of organic and high-quality
                                    comments.</p>
                                <h3>9. Hold contests with prizes</h3>
                                <p>Contests always draw crowd. A few dollars for give prizes can bring many future
                                    returns. Give awards for the best video of the week, most liked photo of the week,
                                    or most-commented content. Make this a regular event. </p>
                                <p>Other Instagram users can become your followers and viewers as they join in the
                                    excitement and fun of these contests. People who want to earn a prize for the most
                                    commented post will invite their friends and acquaintances to give a comment and be
                                    counted.</p>
                                <h3>10. Keep a good likes-comments ratio.</h3>
                                <p>When you have many likes and too few comments, Instagram might be doubtful because of
                                    the discrepancy. If you bought your likes, this thing could happen. What is the
                                    ideal number of comments in relation to likes?</p>
                                <p>Each 100 likes should have 10 to 20 comments. So, how could you maintain this
                                    standard?</p>
                                <p>Buy Instagram comments from us and we make sure to have that ratio. Our social media
                                    experts can match comments with the posts liked by your followers. If a video
                                    garnered 100 likes, w will make sure to prorate 10 to 20 comments that are related
                                    to the posts to make them appear natural.</p>
                                <p><span style={{fontWeight: 'bold'}}>Buy Instagram comments</span> from us and stop
                                    worrying about getting banned
                                    from Instagram.
                                    The comments you get from us are of the highest-quality. They are made by real
                                    people.</p>
                                <p>We do not deal with bots and would never use them to generate comments. When it comes
                                    to Instagram analytics, we always observe them because we value our clients. Our aim
                                    in selling high-quality comments is to make money. We want to help you make money
                                    from your social media accounts.</p>
                                <p>Buy Instgram comments from us. Withu s as your partner, nothing could go wrong. Let
                                    us walk hand-in-hand towards the fulfillment of our goals: a satisfied, happy, and
                                    successful social media entrepreneur. </p>
                            </div>

                        }
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="600">
                    <TextComponent
                        title={<p className={styles1.info_title}>{text[3].title}</p>}
                        text={
                            <p className={styles1.info_text} style={{lineHeight: 3}}>
                                {text[3].content}
                            </p>
                        }
                    />
                </div>

                {/*      <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="700">
                    <InfoBlock
                        text={
                            <p style={{marginLeft: 60, marginBottom: 30}}>
                                <p className={styles1.info_title}>{text[4].title}</p>
                                <p className={styles1.info_text}>{text[4].content}</p>
                                <p className={styles1.info_title} style={{marginTop: 30}}>
                                    {text[4].title2}
                                </p>
                                <p className={styles1.info_text}>
                  <span
                      style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                      }}
                  >
                    <li>{text[4].li1}</li>
                    <li>{text[4].li2}</li>
                    <li>{text[4].li3}</li>
                    <li>{text[4].li4}</li>
                    <li>{text[4].li5}</li>
                  </span>
                                    {text[4].content2}
                                </p>
                            </p>
                        }
                        reverse={false}
                        img="/commentsinfo3.png"
                        alt={"Instagram comments"}
                    />
                </div>*/}
            </div>
        </Layer>
    );
};

export async function getStaticProps({params}) {
    return {
        props: {
            text: [
                {
                    title: "Buy Instagram Comments",
                    content:
                        "What’s not to love?" +
                        "Instagram is THE social media app. It allows its millions of global users to:",
                    li1: "hare their aesthetically pleasing photos,",
                    li2: "post videos of their interesting busy lives,",
                    li3: "filter photos with built-in professional-looking Instagram filters,",
                    li4: "tweak application settings to suit their individual needs,",
                    li5:
                        "socialize with the friends they already have and ultimately and make millions of new\n" +
                        "online ones worldwide!",
                    title2: "Wow! Why would you want to buy\n" + "Instagram comments?",
                    content2:
                        "It’s no wonder why everybody wants to buy Instagram comments.\n" +
                        "                                    It would ridiculous not to want to! Comments for Instagram have a great effect -\n" +
                        "                                it\n" +
                        "                                raises brand and Instagram page recognition efficiently and fast, boosts your profits in the\n" +
                        "                                long run, creates social media engagement and ultimately makes you and your brand famous.\n" +
                        "                                Not to mention, you get immense satisfaction because of a well-done job – so it covers all\n" +
                        "                                the reasons why you were on Instagram in the first place.\n" +
                        "                                More importantly, having more comments rockets your page to Instagram stardom – something\n" +
                        "                                that Poprey has perfected as a service of buying Instagram comments!",
                },
                {
                    title: "Feeling over whelmed? Don’t be!",
                    content:
                        "And if you are feeling a bit overwhelmed by all of it, like some of us might be, there is no reason to worry! Poprey has come to your rescue, my dear! In today’s modern world, we might not have unlimited time. We might not have the never-ending creative and innovative flow of new ideas that we need. We might not have the expert knowledge to achieve the results we want and obtain as many comments to our posts on Instagram as we dream of.",
                    content2:
                        " Getting people to comment on your page is hard work – why not make it automatic?\n" +
                        "                                    Time is\n" +
                        "                                    money and, ultimately, it is a luxury in very short supply. Our team at Poprey fully\n" +
                        "                                    understands that.\n" +
                        "                                    Sure, you could go and attend numerous social media marketing courses created by\n" +
                        "                                    Instagram\n" +
                        "                                    gurus to give have the necessary tools and knowledge to understand how the new\n" +
                        "                                    Instagram\n" +
                        "                                    algorithm works. But in fact, this overcomplicated scenario is actually why you are\n" +
                        "                                    here\n" +
                        "                                    —not\n" +
                        "                                    to spend more time and money that you might not have. You are here to buy Instagram\n" +
                        "                                    comments\n" +
                        "                                    and in the end, it all boils down to complete ease and simplicity.",
                    title2: "Right? Let’s face it.",
                },

                {
                    title: "Get some Instagram love",
                    content:
                        "That’s where Poprey comes in! With our extensive network of valuable services, we make sure your online posts receive numerous interesting and relevant comments, merely at the touch of a single button. It doesn’t matter where you are to buy Instagram comments – US, UK, or a remote island (with cell service of course). It really couldn’t be simpler.",
                },
                {
                    title:
                        "No hassle! No stress! Just lots of\n" + "comments from Instagram!",
                    content:
                        "The process of buying Instagram comments is very simple. Firstly, take a look at our value-packed packages and deals and choose the one that fits your pocket and your goals. You have an option to buy random as well as custom Instagram comments – just pick one on the pop-up window. Then, confirm payment via our secure, encrypted payment gateway and we’ll take care of the rest!",
                },
                {
                    title: "You can do this!",
                    content:
                        "Sit back and watch in absolute awe as Poprey delivers numerous insta\n" +
                        "                                comments to your page.\n" +
                        "                                Watch the number of comments grow – exactly as planned and when you\n" +
                        "                                ordered them!\n" +
                        "                                Last but not least is our excellent guarantee – if you have any\n" +
                        "                                problems,\n" +
                        "                                our dedicated and efficient customer service staff is here to help –\n" +
                        "                                get in touch 24/7!",
                    title2: "It’s really as\n" + "easy as that!",
                    content2:
                        "So don’t wait for your IG competitors to get to us before you! Go\n" +
                        "                                ahead and get cracking\n" +
                        "                                because the clock is ticking – especially when you’re on Instagram.",
                    li1: "Fast delivery",
                    li2: "Efficient results",
                    li3: "No passwords required",
                    li4: "Premium quality",
                    li5: "Affordable prices",
                },
            ],
        },
    };
}

export default BuyInstagramComments;
