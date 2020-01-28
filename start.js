const getFirstName = async (userId) => {
    //let's say this takes a few seconds
    return "first name";
  };
  
  const getLastName = async (userId) => {
    //let's say this takes a few seconds
    return "last name";
  };
  
  const getUserFullName = async (userId) => {
    const firstName = await getFirstName(userId);
    const lastName = await getLastName(userId);
    console.log(`${firstName} ${lastName}`)
    return `${firstName} ${lastName}`;
  };

  getUserFullName('1233123')