import angular                  from 'angular';
import homeComponent            from './home.component';
import GoatsListingComponent    from '../../containers/goatsListing/goatsListing';

let homeModule = angular.module('home', [
    GoatsListingComponent.name
])

// home is the name of the HTML Accessor
.component('home', homeComponent);

export default homeModule;
