import ReactGA from "react-ga4";

const successful_payment = () => ReactGA.event("successful_payment")
const fail_payment = () => ReactGA.event("fail_payment")

const gaEvent = {
	successful: successful_payment,
	failed: fail_payment
}

export {gaEvent};
