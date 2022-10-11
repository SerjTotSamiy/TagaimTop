import ReactGA from "react-ga4";

const successful_payment = () => ReactGA.event("payment_successful",{methods:"payment_successful"})
const fail_payment = () => ReactGA.event("payment_failed",{methods:"payment_failed"})
const clickOnButton = () => ReactGA.event("clickOnButton",{methods:"clickOnButton"})

const gaEvent = {
	successful: successful_payment,
	failed: fail_payment,
	buttonClick: clickOnButton
}

export {gaEvent};
