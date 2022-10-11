import ReactGA from "react-ga4";

const successful_payment = () => ReactGA.event("payment_succesful",{methods:"payment_succesful"})
const fail_payment = () => ReactGA.event("payment_failed",{methods:"payment_failed"})

const gaEvent = {
	successful: successful_payment,
	failed: fail_payment
}

export {gaEvent};
