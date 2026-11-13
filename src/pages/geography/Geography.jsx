 import { ResponsiveChoropleth } from '@nivo/geo'
 import {Box, useTheme} from '@mui/material'
import {geo} from './world countries.jsx'
const data =[
  {
    "id": "AFG",
    "value": 381618
  },
  {
    "id": "AGO",
    "value": 805260
  },
  {
    "id": "ALB",
    "value": 825853
  },
  {
    "id": "ARE",
    "value": 384955
  },
  {
    "id": "ARG",
    "value": 209559
  },
  {
    "id": "ARM",
    "value": 818125
  },
  {
    "id": "ATA",
    "value": 426551
  },
  {
    "id": "ATF",
    "value": 390554
  },
  {
    "id": "AUT",
    "value": 211522
  },
  {
    "id": "AZE",
    "value": 664105
  },
  {
    "id": "BDI",
    "value": 910968
  },
  {
    "id": "BEL",
    "value": 211037
  },
  {
    "id": "BEN",
    "value": 521080
  },
  {
    "id": "BFA",
    "value": 695583
  },
  {
    "id": "BGD",
    "value": 344820
  },
  {
    "id": "BGR",
    "value": 70503
  },
  {
    "id": "BHS",
    "value": 968014
  },
  {
    "id": "BIH",
    "value": 269226
  },
  {
    "id": "BLR",
    "value": 313589
  },
  {
    "id": "BLZ",
    "value": 157705
  },
  {
    "id": "BOL",
    "value": 219229
  },
  {
    "id": "BRN",
    "value": 758641
  },
  {
    "id": "BTN",
    "value": 500120
  },
  {
    "id": "BWA",
    "value": 79706
  },
  {
    "id": "CAF",
    "value": 761843
  },
  {
    "id": "CAN",
    "value": 531185
  },
  {
    "id": "CHE",
    "value": 566313
  },
  {
    "id": "CHL",
    "value": 285778
  },
  {
    "id": "CHN",
    "value": 609060
  },
  {
    "id": "CIV",
    "value": 327477
  },
  {
    "id": "CMR",
    "value": 258256
  },
  {
    "id": "COG",
    "value": 377302
  },
  {
    "id": "COL",
    "value": 330148
  },
  {
    "id": "CRI",
    "value": 183445
  },
  {
    "id": "CUB",
    "value": 225467
  },
  {
    "id": "-99",
    "value": 232591
  },
  {
    "id": "CYP",
    "value": 341227
  },
  {
    "id": "CZE",
    "value": 420347
  },
  {
    "id": "DEU",
    "value": 277054
  },
  {
    "id": "DJI",
    "value": 308485
  },
  {
    "id": "DNK",
    "value": 81081
  },
  {
    "id": "DOM",
    "value": 630919
  },
  {
    "id": "DZA",
    "value": 872454
  },
  {
    "id": "ECU",
    "value": 410773
  },
  {
    "id": "EGY",
    "value": 124753
  },
  {
    "id": "ERI",
    "value": 572684
  },
  {
    "id": "ESP",
    "value": 418568
  },
  {
    "id": "EST",
    "value": 26682
  },
  {
    "id": "ETH",
    "value": 170155
  },
  {
    "id": "FIN",
    "value": 447653
  },
  {
    "id": "FJI",
    "value": 595350
  },
  {
    "id": "FLK",
    "value": 132492
  },
  {
    "id": "FRA",
    "value": 908240
  },
  {
    "id": "GAB",
    "value": 195220
  },
  {
    "id": "GBR",
    "value": 401583
  },
  {
    "id": "GEO",
    "value": 780408
  },
  {
    "id": "GHA",
    "value": 131966
  },
  {
    "id": "GIN",
    "value": 166769
  },
  {
    "id": "GMB",
    "value": 331952
  },
  {
    "id": "GNB",
    "value": 998378
  },
  {
    "id": "GNQ",
    "value": 590810
  },
  {
    "id": "GRC",
    "value": 450071
  },
  {
    "id": "GTM",
    "value": 817970
  },
  {
    "id": "GUY",
    "value": 747849
  },
  {
    "id": "HND",
    "value": 159545
  },
  {
    "id": "HRV",
    "value": 244805
  },
  {
    "id": "HTI",
    "value": 21843
  },
  {
    "id": "HUN",
    "value": 930949
  },
  {
    "id": "IDN",
    "value": 379376
  },
  {
    "id": "IND",
    "value": 594658
  },
  {
    "id": "IRL",
    "value": 899202
  },
  {
    "id": "IRN",
    "value": 3216
  },
  {
    "id": "IRQ",
    "value": 172436
  },
  {
    "id": "ISL",
    "value": 878356
  },
  {
    "id": "ISR",
    "value": 328093
  },
  {
    "id": "ITA",
    "value": 369883
  },
  {
    "id": "JAM",
    "value": 593381
  },
  {
    "id": "JOR",
    "value": 792088
  },
  {
    "id": "JPN",
    "value": 74871
  },
  {
    "id": "KAZ",
    "value": 720322
  },
  {
    "id": "KEN",
    "value": 942044
  },
  {
    "id": "KGZ",
    "value": 637749
  },
  {
    "id": "KHM",
    "value": 133953
  },
  {
    "id": "OSA",
    "value": 483269
  },
  {
    "id": "KWT",
    "value": 246426
  },
  {
    "id": "LAO",
    "value": 586505
  },
  {
    "id": "LBN",
    "value": 771426
  },
  {
    "id": "LBR",
    "value": 982332
  },
  {
    "id": "LBY",
    "value": 290735
  },
  {
    "id": "LKA",
    "value": 109138
  },
  {
    "id": "LSO",
    "value": 658156
  },
  {
    "id": "LTU",
    "value": 937621
  },
  {
    "id": "LUX",
    "value": 349177
  },
  {
    "id": "LVA",
    "value": 195534
  },
  {
    "id": "MAR",
    "value": 136792
  },
  {
    "id": "MDA",
    "value": 465262
  },
  {
    "id": "MDG",
    "value": 87714
  },
  {
    "id": "MEX",
    "value": 206153
  },
  {
    "id": "MKD",
    "value": 264889
  },
  {
    "id": "MLI",
    "value": 18486
  },
  {
    "id": "MMR",
    "value": 974241
  },
  {
    "id": "MNE",
    "value": 418716
  },
  {
    "id": "MNG",
    "value": 388711
  },
  {
    "id": "MOZ",
    "value": 307890
  },
  {
    "id": "MRT",
    "value": 440078
  },
  {
    "id": "MWI",
    "value": 972417
  },
  {
    "id": "MYS",
    "value": 815425
  },
  {
    "id": "NAM",
    "value": 507223
  },
  {
    "id": "NCL",
    "value": 799023
  },
  {
    "id": "NER",
    "value": 626134
  },
  {
    "id": "NGA",
    "value": 628859
  },
  {
    "id": "NIC",
    "value": 753806
  },
  {
    "id": "NLD",
    "value": 924372
  },
  {
    "id": "NOR",
    "value": 131759
  },
  {
    "id": "NPL",
    "value": 899158
  },
  {
    "id": "NZL",
    "value": 370671
  },
  {
    "id": "OMN",
    "value": 999808
  },
  {
    "id": "PAK",
    "value": 112362
  },
  {
    "id": "PAN",
    "value": 582160
  },
  {
    "id": "PER",
    "value": 982132
  },
  {
    "id": "PHL",
    "value": 5125
  },
  {
    "id": "PNG",
    "value": 377592
  },
  {
    "id": "POL",
    "value": 150449
  },
  {
    "id": "PRI",
    "value": 387331
  },
  {
    "id": "PRT",
    "value": 441148
  },
  {
    "id": "PRY",
    "value": 753766
  },
  {
    "id": "QAT",
    "value": 59744
  },
  {
    "id": "ROU",
    "value": 643927
  },
  {
    "id": "RUS",
    "value": 467183
  },
  {
    "id": "RWA",
    "value": 30134
  },
  {
    "id": "ESH",
    "value": 257976
  },
  {
    "id": "SAU",
    "value": 208380
  },
  {
    "id": "SDN",
    "value": 792133
  },
  {
    "id": "SDS",
    "value": 472974
  },
  {
    "id": "SEN",
    "value": 601265
  },
  {
    "id": "SLB",
    "value": 680327
  },
  {
    "id": "SLE",
    "value": 955856
  },
  {
    "id": "SLV",
    "value": 654348
  },
  {
    "id": "ABV",
    "value": 961178
  },
  {
    "id": "SOM",
    "value": 586376
  },
  {
    "id": "SRB",
    "value": 643326
  },
  {
    "id": "SUR",
    "value": 453333
  },
  {
    "id": "SVK",
    "value": 277601
  },
  {
    "id": "SVN",
    "value": 801946
  },
  {
    "id": "SWZ",
    "value": 25991
  },
  {
    "id": "SYR",
    "value": 761058
  },
  {
    "id": "TCD",
    "value": 942040
  },
  {
    "id": "TGO",
    "value": 151540
  },
  {
    "id": "THA",
    "value": 662387
  },
  {
    "id": "TJK",
    "value": 428201
  },
  {
    "id": "TKM",
    "value": 789524
  },
  {
    "id": "TLS",
    "value": 636265
  },
  {
    "id": "TTO",
    "value": 354340
  },
  {
    "id": "TUN",
    "value": 136541
  },
  {
    "id": "TUR",
    "value": 950260
  },
  {
    "id": "TWN",
    "value": 163833
  },
  {
    "id": "TZA",
    "value": 168855
  },
  {
    "id": "UGA",
    "value": 391123
  },
  {
    "id": "UKR",
    "value": 898773
  },
  {
    "id": "URY",
    "value": 19492
  },
  {
    "id": "USA",
    "value": 685923
  },
  {
    "id": "UZB",
    "value": 686137
  },
  {
    "id": "VEN",
    "value": 126575
  },
  {
    "id": "VNM",
    "value": 428351
  },
  {
    "id": "VUT",
    "value": 977184
  },
  {
    "id": "PSE",
    "value": 410816
  },
  {
    "id": "YEM",
    "value": 488406
  },
  {
    "id": "ZAF",
    "value": 894736
  },
  {
    "id": "ZMB",
    "value": 24282
  },
  {
    "id": "ZWE",
    "value": 719140
  },
  {
    "id": "KOR",
    "value": 7136
  }
]
export const Geography = () => {
  const theme = useTheme();
  return (
    <Box sx={{height:"75vh"    }} >
      <ResponsiveChoropleth 
        data={data}
        features= {geo.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        
        
        enableGraticule={false}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
                  theme={{
    "background": theme.palette.background.default,
    "text": {
        "fontSize": 11,
        "fill": theme.palette.text.primary,
        "outlineWidth": 0,
        "outlineColor": "#ffffff"
    },
    "axis": {
        "domain": {
            "line": {
                "stroke": theme.palette.text.secondary,
                "strokeWidth": 1
            }
        },
        "legend": {
            "text": {
                "fontSize": 12,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "ticks": {
            "line": {
                "stroke": theme.palette.text.secondary,
                "strokeWidth": 1
            },
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "grid": {
        "line": {
            "stroke": "#dddddd",
            "strokeWidth": 0
        }
    },
    "legends": {
        "title": {
            "text": {
                "fontSize": 11,
                "fill": theme.palette.text.secondary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        },
        "text": {
            "fontSize": 11,
            "fill": theme.palette.text.primary,
            "outlineWidth": 0,
            "outlineColor": "#ffffff"
        },
        "ticks": {
            "line": {},
            "text": {
                "fontSize": 10,
                "fill": "#aa0b0b",
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
            }
        }
    },
    "annotations": {
        "text": {
            "fontSize": 13,
            "fill": "#333333",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "link": {
            "stroke": "#000000",
            "strokeWidth": 1,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "outline": {
            "stroke": "#000000",
            "strokeWidth": 2,
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        },
        "symbol": {
            "fill": "#000000",
            "outlineWidth": 2,
            "outlineColor": "#ffffff",
            "outlineOpacity": 1
        }
    },
    "tooltip": {
        "wrapper": {},
        "container": {
            "background": "#ffffff",
            "color": "#333333",
            "fontSize": 12
        },
        "basic": {},
        "chip": {},
        "table": {},
        "tableCell": {},
        "tableCellValue": {}
    }
}}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    /></Box>
  )
}

