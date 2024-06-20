# Simple Webshop

This project was created for technical testing at Eité, the project consists of a simple website with product page and frontend cart built in Reactjs and API backend built in Laravel.

## Download or clone the project

```
git clone
```

### Backend
- PHP "^8.2"
- Laravel "^11.9"

1-step:: install [Composer](https://getcomposer.org).

2-step:: Change to directory and install backend
```
cd backend

composer install

```

3-step:: copy or rename .env 
```
cp .env.example .env

```

4-step:: generate app key
```
php artisan key:generate

```

5-step:: make migrate and populate database
```
php artisan migrate:fresh --seed

```

6-step:: runing api develop mode
```
php artisan serve
```

7-step:: check in your browser 

http://127.0.0.1:8000

if show this message it's ok
```
{"name":"Api Simple Webshop","mode":"devlopment","from":"Diego Ferreira","to":"Iete Technical Test"}
```


### Frontend
- NodeJS "v20.14.0"

1-step:: Install NodeJs [NodeJs](https://nodejs.org/en)

2-step:: Change to directory and install frontend
```
cd frontend

npm install
```

3-step:: Run develop mode
```
npm run dev
```

4-step:: Access in your browser

http://localhost:5173/
