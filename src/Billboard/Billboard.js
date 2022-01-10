import React from 'react'
import './Billboard.css'
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Billboard = ({ billboard }) => {
    const genres = billboard.genres.map((x) => x.name).join(", ");

    return (
        <section className='billboard' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${billboard.backdrop_path}`
        }}>
            <div className='billboardHorizontal'>
                <div className='billboardVertical'>
                    <div className="billboardTitle">{billboard.name}</div>
                    <div>
                        <div className="billboardRate">{billboard.vote_average + " puntos"}</div>
                        <div className="billboardYear">{billboard.first_air_date.split("-")[0]}</div>
                        <div className="billboardSeasons">{billboard.number_of_seasons > 1 ? billboard.number_of_seasons + " temporadas" : "1 temporada"}</div>
                    </div>
                    <div className="billboardOverview">{billboard.overview}</div>
                    <div className="billboardButtons">
                        <button className="billboardButtonPlay"><div><PlayArrowIcon /></div><span>Reproducir</span></button>
                        <button className='billboardButtonInfo'><div><InfoIcon /></div><span>Más información</span></button>
                    </div>
                    <div className="billboardGenres"><strong>Géneros: </strong>{genres}</div>
                </div>
            </div>
        </section>
    )
}

export default Billboard
