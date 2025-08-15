const dns = require('dns')

dns.lookup("gmail.com", (err, address, family)=>{
    console.log(err, address, family)
})

const crypto = require('crypto');
const { url } = require('inspector');
const { constrainedMemory } = require('process');
// Function to hash data using SHA-256
function hashData(data) {
    const hash = crypto.createHash('sha256'); // Create a SHA-256 hash object
    hash.update(data); // Update hash with the data
    return hash.digest('hex'); // Return the hash in hexadecimal format
}
// Example usage
const dataToHash = 'https://google.com/ad';
const hashedData = hashData(dataToHash);
console.log(`Hashed Data: ${hashedData}`)








