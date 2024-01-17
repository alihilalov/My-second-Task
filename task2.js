const personalProfile={
    firstName:"Ali",
    lastName:"Hilalov",
    age:19,
    favoriteLanguage:"Pyhton",
    contactInfo:{
        email:"hilalovali0501@gmail.com",
        phone: 516951536
    }
};

personalProfile["occupation"]="Developer";
personalProfile.contactInfo["address"]="Sumgait";

const newKey="email"


console.log(personalProfile);
console.log(personalProfile.contactInfo.email);
console.log(personalProfile["contactInfo"]["phone"]);
console.log(personalProfile.email); //to see undefined
console.log(personalProfile["contactInfo"][newKey]);