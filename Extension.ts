namespace Something {

    const https = require('https');


    //% block="foo name $name"
    export function test(name: string) {
        console.log('hello!')
        https.get('https://localhost:5001', r => console.log('it worked!'))
    }



}