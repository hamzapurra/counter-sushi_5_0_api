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
    define(['ApiClient', 'model/COUNTERItemAttributes', 'model/COUNTERItemContributors', 'model/COUNTERItemDates', 'model/COUNTERItemIdentifiers', 'model/COUNTERPublisherIdentifiers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./COUNTERItemAttributes'), require('./COUNTERItemContributors'), require('./COUNTERItemDates'), require('./COUNTERItemIdentifiers'), require('./COUNTERPublisherIdentifiers'));
  } else {
    // Browser globals (root is window)
    if (!root.CounterSushi50Api) {
      root.CounterSushi50Api = {};
    }
    root.CounterSushi50Api.COUNTERItemParent = factory(root.CounterSushi50Api.ApiClient, root.CounterSushi50Api.COUNTERItemAttributes, root.CounterSushi50Api.COUNTERItemContributors, root.CounterSushi50Api.COUNTERItemDates, root.CounterSushi50Api.COUNTERItemIdentifiers, root.CounterSushi50Api.COUNTERPublisherIdentifiers);
  }
}(this, function(ApiClient, COUNTERItemAttributes, COUNTERItemContributors, COUNTERItemDates, COUNTERItemIdentifiers, COUNTERPublisherIdentifiers) {
  'use strict';




  /**
   * The COUNTERItemParent model module.
   * @module model/COUNTERItemParent
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>COUNTERItemParent</code>.
   * @alias module:model/COUNTERItemParent
   * @class
   * @param itemName {String} Name of the parent item.
   */
  var exports = function(itemName) {
    var _this = this;

    _this['Item_Name'] = itemName;







  };

  /**
   * Constructs a <code>COUNTERItemParent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/COUNTERItemParent} obj Optional instance to populate.
   * @return {module:model/COUNTERItemParent} The populated <code>COUNTERItemParent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Item_Name')) {
        obj['Item_Name'] = ApiClient.convertToType(data['Item_Name'], 'String');
      }
      if (data.hasOwnProperty('Item_ID')) {
        obj['Item_ID'] = ApiClient.convertToType(data['Item_ID'], [COUNTERItemIdentifiers]);
      }
      if (data.hasOwnProperty('Item_Contributors')) {
        obj['Item_Contributors'] = ApiClient.convertToType(data['Item_Contributors'], [COUNTERItemContributors]);
      }
      if (data.hasOwnProperty('Item_Dates')) {
        obj['Item_Dates'] = ApiClient.convertToType(data['Item_Dates'], [COUNTERItemDates]);
      }
      if (data.hasOwnProperty('Item_Attributes')) {
        obj['Item_Attributes'] = ApiClient.convertToType(data['Item_Attributes'], [COUNTERItemAttributes]);
      }
      if (data.hasOwnProperty('Publisher')) {
        obj['Publisher'] = ApiClient.convertToType(data['Publisher'], 'String');
      }
      if (data.hasOwnProperty('Publisher_ID')) {
        obj['Publisher_ID'] = ApiClient.convertToType(data['Publisher_ID'], [COUNTERPublisherIdentifiers]);
      }
      if (data.hasOwnProperty('Data_Type')) {
        obj['Data_Type'] = ApiClient.convertToType(data['Data_Type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the parent item.
   * @member {String} Item_Name
   */
  exports.prototype['Item_Name'] = undefined;
  /**
   * The identifier for the report item
   * @member {Array.<module:model/COUNTERItemIdentifiers>} Item_ID
   */
  exports.prototype['Item_ID'] = undefined;
  /**
   * The identifier for contributor of the parent item
   * @member {Array.<module:model/COUNTERItemContributors>} Item_Contributors
   */
  exports.prototype['Item_Contributors'] = undefined;
  /**
   * Publication date(s) related to the parent item.
   * @member {Array.<module:model/COUNTERItemDates>} Item_Dates
   */
  exports.prototype['Item_Dates'] = undefined;
  /**
   * Other attributes related related to the parent item.
   * @member {Array.<module:model/COUNTERItemAttributes>} Item_Attributes
   */
  exports.prototype['Item_Attributes'] = undefined;
  /**
   * Name of organization that publishes the content
   * @member {String} Publisher
   */
  exports.prototype['Publisher'] = undefined;
  /**
   * The identifier for the publisher.
   * @member {Array.<module:model/COUNTERPublisherIdentifiers>} Publisher_ID
   */
  exports.prototype['Publisher_ID'] = undefined;
  /**
   * Nature of the parent item.
   * @member {module:model/COUNTERItemParent.DataTypeEnum} Data_Type
   */
  exports.prototype['Data_Type'] = undefined;


  /**
   * Allowed values for the <code>Data_Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DataTypeEnum = {
    /**
     * value: "Article"
     * @const
     */
    "Article": "Article",
    /**
     * value: "Book"
     * @const
     */
    "Book": "Book",
    /**
     * value: "Book Segment"
     * @const
     */
    "Book Segment": "Book Segment",
    /**
     * value: "Database"
     * @const
     */
    "Database": "Database",
    /**
     * value: "Dataset"
     * @const
     */
    "Dataset": "Dataset",
    /**
     * value: "Journal"
     * @const
     */
    "Journal": "Journal",
    /**
     * value: "Multimedia"
     * @const
     */
    "Multimedia": "Multimedia",
    /**
     * value: "Newspaper or Newsletter"
     * @const
     */
    "Newspaper or Newsletter": "Newspaper or Newsletter",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "Platform"
     * @const
     */
    "Platform": "Platform",
    /**
     * value: "Report"
     * @const
     */
    "Report": "Report",
    /**
     * value: "Repository Item"
     * @const
     */
    "Repository Item": "Repository Item",
    /**
     * value: "Thesis or Dissertation"
     * @const
     */
    "Thesis or Dissertation": "Thesis or Dissertation"  };


  return exports;
}));


