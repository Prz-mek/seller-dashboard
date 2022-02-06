const users = [
  {
    id: 1,
    username: "william",
    password: "alamakota",
    group: 1
  },
  {
    id: 1,
    username: "bill",
    password: "alamakota",
    group: 1
  },
  {
    id: 2,
    username: "robert",
    password: "alamakota",
    group: 2
  }
];


const saleData = {
  "william": {
    "current-week": {
      "money-circulation": {
        false: {
          labels: ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    },
    "next-week": {
      "money-circulation": {
        false: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatin tydzeiń",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    },
    "today": {
      "money-circulation": {
        false: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 100)
            },
            {
              label: "wczoraj",
              data: [...new Array(24)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 10)
            },
            {
              label: "wczoraj",
              data: [...new Array(24)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    }
  },
  "bill": {
    "current-week": {
      "money-circulation": {
        false: {
          labels: ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    },
    "next-week": {
      "money-circulation": {
        false: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatin tydzeiń",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    },
    "today": {
      "money-circulation": {
        false: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 100)
            },
            {
              label: "wczoraj",
              data: [...new Array(24)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 10)
            },
            {
              label: "wczoraj",
              data: [...new Array(24)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    }
  },
  "robert": {
    "current-week": {
      "money-circulation": {
        false: {
          labels: ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels:  ["20.01", "21.01", "22.01", "23.01", "24.01", "25.01", "26.01"],
          datasets: [
            {
              label: "ten tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    },
    "next-week": {
      "money-circulation": {
        false: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatin tydzeiń",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels:  ["13.01", "14.01", "15.01", "16.01", "17.01", "18.01", "19.01"],
          datasets: [
            {
              label: "ostatni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            },
            {
              label: "poprzedni tydzień",
              data: [...new Array(7)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    },
    "today": {
      "money-circulation": {
        false: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 100)
            }
          ]
        },
        true: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 100)
            },
            {
              label: "wczoraj",
              data: [...new Array(24)].map(() => Math.random() * 100)
            }
          ]
        }
      },
      "sold-items": {
        false: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 10)
            }
          ]
        },
        true: {
          labels: [
            "1:00",
            "2:00",
            "3:00",
            "4:00",
            "5:00",
            "6:00",
            "7:00",
            "8:00",
            "9:00",
            "10:00",
            "11:00",
            "12:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
            "00:00"
          ],
          datasets: [
            {
              label: "dzisiaj",
              data: [...new Array(15)].map(() => Math.random() * 10)
            },
            {
              label: "wczoraj",
              data: [...new Array(24)].map(() => Math.random() * 10)
            }
          ]
        }
      }
    }
  },
};
const orders = {
  "william": {
    unpaid: 1,
    unsent: 4,
    returns: 2,
  },
  "bill": {
    unpaid: 11,
    unsent: 2,
    returns: 0,
  },
  "robert": {
    unpaid: 0,
    unsent: 0,
    returns: 0,
  },
}
const ranking = {
  "william": [
    {
      name: "Xiaomi Mi 11 Lite",
      imgName: "xiaomi-mi-11-lite.jpg",
      totalSold: 159,
      moneyCirculation: 519,
      uniqueViews: 159
    },
    {
      name: "Apple iPhone X",
      imgName: "iphone-x.jpg",
      totalSold: 237,
      moneyCirculation: 155,
      uniqueViews: 129
    },
    {
      name: "Apple iPhone 7",
      imgName: "iphone-7.jpg",
      totalSold: 305,
      moneyCirculation: 165,
      uniqueViews: 199
    },
    {
      name: "Samsung Galaxy S20",
      imgName: "samsung-galaxy-s20.jpg",
      totalSold: 262,
      moneyCirculation: 2159,
      uniqueViews: 169
    },
    {
      name: "Huawei P30 Pro",
      imgName: "huawei-p30-pro.jpg",
      totalSold: 356,
      moneyCirculation: 159,
      uniqueViews: 29
    }
  ],
  "bill": [
    {
      name: "Apple iPhone 7",
      imgName: "iphone-7.jpg",
      totalSold: 22,
      moneyCirculation: 1165,
      uniqueViews: 190
    },
    {
      name: "Samsung Galaxy S20",
      imgName: "samsung-galaxy-s20.jpg",
      totalSold: 26,
      moneyCirculation: 215,
      uniqueViews: 1639
    },
  ],
  "robert": [

  ]
}

const dataMock = {
  users: function (name, password) {
    return users.find((user) => user.username === name && user.password === password);
  },
  group: function (name) {
    let group = users.find((user) => user.username === name).group;
    return users.filter((user) => user.group === group);
  },
  offers: function (name) {
    return orders[name];
  },
  ranking: function (name) {
    return ranking[name];
  },
  saleData: function (name) {
    return saleData[name];
  }
};

export default dataMock;
