import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import * as utils from '../../utils'

const Form = ({ config, to, title, titleLink }) => {
  const [formValue, setFormValue] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const values = {}
    config.forEach((field) => {
      const { name } = field
      // console.log(field)
      values[name] = ''
    })
    setFormValue(values)
    setErrors(values)
  }, [config])

  function validation() {
    const opt = { ...errors }

    config.forEach((item) => {
      const { validation } = item

      validation.forEach((error) => {
        const { name, value } = error
        if (name === 'min') {
          opt[item.name] = utils.isCheckMinLength(formValue[item.name], value)
            ? ''
            : 'dfgdfg'
        } else if (name === 'max') {
          opt[item.name] = utils.isCheckMaxLength(formValue[item.name], value)
        } else if (name === 'email') {
          opt[item.name] = utils.isCheckEmail(formValue[item.name])
        } else if (name === 'passRepeat') {
          opt[item.name] = utils.isCheckPassRep(
            formValue.password,
            formValue[item.name]
          )
            ? ''
            : 'false'
        }

        setErrors(opt)
      })
    })
  }

  // useEffect(() => {
  //   Object.keys(formValue).forEach((item) => {
  //     if (item === "login") {
  //       const obj = {
  //         login: utils.isCheckMinLength(formValue.login, 6),
  //         password: utils.isCheckPassword(formValue.password, 3, 22)
  //       };
  //       setErrors((prevState) => ({...prevState, ...obj}));
  //     }else if (item === "email") {
  //         const obj = {
  //           userName: utils.isCheckMinLength(formValue.userName, 6),
  //           email: utils.isCheckEmail(formValue.email),
  //           password: utils.isCheckPassword(formValue.password, 3, 22),
  //           passwordRepeat: utils.isCheckPassRep(formValue.password, formValue.passwordRepeat)
  //       };
  //       setErrors((prevState) => ({...prevState, ...obj}));
  //     }
  //   });
  // }, [formValue])

  const onValueChange = (e) => {
    const { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  }

  console.log(errors, 'errors')

  const sendData = (e) => {
    e.preventDefault()
    validation()

    // if(Object.values(errors).every(error=> error)) {
    //   // console.log(errors);
    //   console.log(formValue);
    //   // request
    // }
  }

  return (
    <form className="form">
      {config.map((item) => (
        <Input
          key={item.name}
          name={item.name}
          type={item.type}
          onValueChange={onValueChange}
          placeholder={item.placeholder}
          value={formValue[item.name]}
          invalid={errors[item.name]}
          // validation={item.validation}
        />
      ))}
      <button onClick={sendData} type="button" className="btn btn-primary">
        {title}
      </button>
      <Link to={to}>
        <button className="btn btn-secondary">{titleLink}</button>
      </Link>
    </form>
  )
}

export default Form
