import React from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
  retryCount: number;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.error("ErrorBoundary caught error:", error, errorInfo);
  }

  handleRetry = () => {
    // Reset error state and increment retry count to remount children
    this.setState((prev) => ({
      hasError: false,
      retryCount: prev.retryCount + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-700 rounded">
          {this.props.fallback || (
            <h2>Something went wrong while loading the module.</h2>
          )}
          <button
            onClick={this.handleRetry}
            className="button mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Retry
          </button>
        </div>
      );
    }

    // Pass a key prop to force remount on retryCount change
    return React.Children.map(this.props.children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child, { key: this.state.retryCount })
        : child
    );
  }
}
