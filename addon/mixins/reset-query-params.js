import Ember from 'ember';

/**
 * By default, query params are sticky between transitions.
 * Once they are set they need to be cleared so that upon re-entering
 * a route those query params aren't still set to prior values.
 *
 * This mixin should be mixed into any route where you don't want query params to persist between transitions.
*/

export default Ember.Mixin.create({
  resetController (controller, isExiting) {
    if (isExiting) {
      let queryParams = controller.get('queryParams');

      // If query params were defined as hash params they come through in an Object
      // that needs to be handled slightly differently (there is probably a better way to do this)
      if (queryParams.toString() === "[object Object]") {
        queryParams = Object.keys(queryParams[0]);
      }
      // loop through all the query params and set them to null on the controller
      queryParams.forEach((param) => {
        controller.set(param, null);
      });
    }
  }
});
