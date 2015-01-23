[
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUALD",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000003",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUALD",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"100",
            "name":"100",
            "uri":"/Line/100"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"135",
            "name":"135",
            "uri":"/Line/135"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"15",
            "name":"15",
            "uri":"/Line/15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"205",
            "name":"205",
            "uri":"/Line/205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"25",
            "name":"25",
            "uri":"/Line/25"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"42",
            "name":"42",
            "uri":"/Line/42"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"78",
            "name":"78",
            "uri":"/Line/78"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n15",
            "name":"N15",
            "uri":"/Line/n15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n205",
            "name":"N205",
            "uri":"/Line/n205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n550",
            "name":"N550",
            "uri":"/Line/n550"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n551",
            "name":"N551",
            "uri":"/Line/n551"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000003R",
            "stationAtcoCode":"490000003R",
            "lineIdentifier":[
               "100",
               "135",
               "15",
               "205",
               "42",
               "78",
               "n15",
               "n205"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000003N",
            "stationAtcoCode":"490000003N",
            "lineIdentifier":[
               "25",
               "n550",
               "n551"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUALD",
            "lineIdentifier":[
               "circle"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUALD",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "100",
               "135",
               "15",
               "205",
               "25",
               "42",
               "78",
               "n15",
               "n205",
               "n550",
               "n551"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUALD",
      "commonName":"Aldgate Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Aldgate Station,London Underground Ltd.,Aldgate High St,London,EC3N 1AH"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"17:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"09:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"18:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUALD2",
            "modes":[

            ],
            "icsCode":"1000003",
            "stationNaptan":"940GZZLUALD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUALD2",
            "commonName":"Aldgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUALD3",
            "modes":[

            ],
            "icsCode":"1000003",
            "stationNaptan":"940GZZLUALD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUALD3",
            "commonName":"Aldgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUALD1",
            "modes":[

            ],
            "icsCode":"1000003",
            "stationNaptan":"940GZZLUALD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUALD1",
            "commonName":"Aldgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUALD4",
            "modes":[

            ],
            "icsCode":"1000003",
            "stationNaptan":"940GZZLUALD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUALD4",
            "commonName":"Aldgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.514251,
      "lon":-0.075683
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUAMS",
      "modes":[
         "tube"
      ],
      "icsCode":"1000006",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUAMS",
      "hubNaptanCode":"HUBAMR",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUAMS",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUAMS",
      "commonName":"Amersham Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Amersham Station,Stn Approach,Amersham,Bucks HP6 5AZ"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"18:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Boarding Ramp",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"15:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"ToiletNote",
            "sourceSystemKey":"LRAD",
            "value":"female only, southbound platform"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"You can only enter and exit the southbound  platform for trains towards Liverpool Street"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUAMS1",
            "modes":[

            ],
            "icsCode":"1000006",
            "stationNaptan":"940GZZLUAMS",
            "hubNaptanCode":"HUBAMR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUAMS1",
            "commonName":"Amersham Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.674127,
      "lon":-0.607708
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUBBN",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000014",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUBBN",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"153",
            "name":"153",
            "uri":"/Line/153"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"4",
            "name":"4",
            "uri":"/Line/4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"56",
            "name":"56",
            "uri":"/Line/56"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000014A",
            "stationAtcoCode":"490000014A",
            "lineIdentifier":[
               "153",
               "4",
               "56"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000014B",
            "stationAtcoCode":"490000014B",
            "lineIdentifier":[
               "153",
               "4",
               "56"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUBBN",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "153",
               "4",
               "56"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUBBN",
      "commonName":"Barbican Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Barbican Station,London Underground Ltd.,Aldersgate St,London,EC1A 4JA"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall, routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"8"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBBN1",
            "modes":[

            ],
            "icsCode":"1000014",
            "stationNaptan":"940GZZLUBBN",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBBN1",
            "commonName":"Barbican Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBBN2",
            "modes":[

            ],
            "icsCode":"1000014",
            "stationNaptan":"940GZZLUBBN",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBBN2",
            "commonName":"Barbican Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.52028,
      "lon":-0.097988
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUBST",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000011",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUBST",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"113",
            "name":"113",
            "uri":"/Line/113"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"13",
            "name":"13",
            "uri":"/Line/13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"139",
            "name":"139",
            "uri":"/Line/139"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"18",
            "name":"18",
            "uri":"/Line/18"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"189",
            "name":"189",
            "uri":"/Line/189"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"205",
            "name":"205",
            "uri":"/Line/205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"27",
            "name":"27",
            "uri":"/Line/27"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"274",
            "name":"274",
            "uri":"/Line/274"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"30",
            "name":"30",
            "uri":"/Line/30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"453",
            "name":"453",
            "uri":"/Line/453"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"74",
            "name":"74",
            "uri":"/Line/74"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"82",
            "name":"82",
            "uri":"/Line/82"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"bakerloo",
            "name":"Bakerloo",
            "uri":"/Line/bakerloo"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"jubilee",
            "name":"Jubilee",
            "uri":"/Line/jubilee"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n113",
            "name":"N113",
            "uri":"/Line/n113"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n13",
            "name":"N13",
            "uri":"/Line/n13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n18",
            "name":"N18",
            "uri":"/Line/n18"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n205",
            "name":"N205",
            "uri":"/Line/n205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n74",
            "name":"N74",
            "uri":"/Line/n74"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000011A",
            "stationAtcoCode":"490000011A",
            "lineIdentifier":[
               "113",
               "274",
               "74",
               "82",
               "n113",
               "n74"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000011B",
            "stationAtcoCode":"490000011B",
            "lineIdentifier":[
               "13",
               "139",
               "189",
               "n13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000011D",
            "stationAtcoCode":"490000011D",
            "lineIdentifier":[
               "18",
               "205",
               "27",
               "30",
               "453",
               "74",
               "n18",
               "n205",
               "n74"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000011E",
            "stationAtcoCode":"490000011E",
            "lineIdentifier":[
               "18",
               "205",
               "27",
               "30",
               "453",
               "n18",
               "n205"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490015040W",
            "stationAtcoCode":"490015040W",
            "lineIdentifier":[
               "18",
               "205",
               "27",
               "30",
               "453",
               "74",
               "n18",
               "n205",
               "n74"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUBST",
            "lineIdentifier":[
               "bakerloo"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUBST",
            "lineIdentifier":[
               "circle",
               "hammersmith-city"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUBST",
            "lineIdentifier":[
               "jubilee"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUBST",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "113",
               "13",
               "139",
               "18",
               "189",
               "205",
               "27",
               "274",
               "30",
               "453",
               "74",
               "82",
               "n113",
               "n13",
               "n18",
               "n205",
               "n74"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "bakerloo",
               "circle",
               "hammersmith-city",
               "jubilee",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUBST",
      "commonName":"Baker Street Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"21"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bakerloo",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bakerloo",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"21:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bakerloo",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bakerloo",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"22:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bakerloo",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"14:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Baker Street Station Marylebone Rd,London,NW1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall, routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"15:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bakerloo",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"21:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"18:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST1",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST1",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST2",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST2",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST3",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST3",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST4",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST4",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST5",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST5",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST6",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST6",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST7",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST7",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUBST8",
            "modes":[

            ],
            "icsCode":"1000011",
            "stationNaptan":"940GZZLUBST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUBST8",
            "commonName":"Baker Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.522888,
      "lon":-0.157127
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUCAL",
      "modes":[
         "tube"
      ],
      "icsCode":"1000042",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUCAL",
      "hubNaptanCode":"HUBCFO",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUCAL",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUCAL",
      "commonName":"Chalfont & Latimer Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Chalfont & Latimer Station,London Underground Ltd.,Station Approach,Little Chalfont,Amersham,Bucks,HP7 9PR"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"8"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceInstructions",
            "sourceSystemKey":"LRAD",
            "value":"You need to use correct entrance/exit  depending on which platform you are travelling from/to, as you cannot change between all platforms within station – you need to make a 360m journey via street to change between northbound platform 1 and southbound pl"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCAL1",
            "modes":[

            ],
            "icsCode":"1000042",
            "stationNaptan":"940GZZLUCAL",
            "hubNaptanCode":"HUBCFO",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCAL1",
            "commonName":"Chalfont & Latimer Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCAL2",
            "modes":[

            ],
            "icsCode":"1000042",
            "stationNaptan":"940GZZLUCAL",
            "hubNaptanCode":"HUBCFO",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCAL2",
            "commonName":"Chalfont & Latimer Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.667985,
      "lon":-0.560682
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUCSM",
      "modes":[
         "tube"
      ],
      "icsCode":"1000046",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUCSM",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUCSM",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUCSM",
      "commonName":"Chesham Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Chesham Station,London Underground Ltd.,Station Approach,Chesham,Bucks,HP5 1DH"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"4"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCSM1",
            "modes":[

            ],
            "icsCode":"1000046",
            "stationNaptan":"940GZZLUCSM",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCSM1",
            "commonName":"Chesham Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":51.70521,
            "lon":-0.611241
         }
      ],
      "lat":51.70521,
      "lon":-0.611241
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUCXY",
      "modes":[
         "tube"
      ],
      "icsCode":"1000057",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUCXY",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUCXY",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUCXY",
      "commonName":"Croxley Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Croxley Station,London Underground Ltd.,Watford Road,Rickmansworth,Herts,WD3 3DY"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCXY1",
            "modes":[

            ],
            "icsCode":"1000057",
            "stationNaptan":"940GZZLUCXY",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCXY1",
            "commonName":"Croxley Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCXY2",
            "modes":[

            ],
            "icsCode":"1000057",
            "stationNaptan":"940GZZLUCXY",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCXY2",
            "commonName":"Croxley Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.647044,
      "lon":-0.441708
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUCYD",
      "modes":[
         "tube"
      ],
      "icsCode":"1000049",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUCYD",
      "hubNaptanCode":"HUBCLW",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUCYD",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUCYD",
      "commonName":"Chorleywood Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Chorleywood Station,London Underground Ltd.,Station Approach,Chorleywood,Rickmansworth,Herts WD3 5ND"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"6"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCYD1",
            "modes":[

            ],
            "icsCode":"1000049",
            "stationNaptan":"940GZZLUCYD",
            "hubNaptanCode":"HUBCLW",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCYD1",
            "commonName":"Chorleywood Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUCYD2",
            "modes":[

            ],
            "icsCode":"1000049",
            "stationNaptan":"940GZZLUCYD",
            "hubNaptanCode":"HUBCLW",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUCYD2",
            "commonName":"Chorleywood Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.654359,
      "lon":-0.518453
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUEAE",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000066",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUEAE",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"282",
            "name":"282",
            "uri":"/Line/282"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"398",
            "name":"398",
            "uri":"/Line/398"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000066B",
            "stationAtcoCode":"490000066B",
            "lineIdentifier":[
               "282",
               "398"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000066K",
            "stationAtcoCode":"490000066K",
            "lineIdentifier":[
               "282",
               "398"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUEAE",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "282",
               "398"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLUEAE",
      "commonName":"Eastcote Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Eastcote Station,London Underground Ltd.,Field End Rd,Ruislip,Middx,HA5 1QZ"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"09:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUEAE1",
            "modes":[

            ],
            "icsCode":"1000066",
            "stationNaptan":"940GZZLUEAE",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUEAE1",
            "commonName":"Eastcote Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUEAE2",
            "modes":[

            ],
            "icsCode":"1000066",
            "stationNaptan":"940GZZLUEAE",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUEAE2",
            "commonName":"Eastcote Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.576504,
      "lon":-0.397376
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUESQ",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000078",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUESQ",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"10",
            "name":"10",
            "uri":"/Line/10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"18",
            "name":"18",
            "uri":"/Line/18"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"205",
            "name":"205",
            "uri":"/Line/205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"30",
            "name":"30",
            "uri":"/Line/30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"390",
            "name":"390",
            "uri":"/Line/390"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"73",
            "name":"73",
            "uri":"/Line/73"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n20",
            "name":"N20",
            "uri":"/Line/n20"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n205",
            "name":"N205",
            "uri":"/Line/n205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n253",
            "name":"N253",
            "uri":"/Line/n253"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n5",
            "name":"N5",
            "uri":"/Line/n5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n73",
            "name":"N73",
            "uri":"/Line/n73"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000078P",
            "stationAtcoCode":"490000078P",
            "lineIdentifier":[
               "10",
               "18",
               "205",
               "30",
               "390",
               "73",
               "n20",
               "n205",
               "n253",
               "n5",
               "n73"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000078Q",
            "stationAtcoCode":"490000078Q",
            "lineIdentifier":[
               "10",
               "18",
               "205",
               "30",
               "390",
               "73",
               "n20",
               "n205",
               "n253",
               "n5",
               "n73"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUESQ",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "10",
               "18",
               "205",
               "30",
               "390",
               "73",
               "n20",
               "n205",
               "n253",
               "n5",
               "n73"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUESQ",
      "commonName":"Euston Square Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"20:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"18:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"1 lift from street level to ticket hall and 1 lift from ticket hall to westbound platform only."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"16:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall, routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Euston Square Station,London Underground Ltd.,Euston Rd,London,NW1 2BN"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"You can only enter and exit the westbound   Hammersmith & City, Circle and Metropolitan  lines platform"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUESQ1",
            "modes":[

            ],
            "icsCode":"1000078",
            "stationNaptan":"940GZZLUESQ",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUESQ1",
            "commonName":"Euston Square Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUESQ2",
            "modes":[

            ],
            "icsCode":"1000078",
            "stationNaptan":"940GZZLUESQ",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUESQ2",
            "commonName":"Euston Square Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.525609,
      "lon":-0.135825
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUFCN",
      "modes":[
         "tube"
      ],
      "icsCode":"1000080",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUFCN",
      "hubNaptanCode":"HUBZFD",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUFCN",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUFCN",
      "commonName":"Farringdon Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"15:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Farringdon Station,London Underground Ltd.,Cowcross St,London,EC1M 6BY"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"22:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Boarding Ramps",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"17:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUFCN1",
            "modes":[

            ],
            "icsCode":"1000080",
            "stationNaptan":"940GZZLUFCN",
            "hubNaptanCode":"HUBZFD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUFCN1",
            "commonName":"Farringdon Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUFCN2",
            "modes":[

            ],
            "icsCode":"1000080",
            "stationNaptan":"940GZZLUFCN",
            "hubNaptanCode":"HUBZFD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUFCN2",
            "commonName":"Farringdon Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.520257,
      "lon":-0.104908
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUFYR",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000082",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUFYR",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"113",
            "name":"113",
            "uri":"/Line/113"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"13",
            "name":"13",
            "uri":"/Line/13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"187",
            "name":"187",
            "uri":"/Line/187"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"268",
            "name":"268",
            "uri":"/Line/268"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"82",
            "name":"82",
            "uri":"/Line/82"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"c11",
            "name":"C11",
            "uri":"/Line/c11"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"jubilee",
            "name":"Jubilee",
            "uri":"/Line/jubilee"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n113",
            "name":"N113",
            "uri":"/Line/n113"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n13",
            "name":"N13",
            "uri":"/Line/n13"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000082FJ",
            "stationAtcoCode":"490000082FJ",
            "lineIdentifier":[
               "113",
               "13",
               "187",
               "268",
               "82",
               "c11",
               "n113",
               "n13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000082FK",
            "stationAtcoCode":"490000082FK",
            "lineIdentifier":[
               "113",
               "13",
               "187",
               "268",
               "82",
               "n113",
               "n13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000082R",
            "stationAtcoCode":"490000082R",
            "lineIdentifier":[
               "c11"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUFYR",
            "lineIdentifier":[
               "jubilee"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUFYR",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "113",
               "13",
               "187",
               "268",
               "82",
               "c11",
               "n113",
               "n13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "jubilee",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUFYR",
      "commonName":"Finchley Road Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Finchley Road Underground Station,London Underground Ltd.,Finchley Road,London,NW3 6OP"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"20:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes (male, female, disabled/baby-changing facilities)"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUFYR1",
            "modes":[

            ],
            "icsCode":"1000082",
            "stationNaptan":"940GZZLUFYR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUFYR1",
            "commonName":"Finchley Road Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUFYR2",
            "modes":[

            ],
            "icsCode":"1000082",
            "stationNaptan":"940GZZLUFYR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUFYR2",
            "commonName":"Finchley Road Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUFYR3",
            "modes":[

            ],
            "icsCode":"1000082",
            "stationNaptan":"940GZZLUFYR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUFYR3",
            "commonName":"Finchley Road Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUFYR4",
            "modes":[

            ],
            "icsCode":"1000082",
            "stationNaptan":"940GZZLUFYR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUFYR4",
            "commonName":"Finchley Road Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.54683,
      "lon":-0.179842
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUGPS",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000091",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUGPS",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"18",
            "name":"18",
            "uri":"/Line/18"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"205",
            "name":"205",
            "uri":"/Line/205"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"27",
            "name":"27",
            "uri":"/Line/27"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"30",
            "name":"30",
            "uri":"/Line/30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"453",
            "name":"453",
            "uri":"/Line/453"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"88",
            "name":"88",
            "uri":"/Line/88"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"c2",
            "name":"C2",
            "uri":"/Line/c2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n18",
            "name":"N18",
            "uri":"/Line/n18"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n205",
            "name":"N205",
            "uri":"/Line/n205"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000091G",
            "stationAtcoCode":"490000091G",
            "lineIdentifier":[
               "18",
               "205",
               "27",
               "30",
               "n205"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000091H",
            "stationAtcoCode":"490000091H",
            "lineIdentifier":[
               "18",
               "205",
               "27",
               "30",
               "88",
               "n205"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000091E",
            "stationAtcoCode":"490000091E",
            "lineIdentifier":[
               "453",
               "88",
               "c2",
               "n18"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000091F",
            "stationAtcoCode":"490000091F",
            "lineIdentifier":[
               "453",
               "88",
               "c2",
               "n18"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUGPS",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "18",
               "205",
               "27",
               "30",
               "453",
               "88",
               "c2",
               "n18",
               "n205"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUGPS",
      "commonName":"Great Portland Street Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"15:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Great Portland Street Station,London Underground Ltd.,Euston Rd,London,NW1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"8"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUGPS1",
            "modes":[

            ],
            "icsCode":"1000091",
            "stationNaptan":"940GZZLUGPS",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUGPS1",
            "commonName":"Great Portland Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUGPS2",
            "modes":[

            ],
            "icsCode":"1000091",
            "stationNaptan":"940GZZLUGPS",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUGPS2",
            "commonName":"Great Portland Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.523845,
      "lon":-0.144258
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUHGD",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000111",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUHGD",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"697",
            "name":"697",
            "uri":"/Line/697"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"698",
            "name":"698",
            "uri":"/Line/698"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u2",
            "name":"U2",
            "uri":"/Line/u2"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000111N",
            "stationAtcoCode":"490000111N",
            "lineIdentifier":[
               "697",
               "698",
               "u2"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUHGD",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000111B",
            "stationAtcoCode":"490000111B",
            "lineIdentifier":[
               "u2"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "697",
               "698",
               "u2"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLUHGD",
      "commonName":"Hillingdon Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"yes (disabled only)"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets, routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Boarding Ramps",
            "sourceSystemKey":"StaticObjects",
            "value":"yes Metropolitan only"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Hillingdon Station,London Underground Ltd.,Long Lane,Hillingdon,Uxbridge,Middlesex,UB10 9NR"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUHGD1",
            "modes":[

            ],
            "icsCode":"1000111",
            "stationNaptan":"940GZZLUHGD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUHGD1",
            "commonName":"Hillingdon Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUHGD2",
            "modes":[

            ],
            "icsCode":"1000111",
            "stationNaptan":"940GZZLUHGD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUHGD2",
            "commonName":"Hillingdon Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.553712,
      "lon":-0.449818
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUHOH",
      "modes":[
         "tube"
      ],
      "icsCode":"1000102",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUHOH",
      "hubNaptanCode":"HUBHOH",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUHOH",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUHOH",
      "commonName":"Harrow-on-the-Hill Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"20:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"20:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"16"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes (male, female)"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"20:15"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUHOH1",
            "modes":[

            ],
            "icsCode":"1000102",
            "stationNaptan":"940GZZLUHOH",
            "hubNaptanCode":"HUBHOH",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUHOH1",
            "commonName":"Harrow-on-the-Hill Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUHOH2",
            "modes":[

            ],
            "icsCode":"1000102",
            "stationNaptan":"940GZZLUHOH",
            "hubNaptanCode":"HUBHOH",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUHOH2",
            "commonName":"Harrow-on-the-Hill Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.579202,
      "lon":-0.337226
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUICK",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000120",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUICK",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"697",
            "name":"697",
            "uri":"/Line/697"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"698",
            "name":"698",
            "uri":"/Line/698"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u10",
            "name":"U10",
            "uri":"/Line/u10"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000120D",
            "stationAtcoCode":"490000120D",
            "lineIdentifier":[
               "697",
               "698",
               "u10"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490013091C",
            "stationAtcoCode":"490013091C",
            "lineIdentifier":[
               "697",
               "698",
               "u10"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUICK",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "697",
               "698",
               "u10"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLUICK",
      "commonName":"Ickenham Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Ickenham Station,London Underground Ltd.,Glebe Avenue,Uxbridge,Middx,UB10 8PD"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"12:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUICK1",
            "modes":[

            ],
            "icsCode":"1000120",
            "stationNaptan":"940GZZLUICK",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUICK1",
            "commonName":"Ickenham Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUICK2",
            "modes":[

            ],
            "icsCode":"1000120",
            "stationNaptan":"940GZZLUICK",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUICK2",
            "commonName":"Ickenham Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.561989,
      "lon":-0.441991
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUKSX",
      "modes":[
         "tube"
      ],
      "icsCode":"1000129",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUKSX",
      "hubNaptanCode":"HUBKGX",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"northern",
            "name":"Northern",
            "uri":"/Line/northern"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"victoria",
            "name":"Victoria",
            "uri":"/Line/victoria"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUKSX",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUKSX",
            "lineIdentifier":[
               "northern"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUKSX",
            "lineIdentifier":[
               "piccadilly"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUKSX",
            "lineIdentifier":[
               "victoria"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan",
               "northern",
               "piccadilly",
               "victoria"
            ]
         }
      ],
      "id":"940GZZLUKSX",
      "commonName":"King's Cross St. Pancras Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"23:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan and Circle",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"23:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"19"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"22:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"none"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan and Circle",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"23:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"05:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"16:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"King's Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Northern",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"05:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan and Circle",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Metropolitan and Circle",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"ToiletNote",
            "sourceSystemKey":"LRAD",
            "value":"(National Rail)"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX3",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX3",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX4",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX4",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX5",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX5",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX6",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX6",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX7",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX7",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX1",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX1",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUKSX2",
            "modes":[

            ],
            "icsCode":"1000129",
            "stationNaptan":"940GZZLUKSX",
            "hubNaptanCode":"HUBKGX",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUKSX2",
            "commonName":"King's Cross St. Pancras Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.530668,
      "lon":-0.12319
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLULVT",
      "modes":[
         "tube"
      ],
      "icsCode":"1000138",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLULVT",
      "hubNaptanCode":"HUBLST",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"central",
            "name":"Central",
            "uri":"/Line/central"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLULVT",
            "lineIdentifier":[
               "central"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLULVT",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "central",
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLULVT",
      "commonName":"Liverpool Street Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"12 on platforms, 0 in ticket halls, 8 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall, routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"42"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Central",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Central",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Liverpool Street Underground Station Central,London Underground Ltd.,Liverpool Street,London,EC2M 7PP"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"05:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"ToiletNote",
            "sourceSystemKey":"LRAD",
            "value":"(National Rail)"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"You can only enter and exit the eastbound Hammersmith & City, Circle and Metropolitan lines platform."
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLULVT1",
            "modes":[

            ],
            "icsCode":"1000138",
            "stationNaptan":"940GZZLULVT",
            "hubNaptanCode":"HUBLST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLULVT1",
            "commonName":"Liverpool Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLULVT2",
            "modes":[

            ],
            "icsCode":"1000138",
            "stationNaptan":"940GZZLULVT",
            "hubNaptanCode":"HUBLST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLULVT2",
            "commonName":"Liverpool Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLULVT3",
            "modes":[

            ],
            "icsCode":"1000138",
            "stationNaptan":"940GZZLULVT",
            "hubNaptanCode":"HUBLST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLULVT3",
            "commonName":"Liverpool Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLULVT4",
            "modes":[

            ],
            "icsCode":"1000138",
            "stationNaptan":"940GZZLULVT",
            "hubNaptanCode":"HUBLST",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLULVT4",
            "commonName":"Liverpool Street Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.517377,
      "lon":-0.083176
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUMGT",
      "modes":[
         "tube"
      ],
      "icsCode":"1000149",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUMGT",
      "hubNaptanCode":"HUBZMG",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"circle",
            "name":"Circle",
            "uri":"/Line/circle"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"hammersmith-city",
            "name":"Hammersmith & City",
            "uri":"/Line/hammersmith-city"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"northern",
            "name":"Northern",
            "uri":"/Line/northern"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUMGT",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUMGT",
            "lineIdentifier":[
               "northern"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "circle",
               "hammersmith-city",
               "metropolitan",
               "northern"
            ]
         }
      ],
      "id":"940GZZLUMGT",
      "commonName":"Moorgate Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Moorgate Station,London Underground Ltd.,Moorfields,London,EC2Y 9AE"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"25"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"21:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall, routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Main",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:15"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMGT1",
            "modes":[

            ],
            "icsCode":"1000149",
            "stationNaptan":"940GZZLUMGT",
            "hubNaptanCode":"HUBZMG",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMGT1",
            "commonName":"Moorgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMGT2",
            "modes":[

            ],
            "icsCode":"1000149",
            "stationNaptan":"940GZZLUMGT",
            "hubNaptanCode":"HUBZMG",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMGT2",
            "commonName":"Moorgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMGT3",
            "modes":[

            ],
            "icsCode":"1000149",
            "stationNaptan":"940GZZLUMGT",
            "hubNaptanCode":"HUBZMG",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMGT3",
            "commonName":"Moorgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMGT4",
            "modes":[

            ],
            "icsCode":"1000149",
            "stationNaptan":"940GZZLUMGT",
            "hubNaptanCode":"HUBZMG",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMGT4",
            "commonName":"Moorgate Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.51818,
      "lon":-0.088317
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUMPK",
      "modes":[
         "tube"
      ],
      "icsCode":"1000150",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUMPK",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUMPK",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUMPK",
      "commonName":"Moor Park Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6+7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Moor Park Station,London Underground Ltd.,Sandy Lodge Lane,Rickmansworth,Herts,HA6 2JQ."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMPK1",
            "modes":[

            ],
            "icsCode":"1000150",
            "stationNaptan":"940GZZLUMPK",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMPK1",
            "commonName":"Moor Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMPK2",
            "modes":[

            ],
            "icsCode":"1000150",
            "stationNaptan":"940GZZLUMPK",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMPK2",
            "commonName":"Moor Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUMPK3",
            "modes":[

            ],
            "icsCode":"1000150",
            "stationNaptan":"940GZZLUMPK",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUMPK3",
            "commonName":"Moor Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.629844,
      "lon":-0.432443
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUNHA",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000161",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUNHA",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h10",
            "name":"H10",
            "uri":"/Line/h10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h9",
            "name":"H9",
            "uri":"/Line/h9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000161B",
            "stationAtcoCode":"490000161B",
            "lineIdentifier":[
               "h10"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000161A",
            "stationAtcoCode":"490000161A",
            "lineIdentifier":[
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUNHA",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "h10",
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUNHA",
      "commonName":"North Harrow Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"9 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"North Harrow Station,London Underground Ltd.,Station Rd,North Harrow,Middx,HA2 7SR"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNHA1",
            "modes":[

            ],
            "icsCode":"1000161",
            "stationNaptan":"940GZZLUNHA",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNHA1",
            "commonName":"North Harrow Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNHA2",
            "modes":[

            ],
            "icsCode":"1000161",
            "stationNaptan":"940GZZLUNHA",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNHA2",
            "commonName":"North Harrow Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.58487,
      "lon":-0.36241
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUNKP",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000164",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUNKP",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h10",
            "name":"H10",
            "uri":"/Line/h10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h18",
            "name":"H18",
            "uri":"/Line/h18"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h19",
            "name":"H19",
            "uri":"/Line/h19"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h9",
            "name":"H9",
            "uri":"/Line/h9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000164NN",
            "stationAtcoCode":"490000164NN",
            "lineIdentifier":[
               "h10",
               "h18"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000164MM",
            "stationAtcoCode":"490000164MM",
            "lineIdentifier":[
               "h19",
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUNKP",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "h10",
               "h18",
               "h19",
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUNKP",
      "commonName":"Northwick Park Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"15:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Northwick Park Station,London Underground Ltd.,Northwick Avenue,Harrow,Middx,HA3 0AT"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"18:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"routeways platform to ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"Use the interchange at this station to change between trains on the Uxbridge branch and trains towards Pinner.\r\nAt peak times another change may be needed at Harrow-on-the-hill for trains toward Amersham/Chesham. "
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNKP1",
            "modes":[

            ],
            "icsCode":"1000164",
            "stationNaptan":"940GZZLUNKP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNKP1",
            "commonName":"Northwick Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.578488,
      "lon":-0.318057
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUNOW",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000165",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUNOW",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"282",
            "name":"282",
            "uri":"/Line/282"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"331",
            "name":"331",
            "uri":"/Line/331"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h11",
            "name":"H11",
            "uri":"/Line/h11"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490015504C",
            "stationAtcoCode":"490015504C",
            "lineIdentifier":[
               "282",
               "h11"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490015504D",
            "stationAtcoCode":"490015504D",
            "lineIdentifier":[
               "282",
               "h11"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000165A",
            "stationAtcoCode":"490000165A",
            "lineIdentifier":[
               "331"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000165B",
            "stationAtcoCode":"490000165B",
            "lineIdentifier":[
               "331"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUNOW",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "282",
               "331",
               "h11"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUNOW",
      "commonName":"Northwood Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Northwood Station,London Underground Ltd.,Station Approach,Green Lane,Northwood,Middx,HA6 2XL"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"12 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNOW1",
            "modes":[

            ],
            "icsCode":"1000165",
            "stationNaptan":"940GZZLUNOW",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNOW1",
            "commonName":"Northwood Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNOW2",
            "modes":[

            ],
            "icsCode":"1000165",
            "stationNaptan":"940GZZLUNOW",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNOW2",
            "commonName":"Northwood Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.611052,
      "lon":-0.423818
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUNWH",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000166",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUNWH",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"282",
            "name":"282",
            "uri":"/Line/282"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h13",
            "name":"H13",
            "uri":"/Line/h13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000166A",
            "stationAtcoCode":"490000166A",
            "lineIdentifier":[
               "282",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUNWH",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "282",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUNWH",
      "commonName":"Northwood Hills Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Northwood Hills Station,London Underground Ltd.,Joel St,Northwood,Middx,HA6 1NZ"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"10 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNWH1",
            "modes":[

            ],
            "icsCode":"1000166",
            "stationNaptan":"940GZZLUNWH",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNWH1",
            "commonName":"Northwood Hills Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUNWH2",
            "modes":[

            ],
            "icsCode":"1000166",
            "stationNaptan":"940GZZLUNWH",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUNWH2",
            "commonName":"Northwood Hills Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.60057,
      "lon":-0.409453
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUPNR",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000181",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUPNR",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"183",
            "name":"183",
            "uri":"/Line/183"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h11",
            "name":"H11",
            "uri":"/Line/h11"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h12",
            "name":"H12",
            "uri":"/Line/h12"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h13",
            "name":"H13",
            "uri":"/Line/h13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000181B",
            "stationAtcoCode":"490000181B",
            "lineIdentifier":[
               "183",
               "h11",
               "h12",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490015522C",
            "stationAtcoCode":"490015522C",
            "lineIdentifier":[
               "183",
               "h11",
               "h12",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490015522E",
            "stationAtcoCode":"490015522E",
            "lineIdentifier":[
               "183"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUPNR",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "183",
               "h11",
               "h12",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUPNR",
      "commonName":"Pinner Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"15 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Pinner Station,London Underground Ltd.,Station Approach,Pinner,Middx,HA5 5LZ"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUPNR1",
            "modes":[

            ],
            "icsCode":"1000181",
            "stationNaptan":"940GZZLUPNR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUPNR1",
            "commonName":"Pinner Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUPNR2",
            "modes":[

            ],
            "icsCode":"1000181",
            "stationNaptan":"940GZZLUPNR",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUPNR2",
            "commonName":"Pinner Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.5929,
      "lon":-0.381164
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUPRD",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000183",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUPRD",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"204",
            "name":"204",
            "uri":"/Line/204"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"223",
            "name":"223",
            "uri":"/Line/223"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"79",
            "name":"79",
            "uri":"/Line/79"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000183A",
            "stationAtcoCode":"490000183A",
            "lineIdentifier":[
               "204",
               "223",
               "79"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000183B",
            "stationAtcoCode":"490000183B",
            "lineIdentifier":[
               "204",
               "223",
               "79"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490014820N",
            "stationAtcoCode":"490014820N",
            "lineIdentifier":[
               "204",
               "79"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUPRD",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "204",
               "223",
               "79"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUPRD",
      "commonName":"Preston Road Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Preston Road Station,London Underground Ltd.,Preston Rd,Wembley,Middx,HA3 0PS"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:45"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUPRD1",
            "modes":[

            ],
            "icsCode":"1000183",
            "stationNaptan":"940GZZLUPRD",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUPRD1",
            "commonName":"Preston Road Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.571979,
      "lon":-0.295107
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLURKW",
      "modes":[
         "tube"
      ],
      "icsCode":"1000193",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLURKW",
      "hubNaptanCode":"HUBRIC",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLURKW",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLURKW",
      "commonName":"Rickmansworth Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Boarding Ramps",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Rickmansworth Station,London Underground Ltd.,Station Approach,Rickmansworth,Herts,WD3 1QY"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"12"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"You can only enter and exit the southbound platform towards Liverpool Street"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURKW1",
            "modes":[

            ],
            "icsCode":"1000193",
            "stationNaptan":"940GZZLURKW",
            "hubNaptanCode":"HUBRIC",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURKW1",
            "commonName":"Rickmansworth Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURKW2",
            "modes":[

            ],
            "icsCode":"1000193",
            "stationNaptan":"940GZZLURKW",
            "hubNaptanCode":"HUBRIC",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURKW2",
            "commonName":"Rickmansworth Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.640207,
      "lon":-0.473693
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLURSM",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000199",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLURSM",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"114",
            "name":"114",
            "uri":"/Line/114"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"398",
            "name":"398",
            "uri":"/Line/398"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"696",
            "name":"696",
            "uri":"/Line/696"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h13",
            "name":"H13",
            "uri":"/Line/h13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000199A",
            "stationAtcoCode":"490000199A",
            "lineIdentifier":[
               "114",
               "398"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000199B",
            "stationAtcoCode":"490000199B",
            "lineIdentifier":[
               "114",
               "398"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000199C",
            "stationAtcoCode":"490000199C",
            "lineIdentifier":[
               "696",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000199D",
            "stationAtcoCode":"490000199D",
            "lineIdentifier":[
               "696",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLURSM",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "114",
               "398",
               "696",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLURSM",
      "commonName":"Ruislip Manor Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Ruislip Manor Station,London Underground Ltd.,Victoria Rd,Ruislip,Middx,HA4 9AA"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURSM1",
            "modes":[

            ],
            "icsCode":"1000199",
            "stationNaptan":"940GZZLURSM",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURSM1",
            "commonName":"Ruislip Manor Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURSM2",
            "modes":[

            ],
            "icsCode":"1000199",
            "stationNaptan":"940GZZLURSM",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURSM2",
            "commonName":"Ruislip Manor Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.5732,
      "lon":-0.412963
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLURSP",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000197",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLURSP",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"114",
            "name":"114",
            "uri":"/Line/114"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"331",
            "name":"331",
            "uri":"/Line/331"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"398",
            "name":"398",
            "uri":"/Line/398"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"e7",
            "name":"E7",
            "uri":"/Line/e7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h13",
            "name":"H13",
            "uri":"/Line/h13"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u1",
            "name":"U1",
            "uri":"/Line/u1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u10",
            "name":"U10",
            "uri":"/Line/u10"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000197A",
            "stationAtcoCode":"490000197A",
            "lineIdentifier":[
               "114",
               "398",
               "h13"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000197Z1",
            "stationAtcoCode":"490000197Z1",
            "lineIdentifier":[
               "114",
               "e7",
               "u1"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000197B",
            "stationAtcoCode":"490000197B",
            "lineIdentifier":[
               "331",
               "e7",
               "h13",
               "u1",
               "u10"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLURSP",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "114",
               "331",
               "398",
               "e7",
               "h13",
               "u1",
               "u10"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLURSP",
      "commonName":"Ruislip Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"12:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 8LD"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"12:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"You can only enter and exit the eastbound platform for Metropolitan line eastbound towards Liverpool Street and Piccadilly line  eastbound towards Oakwood"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURSP1",
            "modes":[

            ],
            "icsCode":"1000197",
            "stationNaptan":"940GZZLURSP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURSP1",
            "commonName":"Ruislip Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURSP2",
            "modes":[

            ],
            "icsCode":"1000197",
            "stationNaptan":"940GZZLURSP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURSP2",
            "commonName":"Ruislip Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.571351,
      "lon":-0.421887
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLURYL",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000189",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLURYL",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"398",
            "name":"398",
            "uri":"/Line/398"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h10",
            "name":"H10",
            "uri":"/Line/h10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h12",
            "name":"H12",
            "uri":"/Line/h12"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"h9",
            "name":"H9",
            "uri":"/Line/h9"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000189A",
            "stationAtcoCode":"490000189A",
            "lineIdentifier":[
               "398",
               "h10",
               "h12"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000189B",
            "stationAtcoCode":"490000189B",
            "lineIdentifier":[
               "398",
               "h12",
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000189C",
            "stationAtcoCode":"490000189C",
            "lineIdentifier":[
               "398",
               "h12",
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLURYL",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "398",
               "h10",
               "h12",
               "h9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLURYL",
      "commonName":"Rayners Lane Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Rayners Lane Station,London Underground Ltd.,Alexandra Avenue,Harrow,HA5 5EG,Middx"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"13:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"16:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"18:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"14:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"09:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"15:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURYL1",
            "modes":[

            ],
            "icsCode":"1000189",
            "stationNaptan":"940GZZLURYL",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURYL1",
            "commonName":"Rayners Lane Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLURYL2",
            "modes":[

            ],
            "icsCode":"1000189",
            "stationNaptan":"940GZZLURYL",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLURYL2",
            "commonName":"Rayners Lane Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.575154,
      "lon":-0.37113
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUUXB",
      "modes":[
         "tube",
         "bus"
      ],
      "icsCode":"1000246",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUUXB",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"222",
            "name":"222",
            "uri":"/Line/222"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"331",
            "name":"331",
            "uri":"/Line/331"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"427",
            "name":"427",
            "uri":"/Line/427"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"607",
            "name":"607",
            "uri":"/Line/607"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"a10",
            "name":"A10",
            "uri":"/Line/a10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"n207",
            "name":"N207",
            "uri":"/Line/n207"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"piccadilly",
            "name":"Piccadilly",
            "uri":"/Line/piccadilly"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u1",
            "name":"U1",
            "uri":"/Line/u1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u10",
            "name":"U10",
            "uri":"/Line/u10"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u2",
            "name":"U2",
            "uri":"/Line/u2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u3",
            "name":"U3",
            "uri":"/Line/u3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u4",
            "name":"U4",
            "uri":"/Line/u4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u5",
            "name":"U5",
            "uri":"/Line/u5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u7",
            "name":"U7",
            "uri":"/Line/u7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"u9",
            "name":"U9",
            "uri":"/Line/u9"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000246M",
            "stationAtcoCode":"490000246M",
            "lineIdentifier":[
               "222",
               "a10",
               "u1",
               "u3"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000246L",
            "stationAtcoCode":"490000246L",
            "lineIdentifier":[
               "331",
               "u1",
               "u10",
               "u9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000246O",
            "stationAtcoCode":"490000246O",
            "lineIdentifier":[
               "427",
               "607",
               "n207",
               "u7"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUUXB",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000246N",
            "stationAtcoCode":"490000246N",
            "lineIdentifier":[
               "u2"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000246K",
            "stationAtcoCode":"490000246K",
            "lineIdentifier":[
               "u4",
               "u5"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "222",
               "331",
               "427",
               "607",
               "a10",
               "n207",
               "u1",
               "u10",
               "u2",
               "u3",
               "u4",
               "u5",
               "u7",
               "u9"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan",
               "piccadilly"
            ]
         }
      ],
      "id":"940GZZLUUXB",
      "commonName":"Uxbridge Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"20:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Boarding Ramps",
            "sourceSystemKey":"StaticObjects",
            "value":"yes Metropolitan only"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"6"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"electronic whiteboards in ticket hall, post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"19:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Uxbridge Station,London Underground Ltd.,High St,Uxbridge,Middx,UB8 1JZ"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"08:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"21:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"No"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUUXB1",
            "modes":[

            ],
            "icsCode":"1000246",
            "stationNaptan":"940GZZLUUXB",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUUXB1",
            "commonName":"Uxbridge Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.546563,
      "lon":-0.47794
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUWAF",
      "modes":[
         "tube"
      ],
      "icsCode":"1000255",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUWAF",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUWAF",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUWAF",
      "commonName":"Watford Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"10:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"7 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"11:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"11:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Watford Station,London Underground Ltd.,Cassiobury Park Avenue,Watford,Herts,WD18 7LE"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Euro Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"7"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"3"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"12:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWAF1",
            "modes":[

            ],
            "icsCode":"1000255",
            "stationNaptan":"940GZZLUWAF",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWAF1",
            "commonName":"Watford Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.657446,
      "lon":-0.41738
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUWHW",
      "modes":[
         "tube"
      ],
      "icsCode":"1000264",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUWHW",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUWHW",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUWHW",
      "commonName":"West Harrow Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"no"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"West Harrow Station,London Underground Ltd.,Vaughan Rd,Harrow,Middx,HA1 4HE"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWHW1",
            "modes":[

            ],
            "icsCode":"1000264",
            "stationNaptan":"940GZZLUWHW",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWHW1",
            "commonName":"West Harrow Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWHW2",
            "modes":[

            ],
            "icsCode":"1000264",
            "stationNaptan":"940GZZLUWHW",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWHW2",
            "commonName":"West Harrow Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.579717,
      "lon":-0.353401
   },
   {
      "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
      "naptanId":"940GZZLUWYP",
      "modes":[
         "bus",
         "tube"
      ],
      "icsCode":"1000257",
      "stopType":"NaptanMetroStation",
      "stationNaptan":"940GZZLUWYP",
      "lines":[
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"182",
            "name":"182",
            "uri":"/Line/182"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"206",
            "name":"206",
            "uri":"/Line/206"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"223",
            "name":"223",
            "uri":"/Line/223"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"297",
            "name":"297",
            "uri":"/Line/297"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"83",
            "name":"83",
            "uri":"/Line/83"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"jubilee",
            "name":"Jubilee",
            "uri":"/Line/jubilee"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id":"metropolitan",
            "name":"Metropolitan",
            "uri":"/Line/metropolitan"
         }
      ],
      "lineGroup":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000257N",
            "stationAtcoCode":"490000257N",
            "lineIdentifier":[
               "182",
               "83"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000257O",
            "stationAtcoCode":"490000257O",
            "lineIdentifier":[
               "182",
               "206",
               "223",
               "297",
               "83"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "naptanIdReference":"490000257M",
            "stationAtcoCode":"490000257M",
            "lineIdentifier":[
               "206",
               "223",
               "297"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUWYP",
            "lineIdentifier":[
               "jubilee"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode":"940GZZLUWYP",
            "lineIdentifier":[
               "metropolitan"
            ]
         }
      ],
      "lineModeGroups":[
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"bus",
            "lineIdentifier":[
               "182",
               "206",
               "223",
               "297",
               "83"
            ]
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName":"tube",
            "lineIdentifier":[
               "jubilee",
               "metropolitan"
            ]
         }
      ],
      "id":"940GZZLUWYP",
      "commonName":"Wembley Park Underground Station",
      "placeType":"StopPoint",
      "additionalProperties":[
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Stadium",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bridge Road",
            "key":"MonFriFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"PhoneNo",
            "sourceSystemKey":"StaticObjects",
            "value":"0845 330 9880"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Stadium",
            "key":"SatFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"06:30"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Stadium",
            "key":"SatTo",
            "sourceSystemKey":"StaticObjects",
            "value":"00:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Stadium",
            "key":"SunTo",
            "sourceSystemKey":"StaticObjects",
            "value":"23:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Waiting Room",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Help Points",
            "sourceSystemKey":"StaticObjects",
            "value":"0 on platforms, 0 in ticket halls, 0 elsewhere"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Lifts",
            "sourceSystemKey":"StaticObjects",
            "value":"5"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Toilets",
            "sourceSystemKey":"StaticObjects",
            "value":"yes (male, female, disabled/baby-changing facilities)"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Boarding Ramps",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Other Facilities",
            "sourceSystemKey":"StaticObjects",
            "value":"taxi ranks outside station, post office style queuing for tickets."
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Photo Booths",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Escalators",
            "sourceSystemKey":"StaticObjects",
            "value":"0"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Bridge",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Stadium",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"23:00"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Payphones",
            "sourceSystemKey":"StaticObjects",
            "value":"2"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Stadium",
            "key":"SunFrom",
            "sourceSystemKey":"StaticObjects",
            "value":"07:45"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Car park",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Gates",
            "sourceSystemKey":"StaticObjects",
            "value":"33"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Address",
            "key":"Address",
            "sourceSystemKey":"StaticObjects",
            "value":"Wembley Park Station,London Underground Ltd.,Bridge Road,Wembley,Middlesex,HA9 9AA"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Opening Time - Bridge Road",
            "key":"MonFriTo",
            "sourceSystemKey":"StaticObjects",
            "value":"10:15"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Ticket Halls",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Geo",
            "key":"Zone",
            "sourceSystemKey":"StaticObjects",
            "value":"4"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"Cash Machines",
            "sourceSystemKey":"StaticObjects",
            "value":"1"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Facility",
            "key":"WiFi",
            "sourceSystemKey":"StaticObjects",
            "value":"yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"LimitedCapacityLift",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AccessViaLift",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"TaxiRankOutsideStation",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"Toilet",
            "sourceSystemKey":"LRAD",
            "value":"Yes"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"SpecificEntranceRequired",
            "sourceSystemKey":"LRAD",
            "value":"No"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"AddtionalInformation",
            "sourceSystemKey":"LRAD",
            "value":"If you are travelling to Wembley Park from  stations east of Westminster and require level  access, please ensure that you board the  correct carriage. If you are travelling to  Wembley Park from Green Park and require  level access, please continue to Ki"
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category":"Accessibility",
            "key":"BlueBadgeCarParkSpaces",
            "sourceSystemKey":"LRAD",
            "value":"6"
         }
      ],
      "children":[
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWYP1",
            "modes":[

            ],
            "icsCode":"1000257",
            "stationNaptan":"940GZZLUWYP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWYP1",
            "commonName":"Wembley Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWYP2",
            "modes":[

            ],
            "icsCode":"1000257",
            "stationNaptan":"940GZZLUWYP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWYP2",
            "commonName":"Wembley Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWYP3",
            "modes":[

            ],
            "icsCode":"1000257",
            "stationNaptan":"940GZZLUWYP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWYP3",
            "commonName":"Wembley Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         },
         {
            "$type":"Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId":"9400ZZLUWYP4",
            "modes":[

            ],
            "icsCode":"1000257",
            "stationNaptan":"940GZZLUWYP",
            "lines":[

            ],
            "lineGroup":[

            ],
            "lineModeGroups":[

            ],
            "id":"9400ZZLUWYP4",
            "commonName":"Wembley Park Underground Station",
            "placeType":"StopPoint",
            "additionalProperties":[

            ],
            "children":[

            ],
            "lat":0.0,
            "lon":0.0
         }
      ],
      "lat":51.563204,
      "lon":-0.279261
   }
]