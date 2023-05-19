// /* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
}

function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
testMe(); // what order should these log out? Howdy or Partnah first?


/* CHALLENGE 2 */

function delayedGreet() {
    // ADD CODE HERE
    setTimeout(function () {
        console.log("welcome")
    }, 3000)
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome


// /* CHALLENGE 3 */

function helloGoodbye() {
    // ADD CODE HERE
    console.log("hello");
    setTimeout(() => {
        console.log("good bye")
    }, 2000)
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


// /* CHALLENGE 4 */

function brokenRecord() {
    // ADD CODE HERE
    setInterval(() => {
        console.log("hi again")
    }, 1000)
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again


// /* CHALLENGE 5 */

function limitedRepeat() {
    // ADD CODE HERE
    let counter = 0
    let timer = setInterval(() => {
        console.log("hi for now")
        counter++
        if (counter >= 5) {
            clearInterval(timer)
        }
    }, 1000)
}
// // Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now


// /* CHALLENGE 6 */

function everyXsecsForYsecs(func, interval, duration) {
    // ADD CODE HERE
    let repeatitive = setInterval(func, interval * 1000)
    setTimeout(() => {
        clearInterval(repeatitive)
    }, duration * 1000)
}
// Uncomment the following lines to check your work!
function theEnd() {
    console.log('This is the end!');
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


// /* CHALLENGE 7 */

function delayCounter(target, wait) {
    let num = 1
    return function () {
        let timer = setInterval(() => {
            console.log(num)
            num++
            if (num > target) {
                clearInterval(timer)
            }
        }, wait)
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const countLogger = delayCounter(3, 1000)
countLogger();
// // After 1 second, log 1
// // After 2 seconds, log 2
// // After 3 seconds, log 3

// /* CHALLENGE 8 */

function promised(val) {
    // ADD CODE HERE
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(val)
        }, 2000)
    })
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val));
// // will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {

    constructor(cb) {
        // ADD CODE HERE
        this.cb = cb
    }
    // ADD METHODS HERE
    start() {
        let counter = 0
        this.timer = setInterval(() => {
            counter++
            this.cb(counter % 60)
        }, 1000)
    }
    reset() {
        clearInterval(this.timer)
    }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => { console.log(val) });
console.log("Started Clock.");
clock.start();
setTimeout(() => {
    clock.reset();
    console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
    // ADD CODE HERE
    let timer = 0
    let int
    return function () {
        if (timer <= 0) {
            timer = interval
            int = setInterval(() => timer -= 500, 500)
            return callback()
        }
    }

}

// UNCOMMENT THESE TO TEST YOUR WORK!
function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
console.log(giveHiSometimes()); // -> 'hi'
setTimeout(function () { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function () { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function () { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

