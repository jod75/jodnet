# JODnet

The idea behind JODnet is to provide a simple interface to your commonly used urls.  The webpage (index.html) is split into four swimlanes.  The first three swimlanes are similar.  I use these to group services from the commonly used to those less used.  Once you click on a panel in any of these three swimlanes, a new tab is opened with the required service.  The fourth swimlnae is different.  Once you click on a panel or butten, the 'url' is copied to clipboard. I use these for any text or urls I need to open in Windows Explorer or anywhere else, other than in a new Internet tab.

The first two buttons are also special.  The first one opens a notes page, while the second opens a Server/IP list.  

## Setup
Clone this repo to your desktop and point IIS (or any other web server) to this folder.  Then I set my browser homepage to this page, e.g. http://localhost/index.html.

## Configuration

### My Notes
I keep track of important notes here.  To add your notes, open the ```mynotes.md``` file from the data folder and update it with your notes.  Don't put anything secret here.  Nothing is encrypted and anyone with access to your url can read the notes.

### Servers
I use ```data/servers.md``` file to list commonly used servers and their respective ip address.  Normally, these are non browsable services, such as the IP address of my SQL server or NAS.

### Swimlanes
All swimlanes are configurable from their respective json file in data folder, i.e. from ```linklane1.json``` to ```linklane4.json``` under the ```data``` folder.

**Note** This is a quick and dirty solution that satisfy my requirements.  The solution should never be used in production environments or used to keep secret information.



