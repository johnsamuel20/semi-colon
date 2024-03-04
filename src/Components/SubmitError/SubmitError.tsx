import './SubmitError.css'

function SubmitError() {
  return (
    <div>
      <div className="error-title">
        <h2>Something went wrong, Try Again </h2>
      </div>
      <button className="submit">
        <a className="btn-title" href="/">
          Go back to Home
        </a>
      </button>
    </div>
  )
}

export default SubmitError
