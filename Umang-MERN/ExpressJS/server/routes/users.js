var express = require('express');
var router = express.Router();

const data = [
  {
    "id": 1,
    "name": "Aarav Sharma",
    "email": "aarav.sharma@email.com",
    "age": 28,
    "gender": "Male",
    "phone": "+91-9876543210",
    "city": "Mumbai",
    "country": "India",
    "occupation": "Software Engineer",
    "created_at": "2024-03-15T08:30:00Z"
  },
  {
    "id": 2,
    "name": "Emily Carter",
    "email": "emily.carter@email.com",
    "age": 34,
    "gender": "Female",
    "phone": "+1-415-555-0192",
    "city": "San Francisco",
    "country": "USA",
    "occupation": "Product Manager",
    "created_at": "2024-05-22T14:15:00Z"
  },
  {
    "id": 3,
    "name": "Luca Bianchi",
    "email": "luca.bianchi@email.com",
    "age": 41,
    "gender": "Male",
    "phone": "+39-06-1234567",
    "city": "Rome",
    "country": "Italy",
    "occupation": "Architect",
    "created_at": "2023-11-08T09:00:00Z"
  },
  {
    "id": 4,
    "name": "Fatima Al-Rashid",
    "email": "fatima.rashid@email.com",
    "age": 26,
    "gender": "Female",
    "phone": "+971-50-123-4567",
    "city": "Dubai",
    "country": "UAE",
    "occupation": "Data Analyst",
    "created_at": "2024-01-10T11:45:00Z"
  },
  {
    "id": 5,
    "name": "James Okonkwo",
    "email": "james.okonkwo@email.com",
    "age": 30,
    "gender": "Male",
    "phone": "+234-801-234-5678",
    "city": "Lagos",
    "country": "Nigeria",
    "occupation": "Marketing Specialist",
    "created_at": "2023-08-19T16:20:00Z"
  },
  {
    "id": 6,
    "name": "Sofia Mendes",
    "email": "sofia.mendes@email.com",
    "age": 22,
    "gender": "Female",
    "phone": "+55-11-91234-5678",
    "city": "São Paulo",
    "country": "Brazil",
    "occupation": "Graphic Designer",
    "created_at": "2024-07-03T10:00:00Z"
  },
  {
    "id": 7,
    "name": "Chen Wei",
    "email": "chen.wei@email.com",
    "age": 37,
    "gender": "Male",
    "phone": "+86-138-0013-8000",
    "city": "Shanghai",
    "country": "China",
    "occupation": "Financial Analyst",
    "created_at": "2023-12-25T07:30:00Z"
  },
  {
    "id": 8,
    "name": "Priya Nair",
    "email": "priya.nair@email.com",
    "age": 29,
    "gender": "Female",
    "phone": "+91-9845012345",
    "city": "Bangalore",
    "country": "India",
    "occupation": "UX Designer",
    "created_at": "2024-02-14T13:00:00Z"
  },
  {
    "id": 9,
    "name": "Oliver Müller",
    "email": "oliver.muller@email.com",
    "age": 45,
    "gender": "Male",
    "phone": "+49-30-12345678",
    "city": "Berlin",
    "country": "Germany",
    "occupation": "Project Manager",
    "created_at": "2023-06-30T08:00:00Z"
  },
  {
    "id": 10,
    "name": "Yuki Tanaka",
    "email": "yuki.tanaka@email.com",
    "age": 31,
    "gender": "Female",
    "phone": "+81-3-1234-5678",
    "city": "Tokyo",
    "country": "Japan",
    "occupation": "Content Strategist",
    "created_at": "2024-04-18T12:30:00Z"
  }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(data)
});



module.exports = router;
