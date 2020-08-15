# Data conversion

- Copy the pdf content to a Text file
- Manualy clean line breaks and bad format
- transform with regex

regex for data cleanup

search regex: `^(\d{1,3})\n(.*)\n(.*)\n(.*)\n(\d{1,3})`

replace with

```json
{
  "number":"$1",
  "address":"$2",
  "name":"$3",
  "accessibility":"$4",
  "constituency":"$5"
},

