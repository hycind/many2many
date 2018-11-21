let customers = [
    { id: 1, name: "Agnes Dinges", products: [35, 40, 2, 31, 11, 19, 28] },
    { id: 2, name: "Alethia Gilham", products: [15, 32, 13, 27, 13, 16, 13, 38] },
    { id: 3, name: "Angelika Matte", products: [40, 19, 12, 31, 14] },
    { id: 4, name: "Annamae Bloss", products: [16, 11, 28, 5, 16, 38] },
    { id: 5, name: "Arlinda Conkling", products: [36, 36, 29, 30, 29, 27] },
    { id: 6, name: "Athena Savidge", products: [35, 38, 14] },
    { id: 7, name: "Billie Andrus", products: [14, 33, 39, 38] },
    { id: 8, name: "Bobbye Zeck", products: [8, 19] },
    { id: 9, name: "Booker Langevin", products: [28] },
    { id: 10, name: "Celeste Hannigan", products: [40, 20, 2, 14, 3] },
    { id: 11, name: "Charmain Palombo", products: [36, 39, 17, 15, 7] },
    { id: 12, name: "Cheri Catalan", products: [31, 6, 26, 16, 5, 22] },
    { id: 13, name: "Cherryl Craner", products: [4, 36, 9, 37] },
    { id: 14, name: "Chrissy Paiz", products: [2, 36, 22] },
    { id: 15, name: "Corine Holen", products: [6, 17, 5, 14, 20, 14] },
    { id: 16, name: "Cristine Dragoo", products: [1] },
    { id: 17, name: "Daina Scarpa", products: [32, 40] },
    { id: 18, name: "Daniela Giron", products: [15, 28, 22] },
    { id: 19, name: "Deetta Strayer", products: [22, 13, 5, 18, 25, 7, 31, 17, 6, 7] },
    { id: 20, name: "Deja Backhaus", products: [34, 9, 13, 30, 21] },
    { id: 21, name: "Dina Malcolm", products: [12, 29, 35, 32, 27, 25, 38, 12] },
    { id: 22, name: "Dominique Saiz", products: [32, 19, 24, 6, 7, 19, 24] },
    { id: 23, name: "Dorian Savala", products: [28, 32, 9, 8, 3, 24, 27, 13] },
    { id: 24, name: "Dorine Mazzone", products: [39, 7, 6] },
    { id: 25, name: "Drusilla Coots", products: [16, 27, 2, 35, 36, 20] },
    { id: 26, name: "Dwight Beaston", products: [33, 6, 8, 18, 6, 18] },
    { id: 27, name: "Elise Laboy", products: [31, 35, 8, 5, 13] },
    { id: 28, name: "Enedina Krohn", products: [14, 9, 10, 17, 40, 22] },
    { id: 29, name: "Eveline Stearn", products: [39, 27, 20, 6, 39] },
    { id: 30, name: "Fae Cusimano", products: [8, 33, 18, 23, 38, 18, 9] },
    { id: 31, name: "Fannie Witman", products: [36, 21, 9, 10] },
    { id: 32, name: "Gabriella Imler", products: [9, 29, 27, 15, 12, 15, 26, 22, 5, 4] },
    { id: 33, name: "Gerda Olive", products: [22, 24, 20] },
    { id: 34, name: "Glenda Salo", products: [40, 20, 7, 22, 8] },
    { id: 35, name: "Hollis Grady", products: [27, 34, 37, 30, 30] },
    { id: 36, name: "Hugh Martz", products: [11, 2, 24, 8, 15, 12, 38, 14, 23] },
    { id: 37, name: "Hyman Greenburg", products: [27, 5, 26, 34, 10, 17, 35, 35, 38] },
    { id: 38, name: "Ivette Zumwalt", products: [26, 35, 8, 23, 12, 8, 12, 32, 2, 27] },
    { id: 39, name: "Janie Gassett", products: [18, 6, 7, 14, 13, 36, 18, 12, 15, 8] },
    { id: 40, name: "Jasmin Dekker", products: [14, 20, 3] },
    { id: 41, name: "Jeane Eide", products: [12, 21, 35, 4] },
    { id: 42, name: "Jeanie Choiniere", products: [32, 15] },
    { id: 43, name: "Jeannette Spaeth", products: [40] },
    { id: 44, name: "Jerrie Glavin", products: [17, 28, 14, 23, 24, 2] },
    { id: 45, name: "John Crowther", products: [34, 38, 33] },
    { id: 46, name: "Jordon Townson", products: [18, 37, 4, 26, 13, 22, 19, 36, 40, 9] },
    { id: 47, name: "Josiah Feagins", products: [14, 33, 38, 33, 29, 37, 12, 36] },
    { id: 48, name: "Kaitlin Whipps", products: [13, 13, 28, 20, 34, 23, 16, 19, 17] },
    { id: 49, name: "Kate Dahlgren", products: [29, 25, 35, 32, 23, 10] },
    { id: 50, name: "Kelvin Hadsell", products: [25, 11, 32, 35, 34, 37, 5] },
    { id: 51, name: "Khalilah Withers", products: [1] },
    { id: 52, name: "Kimberlie Dombroski", products: [22, 34, 3, 12, 17, 11, 20, 26, 27] },
    { id: 53, name: "Leeanna Foutz", products: [35, 24, 14, 6, 16, 39, 20, 38, 25] },
    { id: 54, name: "Lenore Deady", products: [17, 6] },
    { id: 55, name: "Lianne Severance", products: [14, 3, 5, 22] },
    { id: 56, name: "Ling Fallen", products: [15, 37, 30, 2, 24, 34, 33, 3, 2, 4] },
    { id: 57, name: "Margarette Lavery", products: [20, 31, 1, 3, 31, 26, 1] },
    { id: 58, name: "Margherita Whisman", products: [7, 35] },
    { id: 59, name: "Melvina Gaytan", products: [34, 19, 29, 31, 12, 21, 37, 39, 1, 35] },
    { id: 60, name: "Michael Ly", products: [30, 25, 8, 21] },
    { id: 61, name: "Missy Wurtz", products: [16, 4] },
    { id: 62, name: "Mitzie Bliss", products: [31, 31, 21, 39, 10, 17, 6, 34, 1, 11] },
    { id: 63, name: "Modesto Nishida", products: [10, 33, 25, 24, 30, 2] },
    { id: 64, name: "Myra Palmore", products: [34, 1, 35, 18, 15, 23] },
    { id: 65, name: "Myrtice Dowler", products: [18, 7, 2, 2, 13, 7, 19, 36, 33, 28] },
    { id: 66, name: "Nickie Siegle", products: [10, 21] },
    { id: 67, name: "Nidia Jeter", products: [26, 16, 6, 35, 35, 8, 34, 12, 40, 29] },
    { id: 68, name: "Nubia Voges", products: [19, 6, 8] },
    { id: 69, name: "Octavia Cabello", products: [35, 24, 23, 11, 3, 30, 22] },
    { id: 70, name: "Pablo Forgey", products: [9, 2, 13, 37, 14] },
    { id: 71, name: "Patrica Whittier", products: [30, 9, 25, 15] },
    { id: 72, name: "Pearlie Sowell", products: [14, 26, 3, 39, 38, 28, 34] },
    { id: 73, name: "Pearline Saracino", products: [24, 40, 26, 19, 3, 6] },
    { id: 74, name: "Rachelle Sitz", products: [28, 18, 12, 12, 34, 7, 2, 24, 29] },
    { id: 75, name: "Ramiro Isreal", products: [19, 26, 11, 9, 5, 23, 9, 11] },
    { id: 76, name: "Randal Pipes", products: [34, 23, 37, 34, 18] },
    { id: 77, name: "Reyes Wile", products: [18, 20, 31, 7, 21, 15, 39, 18, 32] },
    { id: 78, name: "Rima Cromer", products: [12, 16, 5] },
    { id: 79, name: "Rosalina Vallance", products: [6, 9, 27] },
    { id: 80, name: "Roscoe Castaneda", products: [1, 12, 29, 5, 5, 5] },
    { id: 81, name: "Rossana Kerman", products: [4] },
    { id: 82, name: "Seth Songer", products: [30, 40, 27, 16, 26, 4, 6, 9, 33] },
    { id: 83, name: "Shad Kemper", products: [26, 2, 14, 12, 5, 11] },
    { id: 84, name: "Shala Marotta", products: [29, 23, 30, 19, 1, 4] },
    { id: 85, name: "Shanelle Riggin", products: [14, 9, 13, 13, 18, 22, 30, 28] },
    { id: 86, name: "Shantay Braga", products: [27, 28, 36, 37, 33] },
    { id: 87, name: "Shawanda Cayetano", products: [9, 30, 36, 1, 26, 27] },
    { id: 88, name: "Shela Jacinto", products: [34, 29] },
    { id: 89, name: "Shirl Bischof", products: [14, 38, 28] },
    { id: 90, name: "Sulema Restivo", products: [2, 17, 7, 1, 17, 23, 15] },
    { id: 91, name: "Sylvia Ellard", products: [30, 24, 25, 1, 11, 22] },
    { id: 92, name: "Tequila Bondy", products: [34, 13] },
    { id: 93, name: "Theresa Reichenbach", products: [29, 6, 19, 2, 30, 16, 31] },
    { id: 94, name: "Treva Pankow", products: [25, 13, 11, 17, 14, 2, 20, 39, 28] },
    { id: 95, name: "Vena Brundidge", products: [13, 9, 3, 19, 40, 33, 13, 34, 29] },
    { id: 96, name: "Vera Northup", products: [1, 34, 9, 29, 8, 18, 34, 38, 23] },
    { id: 97, name: "Wanita Ruzicka", products: [3, 9, 13, 16, 1, 11, 35, 2, 34] },
    { id: 98, name: "Willie Manriquez", products: [39, 33, 8] },
    { id: 99, name: "Windy Lossett", products: [32, 2, 9, 18, 17, 26, 40, 23] },
    { id: 100, name: "Yajaira Mazur", products: [30, 9, 24, 39, 9, 6, 19, 10] },

];
let products = [
    { id: 1, name: "Apache Records", customers: [] },
    { id: 2, name: "Auragate", customers: [] },
    { id: 3, name: "Cavestones", customers: [] },
    { id: 4, name: "Cavologies", customers: [] },
    { id: 5, name: "Cliffoods", customers: [] },
    { id: 6, name: "Cliffway", customers: [] },
    { id: 7, name: "Cruxolutions", customers: [] },
    { id: 8, name: "Electrorks", customers: [] },
    { id: 9, name: "Enigmotors", customers: [] },
    { id: 10, name: "Forestway", customers: [] },
    { id: 11, name: "Frostfire Navigations", customers: [] },
    { id: 12, name: "Gale", customers: [] },
    { id: 13, name: "Gnomehead", customers: [] },
    { id: 14, name: "Gorillaworld", customers: [] },
    { id: 15, name: "Grottoair", customers: [] },
    { id: 16, name: "Hammermobile", customers: [] },
    { id: 17, name: "Hurricanetworks", customers: [] },
    { id: 18, name: "Imaginavigations", customers: [] },
    { id: 19, name: "Leopardworks", customers: [] },
    { id: 20, name: "Mars Corporation", customers: [] },
    { id: 21, name: "Mazecurity", customers: [] },
    { id: 22, name: "Mercury Coms", customers: [] },
    { id: 23, name: "Moonlight Technologies", customers: [] },
    { id: 24, name: "Nimbletainment", customers: [] },
    { id: 25, name: "Oakbridge", customers: [] },
    { id: 26, name: "Oysterwood", customers: [] },
    { id: 27, name: "Peach Aviation", customers: [] },
    { id: 28, name: "Pluto Foods", customers: [] },
    { id: 29, name: "Pride Systems", customers: [] },
    { id: 30, name: "Priductions", customers: [] },
    { id: 31, name: "Pumpkin Microsystems", customers: [] },
    { id: 32, name: "Questindustries", customers: [] },
    { id: 33, name: "Questindustries", customers: [] },
    { id: 34, name: "Sharkfin Entertainment", customers: [] },
    { id: 35, name: "Smartland", customers: [] },
    { id: 36, name: "Tulipnite", customers: [] },
    { id: 37, name: "Tundracoustics", customers: [] },
    { id: 38, name: "Twister", customers: [] },
    { id: 39, name: "Wavigations", customers: [] },
    { id: 40, name: "Witchystems", customers: [] },
];


Array.prototype.contains = function (v) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
}
// remoe duplicates from customer array
var duplicates = [1, 3, 4, 2, 1, 2, 3, 8];
var uniques = duplicates.unique(); // result = [1,3,4,2,8]
customers.forEach(element => {
    let buffer = element.products
    element.products = buffer.unique();
});

var db = [];
var cs = [];
var pr = [];
customers.forEach(customer => {
    customer.products.forEach(product => {
        let obj = {};
        obj.custid = customer.id;
        obj.custname = customer.name;
        obj.prodid = product;
        obj.prodname = products.find(el => el.id === product).name;
        // console.log(product)
        // console.log(JSON.stringify(obj))
        // let prd = products.find(el=>el.id===product);
        db.push(obj)
    });
    cs.push({
        id: customer.id,
        name: customer.name
    });
});
products.forEach(product => {
    pr.push({
        custid: -1,
        custname: '~',
        prodid:product.id,
        prodname:product.name
    });
});
// db.forEach(el => {
//     console.log(JSON.stringify(el), ',')
// });
// cs.forEach(el => {
//     console.log(JSON.stringify(el), ',')
// });
pr.forEach(el => {
    console.log(JSON.stringify(el), ',')
});
// customers.forEach(customer => {
//     // console.log(`customer: ${customer.id}`)
//     customer.products.forEach(product => {
//         // console.log(`product: ${product}`)
//         products.forEach(prod => {
//             if (prod.id === product) {
//                 prod.customers.push(customer.id)
//             }
//         });
//     });
// });

// customers.forEach(element => {
//     console.log(JSON.stringify(element, null, 2))
// });

// products.forEach(element => {
//     console.log(JSON.stringify(element, null, 2))
// });
