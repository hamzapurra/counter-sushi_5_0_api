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
    instance = new CounterSushi50Api.SUSHIReportHeader();
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

  describe('SUSHIReportHeader', function() {
    it('should create an instance of SUSHIReportHeader', function() {
      // uncomment below and update the code to test SUSHIReportHeader
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be.a(CounterSushi50Api.SUSHIReportHeader);
    });

    it('should have the property created (base name: "Created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "Created_By")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property customerID (base name: "Customer_ID")', function() {
      // uncomment below and update the code to test the property customerID
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property reportID (base name: "Report_ID")', function() {
      // uncomment below and update the code to test the property reportID
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property release (base name: "Release")', function() {
      // uncomment below and update the code to test the property release
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property reportName (base name: "Report_Name")', function() {
      // uncomment below and update the code to test the property reportName
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property institutionName (base name: "Institution_Name")', function() {
      // uncomment below and update the code to test the property institutionName
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property institutionID (base name: "Institution_ID")', function() {
      // uncomment below and update the code to test the property institutionID
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property reportFilters (base name: "Report_Filters")', function() {
      // uncomment below and update the code to test the property reportFilters
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property reportAttributes (base name: "Report_Attributes")', function() {
      // uncomment below and update the code to test the property reportAttributes
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

    it('should have the property exceptions (base name: "Exceptions")', function() {
      // uncomment below and update the code to test the property exceptions
      //var instane = new CounterSushi50Api.SUSHIReportHeader();
      //expect(instance).to.be();
    });

  });

}));
