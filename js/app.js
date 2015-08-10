// function model = {
// 	currentCat: null,
// 	cats: [
// 	{
// 		catName = "one",
// 		clickCount = 0,
// 		imgSrc = ""
// 	},
// 	{
// 		catName = "two",
// 		clickCount = 0,
// 		imgSrc = ""
// 	}
// 	];
// };

var viewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/nyan-ani.gif');
	this.imgAttribution = ko.observable('example')

	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
}

ko.applyBindings(new viewModel());
