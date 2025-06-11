

import Script from 'next/script';



export default function Video() {
    return (
        <div className='w-full border-2 border-gray-300 rounded-lg' style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <Script src="https://player.vimeo.com/api/player.js" />
            <iframe src={`https://player.vimeo.com/video/1086624440?h=35852862a4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} title="Lilly | Australia - Instructional Video - EBGLYSS Pre-filled Pen Administration Guide" />
        </div>
    )
}   