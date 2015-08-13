var catData = [
	{
		clickCount: 0,
		name: "Tabby",
		imgSrc: 'img/nyan-ani.gif',
		imgAttribution: 'example',
		nickname: [{name: "bob"}, {name: "james"}, {name: "bill"}]
	},
	{
		clickCount: 0,
		name: "Bobby",
		imgSrc: 'img/nyan-ani.gif',
		imgAttribution: 'example',
		nickname: [{name: "blah"}]
	},
	{
		clickCount: 0,
		name: "Sammy",
		imgSrc: 'img/nyan-ani.gif',
		imgAttribution: 'example',
		nickname: [{name: "Cat"}]
	},
	{
		clickCount: 0,
		name: "Abby",
		imgSrc: 'img/nyan-ani.gif',
		imgAttribution: 'example',
		nickname: [{name: 'Abs'}]
	},
	{
		clickCount: 0,
		name: "Blabby",
		imgSrc: 'img/nyan-ani.gif',
		imgAttribution: 'example'
	},
];

var Cat = function(data){
	var self = this;
	self.clickCount = ko.observable(data.clickCount);
	self.name = ko.observable(data.name);
	self.imgSrc = ko.observable(data.imgSrc);
	self.imgAttribution = ko.observable(data.imgAttribution);
	self.nickname = ko.observableArray(data.nickname);

	self.level = ko.computed(function(){
		var count = self.clickCount();
		if (count <= 10){
			return 'new born';
		} else if (count <= 20){
			return 'infant';
		} else if (count <= 30){
			return 'teen';
		} else {
			return 'adult';
		}
	});
};

var viewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	catData.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable(this.catList()[0]);

	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
};

ko.applyBindings(new viewModel());
