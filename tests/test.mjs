
function test(description) {

    console.log(description);

    return {
        isEqual,
        doesNotThrowError
    }
}

function doesNotThrowError(testFunction, description) {

    try {
        testFunction();
        console.log(`🟢 ${description}`);
    } catch (error) {
        console.log(error);
        console.log(`🔴 ${description}`)
    }

}


function isInRange(received, expectedLowerBound, expectedUpperBound, description) {

    if (received >= expectedLowerBound && received <= expectedUpperBound) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, received ${received}`);
    }

}

function isEqual(received, expected, description) {

    if (received === expected) {
        console.log(`🟢 ${description}`);
    } else {
        console.log(`🔴 ${description}. Expected ${expected}, received ${received}`);
    }

}

export default test