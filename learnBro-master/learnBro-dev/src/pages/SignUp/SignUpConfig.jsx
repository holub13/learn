export const config = [
    {
      name: "login",
      type: "text",
      placeholder: "Enter your User Name",
      validation: [
        {name: 'min', value: 3},
        {name: 'max', value: 15},
      ] 
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your Email",
      validation: [{name: 'email'}] 
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your Password",
      validation: [
        {name: 'min', value: 4},
        {name: 'max', value: 10},
      ] 
    },
    {
      name: "passwordRepeat",
      type: "password",
      placeholder: "Enter your Password Again",
      validation: [{name: "passRepeat"}] 
    },
  ];