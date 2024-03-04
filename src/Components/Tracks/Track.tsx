import './Track.css'
import { Link } from 'react-router-dom'
interface TrackProps {
  title: string
  objectives: string[]
  requirements: string[]
  content: string[]
  noOfSessions: string
  id: string
}
function Track({
  title,
  objectives,
  requirements,
  content,
  noOfSessions,
  id,
}: TrackProps) {
  return (
    <div className="blog" id={id}>
      <div className="blog_post">
        <div className="container_copy">
          <h1>{title}</h1>
          <div className="container">
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id={'faq-drawer' + id}
                type="checkbox"
              />
              <label className="faq-drawer__title" htmlFor={'faq-drawer' + id}>
                Objectives
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  {objectives.map((item) => {
                    return <div>{item}</div>
                  })}
                </div>
              </div>
            </div>

            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id={'faq-drawer-3' + id}
                type="checkbox"
              />
              <label
                className="faq-drawer__title"
                htmlFor={'faq-drawer-3' + id}
              >
                Content
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  {content.map((item) => {
                    return <div>{item}</div>
                  })}
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id={'faq-drawer-2' + id}
                type="checkbox"
              />
              <label
                className="faq-drawer__title"
                htmlFor={'faq-drawer-2' + id}
              >
                Requirements
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">
                  {requirements.map((item) => {
                    return <div>{item}</div>
                  })}
                </div>
              </div>
            </div>
            <div className="faq-drawer">
              <input
                className="faq-drawer__trigger"
                id={'faq-drawer-4' + id}
                type="checkbox"
              />
              <label
                className="faq-drawer__title"
                htmlFor={'faq-drawer-4' + id}
              >
                Number of Sessions
              </label>
              <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content">{noOfSessions}</div>
              </div>
            </div>
          </div>
          <div className="btn-cont">
            <Link to="/form">
              <button className="btn_primary">Join Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Track
