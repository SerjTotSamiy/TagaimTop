import {TextField} from "@mui/material";
import Head from "next/head.js";
import {useRouter} from "next/router";
import React, {useState, useEffect} from 'react';
import {ButtonComponent} from "../../../component/ButtonComponent/ButtonComponent.jsx";
import {Layer} from "../../../component/Layer/Layer.jsx";
import {PageTitle} from "../../../component/PageTitle/PageTitle.jsx";
import useAxios from "../../../hooks/useAxios.js";
import likeStyles from "../../../styles/BuyInstagramLikes.module.sass";
import privacyStyles from "../../../styles/PrivacyPolicy.module.sass";

const Code = () => {
	const [text,setText] = useState(null);
	const [mail,setMail] = useState(null);
	const [code,setCode] = useState(null);
	const router = useRouter();
	useEffect(()=>{
		setMail(router.query.email);
		setCode(router.query.code);
	},[router])

	const axios = useAxios();
	const sendRequest = async () => {
		try {
			const data = new FormData();
			data.append("text", text.toString());
			data.append("email", mail.toString());
			data.append("code", code.toString());
			const d = await axios.post("/ticket_send.php", data);
			console.log(d);
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<Layer firstPage={false}>
			<Head>
				<title>Ticket #35303</title>

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
			</Head>
			<div className={likeStyles.header_banner}>
				<p className={likeStyles.header_title}>Live Chat</p>
				<p className={likeStyles.header_text}>
					Get in touch with us today, we’d love to hear from you!
				</p>

				<img
					className={likeStyles.header_arrow}
					src="/arrow-detail.svg"
					alt=""
				/>
			</div>
			<div>
				<PageTitle title={"Code"} />
				<div className={privacyStyles.privacy_container}>
					<div className={privacyStyles.contactBlock}>
					<ul>
						<li></li>
					</ul>
						<span>
							<TextField
								id="outlined-multiline-static"
								label="Enter your message"
								multiline
								rows={5}
								style={{width: "100%"}}
								sx={{
									"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
										borderColor: "#8C66FA",
									},
									"& .MuiInputLabel-root.Mui-focused": {
										color: "#272D4D42",
									},
								}}
								onChange={(e) => setText(e.target.value)}
							/>
						</span>
						<span className={privacyStyles.buttons}>
							<ButtonComponent
								text="Send Message"
								type="fill"
								onClick={sendRequest}
							/>
						</span>
					</div>
				</div>
			</div>
		</Layer>
	);
};

export default Code;
