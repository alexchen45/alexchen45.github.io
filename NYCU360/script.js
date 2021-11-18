(function(){
    var script = { "definitions": [
 {
  "id": "camera_2315AEC9_31B3_8DE0_41C4_C59F596A72BD",
  "initialPosition": {
   "yaw": -177.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23D18EA3_31B3_8DA0_41C0_DE50BF18E9B8",
  "initialPosition": {
   "yaw": 85.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20F1BDDC_31B3_8FE0_4166_BCF00E6A4597",
  "initialPosition": {
   "yaw": -3.58,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_20303F0B_29D8_8743_41B0_0880E967F034",
  "label": "IMG_20211103_154021_00_155processed",
  "thumbnailUrl": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_t.jpg",
  "class": "Panorama",
  "pitch": 0,
  "hfov": 360,
  "frames": [
   {
    "overlays": [
     {
      "id": "overlay_3A55FE3B_29E8_8943_41C2_1DC547F76F7F",
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258, this.camera_22499D0B_31B3_8C60_41AB_8E1BB88DFFF0); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Circle Arrow 01a"
      },
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_0_HS_0_0_0_map.gif"
          }
         ],
         "frameCount": 24,
         "rowCount": 6,
         "frameDuration": 41,
         "colCount": 4,
         "class": "AnimatedImageResource"
        },
        "yaw": -106.76,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.97,
        "hfov": 16.63
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 1110,
           "width": 1220,
           "class": "ImageResourceLevel",
           "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_0_HS_0_0.png"
          }
         ],
         "frameCount": 24,
         "rowCount": 6,
         "frameDuration": 41,
         "colCount": 4,
         "class": "AnimatedImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100,
        "pitch": -22.97,
        "hfov": 16.63,
        "yaw": -106.76
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true
     },
     {
      "id": "overlay_3A636A88_29E9_894D_41BB_EDC3BAF0CCCE",
      "enabledInCardboard": true,
      "areas": [
       {
        "click": "this.startPanoramaWithCamera(this.panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F, this.camera_25B99D13_31B3_8C60_416E_217FA03BE546); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Circle Arrow 01a"
      },
      "maps": [
       {
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 26,
           "class": "ImageResourceLevel",
           "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_0_HS_1_0_0_map.gif"
          }
         ],
         "frameCount": 24,
         "rowCount": 6,
         "frameDuration": 41,
         "colCount": 4,
         "class": "AnimatedImageResource"
        },
        "yaw": 90.19,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.89,
        "hfov": 16.76
       }
      ],
      "items": [
       {
        "image": {
         "levels": [
          {
           "height": 1110,
           "width": 1220,
           "class": "ImageResourceLevel",
           "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_0_HS_1_0.png"
          }
         ],
         "frameCount": 24,
         "rowCount": 6,
         "frameDuration": 41,
         "colCount": 4,
         "class": "AnimatedImageResource"
        },
        "class": "HotspotPanoramaOverlayImage",
        "distance": 100,
        "pitch": -21.89,
        "hfov": 16.76,
        "yaw": 90.19
       }
      ],
      "rollOverDisplay": false,
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "tags": [
        "oculusgo",
        "ipadpro"
       ],
       "class": "ImageResourceLevel",
       "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_hq.jpeg"
      },
      {
       "height": 1024,
       "width": 2048,
       "tags": "preload",
       "class": "ImageResourceLevel",
       "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_lq.jpeg"
      },
      {
       "height": 2001,
       "width": 4002,
       "class": "ImageResourceLevel",
       "url": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_20303F0B_29D8_8743_41B0_0880E967F034_t.jpg",
    "class": "SphericPanoramaFrame"
   }
  ],
  "adjacentPanoramas": [
   {
    "panorama": {
     "id": "panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258",
     "label": "IMG_20211103_153733_00_154processed",
     "thumbnailUrl": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_t.jpg",
     "class": "Panorama",
     "pitch": 0,
     "hfov": 360,
     "frames": [
      {
       "overlays": [
        {
         "id": "overlay_27D9F1CD_29E9_9AC7_41BB_EFBF985FBB01",
         "enabledInCardboard": true,
         "areas": [
          {
           "click": "this.startPanoramaWithCamera(this.panorama_20303F0B_29D8_8743_41B0_0880E967F034, this.camera_23924E7D_31B3_8CA0_419C_3FA712AEEC3B); this.mainPlayList.set('selectedIndex', 2)",
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "data": {
          "label": "Circle Arrow 01a Right-Up"
         },
         "maps": [
          {
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 26,
              "class": "ImageResourceLevel",
              "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_0_HS_0_0_0_map.gif"
             }
            ],
            "frameCount": 24,
            "rowCount": 6,
            "frameDuration": 41,
            "colCount": 4,
            "class": "AnimatedImageResource"
           },
           "yaw": -65.82,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": -17.38,
           "hfov": 17.23
          }
         ],
         "items": [
          {
           "image": {
            "levels": [
             {
              "height": 1110,
              "width": 1220,
              "class": "ImageResourceLevel",
              "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_0_HS_0_0.png"
             }
            ],
            "frameCount": 24,
            "rowCount": 6,
            "frameDuration": 41,
            "colCount": 4,
            "class": "AnimatedImageResource"
           },
           "class": "HotspotPanoramaOverlayImage",
           "distance": 50,
           "pitch": -17.38,
           "hfov": 17.23,
           "yaw": -65.82
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "id": "overlay_26CBEA86_29E8_8945_41AB_74FDEEB68CA2",
         "enabledInCardboard": true,
         "areas": [
          {
           "toolTip": "Tap here",
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935, this.camera_23A78E76_31B3_8CA0_4172_08430F337F43); this.mainPlayList.set('selectedIndex', 14)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "data": {
          "label": "Polygon"
         },
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 65,
              "class": "ImageResourceLevel",
              "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_0_HS_1_1_0_map.gif"
             }
            ]
           },
           "yaw": 137.25,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 3.78,
           "hfov": 26.38
          }
         ],
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 1381,
              "width": 453,
              "class": "ImageResourceLevel",
              "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_0_HS_1_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "roll": 0,
           "distance": 50,
           "pitch": 3.78,
           "hfov": 26.38,
           "yaw": 137.25
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        },
        {
         "id": "overlay_6A64392C_2A29_8B45_41B7_7F07ABAB66D6",
         "enabledInCardboard": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "data": {
          "label": "\u524d\u5f80\u56db\u6a13"
         },
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 48,
              "width": 16,
              "class": "ImageResourceLevel",
              "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_0_HS_2_0_map.gif"
             }
            ]
           },
           "yaw": 139.51,
           "class": "HotspotPanoramaOverlayMap",
           "pitch": 2.71,
           "hfov": 12.07
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "pitch": 2.71,
           "hfov": 12.07,
           "yaw": 139.51,
           "distance": 50,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 609,
              "width": 203,
              "class": "ImageResourceLevel",
              "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_0_HS_2_0.png"
             }
            ]
           }
          }
         ],
         "rollOverDisplay": false,
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "tags": [
           "oculusgo",
           "ipadpro"
          ],
          "class": "ImageResourceLevel",
          "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_hq.jpeg"
         },
         {
          "height": 1024,
          "width": 2048,
          "tags": "preload",
          "class": "ImageResourceLevel",
          "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_lq.jpeg"
         },
         {
          "height": 2001,
          "width": 4002,
          "class": "ImageResourceLevel",
          "url": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_t.jpg",
       "class": "SphericPanoramaFrame"
      }
     ],
     "adjacentPanoramas": [
      {
       "panorama": {
        "id": "panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935",
        "label": "IMG_20211103_155237_00_167processed",
        "thumbnailUrl": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_t.jpg",
        "class": "Panorama",
        "pitch": 0,
        "hfov": 360,
        "frames": [
         {
          "overlays": [
           {
            "id": "overlay_3AD87920_29E9_8B7D_416B_6214F8C96058",
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258, this.camera_2060FE50_31B3_8CE0_41C5_122C05B39D22); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Polygon"
            },
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 35,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_0_1_0_map.gif"
                }
               ]
              },
              "yaw": -135.84,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -4.12,
              "hfov": 10.18
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 977,
                 "width": 172,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "distance": 50,
              "pitch": -4.12,
              "hfov": 10.18,
              "yaw": -135.84
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "id": "overlay_33D4A1B7_2A38_9B43_4198_FECFC716794B",
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B, this.camera_205CAE58_31B3_8CE0_41B7_F6D2C1DAA52F); this.mainPlayList.set('selectedIndex', 13)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Circle Arrow 01a"
            },
            "maps": [
             {
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 26,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_1_0_0_map.gif"
                }
               ],
               "frameCount": 24,
               "rowCount": 6,
               "frameDuration": 41,
               "colCount": 4,
               "class": "AnimatedImageResource"
              },
              "yaw": 83.52,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -25.68,
              "hfov": 16.28
             }
            ],
            "items": [
             {
              "image": {
               "levels": [
                {
                 "height": 1110,
                 "width": 1220,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_1_0.png"
                }
               ],
               "frameCount": 24,
               "rowCount": 6,
               "frameDuration": 41,
               "colCount": 4,
               "class": "AnimatedImageResource"
              },
              "class": "HotspotPanoramaOverlayImage",
              "distance": 100,
              "pitch": -25.68,
              "hfov": 16.28,
              "yaw": 83.52
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "id": "overlay_15594A86_2A38_8945_41A6_0801C264F993",
            "enabledInCardboard": true,
            "areas": [
             {
              "click": "this.startPanoramaWithCamera(this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F, this.camera_204E2E5F_31B3_8CE0_419B_1F483A2672E7); this.mainPlayList.set('selectedIndex', 15)",
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Polygon"
            },
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 38,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_2_1_0_map.gif"
                }
               ]
              },
              "yaw": -144.91,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -3.62,
              "hfov": 9.42
             }
            ],
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 825,
                 "width": 159,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_2_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "roll": 0,
              "distance": 50,
              "pitch": -3.62,
              "hfov": 9.42,
              "yaw": -144.91
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "id": "overlay_6A334A98_2A27_894D_41B9_4A703AA27D81",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "data": {
             "label": "\u524d\u5f80\u4e09\u6a13"
            },
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 53,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_3_0_map.gif"
                }
               ]
              },
              "yaw": -142.12,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -10.46,
              "hfov": 10.64
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -10.46,
              "hfov": 10.64,
              "yaw": -142.12,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 609,
                 "width": 182,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_3_0.png"
                }
               ]
              }
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           },
           {
            "id": "overlay_6B17ED0B_2AD8_8B43_41C3_8E64623247A0",
            "enabledInCardboard": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "data": {
             "label": "\u524d\u5f80\u4e94\u6a13"
            },
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 53,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_4_0_map.gif"
                }
               ]
              },
              "yaw": -133.11,
              "class": "HotspotPanoramaOverlayMap",
              "pitch": -9.38,
              "hfov": 10.68
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -9.38,
              "hfov": 10.68,
              "yaw": -133.11,
              "distance": 50,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 609,
                 "width": 182,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_0_HS_4_0.png"
                }
               ]
              }
             }
            ],
            "rollOverDisplay": false,
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "tags": [
              "oculusgo",
              "ipadpro"
             ],
             "class": "ImageResourceLevel",
             "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_hq.jpeg"
            },
            {
             "height": 1024,
             "width": 2048,
             "tags": "preload",
             "class": "ImageResourceLevel",
             "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_lq.jpeg"
            },
            {
             "height": 2001,
             "width": 4002,
             "class": "ImageResourceLevel",
             "url": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_t.jpg",
          "class": "SphericPanoramaFrame"
         }
        ],
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258",
          "backwardYaw": 137.25,
          "yaw": -135.84,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": {
           "id": "panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B",
           "label": "IMG_20211103_155137_00_166processed",
           "thumbnailUrl": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_t.jpg",
           "class": "Panorama",
           "pitch": 0,
           "hfov": 360,
           "frames": [
            {
             "overlays": [
              {
               "id": "overlay_32E641D5_2A38_9AC7_41C0_743BFE99AF50",
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1, this.camera_238F0B7C_31B3_B4A0_41A3_D47860AD1479); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "data": {
                "label": "Circle Arrow 01a Right-Up"
               },
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 26,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_0_HS_0_0_0_map.gif"
                   }
                  ],
                  "frameCount": 24,
                  "rowCount": 6,
                  "frameDuration": 41,
                  "colCount": 4,
                  "class": "AnimatedImageResource"
                 },
                 "yaw": -173.13,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -23.51,
                 "hfov": 16.56
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 1110,
                    "width": 1220,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_0_HS_0_0.png"
                   }
                  ],
                  "frameCount": 24,
                  "rowCount": 6,
                  "frameDuration": 41,
                  "colCount": 4,
                  "class": "AnimatedImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "pitch": -23.51,
                 "hfov": 16.56,
                 "yaw": -173.13
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              },
              {
               "id": "overlay_33D96CF9_2A39_8ACF_41C4_E48A8D4DEB08",
               "enabledInCardboard": true,
               "areas": [
                {
                 "click": "this.startPanoramaWithCamera(this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935, this.camera_23800B84_31B3_B460_41A5_DFA0C8087DA5); this.mainPlayList.set('selectedIndex', 14)",
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                },
                {
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "data": {
                "label": "Circle Arrow 01a Right-Up"
               },
               "maps": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 16,
                    "width": 26,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_0_HS_1_0_0_map.gif"
                   }
                  ],
                  "frameCount": 24,
                  "rowCount": 6,
                  "frameDuration": 41,
                  "colCount": 4,
                  "class": "AnimatedImageResource"
                 },
                 "yaw": -15.86,
                 "class": "HotspotPanoramaOverlayMap",
                 "pitch": -16.66,
                 "hfov": 17.3
                }
               ],
               "items": [
                {
                 "image": {
                  "levels": [
                   {
                    "height": 1110,
                    "width": 1220,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_0_HS_1_0.png"
                   }
                  ],
                  "frameCount": 24,
                  "rowCount": 6,
                  "frameDuration": 41,
                  "colCount": 4,
                  "class": "AnimatedImageResource"
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "distance": 50,
                 "pitch": -16.66,
                 "hfov": 17.3,
                 "yaw": -15.86
                }
               ],
               "rollOverDisplay": false,
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true
              }
             ],
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "tags": [
                 "oculusgo",
                 "ipadpro"
                ],
                "class": "ImageResourceLevel",
                "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_hq.jpeg"
               },
               {
                "height": 1024,
                "width": 2048,
                "tags": "preload",
                "class": "ImageResourceLevel",
                "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_lq.jpeg"
               },
               {
                "height": 2001,
                "width": 4002,
                "class": "ImageResourceLevel",
                "url": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_t.jpg",
             "class": "SphericPanoramaFrame"
            }
           ],
           "adjacentPanoramas": [
            {
             "panorama": {
              "id": "panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1",
              "label": "IMG_20211103_155030_00_165processed",
              "thumbnailUrl": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_t.jpg",
              "class": "Panorama",
              "pitch": 0,
              "hfov": 360,
              "frames": [
               {
                "overlays": [
                 {
                  "id": "overlay_310DF576_2A39_BBC5_41BD_B74D27EDEF21",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E, this.camera_2140ED6C_31B3_8CA0_41BC_ABCB2EA38EF4); this.mainPlayList.set('selectedIndex', 11)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "data": {
                   "label": "Circle Arrow 01a"
                  },
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 26,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_0_HS_0_0_0_map.gif"
                      }
                     ],
                     "frameCount": 24,
                     "rowCount": 6,
                     "frameDuration": 41,
                     "colCount": 4,
                     "class": "AnimatedImageResource"
                    },
                    "yaw": -179.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -22.97,
                    "hfov": 16.63
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 1110,
                       "width": 1220,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_0_HS_0_0.png"
                      }
                     ],
                     "frameCount": 24,
                     "rowCount": 6,
                     "frameDuration": 41,
                     "colCount": 4,
                     "class": "AnimatedImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100,
                    "pitch": -22.97,
                    "hfov": 16.63,
                    "yaw": -179.99
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true
                 },
                 {
                  "id": "overlay_3360C620_2A38_997D_41C2_10A96313300C",
                  "enabledInCardboard": true,
                  "areas": [
                   {
                    "click": "this.startPanoramaWithCamera(this.panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B, this.camera_214CCD63_31B3_8CA0_418B_AD5C3DC167F7); this.mainPlayList.set('selectedIndex', 13)",
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   },
                   {
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "data": {
                   "label": "Circle Arrow 01a"
                  },
                  "maps": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 26,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_0_HS_1_0_0_map.gif"
                      }
                     ],
                     "frameCount": 24,
                     "rowCount": 6,
                     "frameDuration": 41,
                     "colCount": 4,
                     "class": "AnimatedImageResource"
                    },
                    "yaw": 0.01,
                    "class": "HotspotPanoramaOverlayMap",
                    "pitch": -27.66,
                    "hfov": 16
                   }
                  ],
                  "items": [
                   {
                    "image": {
                     "levels": [
                      {
                       "height": 1110,
                       "width": 1220,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_0_HS_1_0.png"
                      }
                     ],
                     "frameCount": 24,
                     "rowCount": 6,
                     "frameDuration": 41,
                     "colCount": 4,
                     "class": "AnimatedImageResource"
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "distance": 100,
                    "pitch": -27.66,
                    "hfov": 16,
                    "yaw": 0.01
                   }
                  ],
                  "rollOverDisplay": false,
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true
                 }
                ],
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "tags": [
                    "oculusgo",
                    "ipadpro"
                   ],
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_hq.jpeg"
                  },
                  {
                   "height": 1024,
                   "width": 2048,
                   "tags": "preload",
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_lq.jpeg"
                  },
                  {
                   "height": 2001,
                   "width": 4002,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_t.jpg",
                "class": "SphericPanoramaFrame"
               }
              ],
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B",
                "backwardYaw": -173.13,
                "yaw": 0.01,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "panorama": {
                 "id": "panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E",
                 "label": "IMG_20211103_154839_00_164processed",
                 "thumbnailUrl": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_t.jpg",
                 "class": "Panorama",
                 "pitch": 0,
                 "hfov": 360,
                 "frames": [
                  {
                   "overlays": [
                    {
                     "id": "overlay_325C2847_2A38_89C3_41BB_4E2F2ACA6194",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21, this.camera_23962B73_31B3_B4A0_41B6_EC054EEF6F21); this.mainPlayList.set('selectedIndex', 10)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "data": {
                      "label": "Circle Arrow 01a"
                     },
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 26,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_0_HS_0_0_0_map.gif"
                         }
                        ],
                        "frameCount": 24,
                        "rowCount": 6,
                        "frameDuration": 41,
                        "colCount": 4,
                        "class": "AnimatedImageResource"
                       },
                       "yaw": 179.65,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -40.29,
                       "hfov": 13.78
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 1110,
                          "width": 1220,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_0_HS_0_0.png"
                         }
                        ],
                        "frameCount": 24,
                        "rowCount": 6,
                        "frameDuration": 41,
                        "colCount": 4,
                        "class": "AnimatedImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 100,
                       "pitch": -40.29,
                       "hfov": 13.78,
                       "yaw": 179.65
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true
                    },
                    {
                     "id": "overlay_3383A3A6_2A3B_FF45_41AF_5E0825CE0C9D",
                     "enabledInCardboard": true,
                     "areas": [
                      {
                       "click": "this.startPanoramaWithCamera(this.panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1, this.camera_239CBB6B_31B3_B4A0_41BF_AA1AD9E45897); this.mainPlayList.set('selectedIndex', 12)",
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      },
                      {
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "data": {
                      "label": "Circle Arrow 01a"
                     },
                     "maps": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 26,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_0_HS_1_0_0_map.gif"
                         }
                        ],
                        "frameCount": 24,
                        "rowCount": 6,
                        "frameDuration": 41,
                        "colCount": 4,
                        "class": "AnimatedImageResource"
                       },
                       "yaw": -1.79,
                       "class": "HotspotPanoramaOverlayMap",
                       "pitch": -22.25,
                       "hfov": 16.71
                      }
                     ],
                     "items": [
                      {
                       "image": {
                        "levels": [
                         {
                          "height": 1110,
                          "width": 1220,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_0_HS_1_0.png"
                         }
                        ],
                        "frameCount": 24,
                        "rowCount": 6,
                        "frameDuration": 41,
                        "colCount": 4,
                        "class": "AnimatedImageResource"
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "distance": 100,
                       "pitch": -22.25,
                       "hfov": 16.71,
                       "yaw": -1.79
                      }
                     ],
                     "rollOverDisplay": false,
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true
                    }
                   ],
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "tags": [
                       "oculusgo",
                       "ipadpro"
                      ],
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_hq.jpeg"
                     },
                     {
                      "height": 1024,
                      "width": 2048,
                      "tags": "preload",
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_lq.jpeg"
                     },
                     {
                      "height": 2001,
                      "width": 4002,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E.jpeg"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_t.jpg",
                   "class": "SphericPanoramaFrame"
                  }
                 ],
                 "adjacentPanoramas": [
                  {
                   "panorama": "this.panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1",
                   "backwardYaw": -179.99,
                   "yaw": -1.79,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  },
                  {
                   "panorama": {
                    "id": "panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21",
                    "label": "IMG_20211103_154727_00_163processed",
                    "thumbnailUrl": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_t.jpg",
                    "class": "Panorama",
                    "pitch": 0,
                    "hfov": 360,
                    "frames": [
                     {
                      "overlays": [
                       {
                        "id": "overlay_3DF0AEE5_2A39_86C7_41C2_6471BC377292",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5, this.camera_23E98B9C_31B3_B460_41C6_87DCCCA57E2E); this.mainPlayList.set('selectedIndex', 9)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "data": {
                         "label": "Circle Arrow 01a Left-UP"
                        },
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_0_HS_0_0_0_map.gif"
                            }
                           ],
                           "frameCount": 24,
                           "rowCount": 6,
                           "frameDuration": 41,
                           "colCount": 4,
                           "class": "AnimatedImageResource"
                          },
                          "yaw": 121.76,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -33.07,
                          "hfov": 15.13
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 1110,
                             "width": 1220,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_0_HS_0_0.png"
                            }
                           ],
                           "frameCount": 24,
                           "rowCount": 6,
                           "frameDuration": 41,
                           "colCount": 4,
                           "class": "AnimatedImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "pitch": -33.07,
                          "hfov": 15.13,
                          "yaw": 121.76
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true
                       },
                       {
                        "id": "overlay_320BC311_2A39_7F5F_41C1_0430830E45E3",
                        "enabledInCardboard": true,
                        "areas": [
                         {
                          "click": "this.startPanoramaWithCamera(this.panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E, this.camera_23E70BA3_31B3_8BA0_4192_EA5E791E23DD); this.mainPlayList.set('selectedIndex', 11)",
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "data": {
                         "label": "Circle Arrow 01a Right-Up"
                        },
                        "maps": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 16,
                             "width": 26,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_0_HS_1_0_0_map.gif"
                            }
                           ],
                           "frameCount": 24,
                           "rowCount": 6,
                           "frameDuration": 41,
                           "colCount": 4,
                           "class": "AnimatedImageResource"
                          },
                          "yaw": -138.14,
                          "class": "HotspotPanoramaOverlayMap",
                          "pitch": -34.7,
                          "hfov": 14.85
                         }
                        ],
                        "items": [
                         {
                          "image": {
                           "levels": [
                            {
                             "height": 1110,
                             "width": 1220,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_0_HS_1_0.png"
                            }
                           ],
                           "frameCount": 24,
                           "rowCount": 6,
                           "frameDuration": 41,
                           "colCount": 4,
                           "class": "AnimatedImageResource"
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "distance": 50,
                          "pitch": -34.7,
                          "hfov": 14.85,
                          "yaw": -138.14
                         }
                        ],
                        "rollOverDisplay": false,
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true
                       }
                      ],
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3040,
                         "width": 6080,
                         "tags": [
                          "oculusgo",
                          "ipadpro"
                         ],
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_hq.jpeg"
                        },
                        {
                         "height": 1024,
                         "width": 2048,
                         "tags": "preload",
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_lq.jpeg"
                        },
                        {
                         "height": 2001,
                         "width": 4002,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_t.jpg",
                      "class": "SphericPanoramaFrame"
                     }
                    ],
                    "adjacentPanoramas": [
                     {
                      "panorama": {
                       "id": "panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5",
                       "label": "IMG_20211103_154624_00_162processed",
                       "thumbnailUrl": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_t.jpg",
                       "class": "Panorama",
                       "pitch": 0,
                       "hfov": 360,
                       "frames": [
                        {
                         "overlays": [
                          {
                           "id": "overlay_3D70FB1D_2A27_8F47_41A5_21BEDD6AEEBE",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C, this.camera_21485D59_31B3_8CE0_41C8_7691EE41C3DE); this.mainPlayList.set('selectedIndex', 7)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "data": {
                            "label": "Polygon"
                           },
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "width": 96,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_0_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 88.38,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 1.71,
                             "hfov": 20.76
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 734,
                                "width": 354,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_0_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "distance": 50,
                             "pitch": 1.71,
                             "hfov": 20.76,
                             "yaw": 88.38
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true
                          },
                          {
                           "id": "overlay_3DEC56CE_2A38_86C5_41C2_D63D4D275D12",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21, this.camera_2154FD4D_31B3_8CE0_41A0_C8A8AB3101B1); this.mainPlayList.set('selectedIndex', 10)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "data": {
                            "label": "Circle Arrow 01a"
                           },
                           "maps": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 16,
                                "width": 26,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_1_0_0_map.gif"
                               }
                              ],
                              "frameCount": 24,
                              "rowCount": 6,
                              "frameDuration": 41,
                              "colCount": 4,
                              "class": "AnimatedImageResource"
                             },
                             "yaw": 1.09,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -35.6,
                             "hfov": 14.68
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "levels": [
                               {
                                "height": 1110,
                                "width": 1220,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_1_0.png"
                               }
                              ],
                              "frameCount": 24,
                              "rowCount": 6,
                              "frameDuration": 41,
                              "colCount": 4,
                              "class": "AnimatedImageResource"
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "distance": 100,
                             "pitch": -35.6,
                             "hfov": 14.68,
                             "yaw": 1.09
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true
                          },
                          {
                           "id": "overlay_0F0A2941_2A58_8B3F_41C4_8CCE3365E73D",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "click": "this.startPanoramaWithCamera(this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871, this.camera_25AA2D1A_31B3_8C60_41C3_CB6E569AD56F); this.mainPlayList.set('selectedIndex', 22)",
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "data": {
                            "label": "Polygon"
                           },
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "width": 96,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_2_1_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 107.8,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": 1.89,
                             "hfov": 20.52
                            }
                           ],
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 727,
                                "width": 350,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_2_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "roll": 0,
                             "distance": 50,
                             "pitch": 1.89,
                             "hfov": 20.52,
                             "yaw": 107.8
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true
                          },
                          {
                           "id": "overlay_6A17298A_2A29_8B4D_417D_1A4B7E601853",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "data": {
                            "label": "\u524d\u5f80\u4e09\u6a13"
                           },
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 53,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_3_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 108.94,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -0.36,
                             "hfov": 10.82
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -0.36,
                             "hfov": 10.82,
                             "yaw": 108.94,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 609,
                                "width": 182,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_3_0.png"
                               }
                              ]
                             }
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true
                          },
                          {
                           "id": "overlay_6AE9ABCE_2A28_8EC5_41B9_0EB88190EB8A",
                           "enabledInCardboard": true,
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            },
                            {
                             "class": "HotspotPanoramaOverlayArea"
                            }
                           ],
                           "data": {
                            "label": "\u524d\u5f80\u4e94\u6a13"
                           },
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 53,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_4_0_map.gif"
                               }
                              ]
                             },
                             "yaw": 89.46,
                             "class": "HotspotPanoramaOverlayMap",
                             "pitch": -0.36,
                             "hfov": 10.82
                            }
                           ],
                           "items": [
                            {
                             "class": "HotspotPanoramaOverlayImage",
                             "pitch": -0.36,
                             "hfov": 10.82,
                             "yaw": 89.46,
                             "distance": 50,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 609,
                                "width": 182,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_0_HS_4_0.png"
                               }
                              ]
                             }
                            }
                           ],
                           "rollOverDisplay": false,
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true
                          }
                         ],
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3040,
                            "width": 6080,
                            "tags": [
                             "oculusgo",
                             "ipadpro"
                            ],
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_hq.jpeg"
                           },
                           {
                            "height": 1024,
                            "width": 2048,
                            "tags": "preload",
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_lq.jpeg"
                           },
                           {
                            "height": 2001,
                            "width": 4002,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_t.jpg",
                         "class": "SphericPanoramaFrame"
                        }
                       ],
                       "adjacentPanoramas": [
                        {
                         "panorama": {
                          "id": "panorama_202322BF_29D8_9943_41C3_4B52BEAC8871",
                          "label": "IMG_20211103_160212_00_175processed",
                          "thumbnailUrl": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_t.jpg",
                          "class": "Panorama",
                          "pitch": 0,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "id": "overlay_09A57E83_2A58_8943_41C3_660336A5FA19",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73, this.camera_20FF1DD5_31B3_8FE0_41B2_A90931482AB3); this.mainPlayList.set('selectedIndex', 21)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "data": {
                               "label": "Circle Arrow 01a"
                              },
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 26,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "frameCount": 24,
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "colCount": 4,
                                 "class": "AnimatedImageResource"
                                },
                                "yaw": -178.55,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -20.09,
                                "hfov": 16.96
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1110,
                                   "width": 1220,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_0_0.png"
                                  }
                                 ],
                                 "frameCount": 24,
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "colCount": 4,
                                 "class": "AnimatedImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "distance": 100,
                                "pitch": -20.09,
                                "hfov": 16.96,
                                "yaw": -178.55
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_0E7AA248_2A58_99CD_41A7_DD8FB173BBD5",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5, this.camera_2086CDCD_31B3_8FE0_41B5_CC4737F33816); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "Polygon"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "width": 61,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_1_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -48.39,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.05,
                                "hfov": 11.92
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 650,
                                   "width": 201,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "roll": 0,
                                "distance": 50,
                                "pitch": 0.05,
                                "hfov": 11.92,
                                "yaw": -48.39
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_0EB6984A_2A68_89CD_4194_98C9AD76FF2B",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E, this.camera_208C5DC6_31B3_8FE0_41C4_2AFA332C10FA); this.mainPlayList.set('selectedIndex', 23)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "Polygon"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "width": 73,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_2_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -36.91,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": 0.22,
                                "hfov": 11.94
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 553,
                                   "width": 202,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "roll": 0,
                                "distance": 50,
                                "pitch": 0.22,
                                "hfov": 11.94,
                                "yaw": -36.91
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_2785A048_2A62_5C94_417A_3FCAB38F04DC",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "\u524d\u5f80\u56db\u6a13"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 57,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_3_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -47.63,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -2.93,
                                "hfov": 7.59
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -2.93,
                                "hfov": 7.59,
                                "yaw": -47.63,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 458,
                                   "width": 128,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_3_0.png"
                                  }
                                 ]
                                }
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_248D2C8D_2A62_C5AC_41BE_1D682435E47A",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "data": {
                               "label": "\u524d\u5f80\u4e8c\u6a13"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 57,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_4_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": -35.85,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -3.04,
                                "hfov": 7.59
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -3.04,
                                "hfov": 7.59,
                                "yaw": -35.85,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 458,
                                   "width": 128,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_4_0.png"
                                  }
                                 ]
                                }
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_3B7515D0_2EF5_78C3_41B8_B906BFC19A8C",
                              "areas": [
                               {
                                "click": "this.setComponentVisibility(this.HTMLText_3891783E_2EF6_97BF_41BF_46DB8AAC028E, true, 0, null, null, false); this.setComponentVisibility(this.Image_38C98B4F_2EFA_89DD_41B1_41B9CF24AD17, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB, true, 0, null, null, false)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "Image"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_5_0_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 2.34,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.9,
                                "hfov": 10.82
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 182,
                                   "width": 182,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "distance": 50,
                                "pitch": -0.9,
                                "hfov": 10.82,
                                "yaw": 2.34
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "width": 6080,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_hq.jpeg"
                              },
                              {
                               "height": 1024,
                               "width": 2048,
                               "tags": "preload",
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_lq.jpeg"
                              },
                              {
                               "height": 2001,
                               "width": 4002,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_t.jpg",
                            "class": "SphericPanoramaFrame"
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "id": "panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E",
                             "label": "IMG_20211103_160335_00_176processed",
                             "thumbnailUrl": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_t.jpg",
                             "class": "Panorama",
                             "pitch": 0,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "id": "overlay_0F6987CA_2A69_86CD_41BE_8D4E12EEA16F",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871, this.camera_23F96B8C_31B3_B460_41C6_C82B6FF18F52); this.mainPlayList.set('selectedIndex', 22)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 100,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_0_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 77.28,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.09,
                                   "hfov": 21.09
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 720,
                                      "width": 360,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "roll": 0,
                                   "distance": 50,
                                   "pitch": 0.09,
                                   "hfov": 21.09,
                                   "yaw": 77.28
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                },
                                {
                                 "id": "overlay_0FF3F5E5_2A6B_9AC7_41B9_FC4C3FFBC2D1",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466, this.camera_23F01B94_31B3_B460_41BB_2F6E9E829CF6); this.mainPlayList.set('selectedIndex', 24)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "data": {
                                  "label": "Polygon"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 98,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_1_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 98.22,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.15,
                                   "hfov": 20.82
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 719,
                                      "width": 355,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "roll": 0,
                                   "distance": 50,
                                   "pitch": 0.15,
                                   "hfov": 20.82,
                                   "yaw": 98.22
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                },
                                {
                                 "id": "overlay_27A0C468_2A63_C494_415F_0687C60F9E1C",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "data": {
                                  "label": "\u524d\u5f80\u4e00\u6a13"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_2_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 99.03,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.05,
                                   "hfov": 7.58
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 0.05,
                                   "hfov": 7.58,
                                   "yaw": 99.03,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 480,
                                      "width": 128,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_2_0.png"
                                     }
                                    ]
                                   }
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                },
                                {
                                 "id": "overlay_24467BE2_2A62_4394_41A5_FA18A1881534",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  },
                                  {
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "data": {
                                  "label": "\u524d\u5f80\u4e09\u6a13"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 60,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_3_0_map.gif"
                                     }
                                    ]
                                   },
                                   "yaw": 78.21,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": 0.21,
                                   "hfov": 7.58
                                  }
                                 ],
                                 "items": [
                                  {
                                   "class": "HotspotPanoramaOverlayImage",
                                   "pitch": 0.21,
                                   "hfov": 7.58,
                                   "yaw": 78.21,
                                   "distance": 50,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 480,
                                      "width": 128,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_0_HS_3_0.png"
                                     }
                                    ]
                                   }
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_hq.jpeg"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 2048,
                                  "tags": "preload",
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_lq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_t.jpg",
                               "class": "SphericPanoramaFrame"
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871",
                               "backwardYaw": -36.91,
                               "yaw": 77.28,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": {
                                "id": "panorama_202141BD_29D8_BB47_41B4_A578A47A6466",
                                "label": "IMG_20211103_160525_00_177processed",
                                "thumbnailUrl": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_t.jpg",
                                "class": "Panorama",
                                "pitch": 0,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "id": "overlay_0CC1C830_2A68_895D_41C4_FE7416291774",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E, this.camera_2287CCA1_31B3_8DA0_41A6_371E3256DB69); this.mainPlayList.set('selectedIndex', 23)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 199,
                                         "width": 97,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_0_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": -7.72,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 1.44,
                                      "hfov": 22.71
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 796,
                                         "width": 388,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "distance": 50,
                                      "pitch": 1.44,
                                      "hfov": 22.71,
                                      "yaw": -7.72
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   },
                                   {
                                    "id": "overlay_02F7E2CF_2A6F_9EC3_41A1_04B83E6F58AB",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86, this.camera_22F09CAB_31B3_8DA0_41C8_78AB92E9BF77); this.mainPlayList.set('selectedIndex', 38)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "data": {
                                     "label": "Polygon"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "width": 101,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_1_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": 15.47,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 1.48,
                                      "hfov": 23.35
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 789,
                                         "width": 399,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "roll": 0,
                                      "distance": 50,
                                      "pitch": 1.48,
                                      "hfov": 23.35,
                                      "yaw": 15.47
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   },
                                   {
                                    "id": "overlay_02BBC931_2A68_8B5F_41B0_D6071E8E9213",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1, this.camera_22E12CB4_31B3_8DA0_4197_F3003F1CF709); this.mainPlayList.set('selectedIndex', 25)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "Circle Arrow 01a"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 26,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_2_0_0_map.gif"
                                        }
                                       ],
                                       "frameCount": 24,
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "colCount": 4,
                                       "class": "AnimatedImageResource"
                                      },
                                      "yaw": 97.05,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -38.48,
                                      "hfov": 14.14
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 1110,
                                         "width": 1220,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_2_0.png"
                                        }
                                       ],
                                       "frameCount": 24,
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "colCount": 4,
                                       "class": "AnimatedImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "distance": 100,
                                      "pitch": -38.48,
                                      "hfov": 14.14,
                                      "yaw": 97.05
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   },
                                   {
                                    "id": "overlay_27CBC6C2_2A62_C594_419C_98B07E24B9BB",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "\u524d\u5f80\u4e8c\u6a13"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 60,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_3_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": -7.13,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": 1.51,
                                      "hfov": 7.58
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": 1.51,
                                      "hfov": 7.58,
                                      "yaw": -7.13,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 480,
                                         "width": 128,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_3_0.png"
                                        }
                                       ]
                                      }
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   },
                                   {
                                    "id": "overlay_2452C500_2A62_4494_418D_F9278C413D10",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "\u524d\u5f80\u5730\u4e0b\u5c64"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 98,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_4_0_map.gif"
                                        }
                                       ]
                                      },
                                      "yaw": 15.98,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -6.17,
                                      "hfov": 7.54
                                     }
                                    ],
                                    "items": [
                                     {
                                      "class": "HotspotPanoramaOverlayImage",
                                      "pitch": -6.17,
                                      "hfov": 7.54,
                                      "yaw": 15.98,
                                      "distance": 50,
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 788,
                                         "width": 128,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_0_HS_4_0.png"
                                        }
                                       ]
                                      }
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ],
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_hq.jpeg"
                                    },
                                    {
                                     "height": 1024,
                                     "width": 2048,
                                     "tags": "preload",
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_lq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "width": 4002,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_202141BD_29D8_BB47_41B4_A578A47A6466_t.jpg",
                                  "class": "SphericPanoramaFrame"
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E",
                                  "backwardYaw": 98.22,
                                  "yaw": -7.72,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": {
                                   "id": "panorama_202387AB_29DB_8743_41A2_CF521E3C9E86",
                                   "label": "IMG_20211103_162924_00_194processed",
                                   "thumbnailUrl": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_t.jpg",
                                   "class": "Panorama",
                                   "pitch": 0,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "id": "overlay_01155406_2A69_F945_41BA_060D3ADE20F9",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466, this.camera_201BBE28_31B3_8CA0_41B0_A3DD326533B8); this.mainPlayList.set('selectedIndex', 24)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "data": {
                                        "label": "Polygon"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 100,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_0_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "yaw": 88.02,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": 0.27,
                                         "hfov": 25.29
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 863,
                                            "width": 434,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "distance": 50,
                                         "pitch": 0.27,
                                         "hfov": 25.29,
                                         "yaw": 88.02
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_0069BC19_2A68_894F_41AF_CFB34A2AD360",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1, this.camera_20398E12_31B3_8C60_41A4_342B3A1DD513); this.mainPlayList.set('selectedIndex', 25)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "data": {
                                        "label": "Polygon"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 74,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_1_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "yaw": 135.36,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -0.18,
                                         "hfov": 22.21
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 1014,
                                            "width": 379,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "distance": 50,
                                         "pitch": -0.18,
                                         "hfov": 22.21,
                                         "yaw": 135.36
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_01764FCC_2A67_86C5_41BD_2893542A325F",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1, this.camera_2030DE19_31B3_8C60_41C6_41362C72618E); this.mainPlayList.set('selectedIndex', 25)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "data": {
                                        "label": "Polygon"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 74,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_2_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "yaw": -137.71,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": 0.99,
                                         "hfov": 21.58
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 986,
                                            "width": 368,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "roll": 0,
                                         "distance": 50,
                                         "pitch": 0.99,
                                         "hfov": 21.58,
                                         "yaw": -137.71
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_108F68B2_2A28_895D_41BC_56C13CECFCC8",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7, this.camera_202FDE21_31B3_8CA0_41B7_A1B5DD793271); this.mainPlayList.set('selectedIndex', 37)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "data": {
                                        "label": "Circle Arrow 01a"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 26,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_3_0_0_map.gif"
                                           }
                                          ],
                                          "frameCount": 24,
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "class": "AnimatedImageResource"
                                         },
                                         "yaw": -2.5,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -19.73,
                                         "hfov": 17
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 1110,
                                            "width": 1220,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_3_0.png"
                                           }
                                          ],
                                          "frameCount": 24,
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "class": "AnimatedImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "distance": 100,
                                         "pitch": -19.73,
                                         "hfov": 17,
                                         "yaw": -2.5
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_27960D6C_2A6E_476C_41A1_9C3F6C69B91C",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "data": {
                                        "label": "\u524d\u5f80\u4e00\u6a13"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 58,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_4_0_map.gif"
                                           }
                                          ]
                                         },
                                         "yaw": 136.88,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -1.02,
                                         "hfov": 8.36
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -1.02,
                                         "hfov": 8.36,
                                         "yaw": 136.88,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 513,
                                            "width": 141,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_4_0.png"
                                           }
                                          ]
                                         }
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_24ECBE74_2A62_457C_41BA_A8879ECC9E69",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "data": {
                                        "label": "\u524d\u5f80\u4e00\u6a13"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 58,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_5_0_map.gif"
                                           }
                                          ]
                                         },
                                         "yaw": -136.82,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -1.74,
                                         "hfov": 8.36
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -1.74,
                                         "hfov": 8.36,
                                         "yaw": -136.82,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 513,
                                            "width": 141,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_5_0.png"
                                           }
                                          ]
                                         }
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_24DE2B15_2A62_4CBC_41B6_C9E7F0B7D077",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "data": {
                                        "label": "\u524d\u5f80\u4e00\u6a13"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 58,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_6_0_map.gif"
                                           }
                                          ]
                                         },
                                         "yaw": 88.49,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -1.38,
                                         "hfov": 8.36
                                        }
                                       ],
                                       "items": [
                                        {
                                         "class": "HotspotPanoramaOverlayImage",
                                         "pitch": -1.38,
                                         "hfov": 8.36,
                                         "yaw": 88.49,
                                         "distance": 50,
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 513,
                                            "width": 141,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_0_HS_6_0.png"
                                           }
                                          ]
                                         }
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ],
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_hq.jpeg"
                                       },
                                       {
                                        "height": 1024,
                                        "width": 2048,
                                        "tags": "preload",
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_lq.jpeg"
                                       },
                                       {
                                        "height": 2001,
                                        "width": 4002,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_t.jpg",
                                     "class": "SphericPanoramaFrame"
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": {
                                      "id": "panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1",
                                      "label": "IMG_20211103_160653_00_178processed",
                                      "thumbnailUrl": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_t.jpg",
                                      "class": "Panorama",
                                      "pitch": 0,
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "id": "overlay_003DC12B_2A6B_7B43_41C4_C6042CA7AA90",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466, this.camera_231E9C0E_31B3_8C60_41C1_E87C84F8867C); this.mainPlayList.set('selectedIndex', 24)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "data": {
                                           "label": "Circle Arrow 01a"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_0_0_0_map.gif"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "yaw": 0.73,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -19.36,
                                            "hfov": 17.04
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 1110,
                                               "width": 1220,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_0_0.png"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "distance": 100,
                                            "pitch": -19.36,
                                            "hfov": 17.04,
                                            "yaw": 0.73
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         },
                                         {
                                          "id": "overlay_00074A47_2A69_89C3_4177_BE551C5F3988",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86, this.camera_232BCBF0_31B3_8BA0_41A7_1AE2DC254EBD); this.mainPlayList.set('selectedIndex', 38)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "data": {
                                           "label": "Polygon"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 138,
                                               "width": 146,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_1_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "yaw": -44.95,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -18.73,
                                            "hfov": 17.21
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 276,
                                               "width": 292,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "roll": 0,
                                            "distance": 50,
                                            "pitch": -18.73,
                                            "hfov": 17.21,
                                            "yaw": -44.95
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         },
                                         {
                                          "id": "overlay_001EBFF0_2A68_86DD_41B5_54E51D02D374",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86, this.camera_23218BFF_31B3_8BA0_4164_FCEE24E4AD6B); this.mainPlayList.set('selectedIndex', 38)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "data": {
                                           "label": "Polygon"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 127,
                                               "width": 158,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_2_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "yaw": 48.94,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -19.71,
                                            "hfov": 18.65
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 255,
                                               "width": 317,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "roll": 0,
                                            "distance": 50,
                                            "pitch": -19.71,
                                            "hfov": 18.65,
                                            "yaw": 48.94
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         },
                                         {
                                          "id": "overlay_27D4C3BA_2A66_43F4_41A8_7FF0D9F25646",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "data": {
                                           "label": "\u524d\u5f80\u5730\u4e0b\u5c64"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 41,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_3_0_map.gif"
                                              }
                                             ]
                                            },
                                            "yaw": 50.7,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -18.23,
                                            "hfov": 17.32
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -18.23,
                                            "hfov": 17.32,
                                            "yaw": 50.7,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 117,
                                               "width": 307,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_3_0.png"
                                              }
                                             ]
                                            }
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         },
                                         {
                                          "id": "overlay_24AD2FBC_2A66_43EC_4187_3676C9D40439",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "data": {
                                           "label": "\u524d\u5f80\u5730\u4e0b\u5c64"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 41,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_4_0_map.gif"
                                              }
                                             ]
                                            },
                                            "yaw": -43.6,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -18.23,
                                            "hfov": 17.32
                                           }
                                          ],
                                          "items": [
                                           {
                                            "class": "HotspotPanoramaOverlayImage",
                                            "pitch": -18.23,
                                            "hfov": 17.32,
                                            "yaw": -43.6,
                                            "distance": 50,
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 117,
                                               "width": 307,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_0_HS_4_0.png"
                                              }
                                             ]
                                            }
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 3040,
                                           "width": 6080,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ],
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_hq.jpeg"
                                          },
                                          {
                                           "height": 1024,
                                           "width": 2048,
                                           "tags": "preload",
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_lq.jpeg"
                                          },
                                          {
                                           "height": 2001,
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1.jpeg"
                                          }
                                         ]
                                        },
                                        "thumbnailUrl": "media/panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_t.jpg",
                                        "class": "SphericPanoramaFrame"
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86",
                                        "backwardYaw": 135.36,
                                        "yaw": -44.95,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86",
                                        "backwardYaw": 135.36,
                                        "yaw": 48.94,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466",
                                        "backwardYaw": 97.05,
                                        "yaw": 0.73,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "hfovMax": 130,
                                      "vfov": 180
                                     },
                                     "backwardYaw": -44.95,
                                     "yaw": 135.36,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1",
                                     "backwardYaw": -44.95,
                                     "yaw": -137.71,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "id": "panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7",
                                      "label": "IMG_20211103_162832_00_193processed",
                                      "thumbnailUrl": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_t.jpg",
                                      "class": "Panorama",
                                      "pitch": 0,
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "id": "overlay_10A0958C_2A2B_9B45_41B6_F505F5546D8A",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8, this.camera_23D43BC3_31B3_8BE0_41C0_2E60E86A68AF); this.mainPlayList.set('selectedIndex', 36)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "data": {
                                           "label": "Circle Arrow 01a"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_0_HS_0_0_0_map.gif"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "yaw": -3.94,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -19.36,
                                            "hfov": 17.04
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 1110,
                                               "width": 1220,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_0_HS_0_0.png"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "distance": 100,
                                            "pitch": -19.36,
                                            "hfov": 17.04,
                                            "yaw": -3.94
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         },
                                         {
                                          "id": "overlay_16BED399_2A2B_BF4F_41B4_E89CFA213787",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86, this.camera_23DFABB4_31B3_8BA0_4188_611053C6B3FE); this.mainPlayList.set('selectedIndex', 38)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           },
                                           {
                                            "class": "HotspotPanoramaOverlayArea"
                                           }
                                          ],
                                          "data": {
                                           "label": "Circle Arrow 01a"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_0_HS_1_0_0_map.gif"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "yaw": 175.34,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -28.38,
                                            "hfov": 15.89
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 1110,
                                               "width": 1220,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_0_HS_1_0.png"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "distance": 100,
                                            "pitch": -28.38,
                                            "hfov": 15.89,
                                            "yaw": 175.34
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 3040,
                                           "width": 6080,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ],
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_hq.jpeg"
                                          },
                                          {
                                           "height": 1024,
                                           "width": 2048,
                                           "tags": "preload",
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_lq.jpeg"
                                          },
                                          {
                                           "height": 2001,
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7.jpeg"
                                          }
                                         ]
                                        },
                                        "thumbnailUrl": "media/panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_t.jpg",
                                        "class": "SphericPanoramaFrame"
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86",
                                        "backwardYaw": -2.5,
                                        "yaw": 175.34,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": {
                                         "id": "panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8",
                                         "label": "IMG_20211103_162722_00_192processed",
                                         "thumbnailUrl": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_t.jpg",
                                         "class": "Panorama",
                                         "pitch": 0,
                                         "hfov": 360,
                                         "frames": [
                                          {
                                           "overlays": [
                                            {
                                             "id": "overlay_1D70E2AE_2A29_7945_41C1_F623434F0D8A",
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48, this.camera_20F1BDDC_31B3_8FE0_4166_BCF00E6A4597); this.mainPlayList.set('selectedIndex', 35)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Circle Arrow 01a"
                                             },
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 26,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_0_0_0_map.gif"
                                                 }
                                                ],
                                                "frameCount": 24,
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "colCount": 4,
                                                "class": "AnimatedImageResource"
                                               },
                                               "yaw": -3.22,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -19,
                                               "hfov": 17.07
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 1110,
                                                  "width": 1220,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_0_0.png"
                                                 }
                                                ],
                                                "frameCount": 24,
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "colCount": 4,
                                                "class": "AnimatedImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "distance": 100,
                                               "pitch": -19,
                                               "hfov": 17.07,
                                               "yaw": -3.22
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true
                                            },
                                            {
                                             "id": "overlay_13256440_2A29_793D_4196_EC5D00CB878C",
                                             "enabledInCardboard": true,
                                             "areas": [
                                              {
                                               "click": "this.startPanoramaWithCamera(this.panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7, this.camera_20E9FDE4_31B3_8FA0_4196_9C16497DF631); this.mainPlayList.set('selectedIndex', 37)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Circle Arrow 01a"
                                             },
                                             "maps": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 26,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_1_0_0_map.gif"
                                                 }
                                                ],
                                                "frameCount": 24,
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "colCount": 4,
                                                "class": "AnimatedImageResource"
                                               },
                                               "yaw": 176.78,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -28.38,
                                               "hfov": 15.89
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "levels": [
                                                 {
                                                  "height": 1110,
                                                  "width": 1220,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_1_0.png"
                                                 }
                                                ],
                                                "frameCount": 24,
                                                "rowCount": 6,
                                                "frameDuration": 41,
                                                "colCount": 4,
                                                "class": "AnimatedImageResource"
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "distance": 100,
                                               "pitch": -28.38,
                                               "hfov": 15.89,
                                               "yaw": 176.78
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true
                                            },
                                            {
                                             "id": "overlay_3D97D715_2EFC_69A7_41A5_EEE14287D84C",
                                             "areas": [
                                              {
                                               "click": "this.setComponentVisibility(this.HTMLText_3974A175_2E9D_99CD_4189_3A794AA96B9D, true, 0, null, null, false); this.setComponentVisibility(this.Image_3838397D_2E9F_89BD_41BF_1956977297A3, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_36C78C90_2E9E_8F43_41B8_65ACF86ED5A4, true, 0, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "yaw": -107.39,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": 0.81,
                                               "hfov": 10.81
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 182,
                                                  "width": 182,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "distance": 50,
                                               "pitch": 0.81,
                                               "hfov": 10.81,
                                               "yaw": -107.39
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true
                                            },
                                            {
                                             "id": "overlay_3A4D92A9_2EE4_28EF_41B5_B4854C0FEA51",
                                             "areas": [
                                              {
                                               "click": "this.setComponentVisibility(this.HTMLText_23469FD0_2EE4_38BD_418B_F4AC0BDEDE25, true, 0, null, null, false); this.setComponentVisibility(this.Image_20D03045_2EE4_27A7_41C3_9FD46DBF60A8, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_20ED0B77_2EEC_3863_41B8_614E57638AA6, true, 0, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_3_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "yaw": 98.38,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -0.27,
                                               "hfov": 10.81
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 182,
                                                  "width": 182,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "distance": 50,
                                               "pitch": -0.27,
                                               "hfov": 10.81,
                                               "yaw": 98.38
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true
                                            },
                                            {
                                             "id": "overlay_3DA8248B_2EE4_28A3_417F_7BCF3418D5F5",
                                             "areas": [
                                              {
                                               "click": "this.setComponentVisibility(this.HTMLText_3E794611_2EEB_EBBF_41C1_776CA1CFD3F7, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3FEF8B75_2EE4_7867_41C0_1424C6D7EF7F, true, 0, null, null, false)",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              },
                                              {
                                               "class": "HotspotPanoramaOverlayArea"
                                              }
                                             ],
                                             "data": {
                                              "label": "Image"
                                             },
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_4_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "yaw": -73.15,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "pitch": -16.13,
                                               "hfov": 10.39
                                              }
                                             ],
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 182,
                                                  "width": 182,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "distance": 50,
                                               "pitch": -16.13,
                                               "hfov": 10.39,
                                               "yaw": -73.15
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "class": "HotspotPanoramaOverlay",
                                             "useHandCursor": true
                                            }
                                           ],
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 3040,
                                              "width": 6080,
                                              "tags": [
                                               "oculusgo",
                                               "ipadpro"
                                              ],
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_hq.jpeg"
                                             },
                                             {
                                              "height": 1024,
                                              "width": 2048,
                                              "tags": "preload",
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_lq.jpeg"
                                             },
                                             {
                                              "height": 2001,
                                              "width": 4002,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8.jpeg"
                                             }
                                            ]
                                           },
                                           "thumbnailUrl": "media/panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_t.jpg",
                                           "class": "SphericPanoramaFrame"
                                          }
                                         ],
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": {
                                            "id": "panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48",
                                            "label": "IMG_20211103_162607_00_191processed",
                                            "thumbnailUrl": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_t.jpg",
                                            "class": "Panorama",
                                            "pitch": 0,
                                            "hfov": 360,
                                            "frames": [
                                             {
                                              "overlays": [
                                               {
                                                "id": "overlay_1C5CCCEB_2A2B_8AC3_419D_96AAD9236B9A",
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D, this.camera_234B9C6D_31B3_8CA0_419E_2F901089DA53); this.mainPlayList.set('selectedIndex', 32)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Polygon"
                                                },
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 179,
                                                     "width": 68,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_0_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "yaw": 58.18,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -0.29,
                                                  "hfov": 8.14
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 358,
                                                     "width": 137,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "roll": 0,
                                                  "distance": 50,
                                                  "pitch": -0.29,
                                                  "hfov": 8.14,
                                                  "yaw": 58.18
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true
                                               },
                                               {
                                                "id": "overlay_13983080_2A2F_993D_41A1_FDF5BA91D1AC",
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "click": "this.startPanoramaWithCamera(this.panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8, this.camera_22BBCC7C_31B3_8CA0_41C1_84883437B46C); this.mainPlayList.set('selectedIndex', 36)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Circle Arrow 01a"
                                                },
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 26,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_1_0_0_map.gif"
                                                    }
                                                   ],
                                                   "frameCount": 24,
                                                   "rowCount": 6,
                                                   "frameDuration": 41,
                                                   "colCount": 4,
                                                   "class": "AnimatedImageResource"
                                                  },
                                                  "yaw": 176.42,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -21.53,
                                                  "hfov": 16.8
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "levels": [
                                                    {
                                                     "height": 1110,
                                                     "width": 1220,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_1_0.png"
                                                    }
                                                   ],
                                                   "frameCount": 24,
                                                   "rowCount": 6,
                                                   "frameDuration": 41,
                                                   "colCount": 4,
                                                   "class": "AnimatedImageResource"
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "distance": 100,
                                                  "pitch": -21.53,
                                                  "hfov": 16.8,
                                                  "yaw": 176.42
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true
                                               },
                                               {
                                                "id": "overlay_247793C9_2A6E_C394_41BD_8BC1A89AF260",
                                                "enabledInCardboard": true,
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "\u524d\u5f80\u4e00\u6a13"
                                                },
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 44,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_2_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "yaw": 59.07,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": -1.85,
                                                  "hfov": 5.74
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "pitch": -1.85,
                                                  "hfov": 5.74,
                                                  "yaw": 59.07,
                                                  "distance": 50,
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 265,
                                                     "width": 96,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  }
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true
                                               },
                                               {
                                                "id": "overlay_3D0BBC32_2EFC_3FFD_41C6_EB1354FE0B56",
                                                "areas": [
                                                 {
                                                  "click": "this.setComponentVisibility(this.HTMLText_39528314_2E9D_9943_41B5_4B7D1359A276, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_36C2242D_2E9B_9F5D_41B6_423E89ED9EB5, true, 0, null, null, false)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_3_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "yaw": 1.44,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": 0.45,
                                                  "hfov": 10.81
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 182,
                                                     "width": 182,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_3_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "distance": 50,
                                                  "pitch": 0.45,
                                                  "hfov": 10.81,
                                                  "yaw": 1.44
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true
                                               },
                                               {
                                                "id": "overlay_38919DE3_2EFC_F863_41C7_14A485A7C8DB",
                                                "areas": [
                                                 {
                                                  "click": "this.setComponentVisibility(this.HTMLText_39BCE106_2E9A_994C_41AB_765BC0EAC2B0, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_392462D6_2E96_B8CF_41C4_FEB361798A42, true, 0, null, null, false)",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 },
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea"
                                                 }
                                                ],
                                                "data": {
                                                 "label": "Image"
                                                },
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_4_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "yaw": -14.41,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "pitch": 0.45,
                                                  "hfov": 10.81
                                                 }
                                                ],
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 182,
                                                     "width": 182,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_0_HS_4_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "distance": 50,
                                                  "pitch": 0.45,
                                                  "hfov": 10.81,
                                                  "yaw": -14.41
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "class": "HotspotPanoramaOverlay",
                                                "useHandCursor": true
                                               }
                                              ],
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "height": 3040,
                                                 "width": 6080,
                                                 "tags": [
                                                  "oculusgo",
                                                  "ipadpro"
                                                 ],
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_hq.jpeg"
                                                },
                                                {
                                                 "height": 1024,
                                                 "width": 2048,
                                                 "tags": "preload",
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_lq.jpeg"
                                                },
                                                {
                                                 "height": 2001,
                                                 "width": 4002,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48.jpeg"
                                                }
                                               ]
                                              },
                                              "thumbnailUrl": "media/panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_t.jpg",
                                              "class": "SphericPanoramaFrame"
                                             }
                                            ],
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": {
                                               "id": "panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D",
                                               "label": "IMG_20211103_162145_00_188processed",
                                               "thumbnailUrl": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_t.jpg",
                                               "class": "Panorama",
                                               "pitch": 0,
                                               "hfov": 360,
                                               "frames": [
                                                {
                                                 "overlays": [
                                                  {
                                                   "id": "overlay_0506C64D_2A69_F9C7_41A4_1690498E695F",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314, this.camera_233F8EB2_31B3_8DA0_41BD_5DB14274B238); this.mainPlayList.set('selectedIndex', 28)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "Polygon"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 200,
                                                        "width": 34,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_0_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "yaw": 113.12,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -0.43,
                                                     "hfov": 4.57
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 439,
                                                        "width": 77,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_0_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "roll": 0,
                                                     "distance": 50,
                                                     "pitch": -0.43,
                                                     "hfov": 4.57,
                                                     "yaw": 113.12
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  },
                                                  {
                                                   "id": "overlay_195E9AAA_2A5F_894D_41A2_F9C0F6BEAD3E",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_20210439_29D8_B94F_41AF_70333BFB7555, this.camera_23E5DE9B_31B3_8C60_41AE_C7F1C26BEB30); this.mainPlayList.set('selectedIndex', 31)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "Circle Arrow 01a Right"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 26,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_1_0_0_map.gif"
                                                       }
                                                      ],
                                                      "frameCount": 24,
                                                      "rowCount": 6,
                                                      "frameDuration": 41,
                                                      "colCount": 4,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "yaw": -92.87,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -12.15,
                                                     "hfov": 17.65
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 1110,
                                                        "width": 1220,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_1_0.png"
                                                       }
                                                      ],
                                                      "frameCount": 24,
                                                      "rowCount": 6,
                                                      "frameDuration": 41,
                                                      "colCount": 4,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "distance": 50,
                                                     "pitch": -12.15,
                                                     "hfov": 17.65,
                                                     "yaw": -92.87
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  },
                                                  {
                                                   "id": "overlay_199622C5_2A59_7EC7_4193_CB88105C2D92",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432, this.camera_23D18EA3_31B3_8DA0_41C0_DE50BF18E9B8); this.mainPlayList.set('selectedIndex', 33)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "Circle Arrow 01b Left"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 37,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_2_0_0_map.gif"
                                                       }
                                                      ],
                                                      "frameCount": 24,
                                                      "rowCount": 6,
                                                      "frameDuration": 41,
                                                      "colCount": 4,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "yaw": 90.07,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -12.44,
                                                     "hfov": 24.79
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 780,
                                                        "width": 1220,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_2_0.png"
                                                       }
                                                      ],
                                                      "frameCount": 24,
                                                      "rowCount": 6,
                                                      "frameDuration": 41,
                                                      "colCount": 4,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "distance": 50,
                                                     "pitch": -12.44,
                                                     "hfov": 24.79,
                                                     "yaw": 90.07
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  },
                                                  {
                                                   "id": "overlay_1D1EEA06_2A27_8945_41BF_BB81C8CE9340",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_202A8A29_29D8_894F_41C0_6C9391436A5C, this.camera_23C3DEAA_31B3_8DA0_41C2_489F0E308BB1); this.mainPlayList.set('selectedIndex', 34)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "Circle Arrow 01a"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 26,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_3_0_0_map.gif"
                                                       }
                                                      ],
                                                      "frameCount": 24,
                                                      "rowCount": 6,
                                                      "frameDuration": 41,
                                                      "colCount": 4,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "yaw": 177.87,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -24.41,
                                                     "hfov": 16.44
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "levels": [
                                                       {
                                                        "height": 1110,
                                                        "width": 1220,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_3_0.png"
                                                       }
                                                      ],
                                                      "frameCount": 24,
                                                      "rowCount": 6,
                                                      "frameDuration": 41,
                                                      "colCount": 4,
                                                      "class": "AnimatedImageResource"
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "distance": 100,
                                                     "pitch": -24.41,
                                                     "hfov": 16.44,
                                                     "yaw": 177.87
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  },
                                                  {
                                                   "id": "overlay_139F9AC5_2A29_8EC7_41AE_F5BC73113C02",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "click": "this.startPanoramaWithCamera(this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48, this.camera_23EBEE94_31B3_8C60_41C8_827E245E053B); this.mainPlayList.set('selectedIndex', 35)",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "Polygon"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 188,
                                                        "width": 31,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_4_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "yaw": 109.66,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -0.28,
                                                     "hfov": 3.72
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 376,
                                                        "width": 62,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_4_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "roll": 0,
                                                     "distance": 50,
                                                     "pitch": -0.28,
                                                     "hfov": 3.72,
                                                     "yaw": 109.66
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  },
                                                  {
                                                   "id": "overlay_24F50E5C_2A62_C4AC_4196_B0D5C91A5C23",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "\u524d\u5f80\u5730\u4e0b\u5c64"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 71,
                                                        "width": 16,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_5_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "yaw": 109.67,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -1.89,
                                                     "hfov": 3.3
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -1.89,
                                                     "hfov": 3.3,
                                                     "yaw": 109.67,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 245,
                                                        "width": 55,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_5_0.png"
                                                       }
                                                      ]
                                                     }
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  },
                                                  {
                                                   "id": "overlay_253BE329_2A6E_5C94_41AB_5C2EA48747D0",
                                                   "enabledInCardboard": true,
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    },
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea"
                                                    }
                                                   ],
                                                   "data": {
                                                    "label": "\u524d\u5f80\u4e8c\u6a13"
                                                   },
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 71,
                                                        "width": 16,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_6_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "yaw": 113.09,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "pitch": -2.46,
                                                     "hfov": 3.3
                                                    }
                                                   ],
                                                   "items": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "pitch": -2.46,
                                                     "hfov": 3.3,
                                                     "yaw": 113.09,
                                                     "distance": 50,
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 245,
                                                        "width": 55,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_0_HS_6_0.png"
                                                       }
                                                      ]
                                                     }
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "useHandCursor": true
                                                  }
                                                 ],
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "height": 3040,
                                                    "width": 6080,
                                                    "tags": [
                                                     "oculusgo",
                                                     "ipadpro"
                                                    ],
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_hq.jpeg"
                                                   },
                                                   {
                                                    "height": 1024,
                                                    "width": 2048,
                                                    "tags": "preload",
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_lq.jpeg"
                                                   },
                                                   {
                                                    "height": 2001,
                                                    "width": 4002,
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D.jpeg"
                                                   }
                                                  ]
                                                 },
                                                 "thumbnailUrl": "media/panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_t.jpg",
                                                 "class": "SphericPanoramaFrame"
                                                }
                                               ],
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": "this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48",
                                                 "backwardYaw": 58.18,
                                                 "yaw": 109.66,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": {
                                                  "id": "panorama_20210439_29D8_B94F_41AF_70333BFB7555",
                                                  "label": "IMG_20211103_162048_00_187processed",
                                                  "thumbnailUrl": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_t.jpg",
                                                  "class": "Panorama",
                                                  "pitch": 0,
                                                  "hfov": 360,
                                                  "frames": [
                                                   {
                                                    "overlays": [
                                                     {
                                                      "id": "overlay_188548D8_2A58_8ACD_41A9_E02DAD9E5C4E",
                                                      "enabledInCardboard": true,
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D, this.camera_222C8CD9_31B3_8DE0_41B7_9B81E6D44CAC); this.mainPlayList.set('selectedIndex', 0)",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "data": {
                                                       "label": "Circle Arrow 01a Right"
                                                      },
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 16,
                                                           "width": 26,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_0_HS_0_0_0_map.gif"
                                                          }
                                                         ],
                                                         "frameCount": 24,
                                                         "rowCount": 6,
                                                         "frameDuration": 41,
                                                         "colCount": 4,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "yaw": -89.99,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -15.22,
                                                        "hfov": 17.43
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 1110,
                                                           "width": 1220,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_0_HS_0_0.png"
                                                          }
                                                         ],
                                                         "frameCount": 24,
                                                         "rowCount": 6,
                                                         "frameDuration": 41,
                                                         "colCount": 4,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "distance": 50,
                                                        "pitch": -15.22,
                                                        "hfov": 17.43,
                                                        "yaw": -89.99
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true
                                                     },
                                                     {
                                                      "id": "overlay_193F2C2A_2A59_894D_41C4_7B740E88E10A",
                                                      "enabledInCardboard": true,
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D, this.camera_22334CCF_31B3_8DE0_41BB_302165595C0A); this.mainPlayList.set('selectedIndex', 32)",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "data": {
                                                       "label": "Circle Arrow 01a Left"
                                                      },
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 16,
                                                           "width": 26,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_0_HS_1_0_0_map.gif"
                                                          }
                                                         ],
                                                         "frameCount": 24,
                                                         "rowCount": 6,
                                                         "frameDuration": 41,
                                                         "colCount": 4,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "yaw": 91.27,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -10.17,
                                                        "hfov": 17.78
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 1110,
                                                           "width": 1220,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_0_HS_1_0.png"
                                                          }
                                                         ],
                                                         "frameCount": 24,
                                                         "rowCount": 6,
                                                         "frameDuration": 41,
                                                         "colCount": 4,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "distance": 50,
                                                        "pitch": -10.17,
                                                        "hfov": 17.78,
                                                        "yaw": 91.27
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true
                                                     }
                                                    ],
                                                    "sphere": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "height": 3040,
                                                       "width": 6080,
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ],
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_hq.jpeg"
                                                      },
                                                      {
                                                       "height": 1024,
                                                       "width": 2048,
                                                       "tags": "preload",
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_lq.jpeg"
                                                      },
                                                      {
                                                       "height": 2001,
                                                       "width": 4002,
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555.jpeg"
                                                      }
                                                     ]
                                                    },
                                                    "thumbnailUrl": "media/panorama_20210439_29D8_B94F_41AF_70333BFB7555_t.jpg",
                                                    "class": "SphericPanoramaFrame"
                                                   }
                                                  ],
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D",
                                                    "backwardYaw": -92.87,
                                                    "yaw": 91.27,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   },
                                                   {
                                                    "panorama": {
                                                     "id": "panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D",
                                                     "label": "IMG_20211103_161945_00_186processed",
                                                     "thumbnailUrl": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_t.jpg",
                                                     "class": "Panorama",
                                                     "pitch": 0,
                                                     "hfov": 360,
                                                     "frames": [
                                                      {
                                                       "overlays": [
                                                        {
                                                         "id": "overlay_1B89A7A8_2A69_874D_41B3_43C076B3A129",
                                                         "enabledInCardboard": true,
                                                         "areas": [
                                                          {
                                                           "click": "this.startPanoramaWithCamera(this.panorama_20210439_29D8_B94F_41AF_70333BFB7555, this.camera_2076AE48_31B3_8CE0_41C2_E0493F015328); this.mainPlayList.set('selectedIndex', 31)",
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "data": {
                                                          "label": "Circle Arrow 01a Left"
                                                         },
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 16,
                                                              "width": 26,
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_0_HS_0_0_0_map.gif"
                                                             }
                                                            ],
                                                            "frameCount": 24,
                                                            "rowCount": 6,
                                                            "frameDuration": 41,
                                                            "colCount": 4,
                                                            "class": "AnimatedImageResource"
                                                           },
                                                           "yaw": 96.32,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -12.33,
                                                           "hfov": 17.64
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 1110,
                                                              "width": 1220,
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_0_HS_0_0.png"
                                                             }
                                                            ],
                                                            "frameCount": 24,
                                                            "rowCount": 6,
                                                            "frameDuration": 41,
                                                            "colCount": 4,
                                                            "class": "AnimatedImageResource"
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "distance": 50,
                                                           "pitch": -12.33,
                                                           "hfov": 17.64,
                                                           "yaw": 96.32
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true
                                                        },
                                                        {
                                                         "id": "overlay_181C1588_2A67_7B4D_419C_A5269EA95054",
                                                         "enabledInCardboard": true,
                                                         "areas": [
                                                          {
                                                           "click": "this.startPanoramaWithCamera(this.panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432, this.camera_20791E40_31B3_8CE0_41AD_95062FB418AF); this.mainPlayList.set('selectedIndex', 33)",
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "data": {
                                                          "label": "Circle Arrow 01a Right"
                                                         },
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 16,
                                                              "width": 26,
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_0_HS_1_0_0_map.gif"
                                                             }
                                                            ],
                                                            "frameCount": 24,
                                                            "rowCount": 6,
                                                            "frameDuration": 41,
                                                            "colCount": 4,
                                                            "class": "AnimatedImageResource"
                                                           },
                                                           "yaw": -84.58,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -13.05,
                                                           "hfov": 17.59
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "levels": [
                                                             {
                                                              "height": 1110,
                                                              "width": 1220,
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_0_HS_1_0.png"
                                                             }
                                                            ],
                                                            "frameCount": 24,
                                                            "rowCount": 6,
                                                            "frameDuration": 41,
                                                            "colCount": 4,
                                                            "class": "AnimatedImageResource"
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "distance": 50,
                                                           "pitch": -13.05,
                                                           "hfov": 17.59,
                                                           "yaw": -84.58
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true
                                                        },
                                                        {
                                                         "id": "overlay_21358961_31BD_94A0_41A7_3CF37D2D5E2D",
                                                         "enabledInCardboard": true,
                                                         "areas": [
                                                          {
                                                           "class": "HotspotPanoramaOverlayArea",
                                                           "mapColor": "#FF0000"
                                                          }
                                                         ],
                                                         "data": {
                                                          "label": "Image"
                                                         },
                                                         "maps": [
                                                          {
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 16,
                                                              "width": 32,
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_0_HS_4_0_0_map.gif"
                                                             }
                                                            ]
                                                           },
                                                           "yaw": -174.95,
                                                           "class": "HotspotPanoramaOverlayMap",
                                                           "pitch": -3.14,
                                                           "hfov": 75.84
                                                          }
                                                         ],
                                                         "items": [
                                                          {
                                                           "image": {
                                                            "class": "ImageResource",
                                                            "levels": [
                                                             {
                                                              "height": 640,
                                                              "width": 1282,
                                                              "class": "ImageResourceLevel",
                                                              "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_0_HS_4_0.png"
                                                             }
                                                            ]
                                                           },
                                                           "class": "HotspotPanoramaOverlayImage",
                                                           "distance": 50,
                                                           "pitch": -3.14,
                                                           "hfov": 75.84,
                                                           "yaw": -174.95
                                                          }
                                                         ],
                                                         "rollOverDisplay": false,
                                                         "class": "HotspotPanoramaOverlay",
                                                         "useHandCursor": true
                                                        }
                                                       ],
                                                       "sphere": {
                                                        "class": "ImageResource",
                                                        "levels": [
                                                         {
                                                          "height": 3040,
                                                          "width": 6080,
                                                          "tags": [
                                                           "oculusgo",
                                                           "ipadpro"
                                                          ],
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_hq.jpeg"
                                                         },
                                                         {
                                                          "height": 1024,
                                                          "width": 2048,
                                                          "tags": "preload",
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_lq.jpeg"
                                                         },
                                                         {
                                                          "height": 2001,
                                                          "width": 4002,
                                                          "class": "ImageResourceLevel",
                                                          "url": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D.jpeg"
                                                         }
                                                        ]
                                                       },
                                                       "thumbnailUrl": "media/panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_t.jpg",
                                                       "class": "SphericPanoramaFrame"
                                                      }
                                                     ],
                                                     "adjacentPanoramas": [
                                                      {
                                                       "panorama": {
                                                        "id": "panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432",
                                                        "label": "IMG_20211103_162310_00_189processed",
                                                        "thumbnailUrl": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_t.jpg",
                                                        "class": "Panorama",
                                                        "pitch": 0,
                                                        "hfov": 360,
                                                        "frames": [
                                                         {
                                                          "overlays": [
                                                           {
                                                            "id": "overlay_1E7B6D2B_2A58_8B43_419E_2F385E6B7F67",
                                                            "enabledInCardboard": true,
                                                            "areas": [
                                                             {
                                                              "click": "this.startPanoramaWithCamera(this.panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D, this.camera_20D9CDF4_31B3_8FA0_41B8_4B4074C5932F); this.mainPlayList.set('selectedIndex', 0)",
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "data": {
                                                             "label": "Circle Arrow 01a Left"
                                                            },
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 16,
                                                                 "width": 26,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_0_0_0_map.gif"
                                                                }
                                                               ],
                                                               "frameCount": 24,
                                                               "rowCount": 6,
                                                               "frameDuration": 41,
                                                               "colCount": 4,
                                                               "class": "AnimatedImageResource"
                                                              },
                                                              "yaw": 91.09,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -13.95,
                                                              "hfov": 17.53
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 1110,
                                                                 "width": 1220,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_0_0.png"
                                                                }
                                                               ],
                                                               "frameCount": 24,
                                                               "rowCount": 6,
                                                               "frameDuration": 41,
                                                               "colCount": 4,
                                                               "class": "AnimatedImageResource"
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "distance": 50,
                                                              "pitch": -13.95,
                                                              "hfov": 17.53,
                                                              "yaw": 91.09
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true
                                                           },
                                                           {
                                                            "id": "overlay_1F284AA3_2A5B_8943_4172_24B631D69E1B",
                                                            "enabledInCardboard": true,
                                                            "areas": [
                                                             {
                                                              "click": "this.startPanoramaWithCamera(this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D, this.camera_20E2FDEC_31B3_8FA0_41C5_C152526D9D2C); this.mainPlayList.set('selectedIndex', 32)",
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "data": {
                                                             "label": "Circle Arrow 01a Right"
                                                            },
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 16,
                                                                 "width": 26,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_1_0_0_map.gif"
                                                                }
                                                               ],
                                                               "frameCount": 24,
                                                               "rowCount": 6,
                                                               "frameDuration": 41,
                                                               "colCount": 4,
                                                               "class": "AnimatedImageResource"
                                                              },
                                                              "yaw": -94.14,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -11.07,
                                                              "hfov": 17.72
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "levels": [
                                                                {
                                                                 "height": 1110,
                                                                 "width": 1220,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_1_0.png"
                                                                }
                                                               ],
                                                               "frameCount": 24,
                                                               "rowCount": 6,
                                                               "frameDuration": 41,
                                                               "colCount": 4,
                                                               "class": "AnimatedImageResource"
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "distance": 50,
                                                              "pitch": -11.07,
                                                              "hfov": 17.72,
                                                              "yaw": -94.14
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true
                                                           },
                                                           {
                                                            "id": "overlay_1EC63338_2A58_9F4D_41B0_6841B5613153",
                                                            "enabledInCardboard": true,
                                                            "areas": [
                                                             {
                                                              "click": "this.mainPlayList.set('selectedIndex', 28)",
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "data": {
                                                             "label": "Polygon"
                                                            },
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 111,
                                                                 "width": 68,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_2_1_0_map.gif"
                                                                }
                                                               ]
                                                              },
                                                              "yaw": -90.32,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": 0.31,
                                                              "hfov": 8.1
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 223,
                                                                 "width": 137,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_2_0.png"
                                                                }
                                                               ]
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "roll": 0,
                                                              "distance": 50,
                                                              "pitch": 0.31,
                                                              "hfov": 8.1,
                                                              "yaw": -90.32
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true
                                                           },
                                                           {
                                                            "id": "overlay_1C1ACAAD_2A28_8947_419E_149E92909E7C",
                                                            "enabledInCardboard": true,
                                                            "areas": [
                                                             {
                                                              "click": "this.mainPlayList.set('selectedIndex', 35)",
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000"
                                                             }
                                                            ],
                                                            "data": {
                                                             "label": "Polygon"
                                                            },
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 110,
                                                                 "width": 73,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_3_1_0_map.gif"
                                                                }
                                                               ]
                                                              },
                                                              "yaw": -98.19,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": 0.24,
                                                              "hfov": 8.64
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 221,
                                                                 "width": 146,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_3_0.png"
                                                                }
                                                               ]
                                                              },
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "roll": 0,
                                                              "distance": 50,
                                                              "pitch": 0.24,
                                                              "hfov": 8.64,
                                                              "yaw": -98.19
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true
                                                           },
                                                           {
                                                            "id": "overlay_246EBCAE_2A6F_C5EC_41C3_413022A9C295",
                                                            "enabledInCardboard": true,
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "data": {
                                                             "label": "\u524d\u5f80\u4e8c\u6a13"
                                                            },
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 70,
                                                                 "width": 16,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_4_0_map.gif"
                                                                }
                                                               ]
                                                              },
                                                              "yaw": -90.23,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -2.12,
                                                              "hfov": 3.3
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -2.12,
                                                              "hfov": 3.3,
                                                              "yaw": -90.23,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 244,
                                                                 "width": 55,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_4_0.png"
                                                                }
                                                               ]
                                                              }
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true
                                                           },
                                                           {
                                                            "id": "overlay_24E28883_2A6F_CD94_41A7_D4A44F41B84A",
                                                            "enabledInCardboard": true,
                                                            "areas": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea",
                                                              "mapColor": "#FF0000"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             },
                                                             {
                                                              "class": "HotspotPanoramaOverlayArea"
                                                             }
                                                            ],
                                                            "data": {
                                                             "label": "\u524d\u5f80\u5730\u4e0b\u5c64"
                                                            },
                                                            "maps": [
                                                             {
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 70,
                                                                 "width": 16,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_5_0_map.gif"
                                                                }
                                                               ]
                                                              },
                                                              "yaw": -98.21,
                                                              "class": "HotspotPanoramaOverlayMap",
                                                              "pitch": -1.06,
                                                              "hfov": 3.3
                                                             }
                                                            ],
                                                            "items": [
                                                             {
                                                              "class": "HotspotPanoramaOverlayImage",
                                                              "pitch": -1.06,
                                                              "hfov": 3.3,
                                                              "yaw": -98.21,
                                                              "distance": 50,
                                                              "image": {
                                                               "class": "ImageResource",
                                                               "levels": [
                                                                {
                                                                 "height": 244,
                                                                 "width": 55,
                                                                 "class": "ImageResourceLevel",
                                                                 "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_0_HS_5_0.png"
                                                                }
                                                               ]
                                                              }
                                                             }
                                                            ],
                                                            "rollOverDisplay": false,
                                                            "class": "HotspotPanoramaOverlay",
                                                            "useHandCursor": true
                                                           }
                                                          ],
                                                          "sphere": {
                                                           "class": "ImageResource",
                                                           "levels": [
                                                            {
                                                             "height": 3040,
                                                             "width": 6080,
                                                             "tags": [
                                                              "oculusgo",
                                                              "ipadpro"
                                                             ],
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_hq.jpeg"
                                                            },
                                                            {
                                                             "height": 1024,
                                                             "width": 2048,
                                                             "tags": "preload",
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_lq.jpeg"
                                                            },
                                                            {
                                                             "height": 2001,
                                                             "width": 4002,
                                                             "class": "ImageResourceLevel",
                                                             "url": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432.jpeg"
                                                            }
                                                           ]
                                                          },
                                                          "thumbnailUrl": "media/panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_t.jpg",
                                                          "class": "SphericPanoramaFrame"
                                                         }
                                                        ],
                                                        "adjacentPanoramas": [
                                                         {
                                                          "panorama": "this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48",
                                                          "class": "AdjacentPanorama"
                                                         },
                                                         {
                                                          "panorama": "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D",
                                                          "backwardYaw": 90.07,
                                                          "yaw": -94.14,
                                                          "distance": 1,
                                                          "class": "AdjacentPanorama"
                                                         },
                                                         {
                                                          "panorama": "this.panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D",
                                                          "backwardYaw": -84.58,
                                                          "yaw": 91.09,
                                                          "distance": 1,
                                                          "class": "AdjacentPanorama"
                                                         },
                                                         {
                                                          "panorama": {
                                                           "id": "panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
                                                           "label": "IMG_20211103_161443_00_182processed",
                                                           "thumbnailUrl": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_t.jpg",
                                                           "class": "Panorama",
                                                           "pitch": 0,
                                                           "hfov": 360,
                                                           "frames": [
                                                            {
                                                             "overlays": [
                                                              {
                                                               "id": "overlay_37509D4C_2A29_8BC5_417D_6C12926D8A0E",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9, this.camera_2090BDB7_31B3_8FA0_4177_3ABBC333F077); this.mainPlayList.set('selectedIndex', 17)",
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "Polygon"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 99,
                                                                    "width": 58,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_0_1_0_map.gif"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "yaw": -53.93,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -7.26,
                                                                 "hfov": 6.88
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 198,
                                                                    "width": 116,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_0_0.png"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "roll": 0,
                                                                 "distance": 50,
                                                                 "pitch": -7.26,
                                                                 "hfov": 6.88,
                                                                 "yaw": -53.93
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              },
                                                              {
                                                               "id": "overlay_0414AEB2_2A68_895D_4179_1B90BF05DA50",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_20227F14_29D8_8745_41C2_B785C0176E46, this.camera_209DDDAE_31B3_8FA0_41BA_195832D9AE19); this.mainPlayList.set('selectedIndex', 27)",
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "Circle Arrow 01a Right"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 16,
                                                                    "width": 26,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_1_0_0_map.gif"
                                                                   }
                                                                  ],
                                                                  "frameCount": 24,
                                                                  "rowCount": 6,
                                                                  "frameDuration": 41,
                                                                  "colCount": 4,
                                                                  "class": "AnimatedImageResource"
                                                                 },
                                                                 "yaw": 111.29,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -13.23,
                                                                 "hfov": 17.58
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 1110,
                                                                    "width": 1220,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_1_0.png"
                                                                   }
                                                                  ],
                                                                  "frameCount": 24,
                                                                  "rowCount": 6,
                                                                  "frameDuration": 41,
                                                                  "colCount": 4,
                                                                  "class": "AnimatedImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "distance": 50,
                                                                 "pitch": -13.23,
                                                                 "hfov": 17.58,
                                                                 "yaw": 111.29
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              },
                                                              {
                                                               "id": "overlay_04BC7CAA_2A69_894D_41C0_E25BD8522090",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7, this.camera_20894DBE_31B3_8FA0_4189_6D28FBD407FC); this.mainPlayList.set('selectedIndex', 29)",
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "Circle Arrow 01a Left"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 16,
                                                                    "width": 26,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_2_0_0_map.gif"
                                                                   }
                                                                  ],
                                                                  "frameCount": 24,
                                                                  "rowCount": 6,
                                                                  "frameDuration": 41,
                                                                  "colCount": 4,
                                                                  "class": "AnimatedImageResource"
                                                                 },
                                                                 "yaw": -101.89,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -11.43,
                                                                 "hfov": 17.7
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 1110,
                                                                    "width": 1220,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_2_0.png"
                                                                   }
                                                                  ],
                                                                  "frameCount": 24,
                                                                  "rowCount": 6,
                                                                  "frameDuration": 41,
                                                                  "colCount": 4,
                                                                  "class": "AnimatedImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "distance": 50,
                                                                 "pitch": -11.43,
                                                                 "hfov": 17.7,
                                                                 "yaw": -101.89
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              },
                                                              {
                                                               "id": "overlay_1BF370C6_2A68_9AC5_41A3_B68A79F0BD61",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D, this.camera_209BEDA7_31B3_8FA0_41C6_124532899EB7); this.mainPlayList.set('selectedIndex', 32)",
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "Polygon"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 83,
                                                                    "width": 46,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_3_1_0_map.gif"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "yaw": -61.53,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -5.89,
                                                                 "hfov": 5.51
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 166,
                                                                    "width": 93,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_3_0.png"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "roll": 0,
                                                                 "distance": 50,
                                                                 "pitch": -5.89,
                                                                 "hfov": 5.51,
                                                                 "yaw": -61.53
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              },
                                                              {
                                                               "id": "overlay_0550E681_2A68_993F_4183_A5CF5B7B6FCD",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "click": "this.startPanoramaWithCamera(this.panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260, this.camera_20A0FD9F_31B3_8C60_41C0_5E702795AFAD); this.mainPlayList.set('selectedIndex', 30)",
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "Circle Arrow 01a"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 16,
                                                                    "width": 26,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_4_0_0_map.gif"
                                                                   }
                                                                  ],
                                                                  "frameCount": 24,
                                                                  "rowCount": 6,
                                                                  "frameDuration": 41,
                                                                  "colCount": 4,
                                                                  "class": "AnimatedImageResource"
                                                                 },
                                                                 "yaw": 2.55,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -20.09,
                                                                 "hfov": 16.96
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "image": {
                                                                  "levels": [
                                                                   {
                                                                    "height": 1110,
                                                                    "width": 1220,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_4_0.png"
                                                                   }
                                                                  ],
                                                                  "frameCount": 24,
                                                                  "rowCount": 6,
                                                                  "frameDuration": 41,
                                                                  "colCount": 4,
                                                                  "class": "AnimatedImageResource"
                                                                 },
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "distance": 100,
                                                                 "pitch": -20.09,
                                                                 "hfov": 16.96,
                                                                 "yaw": 2.55
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              },
                                                              {
                                                               "id": "overlay_279BAB2B_2A61_CC94_41A1_57770BBF4724",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "\u524d\u5f80\u4e00\u6a13"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 75,
                                                                    "width": 16,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_5_0_map.gif"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "yaw": -61.19,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -8.77,
                                                                 "hfov": 3.05
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -8.77,
                                                                 "hfov": 3.05,
                                                                 "yaw": -61.19,
                                                                 "distance": 50,
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 245,
                                                                    "width": 52,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_5_0.png"
                                                                   }
                                                                  ]
                                                                 }
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              },
                                                              {
                                                               "id": "overlay_27EF0B70_2A62_C374_41B6_D81ED0BC000C",
                                                               "enabledInCardboard": true,
                                                               "areas": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea",
                                                                 "mapColor": "#FF0000"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                },
                                                                {
                                                                 "class": "HotspotPanoramaOverlayArea"
                                                                }
                                                               ],
                                                               "data": {
                                                                "label": "\u524d\u5f80\u4e09\u6a13"
                                                               },
                                                               "maps": [
                                                                {
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 52,
                                                                    "width": 16,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_6_0_map.gif"
                                                                   }
                                                                  ]
                                                                 },
                                                                 "yaw": -53.54,
                                                                 "class": "HotspotPanoramaOverlayMap",
                                                                 "pitch": -9.48,
                                                                 "hfov": 4.35
                                                                }
                                                               ],
                                                               "items": [
                                                                {
                                                                 "class": "HotspotPanoramaOverlayImage",
                                                                 "pitch": -9.48,
                                                                 "hfov": 4.35,
                                                                 "yaw": -53.54,
                                                                 "distance": 50,
                                                                 "image": {
                                                                  "class": "ImageResource",
                                                                  "levels": [
                                                                   {
                                                                    "height": 245,
                                                                    "width": 74,
                                                                    "class": "ImageResourceLevel",
                                                                    "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_0_HS_6_0.png"
                                                                   }
                                                                  ]
                                                                 }
                                                                }
                                                               ],
                                                               "rollOverDisplay": false,
                                                               "class": "HotspotPanoramaOverlay",
                                                               "useHandCursor": true
                                                              }
                                                             ],
                                                             "sphere": {
                                                              "class": "ImageResource",
                                                              "levels": [
                                                               {
                                                                "height": 3040,
                                                                "width": 6080,
                                                                "tags": [
                                                                 "oculusgo",
                                                                 "ipadpro"
                                                                ],
                                                                "class": "ImageResourceLevel",
                                                                "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_hq.jpeg"
                                                               },
                                                               {
                                                                "height": 1024,
                                                                "width": 2048,
                                                                "tags": "preload",
                                                                "class": "ImageResourceLevel",
                                                                "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_lq.jpeg"
                                                               },
                                                               {
                                                                "height": 2001,
                                                                "width": 4002,
                                                                "class": "ImageResourceLevel",
                                                                "url": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314.jpeg"
                                                               }
                                                              ]
                                                             },
                                                             "thumbnailUrl": "media/panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_t.jpg",
                                                             "class": "SphericPanoramaFrame"
                                                            }
                                                           ],
                                                           "adjacentPanoramas": [
                                                            {
                                                             "panorama": {
                                                              "id": "panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260",
                                                              "label": "IMG_20211103_161746_00_185processed",
                                                              "thumbnailUrl": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_t.jpg",
                                                              "class": "Panorama",
                                                              "pitch": 0,
                                                              "hfov": 360,
                                                              "frames": [
                                                               {
                                                                "overlays": [
                                                                 {
                                                                  "id": "overlay_1BA0211D_2A68_9B47_41C3_A2E15C09A3F4",
                                                                  "enabledInCardboard": true,
                                                                  "areas": [
                                                                   {
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314, this.camera_2315AEC9_31B3_8DE0_41C4_C59F596A72BD); this.mainPlayList.set('selectedIndex', 28)",
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   },
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "Circle Arrow 01a"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 16,
                                                                       "width": 26,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_0_HS_0_0_0_map.gif"
                                                                      }
                                                                     ],
                                                                     "frameCount": 24,
                                                                     "rowCount": 6,
                                                                     "frameDuration": 41,
                                                                     "colCount": 4,
                                                                     "class": "AnimatedImageResource"
                                                                    },
                                                                    "yaw": 177.14,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -19.36,
                                                                    "hfov": 17.04
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 1110,
                                                                       "width": 1220,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_0_HS_0_0.png"
                                                                      }
                                                                     ],
                                                                     "frameCount": 24,
                                                                     "rowCount": 6,
                                                                     "frameDuration": 41,
                                                                     "colCount": 4,
                                                                     "class": "AnimatedImageResource"
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "distance": 100,
                                                                    "pitch": -19.36,
                                                                    "hfov": 17.04,
                                                                    "yaw": 177.14
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 },
                                                                 {
                                                                  "id": "overlay_3C11C900_2EE7_F99D_41B0_0D004ACA9A8A",
                                                                  "areas": [
                                                                   {
                                                                    "click": "this.setComponentVisibility(this.HTMLText_3891783E_2EF6_97BF_41BF_46DB8AAC028E, true, 0, null, null, false); this.setComponentVisibility(this.Image_38C98B4F_2EFA_89DD_41B1_41B9CF24AD17, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB, true, 0, null, null, false)",
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "Image"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 16,
                                                                       "width": 16,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_0_HS_1_0_0_map.gif"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "yaw": -2.05,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -14.97,
                                                                    "hfov": 10.44
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 182,
                                                                       "width": 182,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_0_HS_1_0.png"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "distance": 50,
                                                                    "pitch": -14.97,
                                                                    "hfov": 10.44,
                                                                    "yaw": -2.05
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 }
                                                                ],
                                                                "sphere": {
                                                                 "class": "ImageResource",
                                                                 "levels": [
                                                                  {
                                                                   "height": 3040,
                                                                   "width": 6080,
                                                                   "tags": [
                                                                    "oculusgo",
                                                                    "ipadpro"
                                                                   ],
                                                                   "class": "ImageResourceLevel",
                                                                   "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_hq.jpeg"
                                                                  },
                                                                  {
                                                                   "height": 1024,
                                                                   "width": 2048,
                                                                   "tags": "preload",
                                                                   "class": "ImageResourceLevel",
                                                                   "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_lq.jpeg"
                                                                  },
                                                                  {
                                                                   "height": 2001,
                                                                   "width": 4002,
                                                                   "class": "ImageResourceLevel",
                                                                   "url": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260.jpeg"
                                                                  }
                                                                 ]
                                                                },
                                                                "thumbnailUrl": "media/panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_t.jpg",
                                                                "class": "SphericPanoramaFrame"
                                                               }
                                                              ],
                                                              "adjacentPanoramas": [
                                                               {
                                                                "panorama": "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
                                                                "backwardYaw": 2.55,
                                                                "yaw": 177.14,
                                                                "distance": 1,
                                                                "class": "AdjacentPanorama"
                                                               }
                                                              ],
                                                              "partial": false,
                                                              "hfovMin": 60,
                                                              "hfovMax": 130,
                                                              "vfov": 180
                                                             },
                                                             "backwardYaw": 177.14,
                                                             "yaw": 2.55,
                                                             "distance": 1,
                                                             "class": "AdjacentPanorama"
                                                            },
                                                            {
                                                             "panorama": "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D",
                                                             "backwardYaw": 113.12,
                                                             "yaw": -61.53,
                                                             "distance": 1,
                                                             "class": "AdjacentPanorama"
                                                            },
                                                            {
                                                             "panorama": {
                                                              "id": "panorama_20227F14_29D8_8745_41C2_B785C0176E46",
                                                              "label": "IMG_20211103_161329_00_181processed",
                                                              "thumbnailUrl": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_t.jpg",
                                                              "class": "Panorama",
                                                              "pitch": 0,
                                                              "hfov": 360,
                                                              "frames": [
                                                               {
                                                                "overlays": [
                                                                 {
                                                                  "id": "overlay_07625230_2A79_795D_41A5_09E49FCB06A6",
                                                                  "enabledInCardboard": true,
                                                                  "areas": [
                                                                   {
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_202D4031_29D8_995F_4180_F7D352C8832C, this.camera_20BFAD7F_31B3_8CA0_41B3_2017C37C39FC); this.mainPlayList.set('selectedIndex', 26)",
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "Circle Arrow 01a Right"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 16,
                                                                       "width": 26,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_0_0_0_map.gif"
                                                                      }
                                                                     ],
                                                                     "frameCount": 24,
                                                                     "rowCount": 6,
                                                                     "frameDuration": 41,
                                                                     "colCount": 4,
                                                                     "class": "AnimatedImageResource"
                                                                    },
                                                                    "yaw": 104.62,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -11.43,
                                                                    "hfov": 17.7
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 1110,
                                                                       "width": 1220,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_0_0.png"
                                                                      }
                                                                     ],
                                                                     "frameCount": 24,
                                                                     "rowCount": 6,
                                                                     "frameDuration": 41,
                                                                     "colCount": 4,
                                                                     "class": "AnimatedImageResource"
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "distance": 50,
                                                                    "pitch": -11.43,
                                                                    "hfov": 17.7,
                                                                    "yaw": 104.62
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 },
                                                                 {
                                                                  "id": "overlay_07C1C874_2A79_89C5_41C3_2D3AA8FA099E",
                                                                  "enabledInCardboard": true,
                                                                  "areas": [
                                                                   {
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F, this.camera_20BB8D75_31B3_8CA0_41C7_25E3ED726E36); this.mainPlayList.set('selectedIndex', 15)",
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "Polygon"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 92,
                                                                       "width": 49,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_1_1_0_map.gif"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "yaw": 90.24,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -0.76,
                                                                    "hfov": 5.89
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 184,
                                                                       "width": 99,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_1_0.png"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "roll": 0,
                                                                    "distance": 50,
                                                                    "pitch": -0.76,
                                                                    "hfov": 5.89,
                                                                    "yaw": 90.24
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 },
                                                                 {
                                                                  "id": "overlay_0405D8AB_2A78_8943_41B2_DF90C28BD696",
                                                                  "enabledInCardboard": true,
                                                                  "areas": [
                                                                   {
                                                                    "click": "this.startPanoramaWithCamera(this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314, this.camera_20B1CD87_31B3_8C60_41B6_483E210FBF2D); this.mainPlayList.set('selectedIndex', 28)",
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   },
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "Circle Arrow 01a"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 16,
                                                                       "width": 26,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_2_0_0_map.gif"
                                                                      }
                                                                     ],
                                                                     "frameCount": 24,
                                                                     "rowCount": 6,
                                                                     "frameDuration": 41,
                                                                     "colCount": 4,
                                                                     "class": "AnimatedImageResource"
                                                                    },
                                                                    "yaw": -82.94,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -19.36,
                                                                    "hfov": 17.04
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "image": {
                                                                     "levels": [
                                                                      {
                                                                       "height": 1110,
                                                                       "width": 1220,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_2_0.png"
                                                                      }
                                                                     ],
                                                                     "frameCount": 24,
                                                                     "rowCount": 6,
                                                                     "frameDuration": 41,
                                                                     "colCount": 4,
                                                                     "class": "AnimatedImageResource"
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "distance": 100,
                                                                    "pitch": -19.36,
                                                                    "hfov": 17.04,
                                                                    "yaw": -82.94
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 },
                                                                 {
                                                                  "id": "overlay_2447E53D_2A67_C4EC_41B7_60D6437B97C8",
                                                                  "enabledInCardboard": true,
                                                                  "areas": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   },
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   },
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   },
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   },
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayArea"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "\u524d\u5f80\u4e09\u6a13"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 69,
                                                                       "width": 16,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_3_0_map.gif"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "yaw": 90.12,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -3.88,
                                                                    "hfov": 3.39
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "pitch": -3.88,
                                                                    "hfov": 3.39,
                                                                    "yaw": 90.12,
                                                                    "distance": 50,
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 247,
                                                                       "width": 57,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_3_0.png"
                                                                      }
                                                                     ]
                                                                    }
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 },
                                                                 {
                                                                  "id": "overlay_3C9565F2_2EE4_687D_4199_2B5DC1D36E10",
                                                                  "areas": [
                                                                   {
                                                                    "click": "this.setComponentVisibility(this.HTMLText_383600A1_2EF7_9744_41B0_AAB50135347D, true, 0, null, null, false); this.setComponentVisibility(this.Image_38948EA8_2EF5_8B43_4189_ED0D81F9FCD9, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_39BB7C9F_2E8A_8F7D_41B0_3B04C265327D, true, 0, null, null, false)",
                                                                    "class": "HotspotPanoramaOverlayArea",
                                                                    "mapColor": "#FF0000"
                                                                   }
                                                                  ],
                                                                  "data": {
                                                                   "label": "Image"
                                                                  },
                                                                  "maps": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 16,
                                                                       "width": 16,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_4_0_0_map.gif"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "yaw": 2.85,
                                                                    "class": "HotspotPanoramaOverlayMap",
                                                                    "pitch": -10.22,
                                                                    "hfov": 10.64
                                                                   }
                                                                  ],
                                                                  "items": [
                                                                   {
                                                                    "image": {
                                                                     "class": "ImageResource",
                                                                     "levels": [
                                                                      {
                                                                       "height": 182,
                                                                       "width": 182,
                                                                       "class": "ImageResourceLevel",
                                                                       "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_0_HS_4_0.png"
                                                                      }
                                                                     ]
                                                                    },
                                                                    "class": "HotspotPanoramaOverlayImage",
                                                                    "distance": 50,
                                                                    "pitch": -10.22,
                                                                    "hfov": 10.64,
                                                                    "yaw": 2.85
                                                                   }
                                                                  ],
                                                                  "rollOverDisplay": false,
                                                                  "class": "HotspotPanoramaOverlay",
                                                                  "useHandCursor": true
                                                                 }
                                                                ],
                                                                "sphere": {
                                                                 "class": "ImageResource",
                                                                 "levels": [
                                                                  {
                                                                   "height": 3040,
                                                                   "width": 6080,
                                                                   "tags": [
                                                                    "oculusgo",
                                                                    "ipadpro"
                                                                   ],
                                                                   "class": "ImageResourceLevel",
                                                                   "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_hq.jpeg"
                                                                  },
                                                                  {
                                                                   "height": 1024,
                                                                   "width": 2048,
                                                                   "tags": "preload",
                                                                   "class": "ImageResourceLevel",
                                                                   "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_lq.jpeg"
                                                                  },
                                                                  {
                                                                   "height": 2001,
                                                                   "width": 4002,
                                                                   "class": "ImageResourceLevel",
                                                                   "url": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46.jpeg"
                                                                  }
                                                                 ]
                                                                },
                                                                "thumbnailUrl": "media/panorama_20227F14_29D8_8745_41C2_B785C0176E46_t.jpg",
                                                                "class": "SphericPanoramaFrame"
                                                               }
                                                              ],
                                                              "adjacentPanoramas": [
                                                               {
                                                                "panorama": {
                                                                 "id": "panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F",
                                                                 "label": "IMG_20211103_155451_00_168processed",
                                                                 "thumbnailUrl": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_t.jpg",
                                                                 "class": "Panorama",
                                                                 "pitch": 0,
                                                                 "hfov": 360,
                                                                 "frames": [
                                                                  {
                                                                   "overlays": [
                                                                    {
                                                                     "id": "overlay_368CB5B4_2A27_7B45_41C2_A5746374F940",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935, this.camera_225FCD03_31B3_8C60_4199_064C83C5CAA2); this.mainPlayList.set('selectedIndex', 14)",
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "Polygon"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 155,
                                                                          "width": 25,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_0_1_0_map.gif"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "yaw": -64.82,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -0.56,
                                                                       "hfov": 3.03
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 311,
                                                                          "width": 51,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_0_0.png"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "roll": 0,
                                                                       "distance": 50,
                                                                       "pitch": -0.56,
                                                                       "hfov": 3.03,
                                                                       "yaw": -64.82
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    },
                                                                    {
                                                                     "id": "overlay_00F10860_2A78_89FD_41A7_3A3ED4A8DD24",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_20227F14_29D8_8745_41C2_B785C0176E46, this.camera_226FACFA_31B3_8DA0_41C2_0120C014AE35); this.mainPlayList.set('selectedIndex', 27)",
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "Polygon"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 143,
                                                                          "width": 24,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_2_1_0_map.gif"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "yaw": -67.2,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -0.53,
                                                                       "hfov": 2.88
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 287,
                                                                          "width": 48,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_2_0.png"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "roll": 0,
                                                                       "distance": 50,
                                                                       "pitch": -0.53,
                                                                       "hfov": 2.88,
                                                                       "yaw": -67.2
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    },
                                                                    {
                                                                     "id": "overlay_146BDF83_2A38_8743_41BF_5FAFFB525857",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_202E762D_29D9_B947_41B9_73BF2ED44020, this.camera_227FBCF2_31B3_8DA0_41B4_F96EEB2ACD01); this.mainPlayList.set('selectedIndex', 16)",
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "Circle Arrow 01a Right-Up"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "levels": [
                                                                         {
                                                                          "height": 16,
                                                                          "width": 26,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_3_0_0_map.gif"
                                                                         }
                                                                        ],
                                                                        "frameCount": 24,
                                                                        "rowCount": 6,
                                                                        "frameDuration": 41,
                                                                        "colCount": 4,
                                                                        "class": "AnimatedImageResource"
                                                                       },
                                                                       "yaw": 49.61,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -23.15,
                                                                       "hfov": 16.6
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "image": {
                                                                        "levels": [
                                                                         {
                                                                          "height": 1110,
                                                                          "width": 1220,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_3_0.png"
                                                                         }
                                                                        ],
                                                                        "frameCount": 24,
                                                                        "rowCount": 6,
                                                                        "frameDuration": 41,
                                                                        "colCount": 4,
                                                                        "class": "AnimatedImageResource"
                                                                       },
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "distance": 50,
                                                                       "pitch": -23.15,
                                                                       "hfov": 16.6,
                                                                       "yaw": 49.61
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    },
                                                                    {
                                                                     "id": "overlay_3B4A19A4_2A62_4F9C_41B8_C0BE5CDF73FA",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "\u524d\u5f80\u56db\u6a13"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 198,
                                                                          "width": 15,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_6_0_map.gif"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "yaw": -64.76,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -14.28,
                                                                       "hfov": 2.85
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "pitch": -14.28,
                                                                       "hfov": 2.85,
                                                                       "yaw": -64.76,
                                                                       "distance": 50,
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 608,
                                                                          "width": 49,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_6_0.png"
                                                                         }
                                                                        ]
                                                                       }
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    },
                                                                    {
                                                                     "id": "overlay_3837FFB8_2A7E_43F4_41A3_24296D6D5E2E",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      },
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayArea"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "\u524d\u5f80\u4e8c\u6a13"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 198,
                                                                          "width": 15,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_7_0_map.gif"
                                                                         }
                                                                        ]
                                                                       },
                                                                       "yaw": -67.16,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -14.27,
                                                                       "hfov": 2.85
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "pitch": -14.27,
                                                                       "hfov": 2.85,
                                                                       "yaw": -67.16,
                                                                       "distance": 50,
                                                                       "image": {
                                                                        "class": "ImageResource",
                                                                        "levels": [
                                                                         {
                                                                          "height": 608,
                                                                          "width": 49,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_0_HS_7_0.png"
                                                                         }
                                                                        ]
                                                                       }
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    }
                                                                   ],
                                                                   "sphere": {
                                                                    "class": "ImageResource",
                                                                    "levels": [
                                                                     {
                                                                      "height": 3040,
                                                                      "width": 6080,
                                                                      "tags": [
                                                                       "oculusgo",
                                                                       "ipadpro"
                                                                      ],
                                                                      "class": "ImageResourceLevel",
                                                                      "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_hq.jpeg"
                                                                     },
                                                                     {
                                                                      "height": 1024,
                                                                      "width": 2048,
                                                                      "tags": "preload",
                                                                      "class": "ImageResourceLevel",
                                                                      "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_lq.jpeg"
                                                                     },
                                                                     {
                                                                      "height": 2001,
                                                                      "width": 4002,
                                                                      "class": "ImageResourceLevel",
                                                                      "url": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F.jpeg"
                                                                     }
                                                                    ]
                                                                   },
                                                                   "thumbnailUrl": "media/panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_t.jpg",
                                                                   "class": "SphericPanoramaFrame"
                                                                  }
                                                                 ],
                                                                 "adjacentPanoramas": [
                                                                  {
                                                                   "panorama": {
                                                                    "id": "panorama_202E762D_29D9_B947_41B9_73BF2ED44020",
                                                                    "label": "IMG_20211103_155603_00_169processed",
                                                                    "thumbnailUrl": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_t.jpg",
                                                                    "class": "Panorama",
                                                                    "pitch": 0,
                                                                    "hfov": 360,
                                                                    "frames": [
                                                                     {
                                                                      "overlays": [
                                                                       {
                                                                        "id": "overlay_308B1445_2A2B_B9C7_41AA_608848695760",
                                                                        "enabledInCardboard": true,
                                                                        "areas": [
                                                                         {
                                                                          "click": "this.startPanoramaWithCamera(this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F, this.camera_200DDE39_31B3_8CA0_4191_BCFB26C67801); this.mainPlayList.set('selectedIndex', 15)",
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000"
                                                                         },
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayArea"
                                                                         }
                                                                        ],
                                                                        "data": {
                                                                         "label": "Circle Arrow 01a"
                                                                        },
                                                                        "maps": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 16,
                                                                             "width": 26,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_0_HS_0_0_0_map.gif"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "yaw": 89.47,
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "pitch": -23.69,
                                                                          "hfov": 16.54
                                                                         }
                                                                        ],
                                                                        "items": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 1110,
                                                                             "width": 1220,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_0_HS_0_0.png"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "distance": 100,
                                                                          "pitch": -23.69,
                                                                          "hfov": 16.54,
                                                                          "yaw": 89.47
                                                                         }
                                                                        ],
                                                                        "rollOverDisplay": false,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "useHandCursor": true
                                                                       },
                                                                       {
                                                                        "id": "overlay_3110BE98_2A28_894D_41B5_865A2E445F3D",
                                                                        "enabledInCardboard": true,
                                                                        "areas": [
                                                                         {
                                                                          "click": "this.startPanoramaWithCamera(this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9, this.camera_2017EE31_31B3_8CA0_41C3_87BAF559F180); this.mainPlayList.set('selectedIndex', 17)",
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000"
                                                                         },
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayArea"
                                                                         }
                                                                        ],
                                                                        "data": {
                                                                         "label": "Circle Arrow 01a"
                                                                        },
                                                                        "maps": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 16,
                                                                             "width": 26,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_0_HS_1_0_0_map.gif"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "yaw": -94.5,
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "pitch": -25.5,
                                                                          "hfov": 16.3
                                                                         }
                                                                        ],
                                                                        "items": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 1110,
                                                                             "width": 1220,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_0_HS_1_0.png"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "distance": 100,
                                                                          "pitch": -25.5,
                                                                          "hfov": 16.3,
                                                                          "yaw": -94.5
                                                                         }
                                                                        ],
                                                                        "rollOverDisplay": false,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "useHandCursor": true
                                                                       }
                                                                      ],
                                                                      "sphere": {
                                                                       "class": "ImageResource",
                                                                       "levels": [
                                                                        {
                                                                         "height": 3040,
                                                                         "width": 6080,
                                                                         "tags": [
                                                                          "oculusgo",
                                                                          "ipadpro"
                                                                         ],
                                                                         "class": "ImageResourceLevel",
                                                                         "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_hq.jpeg"
                                                                        },
                                                                        {
                                                                         "height": 1024,
                                                                         "width": 2048,
                                                                         "tags": "preload",
                                                                         "class": "ImageResourceLevel",
                                                                         "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_lq.jpeg"
                                                                        },
                                                                        {
                                                                         "height": 2001,
                                                                         "width": 4002,
                                                                         "class": "ImageResourceLevel",
                                                                         "url": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020.jpeg"
                                                                        }
                                                                       ]
                                                                      },
                                                                      "thumbnailUrl": "media/panorama_202E762D_29D9_B947_41B9_73BF2ED44020_t.jpg",
                                                                      "class": "SphericPanoramaFrame"
                                                                     }
                                                                    ],
                                                                    "adjacentPanoramas": [
                                                                     {
                                                                      "panorama": {
                                                                       "id": "panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9",
                                                                       "label": "IMG_20211103_155658_00_170processed",
                                                                       "thumbnailUrl": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_t.jpg",
                                                                       "class": "Panorama",
                                                                       "pitch": 0,
                                                                       "hfov": 360,
                                                                       "frames": [
                                                                        {
                                                                         "overlays": [
                                                                          {
                                                                           "id": "overlay_362EA032_2A28_B95D_41BD_37D4A3035455",
                                                                           "enabledInCardboard": true,
                                                                           "areas": [
                                                                            {
                                                                             "click": "this.startPanoramaWithCamera(this.panorama_202E762D_29D9_B947_41B9_73BF2ED44020, this.camera_20D0FDFB_31B3_8FA0_41BC_5198CF5060F0); this.mainPlayList.set('selectedIndex', 16)",
                                                                             "class": "HotspotPanoramaOverlayArea",
                                                                             "mapColor": "#FF0000"
                                                                            }
                                                                           ],
                                                                           "data": {
                                                                            "label": "Circle Arrow 01a Right-Up"
                                                                           },
                                                                           "maps": [
                                                                            {
                                                                             "image": {
                                                                              "levels": [
                                                                               {
                                                                                "height": 16,
                                                                                "width": 26,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_0_0_0_map.gif"
                                                                               }
                                                                              ],
                                                                              "frameCount": 24,
                                                                              "rowCount": 6,
                                                                              "frameDuration": 41,
                                                                              "colCount": 4,
                                                                              "class": "AnimatedImageResource"
                                                                             },
                                                                             "yaw": -36.96,
                                                                             "class": "HotspotPanoramaOverlayMap",
                                                                             "pitch": -16.66,
                                                                             "hfov": 17.3
                                                                            }
                                                                           ],
                                                                           "items": [
                                                                            {
                                                                             "image": {
                                                                              "levels": [
                                                                               {
                                                                                "height": 1110,
                                                                                "width": 1220,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_0_0.png"
                                                                               }
                                                                              ],
                                                                              "frameCount": 24,
                                                                              "rowCount": 6,
                                                                              "frameDuration": 41,
                                                                              "colCount": 4,
                                                                              "class": "AnimatedImageResource"
                                                                             },
                                                                             "class": "HotspotPanoramaOverlayImage",
                                                                             "distance": 50,
                                                                             "pitch": -16.66,
                                                                             "hfov": 17.3,
                                                                             "yaw": -36.96
                                                                            }
                                                                           ],
                                                                           "rollOverDisplay": false,
                                                                           "class": "HotspotPanoramaOverlay",
                                                                           "useHandCursor": true
                                                                          },
                                                                          {
                                                                           "id": "overlay_36A0BE33_2A2F_8943_41C2_060E38736615",
                                                                           "enabledInCardboard": true,
                                                                           "areas": [
                                                                            {
                                                                             "click": "this.startPanoramaWithCamera(this.panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390, this.camera_20C9CE03_31B3_8C60_4194_374BC56CD3B0); this.mainPlayList.set('selectedIndex', 18)",
                                                                             "class": "HotspotPanoramaOverlayArea",
                                                                             "mapColor": "#FF0000"
                                                                            },
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayArea"
                                                                            }
                                                                           ],
                                                                           "data": {
                                                                            "label": "Circle Arrow 01a"
                                                                           },
                                                                           "maps": [
                                                                            {
                                                                             "image": {
                                                                              "levels": [
                                                                               {
                                                                                "height": 16,
                                                                                "width": 26,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_1_0_0_map.gif"
                                                                               }
                                                                              ],
                                                                              "frameCount": 24,
                                                                              "rowCount": 6,
                                                                              "frameDuration": 41,
                                                                              "colCount": 4,
                                                                              "class": "AnimatedImageResource"
                                                                             },
                                                                             "yaw": -97.74,
                                                                             "class": "HotspotPanoramaOverlayMap",
                                                                             "pitch": -15.76,
                                                                             "hfov": 17.38
                                                                            }
                                                                           ],
                                                                           "items": [
                                                                            {
                                                                             "image": {
                                                                              "levels": [
                                                                               {
                                                                                "height": 1110,
                                                                                "width": 1220,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_1_0.png"
                                                                               }
                                                                              ],
                                                                              "frameCount": 24,
                                                                              "rowCount": 6,
                                                                              "frameDuration": 41,
                                                                              "colCount": 4,
                                                                              "class": "AnimatedImageResource"
                                                                             },
                                                                             "class": "HotspotPanoramaOverlayImage",
                                                                             "distance": 100,
                                                                             "pitch": -15.76,
                                                                             "hfov": 17.38,
                                                                             "yaw": -97.74
                                                                            }
                                                                           ],
                                                                           "rollOverDisplay": false,
                                                                           "class": "HotspotPanoramaOverlay",
                                                                           "useHandCursor": true
                                                                          },
                                                                          {
                                                                           "id": "overlay_37F9754E_2A2B_FBC5_4191_2855AF8179EE",
                                                                           "enabledInCardboard": true,
                                                                           "areas": [
                                                                            {
                                                                             "click": "this.startPanoramaWithCamera(this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314, this.camera_20C03E0A_31B3_8C60_41B2_712FFC253A94); this.mainPlayList.set('selectedIndex', 28)",
                                                                             "class": "HotspotPanoramaOverlayArea",
                                                                             "mapColor": "#FF0000"
                                                                            }
                                                                           ],
                                                                           "data": {
                                                                            "label": "Polygon"
                                                                           },
                                                                           "maps": [
                                                                            {
                                                                             "image": {
                                                                              "class": "ImageResource",
                                                                              "levels": [
                                                                               {
                                                                                "height": 154,
                                                                                "width": 89,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_2_1_0_map.gif"
                                                                               }
                                                                              ]
                                                                             },
                                                                             "yaw": -174.7,
                                                                             "class": "HotspotPanoramaOverlayMap",
                                                                             "pitch": -11.15,
                                                                             "hfov": 10.57
                                                                            }
                                                                           ],
                                                                           "items": [
                                                                            {
                                                                             "image": {
                                                                              "class": "ImageResource",
                                                                              "levels": [
                                                                               {
                                                                                "height": 309,
                                                                                "width": 178,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_2_0.png"
                                                                               }
                                                                              ]
                                                                             },
                                                                             "class": "HotspotPanoramaOverlayImage",
                                                                             "roll": 0,
                                                                             "distance": 50,
                                                                             "pitch": -11.15,
                                                                             "hfov": 10.57,
                                                                             "yaw": -174.7
                                                                            }
                                                                           ],
                                                                           "rollOverDisplay": false,
                                                                           "class": "HotspotPanoramaOverlay",
                                                                           "useHandCursor": true
                                                                          },
                                                                          {
                                                                           "id": "overlay_6A84B7A9_2ADB_874F_41A3_BB14FD4ECC66",
                                                                           "enabledInCardboard": true,
                                                                           "areas": [
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayArea",
                                                                             "mapColor": "#FF0000"
                                                                            },
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayArea"
                                                                            },
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayArea"
                                                                            },
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayArea"
                                                                            },
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayArea"
                                                                            }
                                                                           ],
                                                                           "data": {
                                                                            "label": "\u524d\u5f80\u4e8c\u6a13"
                                                                           },
                                                                           "maps": [
                                                                            {
                                                                             "image": {
                                                                              "class": "ImageResource",
                                                                              "levels": [
                                                                               {
                                                                                "height": 51,
                                                                                "width": 16,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_3_0_map.gif"
                                                                               }
                                                                              ]
                                                                             },
                                                                             "yaw": -173.98,
                                                                             "class": "HotspotPanoramaOverlayMap",
                                                                             "pitch": -11.88,
                                                                             "hfov": 4.73
                                                                            }
                                                                           ],
                                                                           "items": [
                                                                            {
                                                                             "class": "HotspotPanoramaOverlayImage",
                                                                             "pitch": -11.88,
                                                                             "hfov": 4.73,
                                                                             "yaw": -173.98,
                                                                             "distance": 50,
                                                                             "image": {
                                                                              "class": "ImageResource",
                                                                              "levels": [
                                                                               {
                                                                                "height": 262,
                                                                                "width": 81,
                                                                                "class": "ImageResourceLevel",
                                                                                "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_0_HS_3_0.png"
                                                                               }
                                                                              ]
                                                                             }
                                                                            }
                                                                           ],
                                                                           "rollOverDisplay": false,
                                                                           "class": "HotspotPanoramaOverlay",
                                                                           "useHandCursor": true
                                                                          }
                                                                         ],
                                                                         "sphere": {
                                                                          "class": "ImageResource",
                                                                          "levels": [
                                                                           {
                                                                            "height": 3040,
                                                                            "width": 6080,
                                                                            "tags": [
                                                                             "oculusgo",
                                                                             "ipadpro"
                                                                            ],
                                                                            "class": "ImageResourceLevel",
                                                                            "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_hq.jpeg"
                                                                           },
                                                                           {
                                                                            "height": 1024,
                                                                            "width": 2048,
                                                                            "tags": "preload",
                                                                            "class": "ImageResourceLevel",
                                                                            "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_lq.jpeg"
                                                                           },
                                                                           {
                                                                            "height": 2001,
                                                                            "width": 4002,
                                                                            "class": "ImageResourceLevel",
                                                                            "url": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9.jpeg"
                                                                           }
                                                                          ]
                                                                         },
                                                                         "thumbnailUrl": "media/panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_t.jpg",
                                                                         "class": "SphericPanoramaFrame"
                                                                        }
                                                                       ],
                                                                       "adjacentPanoramas": [
                                                                        {
                                                                         "panorama": "this.panorama_202E762D_29D9_B947_41B9_73BF2ED44020",
                                                                         "backwardYaw": -94.5,
                                                                         "yaw": -36.96,
                                                                         "distance": 1,
                                                                         "class": "AdjacentPanorama"
                                                                        },
                                                                        {
                                                                         "panorama": {
                                                                          "id": "panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390",
                                                                          "label": "IMG_20211103_155750_00_171processed",
                                                                          "thumbnailUrl": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_t.jpg",
                                                                          "class": "Panorama",
                                                                          "pitch": 0,
                                                                          "hfov": 360,
                                                                          "frames": [
                                                                           {
                                                                            "overlays": [
                                                                             {
                                                                              "id": "overlay_345F5CE5_2A27_8AC7_41A2_63541C75D1B8",
                                                                              "enabledInCardboard": true,
                                                                              "areas": [
                                                                               {
                                                                                "click": "this.startPanoramaWithCamera(this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9, this.camera_233E6BE1_31B3_8BA0_41B2_3DF9BD8DA694); this.mainPlayList.set('selectedIndex', 17)",
                                                                                "class": "HotspotPanoramaOverlayArea",
                                                                                "mapColor": "#FF0000"
                                                                               },
                                                                               {
                                                                                "class": "HotspotPanoramaOverlayArea"
                                                                               }
                                                                              ],
                                                                              "data": {
                                                                               "label": "Circle Arrow 01a"
                                                                              },
                                                                              "maps": [
                                                                               {
                                                                                "image": {
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 16,
                                                                                   "width": 26,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_0_0_0_map.gif"
                                                                                  }
                                                                                 ],
                                                                                 "frameCount": 24,
                                                                                 "rowCount": 6,
                                                                                 "frameDuration": 41,
                                                                                 "colCount": 4,
                                                                                 "class": "AnimatedImageResource"
                                                                                },
                                                                                "yaw": -89.09,
                                                                                "class": "HotspotPanoramaOverlayMap",
                                                                                "pitch": -12.15,
                                                                                "hfov": 17.65
                                                                               }
                                                                              ],
                                                                              "items": [
                                                                               {
                                                                                "image": {
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 1110,
                                                                                   "width": 1220,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_0_0.png"
                                                                                  }
                                                                                 ],
                                                                                 "frameCount": 24,
                                                                                 "rowCount": 6,
                                                                                 "frameDuration": 41,
                                                                                 "colCount": 4,
                                                                                 "class": "AnimatedImageResource"
                                                                                },
                                                                                "class": "HotspotPanoramaOverlayImage",
                                                                                "distance": 100,
                                                                                "pitch": -12.15,
                                                                                "hfov": 17.65,
                                                                                "yaw": -89.09
                                                                               }
                                                                              ],
                                                                              "rollOverDisplay": false,
                                                                              "class": "HotspotPanoramaOverlay",
                                                                              "useHandCursor": true
                                                                             },
                                                                             {
                                                                              "id": "overlay_0AA1C422_2A59_797D_41AF_3BD74E0897D5",
                                                                              "enabledInCardboard": true,
                                                                              "areas": [
                                                                               {
                                                                                "click": "this.mainPlayList.set('selectedIndex', 15)",
                                                                                "class": "HotspotPanoramaOverlayArea",
                                                                                "mapColor": "#FF0000"
                                                                               },
                                                                               {
                                                                                "class": "HotspotPanoramaOverlayArea"
                                                                               }
                                                                              ],
                                                                              "data": {
                                                                               "label": "Circle Arrow 01a"
                                                                              },
                                                                              "maps": [
                                                                               {
                                                                                "image": {
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 16,
                                                                                   "width": 26,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_1_0_0_map.gif"
                                                                                  }
                                                                                 ],
                                                                                 "frameCount": 24,
                                                                                 "rowCount": 6,
                                                                                 "frameDuration": 41,
                                                                                 "colCount": 4,
                                                                                 "class": "AnimatedImageResource"
                                                                                },
                                                                                "yaw": -177.82,
                                                                                "class": "HotspotPanoramaOverlayMap",
                                                                                "pitch": -14.31,
                                                                                "hfov": 17.5
                                                                               }
                                                                              ],
                                                                              "items": [
                                                                               {
                                                                                "image": {
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 1110,
                                                                                   "width": 1220,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_1_0.png"
                                                                                  }
                                                                                 ],
                                                                                 "frameCount": 24,
                                                                                 "rowCount": 6,
                                                                                 "frameDuration": 41,
                                                                                 "colCount": 4,
                                                                                 "class": "AnimatedImageResource"
                                                                                },
                                                                                "class": "HotspotPanoramaOverlayImage",
                                                                                "distance": 100,
                                                                                "pitch": -14.31,
                                                                                "hfov": 17.5,
                                                                                "yaw": -177.82
                                                                               }
                                                                              ],
                                                                              "rollOverDisplay": false,
                                                                              "class": "HotspotPanoramaOverlay",
                                                                              "useHandCursor": true
                                                                             },
                                                                             {
                                                                              "id": "overlay_0A568FB0_2A5B_875D_41BD_6FB1F5A5638C",
                                                                              "enabledInCardboard": true,
                                                                              "areas": [
                                                                               {
                                                                                "click": "this.startPanoramaWithCamera(this.panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147, this.camera_23C1BBD2_31B3_8BE0_41A8_8525A2DBA769); this.mainPlayList.set('selectedIndex', 19)",
                                                                                "class": "HotspotPanoramaOverlayArea",
                                                                                "mapColor": "#FF0000"
                                                                               }
                                                                              ],
                                                                              "data": {
                                                                               "label": "Circle Arrow 01a Right-Up"
                                                                              },
                                                                              "maps": [
                                                                               {
                                                                                "image": {
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 16,
                                                                                   "width": 26,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_2_0_0_map.gif"
                                                                                  }
                                                                                 ],
                                                                                 "frameCount": 24,
                                                                                 "rowCount": 6,
                                                                                 "frameDuration": 41,
                                                                                 "colCount": 4,
                                                                                 "class": "AnimatedImageResource"
                                                                                },
                                                                                "yaw": -60.05,
                                                                                "class": "HotspotPanoramaOverlayMap",
                                                                                "pitch": -18.46,
                                                                                "hfov": 17.13
                                                                               }
                                                                              ],
                                                                              "items": [
                                                                               {
                                                                                "image": {
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 1110,
                                                                                   "width": 1220,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_2_0.png"
                                                                                  }
                                                                                 ],
                                                                                 "frameCount": 24,
                                                                                 "rowCount": 6,
                                                                                 "frameDuration": 41,
                                                                                 "colCount": 4,
                                                                                 "class": "AnimatedImageResource"
                                                                                },
                                                                                "class": "HotspotPanoramaOverlayImage",
                                                                                "distance": 50,
                                                                                "pitch": -18.46,
                                                                                "hfov": 17.13,
                                                                                "yaw": -60.05
                                                                               }
                                                                              ],
                                                                              "rollOverDisplay": false,
                                                                              "class": "HotspotPanoramaOverlay",
                                                                              "useHandCursor": true
                                                                             },
                                                                             {
                                                                              "id": "overlay_3AC3E9A9_2EE7_F8EF_41B2_B14BAEE3B698",
                                                                              "areas": [
                                                                               {
                                                                                "click": "this.setComponentVisibility(this.HTMLText_3FA772FA_2EEC_E86D_4197_36F3A016CF80, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3E062EAE_2EEF_F8E5_41C4_C10658C1F3BB, true, 0, null, null, false)",
                                                                                "class": "HotspotPanoramaOverlayArea",
                                                                                "mapColor": "#FF0000"
                                                                               },
                                                                               {
                                                                                "class": "HotspotPanoramaOverlayArea"
                                                                               },
                                                                               {
                                                                                "class": "HotspotPanoramaOverlayArea"
                                                                               }
                                                                              ],
                                                                              "data": {
                                                                               "label": "Image"
                                                                              },
                                                                              "maps": [
                                                                               {
                                                                                "image": {
                                                                                 "class": "ImageResource",
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 16,
                                                                                   "width": 16,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_3_0_0_map.gif"
                                                                                  }
                                                                                 ]
                                                                                },
                                                                                "yaw": 102.34,
                                                                                "class": "HotspotPanoramaOverlayMap",
                                                                                "pitch": -8.92,
                                                                                "hfov": 10.68
                                                                               }
                                                                              ],
                                                                              "items": [
                                                                               {
                                                                                "image": {
                                                                                 "class": "ImageResource",
                                                                                 "levels": [
                                                                                  {
                                                                                   "height": 182,
                                                                                   "width": 182,
                                                                                   "class": "ImageResourceLevel",
                                                                                   "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_0_HS_3_0.png"
                                                                                  }
                                                                                 ]
                                                                                },
                                                                                "class": "HotspotPanoramaOverlayImage",
                                                                                "distance": 50,
                                                                                "pitch": -8.92,
                                                                                "hfov": 10.68,
                                                                                "yaw": 102.34
                                                                               }
                                                                              ],
                                                                              "rollOverDisplay": false,
                                                                              "class": "HotspotPanoramaOverlay",
                                                                              "useHandCursor": true
                                                                             }
                                                                            ],
                                                                            "sphere": {
                                                                             "class": "ImageResource",
                                                                             "levels": [
                                                                              {
                                                                               "height": 3040,
                                                                               "width": 6080,
                                                                               "tags": [
                                                                                "oculusgo",
                                                                                "ipadpro"
                                                                               ],
                                                                               "class": "ImageResourceLevel",
                                                                               "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_hq.jpeg"
                                                                              },
                                                                              {
                                                                               "height": 1024,
                                                                               "width": 2048,
                                                                               "tags": "preload",
                                                                               "class": "ImageResourceLevel",
                                                                               "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_lq.jpeg"
                                                                              },
                                                                              {
                                                                               "height": 2001,
                                                                               "width": 4002,
                                                                               "class": "ImageResourceLevel",
                                                                               "url": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390.jpeg"
                                                                              }
                                                                             ]
                                                                            },
                                                                            "thumbnailUrl": "media/panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_t.jpg",
                                                                            "class": "SphericPanoramaFrame"
                                                                           }
                                                                          ],
                                                                          "adjacentPanoramas": [
                                                                           {
                                                                            "panorama": {
                                                                             "id": "panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147",
                                                                             "label": "IMG_20211103_155853_00_172processed",
                                                                             "thumbnailUrl": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_t.jpg",
                                                                             "class": "Panorama",
                                                                             "pitch": 0,
                                                                             "hfov": 360,
                                                                             "frames": [
                                                                              {
                                                                               "overlays": [
                                                                                {
                                                                                 "id": "overlay_0A80081A_2A58_894D_41B9_1F4A920A164E",
                                                                                 "enabledInCardboard": true,
                                                                                 "areas": [
                                                                                  {
                                                                                   "click": "this.startPanoramaWithCamera(this.panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390, this.camera_221D2CE2_31B3_8DA0_41B1_A0A814EB24CC); this.mainPlayList.set('selectedIndex', 18)",
                                                                                   "class": "HotspotPanoramaOverlayArea",
                                                                                   "mapColor": "#FF0000"
                                                                                  },
                                                                                  {
                                                                                   "class": "HotspotPanoramaOverlayArea"
                                                                                  }
                                                                                 ],
                                                                                 "data": {
                                                                                  "label": "Circle Arrow 01a"
                                                                                 },
                                                                                 "maps": [
                                                                                  {
                                                                                   "image": {
                                                                                    "levels": [
                                                                                     {
                                                                                      "height": 16,
                                                                                      "width": 26,
                                                                                      "class": "ImageResourceLevel",
                                                                                      "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_0_HS_0_0_0_map.gif"
                                                                                     }
                                                                                    ],
                                                                                    "frameCount": 24,
                                                                                    "rowCount": 6,
                                                                                    "frameDuration": 41,
                                                                                    "colCount": 4,
                                                                                    "class": "AnimatedImageResource"
                                                                                   },
                                                                                   "yaw": 0.56,
                                                                                   "class": "HotspotPanoramaOverlayMap",
                                                                                   "pitch": -23.33,
                                                                                   "hfov": 16.58
                                                                                  }
                                                                                 ],
                                                                                 "items": [
                                                                                  {
                                                                                   "image": {
                                                                                    "levels": [
                                                                                     {
                                                                                      "height": 1110,
                                                                                      "width": 1220,
                                                                                      "class": "ImageResourceLevel",
                                                                                      "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_0_HS_0_0.png"
                                                                                     }
                                                                                    ],
                                                                                    "frameCount": 24,
                                                                                    "rowCount": 6,
                                                                                    "frameDuration": 41,
                                                                                    "colCount": 4,
                                                                                    "class": "AnimatedImageResource"
                                                                                   },
                                                                                   "class": "HotspotPanoramaOverlayImage",
                                                                                   "distance": 100,
                                                                                   "pitch": -23.33,
                                                                                   "hfov": 16.58,
                                                                                   "yaw": 0.56
                                                                                  }
                                                                                 ],
                                                                                 "rollOverDisplay": false,
                                                                                 "class": "HotspotPanoramaOverlay",
                                                                                 "useHandCursor": true
                                                                                },
                                                                                {
                                                                                 "id": "overlay_0995E734_2A59_8745_41B9_0FF31D75666C",
                                                                                 "enabledInCardboard": true,
                                                                                 "areas": [
                                                                                  {
                                                                                   "click": "this.startPanoramaWithCamera(this.panorama_20202402_29D9_793D_41B4_E5905566B405, this.camera_220DECEA_31B3_8DA0_41C8_A3537C182AE0); this.mainPlayList.set('selectedIndex', 20)",
                                                                                   "class": "HotspotPanoramaOverlayArea",
                                                                                   "mapColor": "#FF0000"
                                                                                  },
                                                                                  {
                                                                                   "class": "HotspotPanoramaOverlayArea"
                                                                                  }
                                                                                 ],
                                                                                 "data": {
                                                                                  "label": "Circle Arrow 01a"
                                                                                 },
                                                                                 "maps": [
                                                                                  {
                                                                                   "image": {
                                                                                    "levels": [
                                                                                     {
                                                                                      "height": 16,
                                                                                      "width": 26,
                                                                                      "class": "ImageResourceLevel",
                                                                                      "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_0_HS_1_0_0_map.gif"
                                                                                     }
                                                                                    ],
                                                                                    "frameCount": 24,
                                                                                    "rowCount": 6,
                                                                                    "frameDuration": 41,
                                                                                    "colCount": 4,
                                                                                    "class": "AnimatedImageResource"
                                                                                   },
                                                                                   "yaw": -179.82,
                                                                                   "class": "HotspotPanoramaOverlayMap",
                                                                                   "pitch": -23.33,
                                                                                   "hfov": 16.58
                                                                                  }
                                                                                 ],
                                                                                 "items": [
                                                                                  {
                                                                                   "image": {
                                                                                    "levels": [
                                                                                     {
                                                                                      "height": 1110,
                                                                                      "width": 1220,
                                                                                      "class": "ImageResourceLevel",
                                                                                      "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_0_HS_1_0.png"
                                                                                     }
                                                                                    ],
                                                                                    "frameCount": 24,
                                                                                    "rowCount": 6,
                                                                                    "frameDuration": 41,
                                                                                    "colCount": 4,
                                                                                    "class": "AnimatedImageResource"
                                                                                   },
                                                                                   "class": "HotspotPanoramaOverlayImage",
                                                                                   "distance": 100,
                                                                                   "pitch": -23.33,
                                                                                   "hfov": 16.58,
                                                                                   "yaw": -179.82
                                                                                  }
                                                                                 ],
                                                                                 "rollOverDisplay": false,
                                                                                 "class": "HotspotPanoramaOverlay",
                                                                                 "useHandCursor": true
                                                                                },
                                                                                {
                                                                                 "id": "overlay_3C6052B6_2EFC_28E5_4176_520C4940B4FE",
                                                                                 "areas": [
                                                                                  {
                                                                                   "click": "this.setComponentVisibility(this.HTMLText_37897A09_2E9A_8B45_41AB_7D7B8A32C91B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A, true, 0, null, null, false)",
                                                                                   "class": "HotspotPanoramaOverlayArea",
                                                                                   "mapColor": "#FF0000"
                                                                                  },
                                                                                  {
                                                                                   "class": "HotspotPanoramaOverlayArea"
                                                                                  }
                                                                                 ],
                                                                                 "data": {
                                                                                  "label": "Image"
                                                                                 },
                                                                                 "maps": [
                                                                                  {
                                                                                   "image": {
                                                                                    "class": "ImageResource",
                                                                                    "levels": [
                                                                                     {
                                                                                      "height": 16,
                                                                                      "width": 16,
                                                                                      "class": "ImageResourceLevel",
                                                                                      "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_0_HS_2_0_0_map.gif"
                                                                                     }
                                                                                    ]
                                                                                   },
                                                                                   "yaw": -179.46,
                                                                                   "class": "HotspotPanoramaOverlayMap",
                                                                                   "pitch": 0.81,
                                                                                   "hfov": 10.81
                                                                                  }
                                                                                 ],
                                                                                 "items": [
                                                                                  {
                                                                                   "image": {
                                                                                    "class": "ImageResource",
                                                                                    "levels": [
                                                                                     {
                                                                                      "height": 182,
                                                                                      "width": 182,
                                                                                      "class": "ImageResourceLevel",
                                                                                      "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_0_HS_2_0.png"
                                                                                     }
                                                                                    ]
                                                                                   },
                                                                                   "class": "HotspotPanoramaOverlayImage",
                                                                                   "distance": 50,
                                                                                   "pitch": 0.81,
                                                                                   "hfov": 10.81,
                                                                                   "yaw": -179.46
                                                                                  }
                                                                                 ],
                                                                                 "rollOverDisplay": false,
                                                                                 "class": "HotspotPanoramaOverlay",
                                                                                 "useHandCursor": true
                                                                                }
                                                                               ],
                                                                               "sphere": {
                                                                                "class": "ImageResource",
                                                                                "levels": [
                                                                                 {
                                                                                  "height": 3040,
                                                                                  "width": 6080,
                                                                                  "tags": [
                                                                                   "oculusgo",
                                                                                   "ipadpro"
                                                                                  ],
                                                                                  "class": "ImageResourceLevel",
                                                                                  "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_hq.jpeg"
                                                                                 },
                                                                                 {
                                                                                  "height": 1024,
                                                                                  "width": 2048,
                                                                                  "tags": "preload",
                                                                                  "class": "ImageResourceLevel",
                                                                                  "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_lq.jpeg"
                                                                                 },
                                                                                 {
                                                                                  "height": 2001,
                                                                                  "width": 4002,
                                                                                  "class": "ImageResourceLevel",
                                                                                  "url": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147.jpeg"
                                                                                 }
                                                                                ]
                                                                               },
                                                                               "thumbnailUrl": "media/panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_t.jpg",
                                                                               "class": "SphericPanoramaFrame"
                                                                              }
                                                                             ],
                                                                             "adjacentPanoramas": [
                                                                              {
                                                                               "panorama": "this.panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390",
                                                                               "backwardYaw": -60.05,
                                                                               "yaw": 0.56,
                                                                               "distance": 1,
                                                                               "class": "AdjacentPanorama"
                                                                              },
                                                                              {
                                                                               "panorama": {
                                                                                "id": "panorama_20202402_29D9_793D_41B4_E5905566B405",
                                                                                "label": "IMG_20211103_155946_00_173processed",
                                                                                "thumbnailUrl": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_t.jpg",
                                                                                "class": "Panorama",
                                                                                "pitch": 0,
                                                                                "hfov": 360,
                                                                                "frames": [
                                                                                 {
                                                                                  "overlays": [
                                                                                   {
                                                                                    "id": "overlay_0B89BCC1_2A5F_893F_41C3_534DD478B5EB",
                                                                                    "enabledInCardboard": true,
                                                                                    "areas": [
                                                                                     {
                                                                                      "click": "this.startPanoramaWithCamera(this.panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147, this.camera_238DAE85_31B3_8C60_41A9_5854CCE7BF96); this.mainPlayList.set('selectedIndex', 19)",
                                                                                      "class": "HotspotPanoramaOverlayArea",
                                                                                      "mapColor": "#FF0000"
                                                                                     },
                                                                                     {
                                                                                      "class": "HotspotPanoramaOverlayArea"
                                                                                     }
                                                                                    ],
                                                                                    "data": {
                                                                                     "label": "Circle Arrow 01a"
                                                                                    },
                                                                                    "maps": [
                                                                                     {
                                                                                      "image": {
                                                                                       "levels": [
                                                                                        {
                                                                                         "height": 16,
                                                                                         "width": 26,
                                                                                         "class": "ImageResourceLevel",
                                                                                         "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_0_HS_0_0_0_map.gif"
                                                                                        }
                                                                                       ],
                                                                                       "frameCount": 24,
                                                                                       "rowCount": 6,
                                                                                       "frameDuration": 41,
                                                                                       "colCount": 4,
                                                                                       "class": "AnimatedImageResource"
                                                                                      },
                                                                                      "yaw": -7.04,
                                                                                      "class": "HotspotPanoramaOverlayMap",
                                                                                      "pitch": -27.29,
                                                                                      "hfov": 16.05
                                                                                     }
                                                                                    ],
                                                                                    "items": [
                                                                                     {
                                                                                      "image": {
                                                                                       "levels": [
                                                                                        {
                                                                                         "height": 1110,
                                                                                         "width": 1220,
                                                                                         "class": "ImageResourceLevel",
                                                                                         "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_0_HS_0_0.png"
                                                                                        }
                                                                                       ],
                                                                                       "frameCount": 24,
                                                                                       "rowCount": 6,
                                                                                       "frameDuration": 41,
                                                                                       "colCount": 4,
                                                                                       "class": "AnimatedImageResource"
                                                                                      },
                                                                                      "class": "HotspotPanoramaOverlayImage",
                                                                                      "distance": 100,
                                                                                      "pitch": -27.29,
                                                                                      "hfov": 16.05,
                                                                                      "yaw": -7.04
                                                                                     }
                                                                                    ],
                                                                                    "rollOverDisplay": false,
                                                                                    "class": "HotspotPanoramaOverlay",
                                                                                    "useHandCursor": true
                                                                                   },
                                                                                   {
                                                                                    "id": "overlay_0BA78E4D_2A58_89C7_4195_3923FCF839AA",
                                                                                    "enabledInCardboard": true,
                                                                                    "areas": [
                                                                                     {
                                                                                      "click": "this.startPanoramaWithCamera(this.panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73, this.camera_23F87E8C_31B3_8C60_41C3_B2E787E1AC72); this.mainPlayList.set('selectedIndex', 21)",
                                                                                      "class": "HotspotPanoramaOverlayArea",
                                                                                      "mapColor": "#FF0000"
                                                                                     },
                                                                                     {
                                                                                      "class": "HotspotPanoramaOverlayArea"
                                                                                     }
                                                                                    ],
                                                                                    "data": {
                                                                                     "label": "Circle Arrow 01a"
                                                                                    },
                                                                                    "maps": [
                                                                                     {
                                                                                      "image": {
                                                                                       "levels": [
                                                                                        {
                                                                                         "height": 16,
                                                                                         "width": 26,
                                                                                         "class": "ImageResourceLevel",
                                                                                         "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_0_HS_1_0_0_map.gif"
                                                                                        }
                                                                                       ],
                                                                                       "frameCount": 24,
                                                                                       "rowCount": 6,
                                                                                       "frameDuration": 41,
                                                                                       "colCount": 4,
                                                                                       "class": "AnimatedImageResource"
                                                                                      },
                                                                                      "yaw": 173.68,
                                                                                      "class": "HotspotPanoramaOverlayMap",
                                                                                      "pitch": -24.76,
                                                                                      "hfov": 16.4
                                                                                     }
                                                                                    ],
                                                                                    "items": [
                                                                                     {
                                                                                      "image": {
                                                                                       "levels": [
                                                                                        {
                                                                                         "height": 1110,
                                                                                         "width": 1220,
                                                                                         "class": "ImageResourceLevel",
                                                                                         "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_0_HS_1_0.png"
                                                                                        }
                                                                                       ],
                                                                                       "frameCount": 24,
                                                                                       "rowCount": 6,
                                                                                       "frameDuration": 41,
                                                                                       "colCount": 4,
                                                                                       "class": "AnimatedImageResource"
                                                                                      },
                                                                                      "class": "HotspotPanoramaOverlayImage",
                                                                                      "distance": 100,
                                                                                      "pitch": -24.76,
                                                                                      "hfov": 16.4,
                                                                                      "yaw": 173.68
                                                                                     }
                                                                                    ],
                                                                                    "rollOverDisplay": false,
                                                                                    "class": "HotspotPanoramaOverlay",
                                                                                    "useHandCursor": true
                                                                                   },
                                                                                   {
                                                                                    "id": "overlay_3C21B4B3_2EFC_E8E3_4181_F7D143DFFE7D",
                                                                                    "areas": [
                                                                                     {
                                                                                      "click": "this.setComponentVisibility(this.HTMLText_37897A09_2E9A_8B45_41AB_7D7B8A32C91B, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A, true, 0, null, null, false)",
                                                                                      "class": "HotspotPanoramaOverlayArea",
                                                                                      "mapColor": "#FF0000"
                                                                                     }
                                                                                    ],
                                                                                    "data": {
                                                                                     "label": "Image"
                                                                                    },
                                                                                    "maps": [
                                                                                     {
                                                                                      "image": {
                                                                                       "class": "ImageResource",
                                                                                       "levels": [
                                                                                        {
                                                                                         "height": 16,
                                                                                         "width": 16,
                                                                                         "class": "ImageResourceLevel",
                                                                                         "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_0_HS_2_0_0_map.gif"
                                                                                        }
                                                                                       ]
                                                                                      },
                                                                                      "yaw": -5.77,
                                                                                      "class": "HotspotPanoramaOverlayMap",
                                                                                      "pitch": -10.36,
                                                                                      "hfov": 10.63
                                                                                     }
                                                                                    ],
                                                                                    "items": [
                                                                                     {
                                                                                      "image": {
                                                                                       "class": "ImageResource",
                                                                                       "levels": [
                                                                                        {
                                                                                         "height": 182,
                                                                                         "width": 182,
                                                                                         "class": "ImageResourceLevel",
                                                                                         "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_0_HS_2_0.png"
                                                                                        }
                                                                                       ]
                                                                                      },
                                                                                      "class": "HotspotPanoramaOverlayImage",
                                                                                      "distance": 50,
                                                                                      "pitch": -10.36,
                                                                                      "hfov": 10.63,
                                                                                      "yaw": -5.77
                                                                                     }
                                                                                    ],
                                                                                    "rollOverDisplay": false,
                                                                                    "class": "HotspotPanoramaOverlay",
                                                                                    "useHandCursor": true
                                                                                   }
                                                                                  ],
                                                                                  "sphere": {
                                                                                   "class": "ImageResource",
                                                                                   "levels": [
                                                                                    {
                                                                                     "height": 3040,
                                                                                     "width": 6080,
                                                                                     "tags": [
                                                                                      "oculusgo",
                                                                                      "ipadpro"
                                                                                     ],
                                                                                     "class": "ImageResourceLevel",
                                                                                     "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_hq.jpeg"
                                                                                    },
                                                                                    {
                                                                                     "height": 1024,
                                                                                     "width": 2048,
                                                                                     "tags": "preload",
                                                                                     "class": "ImageResourceLevel",
                                                                                     "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_lq.jpeg"
                                                                                    },
                                                                                    {
                                                                                     "height": 2001,
                                                                                     "width": 4002,
                                                                                     "class": "ImageResourceLevel",
                                                                                     "url": "media/panorama_20202402_29D9_793D_41B4_E5905566B405.jpeg"
                                                                                    }
                                                                                   ]
                                                                                  },
                                                                                  "thumbnailUrl": "media/panorama_20202402_29D9_793D_41B4_E5905566B405_t.jpg",
                                                                                  "class": "SphericPanoramaFrame"
                                                                                 }
                                                                                ],
                                                                                "adjacentPanoramas": [
                                                                                 {
                                                                                  "panorama": "this.panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147",
                                                                                  "backwardYaw": -179.82,
                                                                                  "yaw": -7.04,
                                                                                  "distance": 1,
                                                                                  "class": "AdjacentPanorama"
                                                                                 },
                                                                                 {
                                                                                  "panorama": {
                                                                                   "id": "panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73",
                                                                                   "label": "IMG_20211103_160102_00_174processed",
                                                                                   "thumbnailUrl": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_t.jpg",
                                                                                   "class": "Panorama",
                                                                                   "pitch": 0,
                                                                                   "hfov": 360,
                                                                                   "frames": [
                                                                                    {
                                                                                     "overlays": [
                                                                                      {
                                                                                       "id": "overlay_08077D7F_2A59_8BC3_41C1_64EBE6F7E2B2",
                                                                                       "enabledInCardboard": true,
                                                                                       "areas": [
                                                                                        {
                                                                                         "click": "this.startPanoramaWithCamera(this.panorama_20202402_29D9_793D_41B4_E5905566B405, this.camera_2359AC5E_31B3_8CE0_41B2_0A650C6A5F84); this.mainPlayList.set('selectedIndex', 20)",
                                                                                         "class": "HotspotPanoramaOverlayArea",
                                                                                         "mapColor": "#FF0000"
                                                                                        },
                                                                                        {
                                                                                         "class": "HotspotPanoramaOverlayArea"
                                                                                        }
                                                                                       ],
                                                                                       "data": {
                                                                                        "label": "Circle Arrow 01a"
                                                                                       },
                                                                                       "maps": [
                                                                                        {
                                                                                         "image": {
                                                                                          "levels": [
                                                                                           {
                                                                                            "height": 16,
                                                                                            "width": 26,
                                                                                            "class": "ImageResourceLevel",
                                                                                            "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_0_HS_0_0_0_map.gif"
                                                                                           }
                                                                                          ],
                                                                                          "frameCount": 24,
                                                                                          "rowCount": 6,
                                                                                          "frameDuration": 41,
                                                                                          "colCount": 4,
                                                                                          "class": "AnimatedImageResource"
                                                                                         },
                                                                                         "yaw": 169.19,
                                                                                         "class": "HotspotPanoramaOverlayMap",
                                                                                         "pitch": -22.97,
                                                                                         "hfov": 16.63
                                                                                        }
                                                                                       ],
                                                                                       "items": [
                                                                                        {
                                                                                         "image": {
                                                                                          "levels": [
                                                                                           {
                                                                                            "height": 1110,
                                                                                            "width": 1220,
                                                                                            "class": "ImageResourceLevel",
                                                                                            "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_0_HS_0_0.png"
                                                                                           }
                                                                                          ],
                                                                                          "frameCount": 24,
                                                                                          "rowCount": 6,
                                                                                          "frameDuration": 41,
                                                                                          "colCount": 4,
                                                                                          "class": "AnimatedImageResource"
                                                                                         },
                                                                                         "class": "HotspotPanoramaOverlayImage",
                                                                                         "distance": 100,
                                                                                         "pitch": -22.97,
                                                                                         "hfov": 16.63,
                                                                                         "yaw": 169.19
                                                                                        }
                                                                                       ],
                                                                                       "rollOverDisplay": false,
                                                                                       "class": "HotspotPanoramaOverlay",
                                                                                       "useHandCursor": true
                                                                                      },
                                                                                      {
                                                                                       "id": "overlay_09B6B575_2A59_9BC7_41B8_DDDED157B048",
                                                                                       "enabledInCardboard": true,
                                                                                       "areas": [
                                                                                        {
                                                                                         "click": "this.startPanoramaWithCamera(this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871, this.camera_23685C4F_31B3_8CE0_41C6_2DA1C1C4CB0D); this.mainPlayList.set('selectedIndex', 22)",
                                                                                         "class": "HotspotPanoramaOverlayArea",
                                                                                         "mapColor": "#FF0000"
                                                                                        },
                                                                                        {
                                                                                         "class": "HotspotPanoramaOverlayArea"
                                                                                        }
                                                                                       ],
                                                                                       "data": {
                                                                                        "label": "Circle Arrow 01a"
                                                                                       },
                                                                                       "maps": [
                                                                                        {
                                                                                         "image": {
                                                                                          "levels": [
                                                                                           {
                                                                                            "height": 16,
                                                                                            "width": 26,
                                                                                            "class": "ImageResourceLevel",
                                                                                            "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_0_HS_1_0_0_map.gif"
                                                                                           }
                                                                                          ],
                                                                                          "frameCount": 24,
                                                                                          "rowCount": 6,
                                                                                          "frameDuration": 41,
                                                                                          "colCount": 4,
                                                                                          "class": "AnimatedImageResource"
                                                                                         },
                                                                                         "yaw": -11.17,
                                                                                         "class": "HotspotPanoramaOverlayMap",
                                                                                         "pitch": -24.05,
                                                                                         "hfov": 16.49
                                                                                        }
                                                                                       ],
                                                                                       "items": [
                                                                                        {
                                                                                         "image": {
                                                                                          "levels": [
                                                                                           {
                                                                                            "height": 1110,
                                                                                            "width": 1220,
                                                                                            "class": "ImageResourceLevel",
                                                                                            "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_0_HS_1_0.png"
                                                                                           }
                                                                                          ],
                                                                                          "frameCount": 24,
                                                                                          "rowCount": 6,
                                                                                          "frameDuration": 41,
                                                                                          "colCount": 4,
                                                                                          "class": "AnimatedImageResource"
                                                                                         },
                                                                                         "class": "HotspotPanoramaOverlayImage",
                                                                                         "distance": 100,
                                                                                         "pitch": -24.05,
                                                                                         "hfov": 16.49,
                                                                                         "yaw": -11.17
                                                                                        }
                                                                                       ],
                                                                                       "rollOverDisplay": false,
                                                                                       "class": "HotspotPanoramaOverlay",
                                                                                       "useHandCursor": true
                                                                                      }
                                                                                     ],
                                                                                     "sphere": {
                                                                                      "class": "ImageResource",
                                                                                      "levels": [
                                                                                       {
                                                                                        "height": 3040,
                                                                                        "width": 6080,
                                                                                        "tags": [
                                                                                         "oculusgo",
                                                                                         "ipadpro"
                                                                                        ],
                                                                                        "class": "ImageResourceLevel",
                                                                                        "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_hq.jpeg"
                                                                                       },
                                                                                       {
                                                                                        "height": 1024,
                                                                                        "width": 2048,
                                                                                        "tags": "preload",
                                                                                        "class": "ImageResourceLevel",
                                                                                        "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_lq.jpeg"
                                                                                       },
                                                                                       {
                                                                                        "height": 2001,
                                                                                        "width": 4002,
                                                                                        "class": "ImageResourceLevel",
                                                                                        "url": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73.jpeg"
                                                                                       }
                                                                                      ]
                                                                                     },
                                                                                     "thumbnailUrl": "media/panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_t.jpg",
                                                                                     "class": "SphericPanoramaFrame"
                                                                                    }
                                                                                   ],
                                                                                   "adjacentPanoramas": [
                                                                                    {
                                                                                     "panorama": "this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871",
                                                                                     "backwardYaw": -178.55,
                                                                                     "yaw": -11.17,
                                                                                     "distance": 1,
                                                                                     "class": "AdjacentPanorama"
                                                                                    },
                                                                                    {
                                                                                     "panorama": "this.panorama_20202402_29D9_793D_41B4_E5905566B405",
                                                                                     "backwardYaw": 173.68,
                                                                                     "yaw": 169.19,
                                                                                     "distance": 1,
                                                                                     "class": "AdjacentPanorama"
                                                                                    }
                                                                                   ],
                                                                                   "partial": false,
                                                                                   "hfovMin": 60,
                                                                                   "hfovMax": 130,
                                                                                   "vfov": 180
                                                                                  },
                                                                                  "backwardYaw": 169.19,
                                                                                  "yaw": 173.68,
                                                                                  "distance": 1,
                                                                                  "class": "AdjacentPanorama"
                                                                                 }
                                                                                ],
                                                                                "partial": false,
                                                                                "hfovMin": 60,
                                                                                "hfovMax": 130,
                                                                                "vfov": 180
                                                                               },
                                                                               "backwardYaw": -7.04,
                                                                               "yaw": -179.82,
                                                                               "distance": 1,
                                                                               "class": "AdjacentPanorama"
                                                                              }
                                                                             ],
                                                                             "partial": false,
                                                                             "hfovMin": 60,
                                                                             "hfovMax": 130,
                                                                             "vfov": 180
                                                                            },
                                                                            "backwardYaw": 0.56,
                                                                            "yaw": -60.05,
                                                                            "distance": 1,
                                                                            "class": "AdjacentPanorama"
                                                                           },
                                                                           {
                                                                            "panorama": "this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9",
                                                                            "backwardYaw": -97.74,
                                                                            "yaw": -89.09,
                                                                            "distance": 1,
                                                                            "class": "AdjacentPanorama"
                                                                           },
                                                                           {
                                                                            "panorama": "this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F",
                                                                            "class": "AdjacentPanorama"
                                                                           }
                                                                          ],
                                                                          "partial": false,
                                                                          "hfovMin": 60,
                                                                          "hfovMax": 130,
                                                                          "vfov": 180
                                                                         },
                                                                         "backwardYaw": -89.09,
                                                                         "yaw": -97.74,
                                                                         "distance": 1,
                                                                         "class": "AdjacentPanorama"
                                                                        },
                                                                        {
                                                                         "panorama": "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
                                                                         "backwardYaw": -53.93,
                                                                         "yaw": -174.7,
                                                                         "distance": 1,
                                                                         "class": "AdjacentPanorama"
                                                                        }
                                                                       ],
                                                                       "partial": false,
                                                                       "hfovMin": 60,
                                                                       "hfovMax": 130,
                                                                       "vfov": 180
                                                                      },
                                                                      "backwardYaw": -36.96,
                                                                      "yaw": -94.5,
                                                                      "distance": 1,
                                                                      "class": "AdjacentPanorama"
                                                                     },
                                                                     {
                                                                      "panorama": "this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F",
                                                                      "backwardYaw": 49.61,
                                                                      "yaw": 89.47,
                                                                      "distance": 1,
                                                                      "class": "AdjacentPanorama"
                                                                     }
                                                                    ],
                                                                    "partial": false,
                                                                    "hfovMin": 60,
                                                                    "hfovMax": 130,
                                                                    "vfov": 180
                                                                   },
                                                                   "backwardYaw": 89.47,
                                                                   "yaw": 49.61,
                                                                   "distance": 1,
                                                                   "class": "AdjacentPanorama"
                                                                  },
                                                                  {
                                                                   "panorama": "this.panorama_20227F14_29D8_8745_41C2_B785C0176E46",
                                                                   "backwardYaw": 90.24,
                                                                   "yaw": -67.2,
                                                                   "distance": 1,
                                                                   "class": "AdjacentPanorama"
                                                                  },
                                                                  {
                                                                   "panorama": "this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935",
                                                                   "backwardYaw": -144.91,
                                                                   "yaw": -64.82,
                                                                   "distance": 1,
                                                                   "class": "AdjacentPanorama"
                                                                  }
                                                                 ],
                                                                 "partial": false,
                                                                 "hfovMin": 60,
                                                                 "hfovMax": 130,
                                                                 "vfov": 180
                                                                },
                                                                "backwardYaw": -67.2,
                                                                "yaw": 90.24,
                                                                "distance": 1,
                                                                "class": "AdjacentPanorama"
                                                               },
                                                               {
                                                                "panorama": {
                                                                 "id": "panorama_202D4031_29D8_995F_4180_F7D352C8832C",
                                                                 "label": "IMG_20211103_161202_00_179processed",
                                                                 "thumbnailUrl": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_t.jpg",
                                                                 "class": "Panorama",
                                                                 "pitch": 0,
                                                                 "hfov": 360,
                                                                 "frames": [
                                                                  {
                                                                   "overlays": [
                                                                    {
                                                                     "id": "overlay_06C40BE2_2A78_8EFD_41B4_7E36FAF3C2A7",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7, this.camera_22C16CC5_31B3_8DE0_41BD_5C6A785EE6FC); this.mainPlayList.set('selectedIndex', 29)",
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "Circle Arrow 01a Right-Up"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "levels": [
                                                                         {
                                                                          "height": 16,
                                                                          "width": 26,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_0_HS_0_0_0_map.gif"
                                                                         }
                                                                        ],
                                                                        "frameCount": 24,
                                                                        "rowCount": 6,
                                                                        "frameDuration": 41,
                                                                        "colCount": 4,
                                                                        "class": "AnimatedImageResource"
                                                                       },
                                                                       "yaw": 54.84,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -20.45,
                                                                       "hfov": 16.92
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "image": {
                                                                        "levels": [
                                                                         {
                                                                          "height": 1110,
                                                                          "width": 1220,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_0_HS_0_0.png"
                                                                         }
                                                                        ],
                                                                        "frameCount": 24,
                                                                        "rowCount": 6,
                                                                        "frameDuration": 41,
                                                                        "colCount": 4,
                                                                        "class": "AnimatedImageResource"
                                                                       },
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "distance": 50,
                                                                       "pitch": -20.45,
                                                                       "hfov": 16.92,
                                                                       "yaw": 54.84
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    },
                                                                    {
                                                                     "id": "overlay_06C88717_2A78_8743_41B2_6080E4AF39FC",
                                                                     "enabledInCardboard": true,
                                                                     "areas": [
                                                                      {
                                                                       "click": "this.startPanoramaWithCamera(this.panorama_20227F14_29D8_8745_41C2_B785C0176E46, this.camera_22D14CBC_31B3_8DA0_41AF_DC9AADE7F16A); this.mainPlayList.set('selectedIndex', 27)",
                                                                       "class": "HotspotPanoramaOverlayArea",
                                                                       "mapColor": "#FF0000"
                                                                      }
                                                                     ],
                                                                     "data": {
                                                                      "label": "Circle Arrow 01a Left-UP"
                                                                     },
                                                                     "maps": [
                                                                      {
                                                                       "image": {
                                                                        "levels": [
                                                                         {
                                                                          "height": 16,
                                                                          "width": 26,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_0_HS_1_0_0_map.gif"
                                                                         }
                                                                        ],
                                                                        "frameCount": 24,
                                                                        "rowCount": 6,
                                                                        "frameDuration": 41,
                                                                        "colCount": 4,
                                                                        "class": "AnimatedImageResource"
                                                                       },
                                                                       "yaw": -69.61,
                                                                       "class": "HotspotPanoramaOverlayMap",
                                                                       "pitch": -19,
                                                                       "hfov": 17.07
                                                                      }
                                                                     ],
                                                                     "items": [
                                                                      {
                                                                       "image": {
                                                                        "levels": [
                                                                         {
                                                                          "height": 1110,
                                                                          "width": 1220,
                                                                          "class": "ImageResourceLevel",
                                                                          "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_0_HS_1_0.png"
                                                                         }
                                                                        ],
                                                                        "frameCount": 24,
                                                                        "rowCount": 6,
                                                                        "frameDuration": 41,
                                                                        "colCount": 4,
                                                                        "class": "AnimatedImageResource"
                                                                       },
                                                                       "class": "HotspotPanoramaOverlayImage",
                                                                       "distance": 50,
                                                                       "pitch": -19,
                                                                       "hfov": 17.07,
                                                                       "yaw": -69.61
                                                                      }
                                                                     ],
                                                                     "rollOverDisplay": false,
                                                                     "class": "HotspotPanoramaOverlay",
                                                                     "useHandCursor": true
                                                                    }
                                                                   ],
                                                                   "sphere": {
                                                                    "class": "ImageResource",
                                                                    "levels": [
                                                                     {
                                                                      "height": 3040,
                                                                      "width": 6080,
                                                                      "tags": [
                                                                       "oculusgo",
                                                                       "ipadpro"
                                                                      ],
                                                                      "class": "ImageResourceLevel",
                                                                      "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_hq.jpeg"
                                                                     },
                                                                     {
                                                                      "height": 1024,
                                                                      "width": 2048,
                                                                      "tags": "preload",
                                                                      "class": "ImageResourceLevel",
                                                                      "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_lq.jpeg"
                                                                     },
                                                                     {
                                                                      "height": 2001,
                                                                      "width": 4002,
                                                                      "class": "ImageResourceLevel",
                                                                      "url": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C.jpeg"
                                                                     }
                                                                    ]
                                                                   },
                                                                   "thumbnailUrl": "media/panorama_202D4031_29D8_995F_4180_F7D352C8832C_t.jpg",
                                                                   "class": "SphericPanoramaFrame"
                                                                  }
                                                                 ],
                                                                 "adjacentPanoramas": [
                                                                  {
                                                                   "panorama": "this.panorama_20227F14_29D8_8745_41C2_B785C0176E46",
                                                                   "backwardYaw": 104.62,
                                                                   "yaw": -69.61,
                                                                   "distance": 1,
                                                                   "class": "AdjacentPanorama"
                                                                  },
                                                                  {
                                                                   "panorama": {
                                                                    "id": "panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7",
                                                                    "label": "IMG_20211103_161612_00_183processed",
                                                                    "thumbnailUrl": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_t.jpg",
                                                                    "class": "Panorama",
                                                                    "pitch": 0,
                                                                    "hfov": 360,
                                                                    "frames": [
                                                                     {
                                                                      "overlays": [
                                                                       {
                                                                        "id": "overlay_1A75ADDC_2A68_8AC5_41C0_C4FCCDAFBFDC",
                                                                        "enabledInCardboard": true,
                                                                        "areas": [
                                                                         {
                                                                          "click": "this.startPanoramaWithCamera(this.panorama_202D4031_29D8_995F_4180_F7D352C8832C, this.camera_23A7EB5A_31B3_B4E0_41AD_F8C66BD3DAE9); this.mainPlayList.set('selectedIndex', 26)",
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000"
                                                                         },
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayArea"
                                                                         }
                                                                        ],
                                                                        "data": {
                                                                         "label": "Circle Arrow 01a"
                                                                        },
                                                                        "maps": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 16,
                                                                             "width": 26,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_0_HS_0_0_0_map.gif"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "yaw": 87.32,
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "pitch": -24.41,
                                                                          "hfov": 16.44
                                                                         }
                                                                        ],
                                                                        "items": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 1110,
                                                                             "width": 1220,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_0_HS_0_0.png"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "distance": 100,
                                                                          "pitch": -24.41,
                                                                          "hfov": 16.44,
                                                                          "yaw": 87.32
                                                                         }
                                                                        ],
                                                                        "rollOverDisplay": false,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "useHandCursor": true
                                                                       },
                                                                       {
                                                                        "id": "overlay_1B8960AF_2A68_9943_41B6_FFAD1F822A70",
                                                                        "enabledInCardboard": true,
                                                                        "areas": [
                                                                         {
                                                                          "click": "this.startPanoramaWithCamera(this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314, this.camera_239A1B63_31B3_B4A0_41C5_EF4DC58E1021); this.mainPlayList.set('selectedIndex', 28)",
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000"
                                                                         },
                                                                         {
                                                                          "class": "HotspotPanoramaOverlayArea"
                                                                         }
                                                                        ],
                                                                        "data": {
                                                                         "label": "Circle Arrow 01a"
                                                                        },
                                                                        "maps": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 16,
                                                                             "width": 26,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_0_HS_1_0_0_map.gif"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "yaw": -91.23,
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "pitch": -22.25,
                                                                          "hfov": 16.71
                                                                         }
                                                                        ],
                                                                        "items": [
                                                                         {
                                                                          "image": {
                                                                           "levels": [
                                                                            {
                                                                             "height": 1110,
                                                                             "width": 1220,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_0_HS_1_0.png"
                                                                            }
                                                                           ],
                                                                           "frameCount": 24,
                                                                           "rowCount": 6,
                                                                           "frameDuration": 41,
                                                                           "colCount": 4,
                                                                           "class": "AnimatedImageResource"
                                                                          },
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "distance": 100,
                                                                          "pitch": -22.25,
                                                                          "hfov": 16.71,
                                                                          "yaw": -91.23
                                                                         }
                                                                        ],
                                                                        "rollOverDisplay": false,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "useHandCursor": true
                                                                       },
                                                                       {
                                                                        "id": "overlay_3C9FBCD1_2EE4_78BF_41BF_D29D7212F148",
                                                                        "areas": [
                                                                         {
                                                                          "click": "this.setComponentVisibility(this.HTMLText_37E5A838_2E8E_9743_41A4_19FEEB377C9E, true, 0, null, null, false); this.setComponentVisibility(this.Image_385D3952_2E8E_89C7_41C2_00C0BB21C465, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3948B48C_2E8A_BF43_41A4_AB2E386C8674, true, 0, null, null, false)",
                                                                          "class": "HotspotPanoramaOverlayArea",
                                                                          "mapColor": "#FF0000"
                                                                         }
                                                                        ],
                                                                        "data": {
                                                                         "label": "Image"
                                                                        },
                                                                        "maps": [
                                                                         {
                                                                          "image": {
                                                                           "class": "ImageResource",
                                                                           "levels": [
                                                                            {
                                                                             "height": 16,
                                                                             "width": 16,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_0_HS_2_0_0_map.gif"
                                                                            }
                                                                           ]
                                                                          },
                                                                          "yaw": -158.55,
                                                                          "class": "HotspotPanoramaOverlayMap",
                                                                          "pitch": -10.37,
                                                                          "hfov": 10.63
                                                                         }
                                                                        ],
                                                                        "items": [
                                                                         {
                                                                          "image": {
                                                                           "class": "ImageResource",
                                                                           "levels": [
                                                                            {
                                                                             "height": 182,
                                                                             "width": 182,
                                                                             "class": "ImageResourceLevel",
                                                                             "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_0_HS_2_0.png"
                                                                            }
                                                                           ]
                                                                          },
                                                                          "class": "HotspotPanoramaOverlayImage",
                                                                          "distance": 50,
                                                                          "pitch": -10.37,
                                                                          "hfov": 10.63,
                                                                          "yaw": -158.55
                                                                         }
                                                                        ],
                                                                        "rollOverDisplay": false,
                                                                        "class": "HotspotPanoramaOverlay",
                                                                        "useHandCursor": true
                                                                       }
                                                                      ],
                                                                      "sphere": {
                                                                       "class": "ImageResource",
                                                                       "levels": [
                                                                        {
                                                                         "height": 3040,
                                                                         "width": 6080,
                                                                         "tags": [
                                                                          "oculusgo",
                                                                          "ipadpro"
                                                                         ],
                                                                         "class": "ImageResourceLevel",
                                                                         "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_hq.jpeg"
                                                                        },
                                                                        {
                                                                         "height": 1024,
                                                                         "width": 2048,
                                                                         "tags": "preload",
                                                                         "class": "ImageResourceLevel",
                                                                         "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_lq.jpeg"
                                                                        },
                                                                        {
                                                                         "height": 2001,
                                                                         "width": 4002,
                                                                         "class": "ImageResourceLevel",
                                                                         "url": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7.jpeg"
                                                                        }
                                                                       ]
                                                                      },
                                                                      "thumbnailUrl": "media/panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_t.jpg",
                                                                      "class": "SphericPanoramaFrame"
                                                                     }
                                                                    ],
                                                                    "adjacentPanoramas": [
                                                                     {
                                                                      "panorama": "this.panorama_202D4031_29D8_995F_4180_F7D352C8832C",
                                                                      "backwardYaw": 54.84,
                                                                      "yaw": 87.32,
                                                                      "distance": 1,
                                                                      "class": "AdjacentPanorama"
                                                                     },
                                                                     {
                                                                      "panorama": "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
                                                                      "backwardYaw": -101.89,
                                                                      "yaw": -91.23,
                                                                      "distance": 1,
                                                                      "class": "AdjacentPanorama"
                                                                     }
                                                                    ],
                                                                    "partial": false,
                                                                    "hfovMin": 60,
                                                                    "hfovMax": 130,
                                                                    "vfov": 180
                                                                   },
                                                                   "backwardYaw": 87.32,
                                                                   "yaw": 54.84,
                                                                   "distance": 1,
                                                                   "class": "AdjacentPanorama"
                                                                  }
                                                                 ],
                                                                 "partial": false,
                                                                 "hfovMin": 60,
                                                                 "hfovMax": 130,
                                                                 "vfov": 180
                                                                },
                                                                "backwardYaw": -69.61,
                                                                "yaw": 104.62,
                                                                "distance": 1,
                                                                "class": "AdjacentPanorama"
                                                               },
                                                               {
                                                                "panorama": "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
                                                                "backwardYaw": 111.29,
                                                                "yaw": -82.94,
                                                                "distance": 1,
                                                                "class": "AdjacentPanorama"
                                                               }
                                                              ],
                                                              "partial": false,
                                                              "hfovMin": 60,
                                                              "hfovMax": 130,
                                                              "vfov": 180
                                                             },
                                                             "backwardYaw": -82.94,
                                                             "yaw": 111.29,
                                                             "distance": 1,
                                                             "class": "AdjacentPanorama"
                                                            },
                                                            {
                                                             "panorama": "this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9",
                                                             "backwardYaw": -174.7,
                                                             "yaw": -53.93,
                                                             "distance": 1,
                                                             "class": "AdjacentPanorama"
                                                            },
                                                            {
                                                             "panorama": "this.panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7",
                                                             "backwardYaw": -91.23,
                                                             "yaw": -101.89,
                                                             "distance": 1,
                                                             "class": "AdjacentPanorama"
                                                            }
                                                           ],
                                                           "partial": false,
                                                           "hfovMin": 60,
                                                           "hfovMax": 130,
                                                           "vfov": 180
                                                          },
                                                          "class": "AdjacentPanorama"
                                                         }
                                                        ],
                                                        "partial": false,
                                                        "hfovMin": 60,
                                                        "hfovMax": 130,
                                                        "vfov": 180
                                                       },
                                                       "backwardYaw": 91.09,
                                                       "yaw": -84.58,
                                                       "distance": 1,
                                                       "class": "AdjacentPanorama"
                                                      },
                                                      {
                                                       "panorama": "this.panorama_20210439_29D8_B94F_41AF_70333BFB7555",
                                                       "backwardYaw": -89.99,
                                                       "yaw": 96.32,
                                                       "distance": 1,
                                                       "class": "AdjacentPanorama"
                                                      }
                                                     ],
                                                     "partial": false,
                                                     "hfovMin": 60,
                                                     "hfovMax": 130,
                                                     "vfov": 180
                                                    },
                                                    "backwardYaw": 96.32,
                                                    "yaw": -89.99,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   }
                                                  ],
                                                  "partial": false,
                                                  "hfovMin": 60,
                                                  "hfovMax": 130,
                                                  "vfov": 180
                                                 },
                                                 "backwardYaw": 91.27,
                                                 "yaw": -92.87,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": "this.panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432",
                                                 "backwardYaw": -94.14,
                                                 "yaw": 90.07,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": {
                                                  "id": "panorama_202A8A29_29D8_894F_41C0_6C9391436A5C",
                                                  "label": "IMG_20211103_162432_00_190processed",
                                                  "thumbnailUrl": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_t.jpg",
                                                  "class": "Panorama",
                                                  "pitch": 0,
                                                  "hfov": 360,
                                                  "frames": [
                                                   {
                                                    "overlays": [
                                                     {
                                                      "id": "overlay_1F28953B_2A28_9B43_41C4_49EE22C98C33",
                                                      "enabledInCardboard": true,
                                                      "areas": [
                                                       {
                                                        "click": "this.startPanoramaWithCamera(this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D, this.camera_22955C98_31B3_8C60_41A2_2795EE335FA1); this.mainPlayList.set('selectedIndex', 32)",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000"
                                                       },
                                                       {
                                                        "class": "HotspotPanoramaOverlayArea"
                                                       }
                                                      ],
                                                      "data": {
                                                       "label": "Circle Arrow 01a"
                                                      },
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 16,
                                                           "width": 26,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_0_HS_0_0_0_map.gif"
                                                          }
                                                         ],
                                                         "frameCount": 24,
                                                         "rowCount": 6,
                                                         "frameDuration": 41,
                                                         "colCount": 4,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "yaw": 178.23,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -24.05,
                                                        "hfov": 16.49
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "levels": [
                                                          {
                                                           "height": 1110,
                                                           "width": 1220,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_0_HS_0_0.png"
                                                          }
                                                         ],
                                                         "frameCount": 24,
                                                         "rowCount": 6,
                                                         "frameDuration": 41,
                                                         "colCount": 4,
                                                         "class": "AnimatedImageResource"
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "distance": 100,
                                                        "pitch": -24.05,
                                                        "hfov": 16.49,
                                                        "yaw": 178.23
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true
                                                     },
                                                     {
                                                      "id": "overlay_3BAFAE8F_2E8B_8B5D_41C0_37AD871F3A21",
                                                      "areas": [
                                                       {
                                                        "click": "this.setComponentVisibility(this.HTMLText_21B208D0_2E8F_88C3_41B4_5465531C8DAA, true, 0, null, null, false); this.setComponentVisibility(this.Image_21EEADC6_2E8B_88CF_41C7_2CA640E44233, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_3A554560_2E8D_B9C3_4196_920A40348157, true, 0, null, null, false)",
                                                        "class": "HotspotPanoramaOverlayArea",
                                                        "mapColor": "#FF0000"
                                                       }
                                                      ],
                                                      "data": {
                                                       "label": "Image"
                                                      },
                                                      "maps": [
                                                       {
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 16,
                                                           "width": 16,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_0_HS_3_0_0_map.gif"
                                                          }
                                                         ]
                                                        },
                                                        "yaw": -0.6,
                                                        "class": "HotspotPanoramaOverlayMap",
                                                        "pitch": -0.19,
                                                        "hfov": 7.05
                                                       }
                                                      ],
                                                      "items": [
                                                       {
                                                        "image": {
                                                         "class": "ImageResource",
                                                         "levels": [
                                                          {
                                                           "height": 119,
                                                           "width": 119,
                                                           "class": "ImageResourceLevel",
                                                           "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_0_HS_3_0.png"
                                                          }
                                                         ]
                                                        },
                                                        "class": "HotspotPanoramaOverlayImage",
                                                        "distance": 50,
                                                        "pitch": -0.19,
                                                        "hfov": 7.05,
                                                        "yaw": -0.6
                                                       }
                                                      ],
                                                      "rollOverDisplay": false,
                                                      "class": "HotspotPanoramaOverlay",
                                                      "useHandCursor": true
                                                     }
                                                    ],
                                                    "sphere": {
                                                     "class": "ImageResource",
                                                     "levels": [
                                                      {
                                                       "height": 3040,
                                                       "width": 6080,
                                                       "tags": [
                                                        "oculusgo",
                                                        "ipadpro"
                                                       ],
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_hq.jpeg"
                                                      },
                                                      {
                                                       "height": 1024,
                                                       "width": 2048,
                                                       "tags": "preload",
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_lq.jpeg"
                                                      },
                                                      {
                                                       "height": 2001,
                                                       "width": 4002,
                                                       "class": "ImageResourceLevel",
                                                       "url": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C.jpeg"
                                                      }
                                                     ]
                                                    },
                                                    "thumbnailUrl": "media/panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_t.jpg",
                                                    "class": "SphericPanoramaFrame"
                                                   }
                                                  ],
                                                  "adjacentPanoramas": [
                                                   {
                                                    "panorama": "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D",
                                                    "backwardYaw": 177.87,
                                                    "yaw": 178.23,
                                                    "distance": 1,
                                                    "class": "AdjacentPanorama"
                                                   }
                                                  ],
                                                  "partial": false,
                                                  "hfovMin": 60,
                                                  "hfovMax": 130,
                                                  "vfov": 180
                                                 },
                                                 "backwardYaw": 178.23,
                                                 "yaw": 177.87,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                },
                                                {
                                                 "panorama": "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
                                                 "backwardYaw": -61.53,
                                                 "yaw": 113.12,
                                                 "distance": 1,
                                                 "class": "AdjacentPanorama"
                                                }
                                               ],
                                               "partial": false,
                                               "hfovMin": 60,
                                               "hfovMax": 130,
                                               "vfov": 180
                                              },
                                              "backwardYaw": 109.66,
                                              "yaw": 58.18,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             },
                                             {
                                              "panorama": "this.panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8",
                                              "backwardYaw": -3.22,
                                              "yaw": 176.42,
                                              "distance": 1,
                                              "class": "AdjacentPanorama"
                                             }
                                            ],
                                            "partial": false,
                                            "hfovMin": 60,
                                            "hfovMax": 130,
                                            "vfov": 180
                                           },
                                           "backwardYaw": 176.42,
                                           "yaw": -3.22,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          },
                                          {
                                           "panorama": "this.panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7",
                                           "backwardYaw": -3.94,
                                           "yaw": 176.78,
                                           "distance": 1,
                                           "class": "AdjacentPanorama"
                                          }
                                         ],
                                         "partial": false,
                                         "hfovMin": 60,
                                         "hfovMax": 130,
                                         "vfov": 180
                                        },
                                        "backwardYaw": 176.78,
                                        "yaw": -3.94,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "hfovMax": 130,
                                      "vfov": 180
                                     },
                                     "backwardYaw": 175.34,
                                     "yaw": -2.5,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": "this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466",
                                     "backwardYaw": 15.47,
                                     "yaw": 88.02,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "partial": false,
                                   "hfovMin": 60,
                                   "hfovMax": 130,
                                   "vfov": 180
                                  },
                                  "backwardYaw": 88.02,
                                  "yaw": 15.47,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1",
                                  "backwardYaw": 0.73,
                                  "yaw": 97.05,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "partial": false,
                                "hfovMin": 60,
                                "hfovMax": 130,
                                "vfov": 180
                               },
                               "backwardYaw": -7.72,
                               "yaw": 98.22,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "hfovMax": 130,
                             "vfov": 180
                            },
                            "backwardYaw": 77.28,
                            "yaw": -36.91,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5",
                            "backwardYaw": 107.8,
                            "yaw": -48.39,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73",
                            "backwardYaw": -11.17,
                            "yaw": -178.55,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "partial": false,
                          "hfovMin": 60,
                          "hfovMax": 130,
                          "vfov": 180
                         },
                         "backwardYaw": -48.39,
                         "yaw": 107.8,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": "this.panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21",
                         "backwardYaw": 121.76,
                         "yaw": 1.09,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        },
                        {
                         "panorama": {
                          "id": "panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C",
                          "label": "IMG_20211103_154409_00_160processed",
                          "thumbnailUrl": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_t.jpg",
                          "class": "Panorama",
                          "pitch": 0,
                          "hfov": 360,
                          "frames": [
                           {
                            "overlays": [
                             {
                              "id": "overlay_3FFB2776_2A28_87C5_41C1_DD7E8A4CA7ED",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_202CEC51_29D9_89DF_41A3_307457074843, this.camera_237C1C40_31B3_8CE0_41A5_54B9BC97FF55); this.mainPlayList.set('selectedIndex', 6)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "Circle Arrow 01a"
                              },
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 26,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_0_0_0_map.gif"
                                  }
                                 ],
                                 "frameCount": 24,
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "colCount": 4,
                                 "class": "AnimatedImageResource"
                                },
                                "yaw": 1.82,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -47.14,
                                "hfov": 12.28
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1110,
                                   "width": 1220,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_0_0.png"
                                  }
                                 ],
                                 "frameCount": 24,
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "colCount": 4,
                                 "class": "AnimatedImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "distance": 100,
                                "pitch": -47.14,
                                "hfov": 12.28,
                                "yaw": 1.82
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_3C724CFF_2A28_8AC3_41BD_4FD0057B6615",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393, this.camera_230BFC22_31B3_8CA0_419F_6742FE0B07CC); this.mainPlayList.set('selectedIndex', 8)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               },
                               {
                                "class": "HotspotPanoramaOverlayArea"
                               }
                              ],
                              "data": {
                               "label": "Circle Arrow 01a"
                              },
                              "maps": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 26,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_1_0_0_map.gif"
                                  }
                                 ],
                                 "frameCount": 24,
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "colCount": 4,
                                 "class": "AnimatedImageResource"
                                },
                                "yaw": -179.99,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -37.76,
                                "hfov": 14.28
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "levels": [
                                  {
                                   "height": 1110,
                                   "width": 1220,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_1_0.png"
                                  }
                                 ],
                                 "frameCount": 24,
                                 "rowCount": 6,
                                 "frameDuration": 41,
                                 "colCount": 4,
                                 "class": "AnimatedImageResource"
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "distance": 100,
                                "pitch": -37.76,
                                "hfov": 14.28,
                                "yaw": -179.99
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_3CFBA05C_2A28_99C5_41BA_E13CE5FCB61B",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "click": "this.startPanoramaWithCamera(this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5, this.camera_2300DC31_31B3_8CA0_41C2_1F62870ACF8F); this.mainPlayList.set('selectedIndex', 9)",
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "Polygon"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "width": 162,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_2_1_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 117.78,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.18,
                                "hfov": 36.81
                               }
                              ],
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 794,
                                   "width": 644,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "roll": 0,
                                "distance": 50,
                                "pitch": -0.18,
                                "hfov": 36.81,
                                "yaw": 117.78
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             },
                             {
                              "id": "overlay_6A3779D4_2A29_8AC5_4199_0DCAF4FF1FE7",
                              "enabledInCardboard": true,
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "data": {
                               "label": "\u524d\u5f80\u56db\u6a13"
                              },
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 61,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_3_0_map.gif"
                                  }
                                 ]
                                },
                                "yaw": 121.74,
                                "class": "HotspotPanoramaOverlayMap",
                                "pitch": -0.72,
                                "hfov": 37.51
                               }
                              ],
                              "items": [
                               {
                                "class": "HotspotPanoramaOverlayImage",
                                "pitch": -0.72,
                                "hfov": 37.51,
                                "yaw": 121.74,
                                "distance": 50,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 164,
                                   "width": 633,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_0_HS_3_0.png"
                                  }
                                 ]
                                }
                               }
                              ],
                              "rollOverDisplay": false,
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true
                             }
                            ],
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "width": 6080,
                               "tags": [
                                "oculusgo",
                                "ipadpro"
                               ],
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_hq.jpeg"
                              },
                              {
                               "height": 1024,
                               "width": 2048,
                               "tags": "preload",
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_lq.jpeg"
                              },
                              {
                               "height": 2001,
                               "width": 4002,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_t.jpg",
                            "class": "SphericPanoramaFrame"
                           }
                          ],
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "id": "panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393",
                             "label": "IMG_20211103_154449_00_161processed",
                             "thumbnailUrl": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_t.jpg",
                             "class": "Panorama",
                             "pitch": 0,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "id": "overlay_3D48971A_2A29_874D_4194_568CD40E5731",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C, this.camera_23AD0B51_31B3_B4E0_41C4_88439BD69F0E); this.mainPlayList.set('selectedIndex', 7)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "data": {
                                  "label": "Circle Arrow 01a"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 26,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_0_HS_0_0_0_map.gif"
                                     }
                                    ],
                                    "frameCount": 24,
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "colCount": 4,
                                    "class": "AnimatedImageResource"
                                   },
                                   "yaw": 92.72,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -32.53,
                                   "hfov": 15.23
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1110,
                                      "width": 1220,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_0_HS_0_0.png"
                                     }
                                    ],
                                    "frameCount": 24,
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "colCount": 4,
                                    "class": "AnimatedImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "distance": 100,
                                   "pitch": -32.53,
                                   "hfov": 15.23,
                                   "yaw": 92.72
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_hq.jpeg"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 2048,
                                  "tags": "preload",
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_lq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_t.jpg",
                               "class": "SphericPanoramaFrame"
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C",
                               "backwardYaw": -179.99,
                               "yaw": 92.72,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "hfovMax": 130,
                             "vfov": 180
                            },
                            "backwardYaw": 92.72,
                            "yaw": -179.99,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": "this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5",
                            "backwardYaw": 88.38,
                            "yaw": 117.78,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           },
                           {
                            "panorama": {
                             "id": "panorama_202CEC51_29D9_89DF_41A3_307457074843",
                             "label": "IMG_20211103_154303_00_159processed",
                             "thumbnailUrl": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_t.jpg",
                             "class": "Panorama",
                             "pitch": 0,
                             "hfov": 360,
                             "frames": [
                              {
                               "overlays": [
                                {
                                 "id": "overlay_3C526415_2A28_9947_41B2_F44D2EB1A3F6",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_2020451D_29D9_9B47_41C4_C6214239C92F, this.camera_23B84E67_31B3_8CA0_41B0_E29033E36DE8); this.mainPlayList.set('selectedIndex', 5)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "data": {
                                  "label": "Circle Arrow 01a Right-Up"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 26,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_0_HS_0_0_0_map.gif"
                                     }
                                    ],
                                    "frameCount": 24,
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "colCount": 4,
                                    "class": "AnimatedImageResource"
                                   },
                                   "yaw": -140.85,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -37.76,
                                   "hfov": 14.28
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1110,
                                      "width": 1220,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_0_HS_0_0.png"
                                     }
                                    ],
                                    "frameCount": 24,
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "colCount": 4,
                                    "class": "AnimatedImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "distance": 50,
                                   "pitch": -37.76,
                                   "hfov": 14.28,
                                   "yaw": -140.85
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                },
                                {
                                 "id": "overlay_3C0286D5_2A2B_86C7_41C3_EE703D4ADAFE",
                                 "enabledInCardboard": true,
                                 "areas": [
                                  {
                                   "click": "this.startPanoramaWithCamera(this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C, this.camera_23B42E6E_31B3_8CA0_41C1_C13A25460ECF); this.mainPlayList.set('selectedIndex', 7)",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "data": {
                                  "label": "Circle Arrow 01a Left-UP"
                                 },
                                 "maps": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 26,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_0_HS_1_0_0_map.gif"
                                     }
                                    ],
                                    "frameCount": 24,
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "colCount": 4,
                                    "class": "AnimatedImageResource"
                                   },
                                   "yaw": 116.16,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "pitch": -37.76,
                                   "hfov": 14.28
                                  }
                                 ],
                                 "items": [
                                  {
                                   "image": {
                                    "levels": [
                                     {
                                      "height": 1110,
                                      "width": 1220,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_0_HS_1_0.png"
                                     }
                                    ],
                                    "frameCount": 24,
                                    "rowCount": 6,
                                    "frameDuration": 41,
                                    "colCount": 4,
                                    "class": "AnimatedImageResource"
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "distance": 50,
                                   "pitch": -37.76,
                                   "hfov": 14.28,
                                   "yaw": 116.16
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true
                                }
                               ],
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "tags": [
                                   "oculusgo",
                                   "ipadpro"
                                  ],
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_hq.jpeg"
                                 },
                                 {
                                  "height": 1024,
                                  "width": 2048,
                                  "tags": "preload",
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_lq.jpeg"
                                 },
                                 {
                                  "height": 2001,
                                  "width": 4002,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_202CEC51_29D9_89DF_41A3_307457074843_t.jpg",
                               "class": "SphericPanoramaFrame"
                              }
                             ],
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "id": "panorama_2020451D_29D9_9B47_41C4_C6214239C92F",
                                "label": "IMG_20211103_154217_00_158processed",
                                "thumbnailUrl": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_t.jpg",
                                "class": "Panorama",
                                "pitch": 0,
                                "hfov": 360,
                                "frames": [
                                 {
                                  "overlays": [
                                   {
                                    "id": "overlay_3D512D96_29D8_8B45_41BC_C34BE819E451",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0, this.camera_23283EBA_31B3_8DA0_41C0_39226CC407B3); this.mainPlayList.set('selectedIndex', 4)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "Circle Arrow 01a"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 26,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_0_HS_0_0_0_map.gif"
                                        }
                                       ],
                                       "frameCount": 24,
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "colCount": 4,
                                       "class": "AnimatedImageResource"
                                      },
                                      "yaw": 176.95,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -13.23,
                                      "hfov": 17.58
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 1110,
                                         "width": 1220,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_0_HS_0_0.png"
                                        }
                                       ],
                                       "frameCount": 24,
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "colCount": 4,
                                       "class": "AnimatedImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "distance": 100,
                                      "pitch": -13.23,
                                      "hfov": 17.58,
                                      "yaw": 176.95
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   },
                                   {
                                    "id": "overlay_311B57D9_29D8_86CF_41AF_17A8F82FF87F",
                                    "enabledInCardboard": true,
                                    "areas": [
                                     {
                                      "click": "this.startPanoramaWithCamera(this.panorama_202CEC51_29D9_89DF_41A3_307457074843, this.camera_231B4EC2_31B3_8DE0_41B5_0936D1784817); this.mainPlayList.set('selectedIndex', 6)",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     },
                                     {
                                      "class": "HotspotPanoramaOverlayArea"
                                     }
                                    ],
                                    "data": {
                                     "label": "Circle Arrow 01a"
                                    },
                                    "maps": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 26,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_0_HS_1_0_0_map.gif"
                                        }
                                       ],
                                       "frameCount": 24,
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "colCount": 4,
                                       "class": "AnimatedImageResource"
                                      },
                                      "yaw": -2.33,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "pitch": -34.7,
                                      "hfov": 14.85
                                     }
                                    ],
                                    "items": [
                                     {
                                      "image": {
                                       "levels": [
                                        {
                                         "height": 1110,
                                         "width": 1220,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_0_HS_1_0.png"
                                        }
                                       ],
                                       "frameCount": 24,
                                       "rowCount": 6,
                                       "frameDuration": 41,
                                       "colCount": 4,
                                       "class": "AnimatedImageResource"
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "distance": 100,
                                      "pitch": -34.7,
                                      "hfov": 14.85,
                                      "yaw": -2.33
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "class": "HotspotPanoramaOverlay",
                                    "useHandCursor": true
                                   }
                                  ],
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "tags": [
                                      "oculusgo",
                                      "ipadpro"
                                     ],
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_hq.jpeg"
                                    },
                                    {
                                     "height": 1024,
                                     "width": 2048,
                                     "tags": "preload",
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_lq.jpeg"
                                    },
                                    {
                                     "height": 2001,
                                     "width": 4002,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_2020451D_29D9_9B47_41C4_C6214239C92F_t.jpg",
                                  "class": "SphericPanoramaFrame"
                                 }
                                ],
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "id": "panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0",
                                   "label": "IMG_20211103_154142_00_157processed",
                                   "thumbnailUrl": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_t.jpg",
                                   "class": "Panorama",
                                   "pitch": 0,
                                   "hfov": 360,
                                   "frames": [
                                    {
                                     "overlays": [
                                      {
                                       "id": "overlay_3DF0E257_29D9_99C3_41C1_EAEA8E3E4AF7",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F, this.camera_22A5EC8F_31B3_8C60_418E_37A600895EFA); this.mainPlayList.set('selectedIndex', 3)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "data": {
                                        "label": "Circle Arrow 01a"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 26,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_0_HS_0_0_0_map.gif"
                                           }
                                          ],
                                          "frameCount": 24,
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "class": "AnimatedImageResource"
                                         },
                                         "yaw": 91.36,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -20.81,
                                         "hfov": 20.08
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 1110,
                                            "width": 1220,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_0_HS_0_0.png"
                                           }
                                          ],
                                          "frameCount": 24,
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "class": "AnimatedImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "distance": 100,
                                         "pitch": -20.81,
                                         "hfov": 20.08,
                                         "yaw": 91.36
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      },
                                      {
                                       "id": "overlay_3D49C01E_29D9_9945_41C2_080372024F52",
                                       "enabledInCardboard": true,
                                       "areas": [
                                        {
                                         "click": "this.startPanoramaWithCamera(this.panorama_2020451D_29D9_9B47_41C4_C6214239C92F, this.camera_22AB2C86_31B3_8C60_41B2_2E8FAC5BA608); this.mainPlayList.set('selectedIndex', 5)",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        },
                                        {
                                         "class": "HotspotPanoramaOverlayArea"
                                        }
                                       ],
                                       "data": {
                                        "label": "Circle Arrow 01a"
                                       },
                                       "maps": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 26,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_0_HS_1_0_0_map.gif"
                                           }
                                          ],
                                          "frameCount": 24,
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "class": "AnimatedImageResource"
                                         },
                                         "yaw": -94.68,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "pitch": -17.92,
                                         "hfov": 17.18
                                        }
                                       ],
                                       "items": [
                                        {
                                         "image": {
                                          "levels": [
                                           {
                                            "height": 1110,
                                            "width": 1220,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_0_HS_1_0.png"
                                           }
                                          ],
                                          "frameCount": 24,
                                          "rowCount": 6,
                                          "frameDuration": 41,
                                          "colCount": 4,
                                          "class": "AnimatedImageResource"
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "distance": 100,
                                         "pitch": -17.92,
                                         "hfov": 17.18,
                                         "yaw": -94.68
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "class": "HotspotPanoramaOverlay",
                                       "useHandCursor": true
                                      }
                                     ],
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "tags": [
                                         "oculusgo",
                                         "ipadpro"
                                        ],
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_hq.jpeg"
                                       },
                                       {
                                        "height": 1024,
                                        "width": 2048,
                                        "tags": "preload",
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_lq.jpeg"
                                       },
                                       {
                                        "height": 2001,
                                        "width": 4002,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_t.jpg",
                                     "class": "SphericPanoramaFrame"
                                    }
                                   ],
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_2020451D_29D9_9B47_41C4_C6214239C92F",
                                     "backwardYaw": 176.95,
                                     "yaw": -94.68,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    },
                                    {
                                     "panorama": {
                                      "id": "panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F",
                                      "label": "IMG_20211103_154103_00_156processed",
                                      "thumbnailUrl": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_t.jpg",
                                      "class": "Panorama",
                                      "pitch": 0,
                                      "hfov": 360,
                                      "frames": [
                                       {
                                        "overlays": [
                                         {
                                          "id": "overlay_3A4B80EA_29D8_9ACD_41B2_BE2456328EC4",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_20303F0B_29D8_8743_41B0_0880E967F034, this.camera_20AE3D98_31B3_8C60_41A2_239B553FA73C); this.mainPlayList.set('selectedIndex', 2)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "data": {
                                           "label": "Circle Arrow 01a"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_0_HS_0_0_0_map.gif"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "yaw": -94.68,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -22.61,
                                            "hfov": 16.67
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 1110,
                                               "width": 1220,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_0_HS_0_0.png"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "distance": 100,
                                            "pitch": -22.61,
                                            "hfov": 16.67,
                                            "yaw": -94.68
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         },
                                         {
                                          "id": "overlay_3CF0AA0A_29D9_894D_4171_3A9C1525A01E",
                                          "enabledInCardboard": true,
                                          "areas": [
                                           {
                                            "click": "this.startPanoramaWithCamera(this.panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0, this.camera_20B42D8F_31B3_8C60_41A7_A5698FBB9359); this.mainPlayList.set('selectedIndex', 4)",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "data": {
                                           "label": "Circle Arrow 01a Right-Up"
                                          },
                                          "maps": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 26,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_0_HS_1_0_0_map.gif"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "yaw": 49.61,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "pitch": -20.45,
                                            "hfov": 16.92
                                           }
                                          ],
                                          "items": [
                                           {
                                            "image": {
                                             "levels": [
                                              {
                                               "height": 1110,
                                               "width": 1220,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_0_HS_1_0.png"
                                              }
                                             ],
                                             "frameCount": 24,
                                             "rowCount": 6,
                                             "frameDuration": 41,
                                             "colCount": 4,
                                             "class": "AnimatedImageResource"
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "distance": 50,
                                            "pitch": -20.45,
                                            "hfov": 16.92,
                                            "yaw": 49.61
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "class": "HotspotPanoramaOverlay",
                                          "useHandCursor": true
                                         }
                                        ],
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 3040,
                                           "width": 6080,
                                           "tags": [
                                            "oculusgo",
                                            "ipadpro"
                                           ],
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_hq.jpeg"
                                          },
                                          {
                                           "height": 1024,
                                           "width": 2048,
                                           "tags": "preload",
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_lq.jpeg"
                                          },
                                          {
                                           "height": 2001,
                                           "width": 4002,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F.jpeg"
                                          }
                                         ]
                                        },
                                        "thumbnailUrl": "media/panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_t.jpg",
                                        "class": "SphericPanoramaFrame"
                                       }
                                      ],
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0",
                                        "backwardYaw": 91.36,
                                        "yaw": 49.61,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       },
                                       {
                                        "panorama": "this.panorama_20303F0B_29D8_8743_41B0_0880E967F034",
                                        "backwardYaw": 90.19,
                                        "yaw": -94.68,
                                        "distance": 1,
                                        "class": "AdjacentPanorama"
                                       }
                                      ],
                                      "partial": false,
                                      "hfovMin": 60,
                                      "hfovMax": 130,
                                      "vfov": 180
                                     },
                                     "backwardYaw": 49.61,
                                     "yaw": 91.36,
                                     "distance": 1,
                                     "class": "AdjacentPanorama"
                                    }
                                   ],
                                   "partial": false,
                                   "hfovMin": 60,
                                   "hfovMax": 130,
                                   "vfov": 180
                                  },
                                  "backwardYaw": -94.68,
                                  "yaw": 176.95,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 },
                                 {
                                  "panorama": "this.panorama_202CEC51_29D9_89DF_41A3_307457074843",
                                  "backwardYaw": -140.85,
                                  "yaw": -2.33,
                                  "distance": 1,
                                  "class": "AdjacentPanorama"
                                 }
                                ],
                                "partial": false,
                                "hfovMin": 60,
                                "hfovMax": 130,
                                "vfov": 180
                               },
                               "backwardYaw": -2.33,
                               "yaw": -140.85,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              },
                              {
                               "panorama": "this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C",
                               "backwardYaw": 1.82,
                               "yaw": 116.16,
                               "distance": 1,
                               "class": "AdjacentPanorama"
                              }
                             ],
                             "partial": false,
                             "hfovMin": 60,
                             "hfovMax": 130,
                             "vfov": 180
                            },
                            "backwardYaw": 116.16,
                            "yaw": 1.82,
                            "distance": 1,
                            "class": "AdjacentPanorama"
                           }
                          ],
                          "partial": false,
                          "hfovMin": 60,
                          "hfovMax": 130,
                          "vfov": 180
                         },
                         "backwardYaw": 117.78,
                         "yaw": 88.38,
                         "distance": 1,
                         "class": "AdjacentPanorama"
                        }
                       ],
                       "partial": false,
                       "hfovMin": 60,
                       "hfovMax": 130,
                       "vfov": 180
                      },
                      "backwardYaw": 1.09,
                      "yaw": 121.76,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     },
                     {
                      "panorama": "this.panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E",
                      "backwardYaw": 179.65,
                      "yaw": -138.14,
                      "distance": 1,
                      "class": "AdjacentPanorama"
                     }
                    ],
                    "partial": false,
                    "hfovMin": 60,
                    "hfovMax": 130,
                    "vfov": 180
                   },
                   "backwardYaw": -138.14,
                   "yaw": 179.65,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "partial": false,
                 "hfovMin": 60,
                 "hfovMax": 130,
                 "vfov": 180
                },
                "backwardYaw": -1.79,
                "yaw": -179.99,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "partial": false,
              "hfovMin": 60,
              "hfovMax": 130,
              "vfov": 180
             },
             "backwardYaw": 0.01,
             "yaw": -173.13,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "panorama": "this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935",
             "backwardYaw": 83.52,
             "yaw": -15.86,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "partial": false,
           "hfovMin": 60,
           "hfovMax": 130,
           "vfov": 180
          },
          "backwardYaw": -15.86,
          "yaw": 83.52,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "panorama": "this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F",
          "backwardYaw": -64.82,
          "yaw": -144.91,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "partial": false,
        "hfovMin": 60,
        "hfovMax": 130,
        "vfov": 180
       },
       "backwardYaw": -135.84,
       "yaw": 137.25,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "panorama": "this.panorama_20303F0B_29D8_8743_41B0_0880E967F034",
       "backwardYaw": -106.76,
       "yaw": -65.82,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "partial": false,
     "hfovMin": 60,
     "hfovMax": 130,
     "vfov": 180
    },
    "backwardYaw": -65.82,
    "yaw": -106.76,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "panorama": "this.panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F",
    "backwardYaw": -94.68,
    "yaw": 90.19,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "partial": false,
  "hfovMin": 60,
  "hfovMax": 130,
  "vfov": 180
 },
 {
  "id": "camera_2076AE48_31B3_8CE0_41C2_E0493F015328",
  "initialPosition": {
   "yaw": 90.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22D14CBC_31B3_8DA0_41AF_DC9AADE7F16A",
  "initialPosition": {
   "yaw": -75.38,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20D9CDF4_31B3_8FA0_41B8_4B4074C5932F",
  "initialPosition": {
   "yaw": 95.42,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_camera",
  "initialPosition": {
   "yaw": 12.81,
   "class": "PanoramaCameraPosition",
   "pitch": 2.71
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20FF1DD5_31B3_8FE0_41B2_A90931482AB3",
  "initialPosition": {
   "yaw": 168.83,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23962B73_31B3_B4A0_41B6_EC054EEF6F21",
  "initialPosition": {
   "yaw": 41.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2154FD4D_31B3_8CE0_41A0_C8A8AB3101B1",
  "initialPosition": {
   "yaw": -58.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20BB8D75_31B3_8CA0_41C7_25E3ED726E36",
  "initialPosition": {
   "yaw": 112.8,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_226FACFA_31B3_8DA0_41C2_0120C014AE35",
  "initialPosition": {
   "yaw": -89.76,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E",
 "this.panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7",
 {
  "id": "camera_209DDDAE_31B3_8FA0_41BA_195832D9AE19",
  "initialPosition": {
   "yaw": 97.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23F01B94_31B3_B460_41BB_2F6E9E829CF6",
  "initialPosition": {
   "yaw": 172.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2359AC5E_31B3_8CE0_41B2_0A650C6A5F84",
  "initialPosition": {
   "yaw": -6.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_20303F0B_29D8_8743_41B0_0880E967F034_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_233F8EB2_31B3_8DA0_41BD_5DB14274B238",
  "initialPosition": {
   "yaw": 118.47,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2086CDCD_31B3_8FE0_41B5_CC4737F33816",
  "initialPosition": {
   "yaw": -72.2,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20A0FD9F_31B3_8C60_41C0_5E702795AFAD",
  "initialPosition": {
   "yaw": -2.86,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935",
 {
  "id": "panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202141BD_29D8_BB47_41B4_A578A47A6466_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2300DC31_31B3_8CA0_41C2_1F62870ACF8F",
  "initialPosition": {
   "yaw": -91.62,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5",
 {
  "id": "panorama_202D4031_29D8_995F_4180_F7D352C8832C_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_220DECEA_31B3_8DA0_41C8_A3537C182AE0",
  "initialPosition": {
   "yaw": 172.96,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21",
 {
  "id": "camera_2287CCA1_31B3_8DA0_41A6_371E3256DB69",
  "initialPosition": {
   "yaw": -81.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20398E12_31B3_8C60_41A4_342B3A1DD513",
  "initialPosition": {
   "yaw": 135.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20C03E0A_31B3_8C60_41B2_712FFC253A94",
  "initialPosition": {
   "yaw": 126.07,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_222C8CD9_31B3_8DE0_41B7_9B81E6D44CAC",
  "initialPosition": {
   "yaw": -83.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_20202402_29D9_793D_41B4_E5905566B405_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20B1CD87_31B3_8C60_41B6_483E210FBF2D",
  "initialPosition": {
   "yaw": -68.71,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23924E7D_31B3_8CA0_419C_3FA712AEEC3B",
  "initialPosition": {
   "yaw": 73.24,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_2020451D_29D9_9B47_41C4_C6214239C92F",
 {
  "id": "camera_208C5DC6_31B3_8FE0_41C4_2AFA332C10FA",
  "initialPosition": {
   "yaw": -102.72,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22E12CB4_31B3_8DA0_4197_F3003F1CF709",
  "initialPosition": {
   "yaw": -179.27,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23C1BBD2_31B3_8BE0_41A8_8525A2DBA769",
  "initialPosition": {
   "yaw": -179.44,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2090BDB7_31B3_8FA0_4177_3ABBC333F077",
  "initialPosition": {
   "yaw": 5.3,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23F87E8C_31B3_8C60_41C3_B2E787E1AC72",
  "initialPosition": {
   "yaw": -10.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202E762D_29D9_B947_41B9_73BF2ED44020",
 {
  "id": "panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_21485D59_31B3_8CE0_41C8_7691EE41C3DE",
  "initialPosition": {
   "yaw": -62.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22499D0B_31B3_8C60_41AB_8E1BB88DFFF0",
  "initialPosition": {
   "yaw": 114.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23AD0B51_31B3_B4E0_41C4_88439BD69F0E",
  "initialPosition": {
   "yaw": 0.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20AE3D98_31B3_8C60_41A2_239B553FA73C",
  "initialPosition": {
   "yaw": -89.81,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2140ED6C_31B3_8CA0_41BC_ABCB2EA38EF4",
  "initialPosition": {
   "yaw": 178.21,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202A8A29_29D8_894F_41C0_6C9391436A5C",
 {
  "id": "camera_20C9CE03_31B3_8C60_4194_374BC56CD3B0",
  "initialPosition": {
   "yaw": 90.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22AB2C86_31B3_8C60_41B2_2E8FAC5BA608",
  "initialPosition": {
   "yaw": -3.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73",
 {
  "id": "panorama_20210439_29D8_B94F_41AF_70333BFB7555_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23C3DEAA_31B3_8DA0_41C2_489F0E308BB1",
  "initialPosition": {
   "yaw": -1.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D",
 "this.panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7",
 {
  "id": "camera_239A1B63_31B3_B4A0_41C5_EF4DC58E1021",
  "initialPosition": {
   "yaw": 78.11,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1",
 {
  "id": "panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_225FCD03_31B3_8C60_4199_064C83C5CAA2",
  "initialPosition": {
   "yaw": 35.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_234B9C6D_31B3_8CA0_419E_2F901089DA53",
  "initialPosition": {
   "yaw": -70.34,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_214CCD63_31B3_8CA0_418B_AD5C3DC167F7",
  "initialPosition": {
   "yaw": 6.87,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0",
 {
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveDown": "this.IconButton_3F1F6810_2DA6_4CB4_41BC_6B780EE4DD22",
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "class": "PanoramaPlayer",
  "buttonMoveRight": "this.IconButton_3FEDCC47_2DA1_C49C_41B7_28031309EDB3",
  "buttonMoveLeft": "this.IconButton_3FE0F696_2DA2_45BC_41AB_07728A3C68C3",
  "buttonMoveUp": "this.IconButton_3F695745_2DA1_C49C_41C2_49775B21E7F3",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "camera_231B4EC2_31B3_8DE0_41B5_0936D1784817",
  "initialPosition": {
   "yaw": 39.15,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393",
 {
  "id": "panorama_2020451D_29D9_9B47_41C4_C6214239C92F_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20E9FDE4_31B3_8FA0_4196_9C16497DF631",
  "initialPosition": {
   "yaw": 176.06,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D",
 {
  "id": "panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202CEC51_29D9_89DF_41A3_307457074843_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22BBCC7C_31B3_8CA0_41C1_84883437B46C",
  "initialPosition": {
   "yaw": 176.78,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_202FDE21_31B3_8CA0_41B7_A1B5DD793271",
  "initialPosition": {
   "yaw": -4.66,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22C16CC5_31B3_8DE0_41BD_5C6A785EE6FC",
  "initialPosition": {
   "yaw": -92.68,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_209BEDA7_31B3_8FA0_41C6_124532899EB7",
  "initialPosition": {
   "yaw": -66.88,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202D4031_29D8_995F_4180_F7D352C8832C",
 {
  "id": "camera_23800B84_31B3_B460_41A5_DFA0C8087DA5",
  "initialPosition": {
   "yaw": -96.48,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432",
 "this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C",
 "this.panorama_20227F14_29D8_8745_41C2_B785C0176E46",
 {
  "id": "camera_23A7EB5A_31B3_B4E0_41AD_F8C66BD3DAE9",
  "initialPosition": {
   "yaw": -125.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_237C1C40_31B3_8CE0_41A5_54B9BC97FF55",
  "initialPosition": {
   "yaw": -63.84,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_20227F14_29D8_8745_41C2_B785C0176E46_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_230BFC22_31B3_8CA0_419F_6742FE0B07CC",
  "initialPosition": {
   "yaw": -87.28,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "audio_22B5B30F_30DD_F04E_41B3_55D39BD59E71",
  "autoplay": true,
  "data": {
   "label": "bensound-sunny"
  },
  "class": "MediaAudio",
  "audio": {
   "mp3Url": "media/audio_22B5B30F_30DD_F04E_41B3_55D39BD59E71.mp3",
   "oggUrl": "media/audio_22B5B30F_30DD_F04E_41B3_55D39BD59E71.ogg",
   "class": "AudioResource"
  }
 },
 "this.panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147",
 {
  "id": "camera_23E98B9C_31B3_B460_41C6_87DCCCA57E2E",
  "initialPosition": {
   "yaw": -178.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48",
 {
  "id": "panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466",
 {
  "id": "camera_205CAE58_31B3_8CE0_41B7_F6D2C1DAA52F",
  "initialPosition": {
   "yaw": 164.14,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20E2FDEC_31B3_8FA0_41C5_C152526D9D2C",
  "initialPosition": {
   "yaw": -89.93,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F",
 "this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1",
 {
  "id": "camera_227FBCF2_31B3_8DA0_41B4_F96EEB2ACD01",
  "initialPosition": {
   "yaw": -90.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_232BCBF0_31B3_8BA0_41A7_1AE2DC254EBD",
  "initialPosition": {
   "yaw": -44.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_200DDE39_31B3_8CA0_4191_BCFB26C67801",
  "initialPosition": {
   "yaw": -130.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_20202402_29D9_793D_41B4_E5905566B405",
 "this.panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390",
 {
  "id": "panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202E762D_29D9_B947_41B9_73BF2ED44020_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_camera",
  "initialPosition": {
   "yaw": -173.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0.12
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25B99D13_31B3_8C60_416E_217FA03BE546",
  "initialPosition": {
   "yaw": 85.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_2060FE50_31B3_8CE0_41C5_122C05B39D22",
  "initialPosition": {
   "yaw": -42.75,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23B84E67_31B3_8CA0_41B0_E29033E36DE8",
  "initialPosition": {
   "yaw": 177.67,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_20210439_29D8_B94F_41AF_70333BFB7555",
 {
  "id": "panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F",
 {
  "id": "camera_2017EE31_31B3_8CA0_41C3_87BAF559F180",
  "initialPosition": {
   "yaw": 143.04,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23EBEE94_31B3_8C60_41C8_827E245E053B",
  "initialPosition": {
   "yaw": -121.82,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23D43BC3_31B3_8BE0_41C0_2E60E86A68AF",
  "initialPosition": {
   "yaw": -3.22,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "mainPlayList",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202CBCE5_29D8_8AC7_41A9_B64BA0E8A51D"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_20303F0B_29D8_8743_41B0_0880E967F034_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20303F0B_29D8_8743_41B0_0880E967F034"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": {
     "id": "panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2022DDE3_29D9_8AC3_4198_7C1670E7A4F0"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_2020451D_29D9_9B47_41C4_C6214239C92F_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2020451D_29D9_9B47_41C4_C6214239C92F"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_202CEC51_29D9_89DF_41A3_307457074843_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202CEC51_29D9_89DF_41A3_307457074843"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202F03A6_29D9_BF45_4190_464DA2BBFA9C"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": {
     "id": "panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": {
     "id": "panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20226A53_29D9_89C3_41BD_A01EDB26CA21"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": {
     "id": "panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202ED90E_29D9_8B45_41BA_7FFB77E63CF1"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "camera": "this.panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "camera": "this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202CE7AB_29D9_8743_41A5_D2FD9474A935"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "camera": {
     "id": "panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "camera": "this.panorama_202E762D_29D9_B947_41B9_73BF2ED44020_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202E762D_29D9_B947_41B9_73BF2ED44020"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "camera": "this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "camera": "this.panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202524FC_29D9_9AC5_41C2_4C8E3048D390"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "camera": "this.panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2022BCA8_29D9_894D_41B9_2D78FFF09147"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "camera": "this.panorama_20202402_29D9_793D_41B4_E5905566B405_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20202402_29D9_793D_41B4_E5905566B405"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "camera": "this.panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20216B4C_29D8_8FC5_41AA_EEB1350DCA73"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "camera": {
     "id": "panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "camera": {
     "id": "panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "camera": "this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202141BD_29D8_BB47_41B4_A578A47A6466"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "camera": "this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202ED919_29D8_8B4F_41C1_C815AD35F6D1"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "camera": "this.panorama_202D4031_29D8_995F_4180_F7D352C8832C_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202D4031_29D8_995F_4180_F7D352C8832C"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "camera": "this.panorama_20227F14_29D8_8745_41C2_B785C0176E46_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20227F14_29D8_8745_41C2_B785C0176E46"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "camera": {
     "id": "panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "camera": "this.panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_2020DE6B_29D8_89C3_41B0_E88CD4F5C3A7"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "camera": "this.panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "camera": "this.panorama_20210439_29D8_B94F_41AF_70333BFB7555_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20210439_29D8_B94F_41AF_70333BFB7555"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "camera": "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202CDBD0_29D8_8EDD_41A9_0571E7060E7D"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "camera": {
     "id": "panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
    "camera": "this.panorama_202A8A29_29D8_894F_41C0_6C9391436A5C_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202A8A29_29D8_894F_41C0_6C9391436A5C"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
    "camera": {
     "id": "panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_camera",
     "initialPosition": {
      "yaw": 0,
      "class": "PanoramaCameraPosition",
      "pitch": 0
     },
     "initialSequence": {
      "movements": [
       {
        "easing": "cubic_in",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       },
       {
        "easing": "linear",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 323
       },
       {
        "easing": "cubic_out",
        "class": "DistancePanoramaCameraMovement",
        "yawSpeed": 7.96,
        "yawDelta": 18.5
       }
      ],
      "class": "PanoramaCameraSequence",
      "restartMovementOnUserInteraction": false
     },
     "class": "PanoramaCamera",
     "automaticZoomSpeed": 10
    },
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
    "camera": "this.panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
    "camera": "this.panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_20215042_29DB_993D_41C2_2B8E16D6CCA7"
   },
   {
    "end": "this.trigger('tourEnded')",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 0)",
    "camera": "this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86_camera",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86"
   }
  ],
  "class": "PlayList"
 },
 "this.panorama_202CF657_29D9_79C3_41C2_1EDBA136C06F_camera",
 "this.panorama_202EC2BB_29D9_9943_4191_623B23A1A8B5_camera",
 "this.panorama_202CEC51_29D9_89DF_41A3_307457074843",
 "this.panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E",
 {
  "id": "camera_23F96B8C_31B3_B460_41C6_C82B6FF18F52",
  "initialPosition": {
   "yaw": 143.09,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_238F0B7C_31B3_B4A0_41A3_D47860AD1479",
  "initialPosition": {
   "yaw": -179.99,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_22955C98_31B3_8C60_41A2_2795EE335FA1",
  "initialPosition": {
   "yaw": -2.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_25AA2D1A_31B3_8C60_41C3_CB6E569AD56F",
  "initialPosition": {
   "yaw": 131.61,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202EA06E_29D9_99C5_41AF_609FB7C01D8B",
 "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314_camera",
 "this.panorama_202EC1A7_29D9_FB43_41C2_07B28FE4441E_camera",
 {
  "id": "camera_22F09CAB_31B3_8DA0_41C8_78AB92E9BF77",
  "initialPosition": {
   "yaw": -91.98,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_221D2CE2_31B3_8DA0_41B1_A0A814EB24CC",
  "initialPosition": {
   "yaw": 119.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20BFAD7F_31B3_8CA0_41B3_2017C37C39FC",
  "initialPosition": {
   "yaw": 110.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202F3D69_29D9_8BCF_41C1_8E365DC5CBD9",
 "this.panorama_202CBEF2_29D9_86DD_41C1_0233C02AE27F_camera",
 {
  "id": "camera_233E6BE1_31B3_8BA0_41B2_3DF9BD8DA694",
  "initialPosition": {
   "yaw": 82.26,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_204E2E5F_31B3_8CE0_419B_1F483A2672E7",
  "initialPosition": {
   "yaw": 115.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202E6165_29DB_7BC7_41AA_01916FC4AA48_camera",
 "this.panorama_2025FB58_29D9_8FCD_419E_2FF7CC682393_camera",
 "this.panorama_202276C0_29D8_F93D_4187_7BB88CBDB314",
 {
  "id": "camera_22A5EC8F_31B3_8C60_418E_37A600895EFA",
  "initialPosition": {
   "yaw": -130.39,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20791E40_31B3_8CE0_41AD_95062FB418AF",
  "initialPosition": {
   "yaw": -88.91,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23218BFF_31B3_8BA0_4164_FCEE24E4AD6B",
  "initialPosition": {
   "yaw": -44.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23DFABB4_31B3_8BA0_4188_611053C6B3FE",
  "initialPosition": {
   "yaw": 177.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_239CBB6B_31B3_B4A0_41BF_AA1AD9E45897",
  "initialPosition": {
   "yaw": 0.01,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23A78E76_31B3_8CA0_4172_08430F337F43",
  "initialPosition": {
   "yaw": 44.16,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202387AB_29DB_8743_41A2_CF521E3C9E86",
 {
  "id": "camera_23B42E6E_31B3_8CA0_41C1_C13A25460ECF",
  "initialPosition": {
   "yaw": -178.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_2023FA54_29D8_89C5_41C4_B0221AD9623E_camera",
 {
  "id": "camera_22334CCF_31B3_8DE0_41BB_302165595C0A",
  "initialPosition": {
   "yaw": 87.13,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871_camera",
 {
  "id": "camera_20D0FDFB_31B3_8FA0_41BC_5198CF5060F0",
  "initialPosition": {
   "yaw": 85.5,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_201BBE28_31B3_8CA0_41B0_A3DD326533B8",
  "initialPosition": {
   "yaw": -164.53,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23283EBA_31B3_8DA0_41C0_39226CC407B3",
  "initialPosition": {
   "yaw": 85.32,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_238DAE85_31B3_8C60_41A9_5854CCE7BF96",
  "initialPosition": {
   "yaw": 0.18,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202322BF_29D8_9943_41C3_4B52BEAC8871",
 {
  "id": "camera_20894DBE_31B3_8FA0_4189_6D28FBD407FC",
  "initialPosition": {
   "yaw": 88.77,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_231E9C0E_31B3_8C60_41C1_E87C84F8867C",
  "initialPosition": {
   "yaw": -82.95,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202FD8AE_29DB_8945_41C1_7B025F391FB8",
 {
  "id": "camera_2030DE19_31B3_8C60_41C6_41362C72618E",
  "initialPosition": {
   "yaw": 135.05,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_23E70BA3_31B3_8BA0_4192_EA5E791E23DD",
  "initialPosition": {
   "yaw": -0.35,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_233E06B5_29D8_9947_41C1_E6C3B0F12258",
 {
  "id": "camera_23685C4F_31B3_8CE0_41C6_2DA1C1C4CB0D",
  "initialPosition": {
   "yaw": 1.45,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_202FB5A2_29D8_9B7D_41AC_C366F8212260",
 "this.panorama_202D62FF_29D8_9EC3_419B_FF98C0CDD432_camera",
 {
  "id": "camera_23E5DE9B_31B3_8C60_41AE_C7F1C26BEB30",
  "initialPosition": {
   "yaw": -88.73,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "camera_20B42D8F_31B3_8C60_41A7_A5698FBB9359",
  "initialPosition": {
   "yaw": -88.64,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "initialSequence": {
   "movements": [
    {
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    },
    {
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 323
    },
    {
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "yawDelta": 18.5
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "progressBottom": 0,
  "data": {
   "name": "Main Viewer"
  },
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingRight": 6,
  "left": 0,
  "progressLeft": 0,
  "toolTipShadowOpacity": 1,
  "right": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadWidth": 6,
  "toolTipFontColor": "#606060",
  "progressBarBorderSize": 0,
  "progressHeight": 10,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderColor": "#000000",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadHeight": 15,
  "toolTipBorderColor": "#767676",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontFamily": "Arial",
  "progressRight": 0,
  "playbackBarLeft": 0,
  "paddingRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBarOpacity": 1,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadow": true,
  "propagateClick": false,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowColor": "#333333",
  "playbackBarBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowOpacity": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBorderRadius": 0,
  "top": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressBorderSize": 0,
  "bottom": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "shadow": false,
  "toolTipOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontWeight": "normal",
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingTop": 0,
  "transitionMode": "blending",
  "playbackBarBackgroundColorDirection": "vertical",
  "borderSize": 0,
  "borderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "transitionDuration": 500,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "toolTipBorderRadius": 3,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "id": "MainViewer",
  "playbackBarHeadOpacity": 1,
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipDisplayTime": 600,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeight": 10,
  "progressBackgroundOpacity": 1,
  "playbackBarOpacity": 1,
  "paddingBottom": 0,
  "toolTipFontSize": "1.11vh",
  "playbackBarRight": 0,
  "playbackBarBottom": 5,
  "displayTooltipInTouchScreens": true,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingLeft": 6,
  "toolTipBorderSize": 1,
  "toolTipPaddingTop": 4,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "minWidth": 100,
  "paddingLeft": 0
 },
 {
  "cursor": "hand",
  "bottom": "8.58%",
  "data": {
   "name": "IconButton13663"
  },
  "maxWidth": 396,
  "left": "48.42%",
  "iconURL": "skin/IconButton_3F1F6810_2DA6_4CB4_41BC_6B780EE4DD22.png",
  "shadow": false,
  "right": "47.62%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 396,
  "minHeight": 1,
  "id": "IconButton_3F1F6810_2DA6_4CB4_41BC_6B780EE4DD22",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "85.26%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "18.87%",
  "data": {
   "name": "IconButton14575"
  },
  "maxWidth": 396,
  "left": "48.42%",
  "iconURL": "skin/IconButton_3F695745_2DA1_C49C_41C2_49775B21E7F3.png",
  "shadow": false,
  "right": "47.62%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 404,
  "minHeight": 1,
  "id": "IconButton_3F695745_2DA1_C49C_41C2_49775B21E7F3",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "74.97%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "8.58%",
  "data": {
   "name": "IconButton16029"
  },
  "maxWidth": 396,
  "left": "42.57%",
  "iconURL": "skin/IconButton_3FE0F696_2DA2_45BC_41AB_07728A3C68C3.png",
  "shadow": false,
  "right": "53.47%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 396,
  "minHeight": 1,
  "id": "IconButton_3FE0F696_2DA2_45BC_41AB_07728A3C68C3",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "85.26%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "8.58%",
  "data": {
   "name": "IconButton16679"
  },
  "maxWidth": 396,
  "left": "53.76%",
  "iconURL": "skin/IconButton_3FEDCC47_2DA1_C49C_41B7_28031309EDB3.png",
  "shadow": false,
  "right": "42.28%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 396,
  "minHeight": 1,
  "id": "IconButton_3FEDCC47_2DA1_C49C_41B7_28031309EDB3",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "85.26%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "bottom": "8.47%",
  "scrollBarMargin": 2,
  "left": "9.56%",
  "shadow": false,
  "right": "8.75%",
  "paddingTop": 0,
  "data": {
   "name": "Cafe1Container"
  },
  "layout": "absolute",
  "borderSize": 0,
  "scrollBarWidth": 10,
  "borderRadius": 0,
  "contentOpaque": false,
  "minHeight": 1,
  "gap": 10,
  "id": "Container_21C967AB_2E8E_B945_41B2_3C7A428D73A3",
  "children": [
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "paddingLeft": 40,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "shadowSpread": 1,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "borderRadius": 10,
    "minHeight": 1,
    "data": {
     "name": "Cafe1Text"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_21B208D0_2E8F_88C3_41B4_5465531C8DAA",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "20.68%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u5b78\u751f\u7b2c\u4e00\u9910\u5ef3</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u5b78\u751f\u7b2c\u4e00\u9910\u5ef3\u76f8\u8f03\u65bc\u5b78\u751f\u7b2c\u4e8c\u9910\u5ef3\u6700\u5927\u7684\u5dee\u8ddd\u5c31\u5728\u65bc\u6c92\u6709\u8a2d\u7f6e\u5ec1\u6240\uff0c\u4f46\u662f\u5728\u9019\u88e1\u7684\u5ea7\u4f4d\u6578\u91cf\u662f\u975e\u5e38\u5145\u8db3\u7684\uff0c\u4e14\u4e5f\u6709\u8a2d\u7f6e\u4fbf\u5229\u5546\u5e97\uff0c\u98df\u7269\u7684\u50f9\u683c\u4e5f\u90fd\u883b\u7b26\u5408\u5b78\u751f\u7684\u6d88\u8cbb\uff0c\u4e3b\u8981\u4f86\u7684\u5ba2\u7fa4\u4f86\u81ea\u4e03\u820d\u3001\u516b\u820d\u3001\u5973\u4e8c\u3002</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "shadowBlurRadius": 7,
    "backgroundOpacity": 0.91
   },
   {
    "bottom": "29.36%",
    "data": {
     "name": "Cafe1Image"
    },
    "maxWidth": 625,
    "left": "10.77%",
    "shadow": false,
    "right": "63.22%",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "borderRadius": 0,
    "maxHeight": 470,
    "minHeight": 1,
    "id": "Image_21EEADC6_2E8B_88CF_41C7_2CA640E44233",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "class": "Image",
    "url": "skin/Image_21EEADC6_2E8B_88CF_41C7_2CA640E44233.png",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "46.35%",
    "minWidth": 1,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "cursor": "hand",
    "bottom": "71.62%",
    "rollOverIconURL": "skin/IconButton_3A554560_2E8D_B9C3_4196_920A40348157_rollover.png",
    "left": "85.94%",
    "iconURL": "skin/IconButton_3A554560_2E8D_B9C3_4196_920A40348157.png",
    "right": "10.08%",
    "paddingTop": 0,
    "data": {
     "name": "Cafe1CloseBtn"
    },
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_3A554560_2E8D_B9C3_4196_920A40348157_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_3A554560_2E8D_B9C3_4196_920A40348157",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_21B208D0_2E8F_88C3_41B4_5465531C8DAA, false, 0, null, null, false); this.setComponentVisibility(this.Image_21EEADC6_2E8B_88CF_41C7_2CA640E44233, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_3A554560_2E8D_B9C3_4196_920A40348157, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "23.88%",
    "transparencyActive": true,
    "shadow": false,
    "paddingLeft": 0,
    "backgroundOpacity": 0,
    "minWidth": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "paddingLeft": 40,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "shadowSpread": 1,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "borderRadius": 10,
    "minHeight": 1,
    "data": {
     "name": "TherapyText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_3891783E_2EF6_97BF_41BF_46DB8AAC028E",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "7.87%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u8aee\u5546\u4e2d\u5fc3</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u8aee\u5546\u4e2d\u5fc3\u7684\u8a2d\u7acb\u662f\u70ba\u4e86\u5e6b\u52a9\u672c\u6821\u6559\u8077\u54e1\u751f\u5c0d\u81ea\u6211\u6709\u6df1\u5165\u8a8d\u8b58\uff0c\u4e26\u52a0\u5f37\u81ea\u5df1\u5c0d\u5468\u906d\u74b0\u5883\u7684\u8abf\u9069\u80fd\u529b\u3002\u5728\u9019\u88e1\u6211\u5011\u8058\u8acb\u4e86\u5c08\u696d\u8eab\u5fc3\u79d1\u91ab\u5e2b\u53ca\u5fc3\u7406\u5e2b\uff0c\u85c9\u7531\u9019\u4e9b\u5c08\u696d\u4eba\u54e1\u7684\u5354\u52a9\uff0c\u53ef\u4ee5\u66f4\u5bb9\u6613\u8b93\u81ea\u5df1\u7531\u8ff7\u60d1\u3001\u77db\u76fe\u7684\u4eba\u751f\u554f\u984c\u4e2d\u7372\u5f97\u91d0\u6e05\u8207\u518d\u6295\u5165\u7684\u52c7\u6c23\uff0c\u4ea6\u53ef\u589e\u9032\u6b63\u5411\u60c5\u7dd2\u8207\u4eba\u969b\u95dc\u4fc2\u7684\u5e78\u798f\u611f\u3002\u5982\u6b64\u4e00\u4f86\uff0c\u8b93\u81ea\u5df1\u4e0d\u8ad6\u662f\u5728\u9762\u5c0d\u793e\u5718\u3001\u8ab2\u696d\u3001\u5bb6\u5ead\u3001\u5de5\u4f5c\u3001\u611f\u60c5\u3001\u4eba\u969b\u3001\u751f\u6daf\u898f\u5283\u7b49\u56f0\u64fe\u6642\u80fd\u5f9e\u5bb9\u61c9\u4ed8\uff0c\u4e5f\u80fd\u66f4\u7a4d\u6975\u5c0b\u6c42\u751f\u547d\u4e2d\u7684\u5feb\u6a02\u8207\u5e78\u798f\u611f\uff0c\u9019\u4e0d\u50c5\u5728\u6c42\u5b78\u6216\u5de5\u4f5c\u968e\u6bb5\u80fd\u5920\u9806\u5229\uff0c\u5c0d\u65bc\u81ea\u5df1\u4eba\u751f\u6b77\u7a0b\u66f4\u80fd\u6709\u6548\u638c\u63e1\u3002</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "shadowBlurRadius": 7,
    "backgroundOpacity": 0.91
   },
   {
    "bottom": "28.9%",
    "data": {
     "name": "TherapyImage"
    },
    "maxWidth": 695,
    "left": "8.66%",
    "shadow": false,
    "right": "47.55%",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "borderRadius": 0,
    "maxHeight": 379,
    "minHeight": 1,
    "id": "Image_38C98B4F_2EFA_89DD_41B1_41B9CF24AD17",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "class": "Image",
    "url": "skin/Image_38C98B4F_2EFA_89DD_41B1_41B9CF24AD17.png",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "42.2%",
    "minWidth": 1,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "cursor": "hand",
    "bottom": "84.93%",
    "rollOverIconURL": "skin/IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB_rollover.png",
    "data": {
     "name": "TherapyCloseBtn"
    },
    "left": "86.68%",
    "iconURL": "skin/IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB.png",
    "shadow": false,
    "right": "10.31%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_3891783E_2EF6_97BF_41BF_46DB8AAC028E, false, 0, null, null, false); this.setComponentVisibility(this.Image_38C98B4F_2EFA_89DD_41B1_41B9CF24AD17, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_3B952C83_2EFF_8F45_418A_BB0909C02BDB, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "10.64%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "paddingLeft": 40,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "shadowSpread": 1,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "borderRadius": 10,
    "minHeight": 1,
    "data": {
     "name": "BookStoreText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_383600A1_2EF7_9744_41B0_AAB50135347D",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "19.9%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u9e97\u6587\u6821\u5712\u66f8\u5c40</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u4ea4\u5927\u4e00\u5e74\u524d\u65b0\u958b\u7684\u66f8\u5c40\uff0c\u5728\u66f8\u5c40\u5167\u6709\u8a31\u591a\u4ea4\u5927\u51fa\u7248\u7684\u66f8\u7c4d\u9084\u6709\u4e00\u4e9b\u9650\u5b9a\u7684\u7d00\u5ff5\u54c1\uff0c\u5167\u88dd\u6574\u9ad4\u975e\u5e38\u8212\u9069\u3002</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "shadowBlurRadius": 7,
    "backgroundOpacity": 0.91
   },
   {
    "bottom": "31.66%",
    "data": {
     "name": "BookStoreImage"
    },
    "maxWidth": 539,
    "left": "10.1%",
    "shadow": false,
    "right": "68.12%",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "borderRadius": 0,
    "maxHeight": 539,
    "minHeight": 1,
    "id": "Image_38948EA8_2EF5_8B43_4189_ED0D81F9FCD9",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "class": "Image",
    "url": "skin/Image_38948EA8_2EF5_8B43_4189_ED0D81F9FCD9.png",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "43.22%",
    "minWidth": 1,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "cursor": "hand",
    "bottom": "72.87%",
    "rollOverIconURL": "skin/IconButton_39BB7C9F_2E8A_8F7D_41B0_3B04C265327D_rollover.png",
    "data": {
     "name": "BookStoreCloseBtn"
    },
    "left": "86.48%",
    "iconURL": "skin/IconButton_39BB7C9F_2E8A_8F7D_41B0_3B04C265327D.png",
    "shadow": false,
    "right": "10.31%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_39BB7C9F_2E8A_8F7D_41B0_3B04C265327D_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_39BB7C9F_2E8A_8F7D_41B0_3B04C265327D",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_383600A1_2EF7_9744_41B0_AAB50135347D, false, 0, null, null, false); this.setComponentVisibility(this.Image_38948EA8_2EF5_8B43_4189_ED0D81F9FCD9, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_39BB7C9F_2E8A_8F7D_41B0_3B04C265327D, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "22.92%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "20.07%",
    "shadowHorizontalLength": 2,
    "paddingLeft": 40,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "shadowSpread": 1,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "borderRadius": 10,
    "minHeight": 1,
    "data": {
     "name": "TheatreText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_37E5A838_2E8E_9743_41A4_19FEEB377C9E",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "7.87%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u4ea4\u5927\u6f14\u85dd\u5ef3</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u967d\u660e\u4ea4\u901a\u5927\u5b78\u6f14\u85dd\u5ef3\u4f4d\u65bc\u570b\u7acb\u967d\u660e\u4ea4\u901a\u5927\u5b78\u65b0\u7af9\u5149\u5fa9\u6821\u5340-\u5b78\u751f\u6d3b\u52d5\u4e2d\u5fc3\u4e8c\u6a13\uff08\u65b0\u7af9\u5e02\u5927\u5b78\u8def1001\u865f\uff09\uff0c\u7ba1\u7406\u55ae\u4f4d\u70ba\u967d\u660e\u4ea4\u901a\u5927\u5b78\u85dd\u6587\u4e2d\u5fc3\uff0c\u6709\u5169\u4f4d\u821e\u53f0\u76e3\u7763\uff08\u517c\u7406\u4ea4\u5927\u85dd\u8853\u5b63\u7bc0\u76ee\u696d\u52d9\uff09\uff0c\u4e26\u7531\u5287\u5834\u52a9\u7406\u5718\u968a\u5354\u52a9\u7ba1\u7406\u4f7f\u7528\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u672c\u5ef3\u821e\u53f0\u5f62\u5f0f\u70ba\u93e1\u6846\u821e\u53f0\uff0c\u93e1\u6846\u7d04 12M\u5bec*6M\u9ad8\uff0811.85M\u5bec*6.24M\u9ad8\uff09\uff0c\u4ee5\u5e03\u5e55\u7cfb\u7d71\u906e\u64cb\u5f8c\uff0c\u4e00\u822c\u4f7f\u7528\u7bc4\u570d\u70ba 9M\u6df1 * 8M\u5bec * 5M\u9ad8\u3002\u9ed1\u8272\u6728\u982d\u5730\u677f\u3002\u914d\u5099 7 \u67b6\u79fb\u52d5\u5f0f\u53cd\u97ff\u677f\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u56e0\u5de6\u53f3\u821e\u53f0\u3001\u5f8c\u53f0\u53ca\u4f11\u606f\u5ba4\u53ef\u5229\u7528\u7a7a\u9593\u4e0d\u5927\uff0c\u4e26\u4e0d\u9069\u5408\u5927\u578b\u6f14\u51fa\u7de8\u5236\u3002\u4e0a\u4e0b\u5169\u5c64\u5171 232 \u5e2d\u5ea7\u4f4d\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "shadowBlurRadius": 7,
    "backgroundOpacity": 0.91
   },
   {
    "bottom": "25.99%",
    "data": {
     "name": "TheatreImage"
    },
    "maxWidth": 866,
    "left": "7.01%",
    "shadow": false,
    "right": "61.91%",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "borderRadius": 0,
    "maxHeight": 679,
    "minHeight": 1,
    "id": "Image_385D3952_2E8E_89C7_41C2_00C0BB21C465",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "class": "Image",
    "url": "skin/Image_385D3952_2E8E_89C7_41C2_00C0BB21C465.png",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "50.62%",
    "minWidth": 1,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "cursor": "hand",
    "bottom": "85.05%",
    "rollOverIconURL": "skin/IconButton_3948B48C_2E8A_BF43_41A4_AB2E386C8674_rollover.png",
    "data": {
     "name": "TheatreCloseBtn"
    },
    "left": "86.58%",
    "iconURL": "skin/IconButton_3948B48C_2E8A_BF43_41A4_AB2E386C8674.png",
    "shadow": false,
    "right": "10.21%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_3948B48C_2E8A_BF43_41A4_AB2E386C8674_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_3948B48C_2E8A_BF43_41A4_AB2E386C8674",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_37E5A838_2E8E_9743_41A4_19FEEB377C9E, false, 0, null, null, false); this.setComponentVisibility(this.Image_385D3952_2E8E_89C7_41C2_00C0BB21C465, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_3948B48C_2E8A_BF43_41A4_AB2E386C8674, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "10.74%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "paddingLeft": 40,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "shadowSpread": 1,
    "borderSize": 0,
    "scrollBarWidth": 10,
    "borderRadius": 10,
    "minHeight": 1,
    "data": {
     "name": "OfficeText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_37897A09_2E9A_8B45_41AB_7D7B8A32C91B",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "30.63%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u8ab2\u5916\u6d3b\u52d5\u8f14\u5c0e\u7d44</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u4e3b\u8981\u8ca0\u8cac\u7d44\u7e54\u7ba1\u7406\u5b78\u751f\u6240\u6210\u7acb\u7684\u793e\u5718\uff0c\u53e6\u5916\u6709\u9700\u79df\u501f\u5834\u5730\u4e5f\u662f\u5728\u9019\u88e1\u7533\u8acb\uff0c\u9664\u4e86\u793e\u5718\u4e4b\u5916\uff0c\u6821\u5712\u5167\u7684\u4e00\u4e9b\u5927\u578b\u6d3b\u52d5\u4e5f\u5e7e\u4e4e\u90fd\u662f\u8ab2\u6d3b\u7d44\u5305\u8fa6\u3002</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "shadowBlurRadius": 7,
    "backgroundOpacity": 0.91
   },
   {
    "cursor": "hand",
    "shadow": false,
    "rollOverIconURL": "skin/IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A_rollover.png",
    "data": {
     "name": "OfficeCloseBtn"
    },
    "iconURL": "skin/IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A.png",
    "right": "10.36%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A_pressed.png",
    "borderRadius": 0,
    "width": "2.95%",
    "minHeight": 0,
    "id": "IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_37897A09_2E9A_8B45_41AB_7D7B8A32C91B, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_36CEAA02_2E9B_8B47_41A6_73663A26602A, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "height": "4.28%",
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "33.38%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "shadowBlurRadius": 7,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "borderSize": 0,
    "shadowSpread": 1,
    "borderRadius": 10,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "data": {
     "name": "UnionText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_3974A175_2E9D_99CD_4189_3A794AA96B9D",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "7.87%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u5b78\u751f\u806f\u5408\u6703</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u5b78\u751f\u806f\u5408\u6703\u4e3b\u8981\u5de5\u4f5c\u70ba\u5354\u52a9\u7ba1\u7406\u793e\u5718\u3001\u7cfb\u5b78\u6703\u3001\u5730\u5340\u53cb\u6703\uff0c\u4ee5\u53ca\u8209\u8fa6\u6821\u5167\u5927\u578b\u6d3b\u52d5\uff0c\u8af8\u5982\u6821\u5712\u6f14\u5531\u6703\u3001\u6e05\u4ea4\u8349\u5730\u97f3\u6a02\u5b63\u3001\u540d\u4eba\u6f14\u8b1b\u3001\u4f01\u5283\u7af6\u8cfd\u3001\u6821\u5916\u53c3\u8a2a\u7b49\u3002\u5b78\u806f\u6703\u5c31\u50cf\u662f\u540c\u5b78\u5011\u5728\u4ea4\u901a\u5927\u5b78\u7684\u5bb6\u4eba\uff0c\u6211\u5011\u5305\u8fa6\u4ea4\u5927\u5b78\u751f\u751f\u6d3b\u4e2d\u7684\u5927\u5c0f\u4e8b\u52d9\uff0c\u50cf\u6691\u5047\u5bc4\u767c\u7684\u65b0\u751f\u5305\uff0c\u5c31\u662f\u5b78\u806f\u6703\u8a2d\u8a08\u8207\u63d0\u4f9b\u7d66\u65b0\u751f\u5011\u7684\u91cd\u8981\u8cc7\u8a0a\u6574\u7406\uff0c\u5e0c\u671b\u80fd\u5728\u8209\u8fa6\u5404\u5f0f\u5404\u6a23\u6821\u5712\u6d3b\u52d5\u4e4b\u969b\uff0c\u6210\u70ba\u5b78\u751f\u8207\u5b78\u6821\u4e4b\u9593\u6e9d\u901a\u7684\u6a4b\u6a11\u3002\u6b61\u8fce\u5c0d\u53c3\u8207\u6d3b\u52d5\u3001\u62d3\u5c55\u4eba\u969b\u95dc\u4fc2\u3001\u5e6b\u52a9\u540c\u5b78\u6709\u8208\u8da3\u7684\u65b0\u751f\u5011\uff0c\u90fd\u80fd\u5920\u52a0\u5165\u5b78\u806f\u6703\uff0c\u6210\u70ba\u6211\u5011\u7684\u4e00\u4efd\u5b50\u3002</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "paddingLeft": 40,
    "backgroundOpacity": 0.91
   },
   {
    "bottom": "30.06%",
    "data": {
     "name": "UnionImage"
    },
    "maxWidth": 866,
    "left": "12.36%",
    "shadow": false,
    "right": "38.14%",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "borderRadius": 0,
    "maxHeight": 322,
    "minHeight": 1,
    "id": "Image_3838397D_2E9F_89BD_41BF_1956977297A3",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "class": "Image",
    "url": "skin/Image_3838397D_2E9F_89BD_41BF_1956977297A3.png",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "43.07%",
    "minWidth": 1,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "cursor": "hand",
    "bottom": "84.69%",
    "rollOverIconURL": "skin/IconButton_36C78C90_2E9E_8F43_41B8_65ACF86ED5A4_rollover.png",
    "data": {
     "name": "UnionCloseBtn"
    },
    "left": "86.49%",
    "iconURL": "skin/IconButton_36C78C90_2E9E_8F43_41B8_65ACF86ED5A4.png",
    "shadow": false,
    "right": "10.56%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_36C78C90_2E9E_8F43_41B8_65ACF86ED5A4_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_36C78C90_2E9E_8F43_41B8_65ACF86ED5A4",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_3974A175_2E9D_99CD_4189_3A794AA96B9D, false, 0, null, null, false); this.setComponentVisibility(this.Image_3838397D_2E9F_89BD_41BF_1956977297A3, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_36C78C90_2E9E_8F43_41B8_65ACF86ED5A4, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "10.74%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "shadowBlurRadius": 7,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "borderSize": 0,
    "shadowSpread": 1,
    "borderRadius": 10,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "data": {
     "name": "BarberText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_39528314_2E9D_9943_41B5_4B7D1359A276",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "30.63%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u7406\u9aee\u90e8</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u5728\u9019\u88e1\u5b78\u751f\u80fd\u7528\u6700\u4fbf\u5b9c\u7684\u50f9\u683c\u4f86\u526a\u982d\u9aee\uff0c\u9593\u55ae\u7684\u5e73\u982d\u6216\u662f\u4fee\u7aef\u90fd\u6c92\u554f\u984c\uff0c\u53ea\u662f\u5982\u679c\u60f3\u8981\u7279\u5225\u7684\u9020\u578b\u53ef\u80fd\u9084\u662f\u9700\u8981\u53bb\u5916\u9762\u7406\u9aee\u9ede\u526a\u6703\u6bd4\u8f03\u5408\u9069\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u71df\u696d\u65e5\u671f\uff1a\u5e73\u65e59:00~20:00 \u5047\u65e5 9:00~20:00</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "paddingLeft": 40,
    "backgroundOpacity": 0.91
   },
   {
    "cursor": "hand",
    "shadow": false,
    "rollOverIconURL": "skin/IconButton_36C2242D_2E9B_9F5D_41B6_423E89ED9EB5_rollover.png",
    "data": {
     "name": "BarberCloseBtn"
    },
    "iconURL": "skin/IconButton_36C2242D_2E9B_9F5D_41B6_423E89ED9EB5.png",
    "right": "10.66%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_36C2242D_2E9B_9F5D_41B6_423E89ED9EB5_pressed.png",
    "borderRadius": 0,
    "width": "3.11%",
    "minHeight": 0,
    "id": "IconButton_36C2242D_2E9B_9F5D_41B6_423E89ED9EB5",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_39528314_2E9D_9943_41B5_4B7D1359A276, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_36C2242D_2E9B_9F5D_41B6_423E89ED9EB5, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "height": "4.5%",
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "33.82%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "shadowBlurRadius": 7,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "borderSize": 0,
    "shadowSpread": 1,
    "borderRadius": 10,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "data": {
     "name": "Barber2Text"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_39BCE106_2E9A_994C_41AB_765BC0EAC2B0",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "30.63%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u7f8e\u9aee\u90e8</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u5982\u679c\u6709\u9700\u8981\u4e0d\u4e00\u6a23\u7684\u9aee\u578b\u53ef\u4ee5\u4f86\u9019\u88e1\u5149\u9867\u5149\u9867\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u71df\u696d\u65e5\u671f\uff1a\u5e73\u65e59:00~20:00 \u5047\u65e5 9:00~17:00</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "paddingLeft": 40,
    "backgroundOpacity": 0.91
   },
   {
    "cursor": "hand",
    "bottom": "62.47%",
    "rollOverIconURL": "skin/IconButton_392462D6_2E96_B8CF_41C4_FEB361798A42_rollover.png",
    "data": {
     "name": "Barber2CloseBtn"
    },
    "left": "86.48%",
    "iconURL": "skin/IconButton_392462D6_2E96_B8CF_41C4_FEB361798A42.png",
    "shadow": false,
    "right": "10.36%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_392462D6_2E96_B8CF_41C4_FEB361798A42_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_392462D6_2E96_B8CF_41C4_FEB361798A42",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_39BCE106_2E9A_994C_41AB_765BC0EAC2B0, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_392462D6_2E96_B8CF_41C4_FEB361798A42, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "33.1%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "shadowBlurRadius": 7,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "borderSize": 0,
    "shadowSpread": 1,
    "borderRadius": 10,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "data": {
     "name": "PoolTableText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_23469FD0_2EE4_38BD_418B_F4AC0BDEDE25",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "20.68%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u649e\u7403\u5ba4</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u5982\u679c\u6709\u53c3\u52a0\u649e\u7403\u793e\uff0c\u57fa\u672c\u4e0a\u53ef\u4ee5\u96a8\u6642\u4f86\u9019\u88e1\u6d88\u78e8\u6642\u9593\uff0c\u4f46\u662f\u5982\u679c\u4e0d\u662f\u820d\u54e1\u7684\u8a71\u53ef\u80fd\u5c31\u5fc5\u9808\u627e\u8a8d\u8b58\u7684\u649e\u7403\u793e\u54e1\u624d\u80fd\u4f7f\u7528\u5834\u5730\u3002</SPAN></SPAN></DIV></div>",
    "minWidth": 1,
    "paddingLeft": 40,
    "backgroundOpacity": 0.91
   },
   {
    "bottom": "27.48%",
    "data": {
     "name": "PoolTableImage"
    },
    "maxWidth": 470,
    "left": "10.8%",
    "shadow": false,
    "right": "58.95%",
    "paddingTop": 0,
    "scaleMode": "fit_inside",
    "borderSize": 0,
    "borderRadius": 0,
    "maxHeight": 352,
    "minHeight": 1,
    "id": "Image_20D03045_2EE4_27A7_41C3_9FD46DBF60A8",
    "horizontalAlign": "center",
    "paddingRight": 0,
    "class": "Image",
    "url": "skin/Image_20D03045_2EE4_27A7_41C3_9FD46DBF60A8.png",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "42.78%",
    "minWidth": 1,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "cursor": "hand",
    "bottom": "72.79%",
    "rollOverIconURL": "skin/IconButton_20ED0B77_2EEC_3863_41B8_614E57638AA6_rollover.png",
    "data": {
     "name": "PoolTableCloseBtn"
    },
    "left": "86.75%",
    "iconURL": "skin/IconButton_20ED0B77_2EEC_3863_41B8_614E57638AA6.png",
    "shadow": false,
    "right": "10.2%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_20ED0B77_2EEC_3863_41B8_614E57638AA6_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_20ED0B77_2EEC_3863_41B8_614E57638AA6",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_23469FD0_2EE4_38BD_418B_F4AC0BDEDE25, false, 0, null, null, false); this.setComponentVisibility(this.Image_20D03045_2EE4_27A7_41C3_9FD46DBF60A8, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_20ED0B77_2EEC_3863_41B8_614E57638AA6, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "23.29%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "shadowBlurRadius": 7,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "borderSize": 0,
    "shadowSpread": 1,
    "borderRadius": 10,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "data": {
     "name": "DanceText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_3FA772FA_2EEC_E86D_4197_36F3A016CF80",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "30.63%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>\u93e1\u524d\u5ee3\u5834</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u9019\u88e1\u5e38\u6703\u6709\u71b1\u821e\u793e\u7684\u540c\u5b78\u5728\u9019\u88e1\u7df4\u7fd2\uff0c\u6216\u662f\u793e\u5718\u9700\u8981\u8df3\u821e\u7df4\u5287\u6642\u4e5f\u6703\u5728\u9019\u88e1\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "paddingLeft": 40,
    "backgroundOpacity": 0.91
   },
   {
    "cursor": "hand",
    "bottom": "62.19%",
    "rollOverIconURL": "skin/IconButton_3E062EAE_2EEF_F8E5_41C4_C10658C1F3BB_rollover.png",
    "data": {
     "name": "DanceBtn"
    },
    "left": "86.44%",
    "iconURL": "skin/IconButton_3E062EAE_2EEF_F8E5_41C4_C10658C1F3BB.png",
    "shadow": false,
    "right": "10.35%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_3E062EAE_2EEF_F8E5_41C4_C10658C1F3BB_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_3E062EAE_2EEF_F8E5_41C4_C10658C1F3BB",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_3FA772FA_2EEC_E86D_4197_36F3A016CF80, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_3E062EAE_2EEF_F8E5_41C4_C10658C1F3BB, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "33.46%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   },
   {
    "shadowVerticalLength": 2,
    "bottom": "24.5%",
    "shadowHorizontalLength": 2,
    "shadowBlurRadius": 7,
    "left": "8.3%",
    "shadow": true,
    "scrollBarMargin": 2,
    "shadowColor": "#000000",
    "right": "8.3%",
    "paddingTop": 20,
    "borderSize": 0,
    "shadowSpread": 1,
    "borderRadius": 10,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "data": {
     "name": "FloorText"
    },
    "backgroundColorDirection": "vertical",
    "id": "HTMLText_3E794611_2EEB_EBBF_41C1_776CA1CFD3F7",
    "scrollBarOpacity": 0.5,
    "shadowOpacity": 0.19,
    "paddingRight": 62,
    "scrollBarColor": "#000000",
    "class": "HTMLText",
    "backgroundColorRatios": [
     0.73,
     1
    ],
    "backgroundColor": [
     "#FFFFFF",
     "#CCCCCC"
    ],
    "paddingBottom": 10,
    "visible": false,
    "propagateClick": false,
    "top": "30.63%",
    "scrollBarVisible": "rollOver",
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff6600;font-size:36px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\"><B>B1\u6728\u88fd\u5730\u677f\u5340</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:18px;font-family:'\u9ed1\u9ad4-\u7e41 \u4e2d\u9ed1';\">\u4e3b\u8981\u662f\u528d\u9053\u793e\u9084\u6709\u71b1\u821e\u793e\u9700\u8981\u7df4\u7fd2\u5730\u677f\u52d5\u4f5c\u6703\u4f86\u7684\u5730\u65b9\u3002</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:18px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
    "minWidth": 1,
    "paddingLeft": 40,
    "backgroundOpacity": 0.91
   },
   {
    "cursor": "hand",
    "bottom": "62.33%",
    "rollOverIconURL": "skin/IconButton_3FEF8B75_2EE4_7867_41C0_1424C6D7EF7F_rollover.png",
    "data": {
     "name": "FloorBtn"
    },
    "left": "86.34%",
    "iconURL": "skin/IconButton_3FEF8B75_2EE4_7867_41C0_1424C6D7EF7F.png",
    "shadow": false,
    "right": "10.1%",
    "paddingTop": 0,
    "borderSize": 0,
    "pressedIconURL": "skin/IconButton_3FEF8B75_2EE4_7867_41C0_1424C6D7EF7F_pressed.png",
    "borderRadius": 0,
    "minHeight": 0,
    "id": "IconButton_3FEF8B75_2EE4_7867_41C0_1424C6D7EF7F",
    "mode": "push",
    "horizontalAlign": "center",
    "click": "this.setComponentVisibility(this.HTMLText_3E794611_2EEB_EBBF_41C1_776CA1CFD3F7, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_3FEF8B75_2EE4_7867_41C0_1424C6D7EF7F, false, 0, null, null, false)",
    "paddingRight": 0,
    "class": "IconButton",
    "paddingBottom": 0,
    "visible": false,
    "propagateClick": false,
    "verticalAlign": "middle",
    "top": "33.46%",
    "transparencyActive": true,
    "minWidth": 0,
    "paddingLeft": 0,
    "backgroundOpacity": 0
   }
  ],
  "scrollBarOpacity": 0.5,
  "horizontalAlign": "left",
  "paddingRight": 0,
  "scrollBarColor": "#000000",
  "class": "Container",
  "creationPolicy": "inAdvance",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "top",
  "top": "2.45%",
  "scrollBarVisible": "rollOver",
  "overflow": "scroll",
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "7.82%",
  "data": {
   "name": "IconButton8393"
  },
  "maxWidth": 348,
  "left": "90%",
  "iconURL": "skin/IconButton_3C6A2990_2F08_CF03_41BC_085F33920E92.png",
  "shadow": false,
  "right": "6.04%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 348,
  "minHeight": 1,
  "id": "IconButton_3C6A2990_2F08_CF03_41BC_085F33920E92",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "86.02%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "87.44%",
  "data": {
   "name": "IconButton9061"
  },
  "maxWidth": 348,
  "left": "90.1%",
  "iconURL": "skin/IconButton_3B1432D6_2F09_BD0F_41C3_7C9DB1DE3395.png",
  "shadow": false,
  "right": "5.94%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 348,
  "minHeight": 1,
  "id": "IconButton_3B1432D6_2F09_BD0F_41C3_7C9DB1DE3395",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "6.4%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "7.82%",
  "data": {
   "name": "IconButton10044"
  },
  "maxWidth": 348,
  "left": "9.06%",
  "iconURL": "skin/IconButton_3B1BA5B2_2F0F_4707_41C1_54A687DACE22.png",
  "shadow": false,
  "right": "86.98%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 348,
  "minHeight": 1,
  "id": "IconButton_3B1BA5B2_2F0F_4707_41C1_54A687DACE22",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "86.02%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 },
 {
  "cursor": "hand",
  "bottom": "7.82%",
  "data": {
   "name": "IconButton10941"
  },
  "maxWidth": 348,
  "left": "3.25%",
  "iconURL": "skin/IconButton_3B381C0A_2F08_C507_41C4_CACB35075087.png",
  "shadow": false,
  "right": "92.79%",
  "paddingTop": 0,
  "borderSize": 0,
  "borderRadius": 0,
  "maxHeight": 348,
  "minHeight": 1,
  "id": "IconButton_3B381C0A_2F08_C507_41C4_CACB35075087",
  "mode": "push",
  "horizontalAlign": "center",
  "paddingRight": 0,
  "class": "IconButton",
  "paddingBottom": 0,
  "propagateClick": false,
  "verticalAlign": "middle",
  "top": "86.02%",
  "transparencyActive": false,
  "minWidth": 1,
  "paddingLeft": 0,
  "backgroundOpacity": 0
 }
], 
 "start": "this.playAudioList([this.audio_22B5B30F_30DD_F04E_41B3_55D39BD59E71]); this.init(); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_3B1BA5B2_2F0F_4707_41C1_54A687DACE22].forEach(function(component) { component.set('visible', false); }) }",
 "shadow": false,
 "buttonEnterFullscreen": "this.IconButton_3B1BA5B2_2F0F_4707_41C1_54A687DACE22",
 "scrollBarMargin": 2,
 "desktopMipmappingEnabled": false,
 "paddingTop": 0,
 "mobileMipmappingEnabled": false,
 "data": {
  "name": "Player445"
 },
 "scrollBarWidth": 10,
 "layout": "absolute",
 "borderSize": 0,
 "mouseWheelEnabled": true,
 "vrPolyfillScale": 1,
 "borderRadius": 0,
 "contentOpaque": false,
 "minHeight": 20,
 "width": "100%",
 "gap": 10,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "backgroundPreloadEnabled": true,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "class": "Player",
 "paddingBottom": 0,
 "propagateClick": false,
 "buttonMute": "this.IconButton_3C6A2990_2F08_CF03_41BC_085F33920E92",
 "scripts": {
  "unregisterKey": function(key){  delete window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } return this.mainPlayList.get('items')[index]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var caller = playList.get('items')[index].get('media').get('id'); var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } }; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); }
 },
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "paddingLeft": 0,
 "height": "100%",
 "minWidth": 20
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
