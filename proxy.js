const courseDetail = {
	name: "DSA",
	time: "6 months",
	status: "Ongoing",
}

const handler = {
deleteProperty(target, prop) {
	if (prop in target) {
	delete target[prop];
	console.log(`Removed: ${prop}`);
	}
}
};

const pro = new Proxy(courseDetail, handler);

console.log(pro.name);
delete pro.name
console.log(pro.name);
