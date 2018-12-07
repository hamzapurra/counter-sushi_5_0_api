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
    root.CounterSushi50Api.COUNTERPublisherIdentifiers = factory(root.CounterSushi50Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The COUNTERPublisherIdentifiers model module.
   * @module model/COUNTERPublisherIdentifiers
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>COUNTERPublisherIdentifiers</code>.
   * @alias module:model/COUNTERPublisherIdentifiers
   * @class
   * @param type {module:model/COUNTERPublisherIdentifiers.TypeEnum} 
   * @param value {String} Value of the item identifier
   */
  var exports = function(type, value) {
    var _this = this;

    _this['type'] = type;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>COUNTERPublisherIdentifiers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/COUNTERPublisherIdentifiers} obj Optional instance to populate.
   * @return {module:model/COUNTERPublisherIdentifiers} The populated <code>COUNTERPublisherIdentifiers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/COUNTERPublisherIdentifiers.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Value of the item identifier
   * @member {String} value
   */
  exports.prototype['value'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "isni"
     * @const
     */
    "isni": "isni",
    /**
     * value: "orcid"
     * @const
     */
    "orcid": "orcid"  };


  return exports;
}));

