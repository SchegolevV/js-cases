const getLanguagesStatistic = (feedbacks) => {
    const feedbacksAfter2019 = feedbacks.filter(
      (feedbackInfo) => feedbackInfo.year >= 2019
    );
    let result = {};
    for (let feedback of feedbacksAfter2019) {
      const { language } = feedback;
      if (result[language]) {
        result[language]++;
      } else {
        result[language] = 1;
      }
    }
    return result;
  };
  
  const data = [
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "C",
      year: 2019,
    },
    {
      firstName: "Anna",
      lastName: "R.",
      country: "Liechtenstein",
      continent: "Europe",
      age: 52,
      language: "JavaScript",
      year: 2019,
    },
    {
      firstName: "Piter",
      lastName: "G.",
      country: "Sweden",
      continent: "Europe",
      age: 30,
      language: "JavaScript",
      year: 2019,
    },
    {
      firstName: "Ramon",
      lastName: "R.",
      country: "Paraguay",
      continent: "Americas",
      age: 29,
      language: "Ruby",
      year: 2014,
    },
    {
      firstName: "George",
      lastName: "B.",
      country: "England",
      continent: "Europe",
      age: 81,
      language: "C",
      year: 2016,
    },
  ];
  const result = getLanguagesStatistic(data);
  console.log(result);