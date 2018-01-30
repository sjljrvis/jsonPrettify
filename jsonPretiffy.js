
module.exports = class Pretiffy {
	constructor(uglyString) {
		this.uglyString = uglyString
	}
	prettyJson() {
		let stack = this.uglyString.split("");
			let temp = [];
			let indentation = 0;
			let count = 0;
			stack.map((x) => {
				switch (x) {
					case "{": indentation++;
						count = 0;
						temp.push(x + '\n');
						while (count < indentation) {
							temp.push("\t");
							count++
						}
						break;
					case "[": indentation++;
						count = 0;
						temp.push(x + '\n');
						while (count < indentation) {
							temp.push("\t");
							count++
						}
						break;
					case ",":
						count = 0;
						temp.push(x + '\n');
						while (count < indentation) {
							temp.push("\t");
							count++
						}
						break;
					case "]": indentation--;
						count = 0;
						temp.push('\n');
						while (count < indentation) {
							temp.push("\t");
							count++
						}
						temp.push(x);
						break;
					case "}": indentation--;
						count = 0;
						temp.push('\n');
						while (count < indentation) {
							temp.push("\t");
							count++
						}
						temp.push(x);
						break;
					default: temp.push(x);
						break;
				}
			});
			return temp.join("*").replace(/[*]/g ,"");
	}
}
