setTimeout(() => console.log("Tick"), 2000);


import {bigOak} from "./crow-tech";
bigOak.readStorage("food caches", caches => {
    let firstCache = caches[0];
    bigOak.readStorage(firstCache, info => {
        console.log(info);
    });
});

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", 
    () => console.log("Note delivered.")
);

import {defineRequestType} from "./crow-tech";
defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
});