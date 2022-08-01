import React, {useContext, useEffect, useState} from "react";
import {Layer} from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import styles1 from "../styles/Home.module.sass";
import Review from "../component/Review/Review";
import Comment from "../component/Comment/Comment";
import {useRouter} from "next/router";
import TextComponent from "../component/TextComponent";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import {MeContext} from "./_app";
import useAxios from "../hooks/useAxios";
import Head from "next/head";
import ModalBuy from "../component/ModalBuy/ModalBuy";

const BuyInstagramFollowers = ({text}) => {
    const axios = useAxios();
    const router = useRouter();
    const {price, setUrl, setModalData} = useContext(MeContext);
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
            data.append("service", "Followers");
            const res = await axios.post("/review_list.php", data);
            const filter = res.data.data.filter(elem => elem.text !== '')

            if (res.status === 200) {
                setComment((prev) => filter);
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
                <title>
                    Buy Instagram Followers - Social Media Services Store</title>

                <meta
                    name="url"
                    property="og:url"
                    content="https://tagiamtop.com/buy-instagram-followers"
                />
                <meta
                    name="title"
                    property="og:title"
                    content="Buy Instagram Followers - Social Media Services Store"
                />
                <meta
                    name="twitter:title"
                    content="Buy Instagram Followers - Social Media Services Store"
                />
                <meta
                    name="description"
                    property="og:description"
                    content="Buy Instagram Followers from TagIamTop at $1.30 now. Instant delivery and amazing customer support. New followers can help you to develop your business."
                />
                <meta
                    name="twitter:description"
                    content="Buy Instagram Followers from TagIamTop at $1.30 now. Instant delivery and amazing customer support. New followers can help you to develop your business."
                />

                <link
                    rel="canonical"
                    href="https://tagiamtop.com/buy-instagram-followers"
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
                    tarifs={price?.Followers?.plans}
                    setService={setBuyType}
                    setCounts={setCounts}
                    setAmount={setPriceValue}
                />
            )}
            <div className={styles.header_banner}>
                <p className={styles.header_title}>
                    Buy Instagram Followers <img src="/follower.svg" alt=""/>
                </p>
                <p className={styles.header_text}>
                    Buy Instagram followers for a cheaper price. See our deals below!
                </p>

                <img
                    className={styles.header_arrow}
                    src="/arrow-detail.svg"
                    onClick={() => window.scrollTo(0, 450)}
                    alt=""
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
            <div className={styles.container}>
                <PageTitle title={"Buy Instagram Followers"}/>

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
                        {price?.Followers?.plans.map((item, index) => (
                            <BuyLikes
                                key={index}
                                likes={item.count}
                                price={item.price}
                                banner="/buylikesbanner.png"
                                id={"FOLLO"}
                                index={index}
                                onClick={() => {
                                    setPriceValue((prev) => item?.price);
                                    setCounts((prev) => item?.count);
                                    setUrl("buy-instagram-followers");
                                    setModalData((prev) => ({
                                        ...prev,
                                        service: "Followers",
                                        counts: item?.count,
                                        priceValue: item?.price
                                    }))
                                    router.push({
                                        pathname: `/step1`,
                                        query: {
                                            service: "Followers",
                                            counts: item?.count,
                                            priceValue: item?.price,
                                        },
                                    });

                                    setBuyType("Followers");
                                }}
                                first={true}
                                text="Instagram Followers"
                                icon="follower0.svg"
                            />
                        ))}
                    </Carousel>
                </div>

                <p
                    className={styles1.review_comment_title}
                    style={{marginTop: "150px"}}
                >
                    {text[0].title}
                </p>
                <p className={styles1.info_text} style={{textAlign: "center"}}>
                    {text[0].content}{" "}
                </p>

                <div
                    className={`container ${styles1.review_comment_row}`}
                    style={{justifyContent: comment?.length > 0 ? "space-between" : "center"}}
                >
                    {comment?.length > 0
                        && <div className={styles1.comments_container}>
                            {comment?.map(
                                (item, index) => {
                                    return index < readMore && (
                                        <Comment
                                            key={item.name}
                                            name={item.name}
                                            star={item.star}
                                            text={item.text}
                                        />
                                    )
                                }
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
                    <Review service={"Followers"}/>
                </div>

                <div style={{height: "100px"}}/>

                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="300">
                    <TextComponent
                        title={text[1].title}
                        text={
                            <p
                                className={styles1.info_text}
                                style={{lineHeight: "170%", fontSize: "16px"}}
                                data-aos="fade-up"
                            >
                                {text[1].content}
                                <p style={{lineHeight: 2}}>{text[1].content2}</p>
                            </p>
                        }
                    />
                </div>

                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="500">
                    <InfoBlock
                        text={
                            <div>
                                <div className={styles1.info_text}>
                                    {/* <img
                                        src="/buyfollowersinfo1.png"
                                        alt="buy Instagram followers"
                                        style={{float: "left", marginRight: 80, marginBottom: 30}}
                                    />*/}
                                    {/* <p className={styles1.info_title}>{text[2].title}</p>
                                    {text[2].content}
                                    <p className={styles1.info_title} style={{marginTop: 30}}>
                                        {text[2].title2}
                                    </p>*/}
                                    <p className={styles1.info_text}>Have you heard about people who made it big on
                                        Instagram? They are earning for
                                        every product that they endorse. All they have to do is maintain a social media
                                        account, make it grow, and start counting their dollars. How I wish this is just
                                        as easy. You have to invest not just money but most of all time and effort so
                                        that you can nurture thousands of loyal followers.</p>
                                    <p className={styles1.info_text}> A lot of Social Networks would be overwhelmed by a
                                        great number of subscribers but the pattern can be like high tide and low tide.
                                        A consistent number of followers show that they are loyal.</p>
                                    <h2>Who Are Instagram Followers?</h2>
                                    <p className={styles1.info_text}>Instagram followers are virtual friends who are
                                        interested in your life, what are
                                        you doing, and joining your photos or videos. They are always around, and they
                                        want to get the latest updates of your day.</p>
                                    <p className={styles1.info_text}>If you check some Instagram profiles you will find
                                        that many of them do not have
                                        a large number of followers. The best way to fix it is to <span
                                            style={{fontWeight: "bold"}}>buy
                                        Instagram followers</span> and get an increase in interest in your posts.
                                        However, you
                                        must be
                                        choosy when it comes to the source.</p>
                                    <p className={styles1.info_text}>Now you can find many websites to purchase
                                        Instagram followers, but all of them
                                        do not guarantee authentic followers that will remain loyal and active for
                                        long.</p>
                                    <p className={styles1.info_text}>Always be wary of fake followers. Instead of
                                        propping up your online presence,
                                        they can pull you down. Here are some tips when choosing a website to supply
                                        your Instagram followers:</p>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>The website must be safe and secure. Choose one with an SSL or Secure
                                            Sockets Layer certificate. This means that the website uses a security
                                            technology that uses an encrypted link between the server and the client to
                                            prevent others from accessing data. All details are encrypted and only the
                                            client and the server can access them.
                                        </li>
                                        <li>TagIamTop works organic without risk for your account. Your profile will get
                                            receive followers little by little in a gradual manner
                                        </li>
                                        <li>Signals with 100% guarantee. Followers by TagIamTop stay with you for a long
                                            time.
                                        </li>
                                        <li>If you have any doubts about taking up buying followers for Instagram
                                            algorithm reasons, talk to our support team.
                                        </li>
                                    </ul>
                                    <h2>How to Buy Instagram Followers</h2>
                                    <p>It's easy to start buying IG followers just like getting results:</p>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>Decide on the type of pakeges from High-quality to Premium. Premium costs
                                            more, yet, it provides better quality followers.
                                        </li>
                                        <li>Indicate the number of followers. We recommend starting with 250 followers.
                                            The maximum number allowed for purchase is 50000 subscribers.
                                        </li>
                                        <li>Fast simplified form of payment.</li>
                                    </ul>
                                    <h2>How to Make the Best Choice?</h2>
                                    <p className={styles1.info_text}>Making a purchase of followers is no longer a
                                        problem today. The process is fast
                                        and doesn't take long. TagIamTop will deliver the package you have chosen. We
                                        recommend choosing packages depending on the number of your IG followers on the
                                        day of purchase. Buy packages gradually increasing the number of followers.</p>
                                    <p className={styles1.info_text}>We aim to help you become visible online. The
                                        moment we start feeding your IG
                                        profile with followers, you will see likes, comments, shares, and other
                                        activities that you can find in IG accounts that have existed for quite a long
                                        time.</p>
                                    <h2>Frequently Asked Questions</h2>
                                    <p className={styles1.info_text}>Feel free to ask questions to our attentive support
                                        staff.</p>
                                    <h3>1. Will having a big number of followers improve my internet visibility?</h3>
                                    <p className={styles1.info_text}>If you want to promote your business on Social
                                        Networks or get more feedback from
                                        other Instagram users, you should follow some of the Instagram algorithm rules.
                                        Getting many likes, views, comments, followers, and active engagement is the aim
                                        that the algorithm tracks. If you do this, the algorithm will notice you. If you
                                        do it gradually and constantly, you will succeed.</p>
                                    <p className={styles1.info_text}>To benefit from our services, choose one of the
                                        packages and be sure of
                                        confidentiality and fast results. For your safety, order followers at TagIamTop.
                                        We guarantee their authenticity. They can give your account the boost that you
                                        need to be found on the World Wide Web.</p>
                                    <h3>2. How a large number of followers can help me promote my brand or business
                                        online?</h3>
                                    <p className={styles1.info_text}>When people see that you have many followers, they
                                        tend to follow you and see why
                                        the audience is getting excited about you and your brand. Our followers' pakeges
                                        are chosen well in terms of quantity and quality. So, new users will interact
                                        with your posts or ads.</p>
                                    <p className={styles1.info_text}>When you order followers at Tagiamtop.com:</p>
                                    <p className={styles1.info_text} style={{fontWeight: 'bold'}}>Real-time delivery</p>
                                    <p className={styles1.info_text}>We deliver your order
                                        instantly because we understand and appreciate your time. Take one of our
                                        offers, provide the required information, make a payment (you can pay with
                                        cryptocurrency), get the result.</p>
                                    <p className={styles1.info_text} style={{fontWeight: 'bold'}}>Full Satisfaction</p>
                                    <p className={styles1.info_text}>You get what we have
                                        promised you. We aim for a long-term relationship. We can achieve this by
                                        ensuring that you are fully satisfied with our service</p>
                                    <p className={styles1.info_text} style={{fontWeight: 'bold'}}>Continuous support</p>
                                    <p className={styles1.info_text}>A fast-growing account
                                        can be overwhelming. Engaging thousands of followers is not an easy job. But, we
                                        always keep you covered. Our support team will be around to help you resolve
                                        issues and handle your fast-growing accounts, especially in terms of
                                        engagement.</p>
                                    <h3>3. Is buying Instagram followers beneficial for me?</h3>
                                    <p className={styles1.info_text}>Anyone who decides to
                                        grow his account will benefit from buying IG followers. The point is that people
                                        who see the number of your followers, they will most likely follow you.</p>
                                    <p className={styles1.info_text}>The followers you order from us are chosen based on
                                        their profiles and
                                        interests.</p>
                                    <p className={styles1.info_text}>Those that see plenty of notifications will be
                                        attracted to your IG account and participate in the engagement</p>
                                    <p className={styles1.info_text}>If you post compelling photos, videos, Instagram
                                        stories, and selfy, you can
                                        easily convert them into followers. </p>
                                    <h3>4. For how many days do I have to wait for my order to be delivered?</h3>
                                    <p className={styles1.info_text}>When you buy Instagram followers from us, you will
                                        get your order instantly. We
                                        do not believe in delayed deliveries. However, we try to make the increase in
                                        followers look natural.</p>
                                    <p className={styles1.info_text}>To speed up things, set your Instagram profile to
                                        public. All posts must be
                                        labeled public, too.</p>
                                    <h3>5. Why buy IG followers from us?</h3>
                                    <p className={styles1.info_text}>Many websites sell Instagram followers, but to get
                                        real IG signals, order your
                                        followers from us.
                                        Here are some tips to check your followers:
                                    </p>
                                    <ul style={{listStyleType: "lower-latin"}}>
                                        <li>They have profile pictures on their accounts. It has regular postings and
                                            the names and accounts do not look fake.
                                        </li>
                                        <li>When you see an account with lots of activities, do not conclude that it has
                                            a real follower. Check the comments. If they are relevant and related to the
                                            posts, then, it is real.
                                        </li>
                                        <li>If you are buying real followers, their number must be proportional to the
                                            number of likes, views, shares, and comments. When you see many followers
                                            and few engagements, the followers are not real.
                                        </li>
                                    </ul>
                                    <h3>6. What is the limit of buying followers at TagIamTop?</h3>
                                    <p className={styles1.info_text}>Anyone who buying IG followers may buy as many as
                                        he needed to give his Instagram
                                        account a push</p>
                                    <h3>7. Can the followers stay forever?</h3>
                                    <p className={styles1.info_text}>The most followers can stay with you for as long as
                                        you have your account. They can even bring new followers that will be as loyal
                                        as they are.</p>
                                    <h3>8. What payment methods do you use?</h3>
                                    <p className={styles1.info_text}>Our website uses several payment methods such as
                                        PayPal, debit, and credit card,
                                        as well as bank transfers. You can also use bitcoin or cryptocurrency. All modes
                                        of payment are safe but if you want to save money, the cryptocurrency will be
                                        your best choice for the following reasons:</p>
                                    <ul style={{listStyleType: "lower-latin"}}>
                                        <li>No fees are charged when you pay in bitcoin because it does not use the
                                            services of a bank. Even when you are making an international transaction,
                                            the fees are minimal.
                                        </li>
                                        <li>Cryptocurrency is not controlled by any government institution so
                                            transactions are speedy. You do not have to wait for three or more days for
                                            your transaction to get through.
                                        </li>
                                        <li>Using cryptocurrency is safe. Only the person who knows the key to your
                                            bitcoin wallet can make use of it. To keep your money secure, do not share
                                            the key with anyone.
                                        </li>
                                        <li>You can pay for purchases any time of the day as long as you can connect to
                                            the internet. You do not need to visit the bank or the store. You can access
                                            it from anywhere anytime.
                                        </li>
                                    </ul>
                                    <h2>How to Know Premium Quality Followers</h2>
                                    <p className={styles1.info_text}>What you need to know to get high-quality
                                        followers. Let's look at some
                                        patterns.</p>
                                    <h3>1. It has a big number of followers.</h3>
                                    <p className={styles1.info_text}>A follower has excellent quality when he has many
                                        followers as well. You can see
                                        that there is very good engagement in his account. He has many views, likes,
                                        shares, and comments.</p>
                                    <p className={styles1.info_text}>The engagement does not appear to be recent or as
                                        if they were made to impress
                                        you but, rather, as a result of months of efforts to gain prominence online.</p>
                                    <h3>2. The follower has a public profile.</h3>
                                    <p className={styles1.info_text}>The followers that will be fed to your account must
                                        have a public profile so that
                                        anyone with an Instagram account can see, like, share, or make comments. If the
                                        follower engages with these people, he is a legitimate one and can help enhance
                                        your online presence.</p>
                                    <h3>3. The username must be clear and easy to remember.</h3>
                                    <p className={styles1.info_text}>People do not want to remember difficult to
                                        pronounce or read usernames. If the
                                        follower you got has easy to read username, the other followers given to you
                                        will be able to interact with him as well. If no one is engaging with him, this
                                        follower has low quality.</p>
                                    <h3>4. Business name</h3>
                                    <p className={styles1.info_text}>His business name must be easy to find on the World
                                        Wide Web so that you can
                                        easily find him and you can interact. If you cannot find his business name, he
                                        may be a fake follower.</p>
                                    <h3>5. He has a profile picture.</h3>
                                    <p className={styles1.info_text}>The first thing that visitors to your website see
                                        is your profile picture. The
                                        photo must be clear and it must represent your business or brand. It must align
                                        with your profile photo on your other social media networks. If the account is
                                        that of a company, it is best to use the company logo.</p>
                                    <h3>6. Interesting bio</h3>
                                    <p className={styles1.info_text}>The follower must have an interesting bio that
                                        accompanies the profile photo. The
                                        bio must attract your attention and give you a reason to take him as your
                                        follower.</p>
                                    <h3>7. High-quality photos</h3>
                                    <p className={styles1.info_text}>An excellent follower must have high-quality photos
                                        so that many people will get
                                        interested. When his followers view or like his account, you will gain
                                        followers, too. High-quality followers may cost you, but you will also earn
                                        through them.</p>
                                    <p className={styles1.info_text}>When you have low-quality followers, even if you
                                        buy thousands, your brand will
                                        not go up. It can remain stagnant or go down. In social media, quality is always
                                        more important than quantity. Be meticulous when choosing where to buy
                                        followers.</p>
                                    <p className={styles1.info_text}>For great results, trust only us to supply you with
                                        the best followers ever.</p>
                                    <h2>What makes having excellent followers important?</h2>
                                    <p className={styles1.info_text}>Excellent followers are important to anyone who
                                        wants to grow their Instagram
                                        account to gain online visibility. Followers that are of high quality appear
                                        organic because they engage with you and other followers of your account.</p>
                                    <p className={styles1.info_text}>They are real and they prove this by the likes,
                                        views, shares, and comments that
                                        they make on your account. They also have many followers and their engagement
                                        makes them appear organic and believable.</p>
                                    <p className={styles1.info_text}>Hence, this makes buying excellent followers
                                        important.</p>
                                    <p className={styles1.info_text}>You can only reach your online goals by buying
                                        followers from reliable websites
                                        such as ours. We choose followers whose goals align with yours and who would
                                        also like your posts.</p>
                                    <h2>Is it advantageous to have a big number of followers?</h2>
                                    <p className={styles1.info_text}>Having many followers means there can be lots of
                                        interaction. Whether you have a
                                        personal account or an account for business purposes, a big number of followers
                                        will always help you.</p>
                                    <p className={styles1.info_text}>Having many followers could mean that many people
                                        will know about your business
                                        or brand. If they talk about your brand on Instagram, people will notice you. As
                                        they are exposed more to your product, they will be convinced it is beneficial.
                                        They will most likely become your customers. </p>
                                    <h2>How can I increase my followers?</h2>
                                    <p className={styles1.info_text}>One way of increasing your followers is by posting
                                        compelling content. By
                                        compelling content, we mean videos, images, and stories that are interesting,
                                        current, and appealing. The images or pictures that you post must be clear.
                                        Using blurry or grainy images will make your audience leave your site. Action
                                        and colored pictures are the best. But of course, they must be relevant or
                                        related to the topic that you focus on in your Instagram account. Engage your
                                        followers by giving their posts a heart, which means you like them, comment on
                                        them, or share them with your other followers. Make sure they like your posts.
                                        Use popular o trending topics for your content. Timeliness is important. This
                                        means that your content must be relevant to what is presently popular or
                                        trending products, information, or services.</p>
                                    <p className={styles1.info_text}>Include hashtags when writing captions for your
                                        hashtags. This will make it
                                        easier for your followers and other Instagram users to find you and give your
                                        online presence a boost. </p>
                                    <h2>How can I have social proof?</h2>
                                    <p className={styles1.info_text}>When you do business or influence others through
                                        the internet, it is important to
                                        have social proof. If you have social proof, people will follow you, believing
                                        that what you are doing is right.</p>
                                    <p className={styles1.info_text}>On Instagram, having many followers is considered
                                        social proof. Other people will
                                        most likely buy products, services, and people that you endorse. You have the
                                        power to influence others because you have social proof. </p>
                                    <h2>What are the ways to make a follower appear real?</h2>
                                    <p className={styles1.info_text}>When you buy IG followers from a reputable vendor
                                        such as our website, you can
                                        easily make your followers look real even if you have bought them. We offer
                                        organic and real followers, which means that we have experts to make the
                                        followers you buy look authentic.</p>
                                    <p className={styles1.info_text}>You can also initiate more engagement on your
                                        account by buying likes. When
                                        Instagram users see that many people like your content, they will like your
                                        posts too and become a follower.</p>
                                    <p className={styles1.info_text}>Your provider must feed the followers little by
                                        little. Having new followers 100
                                        a day may not look organic. </p>
                                    <h2>How many followers I must have to be recognized as an influencer?</h2>
                                    <p className={styles1.info_text}>Becoming an Instagram influencer nowadays is quite
                                        easy. Anyone with 200 likes
                                        and followers can be considered an influencer. Influencers are classified into
                                        macro and micro-influencers. If you belong to the micro category, you have 5000
                                        to 20000 followers while a macro has 100000 or more.</p>
                                    <h2>Does Instagram boost my internet visibility?</h2>
                                    <p className={styles1.info_text}>Instagram is one of the social media platforms that
                                        can help you reach millions
                                        of users worldwide. Getting many likes and followers can boost your internet
                                        presence and let millions of users see and interact with you online.</p>
                                    <p className={styles1.info_text}>With the use of the best content and the right
                                        hashtags, you can increase the
                                        number of your likes and followers and establish an online presence.</p>
                                    <h2>Is there a way to improve followers’ engagement?</h2>
                                    <p className={styles1.info_text}>There are many ways to improve the engagement of
                                        your followers.</p>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>Keep your posts interesting. Focus on popular and trending topics. Have
                                            something that everyone can talk about. Your followers will never get bored
                                            if there is always something interesting to talk about.
                                        </li>
                                        <li>Observe the times when almost everyone is active online. Schedule your posts
                                            at this hour and your followers will instantly see them. If most of your
                                            followers are active, they will be able to participate in the activities on
                                            your account.
                                        </li>
                                        <li>Your followers might not stay long if there is nothing to do. Why not post
                                            longer content so that they will stay to see all or read all? You can post
                                            several related photos, several videos, or stories. This will improve the
                                            time they spent on your Instagram account.
                                        </li>
                                        <li>Do not hesitate to provide them with more details about your brand. Just
                                            like ll ordinary people;e, they want to know what they are getting into.
                                        </li>
                                        <li>Learn the skill of creating interesting videos for your content. People
                                            prefer to see, hear, and watch events unfurl before them. Use videos that
                                            tell stories without saying too much.
                                        </li>
                                        <li>Your audience must find value in the content that you share. Choose content
                                            that teaches about relevant and useful things. Or images that help your
                                            audience understand what is happening and how they can be affected by it.
                                        </li>
                                        <li> Use hashtags to let your audience know what you are trying to say. Hashtags
                                            can bring people whose beliefs and thoughts are almost the same.
                                        </li>
                                        <li>Find a way to let your followers see that you want them to let others learn
                                            about your story. Motivate them to share with others your inspiring content.
                                        </li>
                                        <li>Find an interesting way to start conversations. You can start by asking your
                                            follower to send you a message or ask you a question about something. Use
                                            cute stickers or anything that can capture their interest.You can provide
                                            the answers to frequently asked questions that explain in
                                            detail how a thing works. This can encourage others to ask for
                                            clarification, allowing you a longer engagement time.
                                        </li>
                                        <li>10. Learn to experiment with different and new types of content. You will
                                            most likely discover the thing that awakens the interest of your audience.
                                        </li>
                                    </ul>
                                    <h2>What good things can I enjoy from buying high-quality followers?</h2>
                                    <p className={styles1.info_text}>After buying high-quality followers and
                                        collaborating with us to grow them into
                                        organic ones, you will enjoy the many benefits of engaging them as follows:</p>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li> Active followers can easily be converted into potential customers.
                                            Providing them with wholesome experiences and sharing with them information
                                            about your brands and products will them decide faster whether to buy or
                                            not.
                                        </li>
                                        <li>You will have many people referring you to others. A positive word about you
                                            can spread through your many followers. You will be amazed at the number of
                                            new followers who want to know about the brand or product that you are
                                            promoting. You can then convert them into paying customers.
                                        </li>
                                        <li>Having highly-engaged followers also increases active and organic activity
                                            in your Instagram account. You will be great in the eyes of the Instagram
                                            algorithm. If the app likes your account, it will expose you to many other
                                            Instagram users. This can bring additional organic traffic to your Instagram
                                            account.
                                        </li>
                                    </ul>
                                    <h2>Can you name some major influencers around the world?</h2>
                                    <p className={styles1.info_text}>Learn more from the leading brands of the world.
                                        Like you, they have started
                                        small and were able to build their brands to worldwide prominence. These brands
                                        are as follows:</p>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>Nike</li>
                                        <li>Victoria’s Secret</li>
                                        <li>Gucci</li>
                                        <li>Dior</li>
                                        <li>Channel</li>
                                        <li>Huda Beauty</li>
                                    </ul>
                                    <p className={styles1.info_text}>You will notice that these websites center on
                                        fashion and lifestyle. If you want
                                        to be a successful online endorser, fashion and lifestyle products can be a good
                                        start.</p>
                                    <p className={styles1.info_text}>After learning ways to boost your online presence,
                                        you are getting close to
                                        working for an influencer. </p>
                                    <h2>Here are some tips on how to work with an influencer</h2>
                                    <ul style={{listStyleType: "numeric"}}>
                                        <li>Diversify by working for several influencers with different brands. You can
                                            work for two or more influencers at a time. You will be exposed to growing
                                            different brands and which ones pay the most.
                                        </li>
                                        <li>Learn more about the influencer you are going to work with. It is important
                                            to know how many people they have reached so far.
                                        </li>
                                        <li>See if your views and principles align with his. If his goals differ from
                                            your goals, disagreements can affect your work.
                                        </li>
                                    </ul>
                                    <h3>Conclusion</h3>
                                    <p className={styles1.info_text}>Some people are against buying Instagram followers
                                        because one can get penalized
                                        for it. However, when you know the right website that sells this product, you
                                        will be safe. Buy real Instagram followers from us and we will help you make
                                        them appear organic. We have expert staff to see to it that the followers you
                                        buy from us will actively engage with you and other users. You can see them
                                        like, view, share, and make relevant comments.</p>
                                    <p className={styles1.info_text}>You do not have to worry about a dwindling number
                                        of followers. We always
                                        replenish them wem the number seems to go down. You can also order more
                                        followers to make your social media presence be seen and felt on the
                                        internet.</p>
                                    <p className={styles1.info_text}>Buy Instagram followers from the world’s #1 Site
                                        and be an online success.</p>
                                </div>
                            </div>
                        }
                        reverse={false}
                    />
                </div>
                <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="500">
                    <TextComponent
                        title={text[3].title}
                        text={
                            <p className={styles1.info_text} style={{lineHeight: 3}}>
                                {text[3].content}
                            </p>
                        }
                    />
                </div>
            </div>
        </Layer>
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
                    title: "Comments about Followers",
                    content:
                        "Every review is an indicator of customer satisfaction. We are tracking your feedback",
                },
                {
                    title: "What’s the quality of TagIamTop followers?",
                    content:
                        "It's one thing to get\n" +
                        "                                   thousands of new\n" +
                        "                                   followers, but if they're entirely fake, you could be flagged for breaking Instagram's\n" +
                        "                                   terms.\n" +
                        "                                   This is the primary difference between high-quality Instagram followers and cheap or\n" +
                        "                                   low-quality\n" +
                        "                                   followers.\n" +
                        "                                   Here at TagIamTop, we don’t even bother with low-quality followers. These followers have\n" +
                        "                                   very low\n" +
                        "                                   engagement with the platform and are often booted off Instagram after a couple of\n" +
                        "                                   weeks.\n" +
                        '                                   This is referred to as "drop-off." You may get a boost of followers in the short term,\n' +
                        "                                   but they\n" +
                        "                                   quickly fall off as the accounts are deleted.\n" +
                        "                                   We have two tiers to choose from",
                    content2:
                        "High-Quality Followers — Followers with profile pictures, but\n" +
                        "                                       no further\n" +
                        "                                       uploads.\n" +
                        "                                       Premium Followers — Followers with profile pictures and regularly posted\n" +
                        "                                       content.\n" +
                        "                                       We’ve developed a system of generating authentic followers that work to boost your\n" +
                        "                                       following\n" +
                        "                                       without leading to a drop-off a few weeks later. This is a common experience users\n" +
                        "                                       report after\n" +
                        "                                       buying cheap Instagram followers. Drop-off is still a (rare) possibility in our\n" +
                        "                                       ecosystem. We’ll\n" +
                        "                                       replace any drop-off followers within 30 days of your order.",
                },

                {
                    title: "What’s the turnaround time after i place my order",
                    content:
                        " When you place an order, our system automatically begins" +
                        "assigning you followers. In order to prevent a dramatic influx of followers that could" +
                        "trigger Instagram's spam detection, we roll out your new followers over a couple of days." +
                        "The rate of dishing out new followers depends on the size of your current audience." +
                        "The more followers you have, the faster we can roll out your order. Most rollouts are" +
                        "complete within 48 hours after your purchase.",
                    title2: "What information do i need to\n" + "provide?",
                    content2:
                        "We don’t need much — just your username.\n" +
                        "We will never ask for your password or any personal or private information about your\n" +
                        "account.\n" +
                        "We accept the usual forms of payment, including all major credit cards and PayPal (coming\n" +
                        "soon).",
                },
                {
                    title: "Why choose TagIamTop?",
                    content:
                        " TagIamTop was created by a team of social media" +
                        "experts with over 12 years of experience on social media platforms. We’re constantly testing and" +
                        "improving our process to stay one step ahead of the competition." +
                        "We're constantly running tests within the Instagram ecosystem. This allows us to find the optimal" +
                        "follower velocity when rolling out new orders. Our system leverages real users — so you're not going" +
                        "to run into problems with Instagram over their terms and conditions." +
                        "The overall impact of your new followers is going to have substantially greater results than" +
                        "bot-driven services." +
                        "If that’s not enough, our 1000 satisfied monthly recurring customers says it all.",
                },
            ],
        },
    };
}

export default BuyInstagramFollowers;
