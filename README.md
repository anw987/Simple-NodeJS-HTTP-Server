# Node.js Simple API (Echo & Inquiry)

Simple REST API built with Node.js (Express) and containerized using Docker.

---

## 🚀 Features

- REST API using Express.js
- JSON request/response
- Two endpoints: /echo and /inquiry
- Docker-ready (Node LTS Alpine)
- Ready for Docker Hub deployment

---

## 📦 Tech Stack

- Node.js (LTS)
- Express.js
- Docker

---

## 📁 Project Structure

app.js  
package.json  
package-lock.json  
Dockerfile  
README.md  

---

## ▶️ Run Locally

Install dependencies:

npm install

Start application:

node app.js

Server:
http://localhost:8080

---

## 📡 API Documentation

### Echo API

POST /echo

Request:
{
  "transDateTime": "2025-08-10 12:00:13"
}

Response:
{
  "transDateTime": "2025-08-10 12:00:13",
  "responseCode": "00"
}

---

### Inquiry API

POST /inquiry

Request:
{
  "transDateTime": "2025-08-10 12:00:13",
  "qrCode": "sdsakfuasfwa",
  "senderAccount": "123243256",
  "senderInstitutionCode": "008"
}

Response:
{
  "transDateTime": "2025-08-10 12:00:13",
  "qrCode": "sdsakfuasfwa",
  "senderAccount": "123243256",
  "senderInstitutionCode": "008",
  "responseCode": "00",
  "additionalDataResp": {
    "merchantNumber": "xx",
    "merchantName": "abc",
    "infoA": "etc",
    "infoB": "etc"
  }
}

---

## 🐳 Docker Usage

Build image:
docker build -t node-api-simple .

Run container:
docker run -d -p 8080:8080 --name node-api node-api-simple

Access:
http://localhost:8080

---

## 📤 Push to Docker Hub

Login:
docker login

Tag image:
docker tag node-api-simple YOUR_USERNAME/node-api-simple:1.0

Push image:
docker push YOUR_USERNAME/node-api-simple:1.0

---

## 📥 Pull and Run Anywhere

docker pull YOUR_USERNAME/node-api-simple:1.0

docker run -p 8080:8080 YOUR_USERNAME/node-api-simple:1.0

---

## 📌 Notes

- Stateless API
- Runs on port 8080
- Docker-ready
- CI/CD friendly

---

## 👨‍💻 Author

Node.js API project for learning Docker deployment
