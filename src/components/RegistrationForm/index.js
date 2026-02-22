// Write your JS code here
import {useState} from 'react'
import './index.css'

function RegistrationForm() {
  const [formField, setFormField] = useState({
    firstName: '',
    lastName: '',
  })

  const [error, setError] = useState({
    firstName: false,
    lastName: false,
  })

  const [flag, setFlag] = useState(true)

  function handleSubmit(e) {
    e.preventDefault()
    const firstNameError = formField.firstName.trim() === ''
    const lastNameError = formField.lastName.trim() === ''

    setError({
      firstName: firstNameError,
      lastName: lastNameError,
    })

    if (!firstNameError && !lastNameError) {
      setFlag(false)
    }
  }

  function handleFirstName(e) {
    setError(prev => ({...prev, firstName: e.target.value.trim() === ''}))
  }

  function handleLastName(e) {
    setError(prev => ({...prev, lastName: e.target.value.trim() === ''}))
  }
  return (
    <div className="registraction-form-container">
      <h1 className="heading">Registration</h1>
      {flag ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label className="label" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              id="firstName"
              type="text"
              className={error.firstName ? 'input input-error' : 'input'}
              value={formField.firstName}
              onBlur={handleFirstName}
              placeholder="First name"
              onChange={e =>
                setFormField(prev => ({...prev, firstName: e.target.value}))
              }
            />
            {error.firstName && <p className="error">Required</p>}
          </div>
          <div className="input-box">
            <label className="label" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              id="lastName"
              type="text"
              className={error.lastName ? 'input input-error' : 'input'}
              placeholder="Last name"
              value={formField.lastName}
              onBlur={handleLastName}
              onChange={e =>
                setFormField(prev => ({...prev, lastName: e.target.value}))
              }
            />
            {error.lastName && <p className="error">Required</p>}
          </div>
          <div className="btn-input">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="successful-registraction">
          <img
            className="success-logo"
            src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
            alt="success"
          />
          <p className="success-text">Submitted Successfully</p>
          <button
            type="button"
            className="submit-btn"
            onClick={() => {
              setFormField({firstName: '', lastName: ''})
              setError({firstName: false, lastName: false})
              setFlag(true)
            }}
          >
            Submit another response
          </button>
        </div>
      )}
    </div>
  )
}

export default RegistrationForm
