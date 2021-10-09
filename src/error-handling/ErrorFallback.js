function ErrorFallback({error}) {
    console.log("Error ",error);
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{color: 'red'}}>{error.message}</pre>
      </div>
    )
}

export default ErrorFallback;