/***********************************************************
 *
 *	File:			countries.js
 *	Author:		RMS
 *	Created:	April 2011
 *
 **********************************************************/

 //===============================================
 //  ISO country codes found here: http://www.iso.org/iso/english_country_names_and_code_elements
 //  reprinted and commented out below, for reference
 //===============================================

/*
 Country names  ISO 3166-1-alpha-2 code

 AFGHANISTAN  AF
 ALAND ISLANDS  AX
 ALBANIA  AL
 ALGERIA  DZ
 AMERICAN SAMOA   AS
 ANDORRA  AD
 ANGOLA   AO
 ANGUILLA   AI
 ANTARCTICA   AQ
 ANTIGUA AND BARBUDA  AG
 ARGENTINA  AR
 ARMENIA  AM
 ARUBA  AW
 AUSTRALIA  AU
 AUSTRIA  AT
 AZERBAIJAN   AZ

 BAHAMAS  BS
 BAHRAIN  BH
 BANGLADESH   BD
 BARBADOS   BB
 BELARUS  BY
 BELGIUM  BE
 BELIZE   BZ
 BENIN  BJ
 BERMUDA  BM
 BHUTAN   BT
 BOLIVIA, PLURINATIONAL STATE OF  BO
 BONAIRE, SAINT EUSTATIUS AND SABA  BQ
 BOSNIA AND HERZEGOVINA   BA
 BOTSWANA   BW
 BOUVET ISLAND  BV
 BRAZIL   BR
 BRITISH INDIAN OCEAN TERRITORY   IO
 BRUNEI DARUSSALAM  BN
 BULGARIA   BG
 BURKINA FASO   BF
 BURUNDI  BI

 CAMBODIA   KH
 CAMEROON   CM
 CANADA   CA
 CAPE VERDE   CV
 CAYMAN ISLANDS   KY
 CENTRAL AFRICAN REPUBLIC   CF
 CHAD   TD
 CHILE  CL
 CHINA  CN
 CHRISTMAS ISLAND   CX
 COCOS (KEELING) ISLANDS  CC
 COLOMBIA   CO
 COMOROS  KM
 CONGO  CG
 CONGO, THE DEMOCRATIC REPUBLIC OF THE  CD
 COOK ISLANDS   CK
 COSTA RICA   CR
 COTE D'IVOIRE  CI
 CROATIA  HR
 CUBA   CU
 CURACAO  CW
 CYPRUS   CY
 CZECH REPUBLIC   CZ

 DENMARK  DK
 DJIBOUTI   DJ
 DOMINICA   DM
 DOMINICAN REPUBLIC   DO

 ECUADOR  EC
 EGYPT  EG
 EL SALVADOR  SV
 EQUATORIAL GUINEA  GQ
 ERITREA  ER
 ESTONIA  EE
 ETHIOPIA   ET

 FALKLAND ISLANDS (MALVINAS)  FK
 FAROE ISLANDS  FO
 FIJI   FJ
 FINLAND  FI
 FRANCE   FR
 FRENCH GUIANA  GF
 FRENCH POLYNESIA   PF
 FRENCH SOUTHERN TERRITORIES  TF

 GABON  GA
 GAMBIA   GM
 GEORGIA  GE
 GERMANY  DE
 GHANA  GH
 GIBRALTAR  GI
 GREECE   GR
 GREENLAND  GL
 GRENADA  GD
 GUADELOUPE   GP
 GUAM   GU
 GUATEMALA  GT
 GUERNSEY   GG
 GUINEA   GN
 GUINEA-BISSAU  GW
 GUYANA   GY

 HAITI  HT
 HEARD ISLAND AND MCDONALD ISLANDS  HM
 HOLY SEE (VATICAN CITY STATE)  VA
 HONDURAS   HN
 HONG KONG  HK
 HUNGARY  HU

 ICELAND  IS
 INDIA  IN
 INDONESIA  ID
 IRAN, ISLAMIC REPUBLIC OF  IR
 IRAQ   IQ
 IRELAND  IE
 ISLE OF MAN  IM
 ISRAEL   IL
 ITALY  IT

 JAMAICA  JM
 JAPAN  JP
 JERSEY   JE
 JORDAN   JO

 KAZAKHSTAN   KZ
 KENYA  KE
 KIRIBATI   KI
 KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF   KP
 KOREA, REPUBLIC OF   KR
 (no ISO code for Kosovo; using XK)
 KUWAIT   KW
 KYRGYZSTAN   KG

 LAO PEOPLE'S DEMOCRATIC REPUBLIC   LA
 LATVIA   LV
 LEBANON  LB
 LESOTHO  LS
 LIBERIA  LR
 LIBYAN ARAB JAMAHIRIYA   LY
 LIECHTENSTEIN  LI
 LITHUANIA  LT
 LUXEMBOURG   LU

 MACAO  MO
 MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF   MK
 MADAGASCAR   MG
 MALAWI   MW
 MALAYSIA   MY
 MALDIVES   MV
 MALI   ML
 MALTA  MT
 MARSHALL ISLANDS   MH
 MARTINIQUE   MQ
 MAURITANIA   MR
 MAURITIUS  MU
 MAYOTTE  YT
 MEXICO   MX
 MICRONESIA, FEDERATED STATES OF  FM
 MOLDOVA, REPUBLIC OF   MD
 MONACO   MC
 MONGOLIA   MN
 MONTENEGRO   ME
 MONTSERRAT   MS
 MOROCCO  MA
 MOZAMBIQUE   MZ
 MYANMAR  MM

 NAMIBIA  NA
 NAURU  NR
 NEPAL  NP
 NETHERLANDS  NL
 NEW CALEDONIA  NC
 NEW ZEALAND  NZ
 NICARAGUA  NI
 NIGER  NE
 NIGERIA  NG
 NIUE   NU
 NORFOLK ISLAND   NF
 NORTHERN MARIANA ISLANDS   MP
 NORWAY   NO

 OMAN   OM

 PAKISTAN   PK
 PALAU  PW
 PALESTINIAN TERRITORY, OCCUPIED  PS
 PANAMA   PA
 PAPUA NEW GUINEA   PG
 PARAGUAY   PY
 PERU   PE
 PHILIPPINES  PH
 PITCAIRN   PN
 POLAND   PL
 PORTUGAL   PT
 PUERTO RICO  PR

 QATAR  QA

 REUNION  RE
 ROMANIA  RO
 RUSSIAN FEDERATION   RU
 RWANDA   RW

 SAINT BARTHELEMY   BL
 SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA   SH
 SAINT KITTS AND NEVIS  KN
 SAINT LUCIA  LC
 SAINT MARTIN (FRENCH PART)   MF
 SAINT PIERRE AND MIQUELON  PM
 SAINT VINCENT AND THE GRENADINES   VC
 SAMOA  WS
 SAN MARINO   SM
 SAO TOME AND PRINCIPE  ST
 SAUDI ARABIA   SA
 SENEGAL  SN
 SERBIA   RS
 SEYCHELLES   SC
 SIERRA LEONE   SL
 SINGAPORE  SG
 SINT MAARTEN (DUTCH PART)  SX
 SLOVAKIA   SK
 SLOVENIA   SI
 SOLOMON ISLANDS  SB
 SOMALIA  SO
 SOUTH AFRICA   ZA
 SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS   GS
 SPAIN  ES
 SRI LANKA  LK
 SUDAN  SD
 SURINAME   SR
 SVALBARD AND JAN MAYEN   SJ
 SWAZILAND  SZ
 SWEDEN   SE
 SWITZERLAND  CH
 SYRIAN ARAB REPUBLIC   SY

 TAIWAN, PROVINCE OF CHINA  TW
 TAJIKISTAN   TJ
 TANZANIA, UNITED REPUBLIC OF   TZ
 THAILAND   TH
 TIMOR-LESTE  TL
 TOGO   TG
 TOKELAU  TK
 TONGA  TO
 TRINIDAD AND TOBAGO  TT
 TUNISIA  TN
 TURKEY   TR
 TURKMENISTAN   TM
 TURKS AND CAICOS ISLANDS   TC
 TUVALU   TV

 UGANDA   UG
 UKRAINE  UA
 UNITED ARAB EMIRATES   AE
 UNITED KINGDOM   GB
 UNITED STATES  US
 UNITED STATES MINOR OUTLYING ISLANDS   UM
 URUGUAY  UY
 UZBEKISTAN   UZ

 VANUATU  VU
 VATICAN CITY STATE   see HOLY SEE
 VENEZUELA, BOLIVARIAN REPUBLIC OF  VE
 VIET NAM   VN
 VIRGIN ISLANDS, BRITISH  VG
 VIRGIN ISLANDS, U.S.   VI

 WALLIS AND FUTUNA  WF
 WESTERN SAHARA   EH

 YEMEN  YE

 ZAMBIA   ZM
 ZIMBABWE   ZW
  
*/


//===============================================
//  coordinates for svg map
//===============================================

  var countryData = {};
  
  // South America
  countryData['br'] = {
    name: "Brazil",
    svg: "m320.174988,394.174988l0,-5l-3,0l0,-4l-2,-2l-4,0l0,-5l-1,-1l1,-1l0,-2l1,-1l0,-3l-2,-2l0,-3l-5,0l0,-7l-2,-2l-2,0l-3,-3l-3,0l-3,-3l0,-6l-2,0l-2,2l-2,0l-2,2l-5,0l0,-5l-2,2l-3,0l0,-2l-2,0l0,-4l-2,-2l3,-3l0,-4l2,-2l4,0l2,-2l0,-6l1,-1l0,-2l-2,-2l0,-3l2,0l0,-1l-1,0l0,-2l5,0l1,-1l0,3l1,-1l0,1l1,1l3,0l2,-2l1,0l2,-2l0,-1l-2,0l0,-3l-1,-1l0,-2l1,1l2,0l1,1l1,0l0,-1l1,-1l3,0l1,-1l0,-2l1,0l0,3l1,0l0,8l2,2l1,0l1,-1l1,0l2,-2l3,0l0,-1l4,0l1,1l2,0l2,-2l0,-2l2,-2l0,-1l1,1l0,3l1,1l0,2l1,1l1,0l0,2l-4,4l0,1l-2,2l0,1l1,1l2,-2l1,1l0,1l1,1l1,-1l1,0l0,2l1,-1l0,-1l1,-1l1,1l0,-2l1,-1l4,0l1,1l1,0l1,1l0,1l1,-1l1,1l0,2l-1,1l0,1l1,0l3,-3l2,2l7,0l6,6l1,0l1,1l2,0l2,2l0,10l-2,2l0,1l-4,4l0,2l-2,3l-1,-1l-1,1l0,14l-2,2l0,4l-1,1l0,2l-2,2l0,3l-3,3l-2,0l-1,1l-1,-1l-2,0l-1,1l0,1l-1,1l-2,0l-5,5l-2,0l1,1l0,1l-1,1l0,8l-3,3l0,2l-1,1l0,1l-1,1l0,1l-1,1l-1,0l1,-1l0,-1l1,-1l0,-1l1,-1l-2,0l0,1l-1,1l0,1l-1,1l0,2l-1,1l0,2l-3,3l0,-3l1,-1l-1,0l0,-1l-5,-5l-1,1l0,-1l-2,-2l-2,0l0,-1l9,-9l0,-5l-1,0zm6,-75l2,-2l0,-1l-2,2l0,1zm3,-5l-1,1l1,0l0,-1zm2,0l1,-1l-1,0l0,1zm1,0l1,1l0,-1l-1,0zm-2,1l-1,1l0,1l1,1l0,2l1,-1l2,0l1,-1l0,-1l1,-1l0,-1l-2,0l-1,1l-1,-1l-1,0zm0,-2l-1,0l1,1l0,-1zm1,-1l-1,1l1,0l0,-1zm0,-5l-1,0l0,1l1,-1zm13,11l-1,0l1,1l0,-1zm16,37l1,0l-1,-1l0,1zm-14,32l0,-1l-1,0l1,1zm-3,1l-1,1l1,0l0,-1zm-8,9l1,-1l-1,0l0,1zm0,3l0,1l1,-1l-1,0z",
    flag: "brazil.png",
    facts: { exposure:["$5,479","Low"], population:["203 Million","5"], lifeexp:["73","124"], landmass:["8,514,877","5"] },
    perils: ['earthquakes','all']
  };
  countryData['ar'] = {
    name: "Argentina",
    svg: "m304.174988,485.174988l0,-1l0,-1l1,1l1,-1l1,0l0,1l-1,1l-1,1l-2,0l1,-1zm-1,-1l-1,1l1,0l0,-1zm3,2l1,1l1,-1l0,-1l1,0l1,0l1,-1l0,-1l-1,1l-1,-1l-1,0l0,1l-1,1l-1,1zm-24,0l1,0l1,1l0,-1l-1,-1l0,-1l-1,0l0,-3l1,-1l1,-1l0,-1l1,0l1,-1l0,-2l1,-1l2,-2l1,-1l0,-1l1,-1l0,-2l-2,0l-2,-2l-1,-1l0,-1l1,-1l1,-1l1,-1l2,0l0,-1l1,-1l0,-3l1,-1l1,-1l0,-1l-1,0l1,-1l1,0l1,1l1,0l0,-2l-1,-1l-1,0l0,1l-1,0l-1,-1l0,-5l1,1l1,1l3,0l1,0l1,-1l0,-1l-1,-1l1,-1l0,-2l0,-1l0,-1l1,0l1,1l2,0l1,-1l3,0l1,-1l2,0l1,-1l0,-2l2,-2l0,-2l-1,-1l-1,-1l1,-1l0,-1l-1,-1l-1,0l-1,-1l0,-5l1,-1l0,-8l1,-1l0,-1l9,-9l0,-5l-1,0l-1,1l0,2l-3,3l-7,0l0,-1l1,-1l0,-2l2,-2l-3,-3l-2,0l-2,-2l-1,0l-6,-6l-2,0l-2,2l0,-2l-3,0l-1,-1l-3,3l0,4l-1,0l-2,2l0,8l-2,2l0,2l-2,2l0,6l-1,1l0,4l1,1l0,6l-1,1l0,4l-2,2l0,5l1,1l0,1l-1,1l0,1l-1,1l0,3l0,6l-1,1l0,3l1,1l0,3l1,1l-1,1l-1,0l2,2l-1,1l0,4l-1,1l0,1l-1,1l0,4l-3,3l0,2l1,1l0,1l1,0l1,1l0,3l1,1l3,0l1,1l3,0zm3,3l0,2l1,1l2,2l1,1l2,0l1,1l-1,1l-4,0l-1,-1l-2,0l0,-8l1,1zm12,7l-1,1l-2,0l0,-1l3,0z",
    flag: "argentina.png",
    facts: { exposure:["$1,706","Low"], population:["41.77 Million","32"], lifeexp:["77","68"], landmass:["2,780,400","8"] },
    perils: ['earthquakes','all']
  };
  countryData['co'] = {
    name: "Colombia",
    svg: "m261.174988,291.174988l1,-1l1,0l0,-2l2,-2l1,0l0,-4l1,-1l2,0l1,-1l2,0l4,-4l1,1l-2,2l0,1l-3,3l0,3l2,2l0,4l1,1l4,0l2,2l6,0l0,1l-1,1l0,6l1,1l-1,1l0,1l2,2l0,2l-1,1l0,-3l-1,1l-5,0l0,2l1,0l0,1l-2,0l0,3l2,2l0,2l-1,1l0,6l-1,1l-2,-2l2,-2l-2,-2l-6,0l0,-2l-5,-5l-4,0l-2,-2l-1,0l-2,-2l0,-3l1,0l3,-3l0,-9l-1,-1l0,-2l0,-1z",
    flag: "colombia.png",
    facts: { exposure:["$1,614","Medium"], population:["44.73 Million","30"], lifeexp:["75","97"], landmass:["1,138,910","26"] },
    perils: ['earthquakes','all']
  }
  countryData['pe'] = {
    name: "Peru",
    svg: "m254.175003,325.174988l0,3l1.999985,0l0,1l2,0l0,-2l1,-1l0,-1l2,-2l1,0l5,-5l0,-2l-1,-1l0,-1l1,0l5,5l0,2l6,0l2,2l-2,2l2,2l-1,1l-4,0l-2,2l0,4l-3,3l2,2l0,4l2,0l0,2l3,0l2,-2l0,5l2,0l2,2l0,8l-1,1l0,4l1,1l0,2l-2,2l0,2l-1,1l-1,0l-2,-2l0,-2l-2,0l-4,-4l-2,0l-4,-4l0,-4l-3,-3l0,-2l-1,-1l0,-2l-2,-2l0,-3l-2,-2l0,-2l-4.999985,-5l1,-1l0,-1l-1,-1l0,-3l2,-2z",
    flag: "peru.png",
    facts: { exposure:["$713","Medium"], population:["29.25 Million","42"], lifeexp:["72","127"], landmass:["1,285,216","20"] },
    perils: ['earthquakes','all']
  };
  countryData['ec'] = {
    name: "Ecuador",
    svg: "m258.174988,310.174988l2,2l1,0l2,2l3,0l0,1l1,1l0,2l-5,5l-1,0l-2,2l0,1l-1,1l0,2l-2,0l0,-1l-2,0l0,-3l2,-2l0,-2l-1,0l-1,1l-1,-1l0,-4l1,0l0,-2l1,-1l0,-2l1,0l2,-2zm-31.999985,4l1,1l0,3l-1,-1l0,-3zm-1,2l1,-1l-1,0l0,1zm3,0l0,-1l-1,1l1,0zm1,1l0,-1l-1,1l1,0zm2,0l1,0l-1,-1l0,1zm-3,1l0,1l1,-1l-1,0z",
    flag: "ecuador.png",
    facts: { exposure:["$337","Low"], population:["15.01 Million","65"], lifeexp:["76","82"], landmass:["283,561","73"] },
    perils: ['earthquakes','all']
  };
  countryData['gy'] = {
    name: "Guyana",
    svg: "m303.174988,297.174988l0,-2l2,-2l0,-1l-1,0l0,-1l2,-2l1,0l3,3l-1,1l0,2l1,-1l1,0l2,2l0,2l-1,1l-1,0l0,4l1,1l1,0l0,2l1,1l0,1l-1,0l-2,2l-1,0l-1,1l-1,0l-2,-2l0,-8l-1,0l0,-3l-1,0l-1,-1z",
    flag: "guyana.png",
    facts: null,
    perils: []
  };
  countryData['sr'] = {
    name: "Suriname",
    svg: "m321.174988,297.174988l0,1l-1,1l0,3l1,1l0,1l-1,1l0,2l-4,0l0,1l-2,0l0,-1l-1,-1l0,-2l-1,0l-1,-1l0,-4l1,0l1,-1l0,-2l2,0l1,1l1,-1l3,0l1,1z",
    flag: "suriname.png",
    facts: null,
    perils: []
  };
  countryData['gf'] = {
    name: "French Guiana",
    svg: "m320.174988,307.174988l0,-2l1,-1l0,-1l-1,-1l0,-3l1,-1l0,-1l1,0l1,1l1,0l2,2l0,1l1,1l-2,2l0,2l-2,2l-2,0l-1,-1z",
    flag: "french_guiana.png",
    facts: null,
    perils: []
  };
  countryData['bo'] = {
    name: "Bolivia",
    svg: "m281.174988,348.174988l3,0l2,-2l2,0l2,-2l2,0l0,6l3,3l3,0l3,3l2,0l2,2l0,7l5,0l0,3l2,2l0,3l-1,1l0,2l-1,1l0,-2l-1,-1l-6,0l-3,3l0,4l-2,2l-2,0l-2,2l0,-2l-3,0l-1,-1l-3,3l-1,0l-1,-1l0,-5l-1,0l0,-5l-1,-1l0,-3l-2,-2l2,-2l0,-2l-1,-1l0,-4l1,-1l0,-8l-2,-2z",
    flag: "bolivia.png",
    facts: { exposure:["$143","Low"], population:["10.12 Million","83"], lifeexp:["68","156"], landmass:["1,098,581","28"] },
    perils: ['earthquakes','all']
  };
  countryData['cl'] = {
    name: "Chile",
    svg: "m287.174988,499.174988l0,1l-1,0l1,-1zm-15,-42l0,2l1,0l0,-1l-1,-1zm8,-86l1,-1l0,-2l2,2l0,3l1,1l0,5l1,0l0,5l1,1l1,0l0,4l-1,0l-1,1l-1,1l0,2l0,3l0,2l0,1l-1,1l-1,1l0,2l-1,1l-1,1l0,2l0,4l-1,1l0,1l0,3l1,1l0,2l0,4l-1,1l0,4l-1,1l-1,1l0,5l1,1l0,1l-1,1l0,1l-1,1l0,5l0,4l-1,1l0,3l1,1l0,3l1,1l-1,1l-1,0l1,1l1,1l-1,1l0,1l0,3l-1,1l0,1l-1,1l0,2l0,2l-2,2l-1,1l0,2l1,1l0,1l1,0l1,1l0,1l0,2l1,1l3,0l1,1l3,0l-1,1l-1,1l-1,0l-1,1l0,3l-1,1l-1,-1l-1,0l-1,-1l1,-1l1,0l1,-1l-2,0l-1,1l0,1l-1,0l0,-1l0,-1l1,-1l1,0l1,0l1,-1l-1,0l-2,0l-1,1l0,1l-1,1l-1,-1l1,-1l-2,0l0,-1l-1,-1l1,0l1,0l1,0l-1,-1l-1,-1l0,-1l-1,-1l-1,-1l0,-1l1,0l0,1l1,1l1,-1l0,-1l-1,1l0,-1l-1,-1l-1,0l1,-1l1,-1l-1,-1l0,-2l1,-1l-1,-1l0,-1l3,0l-1,-1l0,-1l-1,1l-1,0l0,-1l1,-1l-1,-1l-1,-1l-1,0l0,1l-1,0l0,-1l1,-1l0,-1l1,-1l1,0l0,-1l1,-1l1,0l-1,1l0,1l-1,1l1,0l0,1l0,1l1,-1l0,-2l0,-1l1,-1l0,-1l1,-1l0,-1l-1,-1l0,-1l1,-1l-1,-1l1,-1l0,-2l1,-1l0,-1l-1,0l1,-1l-1,-1l-1,1l-1,0l-1,-1l0,-3l1,-1l0,-1l1,-1l0,-3l-1,-1l0,-2l0,-2l1,-1l0,-1l1,-1l0,-3l1,-1l1,-1l0,-3l1,-1l0,-3l1,-1l0,-2l-1,-1l0,-2l0,-2l1,-1l0,-2l-1,-1l0,-1l1,-1l0,-3l1,-1l0,-2l0,-3l0,-1l1,-1l0,-4l0,-3l1,-1l0,-2l0,-2l0,-5l-1,-1l0,-4l1,0zm-10,80l-1,1l0,1l1,1l1,0l0,-1l-1,-1l1,-1l0,-2l-1,0l0,2zm0,4l0,1l1,0l-1,-1zm-2,-1l0,1l1,0l-1,-1zm-1,6l1,-1l-1,0l0,1zm-9,-39l0,-1l-1,0l1,1zm31,77l0,1l1,-1l-1,0zm-5,-10l-2,0l-1,-1l0,1l-1,0l-1,0l1,1l-1,1l0,1l3,0l-1,1l-1,0l0,2l1,0l1,1l-2,0l-1,-1l0,-1l0,-1l-1,0l0,1l0,1l1,1l-1,0l-2,0l-1,0l1,1l3,0l2,0l2,0l1,0l0,-8zm-7,9l1,1l1,0l0,-1l-2,0zm3,0l0,1l1,0l1,1l0,-1l1,0l1,1l1,0l-1,-1l0,-1l-4,0zm5,0l0,1l1,0l1,0l1,-1l-3,0zm-10,-4l0,1l1,0l1,1l1,-1l-1,-1l-2,0zm-1,-1l-1,-1l-1,0l-2,0l1,1l1,1l1,0l0,1l1,0l0,-2zm-3,-1l2,0l-1,-1l-1,0l-1,-1l-1,-1l-1,0l3,3zm-4,-6l1,1l1,0l-1,-1l0,-1l-1,0l0,1zm2,-1l-1,0l1,1l1,0l-1,-1zm-2,-1l0,1l1,-1l1,0l-1,-1l-1,1zm-1,-3l0,1l1,0l0,-1l-1,0zm0,-2l0,1l1,0l1,-1l-2,0zm3,-5l-1,0l0,1l-1,1l0,1l-1,1l1,0l1,-1l0,1l1,1l0,-2l0,-3zm-3,1l0,1l1,-1l0,-1l-1,1zm0,-2l0,1l1,-1l0,-1l-1,0l0,1zm2,-2l-1,0l0,2l1,1l1,-1l0,-1l-1,-1zm3,-10l-1,-1l0,-1l1,-1l-1,0l-1,0l-1,1l1,1l0,1l1,1l1,0l0,-1zm-1,-2l1,1l0,-1l-1,0zm-3,11l0,1l1,0l-1,-1z",
    flag: "chile.png",
    facts: { exposure:["$1,165","Medium"], population:["16.89 Million","59"], lifeexp:["78","56"], landmass:["756,102","38"] },
    perils: ['earthquakes','all']
  };
  countryData['aw'] = {
    name: "Aruba",
    svg: "m281.174988,275.174988l0,1l-1,0l1,-1zm1,2l1,0l-1,-1l0,1z",
    flag: "aruba.png",
    facts: { exposure:["$22","Medium"], population:["106,113","190"], lifeexp:["76","83"], landmass:["180","216"] },
    perils: ['cyclones','all']
  };
  countryData['tt'] = {
    name: "Trinidad and Tobago",
    svg: "m303.174988,281.174988l0,2l-2,0l2,-2zm1,-1l1,-1l-1,0l0,1z",
    flag: "trinidad_tob.png",
    facts: { exposure:["$156","Medium"], population:["1.23 Million","155"], lifeexp:["71","135"], landmass:["5,128","173"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['ve'] = {
    name: "Venezuela",
    svg: "m275.174988,280.174988l1,1l0,2l-1,1l0,1l1,1l1,0l1,-1l0,-2l-1,-1l0,-1l2,-2l4,0l1,1l0,1l1,1l5,0l2,2l2,0l2,-2l2,0l1,1l0,1l3,0l1,1l0,2l-1,1l1,1l1,-1l2,0l0,1l-2,2l0,1l1,0l0,1l-2,2l0,2l1,1l0,2l-1,1l-3,0l-1,1l0,1l-1,0l-1,-1l-2,0l-1,-1l0,2l1,1l0,3l2,0l0,1l-2,2l-1,0l-2,2l-3,0l-1,-1l0,-3l-2,-2l0,-1l1,-1l-1,-1l0,-6l1,-1l0,-1l-6,0l-2,-2l-4,0l-1,-1l0,-4l-2,-2l0,-3l3,-3zm5,-2l1,0l0,-1l-1,0l0,1zm5,-1l0,-1l-1,1l1,0zm7,3l0,1l1,0l-1,-1zm3,1l1,-1l-1,0l0,1zm9,6l0,-1l-1,1l1,0z",
    flag: "venezuela.png",
    facts: { exposure:["$1,112","Low"], population:["27.64 Million","45"], lifeexp:["74","110"], landmass:["912,050","33"] },
    perils: ['earthquakes','all']
  };
  countryData['py'] = {
    name: "Paraguay",
    svg: "m311.174988,378.174988l0,5l4,0l2,2l0,4l3,0l0,5l-1,1l0,2l-3,3l-7,0l0,-1l1,-1l0,-2l2,-2l-3,-3l-2,0l-2,-2l-1,0l-6,-6l2,-2l0,-4l3,-3l6,0l1,1l0,2l1,1z",
    flag: "paraguay.png",
    facts: null,
    perils: []
  };
  countryData['uy'] = {
    name: "Uruguay",
    svg: "m322.174988,421.174988l-1,1l0,1l-2,2l-1,-1l-4,0l-1,-1l-2,0l-1,-1l0,-3l1,-1l0,-8l1,-1l2,0l2,2l0,1l1,-1l5,5l0,1l1,0l-1,1l0,3z",
    flag: "uruguay.png",
    facts: null,
    perils: []
  };

  // Central America & Caribbean
  countryData['gt'] = {
    name: "Guatemala",
    svg: "m227.175003,259.174988l5,0l0,5l2,2l-2,2l0,2l-2,2l-1,-1l-3,0l-2,-2l0,-3l1,-1l3,0l0,-2l-2,-2l1,0l0,-2z",
    flag: "guatemala.png",
    facts: { exposure:["$439","Low"], population:["13.82 Million","69"], lifeexp:["71","142"], landmass:["108,889","106"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['ni'] = {
    name: "Nicaragua",
    svg: "m244.175003,281.174988l-1,-1l-3,0l-2,-2l0,-1l-2,-2l1,0l1,-1l0,-1l0,-1l2,0l2,-2l0,-1l3,0l1,-1l0,1l1,1l-1,1l0,4l-1,1l0,5l-1,0z",
    flag: "nicaragua.png",
    facts: { exposure:["$162","Low"], population:["5.67 Million","108"], lifeexp:["72","130"], landmass:["130,370","97"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['cr'] = {
    name: "Costa Rica",
    svg: "m240.175003,283.174988l0,-1l1,0l-1,-1l0,-1l3,0l1,1l1,0l1,1l0,1l2,2l-1,1l0,2l-1,-1l0,1l-1,-1l1,-1l-1,-1l-2,0l0,-1l-1,-1l-1,0l1,1l0,1l-2,-2z",
    flag: "costa_rica.png",
    facts: { exposure:["$189","Low"], population:["4.58 Million","122"], lifeexp:["78","55"], landmass:["51,100","129"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['hn'] = {
    name: "Honduras",
    svg: "m234.175003,266.174988l1,-1l1,1l3,0l1,-1l2,0l1,1l1,0l2,2l-1,1l-3,0l0,1l-2,2l-2,0l0,1l-1,1l-1,0l0,-1l-1,0l0,-1l-1,-1l-1,0l-1,-1l0,-2l2,-2zm4,-2l1,0l0,-1l-1,1zm3,-1l-1,0l0,1l1,-1z",
    flag: "honduras.png",
    facts: { exposure:["$249","Low"], population:["8.14 Million","93"], lifeexp:["71","144"], landmass:["112,090","102"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['bz'] = {
    name: "Belize",
    svg: "m233.175003,259.174988l1,-1l0,5l-1,1l-1,0l0,-5l1,0zm3,2l0,-1l-1,1l1,0z",
    flag: "belize.png",
    facts: { exposure:["$10","Low"], population:["321,115","176"], lifeexp:["68","154"], landmass:["22,966","151"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['sv'] = {
    name: "El Salvador",
    svg: "m232.175003,270.174988l1,1l1,0l1,1l0,1l-1,1l-1,-1l-2,0l-1,-1l2,-2z",
    flag: "el_salvador.png",
    facts: { exposure:["$117","Low"], population:["6.07 Million","106"], lifeexp:["73","117"], landmass:["21,041","152"] },
    perils: ['earthquakes','all']
  };
  countryData['pa'] = {
    name: "Panama",
    svg: "m253.175003,291.174988l-1,-1l0,1l-2,-2l-2,0l-1,-1l0,-2l1,-1l1,1l0,1l1,0l1,1l1,0l1,-1l1,0l1.999985,-2l1,0l1,1l1,0l3,3l0,1l-1,1l0,1l-2,-2l0,-1l1,1l1,-1l-1,-1l-1,0l-1,-1l-2,0l-1.999985,2l0,1l1,1l-1,1l-1,0l0,-1zm-3,1l1,0l-1,-1l0,1zm7.999985,-4l-1,1l1,0l0,-1zm-8.999985,-3l1,1l0,-1l-1,0z",
    flag: "panama.png",
    facts: { exposure:["$202","Low"], population:["3.46 Million","131"], lifeexp:["78","54"], landmass:["75,420","117"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['cu'] = {
    name: "Cuba",
    svg: "m247.175003,246.175003l1,0l0,1l1,1l-1,0l-1,0l0,-2zm-4,1l1,0l1,-1l1,-1l1,0l1,-1l2,0l0,1l0,1l2,0l2,0l1,1l0.999985,1l1,-1l1,0l1,1l0,2l1,0l2,0l0,1l-1,1l-1,1l4,0l1,-1l1,1l2,0l1,-1l1,0l-2,-2l-2,0l0,-1l-1,-1l-2,0l-1,-1l-3,-3l-1,0l0,1l-1,0l-1,-1l-0.999985,-1l-2,0l-1,-1l-3,0l-1,1l-1,0l-1,0l-1,1l-1,0l0,1l-1,1l-1,1l1,0z",
    flag: "cuba.png",
    facts: { exposure:["$479","Low"], population:["11.09 Million","74"], lifeexp:["78","57"], landmass:["110,860","105"] },
    perils: ['cyclones','all']
  };
  countryData['jm'] = {
    name: "Jamaica",
    svg: "m260.174988,257.174988l2,0l1,1l1,0l1,1l-2,0l-1,0l0,1l-1,-1l-1,0l-1,-1l1,-1z",
    flag: "jamaica.png",
    facts: { exposure:["$204","Medium"], population:["2.87 Million","138"], lifeexp:["73","116"], landmass:["10,991","167"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['ky'] = {
    name: "Cayman Islands",
    svg: "m254.175003,253.175003l1,0l0.999985,0l-0.999985,1l-1,0l0,-1zm-3,1l0,1l1,0l0,-1l-1,0z",
    flag: "cayman.png",
    facts: { exposure:["$20","Medium"], population:["51,384","205"], lifeexp:["81","21"], landmass:["264","209"] },
    perils: ['earthquakes','cyclones','stormsurge','all']
  };
  countryData['do'] = {
    name: "Dominican Republic",
    svg: "m276.174988,253.175003l2,0l1,1l2,0l1,1l-1,0l1,0.999985l2,0l1,1l-1,1l-1,0l-1,-1l-1,0l-1,1l-2,0l-1,0l0,2l-1,-1l0,-1l-1,-1l1,-1l0,-2.999985z",
    flag: "dominican_rep.png",
    facts: { exposure:["$449","Medium"], population:["9.96 Million","85"], lifeexp:["77","61"], landmass:["48,670","131"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['ht'] = {
    name: "Haiti",
    svg: "m274.174988,257.174988l0,-1l-1,-1l0,-1l-1,0l-1,-1l1,0l2,0l2,0l0,3l-1,1l1,1l0,1l-1,-1l-2,0l-2,0l-1,0l-1,-1l1,0l4,0zm-1,0l0,-1l-1,0l1,1zm1,-3.999985l0,-1l-1,0l1,1z",
    flag: "haiti.png",
    facts: { exposure:["$145","Low"], population:["9.72 Million","87"], lifeexp:["62","182"], landmass:["27,750","147"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['pr'] = {
    name: "Puerto Rico",
    svg: "m292.174988,257.174988l0,1l-1,1l-2,0l-2,0l0,-1l0,-1l5,0zm-6,2l0,-1l-1,0l1,1z",
    flag: "puerto_rico.png",
    facts: { exposure:["$423","Medium"], population:["3.99 Million","128"], lifeexp:["79","43"], landmass:["13,790","162"] },
    perils: ['earthquakes','cyclones','all']
  };
  countryData['bs'] = {
    name: "Bahamas",
    svg: "m273.174988,248.175003l-1,0l0,-1l1,1zm-15,-17l0,1l1,0l1,-1l-2,0zm1,5l1,0l0,1l1,1l-1,1l1,0l0,2l-1,-1l-1,-1l0,-1l0,-2zm2,0l1,0l0,1l-1,-1zm2,-2l1,1l1,1l0,2l-1,-1l0,-1l-1,-1l0,-1zm-3,-4l1,0l1,1l0,1l0,2l-1,-1l0,-1l0,-1l-1,-1zm6,8l1,1l-1,1l0,-2zm0,3l-1,1l0,-1l1,0zm2.999023,-2l0,1l-1,0l1,-1zm1,5l-1,0l0,-1l1,1zm3,0l0,1l-1,0l1,-1zm-4.999023,-2l0,1l-1,-1l0,-1l1,1zm6,4l0,1l1,0l-1,-1zm2,1l0,-1l-1,0l1,1zm-5,3l0,1l1,-1l0,-1l-1,0l0,1z",
    flag: "bahamas.png",
    facts: { exposure:["$83","Medium"], population:["313,312","177"], lifeexp:["71","140"], landmass:["13,880","160"] },
    perils: ['cyclones','stormsurge','all']
  }; // includes all northern Caribbean islands
  countryData['ag'] = {
    name: "Antigua and Barbuda",
    svg: "m294.174988,260.174988l-1,0l0,-1l1,0l0,1zm-1,-2l1,0l1,-1l0,-1l-1,1l-1,0l0,1zm5,1l0,-1l-1,0l1,1zm1,3l0,-1l-1,0l1,1zm3,-2l0,-1l-1,0l1,1zm1,9l0,1l1,0l0,-1l-1,0zm0,2l0,1l1,0l0,-1l-1,0zm-1,2l0,1l1,0l0,-1l-1,0zm4,0l0,1l1,0l0,-1l-1,0zm-4,2l0,1l1,-1l-1,0zm-1,2l0,1l1,-1l-1,0zm1,-9l1,-1l-1,-1l0,2zm-1,-3l1,-1l-1,-1l0,2zm0.5,-4c-0.276001,0 -0.5,0.223999 -0.5,0.5s0.223999,0.5 0.5,0.5s0.5,-0.223999 0.5,-0.5s-0.223999,-0.5 -0.5,-0.5z",
    flag: "antigua_bar.png",
    facts: { exposure:["$23","Medium"], population:["87,884","196"], lifeexp:["75","85"], landmass:["443","199"] },
    perils: ['earthquakes','cyclones','stormsurge','all']
  }; // includes all southern Caribbean islands
  countryData['mx'] = {
    name: "Mexico",
    svg: "m177.175003,256.174988l-1,1l0,-1l1,0zm2,-17.999985l0,1l1,0l-1,-1zm-21,-15l0,1l-1,0l0,-1l1,0zm80,26l0,-1l1,0l-1,1zm-3,8.999985l0,1l1,0l-1,-1zm-74,-45.999985l4,0l1,-1l1,0l0,1l1,1l2,0l2,2l3,0l1,1l7,0l0,-2l4,0l5,5l0,2l2,2l1,0l1,1l1,-1l0,-2l3,0l2,2l0,1l2,2l0,1l1,1l0,2l1,1l0,1l1,0l1,1l2,0l1,1l0,1l-1,1l0,7l-1,1l0,1l1,1l0,2l1,1l0,1l2,2l0,2l1,1l0,0.999008l1,1l2,0l1,1l3,0l1,-1l2,0l1,1l1,-1l0,-1l2,-1.999008l0,-2l1,-1l0,-2l1,0l1,-1l6,0l0,2l-1,1l0,1l-1,1l0,3.999008l-1,-1l0,1l-2,2l-5,0l0,2l-1,0l2,2l0,2l-3,0l-1,1l0,3l-5,-5l-3,0l-2,2l-1,0l-1,-1l-2,0l-1,-1l-2,0l-2,-2l-1,0l-1,-1l-1,0l-3,-3l-3,0l-3,-2.999008l-1,0l-2,-2l0,-2l1,0l0,-4l-1,-1l0,-2l-5,-5l0,-1l-1,-1l0,-1l-1,0l-2,-2l0,-3l-2,0l0,-1l-2,-2l0,-1l-1,0l-2,-2l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l0,-3l-1,0l-1,-1l-1,0l-1,-1l-1,0l0,3l1,1l0,2l2,2l0,1l2,2l0,2l2,2l0,1l2,2l0,2l1,1l0,1l1,1l0,2l1,0l2,2l-1,1l0,1l-1,-1l0,-1l-4,-4l0,-2l-1,-1l-2,-2l0,-2l-1,1l-1,-1l-1,0l-2,-2l3,0l0,-1l-1,0l0,-3l-2,-2l-1,0l-1,-1l0,-2l-1,-1l0,-2l-1,-1l0,-1l-1,-1l0,-1zm11,11l1,1l0,-1l-1,0zm-1,-1l-1,0l0,1l1,-1zm-6,4l-1,0l1,1l0,-1zm23,22l0,-2l-1,1l1,1zm23,0l1,-1l-1,0l0,1zm27,3l-1,1l1,0l0,-1z",
    flag: "mexico.png",
    facts: { exposure:["$2,437","Medium"], population:["114 Million","11"], lifeexp:["76","72"], landmass:["1,964,375","15"] },
    perils: ['earthquakes','cyclones','all']
  };

  // United States
  countryData['us'] = {
    name: "United States",
    svg: "m252.175003,238.175003l-1,0l0,-1l1,1zm-126,-104l0,-1l-1,0l1,1zm-6,-9l1,0l0,1l-1,-1zm-53,0l0,1l-1,0l1,-1zm165,95l1,0l0,1l-1,1l0,-2zm-4.001007,-1l1,1l1,0l0,0l-1,-1l-1,0zm60.000992,-49l-1,0l-1,0l-1,1l-1,1l0,-1l-1,0l0,1l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l0,1l0,1l1,1l1,0l-1,1l-1,0l-1,1l0,-1l-1,1l-2,0l-2,0l-1,1l-1,-1l0,2l0,1l0,3l-2,2l-1,-1l0,-1l0,-1l-1,1l0,1l1,1l0,1l0,1l0,1l0,1l-1,1l-1,1l0,-1l1,-1l-1,-1l0,-1l0,-1l0,-1l0,-1l-1,1l0,1l0,1l-1,0l1,1l0,1l0,1l0,1l-1,0l1,1l1,0l0,2l-1,1l1,0l1,1l-1,1l-1,0l0,1l-1,1l1,0l-1,1l-1,0l-1,1l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l-1,1l0,2l1,1l0,2l0,2l1,1l0,3l1,1l1,1l0,2l0,3l-1,1l0,1l-1,1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l0,-1l-1,-1l0,-1l1,-1l-1,0l0,-1l0,-1l0,-1l-1,-1l0,-1l-2,-2l-1,0l-1,1l-2,0l-1,-1l-1,-1l-2,0l-2,0l0,-1l-1,1l-2,0l-1,0l-1,1l-1,-1l-1,0l1,1l1,0l0,0l1,0l0,1l-1,0l2,2l0,1l-2,-2l-1,1l0,-1l-1,1l-1,0l-1,-1l-1,-1l-1,1l-1,0l-1,-1l-1,0l-2,0l-1,1l-1,1l-2,2l-1,0l-1,0l0,1l-1,1l-1,1l-1,1l0,2l1,1l0,1l0,1l-1,-1l-2,0l-1,-1l-1,0l0,-1l-1,-1l0,-2l-1,-1l0,-1l-2,-2l0,-1l-2,-2l-3,0l0,2l-1,1l-1,-1l-1,0l-2,-2l0,-2l-5,-5l-4,0l0,2l-7,0l-1,-1l-3,0l-2,-2l-2,0l-1,-1l0,-1l-1,0l-1,1l-4,0l-1,-1l0,-1l-2,-2l-1,-1l-1,0l-1,-1l-2,0l-1,-1l0,-1l-1,-1l0,-1l-2,-2l0,-1l0,-1l-1,-1l-1,-1l0,-1l1,0l0,-1l1,-1l-2,0l0,1l-1,-1l-2,-2l0,-3l-1,-1l-1,-1l0,-2l1,-1l0,-2l0,-1l-1,-1l0,-2l0,-2l1,-1l0,-2l0,-3l0,-4l1,0l1,0l-1,-1l-1,0l0,-1l1,-1l-1,0l0,-1l-1,-1l0,-1l-1,-1l0,-1l1,0l1,1l2,0l1,0l0,1l-1,1l0,1l1,-1l0,1l1,0l0,-1l0,-1l0,-1l0,-1l0,-1l0,-1l-1,-1l10,0l21,0l15,0l18,0l6,0l1,-1l0,2l1,0l1,1l3,0l1,1l2,0l1,1l1,-1l1,1l2,0l-1,1l-1,0l-1,1l-1,1l0,1l-1,1l2,0l1,-1l0,1l1,1l1,-1l1,0l1,-1l2,-2l1,0l0,1l-1,1l1,1l1,0l1,1l2,0l1,-1l1,0l1,1l1,0l0,-1l1,0l0,1l1,1l1,1l1,1l-1,0l-1,-1l-3,0l-2,0l-1,0l-1,1l-1,0l-2,2l0,1l-1,1l1,0l1,-1l1,-1l0,1l-1,1l0,1l0,1l-1,1l0,2l0,3l0,1l1,1l0,1l1,0l1,-1l1,-1l0,-2l0,-1l-1,-1l0,-2l1,-1l0,-2l1,-1l0,1l1,0l0,-1l0,-1l1,-1l1,-1l1,0l1,1l1,1l0,1l0,2l0,1l-1,1l1,0l1,-1l1,1l0,2l1,1l-1,1l-1,1l0,1l1,1l-1,0l-1,1l1,1l2,0l1,0l1,-1l1,0l1,-1l1,0l1,-1l2,-2l0,-1l0,-1l6,0l1,-1l0,-1l0,-1l-1,0l2,-2l1,-1l1,0l1,-1l8,0l1,-1l1,0l1,-1l0,-1l0,-1l1,-1l0,-1l1,-1l0,-1l1,-1l1,1l1,0l1,-1l1,1l0,5l1,1l0,2l1,1zm-234.999989,76l0,-1l-1,1l1,0zm3,1l1,0l1,1l-1,0l-1,-1zm3,1l1,0l-1,1l0,-1zm1,2l1,-1l1,1l-1,1l-1,-1zm2,2l1,0l2.000004,2l-1,1l-1.000004,0l-1,0.999985l0,-3.999985zm-3,-2m1,1l-1,0l0,-1m-8,-4l1,1l-1,0l0,-1zm75.000004,-120.000999l-1,0l-4,-4l0,-2l-6,-6l0,-1l-3,0l-1,1l0,1l-1,0l-1,1l-4,-4l0,-2l-2,0l-1,1l-2,0l0,-41l-3,0l-2,-2l-11,0l-1,-1l-2,0l-1,-1l-5,0l-1,1l-2,0l-2,-2l-4,0l-1,-1l-1,0l-1.000004,1l-2,0l0,-1l1,-1.000004l-1,-1l-1,0l-3,3.000004l-4,0l-1,1l1,0l0,1l-2,0l0,-1l-2,2l-3,0l-2,2l0,2l-2,2l-6,0l0,2l2,2l2,0l4,4l4,0l-1,1l1,1l3,0l0,1l-2,0l0,1l-7,0l0,-2l-3,0l-1,1l0,1l-4,0l-2,2l0,1l4,0l0,1l-1,0l3,3l2,0l1,-1l3,0l1,1l2,-2l2,0l1,1l-1,1l0,1l1,1l0,2l-4,0l-2,2l-2,0l-1,-1l-2,2l1,1l0,1l-2,0l-1,1l0,3l1,1l2,0l1,1l2,0l0,1l-3,0l-1,-1l0,2l2,2l3,0l1,-1l0,-2l2,0l-1,1l0,2l1,1l0,4l1,0l2,-2l1,0l3,3l1,0l0,-3l2,0l0,1l-1,0l0,1l2,0l2,-2l0,2l-2,2l0,2l-3,3l0,1l-2,0l-2,2l0,0.999992l-4,0l-3,3l-1,0l1,1l1,-1l1,0l2,-2l1,1l1,-1l1,0l1,-1l2,0l3,-2.999992l1,0l3,-3l1,0l3.000004,-3l1,0l2,-2l0,-1l-1,-1l0,-1l2,-2l1,0l0,-1l-1,-1l2,0l4,-4l2,0l1,-1l1,1l-1,1l1,1l-4,0l-1,1l0,1l-1,1l0,2l1,0l-1,1l0,1l1,0l2,-2l1,0l2,-2l1,1l1,0l0,-1l1,-1l-1,0l0,-2l2,-2l0,1l-1,1l3,0l1,-1l0,2l2,0l0,1l1,0l1,-1l0,1l1,1l6,0l1,1l1,-1l0,1l1,1l2,0l1,-1l1,0l-1,1l2,2l1,0l3,3l1,0l1,1l1,-1l-1,-1l0,-1l2,0l0,2l2,0l-1,-1l0,-2l1,0l0,2l2,2l1,0l0,1l1,0l0,3l1,0l3,3l0,1.999992l-1,1l1,0l2,-1.999992l0,0.999992l1,1l0,3l1,0l1,-1l0,-3l-2,-1.999992zm-97.000004,-28l-1,1l-1,0l-1,-1l-4,0l0,-1l2,0l1,-1l2,2l2,0zm-9,12l-1,0l-1,-1l1,0l1,1zm16,3.000999l-1,-1l-1,0l-1,-1l1,0l1,-1l1,0l1,1l0,1l-1,1zm-10,10l-1,0l1,-1l0,1zm23,-6l1,0l-1,1l0,-1zm-3,-34l0,1l-1,-1l1,0zm1,1l1,1l-1,0l0,-1zm-20,41l1,1l-1,0l0,-1zm18,8l1,-1l0,1l-1,0zm-3,-2l1,1l0,1l-2,0l-1,1l-1,-1l1,-1l1,0l1,-1zm-5,3l1,0l0,1l-1,-1zm-1,1l1,0l0,1l-1,-1zm-2,1l1,0l0,1l-1,1l-2,0l1,-1l1,0l0,-1zm-2,1l-3,3l0,-1l2,-2l1,0zm-6,3l1,-1l0,1l-1,0zm-2,0l1,0l-1,1l0,-1zm-4,1l1,0l-1,1l0,-1zm-3,2l1,-1l0,1l-1,0zm-1.999999,-1l0.999999,0l-0.999999,1l-1,0l1,-1zm-5,0l1,0l0,1l-1,-1zm-1,1l1,0l0,1l-1,0l0,-1zm-2,1l1,-1l0,1l-1,0zm-2,-1l1,0l0,1l-1,-1zm43.999999,-12l0,-1l1,0l0,1l-1,0zm2,0l1,0l-1,1l0,-1zm11,-3l1,0l-1,1l0,-1zm3.000004,-3l1,0l-1,1l0,-1zm4,-5l1,0l1,1l0,1l-1,0l-1,1l-1,0l0,1l-1,0l0,-1l-1,0l0,1l-1,-1l0,-1l1,-1l1,1l1,0l0,-1l1,-1zm0,4l1,-1l0,1l-1,0zm2,-6l1,0l0,1l-1,0l-1,1l-1,-1l1,-1l1,0z" + 
          "m0,-1l0,1l-1,-1l1,0zm11,-6l1,0l-1,1l0,-1zm1,0l-1,-1l1,0l0,1zm0,1l2,-2l0,1l-1,1l-1,0zm3,-2l1,0l-1,1l0,-1zm27,12l-1,-1l0,-1l1,-1l1,1l1,0l0,1l-1,0l-1,1zm3,-3l2,2l0,1l-1,1l-1,-1l0,-3zm-1,4l1,1l0,3l-1,-1l0,-2l-1,-1l-1,0l1,-1l1,0l0,1zm3,4l-1,0l0,-3l1,1l0,2zm1,-3l1,0l0,1l-1,1l0,-1l-1,-1l0,-1l1,1zm1,2l1,0l-1,1l0,-1zm2,2l-1,-1l1,-1l0,2zm-1,1l2,2l0,1l-1,1l0,-1l-2,-2l0,-1l-1,0l0,-2l1,1l1,0l0,1zm-2,1l-1,1l0,-1l1,0zm1,1l1,1l0,1l-2,-2l1,0zm4,0l1,1l-1,0l0,-1zm0,-2l1,0l0,1l-2,0l1,-1zm33,81l0,1l1,0l-1,-1zm-2,-1l0,1l-1,0l0,-1l1,0zm-1,-2l0,1l-1,0l-1,-1l2,0zm3,2l1,0l0,1l-1,-1zm112.999985,-25l1,-1l3,0l-1,1l-1,0l-1,1l-1,0l0,-1zm9,-3l0,1l-1,0l1,-1zm1,1l0,-1l1,0l0,1l-1,0z",
    flag: "usa.png",
    facts: { exposure:["$75,589","High"], population:["313 Million","3"], lifeexp:["78","50"], landmass:["9,826,675","3"] },
    perils: ['earthquakes','cyclones','fire','stormsurge','winterstorms','scs','terrorism','disease','all']
  };

  // South Pacific (all islands east of IDL)
  countryData['as'] = {
    name: "American Samoa",
    svg: "m53.174999,302.174988l1,1l-1,0l0,-1zm5,6l0,1l1,0l0,-1l-1,0zm6.000004,19l1,-1l-1,0l0,1zm-2.000004,5l1,-1l-1,0l0,1zm-39,-4l1,0l-1,-1l0,1zm-3,0l0,1l1,-1l-1,0zm2,-5l1,-1l-1,0l0,1zm1,20l1,-1l-1,0l0,1zm-12.999999,13l1,-1l-1,0l0,1zm9.999999,1l0,-2l-1,1l1,1zm2,1l1,0l-1,-1l-1,0l1,1zm2,1l1,-1l-1,0l0,1zm-17.999999,0l0,-1l-1,0l1,1zm-5,5l1,-1l-1,0l0,1zm0,1l-1,-1l0,1l1,0zm0,1l0,1l1,0l0,-1l-1,0zm2,1l0,1l1,-1l-1,0zm0,2l0,1l1,-1l-1,0zm2,0l1,1l0,-1l-1,0zm-1,1l-1,1l1,0l0,-1zm-3,3l1,0l-1,-1l0,1zm3,1l1,0l-1,-1l0,1zm11.999999,-2l1,-1l-1,0l0,1zm10,1l1,1l0,-1l-1,0zm-12.999999,7l-1,-1l0,1l1,0zm1,0l-1,1l1,0l0,-1zm37.999999,1l1,-1l-1,0l0,1zm20.000004,-32l0,1l1,-1l-1,0zm1,18l1,-1l-1,0l0,1zm4,1l0,1l1,-1l-1,0zm2,2l0,-2l-1,1l1,1zm9,-6l0,1l1,-1l-1,0zm1,-1l1,1l0,-1l-1,0zm13,-22l0,1l1,-1l-1,0zm2,1l0,-1l-1,1l1,0zm-2,1l0,1l1,-1l-1,0zm2,1l1,1l0,-1l-1,0zm1,2l0,1l1,-1l-1,0zm-9,18l1,-1l-1,0l0,1zm-3,1l0,1l1,-1l-1,0zm7,4l1,1l0,-1l-1,0zm0,2l1,0l-1,-1l0,1zm11,0l0,1l1,-1l-1,0zm-5,8l1,-1l-1,0l0,1zm26,11l0,1l1,-1l-1,0zm-122.000003,66l1,0l-1,-1l-1,0l1,1zm0,2l1,-1l-1,0l0,1zm170.000003,-59l1,-1l-1,0l0,1z",
    flag: "samoa.png",
    facts: null,
    perils: []
  };

  // South Pacific (islands west of IDL)
  countryData['nc'] = {
    name: "New Caledonia",
    svg: "m865.174988,373.174988l-1,1l0,-1l1,0zm10,4l0,1l5,5l1,0l1,1l0,-1l-5,-5l-1,0l-1,-1zm9,8l0,-1l-1,1l1,0zm-2,-7l0,1l1,1l0,-1l-1,-1zm2,3l1,0l0,-1l-1,1zm-4,-2l1,-1l-1,0l0,1z",
    flag: "new_caledonia.png",
    facts: null,
    perils: []
  };
  countryData['fj'] = {
    name: "Fiji",
    svg: "m908.174988,366.174988l1,1l-1,0l0,-1zm5,4l1,0l0,-1l-1,1zm0,-2l1,0l0,-1l-1,1zm-12,13l0,1l1,0l0,-1l-1,0zm6,-29l0,1l1,0l0,-1l-1,0zm4,21l-1,1l1,0l0,-1zm1,-4l-1,-1l-1,0l-2,2l1,0l1,1l2,-2zm0,-2l1,-1l1,0l1,-1l0,-1l-1,1l-1,0l-1,1l0,1zm3,-1l-1,1l1,0l0,-1z",
    flag: "fiji.png",
    facts: null,
    perils: []
  };
  countryData['vu'] = {
    name: "Vanuatu",
    svg: "m889.174988,377.174988l1,-1l0,1l-1,0zm-1,-3l0,1l1,0l-1,-1zm0,-2l-1,0l1,1l0,-1zm-3,-3l1,0l0,-1l-1,1zm0,-3l1,1l0,-1l-1,0zm1,-2l-1,0l0,1l1,-1zm-3,0l0,1l1,0l-1,-1zm2,-1l1,-1l-1,0l0,1zm-1,-1l1,-1l-1,0l0,1zm-2,-1l0,-1l-1,-1l0,3l1,1l1,-1l-1,-1zm1,-3l0,1l1,-1l-1,0zm0,-2l0,1l1,0l-1,-1zm-1.998962,-5l0.999023,-1l-0.999023,0l0,1zm-2.001038,-3l1.000977,-1l-1.000977,0l0,1z",
    flag: "vanuatu.png",
    facts: null,
    perils: []
  };
  countryData['sb'] = {
    name: "Solomon Islands",
    svg: "m866.174988,351.174988l-2,-2l1,0l1,1l0,1zm2,-5l2,2l0,-0.998993l-1,-1.001007l-1,0zm-2,-2l-1,-1l-2,0l1,1l1,0l1,1l0,-1zm3,0l0,-1l-1,1l1,0zm-3,-4l0,1l1,1l0,1l1,1l0,-1l0,-2l-1,0l-1,-1zm-5,-2l2,2l1,0l-3,-3l0,1zm2,3l1,0l0,-1l-1,1zm2,1l1,1l0,-1l-1,0zm-3,0l0,1l1,-1l-1,0zm-2,-1l-1,0l1,1l0,-1zm-1,0l0,-2l-1,0l0,1l1,1zm-1,0l-1,-1l0,1l1,0zm-1,-2l1,-1l-1,0l0,1zm-1,-1l-1,0l1,1l0,-1zm0,-3l0,1l1,1l1,0l-1,-1l0,-1l-1,0z",
    flag: "solomon_is.png",
    facts: null,
    perils: []
  };
  countryData['pg'] = {
    name: "Papua New Guinea",
    svg: "m849.174988,349.174988l1,0l-1,1l0,-1zm-1,0l-1,0l1,1l0,-1zm6,-13l-1,1l1,0l0,-1zm-1,-1l1,0l0,-1l-3,-3l0,1l1,1l0,1l1,1zm-3,-4l1,-1l-1,0l0,1zm-3,11l-1,0l0,1l1,-1zm-2,-19l1,1l0,-1l-1,0zm2,4l-2,-2l0,1l1,1l0,2l1,-1l0,-1zm-4,-4l-1,0l-1,-1l0,1l1,1l1,0l1,1l1,0l-2,-2zm-3,-1l-1,0l1,1l0,-1zm4,5l-1,0l0,3l-1,1l-2,0l-1,-1l0,1l-3.999023,0l0,1l0.999023,0l2.000977,2l1.999023,0l3,-3l1,0l0,-1l1,-1l0,-1l-1,-1zm-10,4l-1,0l1,1l0,-1zm5,-12l-1,-1l0,1l1,0zm-8,2l1,-1l-1,0l-1,1l1,0zm1,10l0,-1l-1,1l1,0zm-3,-3l-1,0l1,1l0,-1zm11,14l-1,0l1,1l0,-1zm1,2l0,-1l-1,1l1,0zm0,1l1,1l0,-1l-1,0zm1,-5l-1,0l1,1l0,-1zm-1,8l1,-1l-1,0l0,1zm-24,-5l4,0l1,-1l0,-1l-1,-1l-1,0l0,-1l2,0l1,-1l5,0l3,3l0,2l2,2l2,0l1,1l3,0l1,1l1,0l-2,-2l0,-1l-2,0l0,-2l-1,0l-2,-2l0,-1l-3,-3l0,-1l3,0l0,-1l-2,-2l-4,0l0,-2l-6,-6l-4,0l-2,-2l0,20l1,1zm5,-3l1,1l0,-1l-1,0z",
    flag: "papua_new_guinea.png",
    facts: null,
    perils: []
  };
  countryData['fm'] = {
    name: "Federated States of Micronesia",
    svg: "M844.175,292.175h-1v-1L844.175,292.175z M844.175,292.175v-1h-1L844.175,292.175z M886.175,291.175v1h1L886.175,291.175zM882.175,281.175v-1h-1L882.175,281.175z M892.175,292.175v1h1v-1H892.175z M894.175,293.175h1l-1-1V293.175z M889.175,297.175v-1h-1L889.175,297.175z M897.175,304.175v1h1L897.175,304.175z M897.175,308.175v1h1v-1H897.175z M897.175,310.175v1l1-1H897.175zM897.175,312.175h1l-1-1V312.175z M901.175,316.175v1h1v-1H901.175z M902.175,319.175v-1h-1L902.175,319.175z M888.175,317.175h1v-1L888.175,317.175z M883.175,316.175l-1-1v1H883.175z M860.175,294.175v-1l-1,1H860.175z M828.175,258.175h1l-1,1V258.175zM828.175,256.175v1l1-1H828.175z M828.175,263.175v1h1L828.175,263.175z M828.175,267.175v1h1L828.175,267.175z M828.175,269.175v-1h-1L828.175,269.175z M826.175,271.175h1v-1L826.175,271.175z M820.175,231.175h-1v1L820.175,231.175z M809.175,285.175l-1,1h1V285.175z M800.175,291.175l-1,1h1V291.175z M826.175,273.175v-1l-1,1H826.175z",
    flag: "micronesia.png",
    facts: null,
    perils: ['earthquakes','all']
  }; // FSM; Marianas; lots of little islands

  // South, Southeast and Central Asia
  countryData['cn'] = {
    name: "China",
    svg: "M737.175,252.175v-4l-1-1l-1,1l-1-1h-1l-1,1h-1v-1h-1l-1-1v-2l-1-1h-2l-1-1l-2,2h-3l-1,1l-1-1v2l-1-1h-1v4l-1-1h-2l-1-1v-1h-2v-1l1-1v-1h-1l-1-1v-3h-1l-1,1h-1v-3l2-2v-1l1-1v-4l-2-2v-1l-1-1l-1,1h-1l-1-1v-1l-1-1v-1h-1l-1,1h-3l-5,5h-1l-2-2h-4l-1,1h-7l-1-1h-2l-5-5h-1l-2-2h-3l-2-2h-2l-1-1v-2l-1-1v-1h2v-2l-1-1v-4l-2-2v-1h-3l-2-2v-1l-2-2h-2l1-1v-4l-1-1h-1l-1-1v-2l3-3h4l2-2h2l2-2h2l2-2v-2l1-1v-2l-1-1v-3l-1-1l1-1h6v-1l-1-1v-1l2-2v-2h2l1,1h2l2-2v-3l1-1h1l2-2h2v2l2,2h2l3,3v7l1,1h6l2,2h1l2,2v2l2,2h13l3,3h8l2-2h8l5-5l-1-1v-2l1-1h6l2-2h2l4-4h5l1-1v-1l-3-3h-2l-1,1h-4l-1-1v-1l4-4v-1h3l3-3v-2l4-4v-2h-2v-1l2-2h5l1-1h2l2,2h2l2,2v3l2,2v2l1,1v3h3v1h2l2,2h1v4h5l2-2h3v3l-2,2v3l-1,1v1l-2,2l-1-1h-1l-2,2v6l-1,1v1l-2-2v1l-3,3h-1v1l-1,1l-1-1h-1l-1-1l-1,1v1l-4,4h-1v1h-2l-1,1h-1l-2,2h-1l-1,1v-1l1-1h-1v-2h1l2-2l-1-1h-3l-4,4v1l-1,1h-1l-1-1l-1,1v2l1,1h2v2l1,1h1l1-1h1l1-1l1,1h3l1,1l-1,1v1l-1-1h-1l-3,3h-1v1l-2,2v2h1l1,1v1l2,2v2l3,3v1h-1l-1-1h-1l-1-1l-1,1h1l1,1h1l1,1v1l-2,2h-1v1h1l1-1l1,1v1l1,1v1h-1v3h-1l-1,1v2l-2,2h-1l1,1l-1,1v1l-1,1v1l-2,2h-1v1l-4,4h-1l-1,1h-2l-2,2l-1-1v-1l-1-1v3h-1l-1,1h-2l-1,1h-2l-1,1v1l1,1l-1,1H737.175z M739.175,252.175l-1,1h-2l-2,2v2l1,1h2l2-2v-2l1-1v-1H739.175z",
    flag: "china.png",
    facts: { exposure:["$13,478","Medium"], population:["1.34 Billion","1"], lifeexp:["75","95"], landmass:["9,596,961","4"] },
    perils: ['earthquakes','cyclones','floods','disease','all']
  };
  countryData['tw'] = {
    name: "Taiwan",
    svg: "m765.174988,246.175003l-1,-1l-1,-1l0,-1l0,-1l0,-1l1,-1l0,-1l1,-1l0,-1l1,-1l1,0l1,1l-1,0l1,1l-1,1l0,1l0,1l0,1l-1,1l-1,1l0,2z",
    flag: "taiwan.png",
    facts: { exposure:["$1,829","High"], population:["23.07 Million","50"], lifeexp:["78","51"], landmass:["35,980","138"] },
    perils: ['earthquakes','disease','all']
  };
  countryData['jp'] = {
    name: "Japan",
    svg: "m801.174988,205.175003l0,1l-1,0l1,-1zm-12,3l-1,1l-1,0l-1,1l1,0l1,0l0,1l-1,1l1,0l1,-1l0,-1l1,0l0,1l0,1l-1,1l0,1l0,1l-1,1l1,0l1,-1l1,0l-1,1l0,1l1,-1l1,-1l0,-2l0,-1l1,-1l0,-1l-1,-1l0,-1l-1,0l-1,-1l-1,1zm0,4l-1,1l0,-1l1,0zm-1,-1l-1,-1l1,0l0,1zm7,-4l0.944031,0l1.055969,0l1,-1l1,0l1,0l0,1l0,1l-1,1l-1,0l-1,0l-1,1l-1,1l-1,-1l1,0l-1,-1l1,-1l0,-1zm18,-2l-1,0l0,-1l1,1zm0,5l1,0l-1,1l0,-1zm-25,4l0,1l-1,0l1,-1zm5,-5l0,-1l1,1l-1,0zm1,-2l1,0l-1,1l0,-1m-3,11l0,1l-1,0l1,-1zm-1,1l-1,1l0,-1l1,0zm-3,6l1,0l-1,1l0,1l-1,-1l1,-1zm-1,2l0,1l-1,-1l1,0zm-2,4l-1,1l-1,1l0,-1l1,-1l1,-1l0,1zm-12,7l1,1l-1,0l0,-1zm2,0l0,1l-1,-1l1,0zm3,-1l-1,1l0,-1l1,0zm50,-63l0,1l1,0l-1,1l-1,0l-2,0l-1,1l-1,1l0,2l-1,-1l-1,0l-1,-1l-1,-1l-1,1l-1,0l-1,-1l-1,1l1,1l1,1l-1,1l-1,1l-1,-1l1,-1l0,-1l-1,-1l1,-1l1,-1l-1,-1l1,0l1,1l1,-1l0,-1l0,-1l1,-1l0,-1l0,-1l0,-1l0,-1l0,-1l1,1l1,1l1,1l1,1l1,1l1,0l1,1l1,0l0,-1l1,-1l0,1l0,2zm-11,-6l1,0l0,1l-1,-1zm0,0l0,-1l1,0l-1,1zm-3,11l-1,1l0,-1l1,0zm3,4l0,-2l1,1l0,1l0,1l1,1l0,1l1,1l0,2l-1,1l-1,1l0,1l-1,1l0,2l0,2l-1,1l0,1l0,1l1,1l-1,1l0,1l-1,1l-1,0l1,-1l0,-1l-1,-1l0,1l0,1l-1,0l-1,1l0,1l-1,-1l1,-1l-1,0l-1,1l0,1l0,0l-1,0l-1,0l-1,0l1,-1l-1,0l-1,-1l0,1l0,1l1,1l-1,0l-1,1l0,1l-1,1l-1,0l0,-1l-1,-1l0,-1l1,-1l-1,0l-1,-1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,0l0,1l-1,1l0,-1l-1,0l-1,0l-1,0l1,-1l1,0l1,-1l1,-1l0,-1l1,-1l4,0l1,-1l2,0l-1,1l1,0l1,0l1,-1l0,-1l1,-1l0,-1l0,-1l0,-1l1,-1l1,0l-1,1l0,1l0,1l1,0l1,-1l1,-1l1,0l1,-1l1,-1l0,-1l1,-1l0,-1l0,-1l1,-1l0,-1l-1,-1l1,-1l0,-2l0,-1l1,-1l0,1l0,1l1,-1zm-7,10l1,-1l0,1l-1,1l0,-1zm-13,6l1,0l0,1l-1,-1zm-9,8l1,0l0,1l-1,-1zm-1,-2l1,-1l0,2l-1,0l0,-1zm0,1l1,0l-1,1l0,-1zm-1,5l1,0l-1,1l0,-1zm0,0l1,-1l0,1l-1,0zm10,-5l0,1l-1,0l1,-1z",
    flag: "japan.png",
    facts: { exposure:["$22,886","High"], population:["126 Million","10"], lifeexp:["82","5"], landmass:["377,915","61"] },
    perils: ['earthquakes','cyclones','fire','disease','all']
  };
  countryData['ph'] = {
    name: "Philippines",
    svg: "m771.174988,292.174988l-1,0l0,-1l1,1zm-9,7l1,0l1,-1l-1,0l-1,1zm3,-3l0,-1l1,0l1,1l0,1l-1,0l-1,-1zm2,-2l1,0l1,1l-1,0l-1,-1zm1,-3l1,-1l1,-1l1,-1l1,0l0,1l1,0l1,-1l1,-1l1,0l1,0l0,-2l1,1l1,1l-1,1l1,0l0,1l0,1l1,1l0,1l-1,1l0,2l-1,-1l0,-1l0,-1l-1,0l-1,1l1,1l0,3l-1,-1l-1,0l-1,0l-1,-1l0,-2l0,-1l0,-1l-1,-1l0,2l-1,-1l-1,0l-1,0l0,1l-1,1l0,-2zm-2,-36.999985l1,0l0,1l-1,-1zm-1,1l1,0l0,0.999985l-1,-0.999985zm3,0l0,0.999985l-1,0l1,-0.999985zm4,19.999985l-1,-1l0,-1l-1,-1l-1,-1l0,1l1,1l0,1l-1,-1l-1,0l0,-1l-1,-1l-1,1l-1,0l-1,-1l1,-1l0,-2l-1,1l0,1l-1,-1l0,-3l-1,-1l0,-1l1,1l1,-1l0,-1l0,-6l1,0l1,0l1,1l1,0l1,-1l0,1l-1,1l0,1l1.004028,1.003998l0,1.996002l-1.002014,1.002014l-1,1l0,0.997986l-1.001038,1.001007l0.999023,0.998993l0,1l0,1l1,1l1,-1l1,1l1,1l0,-1l2,0l-1,1l0,1l1,1l1,1l-1,1l0,-1l-1,0zm1,-4l1,1l-1,1l0,-1l0,-1zm-6,2l1,0l0,1l-1,-1zm3,1l1,0l1,1l-1,0l-1,-1zm-3,-6l1,0l0,1l-1,-1zm2,8l1,0l-1,1l0,-1zm-1,0l0,1l-1,0l1,-1zm0,-1l1,0l-1,1l0,-1zm4,1l1,1l0,1l-1,-1l-1,1l0,-1l0,-1l1,0zm1,0l-1,0l0,-1l1,1zm-9,-3l1,0l1,0l1,1l0,1l0,1l-1,1l-1,-1l0,-1l0,-1l-1,-1zm4,-23.999985l0,1l-1,0l1,-1zm-1,2l1,0l0,1l-1,-1zm7,34.999985l1,0l0,1l-1,-1zm0,-3l1,1l-1,1l-1,0l0,-1l1,-1zm5,1l-1,0l0,-1l1,1zm-1,-2l0,1l-1,1l0,-2l1,0zm-4,-1l0,1l-1,0l1,-1zm-1,-1l-1,0l0,-1l1,1zm-2,0l-1,1l-1,0l-1,1l0,-3l0,-1l1,1l1,0l1,0l0,1zm-9,-4l1,1l1,0l0,1l-1,0l-1,-1l0,-1zm1,3l-1,1l0,-1l1,0zm-1,0l0,2l0,1l-1,1l-1,1l0,1l-1,1l-1,1l-1,1l-1,0l0,-1l1,-1l1,-1l1,-1l1,-1l0,-1l1,-1l0,-1l1,-1zm-6,11l0,1l-1,-1l0,-1l1,1zm1,-1l-1,0l0,-1l1,1zm16,-3l-1,1l0,-1l1,0zm-1,-5l0,1l-1,1l0,1l0,1l0,1l-1,0l-1,-1l0,-1l1,-1l0,-1l1,-1l1,0zm3,-2l1,1l0,1l0,2l0,1l-1,-1l0,-2l-1,-1l0,-1l1,0zm1,-3l1,1l0,2l0,1l-1,0l0,-1l-1,-1l-1,-1l0,-1l2,0zm-3,7l-1,1l-1,1l0,-1l1,-1l0,-1l1,-1l0,2zm-10,-2l0,1l-1,0l1,-1zm16,4l-1,0l0,-1l1,1zm-15,-13l-1,0l0,-1l1,1z",
    flag: "philippines.png",
    facts: { exposure:["-","-"], population:["102 Million","12"], lifeexp:["72","133"], landmass:["300,000","72"] },
    perils: ['earthquakes','disease','all']
  };
  countryData['th'] = {
    name: "Thailand",
    svg: "m713.174988,285.174988l-1,1l0,-1l1,0zm-1,0l0,-1l-1,0l1,1zm-4,4l1,0l1,1l0,1l1,1l0,1l1,1l1,0l2,2l0,1l1,-1l1,0l1,-1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l0,-1l0,-2l-1,-1l0,-1l0,-1l-1,0l-1,-1l0,-2l1,-1l0,-2l1,-1l0,-4l0,-1l1,-1l1,0l0,1l0,1l1,1l2,0l1,1l1,0l0,-1l-1,-1l0,-3l1,-1l1,-1l3,0l2,0l1,-1l0,-3l-1,-1l-1,-1l0,-4l-2,-2l-2,0l-1,1l-1,0l-1,-1l-2,2l0,-3l0,-3l-1,0l-1,-1l0,-2l-2,0l-1,1l-1,1l-2,0l-1,1l0,3l0,2l1,1l1,1l0,2l1,1l0,1l-1,1l0,2l0,1l1,1l1,1l0,2l0,2l1,1l0,3l-1,1l-1,1l0,2l-1,1l0,3l-1,1l0,1l1,1l0,-1zm1,2l1,0l0,1l-1,-1z",
    flag: "thailand.png",
    facts: { exposure:["-","-"], population:["66.72 Million","20"], lifeexp:["74","113"], landmass:["513,120","50"] },
    perils: ['disease','all']
  };
  countryData['la'] = {
    name: "Laos",
    svg: "m726.174988,269.174988l0,-3l-2,-2l0,-4l-2,-2l-2,0l-1,1l-1,0l-1,-1l-2,2l0,-6l-1,0l-1,-1l0,-2l0,-1l1,-1l0,-1l1,0l1,1l0,-1l0,-2l0,-1l1,0l1,1l1,1l0,2l1,1l3,0l1,1l0,2l-1,1l-1,0l4,4l0,1l2,2l0,1l1,1l0,1l1,0l1,1l-1,1l1,1l0,3l-3,0l-1,1l-1,0l-1,-1l1,-1z",
    flag: "laos.png",
    facts: null,
    perils: []
  };
  countryData['kh'] = {
    name: "Cambodia",
    svg: "m718.174988,278.174988l1,0l0,1l-1,-1zm4,4c0,1 0,1 0,1l1,0l-1,-1zm6,-12l-1,1l-1,0l-1,-1l-5,0l-2,2l0,3l1,1l0,1l1,1l0,3l1,-1l0,1l0,1l1,0l1,0l1,0l1,-1l3,0l-1,-1l0,-1l1,-1l1,0l2,-2l0,-6l-3,0z",
    flag: "cambodia.png",
    facts: null,
    perils: []
  };
  countryData['mm'] = {
    name: "Burma",
    svg: "m708.174988,284.174988l-1,0l0,-1l1,1zm-1,-4l0,1l1,0l-1,-1zm1,-2l0,1l1,-1l-1,0zm-2,-2l1,1l0,-1l-1,0zm3,7l0,-2l2,-2l0,-3l-1,-1l0,-4l-2,-2l0,-3l1,-1l0,-1l-1,-1l0,-2l-2,-2l0,-5l1,-1l2,0l2,-2l2,0l0,-1l1,-1l0,-1l-1,0l-1,-1l0,-1l-1,0l-1,0l0,-1l1,-1l0,-1l-1,0l-1,-1l0,-2l0,-1l-1,0l-1,1l-1,0l0,-2l0,-1l1,-1l1,-1l0,-1l1,-1l0,-1l0,-3l-2,-2l0,-1l-1,-1l-1,1l0,1l-1,1l0,1l-1,1l-2,0l-1,1l0,2l-1,1l0,1l-1,1l0,2l0,1l-1,1l-1,0l-1,1l0,2l0,2l-1,1l-1,1l0,1l-1,0l0,2l1,1l1,1l0,1l1,-1l1,1l0,1l0,1l1,1l0,1l1,1l0,2l0,3l-1,1l0,1l2,0l1,1l1,-1l1,-1l1,0l1,-1l0,-1l0,-1l1,1l1,1l0,5l1,1l0,3l1,1l0,2l1,1l0,1l0,1l0,2l-1,1l0,3l1,-1zm0,-7l-1,-1l0,1l0,1l1,-1zm-13,-19l0,-1l-1,0l1,1z",
    flag: "burma.png",
    facts: null,
    perils: []
  };
  countryData['vn'] = {
    name: "Viet Nam",
    svg: "m729.174988,287.174988l0,1l-1,0l1,-1zm-6,-5l1,1l1,0l0,1l-1,1l0,3l1,0l1,-1l2,-2l1,-1l0,-1l1,-1l2,0l2,-2l2,-2l0,-3l0,-4l-1,-1l0,-2l-2,-2l0,-2l-4,-4l-1,-1l0,-1l-1,-1l0,-3l0,-1l2,-2l0,-1l2,-2l0,-1l-1,0l-1,-1l0,-2l-1,-1l-2,0l-1,-1l-1,1l-1,1l-2,0l-1,0l-1,1l-1,-1l0,1l0,1l1,1l0,2l1,1l3,0l1,1l0,1l0,1l-1,1l-1,0l1,1l2,2l1,1l0,1l1,1l1,1l0,1l1,1l0,1l1,0l1,1l-1,1l1,1l0,1l0,1l0,2l0,1l0,1l0,3l-1,1l-1,1l-1,0l-1,1l0,1l1,1l-1,0l-2,0l-1,1l-1,0zm7,-31.999985l1,0l0,-1l-1,1z",
    flag: "vietnam.png",
    facts: { exposure:["-","-"], population:["90.55 Million","14"], lifeexp:["72","129"], landmass:["331,210","65"] },
    perils: ['disease','all']
  };
  countryData['kr'] = {
    name: "South Korea",
    svg: "m780.174988,209.175003l0,0l1,1l-2,0l0,-1l0,0l1,-1l0,1zm-1,-14l1,0l0,1l-1,1l-1,1l1,0l0,1l1,1l0,1l-1,1l0,1l0,1l-1,0l1,1l1,1l0,-1l1,0l0,1l1,-1l0,-1l1,0l1,0l1,-1l1,0l1,-1l0,-2l0,-2l-1,-1l0,-2l-1,-1l0,-1l-1,-1l-1,0l-1,1l-2,0l-1,1l0,1z",
    flag: "south_korea.png",
    facts: { exposure:["-","-"], population:["48.75 Million","26"], lifeexp:["79","41"], landmass:["99,720","108"] },
    perils: ['disease','all']
  };
  countryData['kp'] = {
    name: "North Korea",
    svg: "m774.174988,186.175003l1,0l1,-1l2,-2l1,-1l0,-1l1,-1l1,1l1,0l1,1l1,-1l0,-1l1,0l1,-1l1,-1l1,-1l0,-1l1,1l1,1l-1,1l-1,1l0,3l-1,1l-1,1l-1,1l-1,0l-1,1l-1,0l0,1l0,1l1,1l1,1l0,1l-1,0l-1,1l-2,0l-1,1l-1,0l-1,0l-1,0l-1,-1l0,-1l1,-1l0,-1l1,-1l-1,-1l-1,0l-1,-1l0,-1z",
    flag: "north_korea.png",
    facts: null,
    perils: []
  };
  countryData['mn'] = {
    name: "Mongolia",
    svg: "m759.174988,158.175003l3,3l0,1l-1,1l-5,0l-4,4l-2,0l-2,2l-6,0l-1,1l0,2l1,1l-5,5l-8,0l-2,2l-8,0l-3,-3l-13,0l-2,-2l0,-2l-2,-2l-1,0l-2,-2l-6,0l-1,-1l0,-7l-3,-3l-2,0l-2,-2l0,-3l2,0l3,-3l2,0l2,-2l7,0l0,2l1,1l7,0l2,-2l-1,-1l0,-3l2,-2l3,0l2,2l3,0l1,1l0,3l1,1l4,0l1,-1l5,0l2,2l1,0l0,1l1,1l4,0l1,1l2,0l1,-1l3,0l3,-3l3,0l1,1l3,0l1,1l0,1l-4,4l0,1l1,1l4,0l1,-1l2,0z",
    flag: "mongolia.png",
    facts: null,
    perils: []
  };
  countryData['in'] = {
    name: "India",
    svg: "m684.174988,227.175003l0,1l-1,1l1,1l1,1l5,0l2,0l0,-1l-1,-1l0,-1l1,0l1,-1l1,-1l1,-1l1,-1l1,-1l2,0l1,0l1,-1l1,0l0,1l1,1l0,1l1,1l1,0l0,1l-1,1l0,1l-1,1l-2,0l-1,1l0,2l-1,1l0,1l-1,1l0,3l-1,1l-1,0l-1,1l0,4l-2,2l0,-6l-1,0l-1,1l0,1l-1,-1l0,-2l2,-2l0,-2l-5,0l-1,-1l0,-2l-2,0l-1,-1l-1,0l0,-5l2,0zm-29,61.999985l1,0l1,-1l0,-1l1,-1l1,0l0,-1l0,-1l1,-1l1,0l0,-3l0,-3l1,-1l0,-5l0,-3l-1,-1l1,-1l1,0l1,-1l1,-1l2,0l1,-1l0,-2l4,-4l1,-1l2,-2l0,-1l2,0l2,-2l0,-2l2,-2l0,-1l1,1l3,0l-1,-1l0,-4l-1,-1l0,-2l-1,-1l0,-1l1,-1l1,0l0,-1l-1,0l-1,-1l0,-1l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l0,-3l1,-1l0,-2l-2,-2l-2,0l-1,-1l0,-2l-1,-1l0,-1l2,0l0,-2l-1,-1l0,-4l-2,-2l0,-1l-1,0l-1,1l-2,2l-3,0l-2,0l-1,1l0,1l0,1l0,2l1,1l1,1l1,0l0,1l-1,1l-1,1l0,3l-1,1l-1,1l-1,1l0,2l-1,1l-1,0l-1,1l0,2l-2,0l-1,1l-1,-1l-1,0l-1,1l0,2l0,1l1,1l0,2l2,2l0,2l-1,1l-3,0l-1,0l-1,1l-1,0l0,1l1,1l1,1l1,0l1,0l2,0l-1,1l-1,1l-1,0l-1,0l2,2l2,2l1,1l2,0l1,-1l0,-2l0,-1l1,0l1,1l0,2l0,3l0,3l0,5l1,1l0,3l2,2l0,3l1,1l0,3l1,1l1,1l0,2l1,1l0,2l2,2l0,5l2,2l1,0zm40,-16l0,2l-1,1l0,1l0,2l-1,1l0,-2l0,-1l0,-1l1,-1l0,-1l0,-2l1,1zm-3,9l1,0l0,-1l-1,1zm2,5l0,-1l-1,0l1,1zm0,-10l0,1l1,0l-1,-1zm0,12l1,0l-1,-1l0,1zm1,1l1,0l-1,-1l0,1zm1,2l0,1l1,1l0,-1l-1,-1z",
    flag: "india.png",
    facts: { exposure:["-","-"], population:["1.19 Billion","2"], lifeexp:["67","161"], landmass:["3,287,263","7"] },
    perils: ['earthquakes','disease','all']
  };
  countryData['bd'] = {
    name: "Bangladesh",
    svg: "m692.174988,248.175003l-1,-1l0,-2l0,-1l0,-1l0,-1l1,-1l1,0l0,6l0,1l-1,0zm-2,-6l0,-2l1,-1l1,-1l0,-1l0,-1l-5,0l-1,-1l0,-2l-2,0l-1,-1l-1,0l0,2l1,1l1,0l0,1l-1,0l-1,1l0,1l1,1l0,2l1,1l0,4l1,1l1,0l1,-1l1,0l0,-2l1,-1l0,1l1,0l1,-1l-1,-1zm-1,2l0,2l1,-1l0,-1l-1,0z",
    flag: "bangladesh.png",
    facts: null,
    perils: []
  };
  countryData['bt'] = {
    name: "Bhutan",
    svg: "m685.174988,226.175003l4,0l2,2l0,1l1,1l0,1l-7,0l-2,-2l1,-1l0,-1l1,-1z",
    flag: "bhutan.png",
    facts: null,
    perils: []
  };
  countryData['np'] = {
    name: "Nepal",
    svg: "m666.174988,219.175003l2,2l1,0l5,5l2,0l1,1l5,0l0,6l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l-3,0l-2,-2l0,-3l1,-1l0,-2l3,0z",
    flag: "nepal.png",
    facts: null,
    perils: []
  };
  countryData['lk'] = {
    name: "Sri Lanka",
    svg: "m661.174988,284.174988l1,0l0,1l-1,-1zm0,1l1,1l-1,1l0,2l-1,1l0,4l1,1l1,1l2,0l1,-1l1,-1l0,-4l-1,-1l0,-2l-1,-1l-1,-1l-1,0l-1,-1l0,1z",
    flag: "sri_lanka.png",
    facts: null,
    perils: []
  };
  countryData['pk'] = {
    name: "Pakistan",
    svg: "m615.174988,233.175003l2,-2l1,0l0,-1l1,-1l-2,0l0,-3l-4,-4l0,-1l2,0l1,1l5,0l1,-1l3,0l1,-1l0,-3l1,-1l2,0l1,-1l3,0l1,-1l0,-4l2,0l1,-1l-1,-1l0,-1l2,0l0,-1l1,-1l1,-1l0,-3l-1,-1l2,-2l2,0l1,-1l3,0l2,0l2,2l0,1l2,2l2,0l-3,3l-5,0l-1,1l0,4l2,2l1,0l0,1l-2,2l0,3l-3,3l0,2l-1,1l-1,0l-1,1l0,2l-2,0l-1,1l-1,-1l-1,0l-1,1l0,3l1,1l0,2l2,2l0,2l-1,1l-4,0l-1,1l-1,0l-2,0l0,-2l-1,-1l0,-1l-1,-1l-3,0l-1,1l-1,0l-1,-1l-1,1l-2,0l-1,0l-1,0l-1,0l0,-3z",
    flag: "pakistan.png",
    facts: null,
    perils: []
  };
  countryData['af'] = {
    name: "Afghanistan",
    svg: "m648.174988,195.175003l0,1l-1,1l-3,0l-1,1l-2,0l-2,2l1,1l0,3l-2,2l0,1l-2,0l0,1l1,1l-1,1l-2,0l0,4l-1,1l-3,0l-1,1l-2,0l-1,1l0,3l-1,1l-3,0l-1,1l-5,0l-1,-1l-2,0l0,-1l2,-2l0,-2l-1,0l-2,-2l0,-4l1,-1l-1,-1l0,-2l1,-1l0,-2l1,-1l2,0l1,1l1,-1l0,-2l3,0l1,-1l0,-2l1,-1l1,0l1,-1l2,0l1,1l2,0l1,1l1,0l1,-1l1,0l1,-1l1,0l1,-1l0,-1l1,-1l1,0l0,2l1,1l0,2l1,0l1,0l1,-1l1,-1l1,0l1,1l1,0l1,-1z",
    flag: "afghanistan.png",
    facts: null,
    perils: []
  };
  countryData['kz'] = {
    name: "Kazakhstan",
    svg: "m586.174988,169.175003l-1,1l0,-1l1,0zm2,2l-1,0l-1,-1l0,1l0,1l1,0l1,1l0,1l1,1l0,1l1,1l1,0l1,1l-1,1l0,2l1,-1l0,-1l1,-1l2,0l4,4l1,0l0,-12l1,-1l2,-2l4,0l1,1l1,1l1,0l2,2l1,0l1,1l0,1l1,1l7,0l2,0l1,1l0,1l1,1l0,3l1,1l1,1l1,1l2,0l1,1l0,-1l1,-1l1,-1l1,-1l1,0l1,-1l1,0l1,-1l0,-1l1,0l3,0l1,1l1,-1l0,-1l1,-1l1,0l1,1l1,1l1,0l1,-1l4,0l1,1l2,0l2,0l1,1l1,1l0,-2l1,-1l0,-2l-1,-1l0,-3l-1,-1l1,-1l6,0l0,-1l-1,-1l0,-1l2,-2l0,-2l2,0l1,1l2,0l2,-2l0,-3l1,-1l1,0l2,-2l-2,-2l-3,0l-1,-1l0,-1l-2,0l0,-2l-1,-1l-2,0l-1,1l-3,0l-1,-1l0,-1l-2,0l0,1l-1,1l0,-2l-2,-2l0,-2l-7,-7l1,0l0,-1l-2,0l-3,3l-2,0l-1,1l-1,-1l1,-1l0,-1l-2,0l-1,1l0,-1l-3,0l0,-3l-1,-1l-2,0l-1,-1l-3,0l-3,3l-4,0l-1,1l-2,0l-1,1l-7,0l0,3l1,1l0,1l-2,0l0,2l-1,0l-1,1l0,1l1,1l2,0l0,3l-4,0l-1,1l-2,-2l-6,0l-1,1l-2,0l-1,-1l0,2l-1,-1l0,-1l-2,-2l-3,0l-1,-1l-1,1l-1,-1l-2,0l-4,4l0,3l-1,0l-2,-2l-2,2l0,7l1,1l2,0l2,2l0,1l-1,1l1,1l1,0l1,0l1,-1l1,-1l1,0l1,-1l1,0l1,1l1,0l2,0l0,1l0,2l-1,1l0,1l1,1l-4,0l-1,1l0,1l1,1l-1,0z",
    flag: "kazakhstan.png",
    facts: null,
    perils: []
  };
  countryData['tm'] = {
    name: "Turkmenistan",
    svg: "m595.174988,196.175003l0,-6l-1,-1l-1,0l0,-1l1,0l0,-1l-1,-1l-1,1l0,-3l1,-1l1,1l2,0l1,-1l-1,-1l-1,-1l0,-1l-1,-1l-1,0l0,1l-1,1l0,1l-1,-1l1,-1l0,-1l1,-1l2,0l2,2l2,2l2,0l2,0l0,-2l1,-1l1,0l1,-1l0,-1l1,0l1,1l1,0l2,2l0,2l1,1l3,0l1,1l0,2l1,1l2,2l1,1l2,0l3,3l2,0l0,2l-2,0l-1,1l-1,0l-1,1l0,2l-1,1l-3,0l0,2l-1,1l-1,-1l-2,0l-1,-1l0,-3l-2,0l-3,-3l-2,0l0,-1l-2,0l-1,-1l-4,0l-3,3l-1,0zm-2,-5l0,-1l-1,0l1,1z",
    flag: "turkmenistan.png",
    facts: null,
    perils: []
  };
  countryData['uz'] = {
    name: "Uzbekistan",
    svg: "m603.174988,182.175003l-3,0l0,-12l3,-3l4,0l2,2l1,0l2,2l1,0l1,1l0,1l1,1l9,0l1,1l0,1l1,1l0,3l3,3l2,0l1,1l0,-1l3,-3l1,0l1,-1l1,0l1,0l-1,1l-1,0l-1,1l1,1l1,0l1,1l1,-1l1,0l1,1l1,1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,-1l1,-1l-1,-1l-1,1l-1,0l-1,0l0,1l-1,1l0,1l-1,1l-1,0l-1,0l-1,1l1,1l1,0l0,2l1,1l-1,1l-1,1l0,1l-2,0l-1,-1l0,-2l-2,0l-3,-3l-2,0l-4,-4l0,-2l-1,-1l-3,0l-1,-1l0,-2l-2,-2l-1,0l-1,-1l-1,0l0,1l-1,1l-1,0l-1,1l0,2z",
    flag: "uzbekistan.png",
    facts: null,
    perils: []
  };
  countryData['tj'] = {
    name: "Tajikistan",
    svg: "m638.174988,187.175003l-1,0l-1,-1l-1,0l-1,1l0,1l4,0l1,0l1,1l1,0l3,0l1,-1l0,2l1,1l1,0l1,1l0,3l-1,1l-1,0l-1,-1l-1,0l-2,2l-2,0l0,-2l-1,-1l0,-2l-1,0l-1,1l0,1l-1,1l-1,0l-1,1l-1,0l-1,1l-1,0l-1,-1l0,-1l2,-2l-1,-1l0,-2l-1,0l-1,-1l1,-1l2,0l1,-1l0,-1l1,-1l0,-1l2,0l1,-1l1,1l-1,1l1,1l0,1z",
    flag: "tajikistan.png",
    facts: null,
    perils: []
  };
  countryData['kg'] = {
    name: "Kyrgyzstan",
    svg: "m634.174988,187.175003l1,-1l1,0l1,1l1,0l0,-1l2,0l1,-1l1,0l1,-1l-2,-2l-1,0l-1,1l-1,-1l-1,0l-1,-1l1,-1l1,0l1,-1l-1,0l1,-1l0,-1l4,0l1,1l1,-1l0,-1l1,-1l1,0l2,2l1,0l1,-1l4,0l1,1l4,0l2,2l-2,2l-2,0l-2,2l-2,0l-2,2l-4,0l-4,4l-4,0l-1,-1l-5,0l0,-1z",
    flag: "kyrgyzstan.png",
    facts: null,
    perils: []
  };
  countryData['id'] = {
    name: "Indonesia",
    svg: "m723.174988,311.174988l1,-1l0,1l0,1l-1,-1zm-1,1l1,0l0,-1l-1,1zm55,30l2,0l2,-2l-1,0l-1,1l-3,0l-1,1l0,2l2,-2zm-77,-46l0,1l1,0l-1,-1zm53,28l1,1l0,1l-1,1l0,-1l0,-2zm21,19l-1,0l-1,1l0,1l0,1l1,0l2,-2l0,-2l-1,1zm-3,2l1,1l-1,0l0,-1zm-70,-48l1,1l1,0l1,0l1,0l1,1l1,1l0,1l1,1l1,1l3,3l1,1l1,1l0,-1l1,1l0,1l1,1l1,0l0,1l1,1l2,0l-1,1l0,0l0,1l1,-1l1,0l1,1l-1,1l0,1l0,1l1,0l1,1l0,1l1,1l0,1l-1,1l0,1l1,-1l1,0l1,0l1,1l0,9l-1,0l-1,0l-1,-1l0,1l-1,-1l-2,-2l-1,-1l-2,-2l-2,-2l0,-1l-2,-2l0,-1l0,-3l-1,-1l-1,-1l-1,-1l-1,0l0,-2l-1,-1l0,-2l-1,-1l-1,0l-1,-1l0,-2l-1,-1l-1,0l-1,-1l0,-1l-1,-1l-1,-1l-1,-1l0,-1l0,-1l1,0zm15,12l1,-1l-1,0l0,1zm2,1l0,-1l-1,0l1,1zm-1,0l1,1l0,-1l-1,0zm1,-1l0,1l1,0l-1,-1zm1,3l0,-1l-1,0l1,1zm0,-2l0,1l1,1l0,-1l-1,-1zm1,2l0,1l1,-1l-1,0zm0,0l1,-1l-1,0l0,1zm2,-1l-1,1l1,0l0,-1zm1,4l0,1l0,1l1,-1l-1,-1zm1,-1l0,-1l-1,1l1,0zm0.004028,1l0.996033,0l-1,-1l-1,0l1.003967,1zm-3.004028,1l1,-1l-1,0l0,1zm8,7l0,-1l-1,0l0,-2l-1,-1l0,1l-1,-1l-1,1l0,1l1,0l1,0l0,1.013l1,0.993011l1,0.993988l0,-1zm0,0l0,1l1,-1l-1,0zm1,0l1,1l0,-1l-1,0zm2,-1m1,1l-1,-1l-1,1l0,1l1,0l1,1l0,-2zm2,-4l-1,0l0,1l1,-1zm-2,-16l0,-1l0,-1l-1,1l1,1zm-7,43l0,1l1,0l0,-1l-1,0zm-9,-16l0,1l1,0l-1,-1zm8,4l0,1l1,0l-1,-1zm19,-2l0,1l1,-1l-1,0zm5,5l0,-1l-1,0l1,1zm-4,-2l0,1l2,0l1,-1l-3,0zm-4,0l-1,-1l-1,0l0,1l-4,0l-1,-1l-2,0l-1,-1l-1,0l-3,0l0,1l-1,0l1,1l1,1l0,1l3,0l1,1l2,0l2,0l1,1l2,0l1,1l1,0l2,0l2,0l2,0l1,1l0,-3l-3,0l-1,-1l-1,-1l0,-1l-2,0zm27,-4l0,-1l-1,0l1,1zm-4,1l0,2l1,-1l0,-1l-1,0zm8,1l1,0l0,-1l-1,1zm0,-3l0,1l1,0l-1,-1zm-2,-3l1,0l0,-1l-1,0l0,1zm-1,2l0,2l1,-1l0,-1l-1,0zm0,3l1,0l1,-1l0,-1l0,-2l-1,0l0,2l-1,1l0,1zm1,-4l0,-1l-1,-1l0,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l1,0l1,-1l1,-1l1,-1l1,0l1,-1l-1,0l-1,0l-1,1l-1,0l-1,0l-1,1l-1,0l-1,0l0,-1l-1,-1l0,-2l1,-1l6,0l4,0l1,-1l0,-1l1,-1l0,-1l-1,0l-1,1l-1,1l-1,0l-1,0l-1,1l-1,-1l-2,0l-1,-1l-1,1l-1,0l-1,1l0,1l-1,1l0,2l-1,1l0,4l-1,1l0,1l0,2l1,0l1,1l0,3l-1,1l0,1l1,1l1,0l1,-1l0,-7l0,-1l1,-1l1,1l0,1l-1,1l2,2l0,2l1,0l0,-1l2,0zm-3,-13l0,1l1,0l-1,-1zm3,3l0,1l1,-1l-1,0zm1,1l1,0l0,-1l-1,1zm2,2l0,-1l-1,0l1,1zm-2,0l0,-1c0,0 0,0 -1,0l1,1zm16,-6l0,-1l-1,0l1,1zm-11,-10l0,1l1,0l-1,-1zm15,0l0,1l1,-1l-1,0zm-34,0l0,-1l-1,0l1,1zm0,-4l0,1l1,0l-1,-1zm-21,8l-1,1l0,1l-1,1l1,1l0,2l1,1l0,1l1,1l0,1l1,1l0,3l1,1l2,0l1,-1l0,1l0,1l1,0l1,0l1,-1l1,0l1,1l1,0l1,0l0,1l0,1l1,0l1,-1l1,0l1,-1l0,-2l1,-1l0,-1l0,-2l1,-1l2,-2l0,-3l1,-1l2,0l0,-1l-1,-1l-2,-2l1,-1l-1,-1l0,-1l-1,-1l0,-1l1,0l0,-2l-4,0l-2,2l0,2l-1,1l0,1l-1,1l0,2l-2,0l-1,1l-1,-1l-2,0l-1,1l-2,0l-1,1l-3,-3zm-22,16l0,-1l-1,-1l-1,0l1,1l1,1zm-2,-3l0,1l1,0l-1,-1zm-1,-2l0,1l1,0l-1,-1zm-1,-2l-1,-1l0,1l0,1l1,1l0,-2zm-3,-2l1,0l1,-1l-1,-1l0,1l-1,1zm0,-3l0,-1l0,-1l-1,-1l-1,-1l0,1l0,1l1,1l1,1zm-4,-6l-1,-1l-1,-1l0,1l1,1l1,0zm2,0l0,1l1,0l-1,-1zm103,12l-2,2l-1,0l-3,3l0,1l-1,0l-1,-1l0,-2l-1,0l0,-4l-1,-1l-1,0l-1,-1l-2,0l-1,1l-1,0l-1,1l1,1l2,0l0,2l4,0l0,1l-2,0l-1,1l-2,0l1,1l1,0l1,1l0,2l1,-1l0,-2l1,0l0,1l1,1l1,0l2,2l2,0l2,2l3,0l0,3l2,2l0,5l1,-1l2,0l0,1l2,2l0,-20l-3,0l-2,-2l-2,0l-1,-1zm-6,0l1,1l2,0l-1,-1l-2,0zm2,-2l-1,-1l-1,0l2,2l0,-1zm-3,0l-1,0l1,1l0,-1zm-1,14l-1,1l0,1l1,1l0,-3zm-1,5l1,-1l-1,-1l0,2zm11,1l-2,2l1,1l2,-2l-1,-1zm1,4l0,-1l-1,0l1,1zm-14,-10l-1,1l1,0l0,-1zm-2,1l-1,0l1,1l0,-1zm-3,4l-1,1l0,1l1,1l0,-1l1,-1l-1,-1zm-2,3l1,1l0,-1l-1,0zm-3,-1l0,1l1,-1l-1,0zm-3,-2l0,1l1,-1l-1,0zm0,3l-1,0l0,1l1,-1zm5,-19l-1,0l0,1l1,-1zm-5,4l1,1l1,-1l1,1l1,-1l2,2l0,-1l-2,-2l-4,0l-1,1l1,0zm0,1l-1,1l1,0l0,-1zm8,-10l-1,-1l-1,0l1,1l1,0zm-3,0l1,0l-1,-1l0,1zm1,2l0,1l1,-1l-1,0zm-8,2l0,1l1,0l1,-1l-2,0zm-2,5l-1,0l-1,1l1,1l1,0l1,-1l-1,-1zm0,-9l0,1l1,-1l-1,0zm1,1l1,1l0,-2l-1,1zm3,0l0,-1l-1,-1l1,-1l1,0l-1,-1l1,-1l0,-1l-1,0l-1,1l0,1l-1,-1l1,-1l0,-2l-1,1l0,5l1,1l0,2l1,-1zm0,-8l1,-1l0,-1l-1,1l0,1zm-6,12l-1,1l1,0l0,-1zm-4,0l1,1l1,-1l-1,0l0,-1l-1,1zm6,-19l0,1l1,-1l-1,0zm-3,2l-1,1l1,0l0,-1zm-7,45l1,-1l-1,0l0,1zm-2,-1l0,-1l-1,1l1,0zm11,-8l1,-1l-2,0l1,1zm-4,0l-1,1l1,0l1,-1l-1,0zm-2,1l0,1l1,-1l-1,0zm-1,-1l-1,1l0,1l1,-1l0,-1zm-2,1l1,-1l-1,0l0,1zm0,1l0,-1l-1,1l-1,-1l-1,1l-1,-1l-3,0l-1,1l3,0l1,1l1,0l1,-1l2,0zm-8,2l-1,0l-1,1l2,0l2,2l1,-1l-2,-2l-1,0zm-1,-2l1,-1l-1,0l0,1zm20,-3l1,0l0,-1l-1,1zm-17,-1l1,-1l-1,0l0,1zm-4,4l0,-1l-2,0l0,-1l-1,1l1,1l-1,0l-1,-1l-1,1l0,1l3,0l1,-1l1,0zm-7,-1l0,1l1,1l0,-2l-1,0zm-2,1l1,-1l-1,-1l-1,1l-1,0l1,1l1,0zm0,-6l0,1l1,-1l-1,0z",
    flag: "indonesia.png",
    facts: { exposure:["-","-"], population:["246 Million","4"], lifeexp:["71","137"], landmass:["1,904,569","16"] },
    perils: ['earthquakes','disease','all']
  };
  countryData['my'] = {
    name: "Malaysia",
    svg: "m748.174988,300.174988l1,0l1,-1l0,1l0,1l-1,1l-1,-1l0,-1zm-26,5l0,1l1,0l-1,-1zm4,0l1,0l0,1l-1,-1zm2,-1l0,1l-1,0l1,-1zm6,2l0,-1l1,0l-1,1zm21,-14l1,0l0,1l-1,0l0,-1zm4,8l0,1l-1,0l-2,0l-3,0l-1,1l-1,1l0,1l0,1l-1,1l0,1l-1,1l0,1l0,1l-1,0l-1,0l-1,1l-1,-1l-2,0l-1,1l-2,0l-1,1l-3,-3l0,-1l1,0l1,1l1,0l1,1l0,-1l1,-1l0,-2l1,-1l3,0l1,-1l0,-1l1,-1l0,-1l1,-1l0,1l1,1l1,-1l0,-1l1,1l0,-2l1,-1l0,-1l1,-1l1,-1l0,-1l1,-1l1,0l0,1l1,1l0,1l1,0l0,1l1,0l1,1l1,0l-1,1l-1,0l-1,0l1,1zm-47,-5l-1,0l0,-1l1,1zm1,2l0,1l-1,0l1,-1zm10,13l-1,0l-1,0l-1,-1l-1,0l-3,-3l-1,-1l0,-1l-1,-1l0,-3l-1,-1l0,-3l-1,-1l0,-1l1,0l1,1l1,1l0,1l1,-1l1,0l1,-1l0,1l3,3l0,3l0,1l0,3l1,1l1,1l0,2z",
    flag: "malaysia.png",
    facts: { exposure:["-","-"], population:["28.73 Million","43"], lifeexp:["74","112"], landmass:["329,847","66"] },
    perils: []
  };
  countryData['mv'] = {
    name: "Maldives",
    svg: "M641.175,306.175v2h-1v-2H641.175z",
    flag: "maldives.png",
    facts: null,
    perils: []
  };

  // Russian Federation
  countryData['ru'] = {
    name: "Russian Federation",
    svg: "M512.175,131.175h3l1,1v2h-8l1-1v-1h3V131.175z M660.175,55.175v1h-1h-1v-1l1-1L660.175,55.175z M912.175,64.175h1l1,1h3l1-1h3v-1l-1-1h-1l-1-1h-3l-1,1l-1,1h-1V64.175z M884.175,68.175v1l1,1h1l1,1l1-1v-1h-1l-1-1h-1H884.175z M830.175,42.175l-1,1v1h1l1,1h2l1,1h5l1-1h1v-1h-1h-1h-4v-1.012h-4v-0.988H830.175z M835.175,37.175h2v-1h-1L835.175,37.175z M847.175,39.175l-1,1h1V39.175zM808.175,40.175l-1,1v1v1h-1v1l1,1h1l1,1h1l1,1h1v-1l1-1l1,1h1l1-1h2h1l1,1l1-1l-1-1l-1-1v-1h1h1l-1,1l1,1l1,1h3l1-1v-1l1-1h-2l-1-1h-1h-2h-1l-1-1l-1-1h-1l-1,1v1v1h-1l-1-1l-1-1h-1l-1-1h-1l-1,1H808.175z M821.175,51.175l-1-1h-3l-1,1l-1,1h-1h-1v1h3h1h2l1,1h1l1-1v-1L821.175,51.175z M814.175,49.175v1h1h1v-1H814.175z M802.175,43.175h1l1-1l-1-1l-1,1V43.175z M802.175,49.175l1,1l1,1v-1l-2-2V49.175z M866.175,64.175l-1,1h1V64.175z M741.175,48.175l1,1h3l1-1h-1l-1-1h-1l-1,1H741.175z M806.175,131.175l-1,1h1V131.175z M809.175,131.175h-1h-1v1l-1,1h1h1l1-1V131.175z M820.175,135.175v1v1v1l-1-1l-1,1v1v1v1v1v2l1,1v1v1v2v1v1v3l-1,1v1l1,1v1v1v1v1v1l-1.001,1v2.001l0.999,0.999v-2.001l1.002-1.001h1.003l0.997,0.997v1.006h1v-1l-1-1l-1-1v-1v-1l-1-1v-2l1-1v-1v-1l1-1h1l2,2v1h1v-1l-1-1l-1-1v-1v-1v-1l-1-1v-1v-2l-1-1v-2l-1-1l1-1v-3l-1-1v-1v-1l-1-1V135.175z M700.175,35.175h3l1-1h-2h-1L700.175,35.175z M686.175,34.175v-1l-1,1H686.175z M665.175,43.175l1,1h1v-1v-1l-1,1H665.175z M668.175,49.175l1,1h1h1v-1H668.175z M668.175,49.175h-1l1,1V49.175z M672.175,47.175l1,1h1l-1-1H672.175z M653.175,22.175l-1-1h-1v1h1l1,1h2v-1H653.175zM659.175,15.175l-1,1h4l1-1H659.175z M690.175,14.175l1-1h-4l-1,1H690.175z M690.175,21.173h1.002l0.998,0.998h0.996l1.004-1.004h1.008l0.992-0.992h-4l-1-1l-1,1h-1L690.175,21.173z M691.175,18.175l1,1h1h1h1h1h1h5h1h1l1-1l-1-1v-1h3l-1-1h-2l-2-2h-2l-1,1h-2h-1l-1,1h-1l-1,1h1h1l-1,1h-1h-1L691.175,18.175z M698.175,20.175l-1,1l-1,1h-1l-1,1h3l1,1l1,1h2h2l1,1h6l1-1h1l-1-1h-1l-1-1h2v-1l1-1l-1-1h-3l-1,1h-1v-1l1-1h-8L698.175,20.175z M712.175,22.175h1v-1L712.175,22.175z M718.175,24.175h-1l-1-1v1h-1v1h-1l1,1h-1h-1v1l-1,1l-1,1l-1,1h1h1h1l1-1h5h3h1l1-1h1v-1.985h-1l-1.008-1.007h-0.992v-1.007h-1l-1,1h-1l-1,1v-1l1-1l1-1h-2V24.175zM727.175,29.175h1l1-1h-1L727.175,29.175z M732.175,30.175l-1-1h-2l-1,1H732.175z M731.175,34.175v-1l-1,1H731.175zM743.175,37.175h1v-1h-2L743.175,37.175z M607.175,67.175v1l1,1h1l1,1h1v-1l-1-1l-1-1l-1-1L607.175,67.175z M591.175,63.175h1v1h1v-1l-1-1h-1V63.175z M589.175,61.175l1,1h1h2l1,1h1l1,1h-1l-1,1h3l1,1h2h1h1h2v-1l-1-1h-1l-1-1l-1-1l-1-1v-1.017v-0.983v-2l1-1l1-1" + 
          "v-1h-1l-1-1h-2h-1h-1l-1,1h-1l1,1h-1.001h-0.999l-1,1h1v1.012v0.988l-1,1h-1h-1V61.175z M595.175,52.175l1,1h1h4h2l1-1v-1l-1-1h1l1,1v-1l1-1h1v-1l1-1h2l1-1l1-1l1-1l1-1h1h1h1l1-1h1h1l1-1h1h2h1l1-1h2l1-1h1h1l1-1l1-1v-1l-1-1h-2l-1,1h-2l-1,1h-1l-1,1h-1h-1h-1h-1l-1,1h-5h-1l-1,1h-2h-1l-1,1h-2l-2,2h-2l-1,1h-1v1h1v1l-4,4h-1l-1,1V52.175z M638.175,52.175h-2v2h2h1h1v-1l-1-1H638.175zM646.175,54.175v1h1h1l1-1H646.175z M651.175,52.175h-1l-1,1h2V52.175z M651.175,53.175h2l-1-1h-1V53.175z M653.175,58.175h1.037h0.963l1-1h1l-1-1h-1L653.175,58.175z M583.175,71.175h-1l-1,1v2h3l1-1l1-1h-1l-1-1H583.175z M836.175,36.175l-1,1h1h1v-1H836.175zM846.175,40.175h1v-1L846.175,40.175z M846.175,39.175v1l1-1H846.175z M774.175,50.175v1l1-1H774.175z M763.175,55.175v-1h-1L763.175,55.175z M706.175,37.175v-1h-1L706.175,37.175z M704.175,38.175v1l1-1H704.175z M702.175,38.175h-2v1h3L702.175,38.175zM868.175,70.175l-1,1v2h1v-2l1-1H868.175z M581.175,180.175l-2-2v-2l-1-1v-3l-1-1v-2l3-3h1l2-2h-1l-1-1l1-1v-1l-2-2h-2l-1-1v-7l2-2l2,2h1v-3l4-4h2l1,1l1-1l1,1h3l2,2v1l1,1v-2l1,1h2l1-1h6l2,2l1-1h4v-3h-2l-1-1v-1l1-1h1v-2h2v-1l-1-1v-3h7l1-1h2l1-1h4l3-3h3l1,1h2l1,1v3h3v1l1-1h2v1l-1,1l1,1l1-1h2l3-3h2v1h-1l7,7v2l2,2v2l1-1v-1h2v1l1,1h3l1-1h2l1,1v2h2v1l1,1h3l2,2h2v-1h2l3-3h2l2-2h7v2l1,1h7l2-2l-1-1v-3l2-2h3l2,2h3l1,1v3l1,1h4l1-1h5l2,2h1v1l1,1h4l1,1h2l1-1h3l3-3h3l1,1h3l1,1h3l3-3v-2l4-4v-2h-2v-1l2-2h5l1-1h2l2,2h2l2,2v3l2,2v2l1,1v3h3v1h2l2,2h1v4h5l2-2h3v3l-2,2v3l-1,1v1l-2,2l-1-1h-1l-2,2v6l-1,1v1l3-3h1v1h2l1,1l2-2h1l3-3v-1l4-4v-2l3-3v-1l3-3v-2l2-2v-8l2-2v-2l-1-1l1-1l-1-1h1v-1l-3-3h-3l-1,1v2l-1-1v-1l-1,1h-1l1-1l-1-1v1l-1,1l-1-1v-3h-4v-1l2-2h2l4-4v-1l3-3h1l2-2v-1l2-2h1l3-3h7l1,1l1-1h2l1,1l1-1l1,1l1-1v-1l1,1v-1h3l1,1l1-1l1,1h1l1,1h-2l-1,1h4l1-1h5v-1h-2l-1-1l7-7v-1h1l1-1h7v2l-1,1v1l1-1v2l2-2h1l3-3l1,1v-3l1-1h4l1,1h-2l-1,1v2l-1,1l1,1h-1v1l-1,1h-2l-11,11h-2v1h-1v1l-3,3v3l-1,1v2l1,1v4l1,1v4l1,1v4l1,1l1-1v-1l3-3v-2l-1-1h2l1-1l1,1v-4l2-2h2v1l2-2l-1-1v-3l2-2h1l-1,1l1,1l1-1v-2h-2v-2l2-2l-1-1h-1l-1,1l-1-1v-2l4-4v-2l1-1h1v1l1-1l1,1l3-3l1,1l-1,1v1l2-2h1l1-1h4l2,2v1l1-1v-1l1-1h1l1-1h1l4-4h3l2-2h2l1-1h1l-1-1h2v1h2l1,1h1l1-1v-1l-1-1v-1l-1-1h-1l1-1l-1-1v-1h-2l-1-1v-1l-1,1l-1-1h-5l1-1h4l1,1l1-1l-1-1h1l2,2h3l3-3v-1l-1-1v-1l1-1h2l1,1l-1,1l1,1h5l1,1v1l2,2h2l1,1h1l1-1v2l1-1h1l-2-2h2l-1-1l1-1l-1-1l1-1v1h3l-1-1h1l1,1l2-2v-1h-2v-1h-1l-2-2h-1l-1,1l-1-1h-2l1,1l-1,1v1h-1l-2-2l1-1v-1h-1l-1-1l1-1l-1-1h-3l-2-2h-3l-4-4h-2l-1-1h-3l-2-2h-7l-1,1l-1-1h-3l-1-1h-2v2l2,2v1l-1,1h-3l-2-2h-2v-1l-1-1h-1l-1,1h-6l-1-1h-4l-2,2v2l-1,1h-2l1-1v-1l-1-1v-2h-2" + 
          "v-2l1-1l-3-3h-8l-1,1l-1-1l-1,1h-7l-1-1l1-1l-1-1h-1l-1,1h-2l1-1h-1l-1-1h-2v-1h2l1-1l-1-1h-6l-3,3h-3v-1h2v-2l1,1l1-1h-3l-1,1h-1l-1-1l1-1h4l-1-1h-10l-1-1h-2l2,2h-4l-1,1h2v1l-1,1v1l1,1h-3l-1-1h-1v2l-1,1l-2-2h-2l-1-1h-1l-2,2h-2l-3-3l-1,1v2l-2,2h-2l-2-2h-1l-2-2l1-1h-2l-2-2l1-1l1,1h1l1,1l1-1l-1-1h-2v-1h2v-1h-1v-1l-1-1h-1l-1-1h-2v1h-1l-1-1l-1,1l-2-2h-3l-1,1l2,2l-1,1h-11l-2-2v-1h-6l-1-1h-2l-1,1h-2v2l-1,1l1,1l-1,1l-1-1v-2h1v-1l-1-1l1-1l-1-1l-1,1h-3v-1h-3l-1,1h3l-1,1h-1l-1,1h-4l-1,1h-3l-2,2h-2l3-3h2l2-2h2l2-2h1l2-2h2l2-2h2l2-2h-1l-2-2h2l1,1v-2l-1-1l-1,1h-1v-2h-2l-1-1h-8l-1,1h-3l-1-1h1l2-2h-8v-1h2l1-1h1l-1-1h-3v-1l-1,1h-3l-2,2h-1l-2,2l1,1h1v1h-6l2,2v1h-0.999v-1l-1.001-1h-1.999l-1,1h-2l-1,1h-3l1-1h-7l0.999,1l-1,1h-6.999l-1.001,1h-2.999l-1,1h-4l1,1v1l-1,1l-1-1h-1l2,2h1v1h-1l-1-1v1l2,2l-1,1h-1l-1,1l1,1l-1,1l-1-1v-2l1-1h1v-1h-2l-1,1h-3l-1.001,1h-7.999l-1,1l2,2v2l1,1h2v1h0.999l3,3h-1v2l1,1v2l-1,1h-2v-1l1-1v-2h-1v1l-1,1v-3l2-2l-1-1l-1,1h-2l-2-2h-2l-1-1h-4l-1,1h2v1h-3l-1-1l-1,1v1l1,1h3l2,2h1l-1,1h-1l-2-2h-5l-1-1l1-1l-1-1l1-1v-3l-1-1v3l-2,2h-2l-1,1v2l3,3l-2,2v3l1,1h8l2,2v3l-1,1l1,1h2l-1,1h-2l-1-1v-4l-2-2l-1,1h-3l-1,1v1l1,1v2l-5,5h-1v1h-7l-2-2h5l-1,1h1l1-1v-1h1l4-4v-2l1-1l-3-3v-9l-1-1v-1l2-2v-3h-2l-1-1h-5l-2,2v2l-4,4c0,0-1,0-1,0v2h1v3l-1,1v1h2l4,4l-2,2h-2l-3-3h-3c0,0-2-2-2-2h-3l-1-1h-5l-1,1v1l1,1v1h-2l-1,1v1h-1l-1-1v-2h-0.999l-2,2h-6l-2,2h-4.001l2-2v-2h-0.999l-2.001,2v1h-2v-1h-1l-1.999,1.999h-2.001l-2,2h-2.999v2.001l-2.001,2h-4l-2-2v-1l2-2h2v-1l-2-2h-5v1l1,1v2l-1,1v1l2,2v1l-1,1v2l-2-2h-3l-1,1h-1l-1,1h-1l-2,2v1l2,2l-1,1h-1l-1-1h-3l-2-2h-1l-1,1l2,2h2v2l-1,1h-3l-3-3h-2v-6l-2-2h-1l-3-3v-1h2l2,2h2l2,2h4l1,1h3l1-1h3l3-3v-1l-1-1v-1l-2-2h-3l-2-2h-2l-2-2h-2l-1-1h-4l-1,1h-1v-1l1-1h-3v-1h2l-1-1h-1l-1,1h-2v1h-2l-2,2h-2v4h2l1,1v2l-2,2v2l3,3v1h-1v4l2,2v1l-1,1v1l3,3l-9,9h2v1l1,1h2l1,1h-3l-1,1h-2v2l-1,1v6l1,1v3l2,2h2v1l1-1h1l2,2v4l4,4l-1,1h-1l-1-1l-1,1l1,1v3h2l1-1h3l2,2h-1v2h2l1,1v2h2l1,1l1-1h1l2,2l1-1l2,2h2v2h-1v5h-2l-2,2h3v1l-1,1h-3l2,2l-1,1h-1v2h-2l2,2h1l5,5l1-1l1,1h4l2,2h5l5,5h2l1-1V180.175zM566.175,84.175l1-1h-1V84.175z M549.175,91.175v-1h-1L549.175,91.175z M617.175,15.175l1,1h4h1l1-1v-1h-1l-1-1l-1,1l-1,1H617.175z M619.175,10.175h-3l-1,1h2l1,1h1l1-1L619.175,10.175z M611.175,14.175l-1,1h3l1-1H611.175z M605.175,11.175h1h1h1l1-1h-3L605.175,11.175z M608.175,13.175l1-1h-1l-1,1H608.175z M605.175,13.175h1l1-1h-2h-3l-1,1h-2l1,1h4L605.175,13.175zM604.175,15.175h1l1,1h1l1-1l-1-1h-2h-1h-1L604.175,15.175z M600.175,17.175h2l1-1h1l-1-1h-2l-1-1h-1h-1h-1l-1,1h-1l1,1h1h2" + 
          "L600.175,17.175z M596.175,18.175l1-1h-1.019h-0.981L596.175,18.175z M598.175,18.175l-1,1h1l1-1H598.175z M610.175,18.175l1-1h1l1,1l1-1h1l1-1v-1h-3l-1,1h-2h-1l-1,1h1L610.175,18.175z M609.175,19.175l-1,1h1h1v-1H609.175z M594.175,18.175h-1h-1l-1,1h1h2h1v-1H594.175z M588.175,16.175l-1-1h-3l-1,1v1h-1h-1h-1h-1l-1,1h-1h-1l1,1h1l1-1l1,1.002l-1,1.002h1.005l0.995-0.996l1-0.009l1,0.009l-1-1.009h2l1-1h3l1-1H588.175z M587.175,14.175l0.005-0.995l-1.005,1.008L587.175,14.175z M582.175,16.175l-1-1h-1h-1h-1l-1,1h-2h-1h-1l-1,1h1h1h1l1,1l1-1h1l1-1h1l1,1L582.175,16.175z M584.175,19.175l1,1l1-1h-1H584.175z M588.175,20.175v1l1-1l-1-1h-1l-1,1H588.175z M600.175,18.175v1l-1,1h1h2h1v-1v-1H600.175z M603.175,17.175l1,1v1h2l1-1h1l-1-1H603.175z M874.175,116.175l-1,1v1l1-1l1-1h1v-1h-1L874.175,116.175z M879.175,131.175l1,1l1,1v-1l-1-1v-1h-1V131.175z M885.175,134.175v-1l-1-1h-1L885.175,134.175z M896.175,139.175l1,1h1h1l-1-1H896.175z M908.175,144.175 M899.175,141.175l-1,1h1V141.175z M909.181,144.175v-1.006l-1.006,1.006H909.181z M911.175,143.175l1,1v-1H911.175z M914.175,143.175v1l1-1H914.175z M912.175,144.175v1l1,1h1L912.175,144.175z M854.175,147.175h-1v1L854.175,147.175z M854.175,148.175l-1,1h-1v1l1,1v-1h1l1-1L854.175,148.175zM856.175,147.175h-1v1L856.175,147.175z M852.175,152.175h-1v1L852.175,152.175z M850.175,156.175v-1h-1L850.175,156.175zM847.175,159.175v-1h-1L847.175,159.175z M845.175,161.175h-1l-1,1l1,1v-1L845.175,161.175z M838.175,166.175l-1,1h1l1-1l1-1h1l-1-1L838.175,166.175z M835.175,167.175l-1,1l-1,1h-1l-1,1v1l1-1h1l1-1l1-1h1v-1H835.175z M828.175,174.175v-1l1-1l1-1h-1l-1,1l-1,1L828.175,174.175z M830.175,173.175l1,1v-1H830.175z M829.175,174.175h1v-1L829.175,174.175z M829.175,175.175v-1h-1L829.175,175.175z M898.175,141.175v1h1v-1H898.175z",
    flag: "russia.png",
    facts: { exposure:["-","-"], population:["139 Million","9"], lifeexp:["66","162"], landmass:["17,098,242","1"] },
    perils: ['disease','all']
  };

  // Greenland
  countryData['gl'] = {
    name: "Greenland",
    svg: "m280.174988,32.174999l-1,-1l-5,0l-1,-1l0,-2l1,-1l4,0l1,-1l3,0l1,-1l4,0l4,0l1,-1l0,-2l1,-1l1,-1l-6,0l-1,-1l0,-1l1,-1l3,0l2,-1.999999l1,-1l2,0l5,0l1,-1l0,-2l2,-2l2,0l1,1l1,1l3,0l1,1l2,0l-1,-1l-1,-1l-3,0l-1,-1l0,-1l3,0l6,0l-1,-1l5,0l1,1l0,3l2,-2l-1,-1l1,0l3,0l2,2l2,0l1,-1l-1,0l-1,-1l-1,-1l6,0l1,1l2,0l2,2l4,0l1,1l0,-3l1,-1l-1,-1l-1,-1l-1,0l-2,0l-1,-1l3,0l1,-1l9,0l1,-1l4,0l2,2l1,0l1,-1l-1,0l-1,-1l1,-1l9,0l1,-1l10,0l1,1l8,0l1,1l-12,0l-1,1l7,0l10,0l1,1l1,1l6,0l0,1l-1,1l-1,0l-1,1l-3,0l-13,0l-1,1l11,0l2,2l1,0l1,-1l1,-1l6,0l0,1l0,1l-1,1l-1,1l-1,0l-1,1l-1,1l2,0l1,-1l1,0l1,-1l1,-1l1,0l3,0l5,0l2,-2l6,0l1,1l4,0l1,1l0,1l-2,0l-1,1l-3,0l-2,1.999999l-3,0l-1,1l0,1l-1,1l-8,0l-1,1l1,1l1,1l0,1l1,0l0,1l-1,1l-1,1l-2,0l-1,1l-1,1l0,2l-1,1l2,0l3,0l1,1l-3,0l1,1l1,1l4,0l0,1l-1,1l-3,0l-3,0l-1,1l-1,0l-1,-1l-1,1l1,0l2,2l3,0l1,1l1,1l0,3l-4,0l0,1l0,1l1,-1l1,0l1,1l1,1l0,2l-3,0l-3,0l-1,-1l-1,1l1,1l4,0l0,2l-1,0l-1,1l-4,0l-1,-1l-1,0l-1,-1l-1,1l-2,0l-1,1l5,0l1,1l2,0l1,1l0,3l-3,0l-3,-3l-1,0l0,1l1,1l2,2l1,0l1,1l2,0l0,1l-1,1l2,0l0,5.000004l-2,0l-2,0l-1,-1l0,-1l-2,-2.000004l-1,-1l-2,0l0,1l-1,1.000004l-5,0l0,1l-1,1l-1,0l1,1l4,0l-1,1l2,0l1,-1l1,0l2,0l1,1l2,0l3,0l-1,1l-1,1l-2,0l-1,1l-1,1l-2,2l-2,0l-1,1l-4,0l-1,1l-3,0l-1,1l-4,0l-1,-1l0,2l-1,1l-1,0l-1,1l0,2l-1,1l-2,2l-2,0l-1,1l-1,1l-2,0l-1,1l-2,0l1,-1l0,-1l1,-1l-1,0l-1,1l0,1l-1,1l-2,0l0,1l-1,1l-1,0l-1,1l1,1l0,1l-1,1l0,3l-4,4l0,5l-1,1l0,2l-1,1l0,2l-1,1l-2,0l-1,-1l-1,0l-1,-1l0,-1l-1,0l-1,-1l-1,0l-3,0l-2,-2l-1,0l-2,-2l0,-1l0,-1l-2,-2l-1,-1l0,-2l-1,-1l-1,-1l0,-2l-1,0l0,-1l-1,-1l0,-3l-1,0l-1,-1l0,-2l-1,0l0,-2l1,-1l-1,0l-1,-1l0,-1l2,-2l-2,0l2,-2l5,0l-1,-1l-4,0l0,-2l2,0l1,1l3,0l-1,-1l0,-2l1,-1l1,-1l0,-1l-3,0l-1,-1l-2,0l-1,-1l-2,0l-1,-1l0,-1l5,0l1,1l1,0l1,1l1,0l-1,-1l0,-2l-1,-1.000004l-1,0l-2,0l-1,-1l2,0l1,-1l-3,0l0,-1l-1,0l0,1l-1,1l-5,0l0,-2l1,-1l0,-1l0,-1l1,0l1,-1l0,-1l-2,0l0,-1l1,-1l-2,0l-1,-1l1,-1l0,-1l-1,-1l-1,0l0,-1l1,-1l-2,0l-2,-2l-1,-1l-1,-1l1,-1l-1,-1l-2,0l-1,-1l-3,0l-1,-1l-4,0l-9,0l-1,1l-4,0l-1,-1l-1,-1l0,-1l-1,-1l-3,0l-1,-1l1,-1l5,0l1,-1l5,0l1,-1l-10,0zm-7,2l3,0l1,-1l-3,0l-1,1zm70,-28.000999l-2,0l-3,0l0,1l1,0l1,1l2,0l1,1l1,0l0,-2l-1,-1zm70,15l1,-1l-3,0l-1,1l3,0zm-4,7.000999l0,2l1,0l0,-2l-1,0zm3,3l0,1l1,0l0,-1l-1,0zm-2,8l1,1l0,-3l-1,0l0,2zm0,4l0,2l4,0l-1,-1l-1,-1l-2,0zm-89,20l0,1.000004l1,0l0,-1.000004l-1,0zm5,2.000004l1,0l-1,-1l-1,0l1,1zm-7,2l0,1l0,1l0,1l1,1l1,0l1,1l1,0l1,-1l2,0l0,-1l-1,-1l-1,0l-1,-1l-1,0l-1,-1l-2,0zm9,2l0,2l1,-1l0,-1l-1,0zm35,19l1,0l0,-1l-1,1zm25,-23l-1,1l1,0l3,0l1,1l0,-1l1,0l1,-1l0,-1l-1,0l-1,0l-3,0l-1,0l0,1zm20,-57.000003l0,1l1,1l2,0l-1,-1l-1,-1l-1,0z",
    flag: "greenland.png",
    facts: null,
    perils: []
  };

  // Canada
  countryData['ca'] = {
    name: "Canada",
    svg: "m278.174988,162.175003l1,0l1,-1l0,-1l1,-1l1,-1l1,-1l1,-1l1,0l1,-1l1,0l1,-1l2,0l1,-1l2,0l1,1l1,1l0,1l-1,1l-1,1l-2,0l-1,-1l-1,1l1,0l1,1l1,0l1,0l1,0l-1,1l0,1l-1,1l1,0l0,1l1,1l0,1l2,0l0,1l1,0l1,0l1,1l1,-1l1,0l1,1l0,1l-1,1l-1,0l-1,1l-2,0l-1,1l-1,0l-2,2l-1,1l-1,0l-1,-1l0,-2l1,-1l1,-1l1,-1l1,0l1,1l1,-1l1,-1l-1,0l-1,1l-1,-1l0,-1l-1,1l-1,0l-1,1l-1,0l-1,1l-2,0l0,-2l-1,-1l0,-5l-1,-1l-1,1l-1,0l-1,-1l-1,1l0,1l-1,1l0,1l-1,1l0,2l-1,1l-1,0l-1,1l-8,0l1,-1l1,0l4,-4l1,0l2,-2l1,0zm-49.999985,-90l1,0l0,-1l-1,1zm-14,-1l1,0l0,1l1,-1l-1,-1l-1,0l0,1zm-3,-1l-1,-1l-1,0l-1,1l1,1l-1,0l-1,1l-1,0l-1,1l1,1l1,0l1,0l2,0l1,1l2,0l1,0l1,0l1,-1l-1,0l-1,-1l-1,-1l-1,-1l-1,-1zm-9,-5l0,1l1,0l-1,-1zm0,8l0,1l1,0l0,-1l-1,0zm1,-1l0,1l1,0l0,-1l-1,0zm-5,2l0,1l1,0l1,-1l-2,0zm-6,2l1,0l0,-1l-2,0l1,1zm-12,1l0,1l1,-1l-1,0zm2,1l0,-1l-1,1l1,0zm2,1l-1,1l1,0l0,-1zm67,61l1,0l1,0l-1,-1l-2,0l1,1zm4.999985,4l1,-1l-1,0l0,1zm-0.999985,-5l0,-1l-1,0l1,1zm1.999985,-13l-1,1l-1,1l1,0l1,0l0,-1l1,0l0,-1l-1,0zm-1.999985,0l-1,1l1,0l0.999985,-1l-0.999985,0zm0,-2l0,1l0.999985,-1l-0.999985,0zm1.999985,1l0,-1l-1,1l1,0zm-1,-3l-1,-1l0,1l1,0zm0,-17l0,-1l0,-1l1,0l-1,-1l-1,0l-1,1l0,1l1,1l1,0zm-10.999985,-4l0,1l1,1l1,0l1,-1l1,-1l1,-1l0,-1l-1,0l-1,1l-1,0l-1,0l-1,1zm13.999008,-4l0,1l1,1l1,0l0,-1l-1,-1l-1,0zm3,-1l0,1l1,1l1,0l0,-1l-1,-1l-1,0zm-2,-1l0,1l1,-1l-1,0zm9,6l1,0l-1,-1l-1,0l1,1zm25.000977,-3l0,-1l1,-1l-1,-1l-1,0l-1,-1l1,-1l-1,-1l-1,-1l-1,1l-1,-1l-1,-1l0,-1l-1,-1l-1,0l-1,-1l0,-1l1,1l1,0l0,-1l-1,-1l1,0l0,-1l1,0l2,2l1,0l1,1l0,1l2,2l0,-1l1,1l1,1l1,-1l0,-1l1,-1l1,0l1,-1l1,-1l-1,-1l2,0l-1,-1l1,0l0,-1l-1,-1l-1,0l-1,1l-1,-1l-1,1l0,-1l1,-1l-1,-1l-1,1l-1,0l0,-1l1,0l-1,-1l-1,0l-1,-1l0,-1l-1,1l-2,0l0,-1l0,-1l-1,1l-1,0l0,-1l-1,-1l-1,0l-2,0l-1,-1l3,0l0,-1l-1,0l-1,0l-1,0l1,-1l2,0l3,0l-1,-1l-3,0l-1,0l-2,0l1,-1l2,0l1,0l1,0l0,-2l-1,-1l-1,0l0,1l-1,1l-1,0l0,-1l-1,0l-1,0l-1,0l1,-1l1,0l1,0l1,0l0,-1l-1,-1l-1,0l-1,0l-1,0l-1,0l-1,1l0,1l-1,1l0,-1l0,-1l-1,1l-1,0l1,-1l1,0l1,-1l1,-1l-1,0l-1,0l-1,1l-1,0l-1,0l1,-1l1,0l1,-1.000004l0,-1l-1,0l-1,-1l-2,0l-1,1l-2,0l1,-1l-1,0l-1,0l-1,1l0,-1l1,-1l1,0l-1,-1l-1,0l-1,1l-1,0l1,-1l1,-1l-1,-1l-2,0l-1,-1l-2,0l-2,0l-1,1l1,1l1,0l-1,1l-1,-1l-1,0l0,1l-1,-1l-1,0l-1,-1l0,1l-1,1l-1,0l0,0l0,-1l0,-1l0,0l1,-1l-1,-1l-1,-1l0,-1l0,-1l-1,-1l-2,0l-3,0l-1,1l-1,0l-1,1l-1,0l-1,1l1,0l1,1l0,1l-1,-1l-1,0l-1,0l0,1l1,1l2,0l0,1l1,1l-1,0l-1,-1l-1,1l-1,0l0,1l1,1l2,0l0,3.000004l-1,-1.000004l-1,0l1,-1l-1,0l-1,-1l-1,-1l0,-1l0,-1l-1,-1l0,-2l1,-1l1,-1l1,-1l1,-1l-1,0l-3,0l-2,0l-2,0l-1,1l0,1l-1,1l-1,1l0,1l-1,1l0,2l-1,1l0,1l1,1l2,0l1,1l2,0l1,1.000004l-5,0l0,1l1,1l1,1l1,0l1,1l1,-1l1,0l1,-1l1,1l0,1l1,0l3,0l4,0l1,1l2,0l1,0l1,1l1,-1l-1,0l-1,-1l1,0l2,0l1,1l1,0l2,0l0,-1l-1,-1l0,-1l1,1l1,0l1,0l1,1l0,1l1,0l1,0l-1,1l1,0l1,0l0,1l1,0l1,1l0,1l-1,0l-1,0l-1,0l0,1l1,1l1,-1l1,0l1,-1l1,0l0,1l1,1l1,0l0,-1l1,1l0,1l1,0l0,1l1,1l1,1l0,2l-1,1l-1,1l-1,1l-1,1l-1,0l0,1l1,1l1,1l-1,0l-1,1l-1,0l-2,0l1,1l0,1l-1,0l0,-1l-1,0l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l0,1l1,1l1,0l1,1l1,0l2,0l1,-1l2,0l0,-1l1,-1l0,1l1,1l2,0l0,1l1,1l1,1l1,0l1,1l-1,1l1,1l1,0l1,0l1,1l2,0l1,1l1,1l1,0l1,1l2,0l1,0l1,1l1,0l0,-2l-1,-1l-1,-1l-1,0l-1,-1l-3,-3l1,0l1,1l1,0l1,1l1,0l1,1l1,0l2,2l1,-1l0,-3l1,1zm-38,-25l0,1l1,0l1,-1l1,-1l-1,0l-1,1l-1,0zm2,-3l0,1l1,0l1,-1l-1,-1l0,1l-1,0zm4,1l0,1l1,0l0,-1l-1,0zm-8.999985,-1l1,1l1,0l0.999985,-1l-0.999985,0l-1,-1l-1,1zm14.999985,5l-1,0l0,1l1,0l0,-1zm0,2l0,1l1,1l2,0l1,-1l-1,-1l-3,0zm-11,-1l0,1l1,0l0,-1l-1,0zm7,0l-2,2l0,3l4,0l1,-1l0,-3l-1,-1l-2,0zm-25.999985,0l-1,1l0,1l1,0l1,-1l0,-1l-1,0zm-2,-8l1,1l1,0l0,-1l-2,0zm-20,-9.000004l3,0l1,-1l0,-1l0,-1l1,-1l4,0l2,-2l1,-1l0,-2l-3,0l-2,0l-1,-1l-4,0l-3,3l0,3l1,1l0,3zm0,-11l0,-1l-1,0l1,1zm-3,-3l1,1l2,0l1,1l3,0l1,-1l0,-1l-1,-1l-1,-1l-1,-1l-2,0l-1,1l-1,0l-1,1l0,1zm4,-5l0,1l1,0l0,-1l-1,0zm-7,7l0,1l1,-1l-1,0zm2,-5l0,1l1,0l1,-1l-2,0zm-2,1l1,0l0,-1l-1,-1l0,-1l1,-1l-1,-1l-1,-1l-2,0l-1,1l-1,-1l-2,0l-1,1l1,0l0,1l1,1l-1,0l-1,-1l-1,-1l-1,0l-1,0l0,1l1,1l0,1l-1,0l-1,1l0,1l1,-1l1,0l1,0l2,0l1,0l-1,1l-1,0l1,1l0,1l6,0l1,-1l0,-1z" + 
          "m-12,-3l0,-1l-1,-1l-1,1l-3,0l1,1l2,0l0,1l2,0l1,-1l-1,0zm-3,-3l-1,0l-2,0l1,1l2,0l1,0l-1,-1zm5,0l2,0l1,-1l-1,0l-1,0l-1,1zm-8,6l0,2l2,0l0,-2l-2,0zm-3,-12l0,1l1,1l1,1l2,0l0,-1l-2,0l0,-1l-1,-1l-1,0zm9,0l0,1l1,0l1,0l1,-1l-3,0zm8,-1l-1,-1l-1,-1l0,-1l0,-1l-2,0l-1,0l-1,-1l-2,0l-1,1l0,-2l-1,-1l-6,0l0,2l2,0l-1,1l1,0l1,-1l1,0l-1,1l1,0l0,1l-3,0l0,1l1,1l2,0l1,0l1,-1l1,0l1,1l3,0l1,1l1,1l2,0l1,0l0,-1zm-9,-1l-1,0l-1,1l1,0l1,-1zm7,-10l0,1l0,1l2,0l1,1l0,-2l-1,-1l-2,0zm4,7l1,1l0,1l1,1l1,0l-1,1l1,1l2,0l1,-1l3,0l-1,-1l1,-1l-1,-1l-4,0l-1,-1l-3,0zm6,6l1,1l5,0l1,-1l-1,-1l-5,0l-1,0l0,1zm12,0l0,1l1,0l1,1l2,0l0,-1l-1,-1l-3,0zm2,4l0,1l1,1l1,0l0,-1l0,-1l-2,0zm-15,-1l-1,0l1,1l-1,0l0,1l1,0l1,1l1,0l1,1l5,0l1,-1l2,2l0,2l-1,1l0,1l1,1l1,1l1,1l1,0l1,0l3,0l1,-1l2,0l-1,1l1,1l5,0l1,-1l3,0l2,0l1,0l1,-1l1,1l1,1l1,0l1,-1l2,0l1,0l1,-1l0.999985,0l0,-1l-0.999985,0l0.999985,-1l0,-1l-1.999985,0l0,-1l-2,0l-1,-1l-6,0l-1,1l-3,0l-1,0l-1,1l-2,0l-1,-1l-3,0l-2,0l0,-1l-1,-1l-1,0l-1,0l-1,-1l4,0l-1,-1l-2,0l-1,-1l-5,0l-1,-1l-1,0l-1,-1l-3,0l-3,0zm18,1l0,2l2,0l3,0l2,0l1,-1l0,1l5,0l0,-1l1,1l4,0l0,-1l1,1l2,0l1,1l2.999985,0l1,-1l1,0l2,-2l0,-1l-1,0l-1,1l-1,-1l-1,-1l-4.999985,0l-1,0l1,-1l2,0l5.999985,0l1,-1l0,-2l5,0l1,-1l1,0l-1,-1l-1,0l1,-1l1,0l1,0l1,-1l-1,0l-1,0l-1,0l-1,-1l-2,0l-2,0l-2,0l1,-1l3,0l2,0l1,1l3,0l-1,-1l-2,0l-1,-1l4,0l1,-1l2,0l-1,-1l-2,0l1,-1l2,0l1,1l1,1l2,0l1,-1l2,-2l0,-1l1,0l1,0l1,0l1,-1l1,-1l1,0l1,-0.999999l1,-1l2,0l1,0l1,0l2,-2l-3,0l-1,1l-5,0l1,-1l3,0l1,-1l4,0l1,-1l1,-1l5,0l1,-1l1,0l-2,-2l-4,0l-1,-1l-5,0l-1,0l-1,1l-4,0l1,-1l2,0l1,0l1,-1l-5,0l-3,0l-1,-1l-3,0l0,1l-1,0l-1,-1l-3,0l0,1l1,1l-2,0l-1,-1l-7,0l1,1l2,0l1,1l-2,0l-2,0l-2,-2l-5.999985,0l-1,0l1,1l0.999985,1l-1.999985,0l-1,-1l-1,0l0,1l-1,0l-1,1l-1,0l1,1l-1,0l-1,1l-2,-2l-5,0l-1,1l-2,0l1,1l2,0l1,1l-3,0l-1,-1l-6,0l-1,1l-5,0l-1,1l3,0l2,0l-1,1l1,0l1,0l-1,1l0,1l4,0l4,0l1,-1l3,0l-1,1l-2,0l-1,1l-7,0l1,0.999999l2,0l1,1l1,0l1,-1l1,0l1,-0.999999l2,0l1,-1l1,0l-1,1l-1,0.999999l-2,0l-1,1l3,0l4,0l1,-1l2,0l0,1l2,0l1,0l1,-1l1,0l1,0l1.999985,-1.999999l1,0l1,0l1,-1l1,0l-1,1l0,1l3,0l-1,0.999999l-3,0l-2,0l-0.999985,1l-2,0l-1,1l-4,0l1,1l1,1l1,1l2,0l1,1l-3,0l-1,-1l-1,0l-2,-2l-3,0l-1,-1l-5,0l0,1l1,1l0,1l1,0l1,0l1,1l2,2l0,1l2,0l2,0l1,1l-2,0l-3,0l-1,0l-4,0l-1,0l-1,1l-1,1l0,1l2,0l1,0l1,-1l0,1l1,0l1,0l1,-1l0,1l1,0l-1,1l-1,0l-1,1l0,1l1,0l1,1l2,0l2,-2l1,-1l0,1l-2,2l-1,1l-2,0l-1,-1l-2,0l-2,-2l-3,0l-1,1l1,1l2,0l1,1l-2,0l-2,0l-1,1l-1,1l-1,0zm-3,-19l-1,-1l-1,-0.999999l-1,-1l-1,-1l-1,0l-1,-1l-2,0l-1,0l0,1l1,0l1,1l-2,0l-2,0l-1,1l0,0.999999l1,0l1,0l1,1l-2,0l-1,0l-1,-1l-1,0l0,1l1,1l-1,0l-1,0l1,1l2,0l2,0l-1,1l-3,0l-1,-1l-1,0l0,1l1,1l1,1l2,0l-1,1l1,1l1,-1l2,0l1,0l3,0l2,0l1,0l-1,1l-2,0l-1,0l-1,1l-2,0l1,1l1,0l0,1l1,0l2,0l-1,1l1,1l4,0l0,-1l1,1l1,0l-1,-1l0,-1l2,2l2,0l0,-2l1,1l0,-1l0,-2l1,0l0,1l0,1l1,-1l1,-1l2,0l1,-1l1,0l0,-1l-1,-1l-2,0l-2,0l1,-1l0,-1l-1,-1l-1,0l0,-1l-2,0l0,1l-1,0l-1,-1l0,-1l-3,0zm25,36l0,0l1,1l1,1l0.999985,1l1,0l1,-1l2,0l4,0l0,-1l-1,-1l-1,-1l-2,0l-3,0l-1,-1l-1.999985,0l-1,0l0,2zm39.999985,49.000004l1,0l1,-1l-1,0l-1,1zm-51.999985,-15l-1,1l-1,1l0,5l-1,1l-1,1l0,1l1,0l1,-1l1,0l1,1l0,2l1,-1l1,0l1,-1l2,-2l1,-1l0,1l1,0l1,1l1,1l1,0l2,0l1,-1l-1,-1l-3,0l1,-1l-2,-2l-1,-1l-1,0l-1,-1l-2,0l-1,-1l-1,1l0,-1l0,-1l-1,-1zm0,0l1,1l1,0l0,-1l-1,-1l-1,0l0,1zm3,0l1,1l2,0l-1,-1l-1,0l-1,-1l0,1zm50.999985,65l1,0l2,2l3,0l0,-1l-1,0l-2,-2l-1,0l-1,0l-1,0l-1,0l1,1zm21,-7.001007l-1,1l-1,0l-2,2l0,3l-1,1l-1,1l1,1l-1,0l-2,2l2,0l-1,1l-1,0l-1,1l0,2l3,0l4,0l1,-1l0,0l1,0l0,1l1,0l1,-1l1,0l-1,1l-2,2l2,0l2,-2l0,-1l1,0l0,1l0,1l-1,1l1,0l1,-1l0,2l1,0l1,-1l0,-3l-1,1l0,-2l-1,1l-1,-1l1,-1l1,0l0,-1l-1,0l-1,-1l1,-1l0,-1l-2,0l-1,0l-1,0l-1,0l-1,-1l1,-1l-1,-1l-1,1l-1,1l0,-2l1,-1l1,-1l0,-1l1,-1l0,-1l-1,0zm5,7l0,-1l-1,1l1,0zm-7,9l0,1l1,1l0,-1l-1,-1zm-14,0l1,0l1,-1l0,-1l-1,1l-1,1zm-4,0.001007l-1,1l-1,1l1,0l0,1l1,0l0,-1l0,-2z" + 
          "m3,3l-1,0l-1,-1l-1,0l0,1l1,1l1,0l1,0l1,-1l-1,0zm6,0l0,1l-1,1l-1,0l1,-1l0,-1l1,-1l0,-1l-1,0l-1,1l0,1l-1,1l0,1l0,1l3,0l1,-1l0,-1l-1,-1zm-170.999985,-14l3,3l1,1l2,0l0,1l1,1l2,0l1,1l1,-1l-1,-1l-1,-1l-1,-1l-2,-2l-1,-1l-1,0l-1,-1l-1,0l-1,0l-1,-1l-1,0l-1,0l2,2zm-4,-11l0,1l1,1l0,1l1,-1l0,-1l-2,-2l0,1zm-2,0l0,-1l-1,-1l-1,0l2,2zm-8,-2l1,1l0,1l1,0l1,-1l0,-2l1,-1l-2,0l-1,0l-1,0l0,2zm5,6l0,-1l-1,-1l0,-1l0,-1l-1,-1l-1,1l0,1l1,1l2,2zm25,-96.000004l-2,0l-1,1l-6,0l1,1l0,1l1,1l-1,1l0,2l-2,2l0,1l-1,1l-1,1l1,1l3,0l2,2l1,1l3,0l1,-1l3,0l0,-3l1,-1l1,-1l1,0l2,-2l2,0l2,-2l3,0l1,-1l-1,-1l-1,0l-2,-2l-4,0l-3,0l-1,-1l-2,0l-1,-1zm37,6l-4,0l0,4l1,1l1,1l0,2l-1,0l-1,-1l-1,-1l0,-3l-1,-1l-4,0l1,1l-1,1l-3,0l1,-1l0,-1l-4,0l-2,2l-1,0l-1,-1l1,-1l1,-1l-1,-1l-1,0l-1,0l-1,1l-2,0l-1,0l-1,1l-1,0l-1,1l-1,1l-1,0l1,1l-1,1l-1,0l0,2l3,0l-1,1l3,0l2,0l-1,1l-4,0l-1,1.000004l2,2l10,0l3,0l1,1l-6,0l-4,0l-1,1l-2,0l0,1l2,2l1,1l5,0l1.5,1.5l0.5,0.5l0,1l6,0l4,0l1,-1l1,-1l3,0l2,-2l1,0l1,1l1,1l2,0l1,1l4,0l1,-1l1,0l1,-1l-1,0l0,-1l-1,0l-1,1l-1,0l0,-2l1,0l1,0l1,-1l0,1l1,0l2,0l0,-2l-1,-1l-3,0l-1,-1l-2,0l-2,-2l0,-3.000004l-2,-2l0,-2l-4,-4zm26,3l-1,0l-1,-1l0,-1l-2,0l1,-1l1,0l1,-1l0,-2l-10,0l-1,1l-1,1l0,1l2,0l1,1l0,2l-2,0l0,-1l-1,-1l-3,0l0,1l3,3l2,0l1,1l2,2l1,1l2,0l1,-1l3,0l1,-1l0,-2l0,-2zm0,-2l-1,0l0,1l1,0l0,-1zm-23,-14l-2,0l-1,1l-2,0l-1,-1l-1,-1l0,-1l0,-2l-1,0l-1,1l-2,0l0,1l1,1l0,1l-1,0l1,1l1,1l-5,0l-1,-1l-1,0l-1,-1l-1,-1l-3,0l-1,-1l-4,0l-1,1l-1,1l-1,1l0,1l-1,1l0,1l2,0l1,1l2,0l2,0l1,-1l0,-1l1,1l0,1l-1,1l0,1l1,1l6,0l1,-1l1,-1l3,0l1,-1l8,0l0,-2l1,-1l0,-1l0,-1zm-20,-3l1,-1l-4,0l-1,1l4,0zm-3,-6l1,1l2,-2l-2,0l-1,0l-1,1l1,0zm4,-1l-1,1l1,1l0,1l6,0l1,-1l0,-1l1,-1l-8,0zm0,-2l-1,1l10,0l1,-1l0,-1l-2,0l-1,-1l-2,0l-1,1l-3,0l-1,1zm-14,15l2,-2l0,-1l-1,0l-1,1l-2,0l-1,1l0,1l3,0zm-10,-5l-1,1l0,1l4,0l1,0l1,-1l0,1l0,1l1,0l1,-1l0,-1l1,0l2,0l0,-1l0,-1l1,-1l1,0l-1,1l0,2l3,0l0,-2l2,0l1,-1l0,-1l0,-1l1,-1l-1,-1l-3,0l-1,1l-5,0l-3,3l-2,2l-3,0zm3,3l0,1l1,-1l-1,0zm37,10l0,1l3,3l1,0l2,-2l0,-2l-6,0zm14.998993,21.000004l0,-1l-1,0l1,1zm53.001007,40.999001l0,-1l-1,0l1,1zm-109,43.000999l0,-1l-1,0l1,1zm-14,-11l1,0l0,-1l-1,1zm-6,-9l1,0l0,-1l-1,1zm130.999985,-97.000004l0,1l-1,1l1,0l1,-1l0,-1l-1,0zm-9.999985,46.000004l0,1l1,-1l-1,0zm36.999985,24l0,2l2,0l0,-2l-2,0zm9,-3l1,0l0,-1l-1,0l-1,0l1,1zm-1,-3l0,1l1,1l0,-2l-1,0zm-13,-1l0,-1l-1,-1l-1,0l2,2zm37,46l1,0l0,-1l-1,1zm1,-4l1,-1l-1,0l0,1zm1,9l1,-1l-1,0l0,1zm-68.999985,14l1,1l0,-1l-1,-1l-1,0l-1,0l-1,0l1,1l0,0l2,0zm-118,-31l-1,1l1,0l0,-1zm0,0l-1,1l1,0l0,-1zm118,31l1,1l0,-1l-1,-1l-1,0l-1,0l-1,0l1,1l0,0l2,0zm2,12l-1,0l-1,1l1,0l1,-1zm-120,-43l-1,1l1,0l0,-1z" + 
          "m183.999985,0.998993l-1,0l-1,0l0,1l-1,-1l1,-1l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l-1,1l-1,0l0,-1l1,-1l1,0l1,0l1,-1l1,-1l2,0l0,-1l-1,-1l-1,0l0,1l-1,-1l-1,0l0,-1l-1,1l-1,0l1,-1l-1,0l-1,0l-1,0l1,-1l0,-1l-1,-1l-1,0l-1,0l0,-0.999992l-1,-1l-1,0l1,-1l1,0l0,-1l-1,-1l0,-1l-1,0l1,-1l-1,-1l-1,-1l-1,0l1,-1l-1,0l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l0,-1l-1,1l0,1l-1,1l0,1l0,1l-1,1l-1,1l-1,0l-1,1l-1,0l-1,0l-1,1l-1,0l1,-1l0,-1l-1,-1l-1,0l-1,0l-1,1l-2,0l1,-1l1,0l1,-1l-1,-1l0,-2l-1,0l1,-1l0,-2l1,-1l0,-1l-1,1l-1,0l-1,0l-1,-1l-1,0l-1,-1l0,-1l-1,0l-1,-1l0,-1l-1,0l-2,-2l-1,1l-1,0l-1,1l-1,-1l-1,0l-2,0l-1,-1l-1,0l-1,0l-1,1l0,1l0,1l1,1l0,2l-1,0l-1,1l-1,1l1,0l1,-1l1,1l0,2l1,1l-1,1l0,1l-1,1l-1,1l0,1l3,3l1,1l0,6.999992l-1,1l-2,2l-1,1l-2,0l-1,0l0,2l1,1l0,1l0,3l1,1l1,1l-1,1l0,2l0,2l-1,-1l-1,0l-1,1l-1,0l-1,-1l0,-1l-2,-2l-2,-2l0,-6l0,-2l-1,-1l-2,0l-4,0l-1,-1l0,-1l-2,0l-1,-1l-2,0l-1,-0.999992l-2,-2l-1,-1l-2,0l-1,-1l-3,0l-1,0l-1,1l-1,0l0,-2l0,-2l-1,-1l0,-1l-1,-1l-2,0l-1,-1l-1,-1l0,-3l0,-2l1,-1l0,-1l1,-1l1,-1l0,-1l1,-1l1,-1l0,-1l1,-1l1,0l-1,-1l1,0l1,0l2,0l1,-1l0,-1l-1,0l-1,0l-1,-1l-1,0l-1,-1l-2,0l-1,-1l1,0l2,0l1,1l1,0l1,1l2,0l1,-1l1,-1l-1,-1l1,0l1,1l2,0l1,-1l1,-1l1,-1l1,-1l0,-1l-1,0l-3,0l-1,-1l-1,-1l-1,0l-1,-1l2,0l1,1l1,0l1,1l1,0l2,0l2,-2l1,-1l-1,-1l-1,-1l1,0l2,0l1,1l1,0l1,0l1,1l0,-1l-1,-1l-1,-1l-1,-1l1,0l1,1l1,1l1,1l1,-1l1,0l1,-1l1,0l1,-1l1,-1l0,-1l-1,-1l-1,-1l0,-1l-1,0l0,-1l1,0l1,-1l1,-1l-2,0l1,-1l1,0l-1,-1l-2,0l0,-1l-1,-1l-3,0l-3,0l-1,-1l0,3l1,1l0,1l-1,1l-1,1l0,1l-1,1l-1,1l0,1l-1,1l-1,0l0,-1l-1,-1l-1,-1l0,-1l1,-1l0,-1l-1,-1l-1,-1l-1,-1l-1,0l-1,1l0,2l-1,1l-1,-1l0,-1l0,-1l-1,-1l1,-1l-1,0l-1,-1l-1,1l-1,-1l-1,0l1,-1l0,-1l1,0l1,0l-1,-1l-1,-1l-1,0l-1,-1l0,-1l0,-1.000004l-2,-2l-1,-1l-3,0l-1,1l1,1l-1,1l-1,-1l-1,1l0,1.000004l0,1l1,1l-1,1l0,1l1,1l1,1l1,0l1,0l1,0l1,1l1,0l-1,1l0,1l-1,1l1,0l1,0l0,1l-1,1l-1,1l-1,0l-1,0l0,1l-1,1l1,1l0,2l-1,-1l-1,0l-1,-1l1,-1l0,-2l-1,0l-1,0l-1,-1l-1,-1l-1,1l-1,0l0,1l1,1l1,0l1,0l0,1l-1,0l-1,0l-1,-1l-1,1l-1,0l-1,-1l-3,0l-1,1l-4,0l-1,-1l-1,-1l-2,0l-1,0l-1,-1l-1,-1l0,-1l-2,0l-2,0l-1,1l-2,0l-1,1l1,1l2,0l1,-1l1,0l1,-1l1,0l0,1l-1,0l-1,1l-1,0l-1,1l-1,1l1,1l0,1l1,1l-2,0l1,1l0,1l-1,-1l-1,-1l1,-1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l-3,0l-1,1l-3,0l-6,0l-1,-1l1,-1l1,-1l2,0l-2,-2l-8,0l-2,-2l-3,0l-1,-1l-2,0l-1,-1l-1,-1l-2,0l-1,1l-1,1l-1,0l-2,0l1,-1l-1,-1l0,-1l-1,0l0,1l-1,1l0,1l-2,0l-1,-1l-1,-1l0,-1l-2,-2l-1,0l0,2l-2,2l-1,0l1,-1l-2,0l-1,1l-1,1l-1,0l-1,1l-2,0l-1,1l-1,1l-1,0l0,-1l2,-2l2,0l1,-1l1,0l1,-1l1,0l1,-1l-3,0l-1,1l-1,0l-1,1l-2,0l-1,1l-1,1l-1,0l0,-1l-1,-1l0,1l-2,0l-1,1l-1,1l1,0l1,1l-1,1l-1,-1l-4,0l-1,-1l-2,-2l-2,0l-1,-1l-3,0l0,41l2,0l1,-1l2,0l0,2l4,4l1,-1l1,0l0,-1l1,-1l3,0l0,1l6,6l0,2l4,4l1,0l2,1.999992l0,3l-1,1l0,2l1,1l-1,1l1,1l1,1l1,-1l1,-1l0,1l-1,0l0,1l1,0l1,1l0,1l1,0l-1,1l1,0l-1,1l0,1l1,0l0,1l1,0l1,0l1,1l-1,0l-1,0l0,1l0,1l1,1l1,-1l1,0l0,1l1,1l1,0l1,0l1,1l1,1l1,0l0,1l1,1l1,-1l0,1l1,1l66,0l4,0l1,-1l0,2l1,0l1,1l3,0l1,1l2,0l1,1l1,-1l1,1l3,0l0,-1l1,-1l2,-2l2,0l1,1l1,0l1,1l0,1l1,1l1,0l1,0l0,1l1,1l0,1l-1,1l1,1l1,0l0,1l1,1l1,0l1,0l2,0l1,1l2,0l1,1l0,1l1,1l1,1l0,1l-1,1l-1,-1l-1,0l0,-1l-1,-1l-1,0l1,1l0,2l-1,1l0,2l0,1l-1,1l-2,2l0,1l1,1l1,-1l1,0l1,-1l2,0l1,-1l2,0l1,-1l0,-1l-1,1l-1,-1l1,-1l1,-1l1,0l4,0l1,-1l0,0l3,-3l1,0l1,-1l1,-1l1,0l2,-2l2,-2l1,0l3,-3l1,-1l1,-1l1,-1l0,-1l1,-1l2,-2l1,0l1,-1l1,0l0,-1l1,-1l1,-1l1,0l1,-1l1,1l5,0l1,-1l1,1l2,0l4,0l1,-1l2,-2l1,-1l1,0l1,-1l2,0l1,0l1,-1l1,-1l0,-1l0,-1l-1,0l1,-1l0,-1l0,-1l-1,-1zm-10,36l1,0l1,-1l-1,0l-1,1z",
    flag: "canada.png",
    facts: { exposure:["$6,705","High"], population:["34.03 Million","37"], lifeexp:["81","12"], landmass:["9,984,670","2"] },
    perils: ['earthquakes','cyclones','fire','winterstorms','scs','terrorism','disease','all']
  };

  // Europe
  countryData['it'] = {
    name: "Italy",
    svg: "m484.174988,177.175003l-1,-1l1,0l0,1zm9,6l0,1l1,0l-1,-1zm-13,0l-1,0l0,2l1,1l0,2l-1,1l0,1l1,1l1,-1l1,-1l1,0l0,-2l-1,-1l1,-1l0,-1l-1,-1l-1,-1l-1,1zm-3,-17l1,-1l1,0l0,-1l1,0l0,1l1,1l0,-2l3,0l-1,-1l2,0l1,-1l2,0l1,0l1,1l2,0l1,0l-1,1l0,1l0,1l-1,1l-1,0l-1,1l1,1l-1,1l0,1l4,4l0,2l3,3l3,0l0,1l-1,1l2,0l1,1l1,0l3,3l0,1l-1,-1l-1,0l-1,-1l-1,0l-1,1l0,2l1,0l1,1l0,1l-1,0l-1,1l0,1l-2,2l0,-2l1,-1l0,-3l-1,-1l-1,0l-1,-1l0,-1l-3,-3l-2,0l-2,-2l-4,-4l0,-1l-1,-1l0,-2l-2,0l-1,-1l-1,0l-2,2l-1,0l0,-1l-1,0l-1,-1l1,-1l-1,-1l0,-1l1,0l0,-1l-1,-1l1,0l1,0zm20,27l1,-1l0,1l-1,1l-1,1l1,1l0,1l-1,1l-1,-1l-1,0l-1,-1l-1,0l-1,-1l-1,0l0,-1l0,-1l1,0l1,0l1,0l1,1l1,-1l1,0l1,0zm-8,4l-1,0l0,1l1,-1z",
    flag: "italy.png",
    facts: { exposure:["$11,062","Low"], population:["61.02 Million","23"], lifeexp:["82","10"], landmass:["301,340","71"] },
    perils: ['earthquakes','scs','terrorism','disease','all']
  };
  countryData['de'] = {
    name: "Germany",
    svg: "m487.174988,134.175003l-1,0l0,-1l1,1zm7,13l2,0l0,-2l-1,-1l0,-1l0,-2l-1,-1l0,-1l1,-1l-1,-1l0,-1l-1,0l0,-1l-1,0l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l0,-2l-1,0l-1,0l-1,-1l0,-1l-3,0l1,1l0,1l-1,0l1,1l0,1l-1,1l-1,0l-1,0l-2,0l0,1l0,3l-1,0l1,1l-2,2l-1,0l1,1l0,1l-1,1l0,1l1,1l0,2l1,1l0,1l1,1l3,0l0,1l-1,1l0,3.000992l2,0l1,1l2,0l1,1l1,-1l3,0l1,-1l1,0l1,1l0,-3l1,0l0,-1l1,-1l-1,-1l-1,0l-1,-1l0,-2l-1,-1l1,-1l2,0l1,-1l1,-1.000992m-2,-14l1,1l-1,0l0,-1z",
    flag: "germany.png",
    facts: { exposure:["$23,351","High"], population:["81.47 Million","16"], lifeexp:["80","27"], landmass:["357,022","62"] },
    perils: ['earthquakes','floods','windstorms','scs','disease','all']
  };
  countryData['no'] = {
    name: "Norway",
    svg: "m486.174988,115.175003l-1,-1l0,-1l-1,1l0,1l-1,0l-1,1l-4,4l-3,0l-3,-3l0,-1l1,0l1,0l-1,-1l1,-1l-1,0l-1,1l-1,0l0,-1l1,-1l-1,0l0,-1l1,0l1,-1l-1,0l-1,-1l1,-1l-1,0l0,-1l3,0l1,-1l1,1l1,-1l0,-1l-1,1l-1,-1l-1,1l-1,0l-1,0l-1,0l0,-1l1,0l-1,-1l-1,0l1,-1l1,0l-1,-1l1,-1l1,0l1,-1l1,0l2,0l1,0l1,-1l-3,0l-1,0l1,-1l2,0l1,0l1,1l0,-1l-1,-1l1,0l0,-1l1,0l0,1l1,-1l1,0l1,1l1,-1l1,0l1,-1l0,-1l0,-1l-1,1l0,1l-1,0l-1,1l-1,-1l0,-1l1,-1l1,-1l1,0l1,-1l1,0l-1,-1l1,0l1,-1l1,1l1,-1l0,-1l-1,1l-1,-1l1,-1l1,-1l0,-1l2,0l1,-1l-1,0l-2,0l1,-1l1,-1l-1,0l1,-1l1,0l1,0l1,0l1,-1l-3,0l1,-1l1,0l1,0l1,0l-1,-1l-1,0l-1,0l1,-1l2,0l-1,-1l1,0l1,1l1,-1l-1,0l1,-1l2,0l1,-1l-2,0l1,-1l1,-1l1,-1l0,-1l1,0l0,1l1,0l0,-1l1,-1l1,-1l0,1l1,-1l1,0l-1,1l0,1l0,1l1,-1l0,-1l1,-1l2,0l1,0l-1,-1l-1,-1l1,0l1,1l1,-1l1,0l0,1l1,1l0,-1l1,-1l1,0l1,-1l0,-1l0,-1l1,0l1,1l1,0l-1,1l0,1l-1,1l1,0l1,-1l1,-1l0,-1l1,-1l1,0l0,1l-1,1l0,1l1,0l1,-1l1,-1l0,-1l1,0l1,0l-1,1l0,1l0,1l1,0l0,-1l1,-1l1,0l1,0l1,0l1,1l1,0l1,1l-1,1l-1,0l-4,0l1,1l1,0l1,1l1,-1l1,1l1,0l0,1l-2,0l-2,2l-2,0l0,-1l1,-1l0,-1l-1,0l-2,-2l-1,0l-1,1l-2,0l-1,1l0,3l-2,2l-2,0l-1,-1l-1,1l-1,-1l-2,0l-2,-2l-1,0l-1,1l-1,0l-1,1l0,2l-2,0l-1,-1l-1,0l-1,1l0,1l-1,1l-1,-1l-3,3l1,1l0,1l-4,4l-1,0l0,4l-2,2l1,1l0,2l-3,0l-2,2l0,7l2,2l-1,1l-1,0l0,1l1,1l0,2l-2,2l0,3l-1,0l0,-1l-1,0zm2,-28l0,1l1,0l-1,-1zm2,-2l-1,1l1,0l0,-1zm1,-8l-1,1l1,0l0,-1zm1,2l2,-2l-1,-1l-1,1l0,2zm3,-3l0,1l1,-1l1,0l1,0l1,-1l1,-1l-1,0l-1,1l0,-2l1,-1l-1,0l-1,1l-1,0l-1,1l0,1l1,0l-1,1zm9,-5l-2,0l-1,1l0,1l1,0l0,-1l1,0l1,-1zm10,-6l0,1l1,0l1,0l1,-1l-1,0l-2,0zm-4,2l0,1l1,0l0,-1l-1,0zm-2,0l0,1l1,0l-1,-1zm-2,1l-1,1l-1,0l0,1l1,0l1,0l1,-1l1,0l-1,-1l0,-1l-1,1zm17,-5.000004l0,1.000004l1,0l-1,-1.000004zm-4,3.000004l0,-1l-1,0l1,1zm-2,1l1,-1l-1,0l0,1zm-32,25l1,0l1,-1l-2,0l0,1zm-6,5l1,-1l-1,0l0,1zm-1,0l0,1l1,0l-1,-1zm-8,11l1,-1l-1,0l0,1zm1,2l-1,0l1,1l0,-1zm67,-91.000004l1,1l1,0l2,0l1,-1l0,-1l-1,1l-4,0zm-26.996002,2.003l-1.003998,1.003l-2,0l1,1.007l7.013977,0l-1.013977,1.014l5,0l1.026978,-1.027l1.973022,0l2,-2l1,0l1,-1l0,-1l-2,0l-1,0l-1,0l-1,-1l-1,0l-1,1l0,-1l-1,0l-1,1l-1,0l0,-2l-1,0l-1,1l0,1l0,1l-1,-1l-1,0l-1,-1l0,0l-1,0l-1,-1l-2,0l0,1l1,0l-1,1l-1,-1l0,1l-1,0l-3,0l1,1l1,0l-1,1l7.003998,0.003zm-6.003998,-2.003l1,-1l-1,0l-1,0l1,1zm20,7l1,1l1,0l-1,-1l-1,0zm3,-1l1,1l5,0l-1,-1l-5,0zm-17,4l1,1l1,0l0,1l-1,1l-1,1l3,0l1,-1l1,0l0,1l-1,1l1,0l1,-1l1,0l1,-1l1,0l1,-1l-3,0l-1,-1l0,-1l-2,0l-1,-1l0,-1l-3,0l-1,1l1,1zm1,-3l-1,-1l-1,-1l-1,0l-1,1l0,-1l-1,0l-1,0l0,-1l-1,-1l-1,0l-1,1l0,-1l0,-1l-1,-1l-1,0l-1,0l-1,0l-1,1l1,1l0,2l1,1l-1,0l-1,-1l-1,-1l-1,-1l0,-1l-1,0l-1,1l0,1l-1,0l-1,-1l-2,0l1,-1l2,0l-1,-1l-2,0l-1,1l-1,0l-1,0l-1,1l0,-1l-1,0l0,1l1,1l0,1l1,0l1,-1l1,0l-1,1l1,1l1,0l-1,1l-1,-1l-1,0l1,1l3,3l3,0l1,-1l0,-1l1,-1l0,1l1,0l0,1l1,0l1,-1l1,0l1,0l-1,1l-1,0l-1,1l-1,0l0,0l-1,0l-1,1l-1,0l-1,0l0,1l1,0l2,0l1,0l1,0l1,0l0,0l-1,1l-2,0l-2,0l0,1l1,1l1,1l1,0l1,1l1,1l2,0l0,-1l1,-1l0,0l0,-1l1,-1l1,0l1,-1l0,-2l1,0l0,-1l2,-2l2,0l1,0l1,-1zm-6,22l1,0l0,-1l-1,0l0,1zm-21,-21.000999l1,0l2,2l1,0l-1,-1l-1,-1l-1,-1l-1,0l0,1zm-49,36.000999l-1,1.000004l0,1l1,0l1,-1l1,0l0,-1.000004l-2,0z",
    flag: "norway.png",
    facts: { exposure:["$1,617","Medium"], population:["4.69 Million","118"], lifeexp:["80","25"], landmass:["323,802","67"] },
    perils: ['windstorms','all']
  };
  countryData['fi'] = {
    name: "Finland",
    svg: "m534.174988,80.175003l-2,2l0,2l3,3l0,1l-1,0l0,4l2,2l0,1l-1,1l0,1l3,3l-9,9l-1,1l-2,0l-2,0l-1,1l-2,0l-1,1l-2,0l-1,0l-1,-1l0,0l-1,1l0,-1l0,-1l-1,0l-1,-1l-1,0l0,-2l1,-1l0,-1l-1,-1l0,-1l0,-2l0,-1l1,-1l0,-1l1,0l3,-3l1,0l1,-1l1,-1l1,-1l1,-1l0,-2l-1,-1l-1,-1l-1,0l0,-1l-1,-1l0,-1l1,-1l0,-1l-1,-1l0,-3l-2,-2l-2,0l-3,-3l1,-1l1,0l2,2l2,0l1,1l1,-1l1,1l2,0l2,-2l0,-3l1,-1l2,0l1,-1l1,0l2,2l1,0l0,1l-1,1l0,5l2,0l1,1l0,2zm-26,30l0,1l1,0l0,-1l-1,0zm3,1l-1,0l0,1l1,-1zm-4,-1l0,1l1,0l-1,-1zm6,2l0,-1l-1,0l1,1zm-1,-3l0,1l1,0l-1,-1zm1,0l-1,0l1,1l0,-1zm0,1l1,1l0,-1l-1,0zm0,2l1,-1l-1,0l0,1zm0,0l0,-1l-1,0l1,1zm-3,-1l0,1l1,-1l-1,0zm-1,-1l0,1l1,0l-1,-1zm-1,1l1,0l0,-1l-1,0l0,1zm1,1l0,-1l-1,0l1,1zm8,1l0,-1l-1,0l1,1zm-3,-2l1,0l0,-1l-1,0l0,1zm7,-21l-1,1l1,0l0,-1zm-9,9l0,-1l-1,0l1,1z",
    flag: "finland.png",
    facts: null,
    perils: []
  };
  countryData['es'] = {
    name: "Spain",
    svg: "m462.174988,190.175003l-1,1l0,-1l1,0zm2,-2l1,1l1,0l1,-1l-1,-1l-1,0l-1,1zm4,-1l1,0l-1,-1l0,1zm-28,-13l-1,-1l-1,0l-1,1l0,1l-1,0l-1,0l-1,1l1,0l0,1l1,1l0,1l1,0l1,1l3,0l1,1l0,1l-1,1l0,2l-1,1l0,2l-1,0l1,1l0,4l-1,1l0,2l2,0l1,1l0,2l1,1l1,0l1,-1l1,-1l1,0l4,0l2,0l1,-1l0,-2l1,-1l1,-1l0,0l1,-1l1,-1l0,-1l-1,-1l0,-1l1,-1l1,-1l1,-1l0,-2l1,-1l1,0l2,0l1,-1l1,-1l0,-2l-3,0l-1,-1l-4,0l-1,-1l-2,0l-1,-1l-2,0l-1,-1l-2,0l-1,1l-1,0l-1,-1l-6,0zm-28,49.998993l0,1l1,-1l-1,0zm0,4l0,-1l1,0l-1,1zm2,-2l1,0l-1,1l0,-1zm2,-1l1,1l0,1l-1,-1l0,-1zm2,2l1,-1l0,2l-1,-1zm4,-1l0,-1l1,0l0,1l-1,0zm-1,0l1,1l-1,0l0,-1zm2,-2l0,-1l1,0l-1,1z",
    flag: "spain.png",
    facts: { exposure:["-","-"], population:["46.75 Million","27"], lifeexp:["81","14"], landmass:["505,370","51"] },
    perils: ['earthquakes','disease','all']
  };
  countryData['lv'] = {
    name: "Latvia",
    svg: "m512.174988,124.175003l1,-1l0,-1l1,-1l2,0l1,1l0,1l1,1l1,0l1,-1l0,-1l0,-2l3,0l1,1l1,0l1,1l2,0l1,1l0,3l1,1l-1,0l-1,1l-1,1l-2,0l-2,-2l-1,0l-1,-1l-8,0l-1,1l0,-3z",
    flag: "latvia.png",
    facts: null,
    perils: []
  };
  countryData['ie'] = {
    name: "Ireland",
    svg: "m433.174988,141.175003l1,-1l0,-1l0,-1l-1,0l-1,-1l1,0l1,-1l-2,0l0,-1l1,-1l2,0l1,1l0,-1l1,-1l-1,0l1,-1l0,-1l1,0l1,1l-1,1l0,2l1,0l1,-1l1,1l2,0l-1,1l0,1l1,1l0,2l-1,1l0,1l-1,1l-2,0l-1,1l-1,0l-1,1l-3,0l-1,-1l0,-1l-1,-1l2,0l1,-1l-1,0zm7,-10l-1,-1l0,1l0,1l1,-1z",
    flag: "ireland.png",
    facts: { exposure:["$808","Medium"], population:["4.67 Million","119"], lifeexp:["80","26"], landmass:["70,273","119"] },
    perils: ['earthquakes','windstorms','terrorism','disease','all']
  };
  countryData['se'] = {
    name: "Sweden",
    svg: "m512.174988,74.175003l1,1l1,1l1,0l1,0l1,1l1,1l0,1l0,1l0,1l1,1l0,1l-1,1l0,1l1,1l0,1l-4,0l-1,1l0,1l-1,1l-1,1l0,1l1,1l-3,3l-1,1l-1,0l-1,1l-1,1l-1,1l-2,0l1,1l-1,0l-1,1l0,1l0,2l0,3l0,1l1,0l1,1l1,0l0,1l1,1l-1,1l-1,1l-1,0l-1,0l-1,-1l-1,0l-1,1l2,0l1,1l1,0l1,0l1,-1l0,1l-1,1l-1,0l-1,1l-1,0l-1,0l1,1l0,1l-1,1l0,1l0,1l0,1l0,1l-1,1l0,1l-1,1l-3,0l-1,1l0,2l-3,0l0,-2l-1,-1l1,-1l0,-1l-1,-1l-1,-1l-1,-1l0,-2l-1,-1l-1,-1l0,-2l1,0l1,0l0,-2l0,-1l1,-1l1,-1l0,-2l-1,-1l0,-1l1,0l1,-1l-1,-1l-1,-1l0,-2l0,-2l0,-3l1,-1l1,-1l1,0l2,0l0,-2l-1,-1l1,-1l1,-1l0,-4l1,0l1,-1l1,-1l1,-1l1,-1l0,-1l-1,-1l2,-2l1,-1l1,1l1,-1l0,-1l1,-1l1,0l1,1l1,0l1,0l0,-1l0,-1l1,-1l1,0m-7,51l1,-1l-1,0l0,1zm0,-3l0,2l2,0l0,-1l0,-1l1,-1l-1,0l-1,0l-1,1zm-4,6l1,-1l0,-1l0,-1l-1,0l0,3zm1,-5l0,1l1,-1l-1,0z",
    flag: "sweden.png",
    facts: { exposure:["$2,257","Medium"], population:["9.09 Million","90"], lifeexp:["81","16"], landmass:["450,295","55"] },
    perils: ['windstorms','disease','all']
  };
  countryData['pl'] = {
    name: "Poland",
    svg: "m496.174988,145.175003l-1,-1l0,-3l-1,-1l0,-1l1,-1l-1,-1l0,-1l1,0l1,-1l3,0l3,-3l3,0l0,1l1,1l10,0l2,2l0,2l1,1l0,2l-1,0l-1,1l1,0l0,4l1,1l0,2l-1,1l-2,2l0,2l-1,0l-1,-1l-1,0l-2,0l-2,0l0,1l-2,-2l0,1l-1,-1l-1,-1l-1,0l-1,-1l0,-1l-1,0l-1,1l-1,0l-1,-1l0,-1l-2,0l-1,-1l0,-2z",
    flag: "poland.png",
    facts: { exposure:["$2,890","Medium"], population:["38.44 Million","34"], lifeexp:["76","76"], landmass:["312,685","69"] },
    perils: ['windstorms','disease','all']
  };
  countryData['ua'] = {
    name: "Ukraine",
    svg: "m515.174988,157.175003l0,-3l1,0l0,-2l3,-3l0,-2l-1,-1l0,-1l1,0l1,-1l7,0l1,1l3,0l1,-1l1,1l2,0l1,1l0,-3l4,0l1,-1l3,0l2,2l-1,0l0,2l2,0l1,1l0,2l2,0l1,1l1,-1l1,0l2,2l1,-1l2,2l2,0l0,2l-1,0l0,5l-2,0l-2,2l-1,1l-2,0l-1,1l-2,0l-1,1l-1,1l0,2l3,0l1,1l-1,1l-2,0l-1,0l-1,1l-1,1l-2,0l0,-1l0,-1l0,-1l-2,0l0,-1l1,-1l2,0l-1,-1l-3,0l-1,0l-1,-1l1,0l1,-1l-1,0l-1,0l-1,0l-1,1l-2,2l-1,1l-1,1l-1,0l-1,0l0,-1l1,-1l0,-1l1,-1l1,0l1,0l0,-1l-1,-1l0,-1l-1,-1l0,-1l-1,-1l-1,-1l-1,0l-3,0l-1,1l-2,0l-1,1l-1,0l-1,-1l-1,0l-3,0l-1,-1z",
    flag: "ukraine.png",
    facts: null,
    perils: []
  };
  countryData['lt'] = {
    name: "Lithuania",
    svg: "m512.174988,127.175003l1,-1l8,0l1,1l1,0l2,2l0,1l1,1l-1,0l-1,1l-1,1l0,1l1,1l-1,0l-1,0l-1,1l-3,0l-1,-1l-1,-1l0,-2l-1,-1l-3,0l0,-2l0,-2z",
    flag: "lithuania.png",
    facts: null,
    perils: []
  };
  countryData['by'] = {
    name: "Belarus",
    svg: "m521.174988,136.175003l1,-1l2,0l-1,-1l0,-1l1,-1l1,-1l1,0l-1,-1l0,-1l2,0l2,-2l1,0l1,1l2,0l0,1l1,-1l1,0l2,2l0,4l4,4l-1,1l-1,0l-1,-1l-1,1l1,1l0,3l-2,0l0,3l-1,-1l-2,0l-1,-1l-1,1l-3,0l-1,-1l-7,0l-1,1l-1,0l0,-1l0,-2l-1,0l1,-1l1,0l0,-2l-1,-1l0,-2l3,0z",
    flag: "belarus.png",
    facts: null,
    perils: []
  };
  countryData['at'] = {
    name: "Austria",
    svg: "m494.174988,156.175003l1,0l2,-2l1,1l2,0l1,1l0,3l-1,1l0,1l-1,1l-1,1l-1,0l-1,1l-2,0l-1,-1l-3,0l-1,-1l-6,0l-1,-1l0,-1l1,0l1,1l1,-1l1,0l1,0l1,0l1,-1l1,0l1,1l0,-1l0,-1l0,-1l1,0l0,-1l1,-1l1,1z",
    flag: "austria.png",
    facts: { exposure:["$2,593","High"], population:["8.22 Million","92"], lifeexp:["80","32"], landmass:["83,871","113"] },
    perils: ['earthquakes','windstorms','scs','disease','all']
  };
  countryData['cz'] = {
    name: "Czech Republic",
    svg: "m497.174988,148.175003l2,0l0,1l1,1l1,0l1,-1l1,0l0,1l1,1l1,0l1,1l-1,1l-1,1l-1,1l-1,0l-1,1l-1,-1l-2,0l-1,-1l-1,1l-1,1l-1,0l-1,-1l-1,-1l-1,0l-1,-1l0,-1l0,-1l-1,-1l1,-1l1,0l1,0l1,-1l1,-1l1,0l1,0l1,1z",
    flag: "czech.png",
    facts: { exposure:["$1,268","Medium"], population:["10.19 Million","82"], lifeexp:["77","63"], landmass:["78,867","115"] },
    perils: ['windstorms','all']
  };
  countryData['hr'] = {
    name: "Croatia",
    svg: "m506.174988,165.175003l0,1l0,1l1,1l-1,1l-1,0l-1,0l-1,-1l-2,0l-1,0l-1,1l-1,-1l0,1l0,1l1,1l1,1l0,1l2,2l2,2l-1,0l-1,-1l0,0l-1,-1l-1,0l0,-1l-2,0l-1,-1l0,-1l-1,-1l0,-2l-1,-1l0,0l-1,0l0,2l-1,-1l0,-2l1,0l1,-1l1,1l1,0l1,-1l0,-1l2,-2l3,3l2,0l1,-1zm-12,5l1,0l0,-1l-1,1z",
    flag: "croatia.png",
    facts: null,
    perils: []
  };
  countryData['fr'] = {
    name: "France",
    svg: "m454.174988,174.175003l1,-1l0,-2l0,-2l0,-2l1,1l0,-1l-2,-2l1,0l0,-1l-1,0l-1,-1l0,-2l0,0l-1,0l-1,-1l-1,-1l-2,0l-1,0l0,-1l0,-1l-1,-1l1,-1l1,1l1,-1l1,0l1,1l1,0l2,0l0,-2l0,-1l-1,-1l1,0l1,0l0,1l2,0l1,0l0,-1l1,-1l2,0l1,-1l0,-1l0,-1l1,-1l1,0l1,0l0,1l1,0l1,1l2,0l0,2l1,0l0,-1l2,2l1,1l2,0l1,1l3,0l0,1l-1,1l0,3.000992l-1,1l-1,0l-0.998993,0.999008l0,1l-2,2l0,1l1,-1l0.998993,0l0,1l1,1l-1,0l1,1l0,1l-1,0l0,1l1,1l-1,1l1,1l1,0l0,1l-1,1l-2,2l-1,0l-1,-1l-2,0l-1,-1l-1,0l-1,1l-1,1l0,2l-3,0l-1,-1l-2,0l-1,0l-1,0l-1,-1l-2,0l-1,-1l0,-1zm27,7l1,1l0,-1l0,-1l0,-1l1,-1l-1,-1l0,-1l-1,1l-1,1l0,1l0,1l0,1l1,0z",
    flag: "france.png",
    facts: { exposure:["$15,982","High"], population:["65.31 Million","21"], lifeexp:["81","13"], landmass:["643,801","42"] },
    perils: ['earthquakes','windstorms','scs','disease','all']
  };
  countryData['be'] = {
    name: "Belgium",
    svg: "m465.174988,147.175003l0,-1l1,0l1,-1l1,-1l1,1l2,0l1,1l0,1l1,1l1,1l0,1l-1,0l0,3l-3,-3l0,1l-1,0l0,-2l-2,0l-1,-1l-1,0l0,-1z",
    flag: "belgium.png",
    facts: { exposure:["$2,288","High"], population:["10.43 Million","80"], lifeexp:["80","37"], landmass:["30,528","140"] },
    perils: ['earthquakes','floods','windstorms','scs','disease','all']
  };
  countryData['nl'] = {
    name: "Netherlands",
    svg: "m469.174988,145.175003l-1,-1l1,-1l0,-2l1,-1l1,0l1,-1l1,-1l2,0l1,0l0,1l0,2l-1,0l1,1l-1,1l-1,1l-1,0l1,1l0,1l-1,1l0,1l-1,-1l0,-1l-1,-1l-2,0z",
    flag: "netherlands.png",
    facts: { exposure:["$3,984","Medium"], population:["16.85 Million","60"], lifeexp:["80","35"], landmass:["41,543","134"] },
    perils: ['earthquakes','windstorms','scs','disease','all']
  };
  countryData['ch'] = {
    name: "Switzerland",
    svg: "m476.174988,166.175003l-1,-1l0,-1l-1,0l-1,1l0,-1l1,-1l1,-1l0,-1l1,-0.999008l1,0l1,-1l2,0l1,1l1,0l0,1l1,1l2,0l1,0l-1,1l-2,0l1,1l-3,0l0,2l-1,-1l0,-1l-1,0l0,1l-1,0l-1,1l-1,0l0,-0.000992z",
    flag: "switzerland.png",
    facts: { exposure:["$4,216","Medium"], population:["7.64 Million","94"], lifeexp:["81","15"], landmass:["41,277","135"] },
    perils: ['earthquakes','windstorms','scs','disease','all']
  };
  countryData['lu'] = {
    name: "Luxembourg",
    svg: "m473.174988,153.175003l0,-3l1,0l0,1l1,1l0,1l-2,0z",
    flag: "luxembourg.png",
    facts: { exposure:["$174","Medium"], population:["503,302","171"], lifeexp:["80","36"], landmass:["2,586","178"] },
    perils: ['earthquakes','windstorms','scs','all']
  };
  countryData['sk'] = {
    name: "Slovakia",
    svg: "m501.174988,156.175003l1,-1l1,0l3,-3l1,1l0,-1l2,2l0,-1l5,0l1,1l0,3l-1,0l-1,-1l-2,0l-1,1l-1,0l-1,1l-1,0l-1,1l-3,0l-1,-1l-1,0l0,-2z",
    flag: "slovakia.png",
    facts: { exposure:["$433","Medium"], population:["5.48 Million","111"], lifeexp:["76","79"], landmass:["49,035","130"] },
    perils: ['windstorms','all']
  };
  countryData['hu'] = {
    name: "Hungary",
    svg: "m500.174988,161.175003l0,-1l1,-1l0,-1l1,0l1,1l3,0l1,-1l1,0l1,-1l1,0l1,-1l2,0l1,1l1,0l1,1l-1,1l-1,1l-1,1l0,2l-1,1l-1,1l-2,0l-2,0l-1,0l-1,1l-2,0l-1,-1l-1,-1l-1,-1l-1,-1l1,-1z",
    flag: "hungary.png",
    facts: { exposure:["-","-"], population:["9.98 Million","84"], lifeexp:["75","92"], landmass:["93,028","109"] },
    perils: ['earthquakes','all']
  };
  countryData['si'] = {
    name: "Slovenia",
    svg: "m492.174988,166.175003l0,-2l1,-1l1,1l2,0l1,-1l1,0l1,-1l1,1l-1,1l-1,1l0,1l-1,1l-1,0l-1,-1l-1,1l-1,0l-1,-1z",
    flag: "slovenia.png",
    facts: { exposure:["-","-"], population:["2 Million","145"], lifeexp:["77","62"], landmass:["20,273","154"] },
    perils: ['earthquakes','all']
  };
  countryData['ba'] = {
    name: "Bosnia and Herzegovina",
    svg: "m503.174988,176.175003l-3,-3l0,-1l-2,-2l0,-2l1,1l1,-1l3,0l1,1l2,0l1,0l0,1l-1,1l1,1l1,0l-1,1l1,1l-1,0l-1,1l-1,1l0,1l-1,0l-1,-1z",
    flag: "bos_herz.png",
    facts: null,
    perils: []
  };
  countryData['gb'] = {
    name: "United Kingdom",
    svg: "M444.175,133.175l-1-1v-1h-3l-1,1l-1,1v1v1h1l1-1l1,1h2l1-1V133.175z M447.175,134.175h1l-1,1h-1L447.175,134.175zM452.175,152.175l-1,1v-1H452.175z M452.175,153.175v1h1L452.175,153.175z M444.175,150.175h1l1-1h1l1,1h1l1-1v-1h1l1,1h1l1-1h3h2l1-1h1l1-1v-1h-1h-1l1-1v-1l1-1v-2l-1-1l-1,1h-1h-1l1-1v-1l-1-1v-1l-1-1v-1l-1-1h-1l-1-1v-1v-2l-1-1h-1h-1h-1l-1-1h1l1-1l1-1l1-1v-1l1-1v-1h-1h-3h-1l-1,1l-1-1h1v-1l1-1l1-1v-1h-3l-1,1h-1l-1,1v1l-1,1l1,1v1l-2,2h2v1v1v2l-1,1h1l1-1v-1v-1l1,1v1v1l-1,1v1l1,1l1-1h1h1h1l-1,1v1l1,1h1l-1,1v2h-2l-1,1l-1,1h1h1v1l-1,1l-1,1h-1l-1,1h1h2l1,1h1h1l1-1h1l-1,1l-1,1h-2l-1,1l-1,1l-1,1L444.175,150.175z M442.175,119.175l-1,1v1l-1-1v-1l1-1h1V119.175z M439.175,121.175h1l-1,1h-1L439.175,121.175z M451.175,115.175h-1l1-1h1L451.175,115.175z M450.175,116.175h-1l1-1V116.175z M451.175,116.175v1h-1L451.175,116.175z M443.175,123.175l-1-1h-1v-1h1l1,1V123.175z M440.175,123.175h-1v-1L440.175,123.175z M455.175,108.175h1v1L455.175,108.175z M455.175,109.175v3l-1-1v-2H455.175z M442.175,123.175v1h-1L442.175,123.175z M442.175,125.175h1v1v1h-1v-1V125.175z M442.175,128.175l1,1h-1V128.175zM446.175,138.175h1v1L446.175,138.175z",
    flag: "uk.png",
    facts: { exposure:["$9,897","High"], population:["62.7 Million","22"], lifeexp:["80","28"], landmass:["243,610","79"] },
    perils: ['earthquakes','stormsurge','floods','windstorms','terrorism','disease','all']
  };
  countryData['ee'] = {
    name: "Estonia",
    svg: "m520.174988,120.175003l0,-1l-1,0l-1,-1l0,-2l1,-1l1,-1l2,0l1,-1l1,0l1,1l4,0l0,1l-1,1l0,6l-1,0l-1,0l-1,-1l-1,0l-1,-1l-2,0l-1,0zm-4,-4l-1,0l0,1l1,0l0,-1zm-1,3l1,0l1,-1l-1,-1l-1,1l-2,0l1,1l0,1l1,-1zm2,-1l1,-1l-1,0l0,1z",
    flag: "estonia.png",
    facts: null,
    perils: []
  };
  countryData['dk'] = {
    name: "Denmark",
    svg: "m484.174988,128.175003l1,0l0,1l-1,-1zm-44,-25l1,1l0,-1l0,-1l-1,0l0,1zm0,0l0,1l-1,-1l1,0zm1,-1l1,0l0,1l-1,-1zm-1,3l1,0l0,1l-1,-1zm56,26l0,1l-1,-1l0,-1l1,1zm-14,0l0,-1l1,-1l1,-1l0,-1l1,0l1,-1l-1,0l-1,-1l0,-1l1,-1l0,-1l-1,0l1,-1l-1,0l-1,1l-1,1l-1,0l-1,0l-1,1l0,1l1,0l1,-1l0,1l-1,1l-1,0l0,1l0,2l1,1l0,1l0,1l3,0l-1,-1zm3,-1l0,1l-1,0l-1,-1l1,-1l1,0l0,1zm1,-1l1,-1l1,1l0,-1l1,-1l1,1l0,1l-1,1l0,3l-1,-1l0,-1l-1,0l-1,-1l0,-1zm2,4l-1,0l-1,-1l1,0l1,1zm1,-2l1,0l0,1l-1,-1zm-3,-9l0,1l1,-1l-1,0z",
    flag: "denmark.png",
    facts: { exposure:["$1,493","Medium"], population:["5.53 Million","110"], lifeexp:["79","48"], landmass:["43,094","133"] },
    perils: ['windstorms','terrorism','all']
  };
  countryData['me'] = {
    name: "Montenegro",
    svg: "m507.174988,174.175003l0,1l1,0l1,1l1,1l-1,0l0,1l-1,0l0,-1l-1,1l0,1l0,1l-3,-3l3,-3z",
    flag: "montenegro.png",
    facts: null,
    perils: []
  };
  countryData['rs'] = {
    name: "Serbia",
    svg: "m510.174988,166.175003l1,1l1,1l0,1l1,1l1,1l1,-1l0,1l1,1l-1,1l0,1l1,1l0,1l-1,1l0,1l-1,0l-1,1l0,-2l-1,-1l-1,-1l-1,1l0,1l-2,-2l-1,0l0,-1l1,0l-1,-1l1,-1l-1,0l-1,-1l1,-1l0,-1l-1,0l1,-1l-1,-1l0,-2l4,0l0,1z",
    flag: "serbia.png",
    facts: null,
    perils: []
  };
  countryData['ro'] = {
    name: "Romania",
    svg: "m515.174988,171.175003l0,-1l-1,1l-2,-2l0,-1l-2,-2l0,-1l1,0l2,-2l0,-2l3,-3l4,0l1,1l1,0l1,-1l2,0l1,-1l1,1l0,1l1,1l0,1l1,1l0,2l0,1c0,0 0,1 0,1l1,1l0,1l2,0l1,-1l0,1l0,1l-1,1l0,-1l-1,1l0,3l-1,0l-2,0l-1,-1l-1,0l-1,0l-1,1l-1,1l-1,0l-1,-1l-3,0l-2,0l0,-1l-1,-1z",
    flag: "romania.png",
    facts: { exposure:["-","-"], population:["21.9 Million","54"], lifeexp:["74","109"], landmass:["238,391","82"] },
    perils: ['earthquakes','all']
  };
  countryData['md'] = {
    name: "Republic of Moldova",
    svg: "m526.174988,157.175003l4,0l2,2l0,1l1,1l0,1l1,1l0,1l-2,0l-1,1l0,1l-1,1l-1,-1l0,-4l-1,-1l0,-1l-1,-1l0,-1l-1,-1z",
    flag: "moldova.png",
    facts: null,
    perils: []
  };
  countryData['bg'] = {
    name: "Bulgaria",
    svg: "m531.174988,173.175003l0,1l-1,1l-1,0l0,1l0,1l-1,1l1,1l0,1l-1,0l-1,-1l-1,1l-1,0l-1,1l0,1l-1,0l-2,0l-1,-1l-1,0l-1,1l-2,0l0,-1l0,-1l-1,-1l0,-2l1,-1l0,-1l-1,-1l0,-1l1,-1l0,1l5,0l1,1l1,0l2,-2l2,0l1,1l3,0z",
    flag: "bulgaria.png",
    facts: { exposure:["-","-"], population:["7.09 Million","99"], lifeexp:["74","114"], landmass:["110,879","104"] },
    perils: ['earthquakes','all']
  };
  countryData['xk'] = {
    name: "Kosovo",
    svg: "m509.174988,178.175003l0,-1l1,0l0,-1l1,-1l2,2l0,2l-1,0l-1,0l0,1l-1,0l0,-1l-1,-1z",
    flag: "kosovo.png",
    facts: null,
    perils: []
  };
  countryData['mk'] = {
    name: "Macedonia",
    svg: "m511.174988,183.175003l-1,-1l0,-2l1,0l0,-1l2,0l1,-1l1,0l0,1l1,1l0,2l-1,0l-1,1l-1,0l-1,1l-1,0l0,-1z",
    flag: "macedonia.png",
    facts: null,
    perils: []
  };
  countryData['al'] = {
    name: "Albania",
    svg: "m507.174988,178.175003l1,-1l0,1l1,0l1,1l0,2l0,1l1,1l0,2l-1,1l0,1l-1,1l0,-1l-1,-1l-1,-1l0,-3l1,-1l-1,-1l0,-2z",
    flag: "albania.png",
    facts: null,
    perils: []
  };
  countryData['gr'] = {
    name: "Greece",
    svg: "m530.174988,199.175003l0,1l-1,0l0,-1l1,0zm-12,3l0,1l2,0l1,1l1,0l2,0l1,-1l-1,0l-1,-1l-1,0l-3,0l-1,0zm9,1l1,-1l-1,-1l0,2zm-11,-12l1,0l1,1l1,0l1,1l0,-1l-1,-1l-1,0l-1,-1l-1,0l0,-1l1,0l0,-1l-1,-1l-1,-1l0,-1l1,0l1,1l1,1l1,0l-1,-1l0,0l1,0l1,0l-1,-1l-1,-1l1,0l1,-1l1,1l1,-1l1,1l1,0l1,-1l0,-1l1,-1l-1,0l0,-1l-1,1l0,1l-3,0l-1,-1l-1,0l-1,1l-3,0l-1,1l-1,0l-1,1l-1,0l0,1l-1,1l0,1l-1,1l1,1l1,1l1,0l-1,1l1,1l3,0l1,1l1,0l-1,1l-1,-1l-1,0l-1,0l-1,0l0,1l0,1l1,1l0,1l1,1l0,-1l1,1l0,1l1,-1l1,1l0,-1l-1,-1l0,-1l-1,-1l1,0l1,1l1,0l0,-1l-1,0l0,-1l1,0l1,1l0,-1l-1,-1l-2,-2zm0,8l0,1l1,-1l-1,0zm-5,-4l0,-1l-1,0l1,1zm7,-6l0,1l1,0l-1,-1zm2,1l0,1l1,-1l-1,0zm-10,2l0,1l1,0l-1,-1zm10,3l0,-1l-1,1l1,0zm0,1l0,1l1,-1l-1,0zm2,1l1,0l0,-1l-1,1zm1,1l1,0l1,-1l-1,0l-1,1zm-1,-1l0,1l1,0l-1,-1zm0,2l1,0l0,-1l-1,1zm3,-1l0,1l1,-1l-1,0zm-1,-3l1,0l0,-1l-1,1zm-2,0l0,1l1,-1l-1,0zm-1,-9l1,1l1,0l-1,-1l-1,0zm3,1l0,-1l-1,0l1,1zm-2,-2l1,0l0,-1l-1,1zm2,8l1,-1l-1,-1l0,2zm1,-3l0,-1l-1,1l1,0zm-5,8.998993l1,-1l-1,0l0,1zm-12,-12l0,1l1,0l-1,-1zm13,11l0,-1l-1,0l1,1zm0,-2.998993l0,1l1,-1l-1,0zm5,1l0,1l1,0l-1,-1zm-16,-4l1,-1l-1,0l0,1zm11,-7l0,-1l-1,0l1,1zm0,8l0,1l1,1l0,-1l-1,-1zm5,5l1,0l0,-1l-1,1z",
    flag: "greece.png",
    facts: { exposure:["$1,606","Medium"], population:["10.76 Million","76"], lifeexp:["80","30"], landmass:["131,957","96"] },
    perils: ['earthquakes','all']
  };
  countryData['is'] = {
    name: "Iceland",
    svg: "m407.174988,97.175003l-1,-1l-1,0l-1,-1l-1,1l-2,0l-1,-1l0,-1l1,1l1,0l0,-1l0,-1l-1,-1l-2,0l-1,0l-1,-1l2,0l1,0l2,0l1,-1l-1,0l-1,0l1,-1l1,0l-1,-1l-1,1l-1,-1l-1,0l-1,1l-1,0l-1,-1l1,0l0,-1l1,0l0,-1l1,0l1,1l1,0l0,-1l-1,0l0,-1l-1,0l1,-1l1,0l1,1l1,0l1,1l0,1l-1,1l1,1l1,-1l1,0l1,-1l-1,-1l1,0l1,1l1,-1l1,0l1,0l1,1l0,-1l1,0l1,0l1,0l1,0l0,-1l0,-1l1,0l1,1l1,0l2,0l-1,1l0,1l1,0l1,1l1,1l0,1l0,1l-1,1l-2,2l-2,0l-1,1l-1,0l-1,1l-1,0l-2,2l-2,0l-1,-1l-2,0z",
    flag: "iceland.png",
    facts: null,
    perils: []
  };
  countryData['pt'] = {
    name: "Portugal",
    svg: "m436.174988,179.175003l1,0l1,1l2,0l1,0l1,1l0,1l-1,1l0,1l0,1l0,0l-1,1l0,2l-1,0l1,1l0,2l0,1l0,1l-1,1l0,2l-1,1l-3,0l0,-1l1,-1l0,-2l-1,0l0,-1l-1,-1l0,-2l1,-1l0,-2l1,-1l0,-4l-1,-1l1,-1zm-22,32l1,1l1,0l-1,-1l-1,0zm-20,-14l1,0l0,-1l-1,1zm0,-3l-1,1l-1,-1l2,0zm-5,-3l1,0l-1,1l0,-1zm-2,0l1,0l-1,1l0,-1zm-1,1l-1,0l0,-1l1,1zm-8,-3l0,-1l1,0l-1,1z",
    flag: "portugal.png",
    facts: { exposure:["$1,461","Medium"], population:["10.76 Million","75"], lifeexp:["79","49"], landmass:["92,090","110"] },
    perils: ['earthquakes','fire','all']
  };

  // Africa
  countryData['ma'] = {
    name: "Morocco",
    svg: "m443.174988,201.175003l2,0l2,2l6,0l0,6l2,2l0,2l-4,0l-8,8l-3,0l-4,4l0,5l-5,0l-4,4l0,2l-5,5l0,5l-2,2l-5,0l0,-3l2,-2l0,-3l3,-3l0,-3l4,-4l0,-2l1,-1l2,0l6,-6l0,-7l10,-10l0,-3z",
    flag: "morocco.png",
    facts: null,
    perils: []
  };
  countryData['eh'] = {
    name: "Western Sahara",
    svg: "m436.174988,230.175003l0,3.002991l-7,0l-0.997986,0.999008l0,6.998001l-3.001007,3.000992l-0.001007,3.999008l-1,1l-8,0l-1,-1l5,0l2,-1.972l0,-5.028l5,-5l0.014008,-2l3.992981,-3.992996l4.993011,0",
    flag: "west_sahara.png",
    facts: null,
    perils: []
  };
  countryData['sn'] = {
    name: "Senegal",
    svg: "m414.174988,269.174988l2,-2l0,-2l2,-2l4,0l1,1l0,1l4,4l0,2l1,1l0,2l1,1l0,1l-4,0l-1,-1l-5,0l-1,1l-2,0l-1,-1l1,-1l2,0l1,-1l2,0l1,1l1,-1l-1,0l-1,-1l-5,0l0,-1l-2,-2z",
    flag: "senegal.png",
    facts: null,
    perils: []
  };
  countryData['gn'] = {
    name: "Guinea",
    svg: "m429.174988,277.174988l4,0l1,-1l1,0l1,1l0,2l1,1l0,2l1,1l-1,1l0,1l1,1l0,3l-1,1l0,1l-1,0l-1,1l-1,-1l0,-2l-1,-1l-2,0l0,-2l-2,-2l-3,0l0,1l-1,1l-5,-5l0,-1l2,-2l1,0l0,-3l1,0l1,1l4,0l0,1z",
    flag: "guinea.png",
    facts: null,
    perils: []
  };
  countryData['lr'] = {
    name: "Liberia",
    svg: "m434.174988,291.174988l1,1l1,-1l1,0l0,4l1,0l1,1l0,5l-1,0l-3,-3l-1,0l-5,-5l2,-2l0,-1l1,-1l0,-1l1,0l1,1l0,2z",
    flag: "liberia.png",
    facts: null,
    perils: []
  };
  countryData['ci'] = {
    name: "Cote D'Ivoire",
    svg: "m438.174988,283.174988l3,0l0,-1l1,0l0,1l1,0l1,-1l3,3l1,-1l2,0l1,1l0,7l-1,1l0,3l1,1l0,2l-1,-1l-6,0l-1,1l-1,0l-2,2l-1,0l0,-5l-1,-1l-1,0l0,-5l1,-1l0,-3l-1,-1l0,-1l1,-1z",
    flag: "ivory_coast.png",
    facts: null,
    perils: []
  };
  countryData['gh'] = {
    name: "Ghana",
    svg: "m451.174988,281.174988l5,0l1,-1l1,0l0,2l1,1l0,5l1,0l0,6l1,1l-2,2l-2,0l-2,2l-2,0l0,1l-1,-1l-1,0l0,-2l-1,-1l0,-3l1,-1l0,-11z",
    flag: "ghana.png",
    facts: null,
    perils: []
  };
  countryData['bf'] = {
    name: "Burkina Faso",
    svg: "m444.174988,282.174988l0,-2l1,-1l0,-2l1,0l1,-1l0,-2l1,-1l1,1l1,-1l0,-1l1,0l2,-2l2,0l0,-1l1,-1l2,0l1,1l0,3l3,3l1,0l1,1l-1,1l1,1l-1,1l-2,0l-1,1l-3,0l-1,1l-5,0l0,4l-1,-1l-2,0l-1,1l-3,-3z",
    flag: "burkina_faso.png",
    facts: null,
    perils: []
  };
  countryData['tg'] = {
    name: "Togo",
    svg: "m460.174988,294.174988l0,-6l-1,0l0,-5l-1,-1l0,-2l2,0c0,0 0,2 0,2.001007s1,0.998993 1,0.998993l0,2l1,1l0,9l-1,0l-1,-1z",
    flag: "togo.png",
    facts: null,
    perils: []
  };
  countryData['bj'] = {
    name: "Benin",
    svg: "m464.174988,276.174988l1,0l2,2l0,2l1,1l0,1l-1,1l0,1l-2,2l0,9l-3,0l0,-9l-1,-1l0,-2l-1,-0.998993l0,-2.001007l1,-1l2,0l1,-1l-1,-1l1,-1z",
    flag: "benin.png",
    facts: null,
    perils: []
  };
  countryData['ml'] = {
    name: "Mali",
    svg: "m444.174988,255.175003l-2,-2l0,-16l2,0l4,0l13,13l1,1l1,0l2,2l1,0l0,2l3,0l0,9.999008l-2,2l-5,0l-1,1l-5,0l-1,1l0,1l-2,0l-2,2l-1,0l0,1l-1,1l-1,-1l-1,1l0,2l-1,1l-1,0l0,2l-1,1l0,2l-1,1l-1,0l0,-1l-1,0l0,1l-3,0l-1,-1l0,-2l-1,-1l0,-2l-1,-1l-1,0l-1,1l-4,0l0,-2l-1,-1l0,-2l-1,-1l0,-2l1,-1l0,-2l2,2l1,-1l3,0l1,-1l9,0l0,-10.999008z",
    flag: "mali.png",
    facts: null,
    perils: []
  };
  countryData['cv'] = {
    name: "Cape Verde",
    svg: "m395.174988,261.174988l0,1l-1,0l0,-1l1,0zm0,2l-1,0l0,1l1,-1zm2,1l0,-1l-1,0l1,1zm2,-1l1,0l0,-1l-1,1zm1,1l0,1l1,0l-1,-1zm-1,3l0,1l1,-1l-1,0zm-1,1l0,-1l-1,0l1,1zm-2,0l-1,0l1,1l0,-1z",
    flag: "cape_verde.png",
    facts: null,
    perils: []
  };
  countryData['gw'] = {
    name: "Guinea-Bissau",
    svg: "m419.174988,280.174988l0,-1l-3,-3l2,0l1,-1l4,0l0,3l-1,0l-2,2l0,1l-1,-1zm-2,1l0,-1l-1,0l1,1zm0,-2l1,0l-1,-1l0,1z",
    flag: "guinea_bissau.png",
    facts: null,
    perils: []
  };
  countryData['gm'] = {
    name: "The Gambia",
    svg: "m416.174988,272.174988l5,0l1,1l1,0l-1,1l-1,-1l-2,0l-1,1l-2,0l1,-1l-1,-1z",
    flag: "gambia.png",
    facts: null,
    perils: []
  };
  countryData['sl'] = {
    name: "Sierra Leone",
    svg: "m428.174988,292.174988l-1,0l0,-1l-2,-2l0,-3l1,-1l0,-1l3,0l2,2l0,2l1,0l0,1l-1,1l0,1l-2,2l-1,-1zm-2,0l0,-1l-1,0l1,1z",
    flag: "sierra_leone.png",
    facts: null,
    perils: []
  };
  countryData['mr'] = {
    name: "Mauritania",
    svg: "m436.174988,229.175003l8,8l-2,0l0,16l2,2l0,10.999985l-9,0l-1,1l-3,0l-1,1l-2,-2l0,2l-1,1l-4,-4l0,-1l-1,-1l-4,0l-2,2l0,-3l1,-1l0,-5l-1,-0.998993l0,-1l1,-1l0,-2l-2,-2l0,-1l1,1l8,0l1,-1l0,-4l3,-3l0,-7l1,-1l7,0l0,-4.000992zm-21,25l1,-1l-1,0l0,1z",
    flag: "mauritania.png",
    facts: null,
    perils: []
  };
  countryData['ne'] = {
    name: "Niger",
    svg: "m469.174988,255.175995l3,0l6,-6.001007l2,0l8,-8l1,1l2,0l2,2l1,0l1,-1l1,0l0,4l2,2l0,14l-6,6l0,3l-2,2l-1,0l-1,-1l-4,0l-2,2l-2,0l-2,-2l-1,1l-2,0l-2,-2l-4,0l-1,1l0,2l-1,1l0,2l-2,-1.998993l-1,0l-1,-1l-1,0l-3,-3l0,-3.001007l-1,-0.998993l3,0l1,-1l5,0l2,-2l0,-10z",
    flag: "niger.png",
    facts: null,
    perils: []
  };
  countryData['td'] = {
    name: "Chad",
    svg: "m496.174988,243.175003l1,0l1,-1l2,0l19,12l0,11.999985l-3,0l0,3l-1,0l0,2l-1,1l0,3l1,1l0,3l1,1l0,1l-2,0l-3,3l0,1l-2,2l-3,0l1,1l-2,2l-3,0l-1,1l-1,-1l-1,1l-2,0l0,-3l-3,-3l0,-1l3,0l0,-2l-1,-1l0,-5l-4,-4l0,-3l6,-6l0,-13.999985l-2,-2l0,-4z",
    flag: "chad.png",
    facts: null,
    perils: []
  };
  countryData['ng'] = {
    name: "Nigeria",
    svg: "m465.174988,286.174988l2,-2l0,-1l1,-1l0,-1l-1,-1l0,-4l1,-1l0,-2l1,-1l4,0l2,2l2,0l1,-1l2,2l2,0l2,-2l4,0l1,1l1,0l2,-2l2,2l0,2l1,1l0,2l-3,3l0,3l-1,0l0,2l-3,3l0,3l-2,2l0,-1l-1,-1l-1,0l-4,4l0,2l-1,0l0,1l-3,0l-1,1l-1,0l-2,-2l0,-2l-1,0l-2,-2l-4,0l0,-9z",
    flag: "nigeria.png",
    facts: null,
    perils: []
  };
  countryData['st'] = {
    name: "Sao Tome and Principe",
    svg: "m477.174988,310.174988l1,-1l0,1l-1,0zm-1,3l-1,1l1,0l1,-1l-1,0z",
    flag: "sao_tome_principe.png",
    facts: null,
    perils: []
  };
  countryData['cm'] = {
    name: "Cameroon",
    svg: "m494.174988,274.174988l0,2l1,1l0,2l-3,3l0,3l-1,0l0,2l-3,3l0,3l-2,2l0,-1l-1,-1l-1,0l-4,4l0,3l2,2l1,0l0,5l9,0l0,1l4,0l1,1l2,0l0,-4l-3,-3l0,-2l-1,-1l0,-6l2,-2l0,-3l-3,-3l0,-1l3,0l0,-2l-1,-1l0,-5l-2,-2z",
    flag: "cameroon.png",
    facts: null,
    perils: []
  };
  countryData['ga'] = {
    name: "Gabon",
    svg: "m486.174988,326.174988l-3,-3l0,-2l-1,-1l0,-2l-1,0l-1,-1l2,-2l0,-1l1,0l-1,-1l0,-2l5,0l0,-4l5,0l0,3l3,0l0,3l-2,2l2,0l0,5l-2,2l0,-1l-5,0l0,4l-1,1l-1,0z",
    flag: "gabon.png",
    facts: null,
    perils: []
  };
  countryData['gq'] = {
    name: "Equatorial Guinea",
    svg: "m481.174988,303.174988l0,1l-1,1l-1,0l1,-1l0,-1l1,0zm6,8l0,-4l-4,0l0,3l-1,1l5,0z",
    flag: "equatorial_guinea.png",
    facts: null,
    perils: []
  };
  countryData['cf'] = {
    name: "Central African Republic",
    svg: "m499.174988,305.174988l-3,-3l0,-2l-1,-1l0,-6l2,-2l2,0l1,-1l1,1l1,-1l3,0l2,-2l-1,-1l3,0l2,-2l0,-1l3,-3l2,0l2,2l0,4l2,2l1,0l1,1l0,1l3,3l0,1l2,2l0,2l-3,0l-1,-1l-1,1l-2,0l-1,1l-3,0l-1,1l-4,0l-2,-2l-2,0l-2,2l0,2l-5,0l0,3l-1,1l0,-2z",
    flag: "central_african.png",
    facts: null,
    perils: []
  };
  countryData['cg'] = {
    name: "Congo",
    svg: "m487.174988,326.174988l1,-1l0,-4l5,0l0,1l2,-2l0,-5l-2,0l2,-2l0,-3l-3,0l0,-2l4,0l1,1l2,0l0,-2l1,-1l0,-3l5,0l0,3l-1,1l0,3l-1,1l0,5l-2,2l0,1l-2,2l0,4l-4,4l0,-1l-2,0l-1,1l-1,-1l-1,0l-1,1l-1,0l0,-1l-2,-2l1,0z",
    flag: "congo.png",
    facts: null,
    perils: []
  };
  countryData['ao'] = {
    name: "Angola",
    svg: "M489.175,332.175v-2l-1-1h1l1-1h1v1l-1,1v2H489.175z M491.175,332.175h9v4l3,3h4v-3h3v1h4v11h5v6h-5v12l3,3h-11l-1-1h-12l-1-1h-4v-5l2-2v-5l3-3v-5l-1-1v-3l-1-1l1-1v-3l-2-2v-3L491.175,332.175z",
    flag: "angola.png",
    facts: null,
    perils: []
  };
  countryData['cd'] = {
    name: "Democratic Republic of the Congo",
    svg: "m490.174988,333.174988l-1,-1l1,0l0,-2l1,-1l0,-1l1,1l1,-1l2,0l0,1l4,-4l0,-4l2,-2l0,-1l2,-2l0,-5l1,-1l0,-3l1,-1l0,-5l2,-2l2,0l2,2l4,0l1,-1l3,0l1,-1l2,0l1,-1l1,1l3,0l2,2l3,0l1,-1l3,3l0,4l1,1l0,1l-3,3l0,3l-1,1l0,3l-2,2l0,1l1,1l0,7l1,1l0,3l2,2l0,2l1,1l-1,1l-4,0l0,2l-1,1l1,1l0,4l-1,1l0,1l2,2l2,0l0,4l-2,0l-1,-1l0,-1l-4,-4l-1,1l-2,0l-2,-2l-2,0l-1,-1l-5,0l0,-11l-4,0l0,-1l-3,0l0,3l-4,0l-3,-3l0,-4l-9,0l-1,1z",
    flag: "congo_dr.png",
    facts: null,
    perils: []
  };
  countryData['na'] = {
    name: "Namibia",
    svg: "m488.174988,371.174988l0,-4l4,0l1,1l12,0l1,1l11,0l1,-1l3,0l1,1l-1,1l-2,0l-1,1l-1,-1l-6,0l0,13l-2,0l0,20l-2,2l-3,0l-3,-3l0,1l-1,1l-3,-3l0,-3l-1,-1l0,-6l-1,-1l0,-7l-3,-3l0,-3l-2,-2l0,-2l-2,-2z",
    flag: "namibia.png",
    facts: null,
    perils: []
  };
  countryData['dz'] = {
    name: "Algeria",
    svg: "m453.174988,203.175003l2,0l2,-2l1,0l3,-3l4,0l1,-1l4,0l1,1l2,0l1,-1l6,0l-1,1l0,7l-2,2l0,2l4,4l0,4l1,1l0,2l0,1l1,1l0,10l-1,0l0,3l3,3l1,0l2,2l0,1l-8,8l-2,0l-6,6l-6,0l0,-1.999008l-1,0l-2,-2l-1,0l-14,-14l-4,0l-8,-8l0,-4l4,-4l3,0l8,-8l4,0l0,-2l-2,-2l0,-6.000992z",
    flag: "algeria.png",
    facts: null,
    perils: []
  };
  countryData['tn'] = {
    name: "Tunisia",
    svg: "m487.174988,204.175003l0,1l-1,0l1,-1zm-3,14l0,-3l3,-3l0,-2l-2,-2l-2,0l0,-2l1,-1l1,0l1,-1l0,-2l-2,-2l2,-2l0,-1l-1,1l-1,0l0,-2l-3,0l-2,2l0,7l-2,2l0,2l4,4l0,4l1,1l0,2l2,-2zm2,-11l0,1l-1,-1l1,0z",
    flag: "tunisia.png",
    facts: null,
    perils: []
  };
  countryData['ly'] = {
    name: "Libya",
    svg: "m500.174988,242.175003l-2,0l-1,1l-2,0l-1,1l-1,0l-2,-2l-2,0l-1,-1l0,-1l-2,-2l-1,0l-3,-3l0,-3l1,0l0,-10l-1,-1l0,-1l2,-2l0,-3l3,-3l0,-2l1,0l1,1l4,0l1,1l3,0l0,2l3,3l3,0l2,2l2,0l2,-2l0,-3l3,-3l4,0l1,1l0,1l1,0l1,1l2,0l1,1l-1,1l0,4l1,1l0,25l0,6.000992l-3,0l0,1.999008l-19,-12z",
    flag: "libya.png",
    facts: null,
    perils: []
  };
  countryData['eg'] = {
    name: "Egypt",
    svg: "m522.174988,246.175003l0,-25l-1,-1l0,-4l1,-1l5,0l2,2l2,0l1,1l3,-3l3,0l2,2l5,0l1,1l0,6l-1,1l0,2l-3,-3l0,-1l-1,-1l0,-2l-1,1l0,3l3,3l0,1l1,1l0,3l2,2l0,2l2,2l0,5l3,3l-13,0l0,-1l-1,1l-15,0z",
    flag: "egypt.png",
    facts: null,
    perils: []
  };
  countryData['sd'] = {
    name: "Sudan",
    svg: "m554.174988,261.174988l-2,0l0,3l-1,1l0,10l-2,0l-2,2l0,4l-2,0l0,7l-2,0l-1,1l0,2l2,0l2,2l0,3l2,2l-5,5l-7,0l-3,-3l-1,1l-3,0l-2,-2l0,-2l-2,-2l0,-1l-3,-3l0,-1l-1,-1l-1,0l-2,-2l0,-4l-2,-2l0,-1l-1,-1l0,-3l-1,-1l0,-3l1,-1l0,-2l1,0l0,-3l3,0l0,-13.998993l3,0l0,-6.001007l15,0l1,-1l0,1l13,0l0,1l2,2l0,7l3,3l-2,2z",
    flag: "sudan.png",
    facts: null,
    perils: []
  };
  countryData['er'] = {
    name: "Eritrea",
    svg: "m557.174988,260.174988l0,3l1,1l0,3l2,0l2,2l1,1l0,1l4,4l-1,1l-6,-6l-4,0l-1,-1l-1,1l-3,0l0,-5l1,-1l0,-3l2,0l2,-2l1,1zm2,6l1,0l-1,-1l0,1zm2,1l0,-1l-1,1l1,0z",
    flag: "eritrea.png",
    facts: null,
    perils: []
  };
  countryData['et'] = {
    name: "Ethiopia",
    svg: "m546.174988,296.174988l0,-3l-2,-2l-2,0l0,-2l1,-1l2,0l0,-7l2,0l0,-4l2,-2l2,0l0,-5l3,0l1,-1l1,1l4,0l6,6l-2,2l0,2l3,0l0,3l1,1l0,2l2,0l3,3l3,0l1,1l3,0l-3,3l0,1l-5,5l-3,0l-2,2l-2,0l-1,1l-2,0l0,-1l-1,0l-3,3l-3,0l-3,-3l-2,0l-1,-1l0,-2l-1,0l-2,-2z",
    flag: "ethiopia.png",
    facts: null,
    perils: []
  };
  countryData['ug'] = {
    name: "Uganda",
    svg: "m533.174988,316.174988l1,-1l0,-3l3,-3l0,-1l-1,-1l0,-4l7,0l2,-2l0,3l2,2l0,4l-3,3l0,4l-8,0l-2,2l-1,0l0,-3z",
    flag: "uganda.png",
    facts: null,
    perils: []
  };
  countryData['ke'] = {
    name: "Kenya",
    svg: "m564.174988,302.174988l-1,1l0,1l-1,1l0,12l2,2l-1,1l-1,0l0,2l-2,0l0,2l-1,1l0,2l-1,1l-1,0l-3,-3l0,-1l-10,-7l0,-4l3,-3l0,-4l-2,-2l0,-3l3,-3l1,0l0,2l1,1l2,0l3,3l3,0l3,-3l1,0l0,1l2,0z",
    flag: "kenya.png",
    facts: null,
    perils: []
  };
  countryData['zm'] = {
    name: "Zambia",
    svg: "m521.174988,368.174988l-3,0l-1,1l-3,-3l0,-12l5,0l0,-6l1,1l2,0l2,2l2,0l1,-1l4,4l0,1l1,1l2,0l0,-4l-2,0l-2,-2l0,-1l1,-1l0,-4l-1,-1l1,-1l0,-2l4,0l1,-1l3,3l1,0l3,3l0,8l-1,0l0,2l-1,1l1,1l0,1l-2,0l-1,1l-2,0l-2,2l0,2l-3,0l-1,1l0,1l-5,5l-2,0l-1,-1l-1,0l-1,-1z",
    flag: "zambia.png",
    facts: null,
    perils: []
  };
  countryData['zw'] = {
    name: "Zimbabwe",
    svg: "m535.174988,364.174988l3,0l1,1l2,0l1,1l0,6l-1,1l0,2l1,1l-2,2l0,3l-2,2l-5,0l-1,-1l-2,0l-1,-1l0,-2l-5,-5l0,-2l-2,-2l0,-1l1,0l1,1l2,0l5,-5l0,-1l1,-1l3,0l0,1z",
    flag: "zimbabwe.png",
    facts: null,
    perils: []
  };
  countryData['bw'] = {
    name: "Botswana",
    svg: "m509.174988,383.174988l2,0l0,-13l6,0l1,1l1,-1l2,0l1,-1l0,1l2,2l0,2l5,5l0,2l1,1l2,0l1,1l-1,1l-2,0l-3,3l0,2l-2,2l-1,0l-1,1l0,2l-1,1l-2,0l-2,-2l-2,0l0,2l-3,3l-2,0l0,-4l-2,-2l0,-9z",
    flag: "botswana.png",
    facts: null,
    perils: []
  };
  countryData['za'] = {
    name: "South Africa",
    svg: "m539.174988,398.174988l0,2l-1,0l-2,-2l0,-2l1,-1l2,0l0,-6l-1,-1l0,-5l-5,0l-1,1l-2,0l-3,3l0,2l-2,2l-1,0l-1,1l0,2l-1,1l-2,0l-2,-2l-2,0l0,2l-3,3l-2,0l0,-4l-2,-2l0,11l-2,2l-3,0l-3,-3l0,1l-1,1l1,1l0,2l1,1l0,3l3,3l0,2l-1,1l0,2l1,1l0,2l1,0l2,2l1,0l1,-1l3,0l1,-1l3,0l1,-1l1,1l2,0l1,-1l1,1l0,-1l1,-1l1,1l1,-1l1,0l8,-8l0,-2l2,-2l0,-1l3,-3l0,-1l1,-1l0,-4l-2,0z",
    flag: "south_africa.png",
    facts: { exposure:["-","-"], population:["49 Million","25"], lifeexp:["49","216"], landmass:["1,219,090","25"] },
    perils: []
  };
  countryData['sz'] = {
    name: "Swaziland",
    svg: "m539.174988,395.174988l0,3l0,2l-1,0l-2,-2l0,-2l1,-1l2,0z",
    flag: "swaziland.png",
    facts: null,
    perils: []
  };
  countryData['mz'] = {
    name: "Mozambique",
    svg: "m539.174988,398.174988l0,-9l-1,-1l0,-5l2,-2l0,-3l2,-2l-1,-1l0,-2l1,-1l0,-6l-1,-1l-2,0l-1,-1l-3,0l0,-3l2,-2l2,0l1,-1l2,0l1,1l3,0l0,2l-1,1l0,2l2,2l0,1l1,0l0,-3l1,0l0,-5l-2,-2l0,-1l-2,-2l0,-2l1,-1l0,-1l8,0l0,-1l3,0l1,-1l1,0l2,-2l0,13l1,0l-1,1l0,2l-1,1l0,1l-3,3l-2,0l-8,8l-1,0l0,3l1,1l0,2l1,1l0,7l-3,3l-2,0l-2,2l0,4l-2,0z",
    flag: "mozambique.png",
    facts: null,
    perils: []
  };
  countryData['tz'] = {
    name: "Tanzania",
    svg: "m535.174988,336.174988l-2,-2l0,-3l-1,-1l0,-2l2,0l1,-1l0,-1l1,-1l0,-2l-1,0l0,-1l1,0l0,-3l-1,-1l1,-1l8,0l10,7l0,1l3,3l1,0l-1,1l0,5l1,1l0,7l1,1l0,2l1,1l1,0l-2,2l-1,0l-1,1l-3,0l0,1l-7,0l-1,-1l0,-4l-1,-1l-3,0l-2,-2l-1,0l-4,-4l0,-2zm25,3l-1,-1l0,1l1,0zm-1,-6l-1,-1l0,1l1,1l0,-1zm0,-2l0,-1l-1,1l1,0z",
    flag: "tanzania.png",
    facts: null,
    perils: []
  };
  countryData['rw'] = {
    name: "Rwanda",
    svg: "m531.174988,322.174988l0,-1l2,-2l1,0l1,-1l1,1l0,3l-2,0l0,1l-2,0l-1,-1z",
    flag: "rwanda.png",
    facts: null,
    perils: []
  };
  countryData['bi'] = {
    name: "Burundi",
    svg: "m532.174988,323.174988l2,0l0,-1l1,0l0,1l1,0l0,2l-1,1l0,1l-1,1l-2,0l0,-5z",
    flag: "burundi.png",
    facts: null,
    perils: []
  };
  countryData['mw'] = {
    name: "Malawi",
    svg: "m546.174988,350.174988l0,1l-1,1l0,2l2,2l0,1l2,2l0,5l-1,0l0,3l-1,0l0,-1l-2,-2l0,-2l1,-1l0,-2l-3,0l-1,-1l0,-1l-1,-1l1,-1l0,-2l1,0l0,-8l-1,-1l3,0l1,1l0,4l1,1l-1,0z",
    flag: "malawi.png",
    facts: null,
    perils: []
  };
  countryData['km'] = {
    name: "Comoros",
    svg: "m568.174988,349.174988l1,1l0,1l-1,-1l0,-1zm1,3l0,1l1,-1l-1,0zm3,0l-1,-1l0,1l1,0zm0,1l0,1l1,-1l-1,0z",
    flag: "comoros.png",
    facts: null,
    perils: []
  };
  countryData['mu'] = {
    name: "Mauritius",
    svg: "m598.174988,379.174988l1,1l1,0l-1,-1l-1,0zm7,-2l0,-1l-1,1l0,1l1,-1z",
    flag: "mauritius.png",
    facts: null,
    perils: []
  };
  countryData['mg'] = {
    name: "Madagascar",
    svg: "m580.174988,355.174988l1,0l0,-1l-1,1zm-9,10l0,2l-1,1l0,3l1,1l0,5l-1,1l0,2l-2,2l0,3l1,1l0,4l3,3l0,1l1,0l1,-1l1,0l1,-1l1,0l1,-1l0,-2l1,-1l0,-3l1,-1l0,-3l1,-1l0,-3l1,-1l0,-3l2,-2l0,-5l1,0l0,-2l-1,-1l0,-1l1,0l1,1l0,-3l-1,-1l0,-5l-2,-2l-1,1l0,2l-2,2l0,3l-2,0l0,2l-1,-1l-1,1l0,1l-2,0l-1,1l-1,0l-1,1z",
    flag: "madagascar.png",
    facts: null,
    perils: []
  };
  countryData['dj'] = {
    name: "Djibouti",
    svg: "m567.174988,275.174988l1,1l0,1l-2,2l2,0l-1,1l-3,0l0,-2l3,-3z",
    flag: "djibouti.png",
    facts: null,
    perils: []
  };
  countryData['so'] = {
    name: "Somalia",
    svg: "m582.174988,280.174988l1,0l1,-1l2,0l1,-1l1,0l0,4l-1,1l0,3l-1,1l0,1l-2,2l0,3l-2,2l0,3l-3,3l0,2l-4,4l-1,0l-5,5l-4,4l0,2l-1,1l-2,-2l0,-12l1,-1l0,-1l2,-2l2,0l2,-2l3,0l5,-5l0,-1l3,-3l-3,0l-1,-1l-3,0l-3,-3l-2,0l0,-2l-1,-1l0,-3l1,-1l3,3l2,0l1,-1l3,0l1,-1l4,0zm7,3l0,-1l-1,1l1,0z",
    flag: "somalia.png",
    facts: null,
    perils: []
  };
  countryData['ls'] = {
    name: "Lesotho",
    svg: "m531.174988,404.174988l2,2l0,1l-2,2l-1,0l0,1l-2,0l-1,-1l0,-2l3,-3l1,0z",
    flag: "lesotho.png",
    facts: null,
    perils: []
  };

  // Middle East
  countryData['ye'] = {
    name: "Yemen",
    svg: "m594.174988,276.174988l1,1l1,-1l0,-1l-1,1l-1,0zm-26,-6l-1,-1l0,-5l1,-1l0,-2l1,-1l0,1l7,0l1,1l2,0l0,-2l3,-3l2,0l1,-1l5,0l0,1l1,1l0,2l1,1l0,1l1,1l-1,0l-1,1l0,1l-2,2l-2,0l-2,2l-2,0l-3,3l-3,0l-1,1l-3,0l-2,2l-2,0l-1,-1l0,-4zm-1,1l-1,0l1,1l0,-1z",
    flag: "yemen.png",
    facts: null,
    perils: []
  };
  countryData['om'] = {
    name: "Oman",
    svg: "m590.174988,256.174988l1,-1l2,0l2,-2l3,0l0,-4l1,-1l0,-3l-1,-1l0,-2l1,-1l0,-1l1,0l0,-3l1,0l1,1l0,1l2,2l3,0l1,1l0,1l1,1l1,0l0,1l-1,1l0,2l-3,3l0,-1l-1,1l0,5l-2,0l-1,1l0,1l-1,1l-2,0l-1,1l0,2l-1,0l-1,-1l-2,2l-1,0l-1,-1l0,-1l-1,-1l0,-2l-1,-1l0,-1zm18,-3.999985l0,-1l-1,1l1,0z",
    flag: "oman.png",
    facts: null,
    perils: []
  };
  countryData['ae'] = {
    name: "United Arab Emirates",
    svg: "m592.174988,238.175003l0,1l-1,0l1,-1zm8,-5l1,1l0,-2l-1,1zm-11,6l1,1l1,0l1,-1l4,0l1,-1l0,-1l3,-3l0,-1l1,1l0,3l-1,0l0,3l-1,0l0,1l-1,1l0,2l-6,0l-3,-3l0,-2zm4,-1.001007l1,0l0,-1l-1,1z",
    flag: "uae.png",
    facts: null,
    perils: []
  };
  countryData['sa'] = {
    name: "Saudi Arabia",
    svg: "m565.174988,263.174988l-1,-1l1,0l0,1zm23,-26.000992l1,0l0,-3l-1,-1l0,1l-1,1l0,1l1,1zm-1,-4l-1,0l0,1l1,-1zm-8,-7.998993l0,-1l-1,-1l-6,0l-7,-7l-2,0l-3,-3l-2,0l-2,2l-4,0l0,1l1,1l1,0l0,3l-1,0l-3,3l-3,0l0,2l-1,1l4,4l0,2l2,2l0,1l1,1l0,2l3,3l0,1l1,1l0,4l1,1l0,2l4,4l0,1l1,0.999985l0,2l3,3l0,1l1,1l0,1l1,-1l0,-2l1,-1l0,1l7,0l1,1l2,0l0,-2l3,-3l2,0l1,-1l5,0l1,-0.999985l2,0l2,-2l3,0l0,-4l1,-1l0,-3l-1,-1l-6,0l-3,-3l0,-2l-3,-3l0,-1l-1,-1l0,-3l-3,-3l0,-2l-1,-1l-2,0z",
    flag: "saudi_arabia.png",
    facts: null,
    perils: []
  };
  countryData['kw'] = {
    name: "Kuwait",
    svg: "m580.174988,221.175003l-1,1l1,0l0,2l1,1l-2,0l0,-1l-1,-1l-1,0l0,-2l1,-1l2,0l0,1zm1,0l0,1l1,0l-1,-1z",
    flag: "kuwait.png",
    facts: null,
    perils: []
  };
  countryData['jo'] = {
    name: "Jordan",
    svg: "m547.174988,223.175003l0,-4l1,-1l0,-5l1,-1l1,0l1,1l3,-3l1,0l1,-1l1,0l0,3l1,1l-2,2l-4,0l0,1l1,1l1,0l0,3l-1,0l-3,3l-3,0z",
    flag: "jordan.png",
    facts: null,
    perils: []
  };
  countryData['il'] = {
    name: "Israel",
    svg: "m546.174988,218.175003l-1,-1l0,-1l1,-1l0,-3l1,-1l0,-1l1,0l1,-1l0,3l-2,0l0,4l1,0l0,2l-1,1l0,2l-1,1l0,-4z",
    flag: "israel.png",
    facts: { exposure:["-","-"], population:["7.47 Million","96"], lifeexp:["81","17"], landmass:["20,770","153"] },
    perils: ['earthquakes','all']
  };
  countryData['ps'] = {
    name: "Occupied Palestinian Territory",
    svg: "m548.174988,216.175003l-1,0l0,-4l2,0l-1,1l0,3z",
    flag: "palestinian.png",
    facts: null,
    perils: []
  };
  countryData['lb'] = {
    name: "Lebanon",
    svg: "m551.174988,206.175003l0,1l-1,0l0,1l-2,2l-1,0l1,-1l0,-2l2,-2l1,1z",
    flag: "lebanon.png",
    facts: null,
    perils: []
  };
  countryData['sy'] = {
    name: "Syria",
    svg: "m556.174988,209.175003l-1,1l-1,0l-3,3l-1,-1l-1,0l0,-3l1,-1l0,-1l1,0l0,-1l-1,-1l0,-1l-1,-1l0,-2l2,-2l0,-1l3,0l1,-1l1,1l4,0l2,-2l3,0l0,1l-2,2l0,6l-2,2l-2,0l-2,2l-1,0z",
    flag: "syria.png",
    facts: null,
    perils: []
  };
  countryData['iq'] = {
    name: "Iraq",
    svg: "m581.174988,220.175003l-3,0l-1,1l0,2l-5,0l-7,-7l-2,0l-3,-3l-2,0l-1,-1l0,-3l2,-2l2,0l2,-2l0,-6l3,-3l4,0l1,1l1,0l0,2l2,2l1,0l0,2l-1,1l0,4l5,5l0,1l0,3l1,0l0,2l1,0l0,1z",
    flag: "iraq.png",
    facts: null,
    perils: []
  };
  countryData['cy'] = {
    name: "Cyprus",
    svg: "m541.174988,203.175003l2,0l1,1l-1,0l-1,1l-1,0l-1,-1l1,-1zm3,-1l-2,0l-1,1l2,0l1,1l1,-1l-1,-1z",
    flag: "cyprus.png",
    facts: null,
    perils: []
  };
  countryData['ir'] = {
    name: "Iran",
    svg: "m600.174988,230.175003l1,0l-1,1l-1,0l1,-1zm0,2l0,-1l-1,1l1,0zm-28,-35l0,-2l-1,0l-1,-1l0,-5l1,-1l1,0l2,2l1,0l2,0l2,-2l1,0l1,1l0,3l1,0l0,2l1,1l2,0l3,3l5,0l1,-1l1,1l0,-2l1,0l3,-3l4,0l1,1l2,0l0,1l2,0l3,3l2,0l0,3l1,1l-1,1l0,2l-1,1l0,2l1,1l-1,1l0,4l2,2l1,0l0,2l-2,2l0,2l4,4l0,1l0,2l2,0l-1,1l0,1l-1,0l-2,2l0,3l-2,0l-1,-1l-4,0l-1,-1l-3,0l-1,-1l0,-3l-1,-1l-1,0l-2,2l-1,0l-1,1l-1,-1l-1,0l-2,-2l-1,0l-2,-2l-1,0l-1,-1l0,-2l-1,-1l0,-1l-2,-2l-1,0l-1,-1l-1,0l-1,1l0,-1l-1,0l0,-2l-1,0l0,-4l-5,-5l0,-4l1,-1l0,-2l-1,0l-2,-2l0,-2z",
    flag: "iran.png",
    facts: null,
    perils: []
  };
  countryData['az'] = {
    name: "Azerbaijan",
    svg: "M575.175,190.175h-1l-2-2v-1l1,1h1l1,1V190.175z M581.175,192.175v-3l-1-1h-1l-2,2h-1v-2l-2-2v-2l-2-2h2l1,1h1v-1l-1-1l1-1l2,2h2l1-1v-1l2,2v1l2,2l-2,2v2l-1,1v2H581.175z",
    flag: "azerbaijan.png",
    facts: null,
    perils: []
  };
  countryData['ge'] = {
    name: "Georgia",
    svg: "m564.174988,178.175003l-2,-2l-1,0l-1,-1l1,-1l1,1l4,0l2,2l5,0l3,3l-1,1l1,1l0,1l-1,0l-1,-1l-4,0l-1,1l-2,-2l-3,0l0,-3z",
    flag: "georgia.png",
    facts: null,
    perils: []
  };
  countryData['tr'] = {
    name: "Turkey",
    svg: "m567.174988,181.175003l2,2l0,3l2,0l1,1l0,1l-1,0l-1,1l0,5l1,1l1,0l0,2l-1,0l-1,-1l-4,0l-1,1l0,-1l-3,0l-2,2l-4,0l-1,-1l-1,1l-3,0l0,1l-2,2l0,-2l1,-1l0,-1l-1,1l-1,0l-2,0l-2,2l-3,0l-1,-1l-1,0l-1,-1l-1,-1l-1,0l0,2l-1,0l-1,1l-1,0l-1,-1l0,-1l-4,0l1,-1l-2,0l1,-1l-1,-1l-1,0l0,-1l1,0l-1,-1l-1,0l0,-2l1,1l0,-1l0,-1l0,-1l0,-1l-2,0l2,-2l1,-1l2,0l2,0l1,-1l1,0l-1,-1l0,-1l1,0l2,0l1,1l1,0l2,-2l1,0l1,-1l6,0l1,1l1,0l1,1l2,0l1,1l1,0l2,0l3,0l3,0l1,-1l1,-1l3,0zm-39,-1l-1,-1l-1,1l-1,0l0,1l1,0l-1,1l0,1l-1,1l2,0l-1,1l0,1l2,-2l1,0l1,-1l2,0l1,0l0,-1l-1,0l-2,-2l-1,0z",
    flag: "turkey.png",
    facts: { exposure:["$2,072","High"], population:["78.79 Million","17"], lifeexp:["73","126"], landmass:["783,562","37"] },
    perils: ['earthquakes','terrorism','disease','all']
  };
  countryData['am'] = {
    name: "Armenia",
    svg: "m575.174988,190.175003l0,-1l-1,-1l-1,0l-2,-2l-1,0l-1,0l0,-3l1,-1l2,0l2,2l0,2l2,2l0,2l-1,0z",
    flag: "armenia.png",
    facts: null,
    perils: []
  };

  // Oceania
  countryData['au'] = {
    name: "Australia",
    svg: "m748.174988,383.174988l1,1l0,-2l2,0l4,-4l3,0l2,-2l3,0l5,-5l0,-3l2,-2l2,2l0,-3l3,0l0,-4l3,-3l2.5,0l0,-1.5l2.5,2.5l0,3l1,0l0,-1l3,0l1,-1l-1,-1l0,-3l4,-4l4,0l0,-1l-1,-1l1,-1l2,2l2,0l1,1l4,0l1,-1l1,1l-1,1l0,2l-2,0l0,3l-1,0l0,2l3,3l1,0l6,6l2,0l3,-3l0,-2l1,-1l0,-11l1,-1l0,-3l1,-1l1,1l0,3l1,0l0,3l1,1l0,4l1,0l1,-1l2,2l0,5l2,2l0,3l1,1l0,2l1,1l2,0l3,3l0,2l2,2l0,3l3,0l0,3l3,3l0,1l3,3l0,6l1,1l0,4l-1,1l0,8l-4,4l0,2l-2,2l0,3l-2,2l0,6l-1,1l-3,0l-3,3l-2,0l-1,1l-2,-2l-1,1l0,-1l1,-1l-2,0l0,1l-2,2l-1,0l-2,-2l-4,0l-3,-3l0,-3l-2,-2l1,-1l0,-1l-1,0l-1,1l0,-4l-1,-1l-1,0l0,3l-1,1l-1,-1l1,-1l0,-3l2,-2l0,-1l-1,0l-4,4l0,2l-1,1l-1,0l0,-3l-3,-3l0,-2l-2,-2l-3,0l-1,-1l-8,0l-2,2l-6,0l-2,2l-1,0l-3,3l-9,0l0,2l-2,0l-2,2l-5,0l-3,-3l0,-1l2,-2l0,-6l-2,-2l0,-7l-2,-2l0,-3l-2,-2l1,0l1,-1l0,-2l-2,-2l0,-3l1,-1l0,-5l1,0zm58,45l2,0l0,-1l-3,0l1,1zm-59,-32l0,-1l-1,0l1,1zm-2,-1l0,-1l-1,1l1,0zm6,-16l1,-1l-1,0l0,1zm97,20l1,-1l-1,0l0,1zm-36,-34l0,1l1,-1l-1,0zm0,2l1,1l0,-1l-1,0zm-21,-16l1,-1l0,-1l-3,0l2,2zm-2,0l1,0l-1,-1l0,1zm17,-2l0,-1l-1,1l1,0zm-1,8l0,1l1,0l-1,-1zm15,-11l-1,0l0,1l1,-1zm-44,13l0,-1l-1,1l1,0zm18,-10l1,-1l-1,0l0,1zm10,8l1,-1l-1,0l0,1zm2,5l1,1l0,-1l-1,0zm18,79l0,1l-1,0l1,-1zm10,0l-1,1l1,1l0,-2zm1,2l-1,1l1,0l0,-1zm-9,5l2,2l0,1l-1,-1l0,2l1,0l0,1l1,1l2,0l1,-1l0,-1l1,0l0,1l1,0l0,-3l1,-1l0,-4l-2,0l-1,1l-3,0l-1,-1l-2,0l0,3zm6,6l-1,1l1,0l0,-1zm3,-3l-1,1l1,0l0,-1z",
    flag: "australia.png",
    facts: { exposure:["$5,646","Low"], population:["21.77 Million","55"], lifeexp:["82","9"], landmass:["7,741,220","6"] },
    perils: ['earthquakes','cyclones','scs','disease','all']
  };
  countryData['nz'] = {
    name: "New Zealand",
    svg: "m861.174988,496.174988l1,-1l0,1l-1,0zm18.992004,-15l0,-1l-0.992004,1l0.992004,0zm7.015991,7l0.992004,-1l0,1l-0.992004,0zm-3.007996,-22l1,0l0,1l-1,1l0,-2zm-3,-3l0,-1l2,-2l0,-1l3,-3l2,0l5,-5l0,-2l1,-1l1,0l0,-2l2,-2l0,2l1,1l1,-1l2,0l-1,1l1,1l-1,1l0,1l-4,4l1,1l0,1l-1,-1l-1,0l0,1l-3,3l0,3l-3,3l-4,0l-1,-1l-2,0l-1,-1zm19,-19l0,1l-1,0l1,-1zm2,-7l0,-6l2,2l0,-2l1,0l0,2l2,2l2,0l1,-1l1,0l0,3l-1,1l0,1l-2,0l-1,1l1,1l0,1l-2,2l0,1l-2,2l0,1l-1,-1l-1,0l0,-2l1,-1l0,-1l-3,-3l0,-1l2,-2zm2,-8l0,1l-1,-1l1,0zm-6,-5l3,3l0,1l1,1l0,2l-1,0l0,-2l-1,0l0,-1l-2,-2l0,-1l-1,-1l1,0z",
    flag: "new_zealand.png",
    facts: { exposure:["$595","Low"], population:["4.29 Million","125"], lifeexp:["81","23"], landmass:["267,710","75"] },
    perils: ['earthquakes','fire','all']
  };

