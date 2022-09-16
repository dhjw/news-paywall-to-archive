console.log('np2a: sites_cs.js loaded')

var rx = [
	'^(https://www.bloomberg.com/news/[^?#]*)',
	'^(https://www.forbes.com/sites/[^?#]*)',
	'^https://www.heraldsun.com.au/subscribe/news/.*&dest=([^&]*)',
	'^(https://www.nytimes.com/.*\.html)',
	'^https://www.theaustralian.com.au/subscribe/news/.*&dest=([^&]*)',
	'^(https://www.theepochtimes.com/.*\.html)',
	'^(https://www.thetimes.co.uk/article/[^?#]*)',
	'^(https://www.washingtonpost.com/.*?/\\d+/\\d+/\\d+/.*?/)',
	'^(https://www.washingtontimes.com/news/\\d+/\\w{3}/\\d+/.*?/)',
	'^(https://www.wsj.com/articles/[^?#]*)',
	'^(https://foreignpolicy.com/\\d+/\\d+/\\d+/.*/)'

], m

for (let i = 0; i <= rx.length; i++) {
	m = location.href.match(rx[i])
	if (m && m[1]) {
		console.log('np2a: match, redirecting to archive')
		console.log('np2a: loading https://archive.ph/' + m[1] + '#np2a-load')
		location.href = 'https://archive.ph/' + m[1] + '#np2a-load'
		break
	}
}
if (!m || !m[1]) console.log('np2a: no match, not redirecting to archive')

