console.log("111");	

var importObject = { imports: { imported_func: arg => console.log(arg) } };
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());

console.log("222");	
