/* Search tool
On Unix systems, there is a command line tool called grep that can be used to
quickly search files for a regular expression.
Write a Node script that can be run from the command line and acts somewhat like 
grep. It treats its first command line argument as a regular expression
and treats any further arguments as files to search. It should output the names
of any file whose content matches the regular expression.
When that works, extend it so that when one of the arguments is a directory,
it searches through all files in that directory and its subdirectories.
Use asynchronous or synchronous file system functions as you see fit. Setting
things up so that multiple asynchronous actions are requested at the same time
might speed things up a little, but not a huge amount, since most file systems
can read only one thing at a time. */

const { readFileSync } = require('fs');
const { resolve, sep } = require("path");
const { stat, readdir } = require("fs").promises;
const baseDirectory = process.cwd();
let regex = undefined;
let count = 2;

// Index 2 holds the first actual command line argument
if (process.argv[count]) {
    regex = new RegExp(process.argv[count]);
    if (regex) {
        count++;
    } else {
        console.log('Invalid Regular Expression');
        process.exit(0);
    }
} else {
    console.log('No Regular Expression Supplied. Please try again!');
    process.exit(0);
}

while (process.argv[count] !== undefined) {
    run();
    count++;
}


function urlPath(path) {
    const absolutePath = resolve(path);
    if (absolutePath != baseDirectory && !absolutePath.startsWith(baseDirectory + sep)) {
        console.log("Forbidden!");
        process.exit(0);
    }
    return absolutePath;
}

async function checkAndReadFile(path) {
    const absolutePath = urlPath(path);
    let stats;
    try {
        stats = await stat(absolutePath);
    } catch (error) {
        if (error.code != "ENOENT") {
            console.log(error);
            process.exit(0);
        }
        else {
            console.log("File not found");
            process.exit(0);
        }
    }
    if (stats.isDirectory()) {
        const fileList = await readdir(absolutePath);
        for (const file of fileList) {
            const filePath = absolutePath + sep + file;
            try {
                const data = readFileSync(filePath, 'utf-8');
                const match =  regex.test(data);
                if (match) {
                    console.log(`A match for your regular expression has been found at file: ${filePath}`);
                }
            } catch (error) {
                console.log('Some error occured. Please try again later');
                process.exit(0);
            }
        }
    } else {
        const filePath = absolutePath;
        try {
            const data = readFileSync(filePath, 'utf-8');
            const match = regex.test(data);
            if (match) {
                console.log(`A match for your regular expression has been found at file: ${filePath}`);
            }
        } catch (error) {
            console.log('Some error occured. Please try again later');
            process.exit(0);
        }
    }
}

function run() {
    const path = process.argv[count];
    checkAndReadFile(path);
}