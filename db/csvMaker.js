const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
	path: './seed.csv',
	header: [
		{ id: 'id', title: 'ID' },
		{ id: 'brand', title: 'BRAND' },
		{ id: 'name', title: 'NAME' },
		{ id: 'photo', title: 'PHOTO' },
		{ id: 'rating', title: 'RATING' },
		{ id: 'price', title: 'PRICE'},
		{ id: 'category', title: 'CATEGORY' }
	]
});



const randomElement = (array) => {
	var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

// const photo = ["https://images.homedepot-static.com/productImages/bf48d785-b731-444f-9697-0410b47cb168/svn/brush-glacier-bay-drop-in-kitchen-sinks-vt3322g2-64_400_compressed.jpg", "https://images.homedepot-static.com/productImages/c275d0bb-5e98-412c-b1b1-8726fd1f1477/svn/dewalt-claw-hammers-dwht51054-64_400_compressed.jpg", "https://images.homedepot-static.com/catalog/productImages/400_compressed/f1/f1030200-869b-4a6d-8842-88cb0b5cb57b_400_compressed.jpg", "https://images.homedepot-static.com/productImages/a9958075-278f-4356-b5ee-c364db3569bb/svn/toro-self-propelled-lawn-mowers-20378-64_400_compressed.jpg", "https://images.homedepot-static.com/productImages/e9e9d5b5-2d22-437f-9bfe-35dcc5dea426/svn/milwaukee-screwdriver-sets-48-22-2718-64_400_compressed.jpg", "https://images.homedepot-static.com/productImages/19e2c166-9243-4620-9a06-b3aea36d0b64/svn/makita-wheelbarrows-xuc01x1-64_400_compressed.jpg", "https://images.homedepot-static.com/productImages/77f189b9-c500-4377-ba32-768c703dfbc9/svn/dewalt-circular-saws-dcs391b-64_400_compressed.jpg", "https://images.homedepot-static.com/productImages/e5c32a52-b8de-4a0a-ba56-2b5d1b676307/svn/dewalt-reciprocating-saws-dwe305-64_400_compressed.jpg", "https://images.homedepot-static.com/productImages/3358ffa5-7248-42b2-85c4-67c1a0901e22/svn/vigoro-wood-mulch-480978-64_400_compressed.jpg", "https://images.homedepot-static.com/catalog/productImages/400_compressed/c9/c9451ee5-f202-494c-90bd-eed50a9c8daa_400_compressed.jpg"]

const generateRandProduct = () => {
	const brand = ["DeWalt", "LG Electronics", "RIGID", "Kenmore", "Husky", "Estwing", "HDX", "ANVIL", "Crescent", "Klein Tools"]
	const name = ["20 oz. Hammer", "20-Volt MAX Lithium-Ion Cordless 1/2 in. Drill/Driver Kit", "French Door Refrigerator in Fingerprint Resistant Stainless Steel", "40-Volt Brushless Lithium-Ion Cordless Battery Push Lawn Mower", "Recycler 22 in. SmartStow Variable Speed Self Propelled Lawn Mower", "20-Volt 6-1/2 in. MAX Lithium-Ion Cordless Circular Saw (Tool-Only)", "Saw-Max 6 Amp Tool Kit for Wood, Plastic and Metal with 2 Blades", "15 Amp Corded 12 in. Sliding Miter Saw with Laser", "M4 4-Volt Lithium-Ion Cordless 1/4 in. Hex Screwdriver 2-Battery Kit", "6 cu. ft. Wheelbarrow with Steel Handles and Flat Free Tire", "179cu. in. BBQ Hickory Wood Chips", "All-in-One Dual Mount Stainless Steel 33 in. Double Bowl Kitchen Sink"]
	const photo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const rating = [5, 4, 3, 2, 3.5, 4.5, 4.75, 3.75, 2.75, 2.5];
	const price = ["112.11", "5.47", "690.55", "39.99", "129.00", "58.93", "264.00", "3299.00", "269.00", "2249.00", "34.92"];
	const category = ['tools', 'garden', 'appliances', 'kitchen', 'electronics', 'automobile'];
    return {
        name: randomElement(name),
        brand: randomElement(brand),
        price: randomElement(price),
        rating: randomElement(rating),
		photo: randomElement(photo),
		category: randomElement(category)
    }
};

function save (start) {
  const end = start + 100000;
	const products = [];
	const categoryPairs = [];
	
  for (let i = start; i < end; i++) {
		product = generateRandProduct();
		product.id = i;
		products.push(product);
	}
	
	csvWriter.writeRecords(products)       // returns a promise
	.then(() => {
		if (end < 10000000) {
			save(end);
		} else {
			console.log("Products written to csv file!");
		}
	})
}

save(1);