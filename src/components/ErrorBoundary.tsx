import React from "react"
import ErrorPage from "../pages/404"

type StateProps = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<{}, StateProps> {
  state = { hasError: false }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, message: error.message }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />
    }

    return this.props.children
  }
}
export default ErrorBoundary
