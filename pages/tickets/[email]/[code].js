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
	const [message, setMessage] = useState(null);
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
			await axios.post("https://private-anon-c3ca8ffdca-popreyv2aliases.apiary-mock.com/api/ticket_send.php", data);

			const response = await axios.post("https://private-anon-c3ca8ffdca-popreyv2aliases.apiary-mock.com/api/ticket_messages.php", {code});
			const fixedStr = response.data.replace(/\s/g, '').replaceAll("<br>"," ");
			const str = fixedStr.substring(0, fixedStr.length -2);
			const msg = JSON.parse(str+'}');
			setMessage(Object.values(msg.data.list));

		} catch (e) {
			console.log(e.message);
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
						{message && message.map((msg, index)=> {
							return (
									<li key={index} style={{listStyle:"none"}}>
										{msg.is_admin === 0 && <p style={{color:"red",textAlign: "left"}}>{msg.text}</p>}
										{msg.is_admin === 1 && <p style={{color:"blue",textAlign: "right"}}>{msg.text}</p>}
									</li>
							)
						})}
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
