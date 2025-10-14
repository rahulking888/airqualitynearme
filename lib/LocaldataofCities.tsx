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
"concord": {
  city_feature: "a suburban city in the East Bay region known for its residential neighborhoods and proximity to Mount Diablo",
  climate_description: "a mediterranean climate with hot, dry summers and cool, wet winters",
  pollution_cause: "vehicle traffic from nearby freeways and regional smog from the Bay Area",
  local_factor: "valley location that can trap pollutants during calm weather",
},

"vallejo": {
  city_feature: "a waterfront city in the North Bay area with a mix of residential and industrial zones",
  climate_description: "a coastal mediterranean climate influenced by marine breezes from San Pablo Bay",
  pollution_cause: "industrial emissions, port activities, and regional ozone drift",
  local_factor: "bay breezes helping to disperse pollutants except during stagnant air periods",
},

"fairfield": {
  city_feature: "a city located between San Francisco and Sacramento, known for agriculture and suburban growth",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle emissions from I-80 corridor and regional ozone transport",
  local_factor: "valley geography that can concentrate pollutants on calm days",
},

"berkeley": {
  city_feature: "a university city on the eastern shore of San Francisco Bay known for education and progressive culture",
  climate_description: "a coastal mediterranean climate moderated by cool bay breezes",
  pollution_cause: "vehicle traffic, regional ozone, and occasional wildfire smoke",
  local_factor: "frequent marine influence keeping pollution levels generally low",
},

"antioch": {
  city_feature: "an eastern Contra Costa County city with growing suburban development and industrial zones",
  climate_description: "a hot-summer mediterranean climate with low humidity and little rainfall in summer",
  pollution_cause: "commuter traffic, nearby industrial emissions, and regional ozone drift",
  local_factor: "inland valley location prone to ozone buildup during heat waves",
},

"menifee": {
  city_feature: "a rapidly growing inland city in Riverside County with residential and commercial expansion",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, dust from construction, and regional smog from Los Angeles basin",
  local_factor: "inland basin location that traps pollutants during stagnant weather",
},

"east-los-angeles": {
  city_feature: "a densely populated urban community east of downtown Los Angeles",
  climate_description: "a warm-summer mediterranean climate influenced by urban heat and limited coastal breezes",
  pollution_cause: "heavy traffic emissions, industrial activity, and regional ozone pollution",
  local_factor: "limited air circulation leading to frequent ozone and particulate buildup",
},

"carlsbad": {
  city_feature: "a coastal city in northern San Diego County known for beaches and technology businesses",
  climate_description: "a coastal mediterranean climate with mild temperatures year-round",
  pollution_cause: "freeway emissions, regional ozone, and coastal traffic pollution",
  local_factor: "ocean breezes generally dispersing pollutants except during temperature inversions",
},

"murrieta": {
  city_feature: "a suburban city in southwestern Riverside County surrounded by rolling hills",
  climate_description: "a warm-summer mediterranean climate with hot, dry summers",
  pollution_cause: "vehicle traffic and regional smog transported from Los Angeles and the Inland Empire",
  local_factor: "inland valley geography that can trap ozone during high-pressure systems",
},

"temecula": {
  city_feature: "a scenic city known for its wine country and suburban lifestyle in southwestern Riverside County",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle emissions, agricultural dust, and regional ozone from coastal areas",
  local_factor: "valley setting that can hold pollutants during stagnant air conditions",
},
"downey": {
  city_feature: "a suburban city in southeast Los Angeles County known for aerospace history and urban neighborhoods",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle exhaust, industrial emissions, and regional smog from the LA basin",
  local_factor: "limited coastal influence allowing pollutants to linger during stagnant conditions",
},

"costa-mesa": {
  city_feature: "a coastal Orange County city known for shopping centers, arts venues, and proximity to the beach",
  climate_description: "a coastal mediterranean climate moderated by ocean breezes",
  pollution_cause: "freeway emissions and regional ozone from inland areas",
  local_factor: "marine air helping to disperse pollutants most of the year",
},

"jurupa-valley": {
  city_feature: "a fast-growing inland community in Riverside County with a mix of rural and suburban zones",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "truck traffic, warehouse emissions, and regional smog from the Los Angeles basin",
  local_factor: "inland basin geography that traps pollutants during calm weather",
},

"west-covina": {
  city_feature: "a suburban city in the eastern San Gabriel Valley with residential and commercial development",
  climate_description: "a warm-summer mediterranean climate with dry summers and moderate winters",
  pollution_cause: "freeway traffic, regional smog, and nearby industrial emissions",
  local_factor: "limited air circulation leading to occasional high ozone levels",
},

"rialto": {
  city_feature: "a city in the Inland Empire known for logistics centers and growing residential areas",
  climate_description: "a semi-arid climate with hot, dry summers and cool winters",
  pollution_cause: "warehouse truck emissions, freeway traffic, and regional ozone",
  local_factor: "inland location prone to smog buildup during heat waves",
},

"el-monte": {
  city_feature: "a dense suburban city in the San Gabriel Valley with industrial and residential zones",
  climate_description: "a warm-summer mediterranean climate influenced by the Los Angeles basin",
  pollution_cause: "heavy traffic, industrial emissions, and regional ozone transport",
  local_factor: "basin setting that traps pollutants on warm, stagnant days",
},

"vacaville": {
  city_feature: "a city in Solano County between San Francisco and Sacramento known for agriculture and outlet shopping",
  climate_description: "a mediterranean climate with hot summers and cool, wet winters",
  pollution_cause: "vehicle emissions from I-80, regional ozone transport, and wildfire smoke during dry season",
  local_factor: "valley position that can concentrate pollutants under inversion layers",
},

"burbank": {
  city_feature: "a city in the San Fernando Valley known for media production, studios, and suburban living",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle traffic, airport activity, and regional smog from Los Angeles basin",
  local_factor: "valley basin geography that limits dispersion during stagnant air events",
},
"el-cajon": {
  city_feature: "an inland city in San Diego County surrounded by hills and known for suburban communities",
  climate_description: "a semi-arid climate with hot, dry summers and mild winters",
  pollution_cause: "vehicle traffic, regional ozone drift, and wildfire smoke in dry season",
  local_factor: "valley location that can trap pollutants under temperature inversions",
},

"chico": {
  city_feature: "a Northern California city known for Chico State University and Bidwell Park",
  climate_description: "a hot-summer mediterranean climate with dry summers and wet winters",
  pollution_cause: "vehicle emissions, agricultural burning, and wildfire smoke",
  local_factor: "inland valley conditions that can trap smoke and particulates in summer and fall",
},

"inglewood": {
  city_feature: "an urban city in Los Angeles County known for sports venues and dense neighborhoods",
  climate_description: "a warm-summer mediterranean climate influenced by nearby coastal breezes",
  pollution_cause: "heavy traffic, aircraft emissions, and regional smog",
  local_factor: "urban basin setting leading to occasional ozone and particulate buildup",
},

"hesperia": {
  city_feature: "a high desert city in San Bernardino County with growing residential areas",
  climate_description: "a desert climate with hot, dry summers and cool winters",
  pollution_cause: "vehicle emissions from nearby freeways and regional dust pollution",
  local_factor: "elevated desert terrain with frequent winds dispersing pollutants",
},

"daly-city": {
  city_feature: "a coastal city south of San Francisco known for foggy weather and residential density",
  climate_description: "a cool-summer mediterranean climate dominated by oceanic influence",
  pollution_cause: "vehicle emissions and regional ozone drift from inland Bay Area",
  local_factor: "persistent marine layer keeping pollution generally low",
},

"tracy": {
  city_feature: "a Central Valley city known for agriculture and commuter population to the Bay Area",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool winters",
  pollution_cause: "freeway traffic, agricultural dust, and regional ozone transport",
  local_factor: "valley geography that traps pollutants during stagnant weather patterns",
},

"vista": {
  city_feature: "a city in northern San Diego County known for mild climate and suburban character",
  climate_description: "a coastal mediterranean climate with moderate temperatures year-round",
  pollution_cause: "vehicle emissions, regional ozone, and coastal traffic pollution",
  local_factor: "ocean breezes usually dispersing pollutants effectively",
},

"norwalk": {
  city_feature: "a densely populated suburban city in southeast Los Angeles County",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle exhaust, freeway emissions, and regional smog accumulation",
  local_factor: "urban basin area that limits air circulation during warm weather",
},

"san-marcos": {
  city_feature: "a city in northern San Diego County known for education centers and growing residential areas",
  climate_description: "a coastal inland mediterranean climate with warm, dry summers",
  pollution_cause: "vehicle emissions and ozone drift from inland regions",
  local_factor: "valley location where pollutants can accumulate during heat waves",
},

"arden-arcade": {
  city_feature: "a suburban area within Sacramento County known for residential and commercial development",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool, foggy winters",
  pollution_cause: "vehicle traffic, wood burning, and regional ozone transport",
  local_factor: "flat valley geography prone to stagnant air and temperature inversions",
},

"merced": {
  city_feature: "a Central Valley city known for agriculture and as a gateway to Yosemite National Park",
  climate_description: "a hot-summer mediterranean climate with dry summers and foggy winters",
  pollution_cause: "agricultural emissions, vehicle traffic, and regional ozone transport",
  local_factor: "valley basin that frequently traps pollutants during calm weather",
},

"manteca": {
  city_feature: "a fast-growing city in the Central Valley with agriculture and suburban housing",
  climate_description: "a hot-summer mediterranean climate with low humidity",
  pollution_cause: "vehicle emissions, agricultural dust, and transported ozone",
  local_factor: "inland valley setting leading to pollutant buildup in still air conditions",
},

"indio": {
  city_feature: "a desert city in the Coachella Valley known for music festivals and tourism",
  climate_description: "an arid desert climate with extremely hot summers and mild winters",
  pollution_cause: "vehicle exhaust, dust storms, and regional smog from coastal areas",
  local_factor: "low-lying desert basin that can trap pollutants during calm air episodes",
},

"chino": {
  city_feature: "an Inland Empire city known for dairy farms, warehouses, and suburban growth",
  climate_description: "a warm-summer mediterranean climate with dry summers and moderate winters",
  pollution_cause: "vehicle traffic, agricultural dust, and regional ozone pollution",
  local_factor: "inland basin geography contributing to frequent smog accumulation",
},

"redding": {
  city_feature: "a Northern California city near the Sacramento River known for hot summers and outdoor recreation",
  climate_description: "a hot-summer mediterranean climate with low humidity",
  pollution_cause: "wildfire smoke, vehicle traffic, and occasional industrial activity",
  local_factor: "inland valley setting that traps smoke during fire season",
},

"hemet": {
  city_feature: "a city in the San Jacinto Valley with residential areas and surrounding mountains",
  climate_description: "a semi-arid climate with hot, dry summers and mild winters",
  pollution_cause: "vehicle emissions, dust, and smog drifting from coastal regions",
  local_factor: "valley geography allowing ozone and particulates to accumulate",
},

"mission-viejo": {
  city_feature: "a master-planned city in southern Orange County known for hills and residential communities",
  climate_description: "a coastal inland mediterranean climate with mild, dry summers",
  pollution_cause: "freeway emissions and ozone transported from inland regions",
  local_factor: "hilly terrain aiding pollutant dispersion most of the year",
},

"carson": {
  city_feature: "an industrial and residential city in south Los Angeles County near major ports",
  climate_description: "a coastal mediterranean climate with mild temperatures year-round",
  pollution_cause: "refinery emissions, freeway traffic, and port-related pollution",
  local_factor: "coastal breezes moderating but not always dispersing pollutants effectively",
},

"compton": {
  city_feature: "a dense urban city in Los Angeles County known for industry and major freeways",
  climate_description: "a warm-summer mediterranean climate influenced by limited coastal airflow",
  pollution_cause: "traffic congestion, industrial activity, and regional smog",
  local_factor: "urban basin area prone to high ozone levels on hot days",
},

"south-gate": {
  city_feature: "a densely populated city in southeast Los Angeles County with industrial and residential zones",
  climate_description: "a warm-summer mediterranean climate with limited ocean breeze influence",
  pollution_cause: "industrial emissions, heavy traffic, and regional ozone pollution",
  local_factor: "flat inland terrain that allows pollutants to persist during stagnant weather",
},
"santa-monica": {
  city_feature: "a coastal city in western Los Angeles County known for beaches, tourism, and oceanfront living",
  climate_description: "a coastal mediterranean climate with mild temperatures year-round",
  pollution_cause: "vehicle traffic, coastal congestion, and regional smog from inland areas",
  local_factor: "strong ocean breezes generally dispersing pollutants quickly",
},

"folsom": {
  city_feature: "a city in the Sacramento metropolitan area known for Folsom Lake and technology employers",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool winters",
  pollution_cause: "vehicle emissions, wood smoke in winter, and regional ozone drift",
  local_factor: "valley terrain that can trap pollutants during calm or foggy weather",
},

"mountain-view": {
  city_feature: "a Silicon Valley city known for technology headquarters and tree-lined neighborhoods",
  climate_description: "a coastal mediterranean climate moderated by bay breezes",
  pollution_cause: "commuter traffic, regional ozone, and occasional wildfire smoke",
  local_factor: "bay influence helping to disperse most pollutants efficiently",
},

"santa-barbara": {
  city_feature: "a scenic coastal city between the Pacific Ocean and Santa Ynez Mountains known for tourism and Spanish architecture",
  climate_description: "a coastal mediterranean climate with warm, dry summers and mild winters",
  pollution_cause: "vehicle emissions and wildfire smoke during dry months",
  local_factor: "mountain backdrops that can occasionally trap pollutants near the coast",
},

"lake-forest": {
  city_feature: "a master-planned community in southern Orange County surrounded by rolling hills",
  climate_description: "a coastal inland mediterranean climate with mild, dry summers",
  pollution_cause: "vehicle emissions and ozone drift from inland basins",
  local_factor: "hilly terrain aiding in moderate pollutant dispersion",
},

"citrus-heights": {
  city_feature: "a suburban city northeast of Sacramento with residential and retail development",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool, foggy winters",
  pollution_cause: "vehicle exhaust, wood smoke, and regional ozone transport",
  local_factor: "flat terrain that traps pollutants under inversion layers during calm weather",
},

"san-leandro": {
  city_feature: "a city on the eastern shore of San Francisco Bay known for industry and diverse neighborhoods",
  climate_description: "a coastal mediterranean climate moderated by bay influence",
  pollution_cause: "vehicle traffic, port-related emissions, and regional ozone drift",
  local_factor: "bay breezes generally keeping pollution levels moderate",
},

"whittier": {
  city_feature: "a suburban city in Los Angeles County with hills and historical neighborhoods",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle emissions, freeway traffic, and regional smog",
  local_factor: "valley edges that can accumulate ozone on hot, still days",
},

"livermore": {
  city_feature: "an eastern Alameda County city known for vineyards, science labs, and dry valley climate",
  climate_description: "a hot-summer mediterranean climate with low humidity and strong seasonal winds",
  pollution_cause: "commuter traffic, regional ozone, and wildfire smoke",
  local_factor: "valley basin where pollutants can linger during stagnant conditions",
},

"rancho-cordova": {
  city_feature: "a suburban city in Sacramento County known for business parks and residential areas",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool winters",
  pollution_cause: "vehicle traffic, industrial activity, and regional ozone transport",
  local_factor: "flat inland terrain that traps pollutants under inversion layers",
},

"hawthorne": {
  city_feature: "an urban city in the South Bay region of Los Angeles County known for aerospace and dense neighborhoods",
  climate_description: "a coastal mediterranean climate with mild, dry summers",
  pollution_cause: "vehicle exhaust, aircraft activity, and regional smog",
  local_factor: "proximity to ocean providing some pollutant dispersion except on stagnant days",
},

"perris": {
  city_feature: "an inland city in Riverside County known for agriculture, logistics, and suburban growth",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "truck traffic, regional smog, and dust from open lands",
  local_factor: "valley setting contributing to ozone buildup during hot weather",
},

"redwood-city": {
  city_feature: "a city on the San Francisco Peninsula known for its waterfront and tech companies",
  climate_description: "a coastal mediterranean climate with mild temperatures influenced by bay breezes",
  pollution_cause: "vehicle traffic, regional ozone, and wildfire smoke during summer",
  local_factor: "bay proximity keeping air quality relatively stable most of the year",
},

"newport-beach": {
  city_feature: "a coastal Orange County city known for luxury homes, marinas, and tourism",
  climate_description: "a coastal mediterranean climate with mild, pleasant temperatures year-round",
  pollution_cause: "vehicle and boat emissions, regional ozone drift, and coastal haze",
  local_factor: "steady ocean breezes usually dispersing pollutants effectively",
},

"buena-park": {
  city_feature: "a suburban city in northwest Orange County known for entertainment attractions and residential areas",
  climate_description: "a warm-summer mediterranean climate with dry summers",
  pollution_cause: "freeway emissions, vehicle exhaust, and regional smog",
  local_factor: "limited coastal influence allowing ozone buildup on hot days",
},

"milpitas": {
  city_feature: "a Silicon Valley city near San Jose known for tech industry and suburban communities",
  climate_description: "a coastal inland mediterranean climate with warm, dry summers",
  pollution_cause: "freeway emissions, industrial activity, and regional ozone transport",
  local_factor: "bay breezes moderating air quality except during stagnant heat events",
},
"upland": {
  city_feature: "a suburban city at the base of the San Gabriel Mountains in San Bernardino County",
  climate_description: "a warm-summer mediterranean climate with hot, dry summers and mild winters",
  pollution_cause: "vehicle emissions, regional smog from the Inland Empire, and nearby industrial activity",
  local_factor: "valley-edge location that can trap ozone during stagnant air conditions",
},

"tustin": {
  city_feature: "a central Orange County city known for suburban neighborhoods and old town charm",
  climate_description: "a coastal inland mediterranean climate with warm, dry summers",
  pollution_cause: "vehicle traffic and ozone drift from inland regions",
  local_factor: "mild ocean influence helping to disperse pollutants most of the year",
},

"alameda": {
  city_feature: "an island city in the San Francisco Bay known for historic homes and naval history",
  climate_description: "a cool-summer mediterranean climate moderated by ocean breezes",
  pollution_cause: "vehicle emissions and regional ozone transport from inland Bay Area",
  local_factor: "bay winds keeping pollution levels generally low and stable",
},

"carmichael": {
  city_feature: "a suburban community in Sacramento County known for residential neighborhoods and parks",
  climate_description: "a hot-summer mediterranean climate with dry summers and foggy winters",
  pollution_cause: "vehicle exhaust, residential wood burning, and regional ozone",
  local_factor: "flat valley terrain leading to stagnant air and inversion layers in winter",
},

"chino-hills": {
  city_feature: "a hilly suburban city on the border of Los Angeles, Orange, and San Bernardino counties",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle emissions, regional smog, and dust from open lands",
  local_factor: "elevated hills aiding in moderate air circulation compared to nearby basins",
},

"napa": {
  city_feature: "a Northern California city known for its vineyards and wine industry in Napa Valley",
  climate_description: "a mediterranean climate with warm, dry summers and cool, wet winters",
  pollution_cause: "vehicle emissions, agricultural activity, and wildfire smoke in dry months",
  local_factor: "valley topography that can trap pollutants during calm weather periods",
},

"bellflower": {
  city_feature: "a suburban city in southeast Los Angeles County with residential and commercial zones",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "vehicle exhaust, freeway emissions, and regional smog",
  local_factor: "limited air circulation allowing occasional buildup of ozone and particulates",
},

"pleasanton": {
  city_feature: "a city in the Tri-Valley region known for its suburban communities and business parks",
  climate_description: "a hot-summer mediterranean climate with low humidity",
  pollution_cause: "commuter traffic, regional ozone drift, and wildfire smoke",
  local_factor: "valley basin setting where pollutants can accumulate in stagnant air",
},

"rocklin": {
  city_feature: "a suburban city in Placer County near Sacramento known for residential growth and rolling terrain",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool winters",
  pollution_cause: "vehicle emissions, regional ozone, and wildfire smoke during summer",
  local_factor: "inland elevation providing slightly better air movement than valley floor cities",
},

"apple-valley": {
  city_feature: "a high desert town in San Bernardino County known for wide-open landscapes and dry climate",
  climate_description: "a desert climate with very hot summers and cool winters",
  pollution_cause: "vehicle emissions, dust, and regional smog carried from the Los Angeles basin",
  local_factor: "frequent winds dispersing pollutants but causing dust issues",
},

"redlands": {
  city_feature: "a historic Inland Empire city with citrus heritage and suburban neighborhoods",
  climate_description: "a warm-summer mediterranean climate with hot, dry summers",
  pollution_cause: "vehicle traffic, warehouse emissions, and regional ozone",
  local_factor: "inland valley location that can trap ozone under high pressure systems",
},

"lake-elsinore": {
  city_feature: "a Riverside County city surrounding a large natural lake and growing suburban zones",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, dust, and regional smog transport",
  local_factor: "valley setting allowing pollutants to collect during stagnant conditions",
},

"turlock": {
  city_feature: "a Central Valley city known for agriculture and California State University, Stanislaus",
  climate_description: "a hot-summer mediterranean climate with dry summers and foggy winters",
  pollution_cause: "agricultural dust, vehicle emissions, and regional ozone transport",
  local_factor: "flat valley geography contributing to frequent winter inversions",
},

"tulare": {
  city_feature: "a Central Valley city with strong agricultural presence and dairy industry",
  climate_description: "a hot-summer mediterranean climate with long, dry summers",
  pollution_cause: "agricultural activity, vehicle emissions, and regional ozone pollution",
  local_factor: "inland valley conditions trapping pollutants during calm air periods",
},

"walnut-creek": {
  city_feature: "a suburban city in Contra Costa County known for shopping districts and surrounding hills",
  climate_description: "a warm-summer mediterranean climate with hot, dry summers",
  pollution_cause: "commuter traffic, regional ozone, and occasional wildfire smoke",
  local_factor: "hilly terrain improving air flow compared to low-lying Bay Area valleys",
},

"eastvale": {
  city_feature: "a rapidly developing suburban city in northwestern Riverside County",
  climate_description: "a warm-summer mediterranean climate with dry summers and mild winters",
  pollution_cause: "truck and commuter traffic, regional smog, and dust from construction",
  local_factor: "inland location with limited wind movement leading to high ozone levels on hot days",
},

"camarillo": {
  city_feature: "a Ventura County city known for agriculture and coastal proximity",
  climate_description: "a coastal mediterranean climate with mild, pleasant temperatures year-round",
  pollution_cause: "vehicle emissions, agricultural dust, and regional ozone drift",
  local_factor: "ocean breezes typically keeping pollution levels low",
},

"baldwin-park": {
  city_feature: "a dense suburban city in the San Gabriel Valley with major freeway access",
  climate_description: "a warm-summer mediterranean climate influenced by inland heat",
  pollution_cause: "vehicle exhaust, freeway traffic, and regional smog from the LA basin",
  local_factor: "limited air movement causing occasional high particulate levels in summer",
},
"yuba-city": {
  city_feature: "an agricultural city in the Sacramento Valley known for farming and community events",
  climate_description: "a hot-summer mediterranean climate with dry summers and cool, foggy winters",
  pollution_cause: "agricultural burning, vehicle emissions, and dust from farmlands",
  local_factor: "valley location that can trap pollutants under inversion layers",
},

"madera": {
  city_feature: "a central California city surrounded by farmlands and vineyards",
  climate_description: "a mediterranean climate with hot, dry summers and mild, wet winters",
  pollution_cause: "dust, agricultural activities, and traffic emissions",
  local_factor: "flat terrain allowing limited dispersion of air pollutants",
},

"lodi": {
  city_feature: "a small city in San Joaquin County known for wineries and agriculture",
  climate_description: "a mediterranean climate with warm summers and cool, damp winters",
  pollution_cause: "vineyard dust, pesticides, and regional smog from nearby metro areas",
  local_factor: "inland valley setting that can accumulate haze during calm weather",
},

"redondo-beach": {
  city_feature: "a coastal city in Los Angeles County known for beaches and harbor activities",
  climate_description: "a coastal mediterranean climate with mild temperatures and ocean breezes",
  pollution_cause: "vehicle traffic, port emissions, and coastal shipping activity",
  local_factor: "marine layer and sea breezes influencing daily air quality changes",
},

"palo-alto": {
  city_feature: "a tech hub in the San Francisco Peninsula known for innovation and green spaces",
  climate_description: "a mediterranean climate with dry summers and wet winters moderated by coastal influence",
  pollution_cause: "vehicle exhaust, tech industry operations, and regional smog",
  local_factor: "bay breezes generally improving air quality but trapping pollution during calm days",
},

"davis": {
  city_feature: "a university town west of Sacramento known for biking culture and sustainability",
  climate_description: "a mediterranean climate with hot summers and cool, foggy winters",
  pollution_cause: "vehicle traffic, agricultural dust, and ozone drift from nearby regions",
  local_factor: "flat terrain that can limit pollutant dispersion during temperature inversions",
},

"yorba-linda": {
  city_feature: "a suburban city in Orange County known for residential areas and rolling hills",
  climate_description: "a warm-summer mediterranean climate with dry, sunny conditions most of the year",
  pollution_cause: "vehicle exhaust and smog from nearby freeways",
  local_factor: "hilly topography that can concentrate pollutants in lower valleys",
},

"union-city": {
  city_feature: "a diverse suburban city in the East Bay region of the San Francisco Bay Area",
  climate_description: "a mild mediterranean climate with coastal influences and moderate humidity",
  pollution_cause: "freeway traffic, industrial emissions, and regional smog drift",
  local_factor: "bay breezes helping to disperse pollutants most days",
},

"castro-valley": {
  city_feature: "a suburban community in Alameda County with residential and hilly terrain",
  climate_description: "a mediterranean climate with warm summers and cool, foggy mornings",
  pollution_cause: "vehicle emissions and regional smog from urban centers",
  local_factor: "valley terrain occasionally trapping air pollution during inversions",
},

"south-san-francisco": {
  city_feature: "an industrial and biotech hub on the San Francisco Peninsula",
  climate_description: "a cool coastal climate with frequent fog and mild temperatures",
  pollution_cause: "industrial emissions, airport traffic, and freeway congestion",
  local_factor: "coastal winds generally dispersing pollutants but fog can limit dispersion at times",
},

"laguna-niguel": {
  city_feature: "a planned coastal community in southern Orange County known for parks and open spaces",
  climate_description: "a mild mediterranean climate with moderate temperatures year-round",
  pollution_cause: "vehicle emissions and regional smog from inland areas",
  local_factor: "coastal breezes typically maintaining good air quality",
},

"lynwood": {
  city_feature: "an urban city in Los Angeles County with dense residential and commercial areas",
  climate_description: "a semi-arid climate with warm temperatures and little rainfall",
  pollution_cause: "traffic congestion, industrial emissions, and regional smog",
  local_factor: "limited green spaces and urban heat islands intensifying pollution buildup",
},

"porterville": {
  city_feature: "a city in the San Joaquin Valley known for agriculture and proximity to the Sierra foothills",
  climate_description: "a hot-summer mediterranean climate with dry, dusty conditions in summer",
  pollution_cause: "agricultural burning, dust, and regional smog drift",
  local_factor: "valley geography trapping pollutants especially during winter inversions",
},

"san-clemente": {
  city_feature: "a coastal city in southern Orange County known for beaches and Spanish-style architecture",
  climate_description: "a mild coastal mediterranean climate with ocean breezes and moderate temperatures",
  pollution_cause: "vehicle emissions and ozone drift from inland regions",
  local_factor: "marine airflow maintaining relatively clean air quality most of the year",
},

"florence-graham": {
  city_feature: "a densely populated area in south Los Angeles with industrial and residential zones",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "traffic congestion, industrial activity, and regional smog accumulation",
  local_factor: "urban density and limited airflow contributing to persistent air pollution",
},







    //colorado
  "westminster": {
  city_feature: "suburban community with proximity to Denver and the mountain foothills",
  climate_description: "a semi arid climate with cold winters, warm summers, and high elevation",
  pollution_cause: "vehicle emissions, regional ozone formation, and wildfire smoke during dry seasons",
  local_factor: "elevation induced temperature inversions, low humidity, and seasonal snowmelt stagnation",
  image: "/air-quality/westminster.webp",
},
"denver": {
  city_feature: "the capital of Colorado, located at the base of the Rocky Mountains with a vibrant urban center",
  climate_description: "a semi-arid climate with four distinct seasons, featuring cold winters and warm, sunny summers",
  pollution_cause: "vehicle emissions, industrial activities, and regional ozone formation",
  local_factor: "high elevation and surrounding mountains can trap pollutants during temperature inversions",
},

"colorado-springs": {
  city_feature: "a city at the foot of Pikes Peak known for military bases and outdoor recreation",
  climate_description: "a semi-arid climate with cool winters and warm, dry summers",
  pollution_cause: "traffic emissions, wind-blown dust, and seasonal wildfire smoke",
  local_factor: "mountain proximity influencing airflow and occasional pollutant trapping in valleys",
},

"aurora": {
  city_feature: "a large suburban city east of Denver with diverse neighborhoods and open plains",
  climate_description: "a semi-arid climate with low humidity and wide temperature variations",
  pollution_cause: "vehicle exhaust, industrial emissions, and dust from construction",
  local_factor: "flat terrain allowing pollution spread, but inversions can trap smog temporarily",
},

"fort-collins": {
  city_feature: "a northern Colorado city known for its university and craft breweries",
  climate_description: "a semi-arid climate with cold winters, mild springs, and sunny summers",
  pollution_cause: "vehicle traffic, agricultural dust, and occasional wildfire smoke",
  local_factor: "foothill location that can trap pollutants during calm wind conditions",
},

"lakewood": {
  city_feature: "a suburban city west of Denver with residential communities and mountain views",
  climate_description: "a semi-arid climate with moderate rainfall and dry air year-round",
  pollution_cause: "vehicle emissions and regional smog from Denver metro area",
  local_factor: "proximity to foothills causing occasional pollution buildup during inversions",
},

"thornton": {
  city_feature: "a growing suburban city north of Denver with a mix of residential and commercial zones",
  climate_description: "a semi-arid climate characterized by low humidity and variable temperatures",
  pollution_cause: "traffic-related emissions and regional ozone formation",
  local_factor: "flat plains sometimes allowing pollutants to stagnate under stable weather patterns",
},

"arvada": {
  city_feature: "a suburban city between Denver and the foothills known for family neighborhoods and parks",
  climate_description: "a semi-arid climate with sunny days and occasional winter snow",
  pollution_cause: "vehicle exhaust and regional ozone from nearby urban centers",
  local_factor: "foothill proximity influencing air movement and pollutant dispersion",
},

"greeley": {
  city_feature: "an agricultural and industrial city in northern Colorado known for livestock and education",
  climate_description: "a semi-arid climate with hot, dry summers and cold winters",
  pollution_cause: "agricultural emissions, vehicle traffic, and industrial operations",
  local_factor: "flat plains and light winds sometimes causing pollutant buildup",
},

"pueblo": {
  city_feature: "a southern Colorado city known for steel production and riverfront development",
  climate_description: "a semi-arid climate with hot summers and mild, dry winters",
  pollution_cause: "industrial emissions, vehicle exhaust, and dust from dry terrain",
  local_factor: "valley location near the Arkansas River can trap pollutants under calm conditions",
},

"centennial": {
  city_feature: "a suburban city south of Denver known for business parks and residential communities",
  climate_description: "a semi-arid climate with dry air, sunny skies, and cool evenings",
  pollution_cause: "traffic emissions and regional ozone",
  local_factor: "open plains with occasional inversions reducing air movement",
},

"boulder": {
  city_feature: "a city at the base of the Flatirons known for outdoor culture and sustainability efforts",
  climate_description: "a semi-arid mountain climate with cool winters and sunny, warm summers",
  pollution_cause: "vehicle traffic, regional ozone, and occasional wildfire smoke",
  local_factor: "mountain backdrop affecting wind flow and trapping pollution at times",
},

"highlands-ranch": {
  city_feature: "a planned suburban community south of Denver with family-oriented neighborhoods",
  climate_description: "a semi-arid climate with low humidity and clear skies most of the year",
  pollution_cause: "commuter traffic and regional smog drift",
  local_factor: "elevated plains offering good air circulation except during inversions",
},

"longmont": {
  city_feature: "a northern Colorado city with a mix of technology, agriculture, and residential areas",
  climate_description: "a semi-arid climate with hot summers and chilly winters",
  pollution_cause: "vehicle exhaust, agricultural dust, and ozone from nearby urban areas",
  local_factor: "proximity to foothills causing occasional pollutant buildup during calm days",
},

"castle-rock": {
  city_feature: "a growing city between Denver and Colorado Springs known for its scenic rock formations",
  climate_description: "a semi-arid climate with cool winters and warm, dry summers",
  pollution_cause: "traffic emissions and regional smog from Denver corridor",
  local_factor: "elevated terrain usually providing good air quality except under stagnant air conditions",
},

"loveland": {
  city_feature: "a northern Colorado city known for its art scene and proximity to Rocky Mountain parks",
  climate_description: "a semi-arid climate with cold winters and hot, dry summers",
  pollution_cause: "vehicle emissions, agricultural dust, and wildfire smoke",
  local_factor: "valley terrain near foothills occasionally concentrating pollutants",
},

"broomfield": {
  city_feature: "a suburban community between Denver and Boulder known for tech companies and open spaces",
  climate_description: "a semi-arid climate with moderate temperatures and low humidity",
  pollution_cause: "traffic emissions and ozone from regional sources",
  local_factor: "wind patterns from plains to foothills helping to disperse pollutants most days",
},

"grand-junction": {
  city_feature: "a western Colorado city surrounded by red rock mesas and agricultural land",
  climate_description: "a semi-arid desert climate with hot summers and cold, dry winters",
  pollution_cause: "vehicle emissions, agricultural burning, and dust from arid terrain",
  local_factor: "valley geography trapping pollutants during calm or cold weather conditions",
},

"commerce-city": {
  city_feature: "an industrial city north of Denver with refineries and manufacturing centers",
  climate_description: "a semi-arid climate with dry air and large daily temperature swings",
  pollution_cause: "industrial emissions, refinery activities, and heavy truck traffic",
  local_factor: "flat plains with limited air movement contributing to periodic pollution buildup",
},

"littleton": {
  city_feature: "a suburban city southwest of Denver with historic areas and riverside parks",
  climate_description: "a semi-arid climate with mild temperatures and low humidity",
  pollution_cause: "vehicle exhaust and regional smog from Denver metro area",
  local_factor: "proximity to foothills sometimes restricting air circulation during inversions",
},

// connecticut 

"bridgeport": {
  city_feature: "a coastal city on Long Island Sound known for its port, industry, and diverse neighborhoods",
  climate_description: "a humid continental climate with cold winters and warm, humid summers",
  pollution_cause: "vehicle traffic, industrial activity, and emissions from nearby urban areas",
  local_factor: "coastal humidity and calm air occasionally trapping pollutants near the shoreline",
},

"stamford": {
  city_feature: "a major business and financial hub in southwestern Connecticut with coastal access",
  climate_description: "a humid continental climate with cold winters and warm, breezy summers",
  pollution_cause: "commuter traffic, industrial emissions, and regional smog from New York City",
  local_factor: "coastal winds helping to disperse pollutants most days, but inversions can occur inland",
},

"new-haven": {
  city_feature: "a historic coastal city known for Yale University and cultural landmarks",
  climate_description: "a humid continental climate with moderate rainfall and four distinct seasons",
  pollution_cause: "vehicle traffic, industrial sources, and regional smog drift from the I-95 corridor",
  local_factor: "coastal breeze improving air quality but sometimes carrying pollutants inland",
},

"hartford": {
  city_feature: "the capital of Connecticut known for insurance companies and historic architecture",
  climate_description: "a humid continental climate with cold winters and hot, humid summers",
  pollution_cause: "vehicle emissions, industrial activity, and regional ozone",
  local_factor: "river valley location occasionally trapping pollutants during still air conditions",
},

"waterbury": {
  city_feature: "a city in western Connecticut historically known for brass manufacturing and industry",
  climate_description: "a humid continental climate with snowy winters and warm, humid summers",
  pollution_cause: "industrial remnants, vehicle emissions, and heating-related pollutants in winter",
  local_factor: "valley geography contributing to pollution accumulation on calm days",
},

"danbury": {
  city_feature: "a city in western Connecticut near the New York border known for manufacturing and retail",
  climate_description: "a humid continental climate with cold winters and warm, humid summers",
  pollution_cause: "traffic emissions, regional ozone, and industrial activity",
  local_factor: "rolling hills occasionally limiting pollutant dispersion in low-lying areas",
},

"new-britain": {
  city_feature: "a central Connecticut city known for its industrial heritage and manufacturing roots",
  climate_description: "a humid continental climate with distinct seasonal changes",
  pollution_cause: "vehicle traffic, heating emissions, and regional smog drift",
  local_factor: "inland valley terrain that can retain pollutants during stable weather conditions",
},

"west-hartford": {
  city_feature: "a suburban city west of Hartford known for shopping districts and green neighborhoods",
  climate_description: "a humid continental climate with cold winters and warm, humid summers",
  pollution_cause: "commuter traffic, heating emissions, and regional ozone drift",
  local_factor: "suburban elevation offering slightly better dispersion than nearby lowlands",
},

"hamden": {
  city_feature: "a suburban community north of New Haven known for Quinnipiac University and parks",
  climate_description: "a humid continental climate with warm summers and snowy winters",
  pollution_cause: "vehicle exhaust, residential heating, and regional smog",
  local_factor: "valley and hill terrain influencing local air movement and pollutant concentration",
},

"meriden": {
  city_feature: "a central Connecticut city located between Hartford and New Haven with residential and industrial areas",
  climate_description: "a humid continental climate with variable temperatures and moderate rainfall",
  pollution_cause: "vehicle emissions, small-scale industry, and regional ozone drift",
  local_factor: "inland valley geography causing occasional air stagnation during summer",
},

"east-hartford": {
  city_feature: "a suburban city across the Connecticut River from Hartford with industrial and commercial zones",
  climate_description: "a humid continental climate with cold winters and warm, humid summers",
  pollution_cause: "traffic emissions, industrial activity, and regional smog",
  local_factor: "river valley contributing to occasional pollution buildup during still conditions",
},

"shelton": {
  city_feature: "a suburban city along the Housatonic River known for business parks and green spaces",
  climate_description: "a humid continental climate with moderate precipitation year-round",
  pollution_cause: "vehicle traffic and regional ozone from nearby urban centers",
  local_factor: "river valley setting that can hold pollutants during low wind conditions",
},

// Delaware

"hockessin": {
  city_feature: "a suburban community in New Castle County known for residential neighborhoods and parks",
  climate_description: "a humid subtropical climate with hot summers and cool winters",
  pollution_cause: "vehicle traffic and regional emissions from Wilmington",
  local_factor: "slightly elevated terrain helping to disperse pollutants more efficiently",
},

"pike-creek-valley": {
  city_feature: "a residential area near Wilmington with mixed suburban and rural surroundings",
  climate_description: "a humid subtropical climate with warm, humid summers and mild winters",
  pollution_cause: "commuter traffic and occasional industrial emissions",
  local_factor: "valley terrain can trap air pollutants during calm, stagnant conditions",
},

"claymont": {
  city_feature: "a northern Delaware community along the Delaware River with urban and suburban areas",
  climate_description: "a humid subtropical climate with warm summers and cool winters",
  pollution_cause: "traffic along major corridors and emissions from nearby industrial zones",
  local_factor: "river proximity helping disperse pollutants but occasionally contributing to fog and stagnation",
},

"seaford": {
  city_feature: "a small city in Sussex County with agriculture and light industry",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "agricultural dust, vehicle emissions, and small-scale industrial activity",
  local_factor: "flat terrain leading to occasional accumulation of pollutants in still air",
},

"north-star": {
  city_feature: "a residential area in New Castle County near Wilmington",
  climate_description: "a humid subtropical climate with warm, humid summers and cool winters",
  pollution_cause: "local traffic and emissions from surrounding neighborhoods",
  local_factor: "suburban elevation aiding in moderate air circulation",
},

"wilmington-manor": {
  city_feature: "a residential community east of Wilmington with close access to urban centers",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic and regional smog from Wilmington",
  local_factor: "low-lying terrain that can trap pollutants during stagnant air periods",
},

"millsboro": {
  city_feature: "a small town in Sussex County known for agriculture and waterways",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "agricultural dust, vehicle emissions, and occasional local industry",
  local_factor: "flat coastal plain allowing limited natural dispersion of air pollutants",
},

"pike-creek": {
  city_feature: "a suburban community in New Castle County with residential and commercial zones",
  climate_description: "a humid subtropical climate with warm summers and cool winters",
  pollution_cause: "vehicle traffic and nearby industrial emissions",
  local_factor: "valley-like geography occasionally trapping smog in calm conditions",
},

"elsmere": {
  city_feature: "a small suburban town in New Castle County near Wilmington",
  climate_description: "a humid subtropical climate with warm, humid summers and cool winters",
  pollution_cause: "local traffic and urban emissions from nearby Wilmington",
  local_factor: "low-lying area that may experience limited pollutant dispersion on still days",
},
// Florida

"jacksonville": {
  city_feature: "the largest city in Florida by area, known for its riverfront, beaches, and logistics hubs",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic, industrial activity, and occasional wildfire smoke",
  local_factor: "coastal breezes generally dispersing pollutants, but stagnant days can trap smog inland",
},

"miami": {
  city_feature: "a major metropolitan city in southeastern Florida known for beaches, commerce, and tourism",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "vehicle emissions, shipping activity, and urban congestion",
  local_factor: "sea breezes helping disperse pollutants, though heat and humidity can worsen ozone levels",
},

"tampa": {
  city_feature: "a coastal city on Tampa Bay known for ports, business districts, and cultural attractions",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic, port emissions, and industrial activity",
  local_factor: "bay influence aiding pollutant dispersion but high humidity can increase ozone formation",
},

"orlando": {
  city_feature: "a central Florida city famous for theme parks, tourism, and residential development",
  climate_description: "a humid subtropical climate with hot summers and mild, dry winters",
  pollution_cause: "vehicle traffic, construction dust, and ozone formation",
  local_factor: "flat inland terrain sometimes allowing smog accumulation during calm weather",
},

"port-st-lucie": {
  city_feature: "a growing city on Florida’s east coast known for residential communities and golf courses",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, construction, and regional ozone",
  local_factor: "coastal breezes improving air quality most of the year",
},

"hialeah": {
  city_feature: "a dense urban city near Miami known for commerce and cultural diversity",
  climate_description: "a tropical monsoon climate with high humidity and hot summers",
  pollution_cause: "traffic congestion, industrial activity, and urban emissions",
  local_factor: "limited natural ventilation due to dense urban layout, occasionally trapping pollutants",
},

"cape-coral": {
  city_feature: "a city in southwest Florida known for canals, residential areas, and waterfront living",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and emissions from nearby urban centers",
  local_factor: "coastal airflow generally dispersing pollutants effectively",
},

"tallahassee": {
  city_feature: "the capital of Florida, located in the panhandle with a mix of government, education, and residential zones",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional ozone",
  local_factor: "slightly elevated terrain improving natural air circulation",
},

"fort-lauderdale": {
  city_feature: "a coastal city in Broward County known for boating, tourism, and urban development",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic emissions, port activity, and urban congestion",
  local_factor: "sea breezes helping disperse pollutants but high humidity can worsen ozone levels",
},

"pembroke-pines": {
  city_feature: "a suburban city in Broward County known for residential neighborhoods and parks",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional smog from Miami metro area",
  local_factor: "flat inland terrain with occasional pollution buildup during calm days",
},

"hollywood": {
  city_feature: "a coastal city in Broward County famous for beaches, tourism, and urban neighborhoods",
  climate_description: "a tropical monsoon climate with hot summers and warm winters",
  pollution_cause: "vehicle and port emissions, tourism-related traffic",
  local_factor: "ocean breezes dispersing pollutants but high humidity can worsen air quality temporarily",
},

"gainesville": {
  city_feature: "a northern Florida city known for the University of Florida and cultural institutions",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, university-related traffic, and occasional industrial activity",
  local_factor: "inland location allowing occasional ozone buildup during hot, still days",
},

"miramar": {
  city_feature: "a suburban city in Broward County with residential, commercial, and industrial zones",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "commuter traffic, industrial emissions, and urban smog",
  local_factor: "flat terrain with limited natural dispersion on calm days",
},

"palm-bay": {
  city_feature: "a city on Florida’s east coast known for aerospace industry and residential communities",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional ozone",
  local_factor: "coastal influence generally keeping air quality moderate",
},

"coral-springs": {
  city_feature: "a suburban city in Broward County with planned neighborhoods and parks",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional emissions from nearby urban centers",
  local_factor: "flat inland location occasionally trapping pollutants on hot, calm days",
},

"west-palm-beach": {
  city_feature: "a coastal city in Palm Beach County known for tourism, business, and urban development",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic emissions, port activity, and urban density",
  local_factor: "sea breezes helping disperse pollutants but high humidity can enhance ozone formation",
},
"lehigh-acres": {
  city_feature: "a suburban and semi-rural community in Lee County known for residential development and farmland",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, dust from development, and regional ozone",
  local_factor: "flat inland terrain occasionally allowing smog accumulation during calm conditions",
},

"lakeland": {
  city_feature: "a city in central Florida known for lakes, historic districts, and citrus agriculture",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, agricultural activity, and regional ozone drift",
  local_factor: "surrounding lakes and flat terrain influencing pollutant dispersion",
},

"spring-hill": {
  city_feature: "a suburban community in Hernando County with growing residential neighborhoods",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and occasional dust from construction",
  local_factor: "inland location with moderate air circulation helping disperse pollutants",
},

"pompano-beach": {
  city_feature: "a coastal city in Broward County known for beaches, marinas, and tourism",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "vehicle emissions, port and marina activity, and urban congestion",
  local_factor: "coastal breezes helping disperse pollutants but humidity can worsen ozone levels",
},

"clearwater": {
  city_feature: "a coastal city in Pinellas County famous for beaches, tourism, and water activities",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "traffic emissions, port activity, and regional ozone",
  local_factor: "sea breezes keeping air quality generally moderate",
},

"brandon": {
  city_feature: "a suburban community near Tampa known for residential areas and commercial zones",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional emissions from Tampa metro",
  local_factor: "flat inland terrain occasionally allowing pollutant buildup during calm conditions",
},

"miami-gardens": {
  city_feature: "a suburban city in northern Miami-Dade County with residential and commercial areas",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic congestion, urban emissions, and nearby industrial activity",
  local_factor: "coastal winds generally dispersing pollutants, but heat and humidity can elevate ozone",
},

"davie": {
  city_feature: "a suburban city in Broward County known for equestrian ranches and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, construction dust, and regional ozone",
  local_factor: "flat inland location with moderate dispersion on most days",
},

"riverview": {
  city_feature: "a suburban community in Hillsborough County with residential neighborhoods and parks",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional smog from Tampa metro",
  local_factor: "flat inland terrain sometimes allowing pollutant accumulation during calm weather",
},

"palm-coast": {
  city_feature: "a coastal city in Flagler County known for residential communities and natural preserves",
  climate_description: "a humid subtropical climate with warm, humid summers and mild winters",
  pollution_cause: "vehicle emissions and minor industrial activity",
  local_factor: "coastal airflow helping maintain generally clean air",
},

"boca-raton": {
  city_feature: "a coastal city in Palm Beach County known for upscale neighborhoods and business centers",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic emissions and regional smog from nearby urban centers",
  local_factor: "sea breezes aiding in pollutant dispersion most of the year",
},

"plantation": {
  city_feature: "a suburban city in Broward County with residential and commercial zones",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "commuter traffic and urban emissions",
  local_factor: "flat inland terrain sometimes trapping pollutants on hot, calm days",
},

"deltona": {
  city_feature: "a suburban city in Volusia County known for residential communities and schools",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions and regional ozone transport",
  local_factor: "flat inland terrain occasionally allowing pollutant accumulation during stagnant air conditions",
},

"sunrise": {
  city_feature: "a suburban city in Broward County with commercial centers and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional smog from Fort Lauderdale and Miami",
  local_factor: "flat terrain allowing occasional pollutant buildup on calm days",
},

"fort-myers": {
  city_feature: "a city in southwest Florida known for historic districts, beaches, and tourism",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, urban development, and occasional dust from construction",
  local_factor: "coastal breezes usually keeping pollutants dispersed",
},

"north-port": {
  city_feature: "a suburban city in Sarasota County with residential and planned communities",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional emissions",
  local_factor: "flat inland location helping moderate air pollution dispersion",
},

"alafaya": {
  city_feature: "a suburban area in eastern Orange County near Orlando with residential and commercial zones",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional smog from Orlando metro",
  local_factor: "inland terrain occasionally allowing ozone and particulate accumulation",
},
"deerfield-beach": {
  city_feature: "a coastal city in Broward County known for beaches, parks, and residential neighborhoods",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "vehicle traffic, urban emissions, and port activity",
  local_factor: "coastal breezes dispersing pollutants but high humidity can worsen ozone levels",
},
"town-n-country": {
  city_feature: "a suburban community near Tampa with residential neighborhoods and commercial zones",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional emissions from Tampa metro",
  local_factor: "flat inland terrain occasionally allowing pollutant accumulation during calm weather",
},

"daytona-beach": {
  city_feature: "a coastal city in Volusia County known for beaches, motorsports, and tourism",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, urban traffic, and tourism-related activity",
  local_factor: "sea breezes helping disperse pollutants most of the year",
},

"homestead": {
  city_feature: "a city in Miami-Dade County near the Everglades known for agriculture and residential areas",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "vehicle traffic, agricultural dust, and regional emissions",
  local_factor: "flat coastal plains aiding moderate pollutant dispersion",
},

"kissimmee": {
  city_feature: "a city near Orlando known for tourism, resorts, and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, tourism activity, and regional ozone",
  local_factor: "flat inland terrain sometimes allowing pollutant accumulation during calm weather",
},

"doral": {
  city_feature: "a suburban city near Miami known for logistics, commercial areas, and residential zones",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic emissions, industrial activity, and urban congestion",
  local_factor: "coastal winds generally dispersing pollutants but high humidity can worsen ozone levels",
},

"miami-beach": {
  city_feature: "a coastal city on a barrier island known for tourism, nightlife, and beaches",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "vehicle traffic, port activity, and urban emissions",
  local_factor: "sea breezes maintaining generally good air quality despite dense tourism activity",
},

"boynton-beach": {
  city_feature: "a coastal city in Palm Beach County with residential neighborhoods and parks",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic emissions and regional ozone drift",
  local_factor: "coastal airflow helping disperse pollutants",
},

"largo": {
  city_feature: "a city in Pinellas County near the Gulf Coast known for residential areas and parks",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional urban emissions",
  local_factor: "coastal breezes aiding in pollutant dispersion",
},

"pine-hills": {
  city_feature: "a suburban community near Orlando with residential neighborhoods and schools",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional smog from Orlando metro",
  local_factor: "inland flat terrain occasionally allowing ozone accumulation during still days",
},

"the-villages": {
  city_feature: "a large retirement community in central Florida with residential neighborhoods and recreation centers",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions from local traffic and recreational activity",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"kendall": {
  city_feature: "a suburban area in Miami-Dade County with residential and commercial zones",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "vehicle traffic, urban congestion, and nearby industrial activity",
  local_factor: "coastal influence aiding dispersion of pollutants most days",
},

"lauderhill": {
  city_feature: "a suburban city in Broward County with residential and commercial neighborhoods",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "commuter traffic and regional smog from Fort Lauderdale and Miami",
  local_factor: "flat inland terrain occasionally allowing pollutant buildup",
},

"tamarac": {
  city_feature: "a suburban city in Broward County with residential areas and parks",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic and regional emissions",
  local_factor: "flat terrain aiding moderate air circulation most days",
},

"poinciana": {
  city_feature: "a planned community in central Florida with residential and recreational areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions and regional ozone transport",
  local_factor: "inland flat terrain occasionally allowing pollutant accumulation during calm conditions",
},

"weston": {
  city_feature: "a suburban city in Broward County with planned residential neighborhoods and green spaces",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "flat inland terrain allowing moderate dispersion of air pollutants",
},

"ocala": {
  city_feature: "a city in central Florida known for horse farms, parks, and residential areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions and dust from agricultural activity",
  local_factor: "inland plains occasionally allowing pollutant buildup during still weather",
},

"delray-beach": {
  city_feature: "a coastal city in Palm Beach County known for beaches, tourism, and residential areas",
  climate_description: "a tropical monsoon climate with hot, humid summers and warm winters",
  pollution_cause: "traffic emissions, tourism activity, and urban congestion",
  local_factor: "sea breezes generally keeping air quality moderate",
},

"port-orange": {
  city_feature: "a coastal city near Daytona Beach with residential neighborhoods and commercial zones",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional ozone drift",
  local_factor: "coastal airflow helping disperse pollutants most days",
},

// Georgia

"atlanta": {
  city_feature: "the capital of Georgia, a major metropolitan hub known for business, culture, and transportation",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "basin-like topography occasionally trapping pollutants during temperature inversions",
},

"macon": {
  city_feature: "a central Georgia city known for music history, education, and industrial areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional smog",
  local_factor: "flat inland terrain allowing moderate pollutant dispersion, with occasional accumulation",
},

"savannah": {
  city_feature: "a historic coastal city known for its architecture, tourism, and port activity",
  climate_description: "a humid subtropical climate with hot summers, mild winters, and high humidity",
  pollution_cause: "vehicle emissions, port activity, and regional urban smog",
  local_factor: "coastal breezes helping disperse pollutants but humidity can worsen ozone levels",
},


"south-fulton": {
  city_feature: "a suburban area south of Atlanta with residential and commercial zones",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic and regional smog from Atlanta metro",
  local_factor: "flat terrain aiding moderate pollutant dispersion most days",
},

"sandy-springs": {
  city_feature: "a suburban city north of Atlanta known for residential areas and corporate offices",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions and urban smog",
  local_factor: "slightly elevated terrain helping disperse pollutants efficiently",
},

"roswell": {
  city_feature: "a suburban city north of Atlanta known for historic districts and parks",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic and regional urban emissions",
  local_factor: "elevation and green spaces improving local air circulation",
},

"warner-robins": {
  city_feature: "a central Georgia city known for Robins Air Force Base and industrial areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and occasional dust",
  local_factor: "flat inland plains allowing moderate pollutant dispersion",
},

"mableton": {
  city_feature: "a suburban community west of Atlanta with residential neighborhoods",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic and regional urban smog",
  local_factor: "flat terrain aiding moderate air movement",
},

"alpharetta": {
  city_feature: "a suburban city north of Atlanta known for tech businesses and residential areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions and regional smog",
  local_factor: "slightly elevated terrain helping disperse pollutants efficiently",
},

"marietta": {
  city_feature: "a suburban city northwest of Atlanta with historic districts and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "rolling hills occasionally trapping pollutants in valleys",
},

"stonecrest": {
  city_feature: "a suburban city southeast of Atlanta with residential and commercial zones",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional urban emissions",
  local_factor: "flat terrain allowing moderate pollutant dispersion",
},

"smyrna": {
  city_feature: "a suburban city northwest of Atlanta with residential, commercial, and industrial areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic, industrial emissions, and urban smog",
  local_factor: "slightly elevated terrain helping disperse pollutants efficiently",
},

"valdosta": {
  city_feature: "a southern Georgia city near the Florida border known for education and regional commerce",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional ozone",
  local_factor: "flat inland terrain occasionally allowing pollutant accumulation during calm conditions",
},

"dunwoody": {
  city_feature: "a suburban city northeast of Atlanta with residential and commercial areas",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic and regional urban emissions",
  local_factor: "elevation and green spaces aiding local air circulation",
},

// Hawaii
"honolulu": {
  city_feature: "the capital of Hawaii, located on Oahu, known for tourism, business, and urban life",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions, urban activity, and occasional vog from volcanic activity",
  local_factor: "coastal breezes generally dispersing pollutants but valleys can trap vog locally",
},

"east-honolulu": {
  city_feature: "a suburban area east of Honolulu with residential neighborhoods and scenic views",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and local urban emissions",
  local_factor: "elevated terrain aiding in dispersing air pollutants efficiently",
},

"hilo": {
  city_feature: "a city on Hawaii’s Big Island known for rainfall, volcanoes, and harbor activities",
  climate_description: "a tropical rainforest climate with heavy rainfall and mild temperatures",
  pollution_cause: "vehicle emissions, volcanic vog, and harbor activity",
  local_factor: "coastal and mountainous terrain influencing localized air pollution patterns",
},

"pearl-city": {
  city_feature: "a suburban area near Honolulu with residential and commercial zones",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and urban emissions",
  local_factor: "coastal breezes generally dispersing pollutants",
},

"kailua": {
  city_feature: "a coastal town on Oahu known for beaches, residential neighborhoods, and tourism",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions and local urban activity",
  local_factor: "sea breezes helping maintain good air quality",
},

"waipahu": {
  city_feature: "a suburban community on Oahu with residential neighborhoods and local businesses",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and local emissions",
  local_factor: "flat terrain with coastal airflow aiding pollutant dispersion",
},

"kaneohe": {
  city_feature: "a town on Oahu known for scenic views, military presence, and residential areas",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle traffic, military activity, and local urban emissions",
  local_factor: "valley geography occasionally trapping pollutants",
},

"kahului": {
  city_feature: "a city on Maui known for its airport, commercial activity, and harbor",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions, harbor activity, and regional dust",
  local_factor: "coastal breezes generally dispersing pollutants",
},

"mililani-town": {
  city_feature: "a planned suburban community on Oahu with residential neighborhoods and parks",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and local emissions",
  local_factor: "elevated inland terrain aiding in pollutant dispersion",
},

"kapolei": {
  city_feature: "a growing suburban city on Oahu with residential, commercial, and industrial zones",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle traffic, industrial emissions, and urban activity",
  local_factor: "coastal winds generally dispersing pollutants",
},

"makakilo": {
  city_feature: "a suburban area on Oahu with residential neighborhoods and elevated terrain",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and local emissions",
  local_factor: "hilly terrain helping disperse pollutants efficiently",
},

"schofield-barracks": {
  city_feature: "a U.S. Army base on Oahu with residential and military facilities",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "military activity, vehicle traffic, and local emissions",
  local_factor: "elevated inland terrain aiding in pollutant dispersion",
},

"ocean-pointe": {
  city_feature: "a planned residential community on Oahu near Kapolei",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and residential activity",
  local_factor: "coastal breezes helping disperse pollutants",
},

"wailuku": {
  city_feature: "a town on Maui with historic districts, commercial activity, and residential neighborhoods",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions and commercial activity",
  local_factor: "coastal airflow generally dispersing pollutants",
},

"halawa": {
  city_feature: "a community on Oahu with residential and commercial zones near Pearl Harbor",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle traffic, industrial activity, and urban emissions",
  local_factor: "coastal breezes aiding pollutant dispersion",
},

"waimalu": {
  city_feature: "a suburban area on Oahu with residential neighborhoods and shopping centers",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and local urban emissions",
  local_factor: "coastal airflow generally dispersing pollutants",
},

"waianae": {
  city_feature: "a coastal town on Oahu known for beaches, fishing, and residential neighborhoods",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions and local activity",
  local_factor: "coastal winds maintaining generally good air quality",
},

"royal-kunia": {
  city_feature: "a suburban community on Oahu near Kapolei with residential neighborhoods",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "commuter traffic and residential emissions",
  local_factor: "flat coastal terrain helping disperse pollutants efficiently",
},

"hawaiian-paradise-park": {
  city_feature: "a residential area on Hawaii Island with rural and suburban neighborhoods",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions and residential activity",
  local_factor: "elevated inland terrain occasionally affecting pollutant dispersion",
},

"maili": {
  city_feature: "a coastal community on Oahu with residential neighborhoods",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "local traffic and urban emissions",
  local_factor: "sea breezes aiding air quality",
},

"nanakuli": {
  city_feature: "a coastal community on Oahu known for beaches and residential neighborhoods",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions and local activity",
  local_factor: "coastal winds generally dispersing pollutants",
},

"waihee-waiehu": {
  city_feature: "a community on Maui with residential neighborhoods and agricultural areas",
  climate_description: "a tropical savanna climate with warm temperatures year-round",
  pollution_cause: "vehicle emissions, agricultural dust, and local activity",
  local_factor: "coastal and valley airflow influencing localized pollution patterns",
},
// Idaho

"boise": {
  city_feature: "the capital of Idaho, known for its urban amenities, outdoor recreation, and technology sector",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional dust",
  local_factor: "basin-like terrain occasionally trapping pollutants during calm, stagnant conditions",
},

"meridian": {
  city_feature: "a rapidly growing suburb of Boise with residential neighborhoods and commercial zones",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional smog from Boise",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"nampa": {
  city_feature: "a city west of Boise known for agriculture, residential areas, and local commerce",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, agricultural dust, and industrial activity",
  local_factor: "flat plains sometimes allowing pollutant accumulation during calm weather",
},

"caldwell": {
  city_feature: "a city in the Boise metropolitan area with historic downtown and residential neighborhoods",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic, agricultural activity, and regional dust",
  local_factor: "flat terrain generally dispersing pollutants efficiently",
},

"idaho-falls": {
  city_feature: "a city in eastern Idaho known for energy research, industry, and outdoor recreation",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions and industrial activity",
  local_factor: "river valley occasionally trapping pollutants during temperature inversions",
},

"pocatello": {
  city_feature: "a city in southeastern Idaho with education, industry, and residential neighborhoods",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic and industrial emissions",
  local_factor: "valley terrain occasionally allowing smog accumulation during calm conditions",
},

"twin-falls": {
  city_feature: "a city in southern Idaho known for agriculture, tourism, and river gorges",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions and agricultural dust",
  local_factor: "flat plains helping moderate air circulation",
},

"post-falls": {
  city_feature: "a city in northern Idaho near Coeur d'Alene with residential neighborhoods and recreational areas",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "slightly elevated terrain helping disperse pollutants efficiently",
},

"mountain-home": {
  city_feature: "a city in southwestern Idaho near an Air Force base with residential and military areas",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions and base-related activity",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

// Illinois

"chicago": {
  city_feature: "the largest city in Illinois, known for its architecture, business districts, and lakefront",
  climate_description: "a humid continental climate with hot summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "lake breeze occasionally improving air quality, but urban density can trap pollutants",
},

"naperville": {
  city_feature: "a suburban city west of Chicago known for residential neighborhoods and commercial centers",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional urban emissions",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"joliet": {
  city_feature: "a city southwest of Chicago known for industry, logistics, and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional smog",
  local_factor: "flat terrain allowing moderate dispersion, with occasional smog accumulation",
},

"rockford": {
  city_feature: "a city in northern Illinois known for manufacturing, parks, and suburban neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "river valley occasionally trapping pollutants during calm weather",
},

"elgin": {
  city_feature: "a suburban city northwest of Chicago known for historic districts and residential areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional urban emissions",
  local_factor: "flat terrain allowing moderate pollutant dispersion",
},

"champaign": {
  city_feature: "a central Illinois city known for the University of Illinois, research, and residential areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, university activity, and regional smog",
  local_factor: "flat inland terrain generally allowing pollutants to disperse",
},

"waukegan": {
  city_feature: "a city on Lake Michigan known for industry, port activity, and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle and industrial emissions, port activity",
  local_factor: "lake breezes helping disperse pollutants, though urban areas can trap smog",
},

"cicero": {
  city_feature: "a dense suburban town near Chicago with industrial and residential zones",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban congestion",
  local_factor: "flat terrain with limited natural dispersion during calm weather",
},

"schaumburg": {
  city_feature: "a suburban city northwest of Chicago known for corporate offices and residential areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional smog from Chicago metro",
  local_factor: "flat inland terrain generally allowing moderate dispersion",
},

"evanston": {
  city_feature: "a city north of Chicago on Lake Michigan, known for Northwestern University and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, urban traffic, and university activity",
  local_factor: "lake breezes generally dispersing pollutants efficiently",
},

"arlington-heights": {
  city_feature: "a suburban city northwest of Chicago with residential neighborhoods and commercial centers",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "flat terrain aiding moderate pollutant dispersion",
},

"bolingbrook": {
  city_feature: "a suburban city southwest of Chicago known for residential neighborhoods and business parks",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic and regional urban emissions",
  local_factor: "flat inland terrain generally allowing moderate dispersion",
},

"decatur": {
  city_feature: "a city in central Illinois known for industry, agriculture, and residential areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "industrial emissions, vehicle traffic, and agricultural dust",
  local_factor: "flat terrain allowing moderate pollutant dispersion",
},

"palatine": {
  city_feature: "a suburban city northwest of Chicago with residential and commercial areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional smog",
  local_factor: "flat terrain generally allowing moderate dispersion",
},

"skokie": {
  city_feature: "a suburban village north of Chicago with residential and commercial zones",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic and urban emissions",
  local_factor: "flat terrain aiding pollutant dispersion",
},

"des-plaines": {
  city_feature: "a suburban city near Chicago with residential neighborhoods and industrial areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and commuter traffic",
  local_factor: "flat inland terrain generally allowing moderate dispersion",
},

"orland-park": {
  city_feature: "a suburban village southwest of Chicago with residential neighborhoods and shopping centers",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "flat terrain allowing moderate pollutant dispersion",
},

"oak-lawn": {
  city_feature: "a suburban village south of Chicago with residential, commercial, and industrial zones",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and commuter traffic",
  local_factor: "flat terrain generally allowing pollutants to disperse efficiently",
},

"mount-prospect": {
  city_feature: "a suburban village northwest of Chicago with residential neighborhoods and local businesses",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional smog",
  local_factor: "flat inland terrain aiding moderate pollutant dispersion",
},

"tinley-park": {
  city_feature: "a suburban village southwest of Chicago with residential neighborhoods and commercial areas",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic and regional urban emissions",
  local_factor: "flat terrain generally allowing moderate dispersion",
},

"normal": {
  city_feature: "a central Illinois city known for Illinois State University and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, university activity, and regional smog",
  local_factor: "flat inland terrain allowing moderate pollutant dispersion",
},

"hoffman-estates": {
  city_feature: "a suburban village northwest of Chicago with residential, commercial, and business centers",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "flat terrain generally allowing moderate dispersion",
},

"downers-grove": {
  city_feature: "a suburban village west of Chicago with residential neighborhoods and commercial zones",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic and regional smog",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"buffalo-grove": {
  city_feature: "a suburban village northwest of Chicago with residential neighborhoods and local businesses",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional emissions",
  local_factor: "flat inland terrain aiding moderate pollutant dispersion",
},
// Indiana

"indianapolis": {
  city_feature: "the capital of Indiana, known for sports, industry, and cultural landmarks",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "flat terrain generally allowing moderate pollutant dispersion, with occasional smog accumulation",
},

"fort-wayne": {
  city_feature: "a city in northeastern Indiana known for manufacturing, education, and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "river valleys occasionally trapping pollutants during calm weather",
},

"evansville": {
  city_feature: "a city in southwestern Indiana along the Ohio River, known for commerce and industry",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional smog",
  local_factor: "river proximity helping moderate air quality, but occasional stagnation possible",
},

"south-bend": {
  city_feature: "a city in northern Indiana known for the University of Notre Dame and manufacturing",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "flat inland terrain allowing moderate pollutant dispersion",
},

// iowa
"des-moines": {
  city_feature: "the capital of Iowa, known for insurance, finance, and cultural attractions",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"cedar-rapids": {
  city_feature: "a city in eastern Iowa known for manufacturing, arts, and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional smog",
  local_factor: "river valleys occasionally trapping pollutants during calm weather",
},

"davenport": {
  city_feature: "a city along the Mississippi River in eastern Iowa, known for commerce and cultural sites",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and river port activity",
  local_factor: "river proximity helping moderate air quality, but occasional stagnation possible",
},

"sioux-city": {
  city_feature: "a city in northwestern Iowa along the Missouri River, known for industry and transportation",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional dust",
  local_factor: "river valley occasionally trapping pollutants during calm weather",
},
// Kansas
"wichita": {
  city_feature: "the largest city in Kansas, known for aviation, manufacturing, and cultural landmarks",
  climate_description: "a humid subtropical climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional dust",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion, with occasional smog accumulation",
},

"topeka": {
  city_feature: "the capital of Kansas, known for government, education, and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, urban traffic, and regional industrial activity",
  local_factor: "flat terrain generally allowing pollutants to disperse efficiently",
},

"overland-park": {
  city_feature: "a suburban city in the Kansas City metropolitan area known for residential neighborhoods and commercial centers",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "commuter traffic and regional urban emissions",
  local_factor: "flat inland terrain allowing moderate pollutant dispersion",
},
//Kentucky

"louisville": {
  city_feature: "the largest city in Kentucky, known for the Kentucky Derby, shipping, and manufacturing",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "Ohio River proximity sometimes influencing local air quality, with occasional pollutant accumulation",
},

"lexington": {
  city_feature: "a central Kentucky city known for horse farms, education, and cultural attractions",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, residential emissions, and regional industrial activity",
  local_factor: "rolling hills generally allowing moderate pollutant dispersion",
},

"bowling-green": {
  city_feature: "a city in southern Kentucky known for automotive manufacturing and education",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional dust",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"owensboro": {
  city_feature: "a city in western Kentucky along the Ohio River known for industry and cultural events",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, industrial emissions, and regional smog",
  local_factor: "river proximity helping disperse pollutants, though occasional stagnation possible",
},
//Louisiana
"new-orleans": {
  city_feature: "the largest city in Louisiana, known for its culture, tourism, and port activity",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and port operations",
  local_factor: "coastal breezes generally dispersing pollutants, though low-lying areas can trap smog",
},

"baton-rouge": {
  city_feature: "the capital of Louisiana, known for government, industry, and education",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic, industrial emissions, and urban smog",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"shreveport": {
  city_feature: "a city in northwestern Louisiana known for industry, commerce, and cultural events",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "flat inland terrain generally allowing pollutants to disperse efficiently",
},

"lafayette": {
  city_feature: "a city in southern Louisiana known for Cajun culture, education, and industry",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic, industrial emissions, and urban smog",
  local_factor: "flat inland terrain with occasional localized smog accumulation",
},
// Maine
"bangor": {
  city_feature: "a city in central Maine known for education, healthcare, and regional commerce",
  climate_description: "a humid continental climate with warm summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, residential heating, and regional industrial activity",
  local_factor: "river valley terrain occasionally trapping pollutants during calm weather",
},
// Maryland
"baltimore": {
  city_feature: "the largest city in Maryland, known for its port, cultural landmarks, and industry",
  climate_description: "a humid subtropical climate with hot summers and mild to cool winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "Chesapeake Bay breezes helping disperse pollutants, though urban density can trap smog",
},

"annapolis": {
  city_feature: "the capital of Maryland, known for the U.S. Naval Academy and historic districts",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, port activity, and urban emissions",
  local_factor: "coastal breezes generally dispersing pollutants efficiently",
},

"frederick": {
  city_feature: "a city in western Maryland known for historic sites, residential neighborhoods, and commerce",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, local urban activity, and regional industrial pollution",
  local_factor: "valley terrain occasionally trapping pollutants during calm conditions",
},

"rockville": {
  city_feature: "a suburban city near Washington, D.C., with residential neighborhoods and commercial zones",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "commuter traffic and regional urban emissions",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},
// Massachusetts
"boston": {
  city_feature: "the capital of Massachusetts, known for its history, education, and financial districts",
  climate_description: "a humid continental climate with warm summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "coastal breezes generally dispersing pollutants, though urban density can trap smog",
},

"worcester": {
  city_feature: "a city in central Massachusetts known for education, healthcare, and manufacturing",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "inland terrain occasionally trapping pollutants during calm weather",
},
// Michigan
"detroit": {
  city_feature: "the largest city in Michigan, known for the automotive industry, music, and culture",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "flat terrain occasionally trapping pollutants, with Lake Erie breezes helping disperse air pollution",
},

"grand-rapids": {
  city_feature: "a city in western Michigan known for furniture manufacturing, healthcare, and cultural attractions",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "river valley occasionally trapping pollutants during calm weather",
},

"ann-arbor": {
  city_feature: "a city in southeastern Michigan known for the University of Michigan and cultural amenities",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, university activity, and urban traffic",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"lansing": {
  city_feature: "the capital of Michigan, known for government, education, and automotive industry",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional urban smog",
  local_factor: "flat terrain generally allowing moderate pollutant dispersion",
},
// Minnesota 
"minneapolis": {
  city_feature: "the largest city in Minnesota, known for commerce, arts, and the Mississippi River",
  climate_description: "a humid continental climate with warm summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "river and lake breezes generally dispersing pollutants, though urban density can trap smog",
},

"saint-paul": {
  city_feature: "the capital of Minnesota, known for government, historic neighborhoods, and cultural landmarks",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, urban traffic, and regional industrial activity",
  local_factor: "flat inland terrain allowing moderate pollutant dispersion, with occasional localized smog",
},

"duluth": {
  city_feature: "a port city on Lake Superior in northeastern Minnesota, known for shipping and tourism",
  climate_description: "a humid continental climate with warm summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, port activity, and industrial operations",
  local_factor: "lake breezes helping disperse pollutants efficiently",
},
// Missisippi
"jackson": {
  city_feature: "the capital of Mississippi, known for government, commerce, and cultural landmarks",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"gulfport": {
  city_feature: "a coastal city on the Gulf of Mexico known for port activity, tourism, and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle traffic, port and industrial activity",
  local_factor: "coastal breezes helping disperse pollutants, though occasional stagnation possible",
},

"biloxi": {
  city_feature: "a coastal city on the Gulf of Mexico known for casinos, tourism, and residential areas",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions, tourism-related activity, and port operations",
  local_factor: "coastal winds generally dispersing pollutants efficiently",
},

"hattiesburg": {
  city_feature: "a city in southern Mississippi known for education, healthcare, and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot, humid summers and mild winters",
  pollution_cause: "vehicle emissions and local urban activity",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},
// Missouri
"kansas-city": {
  city_feature: "the largest city in Missouri, known for jazz, barbecue, commerce, and industry",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion, with occasional smog accumulation",
},

"springfield": {
  city_feature: "a city in southwestern Missouri known for education, commerce, and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "flat terrain allowing pollutants to disperse efficiently",
},
// Montana
"billings": {
  city_feature: "the largest city in Montana, known for energy, commerce, and cultural attractions",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional dust",
  local_factor: "basin-like terrain occasionally trapping pollutants during calm conditions",
},

"missoula": {
  city_feature: "a city in western Montana known for education, outdoor recreation, and cultural amenities",
  climate_description: "a semi-arid climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, residential heating, and regional dust",
  local_factor: "valley terrain occasionally allowing smog accumulation during calm weather",
},

"bozeman": {
  city_feature: "a city in southwestern Montana known for education, tourism, and outdoor recreation",
  climate_description: "a semi-arid climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, construction activity, and regional dust",
  local_factor: "valley terrain occasionally trapping pollutants during stagnant conditions",
},

"helena": {
  city_feature: "the capital of Montana, known for government, history, and residential neighborhoods",
  climate_description: "a semi-arid climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and residential heating",
  local_factor: "basin-like terrain sometimes allowing smog accumulation during calm weather",
},
// Nebraska
"omaha": {
  city_feature: "the largest city in Nebraska, known for commerce, industry, and cultural attractions",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion, with occasional smog accumulation",
},

"lincoln": {
  city_feature: "the capital of Nebraska, known for government, education, and residential neighborhoods",
  climate_description: "a humid continental climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, urban traffic, and regional industrial activity",
  local_factor: "flat inland terrain generally allowing pollutants to disperse efficiently",
},
// Newada
"las-vegas": {
  city_feature: "the largest city in Nevada, known for entertainment, tourism, and casinos",
  climate_description: "a hot desert climate with very hot summers and mild winters",
  pollution_cause: "vehicle emissions, construction dust, and regional desert dust",
  local_factor: "surrounded by mountains which can occasionally trap pollutants during calm conditions",
},

"reno": {
  city_feature: "a city in northwestern Nevada known for casinos, tourism, and outdoor recreation",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, construction activity, and regional dust",
  local_factor: "valley terrain occasionally allowing smog accumulation during stagnant weather",
},

"henderson": {
  city_feature: "a suburban city near Las Vegas known for residential neighborhoods and commercial zones",
  climate_description: "a hot desert climate with very hot summers and mild winters",
  pollution_cause: "commuter traffic, construction dust, and regional desert dust",
  local_factor: "flat desert terrain generally allowing moderate dispersion, though mountains can trap pollutants locally",
},

"carson-city": {
  city_feature: "the capital of Nevada, known for government, history, and residential neighborhoods",
  climate_description: "a semi-arid climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions and local urban activity",
  local_factor: "basin-like terrain occasionally trapping pollutants during calm conditions",
},
// new Hampshire
"nashua": {
  city_feature: "a city in southern New Hampshire known for technology, commerce, and residential neighborhoods",
  climate_description: "a humid continental climate with warm summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, urban traffic, and regional industrial activity",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},
// New Jersey
"newark": {
  city_feature: "the largest city in New Jersey, known for its port, industry, and cultural landmarks",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and urban smog",
  local_factor: "coastal breezes generally dispersing pollutants, though dense urban areas can trap smog",
},

"jersey-city": {
  city_feature: "a city near New York City with residential neighborhoods, commerce, and cultural attractions",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle traffic, commuter emissions, and urban smog",
  local_factor: "coastal proximity helping disperse pollutants efficiently",
},

"trenton": {
  city_feature: "the capital of New Jersey, known for government, historic districts, and residential neighborhoods",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, urban traffic, and regional industrial activity",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},

"paterson": {
  city_feature: "a city in northern New Jersey known for industry, residential neighborhoods, and cultural diversity",
  climate_description: "a humid subtropical climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, industrial activity, and commuter traffic",
  local_factor: "hilly terrain occasionally trapping pollutants during calm weather",
},
// New Mexico
"albuquerque": {
  city_feature: "the largest city in New Mexico, known for technology, culture, and desert landscapes",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, construction dust, and regional desert dust",
  local_factor: "basin terrain occasionally trapping pollutants during calm conditions",
},

"las-cruces": {
  city_feature: "a city in southern New Mexico known for agriculture, education, and residential neighborhoods",
  climate_description: "a semi-arid climate with hot summers and mild winters",
  pollution_cause: "vehicle emissions, agricultural activity, and regional dust",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},
// New York
"new-york-city": {
  city_feature: "the largest city in the U.S., known for commerce, culture, and iconic landmarks",
  climate_description: "a humid subtropical climate with hot summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and dense urban smog",
  local_factor: "coastal and river breezes helping disperse pollutants, though urban density can trap smog",
},

"buffalo": {
  city_feature: "a city in western New York known for industry, education, and proximity to Niagara Falls",
  climate_description: "a humid continental climate with warm summers and cold, snowy winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "lake-effect winds from Lake Erie generally dispersing pollutants",
},

"rochester": {
  city_feature: "a city in western New York known for education, technology, and cultural institutions",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, industrial activity, and regional smog",
  local_factor: "lake-effect winds from Lake Ontario helping disperse pollutants efficiently",
},

"albany": {
  city_feature: "the capital of New York, known for government, education, and historic landmarks",
  climate_description: "a humid continental climate with warm summers and cold winters",
  pollution_cause: "vehicle emissions, urban traffic, and regional industrial activity",
  local_factor: "flat inland terrain generally allowing moderate pollutant dispersion",
},


 
};
