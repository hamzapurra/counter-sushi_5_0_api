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
    define(['ApiClient', 'model/COUNTERItemAttributes', 'model/COUNTERItemComponent', 'model/COUNTERItemContributors', 'model/COUNTERItemDates', 'model/COUNTERItemIdentifiers', 'model/COUNTERItemParent', 'model/COUNTERItemPerformance', 'model/COUNTERPublisherIdentifiers'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./COUNTERItemAttributes'), require('./COUNTERItemComponent'), require('./COUNTERItemContributors'), require('./COUNTERItemDates'), require('./COUNTERItemIdentifiers'), require('./COUNTERItemParent'), require('./COUNTERItemPerformance'), require('./COUNTERPublisherIdentifiers'));
  } else {
    // Browser globals (root is window)
    if (!root.CounterSushi50Api) {
      root.CounterSushi50Api = {};
    }
    root.CounterSushi50Api.COUNTERItemUsage = factory(root.CounterSushi50Api.ApiClient, root.CounterSushi50Api.COUNTERItemAttributes, root.CounterSushi50Api.COUNTERItemComponent, root.CounterSushi50Api.COUNTERItemContributors, root.CounterSushi50Api.COUNTERItemDates, root.CounterSushi50Api.COUNTERItemIdentifiers, root.CounterSushi50Api.COUNTERItemParent, root.CounterSushi50Api.COUNTERItemPerformance, root.CounterSushi50Api.COUNTERPublisherIdentifiers);
  }
}(this, function(ApiClient, COUNTERItemAttributes, COUNTERItemComponent, COUNTERItemContributors, COUNTERItemDates, COUNTERItemIdentifiers, COUNTERItemParent, COUNTERItemPerformance, COUNTERPublisherIdentifiers) {
  'use strict';




  /**
   * The COUNTERItemUsage model module.
   * @module model/COUNTERItemUsage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>COUNTERItemUsage</code>.
   * Defines the output for the Report_Items being returned in a Title Report.
   * @alias module:model/COUNTERItemUsage
   * @class
   * @param item {String} Name of the item being reported.
   * @param platform {String} Name of the platform
   * @param publisher {String} Name of publisher of the item
   * @param dataType {module:model/COUNTERItemUsage.DataTypeEnum} Nature of the item being reported.
   * @param performance {Array.<module:model/COUNTERItemPerformance>} The usage data related to the report item
   */
  var exports = function(item, platform, publisher, dataType, performance) {
    var _this = this;

    _this['Item'] = item;




    _this['Platform'] = platform;
    _this['Publisher'] = publisher;



    _this['Data_Type'] = dataType;




    _this['Performance'] = performance;
  };

  /**
   * Constructs a <code>COUNTERItemUsage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/COUNTERItemUsage} obj Optional instance to populate.
   * @return {module:model/COUNTERItemUsage} The populated <code>COUNTERItemUsage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Item')) {
        obj['Item'] = ApiClient.convertToType(data['Item'], 'String');
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
      if (data.hasOwnProperty('Platform')) {
        obj['Platform'] = ApiClient.convertToType(data['Platform'], 'String');
      }
      if (data.hasOwnProperty('Publisher')) {
        obj['Publisher'] = ApiClient.convertToType(data['Publisher'], 'String');
      }
      if (data.hasOwnProperty('Publisher_ID')) {
        obj['Publisher_ID'] = ApiClient.convertToType(data['Publisher_ID'], [COUNTERPublisherIdentifiers]);
      }
      if (data.hasOwnProperty('Item_Parent')) {
        obj['Item_Parent'] = ApiClient.convertToType(data['Item_Parent'], [COUNTERItemParent]);
      }
      if (data.hasOwnProperty('Item_Component')) {
        obj['Item_Component'] = ApiClient.convertToType(data['Item_Component'], [COUNTERItemComponent]);
      }
      if (data.hasOwnProperty('Data_Type')) {
        obj['Data_Type'] = ApiClient.convertToType(data['Data_Type'], 'String');
      }
      if (data.hasOwnProperty('Section_Type')) {
        obj['Section_Type'] = ApiClient.convertToType(data['Section_Type'], 'String');
      }
      if (data.hasOwnProperty('YOP')) {
        obj['YOP'] = ApiClient.convertToType(data['YOP'], 'String');
      }
      if (data.hasOwnProperty('Access_Type')) {
        obj['Access_Type'] = ApiClient.convertToType(data['Access_Type'], 'String');
      }
      if (data.hasOwnProperty('Access_Method')) {
        obj['Access_Method'] = ApiClient.convertToType(data['Access_Method'], 'String');
      }
      if (data.hasOwnProperty('Performance')) {
        obj['Performance'] = ApiClient.convertToType(data['Performance'], [COUNTERItemPerformance]);
      }
    }
    return obj;
  }

  /**
   * Name of the item being reported.
   * @member {String} Item
   */
  exports.prototype['Item'] = undefined;
  /**
   * The identifier for the report item (title)
   * @member {Array.<module:model/COUNTERItemIdentifiers>} Item_ID
   */
  exports.prototype['Item_ID'] = undefined;
  /**
   * The identifier for contributor (i.e. author) of the item.
   * @member {Array.<module:model/COUNTERItemContributors>} Item_Contributors
   */
  exports.prototype['Item_Contributors'] = undefined;
  /**
   * Publication or other date(s)related to the item. Mainly applies to monographic items when in a Title report.
   * @member {Array.<module:model/COUNTERItemDates>} Item_Dates
   */
  exports.prototype['Item_Dates'] = undefined;
  /**
   * Other attributes related related to the parent item.
   * @member {Array.<module:model/COUNTERItemAttributes>} Item_Attributes
   */
  exports.prototype['Item_Attributes'] = undefined;
  /**
   * Name of the platform
   * @member {String} Platform
   */
  exports.prototype['Platform'] = undefined;
  /**
   * Name of publisher of the item
   * @member {String} Publisher
   */
  exports.prototype['Publisher'] = undefined;
  /**
   * The identifier for the publisher.
   * @member {Array.<module:model/COUNTERPublisherIdentifiers>} Publisher_ID
   */
  exports.prototype['Publisher_ID'] = undefined;
  /**
   * The identifier for the report item (title)
   * @member {Array.<module:model/COUNTERItemParent>} Item_Parent
   */
  exports.prototype['Item_Parent'] = undefined;
  /**
   * The identifier for the report item (title)
   * @member {Array.<module:model/COUNTERItemComponent>} Item_Component
   */
  exports.prototype['Item_Component'] = undefined;
  /**
   * Nature of the item being reported.
   * @member {module:model/COUNTERItemUsage.DataTypeEnum} Data_Type
   */
  exports.prototype['Data_Type'] = undefined;
  /**
   * Defines the nature of the sections being delivered if the item is retrieved in units smaller than the whole.
   * @member {module:model/COUNTERItemUsage.SectionTypeEnum} Section_Type
   */
  exports.prototype['Section_Type'] = undefined;
  /**
   * Year of publication in the format of 'yyyy'.  If the item is available in both online and print format, use the year of publication for the version of record. Use '0001' for unknown and '9999' for articles in press.
   * @member {String} YOP
   */
  exports.prototype['YOP'] = undefined;
  /**
   * Nature of the access control in place for item retrieved.
   * @member {module:model/COUNTERItemUsage.AccessTypeEnum} Access_Type
   */
  exports.prototype['Access_Type'] = undefined;
  /**
   * Identifies if the usage activity was 'Regular' usage (a user doing research on a content site) or if the usage was for the purpose of retrieving content for Text and Data Mining (TDM)
   * @member {module:model/COUNTERItemUsage.AccessMethodEnum} Access_Method
   */
  exports.prototype['Access_Method'] = undefined;
  /**
   * The usage data related to the report item
   * @member {Array.<module:model/COUNTERItemPerformance>} Performance
   */
  exports.prototype['Performance'] = undefined;


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

  /**
   * Allowed values for the <code>Section_Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SectionTypeEnum = {
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
     * value: "Chapter"
     * @const
     */
    "Chapter": "Chapter",
    /**
     * value: "Other"
     * @const
     */
    "Other": "Other",
    /**
     * value: "Section"
     * @const
     */
    "Section": "Section"  };

  /**
   * Allowed values for the <code>Access_Type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessTypeEnum = {
    /**
     * value: "Controlled"
     * @const
     */
    "Controlled": "Controlled",
    /**
     * value: "OA_Gold"
     * @const
     */
    "OA_Gold": "OA_Gold",
    /**
     * value: "Other_Free_To_Read"
     * @const
     */
    "Other_Free_To_Read": "Other_Free_To_Read"  };

  /**
   * Allowed values for the <code>Access_Method</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessMethodEnum = {
    /**
     * value: "Regular"
     * @const
     */
    "Regular": "Regular",
    /**
     * value: "TDM"
     * @const
     */
    "TDM": "TDM"  };


  return exports;
}));


