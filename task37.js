function make_Shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("A ".concat(size, "-sized shirt will be printed with the message: \"").concat(message, "\"."));
}
make_Shirt();
make_Shirt('Medium');
make_Shirt('Small', 'JavaScript is fun!');
