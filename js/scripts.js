document.addEventListener('DOMContentLoaded', () => {
    const hotRoutesList = document.getElementById('hot-routes-list');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const routeDetails = document.getElementById('route-details');
    const routeName = document.getElementById('route-name');
    const routeImage = document.getElementById('route-image'); // 只保留方向一的图片
    const imageContainer = document.getElementById('image-container');

    // 方向一的元素
    const startPoint1 = document.getElementById('start-point-1');
    const endPoint1 = document.getElementById('end-point-1');
    const firstBus1 = document.getElementById('first-bus-1');
    const lastBus1 = document.getElementById('last-bus-1');
    const fare1 = document.getElementById('fare-1');
    const departureTimes1 = document.getElementById('departure-times-1');

    // 方向二的元素
    const startPoint2 = document.getElementById('start-point-2');
    const endPoint2 = document.getElementById('end-point-2');
    const firstBus2 = document.getElementById('first-bus-2');
    const lastBus2 = document.getElementById('last-bus-2');
    const fare2 = document.getElementById('fare-2');
    const departureTimes2 = document.getElementById('departure-times-2');

    // 模拟公交线路数据（包含两个方向和图片路径）
    const busRoutes = {
        1: {
            name: '1路',
            direction1: {
                start: '鹿山小区',
                end: '列宁街',
                firstBus: '05:50',
                lastBus: '21:05',
                fare: '1元',
                times: '5:50  6:10     6:50       7:10       7:50       8:10    8:50   9:10      9:50  10:10    10:50  11:10    11:50 12:10     12:50  13:10     13:50  14:10     14:50  15:10        15:50     16:10     16:50     17:10     17:50     18:10     19:00     20:00     21:05',
                isOperational: true,
                imageUrl: 'images/1路.png'
            },
            direction2: {
                start: '列宁街',
                end: '鹿山小区',
                firstBus: '05:45',
                lastBus: '20:30 ',
                fare: '1元',
                times: '5:45  6:17      6:37       7:17       7:37       8:17       8:37       9:17   9:37     10:17     10:37  11:17    11:37 12:17    12:37       13:17  13:37 14:17     14:37 15:17     15:37     16:17     16:37     17:17     17:37     18:15     18:45     19:30     20:30 ',
                isOperational: true,
            }
        },
        2: {
            name: '2路',
            direction1: {
                start: '鹿山小区',
                end: '967医院',
                firstBus: '6:30',
                lastBus: '17:30',
                fare: '1元',
                times: '6:30	7:30	8:30	9:30	10:30	11:30	12:30	13:30	14:30	15:30	16:30	17:30',
                isOperational: true,
                imageUrl: 'images/2路.png'
            },
            direction2: {
                start: '967医院',
                end: '鹿山小区',
                firstBus: '6:00',
                lastBus: '18:00',
                fare: '1元',
                times: '6:00 6:57	7:57	8:57	9:57	10:57	11:57	12:57	13:57	14:57	15:57	17:00	18:00',
                isOperational: true,
            }
        },
        3: {
            name: '3路',
            direction1: {
                start: '元宝坊',
                end: '列宁街',
                firstBus: '6:20',
                lastBus: '20:30',
                fare: '1元',
                times: '6:20	6:40	7:20	7:40	8:20	8:40	9:20	9:40	10:20	10:40	11:20	11:40	12:20	12:40	13:20	13:40	14:20	14:40	15:20	15:40	16:20	16:40	17:20	17:40	18:20	18:40	19:26	20:30',
                isOperational: true,
                imageUrl: 'images/3路.png'
            },
            direction2: {
                start: '列宁街',
                end: '元宝坊',
                firstBus: '6:07',
                lastBus: '21:00',
                fare: '1元',
                times: '6:07	6:47	7:07	7:47	8:07	8:47	9:07	9:47	10:07	10:47	11:07	11:47	12:07	12:47	13:07	13:47	14:07	14:47	15:07	15:47	16:07	16:47	17:07	17:47	18:10	19:10	20:00	21:00',
                isOperational: true,
            }
        },
        4: {
            name: '4路',
            direction1: {
                start: '元宝坊',
                end: '967医院',
                firstBus: '6:00',
                lastBus: '18:00',
                fare: '1元',
                times: '6:00	7:00	8:00	9:00	10:00	11:00	12:00	13:00	14:00	15:00	16:00	17:00	18:00',
                isOperational: true,
                imageUrl: 'images/4路.png'
            },
            direction2: {
                start: '967医院',
                end: '元宝坊',
                firstBus: '6:30',
                lastBus: '18:30',
                fare: '1元',
                times: '6:30	7:27	8:27	9:27	10:27	11:27	12:27	13:27	14:27	15:27	16:27	17:30	18:30',
                isOperational: true,
            }
        },
        5: {
            name: '5路',
            direction1: {
                start: '鹿山小区',
                end: '石板桥',
                firstBus: '5:55',
                lastBus: '18:35',
                fare: '1元',
                times: '5:55	6:15	6:35	6:55	7:15	7:35	7:55	8:15	8:35	8:55	9:15	9:35	9:55	10:15	10:35	10:55	11:25	11:55	12:15	12:35	12:55	13:15	13:35	13:55	14:15	14:35	14:55	15:15	15:35	15:55	16:15	16:35	16:55	17:15	17:35	17:55	18:15	18:35',
                isOperational: true,
                imageUrl: 'images/5路.png'
            },
            direction2: {
                start: '石板桥',
                end: '鹿山小区',
                firstBus: '5:55',
                lastBus: '18:45',
                fare: '1元',
                times: '5:55	6:25	6:45	7:05	7:25	7:45	8:05	8:25	8:45	9:05	9:25	9:45	10:05	10:25	10:45	11:05	11:25	11:55	12:25	12:45	13:05	13:25	13:45	14:05	14:25	14:45	15:05	15:25	15:45	16:05	16:25	16:45	17:05	17:25	17:45	18:05	18:25	18:45',
                isOperational: true,
            }
        },
        6: {
            name: '6路',
            direction1: {
                start: '鹿山小区',
                end: '列宁街',
                firstBus: '6:05',
                lastBus: '18:55',
                fare: '1元',
                times: '6:05	6:25	6:45	7:05	7:25	7:45	8:05	8:25	8:45	9:05	9:25	9:45	10:05	10:25	10:45	11:05	11:25	11:45	12:05	12:25	12:45	13:05	13:25	13:45	14:05	14:25	14:45	15:05	15:25	15:45	16:05	16:25	16:45	17:05	17:25	17:45	18:05	18:25	18:55',
                isOperational: true,
                imageUrl: 'images/6路.png'
            },
            direction2: {
                start: '列宁街',
                end: '鹿山小区',
                firstBus: '5:50',
                lastBus: '18:55',
                fare: '1元',
                times: '5:50	6:10	6:35	6:55	7:15	7:35	7:55	8:15	8:35	8:55	9:15	9:35	9:55	10:15	10:35	10:55	11:15	11:35	11:55	12:15	12:35	12:55	13:15	13:35	13:55	14:15	14:35	14:55	15:15	15:35	15:55	16:15	16:35	16:55	17:15	17:35	17:55	18:15	18:35	18:55',
                isOperational: true,
            }
        },
        7: {
            name: '7路',
            direction1: {
                start: '鹿山小区',
                end: '水师营',
                firstBus: '6:05',
                lastBus: '17:05',
                fare: '1元',
                times: '6:05 7:05 8:05 9:05 10:05 11:05 12:05 13:05 14:05 15:05 16:05 17:05',
                isOperational: true,
                imageUrl: 'images/7路.png'
            },
            direction2: {
                start: '水师营',
                end: '鹿山小区',
                firstBus: '6:35',
                lastBus: '17:35',
                fare: '1元',
                times: '6:35 7:35 8:35 9:35 10:35 11:35 12:35 13:35 14:35  15:35  16:35 17:35',
                isOperational: true,
            }
        },
        8: {
            name: '8路',
            direction1: {
                start: '黄金社区',
                end: '水师营',
                firstBus: '7:15',
                lastBus: '17:15',
                fare: '1元',
                times: '7:15 8:30 9:15 10:15 13:15 16:15 17:15',
                isOperational: true,
                imageUrl: 'images/8路.png'
            },
            direction2: {
                start: '水师营',
                end: '黄金社区',
                firstBus: '6:45',
                lastBus: '16:45',
                fare: '1元',
                times: '6:45 8:00 9:00 9:45 10:45 13:45 16:45',
                isOperational: true,
            }
        },
        82: {
            name: '82路',
            direction1: {
                start: '鹿山小区',
                end: '水师营',
                firstBus: '6:00',
                lastBus: '21:05',
                fare: '1元',
                times: '6:00	6:15	6:30	6:45	7:00	7:15	7:30	7:45	8:00	8:15	8:30	8:45	9:00	9:15	9:30	9:45	10:00	10:15	10:30	10:45	11:00	11:15	11:30	11:45	12:00	12:15	12:30	12:45	13:00	13:15	13:30	13:45	14:00	14:15	14:30	14:45	15:00	15:15	15:30	15:45	16:00	16:15	16:30	16:45	17:00	17:15	17:30	17:45	18:00	18:20	18:40	19:00	20:05	20:25	21:05',
                isOperational: true,
                imageUrl: 'images/82路.png'
            },
            direction2: {
                start: '水师营',
                end: '鹿山小区',
                firstBus: '6:05',
                lastBus: '21:05',
                fare: '1元',
                times: '6:05	6:15	6:30	6:45	7:00	7:15	7:30	7:45	8:00	8:15	8:30	8:45	9:00	9:15	9:30	9:45	10:00	10:15	10:30	10:45	11:00	11:15	11:30	11:45	12:00	12:15	12:30	12:45	13:00	13:15	13:30	13:45	14:00	14:15	14:30	14:45	15:00	15:15	15:30	15:45	16:00	16:15	16:30	16:45	17:00	17:15	17:30	17:45	18:00	18:25	18:55	19:25	20:25	21:05',
                isOperational: true,
            }
        },
        9: {
            name: '9路',
            direction1: {
                start: '赵家沟',
                end: '水师营',
                firstBus: '6:30',
                lastBus: '17:35',
                fare: '1元',
                times: '6:30	7:00	7:30	8:10	8:35	9:10	9:35	10:35	11:35	12:35	13:35	14:35	15:35	16:35	17:35',
                isOperational: true,
                imageUrl: 'images/9路.png'
            },
            direction2: {
                start: '水师营',
                end: '赵家沟',
                firstBus: '7:00',
                lastBus: '18:05',
                fare: '1元',
                times: '7:00	7:30	8:00	8:40	9:05	9:40	10:05	11:05	12:05	13:05	14:05	15:05	16:05	17:05	18:05',
                isOperational: true,
            }
        },
        10: {
            name: '10路',
            direction1: {
                start: '967医院',
                end: '水师营',
                firstBus: '6:45',
                lastBus: '16:50',
                fare: '1元',
                times: '6:45	7:45	8:50	9:50	10:50	11:50	12:50	13:50	14:50	15:50	16:50',
                isOperational: true,
                imageUrl: 'images/10路.png'
            },
            direction2: {
                start: '水师营',
                end: '967医院',
                firstBus: '6:15',
                lastBus: '17:20',
                fare: '1元',
                times: '6:15 7:15  8:20     9:20     10:20    11:20     12:20     13:20     14:20     15:20     16:20     17:20',
                isOperational: true,
            }
        },
        11: {
            name: '11路',
            direction1: {
                start: '中学前（鹿山小区）',
                end: '中医院',
                firstBus: '6:35(鹿山小区)',
                lastBus: '17:55',
                fare: '1-2元【杨树沟分段】',
                times: '鹿山发6:35 7:05|中学前发7:55 8:45 9:35 10:25 12:05 13:45 14:35 15:25 16:15 17:05 17:55（7:05、7:55、15:25车次终点至新亚明）',
                isOperational: true,
                imageUrl: 'images/11路.png'
            },
            direction2: {
                start: '中医院',
                end: '中学前（鹿山小区）',
                firstBus: '8:45',
                lastBus: '18:45',
                fare: '1-2元【杨树沟分段】',
                times: '终点鹿山7:05 8:05|终点中学前8:45 9:35 10:25 11:15 12:55 14:35 15:25 16:15 17:05 17:55 18:45（8:05、8:45、16:15车次始发站为新亚明）',
                isOperational: true,
            }
        },
        12: {
            name: '12路',
            direction1: {
                start: '列宁街',
                end: '水师营',
                firstBus: '6:20',
                lastBus: '17:30',
                fare: '1元',
                times: '6:20 7:20 17:30',
                isOperational: true,
                imageUrl: 'images/12路.png'
            },
            direction2: {
                start: '水师营',
                end: '列宁街',
                firstBus: '6:50',
                lastBus: '18:00',
                fare: '1元',
                times: '6:50 7:50 18:00',
                isOperational: true,
            }
        },
        13: {
            name: '13路',
            direction1: {
                start: '潜艇博物馆',
                end: '967医院',
                firstBus: '6:45【周六周日节假日停发】',
                lastBus: '16:50【周六周日节假日停发】',
                fare: '1元',
                times: '6:45 16:50【周六周日节假日停发】',
                isOperational: true,
                imageUrl: 'images/13路.png'
            },
            direction2: {
                start: '967医院',
                end: '潜艇博物馆',
                firstBus: '7:15【周六周日节假日停发】',
                lastBus: '17:20【周六周日节假日停发】',
                fare: '1元',
                times: '7:15 17:20【周六周日节假日停发】',
                isOperational: true,
            }
        },
        14: {
            name: '14路',
            direction1: {
                start: '列宁街(中学前)',
                end: '铁山枢纽站',
                firstBus: '6:10(中学前)',
                lastBus: '17:20',
                fare: '1元',
                times: '6:10(中学前) 7:10（去进柏岚子三队、对庄沟）8:20（回进柏岚子三队） 9:00 10:20（回对庄沟---柏岚子三队） 11:30 13:00 15:10 16:20（回对庄沟---柏岚子三队）17:20',
                isOperational: true,
                imageUrl: 'images/14路.png'
            },
            direction2: {
                start: '铁山枢纽站',
                end: '列宁街',
                firstBus: '6:40',
                lastBus: '17:50',
                fare: '1元',
                times: '6:40 7:40 8:50 9:30 10:50 12:00 13:30 15:40 16:50 17:50',
                isOperational: true,
            }
        },
        17: {
            name: '17路',
            direction1: {
                start: '旅顺汽车站',
                end: '中远造船',
                firstBus: '6:50',
                lastBus: '16:45',
                fare: '1-2元【铁山枢纽站分段】',
                times: '6:50 16:45',
                isOperational: true,
                imageUrl: 'images/17路.png'
            },
            direction2: {
                start: '旅顺汽车站',
                end: '中远造船',
                firstBus: '7:45',
                lastBus: '17:45',
                fare: '1-2元【铁山枢纽站分段】',
                times: '7:45 17:45',
                isOperational: true,
            }
        },
        18: {
            name: '18路',
            direction1: {
                start: '旅顺汽车站',
                end: '外贸学院',
                firstBus: '5:40',
                lastBus: '20:20',
                fare: '1-2元【铁山枢纽站分段】',
                times: '流水发车，高峰10-15分钟，平峰20分钟',
                isOperational: true,
                imageUrl: 'images/18路.png'
            },
            direction2: {
                start: '外贸学院',
                end: '旅顺汽车站',
                firstBus: '5:40',
                lastBus: '20:20',
                fare: '1-2元【铁山枢纽站分段】',
                times: '流水发车，高峰10-15分钟，平峰20分钟',
                isOperational: true,
            }
        },
        215: {
            name: '215路',
            direction1: {
                start: '铁山枢纽站',
                end: '于家村',
                firstBus: '6:00',
                lastBus: '17:40',
                fare: '1元',
                times: '6:00 7:00 8:10 9:40 11:10 13:10 15:10 16:40 17:40',
                isOperational: true,
                imageUrl: 'images/215路.png'
            },
            direction2: {
                start: '于家村',
                end: '铁山枢纽站',
                firstBus: '6:20',
                lastBus: '18:00',
                fare: '1元',
                times: '6:20 7:20 8:30 10:00 11:30 13:30 15:30 17:00  18:00',
                isOperational: true,
            }
        },
        216: {
            name: '216路',
            direction1: {
                start: '铁山枢纽站',
                end: '陈家村（黄渤海分界线）',
                firstBus: '5:50',
                lastBus: '17:05',
                fare: '1元',
                times: '5:50 6:35 8:35 10:35 14:05 16:05 17:05',
                isOperational: true,
                imageUrl: 'images/216路.png'
            },
            direction2: {
                start: '陈家村（黄渤海分界线）',
                end: '铁山枢纽站',
                firstBus: '6:10',
                lastBus: '17:30',
                fare: '1元',
                times: '6:10 7:00 9:00 11:00 14:30 16:30 17:30',
                isOperational: true,
            }
        },
        217: {
            name: '217路',
            direction1: {
                start: '铁山枢纽站',
                end: '董砣子',
                firstBus: '5:50',
                lastBus: '16:55',
                fare: '1元',
                times: '5:50 6:30 7:10 8:10 9:25 10:55 11:45 14:15 15:35 16:55',
                isOperational: true,
                imageUrl: 'images/217路.png'
            },
            direction2: {
                start: '董砣子',
                end: '铁山枢纽站',
                firstBus: '6:25',
                lastBus: '17:30',
                fare: '1元',
                times: '6:25 7:05 7:45 8:45 10:00 11:30 12:20 14:50 16:10 17:30',
                isOperational: true,
            }
        },
        19: {
            name: '19路',
            direction1: {
                start: '旅顺汽车站',
                end: '开发区管委会',
                firstBus: '7:05',
                lastBus: '17:05',
                fare: '1-2元【铁山枢纽站分段】',
                times: '7:05 7:50 8:30 9:10 9:30 10:30 11:30 12:30 13:30 14:30  15:00 15:20 16:10 16:30 17:05',
                isOperational: true,
                imageUrl: 'images/19路.png'
            },
            direction2: {
                start: '开发区管委会',
                end: '旅顺汽车站',
                firstBus: '5:40',
                lastBus: '16:40',
                fare: '1-2元【铁山枢纽站分段】',
                times: '5:40 6:30 7:45 8:00 8:30 9:30 10:30 11:30 12:30 13:30 14:30 15:30 15:50 16:10 16:40',
                isOperational: true,
            }
        },
        20: {
            name: '20路',
            direction1: {
                start: '中心广场',
                end: '龙头',
                firstBus: '6:15',
                lastBus: '16:35',
                fare: '1-2元【干休所分段】',
                times: '6:15 7:10 11:35 16:35',
                isOperational: true,
                imageUrl: 'images/20路.png'
            },
            direction2: {
                start: '龙头',
                end: '中心广场',
                firstBus: '6:40',
                lastBus: '17:05',
                fare: '1-2元【干休所分段】',
                times: '6:40 7:45 12:05 17:05',
                isOperational: true,
            }
        },
        204: {
            name: '204路',
            direction1: {
                start: '汽车站',
                end: '塔河湾地铁站',
                firstBus: '5:50',
                lastBus: '18:20',
                fare: '1-2元【大外东门分段】',
                times: '5:50	6:10	6:35	6:55	7:20	7:50	 8:35	9:20	9:50	10:20	10:50	11:50	12:50	13:50	14:50	15:50	16:20	16:50	17:20	17:50	18:20',
                isOperational: true,
                imageUrl: 'images/204路.png'
            },
            direction2: {
                start: '塔河湾地铁站',
                end: '汽车站',
                firstBus: '6:22',
                lastBus: '18:52',
                fare: '1-2元【大外东门分段】',
                times: '6:22	6:42	7:07	7:27	7:52	8:22	9:07	9:52	10:22	10:52	11:22	12:22	13:22	14:22	15:22	16:22	16:52	17:22	17:52	18:22	18:52',
                isOperational: true,
            }
        },
        205: {
            name: '205路',
            direction1: {
                start: '汽车站',
                end: '塔河湾地铁站',
                firstBus: '5:45',
                lastBus: '18:15',
                fare: '1-2元【行政服务中心分段】',
                times: '5:45	6:15	6:45	7:00	7:15	7:45	8:15	9:15	10:15	11:15	12:15	13:15	14:15	15:15	15:45	16:15	16:45	17:15	17:45	18:15',
                isOperational: true,
                imageUrl: 'images/205路.png'
            },
            direction2: {
                start: '塔河湾地铁站',
                end: '汽车站',
                firstBus: '6:45',
                lastBus: '19:15',
                fare: '1-2元【行政服务中心分段】',
                times: '6:45	7:15	7:45	8:00	8:15	8:45	9:15	10:15 	11:15	 12:15	13:15	 14:15	15:15 	16:15 	16:45	 17:15	17:45	 18:15	18:45	 19:15',
                isOperational: true,
            }
        },
        210: {
            name: '210路',
            direction1: {
                start: '汽车站',
                end: '江西派出所',
                firstBus: '5:30',
                lastBus: '17:45',
                fare: '1-2元【62中学分段】',
                times: '5:30 6:15 6:35 7:05 7:35（转潘家）8:35  9:35 10:35 11:35 12:35 13:35 14:35（转潘家）15:35 16:40 17:45',
                isOperational: true,
                imageUrl: 'images/210路.png'
            },
            direction2: {
                start: '江西派出所',
                end: '汽车站',
                firstBus: '6:15',
                lastBus: '18:30',
                fare: '1-2元【新加坡花园分段】',
                times: '6:15 7:05 7:25 7:55 8:25（转潘家）9:25 10:25 11:25 12:25 13:25 14:25 15:25 16:25 17:30 18:30',
                isOperational: true,
            }
        },
        211: {
            name: '211路',
            direction1: {
                start: '铁山枢纽站',
                end: '水师营',
                firstBus: '7:40',
                lastBus: '16:40',
                fare: '1-2元【胡家村分段】',
                times: '7:40  16:40',
                isOperational: true,
                imageUrl: 'images/211路.png'
            },
            direction2: {
                start: '水师营',
                end: '铁山枢纽站',
                firstBus: '8:25',
                lastBus: '17:25',
                fare: '1-2元【胡家村分段】',
                times: '8:25  17:25',
                isOperational: true,
            }
        },
        212: {
            name: '212路',
            direction1: {
                start: '中远造船',
                end: '水师营',
                firstBus: '6:40',
                lastBus: '16:00',
                fare: '1-2元【铁山枢纽站分段】',
                times: '6:40 8:00 13:30 16:00',
                isOperational: true,
                imageUrl: 'images/212路.png'
            },
            direction2: {
                start: '水师营',
                end: '中远造船',
                firstBus: '7:50',
                lastBus: '17:00',
                fare: '1-2元【铁山枢纽站分段】',
                times: '7:50 9:00 14:20 17:00',
                isOperational: true,
            }
        },
        220: {
            name: '220路',
            direction1: {
                start: '汽车站（水师营）',
                end: '西湖嘴（山头村委会）',
                firstBus: '5:45',
                lastBus: '17:40',
                fare: '1-2元【胡家村分段】',
                times: '5:45(水师营) 6:00	7:10	8:00	9:00	11:00	13:00	15:00	16:00	17:00	17:40',
                isOperational: true,
                imageUrl: 'images/220路.png'
            },
            direction2: {
                start: '西湖嘴（山头村委会）',
                end: '汽车站',
                firstBus: '6:15',
                lastBus: '18:20',
                fare: '1-2元【胡家村分段】',
                times: '6:15(山头村委会)  6:50	8:00	8:50	9:50	11:50	13:50	15:50	16:50	17:50	18:20',
                isOperational: true,
            }
        },
        221: {
            name: '221路',
            direction1: {
                start: '汽车站',
                end: '艾子口',
                firstBus: '5:40',
                lastBus: '16:40（经台山西）',
                fare: '1-2元【胡家村分段】',
                times: '5:40 6:30（去西金家） 6:40 7:30（经台山西）8:30 9:30 11:30 13:30 15:30（去进西金家） 16:40（经台山西）',
                isOperational: true,
                imageUrl: 'images/221路.png'
            },
            direction2: {
                start: '艾子口（官家村）',
                end: '汽车站',
                firstBus: '6:30',
                lastBus: '17:30',
                fare: '1-2元【胡家村分段】',
                times: '6:30 7:10(官家村发) 7:25 8:20（经台山西） 9:20 10:20 12:20 14:20 16:20 17:30（经台山西）',
                isOperational: true,
            }
        },
        222: {
            name: '222路',
            direction1: {
                start: '汽车站',
                end: '后泥河村',
                firstBus: '7:05',
                lastBus: '15:30',
                fare: '1-2元【双岛中小分段】',
                times: '7:05 10:00 15:30',
                isOperational: true,
                imageUrl: 'images/222路.png'
            },
            direction2: {
                start: '后泥河村',
                end: '汽车站',
                firstBus: '7:45',
                lastBus: '16:10',
                fare: '1-2元【双岛中小分段】',
                times: '7:45 10:40 16:10',
                isOperational: true,
            }
        },
        230: {
            name: '230路',
            direction1: {
                start: '汽车站',
                end: '锅炉厂',
                firstBus: '5:40',
                lastBus: '17:40',
                fare: '1-2元【前沙包分段】',
                times: '5:40	6:30	6:50	7:10	9:00	11:50	15:40	17:00	17:40',
                isOperational: true,
                imageUrl: 'images/230路.png'
            },
            direction2: {
                start: '锅炉厂',
                end: '汽车站',
                firstBus: '6:20',
                lastBus: '18:20',
                fare: '1-2元【前沙包分段】',
                times: '6:20	7:10	7:30	7:50	9:40	12:30	16:20	17:40	18:20',
                isOperational: true,
            }
        },
        231: {
            name: '231路',
            direction1: {
                start: '汽车站',
                end: '袁家沟',
                firstBus: '6:05',
                lastBus: '16:20',
                fare: '1-2元【前沙包分段】',
                times: '6:05 8:20 9:40 13:40 16:20',
                isOperational: true,
                imageUrl: 'images/231路.png'
            },
            direction2: {
                start: '袁家沟',
                end: '汽车站',
                firstBus: '6:45',
                lastBus: '17:00',
                fare: '1-2元【前沙包分段】',
                times: '6:45 9:00 10:20 14:20 17:00',
                isOperational: true,
            }
        },
        232: {
            name: '232路',
            direction1: {
                start: '汽车站',
                end: '袁家沟',
                firstBus: '7:40',
                lastBus: '15:00',
                fare: '1-2元【前沙包分段】',
                times: '7:40 11:00 15:00',
                isOperational: true,
                imageUrl: 'images/232路.png'
            },
            direction2: {
                start: '袁家沟',
                end: '汽车站',
                firstBus: '8:25',
                lastBus: '15:45',
                fare: '1-2元【前沙包分段】',
                times: '8:25 11:45 15:45',
                isOperational: true,
            }
        },
        240: {
            name: '240路',
            direction1: {
                start: '汽车站',
                end: '小黑石',
                firstBus: '6:25',
                lastBus: '16:30',
                fare: '1-3元【土城子分段】',
                times: '6:25（去进东泥河）8:30 (经东泥河） 12:00（经东泥河） 16:30',
                isOperational: true,
                imageUrl: 'images/240路.png'
            },
            direction2: {
                start: '小黑石',
                end: '汽车站',
                firstBus: '7:05',
                lastBus: '17:10',
                fare: '1-3元【土城子分段】',
                times: '7:05 9:30 (经东泥河） 12:40 (经东泥河） 17:10（回进东泥河）',
                isOperational: true,
            }
        },
        251: {
            name: '251路',
            direction1: {
                start: '汽车站',
                end: '石矿家属楼（长岭子）',
                firstBus: '6:10',
                lastBus: '15:50',
                fare: '1-3元【河西分段】',
                times: '主线：6:10 8:00 9:30 12:50 14:40 15:50|区间：6:50（走老路）16:50（走老路）',
                isOperational: true,
                imageUrl: 'images/251路.png'
            },
            direction2: {
                start: '石矿家属楼（长岭子）',
                end: '汽车站',
                firstBus: '7:00',
                lastBus: '16:50',
                fare: '1-3元【河西分段】',
                times: '主线：7:00 8:50 10:20 13:40 15:30 16:50|区间：7:40（走老路）17:40（走老路，回进曹家地）',
                isOperational: true,
            }
        },
        252: {
            name: '252路',
            direction1: {
                start: '汽车站',
                end: '长岭子',
                firstBus: '6:30',
                lastBus: '13:40',
                fare: '1-3元【土城子分段】',
                times: '6:30 8:40 10:30 13:40',
                isOperational: true,
                imageUrl: 'images/252路.png'
            },
            direction2: {
                start: '长岭子',
                end: '汽车站',
                firstBus: '7:20',
                lastBus: '14:30',
                fare: '1-3元【土城子分段】',
                times: '7:20（回进曹家地）9:30（回进曹家地）11:20（回进曹家地）14:30（回进曹家地）',
                isOperational: true,
            }
        },
        28: {
            name: '28路',
            direction1: {
                start: '蓝天下',
                end: '水师营',
                firstBus: '6:00',
                lastBus: '18:15',
                fare: '1元',
                times: '6:00 7:00 8:00 9:00 10:00 11:00 12:00 13:00 14:00 15:00 16:00 17:15 18:15',
                isOperational: true,
                imageUrl: 'images/28路.png'
            },
            direction2: {
                start: '水师营',
                end: '蓝天下',
                firstBus: '6:30',
                lastBus: '17:45',
                fare: '1元',
                times: '6:30 7:30 8:30 9:30 10:30 11:30 12:30 13:30 14:30 15:30 16:30 17:45',
                isOperational: true,
            }
        },
        31: {
            name: '31路',
            direction1: {
                start: '鹿山小区',
                end: '鹿山小区',
                firstBus: '5:40',
                lastBus: '17:20',
                fare: '1-2元【行政服务中心分段】',
                times: '5:40 6:28 7:20 9:20 11:20 12:20 14:20 16:28 17:20',
                isOperational: true,
                imageUrl: 'images/31路.png'
            },
            direction2: {
                start: '环路',
                end: '',
                firstBus: '',
                lastBus: '',
                fare: '',
                times: '',
                isOperational: true,
            }
        },
        32: {
            name: '32路',
            direction1: {
                start: '启新街',
                end: '启新街',
                firstBus: '5:45',
                lastBus: '17:32',
                fare: '1-2元【行政服务中心分段】',
                times: '5:45  6:30  7:30  8:32  10:32  13:32  14:32  15:50   17:32',
                isOperational: true,
                imageUrl: 'images/32路.png'
            },
            direction2: {
                start: '环路',
                end: '',
                firstBus: '',
                lastBus: '',
                fare: '',
                times: '',
                isOperational: true,
            }
        },
        33: {
            name: '33路',
            direction1: {
                start: '蓝天下',
                end: '和平广场',
                firstBus: '6:30',
                lastBus: '17:30',
                fare: '1元',
                times: '6:30 7:30 8:30 15:30 16:30 17:30',
                isOperational: true,
                imageUrl: 'images/33路.png'
            },
            direction2: {
                start: '和平广场',
                end: '蓝天下',
                firstBus: '6:00',
                lastBus: '18:00',
                fare: '1元',
                times: '6:00 7:00 8:00 16:00 17:00 18:00',
                isOperational: true,
            }
        },
        开发区环路: {
            name: '开发区环路',
            direction1: {
                start: '伯阳小学',
                end: '伯阳小学',
                firstBus: '5:45',
                lastBus: '18:00',
                fare: '1元',
                times: '5:45	6:30	7:00	7:15	7:30	7:45	8:00	8:30	9:00	9:30	10:00	10:30	11:00	11:30	12:00	12:30	13:00	13:30	14:00	14:30	15:00	15:30	16:00	16:30	16:45	17:00	17:15	17:30	18:00',
                isOperational: true,
                imageUrl: 'images/开发区环路.png'
            },
            direction2: {
                start: '环路',
                end: '',
                firstBus: '',
                lastBus: '',
                fare: '',
                times: '',
                isOperational: true,
            }
        },
        开发区1路: {
            name: '开发区1路',
            direction1: {
                start: '伯阳小学',
                end: '中远造船',
                firstBus: '6:30',
                lastBus: '17:40',
                fare: '1元',
                times: '6:30	7:00	7:30	8:00	8:30	9:30	10:30	11:30	12:30	13:30	14:30	15:30	16:30	17:00	17:40',
                isOperational: true,
                imageUrl: 'images/开发区1路.png'
            },
            direction2: {
                start: '中远造船',
                end: '伯阳小学',
                firstBus: '7:00',
                lastBus: '18:10',
                fare: '1元',
                times: '7:00	7:30	8:00	8:30	9:00	10:00	11:00	12:00	13:00	14:00	15:00	16:00	17:10	17:30	18:10',
                isOperational: true,
            }
        },
        开发区2路: {
            name: '开发区2路',
            direction1: {
                start: '管委会',
                end: '江西派出所',
                firstBus: '5:50',
                lastBus: '17:50',
                fare: '1元',
                times: '5:50 6:50 7:50 8:50 9:50 10:50 12:50 13:50 14:50 15:50 16:50 17:50',
                isOperational: true,
                imageUrl: 'images/开发区2路.png'
            },
            direction2: {
                start: '江西派出所',
                end: '管委会',
                firstBus: '6:20',
                lastBus: '18:20',
                fare: '1元',
                times: '6:20 7:20 8:20 9:20 10:20 11:20 13:20 14:20 15:20 16:20 17:20 18:20',
                isOperational: true,
            }
        },
        开发区工业园区环路: {
            name: '开发区工业园区环路',
            direction1: {
                start: '地铁十二号线铁山站',
                end: '地铁十二号线铁山站',
                firstBus: '7:00',
                lastBus: '19:00',
                fare: '1元',
                times: '流水发车:7:00-8:30，30分钟/趟；16:00-19:00，15分钟/趟',
                isOperational: true,
                imageUrl: 'images/开发区工业园区环路.png'
            },
            direction2: {
                start: '环路',
                end: '',
                firstBus: '',
                lastBus: '',
                fare: '',
                times: '',
                isOperational: true,
            }
        },
        
        

    };

    // 显示线路详情
    function displayRouteDetails(route) {
        const routeData = busRoutes[route];
        routeName.textContent = routeData.name;

        // 只显示方向一的图片
        routeImage.src = routeData.direction1.imageUrl;
        imageContainer.style.display = 'block';

        // 显示方向一信息
        if (routeData.direction1.isOperational) {
            startPoint1.textContent = routeData.direction1.start;
            endPoint1.textContent = routeData.direction1.end;
            firstBus1.textContent = routeData.direction1.firstBus;
            lastBus1.textContent = routeData.direction1.lastBus;
            fare1.textContent = routeData.direction1.fare;
            departureTimes1.textContent = routeData.direction1.times;
        } else {
            startPoint1.textContent = routeData.direction1.start;
            endPoint1.textContent = routeData.direction1.end;
            firstBus1.textContent = "";
            lastBus1.textContent = "";
            fare1.textContent = routeData.direction1.fare;
            departureTimes1.innerHTML = "<span class='out-of-service'style='color:red;font-size:30px;'>该方向目前停运</span>";
        }

        // 方向二信息（仍然显示，但不显示图片）
        if (routeData.direction2.isOperational) {
            startPoint2.textContent = routeData.direction2.start;
            endPoint2.textContent = routeData.direction2.end;
            firstBus2.textContent = routeData.direction2.firstBus;
            lastBus2.textContent = routeData.direction2.lastBus;
            fare2.textContent = routeData.direction2.fare;
            departureTimes2.textContent = routeData.direction2.times;
        } else {
            startPoint2.textContent = routeData.direction2.start;
            endPoint2.textContent = routeData.direction2.end;
            firstBus2.textContent = "";
            lastBus2.textContent = "";
            fare2.textContent = routeData.direction2.fare;
            departureTimes2.innerHTML = "<span class='out-of-service' style='color:red;font-size:30px;'>该方向目前停运</span>";
        }

        routeDetails.style.display = 'block';
    }

    // 点击热门线路显示详情
    hotRoutesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('route-item')) {
            const route = e.target.getAttribute('data-route');
            displayRouteDetails(route);
        }
    });

    // 搜索线路
    searchButton.addEventListener('click', () => {
        const searchValue = searchInput.value.trim();
        if (searchValue) {
            const route = searchValue in busRoutes ? searchValue : null;
            if (route) {
                displayRouteDetails(route);
            } else {
                imageContainer.style.display = 'none'; // 如果线路不存在，隐藏图片
                routeName.innerHTML = "<span style='color:red;font-size:30px;'>等待用户输入...</span>";
                startPoint1.textContent = "";
                endPoint1.textContent = "";
                firstBus1.textContent = "";
                lastBus1.textContent = "";
                fare1.textContent = "";
                departureTimes1.textContent = "";
                startPoint2.textContent = "";
                endPoint2.textContent = "";
                firstBus2.textContent = "";
                lastBus2.textContent = "";
                fare2.textContent = "";
                departureTimes2.textContent = "";
                alert('未找到该线路');
                
            }
        }
    });
});