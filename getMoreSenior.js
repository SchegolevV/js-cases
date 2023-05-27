const getMostSenior = (humans) => {
    const sortedHumans = humans.sort((prev, next) => {
      return prev.age - next.age;
    });
    const oldButGold = sortedHumans.filter((human, i, arr) => {
      return human.age === arr[arr.length - 1].age;
    });
    return oldButGold;
  };
  
const data = [
    {
      firstName: "Gabriel",
      lastName: "X.",
      country: "Monaco",
      continent: "Europe",
      age: 49,
      language: "PHP",
    },
    {
      firstName: "Odval",
      lastName: "F.",
      country: "Mongolia",
      continent: "Asia",
      age: 38,
      language: "Python",
    },
    {
      firstName: "Emilija",
      lastName: "S.",
      country: "Lithuania",
      continent: "Europe",
      age: 19,
      language: "Python",
    },
    {
      firstName: "Sou",
      lastName: "B.",
      country: "Japan",
      continent: "Asia",
      age: 49,
      language: "PHP",
    },
  ];
  const result = getMostSenior(data);
  console.log(result);