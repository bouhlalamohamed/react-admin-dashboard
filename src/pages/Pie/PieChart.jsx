import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from '@nivo/pie'

const data =[
  {
    "id": "erlang",
    "label": "erlang",
    "value": 300,
    "color": "hsl(199, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 393,
    "color": "hsl(244, 70%, 50%)"
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 281,
    "color": "hsl(246, 70%, 50%)"
  },
  {
    "id": "php",
    "label": "php",
    "value": 0,
    "color": "hsl(338, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 358,
    "color": "hsl(57, 70%, 50%)"
  }
]

export const PieChart = () => {
    const theme= useTheme();
  return (
    <Box sx={{ height: 500 }}>
         <ResponsivePie /* or Pie for fixed dimensions */
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={20}
        arcLinkLabelsSkipAngle={30}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}

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
            "strokeWidth": 1
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
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    /></Box>
  )
}
