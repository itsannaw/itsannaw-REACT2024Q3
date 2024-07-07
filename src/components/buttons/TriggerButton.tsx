import { Component } from "react";

import "./TriggerButton.style.css";
import ErrorTrigger from "../error-boundary/ErrorTriger";

interface TriggerButtonProps {
	triggerError: () => void;
	showErrorTrigger: boolean;
}

class TriggerButton extends Component<TriggerButtonProps> {
	render() {
		const { triggerError, showErrorTrigger } = this.props;
		return (
			<div>
				<button type="button" className="button" onClick={triggerError}>
					Trigger Error
				</button>
				{showErrorTrigger && (
					<ErrorTrigger
						onError={() => {
							throw new Error("Test error");
						}}
					/>
				)}
			</div>
		);
	}
}

export default TriggerButton;
