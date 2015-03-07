# Squirrel Map

## Мета проекту:
Створити інтерактивну web мапу КПІ, що вміє масштабувати свій інтерфейс на різну роздільну здатність екранів (ПК, планшети, смартфони та ін.).

## Стиль проекту:

- Імена змінних мають відображати призначення змінної
- Опис до коммітів писати у форматі `[SCOPE] expanation`, де SCOPE - назва вашої гілки. Наприклад:
  - [VM] update README
  - [VM] fixed mistake in previous commit
  - [front-end] added new feature
- Призначення гілок
  - `master` - остання стабільна версія
  - Усі інші гілки використовуються для паралельної розробки різного функціоналу різними людьми

## Використовувані технології:

- git (version control)
- JavaScript
- NoSQL
- MongoDB
- Angular.JS (MVVM front-end framework)
- Node.JS
- Sails.JS (Node.JS MVC framework)
- npm (front-end dev. dependencies)
- bower (front-end dependencies)
- foundation



## Як склонити проект
Це детально розписано у [цій статті](https://help.github.com/articles/fork-a-repo/).

## Підготовка до запуску проекта

У вас мають бути встановлені:
- npm версії 1.4 або новіша, перевірте версію командою `npm --version`.  В разі чого, оновіться до новішої npm командою `npm install -g npm` і встановіть вищий пріорітет новішій npm в `PATH`.
- Node.JS версії 0.11 або новіша. Для встановлення останньої версії Node.JS виконайте в терміналі `npm install -g n; n latest` з правами суперкористувача.  
Якщо не спрацює - [ось запасний варіант](https://docs.angularjs.org/tutorial/)
- MongoDB [Інструкція з інсталяції](http://docs.mongodb.org/manual/installation/)
- Sails.JS (0.10.x, не 0.11). Для встановлення, виконайте в терміналі `npm install -g sails@0.10` з правами суперкористувача.
- bower. Для його встановлення, виконайте в терміналі  
`npm install -g bower` з правами суперкористувача.

## Запуск проекта

Для запуску проекта, введіть в терміналі:  
`npm install`  
`npm start`

