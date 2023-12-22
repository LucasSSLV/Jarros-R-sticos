import PropTypes from 'prop-types';


export default function Title({name}) {        
  return (
    <div className='title'><h1>{name}</h1></div>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired
}