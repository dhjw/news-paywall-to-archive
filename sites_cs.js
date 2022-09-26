console.log('np2a: sites_cs.js loaded')

var rx = [
	'^(https://www.bloomberg.com/news/[^?#]*)',
	'^(https://www.forbes.com/sites/[^?#]*)',
	'^(https://foreignpolicy.com/\\d{4}/\\d{2}/\\d{2}/.*?/)',
	'^https://www.heraldsun.com.au/subscribe/news/.*&dest=([^&]*)',
	'^(https://www.nationalgeographic.com/[^/]*/article/[^?#]*)',
	'^(https://www.nytimes.com/.*\.html)',
	'^(https://www.telegraph.co.uk/[^/]*?/\\d{4}/\\d{2}/\\d{2}/.*?/)',
	'^https://www.theaustralian.com.au/subscribe/news/.*&dest=([^&]*)',
	'^(https://www.theepochtimes.com/.*\.html)',
	'^(https://www.thetimes.co.uk/article/[^?#]*)',
	'^(https://www.washingtonpost.com/[^/]*?/\\d{4}/\\d{2}/\\d{2}/.*?/)',
	'^(https://www.washingtontimes.com/news/\\d+/\\w{3}/\\d+/.*?/)',
	'^(https://www.wsj.com/articles/[^?#]*)',

], m

for (let i = 0; i <= rx.length; i++) {
	console.log('np2a: checking ', rx[i]);
	m = location.href.match(rx[i])
	if (m && m[1]) {
		console.log('np2a: match, redirecting to archive')
		console.log('np2a: loading https://archive.ph/' + m[1] + '#np2a-load')
		location.href = 'https://archive.ph/' + m[1] + '#np2a-load'
		break
	}
}
if (!m || !m[1]) console.log('np2a: no match, not redirecting to archive')

