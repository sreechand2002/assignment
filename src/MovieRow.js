import React from 'react';
import { Item, Label } from 'semantic-ui-react';
class MovieRow extends React.Component {
  viewMovie() {
    const url = 'https://www.themoviedb.org/movie/' + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <Item.Group>
        <Item style={{ padding: '2rem', backgroundColor: 'gray', maxWidth: '720px', margin: '1rem auto', borderRadius: '5%' }}>
          <Item.Image size='small' src={this.props.movie.poster_src} />

          <Item.Content>
            <Item.Header as='a'>{this.props.movie.title}</Item.Header>

            <Item.Description>{this.props.movie.overview} </Item.Description>
            <Item.Extra>
              <Label>Release date:{this.props.movie.release_date}</Label>
              <Label>Rating: {this.props.movie.vote_average}</Label>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default MovieRow;
