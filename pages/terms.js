import React from "react";
import {useRouter} from "next/router";
import {Layer} from "../component/Layer/Layer";
import styles from "../styles/BuyInstagramLikes.module.sass";
import BuyLikes from "../component/BuyLikes/BuyLikes";
import styles1 from "../styles/Home.module.sass";
import Comment from "../component/Comment/Comment";
import Review from "../component/Review/Review";
import TextComponent from "../component/TextComponent";
import privacyStyles from "../styles/PrivacyPolicy.module.sass";
import {PageTitle} from "../component/PageTitle/PageTitle";
import Head from "next/head";

const Terms = () => {
    const router = useRouter();
    return (
        <Layer firstPage={false}>
            <Head>
                <title>Terms of Service - Tag I am Top</title>

                <meta
                    name="title"
                    property="og:title"
                    content="Terms of Service - Tag I am Top"
                />
                <meta name="twitter:title" content="Terms of Service - Tag I am Top"/>
                <meta
                    name="description"
                    property="og:description"
                    content="Please read Terms of Service of our platform and use TagIamTop safely."
                />
                <meta
                    name="twitter:description"
                    content="Please read Terms of Service of our platform and use TagIamTop safely."
                />

                <link rel="canonical" href="https://likes.io/terms"/>
            </Head>
            <div className={styles.header_banner}>
                <p className={styles.header_title}>Terms of Service</p>
                <p className={styles.header_text}>Last Updated : October 23, 2020</p>

                <img className={styles.header_arrow} src="/arrow-detail.svg" alt=""/>
            </div>

      <PageTitle title={"Terms and conditions: Rules, refund, and privacy"} />

      <div className={privacyStyles.privacy_container}>{/*
        <div className={privacyStyles.terms_block}>
          <p className={styles1.info_text}>
            By signing up and gaining access to our services, you agree with the
            Terms and Conditions listed below. First of all, we would like to
            thank you for choosing our services. The products you purchase on
            our website are created by STORM FZE, under the brand. The company
            is located at Fujairah POX. 4422, United Arab Emirates. By signing
            up to our website, you agree to comply with our Terms and Conditions
            and that you will be responsible for the compliance with any local
            laws that are in effect in your region. You cannot continue
            accessing and using this website if you fail to agree to any of the
            terms and conditions listed below. Every asset on the website is
            protected by copyright and trademark law.
          </p>
        </div>*/}
        <TextComponent
          title="1. Definition"
          text={
            <p className={styles1.info_text} style={{ lineHeight: 3 }}>
              <b>Tagiamtop</b> - service at the address tagiamtop.com operated by Qloyd OU registration code 16257994.
              <b>Address</b>: Harju maakond, Tallinn, Kesklinna linnaosa, Roseni tn 13, 10111, Estonia, in accordance
              with laws of Estonia. <br/><b>Warranty</b> - The option of financial compensation for damaged or missing products.
              <br/>By <b>service</b>, we mean a website. <b>Buyer</b> - a physical or corporate person who requires our services.
              <br/><b>Ordering</b> - Providing appropriate data and payment. <br/><b>The usage data</b> is information automatically
              accumulated by the Service's infrastructure (e.g. the duration of a page visit). <br/><b>You</b> mean the person
              gaining access or making use of the Services and/or the company that the individual is accessing
              or using the Services on behalf of, as applicable.
            </p>
          }
        />

        <TextComponent
          title="2. General rules"
          text={
            <p className={styles1.info_text} style={{ lineHeight: 3 }}>
              <li>You must notify our team in case of any kind of technical error.
                Free Instagram Followers can only be allowed once to try out our services.</li>
              <li>Once you have uploaded the profile photo, submitted the accurate information,
                your profile is unlocked for everyone, you can proceed with the order.</li>
              <li>If a user declares a dispute with Paypal, his/her account will be blacklisted,
                as well as suspended.</li>
              <li>There will be an announcement if there are some changes to our terms.</li>
            </p>
          }
        />
        <TextComponent
          title="3. Using private data sources"
          text={
            <p className={styles1.info_text} style={{ lineHeight: 3 }}>
              <b>Attention</b>: We may disclose certain information in connection with the Service to these third-party vendors.
              <br/><b>Interest</b>: With this new feature, we will continue to give you the same great features and benefits of the Service.
              <br/><b>Desire</b>: We will continue to work with these third party vendors for your protection.
              <br/><b>Action</b>: We will never share any of your personal information other than what is strictly required for the service,
              and all third-party vendors must adhere to our strict privacy policies.
            </p>
          }
        />
        <TextComponent
          title="4. Refund"
          text={
            <p className={styles1.info_text} style={{ lineHeight: 3 }}>
              <ul>
                <li>Any order that cannot be fulfilled because we have been unable to contact you
                  or because of an inaccurate profile, we will refund your payment.
                </li>
                <li>If you provide inaccurate information that caused the situation that the purchase
                  was delivered to the wrong person, we will not issue a refund.</li>
                <li>You might be eligible for a full refund for products paid for the day before
                  shipment if you did not get it promptly.</li>
                <li>You can ask for a refund once within one day of the date of purchase,
                  as long as it's within the warranty period.</li>
                <li>We don't provide refunds if you order from more than one service unless
                  it's a product that we can give to another customer.</li>
                <li>Warranty, as well as available data, can be found in the item description.</li>
              </ul>
            </p>
          }
        />

        <TextComponent
          title="5. Terms of delivery"
          text={
            <p className={styles1.info_text} style={{ lineHeight: 3 }}>
              <ul>
                <li>As soon as the transaction is successful, the service will start processing.</li>
                <li>Your service will not begin if payment has been delayed or canceled.</li>
                <li>If the service specifies a 24-hour turnaround time, the process starts as soon
                  as payment has gone through. You will receive an order to the mail you specify and then make payment.</li>
                <li>Please contact us using the form or email at contact@tagiamtop.com if you have not received the service.</li>
              </ul>
            </p>
          }
        />

        <TextComponent
            title="6. Responsibility"
            text={
              <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                <ul>
                  <li>It is possible to have your order processed once your account is authenticated
                    to the public, and you upload a profile photo.</li>
                  <li>The service may not look or work quite as expected when we try to use it.
                    This is because each person needs a different level of service.</li>
                  <li>The customer's responsibility is to make sure that the necessary steps are taken after receiving the order.</li>
                  <li>We cannot ensure an accurate performance description if order quantity is greater than the maximum limit.</li>
                  <li>Mailing address of the cardholder: Harju maakond, Tallinn, Kesklinna linnaosa, Roseni tn 13, 10111, Estonia.</li>
                </ul>
              </p>
            }
        />

        <TextComponent
            title="7. Privacy policy"
            text={
              <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                <ul>
                  <li>We guarantee that the email address will never be shared with third parties.</li>
                  <li>We reserve the right to email you notifications. These will only be sent
                    to the address provided when creating a ticket or order.</li>
                  <li>All your data is strictly secured, guaranteeing that no third parties
                    will ever know who you are. Your anonymity is fully insured at all times without fail.</li>
                  <li>To protect the users' private data, we only allow direct account access to active customers
                    who have already confirmed phone/email ownership and hold encryption keys securely.
                    Your information will never be given to a third party.</li>
                  <li>Third parties can't tap payments due to the encryption you're using.</li>
                  <li>In rare cases where your card fails or doesn't work, we'll let you know
                    as soon as possible by e-mail and on our website so that you don't lose your money.</li>
                  <li>We use encryption and SSL to protect your privacy. Your card data is not stored or transmitted,
                    and the only exception is through our payment gateways. We don't keep any of your details,
                    such as card information.</li>
                </ul>
              </p>
            }
        />

        <TextComponent
            title="Changes to this Privacy Policy"
            text={
              <p className={styles1.info_text} style={{ lineHeight: 3 }}>
                You can always check here for the latest version of our Privacy Policy.
                We will notify you by email before any changes to this Privacy Policy.
                Additionally, we will post a notice on our Service and update the "Last Updated"
                date in this Privacy Policy before the change occurs.
                We ask that you check this Privacy Policy from time to time for changes.
                Changes will happen as soon as the new updates are added to this page.
              </p>
            }
        />
      </div>
    </Layer>
  );
};

export default Terms;
