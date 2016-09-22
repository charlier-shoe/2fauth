define(['knockout', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojmenu', 'ojs/ojtoolbar'],
function(ko)
{
    function headerViewModel() {
        var self = this;

        self.appName = '2fauth Sample';

        self.selectedMenuItem = ko.observable("home");
        self.selectMenuItem = function(event, ui) {
            self.selectedMenuItem(ui.item.children("a").text());
        }
    };

    return headerViewModel;
}
);
