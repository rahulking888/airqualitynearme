export type CityInfo = {
  city_feature: string;
  climate_description: string;
  pollution_cause: string;
  local_factor: string;
  image?: string; // optional
};

export const cityData: Record<string, CityInfo> = {

    //United States
     //Alabama
     "huntsville": {
  city_feature: "a growing tech hub in northern Alabama surrounded by rolling hills and the Tennessee River",
  climate_description: "a humid subtropical climate with hot summers, mild winters, and occasional storms",
  pollution_cause: "industrial emissions, traffic congestion, and regional ozone formation",
  local_factor: "valley geography that can trap pollutants and high summer humidity affecting air quality",
},

"mobile": {
  city_feature: "a historic port city on the Gulf Coast known for maritime activity and humid coastal air",
  climate_description: "a humid subtropical climate with long, hot summers and mild, wet winters",
  pollution_cause: "shipyard operations, port emissions, and frequent moisture-driven mold and particulate issues",
  local_factor: "proximity to the Gulf leading to high humidity, salt air, and frequent rainfall dispersing pollutants",
},

"montgomery": {
  city_feature: "the state capital situated on the Alabama River with a mix of urban and suburban environments",
  climate_description: "a humid subtropical climate with hot summers and short, cool winters",
  pollution_cause: "vehicle emissions, industrial activity, and summer ozone buildup",
  local_factor: "river valley setting with moderate airflow and heat-driven air stagnation during summer",
},

"tuscaloosa": {
  city_feature: "a college town home to the University of Alabama with a mix of industry and green areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicular traffic, power generation, and manufacturing emissions",
  local_factor: "periodic air stagnation during high humidity and limited wind movement in summer months",
},

"hoover": {
  city_feature: "a major Birmingham suburb with residential neighborhoods and commercial centers",
  climate_description: "a humid subtropical climate with warm summers and mild winters",
  pollution_cause: "commuter traffic, urban development, and regional smog drift from Birmingham",
  local_factor: "hilly terrain causing localized air pockets and limited air movement on calm days",
},

"dothan": {
  city_feature: "an agricultural and trade hub near the Florida and Georgia borders in southeastern Alabama",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicular traffic, crop dust, and seasonal burning",
  local_factor: "flat topography with limited ventilation and frequent summer haze buildup",
},

"prattville": {
  city_feature: "a suburban community near Montgomery known for its balance of urban and green spaces",
  climate_description: "a humid subtropical climate with warm, rainy summers and cool winters",
  pollution_cause: "commuter emissions, local industry, and regional ozone drift",
  local_factor: "low-lying river terrain that traps moisture and occasionally limits air dispersion",
},

"phenix-city": {
  city_feature: "a city on the Chattahoochee River across from Columbus, Georgia, blending suburban and riverfront settings",
  climate_description: "a humid subtropical climate with hot summers and short winters",
  pollution_cause: "vehicular emissions and cross-state industrial pollution from Columbus metro",
  local_factor: "river valley geography and high humidity that reduce pollutant dispersal efficiency",
},

"vestavia-hills": {
  city_feature: "an elevated residential suburb of Birmingham with wooded landscapes and suburban charm",
  climate_description: "a humid subtropical climate with mild winters and warm summers",
  pollution_cause: "vehicle emissions from commuting and regional ozone formation",
  local_factor: "elevated terrain influencing airflow patterns and periodic temperature inversions",
},

"opelika": {
  city_feature: "a growing city near Auburn with mixed industrial and suburban characteristics",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "industrial emissions, traffic, and summer ozone accumulation",
  local_factor: "rolling hills that slow air circulation and increase local stagnation events",
},

"alabaster": {
  city_feature: "a suburban city south of Birmingham with rapid residential and commercial growth",
  climate_description: "a humid subtropical climate with hot summers and temperate winters",
  pollution_cause: "commuter traffic, construction dust, and nearby industrial activity",
  local_factor: "basin-like terrain with occasional air stagnation during humid weather",
},

"gadsden": {
  city_feature: "a small city along the Coosa River with manufacturing and historical roots",
  climate_description: "a humid subtropical climate with hot summers and cool winters",
  pollution_cause: "industrial emissions, vehicular traffic, and particulate matter from older facilities",
  local_factor: "river valley location contributing to localized temperature inversions and limited air flow",
},

"athens": {
  city_feature: "a growing city between Huntsville and Decatur with suburban and small-town characteristics",
  climate_description: "a humid subtropical climate with warm summers and cool winters",
  pollution_cause: "commuter traffic, agricultural activity, and nearby industrial emissions",
  local_factor: "valley setting that can trap air pollutants during calm, humid conditions",
},

"northport": {
  city_feature: "a residential city across the river from Tuscaloosa with suburban expansion and green landscapes",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional industrial emissions",
  local_factor: "river proximity contributing to humidity and periodic stagnation during low wind conditions",
},

"daphne": {
  city_feature: "a scenic coastal city on Mobile Bay known for its natural beauty and suburban lifestyle",
  climate_description: "a humid subtropical climate with high humidity, heavy rainfall, and mild winters",
  pollution_cause: "coastal vehicle emissions, marine activities, and nearby industrial zones",
  local_factor: "bay breezes that disperse pollutants but frequent humidity-driven particulate buildup",
},
      //Alaska

      "anchorage": {
  city_feature: "a coastal city surrounded by mountains and water, serving as Alaska’s largest urban center",
  climate_description: "a subarctic coastal climate with long, cold winters and short, mild summers",
  pollution_cause: "vehicle emissions, winter wood burning, and limited air circulation during cold months",
  local_factor: "temperature inversions trapping pollutants in winter and low sun angles affecting air mixing",
},

"fairbanks": {
  city_feature: "an inland city in central Alaska known for extreme temperature ranges and northern lights",
  climate_description: "a continental subarctic climate with frigid winters and warm, dry summers",
  pollution_cause: "wood smoke from home heating, vehicle exhaust, and wintertime air stagnation",
  local_factor: "low-lying basin geography and frequent inversions leading to severe winter pollution episodes",
},

"juneau": {
  city_feature: "a coastal capital city nestled between mountains and the Gastineau Channel",
  climate_description: "a subpolar oceanic climate with cool, wet conditions and minimal temperature extremes",
  pollution_cause: "marine traffic emissions, cruise ships, and residential heating",
  local_factor: "mountain barriers limiting airflow and persistent moisture enhancing particulate buildup",
},

"badger": {
  city_feature: "a suburban community near Fairbanks with a mix of residential and wooded areas",
  climate_description: "a continental subarctic climate with cold winters and warm, dry summers",
  pollution_cause: "residential wood burning and limited air dispersion during inversions",
  local_factor: "low terrain that traps pollutants and prolonged calm air during winter months",
},

"knik-fairview": {
  city_feature: "a growing residential community in the Matanuska-Susitna Valley near Wasilla",
  climate_description: "a cold continental climate with snowy winters and short, cool summers",
  pollution_cause: "vehicle emissions, local dust, and wood stove usage",
  local_factor: "valley winds and cold air pooling that can trap particulates during winter inversions",
},

"college": {
  city_feature: "a suburban area west of Fairbanks known for the University of Alaska campus and residential zones",
  climate_description: "a continental subarctic climate with long, frigid winters and brief warm summers",
  pollution_cause: "wood heating, vehicle exhaust, and stagnant cold air",
  local_factor: "flat terrain near the Tanana River basin with frequent wintertime air stagnation",
},

"wasilla": {
  city_feature: "a rapidly growing city in the Matanuska-Susitna Valley surrounded by lakes and forests",
  climate_description: "a cold continental climate with snowy winters and mild, dry summers",
  pollution_cause: "vehicle traffic, construction dust, and residential wood burning",
  local_factor: "valley geography causing inversions and trapping particulates during calm winter days",
},

"tanaina": {
  city_feature: "a residential area north of Wasilla with wooded surroundings and rural character",
  climate_description: "a continental subarctic climate with long, snowy winters and short, cool summers",
  pollution_cause: "wood smoke, limited airflow, and local traffic emissions",
  local_factor: "low-lying terrain prone to cold air pooling and poor winter air dispersion",
},

"kalifornsky": {
  city_feature: "a small community near Kenai on the western Kenai Peninsula with forested landscapes",
  climate_description: "a subarctic coastal climate with cold winters and mild, moist summers",
  pollution_cause: "industrial emissions from nearby oil operations and home heating",
  local_factor: "coastal air mixing reduced by calm winter conditions and nearby industrial influence",
},

"ketchikan": {
  city_feature: "a rainforest coastal town surrounded by mountains and islands in southeastern Alaska",
  climate_description: "a maritime climate with heavy rainfall, cool temperatures, and mild winters",
  pollution_cause: "marine traffic, diesel engines, and damp air trapping particulates",
  local_factor: "frequent rain cleans the air but enclosed valleys occasionally retain emissions",
},

"kenai": {
  city_feature: "a coastal city on the Kenai Peninsula near Cook Inlet with energy and fishing industries",
  climate_description: "a subarctic maritime climate with cold winters and cool, wet summers",
  pollution_cause: "industrial emissions, vehicle exhaust, and marine operations",
  local_factor: "coastal airflow patterns dispersing pollutants except during calm, cold spells",
},

"kodiak": {
  city_feature: "an island city known for its fishing industry and rugged coastal environment",
  climate_description: "a maritime subpolar climate with mild winters and cool, wet summers",
  pollution_cause: "harbor emissions, seafood processing, and marine fuel combustion",
  local_factor: "constant sea breezes aiding air exchange but high humidity retaining particulates near shore",
},

"farmers-loop": {
  city_feature: "a rural area northeast of Fairbanks with scattered homes and boreal forest surroundings",
  climate_description: "a continental subarctic climate with extremely cold winters and dry, warm summers",
  pollution_cause: "residential wood smoke and vehicle exhaust during cold, stagnant conditions",
  local_factor: "bowl-like topography enhancing inversions and trapping winter pollutants near ground level",
},
// Arizona
"phoenix": {
  city_feature: "a sprawling desert metropolis and the capital of Arizona, known for its urban heat and arid landscape",
  climate_description: "a hot desert climate with extremely hot summers and mild, dry winters",
  pollution_cause: "vehicle emissions, dust storms, and ozone buildup from high temperatures",
  local_factor: "thermal inversions and stagnant desert air increasing ground-level pollution during summer",
},

"tucson": {
  city_feature: "a desert city surrounded by mountain ranges and known for its cultural heritage and dry climate",
  climate_description: "a hot semi-arid climate with long, hot summers and mild winters",
  pollution_cause: "vehicle emissions, dust, and regional ozone formation",
  local_factor: "valley topography and limited rainfall allowing dust and smog accumulation",
},

"mesa": {
  city_feature: "a large suburban city east of Phoenix with desert terrain and rapid urban growth",
  climate_description: "a hot desert climate with intense summer heat and dry air",
  pollution_cause: "commuter traffic, construction dust, and ozone from urban sprawl",
  local_factor: "flat valley setting trapping heat and increasing photochemical smog",
},

"gilbert": {
  city_feature: "a rapidly developing suburban community within the Phoenix metro area with desert surroundings",
  climate_description: "a hot desert climate with dry conditions and low annual rainfall",
  pollution_cause: "vehicle exhaust, suburban dust, and ozone pollution from regional activity",
  local_factor: "flat terrain and thermal inversions promoting ozone buildup on still days",
},

"chandler": {
  city_feature: "a suburban technology hub in the southeast Phoenix Valley with extensive residential areas",
  climate_description: "a hot desert climate with intense sunshine and low humidity",
  pollution_cause: "industrial emissions, traffic, and heat-amplified ozone levels",
  local_factor: "desert heat island effect increasing smog and reducing nighttime air cooling",
},
"scottsdale": {
  city_feature: "an upscale desert city adjacent to Phoenix known for resorts and clean desert landscapes",
  climate_description: "a hot desert climate with long dry periods and abundant sunshine",
  pollution_cause: "vehicle emissions and regional ozone from nearby metro areas",
  local_factor: "mountain ridges that influence air circulation and localized smog trapping",
},

"peoria": {
  city_feature: "a northwest suburb of Phoenix with residential and recreational desert spaces",
  climate_description: "a hot desert climate with minimal precipitation and strong sunlight",
  pollution_cause: "traffic-related emissions, dust, and regional ozone drift",
  local_factor: "broad desert plains contributing to stagnant air during summer peaks",
},

"tempe": {
  city_feature: "a vibrant university city home to Arizona State University, part of the Phoenix metro region",
  climate_description: "a hot desert climate with intense summer heat and mild winters",
  pollution_cause: "traffic congestion, industrial activity, and photochemical smog",
  local_factor: "urban heat island and river valley setting reducing air movement at night",
},

"surprise": {
  city_feature: "a suburban city northwest of Phoenix with rapid housing and commercial growth",
  climate_description: "a hot desert climate with long, dry summers and short winters",
  pollution_cause: "vehicle emissions, dust storms, and construction activity",
  local_factor: "flat open terrain and high heat enhancing ozone and particulate formation",
},

"goodyear": {
  city_feature: "a western Phoenix suburb with agricultural roots and increasing industrial development",
  climate_description: "a hot desert climate with low humidity and intense sun exposure",
  pollution_cause: "traffic, dust from agriculture and construction, and ozone pollution",
  local_factor: "valley location with frequent stagnation of air during heat waves",
},

"san-tan-valley": {
  city_feature: "a fast-growing residential community southeast of Phoenix surrounded by desert foothills",
  climate_description: "a hot desert climate with dry conditions and wide daily temperature ranges",
  pollution_cause: "vehicle emissions, dust from development, and summer ozone formation",
  local_factor: "basin geography with limited wind flow and frequent dust storms",
},

"yuma": {
  city_feature: "a southwestern desert city near the Colorado River and Mexican border known for agriculture",
  climate_description: "an extremely hot desert climate with minimal rainfall and abundant sunshine",
  pollution_cause: "agricultural dust, cross-border emissions, and vehicular pollution",
  local_factor: "flat desert plains and low wind dispersal during peak heat hours",
},

"avondale": {
  city_feature: "a growing community southwest of Phoenix with residential expansion and light industry",
  climate_description: "a hot desert climate with very hot summers and dry winters",
  pollution_cause: "traffic emissions, dust, and nearby industrial pollutants",
  local_factor: "low elevation in the valley leading to trapped pollutants during still air conditions",
},

"queen-creek": {
  city_feature: "a suburban town on the southeastern edge of the Phoenix metro with open desert surroundings",
  climate_description: "a hot desert climate with dry air and significant summer heat",
  pollution_cause: "vehicle traffic, dust from agriculture and development, and ozone buildup",
  local_factor: "flat desert basin reducing airflow and causing pollutant accumulation on calm days",
},

"flagstaff": {
  city_feature: "a mountain city in northern Arizona known for forests, cooler weather, and higher elevation",
  climate_description: "a dry continental climate with cold, snowy winters and mild summers",
  pollution_cause: "vehicle exhaust, wood burning, and wildfire smoke during dry seasons",
  local_factor: "elevation-driven temperature inversions occasionally trapping smoke and particulates",
},

"maricopa": {
  city_feature: "a desert city south of Phoenix with growing suburban and agricultural zones",
  climate_description: "a hot desert climate with extremely dry air and long summers",
  pollution_cause: "vehicle emissions, agricultural dust, and regional ozone",
  local_factor: "flat terrain and strong heat buildup causing poor dispersion of ground-level pollutants",
},

"casas-adobes": {
  city_feature: "a suburban area near Tucson with desert vegetation and residential communities",
  climate_description: "a hot semi-arid climate with low rainfall and abundant sunshine",
  pollution_cause: "vehicle traffic, dust, and ozone carried from nearby Tucson metro area",
  local_factor: "valley proximity and warm air inversions leading to occasional stagnation",
},

"casa-grande": {
  city_feature: "a desert city between Phoenix and Tucson known for agriculture and manufacturing",
  climate_description: "a hot desert climate with long, dry summers and mild winters",
  pollution_cause: "industrial activity, vehicular emissions, and dust storms",
  local_factor: "flat desert basin with minimal natural ventilation during heat waves",
},

"marana": {
  city_feature: "a suburban town northwest of Tucson with agricultural roots and growing residential areas",
  climate_description: "a hot semi-arid climate with warm winters and very hot summers",
  pollution_cause: "agricultural dust, traffic emissions, and ozone formation",
  local_factor: "low-lying desert plains and high temperatures contributing to poor air mixing",
},

"lake-havasu-city": {
  city_feature: "a resort city on the Colorado River famous for water recreation and dry desert surroundings",
  climate_description: "a hot desert climate with extremely high summer temperatures and mild winters",
  pollution_cause: "boat engine exhaust, vehicle emissions, and regional dust",
  local_factor: "river valley geography trapping heat and slowing pollutant dispersion",
},

"catalina-foothills": {
  city_feature: "an affluent suburban area north of Tucson nestled against the Santa Catalina Mountains",
  climate_description: "a hot semi-arid climate with dry air and cooler mountain breezes",
  pollution_cause: "regional vehicle emissions and ozone drift from Tucson basin",
  local_factor: "mountain slopes influencing air flow and reducing pollutant accumulation",
},

"prescott-valley": {
  city_feature: "a high-elevation town in central Arizona surrounded by desert plateaus and pine forests",
  climate_description: "a mild semi-arid climate with cooler summers and cold winters",
  pollution_cause: "wood smoke, vehicle emissions, and dust during dry seasons",
  local_factor: "valley location with occasional inversions and limited dispersion during calm weather",
},
// Arkansas

"little-rock": {
  city_feature: "the capital city of Arkansas located along the Arkansas River with diverse urban and suburban areas",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, industrial output, and summer ozone buildup",
  local_factor: "river valley geography that can trap pollutants during warm, stagnant weather",
},

"fort-smith": {
  city_feature: "a historic city on the Arkansas-Oklahoma border with strong industrial and transportation activity",
  climate_description: "a humid subtropical climate with hot summers and cool winters",
  pollution_cause: "industrial emissions, vehicular traffic, and regional ozone formation",
  local_factor: "low-lying terrain along the river that experiences occasional air stagnation in summer",
},

"springdale": {
  city_feature: "a rapidly growing city in northwest Arkansas known for poultry production and suburban expansion",
  climate_description: "a humid subtropical climate with warm, humid summers and mild winters",
  pollution_cause: "industrial processing, commuter traffic, and regional haze",
  local_factor: "Ozark foothills influencing airflow and causing occasional pollutant buildup",
},

"jonesboro": {
  city_feature: "a major city in northeastern Arkansas and a hub for commerce and education in the delta region",
  climate_description: "a humid subtropical climate with hot summers and mild, wet winters",
  pollution_cause: "traffic, agricultural burning, and industrial emissions",
  local_factor: "flat delta topography with limited ventilation and high summer humidity",
},

"rogers": {
  city_feature: "a fast-developing city in the Ozark Mountains near Bentonville with mixed urban and green spaces",
  climate_description: "a humid subtropical climate with warm summers and cool winters",
  pollution_cause: "vehicular emissions, industrial output, and construction dust",
  local_factor: "rolling hills that can trap air and cause local stagnation during summer",
},

"conway": {
  city_feature: "a college town north of Little Rock with growing commercial and residential development",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, industrial activity, and ozone formation",
  local_factor: "river valley setting contributing to occasional air stagnation in warm months",
},

"north-little-rock": {
  city_feature: "a suburban and industrial counterpart to Little Rock across the Arkansas River",
  climate_description: "a humid subtropical climate with warm, humid conditions and mild winters",
  pollution_cause: "traffic congestion, power generation, and regional smog drift",
  local_factor: "river valley location that can limit airflow and trap pollutants on still days",
},

"hot-springs": {
  city_feature: "a scenic resort city known for natural thermal springs and surrounding Ouachita Mountains",
  climate_description: "a humid subtropical climate with warm summers and mild, moist winters",
  pollution_cause: "vehicular traffic, tourism-related emissions, and seasonal pollen",
  local_factor: "mountain terrain occasionally restricting air movement and trapping humidity",
},

"sherwood": {
  city_feature: "a suburban community northeast of Little Rock with residential and retail expansion",
  climate_description: "a humid subtropical climate with hot, humid summers and cool winters",
  pollution_cause: "commuter traffic, suburban dust, and ozone drift from nearby cities",
  local_factor: "low elevation areas prone to air stagnation and humidity buildup during summer",
},

"paragould": {
  city_feature: "a small industrial and agricultural city in northeastern Arkansas’s flat delta region",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "industrial emissions, agricultural dust, and traffic pollution",
  local_factor: "flat terrain and high humidity reducing dispersion of airborne particulates",
},

"cabot": {
  city_feature: "a suburban city northeast of Little Rock known for rapid population growth",
  climate_description: "a humid subtropical climate with warm, humid summers and cool winters",
  pollution_cause: "vehicle emissions, suburban development dust, and ozone buildup",
  local_factor: "flat valley topography occasionally trapping pollutants during hot periods",
},

"van-buren": {
  city_feature: "a historic riverfront city near Fort Smith with industrial and agricultural influence",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "industrial activity, traffic emissions, and particulate matter from nearby operations",
  local_factor: "river basin geography causing stagnant air during calm, humid conditions",
},

"searcy": {
  city_feature: "a small college town in central Arkansas surrounded by farmland and wooded areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle exhaust, agricultural activity, and seasonal burning",
  local_factor: "flat lowlands and humidity contributing to periodic air stagnation",
},

"west-memphis": {
  city_feature: "an industrial and transport-focused city across the Mississippi River from Memphis, Tennessee",
  climate_description: "a humid subtropical climate with long, hot summers and mild winters",
  pollution_cause: "truck and freight emissions, industrial output, and cross-border smog",
  local_factor: "flat delta region prone to low wind and high particulate accumulation",
},

"siloam-springs": {
  city_feature: "a small city in the northwest corner of Arkansas near the Oklahoma border with hilly surroundings",
  climate_description: "a humid subtropical climate with moderate summers and cool winters",
  pollution_cause: "industrial emissions, vehicle traffic, and agricultural dust",
  local_factor: "valley terrain causing occasional air stagnation in warm, humid conditions",
},

"maumelle": {
  city_feature: "a planned suburban community northwest of Little Rock with parks and residential growth",
  climate_description: "a humid subtropical climate with warm, humid summers and mild winters",
  pollution_cause: "commuter traffic, suburban development dust, and ozone drift",
  local_factor: "proximity to river valleys reducing airflow and increasing local humidity retention",
},

"hot-springs-village": {
  city_feature: "a gated mountain community near Hot Springs surrounded by lakes and forested hills",
  climate_description: "a humid subtropical climate with mild winters and warm, humid summers",
  pollution_cause: "wood smoke, vehicle exhaust, and regional ozone during summer",
  local_factor: "mountain valleys slowing air circulation and promoting pollutant accumulation in calm weather",
},
//California
"los-angeles": {
  city_feature: "a sprawling coastal metropolis and the cultural capital of California known for entertainment, industry, and urban sprawl",
  climate_description: "a mediterranean climate with warm, dry summers and mild, wet winters",
  pollution_cause: "vehicle emissions, industrial output, and smog from temperature inversions",
  local_factor: "basin topography trapping pollutants and reducing air circulation during calm weather",
},

"san-diego": {
  city_feature: "a coastal city near the Mexican border known for beaches, naval bases, and mild weather",
  climate_description: "a semi-arid climate moderated by the Pacific Ocean with dry summers and mild winters",
  pollution_cause: "vehicle traffic, port activity, and regional ozone formation",
  local_factor: "coastal inversions occasionally trapping marine layer pollutants inland",
},

"san-jose": {
  city_feature: "a major technology hub in Silicon Valley surrounded by hills and residential communities",
  climate_description: "a mediterranean climate with warm, dry summers and cool, wet winters",
  pollution_cause: "traffic congestion, industrial emissions, and regional smog drift from the Bay Area",
  local_factor: "valley geography reducing airflow and trapping ozone during summer",
},

"san-francisco": {
  city_feature: "a coastal city on a peninsula known for steep hills, fog, and dense urban living",
  climate_description: "a cool-summer mediterranean climate influenced by Pacific Ocean currents",
  pollution_cause: "vehicle emissions, port activities, and regional haze",
  local_factor: "frequent marine layer keeping pollutants close to ground in early mornings",
},

"fresno": {
  city_feature: "a large inland city in California’s Central Valley known for agriculture and dry weather",
  climate_description: "a hot semi-arid climate with long, hot summers and mild winters",
  pollution_cause: "agricultural burning, dust, and vehicle exhaust",
  local_factor: "flat valley terrain trapping particulate matter during temperature inversions",
},

"sacramento": {
  city_feature: "the capital city of California located in the Central Valley near major rivers",
  climate_description: "a mediterranean climate with hot, dry summers and cool, wet winters",
  pollution_cause: "vehicle emissions, wildfire smoke, and agricultural pollutants",
  local_factor: "low valley elevation allowing pollutants to stagnate during calm conditions",
},

"long-beach": {
  city_feature: "a coastal port city in the Los Angeles metro area with heavy shipping and industry",
  climate_description: "a mild coastal climate with warm, dry summers and cool, moist winters",
  pollution_cause: "port emissions, diesel trucks, and urban smog",
  local_factor: "sea breezes mixing with industrial emissions increasing ground-level ozone",
},

"oakland": {
  city_feature: "a port city across the bay from San Francisco with diverse neighborhoods and maritime trade",
  climate_description: "a mediterranean climate with mild, foggy summers and cool winters",
  pollution_cause: "vehicle traffic, shipping emissions, and industrial pollutants",
  local_factor: "bay breezes carrying emissions inland and trapping them against hillsides",
},

"bakersfield": {
  city_feature: "an agricultural and oil-producing city in the southern San Joaquin Valley",
  climate_description: "a hot semi-arid climate with dry, dusty summers and cool winters",
  pollution_cause: "vehicle exhaust, agricultural dust, and oil field emissions",
  local_factor: "valley bowl geography causing persistent smog and particulate buildup",
},

"anaheim": {
  city_feature: "a suburban city in Orange County known for tourism and major attractions",
  climate_description: "a warm-summer mediterranean climate with dry, sunny conditions",
  pollution_cause: "vehicle emissions, freeway congestion, and ozone from the Los Angeles basin",
  local_factor: "proximity to regional smog sources leading to high ozone levels in summer",
},

"stockton": {
  city_feature: "an inland port city in the San Joaquin Valley with strong agricultural activity",
  climate_description: "a hot-summer mediterranean climate with dry summers and wet winters",
  pollution_cause: "industrial output, agricultural dust, and traffic emissions",
  local_factor: "low valley elevation promoting air stagnation during heat events",
},

"riverside": {
  city_feature: "an inland city east of Los Angeles known for universities and suburban sprawl",
  climate_description: "a hot-summer mediterranean climate with dry, sunny conditions most of the year",
  pollution_cause: "vehicle emissions, warehouse traffic, and ozone from the LA basin",
  local_factor: "inland basin location trapping pollutants during thermal inversions",
},

"irvine": {
  city_feature: "a planned suburban city in Orange County known for technology parks and green design",
  climate_description: "a mediterranean climate with warm, dry summers and mild winters",
  pollution_cause: "commuter traffic, construction activity, and ozone drift from neighboring cities",
  local_factor: "coastal hills influencing local wind patterns and pollution dispersion",
},

"santa-ana": {
  city_feature: "a dense urban city in Orange County serving as a commercial and administrative hub",
  climate_description: "a warm mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle emissions, industrial sources, and smog from regional activity",
  local_factor: "limited air circulation during heat events causing ozone buildup",
},

"chula-vista": {
  city_feature: "a growing city south of San Diego known for residential areas and coastal proximity",
  climate_description: "a semi-arid coastal climate moderated by the Pacific Ocean",
  pollution_cause: "cross-border traffic, port activity, and regional ozone",
  local_factor: "coastal inversions occasionally trapping emissions near ground level",
},

"santa-clarita": {
  city_feature: "a suburban valley city north of Los Angeles with rapid growth and hilly terrain",
  climate_description: "a mediterranean climate with hot, dry summers and mild winters",
  pollution_cause: "vehicle traffic, wildfire smoke, and ozone transported from LA basin",
  local_factor: "valley location leading to accumulation of regional smog on still days",
},

"fremont": {
  city_feature: "a Bay Area city with technology industries and residential communities near Silicon Valley",
  climate_description: "a mediterranean climate with dry summers and mild, wet winters",
  pollution_cause: "commuter traffic, industrial emissions, and regional smog",
  local_factor: "bay breezes dispersing pollution unevenly across neighborhoods",
},

"san-bernardino": {
  city_feature: "an inland city at the base of the San Bernardino Mountains with major freeway corridors",
  climate_description: "a hot-summer mediterranean climate with dry air and limited rainfall",
  pollution_cause: "vehicle emissions, warehouse operations, and industrial sources",
  local_factor: "mountain barriers trapping pollutants and causing high ozone levels",
},

"modesto": {
  city_feature: "a Central Valley city known for agriculture and food production industries",
  climate_description: "a mediterranean climate with hot, dry summers and cool winters",
  pollution_cause: "agricultural dust, vehicle emissions, and ammonia-based particulates",
  local_factor: "flat terrain and stagnant air leading to poor dispersion of pollutants",
},

"fontana": {
  city_feature: "an industrial and residential city in the Inland Empire with heavy truck traffic",
  climate_description: "a hot-summer mediterranean climate with dry heat and mild winters",
  pollution_cause: "diesel truck emissions, industrial activity, and regional smog drift",
  local_factor: "mountain valley geography trapping pollutants and limiting airflow",
},
"moreno-valley": {
  city_feature: "a fast-growing inland city in Southern California known for suburban housing and proximity to major logistics centers",
  climate_description: "a hot-summer mediterranean climate with dry, warm weather most of the year",
  pollution_cause: "vehicle emissions, warehouse truck traffic, and ozone from regional smog",
  local_factor: "inland basin geography trapping pollutants under thermal inversions",
},

"oxnard": {
  city_feature: "a coastal city in Ventura County known for agriculture, beaches, and port activity",
  climate_description: "a mild coastal climate with cool, foggy mornings and warm afternoons",
  pollution_cause: "vehicle exhaust, port emissions, and agricultural operations",
  local_factor: "marine layer occasionally trapping pollutants close to the coast",
},

"huntington-beach": {
  city_feature: "a coastal city in Orange County famous for beaches and surfing culture",
  climate_description: "a mediterranean climate with moderate temperatures year-round",
  pollution_cause: "vehicular traffic, coastal ozone drift, and emissions from nearby industrial zones",
  local_factor: "sea breezes dispersing but also circulating pollutants along the coast",
},

"glendale": {
  city_feature: "a hilly suburban city near Los Angeles with residential and commercial development",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "traffic emissions and smog drifting from the Los Angeles basin",
  local_factor: "valley terrain reducing airflow and contributing to smog retention",
},

"elk-grove": {
  city_feature: "a suburban community south of Sacramento known for rapid population growth",
  climate_description: "a mediterranean climate with hot, dry summers and cool, wet winters",
  pollution_cause: "vehicle emissions, agricultural dust, and regional smog transport",
  local_factor: "flat valley landscape leading to stagnant air on calm days",
},

"santa-rosa": {
  city_feature: "a city in Sonoma County surrounded by vineyards and rolling hills",
  climate_description: "a warm-summer mediterranean climate with cool nights and dry summers",
  pollution_cause: "vehicle traffic, wildfire smoke, and agricultural emissions",
  local_factor: "valley basin occasionally trapping smoke during temperature inversions",
},

"rancho-cucamonga": {
  city_feature: "a suburban city at the foothills of the San Gabriel Mountains with residential and industrial zones",
  climate_description: "a hot-summer mediterranean climate with dry air and abundant sunshine",
  pollution_cause: "warehouse truck traffic, vehicle emissions, and regional ozone",
  local_factor: "mountain barriers trapping polluted air during summer inversions",
},

"garden-grove": {
  city_feature: "a dense suburban city in Orange County with a strong local economy and diverse communities",
  climate_description: "a mediterranean climate with warm, dry summers and mild winters",
  pollution_cause: "vehicular emissions and regional ozone from the Los Angeles basin",
  local_factor: "limited air circulation during heat waves increasing ozone levels",
},

"oceanside": {
  city_feature: "a coastal city in northern San Diego County known for beaches and a large marine base nearby",
  climate_description: "a semi-arid coastal climate with mild temperatures and frequent marine influence",
  pollution_cause: "vehicle traffic, marine emissions, and regional ozone drift",
  local_factor: "coastal fog layer occasionally trapping pollutants near ground level",
},

"lancaster": {
  city_feature: "a desert city in northern Los Angeles County known for aerospace industries and dry conditions",
  climate_description: "a cold desert climate with hot summers and cool winters",
  pollution_cause: "vehicle emissions, dust storms, and industrial output",
  local_factor: "flat desert basin with low wind flow during stagnant periods",
},

"roseville": {
  city_feature: "a suburban city near Sacramento with growing residential and commercial areas",
  climate_description: "a mediterranean climate with hot, dry summers and cool, wet winters",
  pollution_cause: "vehicle exhaust, regional smog, and construction dust",
  local_factor: "valley location reducing dispersion during summer heat waves",
},

"palmdale": {
  city_feature: "a desert city in the Antelope Valley region with aerospace industries and suburban communities",
  climate_description: "a cold desert climate with dry air, hot summers, and cool winters",
  pollution_cause: "vehicular emissions, wind-blown dust, and industrial pollutants",
  local_factor: "valley setting with limited air circulation trapping particulates",
},

"corona": {
  city_feature: "a suburban city in the Inland Empire with significant commuting traffic to Los Angeles and Orange County",
  climate_description: "a mediterranean climate with hot, dry summers and mild winters",
  pollution_cause: "traffic emissions, warehouse activity, and ozone drift from coastal regions",
  local_factor: "mountain surroundings slowing air movement and increasing pollutant retention",
},

"salinas": {
  city_feature: "an agricultural city near Monterey Bay known for vegetable farming and mild weather",
  climate_description: "a cool-summer mediterranean climate with ocean influence and frequent fog",
  pollution_cause: "agricultural dust, vehicle emissions, and pesticide drift",
  local_factor: "coastal valley basin occasionally trapping fog and fine particles",
},

"hayward": {
  city_feature: "a Bay Area city along the eastern shore known for manufacturing and suburban neighborhoods",
  climate_description: "a mild mediterranean climate with moderate temperatures year-round",
  pollution_cause: "vehicle exhaust, industrial output, and port emissions from nearby areas",
  local_factor: "bay inversions sometimes trapping smog against coastal hills",
},

"sunnyvale": {
  city_feature: "a central Silicon Valley city known for technology companies and residential zones",
  climate_description: "a mediterranean climate with dry summers and cool, wet winters",
  pollution_cause: "commuter traffic and regional ozone from the Bay Area",
  local_factor: "valley setting limiting wind flow during warm afternoons",
},

"escondido": {
  city_feature: "an inland North County city in San Diego known for rolling hills and agriculture",
  climate_description: "a hot-summer mediterranean climate with dry conditions and low humidity",
  pollution_cause: "vehicle emissions, wildfire smoke, and dust from agriculture",
  local_factor: "inland basin location reducing ventilation and trapping pollutants",
},

"pomona": {
  city_feature: "an inland suburban city east of Los Angeles with major freeways and dense population",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and ozone from regional smog",
  local_factor: "valley position near mountain foothills reducing air movement",
},

"visalia": {
  city_feature: "a Central Valley city known for agriculture and proximity to national parks",
  climate_description: "a hot-summer mediterranean climate with dry air and warm winters",
  pollution_cause: "agricultural burning, dust, and vehicle exhaust",
  local_factor: "flat valley floor trapping pollutants during still weather conditions",
},

"victorville": {
  city_feature: "a desert city along the Mojave River serving as a regional hub for transportation and logistics",
  climate_description: "a cold desert climate with hot, dry summers and cool, windy winters",
  pollution_cause: "truck traffic, dust storms, and regional ozone transport",
  local_factor: "high desert basin occasionally trapping dust during calm periods",
},

"fullerton": {
  city_feature: "a suburban city in northern Orange County with a mix of residential and educational centers",
  climate_description: "a mediterranean climate with warm, dry summers and mild winters",
  pollution_cause: "vehicular traffic, smog drift, and regional industrial emissions",
  local_factor: "low inland basin promoting ozone accumulation during summer",
},

"torrance": {
  city_feature: "a coastal city in Los Angeles County known for industry and moderate weather",
  climate_description: "a coastal mediterranean climate with mild temperatures year-round",
  pollution_cause: "industrial emissions, port traffic, and regional smog from inland areas",
  local_factor: "marine layer occasionally trapping pollution over the coastal plain",
},

"orange": {
  city_feature: "a suburban city in central Orange County with historical districts and residential areas",
  climate_description: "a mediterranean climate with warm summers and mild winters",
  pollution_cause: "vehicle exhaust, freeway emissions, and ozone drift",
  local_factor: "flat inland terrain with occasional temperature inversions during summer",
},

"santa-clara": {
  city_feature: "a core Silicon Valley city known for tech headquarters and residential communities",
  climate_description: "a mediterranean climate with dry summers and wet winters",
  pollution_cause: "commuter traffic, data center emissions, and regional smog",
  local_factor: "valley air patterns concentrating ozone during warm afternoons",
},

"clovis": {
  city_feature: "a suburban city adjacent to Fresno known for agriculture and suburban growth",
  climate_description: "a hot semi-arid climate with dry summers and mild winters",
  pollution_cause: "agricultural dust, vehicle emissions, and regional haze",
  local_factor: "flat valley geography trapping particulates under inversions",
},

"simi-valley": {
  city_feature: "a suburban city northwest of Los Angeles surrounded by mountains and open space",
  climate_description: "a warm-summer mediterranean climate with dry conditions",
  pollution_cause: "commuter traffic, wildfire smoke, and regional ozone drift",
  local_factor: "mountain-ringed basin occasionally trapping pollutants on still days",
},

"thousand-oaks": {
  city_feature: "a suburban city in Ventura County known for open spaces, hills, and clean neighborhoods",
  climate_description: "a mediterranean climate with mild winters and warm, dry summers",
  pollution_cause: "vehicle emissions and wildfire smoke during dry seasons",
  local_factor: "valley basins and surrounding hills occasionally holding haze during heat waves",
},






    //colorado
  "westminster": {
  city_feature: "suburban community with proximity to Denver and the mountain foothills",
  climate_description: "a semi arid climate with cold winters, warm summers, and high elevation",
  pollution_cause: "vehicle emissions, regional ozone formation, and wildfire smoke during dry seasons",
  local_factor: "elevation induced temperature inversions, low humidity, and seasonal snowmelt stagnation",
  image: "/air-quality/westminster.webp",
},



 
};
