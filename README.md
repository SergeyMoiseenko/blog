# blog

Мой личный блог (всё ещё в разработке). Создан на основе моего [web-nodejs-starter](https://github.com/SergeyMoiseenko/web-nodejs-starter).

В проекте используется:
- Babel (ES6)
- Gulp
- Webpack
- React + Redux + React Router
- CSSModules + PostCSS
- Bootstrap
- Expressjs
- Passportjs
- MongoDB + Mongoose
- Redis - используется как хранилище сессий (и возможно для реализации очереди сообщений в будущем)

## Разработка
При разработке обеспечивается автоматический перезапуск приложения (Webpack + nodemon) и webpack-dev-server + HMR в браузере.
(Bug: иногда после изменений в компонентах и редьюсерах store не изменяется не смотря на actions, решается просто перезагрузкой страницы (вероятно связано с некорректным hmr для редьюсеров)).

Перед началом разработки нужно указать все необходимые переменные окружения в файле `.env`. Все необходимые переменные перечислены в файле `.env.example` (Подробнее: [dotenv](https://www.npmjs.com/package/dotenv), [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)).

## Quickstart
Я использую yarn в качестве пакетного менеджера, но можно использовать и npm.

1. `yarn install` или `yarn` или `npm install`
2. Установить и запустить MongoDB и Redis
3. Создать базу данных в MongoDB 
4. Создать `.env` файл и определить в нем переменные окружения
5. `yarn start` или `npm start`
6. Code!

Приложение доступно по адресу `http://localhost:[PORT]`. PORT должен быть определен в `.env` файле.

## English
My personal blog (under development) created on the basis of my [web-nodejs-starter](https://github.com/SergeyMoiseenko/web-nodejs-starter).

## Quickstart

1. `npm install`
2. Install MongoDB and Redis
3. Create `.env` file and specify your configuration.  
   All necessary variables are specified in `.env.example` file (help [dotenv](https://www.npmjs.com/package/dotenv), [dotenv-safe](https://www.npmjs.com/package/dotenv-safe)).
4. `npm start`
5. Code!

Blog available on `http://localhost:[PORT]`. PORT must be specified in `.env` file.
