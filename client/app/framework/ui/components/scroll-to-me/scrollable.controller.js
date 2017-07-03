class ScrollableController {

    constructor($element ,$timeout) {
        'ngInject';
        this.$element = $element;
        this.lastState = false;
        this.$timeout = $timeout;
    }

    // see API https://angular.io/docs/ts/latest/api/core/index/SimpleChange-class.html
    $onChanges(changes) {
        var event = changes.event;
        if (event && event.currentValue == true) {
            this.$timeout(()=> {
                $('html, body').animate({
                    scrollTop: $(this.$element).offset().top
                }, 2000);
            });
        }
    }
}

export default ScrollableController;