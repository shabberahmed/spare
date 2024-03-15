export  const data = (id) => {
  const api = [
    {
      "image": "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "id": 1
    },
    {
      "image": "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "id": 2
    },
    {
      "image": "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
      "name": "Mike Jones",
      "email": "mike.jones@example.com",
      "id": 3
    },
    {
      "image": "https://cirrusindia.co.in/wp-content/uploads/2016/10/dummy-profile-pic-male1.jpg",
      "name": "Susan Wilson",
      "email": "susan.wilson@example.com",
      "id": 4
    }
  ];

  const result = api.filter((val) => val.id === id);

  if (result) {
    console.log(result);
  } else {
    console.log('no data found');
  }
};

