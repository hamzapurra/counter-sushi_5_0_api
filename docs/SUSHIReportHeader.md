# CounterSushi50Api.SUSHIReportHeader

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **String** | Time the report was prepared. Format as defined by date-time - RFC3339 | [optional] 
**createdBy** | **String** | Name of the organization producing the report. | [optional] 
**customerID** | **String** | Identifer of the customer the report represents - identifier used on the request | [optional] 
**reportID** | **String** | The report ID or code or shortname. Typically this will be the same code provided in the Report parameter of the request. | 
**release** | **String** | The release or version of the report. | 
**reportName** | **String** | The long name of the report. | 
**institutionName** | **String** | Name of the customer. | [optional] 
**institutionID** | [**[SUSHIOrgIdentifiers]**](SUSHIOrgIdentifiers.md) | Other identifiers for the organization, including ISNI, etc. if available | [optional] 
**reportFilters** | [**[SUSHIReportHeaderReportFilters]**](SUSHIReportHeaderReportFilters.md) | A List of report filters used for this report.  Typically  reflect filters provided on the Request.  Filters limit the data to be reported on. | [optional] 
**reportAttributes** | [**[SUSHIReportHeaderReportAttributes]**](SUSHIReportHeaderReportAttributes.md) | Any additional attributes applied to the report. Attributes inform the level of detail in the report. | [optional] 
**exceptions** | [**[SUSHIErrorModel]**](SUSHIErrorModel.md) | Series of exceptions encounted when preparing the report. | [optional] 


