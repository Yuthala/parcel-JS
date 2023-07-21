const obj = {
	message: {
		value: "hello from local Object"
	}
}

export default function Log() {
	console.log(obj?.message?.value);
}