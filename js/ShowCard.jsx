// @flow
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// Introducing styled components
const Wrapper = styled(Link)`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
    color: black;
    text-decoration: none;
`

const Image = styled.img`
    width: 46%;
    float: left;
    margin-right: 10px;
`

const ShowCard = (props: {show: {poster: string, title: string, year: string, description: string}}) => (

        <Wrapper to={`/details/${props.show.imdbID}`}>
        <div className='show-card'>
            <Image alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
            <div>
                <h3>{props.show.title}</h3>
                <h4>({props.show.year})</h4>
                <p>{props.show.description}</p>
            </div>
        </div>
        </Wrapper>
)

export default ShowCard; 