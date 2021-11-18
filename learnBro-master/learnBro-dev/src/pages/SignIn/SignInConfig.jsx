// import * as utils from "../../utils"

export const config = [
    {
      name: "login",
      type: "text",
      placeholder: "Enter your Login",
      validation: [
        {name: 'min', value: 3},
        {name: 'max', value: 15},
      ]      
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your Password",
      validation: [
        {name: 'min', value: 4},
        {name: 'max', value: 10 },
      ] 
    },
  ];