console.log('np2a: archive_cs.js loaded')
console.log('np2a: hash=', location.hash)

// load latest archive, if exists
if (location.hash == '#np2a-load') {
	console.log('np2a: loading archive if exists')
	var as = document.querySelectorAll('div.THUMBS-BLOCK div a')
	if (as.length === 0) {
		console.log('np2a: no thumbs, do archive')
		var url = location.href.replace(/^https?:\/\/[^/]*\//,'').split('#')[0]
		location.href = 'https://archive.ph?url=' + url + '#np2a-create'
	} else {
		// click last archive
		as[as.length-1].click()
	}

// create, click save
} else if(location.hash == '#np2a-create') {
	console.log('np2a: clicking save to create archive')
	document.querySelector('input[type="submit"][value="save"]').click()
}
