// example of normal (not using async)
function gstNumber1() {
    return 42;
}

const res = gstNumber1()

console.log(res);

// using async
async function getNumber() {
    return 42; // same as Promise.resolve(42)
}

async function main() {
    try {
        console.log("Loading...");

        const result = await getNumber();

        console.log("Result:", result);
    } catch (err) {
        console.log("Error:", err);
    } finally {
        console.log("Done (loading off)");
    }
}

main();

const arrow = async () =>{
    return 45;
}

console.log(arrow());
