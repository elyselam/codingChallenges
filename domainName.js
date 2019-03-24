// Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url){
	const firstSplit = url.split("//");
	console.log(firstSplit[firstSplit.length - 1])
	
	//split at .com
	const secondSplit = firstSplit[firstSplit.length - 1].split('.');
	console.log(secondSplit)
	
	secondSplit.pop();
  
	return secondSplit[secondSplit.length-1];
  } 
  
  
  
  console.log(domainName("http://github.com/carbonfive/raygun")); // 'github'
  console.log(domainName("http://www.zombie-bites.com")); // 'zombie-bites'
  console.log(domainName("https://www.cnet.com")); // 'cnet'
  console.log(domainName("icann.org")); // 'icann'