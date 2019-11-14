import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'

// Introducing styled components
const Wrapper = styled.div`
    width: 32%;
    border: 2px solid #333;
    border-radius: 4px;
    margin-bottom: 25px;
    padding-right: 10px;
    overflow: hidden;
`

const ShowCard = props => (
    <Wrapper>
        <div className='show-card'>
            <img alt={`${props.show.title} Show Poster`} src={`/public/img/posters/${props.show.poster}`} />
            <div>
                <h3>{props.show.title}</h3>
                <h4>({props.show.year})</h4>
                <p>{props.show.description}</p>
            </div>
        </div>
    </Wrapper>
)

// Prop Types, not required but fixes lint errors
ShowCard.propTypes = {
    show: shape({
        poster: string.isRequired,
        title: string.isRequired,
        year: string.isRequired,
        description: string.isRequired
    }).isRequired
}
export default ShowCard; 