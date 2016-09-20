define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojinputtext'],
function(oj, ko, $)
{
    function preferenceViewModel()
    {
        var self = this;
        this.value = ko.observable("Default Text");
    }

    return new preferenceViewModel();
}
);
