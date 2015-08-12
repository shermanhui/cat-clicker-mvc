var Cat = function(){
	var self = this;
	self.clickCount = ko.observable(0);
	self.name = ko.observable('Tabby');
	self.imgSrc = ko.observable('img/nyan-ani.gif');
	self.imgAttribution = ko.observable('example');
	self.nickname = ko.observableArray([{name: "bob"}, {name: "james"}, {name: "bill"}]);

	self.level = ko.computed(function(){
		var count = self.clickCount();
		if (count <= 10){
			return 'new born';
		} else if (count <= 20){
			return 'infant';
		} else if (count <= 30){
			return 'teen'
		} else {
			return 'adult';
		}
	});
};



var viewModel = function() {
	var self = this;
	self.currentCat = ko.observable(new Cat());

	self.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
};

ko.applyBindings(new viewModel());
