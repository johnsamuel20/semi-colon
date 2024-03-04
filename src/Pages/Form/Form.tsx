import { useState } from 'react'
import Header from '../../Components/Header/Header'
import './Form.css'
import Loading from '../../Components/Loading/Loading'
import ThankYou from '../../Components/ThankYou/ThankYou'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import SubmitError from '../../Components/SubmitError/SubmitError'

const formData = {
  name: '',
  email: '',
  phone: '',
  collegeId: '',
  year: '',
  firstPreference: '',
  firstPrefKnowledge: '',
  firstPrefReason: '',
  secondPreference: '',
  secondPrefReason: '',
  pastExperience: '',
}

const allOption2 = [
  {
    name: 'Second Preference *',
    value: 'No-track',
  },
  {
    name: 'FrontEnd',
    value: 'frontend',
  },
  {
    name: 'C Programming',
    value: 'c-prog',
  },
  {
    name: 'React',
    value: 'react',
  },
  {
    name: 'FullStack',
    value: 'fullstack',
  },
  {
    name: 'Nodejs',
    value: 'nodejs',
  },
  {
    name: 'Python',
    value: 'python',
  },
  {
    name: 'Avr',
    value: 'avr',
  },
  {
    name: 'Arm',
    value: 'arm',
  },
  {
    name: 'Flutter',
    value: 'flutter',
  },
  {
    name: 'Digital',
    value: 'digital',
  },
  {
    name: 'Desktop',
    value: 'desktop',
  },
]
function Form() {
  const [data, setData] = useState(formData)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [thankMessage, setThankMessage] = useState(false)
  const [submitErrorMessage, setSubmitErrorMessage] = useState(false)
  const [select1, setSelect1] = useState('No-track')
  const filterOption2 = allOption2.filter((i) => {
    return (
      (select1 === 'frontend' && i.value !== 'frontend') ||
      (select1 === 'c-prog' && i.value !== 'c-prog') ||
      (select1 === 'react' && i.value !== 'react') ||
      (select1 === 'fullstack' && i.value !== 'fullstack') ||
      (select1 === 'nodejs' && i.value !== 'nodejs') ||
      (select1 === 'python' && i.value !== 'python') ||
      (select1 === 'avr' && i.value !== 'avr') ||
      (select1 === 'arm' && i.value !== 'arm') ||
      (select1 === 'flutter' && i.value !== 'flutter') ||
      (select1 === 'digital' && i.value !== 'digital') ||
      (select1 === 'desktop' && i.value !== 'desktop') ||
      select1 === 'No-track'
    )
  })
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target
    setData({
      ...data,
      [id]: value,
    })
  }
  const handleChangeSecondSelect = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target
    setData({
      ...data,
      [id]: value,
    })
    setSelect1(event.target.value)
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    data.name = data.name.trim();
    data.email = data.email.trim();
    data.phone = data.phone.trim();
    data.collegeId = data.collegeId.trim();
    const phoneRegEx = /^01\d{9}$/
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const nameRegEx = /^[A-Za-z\s]*$/
    if (!phoneRegEx.test(data.phone)) {
      alert('Phone Number is invalid')
      setLoading(false)
      setThankMessage(false)
    } else if (!emailRegEx.test(data.email)) {
      alert('Email is invalid')
      setLoading(false)
      setThankMessage(false)
    } else if (!nameRegEx.test(data.name)) {
      alert('Name must not contain number or any special characters')
      setLoading(false)
      setThankMessage(false)
    } else if (
      data.year === '' ||
      data.year === 'No-year' ||
      data.firstPreference === '' ||
      data.secondPreference === 'No-track' ||
      data.firstPrefKnowledge === '' ||
    //   data.firstPrefReason === '' ||
      data.secondPreference === '' ||
      data.secondPreference === 'no track'
    //   data.secondPrefReason === '' ||
    //   data.pastExperience === ''
    ) {
      alert('Please fill all the required inputs')
      setErrorMessage('Please fill all the required inputs')
      setLoading(false)
      setThankMessage(false)
    } else {
      setErrorMessage('')
      setLoading(true)
      let resData
      try {
        const res = await fetch(
          'https://semicolon-registration-backend.onrender.com/participants/add',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ participant: data }),
          }
        )
        resData = await res.json()
        if (resData.status === 'failure') {
          alert(resData.data)
          setSubmitErrorMessage(true)
          setThankMessage(false)
        } else {
          setTimeout(() => {
            setThankMessage(true)
          }, 2000)
          setLoading(true)
        }
      } catch (err: any) {
        setTimeout(() => {
          setSubmitErrorMessage(true)
        }, 1000)
        setThankMessage(false)
      }
    }
  }

  return (
    <>
      <Header />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div id="top-form">
            <div className="title">Workshop Registration</div>
          </div>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Divider>
                <Chip
                  size="medium"
                  className="chip"
                  label="Personal Info"
                  color="warning"
                  style={{ fontSize: '1.1rem' }}
                />
              </Divider>
              <br />
              <hr className="solid"></hr>
              <div className="input-container ic2">
                <input
                  id="name"
                  className="input"
                  type="text"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                <div className="cut cut-short"></div>
                <label htmlFor="first-name" className="placeholder">
                  Name (In English) *
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                <div className="cut cut-short"></div>
                <label htmlFor="email" className="placeholder">
                  Personal Email *
                </label>
              </div>
              <div className="input-container ic2">
                <input
                  id="phone"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">Phone Number *</label>
              </div>
              <div className="input-container ic2">
                <input
                  id="collegeId"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">College ID</label>
              </div>
              <div className="drop-down">
                <div className="select">
                  <select className="options" id="year" onChange={handleChange}>
                    <option value="No-year">Year *</option>
                    <option value="Freshman">Freshman</option>
                    <option value="Sophomore">Sophomore</option>
                    <option value="Junior">Junior</option>
                    <option value="Senior 1">Senior 1</option>
                    <option value="Senior 2">Senior 2</option>
                  </select>
                </div>
              </div>
              <br />
              <hr className="solid"></hr>
              <br />
              <Divider>
                <Chip
                  label="First & Second Preferences"
                  color="warning"
                  style={{ fontSize: '1.1rem', padding: '10px' }}
                  size="medium"
                />
              </Divider>
              <br />
              <hr className="solid"></hr>
              <div className="drop-down">
                <div className="select">
                  <select
                    className="options"
                    id="firstPreference"
                    onChange={handleChangeSecondSelect}
                  >
                    <option value="No-track">First Preference *</option>
                    <option value="frontend">FrontEnd</option>
                    <option value="c-prog">C Programming</option>
                    <option value="react">React</option>
                    <option value="fullstack">FullStack</option>
                    <option value="nodejs">Nodejs</option>
                    <option value="python">Python</option>
                    <option value="avr">Avr</option>
                    <option value="arm">Arm</option>
                    <option value="flutter">Flutter</option>
                    <option value="digital">Digital</option>
                    <option value="desktop">Desktop</option>
                  </select>
                </div>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="firstPrefKnowledge"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                  required
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Previous experience in first preference *
                </label>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="firstPrefReason"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Reason of interest in this first preference
                </label>
              </div>
              <div className="select">
                <select
                  className="options"
                  id="secondPreference"
                  onChange={handleChange}
                >
                  {filterOption2.map((op) => (
                    <option key={select1 + op.value} value={op.value}>
                      {op.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-container ic2 text-area">
                <textarea
                  id="secondPrefReason"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Reason of interest in this second preference
                </label>
              </div>
              <hr className="solid"></hr>
              <br />
              <Divider>
                <Chip
                  label="Previous Experience"
                  color="warning"
                  style={{ fontSize: '1.1rem', padding: '10px' }}
                />
              </Divider>
              <br />
              <hr className="solid"></hr>
              <div className="input-container ic2 text-area">
                <textarea
                  id="pastExperience"
                  className="input"
                  placeholder=" "
                  onChange={handleChange}
                />
                <div className="cut cut-short"></div>
                <label className="placeholder">
                  Previous student activity experience
                </label>
              </div>
              <hr className="solid"></hr>
              <button type="submit" className="submit">
                Submit
              </button>
              <div className="error-mess">{errorMessage}</div>
            </>
          )}

          {thankMessage && <ThankYou />}
        </form>
        <div className="err-btn-container">
          {submitErrorMessage && <SubmitError />}
        </div>
      </div>
    </>
  )
}

export default Form
