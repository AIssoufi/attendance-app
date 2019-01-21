## Project structur
- __controllers__: defines your app routes and their logic
- __helpers__: code and functionality to be shared by different parts of the project
- __middlewares__: Express middlewares which process the incoming requests before handling them down to the routes
- __models__: represents data, implements business logic and handles storage
- __public__: contains all static files like images, styles and javascript
- __views__: provides templates which are rendered and served by your routes
- __tests__: tests everything which is in the other folders
- __app.js__: initializes the app and glues everything together
- __package.json__: remembers all packages that your app depends on and their versions