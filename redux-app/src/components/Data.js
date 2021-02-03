import React, { useEffect } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { getData } from '../actions';

const Container = styled.div `
  border: 1px solid #004c54;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 39vh;
  width: 89vw ;
  padding: 2rem;
  margin:  25vh auto;
  text-align: center;
  font-family: 'Langar', cursive;
`

const Fact = styled.h2`
  font-size: 5rem;
`

const Fetch = styled.h2 `
  font-size: 3rem;
  text-align: center;
`

const Button = styled.button `
  font-size: 4rem;
  background-color: #004c54;
  color: #acc0c6;
  font-family: 'Concert One', cursive;
  height:12rem;
  width: 40rem;
  border: 2px solid white;
  border-radius: 10px;
  float: bottom;
`


const Data = ({ data, isFetching, err, getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  if (err) {
    return <h2>Something's wrong: {err}</h2>;
  }

  if (isFetching) {
    return <Fetch>Fetching your data, hang tight!</Fetch>;
  }

  const handleClick = ()=> {
    getData();
  }

  return (
    <Container>
      <Fact>{data}</Fact>
      <Button onClick={handleClick}>Find Another Fact</Button>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getData})(Data);