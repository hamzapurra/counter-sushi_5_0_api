# CounterSushi50Api.DefaultApi

All URIs are relative to *https://virtserver.swaggerhub.com/opesch/counter-sushi_5_0_api/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAPIStatus**](DefaultApi.md#getAPIStatus) | **GET** /status | 
[**getConsortiumMembers**](DefaultApi.md#getConsortiumMembers) | **GET** /members | 
[**getReports**](DefaultApi.md#getReports) | **GET** /reports | 
[**getReportsDR1**](DefaultApi.md#getReportsDR1) | **GET** /reports/dr_d1 | 
[**getReportsDR2**](DefaultApi.md#getReportsDR2) | **GET** /reports/dr_d2 | 
[**getReportsDRx**](DefaultApi.md#getReportsDRx) | **GET** /reports/dr | 
[**getReportsIR**](DefaultApi.md#getReportsIR) | **GET** /reports/ir | 
[**getReportsIRA1**](DefaultApi.md#getReportsIRA1) | **GET** /reports/ir_a1 | 
[**getReportsIRM1**](DefaultApi.md#getReportsIRM1) | **GET** /reports/ir_m1 | 
[**getReportsPR**](DefaultApi.md#getReportsPR) | **GET** /reports/pr | 
[**getReportsPR1**](DefaultApi.md#getReportsPR1) | **GET** /reports/pr_p1 | 
[**getReportsTR**](DefaultApi.md#getReportsTR) | **GET** /reports/tr | 
[**getReportsTRB1**](DefaultApi.md#getReportsTRB1) | **GET** /reports/tr_b1 | 
[**getReportsTRB2**](DefaultApi.md#getReportsTRB2) | **GET** /reports/tr_b2 | 
[**getReportsTRB3**](DefaultApi.md#getReportsTRB3) | **GET** /reports/tr_b3 | 
[**getReportsTRJ1**](DefaultApi.md#getReportsTRJ1) | **GET** /reports/tr_j1 | 
[**getReportsTRJ2**](DefaultApi.md#getReportsTRJ2) | **GET** /reports/tr_j2 | 
[**getReportsTRJ3**](DefaultApi.md#getReportsTRJ3) | **GET** /reports/tr_j3 | 
[**getReportsTRJ4**](DefaultApi.md#getReportsTRJ4) | **GET** /reports/tr_j4 | 


<a name="getAPIStatus"></a>
# **getAPIStatus**
> [SUSHIServiceStatus] getAPIStatus(customerId, opts)



This resource returns the current status of the reporting service supported by this API.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide report data for.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the report data is being requested for.  This can be omitted if the service provides report data for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAPIStatus(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide report data for. | 
 **platform** | **String**| Name of the Platform the report data is being requested for.  This can be omitted if the service provides report data for only one platform. | [optional] 

### Return type

[**[SUSHIServiceStatus]**](SUSHIServiceStatus.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getConsortiumMembers"></a>
# **getConsortiumMembers**
> [SUSHIConsortiumMemberList] getConsortiumMembers(customerId, opts)



This resource returns the list of consortium members related to a Customer_ID.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide report data for.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the report data is being requested for.  This can be omitted if the service provides report data for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConsortiumMembers(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide report data for. | 
 **platform** | **String**| Name of the Platform the report data is being requested for.  This can be omitted if the service provides report data for only one platform. | [optional] 

### Return type

[**[SUSHIConsortiumMemberList]**](SUSHIConsortiumMemberList.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReports"></a>
# **getReports**
> [SUSHIReportList] getReports(customerId, opts)



This resource returns a list of reports supported by the API for a given application.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide report data for.

var opts = { 
  'platform': "platform_example", // String | The name of the Platform the report data is being requested for.  This can be omitted if the service provides report data for only one platform.
  'search': "search_example" // String | Keyword search filtered against report name. Allows for searching for a report by name.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReports(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide report data for. | 
 **platform** | **String**| The name of the Platform the report data is being requested for.  This can be omitted if the service provides report data for only one platform. | [optional] 
 **search** | **String**| Keyword search filtered against report name. Allows for searching for a report by name. | [optional] 

### Return type

[**[SUSHIReportList]**](SUSHIReportList.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsDR1"></a>
# **getReportsDR1**
> [COUNTERDatabaseReport] getReportsDR1(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Database Search and Item Usage&#39; [DR_D1], a Standard View of Database Master Report. Reports on key search and request metrics needed to evaluate a database.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsDR1(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERDatabaseReport]**](COUNTERDatabaseReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsDR2"></a>
# **getReportsDR2**
> [COUNTERDatabaseReport] getReportsDR2(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Database Access Denied&#39; [DR_D2], a Standard View of Database Master Report. Reports on Access Denied activity for databases where users were denied access because simultaneous use licenses were exceeded or their institution did not have a license for the database.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsDR2(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERDatabaseReport]**](COUNTERDatabaseReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsDRx"></a>
# **getReportsDRx**
> [COUNTERDatabaseReport] getReportsDRx(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Database Master Report&#39; [DR]. A customizable report detailing activity by database that allows the user to apply filters and select other configuration options for the report.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example", // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
  'database': "database_example", // String | Name of a specific database usage is being requested for. If omitted, all databases on the platform with usage for the requested customer will be returned
  'metricType': "metricType_example", // String | A report filter. A list of Metric_Types to return. Specify multiple values by delimiting with a | character.  Omitting this parameter will return all metric_types with statistics. 
  'accessType': "accessType_example", // String | A Report Filter. A list of Access_Types to return delimited with a | character.
  'accessMethod': "accessMethod_example", // String | A Report Filter. A list of Access_Methods to return delimited with a | character.
  'yop': "yop_example", // String | A Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 = unknown and 9999 = articles in press
  'attributesToShow': "attributesToShow_example", // String | A Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character. Options include Access_Type, Access_Method and YOP. When fields are included usage will be presented for each value of that field (with usage) otherwise usage will be rolled up for all values of a given field.
  'excludeReportHeader': true // Boolean | Optional Report Attribute. Include this parameter with a value of 'true' to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsDRx(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 
 **database** | **String**| Name of a specific database usage is being requested for. If omitted, all databases on the platform with usage for the requested customer will be returned | [optional] 
 **metricType** | **String**| A report filter. A list of Metric_Types to return. Specify multiple values by delimiting with a | character.  Omitting this parameter will return all metric_types with statistics.  | [optional] 
 **accessType** | **String**| A Report Filter. A list of Access_Types to return delimited with a | character. | [optional] 
 **accessMethod** | **String**| A Report Filter. A list of Access_Methods to return delimited with a | character. | [optional] 
 **yop** | **String**| A Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 &#x3D; unknown and 9999 &#x3D; articles in press | [optional] 
 **attributesToShow** | **String**| A Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character. Options include Access_Type, Access_Method and YOP. When fields are included usage will be presented for each value of that field (with usage) otherwise usage will be rolled up for all values of a given field. | [optional] 
 **excludeReportHeader** | **Boolean**| Optional Report Attribute. Include this parameter with a value of &#39;true&#39; to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header. | [optional] 

### Return type

[**[COUNTERDatabaseReport]**](COUNTERDatabaseReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsIR"></a>
# **getReportsIR**
> [COUNTERItemReport] getReportsIR(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Item Master Report&#39;  [IR].

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example", // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
  'itemId': "itemId_example", // String | Optional Report Filter. Identifier of a specific title usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned
  'itemContributor': "itemContributor_example", // String | Optional Report Filter. Identifier of a specific contributor (i.e. author) usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned
  'metricType': "metricType_example", // String | Optional Report Filter. A list of Metric_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all metric_types with statistics.
  'dataType': "dataType_example", // String | Optional Report Filter. A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Data_Types with statistics. 
  'sectionType': "sectionType_example", // String | Optional Report Filter.  A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Section_Types with statistics.
  'yop': "yop_example", // String | Optional Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 = unknown and 9999 = articles in press
  'accessType': "accessType_example", // String | Optional Report Filter. A list of Access_Types to return usage for -- delimited with a | character.
  'accessMethod': "accessMethod_example", // String | Optional Report Filter. A list of Access_Methods to return usage for --  delimited with a | character.
  'attributesToShow': "attributesToShow_example", // String | Optional Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character. Options include Access_Type, Access_Method and YOP. When fields are  included usage will be presented for each value of that field (with usage) otherwise usage will be rolled up for all values of a given field.
  'includeItemComponents': "includeItemComponents_example", // String | Optional Report Attribute. Include this parameter to include ItemComponent details in the report. Omitting the parameter will exclude the ItemComponent elements.
  'excludeReportHeader': true // Boolean | Optional Report Attribute. Include this parameter with a value of 'true' to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsIR(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 
 **itemId** | **String**| Optional Report Filter. Identifier of a specific title usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned | [optional] 
 **itemContributor** | **String**| Optional Report Filter. Identifier of a specific contributor (i.e. author) usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned | [optional] 
 **metricType** | **String**| Optional Report Filter. A list of Metric_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all metric_types with statistics. | [optional] 
 **dataType** | **String**| Optional Report Filter. A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Data_Types with statistics.  | [optional] 
 **sectionType** | **String**| Optional Report Filter.  A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Section_Types with statistics. | [optional] 
 **yop** | **String**| Optional Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 &#x3D; unknown and 9999 &#x3D; articles in press | [optional] 
 **accessType** | **String**| Optional Report Filter. A list of Access_Types to return usage for -- delimited with a | character. | [optional] 
 **accessMethod** | **String**| Optional Report Filter. A list of Access_Methods to return usage for --  delimited with a | character. | [optional] 
 **attributesToShow** | **String**| Optional Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character. Options include Access_Type, Access_Method and YOP. When fields are  included usage will be presented for each value of that field (with usage) otherwise usage will be rolled up for all values of a given field. | [optional] 
 **includeItemComponents** | **String**| Optional Report Attribute. Include this parameter to include ItemComponent details in the report. Omitting the parameter will exclude the ItemComponent elements. | [optional] 
 **excludeReportHeader** | **Boolean**| Optional Report Attribute. Include this parameter with a value of &#39;true&#39; to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header. | [optional] 

### Return type

[**[COUNTERItemReport]**](COUNTERItemReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsIRA1"></a>
# **getReportsIRA1**
> [COUNTERTitleReport] getReportsIRA1(customerId, beginDate, endDate, opts)



This resource returns &#39;Journal Article Requests&#39; [IR_A1], a Standard View of Item Master Report. Reports on journal article requests at the article level. This report is limited to content with a Data_Type of Journal; Section_Type of Article and metric types of Total_Item_Requests and Unique_Item_Requests.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsIRA1(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsIRM1"></a>
# **getReportsIRM1**
> [COUNTERTitleReport] getReportsIRM1(customerId, beginDate, endDate, opts)



This resource returns &#39;Multimedia Item Requests&#39; [IR_M1], a Standard View of Item Master Report. Reports on multimedia requests at the item level.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsIRM1(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsPR"></a>
# **getReportsPR**
> [COUNTERPlatformReport] getReportsPR(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Platform Master Report&#39; [PR]. A customizable report summarizing activity across a provider’s platforms that allows the user to apply filters and select other configuration options for the report.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example", // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
  'metricType': "metricType_example", // String | Optional Report Filter. A list of Metric_Types to return. Specify multiple values by delimiting with a | character.  Omitting this parameter will return all metric_types with statistics. 
  'accessType': "accessType_example", // String | Optional Report Filter. A list of Access_Types to return delimited with a | character. Omitting this parameter will return all access_types with statistics.
  'accessMethod': "accessMethod_example", // String | Optional Report Filter. A list of Access_Methods to return delimited with a | character. Omitting this parameter will return all access_methods with statistics.
  'yop': "yop_example", // String | Optional Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 = unknown and 9999 = articles in press.
  'attributesToShow': "attributesToShow_example", // String | Optional Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character. Options include Access_Type, Access_Method and YOP. When fields are included usage will be presented for each value of that field (with     usage) otherwise usage will be rolled up for all values of a given field.
  'excludeReportHeader': true // Boolean | Optional Report Attribute. Include this parameter with a value of 'true' to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsPR(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 
 **metricType** | **String**| Optional Report Filter. A list of Metric_Types to return. Specify multiple values by delimiting with a | character.  Omitting this parameter will return all metric_types with statistics.  | [optional] 
 **accessType** | **String**| Optional Report Filter. A list of Access_Types to return delimited with a | character. Omitting this parameter will return all access_types with statistics. | [optional] 
 **accessMethod** | **String**| Optional Report Filter. A list of Access_Methods to return delimited with a | character. Omitting this parameter will return all access_methods with statistics. | [optional] 
 **yop** | **String**| Optional Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 &#x3D; unknown and 9999 &#x3D; articles in press. | [optional] 
 **attributesToShow** | **String**| Optional Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character. Options include Access_Type, Access_Method and YOP. When fields are included usage will be presented for each value of that field (with     usage) otherwise usage will be rolled up for all values of a given field. | [optional] 
 **excludeReportHeader** | **Boolean**| Optional Report Attribute. Include this parameter with a value of &#39;true&#39; to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header. | [optional] 

### Return type

[**[COUNTERPlatformReport]**](COUNTERPlatformReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsPR1"></a>
# **getReportsPR1**
> [COUNTERPlatformReport] getReportsPR1(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Platform Usage&#39; [pr_p1]. This is a Standard View of the Package Master Report that presents usage for the overall Platform broken down by Metric_Type.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsPR1(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERPlatformReport]**](COUNTERPlatformReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTR"></a>
# **getReportsTR**
> [COUNTERTitleReport] getReportsTR(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;TItle Master Report&#39; [TR]. A customizable report detailing activity at the title level (journal, book, etc.) that allows the user to apply filters and select other configuration options for the report.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example", // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
  'itemId': "itemId_example", // String | Identifier of a specific title usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned
  'itemContributor': "itemContributor_example", // String | Identifier of a specific contributor (i.e. author) usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned
  'metricType': "metricType_example", // String | A Report Filter. A list of Metric_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all metric_types with statistics.
  'dataType': "dataType_example", // String | A Report Filter. A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Data_Types with statistics. 
  'sectionType': "sectionType_example", // String | A Report Filter. A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Section_Types with statistics.
  'yop': "yop_example", // String | A Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 = unknown and 9999 = articles in press
  'accessType': "accessType_example", // String | A Report Filter. A list of Access_Types to return usage for -- delimited with a | character.
  'accessMethod': "accessMethod_example", // String | A Report Filter. A list of Access_Methods to return usage for --  delimited with a | character.
  'attributesToShow': "attributesToShow_example", // String | A Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character.  Options include Access_Type, Access_Method and YOP. When fields are included usage will be presented for each value of that field (with usage) otherwise usage will be rolled up for all values of a given field.
  'excludeReportHeader': true // Boolean | Optional Report Attribute. Include this parameter with a value of 'true' to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTR(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 
 **itemId** | **String**| Identifier of a specific title usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned | [optional] 
 **itemContributor** | **String**| Identifier of a specific contributor (i.e. author) usage is being requested for.  If omitted, all databases on the platform with usage for the requested customer will be returned | [optional] 
 **metricType** | **String**| A Report Filter. A list of Metric_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all metric_types with statistics. | [optional] 
 **dataType** | **String**| A Report Filter. A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Data_Types with statistics.  | [optional] 
 **sectionType** | **String**| A Report Filter. A list of Data_Types to return usage for.  Use | character to delimit multiple values. Omit this parameter to include all Section_Types with statistics. | [optional] 
 **yop** | **String**| A Report Filter. A list or range of years of publication to return in response in format of yyyy|yyyy|yyyy-yyyy. Note that 0001 &#x3D; unknown and 9999 &#x3D; articles in press | [optional] 
 **accessType** | **String**| A Report Filter. A list of Access_Types to return usage for -- delimited with a | character. | [optional] 
 **accessMethod** | **String**| A Report Filter. A list of Access_Methods to return usage for --  delimited with a | character. | [optional] 
 **attributesToShow** | **String**| A Report Attribute. A list of attributes to include as separate elements in response (usage will be broken out by attribute values).  Multiple attribute names are delimited with a | character.  Options include Access_Type, Access_Method and YOP. When fields are included usage will be presented for each value of that field (with usage) otherwise usage will be rolled up for all values of a given field. | [optional] 
 **excludeReportHeader** | **Boolean**| Optional Report Attribute. Include this parameter with a value of &#39;true&#39; to exclude the SUSHI Report_Header should be excluded with the response. Omitting the parameter will include the Report_Header. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRB1"></a>
# **getReportsTRB1**
> [COUNTERTitleReport] getReportsTRB1(customerId, beginDate, endDate, opts)



This resource returns COUNTER Book Requests (Excluding OA_Gold) [TR_B1], a Standard View of Title Master Report. Reports on full text activity for non-Gold Open Access books as “Total_Item_Requests” and “Unique_Title_Requests”.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRB1(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRB2"></a>
# **getReportsTRB2**
> [COUNTERTitleReport] getReportsTRB2(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Access Denied by Book&#39;[TR_B2], a Standard View of Title Master Report. Reports on Access Denied activity for books where users were denied access because simultaneous use licenses were exceeded or their institution did not have a license for the book.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRB2(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRB3"></a>
# **getReportsTRB3**
> [COUNTERTitleReport] getReportsTRB3(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Access Denied by Book&#39;[TR_B2], a Standard View of Title Master Report. Reports on book usage showing all applicable metric types broken down by Access_Type.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRB3(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRJ1"></a>
# **getReportsTRJ1**
> [COUNTERTitleReport] getReportsTRJ1(customerId, beginDate, endDate, opts)



This resource returns COUNTER &#39;Journal Requests (Excluding OA_Gold)&#39; [TR_J1], a Standard View of Title Master Report. Reports on usage of non-Gold Open Access journal content as “Total_Item_Requests” and “Unique_Item_Requests”. 

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRJ1(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRJ2"></a>
# **getReportsTRJ2**
> [COUNTERTitleReport] getReportsTRJ2(customerId, beginDate, endDate, opts)



This resource returns &#39;Access Denied by Journal&#39; [TR_J2], a Standard View of Title Master Report. Reports on Access Denied activity for journal content where users were denied access because simultaneous use licenses were exceeded or their institution did not have a license for the title.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRJ2(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRJ3"></a>
# **getReportsTRJ3**
> [COUNTERTitleReport] getReportsTRJ3(customerId, beginDate, endDate, opts)



This resource returns &#39;Journal Usage by Access Type &#39; [TR_J3], a Standard View of Title Master Report. Reports on usage of journal content for all metric types broken down by Access Type.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRJ3(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getReportsTRJ4"></a>
# **getReportsTRJ4**
> [COUNTERTitleReport] getReportsTRJ4(customerId, beginDate, endDate, opts)



This resource returns \&quot;Journal Requests by YOP (Excluding OA_Gold)\&quot; [TR_J4], a Standard View of Title Master Report. Breaks down the usage of non-Gold Open Access journal content by year of publication (YOP) providing counts for the metric types \&quot;Total_Item_Requests\&quot; and \&quot;Unique_Item_Requests\&quot;.

### Example
```javascript
var CounterSushi50Api = require('counter_sushi5_0_api');
var defaultClient = CounterSushi50Api.ApiClient.instance;

// Configure API key authorization: apikey
var apikey = defaultClient.authentications['apikey'];
apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apikey.apiKeyPrefix = 'Token';

// Configure API key authorization: requestor_id
var requestor_id = defaultClient.authentications['requestor_id'];
requestor_id.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//requestor_id.apiKeyPrefix = 'Token';

var apiInstance = new CounterSushi50Api.DefaultApi();

var customerId = "customerId_example"; // String | Identifies the customer to provide usage for.

var beginDate = "beginDate_example"; // String | Usage start date in the form of yyyy-mm-dd or yyyy-mm.

var endDate = "endDate_example"; // String | Usage end date in the form of yyyy-mm-dd or yyyy-mm.

var opts = { 
  'platform': "platform_example" // String | Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportsTRJ4(customerId, beginDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Identifies the customer to provide usage for. | 
 **beginDate** | **String**| Usage start date in the form of yyyy-mm-dd or yyyy-mm. | 
 **endDate** | **String**| Usage end date in the form of yyyy-mm-dd or yyyy-mm. | 
 **platform** | **String**| Name of the Platform the usage is being requested for.  This can be omitted if the service provides usage for only one platform. | [optional] 

### Return type

[**[COUNTERTitleReport]**](COUNTERTitleReport.md)

### Authorization

[apikey](../README.md#apikey), [requestor_id](../README.md#requestor_id)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

