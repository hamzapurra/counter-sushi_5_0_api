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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CounterSushi50Api) {
      root.CounterSushi50Api = {};
    }
    root.CounterSushi50Api.SUSHIReportHeaderReportAttributes = factory(root.CounterSushi50Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SUSHIReportHeaderReportAttributes model module.
   * @module model/SUSHIReportHeaderReportAttributes
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SUSHIReportHeaderReportAttributes</code>.
   * @alias module:model/SUSHIReportHeaderReportAttributes
   * @class
   * @param name {String} Name of the report attribute.
   * @param value {String} Name of the report attribute.
   */
  var exports = function(name, value) {
    var _this = this;

    _this['Name'] = name;
    _this['Value'] = value;
  };

  /**
   * Constructs a <code>SUSHIReportHeaderReportAttributes</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SUSHIReportHeaderReportAttributes} obj Optional instance to populate.
   * @return {module:model/SUSHIReportHeaderReportAttributes} The populated <code>SUSHIReportHeaderReportAttributes</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the report attribute.
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * Name of the report attribute.
   * @member {String} Value
   */
  exports.prototype['Value'] = undefined;



  return exports;
}));


