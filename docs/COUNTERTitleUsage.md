# CounterSushi50Api.COUNTERTitleUsage

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** | Name of the item being reported. | 
**itemID** | [**[COUNTERItemIdentifiers]**](COUNTERItemIdentifiers.md) | The identifier for the report item (title) | [optional] 
**itemContributors** | [**[COUNTERItemContributors]**](COUNTERItemContributors.md) | The identifier for contributor (i.e. author) of the item. | [optional] 
**itemDates** | [**[COUNTERItemDates]**](COUNTERItemDates.md) | Publication or other date(s)related to the item. Mainly applies to monographic items when in a Title report. | [optional] 
**itemAttributes** | [**[COUNTERItemAttributes]**](COUNTERItemAttributes.md) | Other attributes related related to the  item. | [optional] 
**platform** | **String** | Name of the platform | 
**publisher** | **String** | Name of publisher of the item | 
**publisherID** | [**[COUNTERPublisherIdentifiers]**](COUNTERPublisherIdentifiers.md) | The identifier for the publisher. | [optional] 
**dataType** | **String** | Nature of the item being reported. | 
**sectionType** | **String** | Defines the nature of the sections being delivered if the item is retrieved in units smaller than the whole. | [optional] 
**YOP** | **String** | Year of publication in the format of &#39;yyyy&#39;.  If the item is available in both online and print format, use the year of publication for the version of record. Use &#39;0001&#39; for unknown and &#39;9999&#39; for articles in press. | [optional] 
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




<a name="SectionTypeEnum"></a>
## Enum: SectionTypeEnum


* `Article` (value: `"Article"`)

* `Book` (value: `"Book"`)

* `Chapter` (value: `"Chapter"`)

* `Other` (value: `"Other"`)

* `Section` (value: `"Section"`)




<a name="AccessTypeEnum"></a>
## Enum: AccessTypeEnum


* `Controlled` (value: `"Controlled"`)

* `OA_Gold` (value: `"OA_Gold"`)

* `Other_Free_To_Read` (value: `"Other_Free_To_Read"`)




<a name="AccessMethodEnum"></a>
## Enum: AccessMethodEnum


* `Regular` (value: `"Regular"`)

* `TDM` (value: `"TDM"`)




