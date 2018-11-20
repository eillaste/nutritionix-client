const nutrient_names = {
	203: { name: 'Protein', unit: 'g' },
	204: {
		name: 'Total lipid(fat)',
		unit: 'g'
	},
	205: {
		name: 'Carbohydrate',
		unit: 'g'
	},
	207: {
		name: 'Ash',
		unit: 'g'
	},
	208: {
		name: 'Energy',
		unit: 'kcal'
	},
	209: {
		name: 'Starch',
		unit: 'g'
	},
	210: {
		name: 'Sucrose',
		unit: 'g'
	},
	211: {
		name: 'Glucose (dextrose)',
		unit: 'g'
	},
	212: {
		name: 'Fructose',
		unit: 'g'
	},
	213: {
		name: 'Lactose',
		unit: 'g'
	},
	214: {
		name: 'Maltose',
		unit: 'g'
	},
	221: {
		name: 'Alcohol, ethyl',
		unit: 'g'
	},
	255: {
		name: 'Water',
		unit: 'g'
	},
	257: {
		name: 'Adjusted Protein',
		unit: 'g'
	},
	262: {
		name: 'Caffeine',
		unit: 'mg'
	},
	263: {
		name: 'Theobromine',
		unit: 'mg'
	},
	268: {
		name: 'Energy',
		unit: 'kJ'
	},
	269: {
		name: 'Sugars, total',
		unit: 'g'
	},
	287: {
		name: 'Galactose',
		unit: 'g'
	},
	291: {
		name: 'Fiber, total dietary',
		unit: 'g'
	},
	301: {
		name: 'Calcium, Ca',
		unit: 'mg'
	},
	303: {
		name: 'Iron, Fe',
		unit: 'mg'
	},
	304: {
		name: 'Magnesium, Mg',
		unit: 'mg'
	},
	305: {
		name: 'Phosphorus, P',
		unit: 'mg'
	},
	306: {
		name: 'Potassium, K',
		unit: 'mg'
	},
	307: {
		name: 'Sodium, Na',
		unit: 'mg'
	},
	309: {
		name: 'Zinc, Zn',
		unit: 'mg'
	},
	312: {
		name: 'Copper, Cu',
		unit: 'mg'
	},
	313: {
		name: 'Fluoride, F',
		unit: 'μg'
	},
	315: {
		name: 'Manganese, Mn',
		unit: 'mg'
	},
	317: {
		name: 'Selenium, Se',
		unit: 'μg'
	},
	318: {
		name: 'Vitamin A, IU',
		unit: 'IU'
	},
	319: {
		name: 'Retinol',
		unit: 'μg'
	},
	320: {
		name: 'Vitamin A, RAE',
		unit: 'μg'
	},
	321: {
		name: 'Carotene, beta',
		unit: 'μg'
	},
	322: {
		name: 'Carotene, alpha',
		unit: 'μg'
	},
	323: {
		name: 'Vitamin E (alpha-tocopherol)',
		unit: 'mg'
	},
	324: {
		name: 'Vitamin D',
		unit: 'IU'
	},
	325: {
		name: 'Vitamin D2 (ergocalciferol)',
		unit: 'μg'
	},
	326: {
		name: 'Vitamin D3 (cholecalciferol)',
		unit: 'μg'
	},
	328: {
		name: 'Vitamin D (D2 + D3)',
		unit: 'μg'
	},
	334: {
		name: 'Cryptoxanthin, beta',
		unit: 'μg'
	},
	337: {
		name: 'Lycopene',
		unit: 'μg'
	},
	338: {
		name: 'Lutein + zeaxanthin',
		unit: 'μg'
	},
	341: {
		name: 'Tocopherol, beta',
		unit: 'mg'
	},
	342: {
		name: 'Tocopherol, gamma',
		unit: 'mg'
	},
	343: {
		name: 'Tocopherol, delta',
		unit: 'mg'
	},
	344: {},
	345: {},
	346: {},
	347: {},
	401: {
		name: 'Vitamin C, total ascorbic acid',
		unit: 'mg'
	},
	404: {
		name: 'Thiamin',
		unit: 'mg'
	},
	405: {
		name: 'Riboflavin',
		unit: 'mg'
	},
	406: {
		name: 'Niacin',
		unit: 'mg'
	},
	410: {
		name: 'Pantothenic acid',
		unit: 'mg'
	},
	415: {
		name: 'Vitamin B-6',
		unit: 'mg'
	},
	417: {
		name: 'Folate, total',
		unit: 'μg'
	},
	418: {
		name: 'Vitamin B-12',
		unit: 'μg'
	},
	421: {
		name: 'Choline, total',
		unit: 'mg'
	},
	428: {
		name: 'Menaquinone-4',
		unit: 'μg'
	},
	429: {
		name: 'Dihydrophylloquinone',
		unit: 'μg'
	},
	430: {
		name: 'Vitamin K (phylloquinone)',
		unit: 'μg'
	},
	431: {
		name: 'Folic acid',
		unit: 'μg'
	},
	432: {
		name: 'Folate, food',
		unit: 'μg'
	},
	435: {
		name: 'Folate, DFE',
		unit: 'μg'
	},
	454: {
		name: 'Betaine',
		unit: 'mg'
	},
	501: {
		name: 'Tryptophan',
		unit: 'g'
	},
	502: {
		name: 'Theonine',
		unit: 'g'
	},
	503: {
		name: 'Isoleucine',
		unit: 'g'
	},
	504: {
		name: 'Leucine',
		unit: 'g'
	},
	505: {
		name: 'Lysine',
		unit: 'g'
	},
	506: {
		name: 'Methionine',
		unit: 'g'
	},
	507: {
		name: 'Cystine',
		unit: 'g'
	},
	508: {
		name: 'Phenylalanine',
		unit: 'g'
	},
	509: {
		name: 'Tyrosine',
		unit: 'g'
	},
	510: {
		name: 'Valine',
		unit: 'g'
	},
	511: {
		name: 'Arginine',
		unit: 'g'
	},
	512: {
		name: 'Histidine',
		unit: 'g'
	},
	513: {
		name: 'Alanine',
		unit: 'g'
	},
	514: {
		name: 'Aspartic acid',
		unit: 'g'
	},
	515: {
		name: 'Glutamic acid',
		unit: 'g'
	},
	516: {
		name: 'Glycine',
		unit: 'g'
	},
	517: {
		name: 'Proline',
		unit: 'g'
	},
	518: {
		name: 'Serine',
		unit: 'g'
	},
	521: {
		name: 'Hydroxyproline',
		unit: 'g'
	},
	539: {
		name: 'Sugars, added',
		unit: 'g'
	},
	573: {
		name: 'Vitamin E, added',
		unit: 'mg'
	},
	578: {
		name: 'Vitamin B-12, added',
		unit: 'μg'
	},
	601: {
		name: 'Cholesterol',
		unit: 'mg'
	},
	605: {
		name: 'Fatty acids, total trans',
		unit: 'g'
	},
	606: {
		name: 'Fatty acids, total saturated',
		unit: 'g'
	},
	607: {
		name: 'Unknown',
		unit: 'g'
	},
	608: {
		name: 'Unknown',
		unit: 'g'
	},
	609: {
		name: 'Unknown',
		unit: 'g'
	},
	610: {
		name: 'Unknown',
		unit: 'g'
	},
	611: {
		name: 'Unknown',
		unit: 'g'
	},
	612: {
		name: 'Unknown',
		unit: 'g'
	},
	613: {
		name: 'Unknown',
		unit: 'g'
	},
	614: {
		name: 'Unknown',
		unit: 'g'
	},
	615: {
		name: 'Unknown',
		unit: 'g'
	},
	617: {
		name: 'Unknown',
		unit: 'g'
	},
	618: {
		name: 'Unknown',
		unit: 'g'
	},
	619: {
		name: 'Unknown',
		unit: 'g'
	},
	620: {
		name: 'Unknown',
		unit: 'g'
	},
	621: {
		name: 'DHA, omega-3 ddocosahexaenoic acid',
		unit: 'g'
	},
	624: {
		name: 'Unknown',
		unit: 'g'
	},
	625: {
		name: 'Unknown',
		unit: 'g'
	},
	626: {
		name: 'Unknown',
		unit: 'g'
	},
	627: {
		name: 'Unknown',
		unit: 'g'
	},
	628: {
		name: 'Unknown',
		unit: 'g'
	},
	629: {
		name: 'EPA, omega-3 eicosapentaenoic acid',
		unit: 'g'
	},
	630: {
		name: 'Unknown',
		unit: 'g'
	},
	631: {
		name: 'DPA',
		unit: 'g'
	},
	636: {
		name: 'Phytosterols',
		unit: 'mg'
	},
	638: {
		name: 'Stigmasterol',
		unit: 'mg'
	},
	639: {
		name: 'Campesterol',
		unit: 'mg'
	},
	641: {
		name: 'Beta-sitosterol',
		unit: 'mg'
	},
	645: {
		name: 'Fatty acids, total monosaturated',
		unit: 'g'
	},
	646: {
		name: 'Fatty acids, total polysaturated',
		unit: 'g'
	},
	652: {
		name: 'Starch',
		unit: 'g'
	},
	653: {
		name: 'Starch',
		unit: 'g'
	},
	654: {
		name: 'Starch',
		unit: 'g'
	},
	662: {
		name: 'Starch',
		unit: 'g'
	},
	663: {
		name: 'Starch',
		unit: 'g'
	},
	664: {
		name: 'Starch',
		unit: 'g'
	},
	665: {
		name: 'Starch',
		unit: 'g'
	},
	666: {
		name: 'Starch',
		unit: 'g'
	},
	669: {
		name: 'Starch',
		unit: 'g'
	},
	670: {
		name: 'Starch',
		unit: 'g'
	},
	671: {
		name: 'Starch',
		unit: 'g'
	},
	672: {
		name: 'Starch',
		unit: 'g'
	},
	673: {
		name: 'Starch',
		unit: 'g'
	},
	674: {
		name: 'Starch',
		unit: 'g'
	},
	675: {
		name: 'Starch',
		unit: 'g'
	},
	676: {
		name: 'Starch',
		unit: 'g'
	},
	685: {
		name: 'Starch',
		unit: 'g'
	},
	687: {
		name: 'Starch',
		unit: 'g'
	},
	689: {
		name: 'Starch',
		unit: 'g'
	},
	693: {
		name: 'Fatty acids, total trans-monoenoic',
		unit: 'g'
	},
	695: {
		name: 'Fatty acids, total trans-polyenoic',
		unit: 'g'
	},
	696: {
		name: 'Starch',
		unit: 'g'
	},
	697: {
		name: 'Starch',
		unit: 'g'
	},
	851: {
		name: 'ALA, omega-3 alpha-linolenic acid',
		unit: 'g'
	},
	852: {
		name: 'Starch',
		unit: 'g'
	},
	853: {
		name: 'Starch',
		unit: 'g'
	},
	855: {
		name: 'Starch',
		unit: 'g'
	},
	856: {
		name: 'Starch',
		unit: 'g'
	},
	857: {
		name: 'Starch',
		unit: 'g'
	},
	858: {
		name: 'Starch',
		unit: 'g'
	},
	859: {
		name: 'Starch',
		unit: 'g'
	}
};

export default nutrient_names;
