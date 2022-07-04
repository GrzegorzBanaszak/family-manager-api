## Aplikacja do zarządzania funduszami rodzinnymi

Aplikacja do zarządzania funduszami rodzinnymi składająca się z dwóch części:

- Backendu (NodeJs)
- Frontendu (React)

## Backend

**Użyte technologie:**

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDb](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white) ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white) ![Json%20web%20token](https://img.shields.io/badge/Json%20web%20token-000000?style=for-the-badge&logo=Jsonwebtokens&logoColor=white)

Aby aplikacja działala należy umieścić plik .env w katalogu głównym aplikacji.

```
MONGO_URI = Url dla mongoDb
JWT_SECRET= Sekretny klucz do szyfrowania tokenów
REACT_APP_URL = Url do aplikacji React || Domyślny url: http://localhost:3000
```

Dodatkowa konfiguracja:

```
PORT_HTTP = Port do serwera HTTP || Domyślny port: 5000
PORT_HTTPS = Port do serwera HTTPS || Domyślny port: 8000
```

#### Requsty

![RegisterUser](https://img.shields.io/static/v1?style=for-the-badge&label=Register%20user&message=Post&color=yellow)

**Public | `http://localhost:5000/api/user/register`**

```
{
  "firstName": String,
  "lastName": String,
  "email": String,
  "password": String,
  "hasFamily": Boolean,
  "memberOfFamily": String ? Jezeli posiada rodzine to podaj id rodziny
  "verificationKey": String ? Jezeli posiada rodzine to podaj klucz do weryfikacji
}
```

**W odpowiedzi zwracany jest token w forme cookis.**

Przykładowa odpowiedź:

```
{
    "id": "62c32fc06dd75122bbf78088",
    "firstName": "Jan",
    "lastName": "Kowalski",
    "email": "jan@gmail.com",
    "role": "user",
    "memberOfFamily": "62c32fc06dd75122bbf78086"
}
```

![RegisterAdmin](https://img.shields.io/static/v1?style=for-the-badge&label=Register%20admin&message=Post&color=yellow)

**Public | `http://localhost:5000/api/user/admin`**

```
{
  "firstName": String,
  "lastName": String,
  "email": String,
  "password": String,
}
```

**W odpowiedzi zwracany jest token w forme cookis.**

Przykładowa odpowiedź:

```
{
    "id": "62c330546dd75122bbf7808c",
    "firstName": "Marian",
    "lastName": "Kowalski",
    "email": "marian@gmail.com",
    "role": "admin"
}
```

![Login](https://img.shields.io/static/v1?style=for-the-badge&label=Login&message=Post&color=yellow)

**Public |`http://localhost:5000/api/user/login`**

```
{
  "email": String,
  "password": String,
}
```

**W odpowiedzi zwracany jest token w forme cookis.**

Przykładowa odpowiedź:

```
User
{
    "id": "62c32fc06dd75122bbf78088",
    "firstName": "Jan",
    "lastName": "Kowalski",
    "email": "jan@gmail.com",
    "role": "user",
    "memberOfFamily": "62c32fc06dd75122bbf78086"
}

Admin
{
    "id": "62c330546dd75122bbf7808c",
    "firstName": "Marian",
    "lastName": "Kowalski",
    "email": "marian@gmail.com",
    "role": "admin"
}

```

![Logout](https://img.shields.io/static/v1?style=for-the-badge&label=Logout&message=Get&color=43a047)

**Private |`http://localhost:5000/api/user/logout`**

**Wymaga tokena zapisanego w cookis.**

Przykładowa odpowiedź:

```
{
    "message": "Wylogowano"
}

```

![GetUser](https://img.shields.io/static/v1?style=for-the-badge&label=Get%20User&message=Get&color=43a047)

**Private |`http://localhost:5000/api/user/me`**

**Wymaga tokena zapisanego w cookis.**

Przykładowa odpowiedź:

```
User
{
    "id": "62c32fc06dd75122bbf78088",
    "firstName": "Jan",
    "lastName": "Kowalski",
    "email": "jan@gmail.com",
    "role": "user",
    "memberOfFamily": "62c32fc06dd75122bbf78086"
}

Admin
{
    "id": "62c330546dd75122bbf7808c",
    "firstName": "Marian",
    "lastName": "Kowalski",
    "email": "marian@gmail.com",
    "role": "admin"
}

```

![GetFamily](https://img.shields.io/static/v1?style=for-the-badge&label=Get%20family&message=Get&color=43a047)

**Private | `http://localhost:5000/api/family`**

**Wymaga tokena zapisanego w cookis.**

Przykładowa odpowiedź:

```
{
    "_id": "62c32fc06dd75122bbf78086",
    "name": "kowalski",
    "familyMembers": [
        {
            "_id": "62c32fc06dd75122bbf78088",
            "email": "jan@gmail.com",
            "firstName": "Jan",
            "lastName": "Kowalski"
        }
    ],
    "cash": 0,
    "transactions": [],
    "verificationKey": "6f8450d2-fdb6-4245-9d75-b9f308ce44f2"
}
```

![GetFamilies](https://img.shields.io/static/v1?style=for-the-badge&label=Get%20families&message=Get&color=43a047)

**Private admin only | `http://localhost:5000/api/family/all`**

**Wymaga tokena zapisanego w cookis.**

Przykładowa odpowiedź:

```
[
    {
        "_id": "62c32fc06dd75122bbf78086",
        "name": "kowalski",
        "familyMembers": [
            {
                "_id": "62c32fc06dd75122bbf78088",
                "email": "jan@gmail.com",
                "firstName": "Jan",
                "lastName": "Kowalski"
            }
        ],
        "cash": 0,
        "transactions": [],
        "verificationKey": "6f8450d2-fdb6-4245-9d75-b9f308ce44f2",
        "createdAt": "2022-07-04T18:21:52.351Z",
    }
]
```

![AddTransaction](https://img.shields.io/static/v1?style=for-the-badge&label=Add%20Transaction&message=Post&color=yellow)

**Private | `http://localhost:5000/api/transaction/`**

**Wymaga tokena zapisanego w cookis.**

```
{
    "name":string,
    "amount":number
}
```

Przykładowa odpowiedź:

```
{
    "transactions": [
        {
            "_id": "62c33894629dface63533d2d",
            "name": "Zakupy",
            "user": "Jan Kowalski",
            "amount": 100,
            "transactionType": "MINUS",
            "createdAt": "2022-07-04T18:59:32.471Z"
        }
    ],
    "cash": 900
}
```

![AddFunds](https://img.shields.io/static/v1?style=for-the-badge&label=Add%20funds&message=Post&color=yellow)

**Private admin only `http://localhost:5000/api/transaction/add`**

**Wymaga tokena zapisanego w cookis.**

```

{
    "amount":number,
    "familyId":string,
    "name":string
}
```

Przykładowa odpowiedź:

```
{
    "transactions": [
        {
            "_id": "62c33894629dface63533d2d",
            "name": "Zakupy",
            "user": "Jan Kowalski",
            "amount": 100,
            "transactionType": "MINUS",
            "createdAt": "2022-07-04T18:59:32.471Z"
        },
        {
            "_id": "62c33960629dface63533d34",
            "name": "Wypłata",
            "user": "Marian Kowalski",
            "amount": 1000,
            "transactionType": "ADD",
            "createdAt": "2022-07-04T19:02:56.892Z"
        }
    ],
    "cash": 1900,
    "id": "62c32fc06dd75122bbf78086"  //Id zaktualizowanej rodziny
}
```

![FamilyVerification](https://img.shields.io/static/v1?style=for-the-badge&label=Family%20verification&message=Get&color=43a047)

**Publicy | `http://localhost:5000/api/family/:family_verification_key`**

Przykładowa odpowiedź:

```
{
    "id": "62c32fc06dd75122bbf78086",
    "name": "kowalski"
}
```

## Frontend

**Użyte technologie:**

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white) ![MongoDb](https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white) ![Express](https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=react%20router&logoColor=white) ![Json%20web%20token](https://img.shields.io/badge/styled%20components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)

---

## Informacje do konfiguracji

**Jeżeli zmieniłeś domyślne ustawienia portu http servera należy zmienić scieżki w pliku axiosConfig.js**

---

#### Aplikacja frondendowa zawiera następujące funkcjonalności:

- Strone główną
- Strona logowania
- Strona rejestracji użytkownika
- Strona rejestracji administratora
- Strona użytkownika
  - Lista transakcji
  - Dodawanie transakcji
  - Liste członków rodziny
  - Wyświetlanie informacji o użytkowniku
- Strona administratora
  - Lista rodzin
  - Liste członków rodziny
  - Liste transakcji
  - Saldo rodziny
  - Dodawanie funduszy
  - Informacje u użytkowniku
