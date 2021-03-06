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
    instance = new CounterSushi50Api.SUSHIReportList();
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

  describe('SUSHIReportList', function() {
    it('should create an instance of SUSHIReportList', function() {
      // uncomment below and update the code to test SUSHIReportList
      //var instane = new CounterSushi50Api.SUSHIReportList();
      //expect(instance).to.be.a(CounterSushi50Api.SUSHIReportList);
    });

    it('should have the property reportName (base name: "Report_Name")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new CounterSushi50Api.SUSHIReportList();
      //expect(instance).to.be();
    });

    it('should have the property reportID (base name: "Report_ID")', function() {
      // uncomment below and update the code to test the property reportID
      //var instane = new CounterSushi50Api.SUSHIReportList();
      //expect(instance).to.be();
    });

    it('should have the property release (base name: "Release")', function() {
      // uncomment below and update the code to test the property release
      //var instane = new CounterSushi50Api.SUSHIReportList();
      //expect(instance).to.be();
    });

    it('should have the property reportDescription (base name: "Report_Description")', function() {
      // uncomment below and update the code to test the property reportDescription
      //var instane = new CounterSushi50Api.SUSHIReportList();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "Path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new CounterSushi50Api.SUSHIReportList();
      //expect(instance).to.be();
    });

  });

}));
