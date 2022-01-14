base url =  https://api.musixmatch.com/ws/1.1/


https://api.musixmatch.com/ws/1.1/artist.related.get?artist_id=56&page_size=2&page=1&apikey=e0923e77c715a76152a0d46a1ecfd84b



q_track   -   search for a text string among song titles
q_artist   -  search for a text string among artist names
q_lyrics    - search for a text string among lyrics
q          -search for a text string among song titles,artist names and lyrics

Search for song

MVP : input[search by artist]
https://developer.musixmatch.com/documentation/api-reference/artist-search
artist.search?q_artist=

next step: find albums by that artist
https://developer.musixmatch.com/documentation/api-reference/artist-albums-get
artist.albums.get?artist_id=1039

3rd step: find related artists
https://developer.musixmatch.com/documentation/api-reference/artist-related-get
artist.related.get?artist_id=56
