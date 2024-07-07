import React, { ReactNode, ErrorInfo } from "react";

interface ErrorBoundaryProps {
	fallback: ReactNode;
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		console.log(error);
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.error("Error caught by ErrorBoundary:", error, info);
	}

	render() {
		const { hasError } = this.state;
		const { fallback, children } = this.props;
		if (hasError) {
			return fallback;
		}

		return children;
	}
}

export default ErrorBoundary;
