import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Layer } from "../component/Layer/Layer";
import styles from "/styles/BuyInstagramLikes.module.sass";
import styles1 from "/styles/Home.module.sass";
import { ButtonComponent } from "../component/ButtonComponent/ButtonComponent";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import InfoBlock from "../component/InfoBlock/InfoBlock";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import { useRouter } from "next/router";
import ModalBuy from "../component/ModalBuy/ModalBuy";
import { PageTitle } from "../component/PageTitle/PageTitle";
import Carousel from "nuka-carousel";
import AmbientBlock from "../component/AmbientBlock/AmbientBlock";
import { MeContext } from "./_app";
import useAxios from "../hooks/useAxios";
import { NextSeo } from "next-seo";
import NextHead from "next/head";
import Image from "next/image";

const BuyInstagramLikes = ({ text }) => {
  const router = useRouter();
  const { price, allInfo, setUrl } = useContext(MeContext);
  const axios = useAxios();
  const [readMore, setReadMore] = useState(3);
  const [type, setType] = useState({ 1: "fill", 2: "outline" });

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
        <title>Tagiamtop</title>

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
        <script id="__NEXT_DATA__" type="application/json" />
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
            At tagiamtop, you can buy Instagram likes quickly, safely and easily
            with just a few clicks. See our deals below!
          </p>

          <img
            className={styles.header_arrow}
            src="/arrow-detail.svg"
            alt="header_arrow"
            onClick={() => window.scrollTo(0, 500)}
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
          <PageTitle title={"Buy Instagram likes and auto-likes"} />

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
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="600"
          >
            <InfoBlock
              text={
                <p>
                  <p className={styles1.info_text} style={{ float: "left" }}>
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
                    {text[0].content}{" "}
                  </p>
                </p>
              }
              fade={true}
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="600"
          >
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
                    {text[1].content}
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
              setType({ 1: "outline", 2: "fill" });
              ref1?.current?.scrollIntoView();
            }}
          />
          <ButtonComponent
            text="Gradual"
            style={style[type["1"]]}
            type={type["1"]}
            onClick={() => {
              setChange(!change);
              setType({ 1: "fill", 2: "outline" });
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
            <br /> click here!
          </p>
        </div>

        <div style={{ background: "url('/bacgraund-works.jpg')" }}>
          <div className={"container"}>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-offset="1400"
            >
              <InfoBlock
                text={
                  <p>
                    <p
                      className={styles1.info_title}
                      style={{ textAlign: "right" }}
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
                      {text[2].content}{" "}
                    </p>
                  </p>
                }
                reverse={false}
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
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
                    <p className={styles1.info_title} style={{ marginTop: 30 }}>
                      {text[3].title2}
                    </p>
                    <p className={styles1.info_text}>
                      <li>{text[3].li1}</li>
                      <p style={{ marginBottom: 10 }}>{text[3].content2}</p>
                      <li>{text[3].li2}</li>
                      <p>{text[3].content3}</p>
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
                          priceValue: item?.price,
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
              <Review service={"Likes"} />
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

                <p style={{ marginTop: 20 }}>
                  <a
                    style={{ color: "#8C66FA", cursor: "pointer" }}
                    onClick={() => comment && setReadMore(comment.length)}
                  >
                    Read More Reviews
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layer>
    </>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      meta: {
        description:
          "Buy Instagram likes from TagIamTop now with a price under $1 per one. Instant delivery and support. We can help you to develop your online business.",
      },
      text: [
        {
          title: "Why are Instagram likes valuable?",
          content:
            "Alongside comments, likes are the principal currency spent on\n" +
            "Instagram. A like is an affirmation to the social media community that your post is useful,\n" +
            "interesting or fun, and might be enjoyed by someone else too.\n" +
            "Not only do likes indicate the quality of your post and brand in general, they also show\n" +
            "that many people think your account is worth following. The more likes your account\n" +
            "receives, the better the ‘social proof’ of your popularity and quality. More likes also mean\n" +
            "more exposure. Instagram uses an algorithm to choose which posts to show to larger audiences\n" +
            "and having a more popular post will encourage Instagram to organically boost your brand.\n" +
            "Likes are also a way to encourage interaction. When someone likes a post, it’s common for\n" +
            "the owner of the account to check out the profile of whoever gave the like, and it’s the\n" +
            "perfect opportunity to gain a new follower.\n" +
            "With Likes.io, we target specific accounts to ensure that your account only likes posts that\n" +
            "connect directly to your desired market and demographic.",
        },
        {
          title: "Why should I choose tagiamtop?",
          content:
            "With our long-term commitment to understanding and working with\n" +
            "Instagram, we bring expertise and high-quality service to every user.\n" +
            "We stick to the rules of Instagram, and never promise more than we can deliver while\n" +
            "consistently boosting your social media presence. That’s how we know our customers will\n" +
            "value our tools. When you buy 100 Instagram likes from us you’ll get 100 opportunities to\n" +
            "influence potential customers.\n" +
            "The social media world is confusing and complicated, and doing everything right can be a\n" +
            "real challenge. With our automated and long-standing systems, we take much of the burden of\n" +
            "Instagram use away from you.\n" +
            "You can see great growth results within a few days of signing up to Likes.io and watch your\n" +
            "account go from strength to strength as we deliver powerful results. When you buy a real\n" +
            "Instagram like from us, you can feel confident it will count.\n" +
            "You can track your campaign, see your spending and progress.",
        },
        {
          title: "Buy Automatic Instagram Likes",
          content:
            " Buy Automatic Instagram Likes and watch how fast you become an\n" +
            "influencer in your business niche. Everyone, even the Instagram algorithm , takes notice of\n" +
            "your Instagram page. Each time you upload content on your page, the comments and likes\n" +
            "attract more attention to your post. You know how frustrating it is to create awesome posts\n" +
            "and get few likes. This is why you need Poprey to buy automatic Instagram likes. Our site is\n" +
            "safe and secured for purchasing all the likes and comments you need to grow your Instagram\n" +
            "page. You will thank us later when your posts go viral!\n" +
            "Just like many other Instagram pages in your niche, you bought a popular Instagram course on\n" +
            "how to increase your page&apos;s engagement. You followed the course to achieve your goals, but\n" +
            "it takes a lot more effort and time to become an influencer in your niche. Even popular\n" +
            "Instagram personalities like Beyonce Knowles, Kendall Jenner, or one of the Kardashians, to\n" +
            "mention just a few, need help sometimes.\n" +
            "With Poprey, it’s just a lot easier and with a lot less hassle! But the best part is the\n" +
            "time it takes – no time at all! We currently offer two types of Instagram like packages -\n" +
            "your choice depends on your needs.",
        },
        {
          title: "Why Should You Buy Automatic Instagram Likes?",
          title2: "What are the benefits?",
          content:
            "Ever wondered why you put so much effort into creating an\n" +
            "Instagram page to achieve your\n" +
            "business goals, yet you can't seem to pull it off like your competitors. You have a great\n" +
            "plan\n" +
            "to grow your Instagram community to leverage their support for your page, but you simply\n" +
            "can't\n" +
            "get that high number of likes to begin with.\n" +
            "Yet your competitors are getting all the likes and partnering with top brands in your niche.\n" +
            "Just like most ventures in life, you can get to the top either the hard way or the smart\n" +
            "way.\n" +
            "Poprey Automatic Instagram Likes is the smart way to the top of your niche. Get all the\n" +
            "likes\n" +
            "and real views you need to grow your\n" +
            "page.",
          li1: "Saves Time",
          li2: "Real Accounts",
          content2:
            "Buying automatic Instagram likes on Poprey helps you save\n" +
            "precious\n" +
            "time. Competitors in your niche market are way ahead of you. But you can grow your\n" +
            "Instagram\n" +
            "page's engagement and surpass them. Buy IG auto likes today and get the rewards in no\n" +
            "time.",
          content3:
            "The IG auto likes you will get are from real Instagram accounts. We ensure you get the\n" +
            "best\n" +
            "value for every penny you invest in buying genuine likes and comments for your business.\n" +
            "Plus, you have the opportunity to increase and upgrade each plan you subscribe to.",
        },
      ],
    },
  };
}

export default BuyInstagramLikes;
