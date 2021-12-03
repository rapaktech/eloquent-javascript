/* A public space on the web
Since the file server serves up any kind of file and even includes the 
right  Content -Type header, you can use it to serve a website. 
Since it allows everybody to delete and replace files, it would be 
an interesting kind of website: one that can be modified, improved, and 
vandalized by everybody who takes the time to create the right HTTP request.
Write a basic HTML page that includes a simple JavaScript file. Put the
files in a directory served by the file server and open them in your browser.
Next, as an advanced exercise or even a weekend project, combine all the
knowledge you gained from this book to build a more user-friendly interface
for modifying the website—from inside the website.
Use an HTML form to edit the content of the files that make up the website,
allowing the user to update them on the server by using HTTP requests, 
as described in Chapter 18.
Start by making only a single file editable. Then make it so that the user
can select which file to edit. Use the fact that our file server returns lists of
files when reading a directory.
Don’t work directly in the code exposed by the file server since if you make
a mistake, you are likely to damage the files there. Instead, keep your work
outside of the publicly accessible directory and copy it there when testing. */


const { createServer } = require("http");

const methods = Object.create(null);

createServer((request, response) => {
    let handler = methods[request.method] || notAllowed;

    handler(request)
    .catch(error => {
        if (error.status != null) return error;
        return { body: String(error), status: 500 };
}).then(({ body, status = 200, type = "text/html" }) => {
    response.writeHead(status, { "Content-Type": type });
    if (body && body.pipe) body.pipe(response);
    else response.end(body);
});

}).listen(8000, () => {
    console.log('Server is live!');
});


async function notAllowed(request) {
    return {
        type: 'text/plain',
        status: 405,
        body: `Method '${request.method}' not allowed.`
    };
}


const { resolve } = require("path");

function urlPath(path) {
    let absolutePath = resolve(path);
    return absolutePath;
}

const { readFileSync, createWriteStream, createReadStream } = require("fs");
const { stat } = require("fs").promises;

methods.GET = async function () {
    let path = urlPath('views/index.html');
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found"};
    }

    return {
        body: createReadStream(path)
    };
};


methods.POST = async function () {
    let path = urlPath('views/test.txt');
    let stats;
    try {
        stats = await stat(path);
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 404, body: "File not found"};
    }

    return {
        type: 'text/plain',
        body: readFileSync(path, 'utf-8'),
    };
};


function pipeStream(from, to) {
    return new Promise((resolve, reject) => {
        from.on("error", reject);
        to.on("error", reject);
        to.on("finish", resolve);
        from.pipe(to);
    });
}


methods.PUT = async function(request) {
    let path = urlPath('views/test.txt');
    try {
        await pipeStream(request, createWriteStream(path));
    } catch (error) {
        if (error.code != "ENOENT") throw error;
        else return {status: 500, type: 'text/plain', body: "Write error. Try again later"};
    }

    return {
        type: 'text/plain',
        body: "File updated successfully",
    };
}