import React from 'react'
import Mediacard from './Mediacard';
import photo1 from '../images/anna.png';
import photo2 from '../images/bianca.png';
import photo3 from '../images/ellie.jpg';




class MediaList extends React.Component {

  render () {

    return (
      <React.Fragment>
          <Mediacard name='Anna Branco' bday={20} bmonth={8} byear={1981} photo={photo1} text='At eu hendrerit exerci nostrud duis ut velit eum aliquip augue nulla. Ea ullamcorper vero ad ut consequat eum sed nostrud blandit esse et dignissim lobortis magna, in iriure in tation duis delenit. Suscipit, autem aliquip ut vero hendrerit commodo veniam blandit. Aliquip eros nisl eu augue ad elit eros adipiscing accumsan. Eum, nonummy crisare dolore molestie.' likes={1} heart='full' />

          <Mediacard name='Bianca Branco' bday={20} bmonth={1} byear={2018} photo={photo2} text='At eu hendrerit exerci nostrud duis ut velit eum aliquip augue nulla. Ea ullamcorper vero ad ut consequat eum sed nostrud blandit esse et dignissim lobortis magna, in iriure in tation duis delenit. Suscipit, autem aliquip ut vero hendrerit commodo veniam blandit. Aliquip eros nisl eu augue ad elit eros adipiscing accumsan. Eum, nonummy crisare dolore molestie.' likes={1} heart='full' />

           <Mediacard name='Ellie Branco' bday={30} bmonth={3} byear={2018} photo={photo3} text='At eu hendrerit exerci nostrud duis ut velit eum aliquip augue nulla. Ea ullamcorper vero ad ut consequat eum sed nostrud blandit esse et dignissim lobortis magna, in iriure in tation duis delenit. Suscipit, autem aliquip ut vero hendrerit commodo veniam blandit. Aliquip eros nisl eu augue ad elit eros adipiscing accumsan. Eum, nonummy crisare dolore molestie.' likes={1} heart='full' />
      </React.Fragment>
    );
  }

}

export default MediaList;
