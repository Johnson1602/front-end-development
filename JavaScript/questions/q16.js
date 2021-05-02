const list = [
	{
		province: "广东",
		city: "广州",
	},
	{
		province: "广东",
		city: "深圳",
	},
	{
		province: "浙江",
		city: "杭州",
	},
	{
		province: "浙江",
		city: "温州",
	},
];

const tree = [
	{
		name: "广东",
		citys: ["广州", "深圳"],
	},
	{
		name: "浙江",
		citys: ["杭州", "温州"],
	},
];

const toTree = (list) => {
	let tree = [];

	const map = new Map();
	list.forEach(item => {
		let prov = item.province;
		let city = item.city;
		if (map.has(prov)) {
			let cities = map.get(prov);
			if (cities.indexOf(city) === -1) {
				cities.push(city);
			}
		} else {
			map.set(prov, [city]);
		}
	})
	map.forEach((cities, prov) => {
		tree.push({
			name: prov,
			citys: cities
		})
	})

	return tree;
	};

	const toList = (tree) => {
		let list = [];

		tree.forEach(item => {
			let prov = item.name;
			let cities = item.citys;
			cities.forEach(city => {
				list.push({
					province: prov,
					city: city
				})
			})
		})

		return list;
	};

	console.log("toTree", toTree(list));
	console.log("toList", toList(tree));