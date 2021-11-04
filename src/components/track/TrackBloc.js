import TracksRepository from './TrackRepository';

// GET SINGLE PRODUCT
const singleProduct = async (params) => {
  try {
    const res = await TracksRepository.singleProduct(params);
    return res;
  } catch (e) {
    const errorMessage = {
      statuscode: 400,
      error: e.response
    };
    throw errorMessage;
  }
};

const TracksBloc = {
  singleProduct
};

export default TracksBloc;
