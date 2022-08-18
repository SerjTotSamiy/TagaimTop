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
	const [text,setText] = useState("");
	const [mail,setMail] = useState(null);
	const [code,setCode] = useState(null);
	const [message, setMessage] = useState(null);
	const router = useRouter();
	useEffect(()=>{
		setMail(router.query.email);
		setCode(router.query.code);
		return () => {
			setMail(null);
			setCode(null);
		}
	},[router])

	const axios = useAxios();
	const sendRequest = async (event) => {
		event.preventDefault();
		try {
			const data = new FormData();
			data.append("text", text.toString());
			data.append("email", mail.toString());
			data.append("code", code.toString());
			await axios.post("/ticket_send.php", data);

			const response = await axios.post("/ticket_messages.php", {code});

			const fixedStr = response.data.replace(/\s/g, '').replaceAll("<br>"," ");

			const str = fixedStr.substring(0, fixedStr.length -2);
			const msg = JSON.parse(str+'}');
			setMessage(Object.values(msg.data.list));

		} catch (e) {
			console.log(e.message);
			setMessage(null);
		}
		setText("");
	}
	const textHandler = (event) => {
		event.preventDefault();
		setText(event.target.value)
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
					<ul style={{margin:0,padding:0,maxHeight:"300px",overflowX:"auto"}}>
						{message && message.map((msg, index)=> {
							console.log(msg);
							return (
									<li key={index} style={{listStyle:"none",clear:"both",display:"block"}}>
										{msg.is_admin === 0 && <p
											style={{
												backgroundColor: "rgba(246, 245, 255, 1)",
												border: "2px dashed #C9C2FD",
												borderRadius: 10,
												padding: 20,
												borderTopLeftRadius: 0,
												display:"inline-block",
												marginBottom:"14px"
											}}
											>
											{msg.text}</p>}

										{msg.is_admin === 1 && <p
											style={{
												backgroundColor: "rgba(246, 245, 255, 1)",
												border: "2px dashed #C9C2FD",
												borderRadius: 10,
												padding: 20,
												borderTopRightRadius: 0,
												maxWidth: 700,
												float:"right",
												display:"inline-block",
												marginBottom:"14px"}}>
											{msg.text}</p>}
									</li>
							)
						})}
					</ul>
						<form onSubmit={sendRequest}>
							<TextField
								id="outlined-multiline-static"
								label="Enter your message"
								multiline
								rows={3}
								style={{width: "100%",marginBottom:"20px"}}
								sx={{
									"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
										borderColor: "#8C66FA",
									},
									"& .MuiInputLabel-root.Mui-focused": {
										color: "#272D4D42",
									},
								}}
								value={text}
								onChange={(event)=>textHandler(event)}
							/>
							<span className={privacyStyles.buttons}>
								<ButtonComponent
									text="Send Message"
									type="fill"
									typeInput="submit"
								/>
							</span>
						</form>
					</div>
				</div>
			</div>
		</Layer>
	);
};

export default Code;
