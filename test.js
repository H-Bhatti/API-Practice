let testObj = {
    label: `Population growth country`,
    data: undefined,
    borderColor: undefined,
    borderWidth: 1
  }

  let testObj2 = Object.create({data:32}, testObj)
  console.log(testObj2)