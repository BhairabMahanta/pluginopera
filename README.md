An opera plugin to replace "x.com" to "vxtwitter.com" files that allow old ways of video embedding when shared! 
just click the button when you're on the site!


## how to get it set up?

Steps to Load and Test the Extension
Open the Opera browser.
Go to opera://extensions.
Enable "Developer Mode" by toggling the switch.
Click on "Load unpacked" and select the directory where your extension files are located.

## Explanation & How it Works
manifest.json: Describes the extension metadata and permissions.
background.js: Adds a listener for the browser action (extension icon click), which injects the content script into the current tab.
content.js: The content script that runs in the context of the web page, modifies the URL, and copies it to the clipboard.

Click the extension icon: When you click the extension icon, background.js injects content.js into the current tab.
Modify and copy the URL: The content.js script modifies the URL and copies it to the clipboard using a temporary textarea element.
