## Aplikacja do zarządzania funduszami rodzinnymi

Aplikacja do zarządzania funduszami rodzinnymi składająca się z dwóch części:

- Backendu
- Frontendu

## Backend

**Użyte technologie:**

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDb](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white) ![Json%20web%20token](https://img.shields.io/badge/Json%20web%20token-000000?style=for-the-badge&logo=Jsonwebtokens&logoColor=white)

Aby aplikacja działala należy umieścić plik .env w katalogu głównym aplikacji.

```
MONGO_URI = Url dla mongoDb
JWT_SECRET= Sekretny klucz do szyfrowania tokenów
```


#### Requsty

![Register](https://img.shields.io/static/v1?style=for-the-badge&label=Register&message=Post&color=yellow)

**`http://localhost:5000/api/user/register`**

```
{
  "firstName": String,
  "lastName": String,
  "email": String,
  "password": String,
  "role": String ["admin", "user"],
  "hasFamily": Boolean,
  "memberOfFamily": String ? Jezeli posiada rodzine to podaj id rodziny
  "verificationKey": String ? Jezeli posiada rodzine to podaj klucz do weryfikacji
}
````

![Login](https://img.shields.io/static/v1?style=for-the-badge&label=Login&message=Post&color=yellow)

**`http://localhost:5000/api/user/login`**

```
{
  "email": String,
  "password": String,
}
```

![GetUser](https://img.shields.io/static/v1?style=for-the-badge&label=Get%20User&message=Get&color=43a047)

**`http://localhost:5000/api/user/me`**

```
Authorization Bearer Token
```

![GetFamily](https://img.shields.io/static/v1?style=for-the-badge&label=Get%20family&message=Get&color=43a047)

**`http://localhost:5000/api/family`**

```
Authorization Bearer Token
```

![AddTransaction](https://img.shields.io/static/v1?style=for-the-badge&label=Add%20Transaction&message=Post&color=yellow)

**`http://localhost:5000/api/transaction/`**

```
Authorization Bearer Token

{
  "amount": Number
}
```

![AddTransaction](https://img.shields.io/static/v1?style=for-the-badge&label=Add%20Transaction&message=Post&color=yellow)

**`http://localhost:5000/api/transaction/add`**

```
Authorization Bearer Token
Jedynie dla admina
Dodaje środki rodzinei do konta rodziny

{
  "amount": Number,
  "familyId": String
}
```
