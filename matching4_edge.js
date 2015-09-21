/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.10.2.js",
            js+"jquery-ui-1.10.4.custom.js",
            js+"jquery-ui-1.10.4.custom.min.js",
            js+"main.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['0px', '0px', '1030px', '79px', 'auto', 'auto'],
                            borderRadius: ["12px", "12px", "12px", "12px 12px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(114,114,114,1.00)","solid"]
                        },
                        {
                            id: 'cajatxt1',
                            type: 'text',
                            rect: ['15px', '12px', '991px', '69px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; color: rgb(59, 59, 59);\">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.&nbsp;</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "18px", "", "none"]
                        },
                        {
                            id: 'cajatxt2',
                            type: 'text',
                            rect: ['10px', '89px', '357px', '64px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"font-size: 17px; font-weight: 700; color: rgb(27, 142, 135);\">Intruccion:&nbsp;</span><span style=\"font-size: 17px; color: rgb(82, 82, 82);\">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.</span> </p>",
                            font: ['source-sans-pro, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["0px", "0px", "16px", "", ""]
                        },
                        {
                            id: 'contenedor_padre',
                            symbolName: 'contenedor_padre',
                            type: 'rect',
                            rect: ['485', '153', '252', '223', 'auto', 'auto']
                        },
                        {
                            id: 'obj1_txt',
                            symbolName: 'obj1_txt',
                            type: 'rect',
                            rect: ['358', '153', '152', '45', 'auto', 'auto']
                        },
                        {
                            id: 'obj2_txt',
                            symbolName: 'obj2_txt',
                            type: 'rect',
                            rect: ['358', '198', '152', '45', 'auto', 'auto']
                        },
                        {
                            id: 'obj3_txt',
                            symbolName: 'obj3_txt',
                            type: 'rect',
                            rect: ['358', '242', '152', '45', 'auto', 'auto']
                        },
                        {
                            id: 'obj4_txt',
                            symbolName: 'obj4_txt',
                            type: 'rect',
                            rect: ['358', '287', '152', '45', 'auto', 'auto']
                        },
                        {
                            id: 'obj5_txt',
                            symbolName: 'obj5_txt',
                            type: 'rect',
                            rect: ['357', '331', '152', '45', 'auto', 'auto']
                        },
                        {
                            id: 'Submit',
                            symbolName: 'Submit',
                            type: 'rect',
                            rect: ['841px', '335px', 'undefined', 'undefined', 'auto', 'auto'],
                            cursor: 'pointer'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1032px', '394px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Submit}",
                            '841px',
                            '841px'
                        ],
                        [
                            "eid3",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Submit}",
                            '335px',
                            '335px'
                        ]
                    ]
                }
            },
            "obj1_txt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'opc1',
                            rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                        },
                        {
                            rect: ['17px', '7px', '98px', '28px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(0,0,0,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">​Opcion 1</span></p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '152px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj2_txt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'opc2',
                            rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                        },
                        {
                            rect: ['18px', '7px', '107px', '25px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Opcion 2</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '152px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj3_txt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'opc3',
                            rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                        },
                        {
                            rect: ['19px', '8px', '101px', '27px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Opcion 3</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '152px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj4_txt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'opc4',
                            rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                        },
                        {
                            rect: ['19px', '9px', '97px', '23px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Opcion 4</p>',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '152px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj5_txt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'opc5',
                            rect: ['0px', '0px', '152px', '45px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta1.png', '0px', '0px']
                        },
                        {
                            rect: ['21px', '9px', '97px', '28px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(255,255,255,1)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Opcion 5</p>',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '152px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj1_par": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                            userClass: 'parte3',
                            id: 'par1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                        },
                        {
                            rect: ['26px', '11px', '216px', '26px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 1</span></p>',
                            id: 'txt1',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj2_par": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                            userClass: 'parte3',
                            id: 'par2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                        },
                        {
                            rect: ['26px', '10px', '216px', '26px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                            id: 'txt2',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj3_par": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                            userClass: 'parte3',
                            id: 'par3',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                        },
                        {
                            rect: ['24px', '8px', '216px', '26px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                            id: 'txt3',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj4_par": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                            userClass: 'parte3',
                            id: 'par4',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                        },
                        {
                            rect: ['23px', '10px', '216px', '26px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                            id: 'txt4',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "obj5_par": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '250px', '45px', 'auto', 'auto'],
                            userClass: 'parte3',
                            id: 'par5',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/etiqueta2.png', '0px', '0px']
                        },
                        {
                            rect: ['20px', '10px', '216px', '26px', 'auto', 'auto'],
                            font: ['source-sans-pro, sans-serif', [24, 'px'], 'rgba(82,82,82,1.00)', '700', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 16px; font-weight: 400;\">Pareja 2</span></p>',
                            id: 'txt5',
                            textStyle: ['', '', '23px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '250px', '45px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "contenedor_padre": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'obj1_par',
                            symbolName: 'obj1_par',
                            rect: ['0px', '0px', '250', '45', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'obj2_par',
                            symbolName: 'obj2_par',
                            rect: ['0px', '45px', '250', '45', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'obj3_par',
                            symbolName: 'obj3_par',
                            rect: ['2px', '89px', '250', '45', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'obj4_par',
                            symbolName: 'obj4_par',
                            rect: ['2px', '134px', '250', '45', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'obj5_par',
                            symbolName: 'obj5_par',
                            rect: ['2px', '178px', '250', '45', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '252px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Submit": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-24px', '3px', '213px', '31px', 'auto', 'auto'],
                            borderRadius: ['23px', '23px', '23px', '23px 23px'],
                            fill: ['rgba(192,192,192,1)', [270, [['rgba(182,154,212,1.00)', 50], ['rgba(158,122,196,1.00)', 50]]]],
                            c: [
                            {
                                type: 'text',
                                rect: ['60px', '-2px', '94px', '31px', 'auto', 'auto'],
                                id: 'TextCopy3',
                                text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-family: source-sans-pro, sans-serif; font-weight: 600; color: rgb(255, 255, 255);\">Enviar</span></p>',
                                textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 1],
                                font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '38px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "activado": 0,
                        "desactivado": 500
                    },
                    data: [
                        [
                            "eid13",
                            "background-image",
                            0,
                            500,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]],
                            [270,[['rgba(182,154,212,1.00)',50],['rgba(158,122,196,1.00)',50]]]
                        ],
                        [
                            "eid14",
                            "background-image",
                            500,
                            500,
                            "linear",
                            "${RoundRect}",
                            [270,[['rgba(182,154,212,1.00)',50],['rgba(158,122,196,1.00)',50]]],
                            [270,[['rgba(111,67,158,1.00)',50],['rgba(84,53,118,1.00)',50]]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("matching4_edgeActions.js");
})("EDGE-18191759");
