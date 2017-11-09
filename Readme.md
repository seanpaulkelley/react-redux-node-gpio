This project uses ONOFF module found at https://github.com/fivdi/onoff

This project was adapted from something I built in a React/Redux Full Stack course.  I comes with oauth login enabled (via Passort) that can be used to require login before editing GPIO settings.

The project has to be installed on a Raspberry Pi.  I tested on Raspberry Pi v3.

Note: if the Node server shuts down the pins will all be set to off.  So if you use in production and power goes out and you have things that need to be on, you will have to turn them on again.

Install:
Just clone and run npm install in both client directory and root project directory.  Then plug something into the pin you want to control.  By default, I am using pin # 18 (BCM).

Run in root directory
NPM run dev

View on local network with Rasperry Pi's ip and port 3000
http://192.168.1.226:3000/

The node server is running on port 5000
