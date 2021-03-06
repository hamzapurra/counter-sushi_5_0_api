/**
 * COUNTER_SUSHI5_0 API
 * The COUNTER_SUSHI5_0 API represents a RESTful implementation of SUSHI automation intended to returns COUNTER Release 5 reports and snippets of COUNTER usage in JSON format
 *
 * OpenAPI spec version: 1.0.0
 * Contact: nisohq@niso.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CounterSushi50Api);
  }
}(this, function(expect, CounterSushi50Api) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CounterSushi50Api.COUNTERDatabaseUsage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('COUNTERDatabaseUsage', function() {
    it('should create an instance of COUNTERDatabaseUsage', function() {
      // uncomment below and update the code to test COUNTERDatabaseUsage
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be.a(CounterSushi50Api.COUNTERDatabaseUsage);
    });

    it('should have the property database (base name: "Database")', function() {
      // uncomment below and update the code to test the property database
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "Platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property publisher (base name: "Publisher")', function() {
      // uncomment below and update the code to test the property publisher
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property publisherID (base name: "Publisher_ID")', function() {
      // uncomment below and update the code to test the property publisherID
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property dataType (base name: "Data_Type")', function() {
      // uncomment below and update the code to test the property dataType
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property YOP (base name: "YOP")', function() {
      // uncomment below and update the code to test the property YOP
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property accessType (base name: "Access_Type")', function() {
      // uncomment below and update the code to test the property accessType
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property accessMethod (base name: "Access_Method")', function() {
      // uncomment below and update the code to test the property accessMethod
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

    it('should have the property performance (base name: "Performance")', function() {
      // uncomment below and update the code to test the property performance
      //var instane = new CounterSushi50Api.COUNTERDatabaseUsage();
      //expect(instance).to.be();
    });

  });

}));
