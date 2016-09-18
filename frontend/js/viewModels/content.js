define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojinputtext'],
function(oj, ko, $)
{
    function contentViewModel()
    {
        var self = this;
        this.value = ko.observable("Default Text");
    }

    return new contentViewModel();
}
);
