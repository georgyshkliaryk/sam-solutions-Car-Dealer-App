const fetch = require("node-fetch");
const config = require("config");

const PORT = config.get("port") || 5000;

//insert prepared ads to database

let ads = [
  {
    carUsed: "New car",
    carName: "BMW M5 F90 (2018)",
    carModel: "BMW",
    carPrice: 12300,
    carYear: 2018,
    carDescription:
      "The BMW M5 is a high performance variant of the BMW 5 Series marketed under the BMW M sub-brand. It is considered an iconic vehicle in the sports sedan category.",
    carFullDescription:
      "Production of M5 models began with the painted bodyshell of an E34 5 Series at the BMW Dingolfing plant.[19] The shells were then transported to BMW M GmbH in Garching, where the car was assembled by hand over a period of two weeks.[20][21] Only the South African M5 was entirely assembled at the Rosslyn, South Africa assembly plant from complete knock-down kits supplied from Garching, Germany. The M5 Touring, which was BMW M Division's first wagon as well as the last hand-built M car, saw 891 units produced. Total production of the E34 M5 was 12,254 units.[19]  Cosmetic changes to the exterior from the standard E34 included unique front and rear bumpers and side rocker panels, contributing to a drag coefficient of 0.32 (from 0.30),[22] and interior updates included a unique gearshift surround and rear headrests.  The second-generation M5 was introduced with the S38B36 engine, which generated 232 kW (315 PS; 311 hp) at 6,900 rpm and 360 N⋅m (266 lb⋅ft) of torque at 4,750 rpm,[22] touting a factory 0-97 km/h (60 mph) acceleration figure of 6.3 seconds.[22] Top speed was electronically limited to 250kmh – 155 mph.",
    carImage:
      "https://images.wallpaperscraft.ru/image/bmw_m4_f82_chernyj_vid_sboku_104981_1920x1080.jpg",
    carType: "Coupe",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55180.png",
    carUsage: "newcars",
    carMileage: 0,
    fuelConsumption: "12.3",
    maxSpeed: "280",
    createdBy: "shkliargosh23",
    createdByEmail: "shkliargosh23@gmail.com",
  },
  {
    carUsed: "Used car",
    carName: "Mercedes-Benz CLS",
    carModel: "Mercedes",
    carPrice: 7250,
    carDescription:
      "Sporty with an emphasis on comfort, the iconic Mercedes-Benz CLS is a four-door coupe with individual seating for five passengers.",
    carFullDescription:
      "The Mercedes-Benz CLS-Class is a series of executive cars produced by Mercedes-Benz since 2004.  The original model was a four-door fastback based on the Mercedes E-Class platform, marketed as a four door coupé.[1] An estate (Shooting Brake) model was later added to the model range with the second generation CLS.[2] All models are available as a high performance AMG variant, although it wasn't until the second generation CLS that 4MATIC all-wheel drive was offered.[3]  The CLS range is positioned between the E-Class and the S-Class within the Mercedes model range[4][5], and models tend to be less practical than the E-Class it is based on.[6] It primarily competes with BMW 8 Series Gran Coupe and Audi A7.",
    carImage:
      "https://img3.akspic.ru/image/34251-mercedes_benz-mercedes_benz_amg_gt-rastenie-zavod-sportkar-1920x1080.jpg",
    carType: "Coupe",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55283.png",
    carYear: 2016,
    carUsage: "usedcars",
    carMileage: 45000,
    fuelConsumption: "13.5",
    maxSpeed: "250",
    createdBy: "wotwotwot2001",
    createdByEmail: "wotwotwot2001@gmail.com",
  },
  {
    carUsed: "New car",
    carName: "Mazda 5 (2015)",
    carModel: "Mazda",
    carPrice: 9050,
    carImage:
      "https://s1.1zoom.me/b5951/258/Mazda_2017_CX-5_Red_Metallic_523565_1920x1080.jpg",
    carDescription:
      "Delivering the utility of a minivan in a package with the agility, maneuverability and economy of a small car, the Mazda5 boasts responsive handling, a comfortable ride and a relatively quiet interior.",
    carFullDescription:
      "An underappreciated gem, the Mazda5 has a wide range of attributes, unmatched by any other vehicle on the market. Sliding side doors and seats for six make it an alternative for larger and more-expensive minivans and SUVs. Lots of windows provide a good view out and the tidy footprint aids maneuverability and parking. Nimble and agile handling means it doesn't sacrifice being fun-to-drive either. Further, antilock brakes, traction control, and electronic stability control are standard. Still, there are some downsides. The four-cylinder engine can be overtaxed on hills, or with a full load. Higher noise levels can make it feel less substantial than some larger alternatives. Unlike larger minivans or three-row SUVs; you can't fit six adults and luggage in the Mazda5. If you want cargo space, you're limited to carrying four people.",
    carType: "SUV",
    carYear: 2015,
    carUsage: "newcars",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55280.png",
    carMileage: 0,
    fuelConsumption: "7.5",
    maxSpeed: "210",
    createdBy: "wotwotwot2001",
    createdByEmail: "wotwotwot2001@gmail.com",
  },
  {
    carUsed: "Used car",
    carName: "Porsche Panamera GTS (2018)",
    carModel: "Porsche",
    carPrice: 14300,
    carYear: 2018,
    carDescription:
      "The Porsche Panamera is a mid/full-sized luxury vehicle (E-segment in Europe) manufactured by the German automobile manufacturer Porsche. It is front-engined and has a rear-wheel-drive layout, with all-wheel drive versions also available.",
    carFullDescription:
      "The V8-powered Panamera S, 4S, and Turbo models were the first versions that debuted in 2009. In addition to the 4.8L Twin Turbo 500 PS (368 kW; 493 hp) V8 powered models, Porsche launched two further models in 2010: the Panamera and Panamera 4 which are both powered by 3.0-litre and 3.6-litre V6 engines producing 300 PS (221 kW; 296 hp).  Being derived from the V8 engine of the Panamera S and Panamera 4S, the V6 retains the V8's technologies like Direct Fuel Injection, infinitely variable intake camshaft adjustment with variable valve lift (VarioCam Plus), an on-demand oil pump, water cooling with thermal management, a variable intake manifold, as well as integrated dry sump lubrication with two-stage extraction of oil, and an Auto Start-Stop function (only with the PDK transmission).[18] Turbo version uses active aerodynamics with a multi-stage, adjustable rear spoiler.[19] Optional Sports Chrono Packages include a Sport Plus button, which has tighter damping and air springs, and lowers the car's body by 25 mm (1.0 in).[20]  In 2011, the Panamera S Hybrid,[21] Diesel,[22] Turbo S,[23] and GTS variants were added to the range. The GTS achieves a lateral acceleration of 0.96g.[24]  The Panamera, S, Hybrid and Diesel models are rear-wheel drive, while the Panamera 4, 4S, and GTS have the same four-wheel drive system as the Turbo and Turbo S, called Porsche Traction Management (PTM). The Hybrid S only sold 18 units in 2018. However sales have perked up since then.",
    carImage:
      "https://s1.1zoom.ru/big7/551/Porsche_Panamera_Grey_524562_1920x1080.jpg",
    carType: "Hatchback",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55308.png",
    carUsage: "usedcars",
    carMileage: 20123,
    fuelConsumption: "11.4",
    maxSpeed: "280",
    createdBy: "shkliargosh23",
    createdByEmail: "shkliargosh23@gmail.com",
  },
  {
    carUsed: "New car",
    carName: "Ford Mondeo (2020)",
    carModel: "Ford",
    carPrice: 5600,
    carYear: 2020,
    carDescription:
      'The Ford Mondeo is a large family car manufactured by Ford since 1993. The first Ford declared a "world car", the Mondeo was intended to consolidate several Ford model lines worldwide.',
    carFullDescription:
      "The Mondeo competed in the British Touring Car Championship (BTCC) between 1993 and 2000. The cars, prepared by former series champion Andy Rouse, did not enter the 1993 season until the eighth round, at Pembrey, in Wales. Rouse and Paul Radisich were the drivers in the Mondeo's first season. Radisich went on to win the FIA World Touring Car Cup in both 1993 and 1994 driving a Mondeo.  Ford ran a factory-sponsored team, called Ford Team Mondeo, for eight seasons. Andy Rouse Engineering ran the cars from 1993 to 1995, when West Surrey Racing ran the works team from 1996 to 1998, with Prodrive taking over beginning 1999.  In 2000, the team expanded from two cars to three when drivers Alain Menu and Anthony Reid were joined by 1998 series champion Rickard Rydell, recruited from the disbanded Volvo team. The team dominated the season of 2000, finishing 1–2–3 (Menu–Reid–Rydell) in the drivers' standings and winning the manufacturers' championship by 104 points.  A complete overhaul of the BTCC following the season of 2000 had the supertouring regulations scrapped as the series moved towards less expensive, but slower race cars. Ford withdrew from BTCC competition prior to 2001.  The touring cars, after their withdrawal, went on sale to the public and are now in the hands of other drivers. Two of the 2000 series Mondeos have been spotted in the BRSCC series of LMA Euro saloons; drivers known to own them at present are Bernard Hogarth and Alvin Powell.",
    carImage:
      "https://images.caricos.com/f/ford/2015_ford_mondeo/images/1920x1080/2015_ford_mondeo_1_1920x1080.jpg",
    carType: "Sedan",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55283.png",
    carUsage: "newcars",
    carMileage: 0,
    fuelConsumption: "6.8",
    maxSpeed: "200",
    createdBy: "h.shkliaryk",
    createdByEmail: "h.shkliaryk@gmail.com",
  },
  {
    carName: " Volkswagen Tiguan (2019)",
    carDescription:
      "The Volkswagen Tiguan is a crossover SUV manufactured by German automaker Volkswagen. Introduced in 2007 as the second crossover SUV model under the Volkswagen brand, the first generation model uses the PQ46 platform.",
    carModel: "Volkswagen",
    carYear: 2019,
    carType: "SUV",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55280.png",
    carUsed: "Used car",
    carPrice: 10050,
    carMileage: 25342,
    fuelConsumption: "9.2",
    maxSpeed: "240",
    carFullDescription:
      "The first generation Tiguan was unveiled in June 2007.[7] Previously, the vehicle debuted as a concept vehicle at the November 2006 LA Auto Show[8] and in production form at the 2007 International Motor Show Germany. It was initially available with two engines, a 2.0-litre 140 PS (138 hp; 103 kW) TDI and a 1.4-litre 150 PS (148 hp; 110 kW) TSI petrol unit. The Tiguan went on sale in Europe in early 2008.[9] All first generation Tiguans featured two-row seating and transverse mounted four-cylinder engines. Production began in the end of 2007 at Volkswagen's subsidiary Auto 5000 in Wolfsburg and continued subsequently under the company's standard contract arrangements, at Wolfsburg and in Kaluga, Russia.[10][11]\n\nThe first generation Tiguan uses the PQ46 platform of the Volkswagen Passat (B6). A common misconception is that the Tiguan is built on the PQ35 chassis that underpins the Mk5 and Mk6 generation Volkswagen Golf. While the PQ46 chassis is based upon the PQ35 platform, there are several differences between the more entry level PQ35 and the mid range PQ46. The majority of the parts used in its construction are simply the same as those used on the Volkswagen B6 Passat and CC models of the same chassis",
    carImage:
      "https://s1.1zoom.ru/b4652/687/Volkswagen_Tiguan_Snow_Orange_513916_1920x1080.jpg",
    createdBy: "shkliargosh23",
    createdByEmail: "shkliargosh23@gmail.com",
  },
  {
    carImage:
      "https://s1.1zoom.ru/b5366/880/Honda_2018_Accord_Sport_2_Red_Metallic_536254_1920x1080.jpg",
    carName: "Honda Accord (2015)",
    carDescription:
      "The Honda Accord (Japanese: ホンダ・アコード, Honda Akōdo) /əˈkɔːrd/ is a series of automobiles manufactured by Honda since 1976, best known for its four-door sedan variant, which has been one of the best-selling cars in the United States since 1989. The Accord nameplate has been applied to a variety of vehicles worldwide, including coupes, station wagons, hatchbacks and a Honda Crosstour crossover.",
    carModel: "Honda",
    carYear: 2015,
    carType: "Sedan",
    carTypeImage: "https://image.flaticon.com/icons/png/512/55/55283.png",
    carUsed: "Used car",
    carPrice: 5400,
    carMileage: 98044,
    fuelConsumption: "6.5",
    maxSpeed: "200",
    carFullDescription:
      'Since initiation, Honda has offered several different car body styles and versions of the Accord, and often vehicles marketed under the Accord nameplate concurrently in different regions differ quite substantially. It debuted in 1976, as a compact hatchback, though this style only lasted through 1989, as the lineup was expanded to include a sedan, coupe and wagon. By the sixth-generation Accord at the end of the 1990s, it evolved into an intermediate vehicle, with one basic platform but with different bodies and proportions to increase its competitiveness against its rivals in different international markets. For the eighth-generation Accord released for the North American market in 2007, Honda had again chosen to move the model further upscale and increase its size.[1] This pushed the Accord sedan from the upper limit of what the U.S. Environmental Protection Agency (EPA) defines as a mid-size car to just above the lower limit of a full-size car,[2] with the coupe still rated as a mid-size car. In 2012, the ninth-generation Accord sedan, with smaller exterior dimensions, was once again classified as a mid-size car at 119 cubic feet (3.4 m3), falling just shy of the "Large Car" classification. However, the tenth-generation Accord sedan, with similar exterior dimensions, returned to full-size car status with its combined interior space of 123 cubic feet (3.5 m3); the coupe was discontinued in 2017.',
    createdBy: "h.shkliaryk",
    createdByEmail: "h.shkliaryk@gmail.com",
  },
];

fetch(`http://localhost:${PORT}/api/ads`, {
  method: "POST",
  body: JSON.stringify(ads),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((json) => console.log(json));
