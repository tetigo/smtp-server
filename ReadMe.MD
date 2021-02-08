# Simple SMTP Server


### A simple sender using Gmail as server.


Install VSCode.


Install the REST Client plugin for VSCode.


Install NodeJS.


Download the project.


Enter the project directory.


Run the command: ```npm install```


Create the file ```.env``` with:
```
SMTP_TO_EMAIL=xxxxx@xxxxx.com
SMTP_TO_PASSWORD=zzzzzzzzz
PORT=3000

```


Run the command: ```node index.js```


Now go to the ```test.http``` file and click on the links. 


The REST Client plugin does the magick of sending the request inside VSCode.


PS>>> Change the data for sending the POST request.


If the project goes for production, it can optimize the load for sending emails using cluster.

