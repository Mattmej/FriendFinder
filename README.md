# FriendFinder

### Description

This project is an example of a full-stack application; front-end components are present, but these components both send and receive information from a server. For this project, my computer fulfilled the role of a server via Node.js. 

This application takes the form of a social media site in which users can both meet with other member and become a member themselves. After answering a questionnaire, the user is matched up with a friend who has their info on the website's server, and then the user's information is stored in the server as well. 

### Required Items

##### Node Packages
* Express
* body-parser

##### Other
* Node.js
* Nodemon (optional)


### Details

This application consists of multiple interconnecting files. Due to this modularity, each of the files will be explained below.

##### server.js

This file is the "center" of the application. The file is in charge of creating a server via Express.js, linking the files in the "routes" folder to the server, and listening for any changes to the server. 

##### htmlRoutes.js & apiRoutes.js

These two JavaScript files help determine which urls are accepted by the server and where these urls direct the user. The htmlRoutes file handles any routes linking to html pages, while the apiRoutes file handles any routes linking to API pages. 

##### friends.js

This file contains the initial values stored in the server. Also, this file ensures that the server's contents will be accessible to users via an API.

##### home.html

This html file is the homepage for the FriendFinder application. The page contains a link leading to the survey page and another link to the information in the API.

##### survey.html

This file contains a form which users can complete in order to be matched with a friend with similar interests. As of this moment, the user must complete all fields of the form, otherwise their information will not be stored correctly and the application may not function as intended. This functionality will be patched in a future release.



