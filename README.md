# MarkPad


## What is this?

Type your markdown into the box on the left and immediately see if on the box on the right. If you send a friend a link to this URL you both can edit the document at the same time!


## How to use this?

Type anything after the slash in "https://realtimemarkdown.herokuapp.com/" and just start typing. If you don't feel typing in the address bar, feel free to go to one of these markdown pads:

- [https://realtimemarkdown.herokuapp.com/sample](https://realtimemarkdown.herokuapp.com/sample)
- [https://realtimemarkdown.herokuapp.com/my_project](https://realtimemarkdown.herokuapp.com/my_project)
- [https://realtimemarkdown.herokuapp.com/whatever](https://realtimemarkdown.herokuapp.com/whatever)


## How was this built?

This website uses the following to work:

Link | Description
--- | ---
[Showdown](https://github.com/showdownjs/showdown) | Converts markdown text to beautiful HTML
[ShareJS](http://sharejs.org/) | Allows for realtime editing of this textbox
[Node.js](https://nodejs.org/) | Backend framework
[Redis](http://redis.io/) | where we store our markdown documents
[Twitter Bootstrap](http://getbootstrap.com/) | Makes everything a little prettier


## TODOs

### GUI
- [x] Syntax highlighting
- [ ] Menubar
	- [ ] Current editing users
		- [ ] Possible with sharejs?
	- [ ] Name
	- [ ] etc.
	- [ ] Download currend file add `name.md`
- [ ] View only mode (Segmented control, with 3 states)

### Core
- [ ] Add support to multiple database types
- [ ] Source Control
- [ ] API
	- [ ] Add new pad
	- [ ] Edit content
- [ ] /new: Generate uniqe name
- [ ] Default MarkPad file

## License
The MIT License
