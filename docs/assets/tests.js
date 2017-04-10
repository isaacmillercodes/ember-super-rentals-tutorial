'use strict';

define('super-rentals/tests/acceptance/list-rentals-test', ['exports', 'qunit', 'super-rentals/tests/helpers/module-for-acceptance', 'ember'], function (exports, _qunit, _superRentalsTestsHelpersModuleForAcceptance, _ember) {

  var StubMapsService = _ember['default'].Service.extend({
    getMapElement: function getMapElement() {
      return document.createElement('div');
    }
  });

  (0, _superRentalsTestsHelpersModuleForAcceptance['default'])('Acceptance | list rentals', {
    beforeEach: function beforeEach() {
      this.application.register('service:stubMaps', StubMapsService);
      this.application.inject('component:location-map', 'maps', 'service:stubMaps');
    }
  });

  (0, _qunit.test)('should show rentals as the home page', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/rentals', 'should redirect automatically');
    });
  });

  (0, _qunit.test)('should link to information about the company.', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });

  (0, _qunit.test)('should list available rentals.', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(find('.listing').length, 3, 'should see 3 listings');
    });
  });

  (0, _qunit.test)('should filter the list of rentals by city.', function (assert) {
    visit('/');
    fillIn('.list-filter input', 'Seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function () {
      assert.equal(find('.listing').length, 1, 'should show 1 listing');
      assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
    });
  });

  (0, _qunit.test)('should show details for a specific rental', function (assert) {
    visit('/rentals');
    click('a:contains("Grand Old Mansion")');
    andThen(function () {
      assert.equal(currentURL(), '/rentals/grand-old-mansion', 'should navigate to show route');
      assert.equal(find('.show-listing h2').text(), "Grand Old Mansion", 'should list rental title');
      assert.equal(find('.description').length, 1, 'should list a description of the property');
    });
  });
});
define('super-rentals/tests/acceptance/list-rentals-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - acceptance/list-rentals-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/list-rentals-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/adapters/application.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - adapters/application.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/components/list-filter.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/list-filter.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/list-filter.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/components/location-map.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/location-map.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/location-map.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/components/rental-listing.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - components/rental-listing.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rental-listing.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/controllers/rentals.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/rentals.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/controllers/rentals/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - controllers/rentals/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/rentals/index.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    if (window.server) {
      window.server.shutdown();
    }
  }
});
define('super-rentals/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'super-rentals/tests/helpers/start-app', 'super-rentals/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _superRentalsTestsHelpersStartApp, _superRentalsTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _superRentalsTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _superRentalsTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('super-rentals/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/helpers/rental-property-type.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/rental-property-type.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/rental-property-type.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/helpers/resolver', ['exports', 'super-rentals/resolver', 'super-rentals/config/environment'], function (exports, _superRentalsResolver, _superRentalsConfigEnvironment) {

  var resolver = _superRentalsResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _superRentalsConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _superRentalsConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('super-rentals/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/helpers/start-app', ['exports', 'ember', 'super-rentals/app', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsApp, _superRentalsConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _superRentalsConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _superRentalsApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('super-rentals/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/integration/components/list-filter-test', ['exports', 'ember-qunit', 'ember-test-helpers/wait', 'rsvp'], function (exports, _emberQunit, _emberTestHelpersWait, _rsvp) {

  (0, _emberQunit.moduleForComponent)('list-filter', 'Integration | Component | filter listing', {
    integration: true
  });

  var ITEMS = [{ city: 'San Francisco' }, { city: 'Portland' }, { city: 'Seattle' }];
  var FILTERED_ITEMS = [{ city: 'San Francisco' }];

  (0, _emberQunit.test)('should initially load all listings', function (assert) {
    var _this = this;

    // we want our actions to return promises, since they are potentially fetching data asynchronously
    this.on('filterByCity', function (val) {
      if (val === '') {
        return _rsvp['default'].resolve(ITEMS);
      } else {
        return _rsvp['default'].resolve(FILTERED_ITEMS);
      }
    });

    // with an integration test,
    // you can set up and use your component in the same way your application will use it.
    this.render(Ember.HTMLBars.template({
      'id': 'payhxfsX',
      'block': '{"statements":[["text","\\n"],["block",["list-filter"],null,[["filter"],[["helper",["action"],[["get",[null]],"filterByCity"],null]]],1],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","li",[]],["static-attr","class","city"],["flush-element"],["text","\\n          "],["append",["unknown",["item","city"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","      "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["results"]]],null,0],["text","      "],["close-element"],["text","\\n"]],"locals":["results"]}],"hasPartials":false}',
      'meta': {}
    }));

    return (0, _emberTestHelpersWait['default'])().then(function () {
      assert.equal(_this.$('.city').length, 3);
      assert.equal(_this.$('.city').first().text().trim(), 'San Francisco');
    });
  });

  (0, _emberQunit.test)('should update with matching listings', function (assert) {
    var _this2 = this;

    this.on('filterByCity', function (val) {
      if (val === '') {
        return _rsvp['default'].resolve(ITEMS);
      } else {
        return _rsvp['default'].resolve(FILTERED_ITEMS);
      }
    });

    this.render(Ember.HTMLBars.template({
      'id': 'payhxfsX',
      'block': '{"statements":[["text","\\n"],["block",["list-filter"],null,[["filter"],[["helper",["action"],[["get",[null]],"filterByCity"],null]]],1],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","li",[]],["static-attr","class","city"],["flush-element"],["text","\\n          "],["append",["unknown",["item","city"]],false],["text","\\n        "],["close-element"],["text","\\n"]],"locals":["item"]},{"statements":[["text","      "],["open-element","ul",[]],["flush-element"],["text","\\n"],["block",["each"],[["get",["results"]]],null,0],["text","      "],["close-element"],["text","\\n"]],"locals":["results"]}],"hasPartials":false}',
      'meta': {}
    }));

    // The keyup event here should invoke an action that will cause the list to be filtered
    this.$('.list-filter input').val('San').keyup();

    return (0, _emberTestHelpersWait['default'])().then(function () {
      assert.equal(_this2.$('.city').length, 1);
      assert.equal(_this2.$('.city').text().trim(), 'San Francisco');
    });
  });
});
define('super-rentals/tests/integration/components/list-filter-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/list-filter-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-filter-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/integration/components/location-map-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var StubMapsService = _ember['default'].Service.extend({
    getMapElement: function getMapElement(location) {
      this.set('calledWithLocation', location);
      // We create a div here to simulate our maps service,
      // which will create and then cache the map element
      return document.createElement('div');
    }
  });

  (0, _emberQunit.moduleForComponent)('location-map', 'Integration | Component | location map', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('service:maps', StubMapsService);
      this.inject.service('maps', { as: 'mapsService' });
    }
  });

  (0, _emberQunit.test)('should append map element to container element', function (assert) {
    this.set('myLocation', 'New York');
    this.render(_ember['default'].HTMLBars.template({
      'id': 'Hc/lGxnZ',
      'block': '{"statements":[["append",["helper",["location-map"],null,[["location"],[["get",["myLocation"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    assert.equal(this.$('.map-container').children().length, 1, 'the map element should be put onscreen');
    assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'a map of New York should be requested');
  });
});
define('super-rentals/tests/integration/components/location-map-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/location-map-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/location-map-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/integration/components/rental-listing-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var rental = _ember['default'].Object.create({
    image: 'fake.png',
    title: 'test-title',
    owner: 'test-owner',
    type: 'test-type',
    city: 'test-city',
    bedrooms: 3
  });

  (0, _emberQunit.moduleForComponent)('rental-listing', 'Integration | Component | rental listing', {
    integration: true
  });

  (0, _emberQunit.test)('should display rental details', function (assert) {
    this.set('rentalObj', rental);
    this.render(_ember['default'].HTMLBars.template({
      'id': 'hYb+5FYZ',
      'block': '{"statements":[["append",["helper",["rental-listing"],null,[["rental"],[["get",["rentalObj"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    assert.equal(this.$('.listing h3').text(), 'test-title');
    assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner');
  });

  (0, _emberQunit.test)('should toggle wide class on click', function (assert) {
    this.set('rentalObj', rental);
    this.render(_ember['default'].HTMLBars.template({
      'id': 'hYb+5FYZ',
      'block': '{"statements":[["append",["helper",["rental-listing"],null,[["rental"],[["get",["rentalObj"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    assert.equal(this.$('.image.wide').length, 0, 'initially rendered small');
    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click');
    this.$('.image').click();
    assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click');
  });
});
define('super-rentals/tests/integration/components/rental-listing-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/rental-listing-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/rental-listing-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/models/rental.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - models/rental.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/rental.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/routes/about.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/about.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/routes/contact.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/contact.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/routes/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/routes/rentals.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/rentals.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/routes/rentals/index.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/rentals/index.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/index.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/routes/rentals/show.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - routes/rentals/show.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/rentals/show.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/services/maps.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - services/maps.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/maps.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/test-helper', ['exports', 'super-rentals/tests/helpers/resolver', 'ember-qunit'], function (exports, _superRentalsTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_superRentalsTestsHelpersResolver['default']);
});
define('super-rentals/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('super-rentals/tests/unit/adapters/application-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/adapters/application-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/controllers/rentals-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:rentals', 'Unit | Controller | rentals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/rentals-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/rentals-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/controllers/rentals/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:rentals/index', 'Unit | Controller | rentals/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('super-rentals/tests/unit/controllers/rentals/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/controllers/rentals/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/rentals/index-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/helpers/rental-property-type-test', ['exports', 'super-rentals/helpers/rental-property-type', 'qunit'], function (exports, _superRentalsHelpersRentalPropertyType, _qunit) {

  (0, _qunit.module)('Unit | Helper | rental property type');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _superRentalsHelpersRentalPropertyType.rentalPropertyType)([42]);
    assert.ok(result);
  });
});
define('super-rentals/tests/unit/helpers/rental-property-type-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/helpers/rental-property-type-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/rental-property-type-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/models/rental-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('rental', 'Unit | Model | rental', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('super-rentals/tests/unit/models/rental-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/models/rental-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/rental-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/routes/about-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:about', 'Unit | Route | about', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/about-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/about-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/about-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/routes/contact-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:contact', 'Unit | Route | contact', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/contact-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/contact-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/routes/rentals-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:rentals', 'Unit | Route | rentals', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/rentals-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/routes/rentals/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:rentals/index', 'Unit | Route | rentals/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals/index-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/rentals/index-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/index-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/routes/rentals/show-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:rentals/show', 'Unit | Route | rentals/show', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('super-rentals/tests/unit/routes/rentals/show-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/routes/rentals/show-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/show-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/unit/services/maps-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var DUMMY_ELEMENT = {};

  var MapUtilStub = _ember['default'].Object.extend({
    createMap: function createMap(element, location) {
      this.assert.ok(element, 'createMap called with element');
      this.assert.ok(location, 'createMap called with location');
      return DUMMY_ELEMENT;
    }
  });

  (0, _emberQunit.moduleFor)('service:maps', 'Unit | Service | maps');

  (0, _emberQunit.test)('should create a new map if one isnt cached for location', function (assert) {
    assert.expect(4);
    var stubMapUtil = MapUtilStub.create({ assert: assert });
    var mapService = this.subject({ mapUtil: stubMapUtil });
    var element = mapService.getMapElement('San Francisco');
    assert.ok(element, 'element exists');
    assert.equal(element.className, 'map', 'element has class name of map');
  });

  (0, _emberQunit.test)('should use existing map if one is cached for location', function (assert) {
    assert.expect(1);
    var stubCachedMaps = _ember['default'].Object.create({
      sanFrancisco: DUMMY_ELEMENT
    });
    var mapService = this.subject({ cachedMaps: stubCachedMaps });
    var element = mapService.getMapElement('San Francisco');
    assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
  });
});
define('super-rentals/tests/unit/services/maps-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/services/maps-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/maps-test.js should pass ESLint.\n');
  });
});
define('super-rentals/tests/utils/google-maps.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - utils/google-maps.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'utils/google-maps.js should pass ESLint.\n');
  });
});
require('super-rentals/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
