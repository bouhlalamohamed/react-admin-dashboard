import React from 'react'
import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from '@nivo/line'
const data=[
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 124
      },
      {
        "x": "helicopter",
        "y": 33
      },
      {
        "x": "boat",
        "y": 7
      },
      {
        "x": "train",
        "y": 117
      },
      {
        "x": "subway",
        "y": 241
      },
      {
        "x": "bus",
        "y": 213
      },
      {
        "x": "car",
        "y": 291
      },
      {
        "x": "moto",
        "y": 180
      },
      {
        "x": "bicycle",
        "y": 200
      },
      {
        "x": "horse",
        "y": 35
      },
      {
        "x": "skateboard",
        "y": 10
      },
      {
        "x": "others",
        "y": 270
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 124
      },
      {
        "x": "helicopter",
        "y": 163
      },
      {
        "x": "boat",
        "y": 179
      },
      {
        "x": "train",
        "y": 267
      },
      {
        "x": "subway",
        "y": 259
      },
      {
        "x": "bus",
        "y": 240
      },
      {
        "x": "car",
        "y": 213
      },
      {
        "x": "moto",
        "y": 184
      },
      {
        "x": "bicycle",
        "y": 122
      },
      {
        "x": "horse",
        "y": 39
      },
      {
        "x": "skateboard",
        "y": 176
      },
      {
        "x": "others",
        "y": 151
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 168
      },
      {
        "x": "helicopter",
        "y": 17
      },
      {
        "x": "boat",
        "y": 123
      },
      {
        "x": "train",
        "y": 273
      },
      {
        "x": "subway",
        "y": 92
      },
      {
        "x": "bus",
        "y": 24
      },
      {
        "x": "car",
        "y": 130
      },
      {
        "x": "moto",
        "y": 8
      },
      {
        "x": "bicycle",
        "y": 223
      },
      {
        "x": "horse",
        "y": 201
      },
      {
        "x": "skateboard",
        "y": 189
      },
      {
        "x": "others",
        "y": 287
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 232
      },
      {
        "x": "helicopter",
        "y": 12
      },
      {
        "x": "boat",
        "y": 213
      },
      {
        "x": "train",
        "y": 282
      },
      {
        "x": "subway",
        "y": 174
      },
      {
        "x": "bus",
        "y": 215
      },
      {
        "x": "car",
        "y": 188
      },
      {
        "x": "moto",
        "y": 76
      },
      {
        "x": "bicycle",
        "y": 194
      },
      {
        "x": "horse",
        "y": 204
      },
      {
        "x": "skateboard",
        "y": 238
      },
      {
        "x": "others",
        "y": 148
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 146
      },
      {
        "x": "helicopter",
        "y": 241
      },
      {
        "x": "boat",
        "y": 115
      },
      {
        "x": "train",
        "y": 46
      },
      {
        "x": "subway",
        "y": 148
      },
      {
        "x": "bus",
        "y": 114
      },
      {
        "x": "car",
        "y": 5
      },
      {
        "x": "moto",
        "y": 292
      },
      {
        "x": "bicycle",
        "y": 50
      },
      {
        "x": "horse",
        "y": 116
      },
      {
        "x": "skateboard",
        "y": 76
      },
      {
        "x": "others",
        "y": 104
      }
    ]
  }
]

export const Line = () => {
    const theme =useTheme()
  return (
    <Box sx={{ height: 400 }}>
         <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
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
                "fill": theme.palette.text.secondary,
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
                "fill": theme.palette.text.secondary,
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
    /></Box>
  )
}

 