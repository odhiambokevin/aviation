import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { tokens } from "../theme";

const geoFeatures = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Afghanistan",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [61.210817, 35.650072],
              [62.230651, 35.270664],
              [62.984662, 35.404041],
              [63.193538, 35.857166],
              [63.982896, 36.007957],
              [64.546479, 36.312073],
              [64.746105, 37.111818],
              [65.588948, 37.305217],
              [65.745631, 37.661164],
              [66.217385, 37.39379],
              [66.518607, 37.362784],
              [67.075782, 37.356144],
              [67.83, 37.144994],
              [68.135562, 37.023115],
              [68.859446, 37.344336],
              [69.196273, 37.151144],
              [69.518785, 37.608997],
              [70.116578, 37.588223],
              [70.270574, 37.735165],
              [70.376304, 38.138396],
              [70.806821, 38.486282],
              [71.348131, 38.258905],
              [71.239404, 37.953265],
              [71.541918, 37.905774],
              [71.448693, 37.065645],
              [71.844638, 36.738171],
              [72.193041, 36.948288],
              [72.63689, 37.047558],
              [73.260056, 37.495257],
              [73.948696, 37.421566],
              [74.980002, 37.41999],
              [75.158028, 37.133031],
              [74.575893, 37.020841],
              [74.067552, 36.836176],
              [72.920025, 36.720007],
              [71.846292, 36.509942],
              [71.262348, 36.074388],
              [71.498768, 35.650563],
              [71.613076, 35.153203],
              [71.115019, 34.733126],
              [71.156773, 34.348911],
              [70.881803, 33.988856],
              [69.930543, 34.02012],
              [70.323594, 33.358533],
              [69.687147, 33.105499],
              [69.262522, 32.501944],
              [69.317764, 31.901412],
              [68.926677, 31.620189],
              [68.556932, 31.71331],
              [67.792689, 31.58293],
              [67.683394, 31.303154],
              [66.938891, 31.304911],
              [66.381458, 30.738899],
              [66.346473, 29.887943],
              [65.046862, 29.472181],
              [64.350419, 29.560031],
              [64.148002, 29.340819],
              [63.550261, 29.468331],
              [62.549857, 29.318572],
              [60.874248, 29.829239],
              [61.781222, 30.73585],
              [61.699314, 31.379506],
              [60.941945, 31.548075],
              [60.863655, 32.18292],
              [60.536078, 32.981269],
              [60.9637, 33.528832],
              [60.52843, 33.676446],
              [60.803193, 34.404102],
              [61.210817, 35.650072],
            ],
          ],
        },
        id: "AFG",
      },
      {
        type: "Feature",
        properties: {
          name: "Angola",
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [16.326528, -5.87747],
                [16.57318, -6.622645],
                [16.860191, -7.222298],
                [17.089996, -7.545689],
                [17.47297, -8.068551],
                [18.134222, -7.987678],
                [18.464176, -7.847014],
                [19.016752, -7.988246],
                [19.166613, -7.738184],
                [19.417502, -7.155429],
                [20.037723, -7.116361],
                [20.091622, -6.94309],
                [20.601823, -6.939318],
                [20.514748, -7.299606],
                [21.728111, -7.290872],
                [21.746456, -7.920085],
                [21.949131, -8.305901],
                [21.801801, -8.908707],
                [21.875182, -9.523708],
                [22.208753, -9.894796],
                [22.155268, -11.084801],
                [22.402798, -10.993075],
                [22.837345, -11.017622],
                [23.456791, -10.867863],
                [23.912215, -10.926826],
                [24.017894, -11.237298],
                [23.904154, -11.722282],
                [24.079905, -12.191297],
                [23.930922, -12.565848],
                [24.016137, -12.911046],
                [21.933886, -12.898437],
                [21.887843, -16.08031],
                [22.562478, -16.898451],
                [23.215048, -17.523116],
                [21.377176, -17.930636],
                [18.956187, -17.789095],
                [18.263309, -17.309951],
                [14.209707, -17.353101],
                [14.058501, -17.423381],
                [13.462362, -16.971212],
                [12.814081, -16.941343],
                [12.215461, -17.111668],
                [11.734199, -17.301889],
                [11.640096, -16.673142],
                [11.778537, -15.793816],
                [12.123581, -14.878316],
                [12.175619, -14.449144],
                [12.500095, -13.5477],
                [12.738479, -13.137906],
                [13.312914, -12.48363],
                [13.633721, -12.038645],
                [13.738728, -11.297863],
                [13.686379, -10.731076],
                [13.387328, -10.373578],
                [13.120988, -9.766897],
                [12.87537, -9.166934],
                [12.929061, -8.959091],
                [13.236433, -8.562629],
                [12.93304, -7.596539],
                [12.728298, -6.927122],
                [12.227347, -6.294448],
                [12.322432, -6.100092],
                [12.735171, -5.965682],
                [13.024869, -5.984389],
                [13.375597, -5.864241],
                [16.326528, -5.87747],
              ],
            ],
            [
              [
                [12.436688, -5.684304],
                [12.182337, -5.789931],
                [11.914963, -5.037987],
                [12.318608, -4.60623],
                [12.62076, -4.438023],
                [12.995517, -4.781103],
                [12.631612, -4.991271],
                [12.468004, -5.248362],
                [12.436688, -5.684304],
              ],
            ],
          ],
        },
        id: "AGO",
      },
    ],
};

const data = [
    {
      id: "AFG",
      value: 520600,
    },
    {
      id: "AGO",
      value: 949905,
    },
    {
      id: "ALB",
      value: 329910,
    },
    {
      id: "ARE",
      value: 675484,
    },
    {
      id: "ARG",
      value: 432239,
    },
    {
      id: "ARM",
      value: 288305,
    },
    {
      id: "ATA",
      value: 415648,
    },
    {
      id: "ATF",
      value: 665159,
    },
    {
      id: "AUT",
      value: 798526,
    },
    {
      id: "AZE",
      value: 481678,
    },
    {
      id: "BDI",
      value: 496457,
    },
    {
      id: "BEL",
      value: 252276,
    },
    {
      id: "BEN",
      value: 440315,
    },
    {
      id: "BFA",
      value: 343752,
    },
    {
      id: "BGD",
      value: 920203,
    },
    {
      id: "BGR",
      value: 261196,
    },
    {
      id: "BHS",
      value: 421551,
    },
    {
      id: "BIH",
      value: 974745,
    },
    {
      id: "BLR",
      value: 349288,
    },
    {
      id: "BLZ",
      value: 305983,
    },
    {
      id: "BOL",
      value: 430840,
    },
    {
      id: "BRN",
      value: 345666,
    },
    {
      id: "BTN",
      value: 649678,
    },
    {
      id: "BWA",
      value: 319392,
    },
    {
      id: "CAF",
      value: 722549,
    },
    {
      id: "CAN",
      value: 332843,
    },
    {
      id: "CHE",
      value: 122159,
    },
    {
      id: "CHL",
      value: 811736,
    },
    {
      id: "CHN",
      value: 593604,
    },
    {
      id: "CIV",
      value: 143219,
    },
    {
      id: "CMR",
      value: 630627,
    },
    {
      id: "COG",
      value: 498556,
    },
    {
      id: "COL",
      value: 660527,
    },
    {
      id: "CRI",
      value: 60262,
    },
    {
      id: "CUB",
      value: 177870,
    },
    {
      id: "-99",
      value: 463208,
    },
    {
      id: "CYP",
      value: 945909,
    },
    {
      id: "CZE",
      value: 500109,
    },
    {
      id: "DEU",
      value: 63345,
    },
    {
      id: "DJI",
      value: 634523,
    },
    {
      id: "DNK",
      value: 731068,
    },
    {
      id: "DOM",
      value: 262538,
    },
    {
      id: "DZA",
      value: 760695,
    },
    {
      id: "ECU",
      value: 301263,
    },
    {
      id: "EGY",
      value: 148475,
    },
    {
      id: "ERI",
      value: 939504,
    },
    {
      id: "ESP",
      value: 706050,
    },
    {
      id: "EST",
      value: 977015,
    },
    {
      id: "ETH",
      value: 461734,
    },
    {
      id: "FIN",
      value: 22800,
    },
    {
      id: "FJI",
      value: 18985,
    },
    {
      id: "FLK",
      value: 64986,
    },
    {
      id: "FRA",
      value: 447457,
    },
    {
      id: "GAB",
      value: 669675,
    },
    {
      id: "GBR",
      value: 757120,
    },
    {
      id: "GEO",
      value: 158702,
    },
    {
      id: "GHA",
      value: 893180,
    },
    {
      id: "GIN",
      value: 877288,
    },
    {
      id: "GMB",
      value: 724530,
    },
    {
      id: "GNB",
      value: 387753,
    },
    {
      id: "GNQ",
      value: 706118,
    },
    {
      id: "GRC",
      value: 377796,
    },
    {
      id: "GTM",
      value: 66890,
    },
    {
      id: "GUY",
      value: 719300,
    },
    {
      id: "HND",
      value: 739590,
    },
    {
      id: "HRV",
      value: 929467,
    },
    {
      id: "HTI",
      value: 538961,
    },
    {
      id: "HUN",
      value: 146095,
    },
    {
      id: "IDN",
      value: 490681,
    },
    {
      id: "IND",
      value: 549818,
    },
    {
      id: "IRL",
      value: 630163,
    },
    {
      id: "IRN",
      value: 596921,
    },
    {
      id: "IRQ",
      value: 767023,
    },
    {
      id: "ISL",
      value: 478682,
    },
    {
      id: "ISR",
      value: 963688,
    },
    {
      id: "ITA",
      value: 393089,
    },
    {
      id: "JAM",
      value: 83173,
    },
    {
      id: "JOR",
      value: 52005,
    },
    {
      id: "JPN",
      value: 199174,
    },
    {
      id: "KAZ",
      value: 181424,
    },
    {
      id: "KEN",
      value: 60946,
    },
    {
      id: "KGZ",
      value: 432478,
    },
    {
      id: "KHM",
      value: 254461,
    },
    {
      id: "OSA",
      value: 942447,
    },
    {
      id: "KWT",
      value: 414413,
    },
    {
      id: "LAO",
      value: 448339,
    },
    {
      id: "LBN",
      value: 620090,
    },
    {
      id: "LBR",
      value: 435950,
    },
    {
      id: "LBY",
      value: 75091,
    },
    {
      id: "LKA",
      value: 595124,
    },
    {
      id: "LSO",
      value: 483524,
    },
    {
      id: "LTU",
      value: 867357,
    },
    {
      id: "LUX",
      value: 689172,
    },
    {
      id: "LVA",
      value: 742980,
    },
    {
      id: "MAR",
      value: 236538,
    },
    {
      id: "MDA",
      value: 926836,
    },
    {
      id: "MDG",
      value: 840840,
    },
    {
      id: "MEX",
      value: 353910,
    },
    {
      id: "MKD",
      value: 505842,
    },
    {
      id: "MLI",
      value: 286082,
    },
    {
      id: "MMR",
      value: 915544,
    },
    {
      id: "MNE",
      value: 609500,
    },
    {
      id: "MNG",
      value: 410428,
    },
    {
      id: "MOZ",
      value: 32868,
    },
    {
      id: "MRT",
      value: 375671,
    },
    {
      id: "MWI",
      value: 591935,
    },
    {
      id: "MYS",
      value: 991644,
    },
    {
      id: "NAM",
      value: 701897,
    },
    {
      id: "NCL",
      value: 144098,
    },
    {
      id: "NER",
      value: 312944,
    },
    {
      id: "NGA",
      value: 862877,
    },
    {
      id: "NIC",
      value: 90831,
    },
    {
      id: "NLD",
      value: 281879,
    },
    {
      id: "NOR",
      value: 224537,
    },
    {
      id: "NPL",
      value: 322331,
    },
    {
      id: "NZL",
      value: 86615,
    },
    {
      id: "OMN",
      value: 707881,
    },
    {
      id: "PAK",
      value: 158577,
    },
    {
      id: "PAN",
      value: 738579,
    },
    {
      id: "PER",
      value: 248751,
    },
    {
      id: "PHL",
      value: 557292,
    },
    {
      id: "PNG",
      value: 516874,
    },
    {
      id: "POL",
      value: 682137,
    },
    {
      id: "PRI",
      value: 957399,
    },
    {
      id: "PRT",
      value: 846430,
    },
    {
      id: "PRY",
      value: 720555,
    },
    {
      id: "QAT",
      value: 478726,
    },
    {
      id: "ROU",
      value: 259318,
    },
    {
      id: "RUS",
      value: 268735,
    },
    {
      id: "RWA",
      value: 136781,
    },
    {
      id: "ESH",
      value: 151957,
    },
    {
      id: "SAU",
      value: 111821,
    },
    {
      id: "SDN",
      value: 927112,
    },
    {
      id: "SDS",
      value: 966473,
    },
    {
      id: "SEN",
      value: 158085,
    },
    {
      id: "SLB",
      value: 178389,
    },
    {
      id: "SLE",
      value: 528433,
    },
    {
      id: "SLV",
      value: 353467,
    },
    {
      id: "ABV",
      value: 251,
    },
    {
      id: "SOM",
      value: 445243,
    },
    {
      id: "SRB",
      value: 202402,
    },
    {
      id: "SUR",
      value: 972121,
    },
    {
      id: "SVK",
      value: 319923,
    },
    {
      id: "SVN",
      value: 728766,
    },
    {
      id: "SWZ",
      value: 379669,
    },
    {
      id: "SYR",
      value: 16221,
    },
    {
      id: "TCD",
      value: 101273,
    },
    {
      id: "TGO",
      value: 498411,
    },
    {
      id: "THA",
      value: 506906,
    },
    {
      id: "TJK",
      value: 613093,
    },
    {
      id: "TKM",
      value: 327016,
    },
    {
      id: "TLS",
      value: 607972,
    },
    {
      id: "TTO",
      value: 936365,
    },
    {
      id: "TUN",
      value: 898416,
    },
    {
      id: "TUR",
      value: 237783,
    },
    {
      id: "TWN",
      value: 878213,
    },
    {
      id: "TZA",
      value: 442174,
    },
    {
      id: "UGA",
      value: 720710,
    },
    {
      id: "UKR",
      value: 74172,
    },
    {
      id: "URY",
      value: 753177,
    },
    {
      id: "USA",
      value: 658725,
    },
    {
      id: "UZB",
      value: 550313,
    },
    {
      id: "VEN",
      value: 707492,
    },
    {
      id: "VNM",
      value: 538907,
    },
    {
      id: "VUT",
      value: 650646,
    },
    {
      id: "PSE",
      value: 476078,
    },
    {
      id: "YEM",
      value: 957751,
    },
    {
      id: "ZAF",
      value: 836949,
    },
    {
      id: "ZMB",
      value: 714503,
    },
    {
      id: "ZWE",
      value: 405217,
    },
    {
      id: "KOR",
      value: 171135,
    },
  ];

  const GeographyChart = ({ isDashboard = false }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <ResponsiveChoropleth
        data={data}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#ffffff"
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: colors.grey[100],
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    );
  };
  
  export default GeographyChart;