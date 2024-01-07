interface LoadingIndicatorProps {
    loadingState: String;
}

const LoadingIndicator = (props: LoadingIndicatorProps) => {
    return <h3>{props.loadingState}</h3>
}

export default LoadingIndicator;