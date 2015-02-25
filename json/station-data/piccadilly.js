[
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "910GENFCOAK",
    "modes": [
      "national-rail",
      "tube",
      "bus"
    ],
    "icsCode": "1000168",
    "stopType": "NaptanRailStation",
    "stationNaptan": "910GENFCOAK",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "121",
        "name": "121",
        "uri": "/Line/121"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "307",
        "name": "307",
        "uri": "/Line/307"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "377",
        "name": "377",
        "uri": "/Line/377"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000168A",
        "stationAtcoCode": "490000168A",
        "lineIdentifier": [
          "121",
          "307",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000168B",
        "stationAtcoCode": "490000168B",
        "lineIdentifier": [
          "377"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUOAK",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "121",
          "307",
          "377",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "910GENFCOAK",
    "commonName": "Oakwood Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "15:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "17:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Oakwood Station,London Underground Ltd.,Bramley Rd,London,N14 4UT"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "15:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "940GZZLUOAK",
        "modes": [
          "tube"
        ],
        "icsCode": "1000168",
        "stopType": "NaptanMetroStation",
        "stationNaptan": "940GZZLUOAK",
        "lines": [
          {
            "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
            "id": "piccadilly",
            "name": "Piccadilly",
            "uri": "/Line/piccadilly"
          }
        ],
        "lineGroup": [
          {
            "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
            "stationAtcoCode": "940GZZLUOAK",
            "lineIdentifier": [
              "piccadilly"
            ]
          }
        ],
        "lineModeGroups": [
          {
            "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
            "modeName": "tube",
            "lineIdentifier": [
              "piccadilly"
            ]
          }
        ],
        "id": "940GZZLUOAK",
        "commonName": "Oakwood Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "WiFi",
            "sourceSystemKey": "StaticObjects",
            "value": "no"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Escalators",
            "sourceSystemKey": "StaticObjects",
            "value": "0"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "MonFriTo",
            "sourceSystemKey": "StaticObjects",
            "value": "11:00"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "SatFrom",
            "sourceSystemKey": "StaticObjects",
            "value": "09:15"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Bridge",
            "sourceSystemKey": "StaticObjects",
            "value": "yes"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Car park",
            "sourceSystemKey": "StaticObjects",
            "value": "yes"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Cash Machines",
            "sourceSystemKey": "StaticObjects",
            "value": "0"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "MonFriTo",
            "sourceSystemKey": "StaticObjects",
            "value": "20:00"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "SatTo",
            "sourceSystemKey": "StaticObjects",
            "value": "15:30"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Gates",
            "sourceSystemKey": "StaticObjects",
            "value": "3"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Lifts",
            "sourceSystemKey": "StaticObjects",
            "value": "1"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Ticket Halls",
            "sourceSystemKey": "StaticObjects",
            "value": "1"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Help Points",
            "sourceSystemKey": "StaticObjects",
            "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Address",
            "key": "Address",
            "sourceSystemKey": "StaticObjects",
            "value": "Oakwood Station,London Underground Ltd.,Bramley Rd,London,N14 4UT"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Address",
            "key": "PhoneNo",
            "sourceSystemKey": "StaticObjects",
            "value": "0845 330 9880"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "SatFrom",
            "sourceSystemKey": "StaticObjects",
            "value": "17:30"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "SunFrom",
            "sourceSystemKey": "StaticObjects",
            "value": "10:00"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Waiting Room",
            "sourceSystemKey": "StaticObjects",
            "value": "yes"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "SunTo",
            "sourceSystemKey": "StaticObjects",
            "value": "13:30"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Geo",
            "key": "Zone",
            "sourceSystemKey": "StaticObjects",
            "value": "5"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "SatTo",
            "sourceSystemKey": "StaticObjects",
            "value": "19:00"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Payphones",
            "sourceSystemKey": "StaticObjects",
            "value": "2"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Toilets",
            "sourceSystemKey": "StaticObjects",
            "value": "yes"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "MonFriFrom",
            "sourceSystemKey": "StaticObjects",
            "value": "15:30"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Opening Time",
            "key": "MonFriFrom",
            "sourceSystemKey": "StaticObjects",
            "value": "07:00"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Facility",
            "key": "Photo Booths",
            "sourceSystemKey": "StaticObjects",
            "value": "0"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Accessibility",
            "key": "TaxiRankOutsideStation",
            "sourceSystemKey": "LRAD",
            "value": "No"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Accessibility",
            "key": "Toilet",
            "sourceSystemKey": "LRAD",
            "value": "No"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Accessibility",
            "key": "AccessViaLift",
            "sourceSystemKey": "LRAD",
            "value": "Yes"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Accessibility",
            "key": "SpecificEntranceRequired",
            "sourceSystemKey": "LRAD",
            "value": "No"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Accessibility",
            "key": "BlueBadgeCarParkSpaces",
            "sourceSystemKey": "LRAD",
            "value": "6"
          },
          {
            "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
            "category": "Accessibility",
            "key": "LimitedCapacityLift",
            "sourceSystemKey": "LRAD",
            "value": "No"
          }
        ],
        "children": [
          {
            "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
            "naptanId": "9400ZZLUOAK1",
            "modes": [
              
            ],
            "icsCode": "1000168",
            "stationNaptan": "940GZZLUOAK",
            "lines": [
              
            ],
            "lineGroup": [
              
            ],
            "lineModeGroups": [
              
            ],
            "id": "9400ZZLUOAK1",
            "commonName": "Oakwood Underground Station",
            "placeType": "StopPoint",
            "additionalProperties": [
              
            ],
            "children": [
              
            ],
            "lat": 0.0,
            "lon": 0.0
          }
        ],
        "lat": 51.647734,
        "lon": -0.132177
      }
    ],
    "lat": 51.647734,
    "lon": -0.132177
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUACT",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000002",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUACT",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "e3",
        "name": "E3",
        "uri": "/Line/e3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n11",
        "name": "N11",
        "uri": "/Line/n11"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUACT",
        "lineIdentifier": [
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000002A",
        "stationAtcoCode": "490000002A",
        "lineIdentifier": [
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000002B",
        "stationAtcoCode": "490000002B",
        "lineIdentifier": [
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUACT",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "e3",
          "n11"
        ]
      }
    ],
    "id": "940GZZLUACT",
    "commonName": "Acton Town Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Acton Town Station,London Underground Ltd.,Gunnersbury Lane,London,W3 8HN"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUACT1",
        "modes": [
          
        ],
        "icsCode": "1000002",
        "stationNaptan": "940GZZLUACT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUACT1",
        "commonName": "Acton Town Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUACT2",
        "modes": [
          
        ],
        "icsCode": "1000002",
        "stationNaptan": "940GZZLUACT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUACT2",
        "commonName": "Acton Town Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUACT3",
        "modes": [
          
        ],
        "icsCode": "1000002",
        "stationNaptan": "940GZZLUACT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUACT3",
        "commonName": "Acton Town Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUACT4",
        "modes": [
          
        ],
        "icsCode": "1000002",
        "stationNaptan": "940GZZLUACT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUACT4",
        "commonName": "Acton Town Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.503062,
    "lon": -0.280462
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUALP",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000005",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUALP",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "224",
        "name": "224",
        "uri": "/Line/224"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "245",
        "name": "245",
        "uri": "/Line/245"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "297",
        "name": "297",
        "uri": "/Line/297"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "487",
        "name": "487",
        "uri": "/Line/487"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "79",
        "name": "79",
        "uri": "/Line/79"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "83",
        "name": "83",
        "uri": "/Line/83"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000005A",
        "stationAtcoCode": "490000005A",
        "lineIdentifier": [
          "224",
          "297",
          "79",
          "83"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000005B",
        "stationAtcoCode": "490000005B",
        "lineIdentifier": [
          "224",
          "297",
          "79",
          "83"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490003264C",
        "stationAtcoCode": "490003264C",
        "lineIdentifier": [
          "245",
          "487"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490003264D",
        "stationAtcoCode": "490003264D",
        "lineIdentifier": [
          "245",
          "487"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUALP",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "224",
          "245",
          "297",
          "487",
          "79",
          "83"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUALP",
    "commonName": "Alperton Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "12:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Alperton Station,London Underground Ltd.,Ealing Rd,Wembley,Middlesex,HA0 4LL"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUALP1",
        "modes": [
          
        ],
        "icsCode": "1000005",
        "stationNaptan": "940GZZLUALP",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUALP1",
        "commonName": "Alperton Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUALP2",
        "modes": [
          
        ],
        "icsCode": "1000005",
        "stationNaptan": "940GZZLUALP",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUALP2",
        "commonName": "Alperton Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.540633,
    "lon": -0.29961
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUASG",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000009",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUASG",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "184",
        "name": "184",
        "uri": "/Line/184"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "232",
        "name": "232",
        "uri": "/Line/232"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "251",
        "name": "251",
        "uri": "/Line/251"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "298",
        "name": "298",
        "uri": "/Line/298"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "34",
        "name": "34",
        "uri": "/Line/34"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "382",
        "name": "382",
        "uri": "/Line/382"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000009A",
        "stationAtcoCode": "490000009A",
        "lineIdentifier": [
          "184",
          "232",
          "34",
          "382",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000009W",
        "stationAtcoCode": "490000009W",
        "lineIdentifier": [
          "184",
          "232",
          "34",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000009E1",
        "stationAtcoCode": "490000009E1",
        "lineIdentifier": [
          "251",
          "298"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000009W1",
        "stationAtcoCode": "490000009W1",
        "lineIdentifier": [
          "251",
          "298"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUASG",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "184",
          "232",
          "251",
          "298",
          "34",
          "382",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUASG",
    "commonName": "Arnos Grove Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Arnos Grove Station,London Underground Ltd.,Bowes Rd,London,N11 1AN"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "16:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUASG1",
        "modes": [
          
        ],
        "icsCode": "1000009",
        "stationNaptan": "940GZZLUASG",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUASG1",
        "commonName": "Arnos Grove Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.616454,
    "lon": -0.133058
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUASL",
    "modes": [
      "tube"
    ],
    "icsCode": "1000010",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUASL",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUASL",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUASL",
    "commonName": "Arsenal Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Arsenal Station,London Underground Ltd.,Highbury Hill,London,N5 1LP"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUASL1",
        "modes": [
          
        ],
        "icsCode": "1000010",
        "stationNaptan": "940GZZLUASL",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUASL1",
        "commonName": "Arsenal Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.558661,
    "lon": -0.107452
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUBDS",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000028",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUBDS",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "102",
        "name": "102",
        "uri": "/Line/102"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "184",
        "name": "184",
        "uri": "/Line/184"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "221",
        "name": "221",
        "uri": "/Line/221"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "299",
        "name": "299",
        "uri": "/Line/299"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000028C",
        "stationAtcoCode": "490000028C",
        "lineIdentifier": [
          "102",
          "184",
          "299"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000028D",
        "stationAtcoCode": "490000028D",
        "lineIdentifier": [
          "102",
          "184",
          "299"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000028A",
        "stationAtcoCode": "490000028A",
        "lineIdentifier": [
          "221",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000028B",
        "stationAtcoCode": "490000028B",
        "lineIdentifier": [
          "221",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUBDS",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "102",
          "184",
          "221",
          "299",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUBDS",
    "commonName": "Bounds Green Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3+4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Bounds Green Station,London Underground Ltd.,Bounds Green Rd,London,N11 2EU"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBDS1",
        "modes": [
          
        ],
        "icsCode": "1000028",
        "stationNaptan": "940GZZLUBDS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBDS1",
        "commonName": "Bounds Green Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.607042,
    "lon": -0.12423
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUBOS",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000027",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUBOS",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "195",
        "name": "195",
        "uri": "/Line/195"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "e8",
        "name": "E8",
        "uri": "/Line/e8"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000027A",
        "stationAtcoCode": "490000027A",
        "lineIdentifier": [
          "195",
          "e8"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000027B",
        "stationAtcoCode": "490000027B",
        "lineIdentifier": [
          "195",
          "e8"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUBOS",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "195",
          "e8"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUBOS",
    "commonName": "Boston Manor Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "12:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Boston Manor Station,London Underground Ltd.,Boston Manor Rd,Brentford,Middx,TW8 9LQ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBOS1",
        "modes": [
          
        ],
        "icsCode": "1000027",
        "stationNaptan": "940GZZLUBOS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBOS1",
        "commonName": "Boston Manor Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBOS2",
        "modes": [
          
        ],
        "icsCode": "1000027",
        "stationNaptan": "940GZZLUBOS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBOS2",
        "commonName": "Boston Manor Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.495639,
    "lon": -0.324941
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUBSC",
    "modes": [
      "tube"
    ],
    "icsCode": "1000017",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUBSC",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUBSC",
        "lineIdentifier": [
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUBSC",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUBSC",
    "commonName": "Barons Court Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes - male & female coin op"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "canopies over platform, post office style queuing for tickets."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "15:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Barons Court Station,London Underground Ltd.,Pallister Rd,London,W14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBSC1",
        "modes": [
          
        ],
        "icsCode": "1000017",
        "stationNaptan": "940GZZLUBSC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBSC1",
        "commonName": "Barons Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBSC2",
        "modes": [
          
        ],
        "icsCode": "1000017",
        "stationNaptan": "940GZZLUBSC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBSC2",
        "commonName": "Barons Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBSC3",
        "modes": [
          
        ],
        "icsCode": "1000017",
        "stationNaptan": "940GZZLUBSC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBSC3",
        "commonName": "Barons Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUBSC4",
        "modes": [
          
        ],
        "icsCode": "1000017",
        "stationNaptan": "940GZZLUBSC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUBSC4",
        "commonName": "Barons Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.490315,
    "lon": -0.213425
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUCAR",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000035",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUCAR",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "17",
        "name": "17",
        "uri": "/Line/17"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "259",
        "name": "259",
        "uri": "/Line/259"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "91",
        "name": "91",
        "uri": "/Line/91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000035A",
        "stationAtcoCode": "490000035A",
        "lineIdentifier": [
          "17",
          "259",
          "91",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000035D",
        "stationAtcoCode": "490000035D",
        "lineIdentifier": [
          "17",
          "259",
          "91",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUCAR",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "17",
          "259",
          "91",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUCAR",
    "commonName": "Caledonian Road Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "16:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "16:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "16:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "4 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Boarding Ramps",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Caledonian Road Underground Station,London Underground Ltd.,Caledonian Rd,London,N7 9BA"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUCAR1",
        "modes": [
          
        ],
        "icsCode": "1000035",
        "stationNaptan": "940GZZLUCAR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUCAR1",
        "commonName": "Caledonian Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.548524,
    "lon": -0.118489
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUCGN",
    "modes": [
      "tube"
    ],
    "icsCode": "1000056",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUCGN",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUCGN",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUCGN",
    "commonName": "Covent Garden Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Covent Garden Station,London Underground Ltd.,Long Acre,London,WC2E 9JT"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "10"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUCGN1",
        "modes": [
          
        ],
        "icsCode": "1000056",
        "stationNaptan": "940GZZLUCGN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUCGN1",
        "commonName": "Covent Garden Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.513098,
    "lon": -0.124431
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUCKS",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000053",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUCKS",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "298",
        "name": "298",
        "uri": "/Line/298"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "299",
        "name": "299",
        "uri": "/Line/299"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "384",
        "name": "384",
        "uri": "/Line/384"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "692",
        "name": "692",
        "uri": "/Line/692"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "699",
        "name": "699",
        "uri": "/Line/699"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000053A",
        "stationAtcoCode": "490000053A",
        "lineIdentifier": [
          "298",
          "699"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000053B",
        "stationAtcoCode": "490000053B",
        "lineIdentifier": [
          "298",
          "299",
          "384",
          "692",
          "699",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000053N2",
        "stationAtcoCode": "490000053N2",
        "lineIdentifier": [
          "299",
          "384",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUCKS",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "298",
          "299",
          "384",
          "692",
          "699",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUCKS",
    "commonName": "Cockfosters Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "12:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Cockfosters Station,London Underground Ltd.,Cockfosters Rd,Barnet,Herts,EN4 0DZ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "15:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "17:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUCKS1",
        "modes": [
          
        ],
        "icsCode": "1000053",
        "stationNaptan": "940GZZLUCKS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUCKS1",
        "commonName": "Cockfosters Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.651519,
    "lon": -0.149167
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUEAE",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000066",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUEAE",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "282",
        "name": "282",
        "uri": "/Line/282"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "398",
        "name": "398",
        "uri": "/Line/398"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000066B",
        "stationAtcoCode": "490000066B",
        "lineIdentifier": [
          "282",
          "398"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000066K",
        "stationAtcoCode": "490000066K",
        "lineIdentifier": [
          "282",
          "398"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUEAE",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "282",
          "398"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUEAE",
    "commonName": "Eastcote Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "12:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "12:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Eastcote Station,London Underground Ltd.,Field End Rd,Ruislip,Middx,HA5 1QZ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUEAE1",
        "modes": [
          
        ],
        "icsCode": "1000066",
        "stationNaptan": "940GZZLUEAE",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUEAE1",
        "commonName": "Eastcote Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUEAE2",
        "modes": [
          
        ],
        "icsCode": "1000066",
        "stationNaptan": "940GZZLUEAE",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUEAE2",
        "commonName": "Eastcote Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.576504,
    "lon": -0.397376
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUECM",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000063",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUECM",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "207",
        "name": "207",
        "uri": "/Line/207"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "427",
        "name": "427",
        "uri": "/Line/427"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "607",
        "name": "607",
        "uri": "/Line/607"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n207",
        "name": "N207",
        "uri": "/Line/n207"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n7",
        "name": "N7",
        "uri": "/Line/n7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000063S",
        "stationAtcoCode": "490000063S",
        "lineIdentifier": [
          "207",
          "427",
          "607",
          "n207",
          "n7"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000063U",
        "stationAtcoCode": "490000063U",
        "lineIdentifier": [
          "207",
          "427",
          "607",
          "n207",
          "n7"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUECM",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "207",
          "427",
          "607",
          "n207",
          "n7"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUECM",
    "commonName": "Ealing Common Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Ealing Common Station,London Underground Ltd.,Uxbridge Rd,London,W5 3LD"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "10:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUECM1",
        "modes": [
          
        ],
        "icsCode": "1000063",
        "stationNaptan": "940GZZLUECM",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUECM1",
        "commonName": "Ealing Common Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUECM2",
        "modes": [
          
        ],
        "icsCode": "1000063",
        "stationNaptan": "940GZZLUECM",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUECM2",
        "commonName": "Ealing Common Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.510145,
    "lon": -0.288265
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUECT",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000064",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUECT",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "328",
        "name": "328",
        "uri": "/Line/328"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "74",
        "name": "74",
        "uri": "/Line/74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "c1",
        "name": "C1",
        "uri": "/Line/c1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "c3",
        "name": "C3",
        "uri": "/Line/c3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n31",
        "name": "N31",
        "uri": "/Line/n31"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n74",
        "name": "N74",
        "uri": "/Line/n74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000064A",
        "stationAtcoCode": "490000064A",
        "lineIdentifier": [
          "328",
          "74",
          "c1",
          "c3",
          "n31",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000064C",
        "stationAtcoCode": "490000064C",
        "lineIdentifier": [
          "328",
          "74",
          "c1",
          "c3",
          "n31",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUECT",
        "lineIdentifier": [
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUECT",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "328",
          "74",
          "c1",
          "c3",
          "n31",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUECT",
    "commonName": "Earl's Court Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Earl's Court Station,London Underground Ltd.,Earl's Court Rd,London,SW5 9QA"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "canopies over platform (full), routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "16:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "15:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "20"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1+2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "17:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "17:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Warwick Road",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Boarding Ramps",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUECT1",
        "modes": [
          
        ],
        "icsCode": "1000064",
        "stationNaptan": "940GZZLUECT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUECT1",
        "commonName": "Earl's Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUECT2",
        "modes": [
          
        ],
        "icsCode": "1000064",
        "stationNaptan": "940GZZLUECT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUECT2",
        "commonName": "Earl's Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUECT3",
        "modes": [
          
        ],
        "icsCode": "1000064",
        "stationNaptan": "940GZZLUECT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUECT3",
        "commonName": "Earl's Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUECT4",
        "modes": [
          
        ],
        "icsCode": "1000064",
        "stationNaptan": "940GZZLUECT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUECT4",
        "commonName": "Earl's Court Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.492067,
    "lon": -0.193376
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUFPK",
    "modes": [
      "tube"
    ],
    "icsCode": "1000083",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUFPK",
    "hubNaptanCode": "HUBFPK",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "victoria",
        "name": "Victoria",
        "uri": "/Line/victoria"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUFPK",
        "lineIdentifier": [
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUFPK",
        "lineIdentifier": [
          "victoria"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly",
          "victoria"
        ]
      }
    ],
    "id": "940GZZLUFPK",
    "commonName": "Finsbury Park Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "electronic whiteboards in ticket hall, subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "12 on platforms, 0 in ticket halls, 5 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Finsbury Park Underground Station,London Underground Ltd.,Wells Terrace,London,N4 3JU"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUFPK1",
        "modes": [
          
        ],
        "icsCode": "1000083",
        "stationNaptan": "940GZZLUFPK",
        "hubNaptanCode": "HUBFPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUFPK1",
        "commonName": "Finsbury Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUFPK2",
        "modes": [
          
        ],
        "icsCode": "1000083",
        "stationNaptan": "940GZZLUFPK",
        "hubNaptanCode": "HUBFPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUFPK2",
        "commonName": "Finsbury Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUFPK3",
        "modes": [
          
        ],
        "icsCode": "1000083",
        "stationNaptan": "940GZZLUFPK",
        "hubNaptanCode": "HUBFPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUFPK3",
        "commonName": "Finsbury Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUFPK4",
        "modes": [
          
        ],
        "icsCode": "1000083",
        "stationNaptan": "940GZZLUFPK",
        "hubNaptanCode": "HUBFPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUFPK4",
        "commonName": "Finsbury Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.564164,
    "lon": -0.106819
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUGPK",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000093",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUGPK",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "14",
        "name": "14",
        "uri": "/Line/14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "19",
        "name": "19",
        "uri": "/Line/19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "22",
        "name": "22",
        "uri": "/Line/22"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "38",
        "name": "38",
        "uri": "/Line/38"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "9",
        "name": "9",
        "uri": "/Line/9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "c2",
        "name": "C2",
        "uri": "/Line/c2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "jubilee",
        "name": "Jubilee",
        "uri": "/Line/jubilee"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n19",
        "name": "N19",
        "uri": "/Line/n19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n22",
        "name": "N22",
        "uri": "/Line/n22"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n38",
        "name": "N38",
        "uri": "/Line/n38"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n9",
        "name": "N9",
        "uri": "/Line/n9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "victoria",
        "name": "Victoria",
        "uri": "/Line/victoria"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000093PB",
        "stationAtcoCode": "490000093PB",
        "lineIdentifier": [
          "14",
          "19",
          "22",
          "38",
          "9",
          "n19",
          "n22",
          "n38",
          "n9",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000093PE",
        "stationAtcoCode": "490000093PE",
        "lineIdentifier": [
          "14",
          "19",
          "22",
          "38",
          "9",
          "c2",
          "n19",
          "n22",
          "n38",
          "n9",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000093PA",
        "stationAtcoCode": "490000093PA",
        "lineIdentifier": [
          "c2"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGPK",
        "lineIdentifier": [
          "jubilee"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGPK",
        "lineIdentifier": [
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGPK",
        "lineIdentifier": [
          "victoria"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "14",
          "19",
          "22",
          "38",
          "9",
          "c2",
          "n19",
          "n22",
          "n38",
          "n9",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "jubilee",
          "piccadilly",
          "victoria"
        ]
      }
    ],
    "id": "940GZZLUGPK",
    "commonName": "Green Park Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20.00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "electronic whiteboards in ticket hall, subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "13"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Green Park Station,London Underground Ltd.,Piccadilly,London,W1J 9DZ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "11"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "You need to make a 220m journey to change between the Jubilee and the Piccadilly line, a  160m journey to change between the Victoria  and the Piccadilly line and a 380m journey to  change between the Victoria and the Jubilee line"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGPK2",
        "modes": [
          
        ],
        "icsCode": "1000093",
        "stationNaptan": "940GZZLUGPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGPK2",
        "commonName": "Green Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGPK3",
        "modes": [
          
        ],
        "icsCode": "1000093",
        "stationNaptan": "940GZZLUGPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGPK3",
        "commonName": "Green Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGPK4",
        "modes": [
          
        ],
        "icsCode": "1000093",
        "stationNaptan": "940GZZLUGPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGPK4",
        "commonName": "Green Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGPK1",
        "modes": [
          
        ],
        "icsCode": "1000093",
        "stationNaptan": "940GZZLUGPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGPK1",
        "commonName": "Green Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGPK5",
        "modes": [
          
        ],
        "icsCode": "1000093",
        "stationNaptan": "940GZZLUGPK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGPK5",
        "commonName": "Green Park Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.506951,
    "lon": -0.142783
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUGTR",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000086",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUGTR",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "49",
        "name": "49",
        "uri": "/Line/49"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "74",
        "name": "74",
        "uri": "/Line/74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "circle",
        "name": "Circle",
        "uri": "/Line/circle"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n74",
        "name": "N74",
        "uri": "/Line/n74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000086A",
        "stationAtcoCode": "490000086A",
        "lineIdentifier": [
          "49"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000086B",
        "stationAtcoCode": "490000086B",
        "lineIdentifier": [
          "49"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490006956C",
        "stationAtcoCode": "490006956C",
        "lineIdentifier": [
          "74",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490015062W",
        "stationAtcoCode": "490015062W",
        "lineIdentifier": [
          "74",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGTR",
        "lineIdentifier": [
          "circle"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGTR",
        "lineIdentifier": [
          "circle",
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGTR",
        "lineIdentifier": [
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUGTR",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "49",
          "74",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "circle",
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUGTR",
    "commonName": "Gloucester Road Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 2 in ticket halls, 1 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "8"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Gloucester Road Station,London Underground Ltd.,Gloucester Rd,London,SW7 4SF"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "taxi ranks outside station, post office style queuing for tickets, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGTR1",
        "modes": [
          
        ],
        "icsCode": "1000086",
        "stationNaptan": "940GZZLUGTR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGTR1",
        "commonName": "Gloucester Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGTR2",
        "modes": [
          
        ],
        "icsCode": "1000086",
        "stationNaptan": "940GZZLUGTR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGTR2",
        "commonName": "Gloucester Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGTR3",
        "modes": [
          
        ],
        "icsCode": "1000086",
        "stationNaptan": "940GZZLUGTR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGTR3",
        "commonName": "Gloucester Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGTR4",
        "modes": [
          
        ],
        "icsCode": "1000086",
        "stationNaptan": "940GZZLUGTR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGTR4",
        "commonName": "Gloucester Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUGTR5",
        "modes": [
          
        ],
        "icsCode": "1000086",
        "stationNaptan": "940GZZLUGTR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUGTR5",
        "commonName": "Gloucester Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.494321,
    "lon": -0.182655
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHBN",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000112",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHBN",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "1",
        "name": "1",
        "uri": "/Line/1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "168",
        "name": "168",
        "uri": "/Line/168"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "171",
        "name": "171",
        "uri": "/Line/171"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "188",
        "name": "188",
        "uri": "/Line/188"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "242",
        "name": "242",
        "uri": "/Line/242"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "243",
        "name": "243",
        "uri": "/Line/243"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "25",
        "name": "25",
        "uri": "/Line/25"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "521",
        "name": "521",
        "uri": "/Line/521"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "59",
        "name": "59",
        "uri": "/Line/59"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "68",
        "name": "68",
        "uri": "/Line/68"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "8",
        "name": "8",
        "uri": "/Line/8"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "91",
        "name": "91",
        "uri": "/Line/91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "central",
        "name": "Central",
        "uri": "/Line/central"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n1",
        "name": "N1",
        "uri": "/Line/n1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n171",
        "name": "N171",
        "uri": "/Line/n171"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n68",
        "name": "N68",
        "uri": "/Line/n68"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n8",
        "name": "N8",
        "uri": "/Line/n8"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "x68",
        "name": "X68",
        "uri": "/Line/x68"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000112M",
        "stationAtcoCode": "490000112M",
        "lineIdentifier": [
          "1",
          "168",
          "171",
          "188",
          "243",
          "521",
          "59",
          "68",
          "91",
          "n1",
          "n171",
          "n68",
          "n91",
          "x68"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000112P",
        "stationAtcoCode": "490000112P",
        "lineIdentifier": [
          "1",
          "171",
          "243",
          "521",
          "n1",
          "n171",
          "n68"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000112N",
        "stationAtcoCode": "490000112N",
        "lineIdentifier": [
          "168",
          "188",
          "59",
          "68",
          "91",
          "n91",
          "x68"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490015239K",
        "stationAtcoCode": "490015239K",
        "lineIdentifier": [
          "242",
          "25",
          "521",
          "8",
          "n8"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHBN",
        "lineIdentifier": [
          "central"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHBN",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "1",
          "168",
          "171",
          "188",
          "242",
          "243",
          "25",
          "521",
          "59",
          "68",
          "8",
          "91",
          "n1",
          "n171",
          "n68",
          "n8",
          "n91",
          "x68"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "central",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHBN",
    "commonName": "Holborn Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "17"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Holborn Station,London Underground Ltd.,Kingsway,London,WC2B 6AA"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHBN1",
        "modes": [
          
        ],
        "icsCode": "1000112",
        "stationNaptan": "940GZZLUHBN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHBN1",
        "commonName": "Holborn Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHBN2",
        "modes": [
          
        ],
        "icsCode": "1000112",
        "stationNaptan": "940GZZLUHBN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHBN2",
        "commonName": "Holborn Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHBN3",
        "modes": [
          
        ],
        "icsCode": "1000112",
        "stationNaptan": "940GZZLUHBN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHBN3",
        "commonName": "Holborn Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHBN4",
        "modes": [
          
        ],
        "icsCode": "1000112",
        "stationNaptan": "940GZZLUHBN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHBN4",
        "commonName": "Holborn Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.517585,
    "lon": -0.12047
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHGD",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000111",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHGD",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "697",
        "name": "697",
        "uri": "/Line/697"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "698",
        "name": "698",
        "uri": "/Line/698"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u2",
        "name": "U2",
        "uri": "/Line/u2"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000111N",
        "stationAtcoCode": "490000111N",
        "lineIdentifier": [
          "697",
          "698",
          "u2"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHGD",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000111B",
        "stationAtcoCode": "490000111B",
        "lineIdentifier": [
          "u2"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "697",
          "698",
          "u2"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHGD",
    "commonName": "Hillingdon Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "10:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "yes (disabled only)"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Boarding Ramps",
        "sourceSystemKey": "StaticObjects",
        "value": "yes Metropolitan only"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hillingdon Station,London Underground Ltd.,Long Lane,Hillingdon,Uxbridge,Middlesex,UB10 9NR"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHGD1",
        "modes": [
          
        ],
        "icsCode": "1000111",
        "stationNaptan": "940GZZLUHGD",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHGD1",
        "commonName": "Hillingdon Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHGD2",
        "modes": [
          
        ],
        "icsCode": "1000111",
        "stationNaptan": "940GZZLUHGD",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHGD2",
        "commonName": "Hillingdon Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.553712,
    "lon": -0.449818
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHNX",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000103",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHNX",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "203",
        "name": "203",
        "uri": "/Line/203"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "285",
        "name": "285",
        "uri": "/Line/285"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "423",
        "name": "423",
        "uri": "/Line/423"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "482",
        "name": "482",
        "uri": "/Line/482"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "490",
        "name": "490",
        "uri": "/Line/490"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "90",
        "name": "90",
        "uri": "/Line/90"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h25",
        "name": "H25",
        "uri": "/Line/h25"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h26",
        "name": "H26",
        "uri": "/Line/h26"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "x26",
        "name": "X26",
        "uri": "/Line/x26"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000103D",
        "stationAtcoCode": "490000103D",
        "lineIdentifier": [
          "203",
          "423",
          "482"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000103Z",
        "stationAtcoCode": "490000103Z",
        "lineIdentifier": [
          "203",
          "h25",
          "h26"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000103C",
        "stationAtcoCode": "490000103C",
        "lineIdentifier": [
          "285",
          "490",
          "90",
          "x26"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000103F",
        "stationAtcoCode": "490000103F",
        "lineIdentifier": [
          "285",
          "423",
          "90",
          "h25",
          "h26",
          "x26"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000103E",
        "stationAtcoCode": "490000103E",
        "lineIdentifier": [
          "482",
          "490"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHNX",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "203",
          "285",
          "423",
          "482",
          "490",
          "90",
          "h25",
          "h26",
          "x26"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHNX",
    "commonName": "Hatton Cross Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5+6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "16:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hatton Cross Station,London Underground Ltd.,Great South West Rd,Feltham,Middx,"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHNX1",
        "modes": [
          
        ],
        "icsCode": "1000103",
        "stationNaptan": "940GZZLUHNX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHNX1",
        "commonName": "Hatton Cross Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.466751,
    "lon": -0.423181
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHPC",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000119",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHPC",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "10",
        "name": "10",
        "uri": "/Line/10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "137",
        "name": "137",
        "uri": "/Line/137"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "14",
        "name": "14",
        "uri": "/Line/14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "148",
        "name": "148",
        "uri": "/Line/148"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "16",
        "name": "16",
        "uri": "/Line/16"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "19",
        "name": "19",
        "uri": "/Line/19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "2",
        "name": "2",
        "uri": "/Line/2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "22",
        "name": "22",
        "uri": "/Line/22"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "36",
        "name": "36",
        "uri": "/Line/36"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "38",
        "name": "38",
        "uri": "/Line/38"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "414",
        "name": "414",
        "uri": "/Line/414"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "436",
        "name": "436",
        "uri": "/Line/436"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "52",
        "name": "52",
        "uri": "/Line/52"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "73",
        "name": "73",
        "uri": "/Line/73"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "74",
        "name": "74",
        "uri": "/Line/74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "82",
        "name": "82",
        "uri": "/Line/82"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "9",
        "name": "9",
        "uri": "/Line/9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "c2",
        "name": "C2",
        "uri": "/Line/c2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n137",
        "name": "N137",
        "uri": "/Line/n137"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n16",
        "name": "N16",
        "uri": "/Line/n16"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n19",
        "name": "N19",
        "uri": "/Line/n19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n22",
        "name": "N22",
        "uri": "/Line/n22"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n38",
        "name": "N38",
        "uri": "/Line/n38"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n73",
        "name": "N73",
        "uri": "/Line/n73"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n74",
        "name": "N74",
        "uri": "/Line/n74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n9",
        "name": "N9",
        "uri": "/Line/n9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119M",
        "stationAtcoCode": "490000119M",
        "lineIdentifier": [
          "10",
          "52",
          "9",
          "n9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119W",
        "stationAtcoCode": "490000119W",
        "lineIdentifier": [
          "10",
          "137",
          "414",
          "74",
          "n137",
          "n74"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119P",
        "stationAtcoCode": "490000119P",
        "lineIdentifier": [
          "137",
          "19",
          "22",
          "n137",
          "n19",
          "n22"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119N",
        "stationAtcoCode": "490000119N",
        "lineIdentifier": [
          "14",
          "414",
          "74",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119T",
        "stationAtcoCode": "490000119T",
        "lineIdentifier": [
          "14",
          "19",
          "22",
          "9",
          "n19",
          "n22",
          "n9",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119F",
        "stationAtcoCode": "490000119F",
        "lineIdentifier": [
          "148",
          "16",
          "2",
          "36",
          "38",
          "436",
          "52",
          "73",
          "82",
          "c2",
          "n16",
          "n38",
          "n73"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119K",
        "stationAtcoCode": "490000119K",
        "lineIdentifier": [
          "148",
          "16",
          "2",
          "36",
          "38",
          "436",
          "52",
          "73",
          "82",
          "c2",
          "n16",
          "n38",
          "n73"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000119S",
        "stationAtcoCode": "490000119S",
        "lineIdentifier": [
          "52"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHPC",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "10",
          "137",
          "14",
          "148",
          "16",
          "19",
          "2",
          "22",
          "36",
          "38",
          "414",
          "436",
          "52",
          "73",
          "74",
          "82",
          "9",
          "c2",
          "n137",
          "n16",
          "n19",
          "n22",
          "n38",
          "n73",
          "n74",
          "n9",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHPC",
    "commonName": "Hyde Park Corner Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hyde Park Corner Station,London Underground Ltd.,Knightsbridge,London,SW1X 7LY"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "1 on platforms, 0 in ticket halls, 1 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "15:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:00"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHPC1",
        "modes": [
          
        ],
        "icsCode": "1000119",
        "stationNaptan": "940GZZLUHPC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHPC1",
        "commonName": "Hyde Park Corner Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.503039,
    "lon": -0.152438
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHR4",
    "modes": [
      "tube"
    ],
    "icsCode": "1000104",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHR4",
    "hubNaptanCode": "HUBHX4",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHR4",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHR4",
    "commonName": "Heathrow Terminal 4 Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Heathrow T4 Station,London Underground Ltd.,Hthrw Airport complex,Trmnl 4,Hounslow,Middx"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, subway to street."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:30"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHR41",
        "modes": [
          
        ],
        "icsCode": "1000104",
        "stationNaptan": "940GZZLUHR4",
        "hubNaptanCode": "HUBHX4",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHR41",
        "commonName": "Heathrow Terminal 4 Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.458527,
    "lon": -0.445762
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHR5",
    "modes": [
      "tube"
    ],
    "icsCode": "1016430",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHR5",
    "hubNaptanCode": "HUBHX5",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHR5",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHR5",
    "commonName": "Heathrow Terminal 5 Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Heathrow T5 Station,London Underground Ltd.,Hthrw Airport complex,Trmnl 5,Hounslow,Middx"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHR51",
        "modes": [
          
        ],
        "icsCode": "1016430",
        "stationNaptan": "940GZZLUHR5",
        "hubNaptanCode": "HUBHX5",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHR51",
        "commonName": "Heathrow Terminal 5 Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.470056,
    "lon": -0.490552
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHRC",
    "modes": [
      "tube"
    ],
    "icsCode": "1000105",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHRC",
    "hubNaptanCode": "HUBH13",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHRC",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHRC",
    "commonName": "Heathrow Terminals 1-2-3 Underground Station ",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "none"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "12"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Heathrow Terminals 1, 2, 3,London Underground Ltd.,Wellington Road,Hounslow,Middlesex,TW6 1JH"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "If you are travelling towards Central London, you need to board the ﬁfth carriage, furthest from the lifts"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHRC1",
        "modes": [
          
        ],
        "icsCode": "1000105",
        "stationNaptan": "940GZZLUHRC",
        "hubNaptanCode": "HUBH13",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHRC1",
        "commonName": "Heathrow Terminals 1-2-3 Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.471239,
    "lon": -0.452256
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHSD",
    "modes": [
      "tube"
    ],
    "icsCode": "1000096",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHSD",
    "hubNaptanCode": "HUBHMS",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHSD",
        "lineIdentifier": [
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHSD",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHSD",
    "commonName": "Hammersmith (Dist&Picc Line) Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "none"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hammersmith (D & P),London Underground Ltd.,Hammersmith Broadway,London,W6 8AB"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "24"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - South",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - South",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - South",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": " Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - South",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - South",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - South",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "No entrance/exit to District and Piccadilly lines from 12 May until late December 2013 due to planned lift work.\r\nYou need to make a 520m journey via street including lifts to change between the Hammersmith & City or Circle lines and the District or Picca"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHSD1",
        "modes": [
          
        ],
        "icsCode": "1000096",
        "stationNaptan": "940GZZLUHSD",
        "hubNaptanCode": "HUBHMS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHSD1",
        "commonName": "Hammersmith (Dist&Picc Line) Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHSD2",
        "modes": [
          
        ],
        "icsCode": "1000096",
        "stationNaptan": "940GZZLUHSD",
        "hubNaptanCode": "HUBHMS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHSD2",
        "commonName": "Hammersmith (Dist&Picc Line) Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHSD3",
        "modes": [
          
        ],
        "icsCode": "1000096",
        "stationNaptan": "940GZZLUHSD",
        "hubNaptanCode": "HUBHMS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHSD3",
        "commonName": "Hammersmith (Dist&Picc Line) Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHSD4",
        "modes": [
          
        ],
        "icsCode": "1000096",
        "stationNaptan": "940GZZLUHSD",
        "hubNaptanCode": "HUBHMS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHSD4",
        "commonName": "Hammersmith (Dist&Picc Line) Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.492304,
    "lon": -0.223619
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHWC",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000116",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHWC",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "120",
        "name": "120",
        "uri": "/Line/120"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h20",
        "name": "H20",
        "uri": "/Line/h20"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "4900001161",
        "stationAtcoCode": "4900001161",
        "lineIdentifier": [
          "120",
          "h20"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "4900001162",
        "stationAtcoCode": "4900001162",
        "lineIdentifier": [
          "120",
          "h20"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHWC",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "120",
          "h20"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHWC",
    "commonName": "Hounslow Central Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hounslow Central Station,London Underground Ltd.,Lampton Rd,Hounslow,Middx,TW3 1JG"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHWC1",
        "modes": [
          
        ],
        "icsCode": "1000116",
        "stationNaptan": "940GZZLUHWC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHWC1",
        "commonName": "Hounslow Central Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.471299,
    "lon": -0.366581
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHWE",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000117",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHWE",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "111",
        "name": "111",
        "uri": "/Line/111"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h28",
        "name": "H28",
        "uri": "/Line/h28"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000117D",
        "stationAtcoCode": "490000117D",
        "lineIdentifier": [
          "111",
          "h28"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000117E",
        "stationAtcoCode": "490000117E",
        "lineIdentifier": [
          "111",
          "h28"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHWE",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "111",
          "h28"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHWE",
    "commonName": "Hounslow East Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hounslow East Station,London Underground Ltd.,Kingsley Rd,Hounslow,Middx,TW3 4AB"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Boarding Ramps",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHWE1",
        "modes": [
          
        ],
        "icsCode": "1000117",
        "stationNaptan": "940GZZLUHWE",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHWE1",
        "commonName": "Hounslow East Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHWE2",
        "modes": [
          
        ],
        "icsCode": "1000117",
        "stationNaptan": "940GZZLUHWE",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHWE2",
        "commonName": "Hounslow East Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.473217,
    "lon": -0.356476
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHWT",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000118",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHWT",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "203",
        "name": "203",
        "uri": "/Line/203"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "222",
        "name": "222",
        "uri": "/Line/222"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "482",
        "name": "482",
        "uri": "/Line/482"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "81",
        "name": "81",
        "uri": "/Line/81"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h32",
        "name": "H32",
        "uri": "/Line/h32"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h91",
        "name": "H91",
        "uri": "/Line/h91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h98",
        "name": "H98",
        "uri": "/Line/h98"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n9",
        "name": "N9",
        "uri": "/Line/n9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000118A",
        "stationAtcoCode": "490000118A",
        "lineIdentifier": [
          "203",
          "222",
          "482",
          "81",
          "h32",
          "h98",
          "n9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000118C",
        "stationAtcoCode": "490000118C",
        "lineIdentifier": [
          "203",
          "222",
          "81",
          "h98",
          "n9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000118D",
        "stationAtcoCode": "490000118D",
        "lineIdentifier": [
          "482",
          "h32",
          "h91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000118B",
        "stationAtcoCode": "490000118B",
        "lineIdentifier": [
          "h91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHWT",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "203",
          "222",
          "482",
          "81",
          "h32",
          "h91",
          "h98",
          "n9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHWT",
    "commonName": "Hounslow West Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Hounslow West Station,London Underground Ltd.,Bath Rd,Hounslow,Middx,TW3 3DH"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "Entrance/exit via stairlift for manual wheelchair users only. The maximum operating weight of the stairlift is 225kg"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHWT1",
        "modes": [
          
        ],
        "icsCode": "1000118",
        "stationNaptan": "940GZZLUHWT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHWT1",
        "commonName": "Hounslow West Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.473473,
    "lon": -0.386533
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUHWY",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000114",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUHWY",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "153",
        "name": "153",
        "uri": "/Line/153"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "263",
        "name": "263",
        "uri": "/Line/263"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "271",
        "name": "271",
        "uri": "/Line/271"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "393",
        "name": "393",
        "uri": "/Line/393"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "43",
        "name": "43",
        "uri": "/Line/43"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n41",
        "name": "N41",
        "uri": "/Line/n41"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000114U",
        "stationAtcoCode": "490000114U",
        "lineIdentifier": [
          "153",
          "263",
          "271",
          "393",
          "43",
          "n41"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000114Y",
        "stationAtcoCode": "490000114Y",
        "lineIdentifier": [
          "153",
          "263",
          "271",
          "393",
          "43",
          "n41"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUHWY",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "153",
          "263",
          "271",
          "393",
          "43",
          "n41"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUHWY",
    "commonName": "Holloway Road Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Holloway Road Station,London Underground Ltd.,Holloway Rd,London,N7 8HS"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19.30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "4 on platforms, 0 in ticket halls, 2 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "17:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10.00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUHWY1",
        "modes": [
          
        ],
        "icsCode": "1000114",
        "stationNaptan": "940GZZLUHWY",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUHWY1",
        "commonName": "Holloway Road Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.552702,
    "lon": -0.113239
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUICK",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000120",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUICK",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "697",
        "name": "697",
        "uri": "/Line/697"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "698",
        "name": "698",
        "uri": "/Line/698"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u10",
        "name": "U10",
        "uri": "/Line/u10"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000120D",
        "stationAtcoCode": "490000120D",
        "lineIdentifier": [
          "697",
          "698",
          "u10"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490013091C",
        "stationAtcoCode": "490013091C",
        "lineIdentifier": [
          "697",
          "698",
          "u10"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUICK",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "697",
          "698",
          "u10"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUICK",
    "commonName": "Ickenham Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Ickenham Station,London Underground Ltd.,Glebe Avenue,Uxbridge,Middx,UB10 8PD"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "12:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUICK1",
        "modes": [
          
        ],
        "icsCode": "1000120",
        "stationNaptan": "940GZZLUICK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUICK1",
        "commonName": "Ickenham Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUICK2",
        "modes": [
          
        ],
        "icsCode": "1000120",
        "stationNaptan": "940GZZLUICK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUICK2",
        "commonName": "Ickenham Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.561989,
    "lon": -0.441991
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUKNB",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000130",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUKNB",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "14",
        "name": "14",
        "uri": "/Line/14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "414",
        "name": "414",
        "uri": "/Line/414"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "74",
        "name": "74",
        "uri": "/Line/74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "c1",
        "name": "C1",
        "uri": "/Line/c1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n74",
        "name": "N74",
        "uri": "/Line/n74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000130KD",
        "stationAtcoCode": "490000130KD",
        "lineIdentifier": [
          "14",
          "414",
          "74",
          "c1",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUKNB",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "14",
          "414",
          "74",
          "c1",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUKNB",
    "commonName": "Knightsbridge Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Brompton Road (Harrods)",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Brompton Road (Harrods)",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Brompton Road (Harrods)",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "12:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Brompton Road (Harrods)",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Knightsbridge Station,London Underground Ltd.,Sloane St,London,SW1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Brompton Road (Harrods)",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Brompton Road (Harrods)",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "13"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKNB1",
        "modes": [
          
        ],
        "icsCode": "1000130",
        "stationNaptan": "940GZZLUKNB",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKNB1",
        "commonName": "Knightsbridge Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.501673,
    "lon": -0.160504
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUKSX",
    "modes": [
      "tube"
    ],
    "icsCode": "1000129",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUKSX",
    "hubNaptanCode": "HUBKGX",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "circle",
        "name": "Circle",
        "uri": "/Line/circle"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "hammersmith-city",
        "name": "Hammersmith & City",
        "uri": "/Line/hammersmith-city"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "northern",
        "name": "Northern",
        "uri": "/Line/northern"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "victoria",
        "name": "Victoria",
        "uri": "/Line/victoria"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUKSX",
        "lineIdentifier": [
          "circle",
          "hammersmith-city",
          "metropolitan"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUKSX",
        "lineIdentifier": [
          "northern"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUKSX",
        "lineIdentifier": [
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUKSX",
        "lineIdentifier": [
          "victoria"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "circle",
          "hammersmith-city",
          "metropolitan",
          "northern",
          "piccadilly",
          "victoria"
        ]
      }
    ],
    "id": "940GZZLUKSX",
    "commonName": "King's Cross St. Pancras Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Northern",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Northern",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Metropolitan and Circle",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Northern",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Northern",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "none"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Metropolitan and Circle",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Northern",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "16:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "King's Cross St. Pancras,London Underground Ltd.,Euston Road,London,N1 9AL"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Northern",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Metropolitan and Circle",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Main",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time - Metropolitan and Circle",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "ToiletNote",
        "sourceSystemKey": "LRAD",
        "value": "(National Rail)"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX3",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX3",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX4",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX4",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX5",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX5",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX6",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX6",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX7",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX7",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX1",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX1",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUKSX2",
        "modes": [
          
        ],
        "icsCode": "1000129",
        "stationNaptan": "940GZZLUKSX",
        "hubNaptanCode": "HUBKGX",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUKSX2",
        "commonName": "King's Cross St. Pancras Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.530668,
    "lon": -0.12319
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLULSQ",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000135",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLULSQ",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "176",
        "name": "176",
        "uri": "/Line/176"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "24",
        "name": "24",
        "uri": "/Line/24"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "29",
        "name": "29",
        "uri": "/Line/29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n20",
        "name": "N20",
        "uri": "/Line/n20"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n279",
        "name": "N279",
        "uri": "/Line/n279"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n29",
        "name": "N29",
        "uri": "/Line/n29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n41",
        "name": "N41",
        "uri": "/Line/n41"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n5",
        "name": "N5",
        "uri": "/Line/n5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "northern",
        "name": "Northern",
        "uri": "/Line/northern"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000135A",
        "stationAtcoCode": "490000135A",
        "lineIdentifier": [
          "176",
          "24",
          "29",
          "n20",
          "n279",
          "n29",
          "n41",
          "n5"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000135B",
        "stationAtcoCode": "490000135B",
        "lineIdentifier": [
          "176",
          "24",
          "29",
          "n20",
          "n279",
          "n29",
          "n41",
          "n5"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLULSQ",
        "lineIdentifier": [
          "northern"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLULSQ",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "176",
          "24",
          "29",
          "n20",
          "n279",
          "n29",
          "n41",
          "n5"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "northern",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLULSQ",
    "commonName": "Leicester Square Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Leicester Square Station,London Underground Ltd.,Cranbourn St,London,WC2H 0AP"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "electronic whiteboards in ticket hall, subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLULSQ1",
        "modes": [
          
        ],
        "icsCode": "1000135",
        "stationNaptan": "940GZZLULSQ",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLULSQ1",
        "commonName": "Leicester Square Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLULSQ2",
        "modes": [
          
        ],
        "icsCode": "1000135",
        "stationNaptan": "940GZZLULSQ",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLULSQ2",
        "commonName": "Leicester Square Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLULSQ3",
        "modes": [
          
        ],
        "icsCode": "1000135",
        "stationNaptan": "940GZZLULSQ",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLULSQ3",
        "commonName": "Leicester Square Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.51139,
    "lon": -0.128421
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUMRH",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000142",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUMRH",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "141",
        "name": "141",
        "uri": "/Line/141"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "253",
        "name": "253",
        "uri": "/Line/253"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "254",
        "name": "254",
        "uri": "/Line/254"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "259",
        "name": "259",
        "uri": "/Line/259"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "279",
        "name": "279",
        "uri": "/Line/279"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "29",
        "name": "29",
        "uri": "/Line/29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "341",
        "name": "341",
        "uri": "/Line/341"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n253",
        "name": "N253",
        "uri": "/Line/n253"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n279",
        "name": "N279",
        "uri": "/Line/n279"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n29",
        "name": "N29",
        "uri": "/Line/n29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000142C",
        "stationAtcoCode": "490000142C",
        "lineIdentifier": [
          "141",
          "341"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490015501K",
        "stationAtcoCode": "490015501K",
        "lineIdentifier": [
          "141",
          "341"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000142D",
        "stationAtcoCode": "490000142D",
        "lineIdentifier": [
          "253",
          "254",
          "n253"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000142H",
        "stationAtcoCode": "490000142H",
        "lineIdentifier": [
          "253",
          "254",
          "259",
          "n253",
          "n279"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000142F",
        "stationAtcoCode": "490000142F",
        "lineIdentifier": [
          "259",
          "279",
          "n279"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000142G",
        "stationAtcoCode": "490000142G",
        "lineIdentifier": [
          "279"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000142B",
        "stationAtcoCode": "490000142B",
        "lineIdentifier": [
          "29",
          "n29"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUMRH",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "141",
          "253",
          "254",
          "259",
          "279",
          "29",
          "341",
          "n253",
          "n279",
          "n29"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUMRH",
    "commonName": "Manor House Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Manor House Station,London Underground Ltd.,Green Lanes,London,N4 1BZ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21.45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2+3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUMRH1",
        "modes": [
          
        ],
        "icsCode": "1000142",
        "stationNaptan": "940GZZLUMRH",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUMRH1",
        "commonName": "Manor House Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.570744,
    "lon": -0.096113
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUNEN",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000158",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUNEN",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "112",
        "name": "112",
        "uri": "/Line/112"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "83",
        "name": "83",
        "uri": "/Line/83"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000158A",
        "stationAtcoCode": "490000158A",
        "lineIdentifier": [
          "112",
          "83"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUNEN",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "112",
          "83"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUNEN",
    "commonName": "North Ealing Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "North Ealing Station,London Underground Ltd.,Station Road,London,W5 3AF"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUNEN1",
        "modes": [
          
        ],
        "icsCode": "1000158",
        "stationNaptan": "940GZZLUNEN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUNEN1",
        "commonName": "North Ealing Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUNEN2",
        "modes": [
          
        ],
        "icsCode": "1000158",
        "stationNaptan": "940GZZLUNEN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUNEN2",
        "commonName": "North Ealing Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.51751,
    "lon": -0.288868
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUNFD",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000159",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUNFD",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "e2",
        "name": "E2",
        "uri": "/Line/e2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "e3",
        "name": "E3",
        "uri": "/Line/e3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n11",
        "name": "N11",
        "uri": "/Line/n11"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000159A",
        "stationAtcoCode": "490000159A",
        "lineIdentifier": [
          "e2",
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000159B",
        "stationAtcoCode": "490000159B",
        "lineIdentifier": [
          "e2",
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUNFD",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "e2",
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUNFD",
    "commonName": "Northfields Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Northfields Station,London Underground Ltd.,Northfield Avenue,London,W13 9QU"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "10:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUNFD1",
        "modes": [
          
        ],
        "icsCode": "1000159",
        "stationNaptan": "940GZZLUNFD",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUNFD1",
        "commonName": "Northfields Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUNFD2",
        "modes": [
          
        ],
        "icsCode": "1000159",
        "stationNaptan": "940GZZLUNFD",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUNFD2",
        "commonName": "Northfields Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.499324,
    "lon": -0.31472
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUOAK",
    "modes": [
      "tube"
    ],
    "icsCode": "1000168",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUOAK",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUOAK",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUOAK",
    "commonName": "Oakwood Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "15:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Oakwood Station,London Underground Ltd.,Bramley Rd,London,N14 4UT"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "17:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "15:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUOAK1",
        "modes": [
          
        ],
        "icsCode": "1000168",
        "stationNaptan": "940GZZLUOAK",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUOAK1",
        "commonName": "Oakwood Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.647734,
    "lon": -0.132177
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUOSY",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000171",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUOSY",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h91",
        "name": "H91",
        "uri": "/Line/h91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000171A",
        "stationAtcoCode": "490000171A",
        "lineIdentifier": [
          "h91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000171B",
        "stationAtcoCode": "490000171B",
        "lineIdentifier": [
          "h91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUOSY",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "h91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUOSY",
    "commonName": "Osterley Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Osterley Station,London Underground Ltd.,Great West Rd,Isleworth,Middx,TW7 4PU"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "17:00"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUOSY1",
        "modes": [
          
        ],
        "icsCode": "1000171",
        "stationNaptan": "940GZZLUOSY",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUOSY1",
        "commonName": "Osterley Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUOSY2",
        "modes": [
          
        ],
        "icsCode": "1000171",
        "stationNaptan": "940GZZLUOSY",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUOSY2",
        "commonName": "Osterley Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.481278,
    "lon": -0.352226
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUPCC",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000179",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUPCC",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "12",
        "name": "12",
        "uri": "/Line/12"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "13",
        "name": "13",
        "uri": "/Line/13"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "139",
        "name": "139",
        "uri": "/Line/139"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "14",
        "name": "14",
        "uri": "/Line/14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "159",
        "name": "159",
        "uri": "/Line/159"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "19",
        "name": "19",
        "uri": "/Line/19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "22",
        "name": "22",
        "uri": "/Line/22"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "23",
        "name": "23",
        "uri": "/Line/23"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "3",
        "name": "3",
        "uri": "/Line/3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "38",
        "name": "38",
        "uri": "/Line/38"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "453",
        "name": "453",
        "uri": "/Line/453"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "6",
        "name": "6",
        "uri": "/Line/6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "88",
        "name": "88",
        "uri": "/Line/88"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "94",
        "name": "94",
        "uri": "/Line/94"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "bakerloo",
        "name": "Bakerloo",
        "uri": "/Line/bakerloo"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n109",
        "name": "N109",
        "uri": "/Line/n109"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n113",
        "name": "N113",
        "uri": "/Line/n113"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n13",
        "name": "N13",
        "uri": "/Line/n13"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n136",
        "name": "N136",
        "uri": "/Line/n136"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n18",
        "name": "N18",
        "uri": "/Line/n18"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n19",
        "name": "N19",
        "uri": "/Line/n19"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n22",
        "name": "N22",
        "uri": "/Line/n22"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n3",
        "name": "N3",
        "uri": "/Line/n3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n38",
        "name": "N38",
        "uri": "/Line/n38"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000179C",
        "stationAtcoCode": "490000179C",
        "lineIdentifier": [
          "12",
          "13",
          "139",
          "n113",
          "n13"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000179F",
        "stationAtcoCode": "490000179F",
        "lineIdentifier": [
          "12",
          "159",
          "3",
          "453",
          "88",
          "94",
          "n109",
          "n136",
          "n3"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000179G",
        "stationAtcoCode": "490000179G",
        "lineIdentifier": [
          "13",
          "139",
          "23",
          "6",
          "n113",
          "n13",
          "n18"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000179B",
        "stationAtcoCode": "490000179B",
        "lineIdentifier": [
          "14",
          "19",
          "22",
          "38",
          "n19",
          "n22",
          "n38",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000179S",
        "stationAtcoCode": "490000179S",
        "lineIdentifier": [
          "14",
          "19",
          "22",
          "38",
          "n19",
          "n22",
          "n38",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000179D",
        "stationAtcoCode": "490000179D",
        "lineIdentifier": [
          "159",
          "23",
          "6",
          "94",
          "n136"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490011515W",
        "stationAtcoCode": "490G00179D",
        "lineIdentifier": [
          "3",
          "453",
          "88",
          "n109",
          "n18",
          "n3"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUPCC",
        "lineIdentifier": [
          "bakerloo"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUPCC",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "12",
          "13",
          "139",
          "14",
          "159",
          "19",
          "22",
          "23",
          "3",
          "38",
          "453",
          "6",
          "88",
          "94",
          "n109",
          "n113",
          "n13",
          "n136",
          "n18",
          "n19",
          "n22",
          "n3",
          "n38",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "bakerloo",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUPCC",
    "commonName": "Piccadilly Circus Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Piccadilly Circus Station,London Underground Ltd.,Piccadilly Circus,London,W1J 9HP"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "00:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "11"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "16"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUPCC1",
        "modes": [
          
        ],
        "icsCode": "1000179",
        "stationNaptan": "940GZZLUPCC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUPCC1",
        "commonName": "Piccadilly Circus Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUPCC2",
        "modes": [
          
        ],
        "icsCode": "1000179",
        "stationNaptan": "940GZZLUPCC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUPCC2",
        "commonName": "Piccadilly Circus Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUPCC3",
        "modes": [
          
        ],
        "icsCode": "1000179",
        "stationNaptan": "940GZZLUPCC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUPCC3",
        "commonName": "Piccadilly Circus Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUPCC4",
        "modes": [
          
        ],
        "icsCode": "1000179",
        "stationNaptan": "940GZZLUPCC",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUPCC4",
        "commonName": "Piccadilly Circus Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.510055,
    "lon": -0.133794
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUPKR",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000176",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUPKR",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "226",
        "name": "226",
        "uri": "/Line/226"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "487",
        "name": "487",
        "uri": "/Line/487"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "95",
        "name": "95",
        "uri": "/Line/95"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490007599E",
        "stationAtcoCode": "490007599E",
        "lineIdentifier": [
          "226"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490007599W",
        "stationAtcoCode": "490007599W",
        "lineIdentifier": [
          "226"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000176L",
        "stationAtcoCode": "490000176L",
        "lineIdentifier": [
          "487",
          "95"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000176M",
        "stationAtcoCode": "490000176M",
        "lineIdentifier": [
          "487",
          "95"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUPKR",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "226",
          "487",
          "95"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUPKR",
    "commonName": "Park Royal Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Park Royal Station,London Underground Ltd.,Western Avenue,London,W5 3EL"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "subway to street."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUPKR1",
        "modes": [
          
        ],
        "icsCode": "1000176",
        "stationNaptan": "940GZZLUPKR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUPKR1",
        "commonName": "Park Royal Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUPKR2",
        "modes": [
          
        ],
        "icsCode": "1000176",
        "stationNaptan": "940GZZLUPKR",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUPKR2",
        "commonName": "Park Royal Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.527129,
    "lon": -0.284341
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLURSM",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000199",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLURSM",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "114",
        "name": "114",
        "uri": "/Line/114"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "398",
        "name": "398",
        "uri": "/Line/398"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "696",
        "name": "696",
        "uri": "/Line/696"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h13",
        "name": "H13",
        "uri": "/Line/h13"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000199A",
        "stationAtcoCode": "490000199A",
        "lineIdentifier": [
          "114",
          "398"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000199B",
        "stationAtcoCode": "490000199B",
        "lineIdentifier": [
          "114",
          "398"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000199C",
        "stationAtcoCode": "490000199C",
        "lineIdentifier": [
          "696",
          "h13"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000199D",
        "stationAtcoCode": "490000199D",
        "lineIdentifier": [
          "696",
          "h13"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLURSM",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "114",
          "398",
          "696",
          "h13"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLURSM",
    "commonName": "Ruislip Manor Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "12:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Ruislip Manor Station,London Underground Ltd.,Victoria Rd,Ruislip,Middx,HA4 9AA"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURSM1",
        "modes": [
          
        ],
        "icsCode": "1000199",
        "stationNaptan": "940GZZLURSM",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURSM1",
        "commonName": "Ruislip Manor Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURSM2",
        "modes": [
          
        ],
        "icsCode": "1000199",
        "stationNaptan": "940GZZLURSM",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURSM2",
        "commonName": "Ruislip Manor Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.5732,
    "lon": -0.412963
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLURSP",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000197",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLURSP",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "114",
        "name": "114",
        "uri": "/Line/114"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "331",
        "name": "331",
        "uri": "/Line/331"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "398",
        "name": "398",
        "uri": "/Line/398"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "e7",
        "name": "E7",
        "uri": "/Line/e7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h13",
        "name": "H13",
        "uri": "/Line/h13"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u1",
        "name": "U1",
        "uri": "/Line/u1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u10",
        "name": "U10",
        "uri": "/Line/u10"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000197A",
        "stationAtcoCode": "490000197A",
        "lineIdentifier": [
          "114",
          "398",
          "h13"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000197Z1",
        "stationAtcoCode": "490000197Z1",
        "lineIdentifier": [
          "114",
          "e7",
          "u1"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000197B",
        "stationAtcoCode": "490000197B",
        "lineIdentifier": [
          "331",
          "e7",
          "h13",
          "u1",
          "u10"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLURSP",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
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
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLURSP",
    "commonName": "Ruislip Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "12:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Ruislip Station,London Underground Ltd.,Station Approach,Ruislip,Middx,HA4 8LD"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "12:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "You can only enter and exit the eastbound platform for Metropolitan line eastbound towards Liverpool Street and Piccadilly line  eastbound towards Oakwood"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURSP1",
        "modes": [
          
        ],
        "icsCode": "1000197",
        "stationNaptan": "940GZZLURSP",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURSP1",
        "commonName": "Ruislip Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURSP2",
        "modes": [
          
        ],
        "icsCode": "1000197",
        "stationNaptan": "940GZZLURSP",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURSP2",
        "commonName": "Ruislip Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.571351,
    "lon": -0.421887
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLURSQ",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000200",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLURSQ",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "168",
        "name": "168",
        "uri": "/Line/168"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "188",
        "name": "188",
        "uri": "/Line/188"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "59",
        "name": "59",
        "uri": "/Line/59"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "68",
        "name": "68",
        "uri": "/Line/68"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "91",
        "name": "91",
        "uri": "/Line/91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "98",
        "name": "98",
        "uri": "/Line/98"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n98",
        "name": "N98",
        "uri": "/Line/n98"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "x68",
        "name": "X68",
        "uri": "/Line/x68"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000200H",
        "stationAtcoCode": "490000200H",
        "lineIdentifier": [
          "168",
          "59",
          "68",
          "91",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000200J",
        "stationAtcoCode": "490000200J",
        "lineIdentifier": [
          "168",
          "59",
          "68",
          "91",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000200D",
        "stationAtcoCode": "490000200D",
        "lineIdentifier": [
          "188",
          "x68"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000200E",
        "stationAtcoCode": "490000200E",
        "lineIdentifier": [
          "188",
          "98",
          "n98"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLURSQ",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "168",
          "188",
          "59",
          "68",
          "91",
          "98",
          "n91",
          "n98",
          "x68"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLURSQ",
    "commonName": "Russell Square Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Russell Square Station,London Underground Ltd.,Bernard St,London,WC1N 1LJ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURSQ1",
        "modes": [
          
        ],
        "icsCode": "1000200",
        "stationNaptan": "940GZZLURSQ",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURSQ1",
        "commonName": "Russell Square Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURSQ2",
        "modes": [
          
        ],
        "icsCode": "1000200",
        "stationNaptan": "940GZZLURSQ",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURSQ2",
        "commonName": "Russell Square Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.523077,
    "lon": -0.124281
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLURYL",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000189",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLURYL",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "398",
        "name": "398",
        "uri": "/Line/398"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h10",
        "name": "H10",
        "uri": "/Line/h10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h12",
        "name": "H12",
        "uri": "/Line/h12"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h9",
        "name": "H9",
        "uri": "/Line/h9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000189A",
        "stationAtcoCode": "490000189A",
        "lineIdentifier": [
          "398",
          "h10",
          "h12"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000189B",
        "stationAtcoCode": "490000189B",
        "lineIdentifier": [
          "398",
          "h12",
          "h9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000189C",
        "stationAtcoCode": "490000189C",
        "lineIdentifier": [
          "398",
          "h12",
          "h9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLURYL",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "398",
          "h10",
          "h12",
          "h9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLURYL",
    "commonName": "Rayners Lane Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Rayners Lane Station,London Underground Ltd.,Alexandra Avenue,Harrow,HA5 5EG,Middx"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "electronic whiteboards in ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "16:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "15:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURYL1",
        "modes": [
          
        ],
        "icsCode": "1000189",
        "stationNaptan": "940GZZLURYL",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURYL1",
        "commonName": "Rayners Lane Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLURYL2",
        "modes": [
          
        ],
        "icsCode": "1000189",
        "stationNaptan": "940GZZLURYL",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLURYL2",
        "commonName": "Rayners Lane Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.575154,
    "lon": -0.37113
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUSEA",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000208",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUSEA",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "65",
        "name": "65",
        "uri": "/Line/65"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000208A",
        "stationAtcoCode": "490000208A",
        "lineIdentifier": [
          "65"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000208B",
        "stationAtcoCode": "490000208B",
        "lineIdentifier": [
          "65"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSEA",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "65"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUSEA",
    "commonName": "South Ealing Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "South Ealing Station,London Underground Ltd.,South Ealing Rd,London,W5 4QB"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "14:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSEA1",
        "modes": [
          
        ],
        "icsCode": "1000208",
        "stationNaptan": "940GZZLUSEA",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSEA1",
        "commonName": "South Ealing Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.501008,
    "lon": -0.307425
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUSGT",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000210",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUSGT",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "121",
        "name": "121",
        "uri": "/Line/121"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "125",
        "name": "125",
        "uri": "/Line/125"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "298",
        "name": "298",
        "uri": "/Line/298"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "299",
        "name": "299",
        "uri": "/Line/299"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "382",
        "name": "382",
        "uri": "/Line/382"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "616",
        "name": "616",
        "uri": "/Line/616"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "628",
        "name": "628",
        "uri": "/Line/628"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "688",
        "name": "688",
        "uri": "/Line/688"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "692",
        "name": "692",
        "uri": "/Line/692"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "699",
        "name": "699",
        "uri": "/Line/699"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "w6",
        "name": "W6",
        "uri": "/Line/w6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "w9",
        "name": "W9",
        "uri": "/Line/w9"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000210C",
        "stationAtcoCode": "490000210C",
        "lineIdentifier": [
          "121",
          "298",
          "299",
          "616",
          "n91",
          "w6"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000210F",
        "stationAtcoCode": "490000210F",
        "lineIdentifier": [
          "121",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000210B",
        "stationAtcoCode": "490000210B",
        "lineIdentifier": [
          "125",
          "616",
          "692",
          "699",
          "w9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000210G",
        "stationAtcoCode": "490000210G",
        "lineIdentifier": [
          "125",
          "298",
          "299",
          "382",
          "688",
          "699"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000210D",
        "stationAtcoCode": "490000210D",
        "lineIdentifier": [
          "382"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000210H",
        "stationAtcoCode": "490000210H",
        "lineIdentifier": [
          "628",
          "688",
          "w6",
          "w9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSGT",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "121",
          "125",
          "298",
          "299",
          "382",
          "616",
          "628",
          "688",
          "692",
          "699",
          "n91",
          "w6",
          "w9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUSGT",
    "commonName": "Southgate Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "18:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Southgate Station,London Underground Ltd.,High St,London,N14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSGT1",
        "modes": [
          
        ],
        "icsCode": "1000210",
        "stationNaptan": "940GZZLUSGT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSGT1",
        "commonName": "Southgate Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.632323,
    "lon": -0.127811
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUSHH",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000211",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUSHH",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "114",
        "name": "114",
        "uri": "/Line/114"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "140",
        "name": "140",
        "uri": "/Line/140"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "395",
        "name": "395",
        "uri": "/Line/395"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "398",
        "name": "398",
        "uri": "/Line/398"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "487",
        "name": "487",
        "uri": "/Line/487"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "640",
        "name": "640",
        "uri": "/Line/640"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h10",
        "name": "H10",
        "uri": "/Line/h10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h12",
        "name": "H12",
        "uri": "/Line/h12"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h9",
        "name": "H9",
        "uri": "/Line/h9"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000211D",
        "stationAtcoCode": "490000211D",
        "lineIdentifier": [
          "114",
          "398",
          "h10",
          "h12"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000211F",
        "stationAtcoCode": "490000211F",
        "lineIdentifier": [
          "114",
          "140",
          "395",
          "398",
          "487",
          "640",
          "h12",
          "h9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000211G",
        "stationAtcoCode": "490000211G",
        "lineIdentifier": [
          "140",
          "395",
          "398",
          "487"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSHH",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "114",
          "140",
          "395",
          "398",
          "487",
          "640",
          "h10",
          "h12",
          "h9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUSHH",
    "commonName": "South Harrow Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "South Harrow Station,London Underground Ltd.,South Hill Ave,Harrow,Middx,HA2 8HN"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSHH1",
        "modes": [
          
        ],
        "icsCode": "1000211",
        "stationNaptan": "940GZZLUSHH",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSHH1",
        "commonName": "South Harrow Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSHH2",
        "modes": [
          
        ],
        "icsCode": "1000211",
        "stationNaptan": "940GZZLUSHH",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSHH2",
        "commonName": "South Harrow Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.564894,
    "lon": -0.352494
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUSKS",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000212",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUSKS",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "14",
        "name": "14",
        "uri": "/Line/14"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "345",
        "name": "345",
        "uri": "/Line/345"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "360",
        "name": "360",
        "uri": "/Line/360"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "414",
        "name": "414",
        "uri": "/Line/414"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "430",
        "name": "430",
        "uri": "/Line/430"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "49",
        "name": "49",
        "uri": "/Line/49"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "70",
        "name": "70",
        "uri": "/Line/70"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "74",
        "name": "74",
        "uri": "/Line/74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "c1",
        "name": "C1",
        "uri": "/Line/c1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "circle",
        "name": "Circle",
        "uri": "/Line/circle"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n74",
        "name": "N74",
        "uri": "/Line/n74"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n97",
        "name": "N97",
        "uri": "/Line/n97"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000212E",
        "stationAtcoCode": "490000212E",
        "lineIdentifier": [
          "14",
          "360",
          "414",
          "430",
          "74",
          "c1",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000212S1",
        "stationAtcoCode": "490000212S1",
        "lineIdentifier": [
          "14",
          "360",
          "414"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000212E1",
        "stationAtcoCode": "490000212E1",
        "lineIdentifier": [
          "345",
          "430",
          "49"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000212S",
        "stationAtcoCode": "490000212S",
        "lineIdentifier": [
          "70",
          "74",
          "c1",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSKS",
        "lineIdentifier": [
          "circle",
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSKS",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "14",
          "345",
          "360",
          "414",
          "430",
          "49",
          "70",
          "74",
          "c1",
          "n74",
          "n97"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "circle",
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUSKS",
    "commonName": "South Kensington Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "South Kensington Station,London Underground Ltd.,Pelham St,London,SW7 2NB"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "canopies over platform (Dist / Circ), taxi ranks outside station, post office style queuing for tickets, subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "12 on platforms, 0 in ticket halls, 4 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSKS1",
        "modes": [
          
        ],
        "icsCode": "1000212",
        "stationNaptan": "940GZZLUSKS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSKS1",
        "commonName": "South Kensington Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSKS2",
        "modes": [
          
        ],
        "icsCode": "1000212",
        "stationNaptan": "940GZZLUSKS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSKS2",
        "commonName": "South Kensington Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSKS3",
        "modes": [
          
        ],
        "icsCode": "1000212",
        "stationNaptan": "940GZZLUSKS",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSKS3",
        "commonName": "South Kensington Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.494098,
    "lon": -0.174135
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUSUH",
    "modes": [
      "tube"
    ],
    "icsCode": "1000227",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUSUH",
    "hubNaptanCode": "HUBSDH",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSUH",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUSUH",
    "commonName": "Sudbury Hill Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Sudbury Hill Underground Station,London Underground Ltd.,Greenford Rd,Harrow,Middx,HA1 3RA"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "12:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSUH1",
        "modes": [
          
        ],
        "icsCode": "1000227",
        "stationNaptan": "940GZZLUSUH",
        "hubNaptanCode": "HUBSDH",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSUH1",
        "commonName": "Sudbury Hill Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSUH2",
        "modes": [
          
        ],
        "icsCode": "1000227",
        "stationNaptan": "940GZZLUSUH",
        "hubNaptanCode": "HUBSDH",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSUH2",
        "commonName": "Sudbury Hill Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.556952,
    "lon": -0.336437
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUSUT",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000228",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUSUT",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "204",
        "name": "204",
        "uri": "/Line/204"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "245",
        "name": "245",
        "uri": "/Line/245"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "487",
        "name": "487",
        "uri": "/Line/487"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "h17",
        "name": "H17",
        "uri": "/Line/h17"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000228B",
        "stationAtcoCode": "490000228B",
        "lineIdentifier": [
          "204"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000228A",
        "stationAtcoCode": "490000228A",
        "lineIdentifier": [
          "245"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000228D",
        "stationAtcoCode": "490000228D",
        "lineIdentifier": [
          "487",
          "h17"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000228E",
        "stationAtcoCode": "490000228E",
        "lineIdentifier": [
          "487",
          "h17"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUSUT",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "204",
          "245",
          "487",
          "h17"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUSUT",
    "commonName": "Sudbury Town Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "10:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Sudbury Town Station,London Underground Ltd.,Station Approach,Wembley,Middx,HA0 2LA"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "12:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "11:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "11:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "You need the correct entrance/exit depending  on which platform you are travellling to/from,  as you cannot change between all platforms  within the station – you need to make a 150m  journey via street to change between the  eastbound and westbound platf"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSUT1",
        "modes": [
          
        ],
        "icsCode": "1000228",
        "stationNaptan": "940GZZLUSUT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSUT1",
        "commonName": "Sudbury Town Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUSUT2",
        "modes": [
          
        ],
        "icsCode": "1000228",
        "stationNaptan": "940GZZLUSUT",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUSUT2",
        "commonName": "Sudbury Town Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.550821,
    "lon": -0.315746
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUTNG",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000240",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUTNG",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "272",
        "name": "272",
        "uri": "/Line/272"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "94",
        "name": "94",
        "uri": "/Line/94"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "district",
        "name": "District",
        "uri": "/Line/district"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "e3",
        "name": "E3",
        "uri": "/Line/e3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n11",
        "name": "N11",
        "uri": "/Line/n11"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000240LL",
        "stationAtcoCode": "490000240LL",
        "lineIdentifier": [
          "272",
          "94"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000240MM",
        "stationAtcoCode": "490000240MM",
        "lineIdentifier": [
          "272",
          "94"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUTNG",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUTNG",
        "lineIdentifier": [
          "district"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000240JJ",
        "stationAtcoCode": "490000240JJ",
        "lineIdentifier": [
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000240KK",
        "stationAtcoCode": "490000240KK",
        "lineIdentifier": [
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUTNG",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "272",
          "94",
          "e3",
          "n11"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "district",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUTNG",
    "commonName": "Turnham Green Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "1 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "17:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "09:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "17:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Turnham Green Station,London Underground Ltd.,Turnham Green Terrace,London,W4 1LR"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "15:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "canopies over platform, taxi ranks outside station, post office style queuing for tickets."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "13:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AddtionalInformation",
        "sourceSystemKey": "LRAD",
        "value": "This station is served by Piccadilly line trains until 0650 Monday to Saturday, 0745 Sunday and after 2230 every evening.\r\nInterchange between District and Piccadilly lines is therefore only possible at these times."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "Yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUTNG2",
        "modes": [
          
        ],
        "icsCode": "1000240",
        "stationNaptan": "940GZZLUTNG",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUTNG2",
        "commonName": "Turnham Green Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUTNG3",
        "modes": [
          
        ],
        "icsCode": "1000240",
        "stationNaptan": "940GZZLUTNG",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUTNG3",
        "commonName": "Turnham Green Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUTNG1",
        "modes": [
          
        ],
        "icsCode": "1000240",
        "stationNaptan": "940GZZLUTNG",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUTNG1",
        "commonName": "Turnham Green Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.495152,
    "lon": -0.254554
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUTPN",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000241",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUTPN",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "123",
        "name": "123",
        "uri": "/Line/123"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "141",
        "name": "141",
        "uri": "/Line/141"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "184",
        "name": "184",
        "uri": "/Line/184"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "217",
        "name": "217",
        "uri": "/Line/217"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "221",
        "name": "221",
        "uri": "/Line/221"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "231",
        "name": "231",
        "uri": "/Line/231"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "29",
        "name": "29",
        "uri": "/Line/29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "41",
        "name": "41",
        "uri": "/Line/41"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "444",
        "name": "444",
        "uri": "/Line/444"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "67",
        "name": "67",
        "uri": "/Line/67"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n29",
        "name": "N29",
        "uri": "/Line/n29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n41",
        "name": "N41",
        "uri": "/Line/n41"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000241P",
        "stationAtcoCode": "490000241P",
        "lineIdentifier": [
          "123",
          "217",
          "231",
          "444"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000241M",
        "stationAtcoCode": "490000241M",
        "lineIdentifier": [
          "141",
          "29",
          "n29"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490015475U",
        "stationAtcoCode": "490015475U",
        "lineIdentifier": [
          "141",
          "29",
          "41",
          "67",
          "n29",
          "n41"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490015475Y",
        "stationAtcoCode": "490015475Y",
        "lineIdentifier": [
          "184",
          "221",
          "41",
          "67",
          "n41"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUTPN",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "123",
          "141",
          "184",
          "217",
          "221",
          "231",
          "29",
          "41",
          "444",
          "67",
          "n29",
          "n41"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUTPN",
    "commonName": "Turnpike Lane Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, subway to street, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "4 on platforms, 0 in ticket halls, 1 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Turnpike Lane Station,London Underground Ltd.,Westbury Avenue,London,N15 3NX"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:30"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUTPN1",
        "modes": [
          
        ],
        "icsCode": "1000241",
        "stationNaptan": "940GZZLUTPN",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUTPN1",
        "commonName": "Turnpike Lane Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.590279,
    "lon": -0.102947
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUUXB",
    "modes": [
      "tube",
      "bus"
    ],
    "icsCode": "1000246",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUUXB",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "222",
        "name": "222",
        "uri": "/Line/222"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "331",
        "name": "331",
        "uri": "/Line/331"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "427",
        "name": "427",
        "uri": "/Line/427"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "607",
        "name": "607",
        "uri": "/Line/607"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "a10",
        "name": "A10",
        "uri": "/Line/a10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "metropolitan",
        "name": "Metropolitan",
        "uri": "/Line/metropolitan"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n207",
        "name": "N207",
        "uri": "/Line/n207"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u1",
        "name": "U1",
        "uri": "/Line/u1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u10",
        "name": "U10",
        "uri": "/Line/u10"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u2",
        "name": "U2",
        "uri": "/Line/u2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u3",
        "name": "U3",
        "uri": "/Line/u3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u4",
        "name": "U4",
        "uri": "/Line/u4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u5",
        "name": "U5",
        "uri": "/Line/u5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u7",
        "name": "U7",
        "uri": "/Line/u7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "u9",
        "name": "U9",
        "uri": "/Line/u9"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000246M",
        "stationAtcoCode": "490000246M",
        "lineIdentifier": [
          "222",
          "a10",
          "u1",
          "u3"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000246L",
        "stationAtcoCode": "490000246L",
        "lineIdentifier": [
          "331",
          "u1",
          "u10",
          "u9"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000246O",
        "stationAtcoCode": "490000246O",
        "lineIdentifier": [
          "427",
          "607",
          "n207",
          "u7"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUUXB",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000246N",
        "stationAtcoCode": "490000246N",
        "lineIdentifier": [
          "u2"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000246K",
        "stationAtcoCode": "490000246K",
        "lineIdentifier": [
          "u4",
          "u5"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
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
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "metropolitan",
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUUXB",
    "commonName": "Uxbridge Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "5"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "20:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Boarding Ramps",
        "sourceSystemKey": "StaticObjects",
        "value": "yes Metropolitan only"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "6"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "electronic whiteboards in ticket hall, post office style queuing for tickets."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "19:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "4"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Uxbridge Station,London Underground Ltd.,High St,Uxbridge,Middx,UB8 1JZ"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "08:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "21:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Euro Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "SpecificEntranceRequired",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "AccessViaLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "BlueBadgeCarParkSpaces",
        "sourceSystemKey": "LRAD",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "TaxiRankOutsideStation",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "LimitedCapacityLift",
        "sourceSystemKey": "LRAD",
        "value": "No"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Accessibility",
        "key": "Toilet",
        "sourceSystemKey": "LRAD",
        "value": "No"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUUXB1",
        "modes": [
          
        ],
        "icsCode": "1000246",
        "stationNaptan": "940GZZLUUXB",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUUXB1",
        "commonName": "Uxbridge Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.546563,
    "lon": -0.47794
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
    "naptanId": "940GZZLUWOG",
    "modes": [
      "bus",
      "tube"
    ],
    "icsCode": "1000275",
    "stopType": "NaptanMetroStation",
    "stationNaptan": "940GZZLUWOG",
    "lines": [
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "123",
        "name": "123",
        "uri": "/Line/123"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "141",
        "name": "141",
        "uri": "/Line/141"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "184",
        "name": "184",
        "uri": "/Line/184"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "221",
        "name": "221",
        "uri": "/Line/221"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "232",
        "name": "232",
        "uri": "/Line/232"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "243",
        "name": "243",
        "uri": "/Line/243"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "29",
        "name": "29",
        "uri": "/Line/29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "67",
        "name": "67",
        "uri": "/Line/67"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n29",
        "name": "N29",
        "uri": "/Line/n29"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "n91",
        "name": "N91",
        "uri": "/Line/n91"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "piccadilly",
        "name": "Piccadilly",
        "uri": "/Line/piccadilly"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.Identifier`1[[Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities]], Tfl.Api.Presentation.Entities",
        "id": "w3",
        "name": "W3",
        "uri": "/Line/w3"
      }
    ],
    "lineGroup": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490014854HB",
        "stationAtcoCode": "490014854HB",
        "lineIdentifier": [
          "123",
          "29",
          "67"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000275D",
        "stationAtcoCode": "490000275D",
        "lineIdentifier": [
          "141",
          "221",
          "232",
          "n29",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490015567H",
        "stationAtcoCode": "490015567H",
        "lineIdentifier": [
          "141",
          "184",
          "221",
          "n29",
          "n91"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "naptanIdReference": "490000275F",
        "stationAtcoCode": "490000275F",
        "lineIdentifier": [
          "243",
          "w3"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineGroup, Tfl.Api.Presentation.Entities",
        "stationAtcoCode": "940GZZLUWOG",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "lineModeGroups": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "bus",
        "lineIdentifier": [
          "123",
          "141",
          "184",
          "221",
          "232",
          "243",
          "29",
          "67",
          "n29",
          "n91",
          "w3"
        ]
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineModeGroup, Tfl.Api.Presentation.Entities",
        "modeName": "tube",
        "lineIdentifier": [
          "piccadilly"
        ]
      }
    ],
    "id": "940GZZLUWOG",
    "commonName": "Wood Green Underground Station",
    "placeType": "StopPoint",
    "additionalProperties": [
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Cash Machines",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Lifts",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Help Points",
        "sourceSystemKey": "StaticObjects",
        "value": "0 on platforms, 0 in ticket halls, 0 elsewhere"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "05:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:45"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "Address",
        "sourceSystemKey": "StaticObjects",
        "value": "Wood Green Station,London Underground Ltd.,High Rd,Wood Green,London,N22 4HH"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Escalators",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Ticket Halls",
        "sourceSystemKey": "StaticObjects",
        "value": "1"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Toilets",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Gates",
        "sourceSystemKey": "StaticObjects",
        "value": "7"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "MonFriTo",
        "sourceSystemKey": "StaticObjects",
        "value": "22:00"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Payphones",
        "sourceSystemKey": "StaticObjects",
        "value": "2"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "06:30"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SunFrom",
        "sourceSystemKey": "StaticObjects",
        "value": "07:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Geo",
        "key": "Zone",
        "sourceSystemKey": "StaticObjects",
        "value": "3"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Bridge",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Car park",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Other Facilities",
        "sourceSystemKey": "StaticObjects",
        "value": "post office style queuing for tickets, routeways platform to ticket hall."
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Address",
        "key": "PhoneNo",
        "sourceSystemKey": "StaticObjects",
        "value": "0845 330 9880"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Photo Booths",
        "sourceSystemKey": "StaticObjects",
        "value": "0"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Opening Time",
        "key": "SatTo",
        "sourceSystemKey": "StaticObjects",
        "value": "23:15"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "Waiting Room",
        "sourceSystemKey": "StaticObjects",
        "value": "no"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.AdditionalProperties, Tfl.Api.Presentation.Entities",
        "category": "Facility",
        "key": "WiFi",
        "sourceSystemKey": "StaticObjects",
        "value": "yes"
      }
    ],
    "children": [
      {
        "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
        "naptanId": "9400ZZLUWOG1",
        "modes": [
          
        ],
        "icsCode": "1000275",
        "stationNaptan": "940GZZLUWOG",
        "lines": [
          
        ],
        "lineGroup": [
          
        ],
        "lineModeGroups": [
          
        ],
        "id": "9400ZZLUWOG1",
        "commonName": "Wood Green Underground Station",
        "placeType": "StopPoint",
        "additionalProperties": [
          
        ],
        "children": [
          
        ],
        "lat": 0.0,
        "lon": 0.0
      }
    ],
    "lat": 51.597486,
    "lon": -0.109881
  }
]