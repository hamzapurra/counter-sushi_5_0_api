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
    root.CounterSushi50Api.COUNTERItemPerformanceInstance = factory(root.CounterSushi50Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The COUNTERItemPerformanceInstance model module.
   * @module model/COUNTERItemPerformanceInstance
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>COUNTERItemPerformanceInstance</code>.
   * @alias module:model/COUNTERItemPerformanceInstance
   * @class
   * @param metricType {module:model/COUNTERItemPerformanceInstance.MetricTypeEnum} Type of activity being counted.
   * @param count {Number} Usage count > 0.  If count is zero, the Intance element should be excluded.
   */
  var exports = function(metricType, count) {
    var _this = this;

    _this['MetricType'] = metricType;
    _this['Count'] = count;
  };

  /**
   * Constructs a <code>COUNTERItemPerformanceInstance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/COUNTERItemPerformanceInstance} obj Optional instance to populate.
   * @return {module:model/COUNTERItemPerformanceInstance} The populated <code>COUNTERItemPerformanceInstance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MetricType')) {
        obj['MetricType'] = ApiClient.convertToType(data['MetricType'], 'String');
      }
      if (data.hasOwnProperty('Count')) {
        obj['Count'] = ApiClient.convertToType(data['Count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Type of activity being counted.
   * @member {module:model/COUNTERItemPerformanceInstance.MetricTypeEnum} MetricType
   */
  exports.prototype['MetricType'] = undefined;
  /**
   * Usage count > 0.  If count is zero, the Intance element should be excluded.
   * @member {Number} Count
   */
  exports.prototype['Count'] = undefined;


  /**
   * Allowed values for the <code>MetricType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MetricTypeEnum = {
    /**
     * value: "Searches_Automated"
     * @const
     */
    "Searches_Automated": "Searches_Automated",
    /**
     * value: "Searches_Federated"
     * @const
     */
    "Searches_Federated": "Searches_Federated",
    /**
     * value: "Searches_Platform"
     * @const
     */
    "Searches_Platform": "Searches_Platform",
    /**
     * value: "Searches_Regular"
     * @const
     */
    "Searches_Regular": "Searches_Regular",
    /**
     * value: "Total_Item_Investigations"
     * @const
     */
    "Total_Item_Investigations": "Total_Item_Investigations",
    /**
     * value: "Total_Item_Requests"
     * @const
     */
    "Total_Item_Requests": "Total_Item_Requests",
    /**
     * value: "Unique_Item_Investigations"
     * @const
     */
    "Unique_Item_Investigations": "Unique_Item_Investigations",
    /**
     * value: "Unique_Item_Requests"
     * @const
     */
    "Unique_Item_Requests": "Unique_Item_Requests",
    /**
     * value: "Unique_Title_Investigations"
     * @const
     */
    "Unique_Title_Investigations": "Unique_Title_Investigations",
    /**
     * value: "Unique_Title_Requests"
     * @const
     */
    "Unique_Title_Requests": "Unique_Title_Requests",
    /**
     * value: "No_License"
     * @const
     */
    "No_License": "No_License",
    /**
     * value: "Limit_Exceeded"
     * @const
     */
    "Limit_Exceeded": "Limit_Exceeded"  };


  return exports;
}));


