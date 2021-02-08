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


PS2>>> I forgot something very important, once you choose a gmail account to use as a server,


it's necessary to enable this email for use as a server. Follow the instructions from [Google](https://support.google.com/mail/answer/7126229?p=BadCredentials&visit_id=637484054733636583-842672386&rd=2#cantsignin).



To be more precise, you need to enable connections for less secure apps option


and click the link about DisplayUnlockCaptcha.


These 2 configurations should enable the email for sending and receiving messages.

