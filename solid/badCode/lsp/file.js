class File{
    read(){
        console.log("Reading file");
    }

    write(){
        console.log("Writing to file");
    }

}

class ReadOnlyFile extends File {
    write() {
        throw new Error('Cannot write to read-only file.');
    }
}

//usage

const file = new File();
file.read(); // "Reading file"
file.write(); // "Writing to file"

const roFile = new ReadOnlyFile();
roFile.read(); // "Reading file"
try {
    roFile.write(); // throws error

} catch (e) {
  console.log(e.message);
} // "Cannot write to read-only file."
