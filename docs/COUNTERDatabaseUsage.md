# CounterSushi50Api.COUNTERDatabaseUsage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database** | **String** | Name of the database or collection being reported on. | 
**platform** | **String** | Name of the platform | 
**publisher** | **String** | Name of the organization that creates the database | 
**publisherID** | [**[COUNTERPublisherIdentifiers]**](COUNTERPublisherIdentifiers.md) | The identifier for the publisher. | [optional] 
**dataType** | **String** | Nature of the item being reported. | [optional] 
**YOP** | **String** | Year of publication in the format of &#39;yyyy&#39;.  If the item is available in both online and print format, use the year of publication for version of record. Use &#39;0001&#39; for unknown and &#39;9999&#39; for articles in press. | [optional] 
**accessType** | **String** | Nature of the access control in place for item retrieved. | [optional] 
**accessMethod** | **String** | Identifies if the usage activity was &#39;Regular&#39; usage (a user doing research on a content site) or if the usage was for the purpose of retrieving content for Text and Data Mining (TDM) | [optional] 
**performance** | [**[COUNTERItemPerformance]**](COUNTERItemPerformance.md) | The usage data related to the report item | 


<a name="DataTypeEnum"></a>
## Enum: DataTypeEnum


* `Article` (value: `"Article"`)

* `Book` (value: `"Book"`)

* `Book Segment` (value: `"Book Segment"`)

* `Database` (value: `"Database"`)

* `Dataset` (value: `"Dataset"`)

* `Journal` (value: `"Journal"`)

* `Multimedia` (value: `"Multimedia"`)

* `Newspaper or Newsletter` (value: `"Newspaper or Newsletter"`)

* `Other` (value: `"Other"`)

* `Platform` (value: `"Platform"`)

* `Report` (value: `"Report"`)

* `Repository Item` (value: `"Repository Item"`)

* `Thesis or Dissertation` (value: `"Thesis or Dissertation"`)




<a name="AccessTypeEnum"></a>
## Enum: AccessTypeEnum


* `Controlled` (value: `"Controlled"`)

* `OA_Gold` (value: `"OA_Gold"`)

* `Other_Free_To_Read` (value: `"Other_Free_To_Read"`)




<a name="AccessMethodEnum"></a>
## Enum: AccessMethodEnum


* `Regular` (value: `"Regular"`)

* `TDM` (value: `"TDM"`)




