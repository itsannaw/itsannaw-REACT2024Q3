import React from "react";

interface ErrorTriggerProps {
	onError: () => void;
}

class ErrorTrigger extends React.Component<ErrorTriggerProps> {
	componentDidMount() {
		const { onError } = this.props;
		onError();
	}

	render() {
		return null;
	}
}

export default ErrorTrigger;
